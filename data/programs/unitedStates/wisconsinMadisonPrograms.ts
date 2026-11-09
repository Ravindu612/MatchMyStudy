import type { Program } from "../../programs";

// University of Wisconsin–Madison: 8 undergraduate majors for fall 2027 first-year entry and 7 on-campus
// graduate programmes. Sources (viewed 9 November 2026): Office of Admissions and Recruitment first-year
// application, deadlines, direct entry, international applicants and international scholarships pages
// (admissions.wisc.edu/apply-as-a-freshman, /deadlines, /direct-entry, /international,
// /international-scholarships), Bursar's Office tuition and fees and Fall 2026 tuition increase pages
// (bursar.wisc.edu/tuition-and-fees and /tuition-and-fees/fall-2026-increase), the Universities of Wisconsin
// 2026-27 Tuition and Fee Schedule, UW-Madison section
// (wisconsin.edu/budget-planning/download/tuition/2026-27-Tuition-Schedule-FINAL.pdf), Office of Student
// Financial Aid 2026-27 cost of attendance (financialaid.wisc.edu/cost-of-attendance), the Visiting
// International Student Program cost page for the US$100 International Student Services fee
// (visp.wisc.edu/cost), Graduate School requirements for admission (info.grad.wisc.edu/requirements-for-admission),
// Guide programme pages for each major and graduate programme (guide.wisc.edu/undergraduate and
// guide.wisc.edu/graduate), UW-Madison programme pages with per-credit tuition and fall 2027 deadlines
// (pdc.wisc.edu/degrees), Computer Sciences funding and admissions pages (cs.wisc.edu/grad/programs), and
// Wisconsin School of Business Full-Time MBA admissions and tuition pages and MS in Business Analytics
// admissions page (business.wisc.edu/graduate). Costs are in US dollars. UW-Madison bills undergraduates on
// F-1 or J-1 visas at a separate "international" rate; the 2026-27 schedule lists only resident, nonresident
// and Minnesota reciprocity rates for standard graduate study. Several professional master's programmes
// charge their own per-credit tuition instead of the standard graduate rate.

const UNIVERSITY = {
  universitySlug: "university-of-wisconsin-madison",
  universityName: "University of Wisconsin–Madison",
  country: "United States",
  language: "English",
  campus: "Madison",
  programType: "Full-time",
} as const;

// UW System 2026-27 schedule, UW-Madison undergraduate full time (12-18 credits), per semester:
// tuition resident 5,358.36 / nonresident 22,116.00 / MN 8,372.04 / international 22,616.04; segregated fees
// 849.74. Engineering: nonresident 23,748.00, international 24,248.04. BBA: nonresident 23,722.56,
// international 24,222.60. Year (x2) international: standard 45,232.08 + 1,699.48 = 46,931.56; engineering
// 48,496.08 + 1,699.48 = 50,195.56; BBA 48,445.20 + 1,699.48 = 50,144.68. Bursar Fall 2026 page: nonresident
// tuition 44,232.12 + seg fees 1,699.48 = 45,931.60. Financial Aid 2026-27 estimated nonresident undergraduate COA:
// tuition & fees 45,518, course materials 700, housing & meals 14,994, personal 2,618, transport 1,222, loan fees
// 68 = 65,120; differentials estimated at engineering 3,200 and business 3,000; New Student Fee ~330; computer
// allowance 1,100 for incoming undergraduates. ISS fee 100 per semester for F-1/J-1 students (visp.wisc.edu/cost).
const UG_COA_AND_AID =
  "The Office of Student Financial Aid's estimated 2026-27 cost of attendance for a nonresident undergraduate is US$65,120 for the nine-month year: US$45,518 in tuition and fees, US$700 for required course materials and supplies, US$14,994 for housing and meals, US$2,618 for personal costs, US$1,222 for transport and US$68 in loan fees. That tuition line is an estimate at the standard rate and sits a little below the billed figures above, so budget from the billed rates. Incoming undergraduates have US$1,100 added to the materials budget for a computer, and an estimated New Student Fee of US$330 is charged in the first semester. International students on F-1 or J-1 visas do not qualify for US federal or Wisconsin state financial aid; most are self-funded or use outside scholarships. UW–Madison scholarships, including some for international students, are listed in the Wisconsin Scholarship Hub (WiSH), where incoming-student scholarships generally close on 1 February or earlier. The King-Morgridge Scholars Program covers tuition and fees, room and board, health insurance, airfare and a stipend for six students a year from eligible countries in Africa, the Caribbean, Latin America, South Asia and Southeast Asia with high financial need and a commitment to poverty alleviation; you must apply Early Action and submit the separate WiSH application by 15 November. 2027-28 rates had not been published when we checked";

