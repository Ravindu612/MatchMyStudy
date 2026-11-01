import type { Program } from "../../programs";

// The Ohio State University, Columbus campus (Columbus, Ohio): 10 undergraduate majors for autumn 2027 first-year entry and 5 master's programs.
// Sources: Ohio State Undergraduate Admissions (international first-year apply step-by-step, Common App and application fee, deadlines and
// decision dates, enrollment criteria by college, 2026-27 basic costs including the international student budget, merit scholarships, major
// pages), the University Registrar's 2026-2027 undergraduate (students who began summer 2026 or after) and graduate fee tables, Graduate and
// Professional Admissions (apply online and application fee, English proficiency, 2026-2027 International Graduate Student Budget), the College
// of Engineering new first-year students page and 2026-2027 ECE curriculum sheets, the CSE BS program information and graduate admissions and
// MS program pages, the ECE graduate admissions pages and May 2026 Graduate Student Handbook, the Data Analytics major pages, and the Fisher
// College of Business Full-Time MBA, Specialized Master in Finance and Master of Accounting pages (viewed October 29, 2026). Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "ohio-state-university",
  universityName: "Ohio State University",
  country: "United States",
  language: "English",
  campus: "Columbus",
  programType: "Full-time",
} as const;

// Undergraduate Admissions 2026-27 international single-student budget (two semesters):
// tuition and fees US$47,374 (non-resident US$44,271 + International Undergraduate Student Fee US$3,103), housing and food US$15,630,
// books, supplies and equipment US$1,020, health insurance US$4,108, miscellaneous personal US$4,046 = US$72,178.
// Registrar 2026-27 Columbus per-semester fees for 12-18 credits: Engineering learning technology US$240 + program fee US$2,000;
// Business learning technology US$186 + program fee US$649.20 (not charged to pre-business students).
const UG_LIVING =
  "Ohio State's 2026-27 international student budget adds US$15,630 for housing and food, US$1,020 for books, supplies and equipment, US$4,108 for the required student health insurance and US$4,046 for personal expenses (US$24,804 a year). Most first-years on the Columbus campus must live on campus for their first two years";

const UG_INTL_NOTE =
  "Ohio State's university-funded merit scholarships for incoming first-years are not open to international students. The Ohio State Tuition Guarantee does not cover the non-resident surcharge or the international fee, so later years can cost more; 2027-28 rates had not been published when we checked";

const UG_TUITION_BASE = `2026-27 (autumn 2026 and spring 2027): Ohio State's international student budget lists US$47,374 a year in tuition and fees for a full-time Columbus undergraduate. That is the non-resident tuition and mandatory fees of US$44,271 (instructional and general fees plus a non-resident surcharge of US$15,110.50 a semester) and the International Undergraduate Student Fee of US$3,103 a year. ${UG_LIVING}, for a total budget of US$72,178. ${UG_INTL_NOTE}`;

const UG_TUITION_ENGINEERING = `2026-27 (autumn 2026 and spring 2027): Ohio State's international student budget lists US$47,374 a year in tuition and fees for a full-time Columbus undergraduate (non-resident tuition and mandatory fees of US$44,271 plus the International Undergraduate Student Fee of US$3,103). College of Engineering majors also pay an engineering program fee of US$2,000 and a learning technology fee of US$240 a semester, which brings tuition and fees to about US$51,854. ${UG_LIVING}, for a budget of roughly US$76,660 (our total of the official figures). ${UG_INTL_NOTE}`;

const UG_TUITION_BUSINESS = `2026-27 (autumn 2026 and spring 2027): Ohio State's international student budget lists US$47,374 a year in tuition and fees for a full-time Columbus undergraduate (non-resident tuition and mandatory fees of US$44,271 plus the International Undergraduate Student Fee of US$3,103). Fisher business majors also pay a business program fee of US$649.20 and a learning technology fee of US$186 a semester, which brings tuition and fees to about US$49,044. ${UG_LIVING}, for a budget of roughly US$73,850 (our total of the official figures). ${UG_INTL_NOTE}`;

const UG_INTAKE =
  "Autumn semester (classes start in late August). International first-year applicants can also apply for spring entry (application deadline 1 October). Ohio State does not take first-year applications for summer";

