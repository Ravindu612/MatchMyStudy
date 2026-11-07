import { getSupabase } from "@/lib/supabase";
import { isPostId, parseComment } from "@/lib/validation";
import { safeHttpsUrl } from "@/lib/format";
import type { PostVisibility } from "@/types/social";

export const FEED_PAGE_SIZE = 20;
const POST_MEDIA_BUCKET = "post-media";

const USER_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type FeedAuthor = {
  id: string;
  handle: string;
  displayName: string;
  accountType: string;
  avatarUrl: string | null;
  isVerified: boolean;
};

export type FeedMedia = {
  id: string;
  url: string;
  width: number | null;
  height: number | null;
  position: number;
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
  tags: string[];
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
};

export type PostComment = {
  id: string;
  postId: string;
  authorId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  authorName: string;
  authorHandle: string | null;
  authorAvatarUrl: string | null;
  accountType: string;
};

export async function listFeedPosts(
  offset = 0
): Promise<
  { ok: true; posts: FeedPost[]; hasMore: boolean } | { ok: false; message: string }
> {
  const start = Math.max(0, offset);
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, author_id, body, visibility, status, created_at, edited_at, deleted_at"
    )
    .is("deleted_at", null)
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .range(start, start + FEED_PAGE_SIZE);

  if (error) {
    return { ok: false, message: "Couldn't load the feed." };
  }

  const rows = Array.isArray(data) ? data : [];
  const hasMore = rows.length > FEED_PAGE_SIZE;
  const posts = await attachPostDetails(rows.slice(0, FEED_PAGE_SIZE));
  return { ok: true, posts, hasMore };
}

export async function getVisiblePost(
  id: string
): Promise<{ post: FeedPost | null; error: boolean }> {
  if (!isPostId(id)) {
    return { post: null, error: false };
  }

  const { data, error } = await getSupabase()
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

  const [post] = await attachPostDetails([data]);
  return { post: post ?? null, error: false };
}

export async function likePost(postId: string, userId: string): Promise<void> {
  const { error } = await getSupabase().from("post_likes").insert({
    post_id: postId,
    user_id: userId,
  });

  if (error && error.code !== "23505") {
    throw new Error(friendly(error, "Couldn't like this post."));
  }
}

export async function unlikePost(postId: string, userId: string): Promise<void> {
  const { error } = await getSupabase()
    .from("post_likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(friendly(error, "Couldn't remove this like."));
  }
}

export async function listPostComments(postId: string): Promise<PostComment[]> {
  if (!isPostId(postId)) {
    return [];
  }

  const { data, error } = await getSupabase()
    .from("comments")
    .select("id, post_id, author_id, body, created_at, updated_at, status, deleted_at")
    .eq("post_id", postId)
    .is("deleted_at", null)
    .eq("status", "active")
    .order("created_at", { ascending: true })
    .limit(200);

  if (error) {
    throw new Error(friendly(error, "Couldn't load comments."));
  }

  const comments = normalizeComments(data);
  if (comments.length === 0) {
    return [];
  }

  const authorIds = [...new Set(comments.map((comment) => comment.authorId))];
  const { data: profiles } = await getSupabase()
    .from("public_profiles")
    .select("id, handle, display_name, avatar_url, account_type")
    .in("id", authorIds);

  const authors = new Map<string, FeedAuthor>();
  for (const row of Array.isArray(profiles) ? profiles : []) {
    const author = normalizeAuthor(row);
    if (author) {
      authors.set(author.id, author);
    }
  }

  return comments.map((comment) => {
    const author = authors.get(comment.authorId);
    return {
      ...comment,
      authorName: author?.displayName ?? "Member",
      authorHandle: author?.handle ?? null,
      authorAvatarUrl: author?.avatarUrl ?? null,
      accountType: author?.accountType ?? "other",
    };
  });
}

export async function createComment(
  postId: string,
  userId: string,
  rawBody: string
): Promise<{ id: string; body: string }> {
  const parsed = parseComment(rawBody);
  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const { data, error } = await getSupabase()
    .from("comments")
    .insert({
      post_id: postId,
      author_id: userId,
      body: parsed.body,
      status: "active",
    })
    .select("id, body")
    .single();

  if (error || !data || typeof data.id !== "string") {
    throw new Error(friendly(error, "Couldn't post this comment."));
  }

  return {
    id: data.id,
    body: typeof data.body === "string" ? data.body : parsed.body,
  };
}

