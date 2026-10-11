import PostPage from "@/components/social/PostPage";
import { getShareablePost, isPostId } from "@/lib/social/loadPosts";
import { describePostTags } from "@/lib/social/postTags";
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

  const post = await getShareablePost(id);

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

  const post = await getShareablePost(id);
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
