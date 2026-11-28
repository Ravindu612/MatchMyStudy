-- =====================================================================
-- Study assistant usage limits and consented contact requests
--
-- Safe to run more than once. Paste the whole file into the Supabase SQL
-- editor and run it before enabling the assistant in production.
--
-- chat_daily_usage stores a hash of the visitor IP and a daily count.
-- It is written only by the service role. There is no public read.
--
-- chat_leads stores name, email, and message only after the visitor ticks
-- the consent box. Visitors cannot insert or read rows. The server inserts
-- with the service role. Admins read and mark rows contacted. The admin
-- SELECT policy calls public.is_admin(), which reads profiles as a security
-- definer function. It does not query chat_leads, so it cannot recurse.
-- =====================================================================

create table if not exists public.chat_daily_usage (
  ip_hash text not null,
  usage_date date not null,
  message_count integer not null default 0,
  lead_count integer not null default 0,
  primary key (ip_hash, usage_date)
);

do $usage_constraints$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_daily_usage_ip_hash_check'
      and conrelid = 'public.chat_daily_usage'::regclass
  ) then
    alter table public.chat_daily_usage
      add constraint chat_daily_usage_ip_hash_check
      check (char_length(ip_hash) between 32 and 128);
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_daily_usage_message_count_check'
      and conrelid = 'public.chat_daily_usage'::regclass
  ) then
    alter table public.chat_daily_usage
      add constraint chat_daily_usage_message_count_check
      check (message_count >= 0 and message_count <= 10000);
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_daily_usage_lead_count_check'
      and conrelid = 'public.chat_daily_usage'::regclass
  ) then
    alter table public.chat_daily_usage
      add constraint chat_daily_usage_lead_count_check
      check (lead_count >= 0 and lead_count <= 10000);
  end if;
end
$usage_constraints$;

comment on table public.chat_daily_usage is
  'Daily assistant and contact-form counts keyed by a hash of the visitor IP. Service role only.';

create table if not exists public.chat_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  country_of_interest text,
  study_level text,
  message text not null,
  consent boolean not null,
  contacted boolean not null default false,
  contacted_at timestamptz,
  created_at timestamptz not null default now()
);

