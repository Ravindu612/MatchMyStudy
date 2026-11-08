import type { ReadingTask } from "../types";
import { choices } from "./questions";

const en: ReadingTask[] = [
  {
    id: "reading-en-1",
    skill: "reading",
    language: "en",
    access: "free",
    title: "The night bus",
    passageLang: "en",
    passage:
      "Last month the university moved the last campus bus from 22:10 to 23:00 on weeknights. The stop is still outside the science library, and the bus runs only while classes are in session. On Fridays the last bus leaves at 21:30. Students who live at the riverside flats can ride without a ticket because the housing office pays for that route. Visitors pay two pounds on the bus and cannot use a contactless card after 22:00. The driver does not stop at the hospital gate after 22:30, so anyone with a late clinic shift walks from the science library or waits for the city bus on Station Road.",
    questions: [
      choices(
        "reading-en-1-q1",
        "What changed last month?",
        [
          { id: "a", text: "The last weeknight bus moved from 22:10 to 23:00." },
          { id: "b", text: "The stop moved from the science library to the hospital." },
          { id: "c", text: "The bus began to run every day of the year." },
          { id: "d", text: "Visitors stopped paying a fare." },
        ],
        "a",
        "The first sentence says the last campus bus moved from 22:10 to 23:00 on weeknights."
      ),
      choices(
        "reading-en-1-q2",
        "When does the last bus leave on Friday?",
        [
          { id: "a", text: "At 22:10" },
          { id: "b", text: "At 23:00" },
          { id: "c", text: "At 21:30" },
          { id: "d", text: "At 22:30" },
        ],
        "c",
        "The notice says that on Fridays the last bus leaves at 21:30."
      ),
      choices(
        "reading-en-1-q3",
        "Who can ride this route without a ticket?",
        [
          { id: "a", text: "Every visitor after 22:00" },
          { id: "b", text: "Students who live at the riverside flats" },
          { id: "c", text: "Staff with a late clinic shift" },
          { id: "d", text: "Anyone who boards at Station Road" },
        ],
        "b",
        "The housing office pays for students who live at the riverside flats."
      ),
    ],
  },
  {
    id: "reading-en-2",
    skill: "reading",
    language: "en",
    access: "free",
    title: "Shade in the courtyard",
    passageLang: "en",
    passage:
      "The estates team measured the main courtyard for a week in July. At midday the stone benches reached 48 degrees Celsius, while the benches under the new maple trees stayed at 36 degrees. The trees were planted two years ago and are still short, so the shade covers only the east side before noon. The team will not add misting machines. They cost more to run than the library saves on cooling, and the water would make the stone slippery. A second row of trees is planned for November, when the ground is cooler and the roots can settle before summer.",
    questions: [
      choices(
        "reading-en-2-q1",
        "How hot did the stone benches get at midday?",
        [
          { id: "a", text: "36 degrees Celsius" },
          { id: "b", text: "48 degrees Celsius" },
          { id: "c", text: "They stayed cooler than the shaded benches." },
          { id: "d", text: "The passage does not give a temperature." },
        ],
        "b",
        "The stone benches reached 48 degrees Celsius. The shaded benches stayed at 36."
      ),
      choices(
        "reading-en-2-q2",
        "Why will the team not add misting machines?",
        [
          { id: "a", text: "The trees already shade the whole courtyard." },
          { id: "b", text: "They cost more than they save, and the water would make the stone slippery." },
          { id: "c", text: "November is too cold for water." },
          { id: "d", text: "The library cooling system was removed." },
        ],
        "b",
        "The passage gives both the running cost and the slippery stone as reasons."
      ),
      choices(
        "reading-en-2-q3",
        "When is the second row of trees planned?",
        [
          { id: "a", text: "In July" },
          { id: "b", text: "Before noon" },
          { id: "c", text: "In November" },
          { id: "d", text: "Two years ago" },
        ],
        "c",
        "A second row is planned for November."
      ),
    ],
  },
  {
    id: "reading-en-3",
    skill: "reading",
    language: "en",
    access: "free",
    title: "The shared lab notebook",
    passageLang: "en",
    passage:
      "The chemistry project group keeps one shared notebook instead of four separate files. Each person writes their initials beside an entry. The notebook stays in the lab drawer, and nobody takes it home. Photos of pages can be stored in the group folder, but the photos do not replace the paper copy, because the department asks for the original pages if an experiment is questioned. Corrections are made with a single line, not with correction fluid. The group meets on Wednesdays to read the week's entries aloud before anyone starts a new trial.",
    questions: [
      choices(
        "reading-en-3-q1",
        "Where is the notebook kept?",
        [
          { id: "a", text: "In the group folder only" },
          { id: "b", text: "At the home of the person who wrote last" },
          { id: "c", text: "In the lab drawer" },
          { id: "d", text: "With the department office" },
        ],
        "c",
        "The notebook stays in the lab drawer and is not taken home."
      ),
      choices(
        "reading-en-3-q2",
        "How does the group correct a mistake?",
        [
          { id: "a", text: "With correction fluid" },
          { id: "b", text: "By deleting the photo and starting again" },
          { id: "c", text: "With a single line through the mistake" },
          { id: "d", text: "By asking the department to rewrite the page" },
        ],
        "c",
        "Corrections are made with a single line, not with correction fluid."
      ),
      choices(
        "reading-en-3-q3",
        "When does the group read the entries aloud?",
        [
          { id: "a", text: "On Wednesdays, before a new trial" },
          { id: "b", text: "Only after the department questions an experiment" },
          { id: "c", text: "Whenever someone takes the notebook home" },
          { id: "d", text: "After the photos have replaced the paper copy" },
        ],
        "a",
        "They meet on Wednesdays and read the week's entries before a new trial."
      ),
    ],
  },
  {
    id: "reading-en-4",
    skill: "reading",
    language: "en",
    access: "paid",
    title: "The winter coat exchange",
    passageLang: "en",
    passage:
      "The student union runs a winter coat exchange in the union foyer from the first Monday in November until the Friday before the winter break. A student may take one coat after leaving one that is clean and still useful. Coats are not bought or sold. Volunteers check pockets at the desk and send anything they find to the lost-property shelf, which is cleared every Thursday. The exchange does not offer shoes this year because the storage room flooded in September. A dry pair of gloves is available while the box lasts, and gloves do not require a donation.",
    questions: [
      choices(
        "reading-en-4-q1",
        "What must a student leave in order to take a coat?",
        [
          { id: "a", text: "A payment at the desk" },
          { id: "b", text: "A clean coat that is still useful" },
          { id: "c", text: "A pair of shoes" },
          { id: "d", text: "Nothing, because every item is free" },
        ],
        "b",
        "A student may take one coat after leaving a clean, still useful coat."
      ),
      choices(
        "reading-en-4-q2",
        "Why are shoes not offered this year?",
        [
          { id: "a", text: "The storage room flooded in September." },
          { id: "b", text: "Gloves replaced the shoe donation." },
          { id: "c", text: "The lost-property shelf is cleared every Thursday." },
          { id: "d", text: "The exchange ends on the first Monday in November." },
        ],
        "a",
        "The exchange does not offer shoes because the storage room flooded in September."
      ),
      choices(
        "reading-en-4-q3",
        "How often is the lost-property shelf cleared?",
        [
          { id: "a", text: "Every Thursday" },
          { id: "b", text: "Only before the winter break" },
          { id: "c", text: "When the glove box is empty" },
          { id: "d", text: "The passage does not say." },
        ],
        "a",
        "The lost-property shelf is cleared every Thursday."
      ),
    ],
  },
];

