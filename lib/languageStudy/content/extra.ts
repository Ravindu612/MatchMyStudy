import type { ListeningTask, ReadingTask, WritingTask } from "../types";
import { choices } from "./questions";

/**
 * Paid practice added so a USD 1.99 batch of 10 credits has distinct tasks.
 * Tasks 4 already exist in the free files. These are tasks 5 through 13.
 */

function reading(
  language: "en" | "fi",
  n: number,
  title: string,
  passage: string,
  questions: ReturnType<typeof choices>[]
): ReadingTask {
  return {
    id: `reading-${language}-${n}`,
    skill: "reading",
    language,
    access: "paid",
    title,
    passageLang: language,
    passage,
    questions,
  };
}

function listening(
  language: "en" | "fi",
  n: number,
  title: string,
  audioLang: string,
  speakerNote: string,
  script: string,
  questions: ReturnType<typeof choices>[]
): ListeningTask {
  return {
    id: `listening-${language}-${n}`,
    skill: "listening",
    language,
    access: "paid",
    title,
    audioLang,
    speakerNote,
    script,
    questions,
  };
}

function writing(
  language: "en" | "fi",
  n: number,
  title: string,
  prompt: string,
  min: number,
  max: number
): WritingTask {
  return {
    id: `writing-${language}-${n}`,
    skill: "writing",
    language,
    access: "paid",
    title,
    promptLang: language,
    suggestedWords: { min, max },
    prompt,
  };
}

