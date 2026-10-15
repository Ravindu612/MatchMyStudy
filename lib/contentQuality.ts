import { programs, type Program } from "@/data/programs";
import { universities, type University } from "@/data/universities";

/**
 * Thin-content rule for AdSense / scaled-content review.
 *
 * Program pages stay indexable only when they carry researched detail:
 * at least one admission requirement, or a real description of at least
 * 400 characters. Shorter templated blurbs (and "will be added soon"
 * placeholders) stay on the site but are noindex and left out of the
 * sitemap.
 *
 * University pages are the same kind of short template (none of the
 * current descriptions reach 400 characters). A university page stays
 * indexable when it is a catalog of at least one indexable program, or
 * when its own description eventually reaches that same 400-character
 * threshold. Other university pages are noindex and omitted from the
 * sitemap. Pages are not deleted.
 */

const PLACEHOLDER = /will be added soon/i;

export const MIN_STANDALONE_DESCRIPTION_CHARS = 400;

export function hasRealText(value?: string | null): value is string {
  return Boolean(value && value.trim() && !PLACEHOLDER.test(value));
}

export function isIndexableProgram(program: Program) {
  const hasAdmissions = program.admissionRequirements?.some((item) =>
    Boolean(item && item.trim())
  );

  if (hasAdmissions) return true;

  return (
    hasRealText(program.description) &&
    program.description.trim().length >= MIN_STANDALONE_DESCRIPTION_CHARS
  );
}

export function isIndexableUniversity(
  university: University,
  indexableProgramSlugs: ReadonlySet<string> = getIndexableProgramUniversitySlugs()
) {
  if (
    hasRealText(university.description) &&
    university.description.trim().length >= MIN_STANDALONE_DESCRIPTION_CHARS
  ) {
    return true;
  }

  return indexableProgramSlugs.has(university.slug);
}

export function indexingRobots(indexable: boolean) {
  return indexable
    ? { index: true as const, follow: true as const }
    : { index: false as const, follow: true as const };
}

let indexableProgramSlugs: Set<string> | null = null;
let indexableProgramUniversitySlugs: Set<string> | null = null;
let indexableUniversitySlugs: Set<string> | null = null;

export function getIndexableProgramSlugs() {
  if (!indexableProgramSlugs) {
    indexableProgramSlugs = new Set(
      programs.filter(isIndexableProgram).map((program) => program.slug)
    );
  }

  return indexableProgramSlugs;
}

function getIndexableProgramUniversitySlugs() {
  if (!indexableProgramUniversitySlugs) {
    indexableProgramUniversitySlugs = new Set(
      programs
        .filter(isIndexableProgram)
        .map((program) => program.universitySlug)
    );
  }

  return indexableProgramUniversitySlugs;
}

export function getIndexableUniversitySlugs() {
  if (!indexableUniversitySlugs) {
    const withPrograms = getIndexableProgramUniversitySlugs();
    indexableUniversitySlugs = new Set(
      Object.values(universities)
        .flat()
        .filter((university) => isIndexableUniversity(university, withPrograms))
        .map((university) => university.slug)
    );
  }

  return indexableUniversitySlugs;
}

export function getContentIndexStats() {
  const allUniversities = Object.values(universities).flat();
  const indexablePrograms = getIndexableProgramSlugs().size;
  const indexableUniversities = getIndexableUniversitySlugs().size;

  return {
    programs: {
      total: programs.length,
      indexable: indexablePrograms,
      thin: programs.length - indexablePrograms,
    },
    universities: {
      total: allUniversities.length,
      indexable: indexableUniversities,
      thin: allUniversities.length - indexableUniversities,
    },
  };
}

/**
 * Paths that should not request ads: empty "coming soon" screens,
 * account tools, and thin program / university pages.
 * Other content URLs may show ads.
 */
export const ADS_DENY_EXACT = [
  "/login",
  "/program-matcher",
  "/university-matcher",
  "/consultants/success",
] as const;

export const ADS_DENY_PREFIXES = [
  "/admin",
  "/api",
  "/settings",
  "/auth",
  "/messages",
  "/feed",
  "/network",
  "/notifications",
  "/consultants/apply",
  "/consultants/edit",
  "/consultants/manage-pro",
  "/consultants/upgrade",
] as const;

export function normalizePath(path: string) {
  const withoutQuery = path.split("?")[0]?.split("#")[0] ?? "/";
  let value = withoutQuery;

  try {
    value = decodeURIComponent(withoutQuery);
  } catch {
    value = withoutQuery;
  }

  if (value.length > 1 && value.endsWith("/")) {
    value = value.slice(0, -1);
  }

  return value || "/";
}

export function isAdsAllowedPath(path: string) {
  const normalized = normalizePath(path);

  if ((ADS_DENY_EXACT as readonly string[]).includes(normalized)) {
    return false;
  }

  if (
    ADS_DENY_PREFIXES.some(
      (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
    )
  ) {
    return false;
  }

  const programMatch = normalized.match(/^\/programs\/([^/]+)$/);
  if (programMatch) {
    return getIndexableProgramSlugs().has(programMatch[1]);
  }

  const universityMatch = normalized.match(/^\/universities\/([^/]+)$/);
  if (universityMatch) {
    return getIndexableUniversitySlugs().has(universityMatch[1]);
  }

  return true;
}
