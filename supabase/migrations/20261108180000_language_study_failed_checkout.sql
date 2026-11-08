-- Adds a failed checkout state for language study orders.
-- Review only. Do not apply this to production from the app.
-- Apply 20261108120000_language_study.sql first.
-- A failed or expired Checkout does not grant credits. A fulfilled order is left fulfilled.

do $drop$
declare
  constraint_name text;
begin
  if to_regclass('public.language_study_orders') is null then
    raise exception 'Apply 20261108120000_language_study.sql before this migration.';
  end if;

  for constraint_name in
    select con.conname
    from pg_constraint con
    where con.conrelid = 'public.language_study_orders'::regclass
      and con.contype = 'c'
      and pg_get_constraintdef(con.oid) like '%pending%'
  loop
    execute format(
      'alter table public.language_study_orders drop constraint %I',
      constraint_name
    );
  end loop;
end
$drop$;

alter table public.language_study_orders
  add constraint language_study_orders_status_check
  check (status in ('pending', 'fulfilled', 'expired', 'failed'));

comment on constraint language_study_orders_status_check on public.language_study_orders is
  'failed means Checkout ended without payment. It does not grant credits.';
