import assert from "node:assert/strict";
import test from "node:test";
import {
  COMMENT_BODY_MAX_LENGTH,
  commentCountLabel,
  commentWasEdited,
  validateCommentBody,
} from "./commentValidation";

test("comments are required and capped at 2000 characters", () => {
  assert.equal(validateCommentBody("   ").ok, false);
  const trimmed = validateCommentBody("  Congrats!  ");
  assert.equal(trimmed.ok, true);

  if (trimmed.ok) {
    assert.equal(trimmed.body, "Congrats!");
  }

  assert.equal(validateCommentBody("a".repeat(COMMENT_BODY_MAX_LENGTH)).ok, true);
  assert.equal(validateCommentBody("a".repeat(COMMENT_BODY_MAX_LENGTH + 1)).ok, false);
});

test("comment counts use a singular label only for one", () => {
  assert.equal(commentCountLabel(0), "0 comments");
  assert.equal(commentCountLabel(1), "1 comment");
  assert.equal(commentCountLabel(2), "2 comments");
});

test("a comment is edited when updated_at moves past created_at", () => {
  assert.equal(
    commentWasEdited("2026-10-11T12:00:00.000Z", "2026-10-11T12:00:00.500Z"),
    false
  );
  assert.equal(
    commentWasEdited("2026-10-11T12:00:00.000Z", "2026-10-11T12:00:03.000Z"),
    true
  );
});
