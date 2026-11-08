import {
  EXAM_VARIANTS,
  LANGUAGE_CODES,
  SKILLS,
  type ExamVariant,
  type LanguageCode,
  type Skill,
} from "./types";

export const LANGUAGE_STUDY_HREF = "/language-study";
export const LANGUAGE_STUDY_LABEL = "Language Study";

export const LANGUAGE_NAMES: Record<LanguageCode, string> = {
  en: "English",
  fi: "Finnish",
};

export const SKILL_NAMES: Record<Skill, string> = {
  reading: "Practice Reading",
  writing: "Practice Writing",
  listening: "Practice Listening",
};

export const VARIANT_NAMES: Record<ExamVariant, string> = {
  ielts: "IELTS-style",
  toefl: "TOEFL-style",
  pte: "PTE-style",
  yki: "YKI-style",
};

export function parseSkill(value: string): Skill | null {
  return SKILLS.find((skill) => skill === value) ?? null;
}

export function parseLanguage(value: string): LanguageCode | null {
  return LANGUAGE_CODES.find((language) => language === value) ?? null;
}

export function parseVariant(value: string): ExamVariant | null {
  return EXAM_VARIANTS.find((variant) => variant === value) ?? null;
}

export function skillPath(skill: Skill): string {
  return `${LANGUAGE_STUDY_HREF}/${skill}`;
}

export function languagePath(skill: Skill, language: LanguageCode): string {
  return `${skillPath(skill)}/${language}`;
}

export function taskPath(
  skill: Skill,
  language: LanguageCode,
  taskId: string
): string {
  return `${languagePath(skill, language)}/task/${encodeURIComponent(taskId)}`;
}

export function mockPath(
  skill: Skill,
  language: LanguageCode,
  variant: ExamVariant
): string {
  return `${languagePath(skill, language)}/mock/${variant}`;
}

export function languageStudySitemapPaths(): string[] {
  return [
    LANGUAGE_STUDY_HREF,
    ...SKILLS.flatMap((skill) => [
      skillPath(skill),
      ...LANGUAGE_CODES.map((language) => languagePath(skill, language)),
    ]),
  ];
}

export function isPreviewTaskId(taskId: string): boolean {
  return taskId.endsWith("-1");
}
