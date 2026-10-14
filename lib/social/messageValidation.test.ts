import assert from "node:assert/strict";
import test from "node:test";
import {
  MESSAGE_BODY_MAX_LENGTH,
  conversationPreview,
  filterConversations,
  messageForMessagingError,
  sortConversations,
  totalUnread,
  validateMessageBody,
  type ConversationSummary,
} from "./messageValidation";

const viewer = "11111111-1111-4111-8111-111111111111";

function summary(overrides: Partial<ConversationSummary> = {}): ConversationSummary {
  return {
    conversationId: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
    otherUserId: "22222222-2222-4222-8222-222222222222",
    displayName: "Amaya Perera",
    handle: "amaya",
    avatarUrl: null,
    accountType: "student",
    lastBody: "Yes, overall 6.5 (example).",
    lastMessageAt: "2026-10-13T12:00:00.000Z",
    lastSenderId: "22222222-2222-4222-8222-222222222222",
    lastDeletedAt: null,
    lastReadAt: null,
    unreadCount: 1,
    conversationCreatedAt: "2026-10-01T00:00:00.000Z",
    ...overrides,
  };
}

test("message bodies are trimmed and capped at 2000 characters", () => {
  assert.deepEqual(validateMessageBody("  hello  "), { ok: true, body: "hello" });
  assert.equal(validateMessageBody("   ").ok, false);
  assert.equal(validateMessageBody("a".repeat(MESSAGE_BODY_MAX_LENGTH)).ok, true);
  assert.equal(validateMessageBody("a".repeat(MESSAGE_BODY_MAX_LENGTH + 1)).ok, false);
});

test("messaging errors pass through the rule text and hide other database errors", () => {
  assert.equal(
    messageForMessagingError(
      { message: "Consultants can only message students who follow them or message them first." },
      "Couldn't send this message."
    ),
    "Consultants can only message students who follow them or message them first."
  );
  assert.equal(
    messageForMessagingError(
      { message: "new row violates row-level security policy" },
      "Couldn't send this message."
    ),
    "Couldn't send this message."
  );
  assert.equal(
    messageForMessagingError(
      { message: 'new row for relation "messages" violates check constraint "messages_body_len"' },
      "Couldn't send this message."
    ),
    "Messages can be up to 2,000 characters."
  );
  assert.equal(
    messageForMessagingError(
      { message: "Rate limit: too many messages, try again later" },
      "Couldn't send this message."
    ),
    "You've sent a lot of messages in the last hour. Try again later."
  );
});

test("previews, search, unread totals, and ordering follow the inbox", () => {
  const older = summary({
    conversationId: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb",
    displayName: "Kasun Silva",
    handle: "kasun",
    lastBody: "See you at the meetup",
    lastMessageAt: "2026-10-12T12:00:00.000Z",
    unreadCount: 0,
  });
  const deleted = summary({
    conversationId: "cccccccc-cccc-4ccc-8ccc-cccccccccccc",
    displayName: "Global Path",
    lastMessageAt: "2026-10-14T12:00:00.000Z",
    lastDeletedAt: "2026-10-14T12:05:00.000Z",
    lastSenderId: viewer,
    unreadCount: 2,
  });
  const empty = summary({
    conversationId: "dddddddd-dddd-4ddd-8ddd-dddddddddddd",
    displayName: "New chat",
    lastBody: null,
    lastMessageAt: null,
    lastSenderId: null,
    unreadCount: 0,
  });

  assert.equal(conversationPreview(summary(), viewer), "Yes, overall 6.5 (example).");
  assert.equal(
    conversationPreview(summary({ lastSenderId: viewer }), viewer),
    "You: Yes, overall 6.5 (example)."
  );
  assert.equal(conversationPreview(deleted, viewer), "You deleted a message");
  assert.equal(conversationPreview(empty, viewer), "No messages yet");

  const sorted = sortConversations([older, empty, deleted, summary()]);
  assert.deepEqual(
    sorted.map((item) => item.conversationId),
    [deleted.conversationId, summary().conversationId, older.conversationId, empty.conversationId]
  );
  assert.equal(totalUnread(sorted), 3);
  assert.deepEqual(
    filterConversations(sorted, "kasun", viewer).map((item) => item.handle),
    ["kasun"]
  );
  assert.equal(filterConversations(sorted, "meetup", viewer).length, 1);
});
