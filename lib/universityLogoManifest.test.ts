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
});

test("batch 5 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 5);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["free-university-of-berlin", "blocked"],
      ["karlsruhe-institute-of-technology", "blocked"],
      ["king-fahd-university-of-petroleum-and-minerals", "blocked"],
      ["pennsylvania-state-university", "blocked"],
      ["postech", "blocked"],
      ["purdue-university", "blocked"],
      ["rwth-aachen-university", "blocked"],
      ["university-of-copenhagen", "blocked"],
      ["university-of-sheffield", "completed"],
      ["uppsala-university", "blocked"],
      ["utrecht-university", "blocked"],
    ]
  );
  assert.match(universityLogoCredit("university-of-sheffield") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-sheffield") ?? "", /Shadowssettle/);
  assert.match(universityLogoCredit("university-of-sheffield") ?? "", /Booyabazooka/);
  assert.match(universityLogoCredit("university-of-sheffield") ?? "", /Wikimandia/);
  assert.equal(universityLogoCredit("purdue-university"), null);
  assert.equal(universityLogoCredit("pennsylvania-state-university"), null);
  assert.equal(universityLogoCredit("free-university-of-berlin"), null);
  assert.equal(universityLogoCredit("postech"), null);
  assert.equal(universityLogoCredit("rwth-aachen-university"), null);
  assert.equal(universityLogoCredit("uppsala-university"), null);
});

test("batch 6 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 6);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["boston-university", "blocked"],
      ["cardiff-university", "blocked"],
      ["newcastle-university-uk", "completed"],
      ["technical-university-of-denmark", "blocked"],
      ["tohoku-university", "blocked"],
      ["university-of-exeter", "completed"],
      ["university-of-liverpool", "completed"],
      ["university-of-nottingham", "completed"],
      ["university-of-york", "completed"],
      ["university-of-zurich", "blocked"],
    ]
  );
  assert.match(universityLogoCredit("university-of-nottingham") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-nottingham") ?? "", /Shadowssettle/);
  assert.match(universityLogoCredit("newcastle-university-uk") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("newcastle-university-uk") ?? "", /Shadowssettle/);
  assert.match(universityLogoCredit("university-of-liverpool") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-liverpool") ?? "", /ET72/);
  assert.match(universityLogoCredit("university-of-york") ?? "", /CC BY 4.0/);
  assert.match(universityLogoCredit("university-of-york") ?? "", /GrandDukeofBrittany/);
  assert.equal(universityLogoCredit("university-of-exeter"), null);
  assert.equal(universityLogoCredit("tohoku-university"), null);
  assert.equal(universityLogoCredit("boston-university"), null);
  assert.equal(universityLogoCredit("technical-university-of-denmark"), null);
  assert.equal(universityLogoCredit("university-of-zurich"), null);
  assert.equal(universityLogoCredit("cardiff-university"), null);
});

test("batch 7 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 7);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["aalto-university", "blocked"],
      ["georgia-institute-of-technology", "blocked"],
      ["lancaster-university", "blocked"],
      ["leiden-university", "completed"],
      ["politecnico-di-milano", "blocked"],
      ["queen-mary-university-of-london", "blocked"],
      ["queens-university-belfast", "completed"],
      ["university-of-bath", "completed"],
      ["university-of-canterbury", "completed"],
      ["university-of-helsinki", "blocked"],
      ["university-of-otago", "completed"],
      ["university-of-wisconsin-madison", "blocked"],
    ]
  );
  assert.match(universityLogoCredit("university-of-bath") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-bath") ?? "", /ET72/);
  assert.match(universityLogoCredit("university-of-bath") ?? "", /Sodacan/);
  assert.match(universityLogoCredit("university-of-otago") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-otago") ?? "", /Stanley Bannerman/);
  assert.match(universityLogoCredit("queens-university-belfast") ?? "", /CC BY-SA 3.0/);
  assert.match(universityLogoCredit("queens-university-belfast") ?? "", /Rathgarrr/);
  assert.match(universityLogoCredit("university-of-canterbury") ?? "", /CC BY-SA 4.0/);
  assert.match(universityLogoCredit("university-of-canterbury") ?? "", /TheLoyalOrder/);
  assert.match(universityLogoCredit("leiden-university") ?? "", /CC BY-SA 3.0/);
  assert.match(universityLogoCredit("leiden-university") ?? "", /Leiden University/);
  assert.equal(universityLogoCredit("politecnico-di-milano"), null);
  assert.equal(universityLogoCredit("aalto-university"), null);
  assert.equal(universityLogoCredit("georgia-institute-of-technology"), null);
  assert.equal(universityLogoCredit("university-of-wisconsin-madison"), null);
  assert.equal(universityLogoCredit("university-of-helsinki"), null);
  assert.equal(universityLogoCredit("queen-mary-university-of-london"), null);
  assert.equal(universityLogoCredit("lancaster-university"), null);
});

test("batch 8 dispositions stay stable for the next run", () => {
  const batch = manifest.universities.filter((entry) => entry.batch === 8);
  assert.deepEqual(
    batch.map((entry) => [entry.slug, entry.status]).sort(),
    [
      ["humboldt-university-of-berlin", "blocked"],
      ["iit-bombay", "blocked"],
      ["macquarie-university", "blocked"],
      ["qatar-university", "blocked"],
      ["rice-university", "blocked"],
      ["rmit-university", "blocked"],
      ["sapienza-university-of-rome", "blocked"],
      ["stockholm-university", "blocked"],
      ["sungkyunkwan-university", "blocked"],
      ["university-college-dublin", "blocked"],
      ["university-of-basel", "blocked"],
      ["university-of-bologna", "blocked"],
      ["university-of-oslo", "blocked"],
      ["university-of-science-and-technology-of-china", "blocked"],
      ["university-of-southern-california", "blocked"],
    ]
  );
  for (const slug of batch.map((entry) => entry.slug)) {
    assert.equal(universityLogoCredit(slug), null, slug);
    assert.equal(batch.find((entry) => entry.slug === slug)?.assetPath, null);
  }
  assert.equal(manifest.audit.completed, 40);
  assert.equal(manifest.audit.blocked, 102);
  assert.equal(manifest.audit.pending, 495);
});
