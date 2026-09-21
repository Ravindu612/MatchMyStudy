import { universityOfTorontoPrograms } from "./programs/canada/universityOfTorontoPrograms";
import { universityOfBritishColumbiaPrograms } from "./programs/canada/universityOfBritishColumbiaPrograms";
import { universityOfMelbournePrograms } from "./programs/australia/universityOfMelbournePrograms";
import { universityCollegeDublinPrograms } from "./programs/ireland/universityCollegeDublinPrograms";
import { trinityCollegeDublinPrograms } from "./programs/ireland/trinityCollegeDublinPrograms";
import { universityCollegeCorkPrograms } from "./programs/ireland/universityCollegeCorkPrograms";
import { universityOfGalwayPrograms } from "./programs/ireland/universityOfGalwayPrograms";
import { dublinCityUniversityPrograms } from "./programs/ireland/dublinCityUniversityPrograms";
export type ProgramLevel =
  | "Bachelor"
  | "Master"
  | "PhD"
  | "Diploma"
  | "Graduate Diploma"
  | "Professional Certificate"
  | "Professional Diploma"
  | "Doctoral"
  | "Foundation Studies";

export type Program = {
  name: string;
  slug: string;
  level: ProgramLevel;
  universitySlug: string;
  universityName: string;
  country: string;
  field: string;
  duration: string;
  language: string;
  tuitionNote: string;
  description: string;
  officialProgramUrl: string;
  intake?: string;

  campus?: string;
  programType?: string;
  degree?: string;
  workIntegrated?: boolean;
  areaOfInterest?: string;
  careerOutcomes?: string[];
admissionIntake?: string;
};

export const programs: Program[] = [
  ...universityOfTorontoPrograms,
  ...universityOfBritishColumbiaPrograms,
  ...universityOfMelbournePrograms,
  ...universityCollegeDublinPrograms,
  ...trinityCollegeDublinPrograms,
  ...universityCollegeCorkPrograms,
  ...universityOfGalwayPrograms,
  ...dublinCityUniversityPrograms,
  {
    name: "Bachelor's Programme in Science and Technology",
    slug: "bachelor-science-technology-aalto-university",
    level: "Bachelor",
    universitySlug: "aalto-university",
    universityName: "Aalto University",
    country: "Finland",
    field: "Technology",
    duration: "Usually 3 years",
    language: "English",
    tuitionNote:
      "Tuition fees may apply for non-EU/EEA students. Scholarship information should be checked from the official university page.",
    description:
      "This bachelor's programme offers studies in science, technology, mathematics, and engineering-related areas.",
    officialProgramUrl: "https://www.aalto.fi/en/study-options",
  },
  {
    name: "Master's Programme in Computer, Communication and Information Sciences",
    slug: "master-ccis-aalto-university",
    level: "Master",
    universitySlug: "aalto-university",
    universityName: "Aalto University",
    country: "Finland",
    field: "Computer Science",
    duration: "Usually 2 years",
    language: "English",
    tuitionNote:
      "Tuition fees and scholarship opportunities should be checked from the official Aalto University programme page.",
    description:
      "This master's programme includes areas such as computer science, software engineering, communications, data science, and information technology.",
    officialProgramUrl: "https://www.aalto.fi/en/study-options",
  },

];