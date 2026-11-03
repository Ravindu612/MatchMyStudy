import type { Program } from "../../programs";

// Technological University Dublin (TU Dublin; Dublin, Ireland): 7 undergraduate degrees and 8 one-year taught master's programmes,
// chosen for their popularity with international (non-EU) students. Sources (viewed November 2, 2026):
// - TU Dublin course pages for each programme (https://www.tudublin.ie/study/undergraduate/courses/... and
//   https://www.tudublin.ie/study/postgraduate/courses/...), with their key facts, fees, course description, entry requirements,
//   English language requirement, careers, module listing and How to Apply sections
// - International Undergraduate Programmes 2026/27 listing (non-EU fee per year, IELTS and campus for each course)
//   (https://www.tudublin.ie/media/website/study/international-students/find-a-course/documents/International-UG-Listing-Brochure-2026.pdf)
// - Postgraduate Fees, September 2026 - August 2027 (approved by Governing Body February & June 2026, updated 31 August 2026)
//   (https://www.tudublin.ie/media/website/for-students/student-services-and-support/registration-and-fees/documents/postgraduate_fees_26-27_Updated_310826.pdf)
// - International Student Hub, Fees (deposit and payment rules) (https://www.tudublin.ie/study/international/fees--registration/fees---funding/)
// - International undergraduate and postgraduate applications (application fee, documents, 2026 closing dates)
//   (https://www.tudublin.ie/study/international/how-to-apply/undergraduate-courses/ and .../how-to-apply/postgraduate-courses/)
// - Undergraduate entry requirements (IB) and the Africa, Middle East, India pages for undergraduate and postgraduate entry
//   (https://www.tudublin.ie/study/international/how-to-apply/entry-requirements/)
// - English Language Requirements (https://www.tudublin.ie/study/international/how-to-apply/entry-requirements/english-language-requirements/)
// Fees are in euro and are the latest published (2026-27). TU Dublin had not published 2027-28 international fees; course pages,
// which already list September 2027 starts, show the same figures without naming a year. TU Dublin's scholarships page lists no
// general scholarship for non-EU taught students, so none is mentioned here.

const UNIVERSITY = {
  universitySlug: "technological-university-dublin",
  universityName: "Technological University Dublin",
  country: "Ireland",
  language: "English",
  campus: "Grangegorman (Dublin city centre)",
  programType: "Full-time",
} as const;

const DEPOSIT =
  "To guarantee a place, non-EU students pay at least 50% of the year's tuition fee (or €6,000, whichever is greater); the balance can be paid in instalments but must be cleared by the end of January for September starts (end of May for January starts). TU Dublin takes international payments through TransferMate";

// ---------- Undergraduate ----------

const UG_FEE = (fee: string) =>
  `2026-27: the non-EU fee is ${fee} a year, per the course page and TU Dublin's International Undergraduate Programmes 2026/27 listing. Fees are set every year and TU Dublin had not published 2027-28 international fees, so September 2027 entrants may pay a different rate. ${DEPOSIT}`;

const UG_INTAKE =
  "September. Non-EU applicants apply directly to TU Dublin through the 'Apply Now – Non-EU' link on the course page (online CRM Recruit system, €50 non-refundable application fee), not through the CAO";

const UG_DEADLINE =
  "Non-EU applications for September 2027 typically open in November 2026 and close in June 2027; TU Dublin had not published the exact 2027 date (for September 2026 entry the closing date was Friday 26 June 2026). Some courses close early once full. The CAO deadline of 1 February applies to EU applicants and to anyone presenting the Irish Leaving Certificate or a QQI FET award";

const UG_INDIA = (maths: string) =>
  `Non-EU academic requirements (example for India): HSC XII from CBSE, ICSE, Kolkata or Tamil Nadu boards with an overall average of 70% or more (West Bengal 58%, Maharashtra or Gujarat 75%, other state boards 80%), and ${maths}. Standard XI alone does not qualify; applicants below these grades can enter through TU Dublin's International Foundation Programme or a year of an Indian degree with 55%`;

