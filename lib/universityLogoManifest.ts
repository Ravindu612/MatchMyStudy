import manifest from "@/data/university-logos/manifest.json";

/** Credit line for the profile hero when the logo licence requires it. */
export function universityLogoCredit(slug: string): string | null {
  const entry = manifest.universities.find((university) => university.slug === slug);
  if (!entry?.attributionRequired || !entry.attribution) return null;
  return entry.attribution;
}
