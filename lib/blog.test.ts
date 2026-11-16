import assert from "node:assert/strict";
import test from "node:test";
import { getBlogPosts, type BlogPost } from "../data/blog/posts";
import {
  BLOG_PAGE_SIZE,
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

test("related posts: same category first, then newest, never itself", () => {
  const posts = fakePosts(10);
  // post-0 is category A; other A posts are post-3, post-6, post-9.
  assert.deepEqual(getRelatedPosts("post-0", 3, posts).map((p) => p.slug), [
    "post-3",
    "post-6",
    "post-9",
  ]);
  // A category with fewer matches is filled with the newest others.
  const lonely = fakePosts(5, (i) => (i === 4 ? "Z" : "B"));
  assert.deepEqual(getRelatedPosts("post-4", 3, lonely).map((p) => p.slug), [
    "post-0",
    "post-1",
    "post-2",
  ]);
  for (const post of getBlogPosts()) {
    const related = getRelatedPosts(post.slug);
    assert.equal(related.length, 3, post.slug);
    assert.ok(!related.some((p) => p.slug === post.slug), post.slug);
  }
});

test("latest posts are the newest", () => {
  const posts = getBlogPosts();
  assert.deepEqual(getLatestPosts(3, posts), posts.slice(0, 3));
});
