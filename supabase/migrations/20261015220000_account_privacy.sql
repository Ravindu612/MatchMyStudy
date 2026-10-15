-- =====================================================================
-- Account export and deletion
--
-- Safe to run more than once. It only relaxes foreign keys that would
-- otherwise erase rows we have to keep, and it replaces functions in place.
--
-- Messages the person sent stay in the other person's conversation. The
-- sender link becomes null and the app shows "Deleted user". The body is
-- unchanged so the remaining participant still has the thread.
--
-- Reports stay for moderation. reporter_id and reviewed_by become null
-- instead of taking the report with them. target_id is not a foreign key,
-- so a report about a profile, post, comment, or message still has its
-- target id and reason after the account is gone. Posts and comments are
-- removed with the account. Reported messages stay, with a null sender.
--
-- Consultant listings the person created (created_by_consultant) are
-- removed, including their stories, promotions, claims, verification
-- applications, and reviews of that page. A directory listing they only
-- claimed stays public: owner_id is cleared, the claim flag and Pro flags
-- are turned off, and Stripe ids are cleared. Their claim form, the
-- reviews they wrote, and their verification applications are removed
-- either way. Business contact fields on a claimed directory listing are
-- left as published, because those rows were seeded as agency listings.
--
-- No new SELECT policy is added. Export is a security definer function
-- that can only read auth.uid(). Deletion is service_role only; the
-- before-delete trigger does the same cleanup if the profile row is
-- removed another way.
-- =====================================================================

do $preflight$
begin
  if to_regclass('public.profiles') is null
     or to_regclass('public.posts') is null
     or to_regclass('public.comments') is null
     or to_regclass('public.post_likes') is null
     or to_regclass('public.follows') is null
     or to_regclass('public.blocks') is null
     or to_regclass('public.reports') is null
     or to_regclass('public.conversations') is null
     or to_regclass('public.conversation_members') is null
     or to_regclass('public.messages') is null
     or to_regclass('public.notifications') is null then
    raise exception
      'Refusing to migrate. Social profile, content, message, and notification tables must already exist.';
  end if;
end
$preflight$;

-- ---------- Keep messages and reports when a profile disappears ----------

alter table public.messages alter column sender_id drop not null;

alter table public.reports alter column reporter_id drop not null;

do $messages_fk$
declare
  delete_action "char";
begin
  select con.confdeltype
  into delete_action
  from pg_constraint
  where conname = 'messages_sender_id_fkey'
    and conrelid = 'public.messages'::regclass;

  if delete_action is distinct from 'n' then
    alter table public.messages drop constraint if exists messages_sender_id_fkey;
    alter table public.messages
      add constraint messages_sender_id_fkey
      foreign key (sender_id) references public.profiles (id) on delete set null;
  end if;
end
$messages_fk$;

do $reports_fk$
declare
  delete_action "char";
begin
  select con.confdeltype
  into delete_action
  from pg_constraint
  where conname = 'reports_reporter_id_fkey'
    and conrelid = 'public.reports'::regclass;

  if delete_action is distinct from 'n' then
    alter table public.reports drop constraint if exists reports_reporter_id_fkey;
    alter table public.reports
      add constraint reports_reporter_id_fkey
      foreign key (reporter_id) references public.profiles (id) on delete set null;
  end if;
end
$reports_fk$;

comment on column public.messages.sender_id is
  'Null after the sender deletes their account. The body stays for the other participant. The app shows Deleted user.';

comment on column public.reports.reporter_id is
  'Null after the reporter deletes their account. The report stays for moderation.';

-- A claimed directory listing must survive the owner's profile delete.
do $consultant_owner$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'owner_id'
      and is_nullable = 'NO'
  ) then
    alter table public.consultants alter column owner_id drop not null;
  end if;
end
$consultant_owner$;

do $consultant_fk$
declare
  constraint_name text;
  delete_action "char";
