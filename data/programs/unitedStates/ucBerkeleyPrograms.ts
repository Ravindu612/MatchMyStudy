import type { Program } from "../../programs";

// University of California, Berkeley (Berkeley, California): 10 undergraduate majors for fall 2027 first-year entry and 5 graduate programs.
// Sources: UC Berkeley Office of Undergraduate Admissions (first-year applicants and policies, dates and deadlines, requirements for international
// students, cost), UC Admissions (dates and deadlines, English language proficiency, application fees), the Office of the Registrar's 2026-27 fee
// schedule, Financial Aid and Scholarships' 2026-27 student budgets and international scholarships pages, the Berkeley International Office 2026-2027
// budget worksheet, the UC Berkeley Undergraduate Catalog program pages and plans of study, Berkeley Engineering's 2026-2027 EECS program, the EECS
// department (EECS BS, CS BA, MEng and MEng application pages), CDSS admissions and Data Science major requirements, the Statistics, Economics,
// Bioengineering and MCB departments, the Haas undergraduate admissions, Spieker degree requirements, Full-time MBA, MBA cost of attendance, MFE
// admissions, curriculum, prerequisites and cost pages, the School of Information MIMS admissions and funding pages, the Statistics MA in Statistics
// and Data Science pages and the Graduate Division's admissions requirements (viewed November 3, 2026). Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "university-of-california-berkeley",
  universityName: "University of California, Berkeley",
  country: "United States",
  language: "English",
  campus: "Berkeley",
  programType: "Full-time",
} as const;

// Registrar 2026-27 undergraduate fee schedule, 2026-27 cohort, nonresident, per semester: tuition 7,101 + student services fee 693 + Berkeley
// campus fee 936 + transit fee 236 + Nonresident Supplemental Tuition 19,635 + Instructional Resilience & Enhancement Fee 141 + health insurance
// 2,533 = 31,275 (new students add a 250 document management fee). Financial Aid 2026-27 residence hall budget (new students): tuition and fees
// 18,214 + housing 16,640 + meal plan 7,000 + SHIP 5,066 + personal expenses 7,754 = 54,674, before the 39,270 nonresident supplemental tuition.
const UG_TUITION =
  "2026-27 (fall 2026 and spring 2027, for undergraduates who entered in 2026-27): Berkeley's registrar bills nonresident undergraduates, including international students, US$31,275 a semester. That is tuition of US$7,101, a US$693 student services fee, a US$936 Berkeley campus fee, a US$236 transit fee, a US$141 instructional resilience and enhancement fee, US$19,635 in Nonresident Supplemental Tuition and US$2,533 for the Student Health Insurance Plan (SHIP), which can be waived with equivalent cover. That comes to US$62,550 a year, plus a one-time US$250 document management fee for new students. Financial Aid and Scholarships' 2026-27 budget for a student in a campus residence hall adds US$16,640 for housing, US$7,000 for the meal plan and US$7,754 in personal costs (extra food, books and supplies of US$1,342, personal expenses and transport), so the nonresident cost of attendance is about US$93,944 (our total: the published US$54,674 residence-hall budget plus the US$39,270 nonresident supplemental tuition). For visa documents, the Berkeley International Office's 2026-27 budget asks undergraduates to show US$84,150 (US$62,550 in tuition and fees plus US$21,600 in living costs). International students cannot get US federal or California state aid, but all admitted international undergraduates are automatically considered for the Regents' and Chancellor's Scholarship and, where eligible, need-based programs such as the Robinson International Scholars, International Leaders and Swaniker Scholars. Berkeley sets undergraduate rates by entering class, and the rates for students starting in fall 2027 had not been published when we checked";

const UG_INTAKE =
  "Fall semester (classes start in late August). Berkeley admits first-years for the fall, though it may admit some students from the waitlist to start in January";

const UG_DEADLINE =
  "Fall 2027 entry, through the single University of California application (international applicants pay a non-refundable US$95 per UC campus): the application opens on 1 August 2026 and must be submitted between 1 October and 30 November 2026. Berkeley has no Early Decision or Early Action. Berkeley's mandatory forms and any English proficiency results are due by 31 January 2027, first-year decisions are posted at the end of March 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and official AP/IB results by 15 July 2027";

