import type { CountryKey } from "@/data/universities";

/** italki affiliate URL. Keep this exact value. */
export const ITALKI_AFFILIATE_URL =
  "https://www.italki.com/affshare?ref=af34116223";

export const ITALKI_LINK_REL = "sponsored noopener noreferrer";

export const ITALKI_CTA_LABEL = "Practice speaking with tutors on italki";

type EnglishDestination = { kind: "english" };
type LocalLanguageDestination = { kind: "local"; language: string };

/**
 * Why speaking practice belongs on a country guide.
 * English destinations: the degree is in English, so test and conversation
 * practice fit. Other destinations: daily life uses the local language,
 * and some degrees are taught in it.
 */
const speakingPracticeByCountry: Record<
  CountryKey,
  EnglishDestination | LocalLanguageDestination
> = {
  canada: { kind: "english" },
  australia: { kind: "english" },
  usa: { kind: "english" },
  unitedKingdom: { kind: "english" },
  ireland: { kind: "english" },
  newZealand: { kind: "english" },
  singapore: { kind: "english" },
  malaysia: { kind: "english" },
  hongKong: { kind: "english" },
  uae: { kind: "english" },
  india: { kind: "english" },
  qatar: { kind: "english" },
  "south-africa": { kind: "english" },

  germany: { kind: "local", language: "German" },
  finland: { kind: "local", language: "Finnish" },
  sweden: { kind: "local", language: "Swedish" },
  norway: { kind: "local", language: "Norwegian" },
  denmark: { kind: "local", language: "Danish" },
  netherlands: { kind: "local", language: "Dutch" },
  france: { kind: "local", language: "French" },
  switzerland: {
    kind: "local",
    language: "German, French, or Italian, depending on the region",
  },
  italy: { kind: "local", language: "Italian" },
  austria: { kind: "local", language: "German" },
  belgium: { kind: "local", language: "Dutch or French" },
  japan: { kind: "local", language: "Japanese" },
  southKorea: { kind: "local", language: "Korean" },
  china: { kind: "local", language: "Mandarin" },
  taiwan: { kind: "local", language: "Mandarin" },
  thailand: { kind: "local", language: "Thai" },
  saudiArabia: { kind: "local", language: "Arabic" },
  poland: { kind: "local", language: "Polish" },
  turkiye: { kind: "local", language: "Turkish" },
  spain: { kind: "local", language: "Spanish" },
  portugal: { kind: "local", language: "Portuguese" },
  "czech-republic": { kind: "local", language: "Czech" },
  greece: { kind: "local", language: "Greek" },
  hungary: { kind: "local", language: "Hungarian" },
  romania: { kind: "local", language: "Romanian" },
};

export function speakingPracticeCountryKeys(): string[] {
  return Object.keys(speakingPracticeByCountry);
}

export function countrySpeakingNote(
  countryKey: string,
  countryName: string
): string | null {
  const entry = speakingPracticeByCountry[countryKey as CountryKey];

  if (!entry) return null;

  if (entry.kind === "english") {
    return `Programmes in ${countryName} are taught in English. Speaking practice helps if you are preparing for a test such as IELTS or TOEFL, and it helps with conversation after you arrive.`;
  }

  return `Outside class in ${countryName} you will use ${entry.language}. Some programmes are taught in ${entry.language}, and an English-taught degree may still ask for a test such as IELTS or TOEFL. Speaking practice is the part that is hard to do from a textbook.`;
}

const ENGLISH_TEST = /\b(IELTS|TOEFL)\b/i;
const ENGLISH_REQUIREMENT =
  /\b(IELTS|TOEFL|Duolingo|PTE Academic|CAEL|English proficiency|English language)\b/i;

export function programSpeakingNote(program: {
  language?: string | null;
  admissionRequirements?: readonly string[] | null;
  showsEnglishTests?: boolean;
}): string | null {
  const language = program.language?.trim() ?? "";
  const requirementText = (program.admissionRequirements ?? []).join("\n");
  const mentionsEnglishTest =
    Boolean(program.showsEnglishTests) || ENGLISH_TEST.test(requirementText);
  const mentionsEnglishRequirement =
    mentionsEnglishTest || ENGLISH_REQUIREMENT.test(requirementText);
  const englishOnly = language.toLowerCase() === "english";
  const hasTeachingLanguage =
    language.length > 0 && !englishOnly && !/will be added soon/i.test(language);

  if (!hasTeachingLanguage && !mentionsEnglishRequirement) return null;

  if (hasTeachingLanguage) {
    const requirement = mentionsEnglishTest
      ? " The page also lists an English test such as IELTS or TOEFL."
      : mentionsEnglishRequirement
        ? " The page also lists an English language requirement."
        : "";

    return `This programme is taught in ${language}.${requirement} Speaking practice is a direct way to prepare.`;
  }

  if (mentionsEnglishTest) {
    return "This page lists an English test such as IELTS or TOEFL. Speaking is the section that improves when you practice out loud with another person.";
  }

  return "This page lists an English language requirement. Speaking practice is the part that is hard to do from a textbook alone.";
}
