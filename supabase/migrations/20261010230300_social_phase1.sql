-- =====================================================================
-- MatchMyStudy social phase 1
--
-- Database foundation only. No application code reads these tables yet.
--
-- Production (project jxmtbvzdhayfxjgetyzq), confirmed before writing this:
--   * public.profiles
--       id uuid primary key
--       email text null
--       role text not null          -- student | consultant | admin
--       created_at timestamptz      -- already present; not modified
--       RLS on. Policies:
--         "Users can read own profile"   SELECT authenticated  auth.uid() = id
--         "Users can create own profile" INSERT authenticated  auth.uid() = id
--       No public SELECT, so profiles.email is not exposed. This migration
--       keeps that. Public fields are served by public.public_profiles.
--   * public.consultants
--       id uuid, owner_id uuid, slug text, verified boolean, is_pro boolean,
--       logo text, banner text (and other columns this migration does not touch).
--       Joins use owner_id = profiles.id. No text casts.
--   * Trigger on_auth_user_created -> public.handle_new_user() SECURITY DEFINER
--       insert into profiles (id, email, role)
--       values (new.id, new.email,
--               coalesce(new.raw_user_meta_data->>'role', 'student'))
--   * Storage buckets already public, and left unchanged:
--       consultant-logos, consultant-banners, consultant-success-stories,
--       consultant-promotional-content
--
-- Security fix (same migration):
--   Signup metadata is client-controlled, so the old handle_new_user() stored
--   role = 'admin' when the client asked for it. The function is replaced in
--   place (no second trigger). Only 'student' and 'consultant' are accepted;
--   anything else, including 'admin', is stored as 'student'. The existing
--   INSERT policy is tightened so a direct insert cannot set role = 'admin'
--   or the staff-only flags. Existing rows with role = 'admin' are not demoted.
--
-- Draft corrections:
--   * Social defaults live in handle_new_user(), not a second BEFORE INSERT
--     trigger. on_auth_user_created is not recreated.
--   * The own-row SELECT policy is kept. No public SELECT is added on profiles.
--   * An owner/admin UPDATE policy is added so the new columns can be edited.
--     A separate admin SELECT lets staff read profiles. Neither is public.
--   * created_at is not added and existing values are not rewritten.
--   * citext is created in the extensions schema (Supabase convention).
--   * public_profiles is security_invoker = false on purpose: profiles RLS
--     hides other people's rows, and this view must still expose the safe
--     columns. security_barrier is on. email is not in the view.
--   * At most one consultant row is joined (verified, then pro, then slug).
--   * Generated handles use 24 hex characters, with a numeric suffix if needed.
--   * Existing admins get account_type 'other' (not 'student'). A rejected
--     signup that asked for admin is still role student / account_type student.
--   * profiles.role is constrained to student, consultant, or admin.
-- =====================================================================

-- Refuse to run if this is not the database described above.
do $preflight$
declare
  id_type text;
  role_type text;
  email_type text;
  consultant_id_type text;
  owner_type text;
begin
  select data_type into id_type
  from information_schema.columns
  where table_schema = 'public' and table_name = 'profiles' and column_name = 'id';

  select data_type into role_type
  from information_schema.columns
  where table_schema = 'public' and table_name = 'profiles' and column_name = 'role';

  select data_type into email_type
  from information_schema.columns
  where table_schema = 'public' and table_name = 'profiles' and column_name = 'email';

  select data_type into consultant_id_type
  from information_schema.columns
  where table_schema = 'public' and table_name = 'consultants' and column_name = 'id';

  select data_type into owner_type
  from information_schema.columns
  where table_schema = 'public' and table_name = 'consultants' and column_name = 'owner_id';

  if id_type is distinct from 'uuid'
     or role_type is distinct from 'text'
     or email_type is distinct from 'text'
     or consultant_id_type is distinct from 'uuid'
     or owner_type is distinct from 'uuid' then
    raise exception
      'Refusing to migrate. Expected profiles(id uuid, email text, role text) and consultants(id uuid, owner_id uuid). Got profiles id=%, email=%, role=%, consultants id=%, owner_id=%.',
      id_type, email_type, role_type, consultant_id_type, owner_type;
  end if;

  if not exists (
    select 1
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'handle_new_user'
  ) then
    raise exception
      'public.handle_new_user() is missing. This migration replaces that function and does not create a second signup trigger.';
  end if;

  if not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'consultants'
      and column_name = 'name'
      and data_type in ('text', 'character varying')
  ) then
    raise exception 'consultants.name text is missing. Profile backfill uses the owned listing name.';
  end if;

  if not exists (
    select 1
    from pg_policy pol
    join pg_class c on c.oid = pol.polrelid
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relname = 'profiles'
      and pol.polname = 'Users can read own profile'
  ) then
    raise exception
      'Expected profiles policy "Users can read own profile" is missing. Refusing to change profile visibility.';
  end if;
