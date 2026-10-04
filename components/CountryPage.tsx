import Image from "next/image";
import Link from "next/link";
import { universities } from "@/data/universities";
import CountrySearch from "@/components/CountrySearch";
import { programs } from "@/data/programs";
import FindConsultantsButton from "@/components/consultant/FindConsultantsButton";
import { countryQuickInfo } from "@/data/countryQuickInfo";

type CountryKey = keyof typeof universities;

type CountryPageProps = {
  country: string;
  countryKey: CountryKey;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function CountryPage({
  country,
  countryKey,
  description,
  imageSrc,
  imageAlt,
}: CountryPageProps) {
  const countryUniversities = universities[countryKey];

  const countryPrograms = programs.filter(
    (program) => program.country.toLowerCase() === country.toLowerCase()
  );

  const quickInfo = countryQuickInfo[countryKey];

  const quickInfoCards = [
    { title: "Tuition Fees", section: quickInfo?.tuitionFees },
    { title: "Living Costs", section: quickInfo?.livingCosts },
    { title: "Student Jobs", section: quickInfo?.studentJobs },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <p className="text-blue-600 font-semibold mb-4">
              Country Guide
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Study in {country}
            </h1>

            <p className="text-lg text-slate-600 leading-8 max-w-2xl">
              {description}
            </p>
          </div>

          <div className="relative h-[260px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-sm text-blue-200 font-semibold mb-1">
                Study Destination
              </p>

              <h2 className="text-3xl font-bold text-white">
                {country}
              </h2>
            </div>
          </div>
        </div>

                {/* Quick Actions */}

        <div className="flex flex-wrap gap-4 mb-10">

          <a
            href="#universities"
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition"
          >
            🎓 Explore Universities
          </a>

          <a
            href="#programs"
            className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold transition"
          >
            📚 Explore Programs
          </a>

          <FindConsultantsButton
  destination={country}
  className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 font-semibold transition"
/>

        </div>

        {/* Search */}

        <div id="programs">
  <CountrySearch
    country={country}
    programs={countryPrograms}
    universities={countryUniversities}
  />
</div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-12">
          {quickInfoCards.map(({ title, section }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <h2 className="text-xl font-bold mb-3 text-slate-900">
                {title}
              </h2>

              {section ? (
                <>
                  <p className="text-slate-600">{section.summary}</p>

                  {section.figures && section.figures.length > 0 && (
                    <dl className="mt-4 space-y-3">
                      {section.figures.map((figure) => (
                        <div key={figure.label}>
                          <dt className="text-sm text-slate-500">
                            {figure.label}
                          </dt>
                          <dd className="font-semibold text-slate-900">
                            <a
                              href={figure.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600"
                            >
                              {figure.value}
                            </a>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <div className="mt-auto pt-4 text-xs text-slate-500">
                    <p>
                      Sources:{" "}
                      {section.sources.map((source, index) => (
                        <span key={source.url}>
                          {index > 0 && "; "}
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {source.name}
                          </a>
                        </span>
                      ))}
                    </p>
                    {quickInfo?.lastChecked && (
                      <p className="mt-1">
                        Last checked {quickInfo.lastChecked}. Rules and
                        amounts change, so confirm with the official source.
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-slate-600">
                  Useful information for international students planning to study in{" "}
                  {country}.
                </p>
              )}
            </div>
          ))}
        </div>

        <div id="universities">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">
            Popular Universities in {country}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {countryUniversities.map((university) => (
              <Link
                key={university.slug}
                href={`/universities/${university.slug}`}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
  {university.logo && (
    <img
      src={university.logo}
      alt={university.name}
      className="w-16 h-16 object-contain"
    />
  )}

  <h3 className="text-xl font-bold">
    {university.name}
  </h3>
</div>

                <p className="text-slate-600 mb-2">
                  {university.city}, {university.country}
                </p>

                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {university.type}
                </p>

                <p className="text-slate-600 text-sm line-clamp-4">
                  {university.description}
                </p>

                <span className="inline-block mt-5 text-blue-600 font-semibold">
                  View university details →
                </span>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}