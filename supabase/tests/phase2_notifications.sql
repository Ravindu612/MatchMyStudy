-- End-to-end checks for phase 2 in-app notifications.
-- The migrations run in one transaction, matching Supabase. Later statements
-- use the authenticated role, including UPDATE ... RETURNING, which is the
-- path that broke post creation when a SELECT policy re-read its own table.
--
--   sudo -u postgres psql -d mms_notifications_test -v ON_ERROR_STOP=1 -f supabase/tests/phase2_notifications.sql

\set ON_ERROR_STOP on

begin;

create schema if not exists auth;

create or replace function auth.uid()
returns uuid
language sql
stable
as $$
  select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid;
$$;

do $roles$
begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then
    create role anon nologin;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then
    create role authenticated nologin;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'service_role') then
    create role service_role nologin bypassrls;
  end if;
end
$roles$;

grant usage on schema public to anon, authenticated, service_role;
grant usage on schema auth to anon, authenticated, service_role;
grant execute on function auth.uid() to anon, authenticated, service_role;

create type public.profile_role as enum (
  'student', 'current_student', 'consultant', 'education_provider', 'other'
);
create type public.content_status as enum ('active', 'hidden', 'removed');
create type public.post_visibility as enum ('public', 'followers');
create type public.report_target as enum ('post', 'comment', 'profile');
create type public.report_status as enum ('open', 'reviewing', 'actioned', 'dismissed');

create table public.profiles (
  id uuid primary key,
  email text,
  role text not null,
  handle text,
  display_name text,
  account_type public.profile_role not null,
  created_at timestamptz not null default now()
);

create table public.follows (
  follower_id uuid not null references public.profiles (id) on delete cascade,
  following_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  constraint follows_no_self check (follower_id <> following_id)
);

create table public.blocks (
  blocker_id uuid not null references public.profiles (id) on delete cascade,
  blocked_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  constraint blocks_no_self check (blocker_id <> blocked_id)
);

create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = uid and role = 'admin'
  );
$$;

create or replace function public.is_blocked_between(a uuid, b uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.blocks
    where (blocker_id = a and blocked_id = b)
       or (blocker_id = b and blocked_id = a)
  );
$$;

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles (id) on delete cascade,
  body text not null,
  visibility public.post_visibility not null default 'public',
  status public.content_status not null default 'active',
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.post_likes (
  post_id uuid not null references public.posts (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, user_id)
);

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts (id) on delete cascade,
  author_id uuid not null references public.profiles (id) on delete cascade,
  body text not null,
  status public.content_status not null default 'active',
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles (id) on delete cascade,
  target_type public.report_target not null,
  target_id uuid not null,
  reason text not null,
  status public.report_status not null default 'open',
  reviewed_by uuid references public.profiles (id),
  resolution_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint reports_reason_len check (char_length(reason) between 1 and 1000),
  constraint reports_reporter_target_key unique (reporter_id, target_type, target_id)
);

alter table public.reports enable row level security;
alter table public.post_likes enable row level security;
alter table public.comments enable row level security;
alter table public.follows enable row level security;

create policy reports_select on public.reports
  for select to authenticated
  using (auth.uid() = reporter_id or public.is_admin());

create policy reports_insert on public.reports
  for insert to authenticated
  with check (auth.uid() = reporter_id and status = 'open' and reviewed_by is null);

create policy reports_update_admin on public.reports
  for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- These SELECT policies compare columns on the new row. They do not look
-- the row up again, so INSERT ... RETURNING succeeds.
create policy post_likes_select on public.post_likes
  for select to authenticated
  using (user_id = auth.uid());

create policy post_likes_insert on public.post_likes
  for insert to authenticated
  with check (user_id = auth.uid());

create policy post_likes_delete on public.post_likes
  for delete to authenticated
  using (user_id = auth.uid());

create policy comments_select on public.comments
  for select to authenticated
  using (author_id = auth.uid());

