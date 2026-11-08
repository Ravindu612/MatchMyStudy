import type { ListeningTask } from "../types";
import { choices } from "./questions";

export const listeningTasks: ListeningTask[] = [
  {
    id: "listening-en-1",
    skill: "listening",
    language: "en",
    access: "free",
    title: "At the library desk",
    audioLang: "en-GB",
    speakerNote: "One staff member speaking at a service desk.",
    script:
      "The quiet reading room on level three closes tonight at 7, not at 9, because the lights are being repaired. You can still use level one until 10. If you reserved a locker for this evening, collect the key before 6:30. After that the desk keeps the key until tomorrow morning. Group tables are only on level one tonight.",
    questions: [
      choices(
        "listening-en-1-q1",
        "When does the quiet reading room close tonight?",
        [
          { id: "a", text: "At 7" },
          { id: "b", text: "At 9" },
          { id: "c", text: "At 10" },
          { id: "d", text: "At 6:30" },
        ],
        "a",
        "The speaker says level three closes tonight at 7, not at 9."
      ),
      choices(
        "listening-en-1-q2",
        "Until when can students use level one?",
        [
          { id: "a", text: "Until 6:30" },
          { id: "b", text: "Until 7" },
          { id: "c", text: "Until 10" },
          { id: "d", text: "Until tomorrow morning" },
        ],
        "c",
        "Level one stays open until 10."
      ),
      choices(
        "listening-en-1-q3",
        "What happens if a locker key is not collected before 6:30?",
        [
          { id: "a", text: "The locker is given to a group table." },
          { id: "b", text: "The desk keeps the key until tomorrow morning." },
          { id: "c", text: "The student can collect it on level three at 9." },
          { id: "d", text: "The reservation moves to level one automatically." },
        ],
        "b",
        "After 6:30 the desk keeps the key until tomorrow morning."
      ),
    ],
  },
  {
    id: "listening-en-2",
    skill: "listening",
    language: "en",
    access: "free",
    title: "Splitting the presentation",
    audioLang: "en-GB",
    speakerNote: "Two students, Leila and Owen.",
    script:
      "Leila: Can we meet in the seminar room at 4? Owen: I have a lab until 4:30. The cafe at 5 is better. Leila: Fine. I will introduce the survey, and you explain the chart. Owen: I will send the chart tonight. Please bring two printed copies, because the room has no projector on Friday.",
    questions: [
      choices(
        "listening-en-2-q1",
        "What time do they agree to meet?",
        [
          { id: "a", text: "At 4" },
          { id: "b", text: "At 4:30" },
          { id: "c", text: "At 5" },
          { id: "d", text: "On Friday morning" },
        ],
        "c",
        "Owen suggests the cafe at 5, and Leila agrees."
      ),
      choices(
        "listening-en-2-q2",
        "What will Leila do in the presentation?",
        [
          { id: "a", text: "Explain the chart" },
          { id: "b", text: "Introduce the survey" },
          { id: "c", text: "Print the copies" },
          { id: "d", text: "Fix the projector" },
        ],
        "b",
        "Leila says she will introduce the survey. Owen will explain the chart."
      ),
      choices(
        "listening-en-2-q3",
        "Why does Owen ask for printed copies?",
        [
          { id: "a", text: "The cafe will not allow a laptop." },
          { id: "b", text: "The seminar room has no projector on Friday." },
          { id: "c", text: "The chart is too large to send." },
          { id: "d", text: "Leila cannot stay until 5." },
        ],
        "b",
        "He asks for two printed copies because the room has no projector on Friday."
      ),
    ],
  },
  {
    id: "listening-en-3",
    skill: "listening",
    language: "en",
    access: "free",
    title: "How to start a seminar paper",
    audioLang: "en-GB",
    speakerNote: "A short study-skills talk by one tutor.",
    script:
      "When you start a seminar paper, read the abstract and the conclusion before the middle. Write one sentence that says what the author claims. Then check the first table or figure and ask whether it supports that sentence. Do not copy the abstract. Bring the sentence and one question to class. If you cannot find the claim in ten minutes, mark the page and ask the tutor instead of reading the whole paper twice.",
    questions: [
      choices(
        "listening-en-3-q1",
        "What should a student read before the middle of the paper?",
        [
          { id: "a", text: "The abstract and the conclusion" },
          { id: "b", text: "Only the first table" },
          { id: "c", text: "The whole paper twice" },
          { id: "d", text: "The tutor's notes" },
        ],
        "a",
        "The tutor says to read the abstract and the conclusion before the middle."
      ),
      choices(
        "listening-en-3-q2",
        "What should the student write?",
        [
          { id: "a", text: "A copy of the abstract" },
          { id: "b", text: "One sentence that says what the author claims" },
          { id: "c", text: "A new table" },
          { id: "d", text: "Two questions and no sentence" },
        ],
        "b",
        "The student writes one sentence about the author's claim and does not copy the abstract."
      ),
      choices(
        "listening-en-3-q3",
        "What should the student do if the claim is still unclear after ten minutes?",
        [
          { id: "a", text: "Read the whole paper twice" },
          { id: "b", text: "Skip class" },
          { id: "c", text: "Mark the page and ask the tutor" },
          { id: "d", text: "Replace the claim with the conclusion word for word" },
        ],
        "c",
        "The tutor says to mark the page and ask, instead of reading the whole paper twice."
      ),
    ],
  },
  {
    id: "listening-en-4",
    skill: "listening",
    language: "en",
    access: "paid",
    title: "A call from the housing office",
    audioLang: "en-GB",
    speakerNote: "One housing officer leaving a phone message.",
    script:
      "Hello, this is the housing office about room B12. The heater will be replaced on Thursday between 9 and 11. You do not need to be in the room, but please move boxes away from the window. The spare key is at the porter's desk, not at reception. If Thursday is not possible, reply to this message before Wednesday at noon and we will offer the following Monday.",
    questions: [
      choices(
        "listening-en-4-q1",
        "When will the heater be replaced?",
        [
          { id: "a", text: "Thursday between 9 and 11" },
          { id: "b", text: "Wednesday at noon" },
          { id: "c", text: "Monday morning" },
          { id: "d", text: "The message does not give a time." },
        ],
        "a",
        "The heater will be replaced on Thursday between 9 and 11."
      ),
      choices(
        "listening-en-4-q2",
        "What should the student move?",
        [
          { id: "a", text: "The spare key" },
          { id: "b", text: "Boxes away from the window" },
          { id: "c", text: "The reception desk" },
          { id: "d", text: "Nothing, because the room must stay as it is" },
        ],
        "b",
        "The student should move boxes away from the window."
      ),
      choices(
        "listening-en-4-q3",
        "Where is the spare key?",
        [
          { id: "a", text: "At reception" },
          { id: "b", text: "In room B12" },
          { id: "c", text: "At the porter's desk" },
          { id: "d", text: "It will be sent on Monday" },
        ],
        "c",
        "The spare key is at the porter's desk, not at reception."
      ),
    ],
  },
  {
    id: "listening-fi-1",
    skill: "listening",
    language: "fi",
    access: "free",
    title: "Bussikuulutus",
    audioLang: "fi-FI",
    speakerNote: "Yksi kuulutus bussiterminaalissa.",
    script:
      "Huomio matkustajat. Linja 52 kampukselle lähtee laiturilta neljä, ei laiturilta kaksi. Bussi on tänään kymmenen minuuttia myöhässä lumen vuoksi. Seuraava bussi lähtee kello 8.40. Keskustaan jatkuva linja 18 lähtee laiturilta yksi ja on aikataulussa.",
    questions: [
      choices(
        "listening-fi-1-q1",
        "Miltä laiturilta linja 52 lähtee?",
        [
          { id: "a", text: "Laiturilta kaksi" },
          { id: "b", text: "Laiturilta neljä" },
          { id: "c", text: "Laiturilta yksi" },
          { id: "d", text: "Kuulutus ei kerro laituria." },
        ],
        "b",
        "Linja 52 lähtee laiturilta neljä, ei laiturilta kaksi."
      ),
      choices(
        "listening-fi-1-q2",
        "Miksi bussi on myöhässä?",
        [
          { id: "a", text: "Lumen vuoksi" },
          { id: "b", text: "Linja 18 on täynnä." },
          { id: "c", text: "Kello on 8.40." },
          { id: "d", text: "Kuljettaja vaihtaa laituria yksi." },
        ],
        "a",
        "Bussi on kymmenen minuuttia myöhässä lumen vuoksi."
      ),
      choices(
        "listening-fi-1-q3",
        "Mihin aikaan seuraava bussi lähtee?",
        [
          { id: "a", text: "Kello 8.40" },
          { id: "b", text: "Kello 10" },
          { id: "c", text: "Kello 18" },
          { id: "d", text: "Se on jo lähtenyt laiturilta kaksi." },
        ],
        "a",
        "Seuraava bussi lähtee kello 8.40."
      ),
    ],
  },
  {
    id: "listening-fi-2",
    skill: "listening",
    language: "fi",
    access: "free",
    title: "Ryhmätyön sopiminen",
    audioLang: "fi-FI",
    speakerNote: "Kaksi opiskelijaa, Aino ja Matti.",
    script:
      "Aino: Voidaanko tavata kirjastossa huomenna kello 14? Matti: Kello 14 minulla on luento. Sopisko kello 16? Aino: Sopii. Tuon artikkelin, ja sinä teet diat. Matti: Selvä. Lähetän diat sinulle illalla.",
    questions: [
      choices(
        "listening-fi-2-q1",
        "Mihin aikaan Aino ja Matti tapaavat?",
        [
          { id: "a", text: "Kello 14" },
          { id: "b", text: "Kello 16" },
          { id: "c", text: "Illalla kirjastossa" },
          { id: "d", text: "He eivät sovi aikaa." },
        ],
        "b",
        "Matti ehdottaa kello 16, ja Aino vastaa, että sopii."
      ),
      choices(
        "listening-fi-2-q2",
        "Mitä Aino tuo tapaamiseen?",
        [
          { id: "a", text: "Diat" },
          { id: "b", text: "Artikkelin" },
          { id: "c", text: "Luenon muistiinpanot" },
          { id: "d", text: "Tietokoneen kirjastosta" },
        ],
        "b",
        "Aino sanoo tuovansa artikkelin. Matti tekee diat."
      ),
      choices(
        "listening-fi-2-q3",
        "Milloin Matti lähettää diat?",
        [
          { id: "a", text: "Huomenna kello 14" },
          { id: "b", text: "Illalla" },
          { id: "c", text: "Kirjastossa tapaamisen aikana" },
          { id: "d", text: "Hän ei lähetä niitä." },
        ],
        "b",
        "Matti sanoo lähettävänsä diat illalla."
      ),
    ],
  },
  {
    id: "listening-fi-3",
    skill: "listening",
    language: "fi",
    access: "free",
    title: "Sade ja ulkoliikunta",
    audioLang: "fi-FI",
    speakerNote: "Lyhyt kampuskuulutus.",
    script:
      "Kampusradio muistuttaa, että iltapäivällä tuulee kovaa ja sadetta tulee lännestä. Ulkoliikunta kentällä peruutetaan kello 15. Sisäsalin vuoro säilyy. Opiskelijat voivat hakea sateenvarjon infopisteestä, jos he palauttavat sen saman päivän aikana.",
    questions: [
      choices(
        "listening-fi-3-q1",
        "Miksi ulkoliikunta peruutetaan?",
        [
          { id: "a", text: "Sisäsali on kiinni." },
          { id: "b", text: "Iltapäivällä tuulee kovaa ja sataa." },
          { id: "c", text: "Infopiste sulkeutuu kello 15." },
          { id: "d", text: "Sateenvarjot ovat loppuneet." },
        ],
        "b",
        "Kuulutus kertoo kovasta tuulesta ja sateesta, ja ulkoliikunta peruutetaan kello 15."
      ),
      choices(
        "listening-fi-3-q2",
        "Mitä tapahtuu sisäsalin vuorolle?",
        [
          { id: "a", text: "Se peruutetaan." },
          { id: "b", text: "Se siirtyy kentälle." },
          { id: "c", text: "Se säilyy." },
          { id: "d", text: "Kuulutus ei mainitse sisäsalia." },
        ],
        "c",
        "Sisäsalin vuoro säilyy."
      ),
      choices(
        "listening-fi-3-q3",
        "Milloin sateenvarjo pitää palauttaa?",
        [
          { id: "a", text: "Saman päivän aikana" },
          { id: "b", text: "Seuraavana aamuna" },
          { id: "c", text: "Kello 15 mennessä, jos sataa" },
          { id: "d", text: "Sitä ei tarvitse palauttaa." },
        ],
        "a",
        "Sateenvarjo haetaan infopisteestä ja palautetaan saman päivän aikana."
      ),
    ],
  },
  {
    id: "listening-fi-4",
    skill: "listening",
    language: "fi",
    access: "paid",
    title: "Lähteiden työpaja",
    audioLang: "fi-FI",
    speakerNote: "Kirjaston lyhyt tiedotus.",
    script:
      "Huomenna kello 9 kirjaston alakerroksessa alkaa lyhyt työpaja lähteiden merkitsemisestä. Paikkoja on kaksitoista. Ilmoittautuminen ei ole pakollinen, mutta myöhässä tuleva ei ehkä mahdu sisään. Työpaja kestää 45 minuuttia, ja sen jälkeen on kahvi.",
    questions: [
      choices(
        "listening-fi-4-q1",
        "Mihin aikaan työpaja alkaa?",
        [
          { id: "a", text: "Kello 9" },
          { id: "b", text: "Kello 12" },
          { id: "c", text: "Kello 45" },
          { id: "d", text: "Kahvin jälkeen" },
        ],
        "a",
        "Työpaja alkaa huomenna kello 9."
      ),
      choices(
        "listening-fi-4-q2",
        "Kuinka monta paikkaa työpajassa on?",
        [
          { id: "a", text: "Yhdeksän" },
          { id: "b", text: "Kaksitoista" },
          { id: "c", text: "Neljäkymmentäviisi" },
          { id: "d", text: "Paikkoja on rajattomasti." },
        ],
        "b",
        "Paikkoja on kaksitoista."
      ),
      choices(
        "listening-fi-4-q3",
        "Kauanko työpaja kestää?",
        [
          { id: "a", text: "12 minuuttia" },
          { id: "b", text: "Koko aamupäivän" },
          { id: "c", text: "45 minuuttia" },
          { id: "d", text: "Kunnes kahvi loppuu" },
        ],
        "c",
        "Työpaja kestää 45 minuuttia, ja sen jälkeen on kahvi."
      ),
    ],
  },
];
