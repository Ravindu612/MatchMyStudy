"use client";

import { FormEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getSupabase } from "@/lib/supabase";
import {
  FEEDBACK_RATINGS,
  isFeedbackRating,
  sanitizeFeedbackSource,
  type FeedbackRating,
} from "@/lib/siteFeedback";

const STORAGE_KEY = "mms-helpful-feedback";

type SubmitStatus = "idle" | "submitting" | "done" | "error";

function rememberSubmission() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Private mode can block storage. The button still stays disabled.
  }
}

function alreadySubmitted() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function subscribeToSubmission() {
  return () => {};
}

function notSubmittedOnServer() {
  return false;
}

export default function HelpfulFeedbackForm({ source }: { source: string }) {
  const thanksRef = useRef<HTMLHeadingElement>(null);
  const focusThanks = useRef(false);
  const lock = useRef(false);
  const [rating, setRating] = useState<FeedbackRating | "">("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const saved = useSyncExternalStore(
    subscribeToSubmission,
    alreadySubmitted,
    notSubmittedOnServer
  );

  useEffect(() => {
    if (status === "done" && focusThanks.current) {
      thanksRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (lock.current || status === "submitting" || status === "done") {
      return;
    }

    if (company.trim()) {
      lock.current = true;
      focusThanks.current = true;
      rememberSubmission();
      setStatus("done");
      return;
    }

    if (!isFeedbackRating(rating)) {
      return;
    }

    lock.current = true;
    setStatus("submitting");

    const client = getSupabase();

    if (!client) {
      lock.current = false;
      setStatus("error");
      return;
    }

    const { error } = await client.from("site_feedback").insert({
      rating,
      source: sanitizeFeedbackSource(source),
    });

    if (error) {
      lock.current = false;
      setStatus("error");
      return;
    }

    focusThanks.current = true;
    rememberSubmission();
    setStatus("done");
  }

  if (status === "done" || saved) {
    return (
      <div className="text-center">
        <h2
          ref={thanksRef}
          tabIndex={-1}
          className="text-2xl font-bold tracking-tight text-slate-900 outline-none"
        >
          Thank you
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600" role="status">
          Your feedback helps us improve the guides. No account or email was
          needed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative" aria-busy={status === "submitting"}>
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
        Quick feedback
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center leading-7 text-slate-600">
        Pick the option that fits. Nothing else is stored.
      </p>
      <fieldset className="mt-8">
        <legend className="sr-only">How helpful is MatchMyStudy?</legend>
        <div className="space-y-3">
          {FEEDBACK_RATINGS.map((option) => {
            const id = `feedback-${option.replace(/\s+/g, "-").toLowerCase()}`;
            const selected = rating === option;

            return (
              <label
                key={option}
                htmlFor={id}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-slate-800 transition ${
                  selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <input
                  id={id}
                  type="radio"
                  name="rating"
                  value={option}
                  required
                  checked={selected}
                  onChange={() => setRating(option)}
                  className="h-4 w-4 accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                />
                <span className="font-medium">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="feedback-company">Company</label>
        <input
          id="feedback-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm leading-6 text-red-700" role="alert">
          We couldn&apos;t save that just now. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !rating}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
