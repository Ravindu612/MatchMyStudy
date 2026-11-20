import type { Program } from "../../programs";

// Princeton University: 9 undergraduate majors for fall 2027 first-year entry (Computer Science BSE, Economics AB,
// Operations Research and Financial Engineering BSE, Electrical and Computer Engineering BSE, Mechanical and Aerospace
// Engineering BSE, Mathematics AB, Physics AB, Public and International Affairs AB and Molecular Biology AB) and 6
// full-time graduate programmes (the Princeton School of Public and International Affairs MPA, the Bendheim Center
// Master in Finance, the Professional Master of Architecture, the Electrical and Computer Engineering MEng, and the
// Computer Science and Economics PhDs).
// Sources (viewed 20 November 2026): Office of Admission pages on applying, first-year dates and deadlines, the
// application checklist, standardized testing, international students, cost and aid, and fees and payment options
// (admission.princeton.edu/apply, /apply/first-year-application-dates-deadlines, /apply/application-checklist,
// /apply/standardized-testing, /apply/international-students, /cost-aid, /cost-aid/fees-payment-options) and the For
// Counselors page (admission.princeton.edu/apply/counselors) for the US$75 application fee; Office of Financial Aid
// 2026-27 student budget (finaid.princeton.edu/how-aid-works/student-budget); the 2026-2027 Undergraduate Announcement
// pages for the A.B. and B.S.E. programmes of study and for each major listed (ua.princeton.edu/policies-resources/
// undergraduate-program/..., /fields-study/departmental-majors-degree-bachelor-arts/... and
// /fields-study/departmental-majors-degree-bachelor-science-engineering/...); the Department of Computer Science
// undergraduate degrees page and graduate FAQ (cs.princeton.edu/ugrad/undergraduate-degrees-requirements, /grad/faq);
// Graduate School Fields of Study 2026-2027 pages for Computer Science, Economics, Finance, Architecture and Electrical
// and Computer Engineering (gradschool.princeton.edu/academics/fields-study/...), the Graduate School English
// proficiency, 2026-27 rates and costs, graduate financing plan and master's degree funding pages
// (gradschool.princeton.edu/admission-onboarding/prepare/english-proficiency,
// /financial-support/financial-support-model/funding-calendar-university-rates-costs,
// /financial-support/additional-funding-resources/military-connected-students/graduate-financing-plan,
// /financial-support/financial-support-model/master%E2%80%99s-degree-funding); SPIA MPA programme, application,
// financial aid and admissions FAQ pages (spia.princeton.edu/graduate-programs/master-public-affairs,
// /admissions/master-public-affairs/application, /graduate-admissions/master-public-affairs/financial-aid,
// /admissions/faqs); and the Bendheim Center for Finance Master in Finance common questions page
// (bcf.princeton.edu/academic-programs/master-in-finance/common-questions/).
// Costs are in US dollars. Princeton is private and charges international and US students the same tuition. It runs on
// two terms (fall and spring).

const UNIVERSITY = {
  universitySlug: "princeton-university",
  universityName: "Princeton University",
  country: "United States",
  language: "English",
  campus: "Princeton, New Jersey",
  programType: "Full-time",
} as const;

