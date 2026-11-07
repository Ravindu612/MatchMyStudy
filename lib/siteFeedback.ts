/**
 * Ratings stored in public.site_feedback.
 * Keep these in sync with supabase/migrations/20261107104500_site_feedback.sql.
 */

export const FEEDBACK_RATINGS = [
  "Extremely helpful",
  "Helpful",
  "Satisfactory",
  "Not helpful",
] as const;

export type FeedbackRating = (typeof FEEDBACK_RATINGS)[number];

/** home, direct, or a site path such as /australia or /blog/slug. */
const SOURCE_PATTERN = /^(home|direct|\/[-a-z0-9]+(?:\/[-a-z0-9]+)*)$/;

export function isFeedbackRating(value: string): value is FeedbackRating {
  return (FEEDBACK_RATINGS as readonly string[]).includes(value);
}

/**
 * Unknown or oversized sources become "direct" so a tampered link
 * still satisfies the table check.
 */
export function sanitizeFeedbackSource(value: string | undefined | null) {
  const source = (value ?? "").trim().toLowerCase();

  if (source.length < 1 || source.length > 120) {
    return "direct";
  }

  if (!SOURCE_PATTERN.test(source)) {
    return "direct";
  }

  return source;
}

export function helpfulPath(source: string) {
  return `/helpful?source=${encodeURIComponent(sanitizeFeedbackSource(source))}`;
}
