import type { Program } from "../../programs";

// Carnegie Mellon University (Pittsburgh, Pennsylvania): 7 undergraduate majors for fall 2027 first-year entry and 8 graduate programs.
// Sources: CMU Office of Undergraduate Admission (application plans and deadlines, admission requirements, academic requirements by college,
// standardized testing, international applicants), Student Financial Services 2026-2027 undergraduate and graduate tuition and cost-of-attendance
// pages (SCS, College of Engineering, MSCF, Heinz MISM, Tepper Full-Time MBA), the 2026-2027 Undergraduate Catalog program pages, SCS graduate
// admissions and the SCS master's programs comparison data, the Computer Science Department MSCS pages, the Machine Learning Department master's
// pages, the Robotics Institute MSR pages, the HCII MHCI admissions, curriculum and tuition pages, ECE graduate admissions, deadlines, FAQ and MS
// requirements, Heinz College MISM, application-process and English-proficiency pages, the Tepper Full-Time MBA and application pages, and the MSCF
// admissions, curriculum, FAQ and Quantitative Assessment pages (viewed October 30, 2026). Costs are in US dollars. CMU counts courses in units
// (a typical semester course is 9-12 units; Heinz College notes that three units are roughly one credit elsewhere).

const UNIVERSITY = {
  universitySlug: "carnegie-mellon-university",
  universityName: "Carnegie Mellon University",
  country: "United States",
  language: "English",
  campus: "Pittsburgh",
  programType: "Full-time",
} as const;

// SFS 2026-2027 undergraduate cost of attendance, first-years entering fall 2026 (resident column):
// tuition 69,702 + housing 11,700 + food 7,950 + First-Year Experience Fee 748 + technology 490 + student activities 322 + transportation 302
// = 91,214; plus books 1,000 + personal 1,300 + estimated loan fees 100 = 93,614. Health insurance (3,093) is listed separately.
const UG_TUITION =
  "2026-27: undergraduate tuition at Carnegie Mellon is US$69,702 a year (US$969 per unit), the same for every major and for international students. Student Financial Services' first-year budget for a student living on campus (first-years are required to live on campus) adds US$11,700 for housing, US$7,950 for food and US$1,862 in fees (First-Year Experience Fee US$748, technology US$490, student activities US$322, transportation US$302), for US$91,214 in tuition, fees and living costs. Books (US$1,000) and personal expenses (US$1,300) bring the official cost of attendance to about US$93,500, and the required health insurance is US$3,093 a year unless waived for comparable cover, so plan for roughly US$96,600 (our total of the official figures, leaving out federal loan fees). Fall 2027 entrants will pay the 2027-28 rates, which had not been published when we checked. CMU does not offer financial aid to international undergraduates, who must plan to pay the full cost of attendance";

const UG_INTAKE = "Fall semester (first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry, through the Common Application with a US$75 application fee. CMU has a single binding Early Decision round (there is no Early Decision II): apply by 2 November 2026, decision by 15 December 2026 and enrolment commitment by 1 February 2027; Early Decision applicants can apply to only one college at CMU and cannot reapply in Regular Decision if denied. Regular Decision: apply by 4 January 2027, decisions no later than 1 April 2027, reply by 1 May 2027. International applicants follow the same deadlines";

const UG_ENGLISH =
  "English proficiency (if English is not your native language): TOEFL iBT 5 overall with section scores of 5 or more on the scale used from 21 January 2026 (102 overall with 25+ in each section for earlier tests; MyBest scores are not used), IELTS Academic or IELTS Online 7.5 overall with 7.5+ subscores, Duolingo English Test 135 overall with 135+ in Literacy, Conversation, Comprehension and Production, TOEFL Essentials 11, or Cambridge English 191. Scores should be no more than two years old, and CMU suggests testing no later than December of your final school year";

const UG_MATERIALS =
  "Application materials: Common App essay, CMU writing supplement (three short-answer questions), secondary school counselor evaluation, one teacher recommendation and school transcripts (non-English documents need an official, school-verified translation). International students taking IB or A-levels send predicted results; if admitted you must show you have completed secondary school";

const UG_TEST_FLEXIBLE =
  "Testing: test flexible, which means you must submit some test results but choose which: SAT, ACT, IB (predicted or final), AP, Cambridge A-levels (predicted or final) or the French Baccalaureate. SAT results can be superscored; ACT results cannot. Self-reported scores are accepted until you enrol. CMU prefers testing to be finished by 1 November for Early Decision and 3 January for Regular Decision";

