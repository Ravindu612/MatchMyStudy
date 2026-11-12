import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import manifest from "@/data/university-logos/manifest.json";
import { universities } from "@/data/universities";
import { universityLogoCredit } from "@/lib/universityLogoManifest";

const all = Object.entries(universities).flatMap(([countryKey, list]) =>
  list.map((university) => ({ countryKey, university }))
);

test("logo manifest covers every university once", () => {
  const slugs = manifest.universities.map((entry) => entry.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(slugs.length, all.length);
  const bySlug = new Map(manifest.universities.map((entry) => [entry.slug, entry]));
  for (const { countryKey, university } of all) {
    const entry = bySlug.get(university.slug);
    assert.ok(entry, university.slug);
    assert.equal(entry.id, university.slug);
    assert.equal(entry.name, university.name);
    assert.equal(entry.countryKey, countryKey);
    assert.equal(entry.officialWebsite, university.officialWebsite);
    if (entry.status === "completed") {
      assert.equal(entry.assetPath, university.logo);
      assert.ok(entry.assetPath);
      assert.equal(
        existsSync(new URL(`../public${entry.assetPath}`, import.meta.url)),
        true,
        entry.assetPath
      );
    } else {
      assert.equal(university.logo, undefined);
      assert.equal(entry.assetPath, null);
    }
  }
});

test("batch 1 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 1);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["harvard-university", "completed"],
      ["imperial-college-london", "completed"],
      ["stanford-university", "completed"],
      ["university-of-cambridge", "completed"],
      ["university-of-oxford", "blocked"],
    ]
  );
  assert.equal(universityLogoCredit("university-of-oxford"), null);
  assert.match(universityLogoCredit("university-of-cambridge") ?? "", /CC BY-SA 3.0/);
  assert.match(universityLogoCredit("imperial-college-london") ?? "", /CC BY 3.0/);
  assert.equal(universityLogoCredit("harvard-university"), null);
  assert.equal(universityLogoCredit("stanford-university"), null);
});

test("batch 2 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 2);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["australian-national-university", "completed"],
      ["bocconi-university", "blocked"],
      ["california-institute-of-technology", "blocked"],
      ["cornell-university", "completed"],
      ["epfl", "blocked"],
      ["eth-zurich", "blocked"],
      ["massachusetts-institute-of-technology", "blocked"],
      ["nanyang-technological-university", "blocked"],
      ["national-university-of-singapore", "blocked"],
      ["peking-university", "blocked"],
      ["princeton-university", "blocked"],
      ["psl-university", "blocked"],
      ["technical-university-of-munich", "blocked"],
      ["the-university-of-hong-kong", "blocked"],
      ["tsinghua-university", "blocked"],
      ["university-college-london", "blocked"],
      ["university-of-california-berkeley", "blocked"],
      ["university-of-chicago", "blocked"],
      ["university-of-edinburgh", "completed"],
      ["university-of-melbourne", "completed"],
      ["university-of-new-south-wales", "blocked"],
      ["university-of-pennsylvania", "completed"],
      ["university-of-sydney", "blocked"],
      ["yale-university", "blocked"],
    ]
  );
  assert.match(universityLogoCredit("university-of-melbourne") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("cornell-university") ?? "", /CC BY-SA 4.0/);
  assert.match(
    universityLogoCredit("australian-national-university") ?? "",
    /CC BY-SA 4.0/
  );
  assert.equal(universityLogoCredit("university-of-pennsylvania"), null);
  assert.equal(universityLogoCredit("university-of-edinburgh"), null);
  assert.equal(universityLogoCredit("massachusetts-institute-of-technology"), null);

  const pending = manifest.universities
    .filter((entry) => entry.status === "pending")
    .sort((a, b) => a.prominenceRank - b.prominenceRank)
    .slice(0, 5)
    .map((entry) => entry.slug);
  assert.deepEqual(manifest.nextPendingSlugs, pending);
  assert.equal(manifest.audit.brokenLiveReferences, 0);
  assert.equal(
    manifest.audit.completed + manifest.audit.pending + manifest.audit.blocked,
    manifest.audit.total
  );
});

