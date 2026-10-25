import type { Program } from "../../programs";

// University of Michigan, Ann Arbor (Ann Arbor, Michigan): 10 undergraduate majors for fall 2027 first-year entry and 5 well-known master's programs.
// Sources: U-M Office of Undergraduate Admissions (international requirements and deadlines, first-year application plans, application changes for
// fall 2027, exams and English proficiency, costs), the Office of Financial Aid's 2026-27 cost of attendance, the Office of the Registrar's 2026-27
// tuition tables, the Provost's FY2027 (2026-27) tuition and fee schedule, the College of Engineering Bulletin 2026-2027 and department pages
// (CSE, ECE, ME, Aerospace, IOE), the Michigan Ross BBA, Full-Time MBA and MBAn pages, the LSA major pages, Rackham Graduate School admissions
// pages and the School of Information MSI pages (viewed October 25, 2026). Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "university-of-michigan",
  universityName: "University of Michigan",
  country: "United States",
  language: "English",
  campus: "Ann Arbor",
  programType: "Full-time",
} as const;

// Shared 2026-27 living-cost allowances from the Office of Financial Aid (two semesters, fall and winter).
const UG_LIVING =
  "U-M Financial Aid's 2026-27 budget adds US$17,220 for living expenses (based on a residence hall and the unlimited meal plan), US$1,220 for books and supplies, US$400 for transportation and US$2,458 for personal costs";

const INTL_NOTE =
  "Students on F or J visas also pay a US$500 International Fee each term. U-M says international students on temporary visas are not eligible for financial aid, are expected to pay the full cost of attendance, and that scholarships are generally not available";

const UG_TUITION_ENGINEERING =
  `2026-27 (fall 2026 and winter 2027, the latest published rates): College of Engineering non-resident tuition and required fees are US$33,744 per term in the lower division (0-54 credits) and US$37,859 per term in the upper division (55+ credits), so about US$67,488 a year for the first two years and US$75,718 after that (the Registrar's tuition-only rates are US$33,497 and US$37,612 per full-time term of 12-18 credits). International students pay the non-resident rate. ${UG_LIVING}, which puts a first-year engineering budget at roughly US$88,800 (our total of the official figures). ${INTL_NOTE}. Rates for 2027-28 are set by the Regents each June`;

const UG_TUITION_LSA =
  `2026-27 (fall 2026 and winter 2027, the latest published rates): College of Literature, Science, and the Arts non-resident tuition and required fees are US$67,096 a year in the lower division (0-54 credits) and US$71,798 in the upper division (55+ credits); international students pay the non-resident rate. ${UG_LIVING}, for an official estimated non-resident cost of attendance of US$88,394 (lower division) or US$93,096 (upper division). ${INTL_NOTE}. Rates for 2027-28 are set by the Regents each June`;

const UG_TUITION_ROSS =
  `2026-27 (fall 2026 and winter 2027, approved by the Regents in June 2026): Ross lists BBA tuition for non-Michigan residents and international students of US$67,730 a year in the lower division (0-54 credits) and US$75,836 in the upper division (55+ credits); with required university fees the per-term charge is US$34,112 and US$38,165. ${UG_LIVING} (Financial Aid notes book costs for business students are usually higher), so a first-year budget is roughly US$89,500 (our total of the official figures). ${INTL_NOTE}. Ross says 2027-28 rates and budgets will be available in July 2027`;

const UG_INTAKE =
  "Fall term (classes start in late August or early September). U-M also lists winter, spring and summer deadlines, but first-year students normally start in the fall";

const UG_DEADLINE =
  "Fall 2027 entry, via the Common Application with a US$75 fee (international students are not typically eligible for fee waivers). U-M offers three plans: Early Decision (binding; apply by 1 November 2026, decision by 24 December, enrolment deposit due 6 January 2027), Early Action (non-binding; apply by 1 November 2026, decision by 29 January 2027) and Regular Decision (apply by 1 February 2027, decision by 2 April 2027). Early Action and Regular Decision admits have until 1 May 2027 to commit. If you choose Early Decision, you, a parent or guardian and your counsellor must sign the agreement, and you must withdraw all other applications if admitted. All required materials must arrive by the deadline for your plan";

