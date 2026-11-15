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

export const FEEDBACK_PRIVACY_NOTE =
  "Pick the option that fits. Nothing else is stored.";

export const FEEDBACK_UNAVAILABLE_MESSAGE =
  "Feedback can't be saved right now. Nothing was stored.";

export const FEEDBACK_RETRY_MESSAGE =
  "We couldn't save that just now. Please try again.";

export type FeedbackInsertRow = {
  rating: FeedbackRating;
  source: string;
};

/** The only fields written. There is no name, email, or free text. */
export function feedbackInsertRow(
  rating: FeedbackRating,
  source: string
): FeedbackInsertRow {
  return {
    rating,
    source: sanitizeFeedbackSource(source),
  };
}

export type FeedbackWriteError = {
  code?: string;
  message?: string;
};

export type FeedbackSaveProblem = "unavailable" | "retry";

/**
 * Missing table, missing column, or no insert permission will not start
 * working if the visitor clicks again. Other failures might.
 */
export function classifyFeedbackSaveError(
  error: FeedbackWriteError
): FeedbackSaveProblem {
  const code = error.code ?? "";

  if (
    code === "PGRST205" ||
    code === "PGRST204" ||
    code === "42P01" ||
    code === "42703" ||
    code === "42501"
  ) {
    return "unavailable";
  }

  const message = error.message ?? "";

  if (
    /could not find the table/i.test(message) ||
    /schema cache/i.test(message) ||
    /permission denied for table/i.test(message)
  ) {
    return "unavailable";
  }

  return "retry";
}

type FeedbackInsert = (row: FeedbackInsertRow) => PromiseLike<{
  error: FeedbackWriteError | null;
}>;

export async function saveSiteFeedback(
  insert: FeedbackInsert,
  rating: string,
  source: string
): Promise<{ ok: true } | { ok: false; problem: FeedbackSaveProblem }> {
  if (!isFeedbackRating(rating)) {
    return { ok: false, problem: "retry" };
  }

  try {
    const { error } = await insert(feedbackInsertRow(rating, source));

    if (!error) {
      return { ok: true };
    }

    return { ok: false, problem: classifyFeedbackSaveError(error) };
  } catch {
    return { ok: false, problem: "retry" };
  }
}
