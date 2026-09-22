"use client";

import { useMemo, useState } from "react";
import { shortCourses } from "@/data/onlineCourses/shortCourses";

type CategoryHeaderProps = {
  icon: string;
  title: string;
  description: string;
  label: string;
  theme: "blue" | "purple" | "green" | "orange";
};

function CategoryHeader({
  icon,
  title,
  description,
  label,
  theme,
}: CategoryHeaderProps) {
  const themes = {
    blue: {
      wrapper:
        "border-blue-100 bg-gradient-to-r from-blue-50 via-blue-100/70 to-indigo-50",
      icon: "bg-blue-600 text-white shadow-blue-200",
      title: "text-blue-950",
      divider: "bg-blue-300",
      label: "border-blue-200 bg-white/80 text-blue-700 shadow-sm",
      decoration: "bg-blue-200/40",
    },

    purple: {
      wrapper:
        "border-purple-100 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50",
      icon: "bg-purple-600 text-white shadow-purple-200",
      title: "text-purple-950",
      divider: "bg-purple-300",
      label: "border-purple-200 bg-white/80 text-purple-700 shadow-sm",
      decoration: "bg-purple-200/40",
    },

    green: {
      wrapper:
        "border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50",
      icon: "bg-emerald-500 text-white shadow-emerald-200",
      title: "text-emerald-950",
      divider: "bg-emerald-300",
      label: "border-emerald-200 bg-white/80 text-emerald-700 shadow-sm",
      decoration: "bg-emerald-200/40",
    },

    orange: {
      wrapper:
        "border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50",
      icon: "bg-orange-500 text-white shadow-orange-200",
      title: "text-orange-950",
      divider: "bg-orange-300",
      label: "border-orange-200 bg-white/80 text-orange-700 shadow-sm",
      decoration: "bg-orange-200/40",
    },
  };

  const currentTheme = themes[theme];

  return (
    <div
      className={`relative mb-8 overflow-hidden rounded-2xl border p-5 sm:p-6 ${currentTheme.wrapper}`}
    >
      <div
        className={`absolute -right-8 -top-10 h-32 w-32 rounded-full ${currentTheme.decoration}`}
      />

      <div
        className={`absolute -bottom-12 right-20 h-24 w-24 rounded-full ${currentTheme.decoration}`}
      />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4 sm:gap-5">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg sm:h-16 sm:w-16 sm:text-3xl ${currentTheme.icon}`}
          >
            {icon}
          </div>

          <div
            className={`hidden h-14 w-px sm:block ${currentTheme.divider}`}
          />

          <div>
            <h3
              className={`text-2xl font-bold tracking-tight sm:text-3xl ${currentTheme.title}`}
            >
              {title}
            </h3>

            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div
          className={`hidden shrink-0 rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-widest lg:block ${currentTheme.label}`}
        >
          {label}
          <span className="ml-2 text-base">→</span>
        </div>
      </div>
    </div>
  );
}

function CourseCard({
  course,
}: {
  course: (typeof shortCourses)[number];
}) {
  return (
    <article className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {course.provider}
        </span>

        {course.isFree && (
          <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
            FREE
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-700 sm:text-2xl">
        {course.title}
      </h3>

      <p className="mt-3 text-sm font-semibold text-purple-600">
        {course.category}
      </p>

      <p className="mt-4 flex-grow leading-7 text-slate-600">
        {course.description}
      </p>

      {course.certificate && (
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span>🎓</span>
            Certificate / Credential
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            {course.certificate}
          </p>
        </div>
      )}

      <div className="mt-6">
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
        >
          Visit Course Provider →
        </a>
      </div>
    </article>
  );
}

export default function ShortCourseSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return shortCourses;
    }

    return shortCourses.filter((course) =>
      [
        course.title,
        course.provider,
        course.category,
        course.description,
        course.certificate ?? "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  const technologyCourses = filteredCourses.filter((course) =>
    [
      "Google",
      "Google Cloud",
      "Microsoft",
      "Amazon Web Services",
      "IBM",
      "Meta",
      "Salesforce",
      "Cisco",
      "MongoDB",
      "Fortinet",
      "Oracle Academy",
    ].includes(course.provider)
  );

  const programmingCourses = filteredCourses.filter((course) =>
    ["freeCodeCamp", "Kaggle"].includes(course.provider)
  );

  const academicCourses = filteredCourses.filter((course) =>
    [
      "MIT",
      "Harvard University",
      "The Open University",
      "Saylor Academy",
    ].includes(course.provider)
  );

  const businessCourses = filteredCourses.filter((course) =>
    ["HubSpot"].includes(course.provider)
  );

  return (
    <>
      {/* Search */}
      <div className="mb-14">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400">
              
            </span>

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search courses, providers, skills..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-14 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
  {[
    "Python",
    "AI",
    "Cloud",
    "Marketing",
    "Cybersecurity",
    "Data Science",
    "Programming",
    "Web Development",
    "Networking",
  ].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setSearchTerm(suggestion)}
                className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "resource" : "resources"} found
            {searchTerm ? ` for "${searchTerm}"` : ""}
          </p>
        </div>
      </div>

      {/* Results */}
      {filteredCourses.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
          <div className="text-5xl">🔎</div>

          <h3 className="mt-5 text-2xl font-bold text-slate-900">
            No courses found
          </h3>

          <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
            Try a different search term such as Python, AI, cloud, marketing,
            programming, or business.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Show All Courses
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {/* Technology */}
          {technologyCourses.length > 0 && (
            <section>
              <CategoryHeader
                icon="🌐"
                title="Technology & Digital Skills"
                description="Learn cloud computing, digital platforms, technology, and modern digital skills."
                label="Build Your Future"
                theme="blue"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {technologyCourses.map((course) => (
                  <CourseCard
                    key={`${course.provider}-${course.title}`}
                    course={course}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Programming */}
          {programmingCourses.length > 0 && (
            <section>
              <CategoryHeader
                icon="</>"
                title="Programming, Data & AI"
                description="Build practical technical skills in programming, data science, artificial intelligence, and software development."
                label="Learn & Innovate"
                theme="purple"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programmingCourses.map((course) => (
                  <CourseCard
                    key={`${course.provider}-${course.title}`}
                    course={course}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Academic */}
          {academicCourses.length > 0 && (
            <section>
              <CategoryHeader
                icon="🎓"
                title="University & Academic Learning"
                description="Explore free learning materials and courses from universities and academic education providers."
                label="Learn Anywhere"
                theme="green"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {academicCourses.map((course) => (
                  <CourseCard
                    key={`${course.provider}-${course.title}`}
                    course={course}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Business */}
          {businessCourses.length > 0 && (
            <section>
              <CategoryHeader
                icon="💼"
                title="Business, Marketing & Professional Skills"
                description="Develop business, marketing, sales, CRM, and professional skills."
                label="Grow Your Career"
                theme="orange"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {businessCourses.map((course) => (
                  <CourseCard
                    key={`${course.provider}-${course.title}`}
                    course={course}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}