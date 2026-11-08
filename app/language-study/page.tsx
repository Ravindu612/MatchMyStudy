import { ItalkiSpeakingLink } from "@/components/ItalkiSpeakingCta";
import JsonLd from "@/components/JsonLd";
import { languageStudyHubCards, provisionalAllowanceText } from "@/lib/languageStudy/access";
import { readLanguageStudyConfig } from "@/lib/languageStudy/config";
import { LANGUAGE_STUDY_HREF } from "@/lib/languageStudy/paths";
import { UNOFFICIAL_NOTICE } from "@/lib/languageStudy/rubric";
import { hubPageJsonLd } from "@/lib/hub-jsonld";
import { pageMeta } from "@/lib/seo-meta";
import Link from "next/link";

export const metadata = pageMeta(
  LANGUAGE_STUDY_HREF,
  "Language Study | MatchMyStudy",
  "Practice reading, writing, and listening in English or Finnish, or open speaking practice with italki tutors. Scores here are unofficial."
);

const linkClass =
  "inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function LanguageStudyPage() {
  const cards = languageStudyHubCards();
  const config = readLanguageStudyConfig(process.env);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd
        data={hubPageJsonLd({
          type: "CollectionPage",
          name: "Language Study",
          path: LANGUAGE_STUDY_HREF,
          description: "Reading, writing, listening, and speaking practice.",
          items: cards.map((card) => ({ name: card.title, url: card.href })),
        })}
      />
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Language Study</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            Practice reading, writing, and listening inside MatchMyStudy, or keep speaking practice
            with tutors on italki. English and Finnish are available. Other languages are not
            offered yet.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <li key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{card.description}</p>
              {card.external ? (
                <div className="mt-5">
                  <ItalkiSpeakingLink className={linkClass} />
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Opens italki in a new tab.{" "}
                    <Link href="/affiliate-disclosure" className="font-semibold text-blue-700">
                      Affiliate disclosure
                    </Link>
                  </p>
                </div>
              ) : (
                <Link href={card.href} className={`mt-5 ${linkClass}`}>
                  Open {card.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <aside className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 leading-7 text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">How the free allowance works</h2>
          <p className="mt-3">{provisionalAllowanceText(config)}</p>
          <p className="mt-3">
            A guest can open one preview task in each skill and language. That preview is labeled
            and is not an enforced cap. Paid task batches and mock tests stay locked because prices
            are not set.
          </p>
          <p className="mt-3">{UNOFFICIAL_NOTICE}</p>
        </aside>
      </div>
    </div>
  );
}
