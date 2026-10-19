import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import { programs } from "@/data/programs";
import { universities } from "@/data/universities";
import {
  ADSENSE_CLIENT,
  CONSENT_STORAGE_KEY,
  EEA_UK_CH_REGIONS,
  GA_MEASUREMENT_ID,
} from "@/lib/consentConfig";
import {
  getContentIndexStats,
  getIndexableProgramSlugs,
  getIndexableUniversitySlugs,
  isAdsAllowedPath,
  isIndexableProgram,
  MIN_STANDALONE_DESCRIPTION_CHARS,
} from "@/lib/contentQuality";
import {
  ADSENSE_SCRIPT_SRC,
  buildConsentHeadScript,
} from "@/lib/googleHeadScript";

test("ads.txt publishes the AdSense publisher line", () => {
  const ads = readFileSync(new URL("../public/ads.txt", import.meta.url), "utf8");
  assert.equal(
    ads.trim(),
    `google.com, ${ADSENSE_CLIENT.replace("ca-", "")}, DIRECT, f08c47fec0942fa0`
  );
});

test("program and university index splits match the content rule", () => {
  const stats = getContentIndexStats();

  assert.equal(stats.programs.total, programs.length);
  assert.equal(
    stats.programs.indexable + stats.programs.thin,
    stats.programs.total
  );
  assert.equal(stats.universities.total, Object.values(universities).flat().length);
  assert.equal(
    stats.universities.indexable + stats.universities.thin,
    stats.universities.total
  );

  // Locked to the rule so a data or threshold change is visible in review.
  assert.deepEqual(stats, {
    programs: { total: 2599, indexable: 792, thin: 1807 },
    universities: { total: 637, indexable: 46, thin: 591 },
  });
});

test("templated program pages are thin and researched pages stay indexable", () => {
  const toronto = programs.find(
    (program) => program.slug === "bachelor-accounting-university-of-toronto"
  );
  const uts = programs.find(
    (program) => program.slug === "uts-information-technology"
  );
  const placeholder = programs.find((program) =>
    /will be added soon/i.test(program.description)
  );

  assert.ok(toronto);
  assert.ok(uts);
  assert.ok(placeholder);
  assert.equal(isIndexableProgram(toronto), false);
  assert.equal(isIndexableProgram(uts), true);
  assert.equal(isIndexableProgram(placeholder), false);
  assert.ok(
    uts.description.trim().length >= MIN_STANDALONE_DESCRIPTION_CHARS ||
      (uts.admissionRequirements?.length ?? 0) > 0
  );

  const indexedWithoutAdmissions = programs.filter(
    (program) =>
      isIndexableProgram(program) &&
      !program.admissionRequirements?.some((item) => item.trim())
  );
  assert.equal(indexedWithoutAdmissions.length, 1);
  assert.ok(
    indexedWithoutAdmissions[0].description.trim().length >=
      MIN_STANDALONE_DESCRIPTION_CHARS
  );

  assert.equal(getIndexableUniversitySlugs().has("university-of-toronto"), false);
  assert.equal(
    getIndexableUniversitySlugs().has(uts.universitySlug),
    true
  );
});

test("consent head script denies EEA storage and pauses ads on thin pages", () => {
  const script = buildConsentHeadScript();

  assert.match(script, /ad_storage: 'denied'/);
  assert.match(script, /analytics_storage: 'denied'/);
  assert.match(script, /ad_user_data: 'denied'/);
  assert.match(script, /ad_personalization: 'denied'/);
  assert.match(script, new RegExp(GA_MEASUREMENT_ID));
  assert.match(script, new RegExp(CONSENT_STORAGE_KEY));
  assert.match(script, /pauseAdRequests = 1/);
  for (const region of ["DE", "FI", "GB", "CH", "IE"]) {
    assert.ok(EEA_UK_CH_REGIONS.includes(region as (typeof EEA_UK_CH_REGIONS)[number]));
    assert.match(script, new RegExp(`"${region}"`));
  }
  assert.equal(EEA_UK_CH_REGIONS.length, 32);
  assert.match(ADSENSE_SCRIPT_SRC, new RegExp(ADSENSE_CLIENT));

  const samples = [
    "/",
    "/about",
    "/blog/best-countries-2026",
    "/program-matcher",
    "/university-matcher",
    "/admin/moderation",
    "/login",
    "/programs/uts-information-technology",
    "/programs/bachelor-accounting-university-of-toronto",
    "/programs/uts-information-technology/",
    "/universities/university-of-toronto",
    `/universities/${programs.find((program) => isIndexableProgram(program))!.universitySlug}`,
  ];

  // The script reads the robots meta tag instead of inlining slugs.
  assert.doesNotMatch(script, /uts-information-technology/);
  assert.ok(script.length < 5000, `script is ${script.length} chars`);

  for (const path of samples) {
    const paused = pauseAdRequestsFor(script, path, robotsFor(path));
    const allowed = isAdsAllowedPath(path);
    assert.equal(
      paused,
      allowed ? undefined : 1,
      `${path} allowed=${allowed} paused=${paused}`
    );
  }
});

// The robots meta the page would render (lib/contentQuality.ts
// indexingRobots), or null when the page has none.
function robotsFor(path: string) {
  const program = path.replace(/\/$/, "").match(/^\/programs\/([^/]+)$/);
  if (program) {
    return getIndexableProgramSlugs().has(program[1])
      ? "index, follow"
      : "noindex, follow";
  }
  const university = path.replace(/\/$/, "").match(/^\/universities\/([^/]+)$/);
  if (university) {
    return getIndexableUniversitySlugs().has(university[1])
      ? "index, follow"
      : "noindex, follow";
  }
  return null;
}

function pauseAdRequestsFor(script: string, path: string, robots: string | null) {
  const sandbox: {
    window: Record<string, unknown>;
    location: { pathname: string };
    localStorage: { getItem: () => null };
    document: { querySelector: (selector: string) => unknown };
    adsbygoogle?: { pauseAdRequests?: number };
  } = {
    window: {},
    location: { pathname: path },
    localStorage: { getItem: () => null },
    document: {
      querySelector: (selector: string) =>
        selector === 'meta[name="robots"]' && robots !== null
          ? { getAttribute: () => robots }
          : null,
    },
  };
  sandbox.window = sandbox as unknown as Record<string, unknown>;
  vm.createContext(sandbox);
  vm.runInContext(script, sandbox);
  return sandbox.adsbygoogle?.pauseAdRequests;
}
