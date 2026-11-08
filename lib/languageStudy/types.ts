/**
 * Shared Language Study types. This module has no task text and no answer keys.
 * Client components may import these types. They must not import the content bank.
 */

export const SKILLS = ["reading", "writing", "listening"] as const;
export type Skill = (typeof SKILLS)[number];

export const LANGUAGE_CODES = ["en", "fi"] as const;
export type LanguageCode = (typeof LANGUAGE_CODES)[number];

export const EXAM_VARIANTS = ["ielts", "toefl", "pte", "yki"] as const;
export type ExamVariant = (typeof EXAM_VARIANTS)[number];

export const SELF_RATINGS = ["met", "partly", "not_yet"] as const;
export type SelfRating = (typeof SELF_RATINGS)[number];

export type SkillLanguage = {
  skill: Skill;
  language: LanguageCode;
};

export type Choice = {
  id: string;
  text: string;
};

export type ObjectiveQuestion = {
  id: string;
  prompt: string;
  choices: Choice[];
  correctChoiceId: string;
  explanation: string;
};

export type ReorderQuestion = {
  id: string;
  kind: "reorder";
  prompt: string;
  sentences: { id: string; text: string }[];
  /** Shown to the student. This is not the keyed order. */
  displayOrder: string[];
  correctOrder: string[];
  explanation: string;
};

export type GradedQuestion = ObjectiveQuestion | ReorderQuestion;

export type PracticeAccess = "free" | "paid";

export type ReadingTask = SkillLanguage & {
  id: string;
  skill: "reading";
  access: PracticeAccess;
  title: string;
  passage: string;
  passageLang: "en" | "fi";
  questions: ObjectiveQuestion[];
};

export type WritingTask = SkillLanguage & {
  id: string;
  skill: "writing";
  access: PracticeAccess;
  title: string;
  prompt: string;
  promptLang: "en" | "fi";
  suggestedWords: { min: number; max: number };
};

export type ListeningTask = SkillLanguage & {
  id: string;
  skill: "listening";
  access: PracticeAccess;
  title: string;
  audioLang: string;
  speakerNote: string;
  /** Original script spoken by the browser. Never send this before access is granted. */
  script: string;
  questions: ObjectiveQuestion[];
};

export type PracticeTask = ReadingTask | WritingTask | ListeningTask;

export type MockBody =
  | {
      kind: "objective";
      passage?: string;
      passageLang?: "en" | "fi";
      script?: string;
      audioLang?: string;
      speakerNote?: string;
      questions: GradedQuestion[];
    }
  | {
      kind: "writing";
      prompt: string;
      promptLang: "en" | "fi";
      suggestedWords: { min: number; max: number };
    };

export type MockTest = {
  id: string;
  skill: Skill;
  language: LanguageCode;
  variant: ExamVariant;
  title: string;
  minutes: number;
  scopeNote: string;
  instructions: string[];
  availability:
    | { status: "unavailable"; reason: string }
    | { status: "short_unofficial"; body: MockBody };
};

export type PublicChoice = { id: string; text: string };

export type PublicQuestion = {
  id: string;
  kind: "choice" | "reorder";
  prompt: string;
  choices?: PublicChoice[];
  sentences?: { id: string; text: string }[];
};

export type PublicReading = {
  id: string;
  skill: "reading";
  language: LanguageCode;
  title: string;
  passage: string;
  passageLang: "en" | "fi";
  questions: PublicQuestion[];
};

export type PublicWriting = {
  id: string;
  skill: "writing";
  language: LanguageCode;
  title: string;
  prompt: string;
  promptLang: "en" | "fi";
  suggestedWords: { min: number; max: number };
  criteria: { id: string; label: string; description: string }[];
};

export type PublicListening = {
  id: string;
  skill: "listening";
  language: LanguageCode;
  title: string;
  audioLang: string;
  speakerNote: string;
  disclosure: string;
  questions: PublicQuestion[];
};

export type PublicObjectiveMock = {
  id: string;
  skill: "reading" | "listening";
  language: LanguageCode;
  variant: ExamVariant;
  title: string;
  minutes: number;
  passage?: string;
  passageLang?: "en" | "fi";
  audioLang?: string;
  speakerNote?: string;
  disclosure?: string;
  questions: PublicQuestion[];
};

export type PublicWritingMock = {
  id: string;
  skill: "writing";
  language: LanguageCode;
  variant: ExamVariant;
  title: string;
  minutes: number;
  prompt: string;
  promptLang: "en" | "fi";
  suggestedWords: { min: number; max: number };
  criteria: { id: string; label: string; description: string }[];
};

export type ObjectiveItemFeedback = {
  id: string;
  prompt: string;
  matched: boolean;
  yourAnswer: string;
  keyedAnswer: string;
  explanation: string;
};

export type ObjectiveFeedback = {
  scoringKind: "objective";
  correct: number;
  total: number;
  officialScore: null;
  examScore: null;
  label: string;
  items: ObjectiveItemFeedback[];
  scriptReview?: string;
  openedScript?: boolean;
};

export type SelfReviewFeedback = {
  scoringKind: "self_review";
  officialScore: null;
  examScore: null;
  label: "Self-review, not an exam score";
  wordCount: number;
  suggestedMin: number;
  suggestedMax: number;
  wordCountIsScore: false;
  summary: string;
  criteria: {
    id: string;
    label: string;
    description: string;
    rating: SelfRating;
  }[];
};

export type ExpiredFeedback = {
  scoringKind: "unscored";
  officialScore: null;
  examScore: null;
  label: "Time is up. This attempt was not scored.";
};

export type AttemptFeedback = ObjectiveFeedback | SelfReviewFeedback | ExpiredFeedback;

export type StoredAttempt = {
  id: string;
  userId: string;
  skill: Skill;
  language: LanguageCode;
  taskId: string;
  mode: "practice" | "mock";
  examVariant: ExamVariant | null;
  creditSource: "free" | "paid";
  scoreCorrect: number | null;
  scoreTotal: number | null;
  response: unknown;
  feedback: AttemptFeedback | null;
  durationSeconds: number | null;
  startedAt: string;
  submittedAt: string | null;
};

export type LedgerEntry = {
  id: string;
  userId: string;
  skill: Skill;
  language: LanguageCode;
  examVariant: ExamVariant | null;
  amount: number;
  orderId: string | null;
  attemptId: string | null;
};

export type OrderProduct = "task_batch" | "mock_test";

export type StoredOrder = {
  id: string;
  userId: string;
  idempotencyKey: string;
  product: OrderProduct;
  skill: Skill;
  language: LanguageCode;
  examVariant: ExamVariant | null;
  status: "pending" | "fulfilled" | "expired";
  credits: number;
  stripeCheckoutSessionId: string | null;
  stripeEventId: string | null;
  checkoutUrl: string | null;
  createdAt: string;
  fulfilledAt: string | null;
};

export type StudyState = {
  attempts: StoredAttempt[];
  ledger: LedgerEntry[];
  orders: StoredOrder[];
};

export function emptyStudyState(): StudyState {
  return { attempts: [], ledger: [], orders: [] };
}
