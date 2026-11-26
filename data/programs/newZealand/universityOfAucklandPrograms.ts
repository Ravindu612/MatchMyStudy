import type { Program } from "../../programs";

// University of Auckland | Waipapa Taumata Rau (Auckland, New Zealand): 8 undergraduate degrees (or BE(Hons)/BSc
// specialisations and majors) and 7 postgraduate taught masters, chosen for their popularity with international students
// (business, engineering, computing and data, health and design). Sources (viewed 24 November 2026):
// - Programme pages on auckland.ac.nz (https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/...), with
//   their overview, programme structure, 2027 entry requirements for applicants with qualifications from outside New
//   Zealand, 2027 fees, key dates (application closing and start dates) and career sections, plus the subject pages for the
//   Computer Science major, the Data Science specialisation and the Software and Civil Engineering specialisations
// - 2027 Curriculum Catalogue programme entries (https://study.auckland.ac.nz/ords/r/uoa/catalogue/program?p5_code=...),
//   for the country-by-country secondary school minimums (India rows) and the list of countries without direct entry
// - Undergraduate and postgraduate international fees pages, with the estimated 2027 (and 2028) international tuition
//   (https://www.auckland.ac.nz/en/study/fees-and-money-matters/tuition-fees/international-student-fees/undergraduate-international-fees.html
//   and .../postgraduate-international-fees.html)
// - 2027 International Student Programme Information brochure (Programme List 2027, October 2026), with durations,
//   intakes, minimum English language scores, scholarships and 2027 important dates
//   (https://www.auckland.ac.nz/assets/study/international-students/brochures-and-flyers/Programme%20List%202027_web_oct26.pdf)
// - Grade Descriptors Policy for the 9-point GPA scale used for GPA/GPE requirements
//   (https://www.auckland.ac.nz/en/about-us/about-the-university/policy-hub/education-student-experience/assessment/grade-descriptors-policy.html)
// - Immigration New Zealand: Fee Paying Student Visa (https://www.immigration.govt.nz/visas/fee-paying-student-visa/) and
//   Post-Study Work Visa (https://www.immigration.govt.nz/visas/post-study-work-visa/)
// Fees are in New Zealand dollars and are the University's estimated international tuition for 2027, for a full-time year
// of 120 points unless stated (business coursework masters are quoted as a total for the 180-point programme). Fees include
// 15% GST but exclude the Student Services Fee. Where a programme page and the international fees table differ slightly,
// both figures are given. The University says exact fees depend on the courses you enrol in.

const UNIVERSITY = {
  universitySlug: "university-of-auckland",
  universityName: "University of Auckland",
  country: "New Zealand",
  language: "English",
  programType: "Full-time",
} as const;

const CAMPUS = {
  city: "City Campus (central Auckland)",
  grafton: "Grafton Campus (Auckland)",
} as const;

const SERVICES_FEE =
  "In 2027 you also pay the Student Services Fee of NZ$9.65 per point (about NZ$1,158 for a full-time 120-point year). Tuition estimates include 15% GST but not the Student Services Fee, course books, travel and health insurance or living costs, and exact fees are confirmed once you enrol in courses";

const GPE_NOTE =
  "GPA and GPE requirements use the University's 9-point scale (A+ = 9, A = 8, A- = 7, B+ = 6, B = 5, B- = 4, C+ = 3); overseas grades are converted to a Grade Point Equivalent (GPE), and the University's online GPE calculator gives an indicative result only";

// ---------- Undergraduate ----------

const UG_SCHOLARSHIPS =
  "University-wide undergraduate scholarships for international students include the University of Auckland Foundation Pathway High Achiever Scholarship (NZ$20,000 for one year, for top students from its foundation pathway partners) and the International School Leaver Scholarship (NZ$20,000 for one year, for international students who finished secondary school in New Zealand). Scholarships are competitive and are applied for after you receive an offer";

const UG_INTAKE =
  "Semester One (starts 1 March 2027) or Semester Two (starts 19 July 2027). Apply online through the University of Auckland application portal (auckland.ac.nz/apply)";

const UG_DEADLINE =
  "For 2027 entry, applications close on 8 December 2026 for Semester One and 4 July 2027 for Semester Two. Late applications may be considered if places remain; the University advises international students to apply as early as possible so there is time to get a student visa (Immigration New Zealand suggests applying for the visa at least 3 months before you travel)";

const UG_NO_DIRECT_ENTRY =
  "The University does not offer direct entry from secondary school in Brazil, Chile, Colombia, Indonesia, Iran, Mexico, Oman, Papua New Guinea, Taiwan or the United Arab Emirates (a foundation programme or tertiary study is needed first), and qualifications not listed in the Curriculum Catalogue, such as Sri Lankan A-Levels, are assessed on application. Applicants who are slightly below the minimum are encouraged to apply and are considered if places are available";