create policy comments_insert on public.comments
  for insert to authenticated
  with check (author_id = auth.uid() and status = 'active' and deleted_at is null);

create policy follows_select on public.follows
  for select to authenticated
  using (follower_id = auth.uid() or following_id = auth.uid());

create policy follows_insert on public.follows
  for insert to authenticated
  with check (follower_id = auth.uid());

grant select, insert, update on table public.reports to authenticated;
grant select, insert, delete on table public.post_likes to authenticated;
grant select, insert on table public.comments to authenticated;
grant select, insert on table public.follows to authenticated;
grant execute on function public.is_admin(uuid) to anon, authenticated, service_role;
grant execute on function public.is_blocked_between(uuid, uuid) to anon, authenticated, service_role;

insert into public.profiles (id, role, handle, display_name, account_type) values
  ('11111111-1111-4111-8111-111111111111', 'student', 'ada', 'Ada Student', 'student'),
  ('22222222-2222-4222-8222-222222222222', 'student', 'ben', 'Ben Student', 'student'),
  ('77777777-7777-4777-8777-777777777777', 'student', 'gia', 'Gia Outsider', 'student'),
  ('88888888-8888-4888-8888-888888888888', 'student', 'har', 'Har Blocked', 'student'),
  ('99999999-9999-4999-8999-999999999999', 'admin', 'admin', 'Admin', 'other');

insert into public.follows (follower_id, following_id) values
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222222'),
  ('22222222-2222-4222-8222-222222222222', '11111111-1111-4111-8111-111111111111');

insert into public.blocks (blocker_id, blocked_id) values
  ('11111111-1111-4111-8111-111111111111', '88888888-8888-4888-8888-888888888888');

insert into public.posts (id, author_id, body) values
  ('abababab-abab-4aba-8aba-abababababab', '11111111-1111-4111-8111-111111111111', 'Ada post'),
  ('bcbcbcbc-bcbc-4bcb-8bcb-bcbcbcbcbcbc', '22222222-2222-4222-8222-222222222222', 'Ben post');

insert into public.posts (id, author_id, body, status) values
  ('cdcdcdcd-cdcd-4cdc-8cdc-cdcdcdcdcdcd', '11111111-1111-4111-8111-111111111111', 'Hidden post', 'hidden');

\ir ../migrations/20261013220000_social_phase2_messages.sql
\ir ../migrations/20261014200000_social_phase2_notifications.sql

commit;

create or replace function public._expect_equal(actual text, expected text, label text)
returns void
language plpgsql
as $fn$
begin
  if actual is distinct from expected then
    raise exception '%: expected [%] got [%]', label, expected, actual;
  end if;
end;
$fn$;

create or replace function public._expect_error(statement text, expected text)
returns void
language plpgsql
as $fn$
begin
  execute statement;
  raise exception 'expected failure containing [%] but the statement succeeded', expected;
exception
  when others then
    if sqlerrm like 'expected failure containing%' then
      raise;
    end if;
    if position(expected in sqlerrm) = 0 then
      raise exception 'expected [%] in error [%]', expected, sqlerrm;
    end if;
end;
$fn$;

