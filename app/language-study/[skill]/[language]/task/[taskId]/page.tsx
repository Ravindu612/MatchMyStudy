import Frame from "@/components/languageStudy/Frame";
import TaskExperience from "@/components/languageStudy/TaskExperience";
import {
  capReachedText,
  languageCrumbs,
  lockedTaskText,
  practiceTaskAccess,
} from "@/lib/languageStudy/access";
import { checkoutNotConnectedMessage, isCheckoutReady, readLanguageStudyConfig } from "@/lib/languageStudy/config";
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
  const checkoutReady = isCheckoutReady(config);
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
      {task.access === "free" ? (
        <p className="mt-4 text-slate-700">
          This free task works without an account.{" "}
          <Link href={loginPathFor(taskPath(skill, language, task.id))} className="font-semibold text-blue-700">
            Sign in
          </Link>{" "}
          if you want the result saved to your account.
        </p>
      ) : null}
      <TaskExperience
        taskId={task.id}
        initialAccess={access}
        initialTask={showBody ? publicTask : null}
        initialFeedback={showBody && access === "completed" ? saved?.feedback ?? null : null}
        checkoutReady={checkoutReady}
        mode="practice"
        loginHref={loginPathFor(taskPath(skill, language, task.id))}
        paywall={{
          title: task.access === "paid" ? "Extra task locked" : "Free practice allowance reached",
          message: checkoutReady
            ? task.access === "paid"
              ? lockedTaskText(config, skill, language)
              : capReachedText(config, freeUsed)
            : checkoutNotConnectedMessage("task_batch"),
          product: "task_batch",
          skill,
          language,
          actionLabel: "Buy 10 tasks for USD 1.99",
        }}
      />
      <p id="language-study-next" className="mt-8">
        <Link href={languagePath(skill, language)} className="font-semibold text-blue-700">
          Back to {LANGUAGE_NAMES[language]} tasks
        </Link>
      </p>
    </Frame>
  );
}