async function attachPostDetails(rows: unknown[]): Promise<FeedPost[]> {
  const posts = rows
    .map(normalizePost)
    .filter((post): post is FeedPost => post !== null);

  if (posts.length === 0) {
    return [];
  }

  const supabase = getSupabase();
  const ids = posts.map((post) => post.id);
  const authorIds = [...new Set(posts.map((post) => post.authorId))];
  const { data: sessionData } = await supabase.auth.getSession();
  const viewerId = sessionData.session?.user.id ?? null;

  const [mediaResult, tagResult, authorResult, likeResult, commentResult] =
    await Promise.all([
      supabase
        .from("post_media")
        .select("id, post_id, storage_path, width, height, position, media_type")
        .in("post_id", ids)
        .order("position", { ascending: true }),
      supabase.from("post_tags").select("post_id, target_slug").in("post_id", ids),
      supabase
        .from("public_profiles")
        .select("id, handle, display_name, account_type, avatar_url, is_verified")
        .in("id", authorIds),
      supabase.from("post_likes").select("post_id, user_id").in("post_id", ids).limit(1000),
      supabase
        .from("comments")
        .select("id, post_id")
        .in("post_id", ids)
        .is("deleted_at", null)
        .eq("status", "active")
        .limit(1000),
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

  const tagsByPost = new Map<string, string[]>();
  for (const row of Array.isArray(tagResult.data) ? tagResult.data : []) {
    const tag = asRecord(row);
    if (!tag || typeof tag.post_id !== "string" || typeof tag.target_slug !== "string") {
      continue;
    }
    const list = tagsByPost.get(tag.post_id) ?? [];
    list.push(tag.target_slug);
    tagsByPost.set(tag.post_id, list);
  }

  const authors = new Map<string, FeedAuthor>();
  for (const row of Array.isArray(authorResult.data) ? authorResult.data : []) {
    const author = normalizeAuthor(row);
    if (author) {
      authors.set(author.id, author);
    }
  }

  const likes = new Map<string, { count: number; mine: boolean }>();
  for (const row of Array.isArray(likeResult.data) ? likeResult.data : []) {
    const like = asRecord(row);
    if (!like || typeof like.post_id !== "string") {
      continue;
    }
    const current = likes.get(like.post_id) ?? { count: 0, mine: false };
    current.count += 1;
    if (viewerId && like.user_id === viewerId) {
      current.mine = true;
    }
    likes.set(like.post_id, current);
  }

  const commentCounts = new Map<string, number>();
  for (const row of Array.isArray(commentResult.data) ? commentResult.data : []) {
    const comment = asRecord(row);
    if (!comment || typeof comment.post_id !== "string") {
      continue;
    }
    commentCounts.set(comment.post_id, (commentCounts.get(comment.post_id) ?? 0) + 1);
  }

  return posts.map((post) => {
    const like = likes.get(post.id);
    return {
      ...post,
      author: authors.get(post.authorId) ?? null,
      media: (mediaByPost.get(post.id) ?? []).sort(
        (left, right) => left.position - right.position
      ),
      tags: tagsByPost.get(post.id) ?? [],
      likeCount: like?.count ?? 0,
      likedByMe: like?.mine ?? false,
      commentCount: commentCounts.get(post.id) ?? 0,
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
      url,
      width: positiveInt(row.width),
      height: positiveInt(row.height),
      position: positiveInt(row.position) ?? 0,
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
    avatarUrl: safeHttpsUrl(typeof row.avatar_url === "string" ? row.avatar_url : null),
    isVerified: row.is_verified === true,
  };
}

function normalizeComments(value: unknown): Omit<
  PostComment,
  "authorName" | "authorHandle" | "authorAvatarUrl" | "accountType"
>[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    const row = asRecord(item);
    if (
      !row ||
      typeof row.id !== "string" ||
      typeof row.post_id !== "string" ||
      typeof row.author_id !== "string" ||
      typeof row.body !== "string" ||
      typeof row.created_at !== "string" ||
      row.deleted_at ||
      row.status !== "active"
    ) {
      return [];
    }

    return [
      {
        id: row.id,
        postId: row.post_id,
        authorId: row.author_id,
        body: row.body,
        createdAt: row.created_at,
        updatedAt:
          typeof row.updated_at === "string" ? row.updated_at : row.created_at,
      },
    ];
  });
}

function publicUrlForPostMedia(storagePath: string): string | null {
  const [folder, fileName, extra] = storagePath.split("/");
  if (
    !folder ||
    !fileName ||
    extra ||
    !USER_ID_PATTERN.test(folder) ||
    !/^[A-Za-z0-9._-]+$/.test(fileName) ||
    fileName.includes("..")
  ) {
    return null;
  }

  const { data } = getSupabase().storage.from(POST_MEDIA_BUCKET).getPublicUrl(storagePath);
  return safeHttpsUrl(data.publicUrl);
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

function friendly(
  error: { message?: string; code?: string } | null,
  fallback: string
): string {
  const message = error?.message ?? "";
  if (/rate limit/i.test(message)) {
    return "You've done that a lot in the last hour. Try again later.";
  }
  if (error?.code === "42501") {
    return "You don't have permission to do that.";
  }
  return fallback;
}
