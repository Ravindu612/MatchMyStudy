"use client";

import { tagLabelKey } from "@/lib/social/tagClient";
import type { ResolvedTag } from "@/lib/social/postTags";
import { POST_TAG_MAX_COUNT } from "@/lib/social/postValidation";
import { Search, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const TYPE_LABEL: Record<ResolvedTag["target_type"], string> = {
  country: "Country",
  university: "University",
  program: "Program",
};

type Props = {
  tags: ResolvedTag[];
  onChange: (tags: ResolvedTag[]) => void;
};

export default function TagPicker({ tags, onChange }: Props) {
  const listId = useId();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ResolvedTag[]>([]);
  const [open, setOpen] = useState(false);
  const request = useRef(0);

  useEffect(() => {
    const q = query.trim();

    if (q.length < 2) {
      return;
    }

    const current = ++request.current;
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/social/tags?q=${encodeURIComponent(q)}`
        );
        const payload = (await response.json()) as { tags?: ResolvedTag[] };

        if (current !== request.current) {
          return;
        }

        setResults(Array.isArray(payload.tags) ? payload.tags : []);
        setOpen(true);
      } catch {
        if (current === request.current) {
          setResults([]);
        }
      }
    }, 200);

    return () => window.clearTimeout(timer);
  }, [query]);

  function add(tag: ResolvedTag) {
    if (tags.length >= POST_TAG_MAX_COUNT) {
      return;
    }

    if (tags.some((item) => tagLabelKey(item.target_type, item.target_slug) === tagLabelKey(tag.target_type, tag.target_slug))) {
      setQuery("");
      setOpen(false);
      return;
    }

    onChange([...tags, tag]);
    setQuery("");
    setOpen(false);
  }

  return (
    <div>
      {tags.length > 0 ? (
        <ul className="mb-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tagLabelKey(tag.target_type, tag.target_slug)}>
              <button
                type="button"
                onClick={() =>
                  onChange(
                    tags.filter(
                      (item) =>
                        tagLabelKey(item.target_type, item.target_slug) !==
                        tagLabelKey(tag.target_type, tag.target_slug)
                    )
                  )
                }
                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
              >
                {tag.name}
                <X className="h-3 w-3" aria-hidden="true" />
                <span className="sr-only">Remove {tag.name}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="relative">
        <label className="sr-only" htmlFor={`${listId}-input`}>
          Tag a country, university, or program
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          id={`${listId}-input`}
          value={query}
          disabled={tags.length >= POST_TAG_MAX_COUNT}
          onChange={(event) => {
            const value = event.target.value;
            setQuery(value);

            if (value.trim().length < 2) {
              setResults([]);
              setOpen(false);
            }
          }}
          onFocus={() => {
            if (results.length > 0) {
              setOpen(true);
            }
          }}
          placeholder={
            tags.length >= POST_TAG_MAX_COUNT
              ? `${POST_TAG_MAX_COUNT} tags added`
              : "Tag a country, university, or program"
          }
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          autoComplete="off"
        />
        {open && results.length > 0 ? (
          <ul
            id={listId}
            role="listbox"
            className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
          >
            {results.map((tag) => (
              <li key={tagLabelKey(tag.target_type, tag.target_slug)} role="option" aria-selected={false}>
                <button
                  type="button"
                  onClick={() => add(tag)}
                  className="flex w-full items-start justify-between gap-3 px-3 py-2 text-left hover:bg-slate-50"
                >
                  <span>
                    <span className="block text-sm font-medium text-slate-900">
                      {tag.name}
                    </span>
                    {tag.detail ? (
                      <span className="block text-xs text-slate-500">{tag.detail}</span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-xs text-slate-400">
                    {TYPE_LABEL[tag.target_type]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p className="mt-1 text-xs text-slate-400">
        Up to {POST_TAG_MAX_COUNT} tags, matched to MatchMyStudy countries, universities, and programs.
      </p>
    </div>
  );
}
