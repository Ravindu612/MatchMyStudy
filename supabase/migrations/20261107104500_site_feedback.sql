-- =====================================================================
-- Anonymous site feedback
--
-- Safe to run more than once.
--
-- Rows are ratings from /helpful. There is no name, email, or account.
-- source is the page or entry point (home, direct, /australia, /blog/slug).
--
-- anon and authenticated may insert only. There is no public read, update,
-- or delete policy. Review rows in the Supabase dashboard; service_role
-- bypasses row level security.
-- =====================================================================

create table if not exists public.site_feedback (
  id uuid primary key default gen_random_uuid(),
  rating text not null,
  source text not null,
  created_at timestamptz not null default now()
);

do $constraints$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'site_feedback_rating_check'
      and conrelid = 'public.site_feedback'::regclass
  ) then
    alter table public.site_feedback
      add constraint site_feedback_rating_check
      check (
        rating in (
          'Extremely helpful',
          'Helpful',
          'Satisfactory',
          'Not helpful'
        )
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'site_feedback_source_check'
      and conrelid = 'public.site_feedback'::regclass
  ) then
    alter table public.site_feedback
      add constraint site_feedback_source_check
      check (
        char_length(source) between 1 and 120
        and source ~ '^(home|direct|/[-a-z0-9]+(/[-a-z0-9]+)*)$'
      );
  end if;
end
$constraints$;

comment on table public.site_feedback is
  'Anonymous ratings from /helpful. No personal data. Public roles may insert only.';

comment on column public.site_feedback.rating is
  'One of: Extremely helpful, Helpful, Satisfactory, Not helpful.';

comment on column public.site_feedback.source is
  'Page or entry point, such as home, direct, /australia, or /blog/slug.';

create index if not exists site_feedback_created_at_idx
  on public.site_feedback (created_at desc);

alter table public.site_feedback enable row level security;

revoke all on table public.site_feedback from public;
revoke all on table public.site_feedback from anon, authenticated;
grant insert on table public.site_feedback to anon, authenticated;
grant all on table public.site_feedback to service_role;

drop policy if exists site_feedback_insert on public.site_feedback;

create policy site_feedback_insert
  on public.site_feedback
  for insert
  to anon, authenticated
  with check (true);
