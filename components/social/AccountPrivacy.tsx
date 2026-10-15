"use client";

import { DELETE_ACCOUNT_CONFIRMATION } from "@/lib/account/files";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

async function accessToken(): Promise<string> {
  const { data, error } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  if (error || !token) {
    throw new Error("Your login session has expired. Sign in again.");
  }

  return token;
}

async function readError(response: Response, fallback: string): Promise<string> {
  const body = (await response.json().catch(() => null)) as { error?: unknown } | null;

  return typeof body?.error === "string" && body.error ? body.error : fallback;
}

export default function AccountPrivacy() {
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState("");
  const [exportDone, setExportDone] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const confirmed = confirmation.trim() === DELETE_ACCOUNT_CONFIRMATION;

  async function download() {
    setExporting(true);
    setExportError("");
    setExportDone(false);

    try {
      const token = await accessToken();
      const response = await fetch("/api/account/export", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error(await readError(response, "Could not download your data."));
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      const match = /filename="([^"]+)"/.exec(response.headers.get("Content-Disposition") ?? "");
      anchor.href = url;
      anchor.download = match?.[1] ?? "matchmystudy-data.json";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      setExportDone(true);
    } catch (error) {
      setExportError(error instanceof Error ? error.message : "Could not download your data.");
    } finally {
      setExporting(false);
    }
  }

  async function removeAccount() {
    if (!confirmed) {
      return;
    }

    setDeleting(true);
    setDeleteError("");

    try {
      const token = await accessToken();
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmation: confirmation.trim() }),
      });

      if (!response.ok) {
        throw new Error(await readError(response, "Could not delete your account."));
      }

      await supabase.auth.signOut();
      window.location.assign("/");
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : "Could not delete your account.");
      setDeleting(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Download your data</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Download a JSON file of the personal data stored for this account: your profile,
          posts, comments, likes, follows, blocks you created, reports you filed, messages
          you sent, conversation details, notifications, and consultant records linked to
          you. The file also lists links to files you uploaded.
        </p>
        {exportError ? (
          <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {exportError}
          </p>
        ) : null}
        {exportDone ? (
          <p role="status" className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Your download has started.
          </p>
        ) : null}
        <button
          type="button"
          onClick={() => void download()}
          disabled={exporting}
          className="mt-5 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {exporting ? "Preparing download…" : "Download my data"}
        </button>
      </section>

      <section className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Delete account</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          This permanently deletes your login, profile, posts, comments, likes, follows,
          and blocks. Messages you sent in someone else&apos;s conversation stay in that
          thread under the name Deleted user. Reports about your account stay for
          moderation, without your profile attached. A consultant page you created is
          removed. A directory listing you claimed stays public and is disconnected from
          this account. Active Pro subscriptions on your listings are cancelled when
          billing is configured.
        </p>
        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-semibold text-slate-900">
            Type {DELETE_ACCOUNT_CONFIRMATION} to confirm
          </span>
          <input
            value={confirmation}
            onChange={(event) => setConfirmation(event.target.value)}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            disabled={deleting}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </label>
        {deleteError ? (
          <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {deleteError}
          </p>
        ) : null}
        <button
          type="button"
          onClick={() => void removeAccount()}
          disabled={!confirmed || deleting}
          className="mt-5 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {deleting ? "Deleting account…" : "Delete account"}
        </button>
      </section>
    </div>
  );
}
