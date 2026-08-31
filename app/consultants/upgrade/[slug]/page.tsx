import Link from "next/link";
import { getConsultantBySlug } from "@/lib/consultantService";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UpgradeConsultantPage({
  params,
}: Props) {
  const { slug } = await params;

  const consultant = await getConsultantBySlug(slug);

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

  return (
    <main className="min-h-screen bg-slate-50 py-16">

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
            ⭐ MatchMyStudy Pro
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Upgrade your consultant profile
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Unlock premium features designed to help your
            consultancy reach more international students.
          </p>

        </div>


        {/* Pricing */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Monthly */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                Monthly
              </h2>

              <p className="mt-2 text-slate-500">
                Flexible billing with no long-term commitment.
              </p>

            </div>


            <div className="mt-8 flex items-end gap-2">

              <span className="text-5xl font-extrabold text-slate-900">
                $2.99
              </span>

              <span className="pb-2 text-slate-500">
                / month
              </span>

            </div>


            <div className="mt-8 border-t border-slate-200 pt-8">

              <h3 className="font-bold text-slate-900">
                What's included
              </h3>

              <ul className="mt-5 space-y-4">

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Premium consultant profile
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Upload student success stories
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Promotional photos and content
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Apply for verification badge
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Eligible for MatchMyStudy social media promotion
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Increased profile visibility
                  </span>
                </li>

                  <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Cancel Anytime
                  </span>
                </li>

              </ul>

            </div>


            <button
              type="button"
              className="mt-10 w-full rounded-xl border-2 border-blue-600 px-6 py-4 font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Choose Monthly
            </button>

          </div>


          {/* Annual */}

          <div className="relative rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-2xl">

            {/* Recommended badge */}

            <div className="absolute -top-4 left-1/2 -translate-x-1/2">

              <div className="rounded-full bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-lg">
                BEST VALUE
              </div>

            </div>


            <div className="pt-2">

              <h2 className="text-2xl font-bold text-slate-900">
                Annual
              </h2>

              <p className="mt-2 text-slate-500">
                Save more with annual billing.
              </p>

            </div>


            <div className="mt-8 flex items-end gap-2">

              <span className="text-5xl font-extrabold text-slate-900">
                $29
              </span>

              <span className="pb-2 text-slate-500">
                / year
              </span>

            </div>


            <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
              Save $7
            </div>


            <div className="mt-8 border-t border-slate-200 pt-8">

              <h3 className="font-bold text-slate-900">
                Cancel Anytime
              </h3>

              <ul className="mt-5 space-y-4">

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Premium consultant profile
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Student success stories
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Promotional photos and content
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Apply for verification badge
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Eligible for MatchMyStudy social media promotion
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                  <span className="text-slate-600">
                    Increased profile visibility
                  </span>
                </li>

              </ul>

            </div>


            <button
              type="button"
              className="mt-10 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Choose Annual
            </button>

          </div>

        </div>


        {/* Bottom feature highlight */}

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 text-white shadow-xl">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                MatchMyStudy Pro
              </div>

              <h2 className="mt-2 text-2xl font-bold">
                Put your consultancy in front of more students.
              </h2>

              <p className="mt-2 max-w-2xl text-blue-100">
                Showcase your expertise, success stories and
                services with a professional premium profile.
              </p>

            </div>

            <div className="flex-shrink-0">

              <Link
                href={`/consultants/${slug}`}
                className="inline-flex rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-slate-100"
              >
                Back to Profile
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}