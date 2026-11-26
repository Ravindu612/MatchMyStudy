import { getBlogPosts, isFullIsoDate, type BlogPost } from "../data/blog/posts";

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

/** Newest full ISO date on listing page `n`, for the sitemap lastmod. */
export function blogListingLastModified(
  n: number,
  posts: BlogPost[] = getBlogPosts()
) {
  const dates = getBlogPagePosts(n, posts)
    .map((post) => post.date)
    .filter(isFullIsoDate)
    .sort();
  return dates.at(-1);
}

function comparePostsByDate(a: BlogPost, b: BlogPost) {
  if (a.date !== b.date) return a.date < b.date ? -1 : 1;
  return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
}

/**
 * Nearest neighbours of `current` in `candidates`, alternating the
 * next newer and the next older (by date, slug as a tie-break).
 */
function nearestNeighbors(
  current: BlogPost,
  candidates: BlogPost[],
  count: number
) {
  const newer = candidates
    .filter((post) => comparePostsByDate(post, current) > 0)
    .sort(comparePostsByDate);
  const older = candidates
    .filter((post) => comparePostsByDate(post, current) < 0)
    .sort((a, b) => comparePostsByDate(b, a));

  const out: BlogPost[] = [];
  let i = 0;
  let j = 0;
  while (out.length < count && (i < newer.length || j < older.length)) {
    if (i < newer.length) out.push(newer[i++]);
    if (out.length < count && j < older.length) out.push(older[j++]);
  }
  return out;
}

/**
 * Up to `count` other posts to link from an article: the nearest
 * neighbours in the same category, before and after by date,
 * alternating; filled from other categories the same way if there
 * are too few.
 */
export function getRelatedPosts(
  slug: string,
  count = 3,
  posts: BlogPost[] = getBlogPosts()
) {
  const current = posts.find((post) => post.slug === slug);
  if (!current || count <= 0) return [];
  const others = posts.filter((post) => post.slug !== slug);
  const sameCategory = others.filter((post) => post.category === current.category);
  const rest = others.filter((post) => post.category !== current.category);
  const related = nearestNeighbors(current, sameCategory, count);
  if (related.length < count) {
    related.push(...nearestNeighbors(current, rest, count - related.length));
  }
  return related;
}

export function getLatestPosts(count = 3, posts: BlogPost[] = getBlogPosts()) {
  return posts.slice(0, count);
}
