import type { Program } from "../../programs";

// Massachusetts Institute of Technology (MIT): 8 undergraduate majors (SB degrees) for fall 2027 first-year entry and
// 7 full-time graduate programmes (MIT Sloan School of Management, Electrical Engineering and Computer Science, the
// Technology and Policy Program, Urban Studies and Planning, and Architecture).
// Sources (viewed 16 November 2026): MIT Admissions first-year pages on deadlines and requirements, tests and scores,
// and international applicants (mitadmissions.org/apply/firstyear/deadlines-requirements/, /tests-scores/,
// /international/); Student Financial Services undergraduate cost of attendance 2026-27, affordability, aid deadlines
// and international aid pages (sfs.mit.edu/undergraduate-students/the-cost-of-attendance/coa/, /making-mit-affordable/,
// /apply-for-aid/deadlines-process/, /apply-for-aid/international/); the SFS graduate cost of attendance 2026-27
// (sfs.mit.edu/graduate-students/cost-of-attendance/); Registrar tuition pages, including Sloan School and non-standard
// tuition for 2026-27 (registrar.mit.edu/registration-academics/tuition-fees/...); the MIT Course Catalog degree charts
// and department pages (catalog.mit.edu/degree-charts/..., /mit/undergraduate-education/academic-programs/majors/,
// /schools/engineering/electrical-engineering-computer-science/, /schools/engineering/data-systems-society/,
// /schools/architecture-planning/architecture/, /schools/architecture-planning/urban-studies-planning/); Office of
// Graduate Education programme pages and the English Language Proficiency exemption policy (oge.mit.edu/programs/...,
// oge.mit.edu/graduate-admissions/admissions-policies/elp-test-requirement/elp-exemptions/); and MIT Sloan MBA, Master
// of Finance and Master of Business Analytics admissions, how-to-apply, curriculum and tuition pages
// (mitsloan.mit.edu/mba/..., /mfin/..., /master-of-business-analytics/...). Costs are in US dollars. MIT is private and
// charges international and US students the same tuition. It runs on semesters (fall and spring, with the January
// Independent Activities Period and a summer session).

const UNIVERSITY = {
  universitySlug: "massachusetts-institute-of-technology",
  universityName: "Massachusetts Institute of Technology",
  country: "United States",
  language: "English",
  campus: "Cambridge, Massachusetts",
  programType: "Full-time",
} as const;

// SFS 2026-27 undergraduate COA: tuition 66,720; student life fee 420; housing 14,090 (most expensive double);
// food 8,104 (most expensive meal plan); books and supplies 930; personal 2,496; total 92,760. Travel allowance is
// set per student and excluded. MIT SHIP is billed automatically unless waived and is not in the total.
const UG_TUITION =
  "2026-27 (latest published): undergraduate tuition is US$66,720 for the academic year, the same for international and US students. Student Financial Services' 2026-27 cost of attendance is US$92,760 before aid: tuition, the US$420 student life fee, US$14,090 for housing (MIT budgets for its most expensive double room; all first-year students live on campus), US$8,104 for food (the most expensive, 21-meals-a-week plan), US$930 for books, course materials and equipment and US$2,496 for personal expenses. A travel allowance is worked out from your home address and is not included. Massachusetts law requires full health cover, so students are automatically enrolled in and charged for the MIT Student Health Insurance Plan (MIT SHIP) unless they waive it with comparable cover; that charge is not in the total. Financial aid for international students: MIT is need-blind and meets 100% of demonstrated need for all undergraduates, international as well as domestic, and international students are considered for aid through the same process. MIT says that from 2025-26 students from families earning under US$200,000 a year typically pay no tuition. To apply, international students submit the CSS Profile (MIT code 3514) and their parents' tax returns or income documents through the College Board's IDOC service (home-country tax returns are accepted, with an English translation that does not need to be professional); no FAFSA is needed. Aid deadlines are 30 November 2026 for Early Action and 15 February 2027 for Regular Action, the same for international applicants";

const UG_INTAKE = "Fall term only (fall 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry (the 2026-27 admission cycle), through MIT's own first-year application in the MIT application portal. You may apply only once per entry year, in either Early Action or Regular Action. Early Action closed on 1 November 2026, so it had passed when we checked; EA decisions come out in mid-December 2026. Regular Action: apply by 4 January 2027, with decisions in mid-March 2027 and the enrolment reply due by 1 May 2027. Teacher letters and the Secondary School Report are due by the same deadline, but your application can be submitted before recommenders finish. The SAT or ACT must be taken by 31 December 2026 for Regular Action (by 30 November for EA), and Regular Action applicants can take English proficiency tests until 31 January 2027. Deferred and admitted students send the February Updates and Notes (FUN) Form with midyear grades in mid-February. International aid applicants must send the CSS Profile and IDOC documents by 15 February 2027 (30 November 2026 for EA)";

