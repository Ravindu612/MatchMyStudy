import type { MockPart, ObjectiveQuestion } from "../types";
import { mcq, part, reorder, tfng } from "./mockBuild";

function fiTf(
  id: string,
  prompt: string,
  answer: "t" | "f" | "ng",
  explanation: string
): ObjectiveQuestion {
  return {
    ...tfng(id, prompt, answer, explanation),
    choices: [
      { id: "t", text: "Totta" },
      { id: "f", text: "Ei pidä paikkaansa" },
      { id: "ng", text: "Ei sanota tekstissä" },
    ],
  };
}

const toolLibrary = `The Harbour Campus tool library lends hand tools to students who are building models for a studio class. A student shows a current studio card and may borrow up to three tools at a time. Drills and clamps must be back by 6 pm the same day. Measuring tapes and cutting mats may stay out until the next teaching day. The desk does not lend power saws. If a tool is returned with a missing part, the student pays a 4 dollar replacement fee and cannot borrow again until the fee is paid. The library is closed on Sundays. During the June exhibition week the same rules apply, but the desk stays open until 8 pm on weekdays. Last October the library recorded 220 loans and 9 late returns. The late returns were all drills. The staff publish the loan count on the studio noticeboard, and they do not publish student names.`;

const nightBus = `The city night bus N4 stops outside Harbour Campus only on teaching days. The last bus toward the station leaves at 23:40. The last bus toward the harbour leaves at 23:10. A student card gives a reduced fare of 1.80 instead of the full 3.20, but the card must be shown to the driver before paying. The bus does not give change for notes larger than 20. Bicycles are refused after 22:00. On Fridays in December the station bus also stops at the hospital, and that extra stop adds about six minutes. The timetable on the shelter is updated on the first Monday of each month. If a bus is cancelled, a notice is taped to the shelter the same afternoon. The notice names the route and the date, not the driver's name.`;

const notebooks = `A study skills tutor compared two ways of keeping notes during a four-week reading course. Group A wrote a short summary after each chapter. Group B highlighted sentences in the book and did not write a summary. Both groups had the same twelve chapters and the same Friday quiz. Group A scored a mean of 18 out of 25 on the last quiz. Group B scored a mean of 14. The tutor does not claim that summaries cause higher scores, because the students chose their own group. Three students in Group B said highlighting was faster during the week and harder to review later. The tutor will repeat the comparison next term with assigned groups. Until then, the writing centre lends summary templates on Tuesdays between 2 and 4 pm. The templates are free, and they are not a required part of any course.`;