begin
  if to_regclass('public.consultants') is null then
    return;
  end if;

  for constraint_name, delete_action in
    select con.conname, con.confdeltype
    from pg_constraint con
    join pg_class rel on rel.oid = con.conrelid
    join pg_namespace nsp on nsp.oid = rel.relnamespace
    join pg_class ref on ref.oid = con.confrelid
    join pg_namespace refn on refn.oid = ref.relnamespace
    join pg_attribute att
      on att.attrelid = rel.oid
     and att.attnum = any (con.conkey)
    where nsp.nspname = 'public'
      and rel.relname = 'consultants'
      and att.attname = 'owner_id'
      and con.contype = 'f'
      and refn.nspname = 'public'
      and ref.relname = 'profiles'
      and con.confdeltype = 'c'
  loop
    execute format('alter table public.consultants drop constraint %I', constraint_name);
    execute format(
      'alter table public.consultants add constraint %I foreign key (owner_id) references public.profiles (id) on delete set null',
      constraint_name
    );
  end loop;
end
$consultant_fk$;

-- ---------- Message update rules ----------
-- Clearing sender_id is the account-deletion anonymization. Clients still
-- cannot do it: messages_update_delete requires auth.uid() = sender_id on
-- the new row, which fails once sender_id is null. Table owners and the
-- foreign-key action bypass row level security.

create or replace function public.protect_message_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if old.sender_id is not null
     and new.sender_id is null
     and new.id is not distinct from old.id
     and new.conversation_id is not distinct from old.conversation_id
     and new.body is not distinct from old.body
     and new.created_at is not distinct from old.created_at
     and new.deleted_at is not distinct from old.deleted_at then
    return new;
  end if;

  if new.id is distinct from old.id
     or new.conversation_id is distinct from old.conversation_id
     or new.sender_id is distinct from old.sender_id
     or new.body is distinct from old.body
     or new.created_at is distinct from old.created_at then
    raise exception 'Messages can only be deleted.';
  end if;

  if new.deleted_at is null
     or (old.deleted_at is not null and new.deleted_at is distinct from old.deleted_at) then
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

-- A message whose sender was anonymized can still be reported by a member.
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

  if not found or msg_deleted is not null then
    raise exception 'This message is unavailable.';
  end if;

  if msg_sender is not null and msg_sender = new.reporter_id then
    raise exception 'You can''t report your own content.';
  end if;

  if not public.is_conversation_member(msg_conversation, new.reporter_id)
     and not public.is_admin(new.reporter_id) then
    raise exception 'This message is unavailable.';
  end if;

  return new;
end;
$fn$;

-- ---------- Inbox when the other person is gone ----------

drop view if exists public.my_conversation_summaries;

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
left join public.conversation_members other
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
    and m.sender_id is distinct from cm.user_id
    and m.deleted_at is null
    and (cm.last_read_at is null or m.created_at > cm.last_read_at)
) unread on true
where cm.user_id = auth.uid();

comment on view public.my_conversation_summaries is
  'Inbox for auth.uid(). other_user_id is null when that account was deleted; the app shows Deleted user. security_invoker applies the caller RLS.';

revoke all on table public.my_conversation_summaries from public, anon, authenticated;
grant select on table public.my_conversation_summaries to authenticated;
grant all on table public.my_conversation_summaries to service_role;

-- ---------- Consultant cleanup helpers ----------
-- Not granted to clients. The profile delete trigger calls them as owner.

create or replace function public.purge_owned_storage_url(p_url text)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
declare
  marker constant text := '/storage/v1/object/public/';
  tail text;
  bucket text;
  object_path text;
  slash int;