const UG_TUITION =
  `2026-27 (fall 2026 and spring 2027): UW–Madison charges undergraduates on F-1 or J-1 visas its international tuition rate of US$22,616.04 per semester for 12 to 18 credits, plus US$849.74 in segregated fees, or US$23,465.78 a semester and US$46,931.56 for the academic year. US nonresidents pay US$22,116.00 a semester in tuition (the Bursar's Office quotes US$45,931.60 a year in nonresident tuition and segregated fees). F-1 and J-1 students also pay a US$100 International Student Services fee each semester. ${UG_COA_AND_AID}`;

const UG_TUITION_ENGINEERING =
  `2026-27 (fall 2026 and spring 2027): College of Engineering undergraduates pay a higher tuition rate. For students on F-1 or J-1 visas it is US$24,248.04 per semester for 12 to 18 credits, plus US$849.74 in segregated fees, or US$25,097.78 a semester and US$50,195.56 for the academic year. US nonresidents in engineering pay US$23,748.00 a semester in tuition. F-1 and J-1 students also pay a US$100 International Student Services fee each semester. ${UG_COA_AND_AID}`;

const UG_TUITION_BUSINESS =
  `2026-27 (fall 2026 and spring 2027): students in the Bachelor of Business Administration programme pay a higher tuition rate. For students on F-1 or J-1 visas it is US$24,222.60 per semester for 12 to 18 credits, plus US$849.74 in segregated fees, or US$25,072.34 a semester and US$50,144.68 for the academic year. US nonresidents in the BBA pay US$23,722.56 a semester in tuition. F-1 and J-1 students also pay a US$100 International Student Services fee each semester. ${UG_COA_AND_AID}`;

const UG_INTAKE =
  "Fall semester (fall 2027 first-year entry); first-year applicants may also apply for a spring start";

const UG_DEADLINE =
  "Fall 2027 entry, through either the Common Application or the Universities of Wisconsin Application (UW–Madison has no preference, but use only one). The application fee is US$80, with waivers for financial hardship. UW–Madison does not offer binding Early Decision. Non-binding Early Action: apply by 1 November 2026, with all required materials by 9 November 2026; decisions on or before 31 January 2027 (some applicants are deferred to Regular Decision, with decisions by the end of March). Regular Decision: apply by 15 January 2027, with materials by 22 January 2027; decisions on or before 31 March 2027. Deadlines are 11:59 p.m. US Pacific Time, and admitted students do not have to commit until the national reply date of 1 May. A spring start is also possible: the first-year spring Regular Decision deadline is 1 October, with materials by 15 October and decisions by 31 December. The deadlines and requirements are the same for domestic and international applicants";

const UG_TESTING =
  "Testing: optional. ACT or SAT scores are optional for students applying for terms through spring 2028 (application deadline 1 October 2027), and applicants who do not include scores are not disadvantaged. You choose whether to include scores when you apply, and that choice is final. If you send scores, they must come officially from the testing agency (ACT code 4656, SAT code 1846); only your top composite score is considered, and superscores are not used";

const UG_ENGLISH =
  "English proficiency: first-year applicants educated in non-English-speaking countries must submit an official TOEFL iBT, IELTS or Duolingo English Test score unless English was the main language of instruction in all four years of secondary school. Minimums are TOEFL iBT 80 for tests taken on or before 20 January 2026 or 4.5 on the new scale for tests from 21 January 2026 (code 1846), IELTS 6.5 (Academic, in person or online), or Duolingo 115 with subscores. Scores must be sent electronically by the testing service and be no more than two years old when you apply; English tests are not superscored and TOEFL MyBest scores are not accepted. You may request an English Language Proficiency waiver through your Student Center if you think the requirement does not apply to you";

const UG_ACADEMIC =
  "Application materials: two essays (a Common App personal essay or the UW application prompt, plus an essay on why you want to attend UW–Madison and study your chosen majors), course and grade information for grades 9 to 12 (self-reported or an official transcript), one academic letter of recommendation (a second, non-academic letter is optional), and English test results where required. International applicants also submit country- or curriculum-specific documents such as board examination results, IB or A-Level results or attested certificates, with official English translations of any non-English records. The minimum high school preparation is 17 units: four years of English, three of mathematics (including algebra, geometry and an advanced course), three of social science, three of natural science and four of electives; two years of one world language are highly recommended. Review is holistic, and UW–Madison typically sees unweighted academic GPAs between 3.8 and 4.0 and class ranks in the 85th to 97th percentile. After admission, F-1 and J-1 students must document funding for one full year of study before an I-20 or DS-2019 is issued";

const UG_ROUTE_LS = (major: string) =>
  `Admission route: you apply to UW–Madison as a whole and list a first- and second-choice major. ${major} is not a direct-entry major; most UW–Madison students are admitted to the university and then formally declare their major once they meet the department's declaration requirements. Direct entry at first-year admission is offered only in business, engineering, dance and music`;

