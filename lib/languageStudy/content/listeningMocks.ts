import type { MockPart } from "../types";
import { listen, mcq } from "./mockBuild";

const tour = `Receptionist: The Saturday campus tour starts at the north gate at 10:15, not at the library. Visitor: Is the tour free? Receptionist: Students pay nothing. Guests pay 6 dollars at the gate, in cash or by card. Visitor: Can we see the engineering labs? Receptionist: Only the ground-floor display, and only if you wear the blue badge the guide gives you. The roof terrace is closed. The tour ends at the cafe at 11:40. If it rains, the group still meets at the north gate and then uses the covered walk.`;

const gallery = `Guide: Welcome to the small gallery on level two. Bags go in the wooden lockers. Locker keys stay with you. Photos without flash are allowed in the first room and not in the second room, because the drawings there are on loan. The film starts at 3 and lasts 18 minutes. There is no late entry. The shop closes 15 minutes before the gallery. Today the gallery closes at 5, so the shop closes at 4:45. Coats may stay on. Food and drink stay outside.`;

const lab = `Mina: The lab report is due Monday at 9. Arun: I can draft the method tonight if you check the numbers. Mina: The beaker was 250 millilitres, and we heated it for 12 minutes, not 20. Arun: I will put the graph in the appendix. Mina: Please label the axes. I will write the conclusion, and it should say the second sample cooled faster. Arun: I will send the draft by 8 pm on Sunday. Do not use the lab printer. It is out of toner until Tuesday.`;

const sleep = `Lecturer: A short campus study asked 40 students to keep the same bedtime for five nights. The group that stopped screens at 11 scored a mean of 7 more points on a morning recall test than the group that used screens until midnight. The study did not measure sleep with machines. Students wrote their own bedtimes. The lecturer says a five-night trial is too short to call this a treatment. The recall test had 20 items. Coffee after 4 pm was not banned, and the lecturer lists that as a weakness. The notes will be on the course page on Thursday.`;

