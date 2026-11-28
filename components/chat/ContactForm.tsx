"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";

type ContactFormProps = {
  intro?: string;
  countryOfInterest?: string;
  studyLevel?: string;
  onSaved: () => void;
};

export default function ContactForm({
  intro,
  countryOfInterest,
  studyLevel,
  onSaved,
}: ContactFormProps) {
  const consentId = useId();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (saving || saved) {
      return;
    }

    const form = new FormData(event.currentTarget);
    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/chat/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          countryOfInterest: form.get("countryOfInterest"),
          studyLevel: form.get("studyLevel"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
        }),
      });

      if (!response.ok) {
        setError(await response.text());
        setSaving(false);
        return;
      }

      setSaved(true);
      setSaving(false);
      onSaved();
    } catch {
      setError("We couldn't save your details. Please try again.");
      setSaving(false);
    }
  }

  if (saved) {
    return (
      <p className="rounded-2xl bg-blue-50 px-3 py-2 text-sm text-blue-900">
        Thanks. We saved your details and can follow up by email.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
      {intro ? <p className="text-sm text-slate-700">{intro}</p> : null}
      <label className="block text-sm font-medium text-slate-800">
        Name
        <input
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-slate-800">
        Email
        <input
          name="email"
          type="email"
          required
          maxLength={160}
          autoComplete="email"
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-slate-800">
        Country of interest <span className="font-normal text-slate-500">(optional)</span>
        <input
          name="countryOfInterest"
          defaultValue={countryOfInterest ?? ""}
          maxLength={80}
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-slate-800">
        Study level <span className="font-normal text-slate-500">(optional)</span>
        <input
          name="studyLevel"
          defaultValue={studyLevel ?? ""}
          maxLength={40}
          placeholder="Bachelor, master's, PhD"
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        />
      </label>
      <label className="block text-sm font-medium text-slate-800">
        Message
        <textarea
          name="message"
          required
          maxLength={1000}
          rows={3}
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
        />
      </label>
      <div className="flex items-start gap-2">
        <input id={consentId} name="consent" type="checkbox" required className="mt-1" />
        <p className="text-sm leading-5 text-slate-700">
          <label htmlFor={consentId}>
            I agree that MatchMyStudy may store these details and contact me about my study plans.
          </label>{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {saving ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
