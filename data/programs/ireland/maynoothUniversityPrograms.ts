import type { Program } from "../../programs";

// Maynooth University (Maynooth, Co. Kildare, Ireland): 7 undergraduate degrees and 8 one-year taught master's programmes, chosen for their
// popularity with international (non-EU) students. Sources (viewed November 1, 2026):
// - Course Finder pages for each programme (https://www.courses.maynoothuniversity.ie/...), with their Overview, Course structure,
//   Entry requirements, Careers and How to apply sections
// - New Undergraduate Degrees page for the two computer science degrees that replace MH601/MH602 from 2027
//   (https://www.maynoothuniversity.ie/study-maynooth/how-apply/undergraduate-applicants/new-undergraduate-degrees)
// - Undergraduate Prospectus 2027 (course length, places, 2026 minimum CAO points, placement options)
//   (https://www.maynoothuniversity.ie/sites/default/files/assets/document/MU%20Undergraduate%20Prospectus%202027%20FINAL_0.pdf)
// - Fees & Grants Office, International: 2026/27 International Undergraduate Fees List (24.04.26) and 2026/27 Postgraduate EU &
//   International Fees List (18.09.26) (https://www.maynoothuniversity.ie/student-fees-grants/international)
// - International applicants, undergraduate programme band categories 2027-2028 and the Asia undergraduate / postgraduate entry
//   requirement pages (https://www.maynoothuniversity.ie/study-maynooth/how-apply/international-applicants)
// - English Language Requirements 2027/2028 intake (https://www.maynoothuniversity.ie/study-maynooth/how-apply/english-language-requirements)
// - Postgraduate Applicants: application fee, deposit and deadlines (https://www.maynoothuniversity.ie/study-maynooth/how-apply/postgraduate-applicants)
// - International Office scholarships (https://www.maynoothuniversity.ie/international/scholarships)
// Fees are in euro and are the latest published (2026-27); Maynooth had not published 2027-28 fees, which September 2027 entrants will pay.

const UNIVERSITY = {
  universitySlug: "maynooth-university",
  universityName: "Maynooth University",
  country: "Ireland",
  language: "English",
  campus: "Maynooth (North and South Campus, Co. Kildare)",
  programType: "Full-time",
} as const;

// ---------- Undergraduate ----------

const UG_FEE = (fee: string) =>
  `2026-27: the non-EU fee is ${fee} a year, per Maynooth's 2026/27 International Undergraduate Fees List (fees cover one academic year only and rise each year, so September 2027 entrants will pay the 2027-28 rate, which had not been published yet). International fees must be paid in full before registration is completed, through TransferMate. Non-EU students can also apply for the International Merit Award, a €1,500 tuition discount for 25 students who have accepted their offer and paid their deposit by 30 June (2026 cycle)`;

const UG_INTAKE =
  "September. Non-EU applicants apply directly to Maynooth through the MU Apply online portal, not through the CAO";

const UG_DEADLINE =
  "Non-EU applications for 2027 entry opened on 14 October 2026 and close on 1 July 2027 (the 2027 prospectus gives 30 June). Visa-required students should apply and accept their offer early to leave time for Irish immigration requirements. The 1 February 2027 closing date shown on the course page is the CAO deadline for EU applicants";

const UG_ENGLISH =
  "English language (if English is not your first language; certificates must be issued within 2 years of the start date): IELTS Academic 6.5 with no band below 6.0 (single-module retakes not accepted); TOEFL iBT 90 with at least 21 in writing and 19 in the other sections, or 5 overall with 4.5 in each section on the 0-6 scale (Home Edition not accepted); PTE Academic 63 with no communicative skill below 59; Duolingo 120 with 110 in each subscore; LanguageCert Academic 70 with 65 in each skill; Cambridge C2 Proficiency or C1 Advanced 176 with 169 in each skill (grade C or better), or B2 First grade A; Oxford Test of English 140 with 125 in each skill; Trinity ISE III with merit in each skill; or IB English A1/A2/B at 5 Higher Level";