end
$preflight$;

create schema if not exists extensions;
create extension if not exists citext with schema extensions;

-- ---------- Enums ----------
create type public.profile_role as enum (
  'student',
  'current_student',
  'consultant',
  'education_provider',
  'other'
);
create type public.post_visibility as enum ('public', 'followers');
create type public.content_status as enum ('active', 'hidden', 'removed');
create type public.report_target as enum ('post', 'comment', 'profile');
create type public.report_status as enum ('open', 'reviewing', 'actioned', 'dismissed');

-- ---------- Admin check ----------
-- profiles.role is text. SECURITY DEFINER so the policies below can call this
-- without recursing through profiles RLS. The migration role owns the function
-- and bypasses RLS, matching handle_new_user() today.
create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $fn$
  select exists (
    select 1
    from public.profiles
    where id = uid
      and role = 'admin'
  );
$fn$;

-- ---------- Extend profiles ----------
-- created_at already exists and is left as-is.
alter table public.profiles
  add column handle extensions.citext,
  add column display_name text,
  add column account_type public.profile_role,
  add column headline text,
  add column bio text,
  add column country text,
  add column target_countries text[] not null default '{}',
  add column avatar_url text,
  add column cover_url text,
  add column is_verified boolean not null default false,
  add column is_upgraded boolean not null default false,
  add column updated_at timestamptz not null default now();

comment on column public.profiles.role is
  'Permission role: student, consultant, or admin. Clients cannot grant admin. Social identity is account_type.';
comment on column public.profiles.account_type is
  'Self-declared social identity. Independent from profiles.role, which stays the permission check used by the app.';

-- Existing rows. Consultant display names come from the owned listing.
-- Verified / pro wins when one person owns more than one listing.
update public.profiles p
set
  display_name = left(btrim(coalesce(
    nullif(btrim(coalesce(c.name, '')), ''),
    nullif(btrim(split_part(coalesce(p.email, ''), '@', 1)), ''),
    'User'
  )), 80),
  account_type = case
    when p.role = 'consultant' then 'consultant'::public.profile_role
    -- Permission role, not a social identity. Do not present staff as students.
    when p.role = 'admin' then 'other'::public.profile_role
    else 'student'::public.profile_role
  end
from (
  select
    p2.id,
    listing.name
  from public.profiles p2
  left join lateral (
    select c.name
    from public.consultants c
    where c.owner_id = p2.id
    order by c.verified desc, c.is_pro desc, c.slug asc
    limit 1
  ) listing on true
) c
where c.id = p.id
  and (p.display_name is null or p.account_type is null);

update public.profiles
set display_name = 'User'
where display_name is null or btrim(display_name) = '';

do $handles$
declare
  rec record;
  candidate text;
  suffix int;
begin
  for rec in
    select id
    from public.profiles
    where handle is null
    order by id
  loop
    candidate := 'user_' || substr(replace(rec.id::text, '-', ''), 1, 24);
    suffix := 0;
    while exists (
      select 1
      from public.profiles p
      where p.handle::text = candidate
        and p.id <> rec.id
    ) loop
      suffix := suffix + 1;
      candidate := 'user_' || substr(replace(rec.id::text, '-', ''), 1, 20) || suffix::text;
      if suffix > 100 then
        raise exception 'Could not allocate a unique handle for profile %', rec.id;
      end if;
    end loop;

    update public.profiles
    set handle = candidate
    where id = rec.id;
  end loop;
end
$handles$;

alter table public.profiles
  alter column handle set not null,
  alter column display_name set not null,
  alter column account_type set not null,
  alter column account_type set default 'student',
  add constraint profiles_handle_key unique (handle),
  add constraint profiles_handle_format check ((handle::text) ~ '^[A-Za-z0-9_]{3,30}$'),
  add constraint profiles_display_name_len check (char_length(display_name) between 1 and 80),
  add constraint profiles_headline_len check (char_length(headline) <= 160),
  add constraint profiles_bio_len check (char_length(bio) <= 2000),
  add constraint profiles_role_known check (role in ('student', 'consultant', 'admin'));

