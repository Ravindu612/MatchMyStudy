export type SuggestionPerson = {
  id: string;
  handle: string;
  displayName: string;
  accountType: string;
  headline: string | null;
  country: string | null;
  targetCountries: string[];
  avatarUrl: string | null;
  isVerified: boolean;
  isUpgraded: boolean;
};

export type SuggestionViewer = {
  id: string;
  country: string | null;
  targetCountries: string[];
};

const FEATURED_TYPES = new Set(["consultant", "education_provider"]);

function placeKey(value: string): string {
  return value.trim().toLowerCase();
}

function sharedPlaces(viewer: SuggestionViewer, person: SuggestionPerson): number {
  const wanted = new Set<string>();

  if (viewer.country) {
    wanted.add(placeKey(viewer.country));
  }

  for (const country of viewer.targetCountries) {
    wanted.add(placeKey(country));
  }

  wanted.delete("");
  let shared = 0;

  if (person.country && wanted.has(placeKey(person.country))) {
    shared += 1;
  }

  const seen = new Set<string>();

  for (const country of person.targetCountries) {
    const key = placeKey(country);

    if (!key || seen.has(key)) {
      continue;
    }

    seen.add(key);

    if (wanted.has(key)) {
      shared += 1;
    }
  }

  return shared;
}

export function suggestionScore(
  viewer: SuggestionViewer | null,
  person: SuggestionPerson
): number {
  let score = 0;

  if (person.isUpgraded) {
    score += 100;
  }

  if (person.isVerified) {
    score += 40;
  }

  if (FEATURED_TYPES.has(person.accountType)) {
    score += 25;
  }

  if (viewer) {
    score += sharedPlaces(viewer, person) * 15;
  }

  return score;
}

/**
 * People you may know: skip yourself, people you already follow, and people
 * you blocked. Upgraded and verified profiles rank first, then consultants
 * and education providers, then shared countries.
 */
export function rankSuggestions(
  viewer: SuggestionViewer | null,
  people: SuggestionPerson[],
  followingIds: ReadonlySet<string>,
  blockedIds: ReadonlySet<string>,
  limit = 12
): SuggestionPerson[] {
  const seen = new Set<string>();
  const eligible: SuggestionPerson[] = [];

  for (const person of people) {
    if (seen.has(person.id)) {
      continue;
    }

    seen.add(person.id);

    if (viewer && person.id === viewer.id) {
      continue;
    }

    if (followingIds.has(person.id) || blockedIds.has(person.id)) {
      continue;
    }

    eligible.push(person);
  }

  eligible.sort((left, right) => {
    const score = suggestionScore(viewer, right) - suggestionScore(viewer, left);

    if (score !== 0) {
      return score;
    }

    return left.displayName.localeCompare(right.displayName);
  });

  return eligible.slice(0, Math.max(0, limit));
}