export const ieltsReadingParts: MockPart[] = [
  part("ielts-r1", "The tool library", toolLibrary, [
    mcq("mock-reading-en-ielts-q1", "What must a student show before borrowing?", "A current studio card", ["A harbour ticket", "A Sunday pass", "A power-saw licence"], "The passage says a student shows a current studio card.", "a"),
    mcq("mock-reading-en-ielts-q2", "How many tools may a student borrow at one time?", "Up to three", ["One", "Four", "As many as they can carry"], "The limit is three tools at a time."),
    mcq("mock-reading-en-ielts-q3", "When must drills and clamps be returned?", "By 6 pm the same day", ["The next teaching day", "On Sunday", "During June only"], "Drills and clamps must be back by 6 pm the same day.", "c"),
    mcq("mock-reading-en-ielts-q4", "Which items may stay out until the next teaching day?", "Measuring tapes and cutting mats", ["Drills and clamps", "Power saws", "Any three tools"], "Measuring tapes and cutting mats may stay out until the next teaching day.", "d"),
    tfng("mock-reading-en-ielts-q5", "The desk lends power saws.", "f", "The desk does not lend power saws."),
    tfng("mock-reading-en-ielts-q6", "A missing part leads to a 4 dollar fee.", "t", "The student pays a 4 dollar replacement fee."),
    tfng("mock-reading-en-ielts-q7", "The library is open on Sundays.", "f", "The library is closed on Sundays."),
    tfng("mock-reading-en-ielts-q8", "In June the weekday desk stays open until 8 pm.", "t", "During the June exhibition week the desk stays open until 8 pm on weekdays."),
    tfng("mock-reading-en-ielts-q9", "Last October there were more late returns than loans.", "f", "There were 220 loans and 9 late returns."),
    tfng("mock-reading-en-ielts-q10", "The late returns in October were all drills.", "t", "The late returns were all drills."),
    tfng("mock-reading-en-ielts-q11", "The noticeboard lists the names of borrowers.", "f", "The staff do not publish student names."),
    tfng("mock-reading-en-ielts-q12", "Most borrowers are first-year students.", "ng", "The passage does not say which year the students are in."),
    tfng("mock-reading-en-ielts-q13", "The fee can be paid online.", "ng", "The passage states the fee amount but not how it is paid."),
  ]),
  part("ielts-r2", "The night bus", nightBus, [
    mcq("mock-reading-en-ielts-q14", "On which days does the N4 stop outside Harbour Campus?", "Teaching days", ["Every day", "Sundays only", "Only in December"], "It stops outside the campus only on teaching days."),
    mcq("mock-reading-en-ielts-q15", "What time is the last bus toward the station?", "23:40", ["23:10", "22:00", "The first Monday"], "The last bus toward the station leaves at 23:40.", "c"),
    mcq("mock-reading-en-ielts-q16", "What is the reduced fare with a student card?", "1.80", ["3.20", "20", "Six minutes"], "A student card gives a reduced fare of 1.80.", "a"),
    mcq("mock-reading-en-ielts-q17", "When are bicycles refused?", "After 22:00", ["After 23:40", "On teaching days", "Only in December"], "Bicycles are refused after 22:00."),
    tfng("mock-reading-en-ielts-q18", "The full fare is 3.20.", "t", "The full fare is 3.20."),
    tfng("mock-reading-en-ielts-q19", "The driver gives change for a 50 note.", "f", "The bus does not give change for notes larger than 20."),
    tfng("mock-reading-en-ielts-q20", "The student card can be shown after paying.", "f", "The card must be shown before paying."),
    tfng("mock-reading-en-ielts-q21", "The Friday hospital stop adds about six minutes.", "t", "That extra stop adds about six minutes."),
    tfng("mock-reading-en-ielts-q22", "The hospital stop runs all year.", "f", "It is on Fridays in December."),
    tfng("mock-reading-en-ielts-q23", "The shelter timetable is updated every day.", "f", "It is updated on the first Monday of each month."),
    tfng("mock-reading-en-ielts-q24", "A cancellation notice names the driver.", "f", "The notice names the route and the date, not the driver's name."),
    tfng("mock-reading-en-ielts-q25", "The N4 also stops at the airport.", "ng", "The passage does not mention an airport."),
    tfng("mock-reading-en-ielts-q26", "Students prefer the station bus to the harbour bus.", "ng", "The passage gives times but not a preference."),
  ]),
  part("ielts-r3", "Two ways of keeping notes", notebooks, [
    mcq("mock-reading-en-ielts-q27", "How long was the reading course?", "Four weeks", ["Twelve weeks", "One Friday", "Two terms"], "The tutor compared the methods during a four-week reading course.", "d"),
    mcq("mock-reading-en-ielts-q28", "What did Group A do after each chapter?", "Wrote a short summary", ["Highlighted sentences", "Took a quiz", "Borrowed a template"], "Group A wrote a short summary after each chapter."),
    mcq("mock-reading-en-ielts-q29", "What was Group A's mean score on the last quiz?", "18 out of 25", ["14 out of 25", "12 out of 25", "4 out of 25"], "Group A scored a mean of 18 out of 25.", "a"),
    mcq("mock-reading-en-ielts-q30", "Why does the tutor avoid claiming that summaries cause higher scores?", "Students chose their own group", ["The quiz was different for each group", "Group B had more chapters", "The templates were required"], "The students chose their own group, so the tutor does not claim cause.", "c"),
    tfng("mock-reading-en-ielts-q31", "Both groups read twelve chapters.", "t", "Both groups had the same twelve chapters."),
    tfng("mock-reading-en-ielts-q32", "Group B scored higher than Group A.", "f", "Group B scored 14 and Group A scored 18."),
    tfng("mock-reading-en-ielts-q33", "Three students in Group B said highlighting was harder to review later.", "t", "Three students in Group B said that."),
    tfng("mock-reading-en-ielts-q34", "The next comparison will use assigned groups.", "t", "The tutor will repeat the comparison with assigned groups."),
    tfng("mock-reading-en-ielts-q35", "Summary templates are required for every course.", "f", "They are not a required part of any course."),
    tfng("mock-reading-en-ielts-q36", "The writing centre lends templates on Tuesdays between 2 and 4 pm.", "t", "That is the lending time stated."),
    tfng("mock-reading-en-ielts-q37", "The templates cost 4 dollars.", "f", "The templates are free."),
    tfng("mock-reading-en-ielts-q38", "Group A had more teaching hours than Group B.", "ng", "The passage does not compare teaching hours."),
    tfng("mock-reading-en-ielts-q39", "The Friday quiz covered all twelve chapters.", "ng", "It says both groups had the same Friday quiz, not that every chapter was on it."),
    tfng("mock-reading-en-ielts-q40", "The tutor has already assigned the groups for next term.", "ng", "The tutor plans assigned groups next term. It does not say they are already assigned."),
  ]),
];

