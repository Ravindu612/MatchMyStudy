-- =====================================================================
-- MatchMyStudy social phase 2, part 1: 1:1 text messages
--
-- Text only. No chat media, no video, no notifications.
--
-- Depends on the phase 1 social migration (profiles, follows, blocks,
-- reports, is_admin, is_blocked_between, profile_role, report_target).
--
-- Anti-spam, enforced inside get_or_create_dm and on every insert:
--   * A new DM requires a follow in either direction.
--   * A block in either direction rejects the DM and later messages.
--   * A consultant (profiles.role = consultant, or account_type =
--     consultant) can message a student only when that student follows
--     them or has already sent a message in the conversation.
--     "Student" is account_type student or current_student.
--   * Existing conversations stay open after an unfollow. A later block
--     still stops new messages. Members can keep reading history.
--
-- INSERT ... RETURNING:
--   PostgREST `.select()` after an insert is INSERT ... RETURNING, and
--   Postgres applies the SELECT policy to the new row. The posts bug was
--   a SELECT policy that looked the new row up again in public.posts;
--   that lookup cannot see the row yet, so the insert failed.
--   messages_select only checks conversation membership, which already
--   exists before the message is inserted. It does not read public.messages
--   by the new id. The regression test inserts with RETURNING under the
--   authenticated role.
--
-- report_target gains 'message'. That new label is not used in this file:
-- PostgreSQL will not accept a value added in the same transaction. The
-- report trigger compares target_type::text instead.
-- =====================================================================

do $preflight$
begin
  if to_regclass('public.profiles') is null
     or to_regclass('public.follows') is null
     or to_regclass('public.blocks') is null
     or to_regclass('public.reports') is null then
    raise exception
      'Refusing to migrate. Phase 1 tables profiles, follows, blocks, and reports must already exist.';
  end if;

  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public'
      and t.typname = 'report_target'
  ) then
    raise exception 'public.report_target is missing. Apply the phase 1 social migration first.';
  end if;

  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public'
      and t.typname = 'profile_role'
  ) then
    raise exception 'public.profile_role is missing. Apply the phase 1 social migration first.';
  end if;

  if to_regprocedure('public.is_admin(uuid)') is null
     or to_regprocedure('public.is_blocked_between(uuid,uuid)') is null then
    raise exception 'public.is_admin(uuid) and public.is_blocked_between(uuid,uuid) must already exist.';
  end if;
end
$preflight$;

-- ---------- Tables ----------
-- dm_key is the sorted pair of member ids. It is the uniqueness rule for
-- one conversation per pair. Group chats are not part of this migration.

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  dm_key text not null,
  constraint conversations_dm_key_key unique (dm_key),
  constraint conversations_dm_key_format check (
    dm_key ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
    and split_part(dm_key, ':', 1) < split_part(dm_key, ':', 2)
  )
);

comment on table public.conversations is
  'One row per direct message. dm_key is the sorted uuid pair so the same two people cannot open a second thread.';

create table public.conversation_members (
  conversation_id uuid not null,
  user_id uuid not null,
  last_read_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (conversation_id, user_id),
  constraint conversation_members_conversation_id_fkey
    foreign key (conversation_id) references public.conversations (id) on delete cascade,
  constraint conversation_members_user_id_fkey
    foreign key (user_id) references public.profiles (id) on delete cascade
);

create index conversation_members_user_idx
  on public.conversation_members (user_id);

comment on column public.conversation_members.last_read_at is
  'When this member last opened the thread. Null means they have not read it. Unread messages are newer than this and sent by the other person.';

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null,
  sender_id uuid not null,
  body text not null,
  created_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint messages_conversation_id_fkey
    foreign key (conversation_id) references public.conversations (id) on delete cascade,
  constraint messages_sender_id_fkey
    foreign key (sender_id) references public.profiles (id) on delete cascade,
  constraint messages_body_len check (
    char_length(body) between 1 and 2000
    and char_length(btrim(body)) >= 1
  )
);

create index messages_conversation_created_idx
  on public.messages (conversation_id, created_at desc);

