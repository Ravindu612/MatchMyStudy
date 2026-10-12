"use client";

import CommentThread from "@/components/social/CommentThread";
import PostEditor from "@/components/social/PostEditor";
import ReportButton from "@/components/social/ReportButton";
import {
  accountTypeBadgeClass,
  accountTypeLabel,
} from "@/lib/social/accountType";
import { commentCountLabel } from "@/lib/social/commentValidation";
import {
  likePost,
  unlikePost,
  type CommentPreview,
  type PostComment,
} from "@/lib/social/engagement";
import { displayInitials, formatPostTime } from "@/lib/social/formatPostTime";
import type { FeedPost } from "@/lib/social/loadPosts";
import { softDeletePost, updatePost } from "@/lib/social/postActions";
import { messageForPostError } from "@/lib/social/postValidation";
import type { ResolvedTag } from "@/lib/social/postTags";
import { messageForSocialError } from "@/lib/social/socialErrors";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { tagLabelKey } from "@/lib/social/tagClient";
import { loginPathFor } from "@/lib/signupRole";
import { BadgeCheck, Globe, MessageCircle, Pencil, Share2, ThumbsUp, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  post: FeedPost;
  labels: Map<string, ResolvedTag>;
  viewerId: string | null;
  heading?: "h1" | "h2";
  commentsInitiallyOpen?: boolean;
  onChanged: () => void;
  onDeleted: () => void;
};