const UG_DEADLINE =
  "Autumn 2027 entry, via the Common App with a non-refundable US$70 international application fee (international applicants are not eligible for fee waivers). Ohio State has no Early Decision. Early Action (non-binding): complete application, including test scores, by 1 November 2026 for a decision on 22 January 2027 for international applicants; Ohio State strongly recommends this deadline for engineering majors and Honors and Scholars programs. Regular Decision: complete application by 15 January 2027 for a decision on 5 March 2027. Admitted students reply by 1 May 2027";

const UG_TESTING =
  "Testing: SAT or ACT scores are required for first-year applicants to the Columbus campus and must be sent directly by the testing agency (SAT code 1592, ACT code 3312). Ohio State superscores, using your highest section scores across test dates. The ACT science section and the essays are not required. For Early Action, take the SAT by 3 October or the ACT by 17 October and send scores when you register";

const UG_ENGLISH =
  "English proficiency (sent officially by the testing agency): TOEFL iBT 79 for tests taken before 21 January 2026 or 4.0 on the updated scale from that date; IELTS (or IELTS Indicator) 6.5; Duolingo English Test 120; ACT English 21; or SAT Evidence-Based Reading and Writing 550. You are exempt after three full years at, and graduation from, a regionally accredited US high school, or if you are a citizen of a listed country such as Australia, Canada (except Quebec), England, Ghana, Ireland, Kenya, New Zealand, Nigeria, Scotland, Singapore, South Africa or Wales. Ohio State does not offer conditional admission through its American Language Program";

const UG_ACADEMIC =
  "Application materials: the Common App with Ohio State's questions, official secondary school transcripts or examination certificates for the final four years (grades 9-12), with English translations, and official SAT or ACT scores. Up to two counselor or teacher recommendations are optional. If admitted, you must show you can pay for your studies before Ohio State issues visa documents. International applicants must choose a degree-granting major, not undecided";

const ENGINEERING_ROUTE = (major: string) =>
  `School and admission route: choose ${major} on the Common App. Ohio State Undergraduate Admissions reviews applications holistically, and the College of Engineering sets no extra requirements. Under Ohio State's enrollment criteria, admission to engineering majors is competitive and admitted students are enrolled directly in their major. Admitted students can switch to another engineering major by 1 May`;

const FISHER_ROUTE = (major: string) =>
  `School and admission route: apply to the ${major} major in the Fisher College of Business. Students admitted to the Columbus campus for this major are admitted directly to the Fisher major program and the ${major.toLowerCase()} specialization, with no separate entrance-to-major application`;

// Graduate and Professional Admissions 2026-2027 International Graduate Student Budget (9 months, autumn or spring start):
// Engineering US$51,556 tuition, fees, non-resident fees and health insurance + US$21,632 living = US$73,188;
// MBA (full time) US$66,646 + US$22,128 = US$88,774; Master of Accounting US$68,350 + US$22,128 = US$90,478;
// Specialized Masters in Business Finance US$49,503 + US$22,128 = US$71,631. Health insurance is US$4,108 for 9 months.
const GRAD_ONE_TIME =
  "Graduate and Professional Admissions also advises having about US$3,000 extra for one-time costs such as the US$50 international orientation fee and yearly increases";

const GRAD_ENGINEERING_TUITION = `2026-27 (autumn 2026 and spring 2027): on the Registrar's graduate fee table, full-time study (8 or more credits a semester) costs US$854.63 per credit instructional fee, US$33.94 general fee, US$9.30 student union fee and a US$1,949.44 per-credit non-resident surcharge, each charged up to 8 credits, plus per-semester activity, recreation and bus fees. New in-person engineering MS students admitted from autumn 2026 also pay a US$500 program fee and a US$255 learning technology fee a semester, about US$47,450 a year in tuition and fees (our arithmetic). Ohio State's 2026-27 International Graduate Student Budget for Engineering puts a 9-month year at US$73,188: US$51,556 for tuition, fees and health insurance plus US$21,632 for housing, food, books, transport and personal costs. ${GRAD_ONE_TIME}. 2027-28 rates had not been published when we checked`;

const GRAD_APPLICATION_FEE =
  "Apply through Ohio State's Graduate and Professional Admissions online application; the non-refundable international application fee is US$70";