const soil = `City trees are often planted to cool streets, but the benefit depends on where the roots can drink. In a study of one campus avenue, trees in open lawns used more water and grew wider crowns than trees in paved pits of the same age. The wider crowns shaded the pavement for more of the afternoon. The paved trees were not dying. They were smaller because the soil under the pavement dried quickly after rain. The author argues that planting plans should treat soil volume as part of the cooling effect, not as a separate gardening detail. A tree with little soil may survive and still fail at the job the planners gave it. The avenue was planted in 2014, and the measurements were taken in July 2022.`;

const glass = `A materials class tested how recycled glass behaves in a footpath mix. Students replaced 10 percent, 20 percent, and 30 percent of the sand with crushed glass. The 10 percent mix drained almost as fast as the plain sand mix. The 30 percent mix drained more slowly and left a pale shine on the surface after rain. None of the mixes cracked in the two-week test. The instructor told the class not to treat the shine as a safety result, because the test used a dry indoor ramp, not a public street. The class will publish the drain times on the course page and will not publish the brand of the glass.`;

export const toeflReadingParts: MockPart[] = [
  part("toefl-r1", "Soil and street trees", soil, [
    mcq("mock-reading-en-toefl-q1", "What did the study compare?", "Trees in open lawns and trees in paved pits", ["Trees of different ages", "Dying trees and new trees", "Morning shade and night shade"], "It compared lawn trees with paved-pit trees of the same age."),
    mcq("mock-reading-en-toefl-q2", "The word crowns in the passage is closest in meaning to", "The leafy tops of the trees", ["The pits in the pavement", "The age of the trees", "The rain after a dry week"], "Wider crowns means the leafy tops that shaded the pavement.", "a"),
    mcq("mock-reading-en-toefl-q3", "Why were the paved trees smaller?", "The soil under the pavement dried quickly", ["They were older", "They were dying", "They were planted in lawns"], "The soil under the pavement dried quickly after rain.", "c"),
    mcq("mock-reading-en-toefl-q4", "What does the author want planners to include?", "Soil volume as part of the cooling effect", ["Only the cost of water", "A separate gardening team", "Trees that need no soil"], "Planting plans should treat soil volume as part of the cooling effect."),
    tfng("mock-reading-en-toefl-q5", "The paved trees were dying.", "f", "The paved trees were not dying."),
    tfng("mock-reading-en-toefl-q6", "Lawn trees used more water than paved trees.", "t", "Trees in open lawns used more water."),
    tfng("mock-reading-en-toefl-q7", "The avenue was planted in 2014.", "t", "The avenue was planted in 2014."),
    tfng("mock-reading-en-toefl-q8", "Measurements were taken in winter.", "f", "The measurements were taken in July 2022."),
    tfng("mock-reading-en-toefl-q9", "A tree can survive and still fail at cooling the street.", "t", "A tree with little soil may survive and still fail at the job the planners gave it."),
    tfng("mock-reading-en-toefl-q10", "The city has banned paved pits.", "ng", "The passage does not say the city banned them."),
  ]),
  part("toefl-r2", "Glass in a footpath mix", glass, [
    mcq("mock-reading-en-toefl-q11", "What did the students replace?", "Part of the sand with crushed glass", ["The whole ramp with glass", "The rain test with a street", "The course page with a brand"], "They replaced 10, 20, and 30 percent of the sand with crushed glass."),
    mcq("mock-reading-en-toefl-q12", "Which mix drained almost as fast as plain sand?", "The 10 percent mix", ["The 20 percent mix", "The 30 percent mix", "None of the mixes"], "The 10 percent mix drained almost as fast as the plain sand mix.", "a"),
    mcq("mock-reading-en-toefl-q13", "What happened to the 30 percent mix after rain?", "It drained more slowly and left a pale shine", ["It cracked", "It drained faster than sand", "It was removed from the test"], "The 30 percent mix drained more slowly and left a pale shine.", "d"),
    mcq("mock-reading-en-toefl-q14", "Why is the shine not a safety result?", "The test used a dry indoor ramp, not a public street", ["The glass brand is secret", "The mix cracked", "The class did not record drain times"], "The instructor said the test was not a public street.", "c"),
    tfng("mock-reading-en-toefl-q15", "One of the mixes cracked during the two-week test.", "f", "None of the mixes cracked."),
    tfng("mock-reading-en-toefl-q16", "Drain times will be published on the course page.", "t", "The class will publish the drain times on the course page."),
    tfng("mock-reading-en-toefl-q17", "The brand of the glass will be published.", "f", "They will not publish the brand of the glass."),
    tfng("mock-reading-en-toefl-q18", "The 20 percent mix was faster than the 10 percent mix.", "ng", "The passage does not compare the 20 percent mix with the 10 percent mix."),
    tfng("mock-reading-en-toefl-q19", "The test lasted two weeks.", "t", "None of the mixes cracked in the two-week test."),
    tfng("mock-reading-en-toefl-q20", "The instructor prefers glass paths in the city centre.", "ng", "The passage does not give the instructor's preference for city streets."),
  ]),
];