// Admission "Cost & Aid" page: US$71,200 is the tuition for 2027-28. "Fees & Payment Options" student budget (the page
// heading reads "2028-28", which we read as 2027-28 because the tuition matches): tuition 71,200; housing 13,600; food
// 9,520; fees 328; books etc. 1,050; personal 3,000; total 98,698; transportation varies (50 to 5,000).
// Office of Financial Aid 2026-27 first-year/sophomore budget: tuition 68,140; total 94,624. Student Health Plan
// 2026-27: 4,220.
const UG_TUITION =
  "2027-28 (the first year for fall 2027 entrants): undergraduate tuition is US$71,200, the same for international and US students. Princeton's estimated 2027-28 cost of attendance is US$98,698: tuition, US$13,600 for housing, US$9,520 for food, US$328 in fees (activities fee and class dues), US$1,050 for books, course materials, supplies and equipment, and US$3,000 for personal expenses. Travel is not included and Princeton estimates it at anywhere from about US$50 to US$5,000 a year. For comparison, the 2026-27 tuition is US$68,140 and the 2026-27 first-year/sophomore budget is US$94,624 (juniors and seniors have a higher food allowance). Students not covered by a family health insurance policy must buy the Student Health Plan (US$4,220 for 2026-27; the 2027-28 rate was not shown when we checked). Financial aid: admission is need-blind for all applicants, including international students, and Princeton meets 100% of demonstrated need with grants rather than loans under the same policy for every student. There are no academic or athletic merit scholarships. To be considered, submit the Princeton Financial Aid Application (free) by 9 November (single-choice early action) or 1 February (regular decision); aid offers arrive with the admission decision";

const UG_INTAKE = "Fall semester only (fall 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry. Princeton offers single-choice early action and regular decision; it has no binding early decision plan. Single-choice early action (non-binding but restrictive): application, graded written paper, school report, counsellor letter, transcript and two teacher evaluations due 1 November 2026 (passed when we checked), with decisions in mid-December; early action applicants may not apply to an early programme at any other private US college, but may apply early to public universities, to institutions outside the US and to rolling-admission colleges as long as those decisions are non-binding. Early applicants are admitted, denied or deferred to regular decision. Regular decision: all materials due 1 January 2027, with the optional arts supplement due 8 January 2027, the Princeton Financial Aid Application due 1 February 2027 and decisions in late March 2027. Admitted students in both rounds reply by 1 May 2027. If you submit SAT or ACT scores, sit the test by the October date (early action) or December date (regular decision); any English test (TOEFL, IELTS Academic, Duolingo or PTE Academic) should be completed by the application deadline";

const UG_TESTING =
  "Testing: Princeton is test-optional for students applying in the 2026-27 cycle for fall 2027 entry, and applicants without SAT or ACT scores are not disadvantaged. Princeton has announced that testing will be required again from the 2027-28 cycle, so applicants for fall 2028 entry must submit SAT or ACT scores (active military personnel are exempt). There are no minimum scores. If you do submit, scores must come directly from the testing agencies (SAT code 2672, ACT code 2588); Princeton uses SAT Score Choice within the same format (it does not combine paper and digital SAT scores) and the highest ACT composite, and it accepts the old four-section and new three-section ACT equally. AP and IB results can be self-reported";

const UG_ENGLISH =
  "English proficiency: if English is not your native language and you attend a school where English is not the language of instruction, you must take the TOEFL, IELTS Academic, Duolingo English Test or PTE Academic (TOEFL code 2672). You are exempt if English is your native language or if you have spent at least three years at a secondary school where English is the main language of instruction. Princeton does not publish a minimum score on its admission pages; see admission.princeton.edu/apply/international-students for the current guidance";

const UG_ACADEMIC =
  "Application: the Common Application (or QuestBridge Application) with the Princeton-specific Questions, a US$75 application fee or fee waiver (all low-income applicants qualify for Princeton's own waiver), a graded written paper in English (preferably from English or history; O- or A-level coursework is acceptable), an official transcript, the School Report, a counsellor recommendation, two teacher recommendations from different core academic subjects, a midyear report and, if admitted, a final report. International transcripts are read in the context of your own school system and can include internal grades, external exam results (for example IGCSE, A-level, IB or Indian Standard X/XII) and predicted results; no GPA conversion is needed. Recommendations written in another language must be translated. Optional: an alumni interview (offered where interviewers are available) and an arts supplement";

const BSE_FOUNDATION =
  "Engineering (B.S.E.) preparation: all B.S.E. students complete at least 36 courses, including four semesters of mathematics (calculus I and II, multivariable calculus and linear algebra), two semesters of physics, one of chemistry or molecular biology and one of computing, a first-year writing seminar and at least seven humanities and social science courses. The physics, chemistry and 100-level maths requirements are normally finished in the first year";

