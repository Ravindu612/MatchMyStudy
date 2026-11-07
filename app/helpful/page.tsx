import type { Metadata } from "next";
import Link from "next/link";
import HelpfulFeedbackForm from "@/components/HelpfulFeedbackForm";
import { pageMeta } from "@/lib/seo-meta";
import { sanitizeFeedbackSource } from "@/lib/siteFeedback";

export const metadata: Metadata = {
  ...pageMeta(
    "/helpful",
    "Is MatchMyStudy helpful? | MatchMyStudy",
    "Share a quick rating of MatchMyStudy, or support the free study-abroad guides with a donation."
  ),
  // A feedback form is not a search result. Linked pages stay followable.
  robots: { index: false, follow: true },
};

export default async function HelpfulPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.source) ? params.source[0] : params.source;
  const source = sanitizeFeedbackSource(raw);

  return (
    <main className="min-h-full bg-slate-50 text-slate-900">
      <section aria-labelledby="helpful-heading" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50/80 to-slate-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-4 pb-6 pt-12 text-center sm:px-6 sm:pt-16 md:pt-20">
          <p className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-white/90 px-3.5 py-1 text-sm font-semibold text-blue-700 shadow-sm">
            Feedback and support
          </p>
          <h1
            id="helpful-heading"
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Is MatchMyStudy helpful?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A rating takes a few seconds and does not ask for your name or
            email. If the guides have been useful, you can also support the
            site.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-3xl gap-6 px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-8 md:p-10">
          <HelpfulFeedbackForm source={source} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-8 md:p-10">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
            Support us with a donation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center leading-7 text-slate-600">
            MatchMyStudy stays free for students. A voluntary donation helps
            cover hosting and keeps the guides updated. Card and PayPal are
            on the{" "}
            <Link
              href="/support"
              className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
            >
              support page
            </Link>
            .
          </p>
          <div className="mt-8">
            <Link
              href="/support"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Support MatchMyStudy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