const kitchen = `The night kitchen in the student residence heats up at 11, when seminars end. Residents may cook until midnight, and the extractor fan must stay on. Dishes left in the sink after midnight are moved to a labelled shelf. The shelf is cleared at 8 the next morning, and unclaimed dishes are washed by the duty team.`;

const lockers = `Residence lockers on level B are for one semester at a time. A resident pays a 15 dollar deposit and receives one key. The office keeps a spare key. If the resident loses the key, the spare is used once and a new lock is fitted the next weekday. The deposit is returned only when the issued key, or the replacement key, is handed back. Food may not be stored in a locker. The office checks lockers on the last Friday of the semester between 9 and 12.`;

export const pteReadingParts: MockPart[] = [
  part("pte-r1", "The night kitchen", kitchen, [
    mcq(
      "mock-reading-en-pte-q1",
      "Until what time may residents cook?",
      "Until midnight",
      ["Until 11", "Until 8 in the morning", "Only while the duty team is there"],
      "Residents may cook until midnight."
    ),
    mcq(
      "mock-reading-en-pte-q2",
      "What happens to dishes left in the sink after midnight?",
      "They are moved to a labelled shelf.",
      ["They are thrown away at once.", "The extractor fan is switched off.", "Residents may keep cooking."],
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
  ]),
  part("pte-r2", "Semester lockers", lockers, [
    mcq("mock-reading-en-pte-q4", "How long is a locker held?", "One semester", ["One week", "Until the key is lost", "Until Friday only"], "Lockers are for one semester at a time.", "a"),
    mcq("mock-reading-en-pte-q5", "How much is the deposit?", "15 dollars", ["One key", "A new lock", "Nothing"], "A resident pays a 15 dollar deposit."),
    mcq("mock-reading-en-pte-q6", "Who keeps a spare key?", "The office", ["The resident only", "The duty team in the kitchen", "No one"], "The office keeps a spare key.", "c"),
    mcq("mock-reading-en-pte-q7", "When is a new lock fitted after a lost key?", "The next weekday", ["The same hour", "The last Friday only", "Never"], "A new lock is fitted the next weekday.", "d"),
    tfng("mock-reading-en-pte-q8", "Food may be stored in a locker.", "f", "Food may not be stored in a locker."),
    tfng("mock-reading-en-pte-q9", "The deposit is returned when a key is handed back.", "t", "The deposit is returned only when the issued key or the replacement key is handed back."),
    tfng("mock-reading-en-pte-q10", "The spare key may be used many times.", "f", "The spare is used once."),
    tfng("mock-reading-en-pte-q11", "Lockers are checked on the last Friday of the semester.", "t", "The office checks lockers on the last Friday between 9 and 12."),
    tfng("mock-reading-en-pte-q12", "The check starts at 9.", "t", "The check is between 9 and 12."),
    tfng("mock-reading-en-pte-q13", "Residents may hold two lockers.", "ng", "The passage says one key and does not state a second locker."),
    tfng("mock-reading-en-pte-q14", "The deposit is higher for a larger locker.", "ng", "Only one deposit amount is given."),
    tfng("mock-reading-en-pte-q15", "The office is closed on the last Friday.", "f", "The office checks lockers that morning, so it is not closed then."),
  ]),
];

const ykiA = `Kirjaston ilmoitus: Hiljainen sali kolmannessa kerroksessa on suljettu perjantaina kello 16 alkaen, koska lattia pestään. Sali aukeaa lauantaina kello 10. Ensimmäinen kerros on auki perjantaina kello 20 asti. Varaamasi kaappi pitää tyhjentää perjantaina ennen kello 15. Henkilökunta ei siirrä kirjoja kaapista puolestasi.`;

const ykiB = `Viesti opintotoimistosta: Ryhmätyön palautus on ensi tiistaina kello 9. Tiedosto ladataan kurssisivulle. Paperikopiota ei tarvita. Jos tiedosto ei aukea, lähetä se sähköpostilla samana aamuna ennen kello 9. Myöhästynyt työ otetaan vastaan vain, jos opettaja on sopinut lisäajasta etukäteen. Toimisto ei myönnä lisäaikaa.`;

const ykiC = `Liikuntakeskuksen lappu: Sulkapallovuoro siirtyy torstailta perjantaille, koska sali on turnauksessa. Uusi aika on perjantaina kello 17 samassa salissa. Uutta varausta ei tarvita, jos nimi on jo listalla. Mailat voi lainata tiskiltä, mutta sulkapallot pitää tuoda itse. Tiski sulkeutuu kello 20.`;

const ykiD = `Kahvilan lappu kampuksella: Lounas päättyy arkisin kello 14. Perjantaina keitto loppuu jo kello 13, koska keittiö sulkeutuu aikaisemmin. Kasvisvaihtoehto on joka päivä. Korttimaksu käy, käteistä ei oteta vastaan kello 13 jälkeen. Opiskelijahinta on 2,60 ja muille hinta on 8,40.`;

export const ykiReadingParts: MockPart[] = [
  part("yki-r1", "Kirjasto", ykiA, [
    mcq("mock-reading-fi-yki-q1", "Miksi hiljainen sali suljetaan perjantaina?", "Lattia pestään", ["Kaapit tyhjennetään", "Kirjasto muuttaa", "Henkilökunta siirtää kirjat"], "Sali suljetaan, koska lattia pestään.", "a"),
    mcq("mock-reading-fi-yki-q2", "Milloin hiljainen sali aukeaa taas?", "Lauantaina kello 10", ["Perjantaina kello 16", "Perjantaina kello 20", "Ennen kello 15"], "Sali aukeaa lauantaina kello 10."),
    mcq("mock-reading-fi-yki-q3", "Milloin kaappi pitää tyhjentää?", "Perjantaina ennen kello 15", ["Lauantaina kello 10", "Perjantaina kello 20", "Kun henkilökunta siirtää kirjat"], "Varaamasi kaappi pitää tyhjentää perjantaina ennen kello 15.", "c"),
    fiTf("mock-reading-fi-yki-q4", "Ensimmäinen kerros on auki perjantaina kello 20 asti.", "t", "Teksti sanoo näin."),
    fiTf("mock-reading-fi-yki-q5", "Henkilökunta siirtää kirjat kaapista.", "f", "Henkilökunta ei siirrä kirjoja kaapista puolestasi."),
  ], "fi"),
  part("yki-r2", "Ryhmätyö", ykiB, [
    mcq("mock-reading-fi-yki-q6", "Milloin ryhmätyö palautetaan?", "Ensi tiistaina kello 9", ["Perjantaina kello 16", "Samana iltana", "Kun toimisto myöntää lisäajan"], "Palautus on ensi tiistaina kello 9.", "d"),
    mcq("mock-reading-fi-yki-q7", "Mitä tehdään, jos tiedosto ei aukea?", "Se lähetetään sähköpostilla ennen kello 9", ["Tuodaan paperikopio", "Odotetaan seuraavaa viikkoa", "Soitetaan toimistoon lisäajasta"], "Lähetä se sähköpostilla samana aamuna ennen kello 9."),
    fiTf("mock-reading-fi-yki-q8", "Paperikopio tarvitaan.", "f", "Paperikopiota ei tarvita."),
    fiTf("mock-reading-fi-yki-q9", "Toimisto voi myöntää lisäaikaa.", "f", "Toimisto ei myönnä lisäaikaa."),
    fiTf("mock-reading-fi-yki-q10", "Opettaja voi sopia lisäajasta etukäteen.", "t", "Myöhästynyt työ otetaan vastaan vain, jos opettaja on sopinut lisäajasta."),
  ], "fi"),
  part("yki-r3", "Sulkapallo", ykiC, [
    mcq("mock-reading-fi-yki-q11", "Miksi vuoro siirtyy?", "Sali on turnauksessa", ["Tiski on kiinni", "Lista on täynnä", "Mailat puuttuvat"], "Sali on turnauksessa.", "a"),
    mcq("mock-reading-fi-yki-q12", "Milloin uusi vuoro on?", "Perjantaina kello 17", ["Torstaina kello 17", "Perjantaina kello 20", "Kun teet uuden varauksen"], "Uusi aika on perjantaina kello 17."),
    fiTf("mock-reading-fi-yki-q13", "Uusi varaus tarvitaan, jos nimi on jo listalla.", "f", "Uutta varausta ei tarvita, jos nimi on jo listalla."),
    fiTf("mock-reading-fi-yki-q14", "Sulkapallot saa lainata tiskiltä.", "f", "Mailat voi lainata, mutta sulkapallot pitää tuoda itse."),
    fiTf("mock-reading-fi-yki-q15", "Tiski sulkeutuu kello 20.", "t", "Tiski sulkeutuu kello 20."),
  ], "fi"),
  part("yki-r4", "Kahvila", ykiD, [
    mcq("mock-reading-fi-yki-q16", "Milloin lounas päättyy arkisin?", "Kello 14", ["Kello 13", "Kello 2,60", "Kello 8,40"], "Lounas päättyy arkisin kello 14.", "c"),
    mcq("mock-reading-fi-yki-q17", "Milloin keitto loppuu perjantaina?", "Kello 13", ["Kello 14", "Kello 20", "Kun käteinen loppuu"], "Perjantaina keitto loppuu jo kello 13."),
    fiTf("mock-reading-fi-yki-q18", "Kasvisvaihtoehto on vain perjantaina.", "f", "Kasvisvaihtoehto on joka päivä."),
    fiTf("mock-reading-fi-yki-q19", "Käteistä otetaan vastaan kello 13 jälkeen.", "f", "Käteistä ei oteta vastaan kello 13 jälkeen."),
    fiTf("mock-reading-fi-yki-q20", "Opiskelijahinta on 2,60.", "t", "Opiskelijahinta on 2,60."),
  ], "fi"),
];