const UG_ROUTE_ENGINEERING =
  "Admission route: to be considered for direct admission to the College of Engineering, list an engineering major as your first choice and a major outside engineering as your second choice. Engineering applicants are reviewed holistically, with particular weight on the rigour of and grades in mathematics and science; a letter of recommendation from a mathematics or science teacher is encouraged. Directly admitted students must meet the college's progression requirements at the end of the first year to keep their place in the major. Current UW–Madison students outside engineering can apply to transfer in later, but it is competitive (at least 24 graded UW–Madison credits and a core GPA of 2.5 or higher are needed to be considered)";

const UG_ROUTE_BUSINESS =
  "Admission route: to be considered for direct admission to the Wisconsin School of Business, list a business major as your first choice. The admissions office, working with the School of Business, considers your academic readiness for business and your interest in and fit for the field, including leadership and involvement. Applicants who are not directly admitted can be admitted to the College of Letters & Science as pre-business students and apply to the BBA programme later (by mid-March for a fall start, with a minimum 3.0 UW–Madison GPA, at least 24 UW–Madison credits, the Pre-Business 101 workshop, and required courses in Communication A, microeconomics and calculus)";

// Graduate School 2026-27: standard graduate full time, per semester: resident 5,363.76 / nonresident 12,027.20 /
// MN 10,962.00; seg fees 849.74; part time (<8 credits) nonresident 1,503.40 per credit; application fee 75.
// Year nonresident: 24,054.40 + 1,699.48 = 25,753.88. Bursar: graduate tuition unchanged for 2026-27.
// Financial Aid 2026-27 graduate nonresident COA: tuition & fees 25,766, materials 700, housing & meals 16,956,
// personal 5,174, transport 1,528, loan fees 276 = 50,400 (non-tuition items = 24,634); computer +1,100 for
// incoming graduate students.
const GRAD_LIVING =
  "The Office of Student Financial Aid's 2026-27 graduate budget for a nonresident adds, on top of tuition and fees, US$700 for required course materials, US$16,956 for housing and meals, US$5,174 for personal costs, US$1,528 for transport and US$276 in loan fees (US$24,634 for the nine-month year); incoming graduate students have US$1,100 added for a computer. F-1 and J-1 students also pay a US$100 International Student Services fee each semester and must document funding for the programme before an I-20 or DS-2019 is issued. International students are not eligible for US federal or Wisconsin state financial aid";

const GRAD_ENGLISH =
  "English proficiency (Graduate School minimum): unless you hold a bachelor's degree from an accredited US institution, a recent US graduate degree, a degree from a non-US institution where English was the only language of instruction, or have completed two recent full-time semesters taught entirely in English, you must submit TOEFL iBT 92 (tests before 21 January 2026) or 5.0 (tests from 21 January 2026), IELTS or IELTS Indicator 7.0, or Duolingo English Test 125. Scores must be less than two years old at the start of your first term, and scores from multiple tests cannot be combined. For in-person programmes, applicants with TOEFL 80 to 91 (4.5 on the new scale), IELTS 6.5 or Duolingo 115 to 124 may be admitted with programme approval, but must take an English assessment test on arrival and complete any recommended ESL course in the first semester";

const GRAD_MINIMUM =
  "Graduate School minimums: a bachelor's degree comparable to an accredited US bachelor's degree, completed before you start, and an undergraduate GPA of at least 3.00 on the last 60 semester credits (or a master's with a 3.00 GPA); international applicants must show comparable achievement, and the Graduate School uses your institution's own grading scale. Unofficial transcripts are enough to apply, with official transcripts requested only if you are recommended for admission. The Graduate School application fee is US$75";