const enReading: ReadingTask[] = [
  reading("en", 5, "The repaired lift", "The north lift is open again from Monday, but it stops only at floors 1, 3, and 5 until Friday. Floor 4 is reached by the south stairs. The repair crew leaves at 16:00, and after that the lift runs until 22:00. A wheelchair user can ask the porter for the key to the south lift, which is kept at the desk and not in the basement.", [
    choices("reading-en-5-q1", "Which floors does the north lift serve until Friday?", [{ id: "a", text: "1, 3, and 5" }, { id: "b", text: "Every floor" }, { id: "c", text: "Only floor 4" }], "a", "It stops only at floors 1, 3, and 5 until Friday."),
    choices("reading-en-5-q2", "Where is the key to the south lift?", [{ id: "a", text: "In the basement" }, { id: "b", text: "At the porter's desk" }, { id: "c", text: "With the repair crew after 16:00" }], "b", "The porter keeps the key at the desk."),
    choices("reading-en-5-q3", "Until when does the north lift run after the crew leaves?", [{ id: "a", text: "Until 16:00" }, { id: "b", text: "Until 22:00" }, { id: "c", text: "It stops for the night at 16:00" }], "b", "After 16:00 the lift runs until 22:00."),
  ]),
  reading("en", 6, "River path closure", "The river path is closed between the boathouse and the footbridge on Wednesday because a tree crew is working. Walkers should use College Lane instead. The path reopens on Thursday at 7:00. Bicycles are not allowed on the diversion, so riders leave bikes at the boathouse rack.", [
    choices("reading-en-6-q1", "Why is the river path closed?", [{ id: "a", text: "The footbridge was removed" }, { id: "b", text: "A tree crew is working" }, { id: "c", text: "Bicycles are racing" }], "b", "A tree crew is working on Wednesday."),
    choices("reading-en-6-q2", "Which route should walkers use?", [{ id: "a", text: "College Lane" }, { id: "b", text: "The boathouse rack" }, { id: "c", text: "The closed footbridge" }], "a", "Walkers should use College Lane."),
    choices("reading-en-6-q3", "When does the path reopen?", [{ id: "a", text: "Wednesday at 7:00" }, { id: "b", text: "Thursday at 7:00" }, { id: "c", text: "It stays closed all week" }], "b", "It reopens on Thursday at 7:00."),
  ]),
  reading("en", 7, "Lab coat rule", "From this week, a lab coat is required in room C2 even for a short visit. Coats are on the hooks by the door and must be returned to the same hook. Food is still forbidden. Gloves are only required when the blue sign is on the bench, not for collecting a notebook.", [
    choices("reading-en-7-q1", "Who must wear a lab coat in room C2?", [{ id: "a", text: "Only people who stay more than an hour" }, { id: "b", text: "Anyone who enters, even for a short visit" }, { id: "c", text: "Only people using gloves" }], "b", "A coat is required even for a short visit."),
    choices("reading-en-7-q2", "When are gloves required?", [{ id: "a", text: "Whenever a notebook is collected" }, { id: "b", text: "When the blue sign is on the bench" }, { id: "c", text: "They are never required" }], "b", "Gloves are required only when the blue sign is on the bench."),
    choices("reading-en-7-q3", "Where do coats go after use?", [{ id: "a", text: "Back on the same hook" }, { id: "b", text: "Into the notebook cupboard" }, { id: "c", text: "Home with the student" }], "a", "Coats must be returned to the same hook."),
  ]),
  reading("en", 8, "Evening help desk", "The maths help desk moves to room 12 on Tuesdays after 18:00 because room 4 is used for a choir. The tutor still starts at 18:15. Students should bring the problem sheet, not only a laptop. The session ends at 19:30, and the door locks itself at 19:40.", [
    choices("reading-en-8-q1", "Where is the Tuesday evening help desk?", [{ id: "a", text: "Room 4" }, { id: "b", text: "Room 12" }, { id: "c", text: "The choir hall all evening" }], "b", "It moves to room 12 after 18:00."),
    choices("reading-en-8-q2", "What should students bring?", [{ id: "a", text: "The problem sheet" }, { id: "b", text: "Only a laptop" }, { id: "c", text: "A choir folder" }], "a", "They should bring the problem sheet."),
    choices("reading-en-8-q3", "When does the door lock?", [{ id: "a", text: "At 18:15" }, { id: "b", text: "At 19:30" }, { id: "c", text: "At 19:40" }], "c", "The door locks itself at 19:40. The session ends at 19:30."),
  ]),
  reading("en", 9, "Sports hall and snow", "If snow is still on the steps at 8:00, the sports hall opens at 9:30 instead of 8:30. The notice is posted on the door, not sent by email. Indoor running lanes stay open. The outdoor track is closed for the whole morning, even if the steps are cleared later.", [
    choices("reading-en-9-q1", "When does the hall open if snow is on the steps at 8:00?", [{ id: "a", text: "At 8:30" }, { id: "b", text: "At 9:30" }, { id: "c", text: "It stays closed all day" }], "b", "It opens at 9:30 instead of 8:30."),
    choices("reading-en-9-q2", "How is the change announced?", [{ id: "a", text: "By email" }, { id: "b", text: "On the door" }, { id: "c", text: "Only inside the running lanes" }], "b", "The notice is posted on the door."),
    choices("reading-en-9-q3", "What happens to the outdoor track?", [{ id: "a", text: "It opens once the steps are clear" }, { id: "b", text: "It is closed for the whole morning" }, { id: "c", text: "It is reserved for indoor runners" }], "b", "The outdoor track is closed for the whole morning."),
  ]),
  reading("en", 10, "Returning a library laptop", "Library laptops are due back at the desk 30 minutes before closing, not at closing time. A laptop returned to the book slot is not checked in. The battery does not need to be full, but the charger must be in the same case. A late return blocks the next booking until the following day.", [
    choices("reading-en-10-q1", "When are laptops due?", [{ id: "a", text: "At closing time" }, { id: "b", text: "30 minutes before closing" }, { id: "c", text: "The next morning" }], "b", "They are due 30 minutes before closing."),
    choices("reading-en-10-q2", "What must be in the case?", [{ id: "a", text: "A full battery" }, { id: "b", text: "The charger" }, { id: "c", text: "The book-slot receipt" }], "b", "The charger must be in the same case."),
    choices("reading-en-10-q3", "What happens after a late return?", [{ id: "a", text: "The next booking is blocked until the following day" }, { id: "b", text: "The laptop is checked in through the book slot" }, { id: "c", text: "Nothing, if the battery is full" }], "a", "A late return blocks the next booking until the following day."),
  ]),
  reading("en", 11, "Choir rehearsal", "Choir rehearsal on Friday moves from the chapel to the drama studio because of a wedding rehearsal. It still starts at 17:00 and still lasts one hour. Scores are on the piano, not in the chapel cupboard. Late arrivals should enter by the side door so the wedding party is not disturbed.", [
    choices("reading-en-11-q1", "Where is Friday's choir rehearsal?", [{ id: "a", text: "In the chapel" }, { id: "b", text: "In the drama studio" }, { id: "c", text: "At the wedding" }], "b", "It moves to the drama studio."),
    choices("reading-en-11-q2", "How long does it last?", [{ id: "a", text: "One hour" }, { id: "b", text: "Until the wedding ends" }, { id: "c", text: "Thirty minutes" }], "a", "It still lasts one hour."),
    choices("reading-en-11-q3", "Where are the scores?", [{ id: "a", text: "In the chapel cupboard" }, { id: "b", text: "On the piano" }, { id: "c", text: "At the side door" }], "b", "Scores are on the piano."),
  ]),
  reading("en", 12, "Tap water notice", "The kitchen tap on floor 2 runs cloudy water until Thursday. It is safe to drink after one minute of running, according to the estates note. The bathroom tap is not affected. Bottled water is available at the porter's desk until Wednesday evening, and students do not need to pay for it.", [
    choices("reading-en-12-q1", "Which tap runs cloudy water?", [{ id: "a", text: "The bathroom tap" }, { id: "b", text: "The kitchen tap on floor 2" }, { id: "c", text: "Every tap until Thursday" }], "b", "The kitchen tap on floor 2 is the one mentioned."),
    choices("reading-en-12-q2", "When is that water safe to drink, according to the note?", [{ id: "a", text: "Immediately" }, { id: "b", text: "After one minute of running" }, { id: "c", text: "Only after Thursday" }], "b", "It is safe after one minute of running."),
    choices("reading-en-12-q3", "What is available at the porter's desk?", [{ id: "a", text: "Free bottled water until Wednesday evening" }, { id: "b", text: "A paid filter" }, { id: "c", text: "Nothing, because the bathroom tap is closed" }], "a", "Bottled water is free at the desk until Wednesday evening."),
  ]),
  reading("en", 13, "The plant sale", "The biology club sells houseplants in the atrium on Saturday from 11:00 to 13:00. Prices are written on the pots. Card payment is not accepted. Unsold plants go to the department greenhouse, not to the hall kitchen. Students may buy one large plant or two small ones.", [
    choices("reading-en-13-q1", "When is the plant sale?", [{ id: "a", text: "Saturday from 11:00 to 13:00" }, { id: "b", text: "Sunday morning" }, { id: "c", text: "All day in the greenhouse" }], "a", "Saturday from 11:00 to 13:00."),
    choices("reading-en-13-q2", "How can a student pay?", [{ id: "a", text: "By card only" }, { id: "b", text: "Not by card" }, { id: "c", text: "Payment is taken in the hall kitchen" }], "b", "Card payment is not accepted."),
    choices("reading-en-13-q3", "How many plants may one student buy?", [{ id: "a", text: "One large plant or two small ones" }, { id: "b", text: "As many as they can carry" }, { id: "c", text: "Only unsold plants from the kitchen" }], "a", "One large plant or two small ones."),
  ]),
];