export const ieltsListeningParts: MockPart[] = [
  listen("ielts-l1", "Section 1. A campus tour booking", tour, [
    mcq("mock-listening-en-ielts-q1", "Where does the Saturday tour start?", "At the north gate", ["At the library", "At the cafe", "On the roof"], "The tour starts at the north gate, not at the library.", "a"),
    mcq("mock-listening-en-ielts-q2", "What time does it start?", "10:15", ["11:40", "6:00", "When it rains"], "It starts at 10:15."),
    mcq("mock-listening-en-ielts-q3", "What do guests pay?", "6 dollars", ["Nothing", "The price of a blue badge", "11 dollars"], "Guests pay 6 dollars. Students pay nothing.", "c"),
    mcq("mock-listening-en-ielts-q4", "Which part of the labs can the group see?", "The ground-floor display", ["Every lab", "The roof terrace", "Only the cafe"], "Only the ground-floor display."),
    mcq("mock-listening-en-ielts-q5", "What does the guide give visitors?", "A blue badge", ["A locker key", "A free drink", "A map of the roof"], "They wear the blue badge the guide gives them.", "d"),
    mcq("mock-listening-en-ielts-q6", "Where does the tour end?", "At the cafe", ["At the north gate", "In the labs", "On the terrace"], "The tour ends at the cafe.", "a"),
    mcq("mock-listening-en-ielts-q7", "What time does it end?", "11:40", ["10:15", "5:00", "After the film"], "It ends at 11:40."),
    mcq("mock-listening-en-ielts-q8", "What is closed?", "The roof terrace", ["The north gate", "The cafe", "The ground floor"], "The roof terrace is closed.", "c"),
    mcq("mock-listening-en-ielts-q9", "What happens if it rains?", "The group still meets at the north gate", ["The tour is cancelled", "The group meets at the library", "Guests do not pay"], "The group still meets at the north gate and uses the covered walk."),
    mcq("mock-listening-en-ielts-q10", "How can guests pay?", "In cash or by card", ["Only in cash", "Only with a student card", "They cannot pay at the gate"], "Guests pay in cash or by card.", "d"),
  ], "en-GB", "A receptionist and a visitor."),
  listen("ielts-l2", "Section 2. A gallery talk", gallery, [
    mcq("mock-listening-en-ielts-q11", "Where do bags go?", "In the wooden lockers", ["In the second room", "In the shop", "With the guide"], "Bags go in the wooden lockers.", "a"),
    mcq("mock-listening-en-ielts-q12", "Who keeps the locker keys?", "The visitors", ["The guide", "The shop", "No one"], "Locker keys stay with you."),
    mcq("mock-listening-en-ielts-q13", "Where are photos without flash allowed?", "In the first room", ["In the second room", "In both rooms", "Nowhere"], "Photos without flash are allowed in the first room and not in the second.", "c"),
    mcq("mock-listening-en-ielts-q14", "Why are photos banned in the second room?", "The drawings are on loan", ["The film is starting", "The lockers are full", "The shop is closed"], "The drawings there are on loan."),
    mcq("mock-listening-en-ielts-q15", "What time does the film start?", "At 3", ["At 4:45", "At 5", "At 18:00"], "The film starts at 3.", "d"),
    mcq("mock-listening-en-ielts-q16", "How long is the film?", "18 minutes", ["15 minutes", "5 minutes", "45 minutes"], "It lasts 18 minutes."),
    mcq("mock-listening-en-ielts-q17", "Is late entry allowed?", "No", ["Yes, until the shop closes", "Only for students", "Only if you have a locker"], "There is no late entry.", "a"),
    mcq("mock-listening-en-ielts-q18", "What time does the shop close today?", "4:45", ["5:00", "3:00", "15:00 exactly as the film starts"], "The gallery closes at 5, so the shop closes at 4:45."),
    mcq("mock-listening-en-ielts-q19", "May visitors keep their coats on?", "Yes", ["No", "Only in the first room", "Only during the film"], "Coats may stay on.", "c"),
    mcq("mock-listening-en-ielts-q20", "Where must food and drink stay?", "Outside", ["In the lockers", "In the first room", "In the shop"], "Food and drink stay outside.", "d"),
  ], "en-GB", "One guide speaking to a group."),
  listen("ielts-l3", "Section 3. A lab report", lab, [
    mcq("mock-listening-en-ielts-q21", "When is the report due?", "Monday at 9", ["Sunday at 8 pm", "Tuesday", "Tonight"], "The lab report is due Monday at 9.", "a"),
    mcq("mock-listening-en-ielts-q22", "What will Arun draft tonight?", "The method", ["The conclusion", "The axes only", "A new experiment"], "Arun can draft the method tonight."),
    mcq("mock-listening-en-ielts-q23", "How large was the beaker?", "250 millilitres", ["12 millilitres", "20 millilitres", "8 millilitres"], "The beaker was 250 millilitres.", "c"),
    mcq("mock-listening-en-ielts-q24", "How long did they heat it?", "12 minutes", ["20 minutes", "9 minutes", "Until Tuesday"], "They heated it for 12 minutes, not 20."),
    mcq("mock-listening-en-ielts-q25", "Where will the graph go?", "In the appendix", ["In the conclusion", "On the printer", "In the method title only"], "Arun will put the graph in the appendix.", "d"),
    mcq("mock-listening-en-ielts-q26", "What must Arun label?", "The axes", ["The beaker", "The printer", "The due time"], "Mina asks him to label the axes."),
    mcq("mock-listening-en-ielts-q27", "Who writes the conclusion?", "Mina", ["Arun", "Both of them tonight", "The lab technician"], "Mina will write the conclusion.", "a"),
    mcq("mock-listening-en-ielts-q28", "What should the conclusion say?", "The second sample cooled faster", ["The first sample was larger", "The printer is fixed", "The report is late"], "It should say the second sample cooled faster."),
    mcq("mock-listening-en-ielts-q29", "When will Arun send the draft?", "By 8 pm on Sunday", ["Monday at 9", "Tuesday", "Tonight at midnight"], "He will send the draft by 8 pm on Sunday.", "c"),
    mcq("mock-listening-en-ielts-q30", "Why should they avoid the lab printer?", "It is out of toner until Tuesday", ["It is in another building", "It closes at 9", "Mina needs it"], "It is out of toner until Tuesday.", "d"),
  ], "en-GB", "Two students, Mina and Arun."),
  listen("ielts-l4", "Section 4. A short lecture on sleep", sleep, [
    mcq("mock-listening-en-ielts-q31", "How many students were in the study?", "40", ["7", "20", "5"], "The study asked 40 students.", "a"),
    mcq("mock-listening-en-ielts-q32", "How many nights was the bedtime kept?", "Five", ["Seven", "Eleven", "Twenty"], "They kept the same bedtime for five nights."),
    mcq("mock-listening-en-ielts-q33", "Which group scored higher on the recall test?", "The group that stopped screens at 11", ["The group that used screens until midnight", "Both groups scored the same", "The group that drank coffee"], "The group that stopped screens at 11 scored higher.", "c"),
    mcq("mock-listening-en-ielts-q34", "By how many points was that mean higher?", "7", ["11", "20", "40"], "They scored a mean of 7 more points."),
    mcq("mock-listening-en-ielts-q35", "How was sleep measured?", "Students wrote their own bedtimes", ["With machines", "By a nurse", "It was not recorded"], "The study did not use machines. Students wrote their own bedtimes.", "d"),
    mcq("mock-listening-en-ielts-q36", "What does the lecturer say about calling this a treatment?", "A five-night trial is too short", ["It is ready for a clinic", "Coffee made it a treatment", "The course page already calls it a treatment"], "A five-night trial is too short to call this a treatment."),
    mcq("mock-listening-en-ielts-q37", "How many items were on the recall test?", "20", ["40", "7", "4"], "The recall test had 20 items.", "a"),
    mcq("mock-listening-en-ielts-q38", "Was coffee after 4 pm banned?", "No", ["Yes", "Only for the screen group", "Only on Thursday"], "Coffee after 4 pm was not banned."),
    mcq("mock-listening-en-ielts-q39", "How does the lecturer describe the coffee rule?", "As a weakness", ["As the main result", "As a banned step", "As a reason the scores fell by 20"], "The lecturer lists that as a weakness.", "c"),
    mcq("mock-listening-en-ielts-q40", "When will the notes be on the course page?", "On Thursday", ["On Monday", "After five nights", "They will not be posted"], "The notes will be on the course page on Thursday.", "d"),
  ], "en-GB", "One lecturer."),
];

