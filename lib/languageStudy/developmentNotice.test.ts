import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { LANGUAGE_STUDY_PAID_COMING_SOON } from "./developmentNotice";

test("paid items have a coming soon sentence and the section is not marked under development", () => {
  assert.match(LANGUAGE_STUDY_PAID_COMING_SOON, /Coming soon/);
  assert.match(LANGUAGE_STUDY_PAID_COMING_SOON, /Free reading, writing, and listening practice is ready/);
  assert.doesNotMatch(LANGUAGE_STUDY_PAID_COMING_SOON, /under development/);

  const layout = readFileSync(new URL("../../app/language-study/layout.tsx", import.meta.url), "utf8");
  const home = readFileSync(new URL("../../app/page.tsx", import.meta.url), "utf8");
  const hub = readFileSync(new URL("../../app/language-study/page.tsx", import.meta.url), "utf8");

  assert.doesNotMatch(layout, /DevelopmentNotice|under development/);
  assert.doesNotMatch(home, /DevelopmentNotice|under development/);
  assert.doesNotMatch(hub, /under development/);
  assert.match(hub, /coming soon/i);
});
