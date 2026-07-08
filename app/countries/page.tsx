"use client";
import { useState } from "react";
import Link from "next/link";
import { countries } from "@/data/countries";

export default function CountriesPage() {
  const [search, setSearch] = useState("");
  const filteredCountries = countries.filter((country) => {
  const query = search.toLowerCase();

  return (
    country.name.toLowerCase().includes(query) ||
    country.description.toLowerCase().includes(query)
  );
});
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <section className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-semibold mb-4">
          Study Destinations
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore Countries
        </h1>

        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          Browse study destinations around the world and compare universities,
          courses, tuition fees, student jobs, scholarships, living costs,
          visas, and future opportunities.
        </p>
        <div className="mb-8">
  <input
    type="text"
    placeholder="Search countries..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

<p className="mb-8 text-sm text-slate-500">
  Showing {filteredCountries.length} of {countries.length} countries
</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCountries.map((country) =>
            country.status === "available" ? (
              <Link
                key={country.slug}
                href={country.href}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {country.name}
                  </h2>

                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    Available
                  </span>
                </div>

                <p className="text-slate-600 mb-5">
                  {country.description}
                </p>

                <span className="text-blue-600 font-semibold">
                  View country guide →
                </span>
              </Link>
            ) : (
              <div
                key={country.slug}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {country.name}
                  </h2>

                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-semibold">
                    Coming Soon
                  </span>
                </div>

                <p className="text-slate-600">
                  {country.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}