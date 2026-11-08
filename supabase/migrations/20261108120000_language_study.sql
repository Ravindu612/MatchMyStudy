-- =====================================================================
-- Language Study attempts, credits, and orders.
--
-- REVIEW ONLY. Do not apply this file to production from the app.
-- The running app fails closed until this migration exists and
-- SUPABASE_SERVICE_ROLE_KEY is configured: counted practice is not
-- scored, and nothing is unlocked.
--
-- Prices are not stored here. Checkout stays off in application config
-- until the owner sets prices and an explicit payments flag.
--
-- Authenticated users can read their own rows. They cannot insert
-- credits, orders, or attempts. Those writes are service-role functions
-- that recheck the free cap, paid balance, and payment event.
-- Deleting a profile cascades these rows.
-- =====================================================================

create table if not exists public.language_study_orders (
  id uuid primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  idempotency_key text not null,
  product text not null,
  skill text not null,
  language_code text not null,
  exam_variant text,
  status text not null default 'pending',
  credits integer not null,
  stripe_checkout_session_id text,
  stripe_event_id text,
  checkout_url text,
  created_at timestamptz not null default now(),
  fulfilled_at timestamptz,
  unique (user_id, idempotency_key),
  unique (stripe_checkout_session_id),
  unique (stripe_event_id),
  check (product in ('task_batch', 'mock_test')),
  check (skill in ('reading', 'writing', 'listening')),
  check (language_code in ('en', 'fi')),
  check (exam_variant is null or exam_variant in ('ielts', 'toefl', 'pte', 'yki')),
  check (status in ('pending', 'fulfilled', 'expired')),
  check (credits > 0),
  check (char_length(idempotency_key) between 16 and 80)
);

create table if not exists public.language_study_attempts (
  id uuid primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  skill text not null,
  language_code text not null,
  task_id text not null,
  mode text not null,
  exam_variant text,
  credit_source text not null,
  score_correct integer,
  score_total integer,
  response jsonb not null default '{}'::jsonb,
  feedback jsonb,
  duration_seconds integer,
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  unique (user_id, task_id),
  check (skill in ('reading', 'writing', 'listening')),
  check (language_code in ('en', 'fi')),
  check (mode in ('practice', 'mock')),
  check (exam_variant is null or exam_variant in ('ielts', 'toefl', 'pte', 'yki')),
  check (credit_source in ('free', 'paid')),
  check (char_length(task_id) between 1 and 80),
  check (score_correct is null or score_correct >= 0),
  check (score_total is null or score_total >= 0),
  check (duration_seconds is null or duration_seconds > 0)
);

create table if not exists public.language_study_ledger (
  id uuid primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  skill text not null,
  language_code text not null,
  exam_variant text,
  amount integer not null,
  order_id uuid unique references public.language_study_orders (id) on delete cascade,
  attempt_id uuid unique references public.language_study_attempts (id) on delete cascade,
  created_at timestamptz not null default now(),
  check (skill in ('reading', 'writing', 'listening')),
  check (language_code in ('en', 'fi')),
  check (exam_variant is null or exam_variant in ('ielts', 'toefl', 'pte', 'yki')),
  check (amount <> 0),
  check (
    (order_id is not null and attempt_id is null and amount > 0)
    or (order_id is null and attempt_id is not null and amount < 0)
  )
);

create index if not exists language_study_attempts_user_idx
  on public.language_study_attempts (user_id, skill, language_code);

create index if not exists language_study_ledger_user_idx
  on public.language_study_ledger (user_id, skill, language_code);

alter table public.language_study_orders enable row level security;
alter table public.language_study_attempts enable row level security;
alter table public.language_study_ledger enable row level security;

revoke all on table public.language_study_orders from public, anon, authenticated;
revoke all on table public.language_study_attempts from public, anon, authenticated;
revoke all on table public.language_study_ledger from public, anon, authenticated;

grant select on table public.language_study_orders to authenticated;
grant select on table public.language_study_attempts to authenticated;
grant select on table public.language_study_ledger to authenticated;
grant all on table public.language_study_orders to service_role;
grant all on table public.language_study_attempts to service_role;
grant all on table public.language_study_ledger to service_role;

drop policy if exists language_study_orders_select_own on public.language_study_orders;
create policy language_study_orders_select_own
  on public.language_study_orders
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists language_study_attempts_select_own on public.language_study_attempts;
create policy language_study_attempts_select_own
  on public.language_study_attempts
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists language_study_ledger_select_own on public.language_study_ledger;
create policy language_study_ledger_select_own
  on public.language_study_ledger
  for select
  to authenticated
  using (auth.uid() = user_id);

