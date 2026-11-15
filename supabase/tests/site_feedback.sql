-- Privacy and permission checks for anonymous site feedback.
-- anon may insert a rating and a page source. anon cannot read rows, and
-- INSERT ... RETURNING is rejected so the website must not ask for the row.
--
--   sudo -u postgres psql -d postgres -c 'DROP DATABASE IF EXISTS mms_feedback_test'
--   sudo -u postgres psql -d postgres -c 'CREATE DATABASE mms_feedback_test'
--   sudo -u postgres psql -d mms_feedback_test -v ON_ERROR_STOP=1 -f supabase/tests/site_feedback.sql

\set ON_ERROR_STOP on

select format('create role %I nologin', role_name)
from (
  values ('anon'), ('authenticated'), ('service_role')
) as roles(role_name)
where not exists (
  select 1 from pg_roles where rolname = role_name
)
\gexec

alter role service_role bypassrls;

\ir ../migrations/20261107104500_site_feedback.sql

delete from public.site_feedback;

do $columns$
declare
  cols text;
  select_policies int;
begin
  select string_agg(column_name, ',' order by ordinal_position)
    into cols
  from information_schema.columns
  where table_schema = 'public'
    and table_name = 'site_feedback';

  if cols is distinct from 'id,rating,source,created_at' then
    raise exception
      'site_feedback columns are %, expected id,rating,source,created_at',
      cols;
  end if;

  select count(*)
    into select_policies
  from pg_policies
  where schemaname = 'public'
    and tablename = 'site_feedback'
    and cmd = 'SELECT';

  if select_policies <> 0 then
    raise exception 'site_feedback must not have a public read policy';
  end if;
end
$columns$;

insert into public.site_feedback (rating, source)
values ('Helpful', 'direct');

set role anon;

insert into public.site_feedback (rating, source)
values ('Extremely helpful', '/australia');

do $checks$
begin
  begin
    insert into public.site_feedback (rating, source)
    values ('Amazing', 'direct');
    raise exception 'invalid rating was stored';
  exception
    when check_violation then
      null;
  end;

  begin
    insert into public.site_feedback (rating, source)
    values ('Helpful', 'https://evil.example');
    raise exception 'invalid source was stored';
  exception
    when check_violation then
      null;
  end;

  begin
    insert into public.site_feedback (rating, source)
    values ('Satisfactory', 'home')
    returning id;
    raise exception 'anon INSERT RETURNING should fail';
  exception
    when insufficient_privilege then
      null;
  end;

  begin
    perform 1 from public.site_feedback;
    raise exception 'anon could read site_feedback';
  exception
    when insufficient_privilege then
      null;
  end;
end
$checks$;

reset role;

set role service_role;

do $count$
declare
  stored int;
begin
  select count(*) into stored from public.site_feedback;

  if stored <> 2 then
    raise exception 'expected 2 stored ratings, found %', stored;
  end if;
end
$count$;

reset role;