const fiReading: ReadingTask[] = [
  reading("fi", 5, "Korjattu hissi", "Pohjoinen hissi on taas käytössä maanantaista, mutta perjantaihin asti se pysähtyy vain kerroksiin 1, 3 ja 5. Neljänteen kerrokseen mennään eteläportaita. Korjaajat lähtevät kello 16, ja sen jälkeen hissi kulkee kello 22 asti. Pyörätuolin käyttäjä voi pyytää vahtimestarilta avaimen eteläiseen hissiin. Avain on tiskillä, ei kellarissa.", [
    choices("reading-fi-5-q1", "Mihin kerroksiin pohjoinen hissi pysähtyy perjantaihin asti?", [{ id: "a", text: "Kerroksiin 1, 3 ja 5" }, { id: "b", text: "Kaikkiin kerroksiin" }, { id: "c", text: "Vain neljänteen kerrokseen" }], "a", "Hissi pysähtyy vain kerroksiin 1, 3 ja 5."),
    choices("reading-fi-5-q2", "Missä eteläisen hissin avain on?", [{ id: "a", text: "Kellarissa" }, { id: "b", text: "Vahtimestarin tiskillä" }, { id: "c", text: "Korjaajilla kello 16 jälkeen" }], "b", "Avain on tiskillä."),
    choices("reading-fi-5-q3", "Mihin asti hissi kulkee korjaajien lähdön jälkeen?", [{ id: "a", text: "Kello 16 asti" }, { id: "b", text: "Kello 22 asti" }, { id: "c", text: "Se suljetaan heti kello 16" }], "b", "Sen jälkeen hissi kulkee kello 22 asti."),
  ]),
  reading("fi", 6, "Jokipolku kiinni", "Jokipolku on kiinni venetalon ja kävelysillan välillä keskiviikkona, koska puuryhmä työskentelee. Kävelijät käyttävät Opistokatua. Polku aukeaa torstaina kello 7. Pyöriä ei saa taluttaa kiertotielle, joten pyörä jätetään venetalon telineeseen.", [
    choices("reading-fi-6-q1", "Miksi jokipolku on kiinni?", [{ id: "a", text: "Silta on purettu" }, { id: "b", text: "Puuryhmä työskentelee" }, { id: "c", text: "Polulla on pyöräkilpailu" }], "b", "Puuryhmä työskentelee keskiviikkona."),
    choices("reading-fi-6-q2", "Mitä reittiä kävelijät käyttävät?", [{ id: "a", text: "Opistokatua" }, { id: "b", text: "Venetalon kellaria" }, { id: "c", text: "Suljettua siltaa" }], "a", "Kävelijät käyttävät Opistokatua."),
    choices("reading-fi-6-q3", "Milloin polku aukeaa?", [{ id: "a", text: "Keskiviikkona kello 7" }, { id: "b", text: "Torstaina kello 7" }, { id: "c", text: "Se pysyy kiinni koko viikon" }], "b", "Polku aukeaa torstaina kello 7."),
  ]),
  reading("fi", 7, "Laboratoriotakki", "Tästä viikosta laboratoriotakki vaaditaan huoneessa C2 myös lyhyellä käynnillä. Takit ovat oven vieressä ja ne palautetaan samaan koukkuun. Ruoka on yhä kielletty. Käsineet tarvitaan vain, kun sininen kyltti on pöydällä, ei vihkon hakemiseen.", [
    choices("reading-fi-7-q1", "Kenellä pitää olla takki huoneessa C2?", [{ id: "a", text: "Vain niillä, jotka viipyvät tunnin" }, { id: "b", text: "Jokaisella tulijalla, myös lyhyellä käynnillä" }, { id: "c", text: "Vain käsineiden käyttäjillä" }], "b", "Takki vaaditaan myös lyhyellä käynnillä."),
    choices("reading-fi-7-q2", "Milloin käsineet tarvitaan?", [{ id: "a", text: "Aina vihkoa haettaessa" }, { id: "b", text: "Kun sininen kyltti on pöydällä" }, { id: "c", text: "Ei koskaan" }], "b", "Käsineet tarvitaan vain, kun sininen kyltti on pöydällä."),
    choices("reading-fi-7-q3", "Minne takki palautetaan?", [{ id: "a", text: "Samaan koukkuun" }, { id: "b", text: "Vihkokaappiin" }, { id: "c", text: "Kotiin" }], "a", "Takki palautetaan samaan koukkuun."),
  ]),
  reading("fi", 8, "Illan laskupaja", "Matematiikan iltapaja siirtyy tiistaisin kello 18 jälkeen huoneeseen 12, koska huone 4 on kuorolla. Ohjaaja aloittaa yhä kello 18.15. Mukaan tuodaan tehtäväpaperi, ei pelkkää tietokonetta. Paja päättyy kello 19.30, ja ovi lukittuu kello 19.40.", [
    choices("reading-fi-8-q1", "Missä tiistain iltapaja on kello 18 jälkeen?", [{ id: "a", text: "Huoneessa 4" }, { id: "b", text: "Huoneessa 12" }, { id: "c", text: "Kuorosalissa koko illan" }], "b", "Paja siirtyy huoneeseen 12."),
    choices("reading-fi-8-q2", "Mitä opiskelija tuo mukaan?", [{ id: "a", text: "Tehtäväpaperin" }, { id: "b", text: "Vain tietokoneen" }, { id: "c", text: "Kuoronuotit" }], "a", "Mukaan tuodaan tehtäväpaperi."),
    choices("reading-fi-8-q3", "Milloin ovi lukittuu?", [{ id: "a", text: "Kello 18.15" }, { id: "b", text: "Kello 19.30" }, { id: "c", text: "Kello 19.40" }], "c", "Ovi lukittuu kello 19.40."),
  ]),
  reading("fi", 9, "Liikuntasali ja lumi", "Jos portailla on lunta vielä kello 8, liikuntasali aukeaa kello 9.30 eikä 8.30. Ilmoitus laitetaan oveen, sitä ei lähetetä sähköpostilla. Sisäjuoksuradat pysyvät auki. Ulkorata on kiinni koko aamupäivän, vaikka portaat puhdistettaisiin myöhemmin.", [
    choices("reading-fi-9-q1", "Milloin sali aukeaa, jos portailla on lunta kello 8?", [{ id: "a", text: "Kello 8.30" }, { id: "b", text: "Kello 9.30" }, { id: "c", text: "Se on kiinni koko päivän" }], "b", "Sali aukeaa kello 9.30."),
    choices("reading-fi-9-q2", "Miten muutos ilmoitetaan?", [{ id: "a", text: "Sähköpostilla" }, { id: "b", text: "Oveen laitetulla ilmoituksella" }, { id: "c", text: "Vain juoksuradalla" }], "b", "Ilmoitus laitetaan oveen."),
    choices("reading-fi-9-q3", "Mikä on ulkoradan tilanne?", [{ id: "a", text: "Se aukeaa, kun portaat ovat puhtaat" }, { id: "b", text: "Se on kiinni koko aamupäivän" }, { id: "c", text: "Se on varattu sisäjuoksijoille" }], "b", "Ulkorata on kiinni koko aamupäivän."),
  ]),
  reading("fi", 10, "Kirjaston kannettava", "Kirjaston kannettava palautetaan tiskille 30 minuuttia ennen sulkemista, ei sulkemisaikana. Palautusluukkuun jätettyä konetta ei kuitata. Akun ei tarvitse olla täysi, mutta laturin pitää olla samassa laukussa. Myöhästyminen estää seuraavan varauksen seuraavaan päivään asti.", [
    choices("reading-fi-10-q1", "Milloin kannettava pitää palauttaa?", [{ id: "a", text: "Sulkemisaikana" }, { id: "b", text: "30 minuuttia ennen sulkemista" }, { id: "c", text: "Seuraavana aamuna" }], "b", "Se palautetaan 30 minuuttia ennen sulkemista."),
    choices("reading-fi-10-q2", "Mitä laukussa pitää olla?", [{ id: "a", text: "Täysi akku" }, { id: "b", text: "Laturi" }, { id: "c", text: "Palautusluukun kuitti" }], "b", "Laturin pitää olla samassa laukussa."),
    choices("reading-fi-10-q3", "Mitä myöhästymisestä seuraa?", [{ id: "a", text: "Seuraava varaus estyy seuraavaan päivään asti" }, { id: "b", text: "Kone kuitataan luukusta" }, { id: "c", text: "Ei mitään, jos akku on täysi" }], "a", "Myöhästyminen estää seuraavan varauksen seuraavaan päivään asti."),
  ]),
  reading("fi", 11, "Kuoroharjoitus", "Perjantain kuoroharjoitus siirtyy kappelista draamastudioon hääharjoituksen vuoksi. Se alkaa yhä kello 17 ja kestää yhä tunnin. Nuotit ovat pianon päällä, eivät kappelin kaapissa. Myöhässä tuleva käyttää sivuovea, jotta hääseurue ei häiriinny.", [
    choices("reading-fi-11-q1", "Missä perjantain harjoitus on?", [{ id: "a", text: "Kappelissa" }, { id: "b", text: "Draamastudiossa" }, { id: "c", text: "Häissä" }], "b", "Harjoitus siirtyy draamastudioon."),
    choices("reading-fi-11-q2", "Kauanko harjoitus kestää?", [{ id: "a", text: "Tunnin" }, { id: "b", text: "Häiden loppuun" }, { id: "c", text: "Puoli tuntia" }], "a", "Se kestää yhä tunnin."),
    choices("reading-fi-11-q3", "Missä nuotit ovat?", [{ id: "a", text: "Kappelin kaapissa" }, { id: "b", text: "Pianon päällä" }, { id: "c", text: "Sivuovella" }], "b", "Nuotit ovat pianon päällä."),
  ]),
  reading("fi", 12, "Samea hanavesi", "Toisen kerroksen keittiöhana laskee sameaa vettä torstaihin asti. Kiinteistöhuollon lapun mukaan vesi on juomakelpoista, kun sitä on laskenut minuutin. Kylpyhuoneen hana ei ole samea. Pullovettä saa vahtimestarin tiskiltä keskiviikkoiltaan asti, eikä siitä tarvitse maksaa.", [
    choices("reading-fi-12-q1", "Mikä hana laskee sameaa vettä?", [{ id: "a", text: "Kylpyhuoneen hana" }, { id: "b", text: "Toisen kerroksen keittiöhana" }, { id: "c", text: "Kaikki hanat torstain jälkeen" }], "b", "Keittiöhana toisessa kerroksessa."),
    choices("reading-fi-12-q2", "Milloin vesi on lapun mukaan juomakelpoista?", [{ id: "a", text: "Heti" }, { id: "b", text: "Minuutin laskemisen jälkeen" }, { id: "c", text: "Vasta torstain jälkeen" }], "b", "Kun vettä on laskenut minuutin."),
    choices("reading-fi-12-q3", "Mitä tiskiltä saa?", [{ id: "a", text: "Maksutonta pullovettä keskiviikkoiltaan asti" }, { id: "b", text: "Maksullisen suodattimen" }, { id: "c", text: "Ei mitään, koska kylpyhuone on kiinni" }], "a", "Pullovesi on maksutonta keskiviikkoiltaan asti."),
  ]),
  reading("fi", 13, "Kasvien myynti", "Biologian kerho myy huonekasveja aulassa lauantaina kello 11–13. Hinnat on kirjoitettu ruukkuihin. Kortilla ei voi maksaa. Myymättä jääneet kasvit menevät laitoksen kasvihuoneeseen, eivät ruokalan keittiöön. Opiskelija saa ostaa yhden ison kasvin tai kaksi pientä.", [
    choices("reading-fi-13-q1", "Milloin kasveja myydään?", [{ id: "a", text: "Lauantaina kello 11–13" }, { id: "b", text: "Sunnuntaiaamuna" }, { id: "c", text: "Koko päivän kasvihuoneessa" }], "a", "Lauantaina kello 11–13."),
    choices("reading-fi-13-q2", "Miten voi maksaa?", [{ id: "a", text: "Vain kortilla" }, { id: "b", text: "Kortilla ei voi maksaa" }, { id: "c", text: "Maksu hoidetaan ruokalan keittiössä" }], "b", "Kortilla ei voi maksaa."),
    choices("reading-fi-13-q3", "Kuinka monta kasvia yksi opiskelija saa ostaa?", [{ id: "a", text: "Yhden ison tai kaksi pientä" }, { id: "b", text: "Niin monta kuin jaksaa kantaa" }, { id: "c", text: "Vain keittiöön jääneet kasvit" }], "a", "Yhden ison kasvin tai kaksi pientä."),
  ]),
];

