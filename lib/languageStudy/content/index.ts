import type {
  ExamVariant,
  LanguageCode,
  ListeningTask,
  MockTest,
  PracticeTask,
  ReadingTask,
  Skill,
  WritingTask,
} from "../types";
import { listeningTasks } from "./listening";
import { mockTests } from "./mocks";
import { readingTasks } from "./reading";
import { writingTasks } from "./writing";

export const practiceTasks: PracticeTask[] = [
  ...readingTasks,
  ...writingTasks,
  ...listeningTasks,
];

export function practiceTasksFor(skill: Skill, language: LanguageCode): PracticeTask[] {
  return practiceTasks.filter((task) => task.skill === skill && task.language === language);
}

export function findPracticeTask(taskId: string): PracticeTask | null {
  return practiceTasks.find((task) => task.id === taskId) ?? null;
}

export function findReadingTask(taskId: string): ReadingTask | null {
  const task = findPracticeTask(taskId);

  return task?.skill === "reading" ? task : null;
}

export function findWritingTask(taskId: string): WritingTask | null {
  const task = findPracticeTask(taskId);

  return task?.skill === "writing" ? task : null;
}

export function findListeningTask(taskId: string): ListeningTask | null {
  const task = findPracticeTask(taskId);

  return task?.skill === "listening" ? task : null;
}

export function lockedPracticeCount(skill: Skill, language: LanguageCode): number {
  return practiceTasksFor(skill, language).filter((task) => task.access === "paid").length;
}

export function findMock(
  skill: Skill,
  language: LanguageCode,
  variant: ExamVariant
): MockTest | null {
  return (
    mockTests.find(
      (mock) => mock.skill === skill && mock.language === language && mock.variant === variant
    ) ?? null
  );
}

export function mocksFor(skill: Skill, language: LanguageCode): MockTest[] {
  return mockTests.filter((mock) => mock.skill === skill && mock.language === language);
}

export function mockQuestionCount(mock: MockTest): number {
  if (mock.availability.status !== "short_unofficial") {
    return 0;
  }

  const body = mock.availability.body;

  if (body.kind === "writing") {
    return 1;
  }

  return body.questions.length;
}
