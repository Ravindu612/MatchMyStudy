import assert from "node:assert/strict";
import test from "node:test";
import {
  FEEDBACK_PRIVACY_NOTE,
  FEEDBACK_RETRY_MESSAGE,
  FEEDBACK_UNAVAILABLE_MESSAGE,
  classifyFeedbackSaveError,
  feedbackInsertRow,
  helpfulPath,
  isFeedbackRating,
  saveSiteFeedback,
  sanitizeFeedbackSource,
} from "./siteFeedback";

test("feedback sources stay within the database check", () => {
  assert.equal(sanitizeFeedbackSource("home"), "home");
  assert.equal(sanitizeFeedbackSource("  Direct "), "direct");
  assert.equal(sanitizeFeedbackSource("/australia"), "/australia");
  assert.equal(sanitizeFeedbackSource("/unitedKingdom"), "/unitedkingdom");
  assert.equal(
    sanitizeFeedbackSource("/blog/before-you-pay-a-deposit"),
    "/blog/before-you-pay-a-deposit"
  );
  assert.equal(sanitizeFeedbackSource("/czech-republic"), "/czech-republic");
  assert.equal(sanitizeFeedbackSource(""), "direct");
  assert.equal(sanitizeFeedbackSource(undefined), "direct");
  assert.equal(sanitizeFeedbackSource("/blog/../admin"), "direct");
  assert.equal(sanitizeFeedbackSource("https://evil.example"), "direct");
  assert.equal(sanitizeFeedbackSource(`/${"a".repeat(130)}`), "direct");
  assert.equal(
    helpfulPath("/blog/arrival-day"),
    "/helpful?source=%2Fblog%2Farrival-day"
  );
});

test("only the four public ratings are accepted", () => {
  assert.equal(isFeedbackRating("Helpful"), true);
  assert.equal(isFeedbackRating("Extremely helpful"), true);
  assert.equal(isFeedbackRating("Satisfactory"), true);
  assert.equal(isFeedbackRating("Not helpful"), true);
  assert.equal(isFeedbackRating("helpful"), false);
  assert.equal(isFeedbackRating(""), false);
});

test("a saved rating stores the rating and the page, and nothing else", () => {
  const row = feedbackInsertRow("Helpful", "  /Australia ");

  assert.deepEqual(row, { rating: "Helpful", source: "/australia" });
  assert.deepEqual(Object.keys(row), ["rating", "source"]);
  assert.equal(
    FEEDBACK_PRIVACY_NOTE,
    "Pick the option that fits. Nothing else is stored."
  );
  assert.equal(
    FEEDBACK_UNAVAILABLE_MESSAGE.includes("Nothing was stored."),
    true
  );
  assert.equal(FEEDBACK_UNAVAILABLE_MESSAGE.includes("try again"), false);
  assert.equal(FEEDBACK_RETRY_MESSAGE.includes("try again"), true);
});

test("a missing feedback table is not described as a temporary glitch", () => {
  assert.equal(
    classifyFeedbackSaveError({
      code: "PGRST205",
      message:
        "Could not find the table 'public.site_feedback' in the schema cache",
    }),
    "unavailable"
  );
  assert.equal(
    classifyFeedbackSaveError({ code: "42P01", message: "undefined_table" }),
    "unavailable"
  );
  assert.equal(
    classifyFeedbackSaveError({
      code: "42501",
      message: "permission denied for table site_feedback",
    }),
    "unavailable"
  );
  assert.equal(
    classifyFeedbackSaveError({ message: "Failed to fetch" }),
    "retry"
  );
});

test("save sends one insert and does not ask for the row back", async () => {
  const calls: unknown[] = [];
  const saved = await saveSiteFeedback(
    (row) => {
      calls.push(row);
      return Promise.resolve({ error: null });
    },
    "Not helpful",
    "/blog/arrival-day"
  );

  assert.deepEqual(saved, { ok: true });
  assert.deepEqual(calls, [
    { rating: "Not helpful", source: "/blog/arrival-day" },
  ]);

  const missing = await saveSiteFeedback(
    () =>
      Promise.resolve({
        error: {
          code: "PGRST205",
          message:
            "Could not find the table 'public.site_feedback' in the schema cache",
        },
      }),
    "Helpful",
    "home"
  );

  assert.deepEqual(missing, { ok: false, problem: "unavailable" });

  const dropped = await saveSiteFeedback(() => {
    throw new Error("Failed to fetch");
  }, "Helpful", "direct");

  assert.deepEqual(dropped, { ok: false, problem: "retry" });

  let called = false;
  const rejected = await saveSiteFeedback(
    () => {
      called = true;
      return Promise.resolve({ error: null });
    },
    "Somewhat helpful",
    "home"
  );

  assert.equal(called, false);
  assert.deepEqual(rejected, { ok: false, problem: "retry" });
});