begin
  if p_url is null or position(marker in p_url) = 0 then
    return;
  end if;

  tail := split_part(substr(p_url, position(marker in p_url) + length(marker)), '?', 1);
  tail := regexp_replace(tail, '^/+', '');
  slash := position('/' in tail);

  if slash <= 1 then
    return;
  end if;

  bucket := substr(tail, 1, slash - 1);
  object_path := substr(tail, slash + 1);

  if bucket not in (
    'consultant-logos',
    'consultant-banners',
    'consultant-success-stories',
    'consultant-promotional-content',
    'avatars',
    'post-media',
    'chat-media'
  ) then
    return;
  end if;

  if object_path = '' or position('..' in object_path) > 0 then
    return;
  end if;

  begin
    delete from storage.objects
    where bucket_id = bucket
      and name = object_path;
  exception
    when insufficient_privilege or undefined_table then
      raise warning 'Could not delete storage object %/%', bucket, object_path;
  end;
end;
$fn$;

create or replace function public.purge_consultant_media(p_consultant uuid)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
declare
  media text;
  gallery_type text;
  child_table text;
begin
  if to_regclass('public.consultants') is null then
    return;
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'consultants' and column_name = 'logo'
  ) then
    execute 'select logo from public.consultants where id = $1'
      into media using p_consultant;
    perform public.purge_owned_storage_url(media);
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'consultants' and column_name = 'banner'
  ) then
    execute 'select banner from public.consultants where id = $1'
      into media using p_consultant;
    perform public.purge_owned_storage_url(media);
  end if;

  select data_type
  into gallery_type
  from information_schema.columns
  where table_schema = 'public'
    and table_name = 'consultants'
    and column_name = 'gallery';

  if gallery_type = 'ARRAY' then
    for media in
      execute 'select unnest(gallery) from public.consultants where id = $1'
      using p_consultant
    loop
      perform public.purge_owned_storage_url(media);
    end loop;
  elsif gallery_type = 'jsonb' then
    for media in
      execute $q$
        select jsonb_array_elements_text(gallery)
        from public.consultants
        where id = $1
          and jsonb_typeof(gallery) = 'array'
      $q$
      using p_consultant
    loop
      perform public.purge_owned_storage_url(media);
    end loop;
  end if;

  for child_table in
    select unnest(array[
      'consultant_success_stories',
      'consultant_promotional_content'
    ]::text[])
  loop
    if to_regclass('public.' || child_table) is null then
      continue;
    end if;

    if not exists (
      select 1 from information_schema.columns
      where table_schema = 'public'
        and table_name = child_table
        and column_name = 'image_url'
    ) then
      continue;
    end if;

    for media in
      execute format(
        'select image_url from public.%I where consultant_id = $1',
        child_table
      )
      using p_consultant
    loop
      perform public.purge_owned_storage_url(media);
    end loop;
  end loop;
end;
$fn$;

create or replace function public.delete_matching_rows(
  p_table text,
  p_column text,
  p_value uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if p_table not in (
    'consultant_success_stories',
    'consultant_promotional_content',
    'consultant_verification_applications',
    'consultant_reviews',
    'consultant_claims'
  ) then
    raise exception 'Unexpected table.';
  end if;

  if p_column not in ('consultant_id', 'user_id', 'claimant_id', 'applicant_id') then
    raise exception 'Unexpected column.';
  end if;

  if to_regclass('public.' || p_table) is null then
    return;
  end if;

  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = p_table
      and column_name = p_column
  ) then
    return;
  end if;

  execute format('delete from public.%I where %I = $1', p_table, p_column)
    using p_value;
end;
$fn$;

create or replace function public.null_matching_column(
  p_table text,
  p_column text,
  p_value uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if p_table not in (
    'consultant_verification_applications',
    'consultant_claims',
    'consultants'
  ) then
    raise exception 'Unexpected table.';
  end if;

  if p_column not in ('reviewed_by', 'owner_id') then
    raise exception 'Unexpected column.';
  end if;

  if to_regclass('public.' || p_table) is null then
    return;
  end if;

  if not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = p_table
      and column_name = p_column
      and is_nullable = 'YES'
  ) then
    return;
  end if;

  execute format(
    'update public.%I set %I = null where %I = $1',
    p_table,
    p_column,
    p_column
  )
  using p_value;