const UG_TESTING =
  "Testing: test-optional for fall 2027. SAT/ACT scores are considered only if you ask for them on the application (self-reported scores are accepted, and U-M superscores); Early Decision/Early Action applicants must report them by 1 November. Applicants are not disadvantaged without scores. AP, IB and other international exam results are considered in context with your academic record either way";

const UG_ENGLISH =
  "English proficiency (if English is your second language): TOEFL iBT in the 100 range with 23+ in listening and reading and 21+ in speaking and writing (or 5-6 with 5+ in every section on the scale used from 21 January 2026); IELTS 7.0 range with 6.5+ in each section; PTE Academic 68; MET 64 with 59+ in each section; C1 Advanced or C2 Proficiency 185 with 180+ in all sections; or an ECPE certificate. The Duolingo English Test is not accepted. You can be exempt with SAT Evidence-Based Reading and Writing 650+ (or ACT Reading and English 27+) plus at least four recent years of rigorous study in a listed English-speaking country. U-M does not offer conditional admission with English make-up courses";

const UG_ACADEMIC =
  "Application materials: Common Application with the U-M essays, high school transcript (with an official English translation if not in English), School Report and one teacher evaluation (a counsellor recommendation is encouraged). Review is holistic, looking at grades, course rigour, recommendations, activities and essays";

const ENGINEERING_ROUTE = (major: string, extra = "") =>
  `School and admission route: apply to the College of Engineering, a first-year admitting unit. Engineering students start undeclared and can declare ${major} after at least one full term at Ann Arbor with a U-M GPA of 2.0 or better, good standing and credit for calculus, calculus-based physics or chemistry and a first-year engineering course (ENGR 100/101/151), with a C or better in every maths, science and engineering course taken${extra}`;

const LSA_ROUTE = (extra: string) =>
  `School and admission route: apply to the College of Literature, Science, and the Arts (LSA). LSA students choose their major after enrolling. ${extra}`;

const GRAD_LIVING =
  "U-M Financial Aid's 2026-27 graduate budget adds US$22,276 for living expenses, US$1,388 for books and supplies, US$400 for transportation and US$7,184 for personal costs (about US$31,248 for fall and winter)";

const GRAD_TUITION_ENGINEERING =
  `2026-27 (fall 2026 and winter 2027, the latest published rates): the Registrar's Rackham tuition rate for College of Engineering graduate students is US$33,467 per full-time term (9+ credits) for non-residents, including international students, or about US$33,714 with required fees, so roughly US$67,400 for the two-term academic year. ${GRAD_LIVING}. Students on F or J visas also pay a US$500 International Fee each term. Admission to the master's program does not come with department funding`;

const RACKHAM_ENGLISH =
  "English proficiency: needed if your native language is not English, unless you completed your whole undergraduate (or graduate) degree at an institution that teaches only in English, are a native speaker or are a current U-M student. Scores are valid for two years and must reach Rackham from the testing agency by the program deadline";

