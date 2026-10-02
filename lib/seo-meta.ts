import type { Metadata } from "next";
import { countries } from "@/data/countries";

export const SITE_URL = "https://www.matchmystudy.com";
export const SITE_NAME = "MatchMyStudy";

/*
 * ------------------------------------------------
 * Shared page metadata helper
 * ------------------------------------------------
 *
 * Paths are relative (e.g. "/about") and are resolved
 * against `metadataBase` in app/layout.tsx.
 */

export function pageMeta(
  path: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/*
 * ------------------------------------------------
 * Country pages
 * ------------------------------------------------
 *
 * Route slug -> display name used in titles and
 * descriptions ("Study in the UK", "Study in Japan").
 */

export const COUNTRY_NAMES: Record<string, string> = {
  australia: "Australia",
  austria: "Austria",
  belgium: "Belgium",
  canada: "Canada",
  china: "China",
  "czech-republic": "the Czech Republic",
  denmark: "Denmark",
  finland: "Finland",
  france: "France",
  germany: "Germany",
  greece: "Greece",
  hongkong: "Hong Kong",
  hungary: "Hungary",
  india: "India",
  ireland: "Ireland",
  italy: "Italy",
  japan: "Japan",
  malaysia: "Malaysia",
  netherlands: "the Netherlands",
  newzealand: "New Zealand",
  norway: "Norway",
  poland: "Poland",
  portugal: "Portugal",
  qatar: "Qatar",
  romania: "Romania",
  saudiarabia: "Saudi Arabia",
  singapore: "Singapore",
  "south-africa": "South Africa",
  southkorea: "South Korea",
  spain: "Spain",
  sweden: "Sweden",
  switzerland: "Switzerland",
  taiwan: "Taiwan",
  thailand: "Thailand",
  turkiye: "Türkiye",
  uae: "the UAE",
  unitedkingdom: "the UK",
  usa: "the USA",
};

export function countryMeta(slug: string): Metadata {
  const name = COUNTRY_NAMES[slug] ?? slug;

  return pageMeta(
    `/${slug}`,
    `Study in ${name}: Universities & Programs | MatchMyStudy`,
    `Planning to study in ${name}? Browse universities and bachelor's, master's and PhD programs, compare your options, and connect with study abroad consultants on MatchMyStudy.`
  );
}

/*
 * Country name as stored on universities/programs
 * (e.g. "United Kingdom") -> country page path
 * (e.g. "/unitedkingdom"), using data/countries.ts.
 */
export function getCountryPath(countryName: string) {
  const country = countries.find(
    (item) => item.name === countryName
  );

  return (
    country?.href ??
    `/${countryName.toLowerCase().replace(/\s+/g, "-")}`
  );
}

/*
 * ------------------------------------------------
 * Static pages
 * ------------------------------------------------
 */

export const STATIC_META: Record<string, Metadata> = {
  "/consultants": pageMeta(
    "/consultants",
    "Study Abroad Consultants: Find Trusted Education Agents | MatchMyStudy",
    "Search verified study abroad consultants and education agents by your home country and the country you want to study in. Compare services and get guidance for your applications."
  ),

  "/blog": pageMeta(
    "/blog",
    "Study Abroad Blog: Country Guides & Comparisons | MatchMyStudy",
    "Study abroad guides for international students: the best countries to study in 2026, Canada vs Australia, and the cheapest countries to study abroad, with tips on fees, jobs and living costs."
  ),

  "/about": pageMeta(
    "/about",
    "About MatchMyStudy: Helping Students Plan Study Abroad",
    "MatchMyStudy helps students explore countries, universities and study programmes, find options that match their goals, and connect with education consultants for guidance."
  ),

  "/program-matcher": pageMeta(
    "/program-matcher",
    "Program Matcher: Find Study Programs That Fit You | MatchMyStudy",
    "The MatchMyStudy Program Matcher is coming soon to help you find bachelor's and master's programs that fit your interests and goals. Browse programs by university in the meantime."
  ),

  "/study-matcher": pageMeta(
    "/study-matcher",
    "Study Destination Matcher: Which Country Should You Study In? | MatchMyStudy",
    "Answer a few quick questions about your degree, field, tuition budget, language, climate, part-time jobs, living costs and post-study plans to find the study abroad countries that suit you best."
  ),

  "/university-matcher": pageMeta(
    "/university-matcher",
    "University Matcher: Find Universities That Fit You | MatchMyStudy",
    "The MatchMyStudy University Matcher is coming soon to help you shortlist universities abroad that match your goals. Explore universities by country in the meantime."
  ),

  "/blog/canada-vs-australia": pageMeta(
    "/blog/canada-vs-australia",
    "Canada vs Australia for International Students | MatchMyStudy",
    "Canada or Australia? Compare education quality, part-time student jobs and living costs in both countries to decide which study destination fits your budget and goals."
  ),

  "/blog/cheapest-countries": pageMeta(
    "/blog/cheapest-countries",
    "Cheapest Countries to Study Abroad | MatchMyStudy",
    "Looking for an affordable study destination? See why Germany's low-tuition public universities and Finland's scholarships make them good-value options, and what else to budget for."
  ),

  "/blog/best-countries-2026": pageMeta(
    "/blog/best-countries-2026",
    "Best Countries for International Students in 2026 | MatchMyStudy",
    "Compare Canada, Australia, Germany and Finland for international students in 2026: tuition fees, student jobs, living costs, post-study work and quality of education."
  ),
};
