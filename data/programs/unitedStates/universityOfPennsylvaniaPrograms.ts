import type { Program } from "../../programs";

// University of Pennsylvania (Philadelphia): 8 undergraduate programmes for fall 2027 first-year entry and
// 7 graduate programmes. Sources: Penn Admissions (first-year applicants and deadlines, application requirements,
// testing and English proficiency, the four undergraduate schools, international applicant guidelines and
// international aid), Student Registration & Financial Services undergraduate cost of attendance and tuition and
// fees for 2026-27, SEAS graduate costs, PSOM master's programme costs (Public Health), Penn Carey Law LLM cost
// of attendance, Wharton MBA tuition and application deadlines and application guide, the University Catalogue
// 2026-27 pages for Wharton undergraduate curriculum and concentrations, Computer Science BSE, Bioengineering BSE,
// Nursing BSN, Economics BA, Neuroscience BA, International Relations BA, Mechanical Engineering and Applied
// Mechanics BSE, Computer & Information Science MSE, Bioengineering MSE, Electrical Engineering MSE, Master of
// Applied Science in Computer Science, and Public Health MPH, plus Penn Engineering Graduate Admissions how-to-apply
// and master's FAQ pages, mph.med.upenn.edu admission information, and Penn Carey Law graduate admissions
// (viewed November 6, 2026). Costs are in US dollars. Wharton's Jacobs MSQF was skipped because it is open only
// to current Penn undergraduates.

const UNIVERSITY = {
  universitySlug: "university-of-pennsylvania",
  universityName: "University of Pennsylvania",
  country: "United States",
  language: "English",
  campus: "Philadelphia",
  programType: "Full-time",
} as const;

// SRFS 2026-27 COA, living on campus: tuition 65,670 + fees 8,308 + housing 13,644 + food 6,960 + books 1,412
// + transport 1,080 + personal 2,008 = 99,082. Off campus 97,444; with family 81,548. Tuition+fees total 73,978
// (general 6,620 + technology 918 + clinical 770). NSO fee 575 is billed separately and not in the COA total.
const UG_TUITION =
  "2026-27 (fall 2026 and spring 2027): Penn charges all full-time undergraduates, including international students, US$65,670 in tuition plus US$8,308 in mandatory fees (general fee US$6,620, technology fee US$918 and clinical fee US$770), or US$73,978 for tuition and fees. Student Registration & Financial Services' estimated cost of attendance for a student living on campus is US$99,082: those billed charges plus US$13,644 for housing, US$6,960 for food, US$1,412 for books and supplies, US$1,080 for transport and US$2,008 for personal expenses. Living off campus the estimate is US$97,444, or US$81,548 living with family. First-year Nursing students should budget US$1,742 for books and supplies, and Wharton students in years two to four about US$2,350. A separate New Student Orientation fee of US$575 applies to first-years and is not in the COA total. Students without qualifying health insurance are enrolled in the Penn Student Insurance Plan, which is added to the budget. International applicants are reviewed need-aware: if you want aid at any point in the four years you must apply for it with your admission application (CSS Profile and tax or earnings documents); international students who are admitted without aid cannot ask for it later. Penn says international aid recipients receive need-based grants covering 100% of demonstrated need. 2027-28 rates had not been published when we checked";

const UG_INTAKE = "Fall semester only (first-year students enrol in August)";

const UG_DEADLINE =
  "Fall 2027 entry, through the Common Application, the Coalition Application on Scoir, or QuestBridge (US$75 application fee or a fee waiver): Penn offers binding Early Decision and Regular Decision, and has no Early Action plan. Early Decision: apply by 1 November 2026, with decisions in December 2026; if admitted you must enrol and withdraw other applications. Regular Decision: apply by 5 January 2027, with decisions in April and a reply by 1 May. Financial aid documents are due 6 November 2026 for Early Decision and 1 February 2027 for Regular Decision. You apply to one of Penn's four undergraduate schools (College of Arts and Sciences, Wharton, Engineering, or Nursing) or to a coordinated dual-degree programme; that school is your home base and grants your degree, though you can take courses across schools";

