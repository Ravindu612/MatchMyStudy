import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import { programs, type Program } from "@/data/programs";
import { universities, type University } from "@/data/universities";
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
  isIndexableUniversity,
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
  const indexablePrograms = programs.filter(meetsProgramIndexRule);
  const indexableProgramUniversitySlugs = new Set(
    indexablePrograms.map((program) => program.universitySlug)
  );
  const allUniversities = Object.values(universities).flat();
  const indexableUniversities = allUniversities.filter((university) =>
    meetsUniversityIndexRule(university, indexableProgramUniversitySlugs)
  );

  assert.deepEqual(getContentIndexStats(), {
    programs: {
      total: programs.length,
      indexable: indexablePrograms.length,
      thin: programs.length - indexablePrograms.length,
    },
    universities: {
      total: allUniversities.length,
      indexable: indexableUniversities.length,
      thin: allUniversities.length - indexableUniversities.length,
    },
  });

  for (const program of programs) {
    assert.equal(
      isIndexableProgram(program),
      meetsProgramIndexRule(program),
      program.slug
    );
  }

  const indexedUniversitySlugs = getIndexableUniversitySlugs();
  for (const university of allUniversities) {
    const expected = meetsUniversityIndexRule(
      university,
      indexableProgramUniversitySlugs
    );
    assert.equal(
      isIndexableUniversity(university, indexableProgramUniversitySlugs),
      expected,
      university.slug
    );
    assert.equal(indexedUniversitySlugs.has(university.slug), expected, university.slug);
  }
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

const PLACEHOLDER_DESCRIPTION = /will be added soon/i;

function meetsProgramIndexRule(program: Program) {
  const hasAdmissions = program.admissionRequirements?.some((item) =>
    Boolean(item && item.trim())
  );
  if (hasAdmissions) return true;

  const description = program.description ?? "";
  return (
    Boolean(description.trim()) &&
    !PLACEHOLDER_DESCRIPTION.test(description) &&
    description.trim().length >= MIN_STANDALONE_DESCRIPTION_CHARS
  );
}

function meetsUniversityIndexRule(
  university: University,
  indexableProgramUniversitySlugs: ReadonlySet<string>
) {
  const description = university.description ?? "";
  if (
    Boolean(description.trim()) &&
    !PLACEHOLDER_DESCRIPTION.test(description) &&
    description.trim().length >= MIN_STANDALONE_DESCRIPTION_CHARS
  ) {
    return true;
  }

  return indexableProgramUniversitySlugs.has(university.slug);
}

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
