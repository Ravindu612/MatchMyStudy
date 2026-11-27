import { getBlogPosts } from "@/data/blog/posts";
import { consultants } from "@/data/consultants";
import { countries } from "@/data/countries";
import { programs, type Program } from "@/data/programs";
import { universities, type University } from "@/data/universities";
import { normalizeSearchText, queryTokens } from "@/lib/chat/limits";

export type SiteMatch = {
  title: string;
  url: string;
  summary: string;
  country?: string;
  level?: string;
  tuitionNote?: string;
  applicationDeadline?: string;
};

export type SiteSearchResult = {
  matches: SiteMatch[];
  note: string;
};

type SearchKind = "country" | "university" | "program" | "consultant" | "guide";

export type SiteSearchInput = {
  kind: SearchKind;
  query: string;
  country?: string;
  level?: string;
};

type IndexedRecord = SiteMatch & {
  haystack: string;
  titleKey: string;
};

const RESULT_LIMIT = 5;
const EMPTY_NOTE =
  "No matching MatchMyStudy record. Say that the site does not have this, and do not invent a university, fee, or deadline.";
const FOUND_NOTE =
  "These are published MatchMyStudy pages. Mention only these titles, urls, fees, and deadlines.";

const LEVEL_WORDS: Record<string, string[]> = {
  bachelor: ["bachelor", "undergraduate", "bachelors"],
  master: ["master", "masters", "graduate"],
  phd: ["phd", "doctoral", "doctorate"],
  doctoral: ["phd", "doctoral", "doctorate"],
  diploma: ["diploma"],
};

