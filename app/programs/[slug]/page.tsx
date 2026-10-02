import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/data/programs";
import { ubcEnglishRequirements } from "@/data/ubcEnglishRequirements";
import { englishRequirements } from "@/data/englishRequirements";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCountryPath } from "@/lib/seo-meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return {
    title: `${program.name} — ${program.universityName} | MatchMyStudy`,
    description:
      program.description ||
      `Explore ${program.name} at ${program.universityName}, including tuition information, programme details, entry requirements, duration, and study information.`,
    alternates: {
      canonical: `https://www.matchmystudy.com/programs/${program.slug}`,
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  const universityHref = `/universities/${program.universitySlug}`;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    {
      name: program.country,
      href: getCountryPath(program.country),
    },
    {
      name: program.universityName,
      href: universityHref,
    },
    {
      name: program.name,
      href: `/programs/${program.slug}`,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <Breadcrumbs
          items={breadcrumbItems}
          className="mb-6"
        />

        <Link
          href={universityHref}
          className="text-blue-600 font-semibold"
        >
          ← Back to {program.universityName}
        </Link>

        <div className="mt-10 bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-10">
          <p className="text-blue-600 font-semibold mb-4">
            {program.level} Programme
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            {program.name}
          </h1>

          <p className="text-slate-600 text-lg mb-10 leading-8">
            {program.description}
          </p>

          {/* Programme Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">
                University
              </p>
              <p className="text-xl font-semibold">
                {program.universityName}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">
                Country
              </p>
              <p className="text-xl font-semibold">
                {program.country}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">
                Level
              </p>
              <p className="text-xl font-semibold">
                {program.level}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">
                Field
              </p>
              <p className="text-xl font-semibold">
                {program.field}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">
                Duration
              </p>
              <p className="text-xl font-semibold">
                {program.duration}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">
                Language
              </p>
              <p className="text-xl font-semibold">
                {program.language}
              </p>
            </div>

            {program.campus && (
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <p className="text-slate-500 text-sm mb-2">
                  Campus
                </p>
                <p className="text-xl font-semibold">
                  {program.campus}
                </p>
              </div>
            )}

            {program.degree && (
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <p className="text-slate-500 text-sm mb-2">
                  Degree
                </p>
                <p className="text-xl font-semibold">
                  {program.degree}
                </p>
              </div>
            )}
          </div>

          {/* Tuition */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Tuition Information
            </h2>

            <p className="text-slate-600 leading-8">
              {program.tuitionNote}
            </p>
          </div>

          {/* English Requirements */}
          {program.universitySlug ===
            "university-of-british-columbia" && (
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                English Language Requirements
              </h2>

              <p className="text-slate-600 mb-6">
                International applicants must satisfy
                UBC's English Language Admission
                Standard.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold">
                    IELTS Academic
                  </p>
                  <p className="text-slate-600">
                    {ubcEnglishRequirements.ielts}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold">
                    TOEFL iBT
                  </p>
                  <p className="text-slate-600">
                    {ubcEnglishRequirements.toefl}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold">
                    PTE Academic
                  </p>
                  <p className="text-slate-600">
                    {ubcEnglishRequirements.pte}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold">
                    Duolingo English Test
                  </p>
                  <p className="text-slate-600">
                    {ubcEnglishRequirements.duolingo}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold">
                    CAEL
                  </p>
                  <p className="text-slate-600">
                    {ubcEnglishRequirements.cael}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <p className="font-semibold">
                    Cambridge English
                  </p>
                  <p className="text-slate-600">
                    {ubcEnglishRequirements.cambridge}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Official Link */}
          <a
            href={program.officialProgramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold text-white transition"
          >
            View Official Programme Page
          </a>
        </div>
      </section>
    </main>
  );
}