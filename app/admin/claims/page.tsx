"use client";

import { useEffect, useState } from "react";
import {
  getConsultantClaims,
  approveConsultantClaim,
  rejectConsultantClaim,
} from "@/lib/consultantService";

type Claim = {
  id: string;
  consultant_id: string;
  consultant_name: string;
  name: string;
  email: string;
  phone: string;
  company_role: string;
  message: string;
  status: string;
  created_at: string;
};

export default function ClaimsPage() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadClaims() {
    const data = await getConsultantClaims();

    setClaims(data);
    setLoading(false);
  }

  useEffect(() => {
    loadClaims();
  }, []);

  async function handleApprove(
    claim: Claim
  ) {
    const confirmed = window.confirm(
      `Approve the claim for ${claim.consultant_name}?`
    );

    if (!confirmed) return;

    try {
      await approveConsultantClaim(
        claim.id,
        claim.consultant_id
      );

      await loadClaims();

      alert("Claim approved successfully.");
    } catch (error) {
      console.error(error);

      alert(
        "Could not approve the claim."
      );
    }
  }

  async function handleReject(
    claim: Claim
  ) {
    const confirmed = window.confirm(
      `Reject the claim for ${claim.consultant_name}?`
    );

    if (!confirmed) return;

    try {
      await rejectConsultantClaim(
        claim.id
      );

      await loadClaims();

      alert("Claim rejected.");
    } catch (error) {
      console.error(error);

      alert(
        "Could not reject the claim."
      );
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 p-10">
        <div className="mx-auto max-w-6xl">
          Loading claims...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-4xl font-bold text-slate-900">
          Consultant Claims
        </h1>

        <p className="mt-3 text-slate-600">
          Review requests from consultants who want
          to claim existing business profiles.
        </p>

        <div className="mt-10 space-y-6">

          {claims.length === 0 ? (
            <div className="rounded-2xl bg-white p-8 shadow">
              No claim requests yet.
            </div>
          ) : (
            claims.map((claim) => (
              <div
                key={claim.id}
                className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200"
              >

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

                  <div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      {claim.consultant_name}
                    </h2>

                    <div className="mt-4 space-y-2 text-slate-600">

                      <p>
                        <strong>Name:</strong>{" "}
                        {claim.name}
                      </p>

                      <p>
                        <strong>Email:</strong>{" "}
                        {claim.email}
                      </p>

                      {claim.phone && (
                        <p>
                          <strong>Phone:</strong>{" "}
                          {claim.phone}
                        </p>
                      )}

                      <p>
                        <strong>Role:</strong>{" "}
                        {claim.company_role}
                      </p>

                    </div>

                    {claim.message && (
                      <div className="mt-5 rounded-xl bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-700">
                          Message
                        </p>

                        <p className="mt-2 text-slate-600">
                          {claim.message}
                        </p>
                      </div>
                    )}

                  </div>

                  <div className="flex flex-col gap-3">

                    <span className="text-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                      {claim.status}
                    </span>

                    {claim.status === "pending" && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            handleApprove(claim)
                          }
                          className="rounded-xl bg-red-50 border border-red-200 px-5 py-3 font-semibold text-red-600 hover:bg-red-100 transition"
                        >
                          Approve
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleReject(claim)
                          }
                          className="rounded-xl bg-red-50 border border-red-200 px-5 py-3 font-semibold text-red-600 hover:bg-red-100 transition"
                        >
                          Reject
                        </button>
                      </>
                    )}

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </main>
  );
}