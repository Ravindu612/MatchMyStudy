import assert from "node:assert/strict";
import test from "node:test";
import { appAuthStorageKey } from "./googleAuth";
import {
  loginPathFor,
  parseSignupRole,
  resolveOAuthNextPath,
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

test("appAuthStorageKey matches the supabase-js localStorage key", () => {
  assert.equal(
    appAuthStorageKey(
      "https://jxmtbvzdhayfxjgetyzq.supabase.co"
    ),
    "sb-jxmtbvzdhayfxjgetyzq-auth-token"
  );
});

test("loginPathFor carries the current page and skips auth pages", () => {
  assert.equal(loginPathFor("/about"), "/login?redirect=%2Fabout");
  assert.equal(
    loginPathFor("/consultants"),
    "/login?redirect=%2Fconsultants"
  );
  assert.equal(loginPathFor("/login"), "/login");
  assert.equal(loginPathFor("/auth/callback"), "/login");
  assert.equal(loginPathFor("//evil.example"), "/login");
  assert.equal(loginPathFor(null), "/login");
});

test("resolveOAuthNextPath uses the previous page when redirect is absent", () => {
  const origin = "https://www.matchmystudy.com";

  assert.equal(
    resolveOAuthNextPath(
      "/about",
      `${origin}/login`,
      origin
    ),
    "/about"
  );
  assert.equal(
    resolveOAuthNextPath(
      null,
      `${origin}/countries?x=1`,
      origin
    ),
    "/countries?x=1"
  );
  assert.equal(
    resolveOAuthNextPath(null, `${origin}/login`, origin),
    "/consultants"
  );
  assert.equal(
    resolveOAuthNextPath(
      null,
      `${origin}/auth/callback`,
      origin
    ),
    "/consultants"
  );
  assert.equal(
    resolveOAuthNextPath(
      null,
      "https://evil.example/phish",
      origin
    ),
    "/consultants"
  );
  assert.equal(
    resolveOAuthNextPath(
      "https://evil.example",
      `${origin}/about`,
      origin
    ),
    "/consultants"
  );
  assert.equal(resolveOAuthNextPath(null, null, origin), "/consultants");
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
