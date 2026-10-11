-- Creating a post failed in production with:
--   new row violates row-level security policy for table "posts"
-- on POST /rest/v1/posts?select=id
--
-- The insert check is auth.uid() = author_id AND status = 'active', and the
-- composer sends exactly that. The failure is the SELECT policy. PostgREST
-- `.select()` is INSERT ... RETURNING, and Postgres applies posts_select to
-- the new row. That policy called can_view_post(id), which reads public.posts
-- again. The row being inserted is not visible to that lookup yet, so the
-- function returns false and Postgres raises the error above.
--
-- Check the new row's own columns instead. The boolean expression matches
-- can_view_post(). That function stays in place for child tables, which only
-- look up a post that already exists.

alter policy posts_select
  on public.posts
  using (
    public.is_admin()
    or author_id = auth.uid()
    or (
      status = 'active'
      and deleted_at is null
      and not public.is_blocked_between(author_id, auth.uid())
      and (
        visibility = 'public'
        or exists (
          select 1
          from public.follows f
          where f.follower_id = auth.uid()
            and f.following_id = author_id
        )
      )
    )
  );
