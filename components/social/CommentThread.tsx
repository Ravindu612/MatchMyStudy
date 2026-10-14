"use client";

import ReportButton from "@/components/social/ReportButton";
import { useViewer } from "@/components/social/SocialShell";
import { safeImageUrl } from "@/lib/social/avatarPath";
import {
  COMMENT_BODY_MAX_LENGTH,
  commentWasEdited,
} from "@/lib/social/commentValidation";
import {
  createComment,
  listPostComments,
  softDeleteComment,
  updateComment,
  type PostComment,
} from "@/lib/social/engagement";
import { displayInitials, formatPostTime } from "@/lib/social/formatPostTime";
import { messageForSocialError } from "@/lib/social/socialErrors";
import { loginPathFor } from "@/lib/signupRole";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  postId: string;
  onUpdated: (comments: PostComment[]) => void;
};

export default function CommentThread({ postId, onUpdated }: Props) {
  const viewer = useViewer();
  const pathname = usePathname();
  const [comments, setComments] = useState<PostComment[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [draft, setDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    listPostComments(postId)
      .then((next) => {
        if (cancelled) {
          return;
        }

        setComments(next);
        setStatus("ready");
      })
      .catch((loadError: unknown) => {
        if (cancelled) {
          return;
        }

        setStatus("error");
        setError(messageForSocialError(loadError, "Couldn't load comments."));
      });

    return () => {
      cancelled = true;
    };
  }, [postId]);

  async function publish() {
    setSubmitting(true);
    setError(null);

    try {
      const created = await createComment(postId, draft);
      const next = [
        ...comments,
        {
          id: created.id,
          postId,
          authorId: viewer.id ?? "",
          body: created.body,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          authorName: viewer.displayName ?? "Member",
          authorHandle: viewer.handle,
          authorAvatarUrl: viewer.avatarUrl,
          accountType: viewer.accountType ?? "other",
        },
      ];
      setComments(next);
      setDraft("");
      onUpdated(next);
    } catch (publishError) {
      setError(messageForSocialError(publishError, "Couldn't post this comment."));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mt-3 border-t border-slate-100 pt-3" aria-label="Comments">
      {status === "loading" ? (
        <div className="h-16 animate-pulse rounded-xl bg-slate-50" />
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      {status === "ready" && comments.length === 0 ? (
        <p className="text-sm text-slate-500">No comments yet.</p>
      ) : null}
      <ul className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommentRow
            key={comment.id}
            comment={comment}
            mine={viewer.id !== null && viewer.id === comment.authorId}
            onChanged={(next) => {
              const updated = comments.map((item) => (item.id === next.id ? next : item));
              setComments(updated);
              onUpdated(updated);
            }}
            onDeleted={() => {
              const updated = comments.filter((item) => item.id !== comment.id);
              setComments(updated);
              onUpdated(updated);
            }}
          />
        ))}
      </ul>

      {viewer.status === "ready" ? (
        <form
          className="mt-3"
          onSubmit={(event) => {
            event.preventDefault();
            void publish();
          }}
        >
          <label className="sr-only" htmlFor={`comment-${postId}`}>
            Write a comment
          </label>
          <textarea
            id={`comment-${postId}`}
            value={draft}
            maxLength={COMMENT_BODY_MAX_LENGTH}
            rows={3}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a comment..."
            className="w-full resize-y rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500"
          />
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              {draft.trim().length.toLocaleString("en-US")} / {COMMENT_BODY_MAX_LENGTH.toLocaleString("en-US")}
            </p>
            <button
              type="submit"
              disabled={submitting || draft.trim().length === 0}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {submitting ? "Posting..." : "Comment"}
            </button>
          </div>
          {error && status === "ready" ? (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      ) : viewer.status === "anonymous" ? (
        <p className="mt-3 text-sm text-slate-600">
          <a href={loginPathFor(pathname)} className="font-semibold text-blue-700 hover:underline">
            Log in
          </a>{" "}
          to comment.
        </p>
      ) : null}
    </section>
  );
}

function CommentRow({
  comment,
  mine,
  onChanged,
  onDeleted,
}: {
  comment: PostComment;
  mine: boolean;
  onChanged: (comment: PostComment) => void;
  onDeleted: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(comment.body);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const avatar = safeImageUrl(comment.authorAvatarUrl);
  const edited = commentWasEdited(comment.createdAt, comment.updatedAt);

  async function save() {
    setSubmitting(true);
    setError(null);

    try {
      const saved = await updateComment(comment.id, draft);
      onChanged({ ...comment, body: saved.body, updatedAt: saved.updatedAt });
      setEditing(false);
    } catch (saveError) {
      setError(messageForSocialError(saveError, "Couldn't save this comment."));
    } finally {
      setSubmitting(false);
    }
  }

  async function remove() {
    setSubmitting(true);
    setError(null);

    try {
      await softDeleteComment(comment.id);
      onDeleted();
    } catch (deleteError) {
      setError(messageForSocialError(deleteError, "Couldn't delete this comment."));
      setSubmitting(false);
    }
  }

  return (
    <li id={`comment-${comment.id}`} className="flex gap-3 scroll-mt-24">
      {comment.authorHandle ? (
        <Link href={`/u/${encodeURIComponent(comment.authorHandle)}`} className="shrink-0">
          <CommentAvatar name={comment.authorName} avatar={avatar} />
        </Link>
      ) : (
        <CommentAvatar name={comment.authorName} avatar={avatar} />
      )}
      <div className="min-w-0 flex-1 rounded-2xl bg-slate-50 px-3 py-2">
        <div className="flex flex-wrap items-baseline gap-x-2">
          {comment.authorHandle ? (
            <Link
              href={`/u/${encodeURIComponent(comment.authorHandle)}`}
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              {comment.authorName}
            </Link>
          ) : (
            <span className="text-sm font-semibold text-slate-900">{comment.authorName}</span>
          )}
          <time className="text-xs text-slate-500" dateTime={comment.createdAt}>
            {formatPostTime(comment.createdAt)}
          </time>
          {edited ? <span className="text-xs text-slate-500">Edited</span> : null}
        </div>
        {editing ? (
          <div className="mt-2">
            <label className="sr-only" htmlFor={`edit-comment-${comment.id}`}>
              Edit comment
            </label>
            <textarea
              id={`edit-comment-${comment.id}`}
              value={draft}
              maxLength={COMMENT_BODY_MAX_LENGTH}
              rows={3}
              onChange={(event) => setDraft(event.target.value)}
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-slate-500">
              {draft.trim().length.toLocaleString("en-US")} / {COMMENT_BODY_MAX_LENGTH.toLocaleString("en-US")}
            </p>
            <div className="mt-2 flex gap-3 text-sm">
              <button
                type="button"
                onClick={() => void save()}
                disabled={submitting || draft.trim().length === 0}
                className="font-semibold text-blue-700 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditing(false);
                  setDraft(comment.body);
                  setError(null);
                }}
                className="font-semibold text-slate-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-6 text-slate-800">
            {comment.body}
          </p>
        )}
        {error ? (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        {!mine && !editing ? (
          <div className="mt-1">
            <ReportButton
              targetType="comment"
              targetId={comment.id}
              ownerId={comment.authorId}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
            />
          </div>
        ) : null}
        {mine && !editing ? (
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
            <button
              type="button"
              onClick={() => {
                setEditing(true);
                setConfirmingDelete(false);
                setDraft(comment.body);
              }}
              className="inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-slate-800"
            >
              <Pencil className="h-3 w-3" aria-hidden="true" />
              Edit
            </button>
            {confirmingDelete ? (
              <span className="inline-flex items-center gap-2">
                <span className="text-slate-600">Delete this comment?</span>
                <button
                  type="button"
                  onClick={() => void remove()}
                  disabled={submitting}
                  className="font-semibold text-red-600 disabled:opacity-50"
                >
                  {submitting ? "Deleting..." : "Delete"}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingDelete(false)}
                  className="font-semibold text-slate-500"
                >
                  Cancel
                </button>
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmingDelete(true)}
                className="inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-slate-800"
              >
                <Trash2 className="h-3 w-3" aria-hidden="true" />
                Delete
              </button>
            )}
          </div>
        ) : null}
      </div>
    </li>
  );
}

function CommentAvatar({ name, avatar }: { name: string; avatar: string | null }) {
  if (avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 text-xs font-bold text-white"
    >
      {displayInitials(name)}
    </span>
  );
}