export const universityOfMichiganPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (College of Engineering)",
    slug: "umich-computer-science-engineering",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's BSE in Computer Science, run by the Computer Science and Engineering division for College of Engineering students, builds a solid base in software, hardware and theory. After the engineering core of calculus, physics, chemistry and programming, students take discrete maths, data structures and algorithms, computer organisation, statistics and foundations of computer science, then 15 credits of upper-level CS electives (optional tracks cover areas such as AI, security, game development and data) and a major design experience. A CS degree is also offered through LSA.",
    officialProgramUrl: "https://cse.engin.umich.edu/academics/undergraduate/majors/computer-science-eng-major/",
    degree: "Bachelor of Science in Engineering (BSE) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Computer Science", ". For fall 2027 entry U-M has removed the separate advance selection process for computer science in Engineering and LSA; the CS-Eng program guide lists the declaration requirements"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Engineering",
    slug: "umich-computer-engineering",
    level: "Bachelor",
    field: "Computer Engineering",
    duration: "4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's ABET-accredited BSE in Computer Engineering covers the analysis, design and use of information processing systems, from circuits and logic design to software. On top of the engineering core, students take discrete maths, circuits, signals and systems, logic design, programming and data structures, computer organisation and probability, then choose upper-level electives in areas such as computer architecture, embedded systems, VLSI, operating systems and networking. A major design experience, taken alongside a design course and advanced technical communication, completes the degree.",
    officialProgramUrl: "https://ece.engin.umich.edu/academics/undergraduate/majors-minors/computer-engineering-major/",
    degree: "Bachelor of Science in Engineering (BSE) in Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Computer Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "umich-electrical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's ABET-accredited BSE in Electrical Engineering gives a grounding in the theory and technology behind circuits, signals, electromagnetics, power and communications. Required courses include two systems design courses, circuits, signals and systems, electromagnetics, programming and probability, followed by 19 credits of upper-level EE electives. Optional paths of study include power and energy, robotics, optics and photonics, embedded systems, signal and image processing and VLSI chip design, and every student completes a hands-on major design experience such as a DSP, microwave or VLSI lab.",
    officialProgramUrl: "https://ece.engin.umich.edu/academics/undergraduate/majors-minors/electrical-engineering-major/",
    degree: "Bachelor of Science in Engineering (BSE) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Electrical Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science (College of Engineering)",
    slug: "umich-data-science-engineering",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (128 credits, at least 42 in the major)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's BSE in Data Science, run by Computer Science and Engineering for College of Engineering students, combines computer science, statistics and maths for working with large and complex data. The 30-credit core covers discrete maths, programming and data structures, algorithms, probability and statistics, applied regression, databases and machine learning or data mining, plus a data science applications elective. Students add advanced data science electives and a capstone course. LSA offers a parallel Data Science major through its Department of Statistics.",
    officialProgramUrl: "https://cse.engin.umich.edu/academics/undergraduate/majors/data-science-eng-major/",
    degree: "Bachelor of Science in Engineering (BSE) in Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Data Science"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "umich-mechanical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's ABET-accredited BSE in Mechanical Engineering is built around 45 credits of core courses in five areas: design and manufacturing, mechanics and materials, dynamics and controls, thermal sciences, and labs with technical communication. Students take a three-course design and manufacturing sequence and two lab courses, plus circuits, advanced maths, technical electives and a specialization elective. Optional concentrations in Energy, Manufacturing Systems and Robotics let students focus their upper-level electives, and dual degrees with other engineering programs are possible.",
    officialProgramUrl: "https://me.engin.umich.edu/academics/undergrad/handbook/bachelors/",
    degree: "Bachelor of Science in Engineering (BSE) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Mechanical Engineering", " (the ME department also asks for a C or better in any ME requirement taken before declaring)"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Aerospace Engineering",
    slug: "umich-aerospace-engineering",
    level: "Bachelor",
    field: "Aerospace Engineering",
    duration: "4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's ABET-accredited BSE in Aerospace Engineering covers aerodynamics and propulsion, lightweight structures, flight dynamics and control, and aerospace software, applied to the design of aircraft, spacecraft and other vehicles. Courses run from an introduction to the aerospace enterprise, gas dynamics and aerospace structures to control of aerospace vehicles, and the program ends with a capstone in aircraft design or space system design. Technical and general electives let students go deeper in areas such as propulsion, structural mechanics, astrodynamics or embedded systems.",
    officialProgramUrl: "https://aero.engin.umich.edu/undergraduate/",
    degree: "Bachelor of Science in Engineering (BSE) in Aerospace Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Aerospace Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial and Operations Engineering",
    slug: "umich-industrial-operations-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "Michigan's ABET-accredited BSE in Industrial and Operations Engineering teaches students to optimise complex systems and processes using data analytics, optimisation and human-centred engineering. Required IOE courses include operations modelling, engineering probability and statistics, optimisation methods, ergonomics, Markov processes, linear statistical models, data processing and simulation, plus a senior design course and technical communication. Students also take engineering courses from other departments and 19 credits of technical electives, with an optional Financial Engineering concentration.",
    officialProgramUrl: "https://ioe.engin.umich.edu/undergraduate/major-in-ioe/",
    degree: "Bachelor of Science in Engineering (BSE) in Industrial and Operations Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Industrial and Operations Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Administration (Ross BBA)",
    slug: "umich-ross-bba",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_ROSS,
    description:
      "The Michigan Ross Bachelor of Business Administration is a four-year program in which first-year students start business classes straight away. Of the 120 credits, at least 62 are business and 54 non-business. A fixed core taken with a cohort covers accounting, business communication, analytics and statistics, strategy, business law and ethics, behavioural management and operations, alongside floating core courses in applied economics, finance, marketing and information systems. Students then add business electives, a distribution requirement and a capstone in the winter of senior year.",
    officialProgramUrl: "https://michiganross.umich.edu/undergraduate/bba",
    degree: "Bachelor of Business Administration (BBA)",
    intake: UG_INTAKE,
    applicationDeadline:
      "Fall 2027 entry: choose the Ross School of Business as your first-year admitting unit on the Common Application (US$75 fee) and submit the Ross Admissions Portfolio by your deadline. Early Decision (binding) and Early Action close on 1 November 2026, with decisions in late December and late January; Regular Decision closes on 1 February 2027, with decisions in early April. Early Decision admits must accept by mid-January; Early Action and Regular Decision admits have until 1 May 2027",
    admissionRequirements: [
      "School and admission route: Ross is a first-year admitting unit, and about 80% of each BBA class enrols straight from high school. You select either the BBA or the Integrated Business and Engineering program on the Common Application, write the U-M essays (the second supplemental essay should explain your interest in business) and complete the Ross Admissions Portfolio: a business case discussion of about 500 words and an artifact with a description of about 250 words. Ross reports 13,019 applicants and 924 admits for fall 2025",
      "First-year conditions: complete a calculus course and, by the end of winter term, a U-M First-Year Writing course and ECON 101 (each with C- or better), pass the first-year Ross core (BA 100, BCOM 250, ACC 300) and keep a GPA of at least 2.5",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "umich-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (120 credits; the major is at least 30 credits)",
    tuitionNote: UG_TUITION_LSA,
    description:
      "Economics at Michigan is an LSA major leading to a BA (A.B.) or, with 60 credits in science and maths, a BS. After prerequisites in introductory micro- and macroeconomics and calculus, the 30-credit major covers intermediate microeconomic and macroeconomic theory, a statistics course and an econometrics course at basic, intermediate or advanced level, and 15 credits of upper-level electives, at least nine at the 400 level. Students with a GPA of 3.4 or higher can join the Honors plan, which adds higher-level statistics and econometrics courses and a senior thesis.",
    officialProgramUrl: "https://lsa.umich.edu/lsa/academics/majors-minors/economics-major.html",
    degree: "Bachelor of Arts (A.B.) or Bachelor of Science (B.S.) with a major in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LSA_ROUTE("To declare Economics you must complete ECON 101, ECON 102 and MATH 115 (or an approved alternative), each with a C or better, and keep a GPA of 2.0 or better in the major. AP economics credit does not replace ECON 101 or 102"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Psychology",
    slug: "umich-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "4 years full-time (120 credits; the major is at least 32 credits)",
    tuitionNote: UG_TUITION_LSA,
    description:
      "Psychology at Michigan is an LSA major leading to a BA (A.B.) or BS. Beyond the prerequisites, the major needs at least 32 credits: one course from each of three breadth groups (such as biopsychology or cognition, development or psychopathology, and social or personality psychology), a six-credit lab requirement met through methods labs, community or research labs or a thesis sequence, and at least four upper-level electives. Students with a GPA of 3.4 or higher can apply to the Honors major and write a research thesis with a faculty mentor.",
    officialProgramUrl: "https://lsa.umich.edu/lsa/academics/majors-minors/psychology-general-social-science-major.html",
    degree: "Bachelor of Arts (A.B.) or Bachelor of Science (B.S.) with a major in Psychology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LSA_ROUTE("To declare Psychology you need an introductory course (PSYCH 111, 112 or 114) with a C or better and a statistics course (DATASCI 101, STATS 250 or STATS 280) with a C- or better. Psychology majors cannot also major in Biopsychology, Cognition, and Neuroscience"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science and Engineering",
    slug: "umich-ms-computer-science-engineering",
    level: "Master",
    field: "Computer Science",
    duration: "Full-time, 30 graduate credits (length depends on course load)",
    tuitionNote: GRAD_TUITION_ENGINEERING,
    description:
      "Michigan's MS/MSE in Computer Science and Engineering is a 30-credit Rackham degree from the CSE division. Students take at least 24 credits of approved technical courses, including 15 credits of CSE courses at the 500 level or above, and must cover four of five breadth areas: hardware, artificial intelligence, software systems, theory and human-centred computing. A master's thesis is optional, every course needs a B- or better and students keep a 3.0 GPA. The MS and MSE have the same requirements; the MSE is open to those with an engineering bachelor's degree.",
    officialProgramUrl: "https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/",
    degree: "Master of Science (MS) or Master of Science in Engineering (MSE) in Computer Science and Engineering",
    intake: "Fall term only (late August)",
    applicationDeadline:
      "Fall 2027 entry: apply through the Rackham Graduate School by 15 January 2027 at 11:59 p.m. ET (application fee US$90 for non-US citizens; CSE offers no master's fee waivers this cycle). Offers go out by email from January to April, and admitted master's students must reply to Rackham by 1 May 2027. CSE does not admit master's students for winter or spring/summer",
    admissionRequirements: [
      "A bachelor's degree by the time you enrol and a strong background in computer science or a related field (most successful applicants studied computer science, engineering, physics or maths). Successful applicants usually have a GPA of at least 3.5/4.0, though this is not a hard cut-off. You cannot apply if you already hold an MS or PhD in computer science or an equivalent field",
      "Application materials: statement of purpose (up to 3 pages), personal statement (up to 500 words), resume, three letters of recommendation through the online system and transcripts. GRE scores are not required and are not considered",
      `${RACKHAM_ENGLISH}. CSE does not publish a higher minimum score on its admissions pages`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Electrical and Computer Engineering",
    slug: "umich-ms-electrical-computer-engineering",
    level: "Master",
    field: "Engineering",
    duration: "1-2 years full-time (30 credits)",
    tuitionNote: GRAD_TUITION_ENGINEERING,
    description:
      "Michigan's MS/MSE in Electrical and Computer Engineering is a 30-credit program for students who want to deepen their skills in one field of ECE. Students choose one of 13 areas of emphasis: applied electromagnetics and RF circuits, computer vision, control systems, embedded systems, integrated circuits and VLSI, MEMS and microsystems, networks and communication, optics and photonics, power and energy, quantum engineering, robotics, signal and image processing and machine learning, or solid-state and nanotechnology. A thesis is optional, and the MSE is open to engineering graduates.",
    officialProgramUrl: "https://ece.engin.umich.edu/academics/graduate-programs/prospective-grad-students/about-the-masters-program/",
    degree: "Master of Science (MS) or Master of Science in Engineering (MSE) in Electrical and Computer Engineering",
    intake: "Fall term only (late August)",
    applicationDeadline:
      "Fall 2027 entry: apply through the Rackham Graduate School by 15 January 2027 (application fee US$90 for non-US citizens). ECE accepts applications for the fall term only",
    admissionRequirements: [
      "An undergraduate degree equivalent to a US bachelor's in engineering, physics or maths, typically with a GPA of at least 3.5/4.0 and strong grades in fundamentals such as calculus and physics and in your chosen technical area. You cannot apply if you already hold an MS or PhD in ECE. Admitted MS students for 2025-26 averaged a 3.7 GPA",
      "GRE: required if your undergraduate degree is from a non-US institution (not required for US graduates); ECE looks for scores at the 50th percentile or higher in all three sections, less than five years old. Admitted MS students for 2025-26 averaged 168 quantitative, 155 verbal and 3.6 writing",
      "Application materials: three letters of recommendation (at least two from faculty or course instructors), an academic statement of purpose, a personal statement and transcripts",
      `${RACKHAM_ENGLISH}. ECE's minimum scores are TOEFL iBT 84, IELTS 6.5 or MELAB 80`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "umich-ross-full-time-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time (57 credits)",
    tuitionNote: `2026-27 (fall 2026 and winter 2027, the latest published rates): the Provost's tuition and fee schedule lists non-resident Full-Time MBA tuition and required fees of US$42,040 per term, about US$84,080 a year; international students pay the non-resident rate, plus a US$500 International Fee each term on an F or J visa. ${GRAD_LIVING}; Ross may publish its own budget for MBA students. All admitted applicants are reviewed for merit scholarships`,
    description:
      "The Michigan Ross Full-Time MBA is a two-year, 57-credit program. The first year is a sequenced core in financial and management accounting, applied microeconomics, business statistics, corporate strategy, marketing, financial management, operations and organisational behaviour, and ends with the seven-week Multidisciplinary Action Projects (MAP), in which teams consult on a real business problem for a company. After a summer business experience, the second year is mainly electives, with optional concentrations such as AI, ESG, data and business analytics, and a STEM-designated management science specialization.",
    officialProgramUrl: "https://michiganross.umich.edu/graduate/full-time-mba/curriculum",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall term (orientation in August)",
    applicationDeadline:
      "Class of 2029 (fall 2027 entry), all at 11:59 p.m. ET: Round 1 closes 8 September 2026 (decision 11 December 2026), Round 2 closes 4 January 2027 (decision 19 March 2027) and Round 3 closes 29 March 2027 (decision 14 May 2027). International applicants can apply in any round, but Ross suggests an earlier round if your visa may take longer. Application fee US$250 (waived for some groups, including citizens of UN least-developed countries)",
    admissionRequirements: [
      "The equivalent of a US four-year bachelor's degree (a three-year degree is accepted from regions where that is the norm), with transcripts and degree documents (certified English translations if needed)",
      "Quantitative readiness: either a GMAT, GRE or Executive Assessment score (no minimum; the highest total is used) or a Statement of Quantitative Academic Readiness in place of a test, with no pre-approval needed",
      "Application materials: a one-page resume, two essays (career aspirations, 300 words; impact and growth, 200 words), one recommendation on the GMAC Common Recommendation Form, ideally from a supervisor, and an interview by invitation with an alum or current student",
      "English proficiency (if your native language is not English): TOEFL iBT, PTE, IELTS or Duolingo English Test, or an essay showing alternative evidence such as at least a year of work in English within the past three years. You are exempt if your undergraduate degree was taught primarily in English",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Analytics (MBAn)",
    slug: "umich-ross-master-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "10 months full-time (36.5 credits; summer, fall and winter terms)",
    tuitionNote:
      "Cohort starting summer 2027 (the latest published rate): the Provost's tuition and fee schedule lists a full-program price of US$74,842 for non-residents, including international students, covering tuition and required fees for the whole program; students on F or J visas also pay a US$500 International Fee each term. Living costs in Ann Arbor are extra (U-M Financial Aid's 2026-27 graduate budget allows US$22,276 for living expenses over fall and winter, plus books, transport and personal costs)",
    description:
      "The Michigan Ross Master of Business Analytics is a 10-month, 36.5-credit program that balances data analytics with business fundamentals. It starts in June with data programming, advanced spreadsheets, probability and statistics and a business immersion. The fall term covers predictive analytics, data visualisation, data architecture, unsupervised learning, causal inference, accounting, decision strategies and project management, and the winter brings prescriptive analytics, information security and ethics, electives and a consulting studio with a real sponsor organisation.",
    officialProgramUrl: "https://michiganross.umich.edu/graduate/master-of-business-analytics/curriculum",
    degree: "Master of Business Analytics (MBAn)",
    intake: "Summer term (cohorts start in June)",
    applicationDeadline:
      "Summer 2027 start, all at 11:59 p.m. ET: Round 1 closes 11 September 2026, Round 2 on 23 October 2026, and Round 3 on 4 January 2027 (the final round for international applicants not already on a US student visa). Round 4 (19 February 2027) is the last for international applicants in active F-1 status in the US; Rounds 5 and 6 (2 April and 14 May 2027) are for domestic applicants only. Application fee US$100",
    admissionRequirements: [
      "A bachelor's degree in a STEM field, business, economics or another quantitative major by the start of the program (most three-year degrees are accepted if equivalent to a US four-year degree). Applicants with a non-US degree must send a WES or ECE course-by-course evaluation",
      "Prerequisite: one college course in computer programming for credit with a C or better, preferably in Python or R (work experience cannot replace it)",
      "Tests: the GMAT/GRE is waived if your cumulative undergraduate GPA is 3.30 or higher; otherwise submit a score taken within the last five years",
      "Application materials: resume, two essays (program and career motivation; community engagement), one recommendation and an asynchronous video interview on Kira Talent",
      "English proficiency (if your native language is not English): TOEFL iBT, IELTS or Duolingo English Test taken within two years of the deadline, unless your entire undergraduate degree was taught only in English",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Information (MSI)",
    slug: "umich-master-science-information",
    level: "Master",
    field: "Information Technology",
    duration: "2 years full-time (48 credits); part-time over 3-4 years possible",
    tuitionNote:
      `2026-27 (fall 2026 and winter 2027, the latest published rates): the Provost's tuition and fee schedule lists non-resident School of Information graduate tuition and required fees of US$31,802 per term, about US$63,604 a year; international students pay the non-resident rate. ${GRAD_LIVING}, matching Financial Aid's official non-resident graduate cost-of-attendance estimate of US$94,852 (which uses the same tuition rate). Students on F or J visas also pay a US$500 International Fee each term. UMSI scholarships are available, with first consideration for applications in by 15 January`,
    description:
      "The University of Michigan School of Information's Master of Science in Information is a 48-credit degree, at least 39 credits of it from UMSI courses, usually completed in two years. Students follow one of five pathways: information and data analytics; libraries, archives and knowledge environments; product management; user-centred application development; or user experience research and design. Everyone starts with problem-solving with people, information and technology and a programming course, completes at least six credits of internships and finishes with a project-based mastery course.",
    officialProgramUrl: "https://www.si.umich.edu/programs/degree-programs/master-science-information",
    degree: "Master of Science in Information (MSI)",
    intake: "Fall term (late August)",
    applicationDeadline:
      "Fall 2027 entry: the final deadline for international applicants is 15 January 2027 (1 March 2027 for international students already enrolled at U-M). Domestic applicants have a 15 January priority deadline and a 1 March final deadline. Application fee US$90 for international applicants",
    admissionRequirements: [
      "A bachelor's degree or international equivalent from an accredited institution in any field; a GPA of at least 3.0/4.0 is recommended, but applicants below that may still be admitted based on the overall application",
      "Application materials: transcripts, three letters of recommendation, a short essay (250 words or less), a personal statement (1-2 pages double-spaced) and a resume. No portfolio is required, and GRE scores are not among the listed materials",
      "English proficiency (non-native speakers, unless your whole degree was taught in English or you are a current U-M student): an official TOEFL (strongly preferred) or IELTS score from the past two years. UMSI recommends TOEFL 5+ overall and in each section on the new scale (102+ with 25+ per section on the previous scale) or IELTS 7.5+",
    ],
  },
];