const UG_IB = (honours: 2 | 3) =>
  honours === 3
    ? "International Baccalaureate: an overall IB score of 24 including three subjects at grade 5 Higher Level and three at grade 4 Standard Level (IB Mathematical Studies does not meet maths requirements). TU Dublin also accepts A Levels and other national school-leaving qualifications, listed by region on its international entry requirements pages"
    : "International Baccalaureate: an overall IB score of 24 and the award of the Diploma (IB Mathematical Studies does not meet maths requirements). TU Dublin also accepts A Levels and other national school-leaving qualifications, listed by region on its international entry requirements pages";

const UG_ENGLISH = (course: string) =>
  `English language (if English is not your first language; results from a single sitting, issued within 2 years of the course start): ${course}. TU Dublin's standard minimums are IELTS Academic 6.0 with at least 6.0 in each band; TOEFL iBT 80 with at least 21 in writing and 18 in the other sections (tests taken before 21 January 2026) or 4.5 overall with 4.5 in writing and 4 elsewhere on the new scale; Duolingo 120 with 110 in each subscore; PTE Academic 65; LanguageCert B2 Communicator High Pass with 33 in each skill; Cambridge English 180 with 175 in each skill (C2 Proficiency or C1 Advanced grade C, B2 First grade A); Trinity ISE III with merit in each skill; or IB English 5 at Higher Level. Its comparison table treats IELTS 6.5 as Duolingo 130, TOEFL 92 or PTE 70`;

// ---------- Postgraduate ----------

const PG_FEE = (fee: string) =>
  `2026-27: the full-time non-EU fee is ${fee} for the whole programme, per TU Dublin's Postgraduate Fees schedule for September 2026 - August 2027 (approved February and June 2026, updated 31 August 2026); the course page, which already lists a September 2027 start (to be confirmed), shows the same total without naming a year, and 2027-28 rates had not been published. ${DEPOSIT}`;

const PG_INTAKE = "September (full-time, on campus)";

const PG_DEADLINE =
  "Applications for September 2027 entry reopen in mid-November 2026, per the course page. TU Dublin had not published its 2027 non-EU closing date; for September 2026 entry, full-time non-EU applications closed on Friday 26 June 2026, and courses can close earlier once full. Visa processing can take up to 12 weeks, so apply early";

const PG_COUNTRY =
  "Country equivalents (TU Dublin postgraduate entry requirements for India): for a four-year engineering or technology degree, a 2:2 is treated as 50-55% and a 2:1 as 65-70%, depending on the tier of the awarding institution; for three-year professional degrees such as BBA or BCA, a 2:2 is 5-5.5/10 CGPA and a 2:1 is 6.5-7/10 CGPA. A grading scale must be submitted, and TU Dublin notes that degrees should generally be at least four years long";

const PG_ENGLISH = (ielts: string) =>
  `English language (if English is not your first language; issued within 2 years of the course start): IELTS Academic ${ielts}, or an equivalent test. TU Dublin's comparison table treats IELTS 6.0 as Duolingo 120, TOEFL iBT 80 or PTE 65, 6.5 as Duolingo 130, TOEFL 92 or PTE 70, and 7.0 as Duolingo 135, TOEFL 100 or PTE 75; Trinity ISE IV with merit is also accepted. A degree taught through English or in an English-speaking country may be accepted at the university's discretion`;

const PG_APPLY =
  "Application: apply online through TU Dublin's CRM Recruit system from the course page (€50 non-refundable application fee) with your passport, grading scale, degree certificate and transcripts for each year (original and English translation), proof of English, an up-to-date CV and a statement of purpose of about 500 words. Meeting the minimum requirements does not guarantee a place, and some applicants are interviewed";