test("batch 3 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 3);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["columbia-university", "blocked"],
      ["ecole-polytechnique", "blocked"],
      ["fudan-university", "blocked"],
      ["hong-kong-university-of-science-and-technology", "blocked"],
      ["johns-hopkins-university", "blocked"],
      ["kaist", "blocked"],
      ["kings-college-london", "completed"],
      ["kyoto-university", "blocked"],
      ["monash-university", "blocked"],
      ["new-york-university", "blocked"],
      ["northwestern-university", "blocked"],
      ["seoul-national-university", "blocked"],
      ["the-chinese-university-of-hong-kong", "blocked"],
      ["the-university-of-tokyo", "blocked"],
      ["university-of-amsterdam", "blocked"],
      ["university-of-bristol", "completed"],
      ["university-of-california-los-angeles", "blocked"],
      ["university-of-glasgow", "completed"],
      ["university-of-manchester", "completed"],
      ["university-of-michigan", "blocked"],
      ["university-of-queensland", "blocked"],
      ["university-of-warwick", "completed"],
    ]
  );
  assert.match(universityLogoCredit("university-of-manchester") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("kings-college-london") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-bristol") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-warwick") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-glasgow") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("kings-college-london") ?? "", /David Liuzzo/);
  assert.equal(universityLogoCredit("seoul-national-university"), null);
  assert.equal(universityLogoCredit("the-university-of-tokyo"), null);
  assert.equal(universityLogoCredit("johns-hopkins-university"), null);
  assert.equal(universityLogoCredit("columbia-university"), null);
});

test("batch 4 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 4);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["carnegie-mellon-university", "blocked"],
      ["city-university-of-hong-kong", "blocked"],
      ["delft-university-of-technology", "blocked"],
      ["duke-university", "blocked"],
      ["durham-university", "completed"],
      ["heidelberg-university", "blocked"],
      ["korea-university", "blocked"],
      ["kth-royal-institute-of-technology", "blocked"],
      ["ku-leuven", "blocked"],
      ["ludwig-maximilian-university-of-munich", "blocked"],
      ["lund-university", "blocked"],
      ["national-taiwan-university", "blocked"],
      ["osaka-university", "blocked"],
      ["shanghai-jiao-tong-university", "blocked"],
      ["sorbonne-university", "blocked"],
      ["the-hong-kong-polytechnic-university", "blocked"],
      ["tokyo-institute-of-technology", "blocked"],
      ["trinity-college-dublin", "completed"],
      ["universite-paris-saclay", "blocked"],
      ["university-of-adelaide", "completed"],
      ["university-of-auckland", "completed"],
      ["university-of-birmingham", "blocked"],
      ["university-of-california-san-diego", "blocked"],
      ["university-of-illinois-urbana-champaign", "blocked"],
      ["university-of-leeds", "completed"],
      ["university-of-malaya", "blocked"],
      ["university-of-southampton", "blocked"],
      ["university-of-technology-sydney", "blocked"],
      ["university-of-texas-at-austin", "blocked"],
      ["university-of-washington", "blocked"],
      ["university-of-western-australia", "blocked"],
      ["yonsei-university", "blocked"],
      ["zhejiang-university", "blocked"],
    ]
  );
  assert.match(universityLogoCredit("university-of-auckland") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-auckland") ?? "", /TheLoyalOrder/);
  assert.match(universityLogoCredit("trinity-college-dublin") ?? "", /CC BY-SA 3.0/);
  assert.match(universityLogoCredit("trinity-college-dublin") ?? "", /Kwekubo/);
  assert.match(universityLogoCredit("university-of-adelaide") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-leeds") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-leeds") ?? "", /Booyabazooka/);
  assert.equal(universityLogoCredit("durham-university"), null);
  assert.equal(universityLogoCredit("shanghai-jiao-tong-university"), null);
  assert.equal(universityLogoCredit("yonsei-university"), null);
  assert.equal(universityLogoCredit("university-of-birmingham"), null);
  assert.equal(manifest.audit.completed, 29);
  assert.equal(manifest.audit.blocked, 65);
});
