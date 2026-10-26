import Link from "next/link";
import { BlogCover, BlogPhotoCredit } from "@/components/blog/BlogCover";
import { formatBlogDate, getBlogPosts } from "@/data/blog/posts";
import { STATIC_META } from "@/lib/seo-meta";

export const metadata = STATIC_META["/blog"];

export default function BlogPage() {
  const posts = getBlogPosts();

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
      </section>
    </main>
  );
}