const UG_ENGLISH_STANDARD =
  "English language (if English is not your first language): IELTS Academic 6.0 overall with no band below 5.5 (IELTS One Skill Retake accepted), or TOEFL iBT 80 with 21 in writing (4.0 overall and 4.0 in writing on the new 6-point scale), PTE Academic 50 with no communicative score below 42, Cambridge C1 Advanced or C2 Proficiency 169 with no band below 162, or another test on the University's approved list. The University of Auckland English Language Academy runs pathway courses for applicants whose offer is conditional on English";

const UG_ENGLISH_ENGINEERING =
  "English language (if English is not your first language): this programme asks for IELTS Academic 6.5 overall with no band below 6.0, higher than the University's general undergraduate minimum, or an approved alternative test at the equivalent level (see the University's alternative English language requirements)";

const india = (main: number, other: number, extra?: string) =>
  `India (2027 Curriculum Catalogue): a programme score of ${main} for the ISC, AISSC (CBSE) and the Maharashtra, Karnataka and West Bengal state boards, or ${other} for all other state boards, calculated on the best four academic subjects (local languages and non-academic subjects excluded), with at least 70% in English for the first group of boards and 75% for other state boards${extra ? `. ${extra}` : ""}`;

const UG_WORK_RIGHTS =
  "Visa and work: international students need a New Zealand Fee Paying Student Visa, which generally allows part-time work of up to 25 hours a week during study and full-time work in scheduled holidays, depending on visa conditions. After a bachelor's degree with at least 30 weeks of full-time study in New Zealand, graduates can apply once for a Post-Study Work Visa for the same length of time they studied the degree in New Zealand (up to 3 years), with open work rights, per Immigration New Zealand";

// ---------- Postgraduate ----------

const PG_SCHOLARSHIPS =
  "Scholarships for new international postgraduate students include the University of Auckland International Student Excellence Scholarship (25% of tuition for one year) and the country High Achiever Scholarships for students from China, India, Indonesia, the USA and Vietnam (each 25% of tuition for one year). Scholarships are competitive and are applied for after you receive an offer";

const BUSINESS_MASTERS_SCHOLARSHIP =
  "The University of Auckland International Business Masters Scholarship (up to NZ$24,000 for the programme) is open to international students in the MAppFin, MBusAn, MIntBus, MMgt, MMktg and MProfAcctg";

const PG_SEMESTER_INTAKE =
  "Semester One (starts 1 March 2027) or Semester Two (starts 19 July 2027). Apply online through the University of Auckland application portal (auckland.ac.nz/apply)";

const PG_SEMESTER_DEADLINE =
  "For 2027 entry, applications close on 8 December 2026 for Semester One and 4 July 2027 for Semester Two. Late applications may be considered if places remain; international students should apply early to leave time for the student visa";

const BUSINESS_MASTERS_INTAKE =
  "Quarter Two (starts 12 April 2027) or Quarter Four (starts 27 September 2027); studied over five quarters. Apply online through the University of Auckland application portal (auckland.ac.nz/apply)";

const BUSINESS_MASTERS_DEADLINE =
  "International applicants: 1 February 2027 for the Quarter Two 2027 intake and 1 July 2027 for the Quarter Four 2027 intake (domestic deadlines are a month later)";

const businessMastersFee = (yearly: string) =>
  `2027 estimate: NZ$81,989.80 for the full 180-point, 15-month programme for international students (the programme page also shows ${yearly} as the indicative international fee for a year of study). The Student Services Fee of NZ$9.65 per point is extra, as are books, insurance and living costs`;

const PG_ENGLISH_STANDARD =
  "English language (if English is not your first language): IELTS Academic 6.5 overall with no band below 6.0, or TOEFL iBT 90 with 21 in writing (4.5 overall and 4.5 in writing on the new 6-point scale), PTE Academic 58 with no communicative score below 50, Cambridge C1 Advanced or C2 Proficiency 176 with no band below 169, or another test on the University's approved list";

const PG_WORK_RIGHTS =
  "Visa and work: a New Zealand Fee Paying Student Visa generally allows up to 25 hours of work a week during study and full-time work in scheduled holidays, depending on visa conditions. A master's degree with at least 30 weeks of full-time study in New Zealand can lead to a Post-Study Work Visa of up to 3 years with open work rights (one per person), per Immigration New Zealand";

