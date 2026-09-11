import Link from "next/link";
import { getConsultantBySlug } from "@/lib/consultantService";
import ManageProClient from "@/components/consultant/ManageProClient";
import CancelProButton from "@/components/consultant/CancelProButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ManageProPage({
  params,
}: Props) {
  const { slug } = await params;

  const consultant =
  await getConsultantBySlug(slug);

if (!consultant) {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <h1 className="text-3xl font-bold text-slate-900">
          Consultant not found
        </h1>

        <p className="mt-4 text-slate-600">
          We could not find this consultant profile.
        </p>

      </div>
    </main>
  );
}


  const isPro =
  consultant.is_pro === true;

const plan =
  consultant.pro_plan;

const startedAt =
  consultant.pro_started_at;

const expiresAt =
  consultant.pro_expires_at;

const cancellationScheduled =
  isPro &&
  !!consultant.pro_cancelled_at;

  function formatDate(
    date?: string | null
  ) {
    if (!date) {
      return "Not available";
    }

    return new Date(
      date
    ).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  }

  return (
    <ManageProClient
    consultantId={consultant.id}
    ownerId={consultant.owner_id}
  >
    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-sm font-bold text-purple-700">
            ⭐ MatchMyStudy Pro
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Manage your Pro profile
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Manage your MatchMyStudy Pro
            membership and premium profile
            features.
          </p>

        </div>


        {/* Subscription status */}

        <div className="mt-12 rounded-3xl border border-blue-200 bg-white p-8 shadow-xl md:p-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Subscription status
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">

  <h2 className="text-3xl font-bold text-slate-900">
    {isPro ? "Pro Active" : "Not Active"}
  </h2>

  {isPro && !cancellationScheduled && (
    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
      ✓ Active
    </span>
  )}

  {isPro && cancellationScheduled && (
    <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
      ⚠ Cancellation Scheduled
    </span>
  )}

</div>

            </div>

            {isPro && (
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-center text-white shadow-lg">

                <p className="text-sm font-medium text-blue-100">
                  Current Plan
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {plan === "annual"
                    ? "Annual"
                    : "Monthly"}
                </p>

              </div>
            )}

          </div>


          {/* Dates */}

          {isPro && (
            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-8 md:grid-cols-2">

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm font-semibold text-slate-500">
                  Pro Started
                </p>

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {formatDate(startedAt)}
                </p>

              </div>


              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm font-semibold text-slate-500">
  {cancellationScheduled
    ? "Pro Access Until"
    : plan === "annual"
      ? "Expires"
      : "Next Billing Date"}
</p>

                <p className="mt-2 text-lg font-bold text-slate-900">
                  {formatDate(expiresAt)}
                </p>

              </div>

            </div>
          )}

        </div>

        {isPro && cancellationScheduled && (
  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">

    <div className="flex items-start gap-3">

      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg">
        ⚠
      </div>

      <div>

        <h3 className="font-bold text-amber-900">
          Cancellation scheduled
        </h3>

        <p className="mt-1 leading-7 text-amber-800">
          Your Pro subscription will remain active
          until{" "}
          <strong>
            {formatDate(expiresAt)}
          </strong>
          . You will not be charged for another
          billing period after this date.
        </p>

      </div>

    </div>

  </div>
)}


        {/* Features */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-10">

          <h2 className="text-2xl font-bold text-slate-900">
            Your Pro benefits
          </h2>

          <p className="mt-2 text-slate-600">
            Your consultancy currently has
            access to these premium features.
          </p>


          <div className="mt-7 grid gap-4 md:grid-cols-2">

            {[
              "Premium consultant profile",
              "Student success stories",
              "Promotional photos and content",
              "Verification eligibility",
              "Featured profile",
              "Eligible social media promotion",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >

                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                  ✓
                </span>

                <span className="font-medium text-slate-700">
                  {feature}
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* Subscription management */}

<div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

  <h2 className="text-2xl font-bold text-slate-900">
    Subscription management
  </h2>

  {isPro ? (
  cancellationScheduled ? (
    <>
      <p className="mt-3 leading-7 text-slate-600">
        Your Pro subscription has been scheduled
        for cancellation. You can continue using
        all Pro features until{" "}
        <strong className="text-slate-900">
          {formatDate(expiresAt)}
        </strong>
        .
      </p>

      <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">

        <p className="font-bold text-green-800">
          ✓ No further renewal is scheduled
        </p>

        <p className="mt-1 text-sm leading-6 text-green-700">
          Your subscription will end automatically
          at the end of the current billing period.
        </p>

      </div>
    </>
  ) : (
    <>
      <p className="mt-3 leading-7 text-slate-600">
        Your Pro subscription is currently active.
        You can cancel your Pro membership at any
        time. Your Pro access will continue until
        the end of your current billing period.
      </p>

      <div className="mt-6">
        <CancelProButton
          consultantId={consultant.id}
        />
      </div>
    </>
  )
) : (
    <>
      <p className="mt-3 leading-7 text-slate-600">
        Your Pro subscription is not currently
        active.
      </p>

      <div className="mt-6">
        <Link
          href={`/consultants/upgrade/${slug}`}
          className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Upgrade to Pro
        </Link>
      </div>
    </>
  )}

</div>


        {/* Back */}

        <div className="mt-8 text-center">

          <Link
            href={`/consultants/${slug}`}
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            ← Back to Profile
          </Link>

        </div>

      </div>

    </main>
    </ManageProClient>
  );
}