create or replace function public.language_study_require_service()
returns void
language plpgsql
stable
as $fn$
begin
  if coalesce(auth.role(), '') is distinct from 'service_role' then
    raise exception 'Not allowed.'
      using errcode = '42501';
  end if;
end;
$fn$;

create or replace function public.language_study_balance(
  p_user_id uuid,
  p_skill text,
  p_language text,
  p_exam_variant text
)
returns integer
language sql
stable
security definer
set search_path = public
as $fn$
  select coalesce(sum(amount), 0)::integer
  from public.language_study_ledger
  where user_id = p_user_id
    and skill = p_skill
    and language_code = p_language
    and exam_variant is not distinct from p_exam_variant;
$fn$;

create or replace function public.language_study_save_practice(
  p_user_id uuid,
  p_skill text,
  p_language text,
  p_task_id text,
  p_access text,
  p_free_cap integer,
  p_response jsonb,
  p_feedback jsonb,
  p_score_correct integer,
  p_score_total integer,
  p_attempt_id uuid,
  p_ledger_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $fn$
declare
  existing public.language_study_attempts%rowtype;
  free_used integer;
  paid_balance integer;
  source text;
begin
  perform public.language_study_require_service();

  if p_free_cap < 0 or p_free_cap > 20 then
    raise exception 'Free cap is outside the allowed range.';
  end if;

  if p_access not in ('free', 'paid') then
    raise exception 'Invalid task access.';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));

  select * into existing
  from public.language_study_attempts
  where user_id = p_user_id and task_id = p_task_id;

  if found and existing.submitted_at is not null then
    return jsonb_build_object('status', 'existing', 'attempt', to_jsonb(existing));
  end if;

  if p_access = 'paid' and not found then
    return jsonb_build_object('status', 'not_open');
  end if;

  if found and existing.submitted_at is null then
    update public.language_study_attempts
    set response = p_response,
        feedback = p_feedback,
        score_correct = p_score_correct,
        score_total = p_score_total,
        submitted_at = now()
    where id = existing.id
    returning * into existing;

    return jsonb_build_object('status', 'recorded', 'attempt', to_jsonb(existing));
  end if;

  select count(*) into free_used
  from public.language_study_attempts
  where user_id = p_user_id
    and skill = p_skill
    and language_code = p_language
    and mode = 'practice'
    and credit_source = 'free'
    and submitted_at is not null;

  paid_balance := public.language_study_balance(p_user_id, p_skill, p_language, null);

  if p_access = 'free' and free_used < p_free_cap then
    source := 'free';
  elsif paid_balance > 0 then
    source := 'paid';
  elsif p_access = 'free' then
    return jsonb_build_object('status', 'free_cap');
  else
    return jsonb_build_object('status', 'payment_required');
  end if;

  insert into public.language_study_attempts (
    id, user_id, skill, language_code, task_id, mode, exam_variant,
    credit_source, score_correct, score_total, response, feedback,
    duration_seconds, started_at, submitted_at
  )
  values (
    p_attempt_id, p_user_id, p_skill, p_language, p_task_id, 'practice', null,
    source, p_score_correct, p_score_total, coalesce(p_response, '{}'::jsonb), p_feedback,
    null, now(), now()
  )
  returning * into existing;

  if source = 'paid' then
    insert into public.language_study_ledger (
      id, user_id, skill, language_code, exam_variant, amount, order_id, attempt_id
    )
    values (
      p_ledger_id, p_user_id, p_skill, p_language, null, -1, null, existing.id
    );
  end if;

  return jsonb_build_object('status', 'recorded', 'attempt', to_jsonb(existing));
end;
$fn$;

