import BlogListing from "@/components/blog/BlogListing";
import { STATIC_META } from "@/lib/seo-meta";

export const metadata = STATIC_META["/blog"];

// Page 1 of the listing. Older posts are on /blog/page/[n].
export default function BlogPage() {
  return <BlogListing page={1} />;
}
