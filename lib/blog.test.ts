import assert from "node:assert/strict";
import test from "node:test";
import { getBlogPosts, type BlogPost } from "../data/blog/posts";
import {
  BLOG_PAGE_SIZE,
  blogListingLastModified,
  blogPageCount,
  blogPagePath,
  getBlogPagePosts,
  getLatestPosts,
  getRelatedPosts,
  parseBlogPageParam,
} from "./blog";

function fakePosts(n: number, category = (i: number) => (i % 3 === 0 ? "A" : "B")) {
  return Array.from({ length: n }, (_, i) => ({
    slug: `post-${i}`,
    category: category(i),
    date: `2026-01-${String(28 - i).padStart(2, "0")}`,
  })) as unknown as BlogPost[];
}

test("pages hold every post exactly once, 12 per page", () => {
  const posts = getBlogPosts();
  const pages = blogPageCount(posts);
  assert.equal(pages, Math.ceil(posts.length / BLOG_PAGE_SIZE));
  const seen = Array.from({ length: pages }, (_, i) => getBlogPagePosts(i + 1, posts)).flat();
  assert.deepEqual(seen.map((p) => p.slug), posts.map((p) => p.slug));
  assert.equal(getBlogPagePosts(1, posts).length, Math.min(BLOG_PAGE_SIZE, posts.length));
  assert.deepEqual(getBlogPagePosts(pages + 1, posts), []);
  assert.deepEqual(getBlogPagePosts(0, posts), []);
});

test("page paths and the [n] param have one canonical form", () => {
  const posts = fakePosts(27);
  assert.equal(blogPageCount(posts), 3);
  assert.equal(blogPagePath(1), "/blog");
  assert.equal(blogPagePath(2), "/blog/page/2");
  assert.equal(parseBlogPageParam("2", posts), 2);
  assert.equal(parseBlogPageParam("3", posts), 3);
  for (const bad of ["1", "0", "4", "02", "2.0", "abc", ""]) {
    assert.equal(parseBlogPageParam(bad, posts), null, bad);
  }
});

test("related posts: nearest same-category neighbours, alternating newer then older", () => {
  const posts = fakePosts(10);
  // Category A, newest first by date: post-0, post-3, post-6, post-9.
  // From the newest (post-0): no newer neighbour, so the three older ones.
  assert.deepEqual(getRelatedPosts("post-0", 3, posts).map((p) => p.slug), [
    "post-3",
    "post-6",
    "post-9",
  ]);
  // From the oldest (post-9): no older neighbour, so the three newer ones,
  // nearest first.
  assert.deepEqual(getRelatedPosts("post-9", 3, posts).map((p) => p.slug), [
    "post-6",
    "post-3",
    "post-0",
  ]);
  // From a middle post (post-3): next newer, next older, next next newer.
  assert.deepEqual(getRelatedPosts("post-3", 3, posts).map((p) => p.slug), [
    "post-0",
    "post-6",
    "post-9",
  ]);
  // A category with no neighbours is filled from other categories,
  // nearest by date (post-4 is the oldest).
  const lonely = fakePosts(5, (i) => (i === 4 ? "Z" : "B"));
  assert.deepEqual(getRelatedPosts("post-4", 3, lonely).map((p) => p.slug), [
    "post-3",
    "post-2",
    "post-1",
  ]);
  assert.deepEqual(getRelatedPosts("missing", 3, posts), []);
  for (const post of getBlogPosts()) {
    const related = getRelatedPosts(post.slug);
    assert.equal(related.length, 3, post.slug);
    assert.ok(!related.some((p) => p.slug === post.slug), post.slug);
    assert.equal(new Set(related.map((p) => p.slug)).size, 3, post.slug);
  }
});

test("listing lastmod is the newest post date on that page", () => {
  const posts = fakePosts(27);
  assert.equal(blogListingLastModified(1, posts), "2026-01-28");
  assert.equal(blogListingLastModified(2, posts), "2026-01-16");
  assert.equal(blogListingLastModified(3, posts), "2026-01-04");
  assert.equal(blogListingLastModified(4, posts), undefined);
  const live = getBlogPosts();
  assert.equal(blogListingLastModified(1, live), live[0]?.date);
  const page2 = getBlogPagePosts(2, live);
  assert.equal(blogListingLastModified(2, live), page2[0]?.date);
});

test("latest posts are the newest", () => {
  const posts = getBlogPosts();
  assert.deepEqual(getLatestPosts(3, posts), posts.slice(0, 3));
});
