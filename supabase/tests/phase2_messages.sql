-- End-to-end checks for phase 2 direct messages.
-- The migration runs in one transaction, matching Supabase. Later statements
-- use the authenticated role, including INSERT ... RETURNING, which is the
-- path that broke post creation.
--
--   sudo -u postgres psql -d mms_messages_test -v ON_ERROR_STOP=1 -f supabase/tests/phase2_messages.sql

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

create policy reports_select on public.reports
  for select using (auth.uid() = reporter_id or public.is_admin());

create policy reports_insert on public.reports
  for insert with check (
    auth.uid() = reporter_id and status = 'open' and reviewed_by is null
  );

grant select, insert on table public.reports to authenticated;
grant execute on function public.is_admin(uuid) to anon, authenticated, service_role;
grant execute on function public.is_blocked_between(uuid, uuid) to anon, authenticated, service_role;

insert into public.profiles (id, role, handle, display_name, account_type) values
  ('11111111-1111-4111-8111-111111111111', 'student', 'ada', 'Ada Student', 'student'),
  ('22222222-2222-4222-8222-222222222222', 'student', 'ben', 'Ben Student', 'student'),
  ('33333333-3333-4333-8333-333333333333', 'consultant', 'cara', 'Cara Consultant', 'consultant'),
  ('44444444-4444-4444-8444-444444444444', 'student', 'dee', 'Dee Student', 'student'),
  ('55555555-5555-4555-8555-555555555555', 'student', 'eve', 'Eve Student', 'student'),
  ('66666666-6666-4666-8666-666666666666', 'student', 'finn', 'Finn Provider', 'education_provider'),
  ('77777777-7777-4777-8777-777777777777', 'student', 'gia', 'Gia Outsider', 'student'),
  ('88888888-8888-4888-8888-888888888888', 'student', 'har', 'Har Blocked', 'student'),
  ('99999999-9999-4999-8999-999999999999', 'admin', 'admin', 'Admin', 'other'),
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 'consultant', 'ira', 'Ira Consultant', 'other'),
  ('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', 'student', 'joy', 'Joy Current', 'current_student'),
  ('cccccccc-cccc-4ccc-8ccc-cccccccccccc', 'student', 'leo', 'Leo Label', 'consultant'),
  ('dddddddd-dddd-4ddd-8ddd-dddddddddddd', 'student', 'mia', 'Mia Student', 'student');

insert into public.follows (follower_id, following_id) values
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222222'),
  ('22222222-2222-4222-8222-222222222222', '11111111-1111-4111-8111-111111111111'),
  ('33333333-3333-4333-8333-333333333333', '44444444-4444-4444-8444-444444444444'),
  ('55555555-5555-4555-8555-555555555555', '33333333-3333-4333-8333-333333333333'),
  ('33333333-3333-4333-8333-333333333333', '66666666-6666-4666-8666-666666666666'),
  ('11111111-1111-4111-8111-111111111111', '88888888-8888-4888-8888-888888888888'),
  ('88888888-8888-4888-8888-888888888888', '11111111-1111-4111-8111-111111111111'),
  ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb'),
  ('cccccccc-cccc-4ccc-8ccc-cccccccccccc', 'dddddddd-dddd-4ddd-8ddd-dddddddddddd');

insert into public.blocks (blocker_id, blocked_id) values
  ('11111111-1111-4111-8111-111111111111', '88888888-8888-4888-8888-888888888888');

\ir ../migrations/20261013220000_social_phase2_messages.sql

commit;

create table public._ids (
  name text primary key,
  value uuid not null
);

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

create or replace function public._expect_min(actual text, minimum int, label text)
returns void
language plpgsql
as $fn$
begin
  if actual::int < minimum then
    raise exception '%: expected at least % got %', label, minimum, actual;
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
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'messages'
  ) then
    raise exception 'messages is not in the supabase_realtime publication';
  end if;

  if (select relreplident from pg_class where oid = 'public.messages'::regclass) is distinct from 'f' then
    raise exception 'messages replica identity is not FULL';
  end if;

  if has_table_privilege('anon', 'public.messages', 'select')
     or has_table_privilege('anon', 'public.messages', 'insert') then
    raise exception 'anon can read or write messages';
  end if;

  if not has_table_privilege('authenticated', 'public.messages', 'insert')
     or not has_table_privilege('authenticated', 'public.messages', 'select') then
    raise exception 'authenticated is missing select or insert on messages';
  end if;

  if has_table_privilege('authenticated', 'public.conversations', 'insert')
     or has_table_privilege('authenticated', 'public.conversation_members', 'insert') then
    raise exception 'authenticated can insert conversations directly';
  end if;

  if not exists (
    select 1
    from pg_enum e
    join pg_type t on t.oid = e.enumtypid
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public' and t.typname = 'report_target' and e.enumlabel = 'message'
  ) then
    raise exception 'report_target is missing message';
  end if;
