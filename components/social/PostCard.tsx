"use client";

import PostEditor from "@/components/social/PostEditor";
import {
  accountTypeBadgeClass,
  accountTypeLabel,
} from "@/lib/social/accountType";
import { displayInitials, formatPostTime } from "@/lib/social/formatPostTime";
import type { FeedPost } from "@/lib/social/loadPosts";
import { softDeletePost, updatePost } from "@/lib/social/postActions";
import { messageForPostError } from "@/lib/social/postValidation";
import type { ResolvedTag } from "@/lib/social/postTags";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { tagLabelKey } from "@/lib/social/tagClient";
import { BadgeCheck, Globe, Pencil, Share2, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  post: FeedPost;
  labels: Map<string, ResolvedTag>;
  viewerId: string | null;
  heading?: "h1" | "h2";
  onChanged: () => void;
  onDeleted: () => void;
};

export default function PostCard({
  post,
  labels,
  viewerId,
  heading = "h2",
  onChanged,
  onDeleted,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const author = post.author;
  const name = author?.displayName ?? "Member";
  const avatar = safeImageUrl(author?.avatarUrl);
  const mine = viewerId !== null && viewerId === post.authorId;
  const Heading = heading;

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

      <footer className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          {copied ? "Link copied" : "Share"}
        </button>
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
