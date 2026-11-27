import assert from "node:assert/strict";
import test from "node:test";
import {
  CONVERSATION_LIMIT_MESSAGE,
  DAILY_MESSAGE_LIMIT,
  MAX_USER_MESSAGES,
  MESSAGE_TOO_LONG,
  clientIp,
  hashIp,
  queryTokens,
  reviewChatTurns,
} from "./limits";

test("chat turns reject empty, oversized, and overlong conversations", () => {
  assert.equal(reviewChatTurns([]).ok, false);
  assert.deepEqual(
    reviewChatTurns([{ role: "user", text: "   " }]),
    { ok: false, message: "Type a question to continue." }
  );
  assert.deepEqual(
    reviewChatTurns([{ role: "user", text: "a".repeat(1001) }]),
    { ok: false, message: MESSAGE_TOO_LONG }
  );
  assert.deepEqual(
    reviewChatTurns(
      Array.from({ length: MAX_USER_MESSAGES + 1 }, () => ({
        role: "user",
        text: "Which countries are listed?",
      }))
    ),
    { ok: false, message: CONVERSATION_LIMIT_MESSAGE }
  );
  assert.deepEqual(reviewChatTurns([{ role: "user", text: "Canada" }]), {
    ok: true,
  });
});

test("ip hashes are stable and do not store the address", () => {
  const ip = clientIp({
    forwardedFor: "203.0.113.8, 10.0.0.1",
    realIp: null,
  });

  assert.equal(ip, "203.0.113.8");
  assert.equal(
    clientIp({ forwardedFor: "1.1.1.1", realIp: "198.51.100.4" }),
    "198.51.100.4"
  );

  const hash = hashIp(ip, "pepper");

  assert.equal(hash, hashIp(ip, "pepper"));
  assert.notEqual(hash, hashIp(ip, "other-pepper"));
  assert.equal(hash.length, 64);
  assert.equal(hash.includes(ip), false);
  assert.equal(DAILY_MESSAGE_LIMIT, 30);
});

test("search tokens drop filler words and expand country aliases", () => {
  assert.deepEqual(queryTokens("the master's programs in the USA"), [
    "master",
    "usa",
    "united",
    "states",
  ]);
});
