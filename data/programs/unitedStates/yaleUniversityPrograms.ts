import type { Program } from "../../programs";

// Yale University: 8 Yale College majors for fall 2027 first-year entry (Computer Science, Economics, Applied
// Mathematics, Political Science, Molecular, Cellular and Developmental Biology, Global Affairs, Mechanical Engineering
// and Psychology) and 7 full-time graduate programmes (Yale SOM MBA, Master of Advanced Management and Master's in
// Asset Management; the Jackson School MPP in Global Affairs; the School of the Environment MEM; the School of Public
// Health MPH; and the Graduate School of Arts and Sciences MS in Computer Science).
// Sources (viewed 18 November 2026): Undergraduate Admissions pages on applying, requirements, timelines,
// standardized testing and international students (admissions.yale.edu/apply, /requirements, /timelines,
// /standardized-testing, /international); YaleNews on the May 2026 testing policy change and the January 2026
// financial aid expansion (news.yale.edu/2026/05/27/undergraduate-admissions-updates-testing-policy,
// /2026/01/27/yale-offer-free-tuition-families-incomes-below-200000); Undergraduate Financial Aid cost of attendance,
// affordability and prospective-student pages (finaid.yale.edu/coa, /affordability, /apply/prospective); Yale College
// Programs of Study 2026-2027 subject pages and the B.A./B.S. degree requirements (catalog.yale.edu/ycps/...); Yale SOM
// MBA, MAM and Master's in Asset Management programme, curriculum, application, FAQ and 2026-27 cost pages
// (som.yale.edu/programs/mba/..., /programs/mam/..., /programs/mms-asset-management/...); the Jackson School MPP and MPP
// admissions pages and the MPP application portal (jackson.yale.edu/academics-admissions/master-public-policy,
// /mpp-admissions; apply.jackson.yale.edu/portal/apply_mpp); School of the Environment MEM, master's admissions,
// application materials and 2026-27 cost pages (environment.yale.edu/academics/masters/mem, /admissions/masters/...);
// School of Public Health MPH, MPH application and 2026-27 tuition and expenses pages (ysph.yale.edu/...); and the
// Graduate School of Arts and Sciences dates and deadlines, standardized testing, test FAQ, application fee and
// tuition/living cost pages (gsas.yale.edu/admissions/phdmasters-application-process/...) with the GSAS Programs and
// Policies 2026-2027 Computer Science entry (catalog.yale.edu/gsas/degree-granting-departments-programs/
// computer-science). Costs are in US dollars. Yale is private and charges international and US students the same
// tuition. It runs on two terms (fall and spring).

const UNIVERSITY = {
  universitySlug: "yale-university",
  universityName: "Yale University",
  country: "United States",
  language: "English",
  campus: "New Haven, Connecticut",
  programType: "Full-time",
} as const;

// Undergraduate Financial Aid 2026-27 estimated cost of attendance: tuition 72,500; student activity fee 185; housing
// 12,080; food 9,520; books/course materials/supplies/equipment 1,000; personal 2,700. Travel varies by home address
// and is not given as a figure. 97,985 is our sum of the listed items.
const UG_TUITION =
  "2026-27: Yale College tuition is US$72,500 for the academic year, the same for international and US students. Undergraduate Financial Aid's estimated 2026-27 cost of attendance lists tuition, a US$185 student activity fee, US$12,080 for housing (which includes residential college amenities such as laundry), US$9,520 for food, US$1,000 for books, course materials, supplies and equipment and US$2,700 for personal expenses, about US$97,985 in total before travel (our sum); travel is estimated separately from each student's home address. Financial aid: Yale admits all applicants, including international students, without regard to their ability to pay and meets 100% of every admitted student's demonstrated financial need with scholarship grants rather than loans. International students are eligible for the same need-based aid as US applicants; their awards include allowances for housing, meals and two round trips to campus a year, take into account the difference between the US economy and the home country's, and do not have to be reapplied for each year. From 2026-27 Yale expects nothing from families with typical assets and incomes below US$100,000 and gives scholarships that at least cover tuition to families with typical assets and incomes below US$200,000 (Yale's announcement describes these thresholds for US families; international awards are assessed individually). To apply, international students indicate interest in aid on the admissions application and Undergraduate Financial Aid then contacts them with the documents required; Yale does not accept the ISFAA in place of its own forms. Priority aid deadlines for 2027-28 entry are 1 December 2026 for international Early Action applicants and 15 February 2027 for Regular Decision";

const UG_INTAKE = "Fall term only (fall 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry. Yale has no Early Decision plan. First-year applicants choose one of three rounds, and Yale says none gives an admissions advantage. Single-Choice Early Action (also called Restrictive Early Action) is non-binding: the deadline was 1 November 2026, so it had passed when we checked; decisions (admit, deny or defer to Regular Decision) come in mid-December and admitted students have until 1 May to reply. Single-Choice Early Action applicants may not apply early action or early decision elsewhere, except to non-binding rolling programmes, non-binding early programmes at public institutions, early programmes that notify after 1 January (often called 'Round 2') and institutions outside the US; applicants denied in this round cannot reapply in Regular Decision that year. The QuestBridge National College Match (also due 1 November) is binding. Regular Decision: apply by 2 January 2027, with decisions in late March 2027 and a reply deadline of 1 May 2027. SAT or ACT sittings in October or November are generally in time for Early Action, and sittings in January or February for Regular Decision";