export const wisconsinMadisonPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Sciences",
    slug: "uw-madison-bs-computer-sciences",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (120 degree credits)",
    tuitionNote: UG_TUITION,
    description:
      "UW–Madison's Computer Sciences BS is offered by one of the oldest computer science departments in the United States (its first PhD graduated in 1965), now part of the School of Computer, Data & Information Sciences. The major starts with calculus (MATH 221 and 222) and a basic core of discrete mathematics, introductory computer engineering, Programming II and III and machine organisation, then adds linear algebra and a probability or statistics course. Advanced work covers theory (algorithms or theory of computing), two software and hardware courses chosen from areas such as operating systems, databases, compilers, computer architecture, networks, security and big data systems, an applications course such as artificial intelligence, computer graphics, computer vision, optimisation or human-computer interaction, and two further electives, for at least 39 credits in the major. Graduates go into software, hardware, machine learning and data roles at established companies and start-ups, or on to graduate study.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/letters-science/computer-sciences/computer-sciences-bs/",
    degree: "Bachelor of Science (BS), Computer Sciences major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${UG_ROUTE_LS("Computer Sciences")}. To declare the major you need credit for COMP SCI 300 and MATH 222, a grade of BC or higher in COMP SCI 300, 354 or 400 taken at UW–Madison, and a GPA of at least 2.250 in the courses that count toward declaration`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science",
    slug: "uw-madison-bs-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "Typically 4 years full-time (120 degree credits)",
    tuitionNote: UG_TUITION,
    description:
      "The Data Science BS, administered by the Department of Statistics in the College of Letters & Science, teaches students to apply computational, mathematical and statistical thinking to data-rich problems in many fields, responsibly and ethically: managing, processing and modelling data and presenting what it shows. After calculus, the foundation is two data science modelling courses (STAT 240 and 340), two data programming courses (COMP SCI 220 or 300, and COMP SCI 320) and a data ethics course. Students then take 18 credits of upper-level electives, with at least one course each in linear algebra, advanced computing (for example big data systems, databases or numerical methods), statistical modelling (for example econometrics, forecasting or probability) and machine learning. A BA version of the major also exists; this entry is the BS.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/letters-science/statistics/data-science-bs/",
    degree: "Bachelor of Science (BS), Data Science major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${UG_ROUTE_LS("Data Science")}. You can declare in your first semester on campus after attending a data science major declaration event, as long as you have fewer than 86 credits; if you have already taken UW–Madison courses, you need at least a 2.000 GPA in coursework that counts toward the major (or in listed preparatory courses)`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "uw-madison-bs-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (120 degree credits)",
    tuitionNote: UG_TUITION,
    description:
      "The Economics BS studies how people, businesses and governments respond to their economic environment, from jobs, wages and taxes to inequality, pollution and growth. The major moves from principles of microeconomics and macroeconomics to intermediate theory, then to advanced courses in fields such as econometrics, labour markets, industrial organisation, international trade and finance, public finance, behavioural economics, game theory and economic data analytics, for at least 30 economics credits alongside calculus and a statistics course. Students choose Option A (Economics), a well-rounded major for employment or later study in business, law or public policy, or Option B (Mathematical Emphasis), which adds the mathematics and statistics needed for graduate study in economics or work as a professional economist. Graduates often work in finance, data analytics and public policy. A BA version of the major also exists; this entry is the BS.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/letters-science/economics/economics-bs/",
    degree: "Bachelor of Science (BS), Economics major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${UG_ROUTE_LS("Economics")}. To declare, complete one calculus course (MATH 211, 221 or 222; MATH 221 or 222 for the Mathematical Emphasis), complete any economics course other than ECON 100 at UW–Madison, and hold at least a 2.000 GPA in economics and other major courses`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics",
    slug: "uw-madison-bs-statistics",
    level: "Bachelor",
    field: "Statistics",
    duration: "Typically 4 years full-time (120 degree credits)",
    tuitionNote: UG_TUITION,
    description:
      "The Statistics BS deals with how to learn reliably from data when natural variation is present, which matters in fields from medicine and agriculture to business, engineering and the social sciences. Students take three semesters of calculus and linear algebra, a programming course, introductory statistics with the R language, applied regression or data science modelling, experimental design, probability and mathematical statistics, and 15 credits of electives (up to six of them in a chosen application domain) covering topics such as time series, nonparametric methods, survey sampling and data science computing. The emphasis is on planning experiments and studies so that sample data give valid answers, then drawing sound inferences from them. A BA version of the major also exists; this entry is the BS.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/letters-science/statistics/statistics-bs/",
    degree: "Bachelor of Science (BS), Statistics major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${UG_ROUTE_LS("Statistics")}. To declare, meet a statistics major advisor before reaching senior standing (86 credits); you need at least a 2.000 GPA in coursework counting toward the major and in any upper-level major work completed, but no specific courses are required first`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Engineering",
    slug: "uw-madison-bs-computer-engineering",
    level: "Bachelor",
    field: "Computer Engineering",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "The Computer Engineering BS in the College of Engineering teaches students to design and build computer hardware using current semiconductor chip technologies, and to design and analyse systems that process, store and move digital information, along with efficient software for them. Examples include wearables, smartphones and tablets, personal computers, cloud servers and many kinds of embedded systems. The 120-credit curriculum combines 19 credits of mathematics, about 20 of science, a 33-credit computer engineering core, 16 credits of advanced computer engineering electives, nine of professional electives, communication skills and 15 credits of liberal studies. Students can specialise in semiconductor engineering or in machine learning and data science and earn a named option on their transcript.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/engineering/electrical-computer-engineering/computer-engineering-bs/",
    degree: "Bachelor of Science (BS) in Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_ROUTE_ENGINEERING, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "uw-madison-bs-electrical-engineering",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "Typically 4 years full-time (120 to 121 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "The Electrical Engineering BS covers the principles behind devices and systems such as mobile computing, semiconductor chips, wind, solar and fusion power generation, robotic actuators, MRI and X-ray scanners, electric vehicles and avionics, as well as the algorithms that make them work. Students learn to analyse and design these systems through a 120- to 121-credit curriculum: 16 credits of mathematics, 17 to 18 of science, a 32-credit electrical engineering core, 24 credits of advanced electrical engineering electives, nine of professional electives, communication skills and 15 credits of liberal studies. Named options in semiconductor engineering or in machine learning and data science can be added to the transcript.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/engineering/electrical-computer-engineering/electrical-engineering-bs/",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_ROUTE_ENGINEERING, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "uw-madison-bs-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "The Mechanical Engineering BS covers manufacturing processes, energy generation, storage and use, and the design of mechanical equipment and systems, with room to specialise in areas such as robotics, biomedical engineering, product design, computational mechanics and thermal energy systems. The 128-credit curriculum includes 19 credits of mathematics and statistics, basic science, a 54-credit mechanical engineering core, 12 credits of technical electives, communication skills and 15 credits of liberal studies. Hands-on work runs through the programme: laboratories in mechanics of materials, manufacturing, measurements, energy systems, vibrations and aerodynamics, a two-semester senior design capstone with industry, community or academic partners, makerspace and workshop access, and the chance to join faculty research labs and student competition teams.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/engineering/mechanical-engineering/mechanical-engineering-bs/",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_ROUTE_ENGINEERING, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Business: Finance, Investment, and Banking",
    slug: "uw-madison-bba-finance-investment-banking",
    level: "Bachelor",
    field: "Finance",
    duration: "Typically 4 years full-time (120 degree credits)",
    tuitionNote: UG_TUITION_BUSINESS,
    description:
      "The Finance, Investment, and Banking major in the Wisconsin School of Business BBA prepares students for corporate finance, investments and securities, the management of banks, insurers and other financial institutions, and financial technology. Coursework covers security analysis and valuation, trading, financial markets and government policy, forecasting, capital structure, risk management, venture capital, security issuance and international finance, with a strong focus on understanding risk and building models of financial decisions. The 25-credit major includes calculus, financial reporting, a finance industry fundamentals course, financial markets and institutions, investment theory, corporation finance, a choice of derivatives or fixed income, and two advanced finance electives, inside the school's BBA core and experiential learning courses. Student groups range from investment banking and private equity clubs to a sales and trading society.",
    officialProgramUrl: "https://guide.wisc.edu/undergraduate/business/finance/business-finance-investment-banking-bba/",
    degree: "Bachelor of Business Administration (BBA), Finance, Investment, and Banking major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_ROUTE_BUSINESS, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Computer Sciences: Professional Program",
    slug: "uw-madison-ms-computer-sciences-professional",
    level: "Master",
    field: "Computer Science",
    duration: "1 to 2 years full-time (30 graduate credits)",
    tuitionNote: `2026-27: the Professional Master's Program is charged the standard UW–Madison graduate tuition rate. Full time (8 or more credits a semester), nonresident tuition is US$12,027.20 a semester plus US$849.74 in segregated fees, or US$25,753.88 for fall and spring; below 8 credits, nonresident tuition is US$1,503.40 per credit. The 2026-27 schedule shows only resident, nonresident and Minnesota reciprocity rates for graduate study, and graduate tuition did not rise for 2026-27. The Financial Aid office's estimated 2026-27 nonresident graduate cost of attendance is US$50,400. ${GRAD_LIVING}. The programme is self-funded: the department offers no direct financial support, and students may hold assistantships or grader jobs but do not receive tuition remission from them. 2027-28 rates had not been published when we checked`,
    description:
      "The Professional Master's Program (PMP) in Computer Sciences is a terminal, on-campus master's degree for students who want a professional career as computer scientists in industry, distinct from the department's research-oriented MS. It is designed so that working professionals can finish within two years. Students choose courses across areas including artificial intelligence, computational biology, computer architecture, graphics, networks, security, database systems, human-computer interaction, numerical analysis, optimisation, programming languages and compilers, systems and theory, for 30 graduate credits. The degree is STEM-designated for OPT purposes, and the department primarily uses Java and Python.",
    officialProgramUrl: "https://guide.wisc.edu/graduate/computer-sciences/computer-sciences-ms/computer-sciences-professional-program-ms/",
    degree: "Master of Science (MS) in Computer Sciences, named option: Professional Program",
    intake: "Fall semester only (spring entry is open only to pre-admitted Plus One Pathway students)",
    applicationDeadline:
      "Fall 2027 entry: apply through the Graduate School online application by 15 February 2027. Decisions are emailed by mid-March, and admitted students have until 15 April to accept. One application fee covers up to three UW–Madison graduate programmes, so you can apply to both the PMP and the traditional MS/PhD track",
    admissionRequirements: [
      "A strong background in computer sciences or a related field: at minimum some programming experience, including data structures and machine organisation courses, and a year of college-level mathematics at the level of calculus or above. Applicants are judged on their academic record, three letters of recommendation and a personal statement; a resume or CV and transcripts are also required. The GRE is not required",
      GRAD_MINIMUM,
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science",
    slug: "uw-madison-ms-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1.5 to 2 years full-time, accelerated (30 graduate credits)",
    tuitionNote: `UW–Madison lists tuition for the MS Data Science at US$1,600 per credit, so the 30-credit programme comes to about US$48,000 in tuition; segregated fees (US$849.74 a semester for full-time students in 2026-27) are charged on top. ${GRAD_LIVING}. Students in this programme cannot receive tuition remission from graduate assistantships. The university did not state whether the per-credit rate will change for 2027-28`,
    description:
      "The MS Data Science is a professional programme run jointly by the Departments of Statistics and Computer Sciences and administered by Statistics. It builds computational and statistical thinking that students can combine with knowledge of another field to tackle data-rich problems, and covers thinking critically about data, managing, processing, modelling and analysing it, and using it responsibly. The 30-credit curriculum has a statistics core (statistical models, inference and methods for data science), a computer sciences core with one course each in algorithms, systems (for example operating systems, big data systems or databases) and humans and data (data visualisation or human-computer interaction), two machine learning courses and six credits of electives. It is taught face to face at an accelerated pace and is STEM OPT eligible. Graduates work as data analysts and data scientists or continue to further study.",
    officialProgramUrl: "https://guide.wisc.edu/graduate/statistics/data-science-ms/",
    degree: "Master of Science (MS) in Data Science",
    intake: "Fall semester only",
    applicationDeadline:
      "Fall 2027 entry: apply through the Graduate School online application by 15 February 2027. The programme does not admit in spring or summer",
    admissionRequirements: [
      "Prerequisites equivalent to UW–Madison's Calculus 1 and 2 (MATH 221 and 222) and linear algebra (MATH 340 or 345), plus one programming course (COMP SCI 220, 300 or 320); significant experience with R is recommended. Application materials: the MS Data Science supplemental application (prerequisite information and a short essay of under one page on your background), a statement of purpose of up to two single-spaced pages, unofficial transcripts with English translations of non-English records, a resume or CV and two letters of recommendation. The GRE is not required",
      GRAD_MINIMUM,
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics: Statistics and Data Science",
    slug: "uw-madison-ms-statistics-data-science",
    level: "Master",
    field: "Statistics",
    duration: "1 to 2 years, accelerated (30 graduate credits); workforce students may study part time",
    tuitionNote: `UW–Madison lists tuition for the MS Statistics: Statistics and Data Science at US$1,600 per credit, so the 30-credit programme comes to about US$48,000 in tuition; segregated fees (US$849.74 a semester for full-time students in 2026-27) are charged on top. ${GRAD_LIVING}. Students in this programme cannot receive tuition remission from graduate assistantships; the programme website lists any funding and scholarships. The university did not state whether the per-credit rate will change for 2027-28`,
    description:
      "The Statistics and Data Science named option is a professional track within UW–Madison's MS in Statistics. It combines statistical theory, methods and practice for data science with communication skills, so that graduates can turn vague questions about complex data into practical analysis steps and explain the results for planning and decision making. Teaching moves from basic methods for comparing groups and relating measurements to models that reflect how the data were collected, anchored in projects with real or realistic simulated data. The programme serves three groups: Visiting International Student Program students who may transfer up to 14 credits, professionals with five or more years of data-heavy work (who may study part time at 6 to 8 credits a semester), and new bachelor's graduates. It is taught face to face, is accelerated and is STEM OPT eligible.",
    officialProgramUrl: "https://guide.wisc.edu/graduate/statistics/statistics-ms/statistics-statistics-data-science-ms/",
    degree: "Master of Science (MS) in Statistics, named option: Statistics and Data Science",
    intake: "Fall semester (the Guide lists no spring or summer admission)",
    applicationDeadline:
      "Fall 2027 entry: apply through the Graduate School online application, with the Department of Statistics supplemental application, by 15 February 2027",
    admissionRequirements: [
      "Courses equivalent to UW–Madison's three semesters of calculus (MATH 221, 222 and 234) and linear algebra (MATH 340 or 345); R programming (STAT 303 and 304), probability and mathematical statistics (STAT/MATH 309 and 310) and an advanced analysis course such as MATH 421 are highly recommended. Application materials: the online application and the statistics supplemental application, a statement of purpose, a resume or CV, transcripts and three letters of recommendation. The GRE is not required",
      GRAD_MINIMUM,
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering: Professional",
    slug: "uw-madison-ms-ece-professional",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration: "12 to 16 months full-time, accelerated (30 graduate credits)",
    tuitionNote: `UW–Madison lists tuition for the College of Engineering's accelerated master's programmes, including this one, at US$1,200 per credit for both residents and nonresidents, so the 30-credit degree comes to about US$36,000 in tuition, with additional fees (segregated fees were US$849.74 a semester for full-time students in 2026-27). ${GRAD_LIVING}. Students in this programme cannot receive tuition remission from graduate assistantships. The university did not state whether the per-credit rate will change for 2027-28`,
    description:
      "The ECE MS-Professional is a course-only master's degree for students heading into industry rather than research. It deepens technical knowledge and professional skills through an accelerated, predictable course plan that typically takes 16 months; well-prepared students may finish in 12. When applying you choose an area of emphasis, such as computer engineering, electromagnetic fields and waves, solid state and photonics, or energy and power systems, or design your own curriculum path, and you build a course plan with an academic advisor. There is no thesis; instead there is a professional development component through an internship or co-op, an independent project, or Engineering Professional Development courses. The diploma reads Master of Science in Electrical and Computer Engineering, with the named option on the transcript. It is taught face to face and is STEM OPT eligible, and students cannot be enrolled in another UW–Madison graduate programme at the same time.",
    officialProgramUrl: "https://guide.wisc.edu/graduate/electrical-computer-engineering/electrical-computer-engineering-ms/electrical-computer-engineering-professional-ms/",
    degree: "Master of Science (MS) in Electrical and Computer Engineering, named option: Professional",
    intake: "Fall semester only",
    applicationDeadline:
      "Fall 2027 entry: apply through the Graduate School online application by 15 February 2027, with every item, including test scores and letters, complete by then. Applications received after the deadline and up to 15 April are considered only if space remains (email ecegradadmission@engr.wisc.edu to check). The programme does not admit in spring or summer",
    admissionRequirements: [
      "A bachelor of science in electrical or computer engineering, or in another relevant scientific, engineering or mathematical discipline (applicants from other fields should explain relevant coursework in the statement of purpose). Application materials: resume or CV, statement of purpose, unofficial transcripts from every previous institution (with official English translations of non-English records), and three letters of recommendation. The GRE is not required but may be considered if you submit it",
      GRAD_MINIMUM,
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering: Accelerated Program",
    slug: "uw-madison-ms-mechanical-engineering-accelerated",
    level: "Master",
    field: "Mechanical Engineering",
    duration: "About 16 months full-time, accelerated (30 graduate credits)",
    tuitionNote: `UW–Madison lists tuition for the College of Engineering's accelerated master's programmes, including this one, at US$1,200 per credit, so the 30-credit degree comes to about US$36,000 in tuition, with segregated fees (US$849.74 a semester for full-time students in 2026-27) on top. ${GRAD_LIVING}. Students in this programme cannot receive tuition remission from graduate assistantships. The university did not state whether the per-credit rate will change for 2027-28`,
    description:
      "The Accelerated Program named option of UW–Madison's MS in Mechanical Engineering is a coursework-only degree that takes about 16 months. Students take courses in the department's six emphasis areas: advanced manufacturing, biomechanics, computational engineering and design, energy systems, fluid and solid mechanics, and robotics, controls and sensing. Each student is assigned an academic advisor in their emphasis area. The programme is taught face to face, admits in fall and spring, and is STEM OPT eligible.",
    officialProgramUrl: "https://guide.wisc.edu/graduate/mechanical-engineering/mechanical-engineering-ms/mechanical-engineering-accelerated-program-ms/",
    degree: "Master of Science (MS) in Mechanical Engineering, named option: Accelerated Program",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: apply through the Graduate School online application by 15 December 2026. Spring 2028 entry: apply by 1 September 2027. The full application, including all items, is due by the deadline. The programme does not admit in summer",
    admissionRequirements: [
      "A Bachelor of Science in mechanical engineering or in another engineering, physics or natural science discipline. The minimum GPA for committee review is 3.0, and the department prefers 3.2 or higher. Application materials: unofficial transcripts from every previous institution (with official English translations of non-English records), a statement of purpose (two pages recommended), a resume and three letters of recommendation. The GRE is not required, and submitted scores are not used in decisions",
      GRAD_MINIMUM,
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business: Analytics",
    slug: "uw-madison-ms-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "1 year full-time, accelerated (30 graduate credits; starts in summer)",
    tuitionNote: `The Wisconsin School of Business lists tuition for the MS in Business Analytics at US$1,500 per credit, or US$45,000 for the whole one-year programme, plus segregated fees of US$1,596.62. ${GRAD_LIVING}. Students cannot receive tuition remission from graduate assistantships, but those who accept an assistantship may receive a stipend and health insurance`,
    description:
      "The Wisconsin MS in Business Analytics is an accelerated, STEM-designated one-year master's degree on how to use data to answer complex business questions. The curriculum covers machine learning, data visualisation, data technology, statistics, programming, experimental design, optimisation, cloud computing and artificial intelligence, with real-world consulting projects and electives in industry-specific analytics. Typical students have studied business, computer science, economics, engineering, mathematics, statistics or other quantitative fields, but any undergraduate degree is accepted. It is taught face to face in Madison and starts in summer.",
    officialProgramUrl: "https://business.wisc.edu/graduate/masters/business-analytics/admissions/",
    degree: "Master of Science (MS) in Business, named option: Analytics",
    intake: "Summer term only (summer 2027 start)",
    applicationDeadline:
      "Summer 2027 entry: application deadlines are 4 November 2026, 13 January 2027, 3 March 2027, 29 April 2027 (final deadline for international applicants) and 3 June 2027 (final deadline for domestic applicants). Applications submitted between deadlines are reviewed after the next one. You apply through the Wisconsin School of Business, not the Graduate School application. The application fee is US$75, plus a US$6 processing fee for international applicants. Test-waiver requests must be submitted at least one week before your chosen deadline",
    admissionRequirements: [
      "The equivalent of a four-year US bachelor's degree from an accredited institution, completed before you start. Application materials: three written essays of up to 600 words each (plus an optional essay), three video essays (one uploaded with the application and two completed within 72 hours of submitting), a resume, unofficial transcripts (certified copies once admitted; non-US records may be verified by World Education Services), and an interview if invited. A letter of recommendation is optional",
      "GMAT or GRE required unless you are granted a test waiver. To be eligible for a waiver you need a 3.0 undergraduate GPA (or international equivalent) and at least one sign of quantitative readiness, such as a quantitative degree, a 3.2 GPA or B grades in quantitative courses, two or more years in an analytical role, a quantitative certification, or another qualifying test or prep course, plus a 250-word quantitative readiness statement. Waivers are granted selectively",
      "English proficiency: required if your native language is not English or your undergraduate instruction was not in English. Minimums are TOEFL iBT 92 (tests before 21 January 2026) or 5.0 (later tests), IELTS 7.0 or Duolingo 125, taken within two years of the start date. The school accepts combined scores such as TOEFL MyBest and IELTS One Skill Retake. A waiver is possible if your four-year bachelor's or master's degree (at least eight semesters in total) was taught in English, or if you have worked for at least two years at a company where only English is spoken",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "uw-madison-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time",
    tuitionNote:
      "2026-27: Wisconsin Full-Time MBA nonresident tuition is US$51,413.28 a year, plus US$1,699.48 in segregated fees and a one-time US$400 programme fee for first-year students. The School's nine-month budget also includes US$700 for books and supplies, US$16,956 for room and board, US$6,500 for miscellaneous costs (including an allowance for health insurance), US$1,500 for a computer and US$3,500 for travel on the optional global course held each winter break, for an estimated yearly total of US$82,668.76 before aid. All applicants are considered for scholarships based on the merits of the application, and awards (any combination of tuition award, merit scholarship and graduate assistantship) are announced with the admission decision; the School reports that 100 percent of eligible students received a scholarship in 2023-25. Tuition is reset each August, so 2027-28 rates were not yet available",
    description:
      "The Wisconsin Full-Time MBA (Business: Administration and Management) is a two-year, full-time programme in Madison for emerging leaders. A modernised business core is followed by customisable elective pathways: students can go deep in areas such as corporate finance, brand management or real estate, or design interdisciplinary paths for careers such as consulting and strategic leadership, and can add graduate certificates in fields like entrepreneurship and business analytics. The curriculum stresses data-driven decision making, leadership development, artificial intelligence in business and applied projects with industry. International applicants must choose the STEM-designated version of the MBA, which makes graduates eligible for the 24-month STEM extension of Optional Practical Training.",
    officialProgramUrl: "https://business.wisc.edu/graduate/mba/full-time/admissions/",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall semester (fall 2027 entry)",
    applicationDeadline:
      "Fall 2027 entry: Early Decision by 4 September 2026 (decisions 16 October 2026; you commit to attend and withdraw other applications if admitted); Round 1 by 12 October 2026 (decisions 11 December 2026); Round 2 by 7 January 2027 (decisions 5 March 2027; the scholarship priority deadline); Round 3 by 25 March 2027 (decisions 30 April 2027; the last round for international applicants living outside the United States); Round 4 by 25 May 2027 (rolling decisions; the last round for international applicants already in the United States). The application fee is US$75, plus a US$6 processing fee for international applicants. Test-waiver requests must be submitted at least two weeks before your chosen round",
    admissionRequirements: [
      "The equivalent of a four-year US bachelor's degree from an accredited institution and at least two years of full-time professional work experience (students average four). Application materials: resume, two essays (150-300 and up to 300 words), an optional supplemental statement, a video essay recorded within 72 hours of submitting, one professional recommendation (up to two accepted), unofficial transcripts, and an interview by invitation",
      "GMAT (preferred; the GMAT 10th Edition and GMAT superscores are accepted) or GRE, taken within five years; there is no minimum score. A test waiver may be granted selectively to applicants with at least three years of full-time work, a 3.0 undergraduate GPA and at least two indicators of quantitative readiness, such as a quantitative degree, strong grades in quantitative courses, a quantitative role or certification, or an approved prep course",
      "English proficiency: required if your native language is not English or your undergraduate instruction was not in English. Minimums are TOEFL iBT 92 (tests before 21 January 2026) or 5.0 (later tests), IELTS 7.0 or Duolingo 125, taken within two years of the start date; combined scores such as TOEFL MyBest are accepted. A waiver is possible if your four-year bachelor's or master's degree (at least eight semesters in total) was taught in English, or if you have worked for at least two years at a company where only English is spoken. Proof of funding is required for the visa after admission, not with the application",
    ],
  },
];
