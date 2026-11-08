"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function OpenButton({ taskId, label }: { taskId: string; label: string }) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function openItem() {
    setPending(true);
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    const response = await fetch("/api/language-study/open", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ taskId }),
    });
    const body = (await response.json()) as { message?: string; opened?: boolean };
    setPending(false);

    if (response.ok && body.opened) {
      router.refresh();
      return;
    }

    setMessage(body.message ?? "The item stayed locked. Nothing was unlocked.");
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={openItem}
        disabled={pending}
        className={`inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white disabled:opacity-60 ${focus}`}
      >
        {pending ? "Opening" : label}
      </button>
      {message ? (
        <p role="alert" className="mt-3 text-slate-800">
          {message}
        </p>
      ) : null}
    </div>
  );
}

export function CloseAttemptButton({ taskId }: { taskId: string }) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function closeAttempt() {
    setPending(true);
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    const response = await fetch("/api/language-study/attempt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ mode: "mock", taskId, answers: {} }),
    });
    const body = (await response.json()) as { message?: string; expired?: boolean; feedback?: { label?: string } };
    setPending(false);

    if (body.expired || body.feedback?.label) {
      router.refresh();
      return;
    }

    setMessage(body.message ?? "The attempt was not closed.");
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={closeAttempt}
        disabled={pending}
        className={`inline-flex min-h-11 items-center rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-900 disabled:opacity-60 ${focus}`}
      >
        {pending ? "Saving" : "Save the unscored close"}
      </button>
      {message ? (
        <p role="alert" className="mt-3 text-slate-800">
          {message}
        </p>
      ) : null}
    </div>
  );
}