const office = `Advisor: Your writing appointment is Wednesday at 2:20 in room C12. Student: Can I bring a draft on my phone? Advisor: Yes, but also bring a paper copy, because the room has no guest wifi that day. Student: How long is the slot? Advisor: Twenty-five minutes. If you are more than ten minutes late, the slot is given away. The tutor is Nia. She does not mark the essay. She comments on the structure only.`;

const lecture = `Professor: The field trip forms are due Friday at noon, not at the end of the lecture. The bus leaves from bay 4 at 8:05. Bring the yellow form and a bottle of water. Lunch is not provided. The site closes at 1, and the bus returns by 2:30. Students who miss the bus cannot join later, because the gate locks at 8:20. The reading for the trip is chapter 6, pages 90 to 104.`;

const talk = `Tutor: In today's seminar we will look at one graph, not the whole report. The vertical axis is hours of sleep, and the horizontal axis is the week number. Week 3 is the lowest point, at 5.5 hours. Week 6 returns to 7 hours. Do not describe week 3 as the cause of the exam result. The exam was in week 8, and this graph stops at week 6. Your paragraph should be about 80 words.`;

const counter = `Librarian: The reserve copy of the map book is at the desk, not on the shelf. You can use it for two hours inside the library. The copy number is 14. Scanning is allowed for ten pages, not the whole book. The scanner on the left is free. The one on the right takes a card. I will hold the book if you return within fifteen minutes. After that it goes back to the desk queue.`;

