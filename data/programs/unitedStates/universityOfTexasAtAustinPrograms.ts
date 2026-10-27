import type { Program } from "../../programs";

// The University of Texas at Austin (Austin, Texas): 10 undergraduate majors for fall 2027 first-year entry and 5 master's programs.
// Sources: UT Austin Office of Admissions (international freshman application, deadlines, SAT/ACT, TOEFL/IELTS/DET, high school prerequisites
// and calculus readiness, essays and short answers, colleges and degrees, FAQs, admitted-student financial aid notes), the 2026-27 General
// Information Catalog tuition tables (undergraduate flat-rate and Longhorn Fixed Tuition, graduate, professional and non-funded program fees),
// Texas One Stop's 2026-27 cost of attendance and Longhorn Fixed Tuition pages, the 2026-28 Undergraduate Catalog and 2026-27 Graduate Catalog
// program pages, the Office of Graduate and Postdoctoral Studies (application fees, international applicants), Texas ECE graduate admissions,
// Texas Global ISSS scholarships, and the Texas McCombs BBA major, Full-Time MBA, MS Business Analytics and AI, MS Business Technology and AI
// and MS Finance pages (viewed October 27, 2026). Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "university-of-texas-at-austin",
  universityName: "University of Texas at Austin",
  country: "United States",
  language: "English",
  campus: "Austin",
  programType: "Full-time",
} as const;

// Texas One Stop 2026-27 cost of attendance (fall and spring, full-time undergraduate, non-resident).
const UG_LIVING =
  "Texas One Stop's 2026-27 non-resident budget adds US$15,420-15,580 for housing and food, US$1,840 for transportation, US$724 for books and course materials and US$3,666 for personal costs (about US$21,650-21,810 a year)";

const UG_INTL_NOTE =
  "International students pay the non-resident rate and are not eligible for US federal financial aid. Students who start at UT for the first time can opt into Longhorn Fixed Tuition, which is higher than the traditional rate but stays the same for four years and can bring tuition rebates for on-time graduates. Texas Global (ISSS) offers a limited number of one-time scholarships for enrolled international students, applied for through LASSO. Rates for 2027-28 had not been published when we checked";