const ENGINEERING_HS =
  "Secondary school preparation for the College of Engineering: 4 years of English, 4 years of mathematics (through pre-calculus, preferably with calculus), 1 year each of chemistry, physics and biology, 2 years of a foreign language and 3 electives";

// SFS 2026-2027 graduate living costs and fees for a full academic year (SCS, College of Engineering): student activities 248, housing 14,752,
// food 8,664, books and supplies 2,212, health insurance 3,352, personal and miscellaneous 4,098, travel 1,756, transportation 302, technology 490
// = 35,874 (the published total of 37,374 also includes 1,500 of estimated federal loan fees).
const GRAD_LIVING =
  "Student Financial Services' 2026-27 graduate budget for the fall and spring semesters adds US$14,752 for housing, US$8,664 for food, US$2,212 for books and supplies, US$3,352 for health insurance, US$4,098 for personal costs, US$1,756 for travel and US$1,040 in required fees (student activities US$248, transportation US$302, technology US$490), a total of US$35,874";

const SCS_ENGLISH =
  "English proficiency: if you will study on an F-1 or J-1 visa and English is not your native language, you must submit the TOEFL iBT (preferred), IELTS or Duolingo English Test. The Griffin School of Computer Science gives no waivers, including for earlier study in English or in the US, and does not accept medium-of-instruction letters. It publishes no minimum score; most recently admitted students scored TOEFL iBT 105-114, IELTS 7-8 or Duolingo 130-155. Scores must be no more than two years old (tests before 1 September 2024 are not accepted), unless you hold or are completing a US bachelor's or master's degree, when scores up to five years old can be used";

const SCS_DEADLINE = (extra: string) =>
  `Fall 2027 entry through the Griffin School of Computer Science graduate application (opened 9 September 2026): early deadline 18 November 2026 (US$80 application fee per program) and final deadline 9 December 2026 (US$100), both at 3 p.m. EST. SCS recommends taking any GRE, TOEFL or IELTS test by 25 November 2026. ${extra}`;

const SCS_MATERIALS =
  "Application materials: transcripts from every college attended (unofficial PDFs at the application stage), resume or CV, a one- to two-page statement of purpose and three letters of recommendation, at least two from faculty or recent employers";

const SCS_MASTERS_TUITION = (note: string) =>
  `2026-27: the School of Computer Science master's tuition rate is US$62,200 for the academic year (US$31,100 a semester; US$864 per unit). ${GRAD_LIVING}, so the fall and spring cost of attendance is about US$98,100 (our total of the official figures). ${note}`;

const CIT_GRAD_TUITION =
  `2026-27: College of Engineering master's tuition is US$61,510 for the academic year (US$30,755 a semester; US$855 per unit). ${GRAD_LIVING}, so the fall and spring cost of attendance is about US$97,400 (our total of the official figures). SFS notes that the actual rate can vary by program, so check your student account or department once admitted. Professional master's students are not usually funded`;

