import type { ObjectiveQuestion, ReorderQuestion } from "../types";

export function choices(
  promptId: string,
  prompt: string,
  options: readonly { id: string; text: string }[],
  correctId: string,
  explanation: string
): ObjectiveQuestion {
  if (!options.some((option) => option.id === correctId)) {
    throw new Error(`Missing correct choice for ${promptId}`);
  }

  return {
    id: promptId,
    prompt,
    choices: options.map((option) => ({ id: option.id, text: option.text })),
    correctChoiceId: correctId,
    explanation,
  };
}

export function reorder(
  id: string,
  prompt: string,
  sentences: readonly { id: string; text: string }[],
  displayOrder: readonly string[],
  correctOrder: readonly string[],
  explanation: string
): ReorderQuestion {
  return {
    id,
    kind: "reorder",
    prompt,
    sentences: sentences.map((sentence) => ({ ...sentence })),
    displayOrder: [...displayOrder],
    correctOrder: [...correctOrder],
    explanation,
  };
}