end;
$fn$;

create or replace function public.detach_consultant_listing(
  p_consultant uuid,
  p_uid uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
declare
  sets text := 'owner_id = null';
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'consultants' and column_name = 'claimed'
  ) then
    sets := sets || ', claimed = false';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'consultants' and column_name = 'verified'
  ) then
    sets := sets || ', verified = false';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'consultants' and column_name = 'is_pro'
  ) then
    sets := sets || ', is_pro = false';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'stripe_customer_id'
      and is_nullable = 'YES'
  ) then
    sets := sets || ', stripe_customer_id = null';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'stripe_subscription_id'
      and is_nullable = 'YES'
  ) then
    sets := sets || ', stripe_subscription_id = null';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'stripe_subscription_status'
      and is_nullable = 'YES'
  ) then
    sets := sets || ', stripe_subscription_status = null';
  end if;

  execute 'update public.consultants set ' || sets || ' where id = $1 and owner_id = $2'
    using p_consultant, p_uid;
end;
$fn$;

create or replace function public.forget_owned_consultants(p_uid uuid)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
declare
  listing_id uuid;
  created boolean;
  has_created_flag boolean;
begin
  if to_regclass('public.consultants') is null then
    return;
  end if;

  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'owner_id'
  ) then
    return;
  end if;

  select exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'created_by_consultant'
  )
  into has_created_flag;

  if has_created_flag then
    for listing_id, created in
      execute
        'select id, coalesce(created_by_consultant, false) from public.consultants where owner_id = $1'
      using p_uid
    loop
      if created then
        perform public.purge_consultant_media(listing_id);
        perform public.delete_matching_rows('consultant_success_stories', 'consultant_id', listing_id);
        perform public.delete_matching_rows('consultant_promotional_content', 'consultant_id', listing_id);
        perform public.delete_matching_rows('consultant_verification_applications', 'consultant_id', listing_id);
        perform public.delete_matching_rows('consultant_reviews', 'consultant_id', listing_id);
        perform public.delete_matching_rows('consultant_claims', 'consultant_id', listing_id);
        execute 'delete from public.consultants where id = $1 and owner_id = $2'
          using listing_id, p_uid;
      else
        perform public.detach_consultant_listing(listing_id, p_uid);
      end if;
    end loop;
  else
    for listing_id in
      execute 'select id from public.consultants where owner_id = $1'
      using p_uid
    loop
      perform public.detach_consultant_listing(listing_id, p_uid);
    end loop;
  end if;

  perform public.delete_matching_rows('consultant_claims', 'claimant_id', p_uid);
  perform public.delete_matching_rows('consultant_reviews', 'user_id', p_uid);
  perform public.delete_matching_rows('consultant_verification_applications', 'applicant_id', p_uid);
  perform public.null_matching_column('consultant_verification_applications', 'reviewed_by', p_uid);
  perform public.null_matching_column('consultant_claims', 'reviewed_by', p_uid);
end;
$fn$;

create or replace function public.purge_user_storage_folders(p_uid uuid)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
begin
  begin
    delete from storage.objects
    where bucket_id in ('avatars', 'post-media', 'chat-media')
      and split_part(name, '/', 1) = p_uid::text
      and name like p_uid::text || '/%';
  exception
    when insufficient_privilege or undefined_table then
      raise warning 'Could not delete storage folders for %', p_uid;
  end;
end;
$fn$;

-- Runs for every profile delete, including auth.users cascade.
create or replace function public.cleanup_profile_references()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  update public.messages
  set sender_id = null
  where sender_id = old.id;

  delete from public.notifications
  where recipient_id = old.id
     or actor_id = old.id
     or profile_id = old.id;

  update public.reports
  set reporter_id = null
  where reporter_id = old.id;

  update public.reports
  set reviewed_by = null
  where reviewed_by = old.id;

  perform public.forget_owned_consultants(old.id);
  perform public.purge_user_storage_folders(old.id);

  return old;