const UG_TESTING =
  "Testing: test-free. Berkeley does not use SAT or ACT scores anywhere in its admission process; scores you send are only used for course placement or credit if you enrol";

const UG_ENGLISH =
  "English proficiency (unless you have had 3 or more years of secondary schooling taught in English; a mixed language of instruction does not count): Berkeley lists minimums of TOEFL iBT 4.5 on the scale used from January 2026 (90 on the older 0-120 scale), IELTS 6.5 or Duolingo English Test 115. AP English Language or Literature scores of 3-5, IB English A scores of 6-7 at standard level or 5-7 at higher level, ACT English Language Arts 24 or SAT Writing and Language 31 also count. UC does not accept TOEFL MyBest scores or the IELTS One Skill Retake. You must meet the requirement by 31 January, and scores must still be valid two years from your enrolment date (Berkeley's TOEFL code is 4833)";

const UG_ACADEMIC =
  "Academic requirements: you must finish secondary school with a certificate that admits you to university in your own country (IGCSE or O-levels alone are not enough; Berkeley expects A-levels with at least three academic exams, the IB Diploma or a similar programme), plus UC's A-G subject requirements with at least a 3.4 GPA in A-G courses taken in grades 10 and 11 for non-California applicants. Report your grades exactly as they appear on your school records. Admission is highly selective and holistic: you answer 4 of 8 Personal Insight Questions, and Berkeley does not hold admission interviews (optional InitialView materials for international applicants are accepted until 30 November). If admitted, you need a sponsor's guarantee of funds for the first year before the Berkeley International Office issues visa documents";

const ENGINEERING_ROUTE = (major: string) =>
  `School and admission route: College of Engineering. First-year applicants apply straight to ${major} on the UC application and, if admitted, start in the major (you can instead apply as Engineering Undeclared). Berkeley says that moving into the College of Engineering from another Berkeley college is highly unlikely and very competitive, so choose engineering at the application stage`;

const CDSS_ROUTE = (major: string, extra: string) =>
  `School and admission route: College of Computing, Data Science, and Society (CDSS). Select ${major} on the UC application; CDSS admits first-years straight into one of its three majors (Computer Science, Data Science or Statistics), and admission to the major comes with admission to the university. CDSS does not admit undeclared students, and students who join Berkeley in another major can only apply later through a competitive comprehensive review. ${extra}`;

// Registrar 2026-27 graduate professional fee schedules, nonresident, per semester: tuition 6,861 + student services fee 672 + Berkeley campus
// fee 904.75 + transit fee 236 + Nonresident Supplemental Tuition 6,122.50 + IREF 141 + health insurance 4,103, plus each program's
// Professional Degree Supplemental Tuition (MEng 17,843; MA Statistics 14,659; MIMS 4,556; full-time MBA 31,440).
// Financial Aid 2026-27 professional graduate budget, off campus: housing and utilities 19,920, food 9,962, books 782, personal 3,376,
// transportation 3,920 = 37,960.
const GRAD_LIVING =
  "Financial Aid and Scholarships' 2026-27 professional graduate budget for living off campus adds US$19,920 for housing and utilities, US$9,962 for food, US$782 for books and supplies, US$3,376 for personal costs and US$3,920 for transport (US$37,960 for the nine-month year)";

const GRAD_FEE_INTRO =
  "Berkeley's registrar bills nonresident students, including international students, a semester's tuition of US$6,861, a US$672 student services fee, a US$904.75 campus fee, a US$236 transit fee, a US$141 instructional resilience and enhancement fee, US$6,122.50 in Nonresident Supplemental Tuition and US$4,103 for SHIP health insurance (waivable with equivalent cover)";