export const universityOfAucklandPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Commerce (BCom)",
    slug: "university-of-auckland-bachelor-of-commerce",
    level: "Bachelor",
    field: "Business",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$51,020.40 a year for international students (120 points). ${SERVICES_FEE}. Faculty scholarship: the Dean's Asia Scholarship in the Faculty of Business and Economics covers international tuition fees and compulsory international student health insurance for up to 360 points of study, for students starting the first year of a BCom, BProp or related conjoint. ${UG_SCHOLARSHIPS}`,
    description:
      "Auckland's Business School runs the BCom as a broad business degree in which you sample the whole business world before committing to one or two of 13 majors: Accounting, Business Analytics, Commercial Law, Economics, Finance, Human Resource Management, Information Systems, Innovation and Entrepreneurship, International Business, Management, Marketing, Operations and Supply Chain Management, and Taxation. First year is an integrated core of workshop-style courses on organisations, financial insight, economics and global markets, digital systems, sustainable business growth and statistics for commerce, plus two courses linked to your intended majors. Second year includes a business consulting core course, and in third year you choose a capstone: an industry project, a business simulation or a live business case. The degree can also be taken as a conjoint with Arts, Engineering, Law, Science and several other programmes. The school has its own careers centre for business students.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-commerce-bcom.html",
    degree: "Bachelor of Commerce (BCom)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant or financial adviser",
      "Business analyst",
      "Corporate, investment or merchant banker",
      "Operations manager",
      "Sales or marketing manager",
      "Entrepreneur or business owner",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "International secondary school minimums for 2027 (programme page and Curriculum Catalogue): IB Diploma 28 points, or GCE/Cambridge International A-Levels BBC in at least three subjects (best three academic subjects, General Studies excluded)",
      india(81, 84),
      UG_NO_DIRECT_ENTRY,
      "Transfer from overseas tertiary study: one year of successful bachelor's-level study at a recognised university (or similar institution) with a GPE of 3.5 is the likely minimum",
      UG_ENGLISH_STANDARD,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Engineering (Honours) in Software Engineering",
    slug: "university-of-auckland-behons-software-engineering",
    level: "Bachelor",
    field: "Software Engineering",
    duration: "4 years full-time (480 points), including 800 hours of practical work experience",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$60,909.60 a year for international students in the BE(Hons) (120 points); the University's 2028 estimate is NZ$64,564. ${SERVICES_FEE}. Faculty scholarships: the Colombo Plan Scholarship in Engineering (NZ$3,000 towards tuition for one year) and the Kiwiplan Scholarship (up to NZ$7,000 for one year, open to BE(Hons) Software Engineering students). ${UG_SCHOLARSHIPS}`,
    description:
      "Software Engineering is one of ten specialisations in Auckland's four-year Bachelor of Engineering (Honours), and it is co-taught with the School of Computer Science. The focus is on engineering large, complex and fault-tolerant software that works reliably and can be maintained efficiently, while managing the whole software lifecycle. Every BE(Hons) student first takes a common Part I covering materials science, electrical and digital systems, engineering design, mechanics, mathematical modelling and engineering computation, and then follows the specialisation through Parts II to IV alongside a shared core in mathematical modelling, design communication and project management. Software topics include algorithm design and analysis, computer architecture, data communications, operating systems, programming languages, human-computer interaction, robotics and machine learning, and software design and construction. Students complete a 40-hour workshop practice course and 800 hours of practical work, and the degree is accredited by Engineering New Zealand, a Washington Accord signatory.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/software-engineering/undergraduate.html",
    degree: "Bachelor of Engineering (Honours) – BE(Hons), Software Engineering specialisation",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software engineer or developer",
      "Systems engineer",
      "Research and design engineer",
      "Analyst",
      "Project manager",
      "Consultant engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "International secondary school minimums for 2027: IB Diploma 33 points with Mathematics and Physics at Higher Level on the BE(Hons) programme page (the Curriculum Catalogue lists 32), or GCE/Cambridge International A-Levels BBB including Mathematics and Physics",
      india(85, 88, "For other state boards the catalogue also asks for at least 88% in Physics and Mathematics"),
      "Part I is common to all ten BE(Hons) specialisations, and you continue in Software Engineering for Parts II to IV",
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_ENGINEERING,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Engineering (Honours) in Civil Engineering",
    slug: "university-of-auckland-behons-civil-engineering",
    level: "Bachelor",
    field: "Civil Engineering",
    duration: "4 years full-time (480 points), including 800 hours of practical work experience",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$60,909.60 a year for international students in the BE(Hons) (120 points); the University's 2028 estimate is NZ$64,564. ${SERVICES_FEE}. Faculty scholarship: the Colombo Plan Scholarship in Engineering (NZ$3,000 towards tuition for one year). ${UG_SCHOLARSHIPS}`,
    description:
      "The Civil Engineering specialisation of Auckland's BE(Hons) combines buildings and infrastructure with environmental management, with a strong emphasis on applying maths and science to real projects. After the common Part I in engineering fundamentals, students study structural engineering (designing structures for the loads they carry over their lifetime), geotechnical engineering (the behaviour of soils and rock for foundations, slopes and retaining structures), transportation engineering, water engineering (supply, drainage, flood protection, hydro-power and climate resilience), construction management and environmental engineering, including water treatment, air pollution, waste and environmental impact assessment. The department is also weaving mātauranga Māori into course content and projects. As with every BE(Hons) specialisation, students complete a 40-hour workshop practice course and 800 hours of practical work, and the degree is accredited by Engineering New Zealand, so it is recognised in many countries.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/civil-engineering/undergraduate.html",
    degree: "Bachelor of Engineering (Honours) – BE(Hons), Civil Engineering specialisation",
    workIntegrated: true,
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Civil or structural engineer",
      "Geotechnical engineer",
      "Transportation or water engineer",
      "Quantity surveyor",
      "Project manager",
      "Consultant engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "International secondary school minimums for 2027: IB Diploma 33 points with Mathematics and Physics at Higher Level on the BE(Hons) programme page (the Curriculum Catalogue lists 32), or GCE/Cambridge International A-Levels BBB including Mathematics and Physics",
      india(85, 88, "For other state boards the catalogue also asks for at least 88% in Physics and Mathematics"),
      "Part I is common to all ten BE(Hons) specialisations, and you continue in Civil Engineering for Parts II to IV",
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_ENGINEERING,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science (BSc) in Computer Science",
    slug: "university-of-auckland-bsc-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$49,581.60 to NZ$60,909.60 a year for international students in the BSc, depending on courses (the BSc programme page shows NZ$48,426 to NZ$60,910). ${SERVICES_FEE}. Faculty scholarship: the Kiwiplan Scholarship (up to NZ$7,000 for one year) is open to BSc students in Computer Science or Information and Technology Management. ${UG_SCHOLARSHIPS}`,
    description:
      "Computer Science is a major within Auckland's three-year Bachelor of Science, taught by the School of Computer Science. It covers how computers store and manage information, how algorithms and programming languages tell them what to do, how hardware and system software work, how networks connect machines, and what computers can and cannot compute. Topics on offer include algorithms, artificial intelligence, complexity theory, computer vision, cyber security, data science, graphics, human-computer interaction, logic, networks, robotics and software engineering. A BSc needs 360 points, usually as 15-point courses, with at least one major plus a numeracy course (a new requirement from 2027) and a final-year capstone; for Computer Science the suggested capstone is COMPSCI 399, a team project taken from idea to finished product. First year is flexible, so you can explore other science subjects, and Computer Science pairs well with majors such as Mathematics, Statistics, Physics or Information and Technology Management.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/computer-science/undergraduate.html",
    degree: "Bachelor of Science (BSc), Computer Science major",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software architect or engineer",
      "Front-end or back-end developer",
      "Business or systems analyst",
      "Cloud systems engineer",
      "Database developer",
      "Game or UX developer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "The BSc is a limited-entry programme. International secondary school minimums for 2027 for most majors, including Computer Science: IB Diploma 26 points, or GCE/Cambridge International A-Levels BCC in at least three subjects",
      india(80, 82),
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_STANDARD,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science (BSc) in Data Science",
    slug: "university-of-auckland-bsc-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$49,581.60 to NZ$60,909.60 a year for international students in the BSc, depending on courses (the BSc programme page shows NZ$48,426 to NZ$60,910). ${SERVICES_FEE}. ${UG_SCHOLARSHIPS}`,
    description:
      "Data Science is a specialisation in Auckland's BSc, meaning it makes up about half of your degree, and it combines courses from Computer Science, Statistics and Mathematics. Auckland's Department of Statistics is where the R programming language began in the 1990s. First year lays the foundations in statistics, computer science and maths, including data analysis, probability, programming principles and data structures. Second year adds data technologies, algorithmics and statistical theory and applications, and the final year covers statistical modelling, statistical computing, applied algorithmics, database systems and artificial intelligence. You finish with a capstone such as DATASCI 399, COMPSCI 399 or STATS 399, a student-led project applying your learning to a real problem. Along the way you learn to process and manage data, combine data from different sources, build statistical and predictive models and communicate what the data shows.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/data-science/undergraduate.html",
    degree: "Bachelor of Science (BSc), Data Science specialisation",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data analyst",
      "Data scientist",
      "Database administrator",
      "Statistician",
      "Insight manager",
      "Developer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "The BSc is a limited-entry programme. International secondary school minimums for 2027 for most majors and specialisations, including Data Science: IB Diploma 26 points, or GCE/Cambridge International A-Levels BCC in at least three subjects",
      india(80, 82),
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_STANDARD,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Health Sciences (BHSc)",
    slug: "university-of-auckland-bachelor-of-health-sciences",
    level: "Bachelor",
    field: "Health Sciences",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS.grafton,
    tuitionNote: `2027 estimate: NZ$44,959.20 a year for international students on the University's undergraduate international fees table, while the BHSc programme page shows NZ$47,270.40; check your fee statement once you enrol. ${SERVICES_FEE}. ${UG_SCHOLARSHIPS}`,
    description:
      "The BHSc, taught at Auckland's Grafton health campus, looks at what shapes the health of whole populations rather than treating individual patients. It blends the social, cultural and behavioural sides of health and illness with how health systems work in Aotearoa New Zealand and beyond. Students choose from two majors, Community Health (health promotion and community development with diverse communities) and Health Systems and Data Analytics (using data and technology to make the health system smarter and more efficient), and can add Nutrition from the BSc as a second major. Stage I mixes core and elective courses, and Stages II and III build on the major. Final-year students may get a work placement with a health employer, and the degree is also a pathway for applying into Year 2 of Auckland's clinical programmes in Medicine, Medical Imaging, Optometry and Pharmacy (specific Stage I courses are needed). Conjoints with Arts, Commerce, Law or Science are possible.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-health-sciences-bhsc.html",
    degree: "Bachelor of Health Sciences (BHSc)",
    workIntegrated: true,
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Health policy adviser",
      "Health services manager",
      "Health promoter",
      "Health researcher",
      "Health economist",
      "Community health lead",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "The BHSc is a limited-entry programme. International secondary school minimums for 2027: IB Diploma 28 points, or GCE/Cambridge International A-Levels BBC in at least three subjects",
      india(81, 84),
      "Students who want to apply for the Year 2 clinical programmes (such as Medicine or Pharmacy) must take the specific Stage I courses those programmes require; selection into them is separate",
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_STANDARD,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Arts (BA)",
    slug: "university-of-auckland-bachelor-of-arts",
    level: "Bachelor",
    field: "Arts and Humanities",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$42,236.40 a year for international students taking standard BA courses, or NZ$51,020.40 for performance and science-based courses (120 points). ${SERVICES_FEE}. ${UG_SCHOLARSHIPS}`,
    description:
      "Auckland's BA lets you build a degree around the subjects you enjoy and finish with a double major. You can explore in first year before picking two majors from a long list that includes Anthropology, Asian Studies, Chinese, Japanese and Korean, Criminology, Drama, Economics, Education, English, History, Linguistics, Māori Studies, Media and Screen Studies, Pacific Studies, Philosophy, Politics and International Relations, Psychology, Sociology, Statistics and TESOL. The degree is 24 courses: eight in each major, two General Education courses and six electives, of which up to two can come from other faculties such as Science. The University pitches the BA as a way to build communication, critical and creative thinking skills that stay useful as the job market changes, and the BA can be combined with Commerce, Engineering, Law, Science, Music and other degrees as a conjoint.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-arts-ba.html",
    degree: "Bachelor of Arts (BA)",
    areaOfInterest: "Literature, Language, & Culture",
    careerOutcomes: [
      "Government policy adviser",
      "Journalist or social media adviser",
      "Communications specialist",
      "Museum curator",
      "Digital content manager",
      "Charity director",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "International secondary school minimums for 2027: IB Diploma 26 points, or GCE/Cambridge International A-Levels CCC in at least three subjects",
      india(75, 80),
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_STANDARD,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Architectural Studies (BAS)",
    slug: "university-of-auckland-bachelor-of-architectural-studies",
    level: "Bachelor",
    field: "Architecture",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$54,754.80 a year for international students (120 points); the University's 2028 estimate is NZ$58,039. ${SERVICES_FEE}. ${UG_SCHOLARSHIPS}`,
    description:
      "The BAS is the first step towards becoming an architect in New Zealand. Through design studios, real-world case studies and speculative future-focused projects, students learn to design through drawing and making by hand and digitally, using industry software and fully equipped workshops. First year introduces design, architectural media, the history and theory of architecture, sustainable design, materials and construction principles. From second year students go deeper into architectural design, media, materials and sustainable practice, historical precedent and theory, and are introduced to project management. The BAS on its own does not qualify you as an architect: professional registration requires the Master of Architecture (Professional) or one of the associated combined masters, which most students start straight after the BAS.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-architectural-studies-bas.html",
    degree: "Bachelor of Architectural Studies (BAS)",
    areaOfInterest: "Design & Visual Studies",
    careerOutcomes: [
      "Architect (after the MArch(Prof) and professional registration)",
      "Interior designer",
      "Digital design professional",
      "Heritage or cultural consultant",
      "Building industry consultant",
      "Project manager",
    ],
    intake:
      "Semester One only (starts 1 March 2027). Apply online through the University of Auckland application portal (auckland.ac.nz/apply), then submit your portfolio and statement through SlideRoom",
    applicationDeadline:
      "For Semester One 2027, applications close on 8 December 2026, and portfolios are not assessed until after that closing date. International students should apply early to leave time for the student visa",
    admissionRequirements: [
      "International secondary school minimums for 2027: IB Diploma 31 points, or GCE/Cambridge International A-Levels BBB in at least three subjects",
      india(80, 82),
      "Selection is based on academic results together with a portfolio of creative work and a one-page written statement about yourself and why you want to study architecture at Auckland, both submitted through SlideRoom (see the programme's portfolio guidelines)",
      UG_NO_DIRECT_ENTRY,
      UG_ENGLISH_STANDARD,
      UG_WORK_RIGHTS,
    ],
  },

  // ---------- Postgraduate ----------

  {
    ...UNIVERSITY,
    name: "Master of Information Technology (MInfoTech)",
    slug: "university-of-auckland-master-of-information-technology",
    level: "Master",
    field: "Information Technology",
    duration: "1 year (120 points), 1.5 years (180 points) or 2 years (240 points) full-time, depending on your background",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: about NZ$57,974 a year for international students (120 points), per the programme page; total cost depends on whether you take the 120, 180 or 240-point option. ${SERVICES_FEE}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MInfoTech is an industry-focused IT masters offered through the ICT Graduate School, a partnership between the University of Auckland and the University of Waikato, and the degree is awarded jointly by both universities. It aims to produce ICT graduates with the right mix of technical skills and business awareness, and its standout feature is a 10-week, full-time industry internship (worth 60 points) on a real-world project. There are three entry routes: a 120-point masters for students with a year of postgraduate IT study, a 180-point masters for IT graduates, and a 240-point masters for graduates of any discipline, who first take two foundational computer science courses (COMPSCI 718 and 719). Alongside the internship, students take courses from the programme's technical skills and complementary skills lists, and may add other approved 600 or 700-level courses.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-information-technology-minfotech.html",
    degree: "Master of Information Technology (MInfoTech), awarded jointly with the University of Waikato",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer or architect",
      "Cloud computing specialist",
      "Cybersecurity specialist",
      "Data scientist",
      "Network developer and support",
      "Team manager",
    ],
    intake: `${PG_SEMESTER_INTAKE}. A Late Year Term intake (November/December) is offered for the 240-point option only`,
    applicationDeadline: `${PG_SEMESTER_DEADLINE}. The Late Year Term 2026 intake (240-point option) closed on 24 October 2026`,
    admissionRequirements: [
      "120 points: one year of postgraduate study in an IT-related field (such as computer science, information systems or software engineering) after your bachelor's degree, with a GPE of 4.5",
      "180 points: a bachelor's degree in an IT-related field from a recognised university with a GPE of 4.5. 240 points: a bachelor's degree in any discipline with a GPA/GPE of 4.5 (relevant work experience may be considered). Holders of a masters in the same or a very similar field may not be eligible",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Data Science (MDataSci)",
    slug: "university-of-auckland-master-of-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1.5 years (180 points) or 2 years (240 points) full-time",
    campus: CAMPUS.city,
    tuitionNote: `2027 estimate: NZ$57,974 to NZ$58,258 a year for international students (120 points), per the programme page. ${SERVICES_FEE}. ${PG_SCHOLARSHIPS}`,
    description:
      "Auckland's Master of Data Science builds a strong core of Computer Science and Statistics, so graduates can understand, process and manage data and turn it into information, knowledge and products. It is a taught masters with two routes. The 180-point option is for students who majored in data science or in both computer science and statistics. The 240-point option, which starts in March only, is for students with a background in either computer science or statistics but not both. Courses are chosen from the programme schedule in the University's Curriculum Catalogue, and the University describes graduates as critical, reflective practitioners ready for professional data roles or further postgraduate study.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-data-science-mdats.html",
    degree: "Master of Data Science (MDataSci)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Machine learning engineer",
      "Business analyst",
      "Big data solutions architect",
      "Data mining engineer",
      "Digital product designer",
    ],
    intake: `${PG_SEMESTER_INTAKE}. The 240-point option starts in Semester One (March) only`,
    applicationDeadline: PG_SEMESTER_DEADLINE,
    admissionRequirements: [
      "An undergraduate science degree from a recognised university in a relevant discipline, such as data science or a mix of computer science and statistics, with a GPE of 4.0. Relevant study must make up at least a major or field of study (roughly 30% of the degree), including introductory and advanced courses",
      "Choose the 180-point option if you majored in data science or in both computer science and statistics, and the 240-point option if your background is in only one of the two",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Engineering Studies (MEngSt)",
    slug: "university-of-auckland-master-of-engineering-studies",
    level: "Master",
    field: "Engineering",
    duration: "1 year (120 points) for four-year engineering graduates or 1.5 years (180 points) for three-year engineering graduates, full-time",
    campus: "City Campus, Grafton and Newmarket (Auckland), depending on specialisation",
    tuitionNote: `2027 estimate: NZ$58,257.60 a year for international students (Engineering, 120 points); geothermal energy courses are charged at a higher rate (NZ$71,616 for 120 points). ${SERVICES_FEE}. Faculty scholarship: the Colombo Plan Scholarship in Engineering (NZ$3,000 towards tuition for one year). ${PG_SCHOLARSHIPS}`,
    description:
      "The MEngSt is a flexible masters for engineering graduates who want to deepen their technical and practical skills in one area. It can be taken mainly by coursework or, in some specialisations, as a research masters, full-time or part-time. Taught specialisations include Chemical and Materials, Computer Systems, Construction Management, Electrical and Electronic, Engineering Science, Mechanical, Mechatronics and Software Engineering, and research options are offered in areas such as Food Engineering and Sustainable Resource Recovery. Course choices depend on the specialisation: some are tightly structured, others let you tailor courses to your interests. Civil, environmental, transport and geotechnical options have moved to the separate Master of Civil Engineering. The University stresses in-depth exploration of a topic and the critical thinking and problem-solving that employers look for, and the degree also prepares students for doctoral study.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-engineering-studies-mengst.html",
    degree: "Master of Engineering Studies (MEngSt)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Design engineer",
      "Product engineer",
      "Senior engineer",
      "Process engineering manager",
      "Project manager",
      "Software developer",
    ],
    intake: PG_SEMESTER_INTAKE,
    applicationDeadline:
      "For 2027 entry, applications close on 8 December 2026 for Semester One and 8 July 2027 for Semester Two. International students should apply early to leave time for the student visa",
    admissionRequirements: [
      "120 points (taught or research): a four-year bachelor's degree in engineering from a recognised university, in a field close to your specialisation, with a GPE of 4.0. The degree must include broad first-year coverage of engineering fundamentals (mathematical modelling, chemical and materials science, electrical theory, mechanics, programming and design), a year of postgraduate-level study and a research project or dissertation of at least a quarter of the final year",
      "180 points: an undergraduate engineering degree from a recognised university, in a field close to your specialisation, with a GPE of 4.0",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Analytics (MBusAn)",
    slug: "university-of-auckland-master-of-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "15 months full-time (180 points over five quarters)",
    campus: CAMPUS.city,
    tuitionNote: `${businessMastersFee("NZ$59,750")}. ${BUSINESS_MASTERS_SCHOLARSHIP}. ${PG_SCHOLARSHIPS}`,
    description:
      "A practice-focused 15-month masters from Auckland's Business School for recent graduates from business or other fields, and for mid-career professionals, who have not already studied business analytics or data science. Part I is six core courses: analysing business problems, analytics tools, information management, data visualisation for business, predictive analytics and AI for business. In Part II you specialise in Marketing, Supply Chain Management or FinTech (specialisations depend on demand and are not offered every quarter), with courses such as ethics and data governance, customer and market insights, digital machine learning, supply chain optimisation and consultancy practice. The programme ends with a 30-point applied project, either with an organisation or guided by an industry mentor. A big emphasis is on explaining findings to non-technical audiences through visualisation and storytelling. Students without the GPA for direct entry can start with the Postgraduate Certificate in Business Analytics.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-business-analytics.html",
    degree: "Master of Business Analytics (MBusAn)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Business analytics professional",
      "Business insights executive",
      "Customer insights officer",
      "Database analyst",
      "Consultant",
      "Investment specialist",
    ],
    intake: BUSINESS_MASTERS_INTAKE,
    applicationDeadline: BUSINESS_MASTERS_DEADLINE,
    admissionRequirements: [
      "An undergraduate degree in business, or in a relevant non-business field such as arts, engineering, technology or science, from a recognised university, with a GPE of 5.0 in the most advanced courses",
      "A pass in an undergraduate business statistics course (STATS 108 or equivalent). The programme is not for students who majored in Business Analytics or Data Science, and students with advanced courses similar to MBusAn courses take substitutes",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Professional Accounting (MProfAcctg)",
    slug: "university-of-auckland-master-of-professional-accounting",
    level: "Master",
    field: "Accounting",
    duration: "15 months full-time (180 points over five quarters)",
    campus: CAMPUS.city,
    tuitionNote: `${businessMastersFee("NZ$62,631 to NZ$66,389")}. ${BUSINESS_MASTERS_SCHOLARSHIP}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MProfAcctg is a professional coursework masters from Auckland's Business School for graduates who want to become chartered or certified practising accountants, including those whose first degree was not in accounting. Over five quarters students take core business courses and a set of specialised courses in accounting, finance, commercial law and taxation, plus a professional development module that builds the workplace skills employers expect. The programme provides the academic preparation for professional accounting bodies and is recognised by Chartered Accountants Australia and New Zealand (CAANZ), CPA Australia, ACCA and CIMA. The Business School's careers centre offers workshops, one-to-one support and opportunities to network with employers and learn about the local business environment.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-professional-accounting-mprofacctg.html",
    degree: "Master of Professional Accounting (MProfAcctg)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Auditor",
      "Management accountant",
      "Tax specialist",
      "Business adviser",
      "Systems accountant",
      "Policy adviser",
    ],
    intake: BUSINESS_MASTERS_INTAKE,
    applicationDeadline: BUSINESS_MASTERS_DEADLINE,
    admissionRequirements: [
      "A bachelor's degree from a recognised university, in business or a relevant non-business field such as arts, engineering, technology or science, with at least the equivalent of a New Zealand B average (GPE 5.0) in the most advanced courses. The ranking of your university and your grades in relevant subjects are taken into account",
      "Students who have already taken advanced courses similar to those in the programme are required to take substitute courses, decided case by case",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of International Business (MIntBus)",
    slug: "university-of-auckland-master-of-international-business",
    level: "Master",
    field: "International Business",
    duration: "15 months full-time (180 points over five quarters)",
    campus: CAMPUS.city,
    tuitionNote: `${businessMastersFee("NZ$62,631 to NZ$66,389")}. ${BUSINESS_MASTERS_SCHOLARSHIP}. ${PG_SCHOLARSHIPS}`,
    description:
      "Designed for graduates from non-business disciplines, or from an unrelated business field, who want to launch a career in international business. Over five quarters students take core business courses in managing people, economics, financial reporting, business analytics, business insights and strategic management, then specialist international business courses, and finish with an industry-focused capstone project. A professional development module runs through the programme to build the workplace skills employers look for. The University describes the MIntBus as experiential and applied, giving students an understanding of how businesses, governments and the global economy interact. The Business School's careers centre helps students network with employers and learn about the local job market.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-international-business-mintbus.html",
    degree: "Master of International Business (MIntBus)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "International business analyst",
      "Business development manager",
      "Export analyst",
      "International marketing representative",
      "International trade policy adviser",
      "International relations consultant",
    ],
    intake: BUSINESS_MASTERS_INTAKE,
    applicationDeadline: BUSINESS_MASTERS_DEADLINE,
    admissionRequirements: [
      "An undergraduate degree in business, or in a relevant non-business field such as humanities, engineering, technology or science, from a recognised university, with a GPE of 5.0 in the most advanced courses",
      "Students who have already taken advanced courses similar to those in the programme are required to take substitute courses, decided case by case",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Health (MPH)",
    slug: "university-of-auckland-master-of-public-health",
    level: "Master",
    field: "Public Health",
    duration: "1 year (120 points) or 2 years (240 points) full-time, taught or research",
    campus: CAMPUS.grafton,
    tuitionNote: `2027 estimate: NZ$57,974 a year for international students (120 points), per the programme page. ${SERVICES_FEE}. ${PG_SCHOLARSHIPS}`,
    description:
      "Taught at the Grafton health campus, Auckland's MPH is aimed at people heading for careers in disease prevention, surveillance, health promotion, epidemiology and other public health fields, and it is recognised as Part I of training for a Public Health Registrar. Students can take it as a taught or research masters. Graduates with a relevant bachelor's degree take the 240-point route: a year of advanced courses from the Postgraduate Diploma in Public Health schedule, then either advanced courses in an area such as Health Informatics, Health Management, Māori Health, Population Health or Population Health Practice plus a 60-point dissertation (taught), or a 120-point thesis (research). Students who already hold a postgraduate public health qualification can take a one-year 120-point version. The University notes that it cannot guarantee registration or employment in New Zealand or elsewhere.",
    officialProgramUrl:
      "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-public-health-mph.html",
    degree: "Master of Public Health (MPH)",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Public health officer or analyst",
      "Epidemiologist or disease surveillance specialist",
      "Health promoter",
      "Health planner or policy adviser",
      "Public health manager",
      "Disease prevention specialist",
    ],
    intake: "Semester One (starts 1 March 2027) or Semester Two (starts 19 July 2027); a Late Year Term start is also listed. Apply online through the University of Auckland application portal (auckland.ac.nz/apply)",
    applicationDeadline: PG_SEMESTER_DEADLINE,
    admissionRequirements: [
      "240 points (taught or research): a bachelor's degree from a recognised university in dentistry, health sciences, medicine, nursing, occupational therapy, optometry, pharmacy, physiotherapy, psychology, public health or social sciences for public health, with a GPE of 5.0, plus a statement of about 500 words on why you want to study public health",
      "120 points: one year of postgraduate study in public health after an undergraduate degree, with a GPE of 5.0; the research option also needs a supervisor and topic",
      GPE_NOTE,
      PG_ENGLISH_STANDARD,
      PG_WORK_RIGHTS,
    ],
  },
];
