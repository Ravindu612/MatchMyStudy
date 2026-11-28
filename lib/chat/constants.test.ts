import assert from "node:assert/strict";
import test from "node:test";
import {
  ASSISTANT_UNAVAILABLE_MESSAGE,
  CHAT_MODEL,
  LIMIT_REACHED_MESSAGE,
  friendlyChatError,
} from "./constants";

test("the chat model is the free-tier GPT-5.4 nano", () => {
  assert.equal(CHAT_MODEL, "openai/gpt-5.4-nano");
});

test("free-tier rate limits stay on the unavailable message", () => {
  assert.equal(friendlyChatError("Rate limit exceeded"), ASSISTANT_UNAVAILABLE_MESSAGE);
  assert.equal(friendlyChatError("HTTP 429"), ASSISTANT_UNAVAILABLE_MESSAGE);
  assert.equal(
    friendlyChatError('{"error":{"message":"Rate limit exceeded","type":"rate_limit_exceeded"}}'),
    ASSISTANT_UNAVAILABLE_MESSAGE
  );
  assert.equal(friendlyChatError(LIMIT_REACHED_MESSAGE), LIMIT_REACHED_MESSAGE);
});