const enWriting: WritingTask[] = [
  writing("en", 5, "Ask for a locker", "Write to the housing desk. Ask for a locker near the science library, say why you need it this month, and ask what you should bring to collect the key.", 80, 140),
  writing("en", 6, "A quieter study hour", "Should the library keep one evening a week for group talk, or should every evening stay quiet? Give your view and one concrete reason.", 120, 180),
  writing("en", 7, "Explain a diagram", "A classmate missed the seminar. Explain one diagram or table you studied, in plain sentences, and say why it mattered to the argument.", 100, 160),
  writing("en", 8, "Rain and the field trip", "Write to your tutor. Tomorrow's field trip may be rained off. Ask whether it moves to the lab, and say which of two backup times you can attend.", 80, 140),
  writing("en", 9, "Two ways to take notes", "Compare taking notes by hand with taking notes on a laptop for a lecture you know well. Say which you would choose and why.", 140, 200),
  writing("en", 10, "Invite a speaker question", "Write three or four sentences you could ask a visiting engineer after a talk about campus heating. Make the questions specific.", 80, 140),
  writing("en", 11, "A lost notebook", "Write a notice for the hall board. You lost a green notebook in the dining hall on Tuesday evening. Say what it looks like and how to return it.", 60, 120),
  writing("en", 12, "Group roles", "Your group of three is preparing a ten-minute talk. Propose who does the opening, the example, and the ending, and give a reason for one of the roles.", 100, 160),
  writing("en", 13, "After the practice test", "Describe what you will do differently the next time you read under a time limit. Do not invent an exam score. Talk about one habit.", 100, 160),
];

