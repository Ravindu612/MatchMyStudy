"use client";

import PostEditor from "@/components/social/PostEditor";
import PostCard from "@/components/social/PostCard";
import { useViewer } from "@/components/social/SocialShell";
import { listFeedPosts, type FeedPost } from "@/lib/social/loadPosts";
import { createPost } from "@/lib/social/postActions";
import { messageForPostError } from "@/lib/social/postValidation";
import type { ResolvedTag } from "@/lib/social/postTags";
import { fetchTagLabels, tagLabelKey } from "@/lib/social/tagClient";
import { loginPathFor } from "@/lib/signupRole";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function FeedView() {
  const viewer = useViewer();
  const pathname = usePathname();
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [labels, setLabels] = useState<Map<string, ResolvedTag>>(new Map());
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [draftKey, setDraftKey] = useState(0);

  const rememberLabels = useCallback(async (nextPosts: FeedPost[]) => {
    const tags = nextPosts.flatMap((post) => post.tags);
    const described = await fetchTagLabels(tags);

    if (described.length === 0) {
      return;
    }

    setLabels((current) => {
      const merged = new Map(current);

      for (const tag of described) {
        merged.set(tagLabelKey(tag.target_type, tag.target_slug), tag);
      }

      return merged;
    });
  }, []);

  const refresh = useCallback(async (quiet: boolean) => {
    if (!quiet) {
      setStatus("loading");
    }

    const result = await listFeedPosts(0);

    if (!result.ok) {
      setStatus("error");
      return;
    }

    setPosts(result.posts);
    setHasMore(result.hasMore);
    setStatus("ready");
    await rememberLabels(result.posts);
  }, [rememberLabels]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const result = await listFeedPosts(0);

      if (cancelled) {
        return;
      }

      if (!result.ok) {
        setStatus("error");
        return;
      }

      setPosts(result.posts);
      setHasMore(result.hasMore);
      setStatus("ready");
      await rememberLabels(result.posts);
    })();

    return () => {
      cancelled = true;
    };
  }, [rememberLabels]);

  async function loadMore() {
    setLoadingMore(true);
    const result = await listFeedPosts(posts.length);
    setLoadingMore(false);

    if (!result.ok) {
      setError("Couldn't load more posts.");
      return;
    }

    setPosts((current) => {
      const seen = new Set(current.map((post) => post.id));
      return [...current, ...result.posts.filter((post) => !seen.has(post.id))];
    });
    setHasMore(result.hasMore);
    await rememberLabels(result.posts);
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sr-only">Feed</h1>
      {viewer.status === "ready" ? (
        <PostEditor
          key={draftKey}
          mode="create"
          displayName={viewer.displayName}
          avatarUrl={viewer.avatarUrl}
          submitting={submitting}
          error={error}
          onSubmit={async (value) => {
            setSubmitting(true);
            setError(null);

            try {
              await createPost({
                body: value.body,
                visibility: value.visibility,
                tags: value.tags.map((tag) => ({
                  target_type: tag.target_type,
                  target_slug: tag.target_slug,
                })),
                images: value.images,
              });
              setDraftKey((current) => current + 1);
              await refresh(true);
            } catch (createError) {
              setError(messageForPostError(createError, "Couldn't publish this post."));
            } finally {
              setSubmitting(false);
            }
          }}
        />
      ) : viewer.status === "anonymous" ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-slate-700">Share your study abroad journey...</p>
          <a
            href={loginPathFor(pathname)}
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Log in to post
          </a>
        </section>
      ) : (
        <div className="h-36 animate-pulse rounded-2xl bg-white shadow-sm" />
      )}

      {status === "loading" ? (
        <div className="space-y-4">
          <div className="h-48 animate-pulse rounded-2xl bg-white shadow-sm" />
          <div className="h-48 animate-pulse rounded-2xl bg-white shadow-sm" />
        </div>
      ) : null}

      {status === "error" ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-slate-700">Couldn&apos;t load the feed.</p>
          <button
            type="button"
            onClick={() => refresh(false)}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Try again
          </button>
        </section>
      ) : null}

      {status === "ready" && posts.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-900">No posts yet</p>
          <p className="mt-2 text-sm text-slate-600">
            When students, consultants, and universities share something, it will show up here.
          </p>
        </section>
      ) : null}

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          labels={labels}
          viewerId={viewer.id}
          onChanged={() => refresh(true)}
          onDeleted={() => setPosts((current) => current.filter((item) => item.id !== post.id))}
        />
      ))}

      {hasMore ? (
        <button
          type="button"
          onClick={loadMore}
          disabled={loadingMore}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-60"
        >
          {loadingMore ? "Loading..." : "Show more posts"}
        </button>
      ) : null}
    </div>
  );
}
