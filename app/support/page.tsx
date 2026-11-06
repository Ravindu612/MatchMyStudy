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
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <JsonLd
        data={hubPageJsonLd({
          name: "Support MatchMyStudy",
          path: "/support",
          description:
            "Voluntary donations that help keep MatchMyStudy's free study-abroad guides online and updated.",
        })}
      />
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Support MatchMyStudy</h1>

        <p className="mb-6 leading-7 text-slate-300">
          MatchMyStudy is a free study-abroad guide. Country pages, programme
          comparisons, and practical tips stay free for students.
        </p>

        <p className="mb-10 leading-7 text-slate-300">
          If the site has helped you, you can support the work with a small
          donation. It helps cover hosting and keeps the guides updated.
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={STRIPE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Donate with card (Stripe)
            </a>

            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Donate with PayPal
            </a>
          </div>

          <p className="mt-6 leading-7 text-slate-300">
            Thank you — every bit helps.
          </p>
        </div>

        <p className="mt-8 text-sm leading-7 text-slate-400">
          Donations support MatchMyStudy as an independent project run by
          Ravindu Dhananjaya (toiminimi, Finland). They are voluntary and do
          not buy consulting or placement services.
        </p>
      </div>
    </main>
  );
}
