"use client";

import { useEffect, useState } from "react";
import { Consultant } from "@/types/consultant";
import {
  getClaimForConsultant,
  submitConsultantClaim,
} from "@/lib/consultantService";

type Props = {
  consultant: Consultant;
};

export default function ClaimProfile({ consultant }: Props) {
  const [claimStatus, setClaimStatus] = useState<
  "none" | "pending" | "approved" | "rejected"
>("none");

const [rejectionReason, setRejectionReason] =
  useState("");

const [checkingClaim, setCheckingClaim] =
  useState(true);

 const [showForm, setShowForm] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  companyRole: "",
  message: "",
});

const [submitting, setSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState("");

  useEffect(() => {
  async function checkClaimStatus() {
    const claim = await getClaimForConsultant(
      consultant.id
    );

    if (!claim) {
      setClaimStatus("none");
      setCheckingClaim(false);
      return;
    }

    setClaimStatus(claim.status);

    if (claim.status === "rejected") {
      setRejectionReason(
        claim.rejection_reason ?? ""
      );
    }

    setCheckingClaim(false);
  }

  checkClaimStatus();
}, [consultant.id]);

if (checkingClaim) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl bg-slate-50 p-8 text-center">
        Checking claim status...
      </div>
    </section>
  );
}

if (claimStatus === "approved") {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl bg-green-50 border border-green-200 p-10 text-center">

        <div className="text-5xl">
          🎉
        </div>

        <h2 className="mt-4 text-3xl font-bold text-green-800">
          Claim Approved!
        </h2>

        <p className="mt-3 text-lg text-green-700">
          Your claim has been approved.
          This profile is now yours.
        </p>

      </div>
    </section>
  );
}
if (claimStatus === "pending") {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-3xl bg-blue-50 border border-blue-200 p-10 text-center">

        <div className="text-5xl">
          ⏳
        </div>

        <h2 className="mt-4 text-3xl font-bold text-blue-800">
          Claim Submitted Successfully
        </h2>

        <p className="mt-3 text-lg text-blue-700">
          Your claim has been submitted and is
          currently being reviewed.
        </p>

        <p className="mt-2 text-blue-600">
          You don't need to submit another claim.
        </p>

      </div>
    </section>
  );
}
{claimStatus === "rejected" && (
  <div className="mb-8 rounded-3xl bg-red-50 border border-red-200 p-8">

    <div className="flex gap-4">

      <div className="text-4xl">
        ⚠️
      </div>

      <div>

        <h3 className="text-2xl font-bold text-red-800">
          Your Previous Claim Was Rejected
        </h3>

        <p className="mt-2 text-red-700">
          You can submit a new claim request
          for this business profile.
        </p>

        {rejectionReason && (
          <div className="mt-4 rounded-xl bg-white p-4">
            <p className="font-semibold text-slate-700">
              Reason:
            </p>

            <p className="mt-1 text-slate-600">
              {rejectionReason}
            </p>
          </div>
        )}

      </div>

    </div>

  </div>
)}

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setSubmitting(true);
  setError("");

  try {
    await submitConsultantClaim({
      consultantId: consultant.id,
      consultantName: consultant.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyRole: formData.companyRole,
      message: formData.message,
    });

    setSubmitted(true);
  } catch (error) {
    console.error(error);
    setError(
      "Could not submit your claim request. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};
  return (
  <section id="claim-profile" className="mt-10">

    {!showForm && !submitted && (
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              🏢 Own this consultant profile?
            </h2>

            <p className="text-blue-100 text-lg leading-8">
              Are you the owner or an authorized representative of{" "}
              <strong>{consultant.name}</strong>?
              Claim this profile to update your information,
              receive student enquiries, manage reviews, and
              unlock premium features.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">

            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="rounded-xl bg-white text-blue-700 font-bold px-8 py-4 hover:bg-slate-100 transition"
            >
              Claim This Business
            </button>

          </div>

        </div>

      </div>
    )}


    {showForm && !submitted && (
      <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8 md:p-10">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold text-slate-900">
            Claim {consultant.name}
          </h2>

          <p className="mt-3 text-slate-600">
            Please provide your details. We will review your
            request and contact you regarding the profile claim.
          </p>


          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >

            {/* Name */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your full name"
              />

            </div>


            {/* Email */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="you@example.com"
              />

            </div>


            {/* Phone */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="+358 ..."
              />

            </div>


            {/* Company role */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Your Role *
              </label>

              <select
                name="companyRole"
                value={formData.companyRole}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >

                <option value="">
                  Select your role
                </option>

                <option value="Owner">
                  Owner
                </option>

                <option value="Director">
                  Director
                </option>

                <option value="Manager">
                  Manager
                </option>

                <option value="Authorized Representative">
                  Authorized Representative
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* Message */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Tell us briefly why you are claiming this profile..."
              />

            </div>


            {/* Error */}
            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700">
                {error}
              </div>
            )}


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <button
                type="button"
                onClick={() => setShowForm(false)}
                disabled={submitting}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel
              </button>


              <button
                type="submit"
                disabled={submitting}
                className="rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition disabled:opacity-50"
              >
                {submitting
                  ? "Submitting Claim..."
                  : "Submit Claim"}
              </button>

            </div>

          </form>

        </div>

      </div>
    )}


    {/* Success message */}
    {submitted && (
      <div className="rounded-3xl bg-green-50 border border-green-200 p-10 text-center">

        <div className="text-5xl mb-4">
          ✅
        </div>

        <h2 className="text-3xl font-bold text-green-800">
          Claim Request Submitted
        </h2>

        <p className="mt-4 text-green-700 max-w-2xl mx-auto">
          Thank you. Your request to claim{" "}
          <strong>{consultant.name}</strong> has been
          submitted successfully. We will review your
          request and contact you regarding the next steps.
        </p>

      </div>
    )}

  </section>
);
}