create or replace function public.language_study_open_item(
  p_user_id uuid,
  p_skill text,
  p_language text,
  p_task_id text,
  p_mode text,
  p_exam_variant text,
  p_duration_seconds integer,
  p_attempt_id uuid,
  p_ledger_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $fn$
declare
  existing public.language_study_attempts%rowtype;
  paid_balance integer;
begin
  perform public.language_study_require_service();
  perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));

  select * into existing
  from public.language_study_attempts
  where user_id = p_user_id and task_id = p_task_id;

  if found and existing.submitted_at is not null then
    return jsonb_build_object('status', 'already_submitted', 'attempt', to_jsonb(existing));
  end if;

  if found then
    return jsonb_build_object('status', 'already_open', 'attempt', to_jsonb(existing));
  end if;

  paid_balance := public.language_study_balance(p_user_id, p_skill, p_language, p_exam_variant);

  if paid_balance < 1 then
    return jsonb_build_object('status', 'payment_required');
  end if;

  insert into public.language_study_attempts (
    id, user_id, skill, language_code, task_id, mode, exam_variant,
    credit_source, response, feedback, duration_seconds, started_at, submitted_at
  )
  values (
    p_attempt_id, p_user_id, p_skill, p_language, p_task_id, p_mode, p_exam_variant,
    'paid', '{}'::jsonb, null, p_duration_seconds, now(), null
  )
  returning * into existing;

  insert into public.language_study_ledger (
    id, user_id, skill, language_code, exam_variant, amount, order_id, attempt_id
  )
  values (
    p_ledger_id, p_user_id, p_skill, p_language, p_exam_variant, -1, null, existing.id
  );

  return jsonb_build_object('status', 'opened', 'attempt', to_jsonb(existing));
end;
$fn$;

create or replace function public.language_study_save_mock(
  p_user_id uuid,
  p_task_id text,
  p_response jsonb,
  p_feedback jsonb,
  p_score_correct integer,
  p_score_total integer,
  p_now timestamptz
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $fn$
declare
  existing public.language_study_attempts%rowtype;
  deadline timestamptz;
  unscored jsonb := jsonb_build_object(
    'scoringKind', 'unscored',
    'officialScore', null,
    'examScore', null,
    'label', 'Time is up. This attempt was not scored.'
  );
begin
  perform public.language_study_require_service();
  perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));

  select * into existing
  from public.language_study_attempts
  where user_id = p_user_id and task_id = p_task_id and mode = 'mock';

  if not found then
    return jsonb_build_object('status', 'not_open');
  end if;

  if existing.submitted_at is not null then
    return jsonb_build_object('status', 'existing', 'attempt', to_jsonb(existing));
  end if;

  if existing.duration_seconds is not null then
    deadline := existing.started_at + make_interval(secs => existing.duration_seconds + 45);

    if p_now > deadline then
      update public.language_study_attempts
      set feedback = unscored,
          score_correct = null,
          score_total = null,
          submitted_at = p_now
      where id = existing.id
      returning * into existing;

      return jsonb_build_object('status', 'expired', 'attempt', to_jsonb(existing));
    end if;
  end if;

  update public.language_study_attempts
  set response = coalesce(p_response, '{}'::jsonb),
      feedback = p_feedback,
      score_correct = p_score_correct,
      score_total = p_score_total,
      submitted_at = p_now
  where id = existing.id
  returning * into existing;

  return jsonb_build_object('status', 'recorded', 'attempt', to_jsonb(existing));
end;
$fn$;

create or replace function public.language_study_create_order(
  p_user_id uuid,
  p_idempotency_key text,
  p_product text,
  p_skill text,
  p_language text,
  p_exam_variant text,
  p_credits integer,
  p_order_id uuid,
  p_block_if_entitled boolean,
  p_entitled_task_id text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $fn$
declare
  existing public.language_study_orders%rowtype;
  paid_balance integer;
begin
  perform public.language_study_require_service();
  perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));

  if p_block_if_entitled and p_exam_variant is not null and p_entitled_task_id is not null then
    paid_balance := public.language_study_balance(p_user_id, p_skill, p_language, p_exam_variant);

    if paid_balance > 0 or exists (
      select 1 from public.language_study_attempts
      where user_id = p_user_id and task_id = p_entitled_task_id
    ) then
      return jsonb_build_object('status', 'already_entitled');
    end if;
  end if;

  select * into existing
  from public.language_study_orders
  where user_id = p_user_id and idempotency_key = p_idempotency_key;

  if found then
    if existing.product <> p_product
      or existing.skill <> p_skill
      or existing.language_code <> p_language
      or existing.exam_variant is distinct from p_exam_variant
      or existing.credits <> p_credits
    then
      return jsonb_build_object('status', 'conflict');
    end if;

    return jsonb_build_object('status', 'reused', 'order', to_jsonb(existing));
  end if;

  insert into public.language_study_orders (
    id, user_id, idempotency_key, product, skill, language_code, exam_variant,
    status, credits
  )
  values (
    p_order_id, p_user_id, p_idempotency_key, p_product, p_skill, p_language, p_exam_variant,
    'pending', p_credits
  )
  returning * into existing;

  return jsonb_build_object('status', 'created', 'order', to_jsonb(existing));
