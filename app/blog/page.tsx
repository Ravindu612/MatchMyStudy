import Link from "next/link";

const posts = [
  {
    title: "Best Countries for International Students in 2026",
    slug: "best-countries-2026",
    description:
      "Compare Canada, Australia, Germany, and Finland for tuition fees, jobs, and student life.",
  },
  {
    title: "Canada vs Australia for International Students",
    slug: "canada-vs-australia",
    description:
      "Explore the differences in cost of living, work opportunities, and PR pathways.",
  },
  {
    title: "Cheapest Countries to Study Abroad",
    slug: "cheapest-countries",
    description:
      "Find affordable study destinations with quality education and lower living costs.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <section className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-semibold mb-4">
          Student Blog
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Study Abroad Articles
        </h1>

        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          Helpful guides, comparisons, and tips for international students
          planning to study abroad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition"
            >
              <article>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {post.title}
                </h2>

                <p className="text-slate-600 mb-6">
                  {post.description}
                </p>

                <span className="text-blue-600 font-semibold">
                  Read article →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}