import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-meta";
import JsonLd from "@/components/JsonLd";
import { hubPageJsonLd } from "@/lib/hub-jsonld";

const STRIPE_DONATE_URL =
  "https://donate.stripe.com/4gM7sNfd02us9eXd6k3wQ00";
const PAYPAL_DONATE_URL = "https://paypal.me/MatchMyStudy";

export const metadata: Metadata = pageMeta(
  "/support",
  "Support MatchMyStudy | MatchMyStudy",
  "MatchMyStudy is a free study-abroad guide. A voluntary donation helps cover hosting and keeps the country guides and programme comparisons updated."
);

export default function SupportPage() {
  return (
    <main className="min-h-full bg-slate-50 text-slate-900">
      <JsonLd
        data={hubPageJsonLd({
          name: "Support MatchMyStudy",
          path: "/support",
          description:
            "Voluntary donations that help keep MatchMyStudy's free study-abroad guides online and updated.",
        })}
      />

      <section
        aria-labelledby="support-heading"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50/80 to-slate-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-8 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-4 pb-6 pt-12 text-center sm:px-6 sm:pt-16 md:pt-20">
          <p className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-white/90 px-3.5 py-1 text-sm font-semibold text-blue-700 shadow-sm">
            Free study-abroad guides
          </p>
          <h1
            id="support-heading"
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Support MatchMyStudy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Country pages, programme comparisons, and practical tips stay
            free for students. If the site has helped you, a small donation
            keeps those guides online and updated.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="donate-heading"
        className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-24"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-8 md:p-10">
          <h2
            id="donate-heading"
            className="text-center text-2xl font-bold tracking-tight text-slate-900"
          >
            Make a donation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center leading-7 text-slate-600">
            It helps cover hosting and keeps the guides updated. Card and
            PayPal both go to the same project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={STRIPE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:flex-1"
            >
              Donate with card (Stripe)
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:flex-1"
            >
              Donate with PayPal
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <p className="mt-6 text-center text-base font-medium leading-7 text-slate-700">
            Thank you — every bit helps.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-lg font-semibold text-slate-900">
            Where donations go
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <ServerIcon />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Hosting</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Helps cover the cost of keeping the site online for students.
                </p>
              </div>
            </li>
            <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <GuideIcon />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Guide updates</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Country pages and programme comparisons stay current.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-slate-600">
          Donations support MatchMyStudy as an independent project run by
          Ravindu Dhananjaya (toiminimi, Finland). They are voluntary and do
          not buy consulting or placement services.
        </p>
      </section>
    </main>
  );
}

function ServerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-5 w-5"
    >
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 4.75h9.25A1.75 1.75 0 0 1 18 6.5V19H8.25A2.25 2.25 0 0 0 6 21.25V7A2.25 2.25 0 0 1 8.25 4.75H7Z"
      />
      <path strokeLinecap="round" d="M9.5 9h5.5M9.5 12.5h5.5" />
    </svg>
  );
}
