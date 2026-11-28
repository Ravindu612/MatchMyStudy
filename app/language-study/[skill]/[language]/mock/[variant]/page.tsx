import Frame from "@/components/languageStudy/Frame";
import TaskExperience from "@/components/languageStudy/TaskExperience";
import { languageCrumbs, mockAccess, mockLockedText } from "@/lib/languageStudy/access";
import { checkoutNotConnectedMessage, isCheckoutReady, readLanguageStudyConfig } from "@/lib/languageStudy/config";
import { loadStudyContext } from "@/lib/languageStudy/context";
import { findMock } from "@/lib/languageStudy/content";
import { toPublicMock } from "@/lib/languageStudy/grade";
import {
  LANGUAGE_NAMES,
  VARIANT_NAMES,
  languagePath,
  mockPath,
  parseLanguage,
  parseSkill,
  parseVariant,
} from "@/lib/languageStudy/paths";
import { UNOFFICIAL_NOTICE } from "@/lib/languageStudy/rubric";
import { loginPathFor } from "@/lib/signupRole";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Practice test | MatchMyStudy",
};

export default async function MockPage({
  params,
}: {
  params: Promise<{ skill: string; language: string; variant: string }>;
}) {
  const { skill: rawSkill, language: rawLanguage, variant: rawVariant } = await params;
  const skill = parseSkill(rawSkill);
  const language = parseLanguage(rawLanguage);
  const variant = parseVariant(rawVariant);
  const mock = skill && language && variant ? findMock(skill, language, variant) : null;

  if (!skill || !language || !variant || !mock) {
    notFound();
  }

  const checkoutReady = isCheckoutReady(readLanguageStudyConfig(process.env));
  const context = await loadStudyContext();
  const access = mockAccess({
    mock,
    userId: context.userId,
    storageReady: context.storageReady,
    state: context.state,
  });
  const attempt = context.userId
    ? context.state.attempts.find((item) => item.userId === context.userId && item.taskId === mock.id)
    : null;
  const here = mockPath(skill, language, variant);

  return (
    <Frame
      crumbs={[
        ...languageCrumbs(skill, language),
        { name: mock.title, href: here },
      ]}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        {VARIANT_NAMES[variant]} · {LANGUAGE_NAMES[language]}
      </p>
      <h1 className="mt-2 text-4xl font-bold">{mock.title}</h1>
      <p className="mt-4 rounded-2xl bg-slate-900 p-4 leading-7 text-white">{UNOFFICIAL_NOTICE}</p>
      <p className="mt-4 leading-7 text-slate-700">{mock.scopeNote}</p>

      {mock.availability.status === "full_practice" ? (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          {mock.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      ) : (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">This test variant is not available</h2>
          <p className="mt-3 leading-7 text-slate-700">{mock.availability.reason}</p>
          <p className="mt-3 text-slate-600">It cannot be purchased, started, or scored.</p>
        </section>
      )}

      {mock.availability.status === "full_practice" ? (
        <TaskExperience
          taskId={mock.id}
          initialAccess={access}
          initialTask={
            (access === "in_progress" || access === "result") && mock.availability.status === "full_practice"
              ? toPublicMock({ ...mock, availability: mock.availability })
              : null
          }
          initialFeedback={attempt?.feedback ?? null}
          initialStartedAt={attempt?.startedAt ?? null}
          minutes={mock.minutes}
          checkoutReady={checkoutReady}
          mode="mock"
          loginHref={loginPathFor(here)}
          paywall={{
            title: "This practice test is not open",
            message: checkoutReady ? mockLockedText(mock) : checkoutNotConnectedMessage("mock_test"),
            product: "mock_test",
            skill,
            language,
            examVariant: variant,
            actionLabel: "Buy this test for USD 4.99",
          }}
        />
      ) : null}

      <p className="mt-8">
        <Link href={languagePath(skill, language)} className="font-semibold text-blue-700">
          Back to {LANGUAGE_NAMES[language]} tasks
        </Link>
      </p>
    </Frame>
  );
}
