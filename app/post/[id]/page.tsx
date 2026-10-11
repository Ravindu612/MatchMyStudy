import PostPage from "@/components/social/PostPage";
import { getShareablePost, getVisiblePost, isPostId, type FeedPost } from "@/lib/social/loadPosts";
import { describePostTags } from "@/lib/social/postTags";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import {
  DEFAULT_OPEN_GRAPH,
  DEFAULT_TWITTER,
  truncateDescription,
} from "@/lib/seo-meta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  if (!isPostId(id)) {
    return {
      title: "Post not found | MatchMyStudy",
      robots: { index: false, follow: false },
    };
  }

  const viewerPost = await postForSignedInViewer(id);

  if (viewerPost.checked && !viewerPost.post) {
    return {
      title: "Post | MatchMyStudy",
      robots: { index: false, follow: false },
    };
  }

  const post =
    viewerPost.checked && viewerPost.post?.visibility === "public"
      ? viewerPost.post
      : viewerPost.checked
        ? null
        : await getShareablePost(id);

  if (!post) {
    return {
      title: "Post | MatchMyStudy",
      robots: { index: false, follow: false },
    };
  }

  const author = post.author?.displayName ?? "Member";
  const path = `/post/${post.id}`;
  const title = `${author} on MatchMyStudy`;
  const description = truncateDescription(post.body);
  const image = post.media[0]?.url;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      type: "article",
      title,
      description,
      url: path,
      publishedTime: post.createdAt,
      ...(image
        ? {
            images: [
              {
                url: image,
                alt: `Photo from ${author}`,
                ...(post.media[0]?.width ? { width: post.media[0].width } : {}),
                ...(post.media[0]?.height ? { height: post.media[0].height } : {}),
              },
            ],
          }
        : {}),
    },
    twitter: {
      ...DEFAULT_TWITTER,
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function ShareablePostPage({ params }: Props) {
  const { id } = await params;

  if (!isPostId(id)) {
    notFound();
  }

  const viewerPost = await postForSignedInViewer(id);
  const post = viewerPost.checked ? viewerPost.post : await getShareablePost(id);
  const labels = post
    ? describePostTags(
        post.tags.map((tag) => ({
          target_type: tag.targetType,
          target_slug: tag.slug,
        }))
      )
    : [];

  return <PostPage id={id} initialPost={post} initialLabels={labels} />;
}

/**
 * Signed-in requests use the cookie session so block and follow rules hide
 * posts before HTML is sent. Logged-out requests keep the public anon read.
 */
async function postForSignedInViewer(
  id: string
): Promise<{ checked: boolean; post: FeedPost | null }> {
  try {
    const server = await createSupabaseServerClient();
    const {
      data: { user },
    } = await server.auth.getUser();

    if (!user) {
      return { checked: false, post: null };
    }

    const visible = await getVisiblePost(id, server);

    if (visible.error) {
      return { checked: false, post: null };
    }

    return { checked: true, post: visible.post };
  } catch (error) {
    console.error(
      "Load viewer post error:",
      error instanceof Error ? error.message : "unknown"
    );
    return { checked: false, post: null };
  }
}
