import {
  LISTENING_DISCLOSURE,
  MAX_WRITING_WORDS,
  MIN_WRITING_WORDS,
  SELF_REVIEW_LABEL,
  WRITING_CRITERIA,
  countWords,
  selfReviewSummary,
} from "./rubric";
import type {
  AttemptFeedback,
  GradedQuestion,
  ListeningTask,
  ObjectiveFeedback,
  ObjectiveQuestion,
  PublicListening,
  PublicObjectiveMock,
  PublicQuestion,
  PublicReading,
  PublicWriting,
  PublicWritingMock,
  ReadingTask,
  ReorderQuestion,
  SelfRating,
  SelfReviewFeedback,
  WritingTask,
} from "./types";
import { SELF_RATINGS } from "./types";

const SECRET_KEYS = [
  "correctChoiceId",
  "correctOrder",
  "explanation",
  "script",
] as const;

export function isReorder(question: GradedQuestion): question is ReorderQuestion {
  return "kind" in question && question.kind === "reorder";
}

export function toPublicQuestion(question: GradedQuestion): PublicQuestion {
  if (isReorder(question)) {
    const byId = new Map(question.sentences.map((sentence) => [sentence.id, sentence]));

    return {
      id: question.id,
      kind: "reorder",
      prompt: question.prompt,
      sentences: question.displayOrder.map((id) => {
        const sentence = byId.get(id);

        if (!sentence) {
          throw new Error(`Missing reorder sentence ${id}`);
        }

        return { id: sentence.id, text: sentence.text };
      }),
    };
  }

  return {
    id: question.id,
    kind: "choice",
    prompt: question.prompt,
    choices: question.choices.map((choice) => ({ id: choice.id, text: choice.text })),
  };
}

export function toPublicReading(task: ReadingTask): PublicReading {
  return {
    id: task.id,
    skill: "reading",
    language: task.language,
    title: task.title,
    passage: task.passage,
    passageLang: task.passageLang,
    questions: task.questions.map(toPublicQuestion),
  };
}

export function toPublicWriting(task: WritingTask): PublicWriting {
  return {
    id: task.id,
    skill: "writing",
    language: task.language,
    title: task.title,
    prompt: task.prompt,
    promptLang: task.promptLang,
    suggestedWords: task.suggestedWords,
    criteria: WRITING_CRITERIA.map((criterion) => ({ ...criterion })),
  };
}

export function toPublicListening(task: ListeningTask): PublicListening {
  return {
    id: task.id,
    skill: "listening",
    language: task.language,
    title: task.title,
    audioLang: task.audioLang,
    speakerNote: task.speakerNote,
    disclosure: LISTENING_DISCLOSURE,
    questions: task.questions.map(toPublicQuestion),
  };
}

export function toPublicMock(mock: {
  id: string;
  skill: "reading" | "listening" | "writing";
  language: ReadingTask["language"];
  variant: PublicObjectiveMock["variant"] | PublicWritingMock["variant"];
  title: string;
  minutes: number;
  availability: { status: "short_unofficial"; body: import("./types").MockBody };
}): PublicObjectiveMock | PublicWritingMock {
  const body = mock.availability.body;

  if (body.kind === "writing") {
    return {
      id: mock.id,
      skill: "writing",
      language: mock.language,
      variant: mock.variant,
      title: mock.title,
      minutes: mock.minutes,
      prompt: body.prompt,
      promptLang: body.promptLang,
      suggestedWords: body.suggestedWords,
      criteria: WRITING_CRITERIA.map((criterion) => ({ ...criterion })),
    };
  }

  return {
    id: mock.id,
    skill: mock.skill === "listening" ? "listening" : "reading",
    language: mock.language,
    variant: mock.variant,
    title: mock.title,
    minutes: mock.minutes,
    passage: body.passage,
    passageLang: body.passageLang,
    audioLang: body.audioLang,
    speakerNote: body.speakerNote,
    disclosure: body.script ? LISTENING_DISCLOSURE : undefined,
    questions: body.questions.map(toPublicQuestion),
  };
}

export function containsAnswerKey(value: unknown): boolean {
  if (!value || typeof value !== "object") {
    return false;
  }

  if (Array.isArray(value)) {
    return value.some((item) => containsAnswerKey(item));
  }

  for (const [key, nested] of Object.entries(value)) {
    if ((SECRET_KEYS as readonly string[]).includes(key)) {
      return true;
    }

    if (containsAnswerKey(nested)) {
      return true;
    }
  }

  return false;
}