const GRAD_ENGLISH =
  "English proficiency (Graduate and Professional Admissions minimums; many programs want more): TOEFL iBT 79 (4.0 on the updated TOEFL launched in January 2026; MyBest scores are not accepted), IELTS Academic or IELTS Online 6.5, or Duolingo English Test 120. Scores must come directly from the testing agency, are valid for two years and must arrive by the application deadline. You are exempt if you are a citizen of, or will hold a bachelor's degree or higher from, a listed country or territory such as Australia, Canada (except Quebec), England, Ghana, Ireland, Kenya, New Zealand, Nigeria, Singapore, South Africa or the United States. Most international students then take an online academic English writing assessment before arrival";

const FISHER_GRAD_ENGLISH =
  "English proficiency: Ohio State's Graduate School minimums apply: TOEFL iBT 79 (4.0 on the updated TOEFL), IELTS Academic 6.5 or Duolingo English Test 120, sent directly by the testing agency, unless you are a citizen of, or hold a bachelor's degree from, an exempt country such as Australia, Canada (except Quebec), England, Ireland, New Zealand, Nigeria, Singapore or South Africa";

const FISHER_DEGREE =
  "A completed four-year bachelor's degree or equivalent before enrollment; Ohio State generally does not treat a three-year bachelor's degree as equivalent. Scanned official transcripts from every institution are reviewed first, with official copies and certified English translations needed if admitted";

