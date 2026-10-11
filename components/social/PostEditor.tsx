"use client";

import TagPicker from "@/components/social/TagPicker";
import { displayInitials } from "@/lib/social/formatPostTime";
import type { ResolvedTag } from "@/lib/social/postTags";
import {
  POST_BODY_MAX_LENGTH,
  POST_IMAGE_MAX_COUNT,
  validatePostBody,
} from "@/lib/social/postValidation";
import { safeImageUrl } from "@/lib/social/avatarPath";
import type { PostVisibility } from "@/types/social";
import { ImagePlus, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type EditorMedia = {
  id: string;
  url: string;
};

type SubmitValue = {
  body: string;
  visibility: PostVisibility;
  tags: ResolvedTag[];
  keptMediaIds: string[];
  images: File[];
};

type Props = {
  mode: "create" | "edit";
  displayName?: string | null;
  avatarUrl?: string | null;
  initialBody?: string;
  initialVisibility?: PostVisibility;
  initialTags?: ResolvedTag[];
  initialMedia?: EditorMedia[];
  submitting: boolean;
  error: string | null;
  onCancel?: () => void;
  onSubmit: (value: SubmitValue) => void;
};

export default function PostEditor({
  mode,
  displayName,
  avatarUrl,
  initialBody = "",
  initialVisibility = "public",
  initialTags = [],
  initialMedia = [],
  submitting,
  error,
  onCancel,
  onSubmit,
}: Props) {
  const inputId = useId();
  const [body, setBody] = useState(initialBody);
  const [visibility, setVisibility] = useState<PostVisibility>(initialVisibility);
  const [tags, setTags] = useState<ResolvedTag[]>(initialTags);
  const [kept, setKept] = useState<EditorMedia[]>(initialMedia);
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const imagesRef = useRef(images);
  const [localError, setLocalError] = useState<string | null>(null);
  const avatar = safeImageUrl(avatarUrl);
  const count = body.trim().length;
  const tooLong = count > POST_BODY_MAX_LENGTH;

  useEffect(() => {
    imagesRef.current = images;
  });

  useEffect(() => {
    return () => {
      for (const image of imagesRef.current) {
        URL.revokeObjectURL(image.url);
      }
    };
  }, []);

  function addImages(list: FileList | null) {
    if (!list) {
      return;
    }

    const room = POST_IMAGE_MAX_COUNT - kept.length - images.length;

    if (room <= 0) {
      setLocalError(`You can add up to ${POST_IMAGE_MAX_COUNT} images.`);
      return;
    }

    const next = Array.from(list)
      .slice(0, room)
      .map((file) => ({ file, url: URL.createObjectURL(file) }));
    setImages((current) => [...current, ...next]);
    setLocalError(null);
  }

  function submit() {
    const validated = validatePostBody(body);

    if (!validated.ok) {
      setLocalError(validated.message);
      return;
    }

    if (kept.length + images.length > POST_IMAGE_MAX_COUNT) {
      setLocalError(`You can add up to ${POST_IMAGE_MAX_COUNT} images.`);
      return;
    }

    setLocalError(null);
    onSubmit({
      body: validated.body,
      visibility,
      tags,
      keptMediaIds: kept.map((media) => media.id),
      images: images.map((image) => image.file),
    });
  }

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <div className="flex gap-3">
        {avatar ? (
          // Profile photos are arbitrary https URLs.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatar}
            alt=""
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white"
          >
            {displayInitials(displayName || "?")}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <label className="sr-only" htmlFor={inputId}>
            Post
          </label>
          <textarea
            id={inputId}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            onKeyDown={(event) => {
              if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                event.preventDefault();
                submit();
              }
            }}
            rows={mode === "create" ? 3 : 5}
            maxLength={POST_BODY_MAX_LENGTH + 200}
            placeholder="Share your study abroad journey..."
            className="w-full resize-none rounded-2xl border border-transparent bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-200 focus:bg-white"
          />
          <p className={`mt-1 text-right text-xs ${tooLong ? "text-red-600" : "text-slate-400"}`}>
            {count.toLocaleString("en-US")} / {POST_BODY_MAX_LENGTH.toLocaleString("en-US")}
          </p>
        </div>
      </div>

      {kept.length > 0 || images.length > 0 ? (
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {kept.map((media) => (
            <li key={media.id} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.url}
                alt=""
                className="h-32 w-full rounded-xl object-cover"
              />
              <button
                type="button"
                onClick={() => setKept((current) => current.filter((item) => item.id !== media.id))}
                className="absolute right-2 top-2 rounded-full bg-slate-900/70 p-1 text-white"
                aria-label="Remove photo"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
          {images.map((image, index) => (
            <li key={image.url} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.url} alt="" className="h-32 w-full rounded-xl object-cover" />
              <button
                type="button"
                onClick={() =>
                  setImages((current) => {
                    const removed = current[index];

                    if (removed) {
                      URL.revokeObjectURL(removed.url);
                    }

                    return current.filter((_, item) => item !== index);
                  })
                }
                className="absolute right-2 top-2 rounded-full bg-slate-900/70 p-1 text-white"
                aria-label="Remove photo"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-3">
        <TagPicker tags={tags} onChange={setTags} />
      </div>

      {localError || error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {localError || error}
        </p>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
          <ImagePlus className="h-4 w-4 text-blue-600" aria-hidden="true" />
          Photo
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="sr-only"
            onChange={(event) => {
              addImages(event.target.files);
              event.target.value = "";
            }}
          />
        </label>

        <label className="inline-flex items-center gap-2 text-sm text-slate-600">
          <span className="sr-only">Visibility</span>
          <select
            value={visibility}
            onChange={(event) => setVisibility(event.target.value as PostVisibility)}
            className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm font-medium text-slate-700"
          >
            <option value="public">Public</option>
            <option value="followers">Followers only</option>
          </select>
        </label>

        <div className="ml-auto flex items-center gap-2">
          {onCancel ? (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
          ) : null}
          <button
            type="submit"
            disabled={submitting || tooLong || count === 0}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Saving..." : mode === "create" ? "Post" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}
