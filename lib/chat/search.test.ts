import assert from "node:assert/strict";
import test from "node:test";
import { searchSite } from "./search";

test("university search returns the published page and no invented school", () => {
  const result = searchSite({
    kind: "university",
    query: "University of Toronto",
  });

  assert.ok(result.matches.some((match) => match.url === "/universities/university-of-toronto"));
  assert.equal(
    result.matches.some((match) => /hogwarts|oxford invented/i.test(match.title)),
    false
  );
});

test("program search keeps only listed fees and deadlines", () => {
  const result = searchSite({
    kind: "program",
    query: "accounting university of toronto",
    country: "Canada",
    level: "Bachelor",
  });
  const match = result.matches.find((item) =>
    item.url.includes("bachelor-accounting-university-of-toronto")
  );

  assert.ok(match);
  assert.match(match.url, /^\/programs\//);
  assert.equal(match.country, "Canada");
  assert.equal(match.level, "Bachelor");

  if (match.tuitionNote) {
    assert.match(match.tuitionNote, /tuition/i);
  }
});

test("unknown topics return no records", () => {
  const result = searchSite({
    kind: "university",
    query: "zyxwvut quantum pottery",
  });

  assert.deepEqual(result.matches, []);
  assert.match(result.note, /do not invent/i);
});

test("guide and consultant search link to site pages", () => {
  const guide = searchSite({
    kind: "guide",
    query: "student housing deposit",
  });
  const consultant = searchSite({
    kind: "consultant",
    query: "HS Consultants Pakistan",
  });

  assert.ok(guide.matches.some((match) => match.url === "/blog/before-you-pay-a-deposit"));
  assert.ok(
    consultant.matches.some((match) => match.url === "/consultants/hs-consultants")
  );
  assert.equal(
    consultant.matches.some((match) => "email" in match || "phone" in match),
    false
  );
});
