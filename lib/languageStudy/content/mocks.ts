import type { MockTest } from "../types";
import {
  ieltsListeningParts,
  pteListeningParts,
  toeflListeningParts,
  ykiListeningParts,
} from "./listeningMocks";
import { prompt } from "./mockBuild";
import {
  ieltsReadingParts,
  pteReadingParts,
  toeflReadingParts,
  ykiReadingParts,
} from "./readingMocks";

const unofficial =
  "Unofficial practice. The result is not an official or certified score, and MatchMyStudy is not the exam board.";

export const mockTests: MockTest[] = [
  {
    id: "mock-reading-en-ielts",
    skill: "reading",
    language: "en",
    variant: "ielts",
    title: "Full unofficial IELTS-style reading",
    minutes: 60,
    scopeNote:
      "This unofficial section has 3 passages, 40 questions, and a 60-minute clock, matching the length of an IELTS Academic reading paper. The raw mark is not an IELTS band, and MatchMyStudy is not a British Council, IDP, or Cambridge exam.",
    instructions: [
      "Read the three passages and answer all 40 questions.",
      "True means the passage states it. False means the passage states the opposite. Not given means the passage does not say.",
      "The clock runs for 60 minutes.",
      "You receive a raw mark only. There is no band conversion.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: ieltsReadingParts } },
  },
  {
    id: "mock-reading-en-toefl",
    skill: "reading",
    language: "en",
    variant: "toefl",
    title: "Full unofficial TOEFL-style reading",
    minutes: 35,
    scopeNote: `${unofficial} This section has 2 passages and 20 questions in 35 minutes, in the range of a TOEFL iBT reading section. The raw mark is not converted to a TOEFL score. MatchMyStudy is not affiliated with ETS.`,
    instructions: [
      "Read each passage and answer its questions.",
      "One question asks about a word as it is used in the passage.",
      "The clock runs for 35 minutes.",
      "The result is the number of matching answers. It is not a scaled TOEFL score.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: toeflReadingParts } },
  },
  {
    id: "mock-reading-en-pte",
    skill: "reading",
    language: "en",
    variant: "pte",
    title: "Full unofficial PTE-style reading",
    minutes: 30,
    scopeNote:
      "This unofficial reading section runs for 30 minutes. It has single-answer questions and one reorder item. The reorder item scores a point only when the whole order matches. Partial credit is not used. The result is not a PTE score, and MatchMyStudy is not affiliated with Pearson.",
    instructions: [
      "Answer the multiple-choice questions from the passages.",
      "Put the three sentences into the only order that makes a coherent paragraph.",
      "The reorder item is right only if every sentence is in the keyed order.",
      "The clock runs for 30 minutes. There is no PTE score.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: pteReadingParts } },
  },
  {
    id: "mock-reading-fi-yki",
    skill: "reading",
    language: "fi",
    variant: "yki",
    title: "Täysimittainen epävirallinen YKI-tyylinen luetun ymmärtäminen",
    minutes: 55,
    scopeNote:
      "Yleiset kielitutkinnot (YKI) järjestää Opetushallitus. Tässä harjoituksessa on neljä tekstiä, 20 kysymystä ja 55 minuutin kello. Tulos on raakapistemäärä, ei YKI-tasoa eikä todistusta.",
    instructions: [
      "Lue kaikki tekstit.",
      "Valitse jokaiseen kysymykseen yksi vastaus.",
      "Aikaa on 55 minuuttia.",
      "Saat oikeiden vastausten määrän. Siitä ei lasketa YKI-tasoa.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: ykiReadingParts } },
  },
  {
    id: "mock-writing-en-ielts",
    skill: "writing",
    language: "en",
    variant: "ielts",
    title: "Full unofficial IELTS-style writing",
    minutes: 60,
    scopeNote:
      "IELTS Academic Writing is two tasks and 60 minutes. This practice uses the same clock and two tasks. The rubric estimate is not an IELTS band. MatchMyStudy is not a British Council, IDP, or Cambridge exam.",
    instructions: [
      "Task 1 should describe the information in the prompt. A suggested length is 150 words.",
      "Task 2 should give your view with reasons. A suggested length is 250 words.",
      "The clock runs for 60 minutes for both tasks together.",
      "There is no band conversion.",
    ],
    availability: {
      status: "full_practice",
      body: {
        kind: "writing",
        prompts: [
          prompt(
            "mock-writing-en-ielts-t1",
            "Task 1",
            "The tool library recorded 220 loans and 9 late returns in October. All late returns were drills. Describe these figures for a reader who has not seen them, and say which number is larger. Do not invent a cause.",
            150,
            220
          ),
          prompt(
            "mock-writing-en-ielts-t2",
            "Task 2",
            "Some students think a campus should keep one library floor silent at all times. Others think students should choose their own noise level. Discuss both views and give your own opinion, with one concrete example.",
            250,
            320
          ),
        ],
      },
    },
  },
  {
    id: "mock-writing-en-toefl",
    skill: "writing",
    language: "en",
    variant: "toefl",
    title: "Full unofficial TOEFL-style writing",
    minutes: 29,
    scopeNote:
      "A TOEFL iBT writing section is two tasks in about 29 minutes and is scored by ETS raters or ETS systems. This practice uses that clock and a MatchMyStudy rubric. The estimate is not a TOEFL score. MatchMyStudy is not affiliated with ETS.",
    instructions: [
      "Task 1: read the short passage in the prompt and explain the author's point in your own words.",
      "Task 2: give your opinion and one specific reason.",
      "The clock runs for 29 minutes for both tasks.",
      "The result is a rubric estimate, not a TOEFL score.",
    ],
    availability: {
      status: "full_practice",
      body: {
        kind: "writing",
        prompts: [
          prompt(
            "mock-writing-en-toefl-t1",
            "Task 1",
            "Passage: Trees in open lawns grew wider crowns than trees of the same age in paved pits, because the soil under the pavement dried quickly. The author says soil volume is part of the cooling effect. Explain that point in your own words and mention both groups of trees.",
            120,
            200
          ),
          prompt(
            "mock-writing-en-toefl-t2",
            "Task 2",
            "Do you agree that a university should publish how many students use a quiet room, but never publish their names? Give your opinion and one specific reason.",
            120,
            200
          ),
        ],
      },
    },
  },
  {
    id: "mock-writing-en-pte",
    skill: "writing",
    language: "en",
    variant: "pte",
    title: "Full unofficial PTE-style writing",
    minutes: 50,
    scopeNote:
      "Pearson scores PTE writing with its own system. This practice has two writing tasks and a 50-minute clock. Partial credit is not used on the reading reorder item elsewhere, and this writing result is not a PTE score. MatchMyStudy is not affiliated with Pearson.",
    instructions: [
      "Task 1: summarise the notice in one paragraph.",
      "Task 2: write an essay with a clear opinion and one example.",
      "The clock runs for 50 minutes.",
      "There is no PTE score.",
    ],
    availability: {
      status: "full_practice",
      body: {
        kind: "writing",
        prompts: [
          prompt(
            "mock-writing-en-pte-t1",
            "Task 1",
            "Summarise this notice in your own words: Residents may cook until midnight. The extractor fan must stay on. Dishes left after midnight go to a labelled shelf that is cleared at 8. The duty team then washes anything unclaimed.",
            80,
            140
          ),
          prompt(
            "mock-writing-en-pte-t2",
            "Task 2",
            "Should a student residence set a midnight end to cooking? Give your view, one reason, and one example from shared living.",
            200,
            280
          ),
        ],
      },
    },
  },
  {
    id: "mock-writing-fi-yki",
    skill: "writing",
    language: "fi",
    variant: "yki",
    title: "Täysimittainen epävirallinen YKI-tyylinen kirjoittaminen",
    minutes: 50,
    scopeNote:
      "YKI-kirjoittamisen arvioi tutkinnon järjestäjä. Tässä on kaksi tehtävää ja 50 minuutin kello. Arvio on harjoitusarvio, ei YKI-tasoa eikä todistusta.",
    instructions: [
      "Tehtävä 1 on viesti.",
      "Tehtävä 2 on mielipide.",
      "Aikaa on 50 minuuttia yhteensä.",
      "Tuloksesta ei lasketa YKI-tasoa.",
    ],
    availability: {
      status: "full_practice",
      body: {
        kind: "writing",
        prompts: [
          prompt(
            "mock-writing-fi-yki-t1",
            "Tehtävä 1",
            "Kirjoita viesti opettajalle. Kerro, että myöhästyt laboratoriotunnilta, koska bussi lähtee vasta kello 9.05. Kerro yksi tapa, jolla kirität työn, ja kysy yksi tarkka kysymys raportista.",
            70,
            120,
            "fi"
          ),
          prompt(
            "mock-writing-fi-yki-t2",
            "Tehtävä 2",
            "Pitäisikö kampuskirjastossa olla yksi hiljainen kerros koko ajan? Perustele mielipiteesi yhdellä esimerkillä.",
            120,
            180,
            "fi"
          ),
        ],
      },
    },
  },
  {
    id: "mock-listening-en-ielts",
    skill: "listening",
    language: "en",
    variant: "ielts",
    title: "Full unofficial IELTS-style listening",
    minutes: 30,
    scopeNote:
      "An IELTS listening paper has four sections and 40 questions in about 30 minutes. This practice uses that length. The audio is your browser reading an original script, not an exam recording. The raw mark is not an IELTS band.",
    instructions: [
      "Play each section, then answer its questions.",
      "You may replay the browser voice.",
      "If you open the script, the result is marked as a script review.",
      "There is no band conversion.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: ieltsListeningParts } },
  },
  {
    id: "mock-listening-en-toefl",
    skill: "listening",
    language: "en",
    variant: "toefl",
    title: "Full unofficial TOEFL-style listening",
    minutes: 36,
    scopeNote: `${unofficial} This section has 28 questions and a 36-minute clock, in the range of a TOEFL iBT listening section. The browser voice is not an ETS recording, and the raw mark is not a TOEFL score.`,
    instructions: [
      "Listen to each part before you answer it.",
      "The clock runs for 36 minutes.",
      "Opening the script marks the result as a script review.",
      "There is no scaled TOEFL score.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: toeflListeningParts } },
  },
  {
    id: "mock-listening-en-pte",
    skill: "listening",
    language: "en",
    variant: "pte",
    title: "Full unofficial PTE-style listening",
    minutes: 30,
    scopeNote:
      "This is a 30-minute unofficial listening practice with 17 multiple-choice questions. It does not include Pearson item types that need studio audio aligned word by word, such as highlight incorrect words. Partial credit is not used. The result is not a PTE score, and MatchMyStudy is not affiliated with Pearson.",
    instructions: [
      "Play the browser voice for each part.",
      "Choose one answer for each question.",
      "The clock runs for 30 minutes.",
      "There is no PTE score.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: pteListeningParts } },
  },
  {
    id: "mock-listening-fi-yki",
    skill: "listening",
    language: "fi",
    variant: "yki",
    title: "Täysimittainen epävirallinen YKI-tyylinen kuullun ymmärtäminen",
    minutes: 30,
    scopeNote:
      "Tässä on kolme osiota, 15 kysymystä ja 30 minuutin kello. Ääni on selaimen ääni, ei tutkinnon äänite. Tulos on raakapistemäärä, ei YKI-tasoa.",
    instructions: [
      "Kuuntele jokainen osio.",
      "Valitse yksi vastaus.",
      "Aikaa on 30 minuuttia.",
      "Siitä ei lasketa YKI-tasoa.",
    ],
    availability: { status: "full_practice", body: { kind: "objective", parts: ykiListeningParts } },
  },
];
