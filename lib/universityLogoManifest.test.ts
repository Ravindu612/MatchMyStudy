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