const fiWriting: WritingTask[] = [
  writing("fi", 5, "Pyydä lokeroa", "Kirjoita asumisen palveluun. Pyydä lokeroa kirjaston läheltä, kerro miksi tarvitset sen tässä kuussa, ja kysy mitä tuot mukanasi, kun haet avaimen.", 40, 80),
  writing("fi", 6, "Hiljainen ilta", "Pitäisikö kirjastossa olla yksi ilta viikossa ryhmäpuhetta varten, vai pitäisikö jokaisen illan olla hiljainen? Kerro mielipiteesi ja yksi syy.", 50, 90),
  writing("fi", 7, "Selitä kaverille", "Kaveri ei ollut seminaarissa. Selitä yhdellä esimerkillä, mitä käsiteltiin, ja miksi se oli tärkeää.", 40, 80),
  writing("fi", 8, "Sade ja retki", "Kirjoita opettajalle. Huomisen retki voi peruuntua sateen vuoksi. Kysy, siirretäänkö se laboratorioon, ja kerro kumpi kahdesta vara-ajasta sopii sinulle.", 40, 80),
  writing("fi", 9, "Kaksi muistiinpanotapaa", "Vertaile käsin kirjoittamista ja tietokonemuistiinpanoja luennolla, jonka aiheen tunnet. Sano kumman valitset ja miksi.", 50, 100),
  writing("fi", 10, "Kysymys vieraalle", "Kirjoita kaksi kysymystä, jotka voisit esittää vierailevalle insinöörille kampuksen lämmityksestä. Tee kysymyksistä täsmällisiä.", 40, 80),
  writing("fi", 11, "Kadonneen vihkon ilmoitus", "Kirjoita ilmoitus taululle. Vihreä vihko jäi ruokalaan tiistai-iltana. Kuvaile vihko ja kerro, miten sen voi palauttaa.", 40, 80),
  writing("fi", 12, "Ryhmän tehtävät", "Kolmen hengen ryhmä pitää kymmenen minuutin esityksen. Ehdota, kuka aloittaa, kuka antaa esimerkin ja kuka lopettaa. Perustele yksi tehtävä.", 50, 90),
  writing("fi", 13, "Seuraava lukukerta", "Kerro, mitä teet toisin, kun luet seuraavan kerran aikarajan kanssa. Älä keksi koearvosanaa. Kuvaa yksi tapa.", 40, 90),
];