function choiceText(question: ObjectiveQuestion, choiceId: string): string {
  return question.choices.find((choice) => choice.id === choiceId)?.text ?? "No answer";
}

function reorderText(question: ReorderQuestion, order: string[]): string {
  const byId = new Map(question.sentences.map((sentence) => [sentence.id, sentence.text]));

  if (order.length === 0) {
    return "No answer";
  }

  return order.map((id) => byId.get(id) ?? id).join(" ");
}

function sameOrder(left: string[], right: string[]): boolean {
  return left.length === right.length && left.every((id, index) => id === right[index]);
}

export function gradeQuestions(
  questions: GradedQuestion[],
  answers: Record<string, string | string[]>,
  skill: "reading" | "listening",
  options?: { scriptReview?: string; openedScript?: boolean }
): ObjectiveFeedback {
  const items = questions.map((question) => {
    if (isReorder(question)) {
      const answer = answers[question.id];
      const given = Array.isArray(answer) ? answer.filter((id): id is string => typeof id === "string") : [];
      const matched = sameOrder(given, question.correctOrder);

      return {
        id: question.id,
        prompt: question.prompt,
        matched,
        yourAnswer: reorderText(question, given),
        keyedAnswer: reorderText(question, question.correctOrder),
        explanation: question.explanation,
      };
    }

    const answer = answers[question.id];
    const given = typeof answer === "string" ? answer : "";

    return {
      id: question.id,
      prompt: question.prompt,
      matched: given === question.correctChoiceId,
      yourAnswer: given ? choiceText(question, given) : "No answer",
      keyedAnswer: choiceText(question, question.correctChoiceId),
      explanation: question.explanation,
    };
  });

  const openedScript = options?.openedScript === true;
  let label =
    skill === "listening"
      ? "Answer check against the script. Unofficial practice. This is not an official listening score, and it does not prove that the audio played."
      : "Raw mark for this practice. Unofficial practice. This is not an official or certified score.";

  if (skill === "listening" && openedScript) {
    label +=
      " You opened the script before submitting, so this is a reading of the script, not a listening result.";
  }

  return {
    scoringKind: "objective",
    correct: items.filter((item) => item.matched).length,
    total: items.length,
    officialScore: null,
    examScore: null,
    label,
    items,
    ...(options?.scriptReview ? { scriptReview: options.scriptReview } : {}),
    ...(skill === "listening" ? { openedScript } : {}),
  };
}

export function parseSelfReview(
  value: unknown
): { ok: true; ratings: Record<string, SelfRating> } | { ok: false; message: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, message: "Mark each self-review statement before you submit." };
  }

  const record = value as Record<string, unknown>;
  const ratings: Record<string, SelfRating> = {};

  for (const criterion of WRITING_CRITERIA) {
    const rating = record[criterion.id];

    if (!SELF_RATINGS.includes(rating as SelfRating)) {
      return {
        ok: false,
        message: `Choose met, partly, or not yet for ${criterion.label}.`,
      };
    }

    ratings[criterion.id] = rating as SelfRating;
  }

  return { ok: true, ratings };
}

export function gradeWriting(
  task: { suggestedWords: { min: number; max: number } },
  essay: string,
  ratings: Record<string, SelfRating>
): { ok: true; feedback: SelfReviewFeedback } | { ok: false; message: string } {
  const wordCount = countWords(essay);

  if (wordCount < MIN_WRITING_WORDS) {
    return {
      ok: false,
      message: `Write at least ${MIN_WRITING_WORDS} words before submitting. This check only stops an empty response. It is not a mark.`,
    };
  }

  if (wordCount > MAX_WRITING_WORDS) {
    return {
      ok: false,
      message: `Keep the response under ${MAX_WRITING_WORDS} words and submit again. The length limit is not a mark.`,
    };
  }

  const criteria = WRITING_CRITERIA.map((criterion) => ({
    ...criterion,
    rating: ratings[criterion.id],
  }));

  return {
    ok: true,
    feedback: {
      scoringKind: "self_review",
      officialScore: null,
      examScore: null,
      label: SELF_REVIEW_LABEL,
      wordCount,
      suggestedMin: task.suggestedWords.min,
      suggestedMax: task.suggestedWords.max,
      wordCountIsScore: false,
      summary: selfReviewSummary(criteria),
      criteria,
    },
  };
}

export function feedbackIsExamScore(feedback: AttemptFeedback): boolean {
  return feedback.officialScore !== null || feedback.examScore !== null;
}