const UG_TESTING =
  "Testing: required. From the 2026-27 admissions cycle, every first-year applicant, including international applicants, must include ACT or SAT scores; Yale announced the change in May 2026, replacing its test-flexible policy (which also accepted AP or IB scores) and restoring the policy in place before 2020. International leaving exams and English proficiency tests do not satisfy the requirement. Yale has no preference between the two tests, the ACT Science and Writing sections are optional, and super-scored results are accepted. Scores can be self-reported in the application, and admitted students who enrol must provide official scores that match (SAT code 3987, ACT code 0618). AP or IB results may also be reported and are encouraged for students who took those courses, but they are not required";

const UG_ENGLISH =
  "English proficiency: required for non-native English speakers who have not had at least two years of secondary education in an English-medium school, in addition to the SAT or ACT. Accepted options are the TOEFL iBT, IELTS, Cambridge English Qualifications and the Duolingo English Test, and Yale also lists InitialView's unscored live interviews. Yale publishes no minimum scores; it says its most competitive applicants typically score at least 5 on the TOEFL (tests taken after 21 January 2026) or at least 100 (tests taken before that date), 7 or higher on IELTS, 185 or higher on Cambridge C1 Advanced, C2 Proficiency or B2 First, and at least 120 on the Duolingo English Test";

const UG_ACADEMIC =
  "Application (the same for international and US applicants): one application per cycle through the Common Application, the Coalition Application on Scoir or the QuestBridge Application, with Yale's own essay questions; letters of recommendation from two teachers of core academic subjects who taught you recently and one from your school counsellor (or a school administrator); and a School Report with an official transcript of all secondary school courses, followed by a Mid-Year Report with first-term senior-year grades. Documents not in English need a certified translation, and Yale does not accept translations you made yourself. Yale does not issue its own fee waivers, but you can apply free if you qualify under your application platform's rules (QuestBridge is always free). Optional supplementary material in visual art, dance, music, film or STEM research can be submitted";

const UG_DEGREE =
  "Yale College degree structure: all undergraduates are admitted to Yale College rather than to a department and choose a major later. A B.A. or B.S. requires 36 term courses (course credits), including Yale College's distributional requirements in three disciplinary areas and three skills categories, plus the requirements of the major, normally within eight terms of enrolment";

// Yale SOM 2026-27 single-student budget (identical on the MBA, MAM and Master's in Asset Management cost pages):
// tuition 90,900; programme fee 500; living (housing, food, utilities) 22,991; personal 5,525; transport 3,856; books
// 1,440; health insurance 3,764; total 128,976.
const SOM_COA = (programme: string) =>
  `Yale SOM's 2026-27 cost of attendance for one year of the ${programme} is US$128,976 for a single student: US$90,900 tuition and a US$500 programme fee (US$91,400), plus estimated living costs of US$22,991 for housing, food and utilities, US$5,525 for personal expenses, US$3,856 for transportation, US$1,440 for books and course materials and US$3,764 for health insurance (US$37,576). Yale requires hospitalization insurance, which can be waived if you have comparable cover. Term fees are due by 1 August (fall) and 1 December (spring), and a five-month payment plan is available`;

const GSAS_ENGLISH =
  "English proficiency (Graduate School of Arts and Sciences): the TOEFL iBT or IELTS Academic is required of most applicants whose native language is not English, with scores sent directly to institution code 3987. You are exempt if your undergraduate degree is from a college or university where English is the primary language of instruction and you studied there in residence for at least three years; advanced degrees do not give an exemption. The Graduate School sets no overall minimum score for admission (its published speaking thresholds, TOEFL 26 or 5.5 and IELTS 8.0, relate to doctoral students teaching in Yale classrooms)";

