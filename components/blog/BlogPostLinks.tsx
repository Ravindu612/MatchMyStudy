import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/data/blog/posts";

/*
 * A small list of article links: "More articles" under a post and
 * "Latest articles" on the homepage. Text only (no cover images), so
 * it adds no layout shift and little page weight.
 */
export default function BlogPostLinks({
  posts,
  heading,
  className = "",
  headingLevel = "h2",
}: {
  posts: Pick<BlogPost, "slug" | "title" | "category" | "date" | "readTime">[];
  heading: string;
  className?: string;
  headingLevel?: "h2" | "h3";
}) {
  if (posts.length === 0) return null;
  const Heading = headingLevel;

  return (
    <nav aria-label={heading} className={className}>
      <Heading className="text-2xl font-bold mb-6 text-slate-900">
        {heading}
      </Heading>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="h-full bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition flex flex-col"
            >
              <span className="text-sm font-semibold text-blue-600 mb-2">
                {post.category}
              </span>
              <span className="text-lg font-bold text-slate-900 mb-3 flex-1">
                {post.title}
              </span>
              <span className="text-sm text-slate-500">
                {formatBlogDate(post.date)} · {post.readTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