end
$checks$;

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
select public.get_or_create_dm('22222222-2222-4222-8222-222222222222') as ada_ben \gset
reset role;
insert into public._ids (name, value) values ('ada_ben', :'ada_ben');

-- INSERT ... RETURNING under RLS. This is the posts failure mode.
select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '11111111-1111-4111-8111-111111111111', 'Hello from RETURNING')
returning body as returned_body \gset
reset role;

select public._expect_equal(:'returned_body', 'Hello from RETURNING', 'INSERT RETURNING body');

select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
select count(*) as ben_seen from public.messages where conversation_id = :'ada_ben' \gset
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '22222222-2222-4222-8222-222222222222', 'Reply that must return')
returning body as reply_body \gset
reset role;

select public._expect_equal(:'ben_seen', '1', 'messages ben can see');
select public._expect_equal(:'reply_body', 'Reply that must return', 'ben INSERT RETURNING');

select set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', false);
set role authenticated;
select count(*) as gia_messages from public.messages \gset
select count(*) as gia_inbox from public.my_conversation_summaries \gset
reset role;

select public._expect_equal(:'gia_messages', '0', 'outsider message count');
select public._expect_equal(:'gia_inbox', '0', 'outsider inbox count');

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      perform set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', true);
      set local role authenticated;
      insert into public.messages (conversation_id, sender_id, body)
      values (conv, '77777777-7777-4777-8777-777777777777', 'nope');
    end
    $inner$
  $$,
  'unavailable'
);

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
select public.get_or_create_dm('22222222-2222-4222-8222-222222222222') as ada_ben_again \gset
reset role;

select public._expect_equal(:'ada_ben', :'ada_ben_again', 'same dm id');

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      perform public.get_or_create_dm('11111111-1111-4111-8111-111111111111');
    end
    $inner$
  $$,
  'yourself'
);

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      perform public.get_or_create_dm('77777777-7777-4777-8777-777777777777');
    end
    $inner$
  $$,
  'someone you follow'
);

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      perform public.get_or_create_dm('88888888-8888-4888-8888-888888888888');
    end
    $inner$
  $$,
  'can''t message this account'
);

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', '33333333-3333-4333-8333-333333333333', true);
      set local role authenticated;
      perform public.get_or_create_dm('44444444-4444-4444-8444-444444444444');
    end
    $inner$
  $$,
  'Consultants can only message students'
);

select set_config('request.jwt.claim.sub', '44444444-4444-4444-8444-444444444444', false);
set role authenticated;
select public.get_or_create_dm('33333333-3333-4333-8333-333333333333') as dee_cara \gset
reset role;
insert into public._ids (name, value) values ('dee_cara', :'dee_cara');

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'dee_cara';
      perform set_config('request.jwt.claim.sub', '33333333-3333-4333-8333-333333333333', true);
      set local role authenticated;
      insert into public.messages (conversation_id, sender_id, body)
      values (conv, '33333333-3333-4333-8333-333333333333', 'cold pitch');
    end
    $inner$
  $$,
  'Consultants can only message students'
);

select set_config('request.jwt.claim.sub', '44444444-4444-4444-8444-444444444444', false);
set role authenticated;
insert into public.messages (conversation_id, sender_id, body)
values (:'dee_cara', '44444444-4444-4444-8444-444444444444', 'I messaged first')
returning body as dee_body \gset
reset role;

select set_config('request.jwt.claim.sub', '33333333-3333-4333-8333-333333333333', false);
set role authenticated;
insert into public.messages (conversation_id, sender_id, body)
values (:'dee_cara', '33333333-3333-4333-8333-333333333333', 'Thanks for writing')
returning body as cara_reply \gset
reset role;

select public._expect_equal(:'dee_body', 'I messaged first', 'student first message');
select public._expect_equal(:'cara_reply', 'Thanks for writing', 'consultant reply after student');

