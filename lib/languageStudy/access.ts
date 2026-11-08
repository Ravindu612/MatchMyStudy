import { ITALKI_AFFILIATE_URL, ITALKI_CTA_LABEL, ITALKI_LINK_REL } from "@/lib/italki";
import type { LanguageStudyConfig } from "./config";
import { PAYMENT_NOT_READY_MESSAGE } from "./config";
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
    return isPreviewTask(input.task) ? "preview" : "sign_in";
  }

  if (!input.storageReady) {
    return isPreviewTask(input.task) ? "preview" : "storage_unavailable";
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
  if (input.mock.availability.status !== "short_unofficial") {
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
        "Write to a prompt and complete a transparent self-review. The result is not an exam score.",
      href: skillPath("writing"),
      external: false,
    },
    {
      title: SKILL_NAMES.listening,
      description:
        "Listen to an original script in your browser's voice, then check your answers.",
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
  return `The provisional free allowance is ${config.freeTasksPerSkillPerLanguage} submitted tasks for each skill and language. That number is a placeholder until the owner confirms it. It is counted only for signed-in students, on the server.`;
}

export function capReachedText(config: LanguageStudyConfig, freeUsed: number): string {
  return `Free practice allowance reached. The provisional allowance is ${config.freeTasksPerSkillPerLanguage} submitted tasks for this skill and language, and ${freeUsed} have been saved. ${PAYMENT_NOT_READY_MESSAGE}`;
}

export function lockedTaskText(config: LanguageStudyConfig, skill: Skill, language: LanguageCode): string {
  const extra = lockedPracticeCount(skill, language);

  const credits = `${config.paidBatchSize} credit${config.paidBatchSize === 1 ? "" : "s"}`;
  const extras = `${extra} extra task${extra === 1 ? "" : "s"}`;

  return `This task is outside the provisional free allowance. A paid batch is configured as ${credits} for ${LANGUAGE_NAMES[language]} ${skill}, and ${extras} are in the library today. ${PAYMENT_NOT_READY_MESSAGE}`;
}

export function mockLockedText(mock: MockTest): string {
  const count = mockQuestionCount(mock);

  return `${mock.title} is a separate paid option with ${count} item${count === 1 ? "" : "s"} and a ${mock.minutes}-minute clock. ${UNOFFICIAL_NOTICE} ${PAYMENT_NOT_READY_MESSAGE}`;
}

export function skillIntro(skill: Skill): string {
  if (skill === "reading") {
    return "Choose a language, read a short original passage, and submit your answers. English also has separate short unofficial IELTS-style, TOEFL-style, and PTE-style reading practices. Finnish has a short unofficial YKI-style reading practice. None of these is an official test.";
  }

  if (skill === "writing") {
    return "Choose a language and write to a prompt. The result is a self-review checklist, not a band, an AI score, or an official mark. Some exam-style writing variants are unavailable because they need a rater MatchMyStudy does not have.";
  }

  return "Choose a language and play a browser text-to-speech preview of an original script. The result checks your answers. It is not proof that the audio played, and it is not an official listening score.";
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
  status: "short_unofficial" | "unavailable";
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
    status: "short_unofficial",
    reason: null,
    minutes: mock.minutes,
    questionCount: mockQuestionCount(mock),
  };
}
