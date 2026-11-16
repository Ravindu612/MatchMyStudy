import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";
import { blogPageCount, blogPagePath, parseBlogPageParam } from "@/lib/blog";
import { pageMeta } from "@/lib/seo-meta";

/*
 * Blog listing pages 2..N. Page 1 is /blog, so /blog/page/1 (like any
 * out-of-range or non-canonical number) is a 404, never a duplicate.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: blogPageCount() - 1 }, (_, i) => ({
    n: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const page = parseBlogPageParam((await params).n);
  if (!page) notFound();

  return pageMeta(
    blogPagePath(page),
    `Study Abroad Blog – Page ${page} | MatchMyStudy`,
    `Page ${page} of ${blogPageCount()} of the MatchMyStudy blog: more study abroad guides, country comparisons, and tips on applications, scholarships, visas and student life.`
  );
}

export default async function BlogListingPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const page = parseBlogPageParam((await params).n);
  if (!page) notFound();

  return <BlogListing page={page} />;
}