// Graduate School 2026-27 rates: tuition 65,210 + Student Health Plan fee 4,220 = 69,430; 12-month living costs 39,770
// (housing 17,040, food 10,925, personal 9,365, books 2,440); 12-month cost of attendance 109,200.
const GRAD_COA =
  "Graduate School 2026-27 rates: tuition US$65,210 for the academic year plus the required US$4,220 Student Health Plan fee (US$69,430 in total). The Graduate School's 2026-27 cost of attendance for a single student enrolled for 12 months is US$109,200, adding an estimated US$39,770 for living costs (US$17,040 housing, US$10,925 food, US$9,365 personal expenses and US$2,440 books and supplies). Small extra fees apply (for example about US$29 to the Graduate Student Government). We did not find 2027-28 graduate rates when we checked";

const GRAD_ENGLISH =
  "English proficiency: applicants whose primary language is not English must send TOEFL iBT (old 0-120 or new 1-6 scale; Home Edition accepted, MyBest not), IELTS Academic (IELTS Online accepted) or Duolingo English Test scores, unless their undergraduate degree was taught entirely in English or they have completed at least two full-time years of graduate study taught entirely in English by the time the application opens. The Graduate School sets no minimum score, but admitted students with TOEFL Speaking below 27 (or 5.5 on the new scale), IELTS Speaking below 8.0 or DET Conversation below 125 must take an English assessment on arrival and may be placed in English Language Program classes. Scores must still be valid when the application opens and should be sent at least three weeks before the deadline (TOEFL code 2672)";

const GRAD_APPLICATION =
  "Application: the Princeton Graduate School online application with a US$90 fee (fee waivers are available for financial hardship and for participants in listed programmes), a statement of academic purpose, CV, transcripts from every degree-granting institution and three letters of recommendation";

const PHD_FUNDING =
  "Funding: Princeton funds all degree-seeking PhD students during regular enrolment (normally five years) with full tuition, the Student Health Plan fee and a stipend, paid through fellowships and research or teaching assistantships. 2026-27 rates: 12-month University Fellowship US$52,680 (humanities and social sciences); 10-month first-year fellowship US$46,200 in the natural sciences and engineering, plus up to US$9,240 for summer; 10-month research assistantship US$46,200; 10-month teaching assistantship US$48,510";