end;
$fn$;

drop trigger if exists profiles_cleanup_before_delete on public.profiles;

create trigger profiles_cleanup_before_delete
  before delete on public.profiles
  for each row
  execute function public.cleanup_profile_references();

-- ---------- Service-role deletion entry ----------

create or replace function public.delete_user_account(p_uid uuid)
returns void
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if p_uid is null then
    raise exception 'Account is required.'
      using errcode = '22023';
  end if;

  if coalesce(auth.role(), '') <> 'service_role' then
    raise exception 'Not allowed.'
      using errcode = '42501';
  end if;

  delete from public.profiles
  where id = p_uid;

  -- A thread with no remaining members has nobody left to read it.
  delete from public.conversations c
  where position(p_uid::text in c.dm_key) > 0
    and not exists (
      select 1
      from public.conversation_members m
      where m.conversation_id = c.id
    );
end;
$fn$;

comment on function public.delete_user_account(uuid) is
  'Service-role account deletion. The profile trigger anonymizes messages, keeps reports, and removes or detaches consultant listings. Call auth.admin.deleteUser after this.';

-- ---------- Export of the signed-in user's own rows ----------

create or replace function public.export_optional_rows(p_sql text, p_uid uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $fn$
declare
  result jsonb;
begin
  if auth.uid() is distinct from p_uid then
    raise exception 'Not allowed.'
      using errcode = '42501';
  end if;

  execute p_sql into result using p_uid;
  return coalesce(result, '[]'::jsonb);
exception
  when undefined_table or undefined_column then
    return '[]'::jsonb;
end;
$fn$;

create or replace function public.export_my_data()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $fn$
declare
  me uuid := auth.uid();
begin
  if me is null then
    raise exception 'Log in to continue.'
      using errcode = '28000';
  end if;

  return jsonb_build_object(
    'export_version', 1,
    'exported_at', now(),
    'user_id', me,
    'profile', (
      select to_jsonb(p)
      from public.profiles p
      where p.id = me
    ),
    'posts', coalesce((
      select jsonb_agg(to_jsonb(p) order by p.created_at)
      from public.posts p
      where p.author_id = me
    ), '[]'::jsonb),
    'post_media', coalesce((
      select jsonb_agg(to_jsonb(m) order by m.created_at)
      from public.post_media m
      join public.posts p on p.id = m.post_id
      where p.author_id = me
    ), '[]'::jsonb),
    'post_tags', coalesce((
      select jsonb_agg(to_jsonb(t) order by t.target_type, t.target_slug)
      from public.post_tags t
      join public.posts p on p.id = t.post_id
      where p.author_id = me
    ), '[]'::jsonb),
    'comments', coalesce((
      select jsonb_agg(to_jsonb(c) order by c.created_at)
      from public.comments c
      where c.author_id = me
    ), '[]'::jsonb),
    'likes', coalesce((
      select jsonb_agg(to_jsonb(l) order by l.created_at)
      from public.post_likes l
      where l.user_id = me
    ), '[]'::jsonb),
    'follows', coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'follower_id', f.follower_id,
          'following_id', f.following_id,
          'created_at', f.created_at,
          'direction', case when f.follower_id = me then 'following' else 'follower' end
        )
        order by f.created_at
      )
      from public.follows f
      where f.follower_id = me or f.following_id = me
    ), '[]'::jsonb),
    'blocks', coalesce((
      select jsonb_agg(to_jsonb(b) order by b.created_at)
      from public.blocks b
      where b.blocker_id = me
    ), '[]'::jsonb),
    'reports', coalesce((
      select jsonb_agg(to_jsonb(r) order by r.created_at)
      from public.reports r
      where r.reporter_id = me
    ), '[]'::jsonb),
    'conversations', coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'id', c.id,
          'created_at', c.created_at,
          'dm_key', c.dm_key,
          'my_last_read_at', mine.last_read_at,
          'member_ids', (
            select coalesce(jsonb_agg(m.user_id order by m.user_id), '[]'::jsonb)
            from public.conversation_members m
            where m.conversation_id = c.id
          )
        )
        order by c.created_at
      )
      from public.conversations c
      join public.conversation_members mine
        on mine.conversation_id = c.id
       and mine.user_id = me
    ), '[]'::jsonb),
    'messages', coalesce((
      select jsonb_agg(to_jsonb(m) order by m.created_at)
      from public.messages m
      where m.sender_id = me
    ), '[]'::jsonb),
    'notifications', coalesce((
      select jsonb_agg(to_jsonb(n) order by n.created_at)
      from public.notifications n
      where n.recipient_id = me
    ), '[]'::jsonb),
    'consultants', public.export_optional_rows(
      'select coalesce(jsonb_agg(to_jsonb(t)), ''[]''::jsonb) from public.consultants t where t.owner_id = $1',
      me
    ),
    'consultant_claims', public.export_optional_rows(
      'select coalesce(jsonb_agg(to_jsonb(t)), ''[]''::jsonb) from public.consultant_claims t where t.claimant_id = $1',
      me
    ),
    'consultant_reviews', public.export_optional_rows(
      'select coalesce(jsonb_agg(to_jsonb(t)), ''[]''::jsonb) from public.consultant_reviews t where t.user_id = $1',
      me
    ),
    'consultant_verification_applications', public.export_optional_rows(
      'select coalesce(jsonb_agg(to_jsonb(t)), ''[]''::jsonb) from public.consultant_verification_applications t where t.applicant_id = $1',
      me
    ),
    'consultant_success_stories', public.export_optional_rows(
      'select coalesce(jsonb_agg(to_jsonb(t)), ''[]''::jsonb) from public.consultant_success_stories t where t.consultant_id in (select c.id from public.consultants c where c.owner_id = $1)',
      me
    ),
    'consultant_promotional_content', public.export_optional_rows(
      'select coalesce(jsonb_agg(to_jsonb(t)), ''[]''::jsonb) from public.consultant_promotional_content t where t.consultant_id in (select c.id from public.consultants c where c.owner_id = $1)',
      me
    )
  );