const GRAD_ENGLISH =
  "English proficiency (Graduate Division; needed if your bachelor's degree is from a country where English is not the main language of daily life and instruction, unless you have a degree from an accredited US institution or a year of full-time US coursework with grades of B or better): TOEFL iBT 90 for tests taken from 1 June 2025 to 20 January 2026, or 5 overall with at least 4.5 in Speaking and Writing for tests from 21 January 2026; or IELTS Academic (or IELTS Online) 7 overall, with Speaking and Writing of at least 6.5 for tests from 21 January 2026. Duolingo, TOEFL ITP, MyBest scores and the IELTS One Skill Retake are not accepted, and for fall 2027 tests taken before 1 June 2025 are not accepted (TOEFL code 4833)";

const GRAD_APPLY =
  "Apply through the UC Berkeley Graduate Division online application (opened 24 September 2026). The non-refundable application fee is US$155 for international applicants (US$135 for US citizens and permanent residents), plus a 4.22% payment processing fee. Upload scanned transcripts and degree certificates for every post-secondary institution, with certified English translations where needed";

export const ucBerkeleyPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Electrical Engineering and Computer Sciences",
    slug: "berkeley-electrical-engineering-computer-sciences",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's EECS major, from the College of Engineering, combines electrical engineering and computer science in a single BS. The first two years cover the CS 61A-61C programming and machine structures sequence, discrete mathematics and probability, two introductory EE courses on circuits and devices and on signals, dynamics and information, calculus, linear algebra and differential equations, and physics. Students then take at least 20 units of upper-division EECS courses, including one major design course, and can lean towards computer science, electrical engineering or a mix. The degree also needs a natural science elective, an ethics course and humanities and social science courses, and honours, research and a five-year BS/MS option are available.",
    officialProgramUrl: "https://eecs.berkeley.edu/academics/undergraduate/eecs-bs/",
    degree: "Bachelor of Science (BS) in Electrical Engineering and Computer Sciences",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${ENGINEERING_ROUTE("EECS")}. EECS adds that students admitted to other Berkeley colleges cannot change into Engineering to declare EECS, and it encourages applicants to take extra mathematics and science courses`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "berkeley-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's BA in Computer Science, taught by the EECS department for the College of Computing, Data Science, and Society, treats computing as a science rather than just programming. Students start with the CS 61A, 61B and 61C sequence (programming abstractions, data structures and machine structures), discrete mathematics and probability, and calculus and linear algebra, then take 20 units of upper-division computer science, including a design course, from areas such as algorithms, operating systems, compilers, databases, graphics, security and artificial intelligence. A non-CS technical elective and CDSS breadth courses round out the degree. Compared with the EECS BS, it needs fewer mathematics and science courses and more breadth, which makes double majors and minors easier.",
    officialProgramUrl: "https://undergraduate.catalog.berkeley.edu/programs/A5201U",
    degree: "Bachelor of Arts (BA) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      CDSS_ROUTE("Computer Science", "First-years admitted to Computer Science stay in the major for all four years; transfer students admitted from fall 2024 cannot switch into it"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science",
    slug: "berkeley-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's BA in Data Science, from the College of Computing, Data Science, and Society, combines computing, statistical inference and real-world context. The lower division covers Data C8 (Foundations of Data Science), calculus, linear algebra, CS 61A or Data C88C, and data structures. The upper division needs at least eight courses and 28 units, built around Data C100 (Principles and Techniques of Data Science), a probability course, computational and inferential depth courses such as AI, data engineering or econometrics, a modelling, learning and decision-making course such as machine learning, and a human contexts and ethics course. Every student also picks a domain emphasis, a three-course cluster that applies data science to an area such as economics, biology or cognition.",
    officialProgramUrl: "https://cdss.berkeley.edu/dsus/academics/majorrequirements",
    degree: "Bachelor of Arts (BA) in Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      CDSS_ROUTE("Data Science", "Students who did not choose Data Science on their application can only apply through comprehensive review (the application period opens each January), and must be making progress on the lower-division courses with grades of C- or better"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics",
    slug: "berkeley-statistics",
    level: "Bachelor",
    field: "Mathematics",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's BA in Statistics, now part of the College of Computing, Data Science, and Society, gives a thorough grounding in applied and theoretical statistics and probability, with particular strength in machine learning. The major is four lower-division mathematics courses (calculus, multivariable calculus and linear algebra) plus Stat 20 or Data C8, followed by nine upper-division courses: core courses in statistical computing, probability and statistical theory, statistics electives, and an applied cluster of courses that students design around a field where statistics is used, such as economics, biology or computer science. An honours thesis is available, and more than half of the department's undergraduates take a double or triple major.",
    officialProgramUrl: "https://statistics.berkeley.edu/academics/undergrad/major",
    degree: "Bachelor of Arts (BA) in Statistics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      CDSS_ROUTE("Statistics", "Since fall 2024, new Statistics students arrive already declared in the major"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "berkeley-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's BA in Economics, in the College of Letters and Science, starts with introductory economics, two semesters of calculus and an introductory statistics course. Students then take intermediate microeconomics, macroeconomics and econometrics (each available in a more mathematical version) and five upper-division electives chosen from a long list that includes game theory, behavioural economics, industrial organisation, public, labour, development, financial and international economics, data science for economists and algorithmic economics. Up to two approved courses can come from outside the department, such as finance courses at Haas. An honours thesis programme is available.",
    officialProgramUrl: "https://econ.berkeley.edu/undergraduate/program/major-requirements",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: College of Letters and Science. You can show Economics as your intended major on the UC application, but first-year students are not declared on arrival: declaring Economics is admission-based. You must finish the prerequisites (Econ 1 or 2, two calculus courses, an introductory statistics course and two of the three intermediate core courses) with at least a C in each, and apply by your fifth semester or before reaching 80 units, whichever comes second. Students who meet these requirements are guaranteed admission to the major, and the department advises planning an alternate major",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Administration (Spieker Undergraduate Business Program)",
    slug: "berkeley-haas-business-administration",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "The Berkeley Haas Spieker Undergraduate Business Program lets high school seniors enter the Haas School of Business directly for a four-year BS in Business Administration. Students complete prerequisites in introductory business, economics, statistics, two semesters of calculus and reading and composition by the end of the second year, then the 30-unit Haas core: business communication, micro- and macroeconomics for business, financial and managerial accounting, finance, business analytics, leading people, marketing and the social, political and ethical environment of business. The degree needs at least 38 upper-division business units and 12 upper-division non-business units, plus seven breadth courses across the liberal arts and sciences. The programme adds career development, internships, study abroad, entrepreneurship programmes, capstone projects and mentoring.",
    officialProgramUrl: "https://haas.berkeley.edu/undergrad/programs/spieker/",
    degree: "Bachelor of Science (BS) in Business Administration",
    intake: "Fall semester (late August)",
    applicationDeadline: `${UG_DEADLINE}. Spieker applicants must also submit the Haas supplemental application (an essay and a video interview) by its early-January deadline; the link arrives by email 5-7 business days after you submit the UC application and Haas gives the exact date there`,
    admissionRequirements: [
      "School and admission route: Haas School of Business. Select the Spieker Undergraduate Business Program as your primary major on the UC application; Haas does not review applicants who list it as an alternate major. If you are not admitted to Spieker, you will not be admitted to UC Berkeley, and an incomplete Haas supplement means denial. Haas looks at grades and coursework, essays, and activities and awards; no specific high school business courses are required",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "berkeley-mechanical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (120-130 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's ABET-accredited BS in Mechanical Engineering gives a broad base in science and engineering fundamentals. The first two years combine calculus, linear algebra and differential equations, physics, chemistry, programming, 3D modelling and design communication with thermodynamics and an introduction to solid mechanics. The upper division covers dynamics, fluid mechanics, mechanical behaviour of materials, electronics, heat transfer, experimentation and measurement, dynamic systems and feedback control, and an engineering statistics course, ending with a mechatronics design course and technical electives in areas such as energy, controls, biomechanics, manufacturing or design. A one-year, course-based BS/MS option is available for Berkeley ME graduates.",
    officialProgramUrl: "https://undergraduate.catalog.berkeley.edu/programs/16330U",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Mechanical Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Civil Engineering",
    slug: "berkeley-civil-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (120-128 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's ABET-accredited BS in Civil Engineering, from the Department of Civil and Environmental Engineering, prepares students to improve infrastructure, protect resources, reduce hazards and build sustainable systems. The first year pairs calculus, chemistry, physics and Data C8 with introductory civil engineering courses, followed by multivariable calculus, linear algebra, statics and solid mechanics, programming and engineering fundamentals electives. Upper-division students take CEE applications and extensions electives and a capstone design project, and can choose an optional emphasis in engineering and project management, environmental engineering, geosystems, structural engineering, mechanics and materials, or transportation. Classes are relatively small, and the department has student chapters and seven competition teams.",
    officialProgramUrl: "https://undergraduate.catalog.berkeley.edu/programs/16300U",
    degree: "Bachelor of Science (BS) in Civil Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Civil Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bioengineering",
    slug: "berkeley-bioengineering",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's BS in Bioengineering is a multidisciplinary major for students strong in mathematics, physical sciences and biology. Everyone shares a first semester with introductory biomedicine and bioengineering courses, calculus and chemistry, then follows one of four concentrations: biomedical devices, biomedical imaging, cell and tissue engineering, or synthetic and computational biology. Beyond calculus, linear algebra, physics, general and organic chemistry and programming, students need at least 24 upper-division bioengineering units (including two fundamentals courses, a laboratory course and a design course), 36 upper-division technical units, 48 engineering units and an ethics course. Senior year includes a team design capstone or independent research in a faculty lab.",
    officialProgramUrl: "https://bioeng.berkeley.edu/undergrad/program",
    degree: "Bachelor of Science (BS) in Bioengineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Bioengineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Molecular and Cell Biology",
    slug: "berkeley-molecular-cell-biology",
    level: "Bachelor",
    field: "Biology",
    duration: "4 years full-time (at least 120 semester units)",
    tuitionNote: UG_TUITION,
    description:
      "Berkeley's BA in Molecular and Cell Biology, in the College of Letters and Science, covers the fundamentals of biochemistry, molecular biology, genetics and cell biology. The lower division includes two calculus courses, general chemistry, two semesters of organic chemistry with labs, two general biology courses and calculus-based physics. Students then choose one of six emphases: biochemistry, biophysics and structural biology; cell biology, development and physiology; genetics, genomics, evolution and development; immunology and molecular medicine; molecular therapeutics; or neurobiology. Each emphasis (several have two or three tracks) has its own upper-division core courses, laboratory course and electives.",
    officialProgramUrl: "https://mcb.berkeley.edu/undergrad/major/major-requirements/requirements",
    degree: "Bachelor of Arts (BA) in Molecular and Cell Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: College of Letters and Science. You apply to the College with MCB as your intended major and declare it after arriving; MCB is not one of the L&S high-demand majors, and its deadline to declare is the semester before your expected graduation term. All courses for the major must be taken for a letter grade",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Engineering in Electrical Engineering and Computer Sciences",
    slug: "berkeley-meng-eecs",
    level: "Master",
    field: "Engineering",
    duration: "1 academic year full-time (fall and spring semesters)",
    tuitionNote: `2026-27: the Master of Engineering is a professional degree with higher tuition than Berkeley's research master's. ${GRAD_FEE_INTRO}, plus US$17,843 in Professional Degree Supplemental Tuition, for US$36,883.25 a semester or US$73,766.50 for the year (new students also pay a one-time US$119 document management fee). ${GRAD_LIVING}, so the year costs about US$111,700 (our total of the official figures). EECS MEng applicants are automatically considered for the College of Engineering's merit-based grant (Fung Fellows), and an Opportunity Grant is available to applicants who complete its financial and essay sections`,
    description:
      "Berkeley's MEng in EECS is a one-year professional master's for students who plan to join the engineering profession straight after graduating. It has three parts: graduate courses in a technical concentration, engineering leadership courses, and a team capstone project, with projects drawn from the Fung Institute's Capstone Marketplace each August. Concentrations include data science, computer systems, physical electronics and integrated circuits, robotics and embedded software, signal processing and communications, and visual computing and computer graphics, and students can still take courses in other areas. Classes are on the Berkeley campus alongside MEng students from other engineering departments.",
    officialProgramUrl: "https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/",
    degree: "Master of Engineering (MEng) in Electrical Engineering and Computer Sciences",
    intake: "Fall semester only (mandatory orientation and bootcamp in August)",
    applicationDeadline: `Fall 2027 entry: apply by 6 January 2027 at 8:59 p.m. PST, with all supplemental materials. Interviews may be held in January-February if the committee has questions, decisions are emailed in March and the Statement of Intent to Register is due 15 April 2027. ${GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree with at least a 3.0 GPA (the average admitted student has 3.7; EECS reports an average admission rate of about 12%) and a strong technical background equivalent to a computer science bachelor's degree, including programming, algorithms, data structures, computer systems, artificial intelligence and theory. A CS degree itself is not required",
      "Application materials: statement of purpose, personal history statement, three letters of recommendation (ideally a mix of academic and industry referees) and unofficial transcripts. EECS does not require, accept or consider GRE scores",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Arts in Statistics and Data Science",
    slug: "berkeley-ma-statistics-data-science",
    level: "Master",
    field: "Data Science",
    duration: "10 months full-time (fall and spring semesters; at least 24 units plus a comprehensive exam)",
    tuitionNote: `2026-27: the MA in Statistics is a professional degree. ${GRAD_FEE_INTRO}, plus US$14,659 in Professional Degree Supplemental Tuition, for US$33,699.25 a semester or US$67,398.50 for the year (new students also pay a one-time US$119 document management fee). ${GRAD_LIVING}, so the year costs about US$105,400 (our total of the official figures). The Statistics department says it makes departmental financial support available to reduce financial barriers`,
    description:
      "Berkeley's professional MA in Statistics and Data Science (MASDS) is an intensive two-semester programme for careers in industry rather than PhD preparation. In the fall, students take advanced probability (STAT 201A), advanced statistics (STAT 201B) and statistical computing in Python, SQL and other tools (STAT 243). The spring brings linear models (STAT 230A), a capstone course on data analysis and machine learning for real-world decisions (STAT 214) built around team projects with a written report and presentation, and an approved graduate elective in areas such as machine learning, causal inference, NLP, optimisation or time series. Students also pass a three-hour comprehensive exam on 201A and 201B in January. The programme is STEM OPT eligible.",
    officialProgramUrl: "https://statistics.berkeley.edu/academics/masters",
    degree: "Master of Arts (MA) in Statistics",
    intake: "Fall semester only (an optional two-week Summer Prep Program runs beforehand)",
    applicationDeadline: `Fall 2027 entry: the application opened on 24 September 2026 and the deadline is 6 January 2027; no updates can be made after the deadline. You may apply to only one Berkeley degree programme per cycle. ${GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree (usually with at least a 3.0 GPA) and substantial coursework in multivariable calculus, linear algebra, probability theory and theoretical and applied statistics, plus at least one statistical system or language such as R or Python. STAT 134-level probability is a prerequisite for the first course, STAT 201A",
      "Application materials: statement of purpose, personal history statement, CV or resume, three letters of recommendation, a descriptive list of all upper-division and graduate statistics, mathematics and other quantitative courses, and the department's GPA calculation worksheet. GRE scores will not be accepted for fall 2027 applicants",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Information Management and Systems",
    slug: "berkeley-mims",
    level: "Master",
    field: "Information Systems",
    duration: "2 years full-time (at least 48 semester units), usually with a summer internship",
    tuitionNote:
      "2026-27: the School of Information lists MIMS tuition and fees for non-residents, including international students, of US$23,599.75 a semester (tuition US$6,861, student services fee US$672, campus fee US$904.75, transit fee US$236, an opt-out UCGPC fee of US$3.50, IREF US$141, Professional Degree Supplemental Tuition US$4,556, SHIP health insurance US$4,103 and Nonresident Supplemental Tuition US$6,122.50), plus a one-time document management fee in the first semester. Its 2026-27 annual budget for non-residents is US$85,159.50: US$47,199.50 in tuition and fees plus US$37,960 in living costs (housing and utilities US$19,920, food US$9,962, personal US$3,376, transport US$3,920, books US$782). International students on F-1 visas cannot become California residents for tuition purposes, so expect similar or higher costs in the second year. All MIMS applicants are automatically considered for I School fellowship packages of US$5,000-30,000, awarded to a limited number of admitted students",
    description:
      "The I School's Master of Information Management and Systems is a two-year, STEM-designated professional master's for future technology leaders, AI engineers, UX designers, product managers and data-driven decision makers. Its interdisciplinary curriculum links computer science and software engineering, data systems, machine learning and AI, cognitive science and sociology, human-centred design, policy, ethics and law, and leadership. Students take five core courses and a wide range of electives, tailoring the degree to paths such as UX design, data science, information policy, product management, privacy and security, or entrepreneurship. Most do a paid summer internship after the first year, and the degree ends with a final project, often a working prototype or substantial research.",
    officialProgramUrl: "https://www.ischool.berkeley.edu/programs/mims",
    degree: "Master of Information Management and Systems (MIMS)",
    intake: "Fall semester (August 2027 start)",
    applicationDeadline: `Fall 2027 entry: apply by 6 January 2027; interviews are by invitation only. ${GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree. Applicants come from both technical and non-technical backgrounds and are reviewed holistically on academic aptitude, work experience, leadership potential, essays, recommendations and fit; the I School aims for a class of about 50-70 students",
      "Application materials: statement of purpose, personal history statement, a short answer essay (300 words or less) on the most interesting information problem you have solved, two professional letters of recommendation (ideally from current or recent employers), a resume, transcripts and degree certificates, and a programming proficiency form describing your programming languages and how you learned object-oriented programming",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "berkeley-haas-full-time-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time (four semesters; at least 51 units)",
    tuitionNote:
      "2026-27: the Haas Financial Aid Office's estimated cost of attendance for non-resident Full-time MBA students, including international students, lists US$92,755 in tuition and fees for the year (tuition US$15,066, campus fee and class pass US$2,282, Nonresident Supplemental Tuition US$12,245, Professional Degree Supplemental Tuition US$62,880 and IREF US$282) plus US$8,206 for SHIP health insurance (waivable), and US$37,960 for housing and food (US$29,882), books, personal costs and transport. The published first-year total is US$138,921. Not included are a one-time US$119 document management fee, the Berkeley International Office fee of US$100 a semester for F and J students, and optional activities such as summer workshops, clubs and treks, which Haas says can cost up to US$25,000 over the programme. Haas advises planning for a 5-6% rise in the cost of attendance each year",
    description:
      "The Berkeley Haas Full-time MBA enrols about 300 students each fall. The first year is built around 11 core courses (20 units) taught in seven-week modules: data and decisions, microeconomics, financial accounting, leading people, finance, business communication and marketing in the fall, then macroeconomics, operations, ethics and strategic leadership in the spring; some core courses can be waived. The rest of the programme is mostly electives, and every student must pass at least one experiential learning course, for example in entrepreneurship, product management, impact investing, venture or investment funds, or social sector consulting. Graduation also needs at least 51 units, a 3.0 GPA, four semesters in residence and a summer internship. The school's culture is shaped by its four Defining Leadership Principles.",
    officialProgramUrl: "https://mba.haas.berkeley.edu/academics",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall semester (August)",
    applicationDeadline:
      "2026-2027 application cycle (fall 2027 entry): Round 1 closed 10 September 2026 (decisions 10 December 2026); Round 2 by 7 January 2027 (decisions 25 March 2027); Round 3 by 1 April 2027 (decisions 6 May 2027). The application fee is US$250, non-refundable; fee waivers are limited to groups such as US citizens and permanent residents with financial need, service members and citizens of African countries",
    admissionRequirements: [
      "A bachelor's degree (transcripts from every undergraduate and graduate programme) and professional experience; Haas reports an average of 5.7 years of work experience and an average GMAT of 730 for its students",
      "Application materials: resume, a GMAT or GRE score taken before your round's deadline (no minimum score), two professional letters of recommendation with one from your current direct supervisor, a 1-2 minute video essay and a 300-word essay on post-MBA career goals (optional distance-travelled and additional statements). Interviews are by invitation and required for an offer",
      "English proficiency (if your degree is from a country whose primary official language is not English, unless you completed a year of full-time study with B grades or better in the US, UK, Australia, English-speaking Canada or Singapore): TOEFL iBT at least 5 with Speaking and Writing of 4.5 or more (90 on the older scale), or IELTS 7 overall with Speaking and Writing of at least 6.5. For fall 2027 only tests taken on or after 1 June 2025 are accepted, and official scores must come straight from the testing agency (TOEFL code 4833, department 02)",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Financial Engineering",
    slug: "berkeley-haas-master-financial-engineering",
    level: "Master",
    field: "Finance",
    duration: "1 year full-time (January to January; 28 units plus a 10-12 week internship); a 2-year part-time Flex option is also offered",
    tuitionNote:
      "Latest published costs, for the full-time class entering in January 2027 (spring and fall 2027 terms): program and university fees of US$98,036 (tuition US$95,353, campus fee US$2,282, IREF US$282 and a US$119 document management fee), US$8,206 for SHIP health insurance (waivable), US$594 for books and US$19,674 in estimated living costs during instruction, an estimated cost of attendance of US$126,510. The part-time option for that class charges US$3,353 per unit. Haas also recommends budgeting up to US$5,000 for the required pre-program courses, and F and J students pay a Berkeley International Office fee each semester. Costs for the class entering in spring 2028 had not been published when we checked",
    description:
      "The Berkeley Haas Master of Financial Engineering is a one-year quantitative finance programme that combines mathematics, statistics and computer science with how financial markets work. After a week-long orientation in January, students take investments and derivatives, empirical methods in finance and stochastic calculus, then derivatives pricing with numerical methods, fixed income markets and financial data science with Python machine learning. A 10-12 week internship or industry project is required, and the later terms cover financial risk measurement and management, electives and an Applied Finance Project on an unsolved practical problem. Weekly seminars with industry practitioners and career preparation courses run throughout.",
    officialProgramUrl: "https://mfe.haas.berkeley.edu/academics/curriculum",
    degree: "Master of Financial Engineering (MFE)",
    intake: "Spring only (January start); there is no fall admission",
    applicationDeadline:
      "Spring 2028 entry: Round 1 by 1 December 2026, Round 2 by 27 January 2027, Round 3 by 1 April 2027 and Round 4 by 1 July 2027 (all at 9:00 a.m. ET); late applications are accepted until 15 July 2027 if space remains. Decisions are posted about nine weeks after each deadline. The application fee is US$275, non-refundable",
    admissionRequirements: [
      "A bachelor's degree completed before the programme starts, usually with at least a 3.0 GPA in upper-division work, and a strong quantitative background: calculus, multivariable calculus, linear algebra, differential equations, numerical analysis and advanced probability and statistics or econometrics, plus programming experience in C++ and Python and some finance training (two courses or equivalent work experience). Prerequisites should be completed, or planned, with grades of B or better; conditional admission is possible. Work experience is preferred but not required",
      "Application materials: transcripts, resume, essays, a two-minute video essay (two attempts), two letters of recommendation from people who know your quantitative work, and a GMAT, GMAT Focus or GRE score no older than 1 January 2023 for spring 2028 entry. The test is optional only for PhD holders or graduates of a four-year US bachelor's with a final GPA of 3.70 or higher. Interviews are by invitation",
      "English proficiency (if your degree is from a country where the official language is not English, unless you completed a year of full-time study in the US with B grades or better): the MFE asks for TOEFL iBT 90 (Home Edition accepted; MyBest, TOEFL ITP and Duolingo are not) or IELTS Academic 7 overall, and Graduate Division English rules apply (TOEFL code 4833, department 82)",
    ],
  },
];
