import { countries } from "@/data/countries";
import { programs } from "@/data/programs";
import { universities } from "@/data/universities";
import type { PostTagTarget } from "@/types/social";
import { POST_TAG_MAX_COUNT } from "@/lib/social/postValidation";

/**
 * Countries, universities, and programs live in data/*.ts, not in Postgres.
 * Post tags store their slugs, so this catalog is what "a real tag" means.
 * Slugs also have to match the post_tags check constraint.
 */

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type TagInput = {
  target_type: string;
  target_slug: string;
};

export type ResolvedTag = {
  target_type: PostTagTarget;
  target_slug: string;
  name: string;
  href: string | null;
  detail: string | null;
};

type CatalogEntry = ResolvedTag & {
  search: string;
};

let catalog: CatalogEntry[] | null = null;
let byKey: Map<string, CatalogEntry> | null = null;

export function allPostTags(): ResolvedTag[] {
  return loadCatalog().map(toResolved);
}

export function validatePostTags(tags: readonly TagInput[]): ResolvedTag[] {
  if (!Array.isArray(tags)) {
    throw new Error("Tags are invalid.");
  }

  if (tags.length > POST_TAG_MAX_COUNT) {
    throw new Error(`You can add up to ${POST_TAG_MAX_COUNT} tags.`);
  }

  const index = loadIndex();
  const seen = new Set<string>();
  const resolved: ResolvedTag[] = [];

  for (const tag of tags) {
    const parsed = parseTag(tag);

    if (!parsed) {
      throw new Error("Tags have to be a country, university, or program.");
    }

    const key = tagKey(parsed.target_type, parsed.target_slug);

    if (seen.has(key)) {
      continue;
    }

    const match = index.get(key);

    if (!match) {
      throw new Error(
        `Unknown ${parsed.target_type} tag: ${parsed.target_slug}`
      );
    }

    seen.add(key);
    resolved.push(toResolved(match));
  }

  return resolved;
}

/**
 * Labels for tags already stored on a post. Unknown slugs stay visible as
 * text so an old post does not lose a chip if the catalog changes.
 */
export function describePostTags(tags: readonly TagInput[]): ResolvedTag[] {
  if (!Array.isArray(tags)) {
    return [];
  }

  const index = loadIndex();
  const seen = new Set<string>();
  const described: ResolvedTag[] = [];

  for (const tag of tags.slice(0, 200)) {
    const parsed = parseTag(tag);

    if (!parsed) {
      continue;
    }

    const key = tagKey(parsed.target_type, parsed.target_slug);

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    const match = index.get(key);

    described.push(
      match
        ? toResolved(match)
        : {
            target_type: parsed.target_type,
            target_slug: parsed.target_slug,
            name: parsed.target_slug,
            href: null,
            detail: null,
          }
    );
  }

  return described;
}

export function searchPostTags(query: string, limit = 8): ResolvedTag[] {
  const q = query.trim().toLowerCase();
  const cap = Math.min(Math.max(limit, 1), 20);

  if (q.length < 2 || q.length > 80) {
    return [];
  }

  const scored: { score: number; tag: CatalogEntry }[] = [];

  for (const tag of loadCatalog()) {
    const score = scoreTag(tag, q);

    if (score > 0) {
      scored.push({ score, tag });
    }
  }

  scored.sort((left, right) => {
    if (right.score !== left.score) {
      return right.score - left.score;
    }

    return left.tag.name.localeCompare(right.tag.name);
  });

  return scored.slice(0, cap).map((item) => toResolved(item.tag));
}

function parseTag(
  tag: TagInput
): { target_type: PostTagTarget; target_slug: string } | null {
  if (!tag || typeof tag !== "object") {
    return null;
  }

  const targetType = tag.target_type;
  const slug =
    typeof tag.target_slug === "string" ? tag.target_slug.trim().toLowerCase() : "";

  if (!isTargetType(targetType) || !SLUG_PATTERN.test(slug)) {
    return null;
  }

  return { target_type: targetType, target_slug: slug };
}

function isTargetType(value: string): value is PostTagTarget {
  return (
    value === "country" || value === "university" || value === "program"
  );
}

function tagKey(type: string, slug: string): string {
  return `${type}:${slug}`;
}

function toResolved(tag: CatalogEntry): ResolvedTag {
  return {
    target_type: tag.target_type,
    target_slug: tag.target_slug,
    name: tag.name,
    href: tag.href,
    detail: tag.detail,
  };
}

function scoreTag(tag: CatalogEntry, query: string): number {
  const name = tag.name.toLowerCase();

  if (name === query) {
    return 100;
  }

  if (name.startsWith(query)) {
    return 80;
  }

  if (tag.target_slug.startsWith(query)) {
    return 70;
  }

  if (name.includes(query)) {
    return 60;
  }

  if (tag.detail?.toLowerCase().includes(query)) {
    return 40;
  }

  if (tag.target_slug.includes(query)) {
    return 30;
  }

  if (tag.search.includes(query)) {
    return 20;
  }

  return 0;
}

function loadIndex(): Map<string, CatalogEntry> {
  if (!byKey) {
    byKey = new Map(loadCatalog().map((tag) => [tagKey(tag.target_type, tag.target_slug), tag]));
  }

  return byKey;
}

function loadCatalog(): CatalogEntry[] {
  if (catalog) {
    return catalog;
  }

  const entries: CatalogEntry[] = [];
  const seen = new Set<string>();

  const add = (entry: CatalogEntry) => {
    if (!SLUG_PATTERN.test(entry.target_slug)) {
      return;
    }

    const key = tagKey(entry.target_type, entry.target_slug);

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    entries.push(entry);
  };

  for (const country of countries) {
    add({
      target_type: "country",
      target_slug: country.slug,
      name: country.name,
      href: country.href,
      detail: null,
      search: `${country.name} ${country.slug}`.toLowerCase(),
    });
  }

  for (const university of Object.values(universities).flat()) {
    add({
      target_type: "university",
      target_slug: university.slug,
      name: university.name,
      href: `/universities/${encodeURIComponent(university.slug)}`,
      detail: university.country,
      search: `${university.name} ${university.slug} ${university.country} ${university.city}`.toLowerCase(),
    });
  }

  for (const program of programs) {
    add({
      target_type: "program",
      target_slug: program.slug,
      name: program.name,
      href: `/programs/${encodeURIComponent(program.slug)}`,
      detail: `${program.universityName} · ${program.level}`,
      search: `${program.name} ${program.slug} ${program.universityName} ${program.country} ${program.level}`.toLowerCase(),
    });
  }

  catalog = entries;
  return entries;
}