end;
$fn$;

comment on function public.export_my_data() is
  'JSON export of auth.uid() only. Messages are the caller''s own sends plus conversation metadata. Blocks are blocks the caller created.';

-- ---------- Privileges ----------

revoke all on function public.purge_owned_storage_url(text) from public, anon, authenticated, service_role;
revoke all on function public.purge_consultant_media(uuid) from public, anon, authenticated, service_role;
revoke all on function public.delete_matching_rows(text, text, uuid) from public, anon, authenticated, service_role;
revoke all on function public.null_matching_column(text, text, uuid) from public, anon, authenticated, service_role;
revoke all on function public.detach_consultant_listing(uuid, uuid) from public, anon, authenticated, service_role;
revoke all on function public.forget_owned_consultants(uuid) from public, anon, authenticated, service_role;
revoke all on function public.purge_user_storage_folders(uuid) from public, anon, authenticated, service_role;
revoke all on function public.export_optional_rows(text, uuid) from public, anon, authenticated, service_role;

revoke all on function public.cleanup_profile_references() from public;
grant execute on function public.cleanup_profile_references() to public;

revoke all on function public.delete_user_account(uuid) from public, anon, authenticated;
grant execute on function public.delete_user_account(uuid) to service_role;

revoke all on function public.export_my_data() from public, anon;
grant execute on function public.export_my_data() to authenticated;

notify pgrst, 'reload schema';
