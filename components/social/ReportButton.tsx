"use client";

import { subscribeToBrowserSession } from "@/lib/social/browserSession";
import { submitReport } from "@/lib/social/reports";
import {
  REPORT_REASON_MAX_LENGTH,
  type ReportTargetType,
} from "@/lib/social/reportValidation";
import { loginPathFor } from "@/lib/signupRole";
import { Flag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

type Props = {
  targetType: ReportTargetType;
  targetId: string;
  ownerId: string;
  className?: string;
};

export default function ReportButton({
  targetType,
  targetId,
  ownerId,
  className = "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50",
}: Props) {
  const pathname = usePathname();
  const reasonId = useId();
  const [viewerId, setViewerId] = useState<string | null | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    return subscribeToBrowserSession((session) => {
      setViewerId(session?.user?.id ?? null);
    });
  }, []);

  if (viewerId === ownerId || done) {
    if (!done) {
      return null;
    }

    return (
      <p className="basis-full text-sm text-slate-600" role="status">
        Thanks. We&apos;ll review this report.
      </p>
    );
  }

  function start() {
    if (viewerId === undefined) {
      return;
    }

    if (viewerId === null) {
      window.location.href = loginPathFor(pathname);
      return;
    }

    setError(null);
    setOpen(true);
  }

  async function submit() {
    setSubmitting(true);
    setError(null);

    try {
      await submitReport({ targetType, targetId, reason });
      setDone(true);
      setOpen(false);
      setReason("");
    } catch (submitError) {
      setError(
        submitError instanceof Error && submitError.message
          ? submitError.message
          : "Couldn't submit this report."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button type="button" onClick={start} className={className}>
        <Flag className="h-4 w-4" aria-hidden="true" />
        Report
      </button>
      {open ? (
        <form
          className="mt-2 w-full basis-full rounded-xl border border-slate-200 bg-slate-50 p-3"
          onSubmit={(event) => {
            event.preventDefault();
            void submit();
          }}
        >
          <label htmlFor={reasonId} className="block text-sm font-semibold text-slate-800">
            Why are you reporting this?
          </label>
          <textarea
            id={reasonId}
            value={reason}
            maxLength={REPORT_REASON_MAX_LENGTH}
            rows={3}
            required
            onChange={(event) => setReason(event.target.value)}
            placeholder="Describe what is wrong."
            className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500"
          />
          <p className="mt-1 text-xs text-slate-500">
            {reason.trim().length.toLocaleString("en-US")} / {REPORT_REASON_MAX_LENGTH.toLocaleString("en-US")}
          </p>
          {error ? (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={submitting || reason.trim().length === 0}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Submit report"}
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setError(null);
              }}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-white"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}
    </>
  );
}
