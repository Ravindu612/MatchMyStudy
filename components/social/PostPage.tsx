"use client";

import PostCard from "@/components/social/PostCard";
import SocialShell, { useViewer } from "@/components/social/SocialShell";
import { getVisiblePost, type FeedPost } from "@/lib/social/loadPosts";
import type { ResolvedTag } from "@/lib/social/postTags";
import { fetchTagLabels, tagLabelKey } from "@/lib/social/tagClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  initialPost: FeedPost | null;
  initialLabels: ResolvedTag[];
};

export default function PostPage({ id, initialPost, initialLabels }: Props) {
  return (
    <SocialShell>
      <PostBody id={id} initialPost={initialPost} initialLabels={initialLabels} />
    </SocialShell>
  );
}

function PostBody({
  id,
  initialPost,
  initialLabels,
}: Props) {
  const viewer = useViewer();
  const router = useRouter();
  const [post, setPost] = useState<FeedPost | null>(initialPost);
  const [labels, setLabels] = useState<Map<string, ResolvedTag>>(() => {
    const map = new Map<string, ResolvedTag>();

    for (const tag of initialLabels) {
      map.set(tagLabelKey(tag.target_type, tag.target_slug), tag);
    }

    return map;
  });
  const [checked, setChecked] = useState(initialPost !== null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const visible = await getVisiblePost(id);

      if (cancelled) {
        return;
      }

      if (visible) {
        setPost(visible);
        const described = await fetchTagLabels(visible.tags);

        if (!cancelled && described.length > 0) {
          setLabels((current) => {
            const merged = new Map(current);

            for (const tag of described) {
              merged.set(tagLabelKey(tag.target_type, tag.target_slug), tag);
            }

            return merged;
          });
        }
      } else if (!initialPost) {
        setPost(null);
      }

      if (!cancelled) {
        setChecked(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id, initialPost]);

  if (!checked && !post) {
    return <div className="h-64 animate-pulse rounded-2xl bg-white shadow-sm" />;
  }

  if (!post) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">This post is unavailable</h1>
        <p className="mt-2 text-slate-600">
          It may be private, removed, or no longer shared.
        </p>
        <Link
          href="/feed"
          className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to feed
        </Link>
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Link href="/feed" className="text-sm font-semibold text-blue-700 hover:underline">
        Back to feed
      </Link>
      <PostCard
        post={post}
        labels={labels}
        viewerId={viewer.id}
        heading="h1"
        onChanged={async () => {
          const next = await getVisiblePost(id);

          if (!next) {
            router.push("/feed");
            return;
          }

          setPost(next);
          const described = await fetchTagLabels(next.tags);
          setLabels((current) => {
            const merged = new Map(current);

            for (const tag of described) {
              merged.set(tagLabelKey(tag.target_type, tag.target_slug), tag);
            }

            return merged;
          });
        }}
        onDeleted={() => router.push("/feed")}
      />
    </div>
  );
}