export const tuDublinPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "BSc (Hons) Computer Science - TU856",
    slug: "tu-dublin-bsc-computer-science-tu856",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (240 ECTS)",
    tuitionNote: UG_FEE("€13,500"),
    description:
      "TU856 is TU Dublin's main four-year computer science degree at the School of Computer Science in Grangegorman, with 85 places. The first two years build the foundations: programming, program design, web development, computer architecture, operating systems, databases, object-oriented programming, algorithms and data structures, software engineering and GenAI-assisted programming. Third year is the experiential year, with cloud computing, mobile development, client-server programming and an introduction to AI, then a choice of a work placement, a service-learning ICT project with a community organisation, a team project or a semester abroad. Final year centres on a year-long project plus electives such as machine learning, distributed systems, security, games engines, IoT, image processing and data visualisation. The school lists links with Oracle, Microsoft, IBM, Google, SAP and Salesforce for placements and graduate jobs.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/computer-science-tu856/",
    degree: "Bachelor of Science (Honours) in Computer Science (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: ["Software engineer", "Software developer", "Systems analyst", "Games designer", "Network administrator"],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with two H5 grades, including O5/H6 in Mathematics and O6/H6 in English or Irish. The 2026 CAO points range for EU entrants was 423-613",
      UG_INDIA("at least 80% in Mathematics (TU Dublin's level for computing, engineering and science programmes)"),
      UG_IB(2),
      UG_ENGLISH("this course asks for IELTS 6.0 overall with no band below 6.0"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Data Science and Artificial Intelligence - TU850",
    slug: "tu-dublin-bsc-data-science-artificial-intelligence-tu850",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (240 ECTS)",
    tuitionNote: UG_FEE("€13,500"),
    description:
      "A smaller (40-place) companion to TU856 that is a computer science degree at heart, with data science and AI layered on top. First year mixes programming, web development, computational thinking, computer systems and creative coding with a module on sustainable data science and AI. Second year adds databases, data-centric programming, mathematics and statistics for data science, algorithms, data visualisation and a generative AI module. In third year students study machine learning, knowledge-driven AI, big data programming and digital ethics, then choose a work placement, team or individual project, service learning or study abroad. Final year covers deep learning and neural networks, natural language technologies and real-world AI, with options in computer vision, knowledge graphs, audio processing and reinforcement learning, alongside a two-semester final-year project.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/data-science-and-ai/",
    degree: "Bachelor of Science (Honours) in Data Science and Artificial Intelligence (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Data analyst",
      "Machine learning engineer",
      "Data architect",
      "Software developer",
      "AI or data science researcher",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with two H5 grades, including O3/H7 in Mathematics and O6/H7 in English or Irish. The 2026 CAO points range for EU entrants was 424-586",
      UG_INDIA("at least 80% in Mathematics (TU Dublin's level for computing, engineering and science programmes)"),
      UG_IB(2),
      UG_ENGLISH("this course asks for IELTS 6.0 overall"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BEng (Hons) Engineering (General Entry) - TU805",
    slug: "tu-dublin-beng-engineering-general-entry-tu805",
    level: "Bachelor",
    field: "Engineering",
    duration:
      "1-year common first year (60 ECTS), after which students progress to Year 2 of a four-year Level 8 engineering degree (4 years in total)",
    campus: "Bolton Street and Grangegorman (Dublin city centre)",
    tuitionNote: `${UG_FEE("€14,500")}. The listed fee covers the TU805 year; later years are billed under the engineering degree you progress into, which the 2026/27 listing does not price separately`,
    description:
      "TU805 is the common first year for most of TU Dublin's four-year honours engineering degrees, with 160 places across Bolton Street and Grangegorman. Rather than choosing a discipline at application, students spend first year on mathematics, physics, chemistry, mechanics, electrotechnology, instrumentation, technical graphics and engineering computing, backed by laboratories and hands-on design projects such as building a robot, a bridge and an energy-efficiency project. Students who complete the year move into Year 2 of one of six degrees: Electrical & Electronic/Computer & Communication Engineering (TU821), Mechanical (TU822), Manufacturing (TU823), Structural (TU824), Building (TU825) or Civil Engineering (TU826). TU Dublin says it may occasionally have to manage numbers per discipline but aims to place successful students in their preferred option. The resulting degrees are accredited by Engineers Ireland, and a Windows laptop is recommended.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/engineering-general-entry-tu805/",
    degree:
      "Bachelor of Engineering (Honours) (NFQ Level 8), awarded in the discipline chosen after the common first year",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: ["Professional engineer (civil, structural, building, mechanical, manufacturing, or electrical and electronic)"],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with two H5 grades, including H4 in Mathematics (or H4 in Applied Mathematics with at least H6 in Mathematics) and O6/H7 in English or Irish. The 2026 CAO points range for EU entrants was 510-613",
      UG_INDIA("at least 80% in Mathematics (TU Dublin's level for computing, engineering and science programmes)"),
      UG_IB(2),
      UG_ENGLISH("this course asks for IELTS 6.0 overall with no band below 6.0"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Product Design - TU811",
    slug: "tu-dublin-bsc-product-design-tu811",
    level: "Bachelor",
    field: "Design",
    duration: "4 years full-time (240 ECTS)",
    campus: "Bolton Street, Grangegorman and Aungier Street (Dublin city centre)",
    tuitionNote: UG_FEE("€14,500"),
    description:
      "Running since 2003 with 36 places a year, Product Design draws on three TU Dublin faculties: engineering at Bolton Street (usually two to three days a week), art and design at Grangegorman and business at Aungier Street, all within walking distance of each other. Students learn to take a product through the full development cycle, from sketching, design mathematics, applied physics, materials and virtual modelling in the early years to prototyping and model-making, product visualisation, design innovation and client projects. Third year covers interaction design, design for manufacture, enterprise development and the legal side of product design, with the option of a semester at a partner such as San Francisco State University, UPC Barcelona or Hong Kong PolyU. Final year is built around a major project, sustainability and professional practice. Graduates can join the Institution of Engineering Designers as full members.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/product-design-tu811/",
    degree: "Bachelor of Science (Honours) in Product Design (NFQ Level 8)",
    areaOfInterest: "Design & Visual Studies",
    careerOutcomes: [
      "Product or industrial designer",
      "Medical device designer",
      "User experience or interaction designer",
      "Design engineer",
      "Product manager",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with two H5 grades, including O6/H7 in Mathematics (no specific English or Irish grade). The 2026 CAO points range for EU entrants was 462-613",
      UG_INDIA(
        "at least 75% in Mathematics (TU Dublin asks for 80% where the programme is in engineering, computing or science)"
      ),
      UG_IB(2),
      UG_ENGLISH("this course asks for IELTS 6.0 overall with no band below 6.0"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Business and Management - TU903",
    slug: "tu-dublin-bsc-business-management-tu903",
    level: "Bachelor",
    field: "Business & Management",
    duration: "4 years full-time (240 ECTS), including a work placement or study abroad option in Year 3",
    campus: "Aungier Street (Dublin city centre)",
    tuitionNote: UG_FEE("€13,500"),
    description:
      "TU903 is the largest Level 8 business degree in TU Dublin's College of Business, with 135 places at the Aungier Street campus, but it is taught in small lectures and tutorials. The first two years give everyone a grounding in accounting, economics, quantitative methods, management, marketing, human resources and operations, so students can try each area before specialising. In Years 3 and 4 a wide range of advanced options lets students concentrate on one major business discipline. Year 3 offers either a paid work placement of 16 to 20 weeks with companies in accounting, financial services, pharma, retail, ICT and consulting, or a full year at one of more than 50 partner universities abroad. Teaching uses case studies, debates, simulations and industry projects, and final-year students can enter national and international strategy case competitions. Graduates who follow the accounting stream can claim exemptions from CAI, CIMA and ACCA.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/business-and-management-tu903/",
    degree: "Bachelor of Science (Honours) in Business and Management (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant",
      "Management consultant",
      "Marketing executive",
      "Human resources officer",
      "Banker or insurance underwriter",
      "Retail manager",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with three H5 grades, including O4/H7 in Mathematics and O4/H7 in English or Irish. The 2026 CAO points range for EU entrants was 455-554",
      UG_INDIA("at least 75% in Mathematics"),
      UG_IB(3),
      UG_ENGLISH("this course asks for IELTS 6.5 overall with no band below 6.0"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BA (Hons) Culinary Arts - TU942",
    slug: "tu-dublin-ba-culinary-arts-tu942",
    level: "Bachelor",
    field: "Culinary Arts",
    duration: "4 years full-time (240 ECTS), including national internships and an international internship",
    tuitionNote: UG_FEE("€13,500"),
    description:
      "TU Dublin's honours culinary degree (64 places) is taught in the professional kitchens and restaurants of the Grangegorman campus and pairs hands-on cookery with academic study. Early years cover professional cookery, larder and meat technology, pastry, food safety, culinary science, nutrition, food and beverage studies, wine and the history and sociology of food, with national internships in Years 1 and 2. Third year adds major hot kitchen, pastry or larder specialisms, cost accounting, sustainable food concepts and a food and beverage management immersion, plus an international internship and an Erasmus option. Final year focuses on food entrepreneurship, innovation and sustainable product development, with options such as artisan foods, molecular gastronomy, advanced pastry, bread-making and wine, and a dissertation or capstone project. TU Dublin advises against the course for anyone with a medically diagnosed food allergy.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/culinary-arts--tu942/",
    degree: "Bachelor of Arts (Honours) in Culinary Arts (NFQ Level 8)",
    workIntegrated: true,
    careerOutcomes: [
      "Executive chef or senior pastry chef",
      "New product development technologist",
      "Catering or bakery manager",
      "Sommelier",
      "Food writer, stylist or photographer",
      "Restaurant, café or bakery owner",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with two H5 grades, including O6/H7 in Mathematics and O6/H7 in English or Irish. The 2026 CAO points range for EU entrants was 306-474",
      UG_INDIA("at least 75% in Mathematics"),
      UG_IB(2),
      UG_ENGLISH("this course asks for IELTS 6.0 overall with no band below 6.0"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) International Hospitality Management - TU952",
    slug: "tu-dublin-bsc-international-hospitality-management-tu952",
    level: "Bachelor",
    field: "Hospitality Management",
    duration: "4 years full-time (240 ECTS), including a six-month work placement and a semester abroad",
    tuitionNote: UG_FEE("€13,500"),
    description:
      "This four-year degree at the School of Tourism and Hospitality Management (25 places) prepares students for management roles in hotels, restaurants, resorts, conference venues and the wider hospitality sector. First year combines practical restaurant and food and beverage operations with business communication, management, marketing, accounting, rooms division and intercultural skills. Later years cover hospitality operations, information systems, international HR, revenue management and distribution, hospitality law, data analysis, leadership and strategic management, with options such as front office, bar and beverage, and conference management. Every student spends a semester abroad, through Erasmus in Year 2 or a scholarship or internship in Year 3, and Year 3 also includes a six-month professional work placement. Students can add French, German, Spanish or Italian, and final year ends with a dissertation.",
    officialProgramUrl: "https://www.tudublin.ie/study/undergraduate/courses/international-hospitality-management-tu952/",
    degree: "Bachelor of Science (Honours) in International Hospitality Management (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Hotel manager or assistant manager",
      "Duty or general manager",
      "Restaurant or bar manager",
      "Conference and banqueting manager",
      "Event manager",
      "Revenue or reservations manager",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects with two H5 grades, including O4/H7 in Mathematics and O6/H7 in English or Irish. The 2026 CAO points range for EU entrants was 244-466",
      UG_INDIA("at least 75% in Mathematics"),
      UG_IB(2),
      UG_ENGLISH("this course asks for IELTS 6.0 overall with no band below 5.5"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Computer Science (Advanced Software Development) - TU059",
    slug: "tu-dublin-msc-computer-science-advanced-software-development",
    level: "Master",
    field: "Computer Science",
    duration:
      "1 year or 1.5 years full-time (90 ECTS); the dissertation or team project can be done over the summer to finish in 12 months",
    tuitionNote: PG_FEE("€21,750"),
    description:
      "An advanced MSc for graduates who already studied computer science or software development and want to work on complex, leading-edge software projects. Core modules cover programming paradigms, software design, advanced databases, systems architectures, web application architectures and secure systems development, together with research writing and proposal skills. Options include user experience design, programming for big data, deep learning, natural language technologies, speech and audio processing, geographic information systems and digital ethics, and students can also take core modules from the Data Science stream. Teaching runs Monday to Friday with some evening classes: 30 credits each in the autumn and spring semesters, then a 30-credit dissertation or team project either over the summer (finishing in 12 months) or in a third semester. Exit awards are available after 30 credits (PgCert) and 60 credits (PgDip).",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/computing-advanced-software-development-tu059/",
    degree: "Master of Science in Computer Science (Advanced Software Development) (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer or engineer",
      "Test engineer",
      "Software designer",
      "Systems analyst",
      "Web developer",
      "Technical consultant",
    ],
    intake: "September (full-time, on campus at Grangegorman)",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree in computer science or computer engineering with at least a 2:1, or a 2:2 with at least two years of relevant work experience. Applicants with other 2:1 honours degrees and relevant experience may also be considered",
      PG_COUNTRY,
      PG_ENGLISH("6.5 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Data Analytics - TU422",
    slug: "tu-dublin-msc-data-analytics",
    level: "Master",
    field: "Data Analytics",
    duration: "12 months full-time (90 ECTS), September to the end of August",
    tuitionNote: PG_FEE("€21,750"),
    description:
      "A 12-month MSc that works both as a conversion course for graduates in science, engineering, business and other numerate fields and as an advanced option for computing graduates, with modules tailored to each background. Everyone takes fundamentals of analytics, statistics for analytics, data mining and organisational decision-making; conversion students add programming for analytics and data exploration, while computing graduates take advanced analytics programming and machine learning. Electives include programming for big data, deep learning, digital ethics and machine learning. The programme ends with a research project in which each student chooses a real problem and dataset, analyses it and presents both a client report and a research paper over the summer. Specialist streams in Data Analytics for Sport and Data Analytics with Precision Diagnostics share the same code and fee and must be chosen when applying.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/data-analytics-ft/",
    degree: "Master of Science in Data Analytics (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: ["Data analyst", "Business intelligence analyst", "Data scientist"],
    intake: "September (full-time, on campus at Grangegorman)",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree with at least a 2:1 in computing or a related area (advanced route), or a 2:1 in science, engineering, business or another subject with evidence of good numeracy (conversion route). A 2:2 with relevant work experience may be considered, and applicants with substantial experience can be assessed through Recognition of Prior Learning",
      "The Precision Diagnostics stream also needs a background in biology or healthcare, from study or work",
      PG_COUNTRY,
      PG_ENGLISH("6.5 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Applied Cyber Security - TU252R",
    slug: "tu-dublin-msc-applied-cyber-security",
    level: "Master",
    field: "Cybersecurity",
    duration: "1 year full-time (90 ECTS), with the research project over the summer",
    campus: "Blanchardstown (north-west Dublin)",
    tuitionNote: PG_FEE("€14,500"),
    description:
      "Run by the School of Informatics and Cybersecurity on the Blanchardstown campus, this hands-on MSc is for computing and IT graduates who want to defend organisations against cyber threats. The first semester covers digital forensics, secure communication and cryptography, and network security. In the second semester students take research skills and ethics plus two or three electives from biometrics, secure programming, application security, business continuity and cloud security, cyber crime and malware, and security intelligence. The degree ends with a summer research project: either an individually supervised 30-credit project or a 20-credit, group-supervised project with workshops and in-person attendance. Students also take part in capture-the-flag competitions and work on real problems with companies. Delivery is mixed online and on campus, three to four days a week.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/applied-cyber-security/",
    degree: "Master of Science in Computing in Applied Cyber Security (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Cyber security analyst or consultant",
      "Digital forensics specialist",
      "Network security engineer",
      "Security researcher",
    ],
    intake: "September (full-time, mixed online and on campus at Blanchardstown)",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree in computing (NFQ Level 8) with at least a 2:2 (GPA 2.5 or equivalent), or a graduate diploma or equivalent qualification in computing",
      PG_COUNTRY,
      PG_ENGLISH("6.5 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Digital and Content Marketing - TU325A",
    slug: "tu-dublin-msc-digital-content-marketing",
    level: "Master",
    field: "Marketing",
    duration: "1 year full-time (90 ECTS), including a 12-week work placement",
    campus: "Aungier Street (Dublin city centre)",
    tuitionNote: PG_FEE("€13,500"),
    description:
      "Designed by the School of Marketing and Entrepreneurship for business graduates who want to work in digital and content marketing. The first semester covers social media marketing, user experience design, digital analytics, strategic digital marketing, creative thinking, copywriting and content, and business research methods. The second semester moves on to marketing technology, omnichannel campaign management, strategic content creation, and regulation and governance, and includes a 12-week work placement. Throughout the year students build a digital portfolio and write a dissertation; together with the placement, TU Dublin presents these as a 'Career Accelerator' backed by CV and interview support from the Careers Service. Contact time is about 15 hours a week at the Aungier Street campus.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/digital-marketing/",
    degree: "Master of Science in Digital and Content Marketing (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Digital marketing specialist",
      "Marketing manager",
      "Social media manager",
      "Marketing analyst",
      "Marketing technologist",
    ],
    intake: "September (full-time, on campus at Aungier Street)",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours business degree with at least a 2:1, or a degree in which at least 50% of the subjects were business-related. Other applicants may be considered on experience, attitude and aptitude, and some may be interviewed",
      PG_COUNTRY,
      PG_ENGLISH("6.5 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Strategic Management - TU309",
    slug: "tu-dublin-msc-strategic-management",
    level: "Master",
    field: "Business & Management",
    duration: "1 year full-time (90 ECTS): lectures September to May, then a dissertation or company project over the summer",
    campus: "Aungier Street (Dublin city centre)",
    tuitionNote: PG_FEE("€13,500"),
    description:
      "A one-year master's for recent business graduates and experienced managers who want to plan and lead strategy in the private, public or non-profit sectors. Core modules cover finance and analytics for strategic decision-making, entrepreneurship, leading for high performance, critical and responsible management, strategic marketing and two strategic management modules on decision-making and global strategy, along with a consultancy skills project that runs through both semesters. Electives include generative AI for strategic decisions, digital innovation and organisational change, international and business-to-business marketing, sales management and client leadership. After the taught modules finish in May, students complete an individual dissertation or company project over the summer. The programme is accredited by the Institute of Management Consultants and Advisors.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/strategic-management-full-time/",
    degree: "Master of Science in Strategic Management (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Strategy or management consultant",
      "Business or strategic planning manager",
      "Management roles in technology, finance or the public sector",
    ],
    intake: "September (full-time, on campus at Aungier Street)",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours degree (2:2 or higher) in business or economics, or in a programme where business subjects make up at least 50%; equivalent professional qualifications such as ACCA or CIMA are also eligible. Applicants without a business degree but with substantial business experience can be considered by the Exceptional Entry Committee, and some applicants may be interviewed",
      PG_COUNTRY,
      PG_ENGLISH("6.5 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Hospitality Management - TU330",
    slug: "tu-dublin-msc-hospitality-management",
    level: "Master",
    field: "Hospitality Management",
    duration: "1 year full-time (90 ECTS)",
    tuitionNote: PG_FEE("€13,500"),
    description:
      "TU Dublin describes this as one of its most sought-after courses and the only programme of its kind in the Republic of Ireland. It prepares graduates from a range of backgrounds for senior management roles across hotels, restaurants, bars, catering and the wider hospitality industry. The course has six taught modules and a dissertation: international hospitality operations management and strategic revenue management and distribution, plus core modules on the effective manager, managerial finance and entrepreneurialism, strategic marketing and digital media, and emerging issues in hospitality, tourism and events. Full-time students attend about 14 hours of lectures over three days a week (between 9am and 8pm), with some block or blended delivery and significant self-directed research. It has both January and September starts.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/hospitality-management/",
    degree: "Master of Science in Hospitality Management (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Hospitality manager",
      "Revenue manager",
      "Hospitality consultant",
      "Tourism, events or marketing roles",
      "Entrepreneur",
    ],
    intake: "January 2027 or September 2027 (to be confirmed), full-time on campus at Grangegorman",
    applicationDeadline:
      "Non-EU applications for the January 2027 intake are open now; TU Dublin had not published the closing date (the equivalent date for spring 2026 starts was Friday 12 December 2025). For September 2027 it had not published a non-EU closing date either; for September 2026 entry, full-time non-EU applications closed on Friday 26 June 2026. Visa processing can take up to 12 weeks, so apply early",
    admissionRequirements: [
      "An honours bachelor's degree with at least a 2:2, or equivalent. A personal statement and two references must be included with the application, and applicants may be asked to attend an interview",
      PG_COUNTRY,
      PG_ENGLISH("6.5 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Culinary Innovation and Food Product Development - TU231",
    slug: "tu-dublin-msc-culinary-innovation-food-product-development",
    level: "Master",
    field: "Food Science",
    duration: "1 year full-time (90 ECTS, three semesters from September to August)",
    tuitionNote: PG_FEE("€14,500"),
    description:
      "Taught by the School of Culinary Arts and Food Technology, this one-year MSc connects culinary arts with food science and business so graduates can turn new food ideas into safe, healthy, commercial products. The first semester covers generating sustainable food concepts, market insights, innovation and quality assurance, nutrition for product development and new food business creation, with options such as advanced molecular gastronomy, innovative culinary applications, reading historic cookbooks and a culinary field trip. The second semester adds food law and regulation, sustainable food systems, gastronomy and culture, marketing and consumer behaviour for the food industry, and food prototype development and evaluation. The summer is spent on a practice-based dissertation. Classes are usually on Mondays and Wednesdays, about 12 contact hours a week, and a Postgraduate Diploma exit is available after 60 credits.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/culinary-innovation-food-product-dev/",
    degree: "Master of Science in Culinary Innovation and Food Product Development (NFQ Level 9)",
    careerOutcomes: [
      "Development chef (NPD chef)",
      "Innovation technologist",
      "Product development manager",
      "Formulation development specialist",
      "Food safety consultant",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree (NFQ Level 8) with at least a 2:2 in culinary arts or another food-related discipline. Graduates of non-food disciplines are considered case by case if their experience prepares them for the course, and conditional offers can be made before final results are out",
      PG_COUNTRY,
      PG_ENGLISH("7.0 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "ME Mechanical Engineering - TU204",
    slug: "tu-dublin-me-mechanical-engineering",
    level: "Master",
    field: "Engineering",
    duration: "1 year full-time (90 ECTS), with the research project submitted in early September",
    campus: "Bolton Street (Dublin city centre)",
    tuitionNote: PG_FEE("€14,500"),
    description:
      "A one-year Master of Engineering for mechanical engineering graduates and those from closely related disciplines such as manufacturing, chemical or energy engineering. It has twelve 5-credit modules and a 30-credit research project that runs across the whole year. Technical modules focus on numerical simulation (finite element analysis, computational fluid dynamics and multibody dynamics), heat and mass transfer, renewable energy engineering and energy economics, and biomechanics, alongside statistics, lean operations, research methods, innovation and knowledge management, and entrepreneurship for engineers. Full-time students have about 12 hours of classes a week, with daytime attendance on Fridays and some evening sessions online or on campus. The degree is accredited by Engineers Ireland as meeting the educational standard for Chartered Engineer, and students can exit with a Postgraduate Diploma.",
    officialProgramUrl: "https://www.tudublin.ie/study/postgraduate/courses/mechanical-engineering/",
    degree: "Master of Engineering (ME) in Mechanical Engineering (NFQ Level 9)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: ["Mechanical design or analysis engineer", "Energy engineer", "Engineering researcher"],
    intake: "September (full-time, on campus at Bolton Street)",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours bachelor's degree with at least a 2:2 in mechanical engineering or a closely related engineering discipline (for example manufacturing, chemical or energy engineering), or a qualification TU Dublin considers equivalent when combined with relevant work experience",
      PG_COUNTRY,
      PG_ENGLISH("6.0 overall with no band below 6.0"),
      PG_APPLY,
    ],
  },
];