export const toeflListeningParts: MockPart[] = [
  listen("toefl-l1", "Conversation. A writing appointment", office, [
    mcq("mock-listening-en-toefl-q1", "When is the appointment?", "Wednesday at 2:20", ["Friday at noon", "In ten minutes", "For twenty-five hours"], "It is Wednesday at 2:20.", "a"),
    mcq("mock-listening-en-toefl-q2", "Which room?", "C12", ["Bay 4", "The library desk", "Wifi"], "The room is C12."),
    mcq("mock-listening-en-toefl-q3", "Why does the student need a paper copy?", "The room has no guest wifi that day", ["The phone is not allowed on campus", "Nia only reads paper essays for a mark", "The slot is ten minutes"], "The room has no guest wifi that day.", "c"),
    mcq("mock-listening-en-toefl-q4", "How long is the slot?", "Twenty-five minutes", ["Ten minutes", "Two hours", "Until Friday"], "The slot is twenty-five minutes."),
    mcq("mock-listening-en-toefl-q5", "What happens if the student is more than ten minutes late?", "The slot is given away", ["Nia marks the essay", "The wifi is switched on", "The appointment moves to C13"], "The slot is given away.", "d"),
    mcq("mock-listening-en-toefl-q6", "Who is the tutor?", "Nia", ["The advisor on the phone only", "A marker", "The librarian"], "The tutor is Nia."),
    mcq("mock-listening-en-toefl-q7", "What will Nia comment on?", "The structure only", ["The final mark", "The wifi", "The whole grammar of the essay as a score"], "She comments on the structure only. She does not mark the essay.", "a"),
  ], "en-US", "An advisor and a student."),
  listen("toefl-l2", "Talk. A field trip", lecture, [
    mcq("mock-listening-en-toefl-q8", "When are the forms due?", "Friday at noon", ["At the end of the lecture", "At 8:05", "At 2:30"], "The forms are due Friday at noon, not at the end of the lecture.", "c"),
    mcq("mock-listening-en-toefl-q9", "Where does the bus leave from?", "Bay 4", ["The gate", "Chapter 6", "The lecture hall"], "The bus leaves from bay 4."),
    mcq("mock-listening-en-toefl-q10", "What time does the bus leave?", "8:05", ["8:20", "1:00", "2:30"], "The bus leaves at 8:05.", "a"),
    mcq("mock-listening-en-toefl-q11", "What should students bring besides the yellow form?", "A bottle of water", ["Lunch", "Chapter 5", "A locker key"], "Bring the yellow form and a bottle of water."),
    mcq("mock-listening-en-toefl-q12", "Is lunch provided?", "No", ["Yes, at 1", "Only on the bus", "Only if the gate is open"], "Lunch is not provided.", "d"),
    mcq("mock-listening-en-toefl-q13", "Why can a student not join later?", "The gate locks at 8:20", ["The bus returns at noon", "The forms are optional", "The site opens at 2:30"], "The gate locks at 8:20."),
    mcq("mock-listening-en-toefl-q14", "Which pages are the reading?", "Pages 90 to 104", ["Pages 6 to 8", "The whole book", "Bay 4 notes"], "Chapter 6, pages 90 to 104.", "c"),
  ], "en-US", "A professor giving instructions."),
  listen("toefl-l3", "Lecture. One graph", talk, [
    mcq("mock-listening-en-toefl-q15", "What will the seminar look at?", "One graph", ["The whole report", "The exam paper", "Week 8 only"], "They will look at one graph, not the whole report.", "a"),
    mcq("mock-listening-en-toefl-q16", "What is the vertical axis?", "Hours of sleep", ["The week number", "The exam result", "The word count"], "The vertical axis is hours of sleep."),
    mcq("mock-listening-en-toefl-q17", "Which week is the lowest point?", "Week 3", ["Week 6", "Week 8", "Week 80"], "Week 3 is the lowest point.", "c"),
    mcq("mock-listening-en-toefl-q18", "What was the lowest value?", "5.5 hours", ["7 hours", "80 words", "8 weeks"], "Week 3 is at 5.5 hours."),
    mcq("mock-listening-en-toefl-q19", "What happens in week 6?", "Sleep returns to 7 hours", ["The exam is held", "The graph ends at 5.5", "The paragraph is collected"], "Week 6 returns to 7 hours.", "d"),
    mcq("mock-listening-en-toefl-q20", "Why should students not call week 3 the cause of the exam result?", "The exam was in week 8 and the graph stops at week 6", ["Week 3 is the highest point", "The axis is word count", "The tutor banned the paragraph"], "The exam was in week 8, and the graph stops at week 6."),
    mcq("mock-listening-en-toefl-q21", "About how long should the paragraph be?", "80 words", ["5.5 words", "8 words", "A full report"], "The paragraph should be about 80 words.", "a"),
  ], "en-US", "A tutor in a seminar."),
  listen("toefl-l4", "Conversation. A reserve book", counter, [
    mcq("mock-listening-en-toefl-q22", "Where is the reserve copy?", "At the desk", ["On the shelf", "In the scanner", "In the queue at home"], "It is at the desk, not on the shelf.", "c"),
    mcq("mock-listening-en-toefl-q23", "How long can it be used?", "For two hours", ["For ten hours", "For fifteen hours", "Until the card runs out"], "You can use it for two hours inside the library."),
    mcq("mock-listening-en-toefl-q24", "What is the copy number?", "14", ["10", "2", "15"], "The copy number is 14.", "a"),
    mcq("mock-listening-en-toefl-q25", "How many pages may be scanned?", "Ten pages", ["The whole book", "Two pages", "Fifteen pages"], "Scanning is allowed for ten pages, not the whole book."),
    mcq("mock-listening-en-toefl-q26", "Which scanner is free?", "The one on the left", ["The one on the right", "Both", "Neither"], "The scanner on the left is free.", "d"),
    mcq("mock-listening-en-toefl-q27", "What does the scanner on the right need?", "A card", ["Ten pages already scanned", "The copy number written on it", "A two-hour booking"], "The one on the right takes a card."),
    mcq("mock-listening-en-toefl-q28", "How long will the librarian hold the book?", "Fifteen minutes", ["Two hours", "Until the queue ends", "Ten minutes"], "The librarian will hold it if you return within fifteen minutes.", "c"),
  ], "en-US", "A librarian and a student."),
];