do $lead_constraints$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_name_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_name_check
      check (
        char_length(name) between 1 and 80
        and name = btrim(name)
        and name !~ '[[:cntrl:]]'
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_email_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_email_check
      check (
        email = lower(email)
        and char_length(email) between 3 and 160
        and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_country_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_country_check
      check (
        country_of_interest is null
        or (
          char_length(country_of_interest) between 1 and 80
          and country_of_interest = btrim(country_of_interest)
          and country_of_interest !~ '[[:cntrl:]]'
        )
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_level_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_level_check
      check (
        study_level is null
        or (
          char_length(study_level) between 1 and 40
          and study_level = btrim(study_level)
          and study_level !~ '[[:cntrl:]]'
        )
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_message_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_message_check
      check (
        char_length(message) between 1 and 1000
        and message = btrim(message)
        and message !~ '[[:cntrl:]]'
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_consent_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_consent_check
      check (consent is true);
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'chat_leads_contacted_at_check'
      and conrelid = 'public.chat_leads'::regclass
  ) then
    alter table public.chat_leads
      add constraint chat_leads_contacted_at_check
      check (
        (contacted = false and contacted_at is null)
        or (contacted = true and contacted_at is not null)
      );
  end if;
end
$lead_constraints$;

comment on table public.chat_leads is
  'Contact details from the study assistant. Saved only when consent is true. Admins can read and mark contacted.';

create index if not exists chat_leads_created_at_idx
  on public.chat_leads (created_at desc);

create index if not exists chat_leads_email_idx
  on public.chat_leads (email);

create or replace function public.consume_chat_quota(
  p_ip_hash text,
  p_kind text,
  p_limit integer
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $fn$
declare
  today date := (now() at time zone 'utc')::date;
  next_count integer;
begin
  if p_ip_hash is null or char_length(p_ip_hash) < 32 or char_length(p_ip_hash) > 128 then
    raise exception 'invalid ip hash';
  end if;

  if p_kind not in ('message', 'lead') then
    raise exception 'invalid quota kind';
  end if;

  if p_limit is null or p_limit < 1 or p_limit > 1000 then
    raise exception 'invalid quota limit';
  end if;

  insert into public.chat_daily_usage as usage (ip_hash, usage_date, message_count, lead_count)
  values (
    p_ip_hash,
    today,
    case when p_kind = 'message' then 1 else 0 end,
    case when p_kind = 'lead' then 1 else 0 end
  )
  on conflict (ip_hash, usage_date)
  do update set
    message_count = usage.message_count + case when p_kind = 'message' then 1 else 0 end,
    lead_count = usage.lead_count + case when p_kind = 'lead' then 1 else 0 end
  where (
    p_kind = 'message' and usage.message_count < p_limit
  ) or (
    p_kind = 'lead' and usage.lead_count < p_limit
  )
  returning case
    when p_kind = 'message' then usage.message_count
    else usage.lead_count
  end
  into next_count;

  if next_count is null then
    select case
      when p_kind = 'message' then message_count
      else lead_count
    end
    into next_count
    from public.chat_daily_usage
    where ip_hash = p_ip_hash
      and usage_date = today;

    return jsonb_build_object(
      'allowed', false,
      'count', coalesce(next_count, p_limit)
    );
  end if;

  return jsonb_build_object('allowed', true, 'count', next_count);
end;
$fn$;

comment on function public.consume_chat_quota(text, text, integer) is
  'Service-role counter for assistant messages and contact-form submits. Returns allowed false at the daily cap without incrementing.';

revoke all on function public.consume_chat_quota(text, text, integer) from public, anon, authenticated;
grant execute on function public.consume_chat_quota(text, text, integer) to service_role;

create or replace function public.protect_chat_lead_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if auth.uid() is not null and not public.is_admin() then
    raise exception 'Not allowed';
  end if;

  if new.id is distinct from old.id
     or new.created_at is distinct from old.created_at
     or new.name is distinct from old.name
     or new.email is distinct from old.email
     or new.country_of_interest is distinct from old.country_of_interest
     or new.study_level is distinct from old.study_level
     or new.message is distinct from old.message
     or new.consent is distinct from old.consent then
    raise exception 'Only the contacted status can be changed.';
  end if;

  if new.contacted and not old.contacted then
    new.contacted_at := now();
  elsif not new.contacted then
    new.contacted_at := null;
  end if;

  return new;
end;
$fn$;

comment on function public.protect_chat_lead_update() is
  'Admins may change only contacted. contacted_at is set or cleared with that flag.';

drop trigger if exists chat_leads_protect_update on public.chat_leads;

create trigger chat_leads_protect_update
  before update on public.chat_leads
  for each row
  execute function public.protect_chat_lead_update();

alter table public.chat_daily_usage enable row level security;
alter table public.chat_leads enable row level security;

grant usage on schema public to anon, authenticated, service_role;

revoke all on table public.chat_daily_usage from public, anon, authenticated;
grant all on table public.chat_daily_usage to service_role;

revoke all on table public.chat_leads from public, anon, authenticated;
grant select, update on table public.chat_leads to authenticated;
grant all on table public.chat_leads to service_role;

drop policy if exists chat_leads_select_admin on public.chat_leads;
drop policy if exists chat_leads_update_admin on public.chat_leads;

-- is_admin() reads profiles (security definer). It does not read chat_leads.
create policy chat_leads_select_admin
  on public.chat_leads
  for select
  to authenticated
  using (public.is_admin());

create policy chat_leads_update_admin
  on public.chat_leads
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

notify pgrst, 'reload schema';
