import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import DevelopmentNotice from "../../components/languageStudy/DevelopmentNotice";
import { LANGUAGE_STUDY_DEVELOPMENT_NOTICE } from "./developmentNotice";

const NOTICE =
  "This section is under development. Some practice features and payments aren’t available yet.";

test("the development notice uses the communicated sentence", () => {
  assert.equal(LANGUAGE_STUDY_DEVELOPMENT_NOTICE, NOTICE);
  assert.equal(NOTICE.includes("’"), true);
});

test("the notice is a persistent note without a dismiss control", () => {
  const html = renderToStaticMarkup(createElement(DevelopmentNotice));

  assert.match(html, /role="note"/);
  assert.match(html, /This section is under development/);
  assert.equal(html.includes("<button"), false);
  assert.doesNotMatch(html, /dismiss|close/i);
});

test("the notice is on the language study layout and not the homepage", () => {
  const layout = readFileSync(
    new URL("../../app/language-study/layout.tsx", import.meta.url),
    "utf8"
  );
  const home = readFileSync(new URL("../../app/page.tsx", import.meta.url), "utf8");

  assert.match(layout, /DevelopmentNotice/);
  assert.doesNotMatch(home, /DevelopmentNotice|under development/);
});