const UG_TESTING =
  "Testing: required. First-year applicants must submit SAT or ACT scores, unless they request a hardship waiver in the application (lack of test centres, financial hardship, natural disaster or civil unrest). Self-reported scores are accepted when you apply; enrolling students then send official scores. Penn has no minimum score, superscores the SAT (highest Evidence-Based Reading and Writing with highest Math) and ACT (highest English, Math and Reading; Science is not required), and has no preference between the two tests (SAT code 2926, ACT code 3732). Latest useful test dates for Early Decision are the October 2026 ACT or 7 November 2026 SAT, and for Regular Decision the December 2026 ACT or 5 December 2026 SAT";

const UG_ENGLISH =
  "English proficiency: required unless English is your native language or English was your primary language of instruction for at least three years by the time you enrol. Accepted tests are TOEFL iBT, IELTS Academic and the Duolingo English Test, sent officially (no self-reported English scores; MyBest TOEFL and IELTS One Skill Retake are not accepted). For the 2026-27 cycle scores must be from exams taken on or after 1 April 2025. Competitive applicants typically score TOEFL 5 or above on the new 1-6 scale (or 100 on the prior 0-120 scale), IELTS Academic 7.0 or above, or Duolingo 130 or above, with consistency across sections (TOEFL code 2926)";

const UG_ACADEMIC =
  "Application materials: the Common Application, Coalition Application or QuestBridge Application with the Penn short answers (including a school-specific essay), official secondary school records for all years of high school with any national examination results and verified English translations where needed, a counselor recommendation and school report, one teacher recommendation in a core subject (an optional second teacher or community supporter letter is allowed), mid-year grades when available, and test scores. Penn reviews applications holistically in the context of your school and country. International applicants who may need aid later must request it when they apply";

const WHARTON_ROUTE = (extra: string) =>
  `School and admission route: The Wharton School. You apply directly to Wharton rather than to a single concentration; all Wharton undergraduates earn a Bachelor of Science in Economics and choose a concentration of four upper-level courses later. ${extra}`;

const SEAS_ROUTE = (extra: string) =>
  `School and admission route: School of Engineering and Applied Science (SEAS). You apply to SEAS and list an intended major; you can change major within Engineering later subject to requirements. Strong preparation in calculus and physics is expected. ${extra}`;

const COLLEGE_ROUTE = (extra: string) =>
  `School and admission route: College of Arts and Sciences. You apply to the College rather than to a single major and declare your major later; intended areas of interest on the application are not binding. ${extra}`;

const NURSING_ROUTE = (extra: string) =>
  `School and admission route: School of Nursing. You apply directly to Nursing for the traditional four-year BSN (direct entry from high school). Exposure to chemistry and a clear interest in patient care strengthen an application. ${extra}`;

// SEAS master's: tuition US$8,825 per course unit in 2026-27. At 4 CU/term: tuition 35,300 + general 2,134 + technology 405 + clinical 385 = 38,224 per term. Living fall-spring 28,484 (housing 12,978, food 5,988, books 1,412, personal 2,008, transport 1,080, health insurance 5,018).
const SEAS_GRAD_TUITION = (extra: string) =>
  `2026-27: Penn Engineering master's students pay tuition per course unit, not a flat annual rate. On-campus tuition is US$8,825 per course unit; at four units a term the billed total is US$38,224 (tuition US$35,300 plus general fee US$2,134, technology fee US$405 and clinical fee US$385). A typical ten-unit master's therefore has about US$88,250 in tuition before fees. SRFS estimates living costs for fall and spring at US$28,484 including US$5,018 for health insurance. ${extra}`;

const SEAS_GRAD_ENGLISH =
  "English proficiency (Penn Engineering Graduate Admissions): international applicants and non-US citizens or permanent residents whose native language is not English must send official TOEFL iBT, IELTS or Duolingo English Test scores that are still valid (scores expire after two years; TOEFL code 2888). Recommended minimums are TOEFL 5.0 (or 100 on the legacy 0-120 scale), IELTS 7.5 and Duolingo 135. A waiver is possible if you will graduate from a US programme, attend school in a country where English is the official language, or graduate from an institution whose medium of instruction is English (shown on the transcript)";

const SEAS_GRAD_APPLY =
  "Apply through Penn Engineering Graduate Admissions; master's applications for fall 2027 open 15 September 2026, with an early deadline of 1 November 2026 and a regular deadline of 1 February 2027 (11:59 p.m. US Eastern). Applications are reviewed on a rolling basis with all decisions by 1 April. The non-refundable application fee is US$95 (waivers for listed categories). The GRE is optional";

export const universityOfPennsylvaniaPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Economics (Wharton)",
    slug: "upenn-wharton-bs-economics",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (minimum 37 course units)",
    tuitionNote: UG_TUITION,
    description:
      "Wharton undergraduates all earn a Bachelor of Science in Economics and deepen one area through a four-course concentration such as Finance, Management, Marketing, Operations, Information and Decisions, Business Analytics, Entrepreneurship and Innovation, or Statistics and Data Science. The single-degree curriculum mixes first-year foundations (introductory economics for business students, Calculus I and a critical writing seminar) with business fundamentals in accounting, managerial economics, corporate finance, monetary economics, ethics or law and social values, management, marketing, operations and statistics, a Leadership Journey sequence, and a senior capstone. Students also complete liberal arts and sciences requirements, a foreign language requirement or equivalent proficiency, business breadth outside the concentration, cross-cultural perspectives courses and unrestricted electives. The standard load is about four to five course units a semester.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/wharton/curriculum/",
    degree: "Bachelor of Science (BS) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      WHARTON_ROUTE("Concentrations are chosen after enrolment; coordinated dual-degree options with other Penn schools are available separately"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "upenn-computer-science-bse",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (37 course units)",
    tuitionNote: UG_TUITION,
    description:
      "The ABET-relevant BSE in Computer Science in Penn Engineering builds from programming, programming languages and techniques, computer systems, automata and complexity, algorithms, operating systems, and computer organisation and design, finishing with a two-course senior project or thesis. Supporting work covers Calculus I and II, mathematical foundations of computer science, probability, linear algebra, and two semesters of physics, plus CIS electives that must touch networking, databases, distributed systems, machine learning or AI, and a project course. Students can add an optional concentration such as Artificial Intelligence, Data Science, Systems, Software Foundations, Computer Vision, Cognitive Science or Computational Biology, and complete engineering ethics, writing, social science and humanities requirements.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/computer-science-bse/",
    degree: "Bachelor of Science in Engineering (BSE) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SEAS_ROUTE("A more flexible Bachelor of Applied Science (BAS) in Computer Science is also offered for students who want a broader interdisciplinary path"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Nursing",
    slug: "upenn-nursing-bsn",
    level: "Bachelor",
    field: "Nursing",
    duration: "4 years full-time (36 course units)",
    tuitionNote: UG_TUITION,
    description:
      "Penn Nursing's traditional four-year BSN is a direct-entry programme for graduating high school seniors that combines science, nursing and liberal arts study with clinical practice in Philadelphia hospitals. Students begin with chemistry, cell biology and microbiology, nutrition and foundational nursing courses, then move into integrated anatomy, physiology and physical assessment, pathophysiology and pharmacology, and clinical courses in women's and infants' health, pediatrics, psychiatric and behavioural health, adult and older adult care, and public health nursing. The final year includes a leadership course in complex healthcare systems and a research or inquiry-based service residency. Clinical placements typically begin in the spring of the second year. Graduates are prepared for nursing practice, policy, research and further study.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/nursing-bsn/",
    degree: "Bachelor of Science in Nursing (BSN)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      NURSING_ROUTE("First-year Nursing students should budget the higher books-and-supplies allowance of US$1,742 in the cost of attendance"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bioengineering",
    slug: "upenn-bioengineering-bse",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "4 years full-time (37 course units)",
    tuitionNote: UG_TUITION,
    description:
      "The BSE in Bioengineering joins engineering analysis with biology and medicine. Core courses include introduction to bioengineering, scientific computing, biomechanics, biomaterials, laboratory principles, signals and systems, cellular engineering, biotransport, and a two-semester modelling, analysis and design laboratory sequence, capped by a two-course senior design project. Supporting science covers calculus, linear algebra or differential equations, biostatistics, physics, general chemistry with laboratories, molecular biology with laboratory, and human physiology. Students may add an optional concentration such as biomedical data science and computational medicine, biomedical devices, cellular and tissue engineering, imaging, neuroengineering or immune engineering, and must meet ethics and writing requirements within their electives.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/bioengineering-bse/",
    degree: "Bachelor of Science in Engineering (BSE) in Bioengineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SEAS_ROUTE("Concentrations are optional; at least four courses from a concentration list, including two in Bioengineering, are needed to claim one"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "upenn-economics-ba",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (minimum 32 course units)",
    tuitionNote: UG_TUITION,
    description:
      "The BA in Economics in the College of Arts and Sciences covers how individuals, firms and markets make choices and how economies grow, trade and set policy. Majors take introductory microeconomics and macroeconomics, intermediate micro and macro, statistics for economists (or a probability and inference sequence), econometric methods and models, and four electives at the 4000 level. Two semesters of calculus are required, and at least six of the ten economics course units must be taken in Penn's Economics Department. An honours path adds a year-long thesis seminar for students with a strong GPA in the major. The programme is a common base for careers in public policy, business, finance and graduate study.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/economics-ba/",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE("This College BA is separate from Wharton's Bachelor of Science in Economics; apply to the College if this is your intended home base"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "International Relations",
    slug: "upenn-international-relations",
    level: "Bachelor",
    field: "International Relations",
    duration: "4 years full-time (minimum 34 course units)",
    tuitionNote: UG_TUITION,
    description:
      "International Relations is an interdisciplinary College major that studies how governments, private groups and individuals interact in global politics and economics. Students take introduction to international relations, a research methods course, two international history courses, international political economy (or international economics) plus an IPE elective, an international security or foreign policy elective, five further international electives across approved attributes, and a two-semester senior thesis research seminar. The curriculum draws on political science, history and economics and is designed to prepare students for law or business school, PhD programmes and international careers. Honours requires a higher GPA, an honours thesis and an upper-level language course.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/international-relations-ba/",
    degree: "Bachelor of Arts (BA) in International Relations",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE("Start language study and core political science and economics courses early if you plan to pursue honours"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Neuroscience",
    slug: "upenn-neuroscience",
    level: "Bachelor",
    field: "Neuroscience",
    duration: "4 years full-time (minimum 36 course units)",
    tuitionNote: UG_TUITION,
    description:
      "Neuroscience (formerly Biological Basis of Behavior) is an interdisciplinary College major on the relationship between behaviour and its organic bases. Students complete introductory chemistry, introductory biology, introduction to brain and behavior, a neural systems and behavior course, a cellular neuroscience course, molecular and cellular neurobiology, statistics, and eight further neuroscience electives spanning molecular work through cognitive and behavioural topics. Many students add supervised research. An honours option asks for a high cumulative GPA, an advanced course and two independent research courses. The major prepares students for research, health professions and graduate study across the brain sciences.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/neuroscience-ba/",
    degree: "Bachelor of Arts (BA) in Neuroscience",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE("This is the current name of the former Biological Basis of Behavior major"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering and Applied Mechanics",
    slug: "upenn-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (37 course units)",
    tuitionNote: UG_TUITION,
    description:
      "The BSE in Mechanical Engineering and Applied Mechanics covers forces, deformation and motion in solids and fluids, and heat and energy generation and transport. The core includes thermal-fluids engineering, thermodynamics, statics and strength of materials, dynamics, laboratory and design laboratory sequences, and a two-course senior design project. Students declare one concentration track such as Dynamics, Controls and Robotics; Energy, Fluids and Thermal Systems; Mechanics of Materials, Structures and Design; or a General track spanning fluid mechanics, controls, heat transfer and solid mechanics. Supporting work includes calculus, linear algebra, analytical methods, physics, chemistry or biology, scientific computing, engineering ethics, and technical and general electives.",
    officialProgramUrl: "https://catalog.upenn.edu/undergraduate/programs/mechanical-engineering-applied-mechanics-bse/",
    degree: "Bachelor of Science in Engineering (BSE) in Mechanical Engineering and Applied Mechanics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SEAS_ROUTE("Declare a concentration through the field-of-study form; students who do not declare default into the General concentration"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA (Wharton)",
    slug: "upenn-wharton-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time",
    tuitionNote:
      "2026-27: Wharton full-time MBA tuition is US$87,970 a year plus US$5,038 in university fees, or US$93,008 for tuition and fees. Living estimates add US$21,258 for housing, US$9,287 for food, US$1,123 for books and supplies, US$1,044 for transport, US$4,703 for personal expenses and US$5,018 for health insurance, for a total MBA cost of US$135,441 per year. The same tuition and fee figures apply to both years. Extra-curricular club fees and networking travel are not included in the aid budget",
    description:
      "Wharton's full-time MBA is a two-year, cohort-based programme on the Philadelphia campus with a strong analytical and collaborative culture. Students complete a core in accounting, finance, marketing, operations, management and related foundations, then choose majors and electives across Wharton's departments, with options such as Health Care Management (declared at application) and joint degrees including the Lauder MBA/MA in International Studies and the Carey JD/MBA. Learning is team-based, and invited applicants complete a team-based discussion interview. The programme is aimed at candidates who want to contribute in the Wharton classroom and community and to advance in their post-MBA careers.",
    officialProgramUrl: "https://mba.wharton.upenn.edu/tuition-financial-aid/",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall (with Pre-Term before classes)",
    applicationDeadline:
      "Fall 2027 entry (2026-27 cycle): Round 1 by 8 September 2026 (decisions 17 December 2026, deposit 5 February 2027); Round 2 by 5 January 2027 (decisions 31 March 2027, deposit 29 April 2027); Round 3 by 31 March 2027 (decisions 11 May 2027, deposit 2 June 2027); Deferred Admissions Round by 21 April 2027. Deadlines are 5:00 p.m. US Eastern. International students needing a visa are encouraged to apply in Round 1 or 2. The non-refundable application fee is US$275",
    admissionRequirements: [
      "A bachelor's degree from an accredited US college or the equivalent abroad, with transcripts from every undergraduate and graduate programme attended (unofficial or self-reported grades are accepted to apply; official transcripts are required to enrol). Work experience is typical but there is no fixed minimum or maximum",
      "Application materials: GMAT or GRE (self-reported then verified; AWA is not currently required for newer GMAT formats), a one-page resume, required essays on post-MBA goals and how you will add value to the Wharton community, one letter of recommendation (preferably from a current or former supervisor), and, if invited, a team-based discussion interview. English testing (TOEFL iBT, PTE, IELTS or Duolingo) is required if you did not attend an institution where English was the language of instruction",
      "Joint programmes such as Lauder and the Carey JD/MBA have extra essays, language or LSAC requirements and accept applications only in Rounds 1 and 2",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Applied Science in Computer Science",
    slug: "upenn-mas-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "Usually 2 years full-time (10 course units); online part-time options available",
    tuitionNote: SEAS_GRAD_TUITION(
      "On-campus MAS-CS uses the on-campus master's rates above. Online MAS-CS uses Penn Engineering Online rates (US$3,859 tuition plus US$168 online services fee per course unit in 2026-27). This degree replaces the earlier MCIT pathway for applicants without a computer science background"
    ),
    description:
      "The Master of Applied Science in Computer Science is designed for students from non-computer science backgrounds who want a rigorous foundation in computing. The ten-unit curriculum starts with six core CIT courses covering software development, mathematical foundations, computer systems, data structures and software design, systems programming, and algorithms and computation, typically taken in the first year. Students then choose four graduate electives, with concentrations available in areas such as Artificial Intelligence, Data Science, Software Systems, Cybersecurity and Engineering Entrepreneurship. Strong students can later apply to continue into the Computer and Information Science MSE for a dual master's path.",
    officialProgramUrl: "https://catalog.upenn.edu/graduate/programs/computer-science-mascs/",
    degree: "Master of Applied Science (MAS) in Computer Science",
    intake: "Fall semester (on-campus core sequence begins in fall)",
    applicationDeadline: `Fall 2027 entry: ${SEAS_GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree; the programme is intended for applicants without an undergraduate computer science major. Unofficial transcripts in English, a resume, a personal statement answering the school's prompts, and two letters of recommendation (including one from a faculty member familiar with your scholarly work) are required",
      "GRE scores are optional. Official transcripts are required only if you enrol",
      SEAS_GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer and Information Science",
    slug: "upenn-mse-computer-information-science",
    level: "Master",
    field: "Computer Science",
    duration: "Usually 1.5 to 2 years full-time (10 course units)",
    tuitionNote: SEAS_GRAD_TUITION(
      "Applicants without strong undergraduate computer science training are directed to the Master of Applied Science in Computer Science (or the former MCIT) rather than this MSE"
    ),
    description:
      "The MSE in Computer and Information Science is for students with strong undergraduate training in mathematics and computer science who want advanced study across theory, systems, machine learning and related areas. Ten course units are required: four core courses spanning theory, systems and at most one machine-learning core course, three CIS electives at the graduate level, and three further CIS or approved non-CIS electives. Students may write a master's thesis (two units of thesis research) or follow a course-only path, and can concentrate in Artificial Intelligence, Computer Vision, Software Foundations, Systems or Theoretical Foundations. A minimum GPA of 2.7 must be maintained, and the degree must be finished within seven years.",
    officialProgramUrl: "https://catalog.upenn.edu/graduate/programs/computer-information-science-mse/",
    degree: "Master of Science in Engineering (MSE) in Computer and Information Science",
    intake: "Fall semester",
    applicationDeadline: `Fall 2027 entry: ${SEAS_GRAD_APPLY}`,
    admissionRequirements: [
      "Strong undergraduate preparation in computer science and mathematics, including areas such as operating systems, programming languages, data structures, discrete mathematics, linear algebra, algorithms and theory, similar to Penn's own CS undergraduate core",
      "Application materials: online application, resume, personal statement, two letters of recommendation, and unofficial transcripts; GRE optional",
      SEAS_GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Health",
    slug: "upenn-mph",
    level: "Master",
    field: "Public Health",
    duration: "2 years full-time (14 course units) or about 3 years part-time; Epidemiology Track is full-time only",
    tuitionNote:
      "2026-27: Public Health master's tuition is US$5,490 per course unit. At four units a term the billed total is US$25,121 (tuition US$21,960 plus general fee US$2,134, technology fee US$642 and clinical fee US$385). The degree needs 14 course units, so tuition alone is about US$76,860 before fees. SRFS estimates living costs for fall and spring for on-campus PSOM master's students at US$33,818 including US$5,018 for health insurance. Confirm the current year's fees on the SRFS PSOM master's costs page before you budget",
    description:
      "Penn's university-wide MPH prepares students for public health leadership through research, education and practice. All students complete six core courses (biostatistics, epidemiology, theories and frameworks, policy and administration, methods for practice, and law and ethics), a two-semester Capstone Seminar, at least 125 hours of Applied Practice Experience, and six electives shaped by a track: Generalist, Global Health, One Health or Epidemiology. Full-time students usually finish in two years; part-time study takes about three. The Epidemiology Track is smaller, full-time only and more research-focused. The programme is CEPH-accredited and is not STEM-designated for OPT.",
    officialProgramUrl: "https://catalog.upenn.edu/graduate/programs/public-health-mph/",
    degree: "Master of Public Health (MPH)",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: apply through SOPHAS. The Admission Committee begins rolling review of verified applications on 1 November 2026; priority and international applicants should aim for 1 February 2027 (scholarships and visa timing). Applications after 1 June 2027 are not reviewed. Decisions usually arrive 6 to 8 weeks after verification. The Epidemiology Track is not rolling and has its own February deadline and extra research statement",
    admissionRequirements: [
      "A bachelor's degree with official transcripts (WES evaluation required for degrees from non-US institutions). The GRE and other standardised tests are not required. Submit a resume, a 1-2 page personal statement on your interest in public health and fit with Penn, and three letters of recommendation through SOPHAS",
      "English proficiency if English is not your first language and you do not hold a degree from an English-language institution: TOEFL minimum 5.0 (or 100 on the prior scale) or IELTS 7.0, sent to SOPHAS (TOEFL code 5688)",
      "Epidemiology Track only: undergraduate statistics coursework (further quantitative or public health preparation recommended), minimum undergraduate GPA 3.5, and an extra 1-2 page research statement; full-time study only",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bioengineering",
    slug: "upenn-mse-bioengineering",
    level: "Master",
    field: "Biomedical Engineering",
    duration: "Usually 2 years full-time (10 course units); can be finished in as little as one year",
    tuitionNote: SEAS_GRAD_TUITION(
      "Thesis and non-thesis options use the same tuition schedule; thesis students enrol in two units of BE 9990"
    ),
    description:
      "The MSE in Bioengineering offers a customisable graduate curriculum at the intersection of engineering, biology and medicine. Students complete ten graduate course units: two mathematics courses, two biological science courses, two Bioengineering graduate courses, one SEAS or biological science elective, one general elective, and either a two-unit master's thesis or two further SEAS or biological science electives. Optional concentrations include biomedical data science and computational medicine, biomedical devices, cellular and tissue engineering, imaging, systems and synthetic biology, neuroengineering, multiscale biomechanics, therapeutics and nanomedicine, and immune engineering. Graduates move into biotechnology, medical devices, pharmaceuticals, government, academia, PhD programmes or medical school.",
    officialProgramUrl: "https://catalog.upenn.edu/graduate/programs/bioengineering-mse/",
    degree: "Master of Science in Engineering (MSE) in Bioengineering",
    intake: "Fall semester",
    applicationDeadline: `Fall 2027 entry: ${SEAS_GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree with a quantitative and scientific foundation suitable for graduate bioengineering study. Application materials match other Penn Engineering master's programmes: resume, personal statement, two recommendation letters and unofficial transcripts; GRE optional",
      SEAS_GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Laws (LLM)",
    slug: "upenn-carey-law-llm",
    level: "Master",
    field: "Law",
    campus: "Philadelphia (Penn Carey Law)",
    duration: "1 academic year full-time",
    tuitionNote:
      "2026-27: Penn Carey Law LLM tuition is US$81,796, plus a general fee of US$4,268, clinical fee of US$770 and learning support fee of US$1,350. The published cost of attendance also lists US$18,370 for housing, US$5,988 for food, US$2,700 for books and supplies, US$2,008 for personal expenses, US$1,080 for transport and US$5,018 for health insurance, for a total of US$123,348. Students also pay preterm deposits of US$2,750, which are applied to the preterm programme. An optional Wharton and Business Law Certificate has an extra cost. Limited merit and human rights scholarships are available; there is no separate scholarship application beyond checking a box (or writing the human rights essay)",
    description:
      "The LLM at Penn Carey Law is a one-year graduate law degree designed mainly for lawyers trained outside the United States. Students build advanced skills in US and comparative law, join the Law School's scholarly community in Philadelphia, and can pursue certificates or cross-disciplinary study, including an optional Wharton and Business Law Certificate. The programme expects a high level of English and does not offer conditional admission. A limited number of US JD holders may be considered if they show exceptional academic achievement and a clear contribution to the class.",
    officialProgramUrl: "https://www.law.upenn.edu/admissions/grad/llm.php",
    degree: "Master of Laws (LLM)",
    intake: "Fall semester (with a preterm programme)",
    applicationDeadline:
      "Applications open 1 September. Early deadline 15 November (decisions around early February); regular deadline 15 December (decisions around early March). Apply through LSAC. The application fee is US$85 (higher if a late extension is granted after 15 December)",
    admissionRequirements: [
      "A first law degree already earned or expected before enrolment (in special cases, a related graduate degree plus a professional legal career may be considered). Work experience is common but not required",
      "Application materials via LSAC: personal statement (about two pages), resume or CV, two letters of recommendation, transcripts from every post-secondary school, and the application fee",
      "English: TOEFL or IELTS, or a waiver request, even for native speakers or US law graduates. Penn Carey looks for TOEFL iBT of about 100 with at least 25 in each section (or 5.5 overall and per section on the TOEFL iBT taken on or after 21 January 2026) or IELTS Academic 7 with at least 7 in each section. MyBest scores and Duolingo are not accepted. Scores expire after two years",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "upenn-mse-electrical-engineering",
    level: "Master",
    field: "Electrical Engineering",
    duration: "Usually 1.5 to 2 years full-time (10 course units)",
    tuitionNote: SEAS_GRAD_TUITION(
      "Students may count a two-unit master's thesis toward the open electives when approved"
    ),
    description:
      "The MSE in Electrical Engineering gives a theoretical and technological foundation for modern electroscience while letting students focus their ten graduate course units. Five core units are chosen across Physical Devices and Nano Systems, Circuits and Computer Engineering, and Information and Decision Systems, followed by two ESE electives, one SEAS elective and two open electives with technical content. Optional concentrations include Artificial Intelligence, Computer Engineering, Embedded Systems, Mixed-Signal and RF Integrated Circuits, Nanotechnology and Semiconductors, Photonics and Quantum, and Robotics. The programme suits interests ranging from VLSI and sensors to robotics, photonics and machine learning for signals.",
    officialProgramUrl: "https://catalog.upenn.edu/graduate/programs/electrical-engineering-mse/",
    degree: "Master of Science in Engineering (MSE) in Electrical Engineering",
    intake: "Fall semester",
    applicationDeadline: `Fall 2027 entry: ${SEAS_GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree with preparation suitable for graduate electrical and systems engineering. Application materials match other Penn Engineering master's programmes: resume, personal statement, two recommendation letters and unofficial transcripts; GRE optional",
      SEAS_GRAD_ENGLISH,
    ],
  },
];
