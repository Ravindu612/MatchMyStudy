"use client";

import { useEffect, useState } from "react";
import type { VerificationApplication as VerificationApplicationType } from "@/types/verificationApplication";
import {
  createVerificationApplication,
  getVerificationApplication,
} from "@/lib/verificationService";
import { getCurrentUser } from "@/lib/auth";

type Props = {
  consultantId: string;
  isPro: boolean;
};

export default function VerificationApplication({
  consultantId,
  isPro,
}: Props) {
  const [application, setApplication] =
    useState<VerificationApplicationType | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadApplication() {
      setLoading(true);

      const data =
        await getVerificationApplication(
          consultantId
        );

      setApplication(data);
      setLoading(false);
    }

    loadApplication();
  }, [consultantId]);

  async function handleApply() {
    setError("");

    try {
      setSubmitting(true);

      const user =
        await getCurrentUser();

      if (!user) {
        setError(
          "You must be logged in to apply for verification."
        );
        return;
      }

      const newApplication =
        await createVerificationApplication(
          consultantId,
          user.id
        );

      setApplication(newApplication);

    } catch (error) {
      console.error(error);

      setError(
        "Could not submit your verification application. Please try again."
      );

    } finally {
      setSubmitting(false);
    }
  }

  if (!isPro) {
    return null;
  }

  if (loading) {
    return (
      <section className="mt-10 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-slate-500">
            Loading verification status...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-10 px-4 sm:px-6">

      <div className="mx-auto max-w-7xl">

        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 shadow-lg">

          {/* Header */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              ✓ Verification
            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Get your consultancy verified
            </h2>

            <p className="mt-3 max-w-3xl text-slate-600">
              A verified badge can help students
              identify trusted education consultants
              on MatchMyStudy.
            </p>

          </div>


          {/* Error */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              {error}
            </div>
          )}


          {/* No application */}

          {!application && (
            <div className="mt-7">

              <p className="text-slate-600">
                Submit your consultancy for review
                by the MatchMyStudy team.
              </p>

              <button
                type="button"
                onClick={handleApply}
                disabled={submitting}
                className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting
                  ? "Submitting..."
                  : "✓ Apply for Verification"}
              </button>

            </div>
          )}


          {/* Pending */}

          {application?.status === "pending" && (
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">

              <div className="flex items-start gap-3">

                <span className="text-2xl">
                  ⏳
                </span>

                <div>

                  <h3 className="font-bold text-amber-900">
                    Application under review
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-amber-800">
                    Your verification application
                    has been submitted and is currently
                    being reviewed by the
                    MatchMyStudy team.
                  </p>

                </div>

              </div>

            </div>
          )}


          {/* Approved */}

          {application?.status === "approved" && (
            <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5">

              <div className="flex items-start gap-3">

                <span className="text-2xl">
                  ✓
                </span>

                <div>

                  <h3 className="font-bold text-green-900">
                    Your consultancy is verified
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-green-800">
                    Congratulations! Your
                    consultancy has been approved
                    for the MatchMyStudy verified
                    badge.
                  </p>

                </div>

              </div>

            </div>
          )}


          {/* Rejected */}

          {application?.status === "rejected" && (
            <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5">

              <div className="flex items-start gap-3">

                <span className="text-2xl">
                  ❌
                </span>

                <div className="flex-1">

                  <h3 className="font-bold text-red-900">
                    Verification application
                    rejected
                  </h3>

                  {application.rejectionReason && (
                    <p className="mt-2 text-sm leading-6 text-red-800">
                      <strong>
                        Reason:
                      </strong>{" "}
                      {application.rejectionReason}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleApply}
                    disabled={submitting}
                    className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
                  >
                    {submitting
                      ? "Submitting..."
                      : "Apply Again"}
                  </button>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}