export const yaleUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (BS)",
    slug: "yale-computer-science-bs",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (eight terms; 12 term courses in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Yale's Department of Computer Science offers both a B.S. and a B.A., as well as combined majors with Electrical Engineering, Economics, Mathematics and Psychology. Every version shares a common core: CPSC 2010, a survey of the field for students who can already program (beginners start with CPSC 1001); discrete mathematics; data structures; systems programming and computer architecture (as a two-course pair or the more intensive CPSC 3230); and the analysis and design of algorithms. The B.S. totals twelve term courses: the core, five intermediate or advanced computer science electives (six if CPSC 3230 is taken) and the senior requirement, CPSC 4900, an independent project in which each student carries out original research with a faculty adviser. The department encourages electives across theory, systems and languages (databases, networking, operating systems, programming languages, security) and applications such as artificial intelligence, machine learning, computer vision, graphics, natural language processing, human-computer interaction and robotics, and up to two relevant advanced courses from other departments can count with approval. The B.A. needs ten courses (three electives instead of five). All major courses must be taken for a letter grade, and majors are advised to finish CPSC 2010 and data structures by the end of sophomore year",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/computer-science/",
    degree: "Bachelor of Science (B.S.) in Computer Science (a B.A. is also offered)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Economics (BA)",
    slug: "yale-economics-ba",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (eight terms; 12 term courses in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Yale teaches economics as part of a liberal arts education rather than as vocational training, covering decision making and incentives and policy questions such as inequality and wage gaps, poverty, immigration and trade, and recessions. The major has no prerequisites and requires twelve course credits: one mathematics course (Yale recommends MATH 1180 or 1200, which emphasise economic applications), introductory microeconomics and macroeconomics (which can be skipped on the basis of pre-college testing, with an extra elective taken instead), intermediate microeconomics, intermediate macroeconomics, econometrics, four electives at the 2000 level or above, and a senior requirement of two courses numbered ECON 4400-4491, at least one in senior year. A senior essay is optional but needed for Distinction in the major. No major course may be taken Credit/D/Fail. Yale advises students planning graduate study in economics to take additional mathematics such as multivariable calculus and linear algebra. The department says recent majors have gone into business, government and nonprofits, or on to law, medical, business or economics graduate programmes",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/economics/",
    degree: "Bachelor of Arts (B.A.) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Applied Mathematics (BS)",
    slug: "yale-applied-mathematics-bs",
    level: "Bachelor",
    field: "Mathematics",
    duration: "Typically 4 years full-time (eight terms; 14 term courses beyond the prerequisites for the B.S.)",
    tuitionNote: UG_TUITION,
    description:
      "Applied Mathematics is an interdisciplinary Yale College major that builds a core of mathematical modelling techniques and applies them in a chosen field, drawing its core from Computer Science, Mathematics, Statistics and Data Science and Engineering and Applied Science. Prerequisites are multivariable calculus, linear algebra and programming. The B.A. requires eleven term courses beyond them: differential equations, probability, data analysis, discrete mathematics, courses in at least three breadth areas (such as optimisation; probability and statistics; partial differential equations and analysis; algorithms and numerical methods; graph theory; mathematical economics; engineering; data mining and machine learning; biological modelling; physical sciences; and mathematical linguistics and philosophy), at least three advanced courses forming a concentration in one field of application, and a senior project. The B.S. totals fourteen courses and adds a vector analysis course and two further advanced courses. Many students combine Applied Mathematics with a second major, and up to two courses can overlap between them. Yale notes that graduates are sought after by graduate programmes and by industry and start-ups that need broad quantitative skills",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/applied-mathematics/",
    degree: "Bachelor of Science (B.S.) in Applied Mathematics (a B.A. is also offered)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Political Science (BA)",
    slug: "yale-political-science-ba",
    level: "Bachelor",
    field: "Political Science",
    duration: "Typically 4 years full-time (eight terms; 12 term courses in the standard major, 15 in the intensive major)",
    tuitionNote: UG_TUITION,
    description:
      "Yale's Political Science major studies how individuals and groups organise, allocate and challenge the power to make collective decisions, through the subfields of political philosophy, methodology and formal theory, American government, comparative politics and international relations. The standard B.A. requires twelve term courses, including at least two introductory courses, at least one methodology and formal theory course, at least two non-introductory 'core' lectures, at least two courses in each of two subfields, and at least two departmental seminars, one of them in senior year. Students may instead design an interdisciplinary concentration (for example urban studies, health politics and policy, political economy, political psychology or the politics of a world region), with at least seven of the twelve courses in the concentration. Juniors can apply for the intensive major, which adds a junior-spring research preparation course and a yearlong senior essay. Up to two related courses from other departments can be counted by petition, and exceptional students may qualify for a simultaneous B.A./M.A.",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/political-science/",
    degree: "Bachelor of Arts (B.A.) in Political Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Molecular, Cellular, and Developmental Biology (BS)",
    slug: "yale-molecular-cellular-developmental-biology-bs",
    level: "Bachelor",
    field: "Biology",
    duration: "Typically 4 years full-time (eight terms; at least nine course credits beyond the prerequisites for the B.S.)",
    tuitionNote: UG_TUITION,
    description:
      "MCDB covers molecular and cellular biology, genetics and development and prepares students for medicine, biotechnology, pharmaceuticals, research and teaching, with optional concentrations in Biotechnology, Neurobiology and Quantitative Biology. Prerequisites (updated for 2026-27) are the BIOL 1010-1040 modules (which strong students can place out of by summer exam), a mathematics or statistics course, two terms of chemistry and, for the B.S., chemistry labs, a term of organic chemistry with lab and a two-term physics sequence. The B.S. then requires at least nine course credits: three core courses chosen from MCDB 2000, 2020, 2050, 2100, 2900 and 3000, two general electives, one special elective at the 3500 level or above, two MCDB laboratories and a two-credit senior requirement; the intensive B.S. (eleven credits) instead requires two senior research courses worth two credits each. The B.A. needs five and a half credits beyond the prerequisites, including one lab, and lighter chemistry and physics prerequisites. The department strongly encourages independent laboratory research with faculty across Yale, and no major course may be taken Credit/D/Fail",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/molecular-cellular-developmental-biology/",
    degree: "Bachelor of Science (B.S.) in Molecular, Cellular, and Developmental Biology (a B.A. is also offered)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Global Affairs (BA)",
    slug: "yale-global-affairs-ba",
    level: "Bachelor",
    field: "International Relations",
    duration: "Typically 4 years full-time (eight terms; 14 courses in the major plus a language requirement)",
    tuitionNote: UG_TUITION,
    description:
      "The Global Affairs major, run by the Jackson School of Global Affairs, gives multidisciplinary training in the social sciences and humanities for students interested in areas such as human rights and humanitarianism, economic development and poverty, global health, international relations, environmental policy, and foreign policy and diplomacy. There are no prerequisites, but students must finish eight introductory courses before declaring the major, ideally by the end of sophomore year: introductory microeconomics and macroeconomics, two introductory political science courses from different subfields, two history courses, GLBL 2121 and one advanced course in game theory, intermediate economics or qualitative methods. For students entering the major from fall 2025, the major totals fourteen courses: beyond the introductory set, GLBL 2122, GLBL 3101, three approved global affairs electives and the senior requirement, plus an L4-level course in a modern language other than English. Seniors choose a policy Capstone task force that presents recommendations to a real client such as a government agency, NGO or company (offered in the fall), or a senior essay. Majors are encouraged to take a global affairs internship in the summer after junior year",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/global-affairs/",
    degree: "Bachelor of Arts (B.A.) in Global Affairs",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering (BS)",
    slug: "yale-mechanical-engineering-bs",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (eight terms; 20 courses, 19.5 credits, beyond the prerequisites)",
    tuitionNote: UG_TUITION,
    description:
      "Yale's B.S. in Mechanical Engineering is the department's most technically intensive degree and is accredited by the Engineering Accreditation Commission of ABET; Yale recommends it for students heading for engineering practice in industry, consulting or government, or for graduate research. Prerequisites are calculus (MATH 1120, MATH 1150 and ENAS 1510 or equivalents), a two-term physics lecture sequence with two physics labs, and one chemistry lecture course (which can be waived with a 4 or 5 in AP Chemistry or a 6 or 7 in IB Chemistry). The major then requires twenty courses (19.5 credits): advanced mathematics (differential equations and linear algebra), a prescribed sequence of mechanical engineering courses and laboratories with a programming course (ENAS 1300) and an electrical engineering course (ECE 2000), three approved technical electives, and a senior design requirement taken as MENG 4137L and 4138L. Students can add design-oriented special project courses with faculty. The department also offers a non-ABET B.S. and a B.A. in Engineering Sciences (Mechanical) for students who want to combine mechanical engineering with other interests. No major course, including prerequisites, may be taken Credit/D/Fail",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/mechanical-engineering/",
    degree: "Bachelor of Science (B.S.) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Psychology (BA or BS)",
    slug: "yale-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "Typically 4 years full-time (eight terms; 12 credits beyond PSYC 1100)",
    tuitionNote: UG_TUITION,
    description:
      "Yale's Psychology department teaches the scientific study of the mind, brain and behaviour across clinical, cognitive, developmental, neuroscientific and social psychology, and sees the major as a foundation for research, education, law, medicine and public health, policy and business. After the PSYC 1100 survey (or a 5 in AP Psychology or a 7 in IB Psychology), the standard major requires twelve credits: two courses from the social science side and two from the natural science side of psychology (at least one designated core course in each), a statistics course, at least one research methods course in which students plan and run a study, electives, and the senior requirement of two credits from PSYC 4000-4999 with a senior essay of at least 5,000 words. The B.A. and B.S. differ only in the senior requirement: B.A. students typically write a non-empirical literature review, while B.S. students complete empirical research in PSYC 4990. A neuroscience concentration adds introductory biology, a neuroscience research methods course and advanced science courses outside the department. Students are encouraged to start independent research as early as sophomore year",
    officialProgramUrl: "https://catalog.yale.edu/ycps/subjects-of-instruction/psychology/",
    degree: "Bachelor of Arts (B.A.) or Bachelor of Science (B.S.) in Psychology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_DEGREE, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Administration (MBA)",
    slug: "yale-som-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time",
    tuitionNote:
      `${SOM_COA("MBA")}. Tuition is charged for each of the two years. Scholarships are awarded after admission through a short supplemental application (only admitted students who complete it are considered); most awards, such as Dean's Scholarships, cover both years, and Yale SOM reports more than US$8.8 million in grant aid to incoming MBA students in 2026. The school also has loan options and a loan forgiveness programme`,
    description:
      "The Yale School of Management's two-year MBA is built around an integrated core curriculum that looks at organisations from the perspective of their stakeholders. The first year starts with Orientation to Management courses (Managing Groups and Teams, Basics of Accounting, Probability Modeling and Statistics, Basics of Economics, Introduction to Negotiation and Global Virtual Teams), moves on to Organizational Perspectives courses and finishes with The Executive, a capstone that takes a chief executive's view of the whole organisation; a hands-on artificial intelligence course runs in the fall and AI is woven through later core courses. The second year is made up of electives, which students can take at SOM and across Yale's other schools. Programme features include global study (a week-long course at another business school, a virtual global course or an international nonprofit consulting project), team-based leadership development and 'raw' online cases. The MBA is designated STEM-eligible, so eligible graduates can apply for the 24-month STEM OPT extension. Yale SOM reports a median salary of US$175,000 for the Class of 2025, with consulting, finance and technology as the top industries",
    officialProgramUrl: "https://som.yale.edu/programs/mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall 2027 (one entering class a year)",
    applicationDeadline:
      "Three rounds for the class entering in 2027: Round 1, 15 September 2026 (passed when we checked; decisions 3 December 2026); Round 2, 6 January 2027 (decisions 18 March 2027); Round 3, 7 April 2027 (decisions 13 May 2027). Yale SOM says the same application has a comparable chance in any round, but Round 3 depends on remaining space in the class and scholarship funding",
    admissionRequirements: [
      "A four-year bachelor's degree from an accredited US institution or the international equivalent. Full-time work experience is strongly encouraged but not required; entering students average about five years. College seniors can apply through the Silver Scholars Program",
      "GMAT or GRE: required, with no waivers and no minimum score; scores must be valid (within five years) on the day you apply and official reports must arrive by your round's post-submission deadline (GRE code 3986). Yale SOM credits your highest score. Applicants who have considered law school may submit the LSAT instead after contacting admissions",
      "Application materials: the online application with an essay, transcripts (copies are fine to apply; notarised English translations for non-English records), a résumé, two professional recommendations (ideally one from your most recent supervisor; letters may be written in another language and machine-translated), and, after submission, video questions and a 25-minute Behavioral Assessment administered by ETS. Interviews are by invitation, and every admitted applicant will have interviewed",
      "Application fee: a sliding scale of US$250 (standard), US$175 for applicants earning under US$50,000 a year and US$125 for those earning under US$25,000, with waivers for groups such as US military members and veterans and graduates of eligible colleges",
      "English proficiency (Yale SOM MBA): fluency in English is required, but the TOEFL, PTE Academic and IELTS are not required for international applicants, and no minimum score is set",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Advanced Management (MAM)",
    slug: "yale-som-master-advanced-management",
    level: "Master",
    field: "Management",
    duration: "One academic year (nine months, mid-August to May), full-time and in residence",
    tuitionNote:
      `${SOM_COA("Master of Advanced Management")}. All applicants are considered automatically for merit scholarships; Yale SOM does not give full-tuition merit awards, and awards typically range from US$10,000 up to half of tuition. Admitted students with remaining need can complete a need-aware scholarship form, and final funding decisions come before the enrolment deposit deadline`,
    description:
      "The MAM is a one-year Yale SOM degree for MBA students and recent MBA graduates of leading business schools around the world, especially members of the Global Network for Advanced Management, who want advanced training as global leaders for business and society. In the fall, the whole cohort takes the required courses Topics in Advanced Management for Business & Society and Managing Groups and Teams; the rest of the programme is a self-designed selection of electives from Yale SOM and across Yale University. Students who complete the Management Science major can qualify for the 24-month STEM OPT extension. Some partner schools have concurrent-degree arrangements that count the Yale year towards their own MBA. The Class of 2027 has 44 students from 21 MBA schools and 27 countries of citizenship, and the average MAM student is 32. The programme is not offered part-time, online or in hybrid form, and orientation is mandatory",
    officialProgramUrl: "https://som.yale.edu/programs/mam",
    degree: "Master of Advanced Management (MAM)",
    intake: "Mid-August each year (Class of 2028 enters in August 2027)",
    applicationDeadline:
      "Class of 2028 (applications opened 1 September 2026): Round 1, 1 December 2026, open only to applicants from Global Network for Advanced Management schools (decision 8 January 2027, enrolment deadline 19 February 2027); Round 2, 12 January 2027 (decision 12 February, enrolment 8 March 2027); Round 3, 23 February 2027 (decision 25 March, enrolment 15 April 2027); Round 4, 30 March 2027 (decision 29 April, enrolment 20 May 2027). Places and scholarships are available in every round, and a US$3,000 non-refundable deposit is due to enrol",
    admissionRequirements: [
      "Eligibility: you must have recently earned an MBA (or equivalent) from a top international business school, or be enrolled in one and finish before starting at Yale. Concurrent-degree applicants who have not finished their MBA must have completed its core curriculum, or their Global Network school must count the Yale credits towards their degree. Work experience strengthens an application; the programme is aimed at early- to mid-career professionals",
      "GMAT or GRE: required, with an official score report and no minimum score (GMAT code 3TJ-BX-39, GRE code 0818)",
      "Application materials: transcripts from all university study including your MBA school (unofficial copies to apply; notarised English translations where needed), one professional recommendation sent from the recommender's work email, a confirmation letter from your MBA dean or director that you are in good standing, a one-page résumé, four short essays of up to 300 words, video questions and a US$95 application fee. Shortlisted candidates are interviewed over Zoom",
      "English proficiency (MAM): the MAM application requirements and FAQ we checked do not list an English test or minimum score; non-English transcripts must be translated into English",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master's in Asset Management (MMS)",
    slug: "yale-som-masters-asset-management",
    level: "Master",
    field: "Finance",
    duration: "Nine months full-time (four seven-week modules from fall to spring)",
    tuitionNote: `${SOM_COA("Master's in Asset Management")}`,
    description:
      "Yale SOM's Master's in Asset Management is a nine-month, quantitatively intense programme for early-career professionals, developed by the late David Swensen, Yale's former chief investment officer, and finance professor Tobias Moskowitz. It has three parts: coursework, a practical experience requirement and a year-long colloquium. Required courses in the sample schedule are Quantitative Investing, Statistical Foundations, Financial Econometrics, Machine Learning, Behavioral Finance and Business Ethics, taught mostly by SOM finance faculty, and electives designed for the programme and often taught by investment practitioners include ESG Investing, Macro Finance, Financial Regulation, Fixed Income Strategies, Hedge Fund Strategies, Portfolio Management, Venture Capital and Private Equity and Macro Strategies. Students can also take MBA electives and courses elsewhere at Yale, or approved graduate courses in computer science, economics, mathematics or statistics. In the spring, every student completes at least 40 hours of practical experience, for example an internship with an asset management firm, research with an SOM professor or an investment case competition",
    officialProgramUrl: "https://som.yale.edu/programs/mms-asset-management",
    degree: "Master of Management Studies (MMS) in Asset Management",
    intake: "Fall 2027 (one intake a year)",
    applicationDeadline:
      "2026-27 application cycle: 7 January 2027. Interviews are by invitation on a rolling basis after review",
    admissionRequirements: [
      "Academic record: transcripts from every institution where you earned university-level credit (unofficial copies to apply; official ones only if you enrol). There is no required major or prerequisite course, but Yale SOM recommends preparation in multivariable calculus, linear or matrix algebra, microeconomic theory, probability and statistics, and programming, and asks applicants to note this coursework; admitted students can use a summer self-study programme",
      "GMAT or GRE: required, with no preference between them and no minimum score; online and in-person versions are accepted and an official report must be sent",
      "Application materials: two recommendations (one academic and one professional or applied), a one-page résumé and detailed work experience section, an essay on your interest in asset management, and Kira video and written responses completed after you submit and pay the application fee. A roughly 30-minute behavioural interview with Yale SOM staff, by invitation, is required for admission; it does not include technical finance questions",
      "English proficiency (Master's in Asset Management): if your native language is not English and you have not completed a degree in an English-speaking country, submit a TOEFL, Duolingo English Test or IELTS score no more than two years old when you apply. No minimum score is published. Applicants from countries where English is an official language may be waived if their whole degree was taught in English; English-medium study in countries where English is not official does not qualify",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in Public Policy (MPP) in Global Affairs",
    slug: "yale-jackson-mpp-global-affairs",
    level: "Master",
    field: "Public Policy",
    duration: "2 years full-time (16 credits), with a summer internship or project between the years",
    tuitionNote:
      "2026-27: Jackson School tuition for full-time study is US$65,100 a year, but every MPP student's tuition is fully covered by a Jackson tuition fellowship, external funding or both, so MPP students pay no tuition. The school's 2026-27 nine-month cost estimate is US$96,744: US$65,100 tuition, a US$220 student activity fee, US$3,764 for medical cover, US$21,510 for housing and food, US$1,440 for academic supplies, US$2,475 for personal costs and US$2,235 for transportation, leaving about US$31,644 of non-tuition costs (our sum). Admitted students can ask for merit-based and need-aware living stipends before the enrolment deadline, and up to US$6,000 of summer funding is available for unpaid or underpaid internships",
    description:
      "The Yale Jackson School of Global Affairs' two-year MPP prepares students for leadership in government, international organisations, NGOs and the private sector, with an average class of about 40. Students complete 16 credits, including four core courses taken in the first year: History and Global Affairs, Applied Methods of Analysis (statistics for policy research, with a diagnostic exemption exam), Economics for Global Affairs (after microeconomics and macroeconomics foundation courses unless exempt) and Comparative Politics for Global Affairs. A professional writing programme runs through the core, and second-year students take a leadership and ethics workshop. The rest of the degree is electives from across Yale, and joint degrees are offered with Yale Law School, Yale SOM, the School of the Environment and the School of Public Health. Students must also reach Level 4 proficiency in a modern language other than English (Jackson will fund an approved accelerated Middlebury summer course), complete a policy-related summer internship or research project, and keep a High Pass average with at least two Honors grades",
    officialProgramUrl: "https://jackson.yale.edu/academics-admissions/master-public-policy",
    degree: "Master in Public Policy (MPP) in Global Affairs",
    intake: "Fall 2027 (full-time and residential only)",
    applicationDeadline:
      "For fall 2027 entry the Jackson School's application portal says the two-year MPP application 'typically closes around January 1'; the exact closing date was not shown on the public admissions pages when we checked, so confirm it in the portal (apply.jackson.yale.edu) before applying. You can apply to only one Jackson degree programme per year",
    admissionRequirements: [
      "A bachelor's degree (or equivalent) completed before matriculation. There are no minimum GPA, GRE or work-experience requirements and no required course of study, although some coursework is quantitative",
      "GRE General Test: required for the MPP (optional only for the joint BA-BS/MPP), with all verified formats accepted, no minimum score and no waivers; scores are valid for five years from the test date to the date you apply",
      "Application materials: transcripts for all degree-credit study (copies to apply; English translations where needed), a one- to two-page résumé, three letters of recommendation (one academic, one professional and a third of your choice), a 500-word essay and a 250-word career interests statement. An alumni interview is optional",
      "English proficiency (Jackson MPP): applicants whose native language is not English must take the TOEFL, IELTS, Duolingo English Test or Cambridge English, unless they studied full-time and in residence for at least two years at an English-medium university. Recommended minimums are TOEFL iBT 5.0 on the new scale or 102 on the old scale (610 paper-based), IELTS 7.0, Duolingo 130 and Cambridge C1 Advanced 193",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Environmental Management (MEM)",
    slug: "yale-school-environment-mem",
    level: "Master",
    field: "Environmental Management",
    duration: "2 years full-time (48 credits)",
    tuitionNote:
      "2026-27 (single full-time student): MEM tuition is US$55,960 for the year. The School of the Environment's estimated budget totals US$83,213: tuition, a US$375 student activity fee, a US$135 IT fee, an estimated US$3,764 for medical insurance, US$15,895 for living expenses, US$4,834 for miscellaneous personal costs, US$530 for books and supplies and US$1,720 for transportation. The financial aid application deadline is 1 February, and named scholarships include the Bekenstein Climate Leaders Program and the Three Cairns Climate Program for the Global South",
    description:
      "The Yale School of the Environment's MEM combines natural and social science coursework with management and policy to train students to solve environmental and natural resource problems. Every student chooses at least one specialisation, which accounts for 18 of the 48 credits: Business and the Environment; Climate Change Science and Solutions; Ecosystem Management and Conservation; Energy and the Environment; Environmental Policy Analysis; Industrial Ecology and Green Chemistry; People, Equity, and the Environment; Urban; or Water Resource Science and Management. A second specialisation can be added. The programme begins with MODs, a two-week summer orientation in New Haven and Connecticut's forests, and waiver exams in four foundational knowledge areas; first-year students take a Perspectives course and any foundational courses they did not waive, declare their specialisation by the end of the first term and complete Professional Skills Modules each semester. A required summer work experience follows the first year, and every student completes a capstone course or independent capstone project in the second year. Students choose from more than 100 YSE courses as well as courses across Yale",
    officialProgramUrl: "https://environment.yale.edu/academics/masters/mem",
    degree: "Master of Environmental Management (MEM)",
    intake: "Fall 2027, starting with the MODs summer orientation",
    applicationDeadline:
      "1 December 2026 at 11:59 pm Eastern time for guaranteed consideration, with all materials and letters of recommendation submitted by then. Admitted students must pay a non-refundable US$500 enrolment deposit by the deposit deadline (15 April), and YSE does not grant extensions",
    admissionRequirements: [
      "A four-year bachelor's degree from an accredited US institution or the international equivalent; three-year international degrees are eligible subject to an equivalency evaluation. A WES or ECE evaluation is encouraged but not required for degrees from outside the US and Canada. YSE gives special weight to relevant experience after college and to clear career goals in the personal statement",
      "Application materials: the online application, essays and statements, a résumé or CV, three letters of reference and transcripts (notarised English translations where needed). There is no application fee. The GRE, GMAT and LSAT are optional",
      "English proficiency (YSE): the TOEFL or IELTS is required if your native language is not English or English was not the main language of instruction for your undergraduate degree. Minimums are TOEFL iBT 100 on the 0-120 scale or 5.0 on the new 1-6 scale, or IELTS 7.0 overall with at least 6.5 in each section; the Duolingo English Test is not accepted. A waiver can be requested only if your whole bachelor's degree was taught at an institution whose official language of instruction is English",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Health (MPH)",
    slug: "yale-school-public-health-mph",
    level: "Master",
    field: "Public Health",
    duration: "2 years full-time (four semesters plus an applied practice experience)",
    tuitionNote:
      "2026-27: the two-year MPH charges tuition of US$57,256 a year (billed half in fall and half in spring) plus a US$675 programme fee. The School of Public Health's estimated 2026-27 budget for a single student in either year is US$86,063: US$57,931 in tuition and fees, US$1,456 for books and supplies, US$3,764 for health insurance, US$17,862 for housing and food, US$4,800 for personal expenses and US$250 for local transportation. Tuition usually rises slightly each year. All admitted students are reviewed automatically for the Horstmann merit scholarship and told of eligibility within 10 days of admission",
    description:
      "The Yale School of Public Health's two-year MPH starts with a core of five courses and two professional leadership seminars covering biostatistics, epidemiology, the social and structural determinants of health inequities, and health policy and health care systems, plus the online Public Health Primer. Each student applies to one of six departments, Biostatistics, Chronic Disease Epidemiology, Environmental Health Sciences, Epidemiology of Microbial Diseases, Health Policy and Management or Social and Behavioral Sciences, or to the Health Care Management programme, and can add a concentration or track such as Global Health, Public Health Modeling, Implementation Science, US Health and Justice, or Climate Change and Health. Every MPH student completes a Public Health Practice experience, and the second year usually includes a master's thesis or capstone project. The programme is meant to be completed full-time, although part-time study can be approved case by case",
    officialProgramUrl: "https://ysph.yale.edu/school-of-public-health/graduate-programs/master-of-public-health-mph-degree/",
    degree: "Master of Public Health (MPH)",
    intake: "Fall 2027",
    applicationDeadline:
      "15 December 2026, through SOPHAS (the Schools of Public Health Application Service, which opens in late August). Only the application itself must be submitted by that date; transcripts, WES evaluations and recommendation letters can arrive afterwards, although SOPHAS verification takes two to four weeks and WES evaluations should be requested at least six weeks before the deadline",
    admissionRequirements: [
      "A Bachelor of Arts or Bachelor of Science degree or the foreign equivalent, in any discipline. YSPH weighs academic ability, public health experience (paid or unpaid) and commitment to the field equally and has no minimum GPA or test score",
      "GRE: waived for the current admission cycle. Instead, applicants to every department except Biostatistics submit a half-page Description of Quantitative Experience and Ability plus verification such as research abstracts or project deliverables; Biostatistics applicants need multivariable calculus and linear algebra with a grade of B or better",
      "Application materials: the SOPHAS application, official transcripts from every school attended (with a WES course-by-course evaluation for degrees from outside the US or Canada), three letters of recommendation and a statement of purpose and objectives",
      "English proficiency (YSPH MPH): the TOEFL is required if your degree was not taught in English; YSPH accepts only the TOEFL, not IELTS. The minimum is 5.5 on the new 1-6 scale, which YSPH equates to roughly 107 or more on the old 0-120 scale, and TOEFL takers also answer brief video questions. If your degree was taught in English, you simply do not submit a TOEFL",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science",
    slug: "yale-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "Normally 1 year full-time (coursework option) or 2 years (thesis option)",
    tuitionNote:
      "2026-27: Graduate School of Arts and Sciences tuition for full-time study is US$52,400. GSAS's 2026-27 cost of education for the fall and spring terms is US$86,429 for a single student: tuition plus US$34,029 of living costs (US$23,317 for housing and food, US$1,800 for books and supplies, US$2,844 for personal expenses, US$3,764 for the graduate medical plan and US$2,304 for transportation). The second year of the thesis option adds another year of tuition and living costs. GSAS says most master's students do not receive Graduate School funding and pay their own tuition, although some programmes offer limited support; master's students registered at least half time get Yale Health Student Basic Coverage",
    description:
      "Yale's Department of Computer Science admits students directly to a terminal M.S. with two options. The coursework-only option requires eight courses at the 5000 level or above from the department's approved list, with an average grade of at least High Pass and at least one Honors; it normally takes one year, and a part-time version can be spread over up to four years. The thesis option requires six approved courses at the 5000 level or above (High Pass average with at least two Honors), a research thesis, generally in the second year, and four terms as a teaching assistant, and normally takes two years. Graduate courses listed in the 2026-2027 GSAS catalogue range from lattice-based cryptography and large-scale distributed systems to computer music. For more information the department points to cpsc.yale.edu",
    officialProgramUrl: "https://catalog.yale.edu/gsas/degree-granting-departments-programs/computer-science/",
    degree: "Master of Science (M.S.) in Computer Science",
    intake: "Fall 2027",
    applicationDeadline:
      "2 January 2027 at 11:59 pm Eastern time for fall 2027 entry (also the final date for application fee waiver requests). Departments review applications after the deadline, decisions are released between February and March 2027, and the reply deadline for most offers is 15 April 2027. Recommendation letters have no fixed deadline but should be submitted promptly",
    admissionRequirements: [
      "A bachelor's degree, with an online application to the Yale Graduate School of Arts and Sciences including a statement of academic purpose, unofficial transcripts from every college attended (official ones are not needed to apply), three letters of recommendation and a résumé or CV, plus a US$105 non-refundable application fee (waivers are possible for documented financial hardship or programmes such as AmeriCorps, Peace Corps or Pell Grants)",
      "GRE General Test: required for the MS in Computer Science (it is not accepted for the PhD); send official scores to institution code 3987 and schedule the test by November. GSAS sets no minimum GRE score",
      GSAS_ENGLISH,
    ],
  },
];