select set_config('request.jwt.claim.sub', '33333333-3333-4333-8333-333333333333', false);
set role authenticated;
select public.get_or_create_dm('55555555-5555-4555-8555-555555555555') as cara_eve \gset
insert into public.messages (conversation_id, sender_id, body)
values (:'cara_eve', '33333333-3333-4333-8333-333333333333', 'You follow me, so this is allowed')
returning body as cara_first \gset
reset role;
insert into public._ids (name, value) values ('cara_eve', :'cara_eve');

select public._expect_equal(:'cara_first', 'You follow me, so this is allowed', 'consultant writes first when followed');

select set_config('request.jwt.claim.sub', '33333333-3333-4333-8333-333333333333', false);
set role authenticated;
select public.get_or_create_dm('66666666-6666-4666-8666-666666666666') as cara_finn \gset
insert into public.messages (conversation_id, sender_id, body)
values (:'cara_finn', '33333333-3333-4333-8333-333333333333', 'Hello, provider')
returning body as provider_body \gset
reset role;

select public._expect_equal(:'provider_body', 'Hello, provider', 'consultant to education provider');

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', true);
      set local role authenticated;
      perform public.get_or_create_dm('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb');
    end
    $inner$
  $$,
  'Consultants can only message students'
);

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', 'cccccccc-cccc-4ccc-8ccc-cccccccccccc', true);
      set local role authenticated;
      perform public.get_or_create_dm('dddddddd-dddd-4ddd-8ddd-dddddddddddd');
    end
    $inner$
  $$,
  'Consultants can only message students'
);

select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '22222222-2222-4222-8222-222222222222', repeat('a', 2000))
returning char_length(body) as long_len \gset
reset role;

select public._expect_equal(:'long_len', '2000', '2000 character message');

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      perform set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', true);
      set local role authenticated;
      insert into public.messages (conversation_id, sender_id, body)
      values (conv, '22222222-2222-4222-8222-222222222222', repeat('b', 2001));
    end
    $inner$
  $$,
  'messages_body_len'
);

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      perform set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', true);
      set local role authenticated;
      insert into public.messages (conversation_id, sender_id, body)
      values (conv, '22222222-2222-4222-8222-222222222222', '   ');
    end
    $inner$
  $$,
  'messages_body_len'
);

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
update public.messages
set deleted_at = now()
where conversation_id = :'ada_ben'
  and sender_id = '11111111-1111-4111-8111-111111111111'
  and body = 'Hello from RETURNING'
returning (deleted_at is not null) as did_delete \gset
reset role;

select public._expect_equal(:'did_delete', 't', 'soft delete RETURNING');

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      update public.messages
      set body = 'rewritten'
      where conversation_id = conv
        and sender_id = '11111111-1111-4111-8111-111111111111';
    end
    $inner$
  $$,
  'Messages can only be deleted'
);

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
with attempt as (
  update public.messages
  set deleted_at = now()
  where conversation_id = :'ada_ben'
    and body = 'Reply that must return'
  returning id
)
select count(*) as stolen from attempt \gset
reset role;

select public._expect_equal(:'stolen', '0', 'cannot delete the other person''s message');

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.reports (reporter_id, target_type, target_id, reason)
select '11111111-1111-4111-8111-111111111111', 'message', id, 'Harassment in a direct message'
from public.messages
where body = 'Reply that must return'
returning target_type::text as report_type \gset
reset role;

select public._expect_equal(:'report_type', 'message', 'message report RETURNING');

select public._expect_error(
  $$
    do $inner$
    declare
      target uuid;
    begin
      select id into target from public.messages where body = 'Reply that must return';
      perform set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', true);
      set local role authenticated;
      insert into public.reports (reporter_id, target_type, target_id, reason)
      values ('22222222-2222-4222-8222-222222222222', 'message', target, 'my own message');
    end
    $inner$
  $$,
  'own content'
);

select public._expect_error(
  $$
    do $inner$
    declare
      target uuid;
    begin
      select id into target from public.messages where body = 'Reply that must return';
      perform set_config('request.jwt.claim.sub', '77777777-7777-4777-8777-777777777777', true);
      set local role authenticated;
      insert into public.reports (reporter_id, target_type, target_id, reason)
      values ('77777777-7777-4777-8777-777777777777', 'message', target, 'not my thread');
    end
    $inner$
  $$,
  'unavailable'
);

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.reports (reporter_id, target_type, target_id, reason)
values (
  '11111111-1111-4111-8111-111111111111',
  'post',
  '12345678-1234-4234-8234-123456789012',
  'Existing post reports still insert'
)
returning target_type::text as post_report \gset
reset role;