const UG_BAND = (band: number, overall: string, subjects: string) =>
  `Non-EU academic requirements: Maynooth places this degree in Band ${band} of its 2027-28 international undergraduate bands. For example, Indian applicants need Standard XII from CBSE, CISCE or a recognised State Board (best five subjects) with at least ${overall} overall, plus ${subjects}. Maynooth also accepts A Levels, the IB Diploma and a US high school diploma with SAT or ACT, and lists equivalents for other countries on its international entry requirements pages`;

const UG_CAREERS_COMPUTING = [
  "Software developer or engineer",
  "Systems analyst",
  "Data analyst",
  "Systems engineer",
];

// ---------- Postgraduate ----------

const PG_FEE = (fee: string, extra = "") =>
  `2026-27: the full-time non-EU fee is ${fee} for the year, per Maynooth's 2026/27 Postgraduate EU & International Fees List (18.09.26)${extra}. EU fees on the same list add a €150 student levy; the list does not say whether the non-EU figure already includes it. Fees rise each year and 2027-28 rates had not been published. Offers are secured with a €1,000 non-refundable deposit within 14 days`;

const PG_SCHOLARSHIPS =
  "Non-EU students on full-time taught master's programmes can apply for Maynooth's international scholarships, such as the International Excellence Scholarship (€5,000 off tuition for one student from each of six world regions, 80% minimum in the primary degree) and the International Merit Award (€1,500 for 25 students); for the 2026 cycle these required the offer to be accepted and the deposit paid by 31 March or 30 June respectively";

const PG_INTAKE = "September (full-time, on campus in Maynooth)";

const PG_DEADLINE =
  "27 August 2027 for September 2027 entry, per the course page. Maynooth warns that programmes can close earlier once places are filled, so non-EU students needing a visa should apply early. Apply online through MU Apply (€50 application fee)";

const PG_APPLY =
  "Application: apply online through the MU Apply portal with full transcripts for every semester completed, your graduation certificate (if graduated), a copy of your passport and an up-to-date CV; documents may be requested in two stages";

const PG_COUNTRY =
  "Country equivalents (Maynooth postgraduate entry requirements for Asia): a 2:2 is treated as 60% overall in a four-year Indian bachelor's degree (55% from Delhi, Mumbai, Pune or Calcutta), a 2:1 as 65% (60%), and a first as 75% (70%). Three-year Indian degrees are considered where the final year includes a project, thesis or internship, and there is a limit on the number of backlogs accepted";

const PG_ENGLISH =
  "English language (if English is not your first language; certificates must be issued within 2 years of the start date): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 90 with at least 21 in writing and 19 in the other sections (or 5 overall with 4.5 in each section on the 0-6 scale); PTE Academic 63 with no communicative skill below 59; Duolingo 120 with 110 in each subscore; LanguageCert Academic 70 with 65 in each skill; Cambridge C2 Proficiency or C1 Advanced 176 with 169 in each skill; Oxford Test of English 140 with 125 in each skill; or Trinity ISE III with merit in each skill. Graduates of a full English-taught bachelor's in Ireland, the UK, USA, Australia, New Zealand, Nigeria, Ghana or Canada may be exempt, although Irish immigration may still ask for a test";

