import Link from "next/link";
import type { Program, ProgramLevel } from "@/data/programs";

type UniversityProgramListProps = {
  universityName: string;
  programs: Program[];
};

/*
 * Display order for programme levels. Any level not
 * listed here is shown after these, alphabetically.
 */
const LEVEL_ORDER: ProgramLevel[] = [
  "Foundation Studies",
  "Bachelor",
  "Diploma",
  "Graduate Diploma",
  "Professional Certificate",
  "Professional Diploma",
  "Master",
  "PhD",
  "Doctoral",
];

const LEVEL_HEADINGS: Partial<Record<ProgramLevel, string>> = {
  Bachelor: "Bachelor's programs",
  Master: "Master's programs",
  PhD: "PhD programs",
  Doctoral: "Doctoral programs",
  Diploma: "Diplomas",
  "Graduate Diploma": "Graduate diplomas",
  "Professional Certificate": "Professional certificates",
  "Professional Diploma": "Professional diplomas",
  "Foundation Studies": "Foundation studies",
};

function levelRank(level: string) {
  const index = LEVEL_ORDER.indexOf(level as ProgramLevel);

  return index === -1 ? LEVEL_ORDER.length : index;
}

/*
 * Server component: renders every programme of a
 * university as plain links so that all
 * /programs/[slug] pages are crawlable from the
 * university page (the ProgramSearch box only shows
 * results after client-side interaction).
 */
export default function UniversityProgramList({
  universityName,
  programs,
}: UniversityProgramListProps) {
  if (programs.length === 0) {
    return null;
  }

  const groups = new Map<string, Program[]>();

  for (const program of programs) {
    const group = groups.get(program.level) ?? [];
    group.push(program);
    groups.set(program.level, group);
  }

  const sortedGroups = Array.from(groups.entries())
    .sort(
      ([a], [b]) =>
        levelRank(a) - levelRank(b) || a.localeCompare(b)
    )
    .map(([level, items]) => ({
      level,
      items: [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    }));

  return (
    <section
      aria-labelledby="all-programs-heading"
      className="mb-12 bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8"
    >
      <h2
        id="all-programs-heading"
        className="text-3xl font-bold text-slate-900 mb-6"
      >
        All programs at {universityName} ({programs.length})
      </h2>

      <div className="space-y-8">
        {sortedGroups.map(({ level, items }) => (
          <div key={level}>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {`${LEVEL_HEADINGS[level as ProgramLevel] ?? level} (${items.length})`}
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2">
              {items.map((program) => (
                <li key={program.slug}>
                  <Link
                    href={`/programs/${program.slug}`}
                    prefetch={false}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
