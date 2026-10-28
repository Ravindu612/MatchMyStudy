import type { Program } from "../../programs";

// Pennsylvania State University, University Park (State College, Pennsylvania): 11 undergraduate majors for fall 2027 first-year entry and
// 4 well-known graduate programs. Sources: Penn State Undergraduate Admissions (international requirements and English proficiency, international
// and first-year dates and deadlines, how to apply, Early Action FAQs), tuition.psu.edu (University Park rates effective fall 2026 and fall 2027,
// 2026-27 cost-of-attendance elements, estimated future rates), the Office of the Bursar (fees), Penn State Global (I-20 expense estimates),
// the 2026-2027 Undergraduate Bulletin and Graduate Bulletin program pages, the Fox Graduate School (application fees, GCAC-305 English
// requirements), the School of EECS and Industrial and Manufacturing Engineering graduate admissions pages, and Smeal College of Business
// residential master's pages (viewed October 28, 2026). Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "pennsylvania-state-university",
  universityName: "Pennsylvania State University",
  country: "United States",
  language: "English",
  campus: "University Park",
  programType: "Full-time",
} as const;

// 2026-27 cost-of-attendance elements published on tuition.psu.edu for University Park (per semester, on campus):
// food US$3,290, housing US$4,638, books and supplies US$645, transportation US$1,122, miscellaneous US$1,556 = US$11,251 a semester.
const LIVING =
  "Penn State's 2026-27 cost-of-attendance elements for University Park add, per semester on campus, US$3,290 for food, US$4,638 for housing, US$645 for books and supplies, US$1,122 for transportation and US$1,556 for miscellaneous costs (US$22,502 for fall and spring)";

const UG_FEES =
  "Mandatory fees on top of tuition are the University Park Student Initiated Fee (US$320 a semester for 9+ credits in 2026-27) and, for new international undergraduates on temporary visas, the International Undergraduate Student Fee of US$750 a semester";

const UG_AID =
  "Penn State Global says there is essentially no financial aid for international undergraduates, and health insurance is mandatory for international students (Penn State Global's estimate was US$3,400 for 2025-26)";

const UG_TUITION = (upper: string) =>
  `2026-27 (fall 2026 and spring 2027): University Park non-Pennsylvania tuition, which international students pay, is US$44,574 a year (US$22,287 a semester) for first- and second-year students and ${upper} in the upper division (from 59.1 credits). ${UG_FEES}, so a first-year international student pays about US$46,714 in tuition and fees. ${LIVING}, for a first-year budget of roughly US$69,200 (our total of the official figures). The Board of Trustees has already approved 2027-28 rates, the year fall 2027 entrants start: US$46,356 a year for lower-division non-residents. ${UG_AID}`;

const UG_TUITION_ENGINEERING = UG_TUITION(
  "US$52,656 a year (US$26,328 a semester) for Business and Engineering programs (US$54,762 in 2027-28)"
);
const UG_TUITION_BUSINESS = UG_TUITION_ENGINEERING;
const UG_TUITION_SCIENCE = UG_TUITION(
  "US$49,616 a year (US$24,808 a semester) at the Science, IST and EMS rate, which also applies to upper-division Economics majors (US$51,600 in 2027-28)"
);

const UG_INTAKE =
  "Fall semester (classes start in late August); summer starts are also possible. Spring admission at University Park is limited and some programs do not admit in spring";

const UG_DEADLINE =
  "Fall 2027 entry, via MyPennState or the Common App (Penn State has no preference), with a US$75 international application fee. Penn State has no binding Early Decision. International first-year deadlines: Early Action, complete application by 1 November 2026 for a decision by 24 December 2026 (deferred applicants hear by the end of January); Priority Admission, complete application by 1 February 2027 for a decision by 1 April 2027. Admitted students have until 1 May 2027 to accept. After 1 November applications are reviewed on a rolling basis and University Park becomes more competitive; the final deadline for international applicants for fall is 15 June 2027. Penn State recommends that all applications be complete by 1 December. The Schreyer Honors College needs a separate application (1 November for an interview, final deadline 2 December 2026)";

