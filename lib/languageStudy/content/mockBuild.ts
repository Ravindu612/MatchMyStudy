import type { GradedQuestion, MockPart, MockWritingPrompt, ObjectiveQuestion } from "../types";
import { choices, reorder } from "./questions";

type Slot = "a" | "b" | "c" | "d";

export function mcq(
  id: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string,
  slot: Slot = "b"
): ObjectiveQuestion {
  const slots: Slot[] = ["a", "b", "c", "d"];
  const texts: Record<Slot, string> = { a: "", b: "", c: "", d: "" };
  let wrongIndex = 0;

  for (const item of slots) {
    if (item === slot) {
      texts[item] = correct;
    } else {
      texts[item] = wrong[wrongIndex] ?? "None of these";
      wrongIndex += 1;
    }
  }

  return choices(
    id,
    prompt,
    slots.map((item) => ({ id: item, text: texts[item] })),
    slot,
    explanation
  );
}

export function tfng(
  id: string,
  prompt: string,
  answer: "t" | "f" | "ng",
  explanation: string
): ObjectiveQuestion {
  return choices(
    id,
    prompt,
    [
      { id: "t", text: "True" },
      { id: "f", text: "False" },
      { id: "ng", text: "Not given" },
    ],
    answer,
    explanation
  );
}

export function part(
  id: string,
  title: string,
  passage: string,
  questions: GradedQuestion[],
  passageLang: "en" | "fi" = "en"
): MockPart {
  return { id, title, passage, passageLang, questions };
}

export function listen(
  id: string,
  title: string,
  script: string,
  questions: GradedQuestion[],
  audioLang: string,
  speakerNote: string
): MockPart {
  return { id, title, script, audioLang, speakerNote, questions };
}

export function prompt(
  id: string,
  title: string,
  text: string,
  min: number,
  max: number,
  promptLang: "en" | "fi" = "en"
): MockWritingPrompt {
  return {
    id,
    title,
    prompt: text,
    promptLang,
    suggestedWords: { min, max },
  };
}

export { reorder };
