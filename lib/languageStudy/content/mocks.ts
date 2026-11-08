import type { MockTest } from "../types";
import { choices, reorder } from "./questions";

const unavailableToeflWriting =
  "TOEFL writing is scored by human raters or ETS's own automated scoring. MatchMyStudy cannot produce that score, so a TOEFL-style writing mock is not offered.";

const unavailablePteWriting =
  "PTE writing is scored by Pearson's automated systems. MatchMyStudy cannot reproduce that score, so a PTE-style writing mock is not offered.";

const unavailablePteListening =
  "The distinctive PTE listening tasks need audio aligned to an exact script, including items such as highlight incorrect words. A browser voice cannot support that format honestly, so a PTE-style listening mock is not offered.";

export const mockTests: MockTest[] = [
  {
    id: "mock-reading-en-ielts",
    skill: "reading",
    language: "en",
    variant: "ielts",
    title: "Short unofficial IELTS-style reading",
    minutes: 12,
    scopeNote:
      "IELTS Academic Reading is normally three long passages, 40 questions, and 60 minutes. This practice has one short passage and four questions. The raw mark is not an IELTS band, and MatchMyStudy is not a British Council, IDP, or Cambridge exam.",
    instructions: [
      "Read the passage and answer four questions.",
      "True means the passage states it. False means the passage states the opposite. Not given means the passage does not say.",
      "The clock runs for 12 minutes and then the test closes without a score if you have not submitted.",
      "You receive a raw mark only. There is no band conversion.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        passageLang: "en",
        passage:
          "The campus repair cafe opens on the first Saturday of each month in the engineering atrium. Students and neighbours bring small broken items, and volunteer fixers help them repair the item rather than replace it. The cafe does not accept televisions or anything that uses gas. Visitors take a numbered ticket at the door. Tickets 1 to 20 are seen before noon, and later tickets are seen only if a fixer is free. Tools stay on the tables. A visitor may borrow a screwdriver for use inside the atrium, but the tool cannot leave the building. Last month the cafe repaired 34 items and declined 6 because the parts were missing. The organisers publish the count on the student union page the following Monday. They do not publish the names of the visitors.",
        questions: [
          choices(
            "mock-reading-en-ielts-q1",
            "What is the main purpose of the repair cafe?",
            [
              { id: "a", text: "To sell replacement appliances" },
              { id: "b", text: "To help people repair small items" },
              { id: "c", text: "To teach a credited engineering course" },
              { id: "d", text: "To collect televisions for recycling" },
            ],
            "b",
            "Volunteer fixers help people repair an item rather than replace it."
          ),
          choices(
            "mock-reading-en-ielts-q2",
            "Which items will the cafe not accept?",
            [
              { id: "a", text: "Small items with a numbered ticket" },
              { id: "b", text: "Televisions and anything that uses gas" },
              { id: "c", text: "Items that need a screwdriver" },
              { id: "d", text: "Items brought by neighbours" },
            ],
            "b",
            "The cafe does not accept televisions or anything that uses gas."
          ),
          choices(
            "mock-reading-en-ielts-q3",
            "The cafe repaired more items than it declined last month.",
            [
              { id: "t", text: "True" },
              { id: "f", text: "False" },
              { id: "ng", text: "Not given" },
            ],
            "t",
            "It repaired 34 items and declined 6, so more were repaired than declined."
          ),
          choices(
            "mock-reading-en-ielts-q4",
            "Most visitors come from the engineering faculty.",
            [
              { id: "t", text: "True" },
              { id: "f", text: "False" },
              { id: "ng", text: "Not given" },
            ],
            "ng",
            "The passage says students and neighbours visit. It does not say which faculty they come from."
          ),
        ],
      },
    },
  },
  {
    id: "mock-reading-en-toefl",
    skill: "reading",
    language: "en",
    variant: "toefl",
    title: "Short unofficial TOEFL-style reading",
    minutes: 11,
    scopeNote:
      "A full TOEFL iBT reading section is longer and is reported on a 0 to 30 scale. This practice is one short academic passage and four questions. The raw mark is not converted to a TOEFL score. MatchMyStudy is not affiliated with ETS.",
    instructions: [
      "Read the passage once, then answer the questions in order.",
      "One question asks about a word as it is used in the passage.",
      "The clock runs for 11 minutes.",
      "The result is the number of matching answers. It is not a scaled TOEFL score.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        passageLang: "en",
        passage:
          "City trees are often planted to cool streets, but the benefit depends on where the roots can drink. In a study of one campus avenue, trees in open lawns used more water and grew wider crowns than trees in paved pits of the same age. The wider crowns shaded the pavement for more of the afternoon. The paved trees were not dying. They were smaller because the soil under the pavement dried quickly after rain. The author argues that planting plans should treat soil volume as part of the cooling effect, not as a separate gardening detail. A tree with little soil may survive and still fail at the job the planners gave it.",
        questions: [
          choices(
            "mock-reading-en-toefl-q1",
            "What did the study compare?",
            [
              { id: "a", text: "Trees of different ages on two campuses" },
              { id: "b", text: "Trees in open lawns and trees in paved pits" },
              { id: "c", text: "Afternoon shade and morning shade only" },
              { id: "d", text: "Dying trees and newly planted trees" },
            ],
            "b",
            "The study compared lawn trees with paved-pit trees of the same age."
          ),
          choices(
            "mock-reading-en-toefl-q2",
            "The word crowns in the passage is closest in meaning to",
            [
              { id: "a", text: "the leafy tops of the trees" },
              { id: "b", text: "the metal covers of the pits" },
              { id: "c", text: "the awards given to the planners" },
              { id: "d", text: "the amount of water in the soil" },
            ],
            "a",
            "Wider crowns are what shaded the pavement, so the word refers to the trees' leafy tops."
          ),
          choices(
            "mock-reading-en-toefl-q3",
            "What can be inferred about the paved trees?",
            [
              { id: "a", text: "They were older than the lawn trees." },
              { id: "b", text: "They failed to survive the study." },
              { id: "c", text: "Limited soil water helps explain their smaller size." },
              { id: "d", text: "They shaded the pavement longer than the lawn trees." },
            ],
            "c",
            "They were smaller because the soil under the pavement dried quickly. They were not dying."
          ),
          choices(
            "mock-reading-en-toefl-q4",
            "Why does the author mention the job the planners gave the tree?",
            [
              { id: "a", text: "To show that survival alone may not meet the cooling goal" },
              { id: "b", text: "To recommend removing trees from paved streets" },
              { id: "c", text: "To compare two gardening prizes" },
              { id: "d", text: "To prove that lawns use no water" },
            ],
            "a",
            "The closing point is that a surviving tree can still fail at the cooling job."
          ),
        ],
      },
    },
  },
  {
    id: "mock-reading-en-pte",
    skill: "reading",
    language: "en",
    variant: "pte",
    title: "Short unofficial PTE-style reading",
    minutes: 10,
    scopeNote:
      "PTE Academic reading is longer, uses partial credit on some items, and produces an automated score. This practice has two single-answer questions and one reorder item. The reorder item scores a point only when the whole order matches. Partial credit is not used. The result is not a PTE score, and MatchMyStudy is not affiliated with Pearson.",
    instructions: [
      "Answer the multiple-choice questions from the passage.",
      "Put the three sentences into the only order that makes a coherent paragraph.",
      "The reorder item is right only if every sentence is in the keyed order.",
      "The clock runs for 10 minutes. There is no PTE score.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        passageLang: "en",
        passage:
          "The night kitchen in the student residence heats up at 11, when seminars end. Residents may cook until midnight, and the extractor fan must stay on. Dishes left in the sink after midnight are moved to a labelled shelf. The shelf is cleared at 8 the next morning, and unclaimed dishes are washed by the duty team.",
        questions: [
          choices(
            "mock-reading-en-pte-q1",
            "Until what time may residents cook?",
            [
              { id: "a", text: "Until 11" },
              { id: "b", text: "Until midnight" },
              { id: "c", text: "Until 8 in the morning" },
              { id: "d", text: "Only while the duty team is there" },
            ],
            "b",
            "Residents may cook until midnight."
          ),
          choices(
            "mock-reading-en-pte-q2",
            "What happens to dishes left in the sink after midnight?",
            [
              { id: "a", text: "They are thrown away at once." },
              { id: "b", text: "They are moved to a labelled shelf." },
              { id: "c", text: "The extractor fan is switched off." },
              { id: "d", text: "Residents may keep cooking." },
            ],
            "b",
            "Dishes left after midnight are moved to a labelled shelf."
          ),
          reorder(
            "mock-reading-en-pte-q3",
            "Put the sentences into one clear order.",
            [
              { id: "s1", text: "The duty team then washes anything still unclaimed." },
              { id: "s2", text: "Residents finish cooking at midnight and leave some pans in the sink." },
              { id: "s3", text: "Staff move those pans to a labelled shelf that is cleared at 8." },
            ],
            ["s1", "s3", "s2"],
            ["s2", "s3", "s1"],
            "Cooking ends at midnight, the pans are moved and the shelf is cleared at 8, and then the duty team washes what remains."
          ),
        ],
      },
    },
  },
  {
    id: "mock-reading-fi-yki",
    skill: "reading",
    language: "fi",
    variant: "yki",
    title: "Lyhyt epävirallinen YKI-tyylinen luetun ymmärtäminen",
    minutes: 10,
    scopeNote:
      "Yleiset kielitutkinnot (YKI) järjestää Opetushallitus. Täysi koe ja taso 1–6 eivät ole tämä harjoitus. Tässä on kaksi lyhyttä tekstiä ja neljä kysymystä. Tulos on raakapistemäärä, ei YKI-tasoa eikä todistusta.",
    instructions: [
      "Lue molemmat tekstit.",
      "Valitse jokaiseen kysymykseen yksi vastaus.",
      "Aikaa on 10 minuuttia.",
      "Saat oikeiden vastausten määrän. Siitä ei lasketa YKI-tasoa.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        passageLang: "fi",
        passage:
          "Ilmoitus liikuntakeskuksen ovessa: Sulkapallovuoro peruttu torstaina kello 18, koska sali on varattu turnaukselle. Korvaava vuoro on perjantaina kello 17 samassa salissa. Uusi varaus ei ole tarpeen, jos nimi on jo listalla.\n\nViesti opettajalta: Palauta essee perjantaihin kello 12 mennessä verkkoon. Paperiversiota ei tarvita. Jos tiedosto ei aukea, lähetä se sähköpostilla ennen samaa kellonaikaa.",
        questions: [
          choices(
            "mock-reading-fi-yki-q1",
            "Miksi sulkapallovuoro on peruttu?",
            [
              { id: "a", text: "Opettaja siirtää esseen." },
              { id: "b", text: "Sali on varattu turnaukselle." },
              { id: "c", text: "Lista on täynnä perjantaina." },
              { id: "d", text: "Vuoro alkaa kello 17." },
            ],
            "b",
            "Torstain vuoro on peruttu, koska sali on varattu turnaukselle."
          ),
          choices(
            "mock-reading-fi-yki-q2",
            "Pitääkö opiskelijan tehdä uusi varaus, jos nimi on jo listalla?",
            [
              { id: "a", text: "Kyllä, perjantaihin kello 12 mennessä" },
              { id: "b", text: "Ei" },
              { id: "c", text: "Kyllä, sähköpostilla" },
              { id: "d", text: "Teksti ei kerro." },
            ],
            "b",
            "Uusi varaus ei ole tarpeen, jos nimi on jo listalla."
          ),
          choices(
            "mock-reading-fi-yki-q3",
            "Milloin essee pitää palauttaa?",
            [
              { id: "a", text: "Torstaina kello 18" },
              { id: "b", text: "Perjantaina kello 17" },
              { id: "c", text: "Perjantaihin kello 12 mennessä" },
              { id: "d", text: "Kun paperiversio on valmis" },
            ],
            "c",
            "Essee palautetaan perjantaihin kello 12 mennessä."
          ),
          choices(
            "mock-reading-fi-yki-q4",
            "Mitä opiskelija tekee, jos tiedosto ei aukea?",
            [
              { id: "a", text: "Tuo paperiversion saliin." },
              { id: "b", text: "Lähettää sen sähköpostilla ennen samaa kellonaikaa." },
              { id: "c", text: "Odota seuraavaa sulkapallovuoroa." },
              { id: "d", text: "Tekee uuden varauksen." },
            ],
            "b",
            "Jos tiedosto ei aukea, sen voi lähettää sähköpostilla ennen samaa kellonaikaa."
          ),
        ],
      },
    },
  },
  {
    id: "mock-writing-en-ielts",
    skill: "writing",
    language: "en",
    variant: "ielts",
    title: "Short unofficial IELTS-style writing",
    minutes: 20,
    scopeNote:
      "IELTS Writing Task 2 is normally about 40 minutes and is marked by examiners on a band scale. This is a shorter opinion task with a 20-minute clock. The checklist afterwards is your own review. It is not an IELTS band and it is not an examiner's mark.",
    instructions: [
      "Read the task and write a direct response.",
      "The suggested length is a guide, not a score.",
      "Before you submit, mark the four review statements yourself.",
      "The clock runs for 20 minutes. There is no band score.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "writing",
        promptLang: "en",
        suggestedWords: { min: 180, max: 250 },
        prompt:
          "Some university students prefer to prepare alone. Others learn more when they prepare with a group. Discuss both ways and give your own opinion. This is a short unofficial practice, not IELTS Writing Task 2 and not a band score.",
      },
    },
  },
  {
    id: "mock-writing-en-toefl",
    skill: "writing",
    language: "en",
    variant: "toefl",
    title: "TOEFL-style writing",
    minutes: 0,
    scopeNote: unavailableToeflWriting,
    instructions: [],
    availability: { status: "unavailable", reason: unavailableToeflWriting },
  },
  {
    id: "mock-writing-en-pte",
    skill: "writing",
    language: "en",
    variant: "pte",
    title: "PTE-style writing",
    minutes: 0,
    scopeNote: unavailablePteWriting,
    instructions: [],
    availability: { status: "unavailable", reason: unavailablePteWriting },
  },
  {
    id: "mock-writing-fi-yki",
    skill: "writing",
    language: "fi",
    variant: "yki",
    title: "Lyhyt epävirallinen YKI-tyylinen kirjoittaminen",
    minutes: 15,
    scopeNote:
      "YKI-kirjoittamisessa on useita tehtäviä, ja tason antaa koulutettu arvioija. Tässä on yksi lyhyt viestitehtävä ja 15 minuutin kello. Itsearvio ei ole YKI-taso eikä todistus.",
    instructions: [
      "Kirjoita viesti tehtävän mukaan.",
      "Sanamäärä on ohje, ei arvosana.",
      "Merkitse lopuksi neljä itsearvioinnin kohtaa.",
      "Aikaa on 15 minuuttia. Tulos ei ole YKI-taso.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "writing",
        promptLang: "fi",
        suggestedWords: { min: 40, max: 80 },
        prompt:
          "Kirjoita viesti kurssikaverille. Ehdota yhteistä lukuaikaa kirjastossa ensi viikolla. Kerro päivä, kellonaika ja yksi syy, miksi se aika sopii sinulle.",
      },
    },
  },
  {
    id: "mock-listening-en-ielts",
    skill: "listening",
    language: "en",
    variant: "ielts",
    title: "Short unofficial IELTS-style listening",
    minutes: 8,
    scopeNote:
      "IELTS Listening is normally four sections and about 30 minutes, plus time to transfer answers. This is one short conversation in a browser voice, with four questions. The raw mark is not a band. MatchMyStudy is not an IELTS test centre.",
    instructions: [
      "Play the browser voice. You can replay it.",
      "The words are sent to your browser so it can speak them. This is not a studio recording and not a secured exam.",
      "Answer four questions. The clock runs for 8 minutes.",
      "The result checks your answers against the script. It is not an IELTS band.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        audioLang: "en-GB",
        speakerNote: "A student and a housing officer.",
        script:
          "Officer: You asked to move from room C4 to a quieter floor. Student: Yes, the courtyard door slams at night. Officer: Room D2 is free from Monday, and it faces the garden, not the door. The rent is the same. Student: Can I see it tomorrow at 2? Officer: The porter can show it at 2:15. Bring your resident card. If you want the room, sign the form before Friday at noon or it goes back on the list.",
        questions: [
          choices(
            "mock-listening-en-ielts-q1",
            "Why does the student want to move?",
            [
              { id: "a", text: "The rent is too high." },
              { id: "b", text: "The courtyard door slams at night." },
              { id: "c", text: "Room D2 has no garden." },
              { id: "d", text: "The porter lost the resident card." },
            ],
            "b",
            "The student says the courtyard door slams at night."
          ),
          choices(
            "mock-listening-en-ielts-q2",
            "Which room is offered?",
            [
              { id: "a", text: "Room C4" },
              { id: "b", text: "Room D2" },
              { id: "c", text: "A room on the courtyard door" },
              { id: "d", text: "No room is free." },
            ],
            "b",
            "The officer says room D2 is free from Monday."
          ),
          choices(
            "mock-listening-en-ielts-q3",
            "What time can the student see the room?",
            [
              { id: "a", text: "Tomorrow at 2" },
              { id: "b", text: "Tomorrow at 2:15" },
              { id: "c", text: "Friday at noon" },
              { id: "d", text: "Monday morning" },
            ],
            "b",
            "The student asks for 2, and the porter can show it at 2:15."
          ),
          choices(
            "mock-listening-en-ielts-q4",
            "What must the student do to keep the room?",
            [
              { id: "a", text: "Pay a higher rent" },
              { id: "b", text: "Sign the form before Friday at noon" },
              { id: "c", text: "Move on Monday without a form" },
              { id: "d", text: "Leave the resident card with the porter" },
            ],
            "b",
            "The student must sign the form before Friday at noon."
          ),
        ],
      },
    },
  },
  {
    id: "mock-listening-en-toefl",
    skill: "listening",
    language: "en",
    variant: "toefl",
    title: "Short unofficial TOEFL-style listening",
    minutes: 8,
    scopeNote:
      "A full TOEFL listening section uses several campus conversations and lectures and a scaled score. This is one short original lecture in a browser voice. The raw mark is not a TOEFL score. MatchMyStudy is not affiliated with ETS.",
    instructions: [
      "Play the short lecture. You can replay the browser voice.",
      "This is text-to-speech, not a studio recording.",
      "Answer four questions in 8 minutes.",
      "The result is an answer check, not a scaled TOEFL score.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        audioLang: "en-US",
        speakerNote: "A short geography lecture.",
        script:
          "Glacier ice looks still, but it moves. Snow piles up in the cold upper part of the glacier, and the weight presses the older snow into ice. That ice then creeps downhill. In the lower part, melting can be faster than the new ice arriving, so the front retreats even while the ice itself is still flowing forward. A retreating glacier is not a glacier that has started to slide backward. Researchers measure the movement with stakes drilled into the ice and checked again months later.",
        questions: [
          choices(
            "mock-listening-en-toefl-q1",
            "What turns older snow into ice?",
            [
              { id: "a", text: "Stakes drilled into the ice" },
              { id: "b", text: "The weight of snow piling up" },
              { id: "c", text: "Melting at the front" },
              { id: "d", text: "The glacier sliding backward" },
            ],
            "b",
            "The weight of the snow presses older snow into ice."
          ),
          choices(
            "mock-listening-en-toefl-q2",
            "What can happen at the lower part of the glacier?",
            [
              { id: "a", text: "Melting can be faster than the new ice arriving, so the front retreats." },
              { id: "b", text: "The ice starts to flow back up the hill." },
              { id: "c", text: "Snow stops falling for months." },
              { id: "d", text: "Researchers move the glacier with stakes." },
            ],
            "a",
            "The front can retreat when melting is faster than the arriving ice."
          ),
          choices(
            "mock-listening-en-toefl-q3",
            "What does a retreating glacier not mean?",
            [
              { id: "a", text: "The front is moving back." },
              { id: "b", text: "The ice has started to slide backward." },
              { id: "c", text: "Melting can exceed the new ice." },
              { id: "d", text: "The ice can still flow forward." },
            ],
            "b",
            "The lecturer says a retreating glacier is not ice sliding backward."
          ),
          choices(
            "mock-listening-en-toefl-q4",
            "How do researchers measure the movement?",
            [
              { id: "a", text: "They watch the front from the lower valley only." },
              { id: "b", text: "They drill stakes into the ice and check them months later." },
              { id: "c", text: "They weigh the snow each afternoon." },
              { id: "d", text: "They stop the ice from creeping." },
            ],
            "b",
            "They use stakes drilled into the ice and check them months later."
          ),
        ],
      },
    },
  },
  {
    id: "mock-listening-en-pte",
    skill: "listening",
    language: "en",
    variant: "pte",
    title: "PTE-style listening",
    minutes: 0,
    scopeNote: unavailablePteListening,
    instructions: [],
    availability: { status: "unavailable", reason: unavailablePteListening },
  },
  {
    id: "mock-listening-fi-yki",
    skill: "listening",
    language: "fi",
    variant: "yki",
    title: "Lyhyt epävirallinen YKI-tyylinen kuullun ymmärtäminen",
    minutes: 8,
    scopeNote:
      "YKI-kuullun ymmärtäminen käyttää toimitettuja äänitteitä ja antaa tasoarvion. Tämä on kaksi lyhyttä alkuperäistä kuulutusta selaimen puheäänellä. Tulos on raakapistemäärä, ei YKI-taso eikä todistus.",
    instructions: [
      "Kuuntele molemmat kuulutukset selaimen puheäänellä. Voit toistaa ne.",
      "Kyseessä on tekstistä puheeksi -esikatselu, ei studioäänite.",
      "Vastaa neljään kysymykseen. Aikaa on 8 minuuttia.",
      "Tulos ei ole YKI-taso.",
    ],
    availability: {
      status: "short_unofficial",
      body: {
        kind: "objective",
        audioLang: "fi-FI",
        speakerNote: "Kaksi lyhyttä kuulutusta.",
        script:
          "Kirjaston kuulutus: Tänään klo 15 alakerroksen näyttely suljetaan tuntia aikaisemmin. Yläkerran lukusali on auki normaalisti klo 20 asti. Palautusluukku toimii myös illalla. Seuraava kuulutus, kampuksen kahvila: Lounas päättyy tänään klo 13.30, koska henkilökunnalla on kokous. Iltapäiväkahvi alkaa taas klo 14.",
        questions: [
          choices(
            "mock-listening-fi-yki-q1",
            "Milloin näyttely suljetaan tänään?",
            [
              { id: "a", text: "Kello 15" },
              { id: "b", text: "Kello 20" },
              { id: "c", text: "Kello 13.30" },
              { id: "d", text: "Kello 14" },
            ],
            "a",
            "Näyttely suljetaan tänään kello 15, tuntia aikaisemmin."
          ),
          choices(
            "mock-listening-fi-yki-q2",
            "Mihin asti yläkerran lukusali on auki?",
            [
              { id: "a", text: "Kello 15 asti" },
              { id: "b", text: "Kello 20 asti" },
              { id: "c", text: "Kello 13.30 asti" },
              { id: "d", text: "Se on tänään kiinni." },
            ],
            "b",
            "Lukusali on auki normaalisti kello 20 asti."
          ),
          choices(
            "mock-listening-fi-yki-q3",
            "Miksi lounas päättyy aikaisemmin?",
            [
              { id: "a", text: "Näyttely tarvitsee salin." },
              { id: "b", text: "Henkilökunnalla on kokous." },
              { id: "c", text: "Palautusluukku on rikki." },
              { id: "d", text: "Iltapäiväkahvi on peruttu." },
            ],
            "b",
            "Lounas päättyy kello 13.30, koska henkilökunnalla on kokous."
          ),
          choices(
            "mock-listening-fi-yki-q4",
            "Milloin iltapäiväkahvi alkaa?",
            [
              { id: "a", text: "Kello 13.30" },
              { id: "b", text: "Kello 14" },
              { id: "c", text: "Kello 15" },
              { id: "d", text: "Kello 20" },
            ],
            "b",
            "Iltapäiväkahvi alkaa taas kello 14."
          ),
        ],
      },
    },
  },
];
