import Frame from "@/components/languageStudy/Frame";
import { skillCrumbs, skillIntro } from "@/lib/languageStudy/access";
import { LANGUAGE_CODES, type Skill } from "@/lib/languageStudy/types";
import { LANGUAGE_NAMES, languagePath, parseSkill, skillPath } from "@/lib/languageStudy/paths";
import { pageMeta } from "@/lib/seo-meta";
import Link from "next/link";
import { notFound } from "next/navigation";

const linkClass =
  "mt-4 inline-flex min-h-11 items-center font-semibold text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill: raw } = await params;
  const skill = parseSkill(raw);

  if (!skill) {
    return {};
  }

  const title = skill === "reading" ? "Practice Reading" : skill === "writing" ? "Practice Writing" : "Practice Listening";

  return pageMeta(
    skillPath(skill),
    `${title} | Language Study | MatchMyStudy`,
    `${skillIntro(skill)} English and Finnish only.`
  );
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill: raw } = await params;
  const skill = parseSkill(raw);

  if (!skill) {
    notFound();
  }

  return (
    <Frame crumbs={skillCrumbs(skill)}>
      <h1 className="text-4xl font-bold">{heading(skill)}</h1>
      <p className="mt-4 leading-8 text-slate-700">{skillIntro(skill)}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {LANGUAGE_CODES.map((language) => (
          <li key={language} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">{LANGUAGE_NAMES[language]}</h2>
            <p className="mt-2 text-slate-600">Start with the language, then choose a task.</p>
            <Link href={languagePath(skill, language)} className={linkClass}>
              Practice {LANGUAGE_NAMES[language]}
            </Link>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function heading(skill: Skill): string {
  if (skill === "reading") return "Practice Reading";
  if (skill === "writing") return "Practice Writing";
  return "Practice Listening";
}
