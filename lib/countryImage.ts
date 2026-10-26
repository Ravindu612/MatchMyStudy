/**
 * Card covers are resized derivatives of public/images/countries/*.jpg.
 * Heroes keep the full-size originals. A few route slugs do not match
 * the photo filename (hongkong → hong-kong.jpg).
 */
export const COUNTRY_CARD_IMAGE_FILES = [
  "australia",
  "austria",
  "belgium",
  "canada",
  "china",
  "czech-republic",
  "denmark",
  "finland",
  "france",
  "germany",
  "greece",
  "hong-kong",
  "hungary",
  "india",
  "ireland",
  "italy",
  "japan",
  "malaysia",
  "netherlands",
  "newzealand",
  "norway",
  "poland",
  "portugal",
  "qatar",
  "romania",
  "saudi-arabia",
  "singapore",
  "south-africa",
  "south-korea",
  "spain",
  "sweden",
  "switzerland",
  "taiwan",
  "thailand",
  "turkiye",
  "uae",
  "unitedkingdom",
  "usa",
] as const;

const CARD_IMAGE_FILE_SET = new Set<string>(COUNTRY_CARD_IMAGE_FILES);

/** Route slugs whose photo file is not `{slug}.jpg`. */
export const COUNTRY_IMAGE_SLUG_ALIASES: Record<string, string> = {
  hongkong: "hong-kong",
  saudiarabia: "saudi-arabia",
  southkorea: "south-korea",
};

export function countryCardImageFile(slug: string): string | null {
  const file = COUNTRY_IMAGE_SLUG_ALIASES[slug] ?? slug;
  return CARD_IMAGE_FILE_SET.has(file) ? file : null;
}

/** Public path for a card-sized cover, or null when no photo exists. */
export function countryCardImageSrc(slug: string): string | null {
  const file = countryCardImageFile(slug);
  return file ? `/images/countries/cards/${file}.jpg` : null;
}

export function countryCardImageAlt(name: string): string {
  return `Study in ${name}`;
}
