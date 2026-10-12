import assert from "node:assert/strict";
import test from "node:test";
import {
  REPORT_REASON_MAX_LENGTH,
  assembleOpenReports,
  contentStatusPatch,
  reportDecisionPatch,
  reportInsertRow,
  validateReportReason,
  verificationPatch,
} from "./reportValidation";

test("report reasons are trimmed and length-limited", () => {
  assert.deepEqual(validateReportReason("  spam  "), { ok: true, reason: "spam" });
  assert.equal(validateReportReason("   ").ok, false);
  assert.equal(validateReportReason("x".repeat(REPORT_REASON_MAX_LENGTH)).ok, true);
  assert.equal(validateReportReason("x".repeat(REPORT_REASON_MAX_LENGTH + 1)).ok, false);
});

test("report insert matches the open-report RLS check and does not ask for a returning row", () => {
  const row = reportInsertRow({
    id: "8d0b6b32-1d4a-4c1e-9c1a-0d5e5c2a9f11",
    reporterId: "11111111-1111-4111-8111-111111111111",
    targetType: "post",
    targetId: "22222222-2222-4222-8222-222222222222",
    reason: "Scam",
  });

  assert.equal(row.status, "open");
  assert.equal(row.reviewed_by, null);
  assert.equal("select" in row, false);
});

test("moderation patches only change the columns an admin is allowed to write", () => {
  assert.deepEqual(contentStatusPatch("hidden"), { status: "hidden" });
  assert.deepEqual(contentStatusPatch("removed"), { status: "removed" });
  assert.deepEqual(verificationPatch(true), { is_verified: true });
  assert.deepEqual(
    reportDecisionPatch({
      adminId: "33333333-3333-4333-8333-333333333333",
      status: "dismissed",
      note: null,
    }),
    {
      status: "dismissed",
      reviewed_by: "33333333-3333-4333-8333-333333333333",
      resolution_note: null,
    }
  );
});

test("open reports assemble post, comment, and profile targets", () => {
  const people = [
    {
      id: "reporter",
      handle: "reporter",
      displayName: "Reporter",
      isVerified: false,
    },
    {
      id: "author",
      handle: "author",
      displayName: "Author",
      isVerified: true,
    },
    {
      id: "consultant",
      handle: "consultant",
      displayName: "Consultant",
      isVerified: false,
    },
  ];
  const views = assembleOpenReports({
    reports: [
      {
        id: "r1",
        reporterId: "reporter",
        targetType: "post",
        targetId: "post-1",
        reason: "Spam post",
        createdAt: "2026-10-01T00:00:00.000Z",
      },
      {
        id: "r2",
        reporterId: "reporter",
        targetType: "comment",
        targetId: "comment-1",
        reason: "Harassment",
        createdAt: "2026-10-02T00:00:00.000Z",
      },
      {
        id: "r3",
        reporterId: "reporter",
        targetType: "profile",
        targetId: "consultant",
        reason: "Fake consultant",
        createdAt: "2026-10-03T00:00:00.000Z",
      },
      {
        id: "r4",
        reporterId: "reporter",
        targetType: "post",
        targetId: "missing",
        reason: "Gone",
        createdAt: "2026-10-04T00:00:00.000Z",
      },
    ],
    people,
    posts: [
      {
        id: "post-1",
        body: "Buy this visa",
        authorId: "author",
        status: "active",
        deletedAt: null,
      },
    ],
    comments: [
      {
        id: "comment-1",
        body: "You are a fraud",
        authorId: "author",
        postId: "post-9",
        status: "hidden",
        deletedAt: null,
      },
    ],
  });

  assert.equal(views.length, 4);
  assert.equal(views[0]?.href, "/post/post-1");
  assert.equal(views[0]?.contentStatus, "active");
  assert.equal(views[0]?.profileHandle, "author");
  assert.equal(views[0]?.isVerified, true);
  assert.equal(views[1]?.href, "/post/post-9");
  assert.equal(views[1]?.contentStatus, "hidden");
  assert.equal(views[2]?.href, "/u/consultant");
  assert.equal(views[2]?.profileId, "consultant");
  assert.equal(views[2]?.isVerified, false);
  assert.equal(views[3]?.body, null);
  assert.equal(views[3]?.contentStatus, null);
});