export default function PostCard({
  post,
  labels,
  viewerId,
  heading = "h2",
  commentsInitiallyOpen = false,
  onChanged,
  onDeleted,
}: Props) {
  const pathname = usePathname();
  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const engagementKey = [
    post.id,
    post.likeCount,
    post.likedByMe ? "1" : "0",
    post.commentCount,
    post.latestComment?.id ?? "",
    post.latestComment?.body ?? "",
    post.latestComment?.authorName ?? "",
  ].join(":");
  const [syncedKey, setSyncedKey] = useState(engagementKey);
  const [liked, setLiked] = useState(post.likedByMe);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [commentCount, setCommentCount] = useState(post.commentCount);
  const [preview, setPreview] = useState<CommentPreview | null>(post.latestComment);
  const [commentsOpen, setCommentsOpen] = useState(commentsInitiallyOpen);
  const [likePending, setLikePending] = useState(false);

  if (syncedKey !== engagementKey) {
    setSyncedKey(engagementKey);
    setLiked(post.likedByMe);
    setLikeCount(post.likeCount);
    setCommentCount(post.commentCount);
    setPreview(post.latestComment);
  }

  const author = post.author;
  const name = author?.displayName ?? "Member";
  const avatar = safeImageUrl(author?.avatarUrl);
  const mine = viewerId !== null && viewerId === post.authorId;
  const Heading = heading;

  async function toggleLike() {
    if (!viewerId) {
      window.location.href = loginPathFor(pathname);
      return;
    }

    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikeCount((count) => Math.max(0, count + (nextLiked ? 1 : -1)));
    setLikePending(true);
    setError(null);

    try {
      if (nextLiked) {
        await likePost(post.id);
      } else {
        await unlikePost(post.id);
      }
    } catch (likeError) {
      setLiked(!nextLiked);
      setLikeCount((count) => Math.max(0, count + (nextLiked ? -1 : 1)));
      setError(messageForSocialError(likeError, "Couldn't update this like."));
    } finally {
      setLikePending(false);
    }
  }

  function applyComments(comments: PostComment[]) {
    setCommentCount(comments.length);
    const latest = comments.reduce<PostComment | null>((current, comment) => {
      if (!current || comment.createdAt > current.createdAt) {
        return comment;
      }

      return current;
    }, null);
    setPreview(
      latest
        ? {
            id: latest.id,
            postId: latest.postId,
            authorId: latest.authorId,
            body: latest.body,
            createdAt: latest.createdAt,
            updatedAt: latest.updatedAt,
            authorName: latest.authorName,
            authorHandle: latest.authorHandle,
            authorAvatarUrl: latest.authorAvatarUrl,
          }
        : null
    );
  }

  async function share() {
    const url = `${window.location.origin}/post/${post.id}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: name, url });
        return;
      }
    } catch (shareError) {
      if (shareError instanceof Error && shareError.name === "AbortError") {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Couldn't copy the link.");
    }
  }

  async function remove() {
    setSubmitting(true);
    setError(null);

    try {
      await softDeletePost(post.id);
      onDeleted();
    } catch (deleteError) {
      setError(messageForPostError(deleteError, "Couldn't delete this post."));
      setSubmitting(false);
    }
  }

  if (editing) {
    return (
      <PostEditor
        mode="edit"
        displayName={name}
        avatarUrl={avatar}
        initialBody={post.body}
        initialVisibility={post.visibility}
        initialTags={post.tags.map((tag) => {
          return (
            labels.get(tagLabelKey(tag.targetType, tag.slug)) ?? {
              target_type: tag.targetType,
              target_slug: tag.slug,
              name: tag.slug,
              href: null,
              detail: null,
            }
          );
        })}
        initialMedia={post.media.map((media) => ({ id: media.id, url: media.url }))}
        submitting={submitting}
        error={error}
        onCancel={() => {
          setEditing(false);
          setError(null);
        }}
        onSubmit={async (value) => {
          setSubmitting(true);
          setError(null);

          try {
            await updatePost({
              id: post.id,
              body: value.body,
              visibility: value.visibility,
              tags: value.tags.map((tag) => ({
                target_type: tag.target_type,
                target_slug: tag.target_slug,
              })),
              keptMediaIds: value.keptMediaIds,
              images: value.images,
            });
            setEditing(false);
            onChanged();
          } catch (saveError) {
            setError(messageForPostError(saveError, "Couldn't save this post."));
          } finally {
            setSubmitting(false);
          }
        }}
      />
    );
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <header className="flex gap-3">
        {author ? (
          <Link href={`/u/${encodeURIComponent(author.handle)}`} className="shrink-0">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
            ) : (
              <Avatar name={name} accountType={author.accountType} />
            )}
          </Link>
        ) : (
          <Avatar name={name} accountType="other" />
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Heading className="truncate text-sm font-bold text-slate-900">
              {author ? (
                <Link href={`/u/${encodeURIComponent(author.handle)}`} className="hover:underline">
                  {name}
                </Link>
              ) : (
                name
              )}
            </Heading>
            {author?.isVerified ? (
              <BadgeCheck className="h-4 w-4 text-blue-600" aria-label="Verified" />
            ) : null}
            {author ? (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${accountTypeBadgeClass(author.accountType)}`}
              >
                {accountTypeLabel(author.accountType)}
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
            <Link href={`/post/${post.id}`} className="hover:underline">
              <time dateTime={post.createdAt}>{formatPostTime(post.createdAt)}</time>
            </Link>
            {post.editedAt ? <span>· Edited</span> : null}
            <span aria-hidden="true">·</span>
            {post.visibility === "followers" ? (
              <span className="inline-flex items-center gap-1">
                <Users className="h-3 w-3" aria-hidden="true" />
                Followers
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                <Globe className="h-3 w-3" aria-hidden="true" />
                Public
              </span>
            )}
          </p>
        </div>
      </header>

      <p className="mt-3 whitespace-pre-wrap break-words text-[15px] leading-6 text-slate-800">
        {post.body}
      </p>

      {post.media.length > 0 ? (
        <ul
          className={`mt-3 grid gap-2 ${post.media.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
        >
          {post.media.map((media, index) => (
            <li key={media.id} className={post.media.length === 3 && index === 0 ? "col-span-2" : ""}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.url}
                alt={`Photo ${index + 1} from ${name}`}
                width={media.width ?? undefined}
                height={media.height ?? undefined}
                className="max-h-[420px] w-full rounded-xl bg-slate-100 object-cover"
              />
            </li>
          ))}
        </ul>
      ) : null}

      {post.tags.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => {
            const label = labels.get(tagLabelKey(tag.targetType, tag.slug));
            const text = label?.name ?? tag.slug;
            const href = label?.href;

            return (
              <li key={tagLabelKey(tag.targetType, tag.slug)}>
                {href ? (
                  <Link
                    href={href}
                    className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    {text}
                  </Link>
                ) : (
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {text}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}

      {error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <ThumbsUp className="h-4 w-4 text-amber-500" aria-hidden="true" />
          {likeCount.toLocaleString("en-US")}
        </span>
        <button
          type="button"
          onClick={() => setCommentsOpen((open) => !open)}
          className="hover:underline"
        >
          {commentCountLabel(commentCount)}
        </button>
      </div>

      <footer className="mt-2 flex flex-wrap items-center gap-1 border-t border-slate-100 pt-2">
        <button
          type="button"
          onClick={() => void toggleLike()}
          disabled={likePending}
          aria-pressed={liked}
          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50 disabled:opacity-60 ${
            liked ? "text-blue-700" : "text-slate-600"
          }`}
        >
          <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} aria-hidden="true" />
          Like
        </button>
        <button
          type="button"
          onClick={() => setCommentsOpen((open) => !open)}
          aria-expanded={commentsOpen}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Comment
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          {copied ? "Link copied" : "Share"}
        </button>
        {mine ? null : (
          <ReportButton targetType="post" targetId={post.id} ownerId={post.authorId} />
        )}
        {mine ? (
          <>
            <button
              type="button"
              onClick={() => {
                setEditing(true);
                setConfirmingDelete(false);
                setError(null);
              }}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              <Pencil className="h-4 w-4" aria-hidden="true" />
              Edit
            </button>
            {confirmingDelete ? (
              <span className="inline-flex items-center gap-2 text-sm">
                <span className="text-slate-600">Delete this post?</span>
                <button
                  type="button"
                  onClick={remove}
                  disabled={submitting}
                  className="font-semibold text-red-600 hover:underline disabled:opacity-50"
                >
                  {submitting ? "Deleting..." : "Delete"}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingDelete(false)}
                  className="font-semibold text-slate-500 hover:underline"
                >
                  Cancel
                </button>
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmingDelete(true)}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Delete
              </button>
            )}
          </>
        ) : null}
      </footer>

      {!commentsOpen && preview ? (
        <p className="mt-3 line-clamp-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
          {preview.body.replace(/\s+/g, " ").trim()}
          <span className="text-slate-500"> - {preview.authorName}</span>
        </p>
      ) : null}

      {commentsOpen ? <CommentThread postId={post.id} onUpdated={applyComments} /> : null}
    </article>
  );
}

function Avatar({ name, accountType }: { name: string; accountType: string }) {
  const color =
    accountType === "current_student"
      ? "bg-emerald-600"
      : accountType === "consultant"
        ? "bg-blue-700"
        : accountType === "education_provider"
          ? "bg-violet-600"
          : accountType === "student"
            ? "bg-sky-600"
            : "bg-slate-500";

  return (
    <div
      aria-hidden="true"
      className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${color}`}
    >
      {displayInitials(name)}
    </div>
  );
}
