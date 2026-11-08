import AttemptForm from "@/components/languageStudy/AttemptForm";
import Frame from "@/components/languageStudy/Frame";
import OpenButton from "@/components/languageStudy/OpenButton";
import Paywall from "@/components/languageStudy/Paywall";
import ResultPanel from "@/components/languageStudy/ResultPanel";
import {
  capReachedText,
  languageCrumbs,
  lockedTaskText,
  practiceTaskAccess,
} from "@/lib/languageStudy/access";
import { readLanguageStudyConfig } from "@/lib/languageStudy/config";
import { loadStudyContext } from "@/lib/languageStudy/context";
import { findPracticeTask } from "@/lib/languageStudy/content";
import { toPublicListening, toPublicReading, toPublicWriting } from "@/lib/languageStudy/grade";
import { freeSubmissionsUsed } from "@/lib/languageStudy/ledger";
import {
  LANGUAGE_NAMES,
  languagePath,
  parseLanguage,
  parseSkill,
  taskPath,
} from "@/lib/languageStudy/paths";
import { UNOFFICIAL_NOTICE } from "@/lib/languageStudy/rubric";
import { loginPathFor } from "@/lib/signupRole";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Practice task | MatchMyStudy",
};

export default async function TaskPage({
  params,
}: {
  params: Promise<{ skill: string; language: string; taskId: string }>;
}) {
  const { skill: rawSkill, language: rawLanguage, taskId } = await params;
  const skill = parseSkill(rawSkill);
  const language = parseLanguage(rawLanguage);
  const task = findPracticeTask(decodeURIComponent(taskId));

  if (!skill || !language || !task || task.skill !== skill || task.language !== language) {
    notFound();
  }

  const config = readLanguageStudyConfig(process.env);
  const context = await loadStudyContext();
  const access = practiceTaskAccess({
    task,
    userId: context.userId,
    storageReady: context.storageReady,
    state: context.state,
    freeCap: config.freeTasksPerSkillPerLanguage,
  });
  const saved = context.userId
    ? context.state.attempts.find((attempt) => attempt.userId === context.userId && attempt.taskId === task.id)
    : null;
  const freeUsed = context.userId
    ? freeSubmissionsUsed(context.state, context.userId, skill, language)
    : 0;
  const publicTask =
    task.skill === "reading"
      ? toPublicReading(task)
      : task.skill === "writing"
        ? toPublicWriting(task)
        : toPublicListening(task);
  const showBody = access === "preview" || access === "practice" || access === "completed";

  return (
    <Frame
      crumbs={[
        ...languageCrumbs(skill, language),
        { name: task.title, href: taskPath(skill, language, task.id) },
      ]}
    >
      <h1 className="text-4xl font-bold">{task.title}</h1>
      <p className="mt-3 text-slate-600">
        {LANGUAGE_NAMES[language]} practice. {UNOFFICIAL_NOTICE}
      </p>
      {access === "preview" ? (
        <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-amber-950">
          Preview. This result is not saved and does not enforce the free allowance.{" "}
          <Link href={loginPathFor(taskPath(skill, language, task.id))} className="font-semibold text-blue-800">
            Sign in
          </Link>{" "}
          for counted practice.
        </p>
      ) : null}
      {access === "sign_in" ? (
        <div className="mt-4">
          <p>
            <Link href={loginPathFor(languagePath(skill, language))} className="font-semibold text-blue-700">
              Sign in
            </Link>{" "}
            to open this task. The passage stays hidden so a guest preview cannot bypass the allowance.
          </p>
          {task.access === "paid" ? (
            <div className="mt-4">
              <Paywall
                title="This task is in the paid batch"
                message={lockedTaskText(config, skill, language)}
                product="task_batch"
                skill={skill}
                language={language}
                actionLabel="Check task batch purchase"
                showPurchase
              />
            </div>
          ) : null}
        </div>
      ) : null}
      {access === "storage_unavailable" ? (
        <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-amber-950" role="status">
          Counted practice cannot be saved yet. The passage stays hidden, nothing was scored, and
          nothing was unlocked.
        </p>
      ) : null}
      {access === "locked" ? (
        <div className="mt-6">
          <Paywall
            title={task.access === "paid" ? "Extra task locked" : "Free practice allowance reached"}
            message={
              task.access === "paid"
                ? lockedTaskText(config, skill, language)
                : capReachedText(config, freeUsed)
            }
            product="task_batch"
            skill={skill}
            language={language}
            actionLabel="Check task batch purchase"
            showPurchase
          />
        </div>
      ) : null}
      {access === "needs_open" ? (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Use one practice credit to open this task</h2>
          <p className="mt-3 text-slate-700">
            The passage and questions stay hidden until a credit is used. Opening does not charge a
            card.
          </p>
          <OpenButton taskId={task.id} label="Open with one credit" />
        </section>
      ) : null}
      {showBody && access === "completed" && saved?.feedback ? (
        <ResultPanel feedback={saved.feedback} />
      ) : null}
      {showBody && access !== "completed" ? (
        <AttemptForm
          task={publicTask}
          mode={access === "preview" ? "preview" : "practice"}
          preview={access === "preview"}
        />
      ) : null}
      <p id="language-study-next" className="mt-8">
        <Link href={languagePath(skill, language)} className="font-semibold text-blue-700">
          Back to {LANGUAGE_NAMES[language]} tasks
        </Link>
      </p>
    </Frame>
  );
}