const UG_TESTING =
  "Testing: required. MIT requires the SAT or ACT from all first-year and transfer applicants, including international students; the ACT writing and science sections and the SAT essay are not needed, and both the paper and digital SAT are accepted. MIT has no cutoff or recommended SAT/ACT score and reads results in the context of each applicant. You self-report every full sitting in the application (official reports are only checked if you enrol), and MIT considers your highest score in each section across sittings";

const UG_ENGLISH =
  "English proficiency: not strictly required, but MIT strongly recommends an English test for non-native speakers who have used English for fewer than five years or who do not speak English at home or at school. Accepted tests, with MIT's minimum and recommended scores: TOEFL iBT taken before 21 January 2026, minimum 90 and recommended 100; TOEFL taken on or after 21 January 2026 (new 1-6 scale), minimum 5 and recommended 5.5; IELTS, minimum 7 and recommended 7.5; PTE Academic, minimum 65 and recommended 70; Cambridge English C1 Advanced or C2 Proficiency, minimum 185 and recommended 190; Duolingo English Test, minimum 120 and recommended 125. Scores are self-reported in the application";

const UG_ACADEMIC =
  "Application (the same for international and US applicants): the MIT first-year application form (biographical information, essays, activities and academics), a Secondary School Report with transcripts from every secondary school and college attended, two teacher recommendations (MIT suggests one from a maths or science teacher and one from a humanities, social science or language teacher) and a US$75 application fee or a fee waiver. Transcripts from outside the US should include three years of grades, external exam results such as IB, A Levels or CBSE, and predicted grades where available; MIT does not convert grades, has no required high school subjects and has no country quotas. Optional extras include a creative portfolio on SlideRoom and, where an MIT Educational Counselor is available, an interview (if none is available the interview is waived without penalty)";

const UG_MAJOR =
  "Choosing the major: students are admitted to MIT as a whole rather than to a department. Most choose their major (called a Course) at the end of the first year and must do so by the end of the second year. Every SB degree requires the 17-subject General Institute Requirements (a six-subject science core, eight humanities, arts and social sciences subjects, two restricted science and technology electives and a laboratory requirement), a communication requirement, the departmental programme and a physical education and swimming requirement";

// SFS 2026-27 graduate COA: tuition 66,720 (9 months) / 89,775 (12 months); fees 420; MIT SHIP 5,148 (if enrolled);
// housing 17,100 / 22,800; food 7,830 / 10,440; books 1,161 / 1,548; personal 7,794 / 10,392; transport 2,844 / 3,792;
// total 109,017 / 144,315. Non-tuition items: 42,297 (9 months) / 54,540 (12 months), our sums.
const GRAD_COA =
  "Student Financial Services' 2026-27 graduate cost of attendance for the nine-month academic year (September to May) is US$109,017: US$66,720 of standard graduate tuition, the US$420 student fee, US$5,148 for MIT SHIP health insurance (counted if you enrol in the plan), an estimated US$17,100 for housing, US$7,830 for food, US$1,161 for books and supplies, US$7,794 for personal costs and US$2,844 for transport. Students also registered for the summer session pay US$89,775 in tuition, for a 12-month budget of US$144,315. First-year graduate students can have a US$2,400 computer allowance added to their loan budget";

const SLOAN_LIVING = (months: string) =>
  `MIT Sloan programmes have their own tuition, so the SFS graduate tuition does not apply; SFS's 2026-27 non-tuition budget (the student fee, MIT SHIP health insurance, housing, food, books, personal costs and transport) adds up to US$42,297 for nine months or US$54,540 for twelve months (our sums from the SFS table). ${months}`;

const SLOAN_ENGLISH =
  "English proficiency (MIT Sloan): no English test is required, and Sloan does not accept TOEFL or IELTS scores; your English is assessed during the interview";

