import assert from "node:assert/strict";
import test from "node:test";
import {
  helpfulPath,
  isFeedbackRating,
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