select public._expect_equal(:'post_report', 'post', 'post report still inserts');

insert into public.blocks (blocker_id, blocked_id) values
  ('55555555-5555-4555-8555-555555555555', '33333333-3333-4333-8333-333333333333');

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'cara_eve';
      perform set_config('request.jwt.claim.sub', '33333333-3333-4333-8333-333333333333', true);
      set local role authenticated;
      insert into public.messages (conversation_id, sender_id, body)
      values (conv, '33333333-3333-4333-8333-333333333333', 'after a block');
    end
    $inner$
  $$,
  'can''t message this account'
);

select set_config('request.jwt.claim.sub', '55555555-5555-4555-8555-555555555555', false);
set role authenticated;
select count(*) as eve_history from public.messages where conversation_id = :'cara_eve' \gset
reset role;

select public._expect_equal(:'eve_history', '1', 'blocked member can still read history');

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '11111111-1111-4111-8111-111111111111', 'still unread');
reset role;

select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
select unread_count as ben_unread from public.my_conversation_summaries
where conversation_id = :'ada_ben' \gset
select public.mark_conversation_read(:'ada_ben') as marked \gset
select unread_count as ben_after from public.my_conversation_summaries
where conversation_id = :'ada_ben' \gset
reset role;

select set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', false);
set role authenticated;
select unread_count as ada_unread from public.my_conversation_summaries
where other_user_id = '22222222-2222-4222-8222-222222222222' \gset
reset role;

select public._expect_min(:'ben_unread', 1, 'ben unread before reading');
select public._expect_min(char_length(:'marked')::text, 10, 'mark_conversation_read timestamp');
select public._expect_equal(:'ben_after', '0', 'ben unread after reading');
select public._expect_min(:'ada_unread', 1, 'ada unread replies');

select public._expect_error(
  $$
    do $inner$
    begin
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      insert into public.conversations (dm_key)
      values ('11111111-1111-4111-8111-111111111111:22222222-2222-4222-8222-222222222222');
    end
    $inner$
  $$,
  'permission denied'
);

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      insert into public.conversation_members (conversation_id, user_id)
      values (conv, '77777777-7777-4777-8777-777777777777');
    end
    $inner$
  $$,
  'two participants'
);

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      update public.conversation_members
      set created_at = now()
      where user_id = '11111111-1111-4111-8111-111111111111'
        and conversation_id = conv;
    end
    $inner$
  $$,
  'Only last_read_at'
);

select set_config('request.jwt.claim.sub', '99999999-9999-4999-8999-999999999999', false);
set role authenticated;
select count(*) as admin_seen from public.messages \gset
reset role;

select public._expect_min(:'admin_seen', 3, 'admin can read messages');

do $fill$
declare
  conv uuid;
  sent int;
begin
  select value into conv from public._ids where name = 'ada_ben';
  perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
  set local role authenticated;
  loop
    select count(*) into sent
    from public.messages
    where sender_id = '11111111-1111-4111-8111-111111111111'
      and created_at > now() - interval '1 hour';
    exit when sent >= 120;
    insert into public.messages (conversation_id, sender_id, body)
    values (conv, '11111111-1111-4111-8111-111111111111', 'flood ' || sent::text);
  end loop;
end
$fill$;

select public._expect_error(
  $$
    do $inner$
    declare
      conv uuid;
    begin
      select value into conv from public._ids where name = 'ada_ben';
      perform set_config('request.jwt.claim.sub', '11111111-1111-4111-8111-111111111111', true);
      set local role authenticated;
      insert into public.messages (conversation_id, sender_id, body)
      values (conv, '11111111-1111-4111-8111-111111111111', 'one too many');
    end
    $inner$
  $$,
  'too many messages'
);

select set_config('request.jwt.claim.sub', '22222222-2222-4222-8222-222222222222', false);
set role authenticated;
insert into public.messages (conversation_id, sender_id, body)
values (:'ada_ben', '22222222-2222-4222-8222-222222222222', 'ben is not rate limited')
returning body as ben_still \gset
reset role;

select public._expect_equal(:'ben_still', 'ben is not rate limited', 'rate limit is per sender');

select 'phase 2 messages tests passed' as result;
