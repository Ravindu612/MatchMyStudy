"use client";

import { useEffect, useState } from "react";
import {
  getAllVerificationApplications,
  approveVerificationApplication,
  rejectVerificationApplication,
} from "@/lib/verificationService";
import { getCurrentUserProfile } from "@/lib/auth";

export default function VerificationAdminPage() {
  const [applications, setApplications] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

const [processingId, setProcessingId] =
  useState<string | null>(null);

const [rejectingId, setRejectingId] =
  useState<string | null>(null);

const [rejectionReason, setRejectionReason] =
  useState("");

async function handleApprove(
  application: any
) {
  try {
    setProcessingId(application.id);
    setError("");

    const profile =
      await getCurrentUserProfile();

    if (!profile || profile.role !== "admin") {
      setError(
        "You do not have permission to approve applications."
      );
      return;
    }

    await approveVerificationApplication(
      application.id,
      application.consultant_id,
      profile.id
    );

    const updated =
      await getAllVerificationApplications();

    setApplications(updated);

  } catch (error) {
    console.error(error);

    setError(
      "Could not approve the verification application."
    );

  } finally {
    setProcessingId(null);
  }
}

async function handleReject(
  application: any
) {
  if (!rejectionReason.trim()) {
    setError(
      "Please enter a reason for rejecting the application."
    );
    return;
  }

  try {
    setProcessingId(application.id);
    setError("");

    const profile =
      await getCurrentUserProfile();

    if (!profile || profile.role !== "admin") {
      setError(
        "You do not have permission to reject applications."
      );
      return;
    }

    await rejectVerificationApplication(
      application.id,
      profile.id,
      rejectionReason.trim()
    );

    const updated =
      await getAllVerificationApplications();

    setApplications(updated);

    setRejectingId(null);
    setRejectionReason("");

  } catch (error) {
    console.error(error);

    setError(
      "Could not reject the verification application."
    );

  } finally {
    setProcessingId(null);
  }
}

  useEffect(() => {
    async function load() {
      try {
        const profile =
          await getCurrentUserProfile();

        if (!profile) {
          setError(
            "You must be logged in."
          );
          setLoading(false);
          return;
        }

        if (profile.role !== "admin") {
          setError(
            "You do not have permission to access this page."
          );
          setLoading(false);
          return;
        }

        const data =
          await getAllVerificationApplications();

        setApplications(data);

      } catch (error) {
        console.error(error);

        setError(
          "Could not load verification applications."
        );
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-slate-500">
            Loading verification applications...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">
            {error}
          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-6xl px-6">

        <div>

          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Admin
          </div>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Verification Applications
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Review consultant verification
            applications.
          </p>

        </div>


        <div className="mt-10 space-y-6">

          {applications.length === 0 ? (

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <p className="text-slate-600">
                No verification applications
                found.
              </p>

            </div>

          ) : (

            applications.map((application) => (
  <div
    key={application.id}
    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
  >

    {/* Consultant */}

    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

      <div>

        <h2 className="text-2xl font-bold text-slate-900">
          {application.consultants?.name ??
            "Unknown Consultant"}
        </h2>

        <p className="mt-2 text-slate-600">
          Status:{" "}
          <span
            className={
              application.status === "pending"
                ? "font-bold text-amber-600"
                : application.status === "approved"
                ? "font-bold text-green-600"
                : "font-bold text-red-600"
            }
          >
            {application.status}
          </span>
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Submitted:{" "}
          {new Date(
            application.submitted_at
          ).toLocaleString()}
        </p>

      </div>


      {/* Actions */}

      {application.status === "pending" && (
  <div className="flex flex-shrink-0 flex-wrap gap-3">

    <button
      type="button"
      onClick={() =>
        handleApprove(application)
      }
      disabled={
        processingId === application.id
      }
      className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-black shadow-md transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {processingId === application.id
        ? "Processing..."
        : "✓ Approve"}
    </button>

    <button
      type="button"
      onClick={() => {
        setRejectingId(application.id);
        setRejectionReason("");
        setError("");
      }}
      disabled={
        processingId === application.id
      }
      className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-black shadow-md transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      ✕ Reject
    </button>

  </div>
)}

    </div>


    {/* Rejection form */}

    {rejectingId === application.id && (
      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">

        <label className="block font-semibold text-red-900">
          Rejection Reason
        </label>

        <textarea
          value={rejectionReason}
          onChange={(e) =>
            setRejectionReason(
              e.target.value
            )
          }
          rows={4}
          placeholder="Explain why this verification application is being rejected..."
          className="mt-3 w-full rounded-xl border border-red-200 bg-white px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
        />

        <div className="mt-4 flex flex-wrap gap-3">

          <button
            type="button"
            onClick={() =>
              handleReject(application)
            }
            disabled={
              processingId === application.id
            }
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {processingId === application.id
              ? "Rejecting..."
              : "Confirm Rejection"}
          </button>

          <button
            type="button"
            onClick={() => {
              setRejectingId(null);
              setRejectionReason("");
            }}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

        </div>

      </div>
    )}


    {/* Rejection reason */}

    {application.status === "rejected" &&
      application.rejection_reason && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <strong>
            Rejection reason:
          </strong>{" "}
          {application.rejection_reason}
        </div>
      )}

  </div>
))

          )}

        </div>

      </div>

    </main>
  );
}