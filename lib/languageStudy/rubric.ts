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

export const LISTENING_AUDIO_NOTE =
  "This file was synthesized with eSpeak NG 1.51 from an original MatchMyStudy script. It is not a human recording and not an exam recording.";

export const LISTENING_DISCLOSURE =
  "If the synthesized file does not play, the browser voice is a separate fallback. It is not the same recording, and it is not a studio or exam recording. The words are sent to your browser only when you choose that fallback.";

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