const UG_TESTING =
  "Testing: test-optional, so SAT or ACT scores are not required unless you use them to prove English proficiency. If you include them you can self-report scores in MyPennState; Penn State uses your highest combined score from a single test date and does not superscore. Self-reported scores must be in by 1 November to count for Early Action";

const UG_ENGLISH =
  "English proficiency (international students whose native language is not English): Duolingo English Test 120; TOEFL iBT 4.5 on the scale used from 21 January 2026 (80 for tests taken before then; MyBest scores are not accepted); IELTS Academic 6.5; SAT Evidence-Based Reading and Writing 570; ACT English 24; GCSE/GCE English language grade A-C; IB English A (Language and Literature) 5+; four years at a US high school; or Penn State IECP certification. TOEFL, IELTS and Duolingo scores must be under two years old and sent directly by the testing agency";

const UG_ACADEMIC =
  "Application materials: the online application, the Self-reported Transcript and Academic Record System (STARS) record (students in the South Korean system send official records from their last three years instead) and proof of English proficiency. Official secondary school records, certified and with literal English translations, are needed once you accept an offer";

const ENGINEERING_ROUTE = (major: string, courses: string, gpa: string, controlled: boolean) =>
  `School and admission route: apply to the College of Engineering at University Park. ${major} is chosen through Penn State's entrance-to-major process after 29-55 graded Penn State credits (transfer and AP credits excluded). For students who entered in summer 2026-spring 2027 (the latest published Bulletin), you need ${courses} with a C or better and a cumulative GPA of at least ${gpa}${controlled ? "; the major is under administrative enrollment controls and you must be enrolled in the College of Engineering or the Division of Undergraduate Studies" : "; if the major comes under enrollment control, a higher GPA is likely to be needed"}. Fall 2027 entrants follow the controls in the 2027-28 Bulletin`;

const SMEAL_ROUTE = (major: string, gpa: string, lowGpa: string) =>
  `School and admission route: apply to the Smeal College of Business, which admits first-year students as business pre-majors. You enter the ${major} major by applying in the entrance-to-major period after 36-59 graded Penn State credits, with a C or better in English composition, calculus (MATH 110 or 140) and statistics, ECON 102 completed, and ACCTG 211, MGMT 301, MKTG 301 and FIN 301 taken at Penn State with a C or better. For students who entered in summer 2026-spring 2027, the minimum cumulative GPA is ${gpa}; pre-majors with ${lowGpa} are considered if space allows`;

const GRAD_ENGINEERING_TUITION =
  `2026-27 (fall 2026 and spring 2027): University Park non-Pennsylvania graduate tuition for Business, EMS, Science, IST and Engineering programs is US$50,608 a year (US$25,304 a semester for full-time study; US$2,109 per credit part-time); international students pay the non-resident rate. The Student Initiated Fee adds US$320 a semester. ${LIVING}, for a budget of roughly US$73,750 (our total of the official figures). The approved 2027-28 rate, which applies to fall 2027 entrants, is US$52,632 a year. Graduate assistantships, which cover tuition, are described by the Fox Graduate School but are not guaranteed for master's students`;

const GRAD_APPLICATION_FEE = "Apply through the Fox Graduate School online application; the international application fee is US$85";

const GRAD_ENGLISH =
  "English proficiency (Fox Graduate School minimum, programs may ask for more): TOEFL iBT 4.5 overall with 3.5+ in speaking on the scale used from 21 January 2026 (80 overall with 19+ speaking for earlier tests) or IELTS Academic 6.5. Duolingo is not accepted. Applicants with slightly lower scores may be offered provisional admission with English coursework in the first semester. You are exempt if your bachelor's or graduate degree is from a listed country where English is the predominant language and the language of instruction (for example the UK, Ireland, Canada outside Quebec, Australia, New Zealand, Singapore, Nigeria, Kenya, Ghana or South Africa). Scores are valid for two years";