do $checks$
declare
  select_qual text;
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'notifications'
  ) then
    raise exception 'notifications is not in the supabase_realtime publication';
  end if;

  if (select relreplident from pg_class where oid = 'public.notifications'::regclass) is distinct from 'f' then
    raise exception 'notifications replica identity is not FULL';
  end if;

  if has_table_privilege('anon', 'public.notifications', 'select')
     or has_table_privilege('anon', 'public.notifications', 'insert')
     or has_table_privilege('authenticated', 'public.notifications', 'insert')
     or has_table_privilege('authenticated', 'public.notifications', 'delete') then
    raise exception 'anon or authenticated can insert, delete, or anon can select notifications';
  end if;

  if not has_table_privilege('authenticated', 'public.notifications', 'select')
     or not has_column_privilege('authenticated', 'public.notifications', 'read_at', 'update')
     or has_column_privilege('authenticated', 'public.notifications', 'type', 'update') then
    raise exception 'notification grants are not select plus update of read_at';
  end if;

  if exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'notifications' and cmd = 'INSERT'
  ) then
    raise exception 'notifications has an insert policy';
  end if;

  select qual into select_qual
  from pg_policies
  where schemaname = 'public'
    and tablename = 'notifications'
    and policyname = 'notifications_select';

  if select_qual is null
     or position('recipient_id' in select_qual) = 0
     or position('notifications' in select_qual) > 0 then
    raise exception 'notifications_select must compare recipient_id and must not re-query notifications. Got %', select_qual;
  end if;

  if exists (
    select 1
    from pg_proc
    where proname in (
      'notify_on_like',
      'notify_on_comment',
      'notify_on_follow',
      'notify_on_message',
      'notify_on_report_resolved'
    )
      and not prosecdef
  ) then
    raise exception 'notification triggers must be security definer';
  end if;
end
$checks$;

-- Like, including INSERT ... RETURNING on post_likes.
select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
insert into public.post_likes (post_id, user_id)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '22222222-2222-4222-8222-222222222222'
)
returning post_id as liked_post \gset
reset role;

select public._expect_equal(
  :'liked_post',
  'abababab-abab-4aba-8aba-abababababab',
  'like INSERT RETURNING'
);

select count(*) as ada_likes
from public.notifications
where recipient_id = '11111111-1111-4111-8111-111111111111'
  and type = 'like'
  and actor_id = '22222222-2222-4222-8222-222222222222'
\gset

select public._expect_equal(:'ada_likes', '1', 'like notifies the author');

select id as like_note
from public.notifications
where type = 'like'
  and recipient_id = '11111111-1111-4111-8111-111111111111'
  and actor_id = '22222222-2222-4222-8222-222222222222'
\gset

select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
delete from public.post_likes
where post_id = 'abababab-abab-4aba-8aba-abababababab'
  and user_id = '22222222-2222-4222-8222-222222222222';
insert into public.post_likes (post_id, user_id)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '22222222-2222-4222-8222-222222222222'
)
returning post_id as liked_again \gset
reset role;

select count(*) as ada_likes_again
from public.notifications
where type = 'like'
  and recipient_id = '11111111-1111-4111-8111-111111111111'
  and actor_id = '22222222-2222-4222-8222-222222222222'
\gset

select id as like_note_again
from public.notifications
where type = 'like'
  and recipient_id = '11111111-1111-4111-8111-111111111111'
  and actor_id = '22222222-2222-4222-8222-222222222222'
\gset

select public._expect_equal(:'liked_again', 'abababab-abab-4aba-8aba-abababababab', 'repeat like INSERT RETURNING');
select public._expect_equal(:'ada_likes_again', '1', 'repeated like does not duplicate');
select public._expect_equal(:'like_note', :'like_note_again', 'repeated like keeps the same row');

-- Own like and a like on a hidden post do not notify.
select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.post_likes (post_id, user_id)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '11111111-1111-4111-8111-111111111111'
)
returning user_id as self_like \gset
insert into public.post_likes (post_id, user_id)
values (
  'cdcdcdcd-cdcd-4cdc-8cdc-cdcdcdcdcdcd',
  '11111111-1111-4111-8111-111111111111'
);
reset role;

select count(*) as self_like_notes
from public.notifications
where actor_id = '11111111-1111-4111-8111-111111111111'
  and type = 'like'
\gset

select public._expect_equal(:'self_like', '11111111-1111-4111-8111-111111111111', 'self like inserted');
select public._expect_equal(:'self_like_notes', '0', 'self like and hidden post do not notify');

-- A blocked like inserted past the client policy still does not notify.
insert into public.post_likes (post_id, user_id)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '88888888-8888-4888-8888-888888888888'
);

