import type { Program } from "./programs";

export function createProgram(
  name: string,
  slug: string,
  field: string,
  universitySlug: string,
  universityName: string,
  country: string,
  campus?: string,
  level: "Bachelor" | "Master" | "PhD" = "Bachelor"
): Program {
  return {
    name,
    slug,
    level,
    universitySlug,
    universityName,
    country,
    field,
    duration: "Information will be added soon.",
    language: "English",
    tuitionNote: "Information will be added soon.",
    description: "Program details will be added soon.",
    officialProgramUrl: "#",
    campus,
  };
}