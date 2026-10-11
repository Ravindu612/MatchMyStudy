export type CommentPreview = {
  id: string;
  postId: string;
  authorId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  authorName: string;
  authorHandle: string | null;
  authorAvatarUrl: string | null;
};

export type PostEngagement = {
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
  latestComment: CommentPreview | null;
};

export type LikeRow = { postId: string; userId: string };

export type CommentRow = {
  id: string;
  postId: string;
  authorId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

const EMPTY: PostEngagement = {
  likeCount: 0,
  commentCount: 0,
  likedByMe: false,
  latestComment: null,
};

export function summarizeEngagement(
  postIds: string[],
  likes: LikeRow[],
  comments: CommentRow[],
  viewerId: string | null
): Map<string, PostEngagement> {
  const summary = new Map<string, PostEngagement>();

  for (const postId of postIds) {
    summary.set(postId, { ...EMPTY });
  }

  for (const like of likes) {
    const current = summary.get(like.postId);

    if (!current) {
      continue;
    }

    current.likeCount += 1;

    if (viewerId && like.userId === viewerId) {
      current.likedByMe = true;
    }
  }

  for (const comment of comments) {
    const current = summary.get(comment.postId);

    if (!current) {
      continue;
    }

    current.commentCount += 1;
    const latest = current.latestComment;

    if (!latest || comment.createdAt > latest.createdAt) {
      current.latestComment = {
        id: comment.id,
        postId: comment.postId,
        authorId: comment.authorId,
        body: comment.body,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
        authorName: "Member",
        authorHandle: null,
        authorAvatarUrl: null,
      };
    }
  }

  return summary;
}
