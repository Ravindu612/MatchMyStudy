"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function PurchaseButton({
  product,
  skill,
  language,
  examVariant,
  label,
}: {
  product: "task_batch" | "mock_test";
  skill: string;
  language: string;
  examVariant?: string | null;
  label: string;
}) {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [idempotencyKey] = useState(() => crypto.randomUUID());

  async function purchase() {
    setPending(true);
    setMessage(null);

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    const response = await fetch("/api/language-study/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        product,
        skill,
        language,
        examVariant: examVariant ?? null,
        idempotencyKey,
      }),
    });
    const body = (await response.json()) as { message?: string; url?: string; unlocked?: boolean };

    setPending(false);

    if (body.unlocked === true || body.url) {
      setMessage(
        body.url
          ? "Checkout returned a payment link. This page does not unlock the task until a verified webhook records the payment."
          : "The server reported an unlock. Refresh and confirm the task is still locked if you have not paid."
      );
      return;
    }

    setMessage(
      body.message ??
        "Purchase is not available yet. Nothing was charged, and no task or test was unlocked."
    );
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={purchase}
        disabled={pending}
        aria-describedby="language-study-purchase-note"
        className={`inline-flex min-h-11 items-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white disabled:opacity-60 ${focus}`}
      >
        {pending ? "Checking purchase setup" : label}
      </button>
      {message ? (
        <p role="alert" className="mt-3 text-slate-800">
          {message}
        </p>
      ) : null}
    </div>
  );
}
