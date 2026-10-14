import assert from "node:assert/strict";
import test from "node:test";
import {
  notificationHref,
  notificationSentence,
  type NotificationLinkInput,
} from "./notificationText";

const postId = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const commentId = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const conversationId = "cccccccc-cccc-4ccc-8ccc-cccccccccccc";

function link(overrides: Partial<NotificationLinkInput> = {}): NotificationLinkInput {
  return {
    type: "like",
    postId: null,
    commentId: null,
    conversationId: null,
    actorHandle: null,
    profileHandle: null,
    ...overrides,
  };
}

test("notification sentences name the actor", () => {
  assert.equal(notificationSentence("like", "Ada"), "Ada liked your post");
  assert.equal(notificationSentence("comment", " Ben "), "Ben commented on your post");
  assert.equal(notificationSentence("follow", "Cara"), "Cara started following you");
  assert.equal(notificationSentence("message", ""), "Someone sent you a message");
  assert.equal(notificationSentence("report_resolved", "Admin"), "Your report was reviewed");
});

test("notification links point at the target", () => {
  assert.equal(notificationHref(link({ type: "like", postId })), `/post/${postId}`);
  assert.equal(
    notificationHref(link({ type: "comment", postId, commentId })),
    `/post/${postId}#comment-${commentId}`
  );
  assert.equal(
    notificationHref(link({ type: "follow", actorHandle: "ada_1" })),
    "/u/ada_1"
  );
  assert.equal(
    notificationHref(link({ type: "message", conversationId })),
    `/messages/${conversationId}`
  );
  assert.equal(
    notificationHref(link({ type: "report_resolved", postId, commentId })),
    `/post/${postId}#comment-${commentId}`
  );
  assert.equal(
    notificationHref(
      link({ type: "report_resolved", conversationId, postId, profileHandle: "ada" })
    ),
    `/messages/${conversationId}`
  );
  assert.equal(
    notificationHref(link({ type: "report_resolved", profileHandle: "Ben" })),
    "/u/Ben"
  );
});

test("notification links reject ids and handles that are not app values", () => {
  assert.equal(notificationHref(link({ type: "like", postId: "not-a-uuid" })), null);
  assert.equal(
    notificationHref(link({ type: "comment", postId, commentId: "../comment" })),
    `/post/${postId}`
  );
  assert.equal(notificationHref(link({ type: "follow", actorHandle: "../admin" })), null);
  assert.equal(notificationHref(link({ type: "follow", actorHandle: "ab" })), null);
  assert.equal(
    notificationHref(link({ type: "message", conversationId: "javascript:alert(1)" })),
    null
  );
  assert.equal(notificationHref(link({ type: "report_resolved" })), null);
});
