import { ITALKI_AFFILIATE_URL, ITALKI_CTA_LABEL, ITALKI_LINK_REL } from "@/lib/italki";
import type { LanguageStudyConfig } from "./config";
import { checkoutNotConnectedMessage, isCheckoutReady, productOffer, TAX_NOTE } from "./config";
import { lockedPracticeCount, mockQuestionCount } from "./content";
import {
  findAttempt,
  freeSubmissionsUsed,
  mockCreditBalance,
  mockDeadline,
  practiceCreditBalance,
} from "./ledger";
import {
  LANGUAGE_NAMES,
  LANGUAGE_STUDY_HREF,
  SKILL_NAMES,
  languagePath,
  skillPath,
  taskPath,
} from "./paths";
import { UNOFFICIAL_NOTICE } from "./rubric";
import type {
  ExamVariant,
  LanguageCode,
  MockTest,
  PracticeTask,
  Skill,
  StudyState,
} from "./types";

export type TaskAccessState =
  | "preview"
  | "practice"
  | "completed"
  | "needs_open"
  | "locked"
  | "sign_in"
  | "storage_unavailable";

export function isPreviewTask(task: Pick<PracticeTask, "id" | "access">): boolean {
  return task.access === "free" && task.id.endsWith("-1");
}

export function practiceTaskAccess(input: {
  task: Pick<PracticeTask, "id" | "access" | "skill" | "language">;
  userId: string | null;
  storageReady: boolean;
  state: StudyState;
  freeCap: number;
}): TaskAccessState {
  const attempt = input.userId
    ? findAttempt(input.state, input.userId, input.task.id)
    : null;

  if (attempt?.submittedAt) {
    return "completed";
  }

  if (!input.userId) {
    return input.task.access === "free" ? "practice" : "sign_in";
  }

  if (!input.storageReady) {
    return input.task.access === "free" ? "practice" : "storage_unavailable";
  }

  if (input.task.access === "paid") {
    if (attempt) {
      return "practice";
    }

    const credits = practiceCreditBalance(
      input.state,
      input.userId,
      input.task.skill,
      input.task.language
    );

    return credits > 0 ? "needs_open" : "locked";
  }

  const freeUsed = freeSubmissionsUsed(
    input.state,
    input.userId,
    input.task.skill,
    input.task.language
  );

  if (freeUsed < input.freeCap) {
    return "practice";
  }

  return "locked";
}

export function mockAccess(input: {
  mock: MockTest;
  userId: string | null;
  storageReady: boolean;
  state: StudyState;
  now?: number;
}):
  | "unavailable"
  | "sign_in"
  | "storage_unavailable"
  | "locked"
  | "start"
  | "in_progress"
  | "expired"
  | "result" {
  if (input.mock.availability.status !== "full_practice") {
    return "unavailable";
  }

  if (!input.userId) {
    return "sign_in";
  }

  if (!input.storageReady) {
    return "storage_unavailable";
  }

  const attempt = findAttempt(input.state, input.userId, input.mock.id);

  if (attempt?.submittedAt) {
    return attempt.feedback?.scoringKind === "unscored" ? "expired" : "result";
  }

  if (attempt) {
    const deadline = mockDeadline(attempt);
    const now = input.now ?? Date.now();

    if (deadline !== null && now > deadline) {
      return "expired";
    }

    return "in_progress";
  }

  const credits = mockCreditBalance(
    input.state,
    input.userId,
    input.mock.skill,
    input.mock.language,
    input.mock.variant
  );

  return credits > 0 ? "start" : "locked";
}

export type HubCard = {
  title: string;
  description: string;
  href: string;
  external: boolean;
  rel?: string;
};

export function languageStudyHubCards(): HubCard[] {
  return [
    {
      title: SKILL_NAMES.reading,
      description:
        "Choose English or Finnish, read an original passage, and submit answers for a raw mark.",
      href: skillPath("reading"),
      external: false,
    },
    {
      title: SKILL_NAMES.writing,
      description:
        "Write to a prompt and receive a rubric estimate. The result is not an exam score.",
      href: skillPath("writing"),
      external: false,
    },
    {
      title: SKILL_NAMES.listening,
      description:
        "Play a synthesized recording of an original script, then check your answers. A browser voice is only the fallback.",
      href: skillPath("listening"),
      external: false,
    },
    {
      title: ITALKI_CTA_LABEL,
      description:
        "Speaking practice stays with italki tutors. This link leaves MatchMyStudy and is an affiliate link.",
      href: ITALKI_AFFILIATE_URL,
      external: true,
      rel: ITALKI_LINK_REL,
    },
  ];
}