export const carnegieMellonUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "cmu-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (360 units)",
    tuitionNote: UG_TUITION,
    description:
      "Carnegie Mellon's BS in Computer Science is taught in the Kenneth C. Griffin School of Computer Science. The core covers imperative and functional programming, parallel and sequential data structures and algorithms, computer systems, theoretical computer science and algorithm design, along with mathematical foundations for computer science, calculus, linear algebra and probability. Students then take one course each in artificial intelligence, logic and languages, software systems (for example operating systems, compilers, distributed systems or databases) and a further CS domain, plus SCS electives, a technical communication course and general education in science, engineering, humanities and the arts. An honours research thesis is available in the senior year.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/undergraduatecomputerscience/computer-science-bs/",
    degree: "Bachelor of Science (B.S.) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: you apply to the Griffin School of Computer Science, not straight to a major. On the Common App you can select Computer Science to show your interest, but this does not affect the decision. All SCS students declare one of the five SCS majors in the spring of their first year",
      "Testing: the School of Computer Science requires an SAT or ACT score. SAT results can be superscored; ACT results cannot. Self-reported scores are accepted until you enrol",
      "Secondary school preparation: 4 years of English, 4 years of mathematics (through pre-calculus, preferably with calculus), 1 year of physics, 2 years of chemistry, biology or computer science, 2 years of a foreign language and 3 electives",
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Artificial Intelligence",
    slug: "cmu-artificial-intelligence",
    level: "Bachelor",
    field: "Artificial Intelligence",
    duration: "4 years full-time (360 units)",
    tuitionNote: UG_TUITION,
    description:
      "Carnegie Mellon introduced the first US bachelor's degree in artificial intelligence in 2018. The BS in AI combines a computer science core (imperative and functional programming, data structures and algorithms, computer systems and theoretical CS) with about 71 units of maths and statistics and 75 units of AI courses, starting with the two-course AI and Machine Learning sequence. Students take natural language processing or computer vision and then electives across four clusters: decision making and robotics, machine learning, perception and language, and human-AI interaction. The degree also requires an ethics course, a cognitive studies course, science and engineering electives and humanities and arts courses.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/artificialintelligence/artificial-intelligence-bs/",
    degree: "Bachelor of Science (B.S.) in Artificial Intelligence",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Griffin School of Computer Science. If AI is your main interest, select \"SCS Undecided\" on the Common App and mention AI in your application; you declare the AI major at the end of your first year, after taking the spring mini-course Concepts in Artificial Intelligence (07-180)",
      "Testing: the School of Computer Science requires an SAT or ACT score. SAT results can be superscored; ACT results cannot. Self-reported scores are accepted until you enrol",
      "Secondary school preparation: 4 years of English, 4 years of mathematics (through pre-calculus, preferably with calculus), 1 year of physics, 2 years of chemistry, biology or computer science, 2 years of a foreign language and 3 electives",
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering",
    slug: "cmu-electrical-computer-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (379 units)",
    tuitionNote: UG_TUITION,
    description:
      "Carnegie Mellon's ABET-accredited BS in Electrical and Computer Engineering is designed to be broad and flexible, with few fixed requirements beyond a common core. After the College of Engineering first year (calculus, physics, programming and introductory engineering courses), students take introduction to ECE, computer systems, electronic devices and analog circuits, digital systems design, and signals and systems, plus probability, discrete maths and a mathematical foundations of EE course. They then choose two courses in one of the department's five main areas and one in a second area, a further coverage course and a capstone design course, leaving about 52 units of free electives.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/collegeofengineering/departmentofelectricalandcomputerengineering/electrical-computer-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Electrical and Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the College of Engineering, which admits students directly into a department, so select Electrical and Computer Engineering. Only students admitted as engineering undecided choose among the primary majors in the spring of their first year, and later changes of major are not guaranteed",
      UG_TEST_FLEXIBLE,
      ENGINEERING_HS,
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "cmu-mechanical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (381 units)",
    tuitionNote: UG_TUITION,
    description:
      "Carnegie Mellon's BS in Mechanical Engineering starts with Fundamentals of Mechanical Engineering, calculus, physics, chemistry and programming. From the second year students move through thermodynamics, fluid mechanics, two design-focused mechanics courses (2D and 3D), electronics for sensing and actuation, linear algebra and differential equations, then heat transfer, dynamics, mechanical design, engineering statistics, numerical methods, dynamic systems and controls, thermal-fluids experimentation and product design. Technical electives cover areas such as control, robotics, mechatronics, MEMS and computational fluid dynamics. Design and teamwork run through the curriculum, and minors, additional majors, research and study abroad are all possible.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/collegeofengineering/departmentofmechanicalengineering/mechanical-engineering-bs/",
    degree: "Bachelor of Science (B.S.) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the College of Engineering and select Mechanical Engineering, since engineering students are admitted directly into a department (or as undecided, choosing a primary major in the spring of the first year). You must pass Differential and Integral Calculus, Integration and Approximation and Physics I for Engineering Students before starting the sophomore mechanical engineering core",
      UG_TEST_FLEXIBLE,
      ENGINEERING_HS,
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics and Data Science",
    slug: "cmu-statistics-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (360 units; 175-193 units in the major)",
    tuitionNote: UG_TUITION,
    description:
      "The BS in Statistics and Data Science from the Department of Statistics and Data Science in the Dietrich College of Humanities and Social Sciences teaches statistical theory, methods and judgement for real-world problems. The major has seven parts: maths foundations (calculus and linear algebra), beginning, intermediate and advanced data analysis, probability and statistical theory, statistical computing, a special topics course, modern regression and advanced methods, and a 36-unit concentration you design outside statistics with your advisor. Electives include causal inference, network analysis, statistical graphics, sports analytics and a corporate capstone project. Related majors include Statistics and Machine Learning and Economics and Statistics.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/dietrichcollegeofhumanitiesandsocialsciences/departmentofstatistics/statistics-data-science-bs/",
    degree: "Bachelor of Science (B.S.) in Statistics and Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Dietrich College of Humanities and Social Sciences, which is home to the Department of Statistics and Data Science",
      UG_TEST_FLEXIBLE,
      "Secondary school preparation for Dietrich College: 4 years of English, 3 years of mathematics (through pre-calculus; more advanced maths is strongly encouraged for BS programs), at least 1 year of science (2 or more preferred), 2 years of a foreign language and 6 electives",
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Information Systems",
    slug: "cmu-information-systems",
    level: "Bachelor",
    field: "Information Systems",
    duration: "4 years full-time (360 units)",
    tuitionNote: UG_TUITION,
    description:
      "Carnegie Mellon's BS in Information Systems teaches students to analyse, design, build and test information systems that solve organisational problems. Students take three computer science courses (up to data structures), maths prerequisites and a seven-course IS core that includes the information systems milieux, database design and development, application design and development and a team consulting project for a real client. Breadth courses cover communication and design, decision making and data analysis, and innovation and entrepreneurship. Students then choose an IS concentration or an approved minor or additional major, and complete Dietrich College general education requirements.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/dietrichcollegeofhumanitiesandsocialsciences/informationsystems/information-systems-bs/",
    degree: "Bachelor of Science (B.S.) in Information Systems",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Information Systems program, which the Office of Admission lists as a separate choice with its own course requirements. All maths and computer science prerequisites must be finished before the start of the third year",
      UG_TEST_FLEXIBLE,
      "Secondary school preparation for Information Systems: 4 years of English, 4 years of mathematics (through pre-calculus, preferably with calculus), at least 1 year of science (2 or more preferred), 2 years of a foreign language and 6 electives",
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Administration",
    slug: "cmu-business-administration",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (at least 364 units)",
    tuitionNote: UG_TUITION,
    description:
      "The Tepper School of Business BS in Business Administration has a strong quantitative base: calculus, multivariate analysis, optimisation, micro- and macroeconomics, probability and statistics and regression. The business core covers accounting, business computing, organisational behaviour, ethics, business communication and presentations, operations, marketing and finance, and finishes with the Management Game capstone. Students must also complete a concentration of at least 36 units (for example accounting, AI and business, business analytics and technologies, entrepreneurship, finance, marketing, operations, product management or strategy), 18 units of business electives, an academic minor and the University Core.",
    officialProgramUrl: "https://coursecatalog.web.cmu.edu/schools-colleges/tepper/undergraduatebusinessadministrationprogram/business-administration-bs/",
    degree: "Bachelor of Science (B.S.) in Business Administration",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: apply to the Tepper School of Business",
      UG_TEST_FLEXIBLE,
      "Secondary school preparation for the Tepper School: 4 years of English, 4 years of mathematics (through pre-calculus, preferably with calculus), 1 year each of chemistry, physics and biology, 2 years of a foreign language and 3 electives",
      UG_ENGLISH,
      UG_MATERIALS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science",
    slug: "cmu-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "Usually 3 semesters full-time (sometimes 4 for students switching from another field)",
    tuitionNote: SCS_MASTERS_TUITION(
      "Master's programs in the School of Computer Science generally do not offer financial aid"
    ),
    description:
      "The MSCS from Carnegie Mellon's Computer Science Department is a coursework-based degree for graduates with strong maths, programming and reasoning skills; a computer science bachelor's is not required, though a technical background helps. There is no fixed course list: with an advisor you build your own plan of 96-108 units of qualifying master's courses (typically eight courses), including at least one course each in systems, theoretical foundations and artificial intelligence, plus up to 12 elective units, while keeping a 3.0 QPA. Research is optional, about a third of students take part in some, and there is a thesis option. Most students are expected to take Introduction to Computer Systems (15-213/513), which can be done online in the summer before arrival.",
    officialProgramUrl: "https://csd.cmu.edu/academics/masters/ms-in-computer-science",
    degree: "Master of Science (M.S.) in Computer Science",
    intake: "Fall semester only",
    applicationDeadline: SCS_DEADLINE("MSCS admits students for the fall semester only."),
    admissionRequirements: [
      "A bachelor's degree with a strong aptitude for mathematics, programming and logical reasoning (it does not have to be in computer science)",
      "GRE: strongly recommended, especially if your transcript does not clearly show strong maths ability; if you cannot submit it, explain why briefly in your statement of purpose. CMU graduates and current students are exempt. GRE scores must be under five years old",
      SCS_MATERIALS,
      SCS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Machine Learning",
    slug: "cmu-ms-machine-learning",
    level: "Master",
    field: "Artificial Intelligence",
    duration: "16 months full-time (3 semesters: fall, spring, fall); some students take 4 semesters",
    tuitionNote: SCS_MASTERS_TUITION(
      "The Machine Learning Department also gives US$62,200 as 2026-27 full-time tuition and suggests budgeting for about a 5% rise each year. The program provides no financial support, and a non-refundable first tuition payment of US$2,500 is due when you accept an offer"
    ),
    description:
      "The MS in Machine Learning from Carnegie Mellon's Machine Learning Department needs six core courses, three electives and a practicum (an internship or research related to machine learning). The core is introduction to machine learning (or the advanced version), a deep learning or deep reinforcement learning course, probabilistic graphical models, machine learning in practice, optimisation for machine learning and probability and mathematical statistics (or intermediate statistics). Electives include machine learning with large datasets, generative AI, deep learning systems, advanced ML theory, natural language processing, machine learning with graphs and multimodal machine learning. The program is STEM-designated and on campus only.",
    officialProgramUrl: "https://ml.cmu.edu/academics/primary-ms-machine-learning-masters",
    degree: "Master of Science (M.S.) in Machine Learning",
    intake: "Fall semester only (August start)",
    applicationDeadline: SCS_DEADLINE("Applications are accepted once a year, and decisions usually arrive in February."),
    admissionRequirements: [
      "A strong background in computer science (including complexity theory and good programming skills) and in maths: the first-year courses assume at least a year of college-level probability and statistics, plus matrix algebra and multivariate calculus. A CS degree is not required",
      "GRE: optional for applicants starting in August 2027; no GRE Subject Test is needed",
      SCS_MATERIALS,
      SCS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Robotics",
    slug: "cmu-ms-robotics",
    level: "Master",
    field: "Robotics",
    duration: "24 months full-time (two academic years, graduating in August of the second summer; at least 168 units)",
    tuitionNote:
      `2026-27: the MS in Robotics charges the School of Computer Science Ph.D. tuition rate, US$52,000 for the academic year (US$26,000 a semester; US$723 per unit). ${GRAD_LIVING}, so the fall and spring cost of attendance is about US$87,900 (our total of the official figures). MSR students are expected to fund themselves for two years: the Robotics Institute has no scholarships or fellowships for them, and research assistantships from advisors are occasional and never guaranteed`,
    description:
      "The Robotics Institute's MS in Robotics (MSR) is a research master's modelled on the first two years of a Ph.D. Students need at least 168 units: at least 84 of coursework (four core courses across sensing and perception, thinking about actions, robot embodiment and environment interaction, plus at least three electives) and at least 84 of supervised research with a Robotics Institute faculty advisor, whom students must find by 31 October of their first semester. The program ends with a master's thesis and a public thesis talk, approved by a committee. A summer internship can count for up to 12 research units. Courses must be passed with a B- or better and a 3.3 GPA is needed to graduate.",
    officialProgramUrl: "https://www.ri.cmu.edu/education/academic-programs/master-of-science-robotics/",
    degree: "Master of Science (M.S.) in Robotics",
    intake: "Fall semester only (no spring or summer admission)",
    applicationDeadline:
      "Fall 2027 entry through the Griffin School of Computer Science graduate application (Robotics Institute MS programs), open 9 September to 9 December 2026 at 3 p.m. EST; the SCS application fee is US$80 per program by 18 November 2026 and US$100 after that. No updates are accepted after the deadline, and decisions are generally released by the end of February",
    admissionRequirements: [
      "A basic, introductory-course level understanding of calculus, linear algebra, numerical analysis, probability and statistics; programming, data structures and algorithms; and mechanics, dynamics, electricity and magnetism and optics. Any undergraduate major is welcome",
      "GRE: optional, but reviewed if you include it. The program does not make conditional offers",
      SCS_MATERIALS,
      SCS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Electrical and Computer Engineering",
    slug: "cmu-ms-electrical-computer-engineering",
    level: "Master",
    field: "Engineering",
    duration: "3 or 4 full-time semesters (36 units each; a final semester can be in summer)",
    tuitionNote: CIT_GRAD_TUITION,
    description:
      "Carnegie Mellon's MS in Electrical and Computer Engineering, from the College of Engineering, gives students a solid base in ECE fundamentals and room to specialise. With an academic advisor and faculty mentor, each student builds a plan from the full range of ECE graduate courses and can choose an optional concentration such as intelligent physical systems, computational engineering methods and systems, or network and distributed systems. The department offers more than one MS route, and graduates need a QPA of at least 3.0 across the 97 or 133 required units, depending on the route, plus a one-unit introduction to graduate studies course. Only one graduate course (12 units) can be transferred in from another university.",
    officialProgramUrl: "https://www.ece.cmu.edu/academics/ms-ece/index.html",
    degree: "Master of Science (M.S.) in Electrical and Computer Engineering",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: the application opened on 1 October 2026; MS early review deadline 15 December 2026 and MS submission deadline 15 January 2027 (11:59 p.m. ET, all materials). Spring entry: application opens 1 August and closes 31 August. The application fee is US$75 (non-refundable), and you can be considered for up to three ECE programs in one application",
    admissionRequirements: [
      "A bachelor's degree, with unofficial transcripts uploaded to the application (official copies are only needed if you accept an offer)",
      "Application materials: statement of purpose, resume, three recommendation letters and transcripts. GRE scores are optional for the spring 2027 and fall 2027 cycles, and applicants without them are considered equally",
      "English proficiency (required for international applicants unless you will have graduated from a US university before enrolling, are a CMU student or graduate, or are a UK or Canadian citizen): Duolingo English Test 115 overall (Literacy 105, Comprehension 115, Production 90, Conversation 95); TOEFL iBT 86 overall with Reading 22, Listening 22, Speaking 20 and Writing 22, or 4.5 overall on the 1-6 scale (Reading 4.5, Listening 5, Speaking 4, Writing 4.5), from a single test date (MyBest is not accepted); or IELTS 7 overall with Reading 6.5, Listening 6.5, Speaking 6 and Writing 6. Scores must arrive by the application deadline",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Information Systems Management",
    slug: "cmu-mism",
    level: "Master",
    field: "Information Systems",
    duration: "16 months full-time (3 semesters plus a required summer internship)",
    tuitionNote:
      "2026-27: Heinz College MISM tuition for full-time students is US$29,570 a semester (fall 2026 and spring 2027), rising to US$30,460 for fall 2027; part-time study is US$825 per unit. Student Financial Services' MISM budget adds, each semester, US$520 in university fees, US$13,025 for room, board and other living costs, US$625 for books and supplies and US$1,610 for travel, plus US$3,352 for health insurance in the fall, so the fall and spring semesters come to about US$94,050 (our total of the official figures). A laptop (estimated at US$1,500) is also required. Fall 2027 entrants will pay the 2027-28 rates. Heinz College offers merit scholarships and fellowships, and every applicant is considered for them",
    description:
      "Heinz College's Master of Information Systems Management (MISM) combines technical training with management and leadership skills for roles such as product manager, business analyst, technology consultant and IT leader. From fall 2027 students pick one of two pathways, data engineering and cloud computing or foundations of AI and machine learning, alongside core courses in organisational design, Python for software development, economic analysis, decision making under uncertainty, tech strategy and governance, statistics for IT managers, accounting and finance analytics, communicating with data and a client capstone project. Electives include operationalising AI, deep learning, machine learning for problem solving and responsible AI governance. A separate Business Intelligence and Data Analytics track is also offered.",
    officialProgramUrl: "https://www.heinz.cmu.edu/programs/information-systems-management-master/16-month",
    degree: "Master of Information Systems Management (MISM)",
    intake: "Fall semester (August 2027 cohort)",
    applicationDeadline:
      "August 2027 entry, with no application fee: Round 1 by 1 December 2026 (decision by the end of January), Round 2 by 10 January 2027 (decision by mid-March) and Round 3 by 1 February 2027 (decision by the end of March; the last round with full consideration for competitive scholarships and fellowships). Applications are still accepted after that while places remain, and the system closes on 15 June 2027. Heinz strongly recommends that international students apply in Round 1 or 2 to leave time for the visa process",
    admissionRequirements: [
      "A bachelor's degree from a regionally accredited institution or equivalent. If your degree is from outside the US you need a course-by-course credential evaluation sent by an approved evaluation service",
      "Application materials: online application, essay, resume and two recommendations. GRE or GMAT scores are required unless you qualify for a waiver, for example by showing a B or better in a college-level, credit-bearing pre-calculus course or higher maths on your transcript. The summer internship can be waived with three years of prior work experience",
      "English proficiency (if English is not your native language, unless you studied or worked for five or more years in a listed English-speaking country or will earn a four-year US bachelor's degree): TOEFL iBT section minimums of Reading 22, Listening 22, Speaking 20 and Writing 22 (on the scale used from 21 January 2026: 4.5, 5, 4 and 4.5); IELTS Academic 6.5 overall with Listening, Reading and Writing 6.5 and Speaking 6.0; or Duolingo English Test 120 overall with Literacy 120, Comprehension 125, Production 90 and Conversation 105. CMU will not issue an I-20 to anyone below these minimums. Scores must be sent directly by the testing agency",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Human-Computer Interaction",
    slug: "cmu-mhci",
    level: "Master",
    field: "Human-Computer Interaction",
    duration: "12 months full-time (3 semesters: fall, spring and summer)",
    tuitionNote:
      `2026-27: MHCI tuition is US$31,100 a semester for full-time students (US$93,300 across the three semesters at this year's rate); this covers tuition only. As an SCS program, the Student Financial Services graduate budget applies: ${GRAD_LIVING} for fall and spring, and the summer semester adds further living costs. The MHCI program does not offer departmental financial aid or tuition support, though the program takes part in CMU's Rales Fellows program`,
    description:
      "The Human-Computer Interaction Institute's MHCI is an interdisciplinary professional degree completed in one calendar year, with students from design, social science, business and computer science backgrounds. Students take seven core courses (an HCI pro-seminar, user-centred research and evaluation, interaction design fundamentals, advanced interaction design, a programming course chosen to suit their experience, and two capstone project courses) plus four electives from across the university. The capstone is a seven-month industry project in which student teams work with an outside sponsor to research a real problem and deliver working prototypes and recommendations. The program warns of a 60-plus-hour weekly workload.",
    officialProgramUrl: "https://www.hcii.cmu.edu/academics/mhci/curriculum",
    degree: "Master of Human-Computer Interaction (MHCI)",
    intake: "Fall semester (2027-28 cohort)",
    applicationDeadline:
      "2027-28 cohort: a single deadline of 15 January 2027 at 3 p.m. EST, through the separate MHCI application (there is no early deadline). The application fee is US$100, and fee waiver requests are due a week before the deadline. Decisions are sent by 15 March. The MHCI admissions office is closed from 19 December 2026 to 3 January 2027",
    admissionRequirements: [
      "A four-year bachelor's degree from a regionally accredited US institution or a foreign equivalent by the start of the fall term; no specific major is required",
      "Application materials: three letters of recommendation (at least two from faculty or recent employers recommended), a statement of purpose of up to 500 words, resume, transcripts and a one-minute video essay. GRE scores and work examples (a portfolio, GitHub, publications and so on) are optional",
      "English proficiency (if you will study on an F-1 or J-1 visa and English is not your native language; no waivers): TOEFL iBT with at least 25 in each section, or 5.5 overall with no section below 5.0 on the scale used from 2026; IELTS 8.5 overall with no band below 8.0, as stated on the MHCI admissions page; or Duolingo English Test 130 overall with no subscore below 125. Scores must be under two years old (tests before 1 September 2024 are not accepted), even if you studied in the US",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computational Finance",
    slug: "cmu-mscf",
    level: "Master",
    field: "Finance",
    duration: "Full-time over three academic semesters with a required summer internship (on-campus orientation starts 1 August)",
    tuitionNote:
      "2026-27: MSCF tuition is US$71,800 for the academic year (US$35,900 a semester) at both the Pittsburgh and New York locations. Student Financial Services' Pittsburgh budget adds US$14,752 for housing, US$8,664 for food, US$2,212 for books and supplies, US$3,352 for health insurance, US$4,098 for personal costs, US$2,990 for travel and US$1,040 in fees, for a fall and spring cost of attendance of about US$108,900 (our total of the official figures, leaving out federal loan fees). New York has higher housing and food costs. Every admitted student is considered for a merit scholarship, but these are partial and competitive",
    description:
      "Carnegie Mellon's MS in Computational Finance (MSCF) is run jointly by four departments: the Tepper School of Business, Statistics and Data Science, Mathematical Sciences and Computer Science. It starts with an online Summer Launch course and a three-week on-campus orientation covering maths, programming, markets and careers. The first year builds core quantitative finance skills, including stochastic calculus, Python and a five-course financial data science sequence, alongside financial computing courses (the third is in C++) and a course on how financial markets and firms work. After a required summer internship (or a faculty-supervised research project), the final semester mixes required courses with electives such as NLP for finance and factor-based asset management, plus a 14-week data science capstone with a financial firm. Students choose the Pittsburgh or New York location.",
    officialProgramUrl: "https://www.cmu.edu/mscf/academics/curriculum",
    degree: "Master of Science in Computational Finance (MSCF)",
    intake: "Fall (orientation begins 1 August 2027)",
    applicationDeadline:
      "Fall 2027 entry: Round 1 by 1 December 2026 (decisions 26 February 2027, deposit due 25 March 2027) or Round 2 by 1 March 2027 (decisions 30 April 2027, deposit due 16 May 2027). The application fee is US$125, paid by credit card",
    admissionRequirements: [
      "A four-year bachelor's degree (or foreign equivalent) with Calculus I and II, linear algebra, calculus-based probability and at least one semester of an object-oriented programming language (C++, Java, Python or C#); applicants missing one area can be considered if they fix it before enrolling",
      "Application materials: resume, transcripts and degree certificates for every institution attended, two short essays and a 90-second video essay, and three letters of recommendation. You must submit either an official GRE or GMAT score (valid for five years) or take the free one-hour MSCF Quantitative Assessment. Interviews are by invitation",
      "English proficiency: international applicants must take the Duolingo English Test, TOEFL or IELTS, unless their bachelor's degree came from an institution where they studied for two or more years and English was the only language of instruction, or they earned a graduate degree taught entirely in English. Scores must be under two years old. The MSCF admissions page does not publish a minimum score",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "cmu-tepper-full-time-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time (an accelerated option for students with undergraduate business coursework is one semester shorter)",
    tuitionNote:
      "2026-27: Tepper School Full-Time MBA tuition is US$84,186 a year (US$42,093 a semester). Student Financial Services' budget for a single student adds US$10,350 for housing, US$5,176 for food, US$1,450 for books and supplies, US$3,220 for travel, US$10,524 for personal costs, US$1,040 in fees and US$3,352 for health insurance, for an annual cost of attendance of about US$119,300 (our total of the official figures, leaving out federal loan fees). The accelerated option saves one semester of tuition",
    description:
      "The Tepper School's STEM-designated Full-Time MBA builds on Carnegie Mellon's strengths in analytics and technology. Students start with core courses in optimisation, prescriptive and predictive modelling, then cover marketing, finance, operations, economics, accounting, organisational behaviour and strategy. They can then specialise through electives, concentrations and tracks such as energy and sustainability business, management of innovation and product development, and technology strategy and product management. The program is based in the Tepper Quad in Pittsburgh, with links to the Swartz Center for Entrepreneurship, more than 40 MBA student clubs and global treks. Students who have already studied business may qualify for the accelerated pathway.",
    officialProgramUrl: "https://www.cmu.edu/tepper/programs/mba/full-time",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: Round 1 closed 30 September 2026 (decisions 9 December 2026); Round 2 by 8 January 2027 (decisions 10 March 2027); Round 3 by 3 March 2027 (decisions 22 April 2027, deposit due 13 May 2027); Round 4 by 5 May 2027 and a final Round 4 deadline of 15 June 2027 (rolling decisions). International applicants must apply by Round 3 at the latest. The application fee is US$200, and you can earn a fee waiver by attending a Tepper event",
    admissionRequirements: [
      "A four-year bachelor's degree from an accredited US college or university or a foreign equivalent, plus one semester of college-level calculus with a B or better (otherwise you must complete Tepper's preparatory coursework)",
      "Application materials: online form, resume, transcripts and degree certificates, one essay (500 words maximum) from a choice of two, a two-minute video essay on career goals and one professional recommendation (GMAC Common Letter of Recommendation). A GMAT, GMAT Focus, GRE or Executive Assessment score is required, although test waivers can be granted case by case. Interviews are required and by invitation only",
      "English proficiency: TOEFL, IELTS or Duolingo English Test unless your bachelor's or graduate degree was taught only in English. Tepper recommends TOEFL iBT 25 in each section (or at least 5 overall and in each section on the new scale), IELTS 7 overall and in each band, or Duolingo 120 overall. Scores must be under two years old when you apply",
    ],
  },
];