const enListening: ListeningTask[] = [
  listening("en", 5, "Porter about a parcel", "en-GB", "One porter.", "Your parcel is at the desk until Thursday at noon. It is the small blue box, not the large white one. Bring your resident card. If you miss Thursday, the parcel goes back to the sorting office on Friday morning.", [
    choices("listening-en-5-q1", "Until when is the parcel at the desk?", [{ id: "a", text: "Thursday at noon" }, { id: "b", text: "Friday morning" }, { id: "c", text: "It stays all month" }], "a", "It is at the desk until Thursday at noon."),
    choices("listening-en-5-q2", "Which box is it?", [{ id: "a", text: "The large white one" }, { id: "b", text: "The small blue one" }, { id: "c", text: "Both boxes" }], "b", "It is the small blue box."),
    choices("listening-en-5-q3", "What happens if Thursday is missed?", [{ id: "a", text: "The porter delivers it to the room" }, { id: "b", text: "It goes back to the sorting office on Friday morning" }, { id: "c", text: "It is opened at the desk" }], "b", "It goes back to the sorting office on Friday morning."),
  ]),
  listening("en", 6, "Changing a seminar room", "en-GB", "One tutor.", "Today's seminar is in room B7, not B17. We start at ten past the hour because the previous class overruns. Bring the printed article. The screen in B7 does not work, so I will use the board.", [
    choices("listening-en-6-q1", "Which room is the seminar in?", [{ id: "a", text: "B17" }, { id: "b", text: "B7" }, { id: "c", text: "The room with the working screen" }], "b", "It is in B7, not B17."),
    choices("listening-en-6-q2", "Why do they start late?", [{ id: "a", text: "The previous class overruns" }, { id: "b", text: "The article is not printed" }, { id: "c", text: "The board is missing" }], "a", "The previous class overruns."),
    choices("listening-en-6-q3", "What will the tutor use?", [{ id: "a", text: "The screen" }, { id: "b", text: "The board" }, { id: "c", text: "No notes" }], "b", "The screen does not work, so the tutor uses the board."),
  ]),
  listening("en", 7, "Two students and a printer", "en-GB", "Nora and Sam.", "Nora: The library printer is out of paper on floor 1. Sam: Floor 2 still has paper, but it jams if you send more than ten pages. Nora: I only need four pages. Sam: Then use floor 2 before noon. After noon that printer is reserved for the law workshop.", [
    choices("listening-en-7-q1", "What is wrong on floor 1?", [{ id: "a", text: "The printer is out of paper" }, { id: "b", text: "It is reserved all day" }, { id: "c", text: "It jams after four pages" }], "a", "Floor 1 is out of paper."),
    choices("listening-en-7-q2", "When should Nora use floor 2?", [{ id: "a", text: "After noon" }, { id: "b", text: "Before noon" }, { id: "c", text: "Only for the law workshop" }], "b", "Sam says to use floor 2 before noon."),
    choices("listening-en-7-q3", "How many pages does Nora need?", [{ id: "a", text: "Ten" }, { id: "b", text: "Four" }, { id: "c", text: "More than ten" }], "b", "Nora needs four pages."),
  ]),
  listening("en", 8, "A short safety talk", "en-GB", "One lab assistant.", "Before you light the burner, tie back long hair and keep the solvent bottle closed. The eye wash is by the window, not by the door. If the alarm sounds, leave the coats and go down the west stair. Do not use the lift.", [
    choices("listening-en-8-q1", "What should be done with long hair?", [{ id: "a", text: "Tie it back" }, { id: "b", text: "Cover it with a coat" }, { id: "c", text: "Leave it loose" }], "a", "Tie back long hair."),
    choices("listening-en-8-q2", "Where is the eye wash?", [{ id: "a", text: "By the door" }, { id: "b", text: "By the window" }, { id: "c", text: "In the lift" }], "b", "The eye wash is by the window."),
    choices("listening-en-8-q3", "What do you do if the alarm sounds?", [{ id: "a", text: "Take the lift with your coat" }, { id: "b", text: "Leave the coats and use the west stair" }, { id: "c", text: "Close the solvent and stay" }], "b", "Leave the coats and go down the west stair. Do not use the lift."),
  ]),
  listening("en", 9, "Bus to the museum", "en-GB", "One guide.", "The museum bus leaves from stand C at 9:10, not 9:00. The ride takes twenty minutes. Tickets were paid with the course fee, so do not buy another on the bus. We meet inside the entrance, by the clock, at 9:40.", [
    choices("listening-en-9-q1", "When does the bus leave?", [{ id: "a", text: "At 9:00" }, { id: "b", text: "At 9:10" }, { id: "c", text: "At 9:40" }], "b", "It leaves at 9:10."),
    choices("listening-en-9-q2", "How long is the ride?", [{ id: "a", text: "Ten minutes" }, { id: "b", text: "Twenty minutes" }, { id: "c", text: "Forty minutes" }], "b", "The ride takes twenty minutes."),
    choices("listening-en-9-q3", "Where do they meet at the museum?", [{ id: "a", text: "On the bus" }, { id: "b", text: "Inside the entrance, by the clock" }, { id: "c", text: "At stand C" }], "b", "They meet inside the entrance by the clock."),
  ]),
  listening("en", 10, "Returning a key", "en-GB", "One office worker.", "Please bring the practice-room key back before 21:00. If you are late, put it in the black box outside the office, not under the door. The box is emptied at 8:00 the next morning. A missing key means the room stays locked the following day.", [
    choices("listening-en-10-q1", "When should the key be back?", [{ id: "a", text: "Before 21:00" }, { id: "b", text: "At 8:00" }, { id: "c", text: "The following afternoon" }], "a", "Before 21:00."),
    choices("listening-en-10-q2", "Where does a late key go?", [{ id: "a", text: "Under the door" }, { id: "b", text: "In the black box outside the office" }, { id: "c", text: "It stays in the practice room" }], "b", "In the black box outside the office."),
    choices("listening-en-10-q3", "What happens if the key is missing?", [{ id: "a", text: "The room stays locked the following day" }, { id: "b", text: "The box is not emptied" }, { id: "c", text: "The office opens at 21:00" }], "a", "The room stays locked the following day."),
  ]),
  listening("en", 11, "Cafe lunch change", "en-GB", "One cafe worker.", "Lunch ends at 13:30 today, not 14:30, because the oven is being repaired. Soup is still available, but the hot pie is not. You can pay with your student card. Cash is not taken after 13:00.", [
    choices("listening-en-11-q1", "When does lunch end today?", [{ id: "a", text: "At 14:30" }, { id: "b", text: "At 13:30" }, { id: "c", text: "At 13:00" }], "b", "Lunch ends at 13:30."),
    choices("listening-en-11-q2", "What food is still available?", [{ id: "a", text: "Soup" }, { id: "b", text: "Hot pie" }, { id: "c", text: "Neither" }], "a", "Soup is still available. The hot pie is not."),
    choices("listening-en-11-q3", "How can you pay after 13:00?", [{ id: "a", text: "With cash" }, { id: "b", text: "With a student card" }, { id: "c", text: "Payment stops at noon" }], "b", "You can pay with a student card. Cash is not taken after 13:00."),
  ]),
  listening("en", 12, "A group deadline", "en-GB", "Leila and Owen.", "Leila: Can you send the slides tonight? Owen: I can send them by 9, but I will not have the references until tomorrow. Leila: Then send the slides tonight and add the references before 10 tomorrow. I will print two copies at 10:30.", [
    choices("listening-en-12-q1", "When will Owen send the slides?", [{ id: "a", text: "By 9 tonight" }, { id: "b", text: "Tomorrow at 10:30" }, { id: "c", text: "He will not send them" }], "a", "He can send them by 9."),
    choices("listening-en-12-q2", "When will the references be added?", [{ id: "a", text: "Tonight" }, { id: "b", text: "Before 10 tomorrow" }, { id: "c", text: "After printing" }], "b", "Before 10 tomorrow."),
    choices("listening-en-12-q3", "What will Leila do at 10:30?", [{ id: "a", text: "Write the references" }, { id: "b", text: "Print two copies" }, { id: "c", text: "Cancel the slides" }], "b", "She will print two copies at 10:30."),
  ]),
  listening("en", 13, "Workshop sign-up", "en-GB", "One librarian.", "The citation workshop on Monday has twelve seats. Sign the sheet on the desk today if you want one. Arriving without a name on the sheet does not guarantee a seat. The workshop starts at 9 and ends at 9:45. Coffee is afterwards, and it is not part of the twelve seats.", [
    choices("listening-en-13-q1", "How many seats are there?", [{ id: "a", text: "Nine" }, { id: "b", text: "Twelve" }, { id: "c", text: "Forty-five" }], "b", "Twelve seats."),
    choices("listening-en-13-q2", "How do you reserve a seat?", [{ id: "a", text: "Sign the sheet on the desk today" }, { id: "b", text: "Arrive and take any seat" }, { id: "c", text: "Stay for coffee" }], "a", "Sign the sheet today."),
    choices("listening-en-13-q3", "When does the workshop end?", [{ id: "a", text: "At 9" }, { id: "b", text: "At 9:45" }, { id: "c", text: "After coffee" }], "b", "It ends at 9:45."),
  ]),
];

