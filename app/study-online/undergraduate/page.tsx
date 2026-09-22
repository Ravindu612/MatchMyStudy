import Link from "next/link";
import { undergraduateCourses } from "@/data/onlineCourses/undergraduateCourses";

export const metadata = {
  title: "Free Undergraduate Courses Online | MatchMyStudy",
  description:
    "Explore free undergraduate-level online courses from leading universities and education providers.",
};

export default function UndergraduateCoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-semibold tracking-[0.2em]">
            ONLINE LEARNING
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Undergraduate Courses
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            Explore free undergraduate-level courses and university learning
            resources from leading institutions.
          </p>
        </div>
      </section>

      {/* Course Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Undergraduate Learning
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Build university-level knowledge through freely available online
              courses. These resources are suitable for independent learning
              and may not provide university credit or an accredited degree.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {undergraduateCourses.map((course) => (
              <article
                key={`${course.provider}-${course.title}`}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {course.provider}
                  </span>

                  {course.isFree && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      FREE
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-sm font-medium text-indigo-600">
                    {course.subject}
                  </p>

                  <h3 className="text-xl font-bold leading-snug text-slate-900">
                    {course.title}
                  </h3>
                </div>

                <p className="flex-1 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>

                {course.certificate && (
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Certificate
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {course.certificate}
                    </p>
                  </div>
                )}

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Visit Course Provider →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
              🎓
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              Learn at University Level
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              These resources can help you explore university-level subjects,
              strengthen your academic knowledge, or prepare for further
              studies. Always check the provider&apos;s website for the latest
              course information, requirements, and availability.
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
            href="/study-online/short-courses"
            className="inline-flex items-center justify-center rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            Explore Short Courses
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