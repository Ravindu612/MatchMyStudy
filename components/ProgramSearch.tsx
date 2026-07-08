"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Program } from "@/data/programs";

type ProgramSearchProps = {
  universityName: string;
  programs: Program[];
};

export default function ProgramSearch({
  universityName,
  programs,
}: ProgramSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedField, setSelectedField] = useState("All");
  const [selectedCampus, setSelectedCampus] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [visibleCount, setVisibleCount] = useState("20");
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const fields = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(programs.map((program) => program.field))),
    ];
  }, [programs]);

  const campuses = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          programs
            .map((program) => program.campus)
            .filter(Boolean)
        )
      ),
    ];
  }, [programs]);

  const hasActiveSearch =
    searchTerm.trim().length > 0 ||
    selectedLevel !== "All" ||
    selectedField !== "All";

  const filteredPrograms = programs
    .filter((program) => {
      const matchesSearch =
        program.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesLevel =
        selectedLevel === "All" ||
        program.level === selectedLevel;

      const matchesField =
        selectedField === "All" ||
        program.field === selectedField;

      const matchesCampus =
        selectedCampus === "All" ||
        program.campus === selectedCampus;

      return (
        matchesSearch &&
        matchesLevel &&
        matchesField &&
        matchesCampus
      );
    })
    .sort((a, b) => {
      if (sortOrder === "A-Z") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });

  const displayedPrograms =
    visibleCount === "All"
      ? filteredPrograms
      : filteredPrograms.slice(
          0,
          Number(visibleCount)
        );

  const shouldShowResults =
    hasActiveSearch || showAllPrograms;

  return (
    <div className="mt-6 mb-12 bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Search Courses in {universityName}
      </h2>

      <p className="text-slate-600 mb-6">
        Search bachelor&apos;s, master&apos;s, and PhD
        programmes available in this university.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <input
          type="text"
          placeholder={`Search courses in ${universityName}`}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowAllPrograms(false);
          }}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <select
          value={selectedLevel}
          onChange={(e) => {
            setSelectedLevel(e.target.value);
            setShowAllPrograms(false);
          }}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="All">All Levels</option>
          <option value="Bachelor">Bachelor&apos;s</option>
          <option value="Master">Master&apos;s</option>
          <option value="PhD">PhD</option>
        </select>

        <select
          value={selectedField}
          onChange={(e) => {
            setSelectedField(e.target.value);
            setShowAllPrograms(false);
          }}
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field === "All"
                ? "All Fields"
                : field}
            </option>
          ))}
        </select>

        <select
          value={selectedCampus}
          onChange={(e) =>
            setSelectedCampus(e.target.value)
          }
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          {campuses.map((campus) => (
            <option key={campus} value={campus}>
              {campus === "All"
                ? "All Campuses"
                : campus}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value)
          }
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="A-Z">A → Z</option>
          <option value="Z-A">Z → A</option>
        </select>

        <select
          value={visibleCount}
          onChange={(e) =>
            setVisibleCount(e.target.value)
          }
          className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="20">Show 20</option>
          <option value="50">Show 50</option>
          <option value="100">Show 100</option>
          <option value="All">Show All</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button
          type="button"
          onClick={() =>
            setShowAllPrograms(
              (current) => !current
            )
          }
          className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold text-white transition"
        >
          {showAllPrograms
            ? "Hide all programmes"
            : "View all programmes"}
        </button>

        <p className="text-slate-600 text-sm">
          {programs.length} programme
          {programs.length === 1 ? "" : "s"} listed
          for {universityName}
        </p>
      </div>

      {!shouldShowResults ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-600">
            Start typing, choose a filter, or
            click “View all programmes” to see
            the course list.
          </p>
        </div>
      ) : filteredPrograms.length > 0 ? (
        <>
          <p className="text-slate-600 mb-4">
            Showing {displayedPrograms.length}
            {" "}of{" "}
            {filteredPrograms.length} programs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedPrograms.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-sm text-blue-600 font-semibold">
                    {program.level}
                  </span>

                  <span className="text-sm text-slate-500">
                    {program.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {program.name}
                </h3>

                <p className="text-slate-600 text-sm mb-2">
                  {program.field} •{" "}
                  {program.language}
                </p>

                {program.campus && (
                  <p className="text-slate-600 text-sm mb-2">
                    Campus: {program.campus}
                  </p>
                )}

                {program.degree && (
                  <p className="text-slate-600 text-sm mb-3">
                    Degree: {program.degree}
                  </p>
                )}

                <span className="text-blue-600 font-semibold">
                  View programme details →
                </span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-600">
            No programmes found. Try another
            keyword or filter.
          </p>
        </div>
      )}
    </div>
  );
}