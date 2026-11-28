import { WRITING_CRITERIA, countWords } from "./rubric";
import type { WritingAssessmentFeedback, WritingCriterionScore } from "./types";

const RUBRIC_NOTE =
  "AI writing comments are not turned on. This result uses the built-in rubric only and is not an official score.";

const ESTIMATE_LABEL =
  "Automated rubric estimate. This is not an official or certified score.";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöå\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function overlapRatio(essay: string, prompt: string): number {
  const essayWords = new Set(tokens(essay));
  const promptWords = tokens(prompt).filter(
    (word) => !["the", "and", "you", "your", "with", "that", "this", "for"].includes(word)
  );
  const unique = [...new Set(promptWords)];

  if (unique.length === 0) {
    return 0;
  }

  return unique.filter((word) => essayWords.has(word)).length / unique.length;
}

function scoreTask(essay: string, prompt: string, wordCount: number, minWords: number): WritingCriterionScore {
  const overlap = overlapRatio(essay, prompt);
  let score = 1;

  if (wordCount >= minWords) {
    score += 2;
  } else if (wordCount >= Math.round(minWords * 0.6)) {
    score += 1;
  }

  if (overlap >= 0.2) {
    score += 1;
  }

  if (overlap >= 0.4) {
    score += 1;
  }

  score = clamp(score, 1, 5);

  return {
    id: "task",
    label: WRITING_CRITERIA[0].label,
    description: WRITING_CRITERIA[0].description,
    score,
    max: 5,
    note:
      score >= 4
        ? "The response stays on the task and is long enough for the suggestion."
        : "Add more of what the task asks for, and move closer to the suggested length.",
  };
}

function scoreOrganization(essay: string): WritingCriterionScore {
  const paragraphs = essay
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean).length;
  const linkers = essay.match(
    /\b(because|however|therefore|first|second|finally|also|for example|then|after|before|although|so that)\b/gi
  );
  let score = 1;

  if (paragraphs >= 2 || (essay.match(/\n/g)?.length ?? 0) >= 1) {
    score += 1;
  }

  if (paragraphs >= 3) {
    score += 1;
  }

  if ((linkers?.length ?? 0) >= 1) {
    score += 1;
  }

  if ((linkers?.length ?? 0) >= 3) {
    score += 1;
  }

  score = clamp(score, 1, 5);

  return {
    id: "organization",
    label: WRITING_CRITERIA[1].label,
    description: WRITING_CRITERIA[1].description,
    score,
    max: 5,
    note:
      score >= 4
        ? "The response has a shape a reader can follow."
        : "Separate the opening, the main point, and the ending, and add a linking word.",
  };
}

function scoreDevelopment(essay: string): WritingCriterionScore {
  const sentences = essay.split(/[.!?]+/).map((part) => part.trim()).filter(Boolean).length;
  const specifics = essay.match(/\b(\d+|because|for example|such as|for instance)\b/gi);
  let score = 1;

  if (sentences >= 3) {
    score += 1;
  }

  if (sentences >= 6) {
    score += 1;
  }

  if ((specifics?.length ?? 0) >= 1) {
    score += 1;
  }

  if ((specifics?.length ?? 0) >= 3) {
    score += 1;
  }

  score = clamp(score, 1, 5);

  return {
    id: "development",
    label: WRITING_CRITERIA[2].label,
    description: WRITING_CRITERIA[2].description,
    score,
    max: 5,
    note:
      score >= 4
        ? "There is a specific reason or example."
        : "Add one concrete reason, number, or example.",
  };
}

function scoreLanguage(essay: string, wordCount: number): WritingCriterionScore {
  const words = essay.trim().split(/\s+/).filter(Boolean);
  const unique = new Set(tokens(essay)).size;
  const variety = unique / Math.max(1, wordCount);
  let score = 2;

  if (variety >= 0.45) {
    score += 1;
  }

  if (variety >= 0.6) {
    score += 1;
  }

  if (/[.!?]/.test(essay)) {
    score += 1;
  }

  if (words.some((word) => word.length > 28)) {
    score -= 1;
  }

  score = clamp(score, 1, 5);

  return {
    id: "language",
    label: WRITING_CRITERIA[3].label,
    description: WRITING_CRITERIA[3].description,
    score,
    max: 5,
    note:
      score >= 4
        ? "The sentences are readable and the wording is not stuck on a few repeats."
        : "Use complete sentences and vary the words a little more.",
  };
}