const pteA = `Staff member: The practice room on level one is free from 4 to 5 today. After 5 it is booked by the choir. You may use the upright piano, not the grand. The grand is locked. Bring your own headphones if you use the keyboard. The door code is 4 then 1 then 8. Please leave the window shut. The heater is already on. If you need a music stand, ask at the desk before 4:30, because the desk closes then.`;

const pteB = `Speaker: The volunteer fair is in the gym on Wednesday from 11 to 2. Tables are numbered. The language-exchange table is 12, near the water fountain, not near the stage. Sign-up sheets hold eight names each. A second sheet is under the first. Doors open to students at 11 and to guests at 12. The gym has no cloakroom. Bags stay under your own table.`;

const pteC = `Caller: This is the clinic. Your hearing screen is Thursday at 9:30, not 9. Please arrive ten minutes early and bring the white form from the email. If you miss this time, the next open screen is in three weeks. The clinic is in building H, room 2. Do not go to the main hospital desk.`;

export const pteListeningParts: MockPart[] = [
  listen("pte-l1", "A practice room", pteA, [
    mcq("mock-listening-en-pte-q1", "When is the practice room free today?", "From 4 to 5", ["After 5", "Before 4:30 only", "All evening"], "It is free from 4 to 5. After 5 the choir has it.", "a"),
    mcq("mock-listening-en-pte-q2", "Which piano may be used?", "The upright piano", ["The grand piano", "Both pianos", "Neither"], "You may use the upright piano, not the grand."),
    mcq("mock-listening-en-pte-q3", "What is the door code?", "4, then 1, then 8", ["4:30", "5", "The choir code"], "The door code is 4 then 1 then 8.", "c"),
    mcq("mock-listening-en-pte-q4", "What should stay shut?", "The window", ["The heater", "The keyboard", "The desk"], "Leave the window shut."),
    mcq("mock-listening-en-pte-q5", "When does the desk close?", "At 4:30", ["At 4", "At 5", "When the choir starts"], "Ask for a music stand before 4:30, because the desk closes then.", "d"),
    mcq("mock-listening-en-pte-q6", "What should you bring for the keyboard?", "Your own headphones", ["A music stand from home", "The grand piano key", "Nothing"], "Bring your own headphones if you use the keyboard."),
  ], "en-GB", "One staff member."),
  listen("pte-l2", "The volunteer fair", pteB, [
    mcq("mock-listening-en-pte-q7", "Where is the fair?", "In the gym", ["On the stage only", "At table 8", "In a cloakroom"], "The fair is in the gym.", "a"),
    mcq("mock-listening-en-pte-q8", "Which day?", "Wednesday", ["Thursday", "From 8 to 12", "The speaker does not say a day"], "It is on Wednesday."),
    mcq("mock-listening-en-pte-q9", "What number is the language-exchange table?", "12", ["11", "2", "8"], "The language-exchange table is 12.", "c"),
    mcq("mock-listening-en-pte-q10", "Where is that table?", "Near the water fountain", ["Near the stage", "Outside the gym", "In the cloakroom"], "It is near the water fountain, not near the stage."),
    mcq("mock-listening-en-pte-q11", "How many names fit on one sign-up sheet?", "Eight", ["Twelve", "Two", "Eleven"], "Sign-up sheets hold eight names each.", "d"),
    mcq("mock-listening-en-pte-q12", "When may guests enter?", "At 12", ["At 11", "At 2", "At 8"], "Doors open to students at 11 and to guests at 12."),
  ], "en-GB", "One speaker giving directions."),
  listen("pte-l3", "A clinic call", pteC, [
    mcq("mock-listening-en-pte-q13", "What time is the hearing screen?", "Thursday at 9:30", ["Thursday at 9", "In three weeks at 9", "Room 2 at noon"], "It is Thursday at 9:30, not 9.", "a"),
    mcq("mock-listening-en-pte-q14", "How early should you arrive?", "Ten minutes", ["Thirty minutes", "Three weeks", "At the hospital desk"], "Arrive ten minutes early."),
    mcq("mock-listening-en-pte-q15", "What should you bring?", "The white form from the email", ["A hearing aid", "The main hospital letter", "Nothing"], "Bring the white form from the email.", "c"),
    mcq("mock-listening-en-pte-q16", "If you miss this time, when is the next screen?", "In three weeks", ["The next morning", "On Thursday at 9", "The caller does not know"], "The next open screen is in three weeks."),
    mcq("mock-listening-en-pte-q17", "Where is the clinic?", "Building H, room 2", ["The main hospital desk", "The gym", "Table 12"], "The clinic is in building H, room 2.", "d"),
  ], "en-GB", "A clinic caller."),
];

