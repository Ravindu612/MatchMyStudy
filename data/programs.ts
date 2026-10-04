import { universityOfTorontoPrograms } from "./programs/canada/universityOfTorontoPrograms";
import { yorkUniversityPrograms } from "./programs/canada/yorkUniversityPrograms";
import { torontoMetropolitanUniversityPrograms } from "./programs/canada/torontoMetropolitanUniversityPrograms";
import { universityOfOttawaPrograms } from "./programs/canada/universityOfOttawaPrograms";
import { universityOfBritishColumbiaPrograms } from "./programs/canada/universityOfBritishColumbiaPrograms";
import { universityOfVictoriaPrograms } from "./programs/canada/universityOfVictoriaPrograms";
import { universityOfWaterlooPrograms } from "./programs/canada/universityOfWaterlooPrograms";
import { universityOfCalgaryPrograms } from "./programs/canada/universityOfCalgaryPrograms";
import { carletonUniversityPrograms } from "./programs/canada/carletonUniversityPrograms";
import { universityOfAlbertaPrograms } from "./programs/canada/universityOfAlbertaPrograms";
import { westernUniversityPrograms } from "./programs/canada/westernUniversityPrograms";
import { mcgillUniversityPrograms } from "./programs/canada/mcgillUniversityPrograms";
import { simonFraserUniversityPrograms } from "./programs/canada/simonFraserUniversityPrograms";
import { universityOfMelbournePrograms } from "./programs/australia/universityOfMelbournePrograms";
import { universityOfSydneyPrograms } from "./programs/australia/universityOfSydneyPrograms";
import { universityOfNewSouthWalesPrograms } from "./programs/australia/universityOfNewSouthWalesPrograms";
import { monashUniversityPrograms } from "./programs/australia/monashUniversityPrograms";
import { universityCollegeDublinPrograms } from "./programs/ireland/universityCollegeDublinPrograms";
import { trinityCollegeDublinPrograms } from "./programs/ireland/trinityCollegeDublinPrograms";
import { universityCollegeCorkPrograms } from "./programs/ireland/universityCollegeCorkPrograms";
import { universityOfGalwayPrograms } from "./programs/ireland/universityOfGalwayPrograms";
import { kingsCollegeLondonPrograms } from "./programs/unitedKingdom/kingsCollegeLondonPrograms";
import { dublinCityUniversityPrograms } from "./programs/ireland/dublinCityUniversityPrograms";
import { universityCollegeLondonPrograms } from "./programs/unitedKingdom/universityCollegeLondonPrograms";
import { universityOfManchesterPrograms } from "./programs/unitedKingdom/universityOfManchesterPrograms";
import { universityOfBristolPrograms } from "./programs/unitedKingdom/universityOfBristolPrograms";
import { universityOfEdinburghPrograms } from "./programs/unitedKingdom/universityOfEdinburghPrograms";
import { universityOfGlasgowPrograms } from "./programs/unitedKingdom/universityOfGlasgowPrograms";
import { imperialCollegeLondonPrograms } from "./programs/unitedKingdom/imperialCollegeLondonPrograms";
import { universityOfWarwickPrograms } from "./programs/unitedKingdom/universityOfWarwickPrograms";
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

  // Human-readable, e.g. "January 15, 2027 (international scholars: November 15, 2026)"
  applicationDeadline?: string;
  // Short bullet points shown in the "Admission Requirements" section
  admissionRequirements?: string[];
};

export const programs: Program[] = [
  ...universityOfTorontoPrograms,
  ...yorkUniversityPrograms,
  ...torontoMetropolitanUniversityPrograms,
  ...universityOfOttawaPrograms,
  ...universityOfBritishColumbiaPrograms,
  ...universityOfVictoriaPrograms,
  ...universityOfWaterlooPrograms,
  ...universityOfCalgaryPrograms,
  ...carletonUniversityPrograms,
  ...universityOfAlbertaPrograms,
  ...westernUniversityPrograms,
  ...mcgillUniversityPrograms,
  ...simonFraserUniversityPrograms,
  ...universityOfMelbournePrograms,
  ...universityOfSydneyPrograms,
  ...universityOfNewSouthWalesPrograms,
  ...monashUniversityPrograms,
  ...universityCollegeDublinPrograms,
  ...trinityCollegeDublinPrograms,
  ...universityCollegeCorkPrograms,
  ...universityOfGalwayPrograms,
  ...kingsCollegeLondonPrograms,
  ...dublinCityUniversityPrograms,
  ...universityCollegeLondonPrograms,
  ...universityOfManchesterPrograms,
  ...universityOfBristolPrograms,
  ...universityOfEdinburghPrograms,
  ...universityOfGlasgowPrograms,
  ...imperialCollegeLondonPrograms,
  ...universityOfWarwickPrograms,
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