export const maynoothUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "BSc Computer Science (Software Engineering or Interactive Digital Media) - MH604",
    slug: "maynooth-bsc-computer-science-mh604",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time, including an industrial placement of at least 6 months in Year 3 (subject to availability)",
    tuitionNote: `${UG_FEE("€18,000")}. MH604 is new for 2027 and does not appear on the 2026/27 list yet; €18,000 is the 2026/27 rate for the computer science degrees it replaces (MH601, MH602 and MH603)`,
    description:
      "MH604 is one of two new computer science degrees Maynooth launches for 2027, with 140 places. First year is a common introduction to programming, computational thinking, algorithms and computer systems, taken alongside mathematics and one other science or arts subject. From second year you concentrate on computer science and choose an award pathway: Computer Science and Software Engineering, which covers how software systems are designed, built and maintained (including AI-assisted development practices), or Computer Science and Interactive Digital Media, which looks at the technology behind digital content and interactive experiences. Third year includes an industrial placement, and the degree ends with a capstone project. Students who do well in first year can apply to transfer into the AI degree (MH605), subject to places.",
    officialProgramUrl:
      "https://www.maynoothuniversity.ie/study-maynooth/how-apply/undergraduate-applicants/new-undergraduate-degrees#MH604",
    degree: "BSc Computer Science and Software Engineering, or BSc Computer Science and Interactive Digital Media (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [...UG_CAREERS_COMPUTING, "Interactive digital media developer"],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including O6/H7 in Irish and English and O3/H7 in Mathematics. New degree, so there are no previous CAO points",
      UG_BAND(3, "70%", "Mathematics at 75% in Standard XII or 80% in Standard X"),
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc Computer Science and Artificial Intelligence - MH605",
    slug: "maynooth-bsc-computer-science-artificial-intelligence-mh605",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time, including an industrial placement of at least 6 months (subject to availability)",
    tuitionNote: `${UG_FEE("€18,000")}. MH605 is new for 2027 and does not appear on the 2026/27 list yet; €18,000 is the 2026/27 rate for Maynooth's existing computer science degrees`,
    description:
      "Maynooth's new AI degree (40 places from 2027) pairs a solid computer science core of programming, data structures, algorithms and computer systems with specialist study of machine learning, natural language processing and intelligent systems. First year mirrors MH604, with computer science, mathematics and one other subject. From second year you concentrate on computer science (with 10 credits of mathematics), starting with an introduction to artificial intelligence, and in later years you take computer science and AI only and complete an industrial placement of at least six months. Students work on projects with real-world datasets and modern development tools, and the course builds responsible AI and ethics into the curriculum throughout. Students can move between MH605 and MH604 after first year, depending on results and quotas.",
    officialProgramUrl:
      "https://www.maynoothuniversity.ie/study-maynooth/how-apply/undergraduate-applicants/new-undergraduate-degrees#MH605",
    degree: "BSc Computer Science and Artificial Intelligence (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "AI engineer",
      "Machine learning specialist",
      "Data scientist",
      "Software developer",
      "Systems analyst",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including O6/H7 in Irish and English and O3/H7 in Mathematics. New degree, so there are no previous CAO points",
      UG_BAND(3, "70%", "Mathematics at 75% in Standard XII or 80% in Standard X"),
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc Data Science - MH207",
    slug: "maynooth-bsc-data-science-mh207",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time",
    tuitionNote: UG_FEE("€18,000"),
    description:
      "Taught jointly by Mathematics and Statistics and Computer Science, this degree is about collecting, managing, analysing and visualising data and understanding what it shows. First year combines dedicated data science modules with programming, calculus and linear algebra, plus engineering science or extra computer science. Second year adds statistics, R, databases, and algorithms and data structures; third year covers probability, linear models, time series, data visualisation, networks and software engineering; and final year includes statistical machine learning, advanced R, Bayesian data analysis and options such as neural networks and AI, with two capstone projects. Unlike many Maynooth degrees, MH207 does not include a work placement or study abroad option.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/bsc-bachelor-of-data-science-ft-mh207/",
    degree: "Bachelor of Science in Data Science (NFQ Level 8, honours)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: ["Data scientist", "Data analyst", "Statistician", "Machine learning engineer"],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including Irish, English, a science subject and O1/H5 in Mathematics. The 2026 minimum CAO points for EU entrants were 413",
      UG_BAND(2, "80%", "Mathematics at 80% in Standard XII and a science subject at 65% in Standard XII or X"),
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc Psychology (through Science) - MH209",
    slug: "maynooth-bsc-psychology-mh209",
    level: "Bachelor",
    field: "Psychology",
    duration: "4 years full-time, including a one-semester research internship in Year 3",
    tuitionNote: UG_FEE("€18,000"),
    description:
      "This science-based psychology degree is accredited by the Psychological Society of Ireland (PSI), the first step towards professional training as a psychologist. In first year you take psychology, mathematics and one other science (biology, chemistry, computer science, engineering science or experimental physics), and from second year psychology is your single major. The course covers brain and behaviour, social, cognitive and developmental psychology, and research methods such as experimentation, measurement and statistical analysis. In third year you spend one semester on a research internship and can spend another on work placement or studying abroad (subject to availability). It is one of Maynooth's most competitive degrees, with only 23 places.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/bsc-psychology-ft-mh209/",
    degree: "Bachelor of Science in Psychology (NFQ Level 8, honours), PSI-accredited",
    workIntegrated: true,
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Postgraduate training in clinical, educational or organisational psychology",
      "Research assistant",
      "Human resources or recruitment",
      "Civil service and policy roles",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including O6/H7 in Irish, English and a science subject, and O4/H7 in Mathematics. The 2026 minimum CAO points for EU entrants were 498",
      UG_BAND(1, "85%", "Mathematics at 70% in Standard XII or 75% in Standard X and a science subject at 65% in Standard XII or X"),
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BBS/BBA Business and Management - MH404",
    slug: "maynooth-bbs-business-management-mh404",
    level: "Bachelor",
    field: "Business & Management",
    duration: "3 years full-time (BBS), or 4 years (BBA) with an optional work placement or study abroad year between Years 2 and 3",
    tuitionNote: UG_FEE("€17,000"),
    description:
      "Maynooth School of Business's flagship degree covers every major business function and offers its widest range of options. First year lays the foundations through modules such as management, marketing, innovation, business ethics, microeconomics and accounting; second year broadens the core functions with a mix of core and optional modules (for example human resource management, operations and supply chain management, management information systems and entrepreneurship) plus a 10-credit elective; and the final year ties the functions together at a strategic level, with advanced options to specialise. No previous business study is needed. Students who add a work placement or study abroad year graduate after four years with a BBA; the university helps with placements, but they are competitive.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/bbs-business-and-management-bma-ft-mh404/",
    degree: "Bachelor of Business Studies (BBS) or Bachelor of Business Administration (BBA) in Business and Management (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Graduate management trainee",
      "Marketing or sales executive",
      "Operations specialist",
      "HR specialist",
      "Business consultant",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including O6/H7 in Irish and English and O4/H7 in Mathematics. The 2026 minimum CAO points for EU entrants were 400",
      UG_BAND(3, "70%", "Mathematics at 70% in Standard XII or 75% in Standard X"),
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BE Bachelor of Electronic Engineering - MH304",
    slug: "maynooth-be-electronic-engineering-mh304",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time for the BE, or 5 years for the ME (with a 6-month industry placement option in Year 4)",
    tuitionNote: `${UG_FEE("€18,000")}. On the 2026/27 postgraduate list, the five-year ME in Electronic Engineering is charged €16,000 to non-EU students. Maynooth also offers two W.A. Barrett Scholarships in Engineering (€3,000) to eligible first-year MH304/MH306 students`,
    description:
      "Accredited by Engineers Ireland, MH304 is Maynooth's route to becoming a chartered electronic engineer, with project-based learning built into every year. The first two years cover engineering fundamentals, programming and mathematics, and you complete your first four problem-based learning projects. In third year you take taught modules and two more projects, then choose your path: finish with a final-year project and a BE after four years, or, with at least a 2:2 (50%) in third year, continue for two more years to an ME. The ME's fourth year can include a six-month industry placement, Erasmus or study abroad, or a research internship. Staff research areas include mobile and wireless communications, biomedical engineering, control, wave energy and robotics.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/bachelor-of-engineering-ft-mh304/",
    degree: "Bachelor of Engineering (BE) in Electronic Engineering (NFQ Level 8), with an optional Master of Engineering (ME, NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Electronic engineer",
      "Chip design or semiconductor engineer",
      "Communications engineer",
      "Embedded hardware and software engineer",
      "Software developer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including Irish, English, a science subject and H4 in Mathematics. The 2026 minimum CAO points for EU entrants were 363",
      UG_BAND(2, "80%", "Mathematics at 85% in Standard XII and a science subject at 65% in Standard XII or X"),
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BA Accounting and Finance - MH403",
    slug: "maynooth-ba-accounting-finance-mh403",
    level: "Bachelor",
    field: "Accounting & Finance",
    duration: "3 years full-time, or 4 years with an optional work placement or study abroad year",
    tuitionNote: UG_FEE("€16,500"),
    description:
      "Accounting is the main subject in this 90-place degree, studied alongside finance and economics and taught from first principles, so no previous accounting is required. Modules include financial accounting, management and cost accounting, personal and business taxation, corporate finance, ethics and corporate governance, and law, and final-year students take advanced financial and management accounting. The degree is recognised by Chartered Accountants Ireland, ACCA and CIMA, giving graduates exemptions from the first level of their professional exams, and students who continue to Maynooth's MA in Accounting gain further exemptions. Students can extend the degree with a placement at an accounting or finance firm, or a year abroad (subject to availability).",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/ba-accounting-and-finance-ft-mh403/",
    degree: "Bachelor of Arts in Accounting and Finance (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Trainee chartered or management accountant",
      "Auditor or tax adviser",
      "Banking and financial services",
      "Financial analyst",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: 2H5 and 4O6/H7, including O6/H7 in Irish and English and O4/H7 in Mathematics. The 2026 minimum CAO points for EU entrants were 411",
      UG_BAND(3, "70%", "Mathematics at 70% in Standard XII or 75% in Standard X"),
      UG_ENGLISH,
    ],
  },

  // ---------- Taught master's ----------

  {
    ...UNIVERSITY,
    name: "MSc Computer Science (Software Engineering) - MHG50",
    slug: "maynooth-msc-computer-science-software-engineering",
    level: "Master",
    field: "Computer Science",
    duration: "1 year full-time (90 credits)",
    tuitionNote: `${PG_FEE("€18,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "This one-year MSc is aimed at computer science graduates who want to design and lead serious software projects. It focuses on good scientific software engineering practice: requirements engineering and system design, rigorous software process, software testing, advanced object-oriented programming, AI-augmented software construction, practical cryptography, and the mathematics and theory of computer science, with options in interaction design and internet solutions engineering. Modules are taught as intensive lecture blocks with practical work, and the year ends with a 30-credit capstone project on a software engineering topic. Maynooth says most graduates go into Ireland's software industry or work abroad, and some continue to a PhD.",
    officialProgramUrl:
      "https://www.courses.maynoothuniversity.ie/msc-computer-science-software-engineering-one-year-programme-ft-mhg50/",
    degree: "Master of Science in Computer Science (Software Engineering) (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: ["Software engineer", "Software architect or technical lead", "Test or quality engineer", "PhD research"],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A four-year bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:1 in computer science, or the same volume of computer science within a related degree",
      "At least 60% in required areas: programming, advanced computer science, object-oriented software engineering, structured programming (including at least two Python modules and Java), databases, data structures and algorithms, discrete structures and a final-year project or internship, plus 50% in four of: maths, networks, computer architecture, operating systems, software development and software engineering. Fails or repeats in computer science modules are reviewed case by case",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Data Science and Analytics - MHR64",
    slug: "maynooth-msc-data-science-analytics",
    level: "Master",
    field: "Data Science",
    duration: "12 months full-time (90 credits)",
    tuitionNote: `${PG_FEE("€17,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "A 12-month conversion master's run by Mathematics and Statistics, Computer Science and the National Centre for Geocomputation for graduates with strong maths who want to work with data. You learn programming, statistics and databases (including R, Bayesian data analysis, statistical methods and spatial databases), then move on to statistical machine learning, with options such as machine learning and neural networks, GIS and remote sensing, critical data studies and generalised linear models. A case studies module looks at data science in different industries, and the course covers the social and ethical side of using data. A team project builds report-writing and presentation skills, and everyone completes a 30-credit thesis.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-data-science-and-analytics-ft-mhr64/",
    degree: "Master of Science in Data Science and Analytics (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: ["Data scientist", "Data analyst", "Business intelligence analyst", "Statistical analyst"],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A four-year honours bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:1 and an overall score of 65% or higher",
      "Strong numerical content: three or four maths modules with at least 60% in each, from areas such as linear algebra, calculus, probability, discrete mathematics, numerical methods, differential equations or mathematics for engineers",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Robotics and Embedded AI - MHJ20",
    slug: "maynooth-msc-robotics-embedded-ai",
    level: "Master",
    field: "Engineering",
    duration: "1 year full-time (three semesters, ending with a 40-credit research dissertation)",
    tuitionNote: `${PG_FEE("€18,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "This multidisciplinary MSc for computing, engineering, physics and maths graduates combines computing, electronics and mechanical engineering to teach the design and control of intelligent machines. Core modules include computer vision, deep learning, reinforcement learning, cognitive and autonomous robotics, human-robot interaction, and 3D vision and augmented reality, with tailored options so computing graduates can pick up control theory and robotic sensing while engineers strengthen AI and machine learning. The first semester focuses on design thinking and an embedded AI team project, the second on building and evaluating systems, and the third on a 40-credit research project with industry or Maynooth's robotics group. Listed partners include Intel, Akara Robotics, Eiratech Robotics and St. James's Hospital.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-robotics-and-embedded-ai-ft-mhj20/",
    degree: "Master of Science in Robotics and Embedded AI (NFQ Level 9)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Robotics engineer",
      "AI engineer",
      "Embedded systems developer",
      "Automation engineer",
      "Autonomous systems specialist",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:1 in a related subject such as engineering, computer science, physics or mathematics",
      "Programming experience is essential: you must show evidence of proficiency, particularly in Python and/or C++",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Business Analytics - MH48D",
    slug: "maynooth-msc-business-analytics",
    level: "Master",
    field: "Data Analytics",
    duration: "12 months full-time",
    tuitionNote: `${PG_FEE("€18,000", " (the same for the January-start code MH58D)")}. ${PG_SCHOLARSHIPS}`,
    description:
      "Maynooth's MSc in Business Analytics is for graduates with quantitative degrees who want to solve business problems with data. Core modules cover principles of business analytics, predictive analytics, AI for business analytics, disruptive and emerging digital technologies, and people, organisations and society, with career planning and evidence-based management. In Analytics Live you work on a real analytics project with an organisation, and you finish with a 25-credit business consulting project, dissertation or placement project. Each module is taught over four days spread three to four weeks apart, leaving time for independent work between sessions. It is one of the few Maynooth master's degrees with both a September (MH48D) and a January (MH58D) start.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-in-business-analytics-ft-mh48d/",
    degree: "Master of Science in Business Analytics (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Business analyst",
      "Analytics associate",
      "Business intelligence engineer",
      "Operations analyst",
      "Product analyst",
    ],
    intake: "September (MH48D) or January (MH58D), full-time on campus in Maynooth",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:2 in business, management science, economics, finance, engineering, technology, mathematics, physics or computer science",
      "At least 50% in maths for engineering or technical degrees, or 60% for business degrees; applicants with failed or repeated maths modules after first year are not considered",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Business Management - MH52D",
    slug: "maynooth-msc-business-management",
    level: "Master",
    field: "Business & Management",
    duration: "12 months full-time",
    tuitionNote: `${PG_FEE("€18,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "A conversion master's for graduates who did not study business as undergraduates (applicants with business in their degree are not eligible). It starts at foundation level and moves quickly through organisational behaviour, international business, global operations and supply chain management, marketing, finance for managers, strategic management and sustainability, with evidence-based management and a 10-credit career planning module. You then choose a 25-credit business consulting project, dissertation or placement project; graduates quoted by the school say the placement route helped them get full-time jobs. Like other School of Business master's, each module is taught in four-day blocks two to four weeks apart.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-in-business-management-ft-mh52d/",
    degree: "Master of Science in Business Management (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Graduate management or leadership programme",
      "Project or operations manager",
      "Business consultant",
      "Marketing or HR roles",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:2 in a non-business subject; graduates whose degree included business are not considered",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc International Business - MH90D",
    slug: "maynooth-msc-international-business",
    level: "Master",
    field: "Business & Management",
    duration: "12 months full-time",
    tuitionNote: `${PG_FEE("€18,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "Designed for business graduates aiming for international careers, this MSc looks at how multinational firms internationalise, trade, invest and are managed. Modules include international business, strategic management tools and concepts, cross-cultural management, managing the multinational (the human experience), global operations and supply chain management, sustainability and a consultancy module focused on international business, alongside career planning and evidence-based management. You finish with a business consulting project, dissertation or work placement. Students get free graduate membership of the Institute of Management Consultants & Advisors (IMCA) during the programme and for 12 months afterwards.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-in-international-business-ft-mh90d/",
    degree: "Master of Science in International Business (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "International business or trade roles in multinational firms",
      "Export and trade agencies",
      "Management consultant",
      "NGO or international organisation roles",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:2 in business, marketing or management, or a non-business degree plus at least five years of relevant work experience",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Digital Marketing - MH34D",
    slug: "maynooth-msc-digital-marketing",
    level: "Master",
    field: "Marketing",
    duration: "12 months full-time",
    tuitionNote: `${PG_FEE("€18,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "This industry-connected MSc treats digital marketing as part of marketing as a whole, combining strategy with hands-on skills in content creation, campaign development and data analysis. Modules include digital campaign strategy and management, search marketing, analytics and measurement, managing social media, strategic integrated marketing communications and international sales management, plus a consultancy module in which you tackle a real marketing problem for a live client. As with other School of Business master's, modules run in four-day blocks and the year finishes with a business consulting project, dissertation or placement project.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-in-digital-marketing-ft-mh34d/",
    degree: "Master of Science in Digital Marketing (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Digital marketing specialist",
      "Marketing manager",
      "Marketing analyst",
      "Social media manager",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:2 in a business subject, or a degree in any subject plus significant digital marketing experience",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Psychology (Conversion) - MHW54",
    slug: "maynooth-msc-psychology-conversion",
    level: "Master",
    field: "Psychology",
    duration: "1 year full-time (90 credits)",
    tuitionNote: `${PG_FEE("€17,000")}. ${PG_SCHOLARSHIPS}`,
    description:
      "An intensive, PSI-accredited conversion course for graduates who have already studied at least 60 credits of psychology but whose degree does not qualify them for Graduate Membership of the Psychological Society of Ireland or the British Psychological Society's Graduate Basis for Registration. It is equivalent to a psychology bachelor's degree and is the first step towards professional training in clinical, counselling, educational or other applied psychology. The course concentrates on psychological research methods and analysis, professional ethics and applied research experience. Places are limited to 20 a year and are awarded competitively, and the course runs only if enough students enrol.",
    officialProgramUrl: "https://www.courses.maynoothuniversity.ie/msc-psychology-ft-mhw54/",
    degree: "Master of Science in Psychology (NFQ Level 9), PSI-accredited",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Further training in clinical, counselling or educational psychology",
      "Research assistant",
      "Human resources and recruitment",
      "Civil service roles",
    ],
    intake: PG_INTAKE,
    applicationDeadline:
      "This course has its own short application window. The course page lists non-EU applications opening on 1 January and closing on 31 January (dates shown for 2026, not yet updated for 2027 entry), compared with May to June for Irish and EU applicants. Apply online through MU Apply (€50 application fee)",
    admissionRequirements: [
      "A bachelor's degree (NFQ Level 8 or equivalent) with at least a 2:1, including at least 60 credits of psychology or psychological studies",
      "Prior study must include introductory coverage of biological, social, developmental and cognitive psychology and personality and individual differences, with post-introductory study of at least four of these areas in named modules",
      "Application: transcripts for every semester, graduation certificate (if graduated), passport copy, a personal statement of at least 500 words on why you want to take the course, and two academic references",
      PG_COUNTRY,
      PG_ENGLISH,
    ],
  },
];