const fiListening: ListeningTask[] = [
  listening("fi", 5, "Paketti vahtimestarilla", "fi-FI", "Yksi vahtimestari.", "Pakettisi on tiskillä torstaihin kello 12 asti. Se on pieni sininen laatikko, ei suuri valkoinen. Ota mukaan asukaskortti. Jos torstai menee ohi, paketti palaa lajitteluun perjantaiaamuna.", [
    choices("listening-fi-5-q1", "Mihin asti paketti on tiskillä?", [{ id: "a", text: "Torstaihin kello 12" }, { id: "b", text: "Perjantaiaamuun" }, { id: "c", text: "Koko kuukauden" }], "a", "Torstaihin kello 12 asti."),
    choices("listening-fi-5-q2", "Mikä laatikko se on?", [{ id: "a", text: "Suuri valkoinen" }, { id: "b", text: "Pieni sininen" }, { id: "c", text: "Molemmat" }], "b", "Pieni sininen laatikko."),
    choices("listening-fi-5-q3", "Mitä tapahtuu, jos torstai menee ohi?", [{ id: "a", text: "Vahtimestari vie paketin huoneeseen" }, { id: "b", text: "Se palaa lajitteluun perjantaiaamuna" }, { id: "c", text: "Se avataan tiskillä" }], "b", "Se palaa lajitteluun perjantaiaamuna."),
  ]),
  listening("fi", 6, "Seminaarisalin vaihto", "fi-FI", "Yksi opettaja.", "Tämän päivän seminaari on huoneessa B7, ei B17. Alamme kymmenen yli, koska edellinen ryhmä venyy. Tuo tulostettu artikkeli. B7:n näyttö ei toimi, joten käytän taulua.", [
    choices("listening-fi-6-q1", "Missä huoneessa seminaari on?", [{ id: "a", text: "B17" }, { id: "b", text: "B7" }, { id: "c", text: "Huoneessa, jossa näyttö toimii" }], "b", "Huoneessa B7, ei B17."),
    choices("listening-fi-6-q2", "Miksi aloitetaan myöhässä?", [{ id: "a", text: "Edellinen ryhmä venyy" }, { id: "b", text: "Artikkelia ei ole tulostettu" }, { id: "c", text: "Taulu puuttuu" }], "a", "Edellinen ryhmä venyy."),
    choices("listening-fi-6-q3", "Mitä opettaja käyttää?", [{ id: "a", text: "Näyttöä" }, { id: "b", text: "Taulua" }, { id: "c", text: "Ei mitään muistiinpanoja" }], "b", "Näyttö ei toimi, joten hän käyttää taulua."),
  ]),
  listening("fi", 7, "Kaksi opiskelijaa ja tulostin", "fi-FI", "Nora ja Sam.", "Nora: Kirjaston tulostimesta ensimmäisessä kerroksessa loppui paperi. Sam: Toisessa kerroksessa paperia on, mutta se jumittuu, jos lähetät yli kymmenen sivua. Nora: Tarvitsen vain neljä sivua. Sam: Käytä siis toista kerrosta ennen puoltapäivää. Puolenpäivän jälkeen tulostin on oikeustieteen pajalla.", [
    choices("listening-fi-7-q1", "Mikä on vialla ensimmäisessä kerroksessa?", [{ id: "a", text: "Paperi loppui" }, { id: "b", text: "Tulostin on varattu koko päivän" }, { id: "c", text: "Se jumittuu neljän sivun jälkeen" }], "a", "Paperi loppui."),
    choices("listening-fi-7-q2", "Milloin Noran kannattaa käyttää toista kerrosta?", [{ id: "a", text: "Puolenpäivän jälkeen" }, { id: "b", text: "Ennen puoltapäivää" }, { id: "c", text: "Vain oikeustieteen pajassa" }], "b", "Ennen puoltapäivää."),
    choices("listening-fi-7-q3", "Kuinka monta sivua Nora tarvitsee?", [{ id: "a", text: "Kymmenen" }, { id: "b", text: "Neljä" }, { id: "c", text: "Yli kymmenen" }], "b", "Neljä sivua."),
  ]),
  listening("fi", 8, "Lyhyt turvallisuuspuhe", "fi-FI", "Yksi laboratorioavustaja.", "Ennen kuin sytytät polttimen, sido pitkät hiukset ja pidä liuotinpullo kiinni. Silmäsuihku on ikkunan vieressä, ei oven vieressä. Jos hälytys soi, jätä takit ja mene länsiportaita. Älä käytä hissiä.", [
    choices("listening-fi-8-q1", "Mitä pitkille hiuksille tehdään?", [{ id: "a", text: "Ne sidotaan" }, { id: "b", text: "Ne peitetään takilla" }, { id: "c", text: "Ne jätetään auki" }], "a", "Sido pitkät hiukset."),
    choices("listening-fi-8-q2", "Missä silmäsuihku on?", [{ id: "a", text: "Oven vieressä" }, { id: "b", text: "Ikkunan vieressä" }, { id: "c", text: "Hississä" }], "b", "Ikkunan vieressä."),
    choices("listening-fi-8-q3", "Mitä tehdään, jos hälytys soi?", [{ id: "a", text: "Otetaan hissi takin kanssa" }, { id: "b", text: "Jätetään takit ja mennään länsiportaita" }, { id: "c", text: "Jäädään sulkemaan pullo" }], "b", "Jätä takit ja mene länsiportaita. Älä käytä hissiä."),
  ]),
  listening("fi", 9, "Bussi museoon", "fi-FI", "Yksi opas.", "Museobussi lähtee laituri C:ltä kello 9.10, ei 9.00. Matka kestää kaksikymmentä minuuttia. Lippu sisältyy kurssimaksuun, joten älä osta uutta bussissa. Tapaamme sisäänkäynnin luona kellon vieressä kello 9.40.", [
    choices("listening-fi-9-q1", "Mihin aikaan bussi lähtee?", [{ id: "a", text: "Kello 9.00" }, { id: "b", text: "Kello 9.10" }, { id: "c", text: "Kello 9.40" }], "b", "Kello 9.10."),
    choices("listening-fi-9-q2", "Kauanko matka kestää?", [{ id: "a", text: "Kymmenen minuuttia" }, { id: "b", text: "Kaksikymmentä minuuttia" }, { id: "c", text: "Neljäkymmentä minuuttia" }], "b", "Kaksikymmentä minuuttia."),
    choices("listening-fi-9-q3", "Missä ryhmä tapaa museolla?", [{ id: "a", text: "Bussissa" }, { id: "b", text: "Sisäänkäynnin luona kellon vieressä" }, { id: "c", text: "Laituri C:llä" }], "b", "Sisäänkäynnin luona kellon vieressä."),
  ]),
  listening("fi", 10, "Avaimen palautus", "fi-FI", "Yksi toimiston työntekijä.", "Tuo harjoitushuoneen avain takaisin ennen kello 21. Jos myöhästyt, laita avain toimiston ulkopuolella olevaan mustaan laatikkoon, älä oven alle. Laatikko tyhjennetään seuraavana aamuna kello 8. Kadonnut avain tarkoittaa, että huone pysyy lukossa seuraavan päivän.", [
    choices("listening-fi-10-q1", "Milloin avain pitää palauttaa?", [{ id: "a", text: "Ennen kello 21" }, { id: "b", text: "Kello 8" }, { id: "c", text: "Seuraavana iltapäivänä" }], "a", "Ennen kello 21."),
    choices("listening-fi-10-q2", "Minne myöhässä oleva avain laitetaan?", [{ id: "a", text: "Oven alle" }, { id: "b", text: "Mustaan laatikkoon toimiston ulkopuolelle" }, { id: "c", text: "Se jää harjoitushuoneeseen" }], "b", "Mustaan laatikkoon."),
    choices("listening-fi-10-q3", "Mitä tapahtuu, jos avain katoaa?", [{ id: "a", text: "Huone pysyy lukossa seuraavan päivän" }, { id: "b", text: "Laatikkoa ei tyhjennetä" }, { id: "c", text: "Toimisto aukeaa kello 21" }], "a", "Huone pysyy lukossa seuraavan päivän."),
  ]),
  listening("fi", 11, "Lounas päättyy aikaisemmin", "fi-FI", "Yksi kahvilan työntekijä.", "Lounas päättyy tänään kello 13.30, ei 14.30, koska uuni korjataan. Keittoa on yhä, mutta kuumaa piirasta ei ole. Voit maksaa opiskelijakortilla. Käteistä ei oteta kello 13 jälkeen.", [
    choices("listening-fi-11-q1", "Milloin lounas päättyy tänään?", [{ id: "a", text: "Kello 14.30" }, { id: "b", text: "Kello 13.30" }, { id: "c", text: "Kello 13" }], "b", "Kello 13.30."),
    choices("listening-fi-11-q2", "Mitä ruokaa on yhä?", [{ id: "a", text: "Keittoa" }, { id: "b", text: "Kuumaa piirasta" }, { id: "c", text: "Ei kumpaakaan" }], "a", "Keittoa on yhä. Piirasta ei ole."),
    choices("listening-fi-11-q3", "Miten voi maksaa kello 13 jälkeen?", [{ id: "a", text: "Käteisellä" }, { id: "b", text: "Opiskelijakortilla" }, { id: "c", text: "Maksu päättyy keskipäivällä" }], "b", "Opiskelijakortilla. Käteistä ei oteta kello 13 jälkeen."),
  ]),
  listening("fi", 12, "Ryhmän määräaika", "fi-FI", "Leila ja Owen.", "Leila: Voitko lähettää diat tänä iltana? Owen: Voin lähettää ne kello 9 mennessä, mutta lähteet valmistuvat vasta huomenna. Leila: Lähetä diat siis illalla ja lisää lähteet ennen huomista kello 10. Tulostan kaksi kopiota kello 10.30.", [
    choices("listening-fi-12-q1", "Milloin Owen lähettää diat?", [{ id: "a", text: "Kello 9 mennessä illalla" }, { id: "b", text: "Huomenna kello 10.30" }, { id: "c", text: "Hän ei lähetä niitä" }], "a", "Kello 9 mennessä."),
    choices("listening-fi-12-q2", "Milloin lähteet lisätään?", [{ id: "a", text: "Tänä iltana" }, { id: "b", text: "Ennen huomista kello 10" }, { id: "c", text: "Tulostuksen jälkeen" }], "b", "Ennen huomista kello 10."),
    choices("listening-fi-12-q3", "Mitä Leila tekee kello 10.30?", [{ id: "a", text: "Kirjoittaa lähteet" }, { id: "b", text: "Tulostaa kaksi kopiota" }, { id: "c", text: "Peruuttaa diat" }], "b", "Tulostaa kaksi kopiota."),
  ]),
  listening("fi", 13, "Työpajan ilmoittautuminen", "fi-FI", "Yksi kirjaston työntekijä.", "Maanantain lähdetyöpajassa on kaksitoista paikkaa. Kirjoita nimesi tiskin listaan tänään, jos haluat paikan. Ilman nimeä paikasta ei ole takeita. Työpaja alkaa kello 9 ja päättyy kello 9.45. Kahvi on sen jälkeen, eikä kahvi vie paikkaa kahdestatoista.", [
    choices("listening-fi-13-q1", "Kuinka monta paikkaa on?", [{ id: "a", text: "Yhdeksän" }, { id: "b", text: "Kaksitoista" }, { id: "c", text: "Neljäkymmentäviisi" }], "b", "Kaksitoista."),
    choices("listening-fi-13-q2", "Miten paikan saa?", [{ id: "a", text: "Kirjoittamalla nimen listaan tänään" }, { id: "b", text: "Tulemalla ja istumalla vapaaseen paikkaan" }, { id: "c", text: "Jäämällä kahville" }], "a", "Nimi listaan tänään."),
    choices("listening-fi-13-q3", "Milloin työpaja päättyy?", [{ id: "a", text: "Kello 9" }, { id: "b", text: "Kello 9.45" }, { id: "c", text: "Kahvin jälkeen" }], "b", "Kello 9.45."),
  ]),
];

export const extraReadingTasks: ReadingTask[] = [...enReading, ...fiReading];
export const extraWritingTasks: WritingTask[] = [...enWriting, ...fiWriting];
export const extraListeningTasks: ListeningTask[] = [...enListening, ...fiListening];
