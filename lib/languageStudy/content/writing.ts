import type { WritingTask } from "../types";

export const writingTasks: WritingTask[] = [
  {
    id: "writing-en-1",
    skill: "writing",
    language: "en",
    access: "free",
    title: "Email after a missed seminar",
    promptLang: "en",
    suggestedWords: { min: 80, max: 140 },
    prompt:
      "Write an email to your seminar tutor. You missed yesterday's seminar. Say why you were away, explain one thing you will do to catch up, and ask one specific question about the assignment. Use a greeting and a closing.",
  },
  {
    id: "writing-en-2",
    skill: "writing",
    language: "en",
    access: "free",
    title: "A silent floor in the library",
    promptLang: "en",
    suggestedWords: { min: 120, max: 180 },
    prompt:
      "Should a university library keep one floor silent at all times? Give your view and support it with one clear reason and one concrete example from study or daily life.",
  },
  {
    id: "writing-en-3",
    skill: "writing",
    language: "en",
    access: "free",
    title: "A study habit that helps",
    promptLang: "en",
    suggestedWords: { min: 100, max: 160 },
    prompt:
      "Describe one study habit that helps you finish difficult reading. Say when you use it, what you do, and why it helps. Write for a classmate who has not tried it.",
  },
  {
    id: "writing-en-4",
    skill: "writing",
    language: "en",
    access: "paid",
    title: "Preparing alone or with a classmate",
    promptLang: "en",
    suggestedWords: { min: 140, max: 200 },
    prompt:
      "Compare preparing for a seminar by reading alone with preparing by talking to a classmate. Say which you prefer for a subject you already know well, and give two differences that matter.",
  },
  {
    id: "writing-fi-1",
    skill: "writing",
    language: "fi",
    access: "free",
    title: "Viesti myöhästymisestä",
    promptLang: "fi",
    suggestedWords: { min: 40, max: 80 },
    prompt:
      "Kirjoita viesti opettajalle. Kerro, että myöhästyt huomisesta tunnista. Kerro lyhyesti syy, ja kerro, mihin aikaan saavut. Päätä viesti kohteliaasti.",
  },
  {
    id: "writing-fi-2",
    skill: "writing",
    language: "fi",
    access: "free",
    title: "Lisää pyöräpaikkoja",
    promptLang: "fi",
    suggestedWords: { min: 50, max: 90 },
    prompt:
      "Pitäisikö kampuksella olla lisää pyöräpaikkoja? Kirjoita mielipiteesi ja anna yksi perustelu. Voit käyttää esimerkin omasta päivästäsi.",
  },
  {
    id: "writing-fi-3",
    skill: "writing",
    language: "fi",
    access: "free",
    title: "Viikon ruokaostokset",
    promptLang: "fi",
    suggestedWords: { min: 40, max: 80 },
    prompt:
      "Kirjoita kaverille, mitä ostit ruokakaupasta tällä viikolla ja mitä aiot kokata. Mainitse ainakin kaksi tuotetta ja yksi ruoka.",
  },
  {
    id: "writing-fi-4",
    skill: "writing",
    language: "fi",
    access: "paid",
    title: "Opiskelupäivä",
    promptLang: "fi",
    suggestedWords: { min: 60, max: 100 },
    prompt:
      "Kuvaile tavallinen opiskelupäiväsi. Kerro, milloin päivä alkaa, missä opiskelet, ja mikä päivässä on helppoa tai vaikeaa. Kirjoita niin, että uusi opiskelija ymmärtää päiväsi.",
  },
];