select count(*) as blocked_likes
from public.notifications
where actor_id = '88888888-8888-4888-8888-888888888888'
  and type = 'like'
\gset

select public._expect_equal(:'blocked_likes', '0', 'blocked like does not notify');

-- Comment.
select set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', false);
set role authenticated;
insert into public.comments (post_id, author_id, body)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '77777777-7777-4777-8777-777777777777',
  'Helpful note'
)
returning id as comment_id \gset
reset role;

select count(*) as ada_comments
from public.notifications
where recipient_id = '11111111-1111-4111-8111-111111111111'
  and type = 'comment'
  and comment_id = :'comment_id'
\gset

select public._expect_equal(:'ada_comments', '1', 'comment notifies the author');

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.comments (post_id, author_id, body)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '11111111-1111-4111-8111-111111111111',
  'My own note'
)
returning id as own_comment \gset
reset role;

select count(*) as own_comment_notes
from public.notifications
where actor_id = '11111111-1111-4111-8111-111111111111'
  and type = 'comment'
\gset

select public._expect_equal(:'own_comment_notes', '0', 'comment on your own post does not notify');

insert into public.comments (post_id, author_id, body)
values (
  'abababab-abab-4aba-8aba-abababababab',
  '88888888-8888-4888-8888-888888888888',
  'Blocked note'
);

select count(*) as blocked_comments
from public.notifications
where actor_id = '88888888-8888-4888-8888-888888888888'
  and type = 'comment'
\gset

select public._expect_equal(:'blocked_comments', '0', 'blocked comment does not notify');

-- Follow.
select set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', false);
set role authenticated;
insert into public.follows (follower_id, following_id)
values (
  '77777777-7777-4777-8777-777777777777',
  '11111111-1111-4111-8111-111111111111'
)
returning follower_id as follow_actor \gset
reset role;

select count(*) as ada_follows
from public.notifications
where recipient_id = '11111111-1111-4111-8111-111111111111'
  and type = 'follow'
  and actor_id = '77777777-7777-4777-8777-777777777777'
  and profile_id = '77777777-7777-4777-8777-777777777777'
\gset

select public._expect_equal(:'follow_actor', '77777777-7777-4777-8777-777777777777', 'follow INSERT RETURNING');
select public._expect_equal(:'ada_follows', '1', 'follow notifies the profile');

insert into public.follows (follower_id, following_id)
values (
  '88888888-8888-4888-8888-888888888888',
  '11111111-1111-4111-8111-111111111111'
);

select count(*) as blocked_follows
from public.notifications
where actor_id = '88888888-8888-4888-8888-888888888888'
  and type = 'follow'
\gset

select public._expect_equal(:'blocked_follows', '0', 'blocked follow does not notify');

-- Message. Two sends create two notifications. The sender gets none.
select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
select public.get_or_create_dm('22222222-2222-4222-8222-222222222222') as ada_ben \gset
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '11111111-1111-4111-8111-111111111111', 'Hello')
returning id as first_message \gset
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '11111111-1111-4111-8111-111111111111', 'Second note')
returning id as second_message \gset
reset role;

select count(*) as ben_messages
from public.notifications
where recipient_id = '22222222-2222-4222-8222-222222222222'
  and type = 'message'
  and conversation_id = :'ada_ben'
\gset

select count(*) as ada_message_notes
from public.notifications
where recipient_id = '11111111-1111-4111-8111-111111111111'
  and type = 'message'
\gset

select public._expect_equal(:'ben_messages', '2', 'each message notifies the other person');
select public._expect_equal(:'ada_message_notes', '0', 'sender is not notified');

select set_config('request.jwt.claim.sub', '', false);

insert into public.conversations (id, dm_key)
values (
  'edededed-eded-4ede-8ede-edededededed',
  public.dm_pair_key(
    '11111111-1111-4111-8111-111111111111',
    '88888888-8888-4888-8888-888888888888'
  )
);

