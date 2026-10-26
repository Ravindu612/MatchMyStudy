import assert from "node:assert/strict";
import test from "node:test";
import {
  ITALKI_AFFILIATE_URL,
  ITALKI_CTA_LABEL,
  ITALKI_LINK_REL,
  countrySpeakingNote,
  programSpeakingNote,
  speakingPracticeCountryKeys,
} from "./italki";

const countryPages = [
  "australia",
  "austria",
  "belgium",
  "canada",
  "china",
  "czech-republic",
  "denmark",
  "finland",
  "france",
  "germany",
  "greece",
  "hongKong",
  "hungary",
  "india",
  "ireland",
  "italy",
  "japan",
  "malaysia",
  "netherlands",
  "newZealand",
  "norway",
  "poland",
  "portugal",
  "qatar",
  "romania",
  "saudiArabia",
  "singapore",
  "south-africa",
  "southKorea",
  "spain",
  "sweden",
  "switzerland",
  "taiwan",
  "thailand",
  "turkiye",
  "uae",
  "unitedKingdom",
  "usa",
];

test("italki affiliate URL and link attributes stay exact", () => {
  assert.equal(
    ITALKI_AFFILIATE_URL,
    "https://www.italki.com/affshare?ref=af34116223"
  );
  assert.equal(ITALKI_LINK_REL, "sponsored noopener noreferrer");
  assert.equal(ITALKI_CTA_LABEL, "Practice speaking with tutors on italki");
});

test("every country guide has a speaking-practice note", () => {
  assert.deepEqual(
    speakingPracticeCountryKeys().sort(),
    [...countryPages].sort()
  );

  for (const countryKey of countryPages) {
    const note = countrySpeakingNote(countryKey, "Example");
    assert.ok(note, countryKey);
    assert.match(note, /Speaking practice/);
    assert.doesNotMatch(note, /%|commission|earn/i);
  }
});

test("local-language destinations name the language students will use", () => {
  assert.match(countrySpeakingNote("germany", "Germany") ?? "", /German/);
  assert.match(countrySpeakingNote("finland", "Finland") ?? "", /Finnish/);
  assert.match(countrySpeakingNote("france", "France") ?? "", /French/);
  assert.match(countrySpeakingNote("sweden", "Sweden") ?? "", /Swedish/);
  assert.match(countrySpeakingNote("norway", "Norway") ?? "", /Norwegian/);
  assert.match(countrySpeakingNote("denmark", "Denmark") ?? "", /Danish/);
  assert.match(
    countrySpeakingNote("netherlands", "the Netherlands") ?? "",
    /Dutch/
  );
});

test("English destinations mention speaking for tests and arrival", () => {
  const note = countrySpeakingNote("canada", "Canada");
  assert.match(note ?? "", /IELTS or TOEFL/);
  assert.match(note ?? "", /English/);
  assert.match(
    countrySpeakingNote("usa", "United States") ?? "",
    /in the United States/
  );
  assert.match(
    countrySpeakingNote("netherlands", "Netherlands") ?? "",
    /in the Netherlands/
  );
});

test("unknown countries do not get a note", () => {
  assert.equal(countrySpeakingNote("atlantis", "Atlantis"), null);
});

test("programme notes follow language of instruction and English tests", () => {
  assert.equal(
    programSpeakingNote({
      language: "English",
      admissionRequirements: ["A completed bachelor degree"],
    }),
    null
  );

  assert.match(
    programSpeakingNote({
      language: "English",
      admissionRequirements: ["IELTS Academic 6.5"],
    }) ?? "",
    /IELTS or TOEFL/
  );

  assert.match(
    programSpeakingNote({
      language: "French",
      admissionRequirements: ["A school-leaving certificate"],
    }) ?? "",
    /taught in French/
  );

  assert.match(
    programSpeakingNote({
      language: "English",
      showsEnglishTests: true,
    }) ?? "",
    /IELTS or TOEFL/
  );
});