create index profiles_account_type_idx on public.profiles (account_type);

-- ---------- Public directory (no email) ----------
create view public.public_profiles
with (security_invoker = false, security_barrier = true) as
select
  p.id,
  p.handle,
  p.display_name,
  p.account_type,
  p.headline,
  p.bio,
  p.country,
  p.target_countries,
  p.avatar_url,
  p.cover_url,
  (p.is_verified or coalesce(c.verified, false)) as is_verified,
  (p.is_upgraded or coalesce(c.is_pro, false)) as is_upgraded,
  c.slug as consultant_slug,
  p.created_at
from public.profiles p
left join lateral (
  select c.verified, c.is_pro, c.slug
  from public.consultants c
  where c.owner_id = p.id
  order by c.verified desc, c.is_pro desc, c.slug asc
  limit 1
) c on true;

comment on view public.public_profiles is
  'Email-free profile directory. security_invoker is false so profiles RLS does not hide every other user. Do not add profiles.email here.';

revoke all on table public.public_profiles from anon, authenticated;
grant select on table public.public_profiles to anon, authenticated, service_role;

-- ---------- Signup function (replaces the existing one; same trigger) ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $fn$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  requested_role text := lower(btrim(coalesce(meta->>'role', '')));
  safe_role text;
  new_handle text;
  new_display text;
  suffix int := 0;
begin
  -- Metadata is whatever the browser sent to signUp(). Never copy admin from it.
  if requested_role in ('student', 'consultant') then
    safe_role := requested_role;
  else
    safe_role := 'student';
  end if;

  new_handle := 'user_' || substr(replace(new.id::text, '-', ''), 1, 24);
  while exists (
    select 1
    from public.profiles p
    where p.handle::text = new_handle
  ) loop
    suffix := suffix + 1;
    new_handle := 'user_' || substr(replace(new.id::text, '-', ''), 1, 20) || suffix::text;
    if suffix > 100 then
      raise exception 'Could not allocate a unique profile handle for %', new.id;
    end if;
  end loop;

  new_display := left(btrim(coalesce(
    nullif(btrim(coalesce(meta->>'full_name', '')), ''),
    nullif(btrim(coalesce(meta->>'name', '')), ''),
    nullif(btrim(split_part(coalesce(new.email, ''), '@', 1)), ''),
    'New user'
  )), 80);

  if new_display = '' then
    new_display := 'New user';
  end if;

  insert into public.profiles (
    id,
    email,
    role,
    handle,
    display_name,
    account_type,
    avatar_url,
    is_verified,
    is_upgraded
  ) values (
    new.id,
    new.email,
    safe_role,
    new_handle,
    new_display,
    case
      when safe_role = 'consultant' then 'consultant'::public.profile_role
      else 'student'::public.profile_role
    end,
    nullif(meta->>'avatar_url', ''),
    false,
    false
  );

  return new;
end;
$fn$;

comment on function public.handle_new_user() is
  'Auth signup insert for public.profiles. Role metadata may only be student or consultant; any other value is stored as student. Also fills the social columns. Trigger on_auth_user_created already calls this.';

-- ---------- Profile policies ----------
-- Same policy name, stricter WITH CHECK. Own-row SELECT is untouched.
drop policy "Users can create own profile" on public.profiles;

create policy "Users can create own profile"
on public.profiles
for insert
to authenticated
with check (
  auth.uid() = id
  and role in ('student', 'consultant')
  and is_verified = false
  and is_upgraded = false
);

create policy profiles_update_own
on public.profiles
for update
to authenticated
using (auth.uid() = id or public.is_admin())
with check (auth.uid() = id or public.is_admin());

create policy profiles_select_admin
on public.profiles
for select
to authenticated
using (public.is_admin());

grant update on table public.profiles to authenticated;

-- ---------- Follows ----------
create table public.follows (
  follower_id uuid not null,
  following_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  constraint follows_follower_id_fkey
    foreign key (follower_id) references public.profiles (id) on delete cascade,
  constraint follows_following_id_fkey
    foreign key (following_id) references public.profiles (id) on delete cascade,
  constraint follows_no_self check (follower_id <> following_id)
);

create index follows_following_idx on public.follows (following_id);

