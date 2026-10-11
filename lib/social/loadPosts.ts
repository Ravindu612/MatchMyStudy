import { cache } from "react";
import { supabase } from "@/lib/supabase";
import { safeImageUrl } from "@/lib/social/avatarPath";
import {
  loadPostEngagement,
  type CommentPreview,
  type SocialReader,
} from "@/lib/social/engagement";
import {
  isOwnPostMediaPath,
  POST_MEDIA_BUCKET,
} from "@/lib/social/postValidation";
import type { PostTagTarget, PostVisibility } from "@/types/social";

const POST_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const FEED_PAGE_SIZE = 20;

export type FeedMedia = {
  id: string;
  storagePath: string;
  url: string;
  width: number | null;
  height: number | null;
  position: number;
};

export type FeedTag = {
  targetType: PostTagTarget;
  slug: string;
};

export type FeedAuthor = {
  id: string;
  handle: string;
  displayName: string;
  accountType: string;
  avatarUrl: string | null;
  isVerified: boolean;
};

export type FeedPost = {
  id: string;
  authorId: string;
  body: string;
  visibility: PostVisibility;
  createdAt: string;
  editedAt: string | null;
  author: FeedAuthor | null;
  media: FeedMedia[];
  tags: FeedTag[];
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
  latestComment: CommentPreview | null;
};

export function isPostId(value: string): boolean {
  return POST_ID_PATTERN.test(value);
}

export function publicUrlForPostMedia(storagePath: string): string | null {
  const folder = storagePath.split("/")[0] ?? "";

  if (!isOwnPostMediaPath(storagePath, folder)) {
    return null;
  }

  const { data } = supabase.storage.from(POST_MEDIA_BUCKET).getPublicUrl(storagePath);

  return safeImageUrl(data.publicUrl);
}

export async function listFeedPosts(
  offset = 0,
  reader: SocialReader = supabase
): Promise<
  { ok: true; posts: FeedPost[]; hasMore: boolean } | { ok: false; message: string }
> {
  const start = Math.max(0, offset);
  const { data, error } = await reader
    .from("posts")
    .select(
      "id, author_id, body, visibility, status, created_at, edited_at, deleted_at"
    )
    .is("deleted_at", null)
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .range(start, start + FEED_PAGE_SIZE);

  if (error) {
    console.error("Load feed error:", error.message);
    return { ok: false, message: "Couldn't load the feed." };
  }

  const rows = Array.isArray(data) ? data : [];
  const hasMore = rows.length > FEED_PAGE_SIZE;
  const posts = await attachPostDetails(rows.slice(0, FEED_PAGE_SIZE), reader);

  return { ok: true, posts, hasMore };
}

/**
 * A post the signed-in browser session is allowed to see, including
 * followers-only posts. Deleted and moderated posts stay out of the UI.
 */
export async function getVisiblePost(
  id: string,
  reader: SocialReader = supabase
): Promise<{ post: FeedPost | null; error: boolean }> {
  if (!isPostId(id)) {
    return { post: null, error: false };
  }

  const { data, error } = await reader
    .from("posts")
    .select(
      "id, author_id, body, visibility, status, created_at, edited_at, deleted_at"
    )
    .eq("id", id)
    .is("deleted_at", null)
    .eq("status", "active")
    .maybeSingle();

  if (error) {
    return { post: null, error: true };
  }

  if (!data) {
    return { post: null, error: false };
  }

  const [post] = await attachPostDetails([data], reader);

  return { post: post ?? null, error: false };
}

/**
 * Public post for the share page and its metadata. Uses the anon client in
 * lib/supabase.ts, and still filters visibility so a followers-only body
 * cannot be rendered for a logged-out request.
 */
export const getShareablePost = cache(async function getShareablePost(
  id: string
): Promise<FeedPost | null> {
  if (!isPostId(id)) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from("posts")
      .select(
        "id, author_id, body, visibility, status, created_at, edited_at, deleted_at"
      )
      .eq("id", id)
      .eq("visibility", "public")
      .eq("status", "active")
      .is("deleted_at", null)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    const [post] = await attachPostDetails([data], supabase);

    if (!post || post.visibility !== "public") {
      return null;
    }

    return post;
  } catch (error) {
    console.error(
      "Load public post error:",
      error instanceof Error ? error.message : "unknown"
    );
    return null;
  }
});