export const ohioStatePrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science and Engineering",
    slug: "ohio-state-computer-science-engineering",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Ohio State's BS in Computer Science and Engineering, in the College of Engineering, pairs engineering, physics and maths with in-depth computing. Every student takes eight core courses: two software design courses, discrete structures, data structures and algorithms, low-level programming, operating systems, programming languages and a computing ethics course. Students then pick five core choices (software engineering or databases, computer architecture or networking, AI or game and animation, a team project course and a capstone) and 17 credits of technical electives. Specializations include AI, computer graphics and game design, database systems and data analytics, information and computation assurance, networking, computer systems and software engineering. The degree is ABET-accredited for both engineering and computing.",
    officialProgramUrl: "https://cse.osu.edu/prospective-students/undergrad/majors/bs-cse-program-information",
    degree: "Bachelor of Science (BS) in Computer Science and Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${ENGINEERING_ROUTE("Computer Science and Engineering")}. A similar computing degree, Computer and Information Science, is offered in the College of Arts and Sciences, but first-years enter it as pre-majors`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering",
    slug: "ohio-state-electrical-computer-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (minimum 128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Ohio State's BS in Electrical and Computer Engineering lets students follow either an electrical engineering or a computer engineering program of study. Both start with calculus, physics, engineering maths, C++ programming, probability and statistics and engineering economics, followed by digital logic, analog circuits, discrete-time signals and systems, microcontrollers and electronics with lab work. The electrical route adds RF and optical engineering, semiconductor devices, sustainable energy and power systems, and signals and systems. The computer route adds advanced digital design, computer architecture and software and discrete structures courses. Both finish with a two-semester capstone design project, and technical electives cover areas such as VLSI and circuit design and cybersecurity.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/50",
    degree: "Bachelor of Science (BS) in Electrical and Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Electrical and Computer Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "ohio-state-mechanical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Ohio State's BS in Mechanical Engineering, from the Department of Mechanical and Aerospace Engineering, covers the design, manufacture and testing of machines and systems from engines and robots to medical devices and power plants. After the shared first-year engineering core in maths, science and engineering fundamentals, students study engineering mechanics, thermodynamics, fluid mechanics, heat transfer, kinematics, machine element design, manufacturing, electrical circuits, and measurement and control. Research areas open to undergraduates include acoustics and dynamics, combustion and energy, digital design and manufacturing, and biomechanics.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/107",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${ENGINEERING_ROUTE("Mechanical Engineering")}. Ohio State lists mechanical engineering among its highly competitive engineering majors, so you must show your interest in it on the Common App, and Early Action is strongly recommended`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial and Systems Engineering",
    slug: "ohio-state-industrial-systems-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Ohio State's BS in Industrial and Systems Engineering is about making systems of people, machines and information work better, in sectors from manufacturing and logistics to healthcare, aviation and banking. On top of the College of Engineering's first-year core, the major covers engineering economics, simulation, optimization, quality control, supply chain management and logistics, project management, manufacturing processes, workplace and facility design, ergonomics, lean engineering, systems thinking and cognitive systems engineering.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/87",
    degree: "Bachelor of Science (BS) in Industrial and Systems Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Industrial and Systems Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Chemical Engineering",
    slug: "ohio-state-chemical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Ohio State's BS in Chemical Engineering is taught by the William G. Lowrie Department of Chemical and Biomolecular Engineering. Students learn to design, develop and run processes that turn raw materials into chemicals, fuels, food, pharmaceuticals and consumer products safely, economically and with care for the environment. Building on chemistry, physics and maths, the major focuses on chemical reactions, separations and the design and control of processes. Students can add environmental or polymer options or biomolecular engineering certificates.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/29",
    degree: "Bachelor of Science (BS) in Chemical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Chemical Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Analytics",
    slug: "ohio-state-data-analytics",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (the strict prerequisite sequence usually means four full years at Ohio State)",
    tuitionNote: UG_TUITION_BASE,
    description:
      "Ohio State's BS in Data Analytics, in the College of Arts and Sciences, combines computer science, maths and statistics to manage, model and explain large, complex data sets. The core covers calculus and linear algebra, programming and software design, database design and cloud computing, probability and statistical inference, regression and statistical decision making, data mining and statistical learning, optimization and visualization. Each student then picks a specialization in biomedical and public health, business, computational, data visualization or social science analytics, which includes a capstone or other hands-on component.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/329",
    degree: "Bachelor of Science (BS) in Data Analytics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: choose Data Analytics in the College of Arts and Sciences on your application. Admitted students start as data analytics pre-majors and usually apply to the major after their first year, once they have CSE 2221 (or higher) and one of MATH 1152, 1172, 2153, 2568 or STAT 3201 at Ohio State with a C- or better. The major application (deadlines 1 February, 1 June and 15 September) needs a cover letter and resume; preference goes to students strong in maths, statistics and computer science, and entry is not guaranteed. The computational analytics specialization needs a 3.2 Ohio State GPA and business analytics a 3.0",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Finance",
    slug: "ohio-state-fisher-finance",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "The Fisher College of Business finance major prepares students for financial management roles in companies, banks and other financial institutions. After principles courses in accounting, economics and statistics, students take Fisher's business core in business law, finance, international business, logistics, management sciences, management and human resources, marketing and strategy. Required finance courses cover corporate finance, investments, financial institutions, financial data, global finance and options and futures, with further finance electives on topics such as capital budgeting, cost of capital, dividend and debt policy and bank asset and liability management.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/65",
    degree: "Bachelor of Science in Business Administration (BSBA), Finance specialization",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [FISHER_ROUTE("Finance"), UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Accounting",
    slug: "ohio-state-fisher-accounting",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (minimum 121 credits)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "The Fisher College of Business accounting major covers recording and analysing financial transactions, financial statements and reports, budgeting, tax planning, auditing and internal control. Alongside principles courses and Fisher's business core, students take two financial accounting courses, cost accounting, tax accounting, accounting information systems, advanced accounting, auditing and selected topics in accounting, with electives making up at least 121 credits. Ohio State notes that many US states, including Ohio, require 150 semester hours to sit for the CPA, and strong Fisher accounting students can earn the Master of Accounting alongside the bachelor's degree.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/1",
    degree: "Bachelor of Science in Business Administration (BSBA), Accounting specialization",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [FISHER_ROUTE("Accounting"), UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Information Systems",
    slug: "ohio-state-fisher-information-systems",
    level: "Bachelor",
    field: "Information Technology",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "Fisher's information systems major is about planning, building and managing the technology that businesses run on, combining technical skills with an understanding of how organisations work. Students take principles courses and the Fisher business core, then required courses in discrete maths, programming, data structures for information systems, business programming with file processing, object-oriented systems analysis and database systems, followed by information systems electives. It aims to prepare graduates to lead IT functions inside companies.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/88",
    degree: "Bachelor of Science in Business Administration (BSBA), Information Systems specialization",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [FISHER_ROUTE("Information Systems"), UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "ohio-state-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION_BASE,
    description:
      "Ohio State's Department of Economics offers the major as a BA or a more quantitative BS, which prepares students for graduate study in economics and analytical jobs in business and government. Both include principles of micro- and macroeconomics, intermediate micro and macro theory, an economics writing course and 15 credits of economics electives, six of them at the 5000 level. In the BS the intermediate theory courses are calculus-based (Calculus II is a prerequisite) and students take a two-course econometrics sequence after a statistics course.",
    officialProgramUrl: "https://undergrad.osu.edu/majors-and-academics/majors/detail/49",
    degree: "Bachelor of Science (BS) in Economics (a BA is also offered)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: once admitted to the university you can declare the economics major in the College of Arts and Sciences; there is no separate competitive entry. BS students must keep a 2.25 GPA overall and in the major",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science and Engineering",
    slug: "ohio-state-ms-computer-science-engineering",
    level: "Master",
    field: "Computer Science",
    duration: "Usually 3-4 semesters full-time (30 credits thesis track; 33 credits coursework track)",
    tuitionNote: GRAD_ENGINEERING_TUITION,
    description:
      "Ohio State's MS in Computer Science and Engineering gives a broad graduate grounding in computing plus room to specialise. Everyone takes a research seminar and three graduate core courses: algorithms, then computability and complexity or programming languages, then computer architecture or advanced operating systems. Students also take applied core courses chosen from databases or data mining, compilers, parallel computing, network programming, machine learning or AI, and rendering or data visualisation, plus electives. Students choose a research track with a thesis (30 credits) or a coursework track (33 credits) ending in a two-semester project or a written comprehensive exam.",
    officialProgramUrl: "https://cse.osu.edu/graduate/graduate/master-science-program",
    degree: "Master of Science (MS) in Computer Science and Engineering",
    intake: "Autumn semester (international applicants are considered for autumn only)",
    applicationDeadline: `Autumn 2027 entry: the application opened 3 August 2026 and closes 15 December 2026, with all materials received by then; apply by 14 November 2026 to be considered for fellowships. Late or incomplete applications are not considered. ${GRAD_APPLICATION_FEE} (CSE does not offer fee waivers)`,
    admissionRequirements: [
      "A strong computer science background and a minimum cumulative GPA of 3.0 on a 4.0 scale (most applicants have about 3.5 or higher), with official final transcripts and proof of degree from every institution attended",
      "Application materials: statement of purpose, CV or resume (two pages maximum) and three letters of recommendation submitted online. GRE scores are not required",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Electrical and Computer Engineering",
    slug: "ohio-state-ms-electrical-computer-engineering",
    level: "Master",
    field: "Engineering",
    duration: "Typically 3-4 semesters full-time (minimum 30 credits)",
    tuitionNote: GRAD_ENGINEERING_TUITION,
    description:
      "Ohio State's MS in Electrical and Computer Engineering needs at least 30 graduate credits and offers two paths. The non-thesis project path requires at least 24 letter-graded credits, including 15 in ECE with a project management course and at least six credits of 6000-level ECE courses, and ends with a project evaluated by a faculty committee. The thesis path requires at least 10 credits of thesis research, 18 letter-graded credits and an oral defence. Both include a one-credit engineering ethics course, and up to nine credits can come from related fields such as maths, physics, statistics or business. The project or thesis can be built around an industry internship.",
    officialProgramUrl: "https://ece.osu.edu/graduate-admissions",
    degree: "Master of Science (MS) in Electrical and Computer Engineering",
    intake: "Autumn semester (ECE does not review applications for spring or summer)",
    applicationDeadline: `Autumn 2027 entry: complete applications by 1 February 2027 for general admission, or by 30 November 2026 to be considered for an MS fellowship (PhD applicants get priority for fellowships). ${GRAD_APPLICATION_FEE}`,
    admissionRequirements: [
      "The equivalent of a four-year bachelor's degree with a cumulative GPA of at least 3.0 on a 4.0 scale (ECE prefers 3.2). Three-year degrees are generally not treated as equivalent. Scanned transcripts are reviewed first; official transcripts and proof of degree are needed if admitted",
      "Application materials: a one- to two-page statement of purpose, resume or CV and three letters of recommendation (academic sources preferred). The GRE is not required, and not submitting it is no disadvantage",
      `${GRAD_ENGLISH}. ECE prefers a TOEFL iBT of 92 or more (5 or 6 on the updated scale) or IELTS above 7.5, and accepts Duolingo at the university minimum of 120`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "ohio-state-fisher-full-time-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time (60 credits, including a summer internship)",
    tuitionNote:
      `2026-27 (autumn 2026 and spring 2027): the Registrar lists an MBA instructional fee of US$1,859.50 per credit plus the US$1,949.44 per-credit non-resident surcharge and general and union fees, each charged up to 8 credits a semester, plus a business learning technology fee of US$261 and per-semester campus fees, about US$62,540 a year in tuition and fees (our arithmetic). Ohio State's 2026-27 International Graduate Student Budget puts a 9-month year of the full-time MBA at US$88,774: US$66,646 for tuition, fees and health insurance plus US$22,128 for housing, food, books, transport and personal costs. ${GRAD_ONE_TIME}. Fisher considers all applicants for merit-based funding, with priority for earlier rounds. 2027-28 rates had not been published when we checked`,
    description:
      "Fisher's Full-Time MBA is a two-year, 60-credit residential program. It starts with a pre-term of self-paced maths and career preparation and on-campus team building. The first year is spent full-time on campus on the core curriculum, team projects, the Business Lab Challenge consulting project for a local firm, Career and Industry Immersion Academies and the summer internship search. In the second year students take electives across Ohio State and courses such as Responsible Business for Competitive Advantage and Max Problem Solving. Students can choose the STEM MBA option (30 of the 60 credits in STEM courses), which allows international graduates up to three years of OPT.",
    officialProgramUrl: "https://fisher.osu.edu/graduate/ftmba/academics/curriculum",
    degree: "Master of Business Administration (MBA)",
    intake: "Autumn semester (autumn 2027 classes begin 24 August 2027)",
    applicationDeadline: `Autumn 2027 entry, in rounds: Early Round 14 September 2026 (decisions 16 October), Round 1 13 October 2026 (decisions 4 December), Round 2 18 January 2027 (decisions 1 March), Round 3 8 March 2027 (decisions 8 April; priority for funding) and Round 4 1 April 2027 (decisions 30 April), the final deadline for international applicants. Incomplete international applications close on 15 April 2027. To be reviewed in a round your checklist must be complete three weeks before its decision date. The non-refundable international application fee is US$70`,
    admissionRequirements: [
      `${FISHER_DEGREE}`,
      "GMAT or GRE (no minimum score; test-centre GRE only from 1 October 2024) unless granted a waiver. You can request a waiver if you have a B or better in college accounting, calculus, finance or similar quantitative courses, hold a STEM degree, or have a quantitative certification such as CPA or CFA; the committee may still ask for scores if your GPA is below 3.00",
      "Application materials: resume or LinkedIn profile, a one-page essay on your short- and long-term career goals and how an MBA will help, contact details for two references (no letters required) and a recorded Kira Talent video interview. Live interviews, on campus or by Zoom, are by invitation",
      FISHER_GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Specialized Master in Finance",
    slug: "ohio-state-fisher-specialized-master-finance",
    level: "Master",
    field: "Finance",
    duration: "16 months full-time (3 semesters and a summer internship; 36 credits)",
    tuitionNote:
      `2026-27 (autumn 2026 and spring 2027): the Registrar lists the Specialized Master in Business (Finance) at US$1,862.53 per credit instructional fee and a US$875 per-credit non-resident surcharge, plus general and union fees, each charged up to 8 credits a semester, a US$261 business learning technology fee and per-semester campus fees, about US$45,400 for autumn and spring (our arithmetic). Ohio State's 2026-27 International Graduate Student Budget puts 9 months at US$71,631: US$49,503 for tuition, fees and health insurance plus US$22,128 for living costs. The program runs into a third semester, which costs extra. ${GRAD_ONE_TIME}. All admitted applicants are considered for merit-based aid while funds last`,
    description:
      "Fisher's STEM-designated Specialized Master in Finance (SMF) is a 36-credit, in-person program (18 core and 18 elective credits) for students from any major, most with under a year of work experience. The first autumn is all core: data analysis, financial analysis and valuation, investments, derivatives, corporate financial reporting, financial software (Bloomberg, Capital IQ) and financial modelling in Python. Spring brings a team capstone project for a real company and electives, followed by a summer internship and a final autumn of leadership, economics for financial analysts and electives. Specialization tracks are corporate finance and investment banking, investment management, risk management and insurance, and real estate. The program covers about 70% of the CFA candidate body of knowledge, and international graduates can apply for up to three years of OPT.",
    officialProgramUrl: "https://fisher.osu.edu/graduate/smf/academics/program-structure",
    degree: "Specialized Master in Business - Finance (SMF)",
    intake: "Autumn semester only (autumn 2027 classes begin 24 August 2027)",
    applicationDeadline:
      "Autumn 2027 entry, with rolling review: 11 December 2026 (priority 1 for merit aid) and 19 February 2027 (priority 2), and 28 May 2027 as the final deadline for international students; later qualified applications are reviewed if space allows. Decisions usually come within four weeks of a deadline once the application checklist is complete. The non-refundable international application fee is US$70",
    admissionRequirements: [
      `${FISHER_DEGREE}. No prerequisite courses or work experience are required, but the committee looks for evidence of quantitative skill`,
      "Application materials: resume, an essay (about 750 words) on your goals and how the SMF will help, two references, an optional supplemental essay and optional letters of recommendation, and a recorded Kira Talent video interview. GMAT or GRE scores are optional",
      FISHER_GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Accounting",
    slug: "ohio-state-fisher-master-accounting",
    level: "Master",
    field: "Business",
    duration: "9 months full-time (31 credits)",
    tuitionNote:
      `2026-27 (autumn 2026 and spring 2027): the Registrar lists the Master of Accounting at US$1,966 per credit instructional fee plus the US$1,949.44 per-credit non-resident surcharge and general and union fees, each charged up to 8 credits a semester, plus a US$261 business learning technology fee and per-semester campus fees, about US$64,240 for the year in tuition and fees (our arithmetic). Ohio State's 2026-27 International Graduate Student Budget puts the 9-month program at US$90,478: US$68,350 for tuition, fees and health insurance plus US$22,128 for living costs. ${GRAD_ONE_TIME}. All admitted applicants are considered for merit-based aid while funds last`,
    description:
      "Fisher's STEM-designated Master of Accounting (MAcc) is a nine-month, 31-credit program open to graduates of any major. Only 10 credits are core: fundamentals of accounting and data analytics, corporate financial reporting, management and control, and accounting policy and research. The other 21 credits are electives, which students can group into informal tracks in auditing, taxation, AI and analytics, valuation and investment banking, or managerial decision-making and operations. The data analytics content was developed with KPMG. Students without enough accounting background can take a two-week Pre-MAcc Seminar in the summer before starting.",
    officialProgramUrl: "https://fisher.osu.edu/graduate/macc/academics/curriculum",
    degree: "Master of Accounting (MAcc)",
    intake: "Autumn semester only (autumn 2027 classes begin 24 August 2027)",
    applicationDeadline:
      "Autumn 2027 entry, with rolling review: 11 December 2026 (priority 1 for merit aid) and 19 February 2027 (priority 2), and 28 May 2027 as the final deadline for international students; later qualified applications are reviewed if space allows. Decisions usually come within four weeks of a deadline once the application checklist is complete. The non-refundable international application fee is US$70",
    admissionRequirements: [
      `${FISHER_DEGREE}. You must have completed introductory financial accounting and introductory managerial accounting before applying. Intermediate financial accounting I and II and intermediate managerial/cost accounting are also required: the first two before enrolling or through the Pre-MAcc Seminar, and cost accounting before or during the program. Microeconomics, statistics and calculus are strongly recommended`,
      "Application materials: resume, an essay (about 750 words) on your goals and how a master's in accounting will help, an extra essay for non-accounting majors on their accounting preparation, two references, optional letters of recommendation and a recorded Kira Talent video interview. GMAT or GRE scores are optional",
      FISHER_GRAD_ENGLISH,
    ],
  },
];
