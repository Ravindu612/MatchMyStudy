import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BlogCover, BlogPhotoCredit } from "@/components/blog/BlogCover";
import {
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
  isFullIsoDate,
} from "@/data/blog/posts";
import { SITE_NAME, SITE_URL, STATIC_META } from "@/lib/seo-meta";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const meta = STATIC_META[`/blog/${slug}`];

  if (!meta) {
    notFound();
  }

  return meta;
}

function paragraphs(text: string) {
  return text.split(/\n\n+/).map((paragraph) => paragraph.trim()).filter(Boolean);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const coverUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;
  const organization = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/og-default.png` },
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [coverUrl],
    author: organization,
    publisher: organization,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    ...(isFullIsoDate(post.date)
      ? { datePublished: post.date, dateModified: post.date }
      : {}),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <JsonLd data={articleJsonLd} />
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 font-semibold"
        >
          ← Back to Blog
        </Link>

        <div className="relative mt-8 h-64 md:h-[420px] overflow-hidden rounded-3xl shadow-sm">
          <BlogCover
            post={post}
            preload
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <BlogPhotoCredit
          credit={post.unsplash}
          className="mt-3 text-xs text-slate-500"
        />

        <div className="mt-8 mb-10">
          <p className="text-blue-600 font-semibold mb-4">
            {post.category}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
            <span>{formatBlogDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="space-y-4">
            {paragraphs(post.intro).map((paragraph) => (
              <p
                key={paragraph}
                className="text-xl text-slate-600 leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
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

              <div className="space-y-4">
                {paragraphs(section.text).map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-slate-600 leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
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
