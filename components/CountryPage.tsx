import Image from "next/image";
import Link from "next/link";
import { universities } from "@/data/universities";
import CountrySearch from "@/components/CountrySearch";
import { programs } from "@/data/programs";
import FindConsultantsButton from "@/components/consultant/FindConsultantsButton";

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

        <CountrySearch
          country={country}
          universities={countryUniversities}
          programs={countryPrograms}
        />

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-12">
          {["Tuition Fees", "Living Costs", "Student Jobs"].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold mb-3 text-slate-900">
                {item}
              </h2>

              <p className="text-slate-600">
                Useful information for international students planning to study in{" "}
                {country}.
              </p>
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