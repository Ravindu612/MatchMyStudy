import GlobalSearch from "@/components/GlobalSearch";
import Link from "next/link";
import { countries } from "@/data/countries";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
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

        <div className="flex flex-col sm:flex-row justify-center gap-4">

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
            <Link
              href={country.href}
              key={country.name}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                {country.name}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {country.description}
              </p>

              <div className="mt-5 text-blue-600 font-semibold">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </main>
  );
}