const fiBus = `Kuljettaja: Kampusbussi lähtee torstaina kello 8.20 pysäkiltä B, ei pysäkiltä A. Opiskelijakortilla matka maksaa 1,50. Ilman korttia hinta on 3. Käteistä ei oteta vastaan. Pyörää ei voi ottaa mukaan. Perillä ollaan kirjastolla noin kello 8.40. Jos myöhästyt, seuraava bussi lähtee kello 9.05.`;

const fiLab = `Opettaja: Laboratoriotakki on pakollinen. Suojalasit saat tiskiltä, mutta hanskat pitää tuoda itse. Työ alkaa kello 13 ja päättyy kello 14.30. Raportti palautetaan samana päivänä kello 18 mennessä verkkoon. Paperia ei jätetä luokkaan. Jos olet poissa, ilmoita siitä aamulla sähköpostilla.`;

const fiCafe = `Tarjoilija: Päivän keitto on linssikeitto. Se loppuu, kun kattila tyhjenee, yleensä ennen kello 13. Leipä kuuluu keiton hintaan. Kahvi ei kuulu. Opiskelijahinta on 2,70. Maksu vain kortilla kello 12 jälkeen. Istumapaikkoja on parvekkeella, jos sali on täynnä.`;

export const ykiListeningParts: MockPart[] = [
  listen("yki-l1", "Kampusbussi", fiBus, [
    mcq("mock-listening-fi-yki-q1", "Mistä bussi lähtee?", "Pysäkiltä B", ["Pysäkiltä A", "Kirjastolta", "Kello 9.05"], "Bussi lähtee pysäkiltä B, ei pysäkiltä A.", "a"),
    mcq("mock-listening-fi-yki-q2", "Milloin bussi lähtee?", "Kello 8.20", ["Kello 8.40", "Kello 9.05", "Torstain jälkeen"], "Se lähtee torstaina kello 8.20."),
    mcq("mock-listening-fi-yki-q3", "Paljonko matka maksaa opiskelijakortilla?", "1,50", ["3", "8,20", "Ei mitään"], "Opiskelijakortilla matka maksaa 1,50.", "c"),
    mcq("mock-listening-fi-yki-q4", "Voiko pyörän ottaa mukaan?", "Ei", ["Kyllä", "Vain ilman korttia", "Vain seuraavassa bussissa"], "Pyörää ei voi ottaa mukaan."),
    mcq("mock-listening-fi-yki-q5", "Milloin seuraava bussi lähtee, jos myöhästyt?", "Kello 9.05", ["Kello 8.20", "Kello 8.40", "Sitä ei sanota"], "Seuraava bussi lähtee kello 9.05.", "d"),
  ], "fi-FI", "Kuljettaja puhuu."),
  listen("yki-l2", "Laboratorio", fiLab, [
    mcq("mock-listening-fi-yki-q6", "Mikä on pakollinen?", "Laboratoriotakki", ["Omat suojalasit kotoa", "Paperiraportti", "Aamun sähköposti"], "Laboratoriotakki on pakollinen.", "a"),
    mcq("mock-listening-fi-yki-q7", "Mitä pitää tuoda itse?", "Hanskat", ["Suojalasit", "Takki", "Verkkolomake"], "Hanskat pitää tuoda itse."),
    mcq("mock-listening-fi-yki-q8", "Milloin työ päättyy?", "Kello 14.30", ["Kello 13", "Kello 18", "Aamulla"], "Työ päättyy kello 14.30.", "c"),
    mcq("mock-listening-fi-yki-q9", "Milloin raportti palautetaan?", "Samana päivänä kello 18 mennessä", ["Luokkaan paperilla", "Aamulla", "Seuraavana päivänä"], "Raportti palautetaan samana päivänä kello 18 mennessä verkkoon."),
    mcq("mock-listening-fi-yki-q10", "Miten poissaolosta ilmoitetaan?", "Aamulla sähköpostilla", ["Luokassa paperilla", "Bussissa", "Sitä ei tarvitse ilmoittaa"], "Ilmoita siitä aamulla sähköpostilla.", "d"),
  ], "fi-FI", "Opettaja puhuu."),
  listen("yki-l3", "Kahvila", fiCafe, [
    mcq("mock-listening-fi-yki-q11", "Mikä on päivän keitto?", "Linssikeitto", ["Kahvi", "Leipä", "Parvekekahvi"], "Päivän keitto on linssikeitto.", "a"),
    mcq("mock-listening-fi-yki-q12", "Kuuluuko leipä keiton hintaan?", "Kyllä", ["Ei", "Vain kello 12 jälkeen", "Vain parvekkeella"], "Leipä kuuluu keiton hintaan."),
    mcq("mock-listening-fi-yki-q13", "Kuuluuko kahvi hintaan?", "Ei", ["Kyllä", "Vain opiskelijalle", "Kello 13 asti"], "Kahvi ei kuulu.", "c"),
    mcq("mock-listening-fi-yki-q14", "Mikä on opiskelijahinta?", "2,70", ["12", "13", "Sitä ei sanota"], "Opiskelijahinta on 2,70."),
    mcq("mock-listening-fi-yki-q15", "Missä voi istua, jos sali on täynnä?", "Parvekkeella", ["Vain tiskillä", "Bussissa", "Laboratoriossa"], "Istumapaikkoja on parvekkeella, jos sali on täynnä.", "d"),
  ], "fi-FI", "Tarjoilija puhuu."),
];
