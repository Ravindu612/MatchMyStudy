import AttemptForm from "@/components/languageStudy/AttemptForm";
import Frame from "@/components/languageStudy/Frame";
import OpenButton, { CloseAttemptButton } from "@/components/languageStudy/OpenButton";
import Paywall from "@/components/languageStudy/Paywall";
import ResultPanel from "@/components/languageStudy/ResultPanel";
import { languageCrumbs, mockAccess, mockLockedText } from "@/lib/languageStudy/access";
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
  robots: { index: false, follow: true },
  title: "Unofficial practice test | MatchMyStudy",
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

      {mock.availability.status === "short_unofficial" ? (
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

      {access === "sign_in" || access === "locked" ? (
        <div className="mt-6">
          <Paywall
            title="This unofficial practice test is not open"
            message={mockLockedText(mock)}
            product="mock_test"
            skill={skill}
            language={language}
            examVariant={variant}
            actionLabel="Check mock test purchase"
            showPurchase
          />
          {!context.userId ? (
            <p className="mt-4">
              <Link href={loginPathFor(here)} className="font-semibold text-blue-700">
                Sign in
              </Link>{" "}
              to keep a future purchase on your account. Signing in does not unlock this test.
            </p>
          ) : null}
        </div>
      ) : null}

      {access === "storage_unavailable" ? (
        <p className="mt-6 rounded-2xl bg-amber-50 p-4 text-amber-950" role="status">
          The test cannot start because practice storage is not available. Nothing was unlocked.
        </p>
      ) : null}

      {access === "start" ? (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Start the timed practice</h2>
          <p className="mt-3 text-slate-700">
            Starting uses one mock credit and reveals the items. The questions stay hidden until
            then. No card is charged on this step.
          </p>
          <OpenButton taskId={mock.id} label="Start unofficial practice" />
        </section>
      ) : null}

      {access === "in_progress" && attempt && mock.availability.status === "short_unofficial" ? (
        <section>
          <h2 className="mt-8 text-2xl font-bold">Timed items</h2>
          <AttemptForm
            task={toPublicMock({ ...mock, availability: mock.availability })}
            mode="mock"
            preview={false}
            startedAt={attempt.startedAt}
            minutes={mock.minutes}
          />
        </section>
      ) : null}

      {access === "expired" ? (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Time is up</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The clock has passed, including a short grace period for the submission to arrive. The
            items stay hidden, and this attempt is not given a score.
          </p>
          {attempt?.feedback ? <ResultPanel feedback={attempt.feedback} /> : (
            <CloseAttemptButton taskId={mock.id} />
          )}
        </section>
      ) : null}

      {access === "result" && attempt?.feedback ? <ResultPanel feedback={attempt.feedback} /> : null}

      <p className="mt-8">
        <Link href={languagePath(skill, language)} className="font-semibold text-blue-700">
          Back to {LANGUAGE_NAMES[language]} tasks
        </Link>
      </p>
    </Frame>
  );
}
