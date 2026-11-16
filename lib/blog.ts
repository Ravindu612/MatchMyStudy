import { getBlogPosts, type BlogPost } from "../data/blog/posts";

/*
 * Blog listing pagination and related-post links.
 *
 * /blog is page 1; /blog/page/2, /blog/page/3, ... hold the rest.
 * Posts are ordered newest first (see getBlogPosts).
 */

export const BLOG_PAGE_SIZE = 12;

export function blogPageCount(posts: BlogPost[] = getBlogPosts()) {
  return Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE));
}

/** Posts shown on listing page `n` (1-based). Empty when out of range. */
export function getBlogPagePosts(n: number, posts: BlogPost[] = getBlogPosts()) {
  if (!Number.isInteger(n) || n < 1) return [];
  return posts.slice((n - 1) * BLOG_PAGE_SIZE, n * BLOG_PAGE_SIZE);
}

/** URL path of listing page `n`. Page 1 is /blog itself. */
export function blogPagePath(n: number) {
  return n <= 1 ? "/blog" : `/blog/page/${n}`;
}

/**
 * Parses the `[n]` segment of /blog/page/[n]. Only canonical numbers
 * from 2 up to the last page are valid ("1", "02" and "abc" are not),
 * so every listing page has exactly one URL.
 */
export function parseBlogPageParam(value: string, posts: BlogPost[] = getBlogPosts()) {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const n = Number(value);
  return n >= 2 && n <= blogPageCount(posts) ? n : null;
}

/**
 * Up to `count` other posts to link from an article: same category
 * first, then the newest of the rest.
 */
export function getRelatedPosts(
  slug: string,
  count = 3,
  posts: BlogPost[] = getBlogPosts()
) {
  const current = posts.find((post) => post.slug === slug);
  const others = posts.filter((post) => post.slug !== slug);
  const sameCategory = current
    ? others.filter((post) => post.category === current.category)
    : [];
  const rest = others.filter((post) => !sameCategory.includes(post));
  return [...sameCategory, ...rest].slice(0, count);
}

export function getLatestPosts(count = 3, posts: BlogPost[] = getBlogPosts()) {
  return posts.slice(0, count);
}
