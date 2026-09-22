import Link from "next/link";
import ShortCourseSearch from "@/components/onlineCourses/ShortCourseSearch";

export const metadata = {
  title: "Free Short Courses Online | MatchMyStudy",
  description:
    "Explore free online short courses from Google and other leading education providers. Develop digital, business, technology, analytics, and career skills.",
};

export default function ShortCoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-semibold tracking-[0.2em]">
            ONLINE LEARNING
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Free Short Courses
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            Discover free online learning opportunities from leading technology
            companies and education providers.
          </p>
        </div>
      </section>

      {/* Course List */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Free Courses & Learning Platforms
            </h2>
          </div>

          {/* Search + Results */}
          <ShortCourseSearch />
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
              💡
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              Learn at Your Own Pace
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              These resources can help you develop new skills alongside your
              studies or career. Always check the provider&apos;s website for
              the latest course availability, pricing, certificate
              information, and eligibility requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-12 text-center">
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/study-online"
            className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            ← Study Online
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            🏠 Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}