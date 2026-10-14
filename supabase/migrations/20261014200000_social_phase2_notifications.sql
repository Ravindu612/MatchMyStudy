-- =====================================================================
-- MatchMyStudy social phase 2, part 2: in-app notifications
--
-- In-app only. This file does not send email.
--
-- Depends on phase 1 (profiles, follows, blocks, posts, post_likes,
-- comments, reports, is_blocked_between) and phase 2 messages
-- (conversations, messages).
--
-- Rows are written only by SECURITY DEFINER triggers. There is no insert
-- policy and authenticated has no insert grant, so a signed-in client
-- cannot create a notification.
--
-- Recipients can select their own rows and update read_at. They cannot
-- change any other column (column grant plus protect_notification_update).
--
-- INSERT / UPDATE ... RETURNING:
--   PostgREST `.select()` after a write is INSERT or UPDATE ... RETURNING,
--   and Postgres applies the SELECT policy to the new row. The posts bug
--   was a SELECT policy that looked the new row up again in public.posts;
--   that lookup cannot see the row yet, so the write failed.
--   notifications_select is only `recipient_id = auth.uid()`. It does not
--   call a function that reads public.notifications. Mark-read can use
--   RETURNING. The triggers insert as the function owner, which bypasses
--   RLS, so creating a like, comment, follow, or message does not depend
--   on a notifications insert policy.
--
-- Likes are deduped. Unliking and liking the same post again does not
-- insert a second row for that recipient, actor, and post.
--
-- Self-actions are skipped. A block in either direction skips the
-- notification. Report resolutions notify the reporter when status
-- becomes actioned or dismissed, unless the reviewer is the reporter
-- or either person has blocked the other.
-- =====================================================================

do $preflight$
begin
  if to_regclass('public.profiles') is null
     or to_regclass('public.follows') is null
     or to_regclass('public.blocks') is null
     or to_regclass('public.posts') is null
     or to_regclass('public.post_likes') is null
     or to_regclass('public.comments') is null
     or to_regclass('public.reports') is null
     or to_regclass('public.conversations') is null
     or to_regclass('public.messages') is null then
    raise exception
      'Refusing to migrate. Phase 1 social tables and the phase 2 messages tables must already exist.';
  end if;

  if to_regprocedure('public.is_blocked_between(uuid,uuid)') is null then
    raise exception 'public.is_blocked_between(uuid,uuid) must already exist.';
  end if;
end
$preflight$;

-- ---------- Types and table ----------

create type public.notification_type as enum (
  'like',
  'comment',
  'follow',
  'message',
  'report_resolved'
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null,
  actor_id uuid,
  type public.notification_type not null,
  post_id uuid,
  comment_id uuid,
  conversation_id uuid,
  message_id uuid,
  profile_id uuid,
  report_id uuid,
  read_at timestamptz,
  created_at timestamptz not null default now(),
  constraint notifications_recipient_id_fkey
    foreign key (recipient_id) references public.profiles (id) on delete cascade,
  constraint notifications_actor_id_fkey
    foreign key (actor_id) references public.profiles (id) on delete cascade,
  constraint notifications_post_id_fkey
    foreign key (post_id) references public.posts (id) on delete cascade,
  constraint notifications_comment_id_fkey
    foreign key (comment_id) references public.comments (id) on delete cascade,
  constraint notifications_conversation_id_fkey
    foreign key (conversation_id) references public.conversations (id) on delete cascade,
  constraint notifications_message_id_fkey
    foreign key (message_id) references public.messages (id) on delete cascade,
  constraint notifications_profile_id_fkey
    foreign key (profile_id) references public.profiles (id) on delete cascade,
  constraint notifications_report_id_fkey
    foreign key (report_id) references public.reports (id) on delete cascade,
  constraint notifications_refs check (
    case type
      when 'like' then
        actor_id is not null
        and post_id is not null
        and comment_id is null
        and conversation_id is null
        and message_id is null
        and profile_id is null
        and report_id is null
      when 'comment' then
        actor_id is not null
        and post_id is not null
        and comment_id is not null
        and conversation_id is null
        and message_id is null
        and profile_id is null
        and report_id is null
      when 'follow' then
        actor_id is not null
        and profile_id is not null
        and post_id is null
        and comment_id is null
        and conversation_id is null
        and message_id is null
        and report_id is null
      when 'message' then
        actor_id is not null
        and conversation_id is not null
        and message_id is not null
        and post_id is null
        and comment_id is null
        and profile_id is null
        and report_id is null
      when 'report_resolved' then
        report_id is not null
      else false
    end
  )
);

