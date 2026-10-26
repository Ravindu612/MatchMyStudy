"use client";
import { useState } from "react";
import CountryCard, {
  countryDirectoryCardSizes,
} from "@/components/CountryCard";
import { countries } from "@/data/countries";

export default function CountriesPageClient() {
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
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.slug}
              country={country}
              sizes={countryDirectoryCardSizes}
              headingLevel="h2"
              exploreLabel="View country guide →"
              showStatus
            />
          ))}
        </div>
      </section>
    </main>
  );
}