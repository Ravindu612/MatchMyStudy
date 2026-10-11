import { supabase } from "@/lib/supabase";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { validateCommentBody } from "@/lib/social/commentValidation";
import {
  summarizeEngagement,
  type CommentPreview,
  type CommentRow,
  type LikeRow,
  type PostEngagement,
} from "@/lib/social/engagementSummary";
import { isUserId } from "@/lib/social/postValidation";
import { requireUserId } from "@/lib/social/requireUser";
import {
  messageForSocialError,
  socialErrorCode,
} from "@/lib/social/socialErrors";
import type { CommentInsert, PostLike } from "@/types/social";

export type { CommentPreview, PostEngagement };
export { summarizeEngagement };

export type SocialReader = {
  // Browser client in lib/supabase.ts and the cookie-aware server client.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  from: (relation: string) => any;
  auth: {
    getUser: () => Promise<{ data: { user: { id: string } | null } }>;
  };
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

export async function loadPostEngagement(
  postIds: string[],
  reader: SocialReader = supabase
): Promise<Map<string, PostEngagement>> {
  const ids = [...new Set(postIds.filter((id) => isUserId(id)))];

  if (ids.length === 0) {
    return new Map();
  }

  let viewerId: string | null = null;

  try {
    const { data } = await reader.auth.getUser();
    viewerId = data.user && isUserId(data.user.id) ? data.user.id : null;
  } catch {
    viewerId = null;
  }

  const [likeResult, commentResult] = await Promise.all([
    reader.from("post_likes").select("post_id, user_id").in("post_id", ids).limit(1000),
    reader
      .from("comments")
      .select("id, post_id, author_id, body, created_at, updated_at, status, deleted_at")
      .in("post_id", ids)
      .is("deleted_at", null)
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(1000),
  ]);

  if (likeResult.error) {
    console.error("Load likes error:", likeResult.error.message);
  }

  if (commentResult.error) {
    console.error("Load comments error:", commentResult.error.message);
  }

  const likes = likeResult.error ? [] : normalizeLikes(likeResult.data);
  const comments = commentResult.error ? [] : normalizeComments(commentResult.data);
  const summary = summarizeEngagement(ids, likes, comments, viewerId);
  const authorIds = [
    ...new Set(
      [...summary.values()]
        .map((item) => item.latestComment?.authorId)
        .filter((id): id is string => typeof id === "string")
    ),
  ];

  if (authorIds.length === 0) {
    return summary;
  }

  const authorResult = await reader
    .from("public_profiles")
    .select("id, handle, display_name, avatar_url")
    .in("id", authorIds);
  const authors = new Map<string, { name: string; handle: string; avatarUrl: string | null }>();

  for (const row of Array.isArray(authorResult.data) ? authorResult.data : []) {
    const author = normalizePreviewAuthor(row);

    if (author) {
      authors.set(author.id, author);
    }
  }

  for (const item of summary.values()) {
    if (!item.latestComment) {
      continue;
    }

    const author = authors.get(item.latestComment.authorId);

    if (!author) {
      continue;
    }

    item.latestComment = {
      ...item.latestComment,
      authorName: author.name,
      authorHandle: author.handle,
      authorAvatarUrl: author.avatarUrl,
    };
  }

  return summary;
}

export async function listPostComments(postId: string): Promise<PostComment[]> {
  if (!isUserId(postId)) {
    return [];
  }

  const { data, error } = await supabase
    .from("comments")
    .select("id, post_id, author_id, body, created_at, updated_at, status, deleted_at")
    .eq("post_id", postId)
    .is("deleted_at", null)
    .eq("status", "active")
    .order("created_at", { ascending: true })
    .limit(200);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load comments."));
  }

  const comments = normalizeComments(data);

  if (comments.length === 0) {
    return [];
  }

  const authorIds = [...new Set(comments.map((comment) => comment.authorId))];
  const { data: profiles } = await supabase
    .from("public_profiles")
    .select("id, handle, display_name, avatar_url, account_type")
    .in("id", authorIds);
  const authors = new Map<
    string,
    { name: string; handle: string; avatarUrl: string | null; accountType: string }
  >();

  for (const row of Array.isArray(profiles) ? profiles : []) {
    const author = normalizeCommentAuthor(row);

    if (author) {
      authors.set(author.id, author);
    }
  }

  return comments.map((comment) => {
    const author = authors.get(comment.authorId);

    return {
      id: comment.id,
      postId: comment.postId,
      authorId: comment.authorId,
      body: comment.body,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      authorName: author?.name ?? "Member",
      authorHandle: author?.handle ?? null,
      authorAvatarUrl: author?.avatarUrl ?? null,
      accountType: author?.accountType ?? "other",
    };
  });
}

