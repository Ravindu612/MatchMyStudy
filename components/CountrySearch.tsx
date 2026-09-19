"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { University } from "@/data/universities";
import type { Program } from "@/data/programs";

type CountrySearchProps = {
  country: string;
  universities: University[];
  programs: Program[];
};

export default function CountrySearch({
  country,
  universities,
  programs,
}: CountrySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedField, setSelectedField] = useState("All");

  const fields = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(programs.map((program) => program.field))),
    ];
  }, [programs]);

  const hasActiveSearch =
    searchTerm.trim().length > 0 ||
    searchType !== "All" ||
    selectedLevel !== "All" ||
    selectedField !== "All";

  const filteredUniversities = universities.filter((university) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      university.name.toLowerCase().includes(search) ||
      university.city.toLowerCase().includes(search) ||
      university.type.toLowerCase().includes(search) ||
      university.description.toLowerCase().includes(search);

    const matchesType =
      searchType === "All" || searchType === "Institutions";

    return matchesSearch && matchesType;
  });

  const filteredPrograms = programs.filter((program) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      program.name.toLowerCase().includes(search) ||
      program.field.toLowerCase().includes(search) ||
      program.universityName.toLowerCase().includes(search);

    const matchesType =
      searchType === "All" || searchType === "Courses";

    const matchesLevel =
      selectedLevel === "All" || program.level === selectedLevel;

    const matchesField =
      selectedField === "All" || program.field === selectedField;

    return matchesSearch && matchesType && matchesLevel && matchesField;
  });

  return (
    <section className="mb-16 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Search Universities and Courses in {country}
      </h2>

      <p className="text-slate-600 mb-8">
        Search institutions, bachelor&apos;s degrees, master&apos;s programmes,
        and PhD programmes available in {country}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder={`Search in ${country}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="All">Universities and Courses</option>
          <option value="Institutions">Universities Only</option>
          <option value="Courses">Courses Only</option>
        </select>

        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="All">All Levels</option>
  <option value="Bachelor">Bachelor&apos;s</option>
  <option value="Master">Master&apos;s</option>
  <option value="PhD">PhD</option>
  <option value="Diploma">Diploma</option>
  <option value="Graduate Diploma">Graduate Diploma</option>
  <option value="Professional Certificate">Professional Certificate</option>
  <option value="Professional Diploma">Professional Diploma</option>
        </select>

        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field === "All" ? "All Fields" : field}
            </option>
          ))}
        </select>
      </div>

      {!hasActiveSearch ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-600">
            Start typing or choose a filter to search universities and courses.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {searchType !== "Courses" && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Universities / Institutions
              </h3>

              {filteredUniversities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredUniversities.map((university) => (
                    <Link
                      key={university.slug}
                      href={`/universities/${university.slug}`}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                    >
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {university.name}
                      </h4>

                      <p className="text-slate-600 mb-2">
                        {university.city}, {university.country}
                      </p>

                      <p className="text-blue-600 text-sm font-semibold mb-4">
                        {university.type}
                      </p>

                      <span className="text-blue-600 font-semibold">
                        View university profile →
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">
                  No universities found for this search.
                </p>
              )}
            </div>
          )}

          {searchType !== "Institutions" && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Courses / Programmes
              </h3>

              {filteredPrograms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPrograms.map((program) => (
                    <Link
                      key={`${program.universitySlug}-${program.slug}`}
                      href={`/programs/${program.slug}`}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                    >
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-sm text-blue-600 font-semibold">
                          {program.level}
                        </span>

                        <span className="text-sm text-slate-500">
                          {program.duration}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {program.name}
                      </h4>

                      <p className="text-slate-600 text-sm mb-2">
                        {program.universityName}
                      </p>

                      <p className="text-slate-600 text-sm mb-4">
                        {program.field} • {program.language}
                      </p>

                      <span className="text-blue-600 font-semibold">
                        View course details →
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">
                  No courses found for this search.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}