create index notifications_recipient_created_idx
  on public.notifications (recipient_id, created_at desc);

create index notifications_recipient_unread_idx
  on public.notifications (recipient_id)
  where read_at is null;

-- One like notification per recipient, actor, and post. A later like of
-- the same post does not insert another row.
create unique index notifications_like_once
  on public.notifications (recipient_id, actor_id, post_id)
  where type = 'like';

comment on table public.notifications is
  'In-app notifications. Clients can read their own rows and set read_at. Triggers insert rows; there is no client insert.';

comment on column public.notifications.recipient_id is
  'Profile that can read this row.';

comment on column public.notifications.actor_id is
  'Profile that caused the notification. Null when a report is resolved without reviewed_by.';

comment on column public.notifications.read_at is
  'When the recipient marked it read. Null means unread. The only column a recipient may update.';

-- ---------- Triggers ----------
-- Each function is SECURITY DEFINER so the insert bypasses RLS. The owner
-- bypasses row security unless FORCE ROW LEVEL SECURITY is set; this table
-- does not force it. search_path is pinned.

create or replace function public.notify_on_like()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
declare
  author uuid;
begin
  select p.author_id
  into author
  from public.posts p
  where p.id = new.post_id
    and p.deleted_at is null
    and p.status = 'active';

  if author is null or author = new.user_id then
    return new;
  end if;

  if public.is_blocked_between(author, new.user_id) then
    return new;
  end if;

  insert into public.notifications (recipient_id, actor_id, type, post_id)
  values (author, new.user_id, 'like', new.post_id)
  on conflict (recipient_id, actor_id, post_id) where type = 'like' do nothing;

  return new;
end;
$fn$;

create trigger post_likes_notify
  after insert on public.post_likes
  for each row
  execute function public.notify_on_like();

create or replace function public.notify_on_comment()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
declare
  author uuid;
begin
  if new.deleted_at is not null or new.status is distinct from 'active' then
    return new;
  end if;

  select p.author_id
  into author
  from public.posts p
  where p.id = new.post_id
    and p.deleted_at is null
    and p.status = 'active';

  if author is null or author = new.author_id then
    return new;
  end if;

  if public.is_blocked_between(author, new.author_id) then
    return new;
  end if;

  insert into public.notifications (recipient_id, actor_id, type, post_id, comment_id)
  values (author, new.author_id, 'comment', new.post_id, new.id);

  return new;
end;
$fn$;

create trigger comments_notify
  after insert on public.comments
  for each row
  execute function public.notify_on_comment();

create or replace function public.notify_on_follow()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if new.follower_id = new.following_id then
    return new;
  end if;

  if public.is_blocked_between(new.follower_id, new.following_id) then
    return new;
  end if;

  insert into public.notifications (recipient_id, actor_id, type, profile_id)
  values (new.following_id, new.follower_id, 'follow', new.follower_id);

  return new;
end;
$fn$;

create trigger follows_notify
  after insert on public.follows
  for each row
  execute function public.notify_on_follow();

create or replace function public.notify_on_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
declare
  recipient uuid;
begin
  if new.deleted_at is not null then
    return new;
  end if;

  select m.user_id
  into recipient
  from public.conversation_members m
  where m.conversation_id = new.conversation_id
    and m.user_id <> new.sender_id
  limit 1;

  if recipient is null or recipient = new.sender_id then
    return new;
  end if;

  if public.is_blocked_between(recipient, new.sender_id) then
    return new;
  end if;

  insert into public.notifications (
    recipient_id, actor_id, type, conversation_id, message_id
  ) values (
    recipient, new.sender_id, 'message', new.conversation_id, new.id
  );

  return new;
end;
$fn$;

create trigger messages_notify
  after insert on public.messages
  for each row
  execute function public.notify_on_message();

