import assert from "node:assert/strict";
import test from "node:test";
import { profileHrefFor } from "./profileHref";

test("signed-out profile link keeps the current page on the login redirect", () => {
  assert.equal(
    profileHrefFor({ signedIn: false, handle: "kasun", pathname: "/feed" }),
    "/login?redirect=%2Ffeed"
  );
});

test("signed-in profile link uses the handle once the session is known", () => {
  assert.equal(
    profileHrefFor({ signedIn: true, handle: "kasun", pathname: "/feed" }),
    "/u/kasun"
  );
});

test("signed-in profile link falls back to settings when there is no handle", () => {
  assert.equal(
    profileHrefFor({ signedIn: true, handle: null, pathname: "/feed" }),
    "/settings/profile"
  );
  assert.equal(
    profileHrefFor({ signedIn: true, handle: "   ", pathname: "/network" }),
    "/settings/profile"
  );
});