export async function likePost(postId: string): Promise<void> {
  if (!isUserId(postId)) {
    throw new Error("This post is unavailable.");
  }

  const userId = await requireUserId();
  const row: Pick<PostLike, "post_id" | "user_id"> = {
    post_id: postId,
    user_id: userId,
  };
  const { error } = await supabase.from("post_likes").insert(row);

  if (error && socialErrorCode(error) !== "23505") {
    throw new Error(messageForSocialError(error, "Couldn't like this post."));
  }
}

export async function unlikePost(postId: string): Promise<void> {
  if (!isUserId(postId)) {
    throw new Error("This post is unavailable.");
  }

  const userId = await requireUserId();
  const { error } = await supabase
    .from("post_likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't remove this like."));
  }
}

export async function createComment(
  postId: string,
  rawBody: string
): Promise<{ id: string; body: string }> {
  if (!isUserId(postId)) {
    throw new Error("This post is unavailable.");
  }

  const parsed = validateCommentBody(rawBody);

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const userId = await requireUserId();
  const row: CommentInsert = {
    post_id: postId,
    author_id: userId,
    body: parsed.body,
    status: "active",
  };
  const { data, error } = await supabase
    .from("comments")
    .insert(row)
    .select("id, body")
    .single();

  if (error || !data || typeof data.id !== "string") {
    throw new Error(messageForSocialError(error, "Couldn't post this comment."));
  }

  return { id: data.id, body: typeof data.body === "string" ? data.body : parsed.body };
}

export async function updateComment(id: string, rawBody: string): Promise<{ body: string; updatedAt: string }> {
  if (!isUserId(id)) {
    throw new Error("This comment is unavailable.");
  }

  const parsed = validateCommentBody(rawBody);

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const userId = await requireUserId();
  const { data, error } = await supabase
    .from("comments")
    .update({ body: parsed.body })
    .eq("id", id)
    .eq("author_id", userId)
    .is("deleted_at", null)
    .select("id, body, updated_at")
    .maybeSingle();

  if (error || !data?.id) {
    throw new Error(messageForSocialError(error, "Couldn't save this comment."));
  }

  return {
    body: typeof data.body === "string" ? data.body : parsed.body,
    updatedAt: typeof data.updated_at === "string" ? data.updated_at : new Date().toISOString(),
  };
}

export async function softDeleteComment(id: string): Promise<void> {
  if (!isUserId(id)) {
    throw new Error("This comment is unavailable.");
  }

  const userId = await requireUserId();
  const { data, error } = await supabase
    .from("comments")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", id)
    .eq("author_id", userId)
    .is("deleted_at", null)
    .select("id")
    .maybeSingle();

  if (error || !data?.id) {
    throw new Error(messageForSocialError(error, "Couldn't delete this comment."));
  }
}

function normalizeLikes(value: unknown): LikeRow[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const record = row as Record<string, unknown>;

    if (typeof record.post_id !== "string" || typeof record.user_id !== "string") {
      return [];
    }

    return [{ postId: record.post_id, userId: record.user_id }];
  });
}

function normalizeComments(value: unknown): CommentRow[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const record = row as Record<string, unknown>;

    if (
      typeof record.id !== "string" ||
      typeof record.post_id !== "string" ||
      typeof record.author_id !== "string" ||
      typeof record.body !== "string" ||
      typeof record.created_at !== "string" ||
      record.deleted_at ||
      record.status !== "active"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        postId: record.post_id,
        authorId: record.author_id,
        body: record.body,
        createdAt: record.created_at,
        updatedAt: typeof record.updated_at === "string" ? record.updated_at : record.created_at,
      },
    ];
  });
}

function normalizePreviewAuthor(
  value: unknown
): { id: string; name: string; handle: string; avatarUrl: string | null } | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const row = value as Record<string, unknown>;

  if (
    typeof row.id !== "string" ||
    typeof row.handle !== "string" ||
    typeof row.display_name !== "string"
  ) {
    return null;
  }

  return {
    id: row.id,
    name: row.display_name,
    handle: row.handle,
    avatarUrl: safeImageUrl(typeof row.avatar_url === "string" ? row.avatar_url : null),
  };
}

function normalizeCommentAuthor(value: unknown): {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string | null;
  accountType: string;
} | null {
  const preview = normalizePreviewAuthor(value);

  if (!preview || !value || typeof value !== "object") {
    return null;
  }

  const row = value as Record<string, unknown>;

  return {
    ...preview,
    accountType: typeof row.account_type === "string" ? row.account_type : "other",
  };
}
