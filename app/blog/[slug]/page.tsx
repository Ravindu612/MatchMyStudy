import Link from "next/link";

const blogPosts = {
  "best-countries-2026": {
    title: "Best Countries for International Students in 2026",
    category: "Country Comparison",
    readTime: "5 min read",
    date: "May 2026",
    intro:
      "Canada, Australia, Germany, and Finland are among the popular study destinations for international students. Each country offers different advantages depending on tuition fees, student jobs, living costs, and future opportunities.",
    sections: [
      {
        heading: "Canada",
        text: "Canada is attractive for students because of its multicultural environment, quality education, and post-study work opportunities. However, tuition fees and living costs can be higher compared with some European countries.",
      },
      {
        heading: "Australia",
        text: "Australia is popular for its strong universities, English-speaking environment, and student work opportunities. It can be a good option for students who want both education and work experience.",
      },
      {
        heading: "Germany",
        text: "Germany is known for affordable or low-tuition public universities. It is especially attractive for students who are looking for quality education in Europe with lower study costs.",
      },
      {
        heading: "Finland",
        text: "Finland offers high-quality education, a safe living environment, and growing opportunities for international students. Learning Finnish can improve job opportunities while studying.",
      },
    ],
  },

  "canada-vs-australia": {
    title: "Canada vs Australia for International Students",
    category: "Country Comparison",
    readTime: "4 min read",
    date: "May 2026",
    intro:
      "Canada and Australia are two of the most popular destinations for international students. Both countries offer English-taught education, part-time work opportunities, and future career pathways.",
    sections: [
      {
        heading: "Education Quality",
        text: "Both Canada and Australia have internationally recognized universities and colleges. The best choice depends on the student’s study field, budget, and long-term goals.",
      },
      {
        heading: "Student Jobs",
        text: "Australia is often attractive for students looking for part-time work during studies. Canada also offers work opportunities, but availability can depend on the city and local job market.",
      },
      {
        heading: "Living Costs",
        text: "Both countries can be expensive, especially in large cities. Students should compare rent, transport, food, insurance, and tuition before choosing a destination.",
      },
    ],
  },

  "cheapest-countries": {
    title: "Cheapest Countries to Study Abroad",
    category: "Budget Study Guide",
    readTime: "4 min read",
    date: "May 2026",
    intro:
      "For many international students, affordability is one of the most important factors when choosing a study destination. Germany and Finland can be attractive options for students looking for quality education with reasonable costs.",
    sections: [
      {
        heading: "Germany",
        text: "Germany is popular because many public universities have low or no tuition fees. However, students still need to plan for living expenses, health insurance, and the blocked account requirement.",
      },
      {
        heading: "Finland",
        text: "Finland offers high-quality education and a safe study environment. Tuition fees may apply for non-EU students, but scholarships can reduce the cost.",
      },
      {
        heading: "Important Advice",
        text: "The cheapest country is not always the best country. Students should also consider job opportunities, language requirements, immigration rules, and long-term career plans.",
      },
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Article Not Found
          </h1>

          <p className="text-slate-600 mb-8">
            The article you are looking for does not exist.
          </p>

          <Link
            href="/blog"
            className="text-blue-600 font-semibold"
          >
            ← Back to Blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 font-semibold"
        >
          ← Back to Blog
        </Link>

        <div className="mt-10 mb-10">
          <p className="text-blue-600 font-semibold mb-4">
            {post.category}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <p className="text-xl text-slate-600 leading-8">
            {post.intro}
          </p>
        </div>

        <div className="space-y-8">
          {post.sections.map((section) => (
            <section
              key={section.heading}
              className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">
                {section.heading}
              </h2>

              <p className="text-slate-600 leading-8">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-blue-50 border border-blue-200">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">
            Final Tip for Students
          </h2>

          <p className="text-slate-700 leading-8">
            Before choosing a country, compare tuition fees, living costs,
            student job options, visa rules, and future career opportunities.
            The best country depends on your personal goals, budget, and long-term plans.
          </p>
        </div>
      </article>
    </main>
  );
}