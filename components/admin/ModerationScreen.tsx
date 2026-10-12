"use client";

import AdminNav from "@/components/admin/AdminNav";
import { getCurrentUserProfile } from "@/lib/auth";
import {
  decideReport,
  listOpenReports,
  moderateContent,
  setProfileVerified,
  type OpenReportView,
} from "@/lib/social/moderation";
import { REPORT_REASON_MAX_LENGTH } from "@/lib/social/reportValidation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ModerationScreen() {
  const [reports, setReports] = useState<OpenReportView[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    const next = await listOpenReports();
    setReports(next);
  }

  useEffect(() => {
    let cancelled = false;

    async function start() {
      try {
        const profile = await getCurrentUserProfile();

        if (cancelled) {
          return;
        }

        if (!profile) {
          setError("You must be logged in.");
          setLoading(false);
          return;
        }

        if (profile.role !== "admin") {
          setError("You do not have permission to access this page.");
          setLoading(false);
          return;
        }

        const { data: allowed, error: adminError } = await supabase.rpc("is_admin", {
          uid: profile.id,
        });

        if (cancelled) {
          return;
        }

        if (adminError || allowed !== true) {
          setError("You do not have permission to access this page.");
          setLoading(false);
          return;
        }

        await load();

        if (!cancelled) {
          setLoading(false);
        }
      } catch (loadError) {
        console.error(loadError);

        if (!cancelled) {
          setError("Could not load reports.");
          setLoading(false);
        }
      }
    }

    void start();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-slate-500">Loading reports...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">{error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <AdminNav />
        <div className="mt-6">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Admin
          </div>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Moderation</h1>
          <p className="mt-3 text-lg text-slate-600">
            Open reports on posts, comments, and profiles. Hiding or removing content needs a written reason.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {reports.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-slate-600">No open reports.</p>
            </div>
          ) : (
            reports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                onChanged={async () => {
                  await load();
                }}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

function ReportCard({
  report,
  onChanged,
}: {
  report: OpenReportView;
  onChanged: () => Promise<void>;
}) {
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const content = report.targetType === "post" || report.targetType === "comment";
  const alreadyHidden = report.contentStatus === "hidden";
  const alreadyGone = report.contentStatus === "removed" || report.contentStatus === "deleted";

  async function run(label: string, action: () => Promise<void>, success: string) {
    setBusy(label);
    setError(null);
    setNotice(null);

    try {
      await action();
      setNotice(success);
      await onChanged();
    } catch (actionError) {
      setError(
        actionError instanceof Error && actionError.message
          ? actionError.message
          : "Couldn't save this decision."
      );
    } finally {
      setBusy(null);
    }
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
              {report.targetType}
            </span>
            {report.contentStatus ? (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                {report.contentStatus}
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-sm text-slate-500">
            {new Date(report.createdAt).toLocaleString()} · Reported by{" "}
            {report.reporterHandle ? (
              <Link
                href={`/u/${encodeURIComponent(report.reporterHandle)}`}
                className="font-semibold text-blue-700 hover:underline"
              >
                {report.reporterName}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700">{report.reporterName}</span>
            )}
          </p>
          <p className="mt-3 whitespace-pre-wrap text-slate-800">{report.reason}</p>
        </div>
        {report.href ? (
          <Link href={report.href} className="text-sm font-semibold text-blue-700 hover:underline">
            {report.targetType === "profile" ? "View profile" : "View post"}
          </Link>
        ) : null}
      </div>

      {report.body ? (
        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-700">Reported text</p>
          <p className="mt-2 whitespace-pre-wrap break-words text-slate-800">{report.body}</p>
        </div>
      ) : report.targetType !== "profile" ? (
        <p className="mt-5 text-sm text-slate-500">The reported content is no longer available.</p>
      ) : null}

      {report.profileId ? (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 py-3">
          <p className="text-sm text-slate-700">
            Profile:{" "}
            {report.profileHandle ? (
              <Link
                href={`/u/${encodeURIComponent(report.profileHandle)}`}
                className="font-semibold text-blue-700 hover:underline"
              >
                {report.profileName ?? report.profileHandle}
              </Link>
            ) : (
              <span className="font-semibold">{report.profileName ?? "Member"}</span>
            )}
            <span className="text-slate-500">
              {" "}
              · {report.isVerified ? "Verified" : "Not verified"}
            </span>
          </p>
          <button
            type="button"
            disabled={busy !== null || report.isVerified === null}
            onClick={() =>
              void run(
                "verify",
                () => setProfileVerified(report.profileId as string, report.isVerified !== true),
                report.isVerified ? "Verification removed." : "Profile marked verified."
              )
            }
            className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100 disabled:opacity-50"
          >
            {busy === "verify"
              ? "Saving..."
              : report.isVerified
                ? "Remove verification"
                : "Mark verified"}
          </button>
        </div>
      ) : null}

      <div className="mt-5">
        <label htmlFor={`note-${report.id}`} className="block text-sm font-semibold text-slate-800">
          Reason for this decision
        </label>
        <textarea
          id={`note-${report.id}`}
          value={note}
          maxLength={REPORT_REASON_MAX_LENGTH}
          rows={3}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Required to hide or remove. Optional when resolving or dismissing."
          className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500"
        />
      </div>

      {error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p className="mt-3 text-sm text-green-700" role="status">
          {notice}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {content ? (
          <>
            <button
              type="button"
              disabled={busy !== null || alreadyHidden || alreadyGone || report.body === null}
              onClick={() =>
                void run(
                  "hide",
                  () =>
                    moderateContent({
                      targetType: report.targetType as "post" | "comment",
                      targetId: report.targetId,
                      status: "hidden",
                      reason: note,
                    }),
                  "Hidden."
                )
              }
              className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 disabled:opacity-50"
            >
              {busy === "hide" ? "Hiding..." : "Hide"}
            </button>
            <button
              type="button"
              disabled={busy !== null || alreadyGone || report.body === null}
              onClick={() =>
                void run(
                  "remove",
                  () =>
                    moderateContent({
                      targetType: report.targetType as "post" | "comment",
                      targetId: report.targetId,
                      status: "removed",
                      reason: note,
                    }),
                  "Removed."
                )
              }
              className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
            >
              {busy === "remove" ? "Removing..." : "Remove"}
            </button>
          </>
        ) : null}
        <button
          type="button"
          disabled={busy !== null}
          onClick={() =>
            void run(
              "resolve",
              () => decideReport({ reportId: report.id, decision: "actioned", note }),
              "Report resolved."
            )
          }
          className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
        >
          {busy === "resolve" ? "Saving..." : "Resolve"}
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() =>
            void run(
              "dismiss",
              () => decideReport({ reportId: report.id, decision: "dismissed", note }),
              "Report dismissed."
            )
          }
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          {busy === "dismiss" ? "Saving..." : "Dismiss"}
        </button>
      </div>
    </article>
  );
}
