import { programs, type Program } from "@/data/programs";

/*
 * ------------------------------------------------
 * Program lookup + unique SEO titles
 * ------------------------------------------------
 */

const normalize = (value: string) => value.normalize("NFC");

const programsBySlug = new Map<string, Program>(
  programs.map((program) => [normalize(program.slug), program])
);

/*
 * Route params can arrive percent-encoded
 * ("dioploma-iarch%C3%A9ime-...") and in either Unicode
 * form, so decode safely and normalise to NFC before
 * looking the slug up.
 */
export function findProgramBySlug(rawSlug: string) {
  let slug = rawSlug;

  try {
    slug = decodeURIComponent(rawSlug);
  } catch {
    // Malformed escape sequence: fall back to the raw value.
  }

  return programsBySlug.get(normalize(slug));
}

const baseTitle = (program: Program) =>
  `${program.name} (${program.level}) — ${program.universityName}`;

/*
 * Extra detail used only when two programs at the same
 * university share name + level. The first field whose
 * values are all different inside the clashing group wins.
 */
const QUALIFIERS: ((program: Program) => string | undefined)[] = [
  (program) => program.degree,
  (program) => program.campus,
  (program) => program.programType,
  (program) => program.duration,
  (program) => program.intake,
];

function buildTitles() {
  const groups = new Map<string, Program[]>();

  for (const program of programs) {
    const key = baseTitle(program);
    groups.set(key, [...(groups.get(key) ?? []), program]);
  }

  const titles = new Map<string, string>();

  for (const [base, group] of groups) {
    if (group.length === 1) {
      titles.set(normalize(group[0].slug), base);
      continue;
    }

    const qualifier =
      QUALIFIERS.find((pick) => {
        const values = group.map((program) => pick(program)?.trim());
        return (
          values.every(Boolean) &&
          new Set(values).size === values.length
        );
      }) ??
      // Nothing fully separates the group: use the first
      // field that at least some of them have.
      QUALIFIERS.find((pick) =>
        group.some((program) => pick(program)?.trim())
      );

    for (const program of group) {
      const extra = qualifier?.(program)?.trim();
      const name = program.name.trim();
      titles.set(
        normalize(program.slug),
        extra && extra !== name
          ? `${name} (${program.level}, ${extra}) — ${program.universityName}`
          : base
      );
    }
  }

  return titles;
}

const titles = buildTitles();

export function getProgramTitle(program: Program) {
  return `${titles.get(normalize(program.slug)) ?? baseTitle(program)} | MatchMyStudy`;
}
