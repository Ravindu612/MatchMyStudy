import assert from "node:assert/strict";
import test from "node:test";
import { summarizeEngagement } from "./engagementSummary";

test("engagement counts likes, the viewer's like, and the latest comment", () => {
  const summary = summarizeEngagement(
    ["post-1", "post-2"],
    [
      { postId: "post-1", userId: "me" },
      { postId: "post-1", userId: "kasun" },
      { postId: "post-2", userId: "amaya" },
    ],
    [
      {
        id: "c1",
        postId: "post-1",
        authorId: "kasun",
        body: "Earlier",
        createdAt: "2026-10-01T00:00:00.000Z",
        updatedAt: "2026-10-01T00:00:00.000Z",
      },
      {
        id: "c2",
        postId: "post-1",
        authorId: "amaya",
        body: "Later",
        createdAt: "2026-10-02T00:00:00.000Z",
        updatedAt: "2026-10-02T00:00:00.000Z",
      },
    ],
    "me"
  );

  const first = summary.get("post-1");
  const second = summary.get("post-2");

  assert.equal(first?.likeCount, 2);
  assert.equal(first?.likedByMe, true);
  assert.equal(first?.commentCount, 2);
  assert.equal(first?.latestComment?.id, "c2");
  assert.equal(second?.likeCount, 1);
  assert.equal(second?.likedByMe, false);
  assert.equal(second?.commentCount, 0);
  assert.equal(second?.latestComment, null);
});