export function estimateFromCriteria(criteria: { score: number; max: number }[]): number {
  const total = criteria.reduce((sum, item) => sum + item.score, 0);
  const max = criteria.reduce((sum, item) => sum + item.max, 0);

  if (max === 0) {
    return 1;
  }

  return clamp(Math.round((total / max) * 9), 1, 9);
}

export function assessEssay(
  essay: string,
  prompt: string,
  suggested: { min: number; max: number }
): {
  wordCount: number;
  criteria: WritingCriterionScore[];
  practiceEstimate: number;
} {
  const wordCount = countWords(essay);
  const criteria = [
    scoreTask(essay, prompt, wordCount, suggested.min),
    scoreOrganization(essay),
    scoreDevelopment(essay),
    scoreLanguage(essay, wordCount),
  ];

  return {
    wordCount,
    criteria,
    practiceEstimate: estimateFromCriteria(criteria),
  };
}

export function writingFeedback(input: {
  essays: { title: string; prompt: string; essay: string; suggested: { min: number; max: number } }[];
}): WritingAssessmentFeedback {
  const pieces = input.essays.map((item) => ({
    title: item.title,
    ...assessEssay(item.essay, item.prompt, item.suggested),
  }));
  const wordCount = pieces.reduce((sum, item) => sum + item.wordCount, 0);
  const suggestedMin = input.essays.reduce((sum, item) => sum + item.suggested.min, 0);
  const suggestedMax = input.essays.reduce((sum, item) => sum + item.suggested.max, 0);
  const criteria = WRITING_CRITERIA.map((criterion, index) => {
    const scores = pieces.map((piece) => piece.criteria[index]?.score ?? 1);
    const score = clamp(Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length), 1, 5);
    const note = pieces.map((piece) => `${piece.title}: ${piece.criteria[index]?.note ?? ""}`).join(" ");

    return {
      id: criterion.id,
      label: criterion.label,
      description: criterion.description,
      score,
      max: 5,
      note,
    };
  });
  const practiceEstimate = clamp(
    Math.round(pieces.reduce((sum, item) => sum + item.practiceEstimate, 0) / pieces.length),
    1,
    9
  );
  const perTask = pieces
    .map((piece) => `${piece.title}: practice estimate ${piece.practiceEstimate} of 9, ${piece.wordCount} words`)
    .join(". ");

  return {
    scoringKind: "writing_assessment",
    officialScore: null,
    examScore: null,
    label: ESTIMATE_LABEL,
    wordCount,
    suggestedMin,
    suggestedMax,
    wordCountIsScore: false,
    practiceEstimate,
    estimateMax: 9,
    summary: `Practice estimate ${practiceEstimate} of 9. ${perTask}. Word count is one signal inside the rubric, not a mark by itself. This is not an exam score, an official band, or a certified result.`,
    criteria,
    evaluator: {
      status: "rubric_only",
      note: RUBRIC_NOTE,
    },
  };
}

export async function enrichWritingFeedback(
  feedback: WritingAssessmentFeedback,
  env: Record<string, string | undefined>
): Promise<WritingAssessmentFeedback> {
  const key = env.LANGUAGE_STUDY_WRITING_API_KEY?.trim() || env.OPENAI_API_KEY?.trim() || "";

  if (!key) {
    return feedback;
  }

  const model = env.LANGUAGE_STUDY_WRITING_MODEL?.trim() || "gpt-4o-mini";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 280,
        messages: [
          {
            role: "system",
            content:
              "You comment on a practice essay for a student. Give exactly three short comments: one strength and two specific changes. Do not give an official IELTS, TOEFL, PTE, or YKI score. Do not invent a band.",
          },
          {
            role: "user",
            content: `Rubric estimate ${feedback.practiceEstimate} of 9. ${feedback.summary}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("writing model unavailable");
    }

    const payload = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = payload.choices?.[0]?.message?.content?.trim() ?? "";

    if (!text) {
      throw new Error("empty writing comment");
    }

    return {
      ...feedback,
      evaluator: {
        status: "ai_comments",
        note: "Extra comments from the writing model are below. They do not replace the rubric estimate and they are not an official score.",
        comments: text
          .split(/\n+/)
          .map((line) => line.replace(/^[-*\d.)\s]+/, "").trim())
          .filter(Boolean)
          .slice(0, 4),
      },
    };
  } catch {
    return {
      ...feedback,
      evaluator: {
        status: "ai_unavailable",
        note: "An AI reviewer is configured but did not respond. The rubric estimate below still stands. It is not an official score.",
      },
    };
  } finally {
    clearTimeout(timer);
  }
}
