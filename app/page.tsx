import { SITE_NAME, SITE_URL, STATIC_META } from "@/lib/seo-meta";
import JsonLd from "@/components/JsonLd";
import GlobalSearch from "@/components/GlobalSearch";
import Link from "next/link";
import CountryCard, {
  homepageCountryCardSizes,
} from "@/components/CountryCard";
import { countries } from "@/data/countries";
import FindConsultantsButton from "@/components/consultant/FindConsultantsButton";
import { ItalkiSpeakingLink } from "@/components/ItalkiSpeakingCta";
import AdSlot from "@/components/AdSlot";

export const metadata = STATIC_META["/"];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/og-default.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd data={homeJsonLd} />
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <p className="font-semibold mb-4 tracking-wide">
          Smart Recommendations for Studying Abroad
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
          Find Your Perfect Study Destination
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-10">
          Compare countries, universities, and degree programmes worldwide.
Get personalized recommendations based on your goals, interests, and career aspirations.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">

  <a
    href="#countries"
    className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-lg transition"
  >
    🌍 Explore Countries
  </a>

  <a
    href="#study-matcher"
    className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition"
  >
    🎯 Not Sure Where to Study?
  </a>

  <FindConsultantsButton
  className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-lg transition"
/>

  <Link
    href="/study-online"
    className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition"
  >
    💻 Study Online
  </Link>

  <div className="flex flex-col items-center gap-2">
    <ItalkiSpeakingLink className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition" />
    <Link
      href="/affiliate-disclosure"
      className="text-sm font-semibold text-blue-100 underline underline-offset-2 hover:text-white"
    >
      Affiliate disclosure
    </Link>
  </div>

</div>
      </section>

      {/* Search */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-screen-2xl mx-auto">
  <GlobalSearch />
</div>
      </section>

            {/* Study Matcher */}
      <section
  id="study-matcher"
  className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white scroll-mt-20"
>

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Not Sure Where to Study?
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Answer a few simple questions and discover the study destinations that best match your goals, interests, and future career plans.
          </p>

          <Link
            href="/study-matcher"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            🎯 Start Study Matcher
          </Link>

        </div>

      </section>

      {/* Countries */}
      <section
        id="countries"
        className="px-6 py-20 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Popular Study Destinations
        </h2>

        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Explore universities, courses, tuition fees, scholarships,
          student life, and career opportunities in leading study
          destinations around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries
            .filter((country) => country.status === "available")
            .slice(0, 12)
            .map((country) => (
              <CountryCard
                key={country.slug}
                country={country}
                sizes={homepageCountryCardSizes}
                headingLevel="h3"
                exploreLabel="Explore →"
              />
            ))}
        </div>

        <div className="mt-10 flex justify-center">

  <Link
    href="/countries"
    className="inline-flex items-center gap-2 rounded-xl border border-blue-600 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
  >
    🌍 Browse All Study Destinations →
  </Link>

</div>
      </section>

      <AdSlot allowAds className="px-6 pb-16" />
    </main>
  );
}