-- ---------- Blocks ----------
create table public.blocks (
  blocker_id uuid not null,
  blocked_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  constraint blocks_blocker_id_fkey
    foreign key (blocker_id) references public.profiles (id) on delete cascade,
  constraint blocks_blocked_id_fkey
    foreign key (blocked_id) references public.profiles (id) on delete cascade,
  constraint blocks_no_self check (blocker_id <> blocked_id)
);

create index blocks_blocked_idx on public.blocks (blocked_id);

create or replace function public.is_blocked_between(a uuid, b uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $fn$
  select exists (
    select 1
    from public.blocks
    where (blocker_id = a and blocked_id = b)
       or (blocker_id = b and blocked_id = a)
  );
$fn$;

-- ---------- Posts ----------
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null,
  body text not null,
  visibility public.post_visibility not null default 'public',
  status public.content_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  edited_at timestamptz,
  deleted_at timestamptz,
  constraint posts_author_id_fkey
    foreign key (author_id) references public.profiles (id) on delete cascade,
  constraint posts_body_len check (char_length(body) between 1 and 5000)
);

create index posts_feed_idx
  on public.posts (created_at desc)
  where status = 'active' and deleted_at is null;

create index posts_author_idx on public.posts (author_id, created_at desc);

create or replace function public.can_view_post(p_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $fn$
  select exists (
    select 1
    from public.posts p
    where p.id = p_id
      and (
        public.is_admin()
        or p.author_id = auth.uid()
        or (
          p.status = 'active'
          and p.deleted_at is null
          and not public.is_blocked_between(p.author_id, auth.uid())
          and (
            p.visibility = 'public'
            or exists (
              select 1
              from public.follows f
              where f.follower_id = auth.uid()
                and f.following_id = p.author_id
            )
          )
        )
      )
  );
$fn$;

-- ---------- Post media ----------
create table public.post_media (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null,
  storage_path text not null unique,
  media_type text not null default 'image',
  width int,
  height int,
  position smallint not null default 0,
  created_at timestamptz not null default now(),
  constraint post_media_post_id_fkey
    foreign key (post_id) references public.posts (id) on delete cascade,
  constraint post_media_type_image check (media_type in ('image')),
  constraint post_media_width_positive check (width is null or width > 0),
  constraint post_media_height_positive check (height is null or height > 0),
  constraint post_media_position_range check (position between 0 and 9)
);

create index post_media_post_idx on public.post_media (post_id, position);

-- ---------- Post tags (slugs from data/*.ts; those are not database tables) ----------
create table public.post_tags (
  post_id uuid not null,
  target_type text not null,
  target_slug text not null,
  primary key (post_id, target_type, target_slug),
  constraint post_tags_post_id_fkey
    foreign key (post_id) references public.posts (id) on delete cascade,
  constraint post_tags_target_type check (target_type in ('country', 'university', 'program')),
  constraint post_tags_slug_format check (target_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$')
);

create index post_tags_target_idx on public.post_tags (target_type, target_slug);

-- ---------- Likes ----------
create table public.post_likes (
  post_id uuid not null,
  user_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (post_id, user_id),
  constraint post_likes_post_id_fkey
    foreign key (post_id) references public.posts (id) on delete cascade,
  constraint post_likes_user_id_fkey
    foreign key (user_id) references public.profiles (id) on delete cascade
);

create index post_likes_user_idx on public.post_likes (user_id);

-- ---------- Comments ----------
create table public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null,
  author_id uuid not null,
  body text not null,
  status public.content_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint comments_post_id_fkey
    foreign key (post_id) references public.posts (id) on delete cascade,
  constraint comments_author_id_fkey
    foreign key (author_id) references public.profiles (id) on delete cascade,
  constraint comments_body_len check (char_length(body) between 1 and 2000)
);

create index comments_post_idx on public.comments (post_id, created_at);
create index comments_author_idx on public.comments (author_id);

-- ---------- Reports ----------
create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null,
  target_type public.report_target not null,
  target_id uuid not null,
  reason text not null,
  status public.report_status not null default 'open',
  reviewed_by uuid,
  resolution_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint reports_reporter_id_fkey
    foreign key (reporter_id) references public.profiles (id) on delete cascade,
  constraint reports_reviewed_by_fkey
    foreign key (reviewed_by) references public.profiles (id) on delete set null,
  constraint reports_reason_len check (char_length(reason) between 1 and 1000),
  constraint reports_reporter_target_key unique (reporter_id, target_type, target_id)
);

create index reports_queue_idx on public.reports (status, created_at);

-- ---------- Triggers ----------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $fn$
begin
  new.updated_at := now();
  return new;
end;
$fn$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger posts_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

create trigger comments_updated_at
  before update on public.comments
  for each row execute function public.set_updated_at();

create trigger reports_updated_at
  before update on public.reports
  for each row execute function public.set_updated_at();

create or replace function public.mark_post_edited()
returns trigger
language plpgsql
set search_path = public
as $fn$
begin
  if new.body is distinct from old.body then
    new.edited_at := now();
  end if;
  return new;
end;
$fn$;

create trigger posts_mark_edited
  before update on public.posts
  for each row execute function public.mark_post_edited();

-- Staff-only columns. Service role (auth.uid() is null) and admins can still change them.
create or replace function public.protect_profile_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if auth.uid() is not null and not public.is_admin() then
    new.role := old.role;
    new.is_verified := old.is_verified;
    new.is_upgraded := old.is_upgraded;
  end if;
  return new;
end;
$fn$;

create trigger profiles_protect
  before update on public.profiles
  for each row execute function public.protect_profile_fields();

create or replace function public.protect_content_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if auth.uid() is not null and not public.is_admin() then
    new.status := old.status;
  end if;
  return new;
end;
$fn$;

create trigger posts_protect_status
  before update on public.posts
  for each row execute function public.protect_content_status();

create trigger comments_protect_status
  before update on public.comments
  for each row execute function public.protect_content_status();

create or replace function public.rate_limit_posts()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if (
    select count(*)
    from public.posts
    where author_id = new.author_id
      and created_at > now() - interval '1 hour'
  ) >= 20 then
    raise exception 'Rate limit: too many posts, try again later';
  end if;
  return new;
end;
$fn$;

create trigger posts_rate_limit
  before insert on public.posts
  for each row execute function public.rate_limit_posts();

create or replace function public.rate_limit_comments()
returns trigger
language plpgsql
security definer
set search_path = public
as $fn$
begin
  if (
    select count(*)
    from public.comments
    where author_id = new.author_id
      and created_at > now() - interval '1 hour'
  ) >= 60 then
    raise exception 'Rate limit: too many comments, try again later';
  end if;
  return new;
end;
$fn$;

create trigger comments_rate_limit
  before insert on public.comments
  for each row execute function public.rate_limit_comments();

-- ---------- Row level security ----------
alter table public.follows enable row level security;
alter table public.blocks enable row level security;
alter table public.posts enable row level security;
alter table public.post_media enable row level security;
alter table public.post_tags enable row level security;
alter table public.post_likes enable row level security;
alter table public.comments enable row level security;
alter table public.reports enable row level security;

create policy follows_select
  on public.follows for select
  using (true);

create policy follows_insert
  on public.follows for insert
  with check (
    auth.uid() = follower_id
    and not public.is_blocked_between(follower_id, following_id)
  );

create policy follows_delete
  on public.follows for delete
  using (auth.uid() = follower_id);

create policy blocks_select
  on public.blocks for select
  using (auth.uid() = blocker_id);

create policy blocks_insert
  on public.blocks for insert
  with check (auth.uid() = blocker_id);

create policy blocks_delete
  on public.blocks for delete
  using (auth.uid() = blocker_id);

create policy posts_select
  on public.posts for select
  using (public.can_view_post(id));

create policy posts_insert
  on public.posts for insert
  with check (auth.uid() = author_id and status = 'active');

create policy posts_update
  on public.posts for update
  using (auth.uid() = author_id or public.is_admin())
  with check (auth.uid() = author_id or public.is_admin());

create policy posts_delete
  on public.posts for delete
  using (auth.uid() = author_id or public.is_admin());

create policy post_media_select
  on public.post_media for select
  using (public.can_view_post(post_id));

create policy post_media_write
  on public.post_media for all
  using (
    exists (
      select 1 from public.posts p
      where p.id = post_id and p.author_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.posts p
      where p.id = post_id and p.author_id = auth.uid()
    )
    and split_part(storage_path, '/', 1) = auth.uid()::text
  );

create policy post_tags_select
  on public.post_tags for select
  using (public.can_view_post(post_id));

create policy post_tags_write
  on public.post_tags for all
  using (
    exists (
      select 1 from public.posts p
      where p.id = post_id and p.author_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.posts p
      where p.id = post_id and p.author_id = auth.uid()
    )
  );

create policy post_likes_select
  on public.post_likes for select
  using (public.can_view_post(post_id));

create policy post_likes_insert
  on public.post_likes for insert
  with check (auth.uid() = user_id and public.can_view_post(post_id));

create policy post_likes_delete
  on public.post_likes for delete
  using (auth.uid() = user_id);

create policy comments_select
  on public.comments for select
  using (
    public.is_admin()
    or author_id = auth.uid()
    or (
      status = 'active'
      and deleted_at is null
      and public.can_view_post(post_id)
      and not public.is_blocked_between(author_id, auth.uid())
    )
  );

create policy comments_insert
  on public.comments for insert
  with check (
    auth.uid() = author_id
    and status = 'active'
    and public.can_view_post(post_id)
  );

create policy comments_update
  on public.comments for update
  using (auth.uid() = author_id or public.is_admin())
  with check (auth.uid() = author_id or public.is_admin());

create policy comments_delete
  on public.comments for delete
  using (auth.uid() = author_id or public.is_admin());

create policy reports_select
  on public.reports for select
  using (auth.uid() = reporter_id or public.is_admin());

create policy reports_insert
  on public.reports for insert
  with check (
    auth.uid() = reporter_id
    and status = 'open'
    and reviewed_by is null
  );

create policy reports_update_admin
  on public.reports for update
  using (public.is_admin())
  with check (public.is_admin());

-- Table privileges. RLS still applies. profiles keeps its existing SELECT/INSERT
-- grants; authenticated also needs UPDATE for the new policy. anon is not granted
-- anything new on profiles.
revoke all on table public.follows from anon, authenticated;
grant select on table public.follows to anon, authenticated;
grant insert, delete on table public.follows to authenticated;
grant all on table public.follows to service_role;

revoke all on table public.blocks from anon, authenticated;
grant select, insert, delete on table public.blocks to authenticated;
grant all on table public.blocks to service_role;

revoke all on table public.posts from anon, authenticated;
grant select on table public.posts to anon, authenticated;
grant insert, update, delete on table public.posts to authenticated;
grant all on table public.posts to service_role;

revoke all on table public.post_media from anon, authenticated;
grant select on table public.post_media to anon, authenticated;
grant insert, update, delete on table public.post_media to authenticated;
grant all on table public.post_media to service_role;

revoke all on table public.post_tags from anon, authenticated;
grant select on table public.post_tags to anon, authenticated;
grant insert, update, delete on table public.post_tags to authenticated;
grant all on table public.post_tags to service_role;

revoke all on table public.post_likes from anon, authenticated;
grant select on table public.post_likes to anon, authenticated;
grant insert, delete on table public.post_likes to authenticated;
grant all on table public.post_likes to service_role;

revoke all on table public.comments from anon, authenticated;
grant select on table public.comments to anon, authenticated;
grant insert, update, delete on table public.comments to authenticated;
grant all on table public.comments to service_role;

revoke all on table public.reports from anon, authenticated;
grant select, insert, update on table public.reports to authenticated;
grant all on table public.reports to service_role;

grant execute on function public.is_admin(uuid) to anon, authenticated, service_role;
grant execute on function public.is_blocked_between(uuid, uuid) to anon, authenticated, service_role;
grant execute on function public.can_view_post(uuid) to anon, authenticated, service_role;

-- ---------- Storage ----------
-- New buckets only. consultant-logos, consultant-banners,
-- consultant-success-stories, and consultant-promotional-content are not updated.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('avatars', 'avatars', true, 5242880, array['image/jpeg', 'image/png', 'image/webp']),
  (
    'post-media',
    'post-media',
    true,
    5242880,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  );

-- Public bucket URLs are not secret. Followers-only images can still be fetched
-- by anyone who has the URL. Strip location EXIF in the client before upload.
create policy social_avatars_post_media_public_read
  on storage.objects for select
  using (bucket_id in ('avatars', 'post-media'));

create policy social_avatars_post_media_owner_insert
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id in ('avatars', 'post-media')
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy social_avatars_post_media_owner_update
  on storage.objects for update
  to authenticated
  using (
    bucket_id in ('avatars', 'post-media')
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id in ('avatars', 'post-media')
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy social_avatars_post_media_owner_delete
  on storage.objects for delete
  to authenticated
  using (
    bucket_id in ('avatars', 'post-media')
    and (
      (storage.foldername(name))[1] = auth.uid()::text
      or public.is_admin()
    )
  );

notify pgrst, 'reload schema';
