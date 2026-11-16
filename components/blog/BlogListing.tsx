import Link from "next/link";
import { BlogCover, BlogPhotoCredit } from "@/components/blog/BlogCover";
import JsonLd from "@/components/JsonLd";
import { formatBlogDate, getBlogPosts } from "@/data/blog/posts";
import { blogPageCount, blogPagePath, getBlogPagePosts } from "@/lib/blog";
import { hubPageJsonLd } from "@/lib/hub-jsonld";

/*
 * One page of the blog listing: /blog (page 1) and /blog/page/[n].
 * Each page's CollectionPage JSON-LD lists the posts shown on it.
 */
export default function BlogListing({ page }: { page: number }) {
  const all = getBlogPosts();
  const posts = getBlogPagePosts(page, all);
  const pageCount = blogPageCount(all);
  const title =
    page === 1 ? "Study Abroad Articles" : `Study Abroad Articles – Page ${page}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <JsonLd
        data={hubPageJsonLd({
          type: "CollectionPage",
          name: title,
          path: blogPagePath(page),
          items: posts.map((p) => ({ name: p.title, url: `/blog/${p.slug}` })),
        })}
      />
      <section className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-semibold mb-4">
          Student Blog
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
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
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <BlogCover
                  post={post}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <article className="p-6 flex flex-col flex-1">
                <p className="text-sm font-semibold text-blue-600 mb-3">
                  {post.category}
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {post.title}
                </h2>

                <p className="text-slate-600 mb-4 flex-1">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500 mb-4">
                  <span>{formatBlogDate(post.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <BlogPhotoCredit
                  credit={post.unsplash}
                  className="text-xs text-slate-500 mb-4"
                />

                <span className="text-blue-600 font-semibold">
                  Read article →
                </span>
              </article>
            </Link>
          ))}
        </div>

        {pageCount > 1 && (
          <nav
            aria-label="Blog pages"
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            {page > 1 && (
              <Link
                href={blogPagePath(page - 1)}
                rel="prev"
                className="rounded-xl border border-blue-600 px-4 py-2 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                ← Previous
              </Link>
            )}
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) =>
              n === page ? (
                <span
                  key={n}
                  aria-current="page"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold"
                >
                  {n}
                </span>
              ) : (
                <Link
                  key={n}
                  href={blogPagePath(n)}
                  aria-label={`Page ${n}`}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition"
                >
                  {n}
                </Link>
              )
            )}
            {page < pageCount && (
              <Link
                href={blogPagePath(page + 1)}
                rel="next"
                className="rounded-xl border border-blue-600 px-4 py-2 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                Next →
              </Link>
            )}
          </nav>
        )}
      </section>
    </main>
  );
}