function clip(value: string, max: number): string {
  const clean = value.replace(/\s+/g, " ").trim();

  if (clean.length <= max) {
    return clean;
  }

  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

function publishedDetail(value: string | undefined): string | undefined {
  const trimmed = value?.replace(/\s+/g, " ").trim();

  if (!trimmed || /will be added soon/i.test(trimmed)) {
    return undefined;
  }

  return clip(trimmed, 180);
}

function pathFor(prefix: string, slug: string): string {
  return `${prefix}/${encodeURIComponent(slug)}`;
}

function levelHaystack(level: string): string {
  const key = normalizeSearchText(level);
  const extra = LEVEL_WORDS[key] ?? [];

  return [key, ...extra].join(" ");
}

function indexCountries(): IndexedRecord[] {
  return countries.map((country) => ({
    title: country.name,
    url: country.href,
    summary: clip(
      `${country.description} Status: ${country.status === "available" ? "page available" : "coming soon"}.`,
      220
    ),
    country: country.name,
    titleKey: normalizeSearchText(country.name),
    haystack: normalizeSearchText(
      `${country.name} ${country.slug} ${country.href} ${country.description} study abroad destination`
    ),
  }));
}

function indexUniversities(): IndexedRecord[] {
  const rows: University[] = Object.values(universities).flat();

  return rows.map((university) => ({
    title: university.name,
    url: pathFor("/universities", university.slug),
    summary: clip(
      `${university.city}, ${university.country}. ${university.description}`,
      220
    ),
    country: university.country,
    titleKey: normalizeSearchText(university.name),
    haystack: normalizeSearchText(
      `${university.name} ${university.slug} ${university.city} ${university.country} ${university.type} ${university.description}`
    ),
  }));
}

function indexPrograms(): IndexedRecord[] {
  return programs.map((program: Program) => {
    const tuitionNote = publishedDetail(program.tuitionNote);
    const applicationDeadline = publishedDetail(program.applicationDeadline);

    return {
      title: program.name,
      url: pathFor("/programs", program.slug),
      summary: clip(
        `${program.level} at ${program.universityName}, ${program.country}. Field: ${program.field}. ${program.description}`,
        220
      ),
      country: program.country,
      level: program.level,
      tuitionNote,
      applicationDeadline,
      titleKey: normalizeSearchText(`${program.name} ${program.universityName}`),
      haystack: normalizeSearchText(
        [
          program.name,
          program.slug,
          program.universityName,
          program.universitySlug,
          program.country,
          program.field,
          program.level,
          levelHaystack(program.level),
          program.language,
          program.description,
        ].join(" ")
      ),
    };
  });
}

function indexConsultants(): IndexedRecord[] {
  return consultants.map((consultant) => ({
    title: consultant.name,
    url: pathFor("/consultants", consultant.slug),
    summary: clip(
      `${consultant.city}, ${consultant.country}. Helps students going to ${consultant.destinationCountries.join(", ")}. Services: ${consultant.services.slice(0, 4).join(", ")}.`,
      220
    ),
    country: consultant.country,
    titleKey: normalizeSearchText(consultant.name),
    haystack: normalizeSearchText(
      [
        consultant.name,
        consultant.slug,
        consultant.city,
        consultant.country,
        consultant.homeCountry,
        consultant.destinationCountries.join(" "),
        consultant.services.join(" "),
      ].join(" ")
    ),
  }));
}

function indexGuides(): IndexedRecord[] {
  return getBlogPosts().map((post) => ({
    title: post.title,
    url: pathFor("/blog", post.slug),
    summary: clip(`${post.category}. ${post.description}`, 220),
    titleKey: normalizeSearchText(post.title),
    haystack: normalizeSearchText(
      [
        post.title,
        post.slug,
        post.category,
        post.description,
        post.sections.map((section) => section.heading).join(" "),
      ].join(" ")
    ),
  }));
}

type Catalog = Record<SearchKind, IndexedRecord[]>;

let catalogCache: Catalog | null = null;

function catalog(): Catalog {
  if (!catalogCache) {
    catalogCache = {
      country: indexCountries(),
      university: indexUniversities(),
      program: indexPrograms(),
      consultant: indexConsultants(),
      guide: indexGuides(),
    };
  }

  return catalogCache;
}

function matchesFilter(haystack: string, filter: string | undefined): boolean {
  const tokens = filter ? queryTokens(filter) : [];

  if (tokens.length === 0) {
    return true;
  }

  return tokens.every((token) => haystack.includes(token));
}

function scoreRecord(record: IndexedRecord, tokens: string[], phrase: string): number {
  let hits = 0;
  let score = 0;

  for (const token of tokens) {
    if (record.titleKey.includes(token)) {
      hits += 1;
      score += 6;
      continue;
    }

    if (record.haystack.includes(token)) {
      hits += 1;
      score += 1;
    }
  }

  if (hits === 0) {
    return 0;
  }

  if (tokens.length >= 2 && hits < Math.ceil(tokens.length / 2)) {
    return 0;
  }

  if (phrase && record.titleKey === phrase) {
    score += 40;
  } else if (phrase && record.titleKey.includes(phrase)) {
    score += 20;
  }

  return score;
}

function toMatch(record: IndexedRecord): SiteMatch {
  return {
    title: record.title,
    url: record.url,
    summary: record.summary,
    ...(record.country ? { country: record.country } : {}),
    ...(record.level ? { level: record.level } : {}),
    ...(record.tuitionNote ? { tuitionNote: record.tuitionNote } : {}),
    ...(record.applicationDeadline
      ? { applicationDeadline: record.applicationDeadline }
      : {}),
  };
}

export function searchSite(input: SiteSearchInput): SiteSearchResult {
  const tokens = queryTokens(input.query);
  const phrase = normalizeSearchText(input.query);
  const rows = catalog()[input.kind] ?? [];

  if (tokens.length === 0) {
    return { matches: [], note: EMPTY_NOTE };
  }

  const ranked = rows
    .filter(
      (record) =>
        matchesFilter(record.haystack, input.country) &&
        matchesFilter(record.haystack, input.level)
    )
    .map((record) => ({ record, score: scoreRecord(record, tokens, phrase) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title));

  if (ranked.length === 0) {
    return { matches: [], note: EMPTY_NOTE };
  }

  if (input.kind === "country" && ranked.length > 12) {
    const sample = rows
      .filter((record) => record.summary.includes("page available"))
      .slice(0, RESULT_LIMIT)
      .map(toMatch);

    return {
      matches: sample,
      note: "A sample of published country pages. Search one country name for its page.",
    };
  }

  return {
    matches: ranked.slice(0, RESULT_LIMIT).map((item) => toMatch(item.record)),
    note: FOUND_NOTE,
  };
}
