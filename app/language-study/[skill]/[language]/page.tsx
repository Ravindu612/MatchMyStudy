import Frame from "@/components/languageStudy/Frame";
import Paywall from "@/components/languageStudy/Paywall";
import {
  languageCrumbs,
  languageIntro,
  practiceTaskAccess,
  provisionalAllowanceText,
  summarizeMock,
  taskHref,
} from "@/lib/languageStudy/access";
import { readLanguageStudyConfig } from "@/lib/languageStudy/config";
import { loadStudyContext } from "@/lib/languageStudy/context";
import { mocksFor, practiceTasksFor } from "@/lib/languageStudy/content";
import { freeSubmissionsUsed } from "@/lib/languageStudy/ledger";
import {
  LANGUAGE_NAMES,
  SKILL_NAMES,
  languagePath,
  mockPath,
  parseLanguage,
  parseSkill,
} from "@/lib/languageStudy/paths";
import { loginPathFor } from "@/lib/signupRole";
import { pageMeta } from "@/lib/seo-meta";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const linkClass =
  "mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string; language: string }>;
}) {
  const { skill: rawSkill, language: rawLanguage } = await params;
  const skill = parseSkill(rawSkill);
  const language = parseLanguage(rawLanguage);

  if (!skill || !language) {
    return {};
  }

  return pageMeta(
    languagePath(skill, language),
    `${SKILL_NAMES[skill]} in ${LANGUAGE_NAMES[language]} | MatchMyStudy`,
    languageIntro(skill, language)
  );
}

export default async function LanguagePracticePage({
  params,
  searchParams,
}: {
  params: Promise<{ skill: string; language: string }>;
  searchParams: Promise<{ purchase?: string }>;
}) {
  const { skill: rawSkill, language: rawLanguage } = await params;
  const query = await searchParams;
  const skill = parseSkill(rawSkill);
  const language = parseLanguage(rawLanguage);

  if (!skill || !language) {
    notFound();
  }

  const config = readLanguageStudyConfig(process.env);
  const context = await loadStudyContext();
  const tasks = practiceTasksFor(skill, language);
  const mocks = mocksFor(skill, language);
  const freeUsed = context.userId
    ? freeSubmissionsUsed(context.state, context.userId, skill, language)
    : 0;
  const here = languagePath(skill, language);

  return (
    <Frame crumbs={languageCrumbs(skill, language)}>
      <h1 className="text-4xl font-bold">
        {SKILL_NAMES[skill]} in {LANGUAGE_NAMES[language]}
      </h1>
      <p className="mt-4 leading-8 text-slate-700">{languageIntro(skill, language)}</p>
      <p className="mt-4 leading-7 text-slate-700">{provisionalAllowanceText(config)}</p>
      {context.userId && context.storageReady ? (
        <p className="mt-3 font-semibold text-slate-900">
          Saved free submissions: {freeUsed} of {config.freeTasksPerSkillPerLanguage}.
        </p>
      ) : null}
      {context.userId && !context.storageReady ? (
        <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-amber-950" role="status">
          You are signed in, but counted practice is not available until the language study
          database migration is applied. Nothing is stored, and the free allowance is not active.
          You can still open the labeled preview task.
        </p>
      ) : null}
      {!context.userId ? (
        <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-slate-800">
          You are viewing a preview. It does not enforce the free allowance.{" "}
          <Link href={loginPathFor(here)} className="font-semibold text-blue-700">
            Sign in
          </Link>{" "}
          so submissions are counted on the server.
        </p>
      ) : null}
      {query.purchase ? (
        <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-slate-800" role="status">
          Returning from a payment page does not unlock a task. A purchase is recorded only after
          the signed webhook confirms it. Prices are not set in the default setup, so no charge
          should have been made.
        </p>
      ) : null}

      <h2 className="mt-10 text-2xl font-bold">Practice tasks</h2>
      <ul className="mt-4 space-y-4">
        {tasks.map((task) => {
          const state = practiceTaskAccess({
            task,
            userId: context.userId,
            storageReady: context.storageReady,
            state: context.state,
            freeCap: config.freeTasksPerSkillPerLanguage,
          });
          const href = taskHref(task, state);

          return (
            <li key={task.id} className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="mt-2 text-slate-600">{stateLabel(state)}</p>
              {href ? (
                <Link href={href} className={linkClass}>
                  {state === "completed" ? "Review result" : "Open task"}
                </Link>
              ) : state === "sign_in" ? (
                <Link href={loginPathFor(here)} className={linkClass}>
                  Sign in to open
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Unofficial practice tests</h2>
      <p className="mt-2 text-slate-600">
        These are separate from the free tasks. A short sample is not a full exam, and an
        unavailable variant cannot be purchased.
      </p>
      <ul className="mt-4 space-y-4">
        {mocks.map((mock) => {
          const summary = summarizeMock(mock);

          return (
            <li key={mock.id} className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-xl font-semibold">{summary.title}</h3>
              {summary.status === "unavailable" ? (
                <p className="mt-2 text-slate-700">{summary.reason}</p>
              ) : (
                <p className="mt-2 text-slate-600">
                  {summary.questionCount} items, {summary.minutes} minutes. Unofficial practice, not
                  a certified score.
                </p>
              )}
              <Link href={mockPath(skill, language, mock.variant)} className={linkClass}>
                View test details
              </Link>
            </li>
          );
        })}
      </ul>

      {context.userId && context.storageReady && freeUsed >= config.freeTasksPerSkillPerLanguage ? (
        <div className="mt-10">
          <Paywall
            title="Free practice allowance reached"
            message={`The provisional allowance of ${config.freeTasksPerSkillPerLanguage} submitted tasks for this skill and language has been used. Purchase is not available yet. Nothing was charged, and no extra task was unlocked.`}
            product="task_batch"
            skill={skill}
            language={language}
            actionLabel="Check task batch purchase"
            showPurchase
          />
        </div>
      ) : null}
    </Frame>
  );
}

function stateLabel(state: string): string {
  switch (state) {
    case "preview":
      return "Preview. This task is not saved and does not enforce the free allowance.";
    case "practice":
      return "Open. Submitting counts toward the provisional free allowance.";
    case "completed":
      return "Submitted. Your saved result is available.";
    case "needs_open":
      return "A paid credit can open this task. The passage stays hidden until then.";
    case "locked":
      return "Locked. The free allowance does not include this task, and purchase is not available yet.";
    case "sign_in":
      return "Sign in to take this task under the server-side allowance.";
    default:
      return "Counted practice is waiting for the database migration.";
  }
}
