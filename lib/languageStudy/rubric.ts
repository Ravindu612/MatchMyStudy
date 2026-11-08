import type { SelfRating } from "./types";

export const WRITING_CRITERIA = [
  {
    id: "task",
    label: "Task response",
    description: "The response answers what the task asks and stays on that topic.",
  },
  {
    id: "organization",
    label: "Organization",
    description: "A reader can follow the beginning, the middle, and the ending.",
  },
  {
    id: "development",
    label: "Detail",
    description: "There is at least one specific reason, example, or request.",
  },
  {
    id: "language",
    label: "Language",
    description: "The sentences are understandable and the words fit the task.",
  },
] as const;

export const SELF_REVIEW_LABEL = "Self-review, not an exam score" as const;

export const UNOFFICIAL_NOTICE =
  "Unofficial practice. This is not an official or certified score.";

export const LISTENING_DISCLOSURE =
  "Audio is a browser text-to-speech preview of an original script, not a studio recording. The words are sent to your browser when you press play so it can speak them. This is practice, not a secured listening exam.";

export const PREVIEW_NOTICE =
  "Preview result. It is not saved and does not use or enforce the free allowance. Sign in so submitted practice is counted on the server.";

export const MIN_WRITING_WORDS = 15;
export const MAX_WRITING_WORDS = 1200;

export function countWords(text: string): number {
  const trimmed = text.trim();

  if (!trimmed) {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

export function selfReviewSummary(
  ratings: { rating: SelfRating }[]
): string {
  const met = ratings.filter((item) => item.rating === "met").length;
  const partly = ratings.filter((item) => item.rating === "partly").length;
  const notYet = ratings.filter((item) => item.rating === "not_yet").length;

  return `You marked ${met} of ${ratings.length} criteria as met, ${partly} as partly, and ${notYet} as not yet. This is your own review, not an exam score, an AI score, or an official mark.`;
}

export function objectiveResultLabel(skill: "reading" | "listening"): string {
  if (skill === "listening") {
    return "Answer check against the script. This is not an official listening score, and it does not prove that the audio played.";
  }

  return "Raw mark for this practice. This is not an official or certified score.";
}