create or replace function public.notify_on_report_resolved()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
declare
  target_post uuid;
  target_comment uuid;
  target_conversation uuid;
  target_message uuid;
  target_profile uuid;
begin
  if new.status::text not in ('actioned', 'dismissed') then
    return new;
  end if;

  if old.status::text in ('actioned', 'dismissed') then
    return new;
  end if;

  if new.reviewed_by is not null and new.reviewed_by = new.reporter_id then
    return new;
  end if;

  if new.reviewed_by is not null
     and public.is_blocked_between(new.reporter_id, new.reviewed_by) then
    return new;
  end if;

  -- Compare as text. report_target gained 'message' in the messages
  -- migration; a label added in the same transaction cannot be cast yet.
  if new.target_type::text = 'post' then
    target_post := new.target_id;
  elsif new.target_type::text = 'comment' then
    target_comment := new.target_id;
    select c.post_id into target_post
    from public.comments c
    where c.id = new.target_id;
  elsif new.target_type::text = 'profile' then
    target_profile := new.target_id;
  elsif new.target_type::text = 'message' then
    target_message := new.target_id;
    select m.conversation_id into target_conversation
    from public.messages m
    where m.id = new.target_id;
  end if;

  insert into public.notifications (
    recipient_id,
    actor_id,
    type,
    post_id,
    comment_id,
    conversation_id,
    message_id,
    profile_id,
    report_id
  ) values (
    new.reporter_id,
    new.reviewed_by,
    'report_resolved',
    target_post,
    target_comment,
    target_conversation,
    target_message,
    target_profile,
    new.id
  );

  return new;
end;
$fn$;

create trigger reports_notify_resolved
  after update of status on public.reports
  for each row
  execute function public.notify_on_report_resolved();

create or replace function public.protect_notification_update()
returns trigger
language plpgsql
set search_path = public
as $fn$
begin
  if new.id is distinct from old.id
     or new.recipient_id is distinct from old.recipient_id
     or new.actor_id is distinct from old.actor_id
     or new.type is distinct from old.type
     or new.post_id is distinct from old.post_id
     or new.comment_id is distinct from old.comment_id
     or new.conversation_id is distinct from old.conversation_id
     or new.message_id is distinct from old.message_id
     or new.profile_id is distinct from old.profile_id
     or new.report_id is distinct from old.report_id
     or new.created_at is distinct from old.created_at then
    raise exception 'Only read_at can be updated.';
  end if;

  return new;
end;
$fn$;

create trigger notifications_protect_update
  before update on public.notifications
  for each row
  execute function public.protect_notification_update();

-- ---------- Row level security ----------
-- notifications_select does not read public.notifications again.

alter table public.notifications enable row level security;

create policy notifications_select
  on public.notifications
  for select
  to authenticated
  using (recipient_id = auth.uid());

create policy notifications_update_read
  on public.notifications
  for update
  to authenticated
  using (recipient_id = auth.uid())
  with check (recipient_id = auth.uid());

-- ---------- Privileges ----------
-- update is limited to read_at. There is no insert or delete grant.

revoke all on table public.notifications from public, anon, authenticated;
grant select on table public.notifications to authenticated;
grant update (read_at) on table public.notifications to authenticated;
grant all on table public.notifications to service_role;

revoke all on function public.notify_on_like() from public;
grant execute on function public.notify_on_like() to authenticated, service_role;

revoke all on function public.notify_on_comment() from public;
grant execute on function public.notify_on_comment() to authenticated, service_role;

revoke all on function public.notify_on_follow() from public;
grant execute on function public.notify_on_follow() to authenticated, service_role;

revoke all on function public.notify_on_message() from public;
grant execute on function public.notify_on_message() to authenticated, service_role;

revoke all on function public.notify_on_report_resolved() from public;
grant execute on function public.notify_on_report_resolved() to authenticated, service_role;

revoke all on function public.protect_notification_update() from public;
grant execute on function public.protect_notification_update() to authenticated, service_role;

-- ---------- Realtime ----------
-- supabase_realtime exists on hosted Supabase. Local tests create it.
-- replica identity full so UPDATE events include recipient_id for filters.

alter table public.notifications replica identity full;

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
      and tablename = 'notifications'
  ) then
    alter publication supabase_realtime add table public.notifications;
  end if;
end
$realtime$;