async function attachPostDetails(
  rows: unknown[],
  reader: SocialReader
): Promise<FeedPost[]> {
  const posts = rows.map(normalizePost).filter((post): post is FeedPost => post !== null);

  if (posts.length === 0) {
    return [];
  }

  const ids = posts.map((post) => post.id);
  const authorIds = [...new Set(posts.map((post) => post.authorId))];

  const [mediaResult, tagResult, authorResult, engagement] = await Promise.all([
    reader
      .from("post_media")
      .select("id, post_id, storage_path, width, height, position, media_type")
      .in("post_id", ids)
      .order("position", { ascending: true }),
    reader
      .from("post_tags")
      .select("post_id, target_type, target_slug")
      .in("post_id", ids),
    reader
      .from("public_profiles")
      .select("id, handle, display_name, account_type, avatar_url, is_verified")
      .in("id", authorIds),
    loadPostEngagement(ids, reader),
  ]);

  const mediaByPost = new Map<string, FeedMedia[]>();

  for (const row of Array.isArray(mediaResult.data) ? mediaResult.data : []) {
    const media = normalizeMedia(row);

    if (!media) {
      continue;
    }

    const list = mediaByPost.get(media.postId) ?? [];
    list.push(media.media);
    mediaByPost.set(media.postId, list);
  }

  const tagsByPost = new Map<string, FeedTag[]>();

  for (const row of Array.isArray(tagResult.data) ? tagResult.data : []) {
    const tag = normalizeTag(row);

    if (!tag) {
      continue;
    }

    const list = tagsByPost.get(tag.postId) ?? [];
    list.push(tag.tag);
    tagsByPost.set(tag.postId, list);
  }

  const authors = new Map<string, FeedAuthor>();

  for (const row of Array.isArray(authorResult.data) ? authorResult.data : []) {
    const author = normalizeAuthor(row);

    if (author) {
      authors.set(author.id, author);
    }
  }

  return posts.map((post) => {
    const stats = engagement.get(post.id);

    return {
      ...post,
      author: authors.get(post.authorId) ?? null,
      media: (mediaByPost.get(post.id) ?? []).sort(
        (left, right) => left.position - right.position
      ),
      tags: tagsByPost.get(post.id) ?? [],
      likeCount: stats?.likeCount ?? 0,
      commentCount: stats?.commentCount ?? 0,
      likedByMe: stats?.likedByMe ?? false,
      latestComment: stats?.latestComment ?? null,
    };
  });
}

function normalizePost(value: unknown): FeedPost | null {
  const row = asRecord(value);

  if (!row || typeof row.id !== "string" || typeof row.author_id !== "string") {
    return null;
  }

  if (row.deleted_at || row.status !== "active") {
    return null;
  }

  if (row.visibility !== "public" && row.visibility !== "followers") {
    return null;
  }

  if (typeof row.body !== "string" || typeof row.created_at !== "string") {
    return null;
  }

  return {
    id: row.id,
    authorId: row.author_id,
    body: row.body,
    visibility: row.visibility,
    createdAt: row.created_at,
    editedAt: typeof row.edited_at === "string" ? row.edited_at : null,
    author: null,
    media: [],
    tags: [],
    likeCount: 0,
    commentCount: 0,
    likedByMe: false,
    latestComment: null,
  };
}

function normalizeMedia(
  value: unknown
): { postId: string; media: FeedMedia } | null {
  const row = asRecord(value);

  if (
    !row ||
    typeof row.id !== "string" ||
    typeof row.post_id !== "string" ||
    typeof row.storage_path !== "string" ||
    row.media_type !== "image"
  ) {
    return null;
  }

  const url = publicUrlForPostMedia(row.storage_path);

  if (!url) {
    return null;
  }

  return {
    postId: row.post_id,
    media: {
      id: row.id,
      storagePath: row.storage_path,
      url,
      width: positiveInt(row.width),
      height: positiveInt(row.height),
      position: positiveInt(row.position) ?? 0,
    },
  };
}

function normalizeTag(value: unknown): { postId: string; tag: FeedTag } | null {
  const row = asRecord(value);

  if (!row || typeof row.post_id !== "string" || typeof row.target_slug !== "string") {
    return null;
  }

  if (
    row.target_type !== "country" &&
    row.target_type !== "university" &&
    row.target_type !== "program"
  ) {
    return null;
  }

  return {
    postId: row.post_id,
    tag: {
      targetType: row.target_type,
      slug: row.target_slug,
    },
  };
}

function normalizeAuthor(value: unknown): FeedAuthor | null {
  const row = asRecord(value);

  if (
    !row ||
    typeof row.id !== "string" ||
    typeof row.handle !== "string" ||
    typeof row.display_name !== "string"
  ) {
    return null;
  }

  return {
    id: row.id,
    handle: row.handle,
    displayName: row.display_name,
    accountType: typeof row.account_type === "string" ? row.account_type : "other",
    avatarUrl: safeImageUrl(typeof row.avatar_url === "string" ? row.avatar_url : null),
    isVerified: row.is_verified === true,
  };
}

function positiveInt(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? value
    : null;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  return value as Record<string, unknown>;
}