export const princetonUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (BSE)",
    slug: "princeton-computer-science-bse",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (eight terms; at least 36 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Computer Science is the only Princeton department that offers both a Bachelor of Science in Engineering (BSE) and a Bachelor of Arts (AB), and both degrees share the same eight departmental courses; this entry describes the BSE. Prerequisites are COS 126 (or ECE 115), COS 217 Introduction to Programming Systems and COS 226 Algorithms and Data Structures. Every major then takes COS 240 Reasoning and Computation and one core course in each of four areas: computer systems (such as principles of system design or computer architecture), artificial intelligence and machine learning, theoretical computer science, and a breadth course such as functional programming, computer graphics, information security or human-computer interaction. Three electives at the 300 level or above complete the major, and up to two may come from upper-level maths, ECE or ORFE. BSE students declare the major in the spring of their first year, follow the engineering school's maths and science requirements, and complete at least one semester of independent work (a single-term project or a full senior thesis). The AB route instead requires a maths prerequisite, at least 34 courses and a senior thesis",
    officialProgramUrl: "https://www.cs.princeton.edu/ugrad/undergraduate-degrees-requirements",
    degree: "Bachelor of Science in Engineering (B.S.E.) in Computer Science (an A.B. is also offered)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, BSE_FOUNDATION],
  },

  {
    ...UNIVERSITY,
    name: "Economics (AB)",
    slug: "princeton-economics-ab",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (eight terms; at least 34 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Princeton's Economics major trains students in the three branches of the discipline (microeconomics, macroeconomics and econometrics) and asks them to apply them to at least one subfield such as monetary economics, international finance, development, industrial organisation, public finance, health, environmental, labour or political economy. Before entering the department at the end of sophomore year, students pass introductory microeconomics and macroeconomics, a statistics course and calculus with a grade of C or better. Majors then pass, on a graded basis, core courses in microeconomics, macroeconomics and econometrics, each offered in a standard and a more mathematical version, plus five 300-level or higher electives (up to two can be approved cognates from areas such as optimisation, probability, game theory or blockchain courses). Independent work runs through the junior foundations course and junior paper to a two-semester senior thesis and a senior comprehensive exam. Students heading for graduate study or advanced finance courses are advised to take multivariable calculus and linear algebra early",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-arts/economics",
    degree: "Bachelor of Arts (A.B.) with a major in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Operations Research and Financial Engineering (BSE)",
    slug: "princeton-operations-research-financial-engineering-bse",
    level: "Bachelor",
    field: "Finance",
    duration: "4 years full-time (eight terms; at least 36 courses)",
    tuitionNote: UG_TUITION,
    description:
      "ORFE is Princeton's engineering degree in statistics, probability and optimisation, applied to finance, data science and machine learning, logistics, energy, healthcare and other fields where decisions are made under uncertainty. Students enter the department after completing ORF 245 Fundamentals of Statistics or ORF 309 Probability and Stochastic Systems by the end of sophomore fall. The four core courses are fundamentals of statistics, optimisation, probability and stochastic systems, and an introduction to financial mathematics. Students then choose ten departmental electives (at least four from ORFE and no more than three from any other single department), often drawing on economics, computer science, applied maths and other engineering departments to build a coherent focus such as quantitative finance or machine learning. The programme ends with a full-year senior thesis or a one-semester senior project plus an extra 400-level elective. The department points to minors in optimisation and quantitative decision science and in applied and computational mathematics as especially good complements",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-science-engineering/operations-research-and",
    degree: "Bachelor of Science in Engineering (B.S.E.) in Operations Research and Financial Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, BSE_FOUNDATION],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering (BSE)",
    slug: "princeton-electrical-computer-engineering-bse",
    level: "Bachelor",
    field: "Electrical and Computer Engineering",
    duration: "4 years full-time (eight terms; at least 36 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Princeton's ABET-accredited Electrical and Computer Engineering programme links information, data, communication and computing systems with circuits, energy and the physical world. Students enter the department after completing ECE 206 or ECE 308 by the end of sophomore fall. The foundation covers data and information, circuits, devices and digital logic, followed by a core course (ECE 302) usually taken by the end of junior year and an upper-level maths course. Students then specialise with three courses in a concentration area, with options including information and data science, computing systems, privacy and security, robotics and cyber-physical systems, semiconductor and optoelectronic devices, photonics and quantum computing, and energy or biomedical applications, plus a breadth elective, an engineering science course outside ECE and an upper-level design course. All majors write a two-term senior thesis with oral presentations, and students can combine ECE with minors in areas such as robotics, neuroscience, sustainable energy or engineering physics",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-science-engineering/electrical-and-computer",
    degree: "Bachelor of Science in Engineering (B.S.E.) in Electrical and Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, BSE_FOUNDATION],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical and Aerospace Engineering (BSE)",
    slug: "princeton-mechanical-aerospace-engineering-bse",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (eight terms; at least 36 courses)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Mechanical and Aerospace Engineering runs two ABET-accredited programmes, mechanical engineering and aerospace engineering, and with careful planning students can complete both. Entry requires MAE 223 Modern Solid Mechanics (or an equivalent) by the end of sophomore fall, and before junior year students normally finish engineering dynamics, thermodynamics, fluid mechanics, solid mechanics and an integrated engineering science laboratory. Majors then take engineering mathematics and eight upper-level departmental courses for mechanical engineering, nine for aerospace or ten for both, spread across dynamics and control (automatic control is required for everyone), fluid and thermal sciences and materials and structures, including at least three design courses such as engineering design, mechanical design, aircraft design or space system design. Every student completes a self-directed research or engineering project, and students can add programmes such as robotics and intelligent systems, sustainable energy or engineering physics",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-science-engineering/mechanical-and-aerospace",
    degree: "Bachelor of Science in Engineering (B.S.E.) in Mechanical and Aerospace Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, BSE_FOUNDATION],
  },

  {
    ...UNIVERSITY,
    name: "Mathematics (AB)",
    slug: "princeton-mathematics-ab",
    level: "Bachelor",
    field: "Mathematics",
    duration: "4 years full-time (eight terms; at least 34 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Princeton's Mathematics major is a proof-based programme for students who want a strong foundation in analysis, algebra and geometry, whether they are heading for research, finance, physics or computer science. Prospective majors are encouraged to begin with the honours sequence in analysis and linear algebra (or an accelerated version for students who already have proof-based university experience), and most start 300-level courses by the spring of sophomore year. The major requires four core courses, one each in real analysis, complex analysis, algebra, and geometry or topology (a discrete mathematics course can replace the last), plus four more courses at the 300 level or above, up to three of which may be approved cognates in fields such as physics, finance or computer science. Students also complete junior independent work and a two-semester senior thesis, and honours are based on departmental grades and independent work",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-arts/mathematics",
    degree: "Bachelor of Arts (A.B.) with a major in Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Physics (AB)",
    slug: "princeton-physics-ab",
    level: "Bachelor",
    field: "Natural Sciences",
    duration: "4 years full-time (eight terms; at least 34 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Princeton's Physics major combines a compact core with a strong emphasis on research. The prerequisites, normally finished by the end of sophomore year, are two semesters of introductory physics (standard or advanced), a course moving from classical to quantum mechanics, and multivariable calculus and linear algebra. Majors then take quantum mechanics, thermodynamics and statistical mechanics, experimental physics, a course in complex analysis or differential equations, and four further courses at the 300 level or above in physics, maths or an approved related field, all for a letter grade. Two junior papers let students explore active research areas in depth, and the year-long senior thesis is written with a faculty member and is meant to contribute to current research in fields from cosmology and condensed matter to string theory. Graduates go on to physics research as well as engineering, finance, consulting, medicine, law and teaching",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-arts/physics",
    degree: "Bachelor of Arts (A.B.) with a major in Physics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Public and International Affairs (AB)",
    slug: "princeton-public-international-affairs-ab",
    level: "Bachelor",
    field: "Public Policy",
    duration: "4 years full-time (eight terms; at least 34 courses)",
    tuitionNote: UG_TUITION,
    description:
      "The undergraduate major in the Princeton School of Public and International Affairs (SPIA) is a multidisciplinary liberal arts degree for students interested in public service and policy. Before declaring, students pass four prerequisites with a C or better: statistics, introductory microeconomics, a sociology or psychology course and a politics or history course. The core includes an introduction to public policy, a junior Policy Task Force in which small groups research a real policy problem and produce a joint report with recommendations, a junior policy research seminar, a course on power and identity, an ethics course, an intermediate economics course and a two-semester senior thesis on a current policy issue. Six electives add disciplinary breadth across SPIA-affiliated departments (from politics, history and sociology to computer science, engineering and environmental studies) and depth in a discipline or a policy theme. Students also complete a cross-cultural experience, which can include study abroad, or policy-relevant field experience",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-arts/princeton-school-public-and-international",
    degree: "Bachelor of Arts (A.B.) with a major in Public and International Affairs",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Molecular Biology (AB)",
    slug: "princeton-molecular-biology-ab",
    level: "Bachelor",
    field: "Biology",
    duration: "4 years full-time (eight terms; at least 34 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Molecular Biology is the core life sciences department at Princeton, with faculty working on molecular, cell and systems biology in organisms from viruses and yeast to mice and humans. Before junior year, students complete introductory cellular and molecular biology with a C or better, general chemistry and organic chemistry (the Integrated Science Curriculum is an alternative route in). The major adds a statistics course, a computing or maths course and physics, then at least eight upper-level departmental courses, including five core courses (genetics, biochemistry, cell and developmental biology, a molecular biology laboratory and an introduction to research) plus electives across areas such as neuroscience, immunology and genomics. Research is central: in the spring of junior year students write a grant-style junior paper in the lab of the faculty adviser who then supervises their senior thesis research. All courses for the major, including prerequisites, must be taken for a letter grade",
    officialProgramUrl: "https://ua.princeton.edu/fields-study/departmental-majors-degree-bachelor-arts/molecular-biology",
    degree: "Bachelor of Arts (A.B.) with a major in Molecular Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Master in Public Affairs (MPA)",
    slug: "princeton-master-public-affairs-mpa",
    level: "Master",
    field: "Public Policy",
    duration: "2 years full-time (residential)",
    tuitionNote:
      `${GRAD_COA}. Funding: SPIA states that every admitted MPA student receives 100% of tuition and required fees and comprehensive health insurance, plus a need-based stipend for living expenses for both years, paid as grants alongside any external fellowship or sponsorship you already hold. Admission is need-blind, but applicants must complete the Statement of Financial Resources`,
    description:
      "The Master in Public Affairs at the Princeton School of Public and International Affairs (SPIA) is a two-year, full-time residential programme for international and domestic policy careers, with roughly 65 students in each cohort. Through a core curriculum and electives, students build analytical skills covering the political, economic, quantitative, behavioural and ethical sides of policy problems. Each student chooses one of four fields of concentration: international relations, international development, domestic policy, or economics and public policy. Certificates add specialisations in health and health policy; science, technology and environmental policy; and urban policy, and joint degrees are available with law schools (MPA/JD, four years) and with Stanford Graduate School of Business (MPA/MBA, three years). SPIA's funding model is designed so that graduates can move into public service and non-profit careers without tuition debt",
    officialProgramUrl: "https://spia.princeton.edu/graduate-programs/master-public-affairs",
    degree: "Master in Public Affairs (M.P.A.)",
    intake: "Fall 2027 entry (SPIA graduate programmes begin each summer)",
    applicationDeadline:
      "Fall 2027 entry: apply by 1 December 2026 at 11:59 pm Eastern time (US$90 fee). SPIA has a single deadline and no rolling admission. Decisions are released on 15 March 2027 and admitted students must reply by 15 April 2027",
    admissionRequirements: [
      "Application: the Princeton Graduate School application with a US$90 fee, a two-to-three-page statement of purpose on your commitment to public service, a one-page supplemental essay on your background, a personal statement of up to 250 words, a four-page policy memo on a domestic or international problem, a résumé or CV, transcripts from every higher education institution attended with GPAs converted to a 4.0 scale, a course list of maths, economics and politics courses, three recommendations (ideally one professional, one academic and one on your commitment to public service) and the Statement of Financial Resources. There is no required undergraduate major",
      "Testing: the GRE General Test is required for all MPA applicants (code 2672) and cannot be waived; GMAT and LSAT scores are not accepted",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in Finance (MFin)",
    slug: "princeton-master-in-finance-mfin",
    level: "Master",
    field: "Finance",
    duration: "2 years full-time (four semesters plus a required summer internship); a very small number of admitted students are allowed to finish in one year",
    tuitionNote:
      `${GRAD_COA}. Funding: the MFin is not on the Graduate School's list of master's programmes with departmental funding, so plan on paying tuition yourself unless you hold outside support, and contact the Bendheim Center about any awards. Applicants complete the Statement of Financial Resources, and the Bendheim Center notes that tuition is billed in five monthly instalments per semester`,
    description:
      "Princeton's Master in Finance, run by the interdisciplinary Bendheim Center for Finance, is a quantitative, STEM-designated programme with a strong emphasis on financial and monetary economics using analytical and computational methods. It prepares graduates for financial engineering and risk management, quantitative asset management, macroeconomic and financial forecasting, quantitative trading and applied research. Students take five core courses (mathematical finance, economics, probability, statistics and financial econometrics) and eleven electives drawn from economics, computer science, ORFE, the Center for Statistics and Machine Learning and other units, with optional tracks in quantitative asset management, data science and financial technologies, or valuation and macroeconomic analysis. A required summer internship sits between the two years, there is a compulsory two-week maths and probability refresher before the first fall, and two-year students can also earn the Graduate Certificate in Statistics and Machine Learning. Work experience is not required, but at least one internship is expected, and the Bendheim Center runs its own career and recruiting support",
    officialProgramUrl: "https://gradschool.princeton.edu/academics/fields-study/finance",
    degree: "Master in Finance (M.Fin.)",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 15 December 2026 at 11:59 pm Eastern time (US$90 fee). Recommendation letters are also due by 15 December. The Bendheim Center advises taking the GRE/GMAT and English tests by 1 November, because scores from tests after 1 December may not arrive in time. There is no deferral of admission",
    admissionRequirements: [
      `${GRAD_APPLICATION}; for the MFin one letter may come from a current or former employer. Applicants also complete the Finance course list and the Statement of Financial Resources. Applicants should know linear algebra, multivariable calculus, differential equations and probability and statistics at an intermediate undergraduate level`,
      "Testing: the GRE or GMAT is optional and not submitting either will not affect your application; the GRE is preferred if you do submit. Recent entering classes had a median GRE Quantitative score of 167, and the Bendheim Center reports an average acceptance rate of about 5% over the last five years",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Architecture (MArch, Professional)",
    slug: "princeton-master-of-architecture-march",
    level: "Master",
    field: "Architecture",
    duration: "3 years full-time for the professional MArch (a 2-year post-professional MArch is available to holders of a BArch or equivalent)",
    tuitionNote:
      `${GRAD_COA}. Funding: the Graduate School says Architecture MArch tuition packages vary by programme, and students appointed to teaching assistantships receive tuition and stipend support through them; confirm your package with the School of Architecture. A lab/studio fee also applies`,
    description:
      "Princeton's professional Master of Architecture is accredited by the National Architectural Accrediting Board (NAAB) and is meant for students who plan to practise; after the required internship, graduates can sit the state licensing examination. Applicants do not need an undergraduate degree in architecture. Over three years students take at least 25 courses, usually four a term, with a design studio every term and an independent design thesis in the final term. The studio sequence, building technology, professional practice and at least six history and theory courses form the core, with distribution requirements in history and theory and in building technology and up to three free electives from across the university. The School of Architecture also offers a two-year post-professional MArch (not NAAB-accredited) for holders of a BArch or equivalent, and a PhD with a computation and energy track",
    officialProgramUrl: "https://gradschool.princeton.edu/academics/fields-study/architecture",
    degree: "Master of Architecture (M.Arch.), professional degree (NAAB-accredited)",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply online by 21 December 2026 at 11:59 pm Eastern time (US$90 fee). The printed portfolio must be postmarked by 21 December 2026 and received by 4 January 2027 (the university is closed from 24 December to 3 January)",
    admissionRequirements: [
      `${GRAD_APPLICATION}`,
      "Portfolio: a design portfolio bound as a brochure no larger than 8.5 x 11 inches, mailed to Graduate Admission, plus an electronic version (25 MB limit) uploaded with the application. The first page must include a statement of under 500 words on why you want to earn a professional degree at Princeton. The GRE is optional",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering (MEng)",
    slug: "princeton-electrical-computer-engineering-meng",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration: "1 year full-time",
    tuitionNote:
      `${GRAD_COA}. Funding: Princeton offers no institutional funding for the MEng, and the programme does not admit self-supporting applicants. You must show external support for the whole programme, usually from an employer or an external fellowship, by uploading a funding confirmation letter from the sponsoring organisation`,
    description:
      "Princeton's Master of Engineering in Electrical and Computer Engineering is a one-year, coursework-based degree for engineers who want a deeper technical foundation for professional practice or for further study. Students complete eight graded technical courses at the 400 and 500 levels, at least four of them at the 500 level, chosen with their academic adviser, and need an overall B (3.0) average to graduate. No thesis is required, but research project courses are available. The department's teaching and research span applied physics and devices, advanced circuits, high-performance computing, security, data and information science, and artificial intelligence. Because the programme only admits sponsored students, it mainly suits applicants whose employer or a fellowship body will pay for the year",
    officialProgramUrl: "https://gradschool.princeton.edu/academics/fields-study/electrical-and-computer-engineering",
    degree: "Master of Engineering (M.Eng.) in Electrical and Computer Engineering",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 21 December 2026 at 11:59 pm Eastern time (US$90 fee)",
    admissionRequirements: [
      `${GRAD_APPLICATION}. MEng applicants list eight courses they would like to take in the statement of purpose and upload a funding confirmation letter naming the sponsor and confirming support for the full programme`,
      "Testing: the GRE General Test is optional and not required",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science (PhD)",
    slug: "princeton-computer-science-phd",
    level: "PhD",
    field: "Computer Science",
    duration: "5 years full-time",
    tuitionNote: `${GRAD_COA}. ${PHD_FUNDING}. Every admitted computer science PhD student receives a first-year fellowship and is automatically considered for the department's Wu and Upton Fellowships`,
    description:
      "Princeton's Computer Science PhD combines coursework with original research and admits students straight from a bachelor's degree (a master's is not needed). Students take six graded courses, including one core course in each of systems, artificial intelligence and theory, typically within the first two years, and need a B+ or better for a course to count. They find a research adviser during the first year and take the general examination, a research seminar followed by an oral exam, at the end of the second year, earning an MA along the way. All PhD candidates assist with teaching for the equivalent of two terms. Note that the department is not accepting applications to its MSE programme for fall 2027",
    officialProgramUrl: "https://gradschool.princeton.edu/academics/fields-study/computer-science",
    degree: "Doctor of Philosophy (Ph.D.) in Computer Science",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 15 December 2026 at 11:59 pm Eastern time (US$90 fee)",
    admissionRequirements: [
      `${GRAD_APPLICATION}. Applicants select up to two research areas of interest`,
      "Testing: the GRE General Test is not accepted for this programme. The department notes that recent admitted PhD students averaged 108 on the TOEFL iBT (0-120 scale), but it sets no minimum",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics (PhD)",
    slug: "princeton-economics-phd",
    level: "PhD",
    field: "Economics",
    duration: "5 years full-time",
    tuitionNote: `${GRAD_COA}. ${PHD_FUNDING}`,
    description:
      "Princeton's Economics PhD gives thorough training in the techniques and applications of economic analysis. First-year students take the core sequences in microeconomics, macroeconomics and econometrics, plus a research ethics course, and must pass them with at least a 2.5 average. In the second year they take at least six advanced courses and a year-long directed research course in which they develop a research question and present results to their peers, then pass examinations in two fields, chosen from options such as advanced macro or micro theory, econometrics, development, financial economics, health, industrial organisation, international money and finance, trade, labour, political economy, public finance and behavioural or experimental economics. An MA is normally earned along the way. In the third year students write a research paper (B or better needed to continue), then move on to the dissertation with an adviser and at least two other faculty readers, with weekly seminars and a job market paper presentation",
    officialProgramUrl: "https://gradschool.princeton.edu/academics/fields-study/economics",
    degree: "Doctor of Philosophy (Ph.D.) in Economics",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 1 December 2026 at 11:59 pm Eastern time (US$90 fee)",
    admissionRequirements: [
      `${GRAD_APPLICATION}. Economics applicants also need a working knowledge of multivariate calculus and matrix algebra, select at least two research areas, complete the Economics course list and upload a written work sample of up to 25 pages`,
      "Testing: the GRE General Test is required",
      GRAD_ENGLISH,
    ],
  },
];