const fi: ReadingTask[] = [
  {
    id: "reading-fi-1",
    skill: "reading",
    language: "fi",
    access: "free",
    title: "Kirjaston aukioloajat",
    passageLang: "fi",
    passage:
      "Yliopiston kirjasto muuttaa aukioloaikojaan syyskuun alussa. Maanantaista torstaihin kirjasto on auki kello 8–20. Perjantaina se sulkeutuu jo kello 16. Lauantaina ja sunnuntaina kirjasto on kiinni. Opiskelija voi lainata kirjoja, kun hänellä on kirjastokortti. Hiljainen lukusali on kolmannessa kerroksessa. Siellä ei saa puhua puhelimeen.",
    questions: [
      choices(
        "reading-fi-1-q1",
        "Mihin aikaan kirjasto sulkeutuu perjantaina?",
        [
          { id: "a", text: "Kello 20" },
          { id: "b", text: "Kello 16" },
          { id: "c", text: "Kello 8" },
          { id: "d", text: "Kirjasto on perjantaina kiinni." },
        ],
        "b",
        "Tekstissä sanotaan, että perjantaina kirjasto sulkeutuu kello 16."
      ),
      choices(
        "reading-fi-1-q2",
        "Mitä opiskelija tarvitsee, jotta hän voi lainata kirjoja?",
        [
          { id: "a", text: "Opettajan allekirjoituksen" },
          { id: "b", text: "Kirjastokortin" },
          { id: "c", text: "Paikan hiljaisesta lukusalista" },
          { id: "d", text: "Viikonloppuvarauksen" },
        ],
        "b",
        "Kirjoja voi lainata, kun opiskelijalla on kirjastokortti."
      ),
      choices(
        "reading-fi-1-q3",
        "Mitä hiljaisessa lukusalissa ei saa tehdä?",
        [
          { id: "a", text: "Lukea" },
          { id: "b", text: "Istua" },
          { id: "c", text: "Puhua puhelimeen" },
          { id: "d", text: "Käyttää kirjastokorttia" },
        ],
        "c",
        "Hiljaisessa lukusalissa ei saa puhua puhelimeen."
      ),
    ],
  },
  {
    id: "reading-fi-2",
    skill: "reading",
    language: "fi",
    access: "free",
    title: "Kampuksen pyöräpaja",
    passageLang: "fi",
    passage:
      "Kampuksen pyöräpaja on kirjaston vieressä. Paja on auki tiistaisin ja torstaisin kello 12–16. Opiskelija voi korjata renkaan itse, ja työkalut ovat maksuttomia. Uusi sisäkumi maksaa viisi euroa. Paja ei lainaa pyöriä. Talvella paja myy myös nastarenkaita, mutta niitä on vain rajoitetusti.",
    questions: [
      choices(
        "reading-fi-2-q1",
        "Milloin pyöräpaja on auki?",
        [
          { id: "a", text: "Joka päivä kello 8–20" },
          { id: "b", text: "Tiistaisin ja torstaisin kello 12–16" },
          { id: "c", text: "Vain talvella" },
          { id: "d", text: "Viikonloppuisin" },
        ],
        "b",
        "Paja on auki tiistaisin ja torstaisin kello 12–16."
      ),
      choices(
        "reading-fi-2-q2",
        "Paljonko uusi sisäkumi maksaa?",
        [
          { id: "a", text: "Se on maksuton." },
          { id: "b", text: "Viisi euroa" },
          { id: "c", text: "Kymmenen euroa" },
          { id: "d", text: "Teksti ei kerro hintaa." },
        ],
        "b",
        "Uusi sisäkumi maksaa viisi euroa. Työkalut ovat maksuttomia."
      ),
      choices(
        "reading-fi-2-q3",
        "Lainaako paja pyöriä?",
        [
          { id: "a", text: "Kyllä, tunniksi kerrallaan" },
          { id: "b", text: "Kyllä, mutta vain talvella" },
          { id: "c", text: "Ei" },
          { id: "d", text: "Kyllä, jos opiskelija ostaa nastarenkaat" },
        ],
        "c",
        "Tekstissä sanotaan, että paja ei lainaa pyöriä."
      ),
    ],
  },
  {
    id: "reading-fi-3",
    skill: "reading",
    language: "fi",
    access: "free",
    title: "Opiskelijaruokalan lounas",
    passageLang: "fi",
    passage:
      "Opiskelijaruokala palvelee lounasta arkisin kello 10.30–14. Opiskelijahinta on 2,95 euroa, jos opiskelija näyttää voimassa olevan opiskelijakortin. Ilman korttia hinta on 6,50 euroa. Kasvisvaihtoehto on tarjolla joka päivä. Perjantaisin listalla on myös kalaa. Juoma ei sisälly lounaan hintaan.",
    questions: [
      choices(
        "reading-fi-3-q1",
        "Mikä on lounaan hinta ilman opiskelijakorttia?",
        [
          { id: "a", text: "2,95 euroa" },
          { id: "b", text: "6,50 euroa" },
          { id: "c", text: "Lounas on maksuton." },
          { id: "d", text: "Hinta sisältää juoman." },
        ],
        "b",
        "Ilman korttia hinta on 6,50 euroa."
      ),
      choices(
        "reading-fi-3-q2",
        "Mitä ruokala tarjoaa joka päivä?",
        [
          { id: "a", text: "Kalaa" },
          { id: "b", text: "Kasvisvaihtoehdon" },
          { id: "c", text: "Maksuttoman juoman" },
          { id: "d", text: "Lounaan myös viikonloppuna" },
        ],
        "b",
        "Kasvisvaihtoehto on tarjolla joka päivä. Kalaa on perjantaisin."
      ),
      choices(
        "reading-fi-3-q3",
        "Sisältyykö juoma lounaan hintaan?",
        [
          { id: "a", text: "Kyllä, opiskelijakortilla" },
          { id: "b", text: "Kyllä, perjantaisin" },
          { id: "c", text: "Ei" },
          { id: "d", text: "Teksti ei kerro." },
        ],
        "c",
        "Juoma ei sisälly lounaan hintaan."
      ),
    ],
  },
  {
    id: "reading-fi-4",
    skill: "reading",
    language: "fi",
    access: "paid",
    title: "Aloittelijoiden uimakurssi",
    passageLang: "fi",
    passage:
      "Yliopiston liikuntakeskus aloittaa maanantaina aloittelijoiden uimakurssin. Kurssi kokoontuu neljä kertaa, ja se on uimahallin radalla 3. Ilmoittautuminen päättyy sunnuntaina kello 18. Kurssi on maksuton opiskelijoille, mutta mukaan tarvitaan uimalakki. Jos allas on täynnä, keskus lähettää viestin ja tarjoaa paikkaa seuraavasta ryhmästä.",
    questions: [
      choices(
        "reading-fi-4-q1",
        "Milloin ilmoittautuminen päättyy?",
        [
          { id: "a", text: "Maanantaina kurssin alkaessa" },
          { id: "b", text: "Sunnuntaina kello 18" },
          { id: "c", text: "Neljännen kokoontumisen jälkeen" },
          { id: "d", text: "Teksti ei kerro aikaa." },
        ],
        "b",
        "Ilmoittautuminen päättyy sunnuntaina kello 18."
      ),
      choices(
        "reading-fi-4-q2",
        "Mitä opiskelijan pitää ottaa mukaan?",
        [
          { id: "a", text: "Uimalakki" },
          { id: "b", text: "Maksukuitti" },
          { id: "c", text: "Oma rata" },
          { id: "d", text: "Viesti liikuntakeskukselta" },
        ],
        "a",
        "Kurssi on maksuton, mutta mukaan tarvitaan uimalakki."
      ),
      choices(
        "reading-fi-4-q3",
        "Mitä tapahtuu, jos allas on täynnä?",
        [
          { id: "a", text: "Kurssi peruutetaan." },
          { id: "b", text: "Opiskelija maksaa lisämaksun." },
          { id: "c", text: "Keskus tarjoaa paikkaa seuraavasta ryhmästä." },
          { id: "d", text: "Opiskelija tulee radalle 3 ilman ilmoittautumista." },
        ],
        "c",
        "Keskus lähettää viestin ja tarjoaa paikkaa seuraavasta ryhmästä."
      ),
    ],
  },
];

export const readingTasks: ReadingTask[] = [...en, ...fi];
