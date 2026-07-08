"use client";

import Link from "next/link";
import { useState } from "react";
import { countries } from "@/data/countries";
import { universities } from "@/data/universities";
import { programs } from "@/data/programs";

const allUniversities = Object.values(universities).flat();

export default function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("All");

  const search = searchTerm.toLowerCase().trim();

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.toLowerCase().includes(search) ||
      country.description.toLowerCase().includes(search);

    const matchesType = searchType === "All" || searchType === "Countries";

    return matchesSearch && matchesType;
  });

  const filteredUniversities = allUniversities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(search) ||
      university.country.toLowerCase().includes(search) ||
      university.city.toLowerCase().includes(search) ||
      university.type.toLowerCase().includes(search) ||
      university.description.toLowerCase().includes(search);

    const matchesType = searchType === "All" || searchType === "Universities";

    return matchesSearch && matchesType;
  });

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.name.toLowerCase().includes(search) ||
      program.level.toLowerCase().includes(search) ||
      program.field.toLowerCase().includes(search) ||
      program.country.toLowerCase().includes(search) ||
      program.universityName.toLowerCase().includes(search);

    const matchesType = searchType === "All" || searchType === "Courses";

    return matchesSearch && matchesType;
  });

  const hasSearch = search.length > 0;

  return (
    <section
  id="search"
  className="w-full px-6 -mt-10 relative z-10"
>
      <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Search Countries, Universities, and Courses
        </h2>

        <p className="text-slate-600 mb-6">
          Search study destinations, university profiles, bachelor&apos;s degrees,
          master&apos;s programmes, and PhD programmes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search Counties, Universities, and Courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="All">All</option>
            <option value="Countries">Countries</option>
            <option value="Universities">Universities</option>
            <option value="Courses">Courses</option>
          </select>
        </div>

        {hasSearch && (
          <div className="mt-8 space-y-8">
            {searchType !== "Universities" && searchType !== "Courses" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Countries</h3>

                {filteredCountries.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredCountries.map((country) =>
                      country.status === "available" ? (
                        <Link
                          key={country.slug}
                          href={country.href}
                          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition"
                        >
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <h4 className="text-lg font-bold">
                              {country.name}
                            </h4>

                            <span className="text-xs text-blue-600">
                              Available
                            </span>
                          </div>

                          <p className="text-slate-600 text-sm">
                            {country.description}
                          </p>
                        </Link>
                      ) : (
                        <div
                          key={country.slug}
                          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <h4 className="text-lg font-bold">
                              {country.name}
                            </h4>

                            <span className="text-xs text-slate-500">
                              Coming soon
                            </span>
                          </div>

                          <p className="text-slate-600 text-sm">
                            {country.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-slate-600">No countries found.</p>
                )}
              </div>
            )}

            {searchType !== "Countries" && searchType !== "Courses" && (
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Universities / Institutions
                </h3>

                {filteredUniversities.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredUniversities.map((university) => (
                      <Link
                        key={university.slug}
                        href={`/universities/${university.slug}`}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition"
                      >
                        <h4 className="text-lg font-bold mb-2">
                          {university.name}
                        </h4>

                        <p className="text-slate-600 text-sm mb-2">
                          {university.city}, {university.country}
                        </p>

                        <p className="text-blue-600 text-sm">
                          {university.type}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600">No universities found.</p>
                )}
              </div>
            )}

            {searchType !== "Countries" && searchType !== "Universities" && (
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Courses / Programmes
                </h3>

                {filteredPrograms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredPrograms.map((program) => (
                      <Link
                        key={program.slug}
                        href={`/programs/${program.slug}`}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition"
                      >
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <span className="text-sm text-blue-300 font-semibold">
                            {program.level}
                          </span>

                          <span className="text-sm text-slate-600">
                            {program.duration}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold mb-2">
                          {program.name}
                        </h4>

                        <p className="text-slate-600 text-sm mb-2">
                          {program.universityName}
                        </p>

                        <p className="text-slate-600 text-sm">
                          {program.field} • {program.country}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600">No courses found.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}