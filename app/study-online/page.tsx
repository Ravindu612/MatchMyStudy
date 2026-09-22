import Link from "next/link";

export const metadata = {
  title: "Study Online — Online Courses & Degree Programs | MatchMyStudy",
  description:
    "Explore online short courses, undergraduate courses, and postgraduate courses from leading online learning platforms and education providers.",
};

const categories = [
  {
    title: "Short Courses",
    description:
      "Build new skills, improve your CV, and learn at your own pace with flexible online courses.",
    icon: "🎯",
    href: "/study-online/short-courses",
  },
  {
    title: "Undergraduate Courses",
    description:
      "Explore online undergraduate study options for developing your knowledge and preparing for your future career.",
    icon: "🎓",
    href: "/study-online/undergraduate",
  },
  {
    title: "Postgraduate Courses",
    description:
      "Discover online postgraduate programmes and advanced learning opportunities to develop your career.",
    icon: "📚",
    href: "/study-online/postgraduate",
  },
];

export default function StudyOnlinePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-semibold tracking-wide">
            Learn Without Borders
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Study Online
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            Explore flexible online courses and degree programmes designed to
            help you learn new skills, advance your education, and prepare for
            your future.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              What Would You Like to Study?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Choose a study level to explore online learning opportunities
              that match your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 text-3xl">
                  {category.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-blue-600">
                  {category.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="font-semibold text-blue-600">
                  Explore {category.title} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Online */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Why Study Online?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Online learning can make education more accessible and flexible,
            whether you want to develop a new skill, earn a qualification, or
            continue your professional development.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-3xl">⏰</div>

              <h3 className="mt-4 text-xl font-bold">
                Flexible Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn around your work, studies, and personal schedule.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-3xl">🌍</div>

              <h3 className="mt-4 text-xl font-bold">
                Learn From Anywhere
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Access learning opportunities from anywhere with an internet
                connection.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-3xl">🚀</div>

              <h3 className="mt-4 text-xl font-bold">
                Build Your Future
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Develop knowledge and skills that can support your education
                and career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="px-6 py-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          ← Back to MatchMyStudy
        </Link>
      </section>
    </main>
  );
}