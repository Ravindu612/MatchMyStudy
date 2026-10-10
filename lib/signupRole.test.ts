import assert from "node:assert/strict";
import test from "node:test";
import {
  parseSignupRole,
  safeNextPath,
  shouldApplySignupRole,
} from "./signupRole";

test("parseSignupRole accepts only student and consultant", () => {
  assert.equal(parseSignupRole("student"), "student");
  assert.equal(parseSignupRole(" Consultant "), "consultant");
  assert.equal(parseSignupRole("admin"), null);
  assert.equal(parseSignupRole("ADMIN"), null);
  assert.equal(parseSignupRole(""), null);
  assert.equal(parseSignupRole(null), null);
});

test("safeNextPath keeps internal paths only", () => {
  assert.equal(safeNextPath("/consultants"), "/consultants");
  assert.equal(
    safeNextPath("%2Fconsultants%2Fapply"),
    "/consultants/apply"
  );
  assert.equal(safeNextPath("https://evil.example"), "/consultants");
  assert.equal(safeNextPath("//evil.example"), "/consultants");
  assert.equal(safeNextPath(null), "/consultants");
});

test("shouldApplySignupRole ignores existing and non-new accounts", () => {
  const now = Date.parse("2026-10-10T12:00:00.000Z");

  assert.equal(
    shouldApplySignupRole(
      {
        created_at: "2026-10-10T11:59:00.000Z",
        user_metadata: { name: "Ada" },
      },
      now
    ),
    true
  );

  assert.equal(
    shouldApplySignupRole(
      {
        created_at: "2026-10-10T11:59:00.000Z",
        user_metadata: { role: "admin" },
      },
      now
    ),
    false
  );

  assert.equal(
    shouldApplySignupRole(
      {
        created_at: "2026-10-10T11:59:00.000Z",
        user_metadata: { role: "consultant" },
      },
      now
    ),
    false
  );

  assert.equal(
    shouldApplySignupRole(
      {
        created_at: "2026-01-01T00:00:00.000Z",
        user_metadata: {},
      },
      now
    ),
    false
  );
});