insert into public.conversation_members (conversation_id, user_id) values
  ('edededed-eded-4ede-8ede-edededededed', '11111111-1111-4111-8111-111111111111'),
  ('edededed-eded-4ede-8ede-edededededed', '88888888-8888-4888-8888-888888888888');

insert into public.messages (conversation_id, sender_id, body)
values (
  'edededed-eded-4ede-8ede-edededededed',
  '88888888-8888-4888-8888-888888888888',
  'Blocked hello'
);

select count(*) as blocked_messages
from public.notifications
where actor_id = '88888888-8888-4888-8888-888888888888'
  and type = 'message'
\gset

select public._expect_equal(:'blocked_messages', '0', 'blocked message does not notify');

-- Report resolved. Reviewing does not notify. A second resolution does not duplicate.
select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.reports (reporter_id, target_type, target_id, reason)
values (
  '11111111-1111-4111-8111-111111111111',
  'post',
  'bcbcbcbc-bcbc-4bcb-8bcb-bcbcbcbcbcbc',
  'This post breaks the rules'
)
returning id as ada_report \gset
reset role;

select set_config('request.jwt.claim.sub', '99999999-9999-4999-8999-999999999999', false);
set role authenticated;
update public.reports
set status = 'reviewing', reviewed_by = '99999999-9999-4999-8999-999999999999'
where id = :'ada_report'
returning id as reviewing_report \gset
reset role;

select count(*) as while_reviewing
from public.notifications
where report_id = :'ada_report'
\gset

select public._expect_equal(:'reviewing_report', :'ada_report', 'report update returning');
select public._expect_equal(:'while_reviewing', '0', 'reviewing does not notify');

select set_config('request.jwt.claim.sub', '99999999-9999-4999-8999-999999999999', false);
set role authenticated;
update public.reports
set status = 'actioned',
    reviewed_by = '99999999-9999-4999-8999-999999999999',
    resolution_note = 'Removed'
where id = :'ada_report'
returning id as actioned_report \gset
update public.reports
set status = 'actioned', resolution_note = 'Still removed'
where id = :'ada_report';
reset role;

select count(*) as resolved_notes
from public.notifications
where report_id = :'ada_report'
  and type = 'report_resolved'
  and recipient_id = '11111111-1111-4111-8111-111111111111'
  and post_id = 'bcbcbcbc-bcbc-4bcb-8bcb-bcbcbcbcbcbc'
\gset

select count(*) as author_resolved
from public.notifications
where recipient_id = '22222222-2222-4222-8222-222222222222'
  and type = 'report_resolved'
\gset

select public._expect_equal(:'actioned_report', :'ada_report', 'resolve report returning');
select public._expect_equal(:'resolved_notes', '1', 'reporter is notified once');
select public._expect_equal(:'author_resolved', '0', 'the reported author is not notified');

-- A message report links the conversation.
select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
insert into public.reports (reporter_id, target_type, target_id, reason)
values (
  '22222222-2222-4222-8222-222222222222',
  'message',
  :'first_message',
  'Please look at this message'
)
returning id as message_report \gset
reset role;

select set_config('request.jwt.claim.sub', '99999999-9999-4999-8999-999999999999', false);
set role authenticated;
update public.reports
set status = 'dismissed', reviewed_by = '99999999-9999-4999-8999-999999999999'
where id = :'message_report';
reset role;

select count(*) as message_resolved
from public.notifications
where report_id = :'message_report'
  and recipient_id = '22222222-2222-4222-8222-222222222222'
  and conversation_id = :'ada_ben'
  and message_id = :'first_message'
\gset

select public._expect_equal(:'message_resolved', '1', 'message report links the conversation');