export function provisionalAllowanceText(config: LanguageStudyConfig): string {
  return `The free allowance is ${config.freeTasksPerSkillPerLanguage} tasks for each skill and language. Signed-in results are saved to the account when the database is ready. Otherwise they are saved in this browser.`;
}

export function capReachedText(config: LanguageStudyConfig, freeUsed: number): string {
  const next = isCheckoutReady(config)
    ? "A pack of extra tasks can be bought with the button on this page."
    : checkoutNotConnectedMessage("task_batch");

  return `Free practice allowance reached. ${freeUsed} of ${config.freeTasksPerSkillPerLanguage} free tasks for this skill and language have been saved. ${next}`;
}

export function lockedTaskText(config: LanguageStudyConfig, skill: Skill, language: LanguageCode): string {
  const extra = lockedPracticeCount(skill, language);

  return `This task is outside the free ${config.freeTasksPerSkillPerLanguage}. A purchase adds ${config.paidBatchSize} credits for ${LANGUAGE_NAMES[language]} ${skill}. ${extra} paid tasks are in the library for that pair. ${productOffer("task_batch")} ${TAX_NOTE}`;
}

export function mockLockedText(mock: MockTest): string {
  const count = mockQuestionCount(mock);
  const scope =
    mock.availability.status === "full_practice"
      ? `It has ${count} item${count === 1 ? "" : "s"} and a ${mock.minutes}-minute clock. The raw result is not an official score.`
      : "This variant cannot be purchased.";

  return `${mock.title}. ${scope} ${UNOFFICIAL_NOTICE} ${productOffer("mock_test")} ${TAX_NOTE}`;
}

export function skillIntro(skill: Skill): string {
  if (skill === "reading") {
    return "Choose a language, read an original passage, and submit your answers. English has full unofficial IELTS-style, TOEFL-style, and PTE-style reading practices. Finnish has a full unofficial YKI-style reading practice. None of these is an official test.";
  }

  if (skill === "writing") {
    return "Choose a language and write to a prompt. A built-in rubric estimates the response. That estimate is not an official score. If an AI reviewer is not configured, the rubric result still appears and says so.";
  }

  return "Choose a language and play the audio or the browser voice for an original script. The result checks your answers. It is not proof that the audio played, and it is not an official listening score.";
}

export function languageIntro(skill: Skill, language: LanguageCode): string {
  return `${SKILL_NAMES[skill]} in ${LANGUAGE_NAMES[language]}. ${UNOFFICIAL_NOTICE}`;
}

export function taskHref(
  task: PracticeTask,
  state: TaskAccessState
): string | null {
  if (
    state === "preview" ||
    state === "practice" ||
    state === "completed" ||
    state === "needs_open" ||
    state === "locked"
  ) {
    return taskPath(task.skill, task.language, task.id);
  }

  return null;
}

export function breadcrumbHome() {
  return [
    { name: "Home", href: "/" },
    { name: "Language Study", href: LANGUAGE_STUDY_HREF },
  ];
}

export function skillCrumbs(skill: Skill) {
  return [...breadcrumbHome(), { name: SKILL_NAMES[skill], href: skillPath(skill) }];
}

export function languageCrumbs(skill: Skill, language: LanguageCode) {
  return [
    ...skillCrumbs(skill),
    { name: LANGUAGE_NAMES[language], href: languagePath(skill, language) },
  ];
}

export type MockSummary = {
  variant: ExamVariant;
  title: string;
  status: "full_practice" | "unavailable";
  reason: string | null;
  minutes: number;
  questionCount: number;
};

export function summarizeMock(mock: MockTest): MockSummary {
  if (mock.availability.status === "unavailable") {
    return {
      variant: mock.variant,
      title: mock.title,
      status: "unavailable",
      reason: mock.availability.reason,
      minutes: 0,
      questionCount: 0,
    };
  }

  return {
    variant: mock.variant,
    title: mock.title,
    status: "full_practice",
    reason: null,
    minutes: mock.minutes,
    questionCount: mockQuestionCount(mock),
  };
}
