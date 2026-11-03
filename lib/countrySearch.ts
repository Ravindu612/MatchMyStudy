import { universities, type CountryKey } from "@/data/universities";
import { programs } from "@/data/programs";
import type { SearchProgram, SearchUniversity } from "@/components/CountrySearch";

export const countryKeys = Object.keys(universities) as CountryKey[];

/* Country name as used on programs (e.g. "Ireland"), taken from its universities. */
function countryNameFor(key: CountryKey): string | undefined {
  return universities[key]?.[0]?.country;
}

// Slim program shape for the search box (same fields as PR #103).
export function getCountrySearchPrograms(country: string): SearchProgram[] {
  const c = country.toLowerCase();
  return programs
    .filter((p) => p.country.toLowerCase() === c)
    .map(({ slug, universitySlug, universityName, name, field, level, duration, language }) => ({
      slug, universitySlug, universityName, name, field, level, duration, language,
    }));
}

export function getCountrySearchUniversities(key: CountryKey): SearchUniversity[] {
  return (universities[key] ?? []).map(({ slug, name, city, country, type, description }) => ({
    slug, name, city, country, type, description: description.slice(0, 200),
  }));
}

export function getCountrySearchProgramsByKey(key: CountryKey, country?: string): SearchProgram[] {
  const name = country ?? countryNameFor(key);
  return name ? getCountrySearchPrograms(name) : [];
}
