import {
  Globe,
  MapPin,
  Building2,
  Trophy,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  DollarSign,
  Award,
} from "lucide-react";
import ProgramSearch from "@/components/ProgramSearch";
import { programs } from "@/data/programs";
import Link from "next/link";
import { universities } from "@/data/universities";

const allUniversities = Object.values(universities).flat();

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const university = allUniversities.find(
    (uni) => uni.slug === slug
  );

  if (!university) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            University Not Found
          </h1>

          <p className="text-slate-600 mb-8">
            The university you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="text-blue-600 font-semibold"
          >
            ← Back to Home
          </Link>
        </section>
      </main>
    );
  }

  const universityPrograms = programs.filter(
    (program) => program.universitySlug === slug
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <section className="w-full overflow-hidden">

        <Link
          href={
  university.country === "United Kingdom"
    ? "/unitedkingdom"
    : university.country === "United States"
    ? "/usa"
    : university.country === "New Zealand"
    ? "/newzealand"
    : university.country === "South Korea"
    ? "/southkorea"
    : university.country === "Hong Kong"
    ? "/hongkong"
    : university.country === "United Arab Emirates"
    ? "/uae"
    : university.country === "Saudi Arabia"
    ? "/saudiarabia"
    : university.country === "Türkiye"
    ? "/turkiye"
    : university.country === "Czech Republic"
    ? "/czech-republic"
    : university.country === "South Africa"
    ? "/south-africa"
    : `/${university.country.toLowerCase()}`
}
          className="text-blue-600 font-semibold"
        >
          ← Back to {university.country}
        </Link>

        {/* HERO SECTION */}
        <div className="mt-2 relative overflow-hidden shadow-xl">

          <img
  src={
    university.bannerImage ||
    "/images/universities/default-banner.jpg"
  }
  alt={university.name}
  className="w-full h-[520px] md:h-[550px] object-cover"
/>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/30" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-8 md:px-12 text-white">

              {university.logo && (
                <div className="inline-block bg-white p-2 md:p-3 rounded-2xl shadow-xl mb-4">
                  <img
                    src={university.logo}
                    alt={university.name}
                    className="h-10 md:h-20 w-auto object-contain"
                  />
                </div>
              )}

              <p className="uppercase tracking-widest text-blue-200 font-semibold mb-3">
                University Profile
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                {university.name}
              </h1>

              <p className="text-blue-100 text-lg md:text-xl leading-8 mb-8 max-w-2xl">
                {university.descriptionShort ||
                  university.description}
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href={university.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
                >
                  Visit Official Website
                </a>

                {university.admissionsWebsite && (
                  <a
                    href={university.admissionsWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition"
                  >
                    Admissions
                  </a>
                  
                )}

              </div>
            </div>
          </div>
        </div>

        {/* QUICK FACTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10 mb-10">

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
      <Globe size={18} className="text-blue-600" />
    </div>

    <p className="text-slate-500 text-sm">Country</p>
  </div>

  <p className="text-lg font-semibold">
    {university.country}
  </p>
</div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
      <MapPin size={18} className="text-indigo-600" />
    </div>

    <p className="text-slate-500 text-sm">City</p>
  </div>

  <p className="text-lg font-semibold">
    {university.city}
  </p>
</div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
      <Building2 size={18} className="text-sky-600" />
    </div>

    <p className="text-slate-500 text-sm">Type</p>
  </div>

  <p className="text-lg font-semibold">
    {university.type}
  </p>
</div>

          

          
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
      <Trophy size={18} className="text-amber-600" />
    </div>

    <p className="text-slate-500 text-sm">Ranking</p>
  </div>

  <p className="text-lg font-semibold">
    {university.ranking}
  </p>
</div>
          

          {university.internationalStudents && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
      <Users size={18} className="text-green-600" />
    </div>

    <p className="text-slate-500 text-sm">Students</p>
  </div>

  <p className="text-lg font-semibold">
    {university.students}
  </p>
</div>
          )}

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
      <GraduationCap size={18} className="text-violet-600" />
    </div>

    <p className="text-slate-500 text-sm">
      International Students
    </p>
  </div>

  <p className="text-lg font-semibold">
    {university.internationalStudents}
  </p>
</div>

        </div>

        {/* ABOUT SECTION */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            About the University
          </h2>

          <p className="text-slate-600 leading-8 mb-10">
            {university.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
    <BookOpen size={18} className="text-blue-600" />
  </div>

  <h3 className="text-xl font-bold">
    Popular Study Fields
  </h3>
</div>

              <ul className="space-y-2 text-slate-600">
                {university.popularFields?.length ? (
                  university.popularFields.map((field) => (
                    <li key={field}>• {field}</li>
                  ))
                ) : (
                  <li>Information will be added soon.</li>
                )}
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
    <Calendar size={18} className="text-indigo-600" />
  </div>

  <h3 className="text-xl font-bold">
    Founded
  </h3>
</div>

              <p className="text-slate-600">
                {university.founded ||
                  "Information will be added soon."}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
    <DollarSign size={18} className="text-green-600" />
  </div>

  <h3 className="text-xl font-bold">
    Tuition Fees
  </h3>
</div>

              <p className="text-slate-600 leading-7">
                {university.tuitionNote ||
                  "Tuition information will be added soon."}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
    <Award size={18} className="text-amber-600" />
  </div>

  <h3 className="text-xl font-bold">
    Scholarships
  </h3>
</div>

              <p className="text-slate-600 leading-7">
                {university.scholarshipNote ||
                  "Scholarship information will be added soon."}
              </p>
            </div>

          </div>
        </div>

        {/* PROGRAM SEARCH */}
        <ProgramSearch
          universityName={university.name}
          programs={universityPrograms}
        />

      </section>
    </main>
  );
}