-- The reviewer is not notified about their own report.
select set_config('request.jwt.claim.sub', '99999999-9999-4999-8999-999999999999', false);
set role authenticated;
insert into public.reports (reporter_id, target_type, target_id, reason)
values (
  '99999999-9999-4999-8999-999999999999',
  'profile',
  '77777777-7777-4777-8777-777777777777',
  'Staff report'
)
returning id as admin_report \gset
update public.reports
set status = 'dismissed', reviewed_by = '99999999-9999-4999-8999-999999999999'
where id = :'admin_report';
reset role;

select count(*) as self_resolved
from public.notifications
where report_id = :'admin_report'
\gset

select public._expect_equal(:'self_resolved', '0', 'resolving your own report does not notify');

-- A block between the reporter and the reviewer skips the notification.
insert into public.blocks (blocker_id, blocked_id) values
  ('77777777-7777-4777-8777-777777777777', '99999999-9999-4999-8999-999999999999');

select set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', false);
set role authenticated;
insert into public.reports (reporter_id, target_type, target_id, reason)
values (
  '77777777-7777-4777-8777-777777777777',
  'profile',
  '22222222-2222-4222-8222-222222222222',
  'Blocked from the reviewer'
)
returning id as blocked_report \gset
reset role;

select set_config('request.jwt.claim.sub', '99999999-9999-4999-8999-999999999999', false);
set role authenticated;
update public.reports
set status = 'actioned', reviewed_by = '99999999-9999-4999-8999-999999999999'
where id = :'blocked_report';
reset role;

select count(*) as blocked_resolved
from public.notifications
where report_id = :'blocked_report'
\gset

select public._expect_equal(:'blocked_resolved', '0', 'blocked reporter is not notified');

-- RLS: only the recipient can read. UPDATE ... RETURNING works for read_at.
select set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', false);
set role authenticated;
select count(*) as gia_visible from public.notifications \gset
reset role;

select public._expect_equal(:'gia_visible', '0', 'gia cannot read other notifications');

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      insert into public.notifications (recipient_id, actor_id, type, post_id)
      values (
        '11111111-1111-4111-8111-111111111111',
        '22222222-2222-4222-8222-222222222222',
        'like',
        'abababab-abab-4aba-8aba-abababababab'
      );
    end
    $inner$
  $$,
  'permission denied'
);

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
update public.notifications
set read_at = timestamptz '2026-10-14 12:00:00+00'
where id = :'like_note'
returning id as marked_like \gset
reset role;

select public._expect_equal(:'marked_like', :'like_note', 'UPDATE RETURNING under notifications_select');

select public._expect_error(
  $$
    do $inner$
    declare
      note uuid;
    begin
      select id into note
      from public.notifications
      where type = 'like'
        and recipient_id = '11111111-1111-4111-8111-111111111111'
      limit 1;
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      update public.notifications
      set type = 'follow'
      where id = note;
    end
    $inner$
  $$,
  'permission denied'
);

select public._expect_error(
  $$
    update public.notifications
    set actor_id = '77777777-7777-4777-8777-777777777777'
    where type = 'like'
      and recipient_id = '11111111-1111-4111-8111-111111111111'
  $$,
  'Only read_at'
);

do $outsider$
declare
  changed int;
begin
  perform set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', true);
  set local role authenticated;
  update public.notifications
  set read_at = now()
  where recipient_id = '11111111-1111-4111-8111-111111111111';
  get diagnostics changed = row_count;
  if changed <> 0 then
    raise exception 'gia updated % notification rows', changed;
  end if;
end
$outsider$;

select case when read_at is null then 'unread' else 'read' end as like_state
from public.notifications
where id = :'like_note'
\gset

select public._expect_equal(:'like_state', 'read', 'recipient mark-read stuck');

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
update public.notifications
set read_at = now()
where recipient_id = '11111111-1111-4111-8111-111111111111'
  and read_at is null;
reset role;

select count(*) as ada_unread
from public.notifications
where recipient_id = '11111111-1111-4111-8111-111111111111'
  and read_at is null
\gset

select public._expect_equal(:'ada_unread', '0', 'mark all read');

select 'phase 2 notifications tests passed' as result;