export const pennStatePrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "psu-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (127 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Penn State's BS in Computer Science, taught by the School of Electrical Engineering and Computer Science in the College of Engineering, covers programming, computer systems, the maths behind computing and software design. Required courses include object-oriented programming, advanced data structures in C, two computer systems courses, software engineering, discrete maths, programming language concepts, algorithms and a software design capstone, plus digital design, physics, calculus and probability and statistics. Students then pick 18 credits of electives in areas such as AI, machine learning, security, computer vision, databases, graphics, operating systems and quantum computing.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/computer-science-bs/",
    degree: "Bachelor of Science (B.S.) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Computer Science", "CMPSC 121 or 131, CMPSC 122 or 132, MATH 140, MATH 141 and PHYS 211", "3.20", true),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Engineering",
    slug: "psu-computer-engineering",
    level: "Bachelor",
    field: "Computer Engineering",
    duration: "4 years full-time (127 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Penn State's BS in Computer Engineering focuses on designing and building computer systems, from processors and memory to embedded devices and networks. Alongside calculus, physics and chemistry, students take circuits and devices, electronic circuit design, signals and systems, digital design, computer architecture, communication networks, two computer systems courses, data structures and algorithms and probability. Electives cover topics such as VLSI and digital circuit design, and the program ends with a team computer engineering design project.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/computer-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Computer Engineering", "CMPSC 121 or 131, CHEM 110, MATH 140, MATH 141 and PHYS 211", "3.20", true),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "psu-electrical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (127 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Penn State's BS in Electrical Engineering is one of the broadest engineering majors, applying electronics and computing to fields from communications and healthcare to defence and transport. The core covers design tools, circuits and devices, electronic circuit design, electromagnetics, nanoelectronics, linear systems and digital systems, with a design process course and a capstone design project. Students then choose 300- and 400-level electives to specialise, and can use some credits for co-op work.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/electrical-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Electrical Engineering", "CMPSC 121, CMPSC 131 or EDSGN 100, plus CHEM 110, MATH 140, MATH 141 and PHYS 211", "2.60", false),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "psu-mechanical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (131 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Penn State's BS in Mechanical Engineering spans both mechanical systems (mechanisms, strength and wear of materials) and thermal systems (energy conversion, heat transfer and fluid flow). Students take statics, dynamics and strength of materials, then thermodynamics, fluid flow, computational tools, design methodology, mechanical design, vibrations, heat transfer, dynamic systems modelling and mechatronics, with a systems lab and a senior design project. Materials, manufacturing processes and technical electives round out the degree.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/mechanical-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Mechanical Engineering", "CHEM 110, EDSGN 100, MATH 140, MATH 141 and PHYS 211", "3.20", true),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Aerospace Engineering",
    slug: "psu-aerospace-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (131 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Penn State's BS in Aerospace Engineering focuses on the analysis, design and operation of aircraft and spacecraft. Core courses cover aerospace structures, aeronautics, astronautics, two aerodynamics courses, aerospace analysis, dynamics and control, propulsion and a hands-on technology lab, and students choose between aircraft stability and control or spacecraft orbit and attitude control. The degree ends with a two-part preliminary and detailed design sequence in either spacecraft or aircraft design.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/aerospace-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Aerospace Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Aerospace Engineering", "CHEM 110, EDSGN 100, MATH 140, MATH 141 and PHYS 211", "3.20", true),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial Engineering",
    slug: "psu-industrial-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (129 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Penn State describes its Industrial Engineering program as the first of its kind in the world. The BS teaches students to design and improve the systems that combine people, machines, materials and information, with a core in engineering economy, product design and measurement, probabilistic and statistical methods, work design, engineering analytics, deterministic and stochastic operations research, simulation and service systems. Students choose the General option or the Service Systems option (University Park only) and finish with a capstone design project.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/industrial-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Industrial Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Industrial Engineering", "EDSGN 100, CHEM 110, MATH 140, MATH 141 and PHYS 211", "2.60", false),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Sciences (Computational option)",
    slug: "psu-data-sciences-computational",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (123 credits)",
    tuitionNote: UG_TUITION(
      "a rate that depends on the college offering your option (US$52,656 a year for Engineering programs, US$49,616 for Science and IST programs)"
    ),
    description:
      "Penn State's BS in Data Sciences is an intercollege major that brings together computer science, informatics and statistics to build and test the tools used to pull insight from large, complex data. All students take data management, applied data sciences, R, statistical reasoning, data science ethics and a capstone. The Computational option, offered through the College of Engineering, adds object-oriented programming, discrete maths, algorithms, programming languages, AI, machine learning, big data programming models and probability and statistics. The Applied option (College of IST) and Statistical Modeling option (Eberly College of Science) are alternatives.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/data-sciences-bs/",
    degree: "Bachelor of Science (B.S.) in Data Sciences",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the college that offers your preferred option (the College of Engineering for the Computational option). You enter the Data Sciences major through Penn State's entrance-to-major process after completing CMPSC 121 or 131, CMPSC 122 or 132, MATH 140, MATH 141 and STAT 200 or DS 200, each with a C or better",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Finance",
    slug: "psu-finance",
    level: "Bachelor",
    field: "Finance",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "The Smeal College of Business BS in Finance covers corporate finance, investments, financial markets and institutions, and the growing role of data science and AI in finance. Beyond the business core in accounting, management, marketing, supply chain, business law and ethics, students take corporation finance, financial management, security analysis and portfolio management and financial markets, then choose three electives from options such as derivatives, trading, advanced financial modelling, interest rates and debt markets, real estate finance and fintech. Students also reach a 12-credit level in a world language. Smeal's student-managed Nittany Lion Fund and trading room offer hands-on practice.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/smeal-business/finance-bs/",
    degree: "Bachelor of Science (B.S.) in Finance",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SMEAL_ROUTE("Finance", "3.50", "a GPA of 2.60-3.49"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Supply Chain and Information Systems",
    slug: "psu-supply-chain-information-systems",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "Smeal's BS in Supply Chain and Information Systems teaches how companies source, make and deliver goods and services worldwide, with information technology as the link that holds supply chains together. After the business core, students take supply chain management, demand fulfilment, manufacturing and services strategies, strategic procurement, supply chain analytics and a strategic supply chain design course, plus related and supporting electives and a world language to the 12-credit level. Case studies, industry projects, internships and visiting business leaders are part of the program.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/smeal-business/supply-chain-information-systems-bs/",
    degree: "Bachelor of Science (B.S.) in Supply Chain and Information Systems",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SMEAL_ROUTE("Supply Chain and Information Systems", "3.10", "a GPA of 2.60-3.09"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Analytics and Information Systems",
    slug: "psu-business-analytics-information-systems",
    level: "Bachelor",
    field: "Business Analytics",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "Smeal's BS in Business Analytics and Information Systems sits where business and technology meet, teaching students to collect, manage, analyse and present business data for fact-based decisions. After the business core, the major covers business analytics, business data management, systems analysis, applied AI and machine learning in business and enterprise information systems, with a choice of programming skills for business or IT and business strategy. Students learn to build dashboards and visual analytics, take business breadth electives and reach a 12-credit level in a world language.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/smeal-business/business-analytics-information-systems-bs/",
    degree: "Bachelor of Science (B.S.) in Business Analytics and Information Systems",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SMEAL_ROUTE("Business Analytics and Information Systems", "3.10", "a GPA of 2.60-3.09"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "psu-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_SCIENCE,
    description:
      "Penn State's BS in Economics, from the College of the Liberal Arts, is the more quantitative of its two economics degrees (a BA is also offered). The 55-credit major covers introductory micro- and macroeconomics, statistical foundations for econometrics, intermediate micro and macro theory and an introduction to econometrics, plus calculus and programming or spreadsheets and databases. Students then take 18 credits of 300- and 400-level economics electives (at least nine at the 400 level) and supporting courses in quantitative and social science subjects. An honours program is available.",
    officialProgramUrl: "https://bulletins.psu.edu/undergraduate/colleges/liberal-arts/economics-bs/",
    degree: "Bachelor of Science (B.S.) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the College of the Liberal Arts (or start undecided in the Division of Undergraduate Studies). To enter the Economics major you need ECON 102 and ECON 104 with a C or better, a cumulative GPA of at least 2.00 and at least third-semester standing",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science and Engineering",
    slug: "psu-ms-computer-science-engineering",
    level: "Master",
    field: "Computer Science",
    duration: "Full-time (30 credits); up to 12 credits may be taken online",
    tuitionNote: GRAD_ENGINEERING_TUITION,
    description:
      "Penn State's MS in Computer Science and Engineering is a 30-credit research degree from the School of EECS, with at least 21 credits at the 500 level, including 15 credits of 500-level CSE courses. Students take nine credits of bridge and breadth courses chosen from foundations for advanced study, operating systems design, computer architecture and algorithm design, plus CSE electives and six credits from related subjects such as electrical engineering, IST, maths or statistics. It ends with either a thesis (with a defence) or a scholarly paper written in a research topics course.",
    officialProgramUrl: "https://bulletins.psu.edu/graduate/programs/majors/computer-science-engineering/",
    degree: "Master of Science (M.S.) in Computer Science and Engineering",
    intake: "Fall semester (spring entry is also offered)",
    applicationDeadline:
      `Fall 2027 entry: submit by 20 December 2026 to be sure of full consideration; CSE keeps accepting applications after that, but review may already have started, and no applications are accepted after 15 April 2027. Spring 2027 entry: all materials by 31 August 2026. ${GRAD_APPLICATION_FEE}`,
    admissionRequirements: [
      "A bachelor's degree from an accredited US institution or an equivalent degree from a recognised institution abroad, with transcripts and degree certificates (certified English translations if needed)",
      "Application materials: statement of purpose, resume/CV, three letters of recommendation and official GRE General Test scores, which the Graduate Bulletin and CSE require for all MS and MEng applicants (institution code 2660)",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Electrical Engineering",
    slug: "psu-ms-electrical-engineering",
    level: "Master",
    field: "Engineering",
    duration: "Full-time (32 credits)",
    tuitionNote: GRAD_ENGINEERING_TUITION,
    description:
      "Penn State's MS in Electrical Engineering is a 32-credit degree from the School of EECS with two routes: a thesis option (24 course credits, at least 12 in EE, plus six thesis credits) or a paper option (27 course credits, at least 14 in EE, plus a scholarly paper). Both include two credits of EE colloquium. Research and course areas in the school include communications and networking, control systems, electromagnetics, electronic materials and devices, integrated circuits, optics, power and energy systems, remote sensing and signal and image processing.",
    officialProgramUrl: "https://bulletins.psu.edu/graduate/programs/majors/electrical-engineering/",
    degree: "Master of Science (M.S.) in Electrical Engineering",
    intake: "Fall semester (international applicants are considered for fall only)",
    applicationDeadline:
      `Fall 2027 entry: international applicants must have the application and all supporting documents in by 15 December 2026; EECS says applications completed after that date will most likely not be reviewed. ${GRAD_APPLICATION_FEE}`,
    admissionRequirements: [
      "A bachelor's degree from an accredited US institution or an equivalent degree from a recognised institution abroad, with official transcripts from all post-secondary institutions",
      "Application materials: three letters of reference, a personal statement of relevant experience and goals, a resume and a supplemental application. GRE scores are optional (institution code 2660)",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Industrial Engineering",
    slug: "psu-ms-industrial-engineering",
    level: "Master",
    field: "Engineering",
    duration: "Usually 3-4 semesters full-time (32 credits); can be finished in one calendar year",
    tuitionNote: GRAD_ENGINEERING_TUITION,
    description:
      "Penn State's MS in Industrial Engineering, from the Harold and Inge Marcus Department of Industrial and Manufacturing Engineering, needs 32 credits including two credits of IE colloquium. Everyone takes linear programming and experimental design in engineering. Students then choose a non-thesis track (27 course credits ending with a capstone course or a research paper) or a thesis track (24 course credits plus six research credits and a publishable-quality thesis). A dual-title degree with Operations Research is also possible. An online MEng in Industrial Engineering is offered separately through World Campus.",
    officialProgramUrl: "https://bulletins.psu.edu/graduate/programs/majors/industrial-engineering/",
    degree: "Master of Science (M.S.) in Industrial Engineering",
    intake: "Fall or spring semester",
    applicationDeadline:
      `Fall 2027 entry: apply by 15 December 2026. Spring entry: apply by 1 September of the previous year. ${GRAD_APPLICATION_FEE}`,
    admissionRequirements: [
      "A bachelor's degree from a regionally accredited institution (or international equivalent); graduates in engineering, the physical sciences and maths with a 3.00 GPA will be considered",
      "Application materials: statement of purpose, three letters of recommendation and transcripts. GRE scores are highly recommended for MS applicants (institution code 2660)",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "One-Year MBA",
    slug: "psu-smeal-one-year-mba",
    level: "Master",
    field: "Business",
    duration: "9 months full-time (fall and spring semesters; at least 35 credits)",
    tuitionNote:
      `2026-27 (fall 2026 and spring 2027): University Park lists non-Pennsylvania tuition for the one-year MBA of US$55,806 for the academic year (US$27,903 a semester); international students pay the non-resident rate. The Student Initiated Fee adds US$320 a semester. ${LIVING}, for a budget of roughly US$78,950 (our total of the official figures). The approved 2027-28 rate, which applies to the fall 2027 cohort, is US$58,038`,
    description:
      "Smeal's One-Year MBA is a STEM-designated, full-time residential MBA at University Park, aimed at recent graduates and early-career professionals from any major. The fall semester builds a cohort-based foundation in finance, marketing, operations, strategy, analytics and leadership; the spring adds advanced coursework and experiential learning, with graduation in May. The Graduate Bulletin's MBA requirements include quantitative analysis, managerial economics, accounting, business statistics, supply chain and operations, ethical leadership, negotiation, communication, global business with an immersion, and a strategic management capstone.",
    officialProgramUrl: "https://smeal.psu.edu/academics/masters/residential/one-year-mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall semester (graduation the following May)",
    applicationDeadline:
      `Fall 2027 cohort, with decisions made on a rolling basis: Round 1 closes 1 October 2026, Round 2 on 1 December 2026, Round 3 on 1 February 2027 (the priority deadline for international applicants) and Round 4 on 1 April 2027. All parts of the application must be in by the round deadline. ${GRAD_APPLICATION_FEE}; choose the "1 Year Resident MBA (University Park/full-time in-person)" format`,
    admissionRequirements: [
      "A bachelor's degree in any field, with transcripts from all post-secondary institutions. No GMAT or GRE is required, and scores are not accepted. Applicants without a quantitative background may be asked to take preparatory coursework first",
      "Application materials: resume, program-specific questions and contact details for three professional or academic references (no letters are requested), followed by a recorded one-way video interview and a timed written essay on Kira Talent, due within seven business days of submitting the Graduate School application",
      GRAD_ENGLISH,
    ],
  },
];