create index messages_conversation_sender_idx
  on public.messages (conversation_id, sender_id);

comment on table public.messages is
  'Text-only direct messages. deleted_at is a soft delete: the row stays so the thread and reports still resolve. Body is unchanged so moderators can read a reported message.';

-- ---------- Helpers ----------

create or replace function public.dm_pair_key(a uuid, b uuid)
returns text
language sql
immutable
as $fn$
  select case
    when a::text < b::text then a::text || ':' || b::text
    else b::text || ':' || a::text
  end;
$fn$;

create or replace function public.is_conversation_member(p_conversation uuid, p_uid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $fn$
  select p_uid is not null
    and exists (
      select 1
      from public.conversation_members m
      where m.conversation_id = p_conversation
        and m.user_id = p_uid
    );
$fn$;

comment on function public.is_conversation_member(uuid, uuid) is
  'Membership lookup used by RLS. Security definer so policies do not recurse through conversation_members. Does not read public.messages.';

create or replace function public.is_consultant_account(p_uid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $fn$
  select exists (
    select 1
    from public.profiles p
    where p.id = p_uid
      and (p.role = 'consultant' or p.account_type = 'consultant')
  );
$fn$;

create or replace function public.is_student_account(p_uid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $fn$
  select exists (
    select 1
    from public.profiles p
    where p.id = p_uid
      and p.account_type in ('student', 'current_student')
  );
$fn$;

-- Raises a specific error (42501) instead of returning false, so PostgREST
-- shows the rule that failed. A false RLS check would only say
-- "new row violates row-level security policy".
create or replace function public.assert_can_send_message(p_conversation uuid, p_sender uuid)
returns boolean
language plpgsql
stable
security definer
set search_path = public
as $fn$
declare
  other_id uuid;
  other_count int;
begin
  if p_sender is null or p_sender is distinct from auth.uid() then
    raise exception 'You can''t message this account.'
      using errcode = '42501';
  end if;

  if not public.is_conversation_member(p_conversation, p_sender) then
    raise exception 'This conversation is unavailable.'
      using errcode = '42501';
  end if;

  select count(*)
  into other_count
  from public.conversation_members m
  where m.conversation_id = p_conversation
    and m.user_id <> p_sender;

  if other_count <> 1 then
    raise exception 'This conversation is unavailable.'
      using errcode = '42501';
  end if;

  select m.user_id
  into other_id
  from public.conversation_members m
  where m.conversation_id = p_conversation
    and m.user_id <> p_sender;

  if public.is_blocked_between(p_sender, other_id) then
    raise exception 'You can''t message this account.'
      using errcode = '42501';
  end if;

  if public.is_consultant_account(p_sender) and public.is_student_account(other_id) then
    if not exists (
      select 1
      from public.follows f
      where f.follower_id = other_id
        and f.following_id = p_sender
    ) and not exists (
      select 1
      from public.messages msg
      where msg.conversation_id = p_conversation
        and msg.sender_id = other_id
    ) then
      raise exception 'Consultants can only message students who follow them or message them first.'
        using errcode = '42501';
    end if;
  end if;

  return true;
end;
$fn$;

create or replace function public.get_or_create_dm(other_user uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $fn$
declare
  me uuid := auth.uid();
  pair text;
  existing uuid;
  created uuid;
  follows_me boolean;
  i_follow boolean;
begin
  if me is null then
    raise exception 'Log in to continue.'
      using errcode = '28000';
  end if;

  if not exists (select 1 from public.profiles p where p.id = me) then
    raise exception 'This profile is unavailable.'
      using errcode = '42501';
  end if;

  if other_user is null or other_user = me then
    raise exception 'You can''t message yourself.'
      using errcode = '42501';
  end if;

  if not exists (select 1 from public.profiles p where p.id = other_user) then
    raise exception 'This profile is unavailable.'
      using errcode = '42501';
  end if;

  if public.is_blocked_between(me, other_user) then
    raise exception 'You can''t message this account.'
      using errcode = '42501';
  end if;

  pair := public.dm_pair_key(me, other_user);
  -- Serialize the two people so a double-click cannot create two rows.
  perform pg_advisory_xact_lock(hashtext(pair)::bigint);

  select c.id
  into existing
  from public.conversations c
  where c.dm_key = pair;

  if existing is not null then
    return existing;
  end if;

  select exists (
    select 1
    from public.follows f
    where f.follower_id = other_user
      and f.following_id = me
  )
  into follows_me;

  select exists (
    select 1
    from public.follows f
    where f.follower_id = me
      and f.following_id = other_user
  )
  into i_follow;

  if not follows_me and not i_follow then
    raise exception 'You can only message someone you follow or who follows you.'
      using errcode = '42501';
  end if;

  -- No row exists yet, so "messaged first" cannot apply. The student has to
  -- open the thread (they can, because a follow exists) before the consultant
  -- can write, unless the student already follows the consultant.
  if public.is_consultant_account(me)
     and public.is_student_account(other_user)
     and not follows_me then
    raise exception 'Consultants can only message students who follow them or message them first.'
      using errcode = '42501';
  end if;

  begin
    insert into public.conversations (dm_key)
    values (pair)
    returning id into created;
  exception
    when unique_violation then
      select c.id
      into created
      from public.conversations c
      where c.dm_key = pair;

      if created is null then
        raise;
      end if;

      return created;
  end;

  insert into public.conversation_members (conversation_id, user_id)
  values (created, me), (created, other_user);

  return created;
end;
$fn$;

comment on function public.get_or_create_dm(uuid) is
  'Opens the 1:1 thread between auth.uid() and other_user, creating it when the follow and consultant rules allow. Returns the existing thread after an unfollow. Refuses blocks.';

create or replace function public.mark_conversation_read(conversation uuid)
returns timestamptz
language plpgsql
security definer
set search_path = public
as $fn$
declare
  me uuid := auth.uid();
  read_at timestamptz;
begin
  if me is null then
    raise exception 'Log in to continue.'
      using errcode = '28000';
  end if;

  update public.conversation_members
  set last_read_at = now()
  where conversation_id = conversation
    and user_id = me
  returning last_read_at into read_at;

  if read_at is null then
    raise exception 'This conversation is unavailable.'
      using errcode = '42501';
  end if;

  return read_at;
end;
$fn$;

comment on function public.mark_conversation_read(uuid) is
  'Sets last_read_at to the database clock for the caller. The update runs as the owner so it does not depend on UPDATE ... RETURNING under RLS.';

-- ---------- Triggers ----------

create or replace function public.limit_dm_members()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
declare
  member_count int;
begin
  select count(*)
  into member_count
  from public.conversation_members m
  where m.conversation_id = new.conversation_id;

  if member_count > 2 then
    raise exception 'Direct messages have two participants.';
  end if;

  return new;
end;
$fn$;

create trigger conversation_members_limit
  after insert on public.conversation_members
  for each row
  execute function public.limit_dm_members();

create or replace function public.protect_member_update()
returns trigger
language plpgsql
set search_path = public
as $fn$
begin
  if new.conversation_id is distinct from old.conversation_id
     or new.user_id is distinct from old.user_id
     or new.created_at is distinct from old.created_at then
    raise exception 'Only last_read_at can be updated.';
  end if;

  return new;
end;
$fn$;

create trigger conversation_members_protect
  before update on public.conversation_members
  for each row
  execute function public.protect_member_update();

create or replace function public.rate_limit_messages()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if auth.uid() is null then
    return new;
  end if;

  if (
    select count(*)
    from public.messages
    where sender_id = new.sender_id
      and created_at > now() - interval '1 hour'
  ) >= 120 then
    raise exception 'Rate limit: too many messages, try again later';
  end if;

  return new;
end;
$fn$;

create trigger messages_rate_limit
  before insert on public.messages
  for each row
  execute function public.rate_limit_messages();

create or replace function public.messages_before_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  -- Service role and migrations have no auth.uid(). Member apps always do.
  if auth.uid() is null then
    return new;
  end if;

  if new.sender_id is distinct from auth.uid() or new.deleted_at is not null then
    raise exception 'You can''t message this account.'
      using errcode = '42501';
  end if;

  perform public.assert_can_send_message(new.conversation_id, new.sender_id);
  return new;
end;
$fn$;

create trigger messages_enforce_send_rules
  before insert on public.messages
  for each row
  execute function public.messages_before_insert();

create or replace function public.protect_message_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if new.id is distinct from old.id
     or new.conversation_id is distinct from old.conversation_id
     or new.sender_id is distinct from old.sender_id
     or new.body is distinct from old.body
     or new.created_at is distinct from old.created_at then
    raise exception 'Messages can only be deleted.';
  end if;

  if new.deleted_at is null or (old.deleted_at is not null and new.deleted_at is distinct from old.deleted_at) then
    raise exception 'Messages can only be deleted.';
  end if;

  if auth.uid() is not null
     and not public.is_admin()
     and old.sender_id is distinct from auth.uid() then
    raise exception 'Messages can only be deleted.';
  end if;

  return new;
end;
$fn$;

create trigger messages_protect_update
  before update on public.messages
  for each row
  execute function public.protect_message_update();

-- ---------- Message reports ----------
-- Add the label first. Nothing later in this migration casts it.

alter type public.report_target add value if not exists 'message';

create or replace function public.enforce_message_report()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
declare
  msg_sender uuid;
  msg_conversation uuid;
  msg_deleted timestamptz;
begin
  if new.target_type::text <> 'message' then
    return new;
  end if;

  select m.sender_id, m.conversation_id, m.deleted_at
  into msg_sender, msg_conversation, msg_deleted
  from public.messages m
  where m.id = new.target_id;

  if msg_sender is null or msg_deleted is not null then
    raise exception 'This message is unavailable.';
  end if;

  if msg_sender = new.reporter_id then
    raise exception 'You can''t report your own content.';
  end if;

  if not public.is_conversation_member(msg_conversation, new.reporter_id)
     and not public.is_admin(new.reporter_id) then
    raise exception 'This message is unavailable.';
  end if;

  return new;
end;
$fn$;

create trigger reports_enforce_message
  before insert on public.reports
  for each row
  execute function public.enforce_message_report();

-- ---------- Row level security ----------
-- messages_select intentionally does not query public.messages. See header.

alter table public.conversations enable row level security;
alter table public.conversation_members enable row level security;
alter table public.messages enable row level security;

create policy conversations_select
  on public.conversations
  for select
  to authenticated
  using (
    public.is_admin()
    or public.is_conversation_member(id, auth.uid())
  );

create policy conversation_members_select
  on public.conversation_members
  for select
  to authenticated
  using (
    public.is_admin()
    or public.is_conversation_member(conversation_id, auth.uid())
  );

create policy conversation_members_update_read
  on public.conversation_members
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy messages_select
  on public.messages
  for select
  to authenticated
  using (
    public.is_admin()
    or public.is_conversation_member(conversation_id, auth.uid())
  );

create policy messages_insert
  on public.messages
  for insert
  to authenticated
  with check (
    auth.uid() = sender_id
    and deleted_at is null
    and public.is_conversation_member(conversation_id, auth.uid())
    and public.assert_can_send_message(conversation_id, auth.uid())
  );

create policy messages_update_delete
  on public.messages
  for update
  to authenticated
  using (auth.uid() = sender_id or public.is_admin())
  with check (auth.uid() = sender_id or public.is_admin());

-- ---------- Inbox view ----------
-- security_invoker so the caller's RLS applies to the underlying tables.
-- The WHERE clause still limits rows to auth.uid().

create view public.my_conversation_summaries
with (security_invoker = true, security_barrier = true) as
select
  cm.conversation_id,
  other.user_id as other_user_id,
  cm.last_read_at,
  c.created_at as conversation_created_at,
  last_msg.body as last_body,
  last_msg.created_at as last_message_at,
  last_msg.sender_id as last_sender_id,
  last_msg.deleted_at as last_deleted_at,
  coalesce(unread.unread_count, 0) as unread_count
from public.conversation_members cm
join public.conversations c
  on c.id = cm.conversation_id
join public.conversation_members other
  on other.conversation_id = cm.conversation_id
 and other.user_id <> cm.user_id
left join lateral (
  select m.body, m.created_at, m.sender_id, m.deleted_at
  from public.messages m
  where m.conversation_id = cm.conversation_id
  order by m.created_at desc
  limit 1
) last_msg on true
left join lateral (
  select count(*)::integer as unread_count
  from public.messages m
  where m.conversation_id = cm.conversation_id
    and m.sender_id <> cm.user_id
    and m.deleted_at is null
    and (cm.last_read_at is null or m.created_at > cm.last_read_at)
) unread on true
where cm.user_id = auth.uid();

comment on view public.my_conversation_summaries is
  'Inbox for auth.uid(): the other person, the latest message, and the unread count from last_read_at.';

-- ---------- Privileges ----------
-- No insert policy on conversations or conversation_members. Clients open a
-- thread only through get_or_create_dm. anon cannot read messages.

revoke all on table public.conversations from public, anon, authenticated;
grant select on table public.conversations to authenticated;
grant all on table public.conversations to service_role;

revoke all on table public.conversation_members from public, anon, authenticated;
grant select, update on table public.conversation_members to authenticated;
grant all on table public.conversation_members to service_role;

revoke all on table public.messages from public, anon, authenticated;
grant select, insert, update on table public.messages to authenticated;
grant all on table public.messages to service_role;

revoke all on table public.my_conversation_summaries from public, anon, authenticated;
grant select on table public.my_conversation_summaries to authenticated;
grant all on table public.my_conversation_summaries to service_role;

revoke all on function public.dm_pair_key(uuid, uuid) from public;
grant execute on function public.dm_pair_key(uuid, uuid) to authenticated, service_role;

revoke all on function public.is_conversation_member(uuid, uuid) from public;
grant execute on function public.is_conversation_member(uuid, uuid) to authenticated, service_role;

revoke all on function public.is_consultant_account(uuid) from public;
grant execute on function public.is_consultant_account(uuid) to authenticated, service_role;

revoke all on function public.is_student_account(uuid) from public;
grant execute on function public.is_student_account(uuid) to authenticated, service_role;

revoke all on function public.assert_can_send_message(uuid, uuid) from public;
grant execute on function public.assert_can_send_message(uuid, uuid) to authenticated, service_role;

revoke all on function public.get_or_create_dm(uuid) from public;
grant execute on function public.get_or_create_dm(uuid) to authenticated, service_role;

revoke all on function public.mark_conversation_read(uuid) from public;
grant execute on function public.mark_conversation_read(uuid) to authenticated, service_role;

-- Trigger functions are invoked as the signed-in user unless they are
-- security definer. Grant execute either way so an insert is not rejected
-- with "permission denied for function".
revoke all on function public.limit_dm_members() from public;
grant execute on function public.limit_dm_members() to authenticated, service_role;

revoke all on function public.protect_member_update() from public;
grant execute on function public.protect_member_update() to authenticated, service_role;

revoke all on function public.rate_limit_messages() from public;
grant execute on function public.rate_limit_messages() to authenticated, service_role;

revoke all on function public.messages_before_insert() from public;
grant execute on function public.messages_before_insert() to authenticated, service_role;

revoke all on function public.protect_message_update() from public;
grant execute on function public.protect_message_update() to authenticated, service_role;

revoke all on function public.enforce_message_report() from public;
grant execute on function public.enforce_message_report() to authenticated, service_role;

-- ---------- Realtime ----------
-- supabase_realtime exists on hosted Supabase. Local tests create it.
-- replica identity full so UPDATE (soft delete) events include the row.

alter table public.messages replica identity full;

do $realtime$
begin
  if not exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    create publication supabase_realtime;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'messages'
  ) then
    alter publication supabase_realtime add table public.messages;
  end if;
end
$realtime$;

notify pgrst, 'reload schema';