end;
$fn$;

create or replace function public.language_study_fulfill_order(
  p_order_id uuid,
  p_event_id text,
  p_session_id text,
  p_user_id uuid,
  p_product text,
  p_skill text,
  p_language text,
  p_exam_variant text,
  p_payment_status text,
  p_mode text,
  p_ledger_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $fn$
declare
  existing public.language_study_orders%rowtype;
begin
  perform public.language_study_require_service();

  if p_mode is distinct from 'payment' or p_payment_status is distinct from 'paid' then
    return jsonb_build_object('status', 'not_paid');
  end if;

  perform pg_advisory_xact_lock(hashtextextended(p_order_id::text, 0));

  select * into existing
  from public.language_study_orders
  where id = p_order_id;

  if not found then
    return jsonb_build_object('status', 'not_found');
  end if;

  if existing.user_id <> p_user_id
    or existing.product <> p_product
    or existing.skill <> p_skill
    or existing.language_code <> p_language
    or existing.exam_variant is distinct from p_exam_variant
    or (
      existing.stripe_checkout_session_id is not null
      and existing.stripe_checkout_session_id <> p_session_id
    )
  then
    return jsonb_build_object('status', 'mismatch');
  end if;

  if existing.status = 'fulfilled' then
    return jsonb_build_object('status', 'already_fulfilled');
  end if;

  if exists (
    select 1 from public.language_study_ledger where order_id = existing.id
  ) then
    update public.language_study_orders
    set status = 'fulfilled',
        stripe_event_id = coalesce(stripe_event_id, p_event_id),
        fulfilled_at = coalesce(fulfilled_at, now())
    where id = existing.id;

    return jsonb_build_object('status', 'already_fulfilled');
  end if;

  if exists (
    select 1 from public.language_study_orders
    where stripe_event_id = p_event_id and id <> existing.id
  ) then
    return jsonb_build_object('status', 'duplicate_event');
  end if;

  update public.language_study_orders
  set status = 'fulfilled',
      stripe_checkout_session_id = p_session_id,
      stripe_event_id = p_event_id,
      fulfilled_at = now()
  where id = existing.id;

  insert into public.language_study_ledger (
    id, user_id, skill, language_code, exam_variant, amount, order_id, attempt_id
  )
  values (
    p_ledger_id, existing.user_id, existing.skill, existing.language_code,
    existing.exam_variant, existing.credits, existing.id, null
  );

  return jsonb_build_object('status', 'fulfilled');
end;
$fn$;

revoke all on function public.language_study_require_service() from public, anon, authenticated;
revoke all on function public.language_study_balance(uuid, text, text, text) from public, anon, authenticated;
revoke all on function public.language_study_save_practice(uuid, text, text, text, text, integer, jsonb, jsonb, integer, integer, uuid, uuid) from public, anon, authenticated;
revoke all on function public.language_study_open_item(uuid, text, text, text, text, text, integer, uuid, uuid) from public, anon, authenticated;
revoke all on function public.language_study_save_mock(uuid, text, jsonb, jsonb, integer, integer, timestamptz) from public, anon, authenticated;
revoke all on function public.language_study_create_order(uuid, text, text, text, text, text, integer, uuid, boolean, text) from public, anon, authenticated;
revoke all on function public.language_study_fulfill_order(uuid, text, text, uuid, text, text, text, text, text, text, uuid) from public, anon, authenticated;

grant execute on function public.language_study_save_practice(uuid, text, text, text, text, integer, jsonb, jsonb, integer, integer, uuid, uuid) to service_role;
grant execute on function public.language_study_open_item(uuid, text, text, text, text, text, integer, uuid, uuid) to service_role;
grant execute on function public.language_study_save_mock(uuid, text, jsonb, jsonb, integer, integer, timestamptz) to service_role;
grant execute on function public.language_study_create_order(uuid, text, text, text, text, text, integer, uuid, boolean, text) to service_role;
grant execute on function public.language_study_fulfill_order(uuid, text, text, uuid, text, text, text, text, text, text, uuid) to service_role;

comment on table public.language_study_attempts is
  'Signed-in language study attempts. Free cap and paid credits are enforced by service-role functions, not by the browser.';

notify pgrst, 'reload schema';