const OGE_ELP_EXEMPTION =
  "MIT Graduate Admissions automatically exempts applicants whose first language, spoken at home, is English, or who earned an undergraduate degree within the last five years after three to four years at an English-speaking university in Australia, Canada, Ireland, New Zealand, the United Kingdom or the United States. English-medium degrees from other countries and graduate degrees do not qualify, and Graduate Admissions does not accept exemption requests";

export const mitPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science and Engineering (Course 6-3)",
    slug: "mit-computer-science-engineering",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 180-198 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "Course 6-3 is the computer science degree of MIT's Department of Electrical Engineering and Computer Science (EECS). After an introductory programming subject in Python, students take Fundamentals of Programming, Software Construction, Mathematics for Computer Science and Introduction to Algorithms, then a theory subject (computability and complexity, or design and analysis of algorithms), a systems subject (computer systems engineering, operating systems or database systems), low-level programming in C and assembly, Computation Structures and one subject in probability, inference or linear algebra. They then choose two subjects from a computer science track and two more from a computer science, AI and decision making or electrical engineering track, plus one further subject from the 6-3, 6-4, 6-5 or mathematics requirements. At least two departmental subjects must be advanced undergraduate subjects and at least 12 units must come from the artificial intelligence list, and two communication-intensive subjects are needed in the major.",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/",
    degree: "Bachelor of Science (SB) in Computer Science and Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Artificial Intelligence and Decision Making (Course 6-4)",
    slug: "mit-artificial-intelligence-decision-making",
    level: "Bachelor",
    field: "Artificial Intelligence",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 180-189 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "Course 6-4, offered by EECS, is MIT's undergraduate degree in artificial intelligence and decision making. The fundamentals are introductory programming, Fundamentals of Programming, Mathematics for Computer Science, Introduction to Algorithms, linear algebra (with optimisation) and a probability or statistics subject. Students then take five subjects across the programme's 'centers', at least one in each of five areas: data-centric (statistical data analysis or machine learning), model-centric (for example signal processing, control or computer graphics), decision-centric (such as optimisation methods or representation and reasoning in AI), computation-centric (algorithms or complexity theory) and human-centric (such as networks, AI and society, computational cognitive science or information policy). An applied communication-intensive subject follows, chosen from robotics, robotic manipulation, computer vision or natural language processing, along with an advanced AI elective and a further Course 6 or mathematics subject. Students must also take at least one subject on the social and ethical responsibilities of computing.",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/artifical-intelligence-decision-making-course-6-4/",
    degree: "Bachelor of Science (SB) in Artificial Intelligence and Decision Making",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering (Course 2)",
    slug: "mit-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 189-192 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "MIT's Department of Mechanical Engineering builds the Course 2 degree around paired core subjects: Mechanics and Materials I and II, Dynamics and Control I and II, Thermal-Fluids Engineering I and II, and Design and Manufacturing I and II (the robotics-focused Design of Electromechanical Robotic Systems can replace the first design subject). Students also take differential equations, numerical computation for mechanical engineers, an engineering tools subject, a measurement and instrumentation laboratory and an undergraduate thesis. A communication-intensive capstone is chosen from the Product Engineering Process (2.009), Engineering Systems Design, Medical Device Design or Global Engineering, and two restricted electives come from a wide list that includes robotics, feedback control, optics, sustainable energy, biomechanics, product design, manufacturing systems and machine learning for physical systems. Related degrees in the department include Course 2-A and Mechanical and Ocean Engineering (2-OE).",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/mechanical-engineering-course-2/",
    degree: "Bachelor of Science (SB) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Mathematics (Course 18)",
    slug: "mit-mathematics",
    level: "Bachelor",
    field: "Mathematics",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 180-195 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Mathematics' Course 18 degree is deliberately flexible. Students take one subject in each of five areas: differential equations (ordinary or partial), linear algebra, real analysis, probability and statistics, and one advanced subject chosen from options such as numerical analysis, the theory of computation, algorithms, logic and set theory, algebra, number theory, topology and differential geometry. They then pick six more 12-unit mathematics subjects, and at least seven of the 11 subjects in the major must be advanced. The communication requirement is met through undergraduate seminars in areas such as analysis, discrete mathematics, logic, probability, algebra, number theory, topology and geometry, or the project laboratory in mathematics. Alongside the general degree, the department offers Mathematics with Computer Science (18-C).",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/mathematics-course-18/",
    degree: "Bachelor of Science (SB) in Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Physics (Course 8)",
    slug: "mit-physics",
    level: "Bachelor",
    field: "Physics",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 180 units beyond them on the flexible option, or 186 on the focused option)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Physics offers its SB in two versions. The focused option, aimed at students heading for graduate study in physics, covers vibrations and waves (Physics III), relativity, three semesters of quantum physics, statistical physics, Classical Mechanics II, two semesters of experimental physics laboratory and an undergraduate physics thesis, plus a mathematics subject beyond differential equations and two further physics subjects such as Electromagnetism II or Statistical Physics II. The flexible option keeps the core of Physics III, Quantum Physics I and Statistical Physics I, then lets students choose a relativity or quantum subject, an experimental experience (the lab, research, a thesis or an approved summer externship) and three subjects forming an intellectually coherent unit in an area that need not be physics, approved by the department. Both options need two communication-intensive subjects in the major.",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/physics-course-8/",
    degree: "Bachelor of Science (SB) in Physics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Economics (Course 14-1)",
    slug: "mit-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 180 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "Course 14-1 is the Department of Economics' main undergraduate degree. Students take principles of microeconomics (or Microeconomic Theory and Public Policy) and macroeconomics, statistical methods in economics, Econometric Data Science and a thesis (which can be replaced by another economics elective). They add two or three intermediate subjects, including one in macroeconomics and two communication-intensive subjects such as Intermediate Macroeconomics, Mathematical Economic Modeling, Research and Communication in Economics or Why Markets Fail, one theory subject (for example game theory, market design or organisational economics) and four economics electives. Electives range from behavioural economics, blockchain and financial system design, public finance and labour economics to energy and climate economics, development, trade and causal inference with machine learning, and 14-1 majors may count up to two finance subjects from MIT Sloan. MIT also offers Mathematical Economics (14-2) and Computer Science, Economics and Data Science (6-14).",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/economics-course-14/",
    degree: "Bachelor of Science (SB) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Chemical Engineering (Course 10)",
    slug: "mit-chemical-engineering",
    level: "Bachelor",
    field: "Chemical Engineering",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 186-195 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Chemical Engineering's Course 10 degree starts with foundations in organic chemistry, laboratory chemistry, thermodynamics, differential equations and an introduction to chemical engineering. Intermediate subjects cover chemical and biological engineering thermodynamics, fluid mechanics and transport processes, plus one chemistry or biochemistry subject. Students complete a communication-intensive projects laboratory chosen from chemical, energy, chemical-biological, biological engineering or polymer science labs, then advanced subjects in separation processes, chemical kinetics and reactor design and integrated chemical engineering, where design and process problems are tackled as a whole. Restricted electives must include chemical engineering subjects and an engineering laboratory. The department also offers Chemical-Biological Engineering (10-B) and Chemical Engineering (Course 10-C).",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/chemical-engineering-course-10/",
    degree: "Bachelor of Science (SB) in Chemical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Aerospace Engineering (Course 16)",
    slug: "mit-aerospace-engineering",
    level: "Bachelor",
    field: "Aerospace Engineering",
    duration: "Typically 4 years full-time (the 17 General Institute Requirement subjects plus 192 units beyond them)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Aeronautics and Astronautics' Course 16 degree is built on Unified Engineering, four linked subjects in materials and structures, signals and systems, fluid dynamics, and thermodynamics and propulsion, together with programming in Python, automatic control, dynamics, statistics and probability, and differential equations. Students then take four professional area subjects from at least three areas, such as aerodynamics, structural mechanics, aerospace propulsion, computational modelling, feedback control, real-time systems, communication networks and human systems or autonomy. The degree finishes with two communication-intensive project subjects: a design capstone (flight vehicle engineering, space systems engineering or autonomous vehicles) and a build-and-test laboratory (for example flight vehicle development, space systems development, propulsion prototyping or robotics). The department also offers a Bachelor of Science in Engineering (Course 16-ENG).",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/aerospace-engineering-course-16/",
    degree: "Bachelor of Science (SB) in Aerospace Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_MAJOR, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "MBA (MIT Sloan School of Management)",
    slug: "mit-sloan-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time",
    tuitionNote:
      `2026-27 (latest published): MIT Sloan MBA tuition is US$91,892 for the academic year, including the mandatory US$2,200 annual Sloan programme fee; required course packs are included but textbooks are not. ${SLOAN_LIVING("Tuition plus the nine-month non-tuition budget comes to about US$134,189 for the first year before aid (our sum); the second year is charged at the rate then in force.")} Funding: admissions are need-blind, and every admitted student is automatically considered for merit-based fellowships, with no separate application. Most MBA students borrow; international students without a US cosigner have more limited loan options. Teaching and research assistantships (salary plus tuition) are open after the first semester`,
    description:
      "The full-time MIT Sloan MBA opens with the Core semester, taken in one of six cohorts named after bodies of water (Atlantic, Baltic, Caribbean, Indian, Mediterranean and Pacific) and split into smaller teams. Required Core courses are Leadership Challenges for an Inclusive World, Economic Analysis for Business Decisions, Data, Models, and Decisions, Communication for Leaders, Organizational Processes and Financial Accounting, plus one Core elective (managerial finance, operations management, competitive strategy or marketing innovation) and an optional proseminar in AI, entrepreneurship or finance. The remaining three semesters are flexible: students complete 144 units of electives, can take courses across MIT and up to three at Harvard's professional schools, and may write a thesis. Six optional certificates cover business analytics, entrepreneurship and innovation, finance, healthcare, product management and sustainability. Dual-degree routes include Leaders for Global Operations (an MBA plus an engineering SM), an MBA with a Master in City Planning, and a concurrent degree with Harvard Kennedy School.",
    officialProgramUrl: "https://mitsloan.mit.edu/mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall 2027 (classes start in August)",
    applicationDeadline:
      "Fall 2027 entry, by 3:00 pm Eastern Time on the deadline: Round 1 closed on 29 September 2026 (decisions in mid-December 2026), so it had passed when we checked. Round 2: 12 January 2027, with decisions in early April 2027. Applicants denied without an interview hear earlier. Leaders for Global Operations applicants apply in the separate LGO round, and MBA/MCP and Harvard Kennedy School dual-degree applicants must apply in Round 2",
    admissionRequirements: [
      "A four-year undergraduate degree, or a three-year equivalent from outside the US, by the time you enrol. There are no academic prerequisites, but the application asks which courses you have taken in calculus, communications, microeconomics, organisational behaviour, probability and statistics",
      "A GMAT (Focus or 10th Edition) or GRE score, required by the deadline; self-reported scores are accepted, scores must be less than five years old and Sloan currently evaluates single-attempt scores (GRE code 3791)",
      "Application materials: a cover letter of up to 300 words addressed to the Admissions Committee, a one-page résumé and employment history, an organisational chart showing your role, one letter of recommendation (preferably from a manager or supervisor) plus contact details for two further professional references, transcripts from every university attended (with certified translations if not in English), two video answers (a 90-second introduction and a randomly generated question) and a US$250 application fee. Interviews are by invitation only, are held virtually and are required for admission",
      SLOAN_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Finance (MIT Sloan School of Management)",
    slug: "mit-sloan-master-of-finance",
    level: "Master",
    field: "Finance",
    duration: "12 months (summer, fall and spring terms) or 18 months (adding a second summer for an internship or research and a second fall term), full-time",
    tuitionNote:
      `2026-27 (latest published): MFin tuition is US$96,884 for the 12-month format or US$133,007 for the 18-month format; course packs are included but textbooks are not. Students who have already completed MIT's 15.401 and 15.402 may qualify for a low-residency summer term with reduced tuition. ${SLOAN_LIVING("For the 12-month format, tuition plus the 12-month non-tuition budget comes to about US$151,424 before aid (our sum).")} Funding: a limited number of fellowships, including the MIT Master of Finance Fellowship, are open to admitted students of every citizenship, who are considered automatically. Some students hold teaching or research assistantships, and international students can apply for private loans after submitting the MIT Graduate Information Finance Form`,
    description:
      "MIT Sloan's Master of Finance is a quantitative programme for recent graduates and early-career professionals, many from engineering, mathematics, physics and computer science. The core covers Foundations of Modern Finance, financial mathematics (standard or advanced, including stochastic processes and optimisation), a summer Python programming course for finance, corporate financial accounting, finance ethics and regulation, corporate finance, financial markets, Analytics of Finance or Advanced Analytics of Finance (financial econometrics, machine learning, dynamic optimisation and derivative pricing) and communication. Every student completes at least one Action Learning lab, working with industry practitioners on real problems in investment management, in private equity, investment banking and corporate finance, or in the broader Finance Lab. Electives span fintech, fixed income, mergers and acquisitions, healthcare finance and asset management, and students can take courses elsewhere at MIT or at Harvard. The 12- and 18-month formats share the same degree requirements; the longer one adds a summer for an internship or research assistantship.",
    officialProgramUrl: "https://mitsloan.mit.edu/mfin",
    degree: "Master of Finance (MFin)",
    intake: "Summer 2027 (July)",
    applicationDeadline:
      "Summer 2027 entry: one deadline, 5 January 2027 at 3:00 pm Eastern Time, with decisions in March 2027 (applicants denied without an interview hear earlier)",
    admissionRequirements: [
      "A four-year undergraduate degree, or a three-year equivalent from outside the US, by the time you enrol. The application asks for courses in linear algebra, multivariable calculus, probability and statistics, and Sloan prefers applicants who can already program in Python (admitted students must show Python proficiency before starting)",
      "GMAT or GRE: optional. Applicants who have a score are strongly encouraged to submit it, and those without one are reviewed with no negative inference (GRE code 3845)",
      "Application materials: a one-page résumé, three short answers of up to 200 words each, three letters of recommendation (for current students two academic and one from an internship supervisor; for working professionals one from the current employer, one academic and one of either type; one of the three must speak to your quantitative ability), transcripts, two video answers and a US$150 application fee. Interviews are by invitation, held virtually and required for admission",
      SLOAN_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Analytics (MIT Sloan School of Management)",
    slug: "mit-sloan-master-of-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "12 months full-time (fall, January IAP, spring and summer terms; 111 to 147 units)",
    tuitionNote:
      `2026-27 (latest published): MBAn tuition is US$96,884; Sloan notes this rate does not include the summer tuition subsidy, and the Analytics Capstone provides a tuition offset of more than US$22,000. Course packs are included but textbooks are not. ${SLOAN_LIVING("Tuition plus the 12-month non-tuition budget comes to about US$151,424 before aid and before the capstone offset (our sum).")} Funding: MIT Sloan admits MBAn students regardless of financial circumstances; a limited number of fellowships are open to admitted students of every citizenship, who are considered automatically. The programme office helps some students find research assistantships with Sloan faculty (up to 10 hours a week, paid as salary plus tuition), and international students can apply for private loans`,
    description:
      "The Master of Business Analytics, run by MIT Sloan with the Operations Research Center, prepares students to use machine learning, optimisation and data science on business problems. The fall term covers Machine Learning, Optimization Methods, an intensive hands-on deep learning course, Advanced Analytics Edge, Analytics Lab (a team project with an organisation), From Analytics to Action on organisational dynamics, and analytics tools such as Python, R and Julia. During January's Independent Activities Period students take workshops on communicating with data and on AI strategy, governance and ethics, and are matched to their Analytics Capstone project. In spring they choose 27 to 48 units of approved analytics electives while starting the capstone with their host organisation and faculty advisor, then work full-time with the host over the summer, finishing with a final report and presentation in August.",
    officialProgramUrl: "https://mitsloan.mit.edu/master-of-business-analytics",
    degree: "Master of Business Analytics (MBAn)",
    intake: "Fall 2027 (September)",
    applicationDeadline:
      "Fall 2027 entry: one deadline, 5 January 2027 at 3:00 pm Eastern Time, with decisions in March 2027 (applicants denied without an interview hear earlier)",
    admissionRequirements: [
      "A four-year undergraduate degree, or a three-year equivalent from outside the US, by the time you enrol. Not required, but Sloan strongly suggests a grounding in linear algebra, probability, calculus and computer programming",
      "GMAT or GRE: optional, and applicants without a score are reviewed with no negative inference (GRE code 3845)",
      "Application materials: an essay of up to 500 words on why you want the MBAn and your career goals, a one-page résumé, three letters of recommendation (three academic letters for current students, or one from your employer and two academic for working professionals; one must speak to your quantitative ability), transcripts, two video answers and a US$150 application fee. Interviews are by invitation, virtual and required for admission, and include technical questions on maths, probability, statistics and computer science as well as behavioural questions",
      SLOAN_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering and Computer Science (SM and PhD)",
    slug: "mit-eecs-sm-phd",
    level: "PhD",
    field: "Electrical Engineering and Computer Science",
    duration: "The SM normally takes about 1.5 to 2 years full-time; the PhD usually takes about 4 to 5 more years beyond the master's",
    tuitionNote:
      `2026-27: EECS graduate students are charged MIT's standard graduate tuition. ${GRAD_COA}. Funding: EECS supports its doctoral students with a fellowship, research assistantship or teaching assistantship that covers full tuition, a monthly living stipend and medical insurance, with further departmental support when needed. Newly admitted students are considered automatically for department fellowships and assistantships`,
    description:
      "MIT's Department of Electrical Engineering and Computer Science admits graduate students to its doctoral track rather than to a stand-alone master's. Applicants without a master's degree first complete the Master of Science: 66 units of coursework, including at least four approved subjects and at least 42 units of advanced graduate subjects, plus a 24-unit research thesis. The subjects are otherwise elective and can come from outside the department. Students then continue to the PhD, planning their programme with a faculty advisor, passing a research qualifying exam, completing an approved minor and a professional-perspective requirement (such as an internship), and writing a thesis that makes a significant contribution to knowledge. Research areas span electrical engineering (circuits, energy and power, photonics and quantum technology, materials and devices), computer science (architecture, systems, programming languages, human-computer interaction and theory) and AI and decision making (machine learning, computer vision, natural language processing, robotics and AI in healthcare).",
    officialProgramUrl: "https://oge.mit.edu/programs/electrical-engineering-and-computer-science/",
    degree: "Master of Science (SM) in Electrical Engineering and Computer Science, then Doctor of Philosophy (PhD) or Doctor of Science (ScD)",
    intake: "Fall 2027 (September)",
    applicationDeadline:
      "Fall 2027 entry: the application opened on 15 September 2026 and closes on 1 December 2026 at 11:59 pm Eastern Time.",
    admissionRequirements: [
      "A bachelor's degree in a relevant field such as electrical engineering, computer science, physics or mathematics; EECS lists no specific course requirements and judges applicants on their potential to complete the doctoral programme. The department does not offer a terminal master's degree",
      "Application materials: two essays (your research activities and goals, and your academic and intellectual journey), three letters of recommendation, transcripts and a US$90 application fee (fee waivers are possible). The GRE is not required",
      `English proficiency (EECS): international applicants need IELTS 7 or TOEFL iBT 100 (institute code 3514, department code 78 or 66), and EECS prefers IELTS over TOEFL; a department waiver may be available. ${OGE_ELP_EXEMPTION}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Technology and Policy (SM)",
    slug: "mit-sm-technology-and-policy",
    level: "Master",
    field: "Technology Policy",
    duration: "2 years full-time (designed to be completed in two years; 105-111 units including the thesis)",
    tuitionNote:
      `2026-27: the Technology and Policy Program charges MIT's standard graduate tuition. ${GRAD_COA}. Funding: many TPP students hold fully funded research assistantships that pay full tuition and a monthly stipend, and others win external fellowships`,
    description:
      "The Technology and Policy Program (TPP), part of MIT's Institute for Data, Systems, and Society, offers an engineering research master's focused on the role of technology in framing and solving policy problems. Students take Concepts and Research in Technology and Policy and a quantitative methods subject (machine learning, causal inference, regression or statistics and computation), then a framework block of microeconomics, Science, Technology, and Public Policy and a restricted elective in law, social science or statistics. They build a three-subject concentration in their research area, approved by their supervisor, and write a research thesis with a substantial technology and policy component. TPP encourages a summer internship in government or industry between the two years, and many students pair TPP with a second degree in an engineering field or an applied social science such as political science or urban planning.",
    officialProgramUrl: "https://oge.mit.edu/programs/technology-and-policy-program/",
    degree: "Master of Science (SM) in Technology and Policy",
    intake: "Fall 2027 (September)",
    applicationDeadline:
      "Fall 2027 entry: the application opened on 15 September 2026 and closes on 15 December 2026 at 11:59 pm Eastern Time",
    admissionRequirements: [
      "A bachelor's degree; TPP is an engineering research degree, and students combine technical study with economics, politics and quantitative methods",
      "Application materials: a statement of objectives, three letters of recommendation, transcripts (unofficial for the application), a CV or résumé, a response to the supplemental question and a US$90 application fee. The GRE is optional for the 2026-27 admission cycle (institute code 3514), and any submitted scores are considered",
      `English proficiency (TPP): international applicants need IELTS 7.5, the Duolingo English Test 135 or Cambridge English C1 Advanced 191, with scores less than two years old at the deadline. TPP does not accept TOEFL and does not consider waiver requests. ${OGE_ELP_EXEMPTION}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in City Planning (MCP)",
    slug: "mit-master-in-city-planning",
    level: "Master",
    field: "Urban Planning",
    duration: "2 years full-time (150 units, including a 24-unit thesis)",
    tuitionNote:
      `2026-27: the Department of Urban Studies and Planning charges MIT's standard graduate tuition for the MCP. ${GRAD_COA}. Funding varies by degree programme; see the department website`,
    description:
      "The Master in City Planning is the professional degree of MIT's Department of Urban Studies and Planning (DUSP) and is accredited by the American Planning Association. Students start with the gateway subject in urban studies and planning, then core subjects in planning economics, microeconomics, spatial analysis and GIS, quantitative and statistical methods, critical qualitative methods and urban design skills (some of which can be tested out of), at least one core practicum subject, about 67 units of electives (which can include courses at other area universities) and a thesis. Research groups cover city design and development, environmental policy and planning, housing, community and economic development, international development, urban data science and mobility. The MCP can be combined with an MBA from MIT Sloan, a Master of Architecture, a Master of Science in Transportation or a Master of Science in Real Estate Development.",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/master-city-planning/",
    degree: "Master in City Planning (MCP)",
    intake: "Fall 2027 (September)",
    applicationDeadline:
      "Fall 2027 entry: the application opened on 1 September 2026 and closes on 15 December 2026 at 11:59 pm Eastern Time. Applicants to the MBA/MCP dual degree must also apply to MIT Sloan in Round 2",
    admissionRequirements: [
      "A bachelor's degree; DUSP says backgrounds such as urban studies, architecture, urban design, environmental planning, political science, civil engineering, economics, sociology, geography, law, management and public administration all offer suitable preparation",
      "Application materials: a statement of objectives, three letters of recommendation, transcripts, a CV or résumé and a US$90 application fee, with an optional design portfolio or writing sample. The GRE is optional for MCP applicants (scores under five years old, code 3514). DUSP has a limited number of department fee waivers for applicants first refused an Office of Graduate Education waiver",
      `English proficiency (DUSP): international applicants need IELTS 7, TOEFL iBT 100 (or 5 on the new score scale) or the Duolingo English Test 135, with scores less than two years old. DUSP does not offer waivers. ${OGE_ELP_EXEMPTION}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Architecture (MArch)",
    slug: "mit-master-of-architecture",
    level: "Master",
    field: "Architecture",
    duration: "3.5 academic years full-time (at least 282 units plus a thesis)",
    tuitionNote:
      `2026-27: the Department of Architecture charges MIT's standard graduate tuition for the MArch. ${GRAD_COA}. Funding: departmental aid comes as direct tuition awards and departmental employment, and MArch students can compete for teaching and research assistantships and hourly positions. The MArch is STEM-eligible`,
    description:
      "MIT's Master of Architecture is a professional degree for people who want to register and practise as architects, and it is the department's only programme accredited by the National Architectural Accrediting Board (next visit in 2031). It begins with a three-term core of design studios integrated with subjects in computational design and fabrication, architectural assemblies, structural design, building technology and environmental systems, architectural history from 1750 and professional practice. Students then take three advanced option studios, which vary in culture, context and scale, electives in art, culture and technology, computation, history and theory, and urbanism, and further architecture electives. The programme ends with thesis preparation and a design thesis, an independent architectural project or design research inquiry developed with an advising committee. MArch students can apply in their second year to add a Master in City Planning.",
    officialProgramUrl: "https://catalog.mit.edu/degree-charts/master-architecture/",
    degree: "Master of Architecture (MArch)",
    intake: "Fall 2027 (September)",
    applicationDeadline:
      "Fall 2027 entry: the application opened on 15 September 2026 and closes on 7 January 2027 at 11:59 pm Eastern Time. Test scores must be reported by the deadline and verified by the testing agency by 15 August 2027",
    admissionRequirements: [
      "A bachelor's degree. MIT's accreditation statement describes the MArch route as a non-preprofessional degree plus 282 units and an acceptable 24-unit thesis",
      "Application materials: a statement of objectives, transcripts (an unofficial copy or English translation for the application; official sealed transcripts only if admitted), a portfolio of design work following the department's instructions (maximum 30 pages) and a US$90 application fee. The department does not accept GRE scores and asks applicants not to send supplementary material",
      `English proficiency (Architecture): applicants whose primary language is not English need IELTS 7, TOEFL iBT 100 (or 5 on the new score scale), the Duolingo English Test 135 or a Cambridge C1 Advanced or C2 Proficiency score of 190, taken within the last two years. The department grants no English test waivers. ${OGE_ELP_EXEMPTION}`,
    ],
  },
];