const usd = (amount: number) => `US$${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

const ugTuition = (college: string, perSemester: number, fixedPerSemester: number, budgetLow: number, budgetHigh: number) =>
  `2026-27 (fall 2026 and spring 2027, the latest published rates): the catalog's traditional flat-rate tuition for non-resident undergraduates in ${college} is ${usd(perSemester)} per semester for 12 or more hours, about ${usd(perSemester * 2)} a year (the optional Longhorn Fixed Tuition rate is ${usd(fixedPerSemester)} per semester). ${UG_LIVING}, so a year costs roughly ${usd(budgetLow)}-${String(budgetHigh).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} at the traditional rate (our total of the official figures; One Stop's overall non-resident range is US$64,204-72,916). ${UG_INTL_NOTE}`;

const UG_TUITION_ENGINEERING = ugTuition("the Cockrell School of Engineering", 24197, 27545, 70044, 70204);
const UG_TUITION_NATURAL_SCIENCES = ugTuition("the College of Natural Sciences", 22485, 25676, 66620, 66780);
const UG_TUITION_BUSINESS = ugTuition("the McCombs School of Business", 25553, 29097, 72756, 72916);
const UG_TUITION_LIBERAL_ARTS = ugTuition("the College of Liberal Arts", 21277, 24369, 64204, 64364);

const UG_DEADLINE =
  "Fall 2027 entry, via the Common App with a non-refundable US$90 fee (fee waivers are not available to international students). UT Austin has two non-binding deadlines: Early Action (apply by 15 October 2026 with remaining materials by 22 October; decision or deferral by 15 January 2027) and Regular (apply by 1 December 2026 with remaining materials by 10 December; decisions by 15 February 2027). Early Action gives no advantage in review. Admitted students accept and pay the enrolment deposit by 1 May 2027";

const UG_TESTING =
  "Testing: SAT or ACT required. Send at least one official SAT (code 6882) or ACT (code 4240) score directly from the testing agency by your deadline; official CLT scores also meet the requirement, and you can self-report scores in MyStatus after ordering them. The SAT Essay, ACT Writing and the ACT Science section are not required";

const UG_ENGLISH =
  "English proficiency (unless exempt): TOEFL iBT 79 (or 4 on the 6-point scale), IELTS Academic 6.5 overall or Duolingo English Test 115. TOEFL ITP, TOEFL Essentials and IELTS General Training are not accepted. You are exempt if you are from a country where English is the sole official and main spoken language (UT's list includes Australia, Canada except Quebec, Ghana, India, Ireland, Kenya, New Zealand, Nigeria, Singapore and the UK) or graduate from a high school in the US or a listed country after at least three years of study there";

const UG_ACADEMIC =
  "Application materials: an essay of 500-650 words (the Common App personal essay counts), two required short answers of about 250-300 words (why your first-choice major, and the activity you are most proud of), secondary school transcripts and any college transcripts. Expected high school preparation: 4 units of English, 3 of maths including Algebra II (4 strongly recommended), 2 of science (4 strongly recommended), 3 of social studies and 2 of one foreign language. A resume and up to two recommendation letters are optional. Each application is reviewed holistically for admission to a specific first-choice major";

const CALCULUS_READINESS =
  "Calculus readiness is required for this major: SAT Math 620+, ACT Math 26+, CLT Math 26+, AP Calculus AB or BC 3+, IB HL Mathematics 4+, or a Calculus I (or higher) course with a grade of B or better on a high school or college transcript, received by the deadline";

const UG_INTAKE_SUMMER_FALL =
  "Fall semester (late August); the college also admits first-year students for the summer term before fall";

const GRAD_LIVING =
  "Texas One Stop's 2026-27 graduate budget (fall and spring) adds US$17,052-17,423 for housing and food, US$1,840 for transportation, US$776 for books and supplies and US$4,900 for personal costs (about US$24,568-24,939)";

const GRAD_ENGLISH =
  "English proficiency (Graduate School minimums, unless exempt): TOEFL iBT 79 (or 4 on the 6-point scale), IELTS Academic 6.5 overall or Duolingo English Test 115, sent directly by the testing agency. You are exempt if you are from a qualifying English-speaking country or hold a bachelor's degree from a US institution or one in a qualifying country (a master's degree alone does not count)";

const MCCOMBS_MS_DEADLINE = (program: string) =>
  `Summer 2027 start: McCombs MS programs use four rounds. Round 1 (McCombs application by 13 October 2026, Graduate School checklist and video assessment by 20 October; decisions by 11 December 2026) has passed. Round 2 is the final deadline for international applicants: McCombs application by 12 January 2027, steps 2-3 by 19 January 2027, decisions by 26 March 2027. Later rounds (to 4 May 2027) are filled case by case and are not open to international applicants. Application fee US$90 for international applicants${program ? `. ${program}` : ""}`;

const MCCOMBS_MS_ENGLISH =
  "English proficiency: TOEFL, IELTS or Duolingo English Test score report required for international applicants unless an exception applies. McCombs says no absolute minimum applies to its MS programs but expects a TOEFL score of 100 or IELTS 7 (above the Graduate School minimums of TOEFL 79, IELTS 6.5 and DET 115)";

const MCCOMBS_MS_TUITION =
  `McCombs' currently published price (the same total as the 2026-27 catalog figure for new non-resident students): a total program price of US$59,700 for non-Texas residents, including international students: a non-refundable US$2,000 pre-enrolment tuition fee once you accept the offer, then US$11,900 for summer, US$22,900 for fall and US$22,900 for spring (Texas residents pay US$55,600). The price excludes books, software, a laptop and living costs, and international students also pay international health insurance and ISSS fees. ${GRAD_LIVING} for the fall and spring semesters. All applicants are automatically considered for a limited number of McCombs MS scholarships; MS students are not usually eligible for teaching or research assistant jobs`;

export const universityOfTexasAtAustinPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "ut-austin-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (120 semester credit hours)",
    tuitionNote: UG_TUITION_NATURAL_SCIENCES,
    description:
      "UT Austin's Bachelor of Science in Computer Science, taught in the College of Natural Sciences, gives more room for computing and technical courses than the department's BSA option. Students start with introductory programming, discrete maths and data structures, then take computer organisation and architecture, principles of computer systems, and algorithms and complexity, alongside calculus, matrix algebra, probability and a science sequence. The remaining computer science hours are upper-division electives chosen from areas such as AI, machine learning, systems, security, graphics and theory. Honors and Turing Scholars options and an integrated BS/MS are available by separate admission.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/computer-science-computer-science-option-bscompsci/",
    degree: "Bachelor of Science in Computer Science (BSCompSci)",
    intake: "Fall semester (late August). Computer Science also admits first-year students for spring entry",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `School and admission route: apply directly to the Computer Science major in the College of Natural Sciences, which enrols admitted students at entry level. Entry-level CS courses are reserved for CS majors, and the core courses (such as discrete maths and algorithms) need a C- or better within two attempts. ${CALCULUS_READINESS}`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering",
    slug: "ut-austin-electrical-computer-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (125 semester credit hours)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "The Chandra Family Department of Electrical and Computer Engineering offers one BS in Electrical and Computer Engineering with a shared core and a choice of technical concentration. Early courses cover electrical engineering and computing fundamentals, embedded systems, circuit theory, software design, linear systems and signals and probability. From the third year students pick a technical core such as communications, signal processing, networks and systems; electronics and integrated circuits; energy systems; electromagnetics; computer architecture and embedded systems; or software engineering, and finish with an engineering design course and a senior design project (corporate, research, start-up or multidisciplinary).",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/electrical-computer-engineering-communications-signal-processing-networks-systems-bsece/",
    degree: "Bachelor of Science in Electrical and Computer Engineering (BSECE)",
    intake: UG_INTAKE_SUMMER_FALL,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `School and admission route: apply to the Electrical and Computer Engineering major in the Cockrell School of Engineering (first-year entry in summer or fall only). The ECE Honors program and the Texas ECB dual degree with business honors are separate options for first-year applicants. ${CALCULUS_READINESS}`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "ut-austin-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (126 semester credit hours)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "UT Austin's BS in Mechanical Engineering is organised around thermal and fluid systems, mechanical systems and design, and materials and manufacturing. Students study engineering design and graphics, statics, mechanics of solids, dynamics, thermodynamics, fluid mechanics, heat transfer, materials, mechatronics, engineering statistics, machine elements, dynamic systems and controls and engineering finance, with hands-on labs attached to many core courses. Twelve hours of Career Gateway Electives let students build depth in a technical or specialty track, and the degree ends with a capstone design project sponsored by industry. A laptop is expected.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/mechanical-engineering-bsme/",
    degree: "Bachelor of Science in Mechanical Engineering (BSME)",
    intake: UG_INTAKE_SUMMER_FALL,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `School and admission route: apply to the Mechanical Engineering major in the Cockrell School of Engineering (first-year entry in summer or fall only). ${CALCULUS_READINESS}`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Aerospace Engineering",
    slug: "ut-austin-aerospace-engineering",
    level: "Bachelor",
    field: "Aerospace Engineering",
    duration: "4 years full-time (127 semester credit hours)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "UT Austin's BS in Aerospace Engineering covers both aircraft and spacecraft. After maths, physics, programming, statics, dynamics, thermodynamics and mechanics of solids, students take low-speed aerodynamics with a lab, linear system analysis, spacecraft dynamics, compressible flow, feedback control systems, electromechanical systems, propulsion, flight dynamics and an aerospace materials lab, plus a structures elective and aerospace electives. A two-semester aerospace systems senior design sequence and a high-speed aerodynamics or spacecraft systems lab complete the degree.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/aerospace-engineering-bsase/",
    degree: "Bachelor of Science in Aerospace Engineering (BSAsE)",
    intake: UG_INTAKE_SUMMER_FALL,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `School and admission route: apply to the Aerospace Engineering major in the Cockrell School of Engineering (first-year entry in summer or fall only). ${CALCULUS_READINESS}`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Chemical Engineering",
    slug: "ut-austin-chemical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (129 semester credit hours)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "UT Austin's BS in Chemical Engineering prepares students to design and run processes that involve chemical and biological change, for industries from energy and chemicals to pharmaceuticals, advanced materials and electronics. Alongside chemistry (including organic and physical chemistry), maths and physics, the major covers chemical engineering analysis, transport phenomena, thermodynamics, separations and mass transfer, numerical methods, biochemical engineering, materials, reactor design, process control and a process design course, with measurement and process labs. Students also complete 12 hours in one or two technical focus areas.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/chemical-engineering-bsche/",
    degree: "Bachelor of Science in Chemical Engineering (BSChE)",
    intake: UG_INTAKE_SUMMER_FALL,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `School and admission route: apply to the Chemical Engineering major in the Cockrell School of Engineering (first-year entry in summer or fall only). Some upper-division chemical engineering courses need a C- or better in the lower-division major courses first. ${CALCULUS_READINESS}`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Finance (BBA)",
    slug: "ut-austin-mccombs-finance-bba",
    level: "Bachelor",
    field: "Finance",
    duration: "4 years full-time (120 semester credit hours)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "Finance at Texas McCombs studies how money, capital and risk are allocated through firms, financial institutions and markets. After the BBA core in accounting, statistics and data science, information technology, operations, marketing, organisational behaviour, business finance, business communication and business law or strategy, finance majors take intermediate financial accounting, investment management, valuation, integrative finance and nine hours of finance electives (with optional concentrations). Selected students can join the year-long Financial Analyst Program, working closely with faculty and industry professionals.",
    officialProgramUrl: "https://www.mccombs.utexas.edu/undergraduate-programs/bba/academics/majors/finance-major/",
    degree: "Bachelor of Business Administration (BBA) in Finance",
    intake: "Fall semester (late August); McCombs also admits first-year students for the summer term before fall",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: first-year applicants apply to the McCombs School of Business as \"unspecified business\" and choose a specific major such as Finance after enrolling. Canfield Business Honors and the Texas CSB and ECB honors programs are separate options",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Management Information Systems (BBA)",
    slug: "ut-austin-mccombs-management-information-systems-bba",
    level: "Bachelor",
    field: "Information Technology",
    duration: "4 years full-time (120 semester credit hours)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "The McCombs BBA in Management Information Systems focuses on how technology is used to solve business problems. On top of the BBA core, MIS majors take problem solving and programming, database management, web application development, business system development and strategic IT management, plus six hours of upper-division MIS electives. Students develop both technical skills (systems analysis, software and data) and the business judgement to apply them, and graduates often work as business, IT or systems analysts, consultants, developers or technology risk specialists.",
    officialProgramUrl: "https://www.mccombs.utexas.edu/undergraduate-programs/bba/academics/majors/mis-major/",
    degree: "Bachelor of Business Administration (BBA) in Management Information Systems",
    intake: "Fall semester (late August); McCombs also admits first-year students for the summer term before fall",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: first-year applicants apply to the McCombs School of Business as \"unspecified business\" and choose a specific major such as Management Information Systems after enrolling",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "ut-austin-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (120 semester credit hours)",
    tuitionNote: UG_TUITION_LIBERAL_ARTS,
    description:
      "Economics in the College of Liberal Arts leads to a BA (a BS in Economics is also offered). After introductory micro- and macroeconomics and a two-course calculus sequence, majors take economic statistics, microeconomic theory, macroeconomic theory and introduction to econometrics, a one-hour professional development and career planning course, and 12 hours of upper-division economics electives, some of which build on microeconomic theory. As a Liberal Arts BA, the degree also includes foreign language study to the intermediate level and a minor or certificate.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/economics-ba/",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: "Fall semester (late August); Liberal Arts also admits first-year students for summer and spring entry",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Economics major in the College of Liberal Arts. Every course counted toward the major needs a C- or better (including the calculus requirement), with a 2.0 GPA in the major",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Psychology",
    slug: "ut-austin-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "4 years full-time (120 semester credit hours)",
    tuitionNote: UG_TUITION_LIBERAL_ARTS,
    description:
      "Psychology in the College of Liberal Arts leads to a BA (a BS is also offered). The major starts with introduction to psychology and statistics for the behavioural sciences, followed by psychological methods and statistics. Students then take upper-division courses across three areas: clinical, social, developmental and evolutionary psychology; cognition, language, neuroscience and perception; and multicultural and diversity topics in the behavioural sciences, plus further psychology electives. The BA also includes foreign language study and a minor or certificate.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/psychology-ba/",
    degree: "Bachelor of Arts (BA) in Psychology",
    intake: "Fall semester (late August); Liberal Arts also admits first-year students for summer and spring entry",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Psychology major in the College of Liberal Arts. The introductory psychology, statistics and methods courses each need a grade of C or better",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics and Data Science",
    slug: "ut-austin-statistics-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (120 semester credit hours)",
    tuitionNote: UG_TUITION_NATURAL_SCIENCES,
    description:
      "UT Austin's BS in Statistics and Data Science trains students to carry out every stage of a data analysis, from collecting and exploring data to applying statistical and machine learning methods and building reports, apps and dashboards. Core courses include introduction to data science, statistical thinking, probability and statistical inference, intermediate and advanced statistical methods, practical machine learning and a case studies capstone, with electives such as Bayesian statistics, data visualisation and time series forecasting. Students also take calculus, linear algebra, programming and databases, plus 12 hours of breadth courses in one other field.",
    officialProgramUrl: "https://catalog.utexas.edu/undergraduate/programs/statistics-data-science-bssds/",
    degree: "Bachelor of Science in Statistics and Data Science (BSSDS)",
    intake: "Fall semester only (late August)",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Statistics and Data Science major in the College of Natural Sciences. The major admits first-year students for fall entry only and is not currently accepting external transfer applicants",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Engineering in Electrical and Computer Engineering",
    slug: "ut-austin-mse-electrical-computer-engineering",
    level: "Master",
    field: "Engineering",
    duration: "Usually four long semesters full-time (minimum 30 hours)",
    tuitionNote: `2026-27 (fall 2026 and spring 2027, the latest published rates): the catalog's non-resident graduate tuition for engineering is US$9,660 per semester for 9 hours (US$11,674 for 12 hours), so about US$19,320 a year at 9 hours; international students pay the non-resident rate. ${GRAD_LIVING}. Texas ECE says graduate research and teaching assistantships, usually awarded by faculty, pay a monthly salary and cover tuition and individual health insurance`,
    description:
      "The Chandra Family Department of ECE's traditional Master of Science in Engineering requires at least 30 hours and can be completed with a thesis, a report or coursework only. Admission and advising are organised around eight academic tracks: architecture, computer systems and embedded systems; bioECE; decision, information and communications engineering (including AI and machine learning); electromagnetics and acoustics; electronics, photonics and quantum systems; integrated circuits and systems; power electronics and power systems; and software engineering and systems. Students need a 3.0 GPA across their approved program of work.",
    officialProgramUrl: "https://catalog.utexas.edu/graduate/programs/electrical-computer-engineering-mse/",
    degree: "Master of Science in Engineering (MSE) in Electrical and Computer Engineering",
    intake: "Fall semester (summer entry is also listed)",
    applicationDeadline:
      "Texas ECE's admissions page gives 1 December 2026 as the deadline to complete and submit the application through the Graduate School for the next intake (application fee US$90 for international applicants; ECE waives the fee only for certain US citizens and permanent residents). Applicants choose an ultimate degree objective (MSE or PhD) and a first- and second-choice academic track",
    admissionRequirements: [
      "Normally an undergraduate degree in electrical and/or computer engineering; applicants from other fields may be considered if their background suits the chosen track but may have to take extra courses. Admission is holistic and competitive, reviewed by faculty in your chosen tracks",
      "Application materials: statement of purpose, resume or CV, at least three letters of recommendation and uploaded transcripts. GRE scores are not required and are not considered",
      `${GRAD_ENGLISH}. ECE accepts TOEFL and IELTS; new international students whose scores suggest they may not meet UT's standards must take an English Language Center screening before registering`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Business Analytics and AI (MSBAi)",
    slug: "ut-austin-mccombs-ms-business-analytics-ai",
    level: "Master",
    field: "Business Analytics",
    duration: "10 months full-time (36 credit hours; summer, fall and spring)",
    tuitionNote: MCCOMBS_MS_TUITION,
    description:
      "The STEM-designated Texas McCombs MS in Business Analytics and AI (renamed from the MS in Business Analytics in August 2026) is a 36-credit, 10-month program on the Austin campus. Summer covers introductory machine learning and neural networks and data science programming in Python. Fall and spring core courses include advanced deep learning, optimisation for decision making, analytics for unstructured data and generative AI, information management, unsupervised learning, dynamic optimisation and reinforcement learning, and an industry-sponsored business intelligence capstone. Electives allow a financial analytics or supply chain and marketing analytics focus.",
    officialProgramUrl: "https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-business-analytics-and-artificial-intelligence/on-campus/",
    degree: "Master of Science in Business Analytics and Artificial Intelligence (MSBAi)",
    intake: "Summer term (the program runs summer, fall and spring)",
    applicationDeadline: MCCOMBS_MS_DEADLINE("Applications for this cohort opened on 26 August 2026"),
    admissionRequirements: [
      "An undergraduate degree from an accredited institution with at least one semester each of calculus and statistics, plus university coursework or professional experience in computer programming (C, C++, Python or Java preferred). Linear algebra is strongly recommended",
      "Application materials: McCombs application with two required essays (500 words each) and an optional one, transcripts, two letters of recommendation (at least one academic), a Kira Talent video assessment and an interview by invitation. GRE/GMAT scores are optional; McCombs says competitive applicants who submit them are usually at or above the 60th percentile",
      MCCOMBS_MS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Business Technology and AI (MSBTAI)",
    slug: "ut-austin-mccombs-ms-business-technology-ai",
    level: "Master",
    field: "Information Technology",
    duration: "10 months full-time (36 credit hours; summer, fall and spring)",
    tuitionNote: MCCOMBS_MS_TUITION,
    description:
      "The Texas McCombs MS in Business Technology and AI, formerly the MS in Information Technology and Management (MSITM), is a STEM-designated, 36-credit program completed in 10 months. A short summer session covers design methods and full-stack app development; fall and spring core courses include cloud-native app development, data management, mathematical foundations of AI, neural networks and machine learning, unstructured data and generative AI, financial management, strategic IT and digital transformation and AI risk governance. Electives cover topics such as generative AI, AI-driven cybersecurity, product and project management, and a spring capstone project is completed with a company.",
    officialProgramUrl: "https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-business-technology-and-artificial-intelligence/",
    degree: "Master of Science in Business Technology and Artificial Intelligence (MSBTAI)",
    intake: "Summer term (the program runs summer, fall and spring)",
    applicationDeadline: MCCOMBS_MS_DEADLINE(""),
    admissionRequirements: [
      "A bachelor's degree plus university coursework or professional experience in computer programming and databases (object-oriented programming and database management); a major, minor or certificate in computer science or MIS is preferred",
      "Application materials: McCombs application with program essays, transcripts, two letters of recommendation, a Kira Talent video assessment and an interview by invitation. GRE/GMAT scores are optional; competitive applicants who submit them are usually at or above the 50th percentile",
      MCCOMBS_MS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Finance (MSF)",
    slug: "ut-austin-mccombs-ms-finance",
    level: "Master",
    field: "Finance",
    duration: "10 months full-time (36 credit hours; summer, fall and spring)",
    tuitionNote: MCCOMBS_MS_TUITION,
    description:
      "The Texas McCombs Master of Science in Finance is designed as a first degree in finance for graduates of other fields. Its 36 hours (26 core and 10 elective) run over 10 months, starting with a week-long bootcamp and a five-week summer session in financial accounting, financial management and valuation. Fall and spring are split into seven-week sessions covering investment theory, statistics for finance, managerial economics, advanced valuation and modelling, advanced corporate finance, intermediate accounting and financial statement analysis, with electives such as private equity, fixed income and commercial real estate and a finance practicum across both semesters.",
    officialProgramUrl: "https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/",
    degree: "Master of Science in Finance (MSF)",
    intake: "Summer term (the program runs summer, fall and spring)",
    applicationDeadline: MCCOMBS_MS_DEADLINE(""),
    admissionRequirements: [
      "A bachelor's degree and evidence of analytical ability through study or work. McCombs suggests applicants do not already hold an undergraduate finance degree; Excel proficiency is desired and programming is a bonus. Work experience is not required. Admitted students complete online Excel and accounting bootcamps before starting",
      "Application materials: McCombs application with a required essay on your goals (500 words) and an optional one, transcripts, two letters of recommendation, a Kira Talent video assessment and an interview by invitation. GRE/GMAT scores are optional; competitive applicants who submit them are usually at or above the 50th percentile",
      MCCOMBS_MS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "ut-austin-mccombs-full-time-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time (four semesters)",
    tuitionNote: `McCombs' latest published figures: program installments for non-Texas residents (including international students) of US$61,214 a year, about US$122,428 for the two years (Texas residents US$110,392), based on 15/14/15/15 hours per semester and billed by the hour. The 2026-27 first-year cost of attendance set by the Office of Scholarships and Financial Aid is US$85,889 for non-residents: US$61,214 tuition and fees, US$17,355 housing and food, US$1,785 transportation, US$775 books and supplies and US$4,760 personal costs. Add a US$1,500 student fee the summer before enrolment; a US$2,000 deposit (credited to the first semester) secures a seat, and international students pay further international fees on their bill. All applicants, including international students, are considered for merit scholarships from US$2,000 up to full tuition`,
    description:
      "The Texas McCombs Full-Time MBA starts with orientation and pre-term classes in August. The first fall is a cohort core in financial accounting, financial management, statistics, microeconomics, marketing management, operations management and strategic career planning; spring adds strategic management and three more Custom Core classes chosen to fit your goals, and after that more than 70% of the degree is electives from over 100 courses. Students can follow optional concentrations, two STEM-designated paths (financial mathematics or management science and quantitative methods), Fellows programs and investment funds, and more than 10 dual degrees.",
    officialProgramUrl: "https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall semester (orientation and pre-term classes start in early August)",
    applicationDeadline:
      "Fall 2027 entry, by 11:59 p.m. Central Time: Round 1 closed 15 October 2026 (decisions 17 December 2026); Round 2 closes 15 January 2027 (decisions 25 March 2027) and Round 3 closes 1 April 2027 (decisions 6 May 2027). Only the online application must be in by the deadline; the video assessment and interview can follow. Application fee US$200",
    admissionRequirements: [
      "A bachelor's degree from a regionally accredited US institution or a comparable degree; typically two years of full-time work experience after your bachelor's degree (internships do not count)",
      "A GMAT, GMAT Focus, GRE or Executive Assessment score is required (no minimum and no preference between tests), unless an expired score is submitted or a merit-based test waiver is approved; students admitted without a valid score take a one-week quantitative prep program",
      "Application materials: resume, two essays of up to 250 words each, one professional recommendation (ideally from a supervisor), transcripts, a video assessment and a virtual interview",
      "English proficiency: TOEFL, IELTS or Duolingo English Test required unless you have lived and worked full-time for at least two of the past four years in the US or a country where English is the only official language, hold a master's degree from such a country, or were educated solely in English for your degree; scores must be in hand before you submit",
    ],
  },
];
