import type { Program } from "../../programs";

// South East Technological University (SETU; Waterford and Carlow campuses, Ireland): 8 undergraduate degrees and 7 full-time
// taught master's programmes from SETU Global's list of courses open to non-EU students, chosen for their popularity with
// international (non-EU) students. Sources (viewed 23 November 2026):
// - SETU course pages for each programme (https://www.setu.ie/courses/...), with their key information (code, level, duration,
//   credits, campus, next intake, international application status), overview, modules, entry requirements and careers sections
// - SETU Global Course Quickguide with the non-EU fee for each programme, linked from the Global fees page
//   (https://www.setu.ie/Craft/assets/downloads/SETU-BROCHURE-0004.5.2.4-Global-Quick-Guide-16pp-A4-Asia-P02-updated-August-25.pdf)
// - Global fees: 2026/2027 fee structure, non-EU fee ranges, entry awards and scholarships
//   (https://www.setu.ie/current-students/fees-and-grants/fees/global-fees)
// - Payment: application fee, deposit and payment deadlines (https://www.setu.ie/global/study-at-setu/applying-to-setu/payment)
// - Applying to SETU (https://www.setu.ie/global/study-at-setu/applying-to-setu) and the non-EU undergraduate and postgraduate
//   study pages with application dates (https://www.setu.ie/global/study-at-setu/non-eu-students/undergraduate-study,
//   https://www.setu.ie/global/study-at-setu/non-eu-students/postgraduate-study)
// - Non-EU undergraduate and postgraduate entry requirements by country
//   (https://www.setu.ie/global/study-at-setu/non-eu-students/undergraduate-entry-requirements,
//   https://www.setu.ie/global/study-at-setu/non-eu-students/postgraduate-entry-requirements)
// - English Language Requirements (https://www.setu.ie/english-language-requirements)
// - SETU Global Scholarships (https://www.setu.ie/global/scholarship)
// Fees are in euro. SETU publishes its non-EU fees for 2026/27 (undergraduate €13,500–€14,500 a year, postgraduate
// €14,000–€15,000); the per-programme figures below come from the SETU Global Course Quickguide linked from the Global fees page.
// SETU has opened applications for 2027/28 but had not published separate 2027/28 non-EU fees at the time of writing, and says
// the exact fee for each programme is confirmed in the offer letter.

const UNIVERSITY = {
  universitySlug: "south-east-technological-university",
  universityName: "South East Technological University",
  country: "Ireland",
  language: "English",
  programType: "Full-time",
} as const;

const CAMPUS = {
  waterford: "Waterford – Cork Road Campus",
  carlow: "Carlow – Kilkenny Road Campus",
} as const;

const APPLY =
  "Non-EU applicants apply directly to SETU through its online international application portal (not through the CAO), either on their own or through one of SETU's international agents; the application fee is €35 per application and is non-refundable";

const PAYMENT =
  "A €1,000 deposit, paid on the application portal, secures your place and is deducted from the tuition fee. Students who need a visa must have €6,000 of their fees paid before applying for it; students who do not need a visa must pay at least 50% of the fee due, and September starters must pay any balance by 31 January";

const AWARDS =
  "SETU Global automatically considers non-EU fee-paying offer holders for Entry Awards of €1,000 to €4,000 off tuition, and a limited number of 100% and 50% tuition fee International Academic Excellence Scholarships are available through a separate application after an offer (applications reopen in 2027 for the September 2027 intake)";

const FEE = (amount: string, extra?: string) =>
  `2026/27 non-EU fee: ${amount}, per the SETU Global Course Quickguide linked from SETU's Global fees page (SETU's published 2026/27 non-EU ranges are €13,500–€14,500 a year for undergraduate and €14,000–€15,000 for postgraduate programmes, and the exact fee is stated in your offer letter). Students who start a multi-year programme at a non-EU rate keep that rate while they stay on the same programme.${extra ? ` ${extra}` : ""} ${PAYMENT}. ${AWARDS}`;

// ---------- Undergraduate ----------

const UG_FEE = (extra?: string) => FEE("€14,500 a year", extra);
const UG_FEE_BUSINESS = (extra?: string) => FEE("€13,500 a year", extra);

const UG_INTAKE = `September. ${APPLY}. SETU uses rolling admissions, reviewing applications and issuing decisions as they arrive, so applying early is advised`;

const UG_DEADLINE =
  "Applications for the 2027/28 academic year (September 2027 entry) are open; SETU opens applications each October for entry the following September. Visa-required applicants must apply before 1 June, and applicants who do not need a visa are encouraged to apply before the end of July";

const UG_COUNTRY =
  "Non-EU academic requirements (SETU Global minimums, examples): India – Higher Secondary Certificate/Standard 12, Indian School Certificate or Intermediate Examination with an average of 60%; Sri Lanka – GCE Advanced Level (3 or 4 A-Levels plus O-Levels) with an average of 60%; Nigeria – Senior School Certificate (WAEC/NECO) with an average of 60%; China – Senior Secondary School Graduation Certificate with an average of 60%; GCE A-Levels – 2 A-Levels at grade C plus 4 other GCSEs at grade C for honours (Level 8) degrees. Requirements for other countries are listed on SETU's undergraduate entry requirements page and are assessed case by case. A passport, full transcripts and certificates are required, plus a CV if you finished school more than 3 years ago";

const UG_MATHS =
  "This course lists Mathematics as an entry requirement, so non-EU applicants need mathematics in their school-leaving qualification with at least 60% (SETU does not require Irish or English as school subjects from international applicants)";

const UG_ENGLISH = (course?: string) =>
  `English language (if English is not your first language; results normally issued within 2 years of the course start): ${course ? `${course}. ` : ""}SETU's undergraduate minimums include IELTS Academic 5.5 with at least 5.0 in each component, TOEFL iBT 70 (at least 15 in each component), Duolingo 90, PTE Academic 50, Cambridge C1 Advanced grade C, or Oxford Test of English 111 (at least 100 in each component). Conditional offers can be made without an English certificate, but cannot be accepted until it is submitted`;

const LC_BENCHMARK = (maths = "O6/H7") =>
  `Irish Leaving Certificate benchmark: 2 subjects at H5 and 4 subjects at O6/H7, including English or Irish at O6/H7 and Mathematics at ${maths}`;

// ---------- Postgraduate ----------

const PG_INTAKE = `September (full-time, on campus). ${APPLY}. SETU uses rolling admissions, and the postgraduate course pages note that places are offered on a first-come, first-served basis to applicants who meet the entry criteria`;

const PG_DEADLINE =
  "Applications for the 2027/28 academic year (September 2027 entry) are open; SETU opens applications each October for entry the following September. Visa-required applicants should apply before 1 June, and applicants who do not need a visa before the end of July";

const PG_COUNTRY =
  "SETU Global's postgraduate minimums (examples): India – a four-year bachelor's degree (e.g. B.Tech, BEng, BPharm) or an eligible three-year degree (e.g. BBA, BCA, BMS) with at least 60%; Sri Lanka – a special/honours or professional bachelor's degree with at least 60%; Nigeria – a bachelor's degree, PharmD/B.Pharm or post-HND professional diploma with at least 60%. A cognate (related) degree is typically required. Applications need a passport, all transcripts and certificates, a CV and a statement of purpose";

const PG_ENGLISH = (course?: string) =>
  `English language (if English is not your first language; results normally issued within 2 years of the course start): ${course ? `${course}. ` : ""}SETU's postgraduate minimums include IELTS Academic 6.0, TOEFL iBT 80, Duolingo 100, PTE Academic 55, Cambridge C1 Advanced grade B, or Oxford Test of English 125 (at least 100 in each component)`;

export const southEastTechnologicalUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "BSc (Hons) Software Development - SE603",
    slug: "setu-bsc-software-development-se603",
    level: "Bachelor",
    field: "Software Development",
    duration: "4 years full-time (240 ECTS, NFQ Level 8)",
    campus: CAMPUS.carlow,
    tuitionNote: UG_FEE(),
    description:
      "A four-year honours degree at SETU's Carlow campus that trains students to design, build, test and maintain software, from mobile apps to complex control systems. First year uses a learning-by-doing model with continuous assessment instead of final exams, covering programming, computer hardware, networking, operating systems and mathematics. Second year moves on to object-oriented development, web programming and databases, data structures and algorithms, assembly and C, systems analysis and testing, and a team project. Third year covers cloud development, software engineering and advanced programming, with an industry work placement, a semester abroad or a project. Final year focuses on agile development and verification, concurrent and secure application development, two data science and machine learning modules and a major project, plus electives such as data engineering, UI/UX, blockchain and AI. Students can exit with a Higher Certificate after two years or an ordinary BSc after three, and SETU says its graduates work at companies including Unum, Google, IBM, Microsoft and Intel.",
    officialProgramUrl: "https://www.setu.ie/courses/bsc-hons-in-software-development",
    degree: "Bachelor of Science (Honours) in Software Development (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer or software engineer",
      "Web or mobile app developer",
      "Cloud developer",
      "Data science or machine learning developer",
      "Software tester",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK(),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Computer Science (Common Entry) - SE600",
    slug: "setu-bsc-computer-science-common-entry-se600",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), including work placement or study abroad in Year 3",
    campus: CAMPUS.waterford,
    tuitionNote: UG_FEE(),
    description:
      "SETU Waterford's longest-running degree, designed for students who want to study computing and software development but are not yet sure where to specialise. First year concentrates on programming fundamentals, with mathematics and physics as a foundation and an introduction to core computing concepts. From second year students follow one of four streams – Automotive Software Engineering, Cloud and Networks, Computer Forensics and Security, or Games Development – while software development runs through all four years as the programme's spine. The stream is confirmed at the end of first year and can be changed until then. Third year includes a work placement or a period of study abroad, and SETU says most students find paid placements and many have job offers before their final exams.",
    officialProgramUrl: "https://www.setu.ie/courses/bsc-hons-in-computer-science-common-entry",
    degree: "Bachelor of Science (Honours) in Computer Science, with a named specialism (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer or software engineer",
      "Systems architect",
      "DevOps or cloud engineer",
      "Web developer",
      "Systems support or infrastructure engineer",
      "IT consultant",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK("O3/H7"),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Cybercrime and IT Security - SE606",
    slug: "setu-bsc-cybercrime-it-security-se606",
    level: "Bachelor",
    field: "Cybersecurity",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), with a work placement in Year 3",
    campus: CAMPUS.carlow,
    tuitionNote: UG_FEE(),
    description:
      "A four-year honours degree at SETU Carlow built on three pillars: software development, networking and cybersecurity. Students first learn to design and build computer networks and software, then learn to assess the security risks of digital environments and fix the vulnerabilities they find. After a shared first year in programming, hardware, networking, operating systems and maths, second year covers scripting for cybersecurity, switching, routing and wireless networking, systems administration, web programming and databases, ethics and incident handling. Third year adds cryptography, penetration testing, automating security practice and cybercrime legislation and compliance, alongside a work placement. Final year covers malware analysis, digital forensics, enterprise network security, reverse engineering and secure application development, with a final-year project shown at SETU Carlow's industry showcase. Exit awards are available after two or three years.",
    officialProgramUrl: "https://www.setu.ie/courses/bsc-hons-in-cybercrime-and-it-security",
    degree: "Bachelor of Science (Honours) in Cybercrime and IT Security (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Ethical hacker or penetration tester",
      "Secure application developer",
      "Secure network manager or network security engineer",
      "Digital forensics analyst",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK(),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BEng (Hons) Aerospace Engineering - SE714",
    slug: "setu-beng-aerospace-engineering-se714",
    level: "Bachelor",
    field: "Aerospace Engineering",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), with an industrial work placement in Year 3",
    campus: CAMPUS.carlow,
    tuitionNote: UG_FEE(),
    description:
      "An honours engineering degree at SETU Carlow on the design, development and operation of aircraft, unmanned aerial systems (drones) and space technology. Students train in SETU's Centre for Aerospace Engineering, which has a fleet of fixed and rotary-wing aircraft, an avionics and UAS laboratory, a Cessna 172 flight simulator and a wind tunnel, and use SOLIDWORKS, ANSYS and MATLAB. Early years cover avionics, aircraft anatomy and design, aviation science, engineering mathematics, propulsion, human factors, maintenance practices and materials. Third year adds electrical propulsion, an introduction to space engineering, UAS technology and mechanics of materials, with an industrial work placement. Final year covers flight mechanics, aerodynamics and computational analysis, conceptual design, aircraft structures, stability and control, embedded systems, aircraft computer networks and technical aircraft leasing, ending with a research project. Students can exit with a Higher Certificate in Aircraft Systems after two years or an ordinary BEng after three.",
    officialProgramUrl: "https://www.setu.ie/courses/beng-hons-in-aerospace-engineering",
    degree: "Bachelor of Engineering (Honours) in Aerospace Engineering (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Aerospace or aeronautical engineer",
      "Aerodynamics or structural analysis engineer",
      "UAS and drone systems specialist",
      "Avionics and flight control systems engineer",
      "Technical asset manager or aircraft leasing engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK(),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BEng (Hons) Mechanical Engineering - SE711",
    slug: "setu-beng-mechanical-engineering-se711",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), with an industry work placement in semester 2 of Year 3",
    campus: CAMPUS.carlow,
    tuitionNote: UG_FEE(),
    description:
      "A four-year honours degree at SETU Carlow that prepares students to manage complete mechanical engineering processes, from product design to manufacturing and commissioning. Around 40% of class time is spent on practical work in laboratories and workshops, and students use the industry design tools ANSYS and SOLIDWORKS. Modules progress from computer-aided drafting, statics, dynamics, fluid mechanics and mechatronics to manufacturing and CAD, thermodynamics, materials science and advanced manufacturing. Third year includes an industry work placement, and final year covers advanced simulation, materials engineering, control system design, sustainable energy, vibration control and quality in manufacturing, with a substantial design and research project. Students can exit with a Higher Certificate after two years or an ordinary BEng after three, and SETU notes its students have won the Engineers Ireland Innovative Student of the Year award three times.",
    officialProgramUrl: "https://www.setu.ie/courses/beng-hons-in-mechanical-engineering",
    degree: "Bachelor of Engineering (Honours) in Mechanical Engineering (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Mechanical or design engineer",
      "Manufacturing or automation engineer",
      "Engineer in energy conversion, environmental control or automation",
      "Engineering roles in automotive, aerospace or biotechnology industries",
      "Engineering consultant or researcher",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK(),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Pharmaceutical Science - SE504",
    slug: "setu-bsc-pharmaceutical-science-se504",
    level: "Bachelor",
    field: "Pharmaceutical Science",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), including a nine-month work placement in Year 3",
    campus: CAMPUS.waterford,
    tuitionNote: UG_FEE(),
    description:
      "A four-year honours degree at SETU Waterford that prepares graduates for Ireland's large pharmaceutical and biopharmaceutical industry. First year covers biology, chemistry, physics, mathematics, ICT and good laboratory practice, with an introduction to biotechnology and pharmaceutical science. Second year moves into organic, inorganic and physical chemistry, spectroscopic and chromatographic techniques, statistics, and pharmaceutical and biopharmaceutical processing. Third year includes a nine-month work placement alongside quality management, chromatographic method development and validation, and pharmaceutical biotechnology. Final year covers pharmaceutical synthesis and characterisation, formulation and drug delivery, pharmacology and drug design, regulatory affairs and compliance, and a double-weighted research project. The programme has won the Pharma Industry Awards' Pharma Education and Training award (2017 and 2021). SETU recommends that applicants have studied a science subject at school.",
    officialProgramUrl: "https://www.setu.ie/courses/bsc-hons-in-pharmaceutical-science-wd",
    degree: "Bachelor of Science (Honours) in Pharmaceutical Science (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Laboratory or QC analyst",
      "Research and development scientist",
      "Quality assurance or regulatory affairs specialist",
      "Technical sales or technical writer",
      "Roles in medical device and food and drink industries",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `${LC_BENCHMARK()}. A science subject (Biology, Chemistry, Physics, Physics with Chemistry or Agricultural Science) is recommended`,
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Business (Hons) (Common Entry) - SE400",
    slug: "setu-bachelor-of-business-common-entry-se400",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), with a placement semester in Year 3",
    campus: CAMPUS.waterford,
    tuitionNote: UG_FEE_BUSINESS(),
    description:
      "A broad four-year business degree at SETU Waterford that starts from the basics, so no previous business study is assumed. Students choose their specialisation – Accounting, Economics and Finance, Human Resource Management, Management or Marketing – only at the end of Year 2, after core modules in financial accounting, micro- and macroeconomics, statistics and business maths, organisational behaviour, management, marketing, HRM and business law. Students can also take Chinese, French, German, Irish or Spanish. The second semester of Year 3 is a placement semester, with options of a work placement, study abroad, a start-up lab or a teaching placement. Final year combines Business Strategy, Digital Economy and International Corporate Strategy with advanced modules in the chosen stream and a choice of electives.",
    officialProgramUrl: "https://www.setu.ie/courses/bachelor-of-business-hons-common-entry",
    degree: "Bachelor of Business (Honours), with a named specialisation (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant or tax specialist",
      "Banking, finance or insurance professional",
      "Marketing or sales professional",
      "Human resource manager",
      "Management consultant or business development manager",
      "Logistics, transport or information systems management roles",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK(),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "BA (Hons) Hospitality Management - SE921",
    slug: "setu-ba-hospitality-management-se921",
    level: "Bachelor",
    field: "Hospitality Management",
    duration: "4 years full-time (240 ECTS, NFQ Level 8), with a hospitality placement in the first semester of Year 3",
    campus: CAMPUS.waterford,
    tuitionNote: UG_FEE_BUSINESS("Students also buy their own uniforms and equipment for practical classes, which SETU estimates at €275."),
    description:
      "A four-year degree at SETU Waterford that combines business skills with a solid understanding of hotels, restaurants, bars, events, entertainment venues and contract catering. Early years cover tourism and hospitality operations, restaurant and fine dining service, front office systems, accommodation and rooms division management, beverage and wine studies, marketing, accounting and event management, with optional language modules. The first semester of Year 3 is a required placement in a hospitality business in Ireland or abroad, chosen with the student's career plans in mind; past placement employers include Four Seasons, Hilton, Westin and the Tower Hotel Group. Later modules include revenue management, services marketing, HRM for hospitality managers, entrepreneurship, digital and search engine marketing, facilities and asset management and strategic management for tourism and hospitality, with an option to study abroad.",
    officialProgramUrl: "https://www.setu.ie/courses/ba-hons-in-hospitality-management",
    degree: "Bachelor of Arts (Honours) in Hospitality Management (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Hotel or hospitality operations manager",
      "Licensed premises manager",
      "Hospitality HR, sales or marketing manager",
      "Catering manager or restaurant operator",
      "Conference and event coordinator",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      LC_BENCHMARK(),
      UG_COUNTRY,
      UG_MATHS,
      UG_ENGLISH(),
    ],
  },

  // ---------- Postgraduate ----------

  {
    ...UNIVERSITY,
    name: "MSc Data Science",
    slug: "setu-msc-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1 year full-time (90 ECTS)",
    campus: CAMPUS.carlow,
    tuitionNote: FEE("€15,000"),
    description:
      "A one-year, full-time MSc at SETU Carlow giving a theoretical and practical grounding in analysing and using large data sets. Taught modules cover programming for data scientists, data and data storage technology, statistics for data science, infrastructure for big data, data analytics and algorithms, data visualisation and insight, and research methods. Students then complete a substantial research and/or programming project, taking a data science project from proposal to delivery and deployment, while also building presentation, communication and critical-thinking skills. Several lecturers belong to SETU Carlow's gameCORE research centre, where graduates can progress to research degrees. Students who complete 60 credits can leave with a Postgraduate Diploma in Science.",
    officialProgramUrl: "https://www.setu.ie/courses/msc-in-data-science",
    degree: "Master of Science in Data Science (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Data analyst",
      "Data science or analytics manager",
      "Technical developer in ICT, finance, insurance, retail, pharma, telecoms, media or sport",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A second-class honours Level 8 degree (or equivalent) in computer science or mathematical sciences, or a degree with strong numerate content such as engineering, finance, physics, biosciences or economics. Applicants with a Level 7 or 8 degree and at least 5 years of relevant industry experience may also be considered",
      PG_COUNTRY,
      PG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Applied Artificial Intelligence",
    slug: "setu-msc-applied-artificial-intelligence",
    level: "Master",
    field: "Artificial Intelligence",
    duration: "1 year full-time (90 ECTS), running September to August",
    campus: CAMPUS.carlow,
    tuitionNote: FEE("€15,000"),
    description:
      "A practical, hands-on MSc at SETU Carlow for computing graduates who want a deep understanding of artificial intelligence and how to apply it to real business and social problems. Modules cover programming and tools for AI, practical machine learning, deep learning, AI application domains, intelligent cyber-physical systems, AI at the edge (including AI's place in society) and research methods, followed by a dissertation. The course pays particular attention to the practical side of deploying AI in the real world, such as algorithm efficiency, power, speed, communication, safety and ethics. Students can leave with a Postgraduate Diploma in Applied Artificial Intelligence as an exit award.",
    officialProgramUrl: "https://www.setu.ie/courses/msc-in-applied-artificial-intelligence",
    degree: "Master of Science in Applied Artificial Intelligence (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Machine learning or deep learning engineer",
      "Data analytics or data architecture specialist",
      "Software engineer",
      "Computer vision or language and speech specialist",
      "AI architect",
    ],
    intake: `${PG_INTAKE}. The course page says the programme typically has September and January intakes (September course code SE61Y)`,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A second-class honours Level 8 degree in computer science (or equivalent) with sufficient programming and numerate content, as judged by the programme team. Applicants with a Level 7 degree or higher and at least 5 years of relevant industry experience may also be considered, and shortlisted non-standard applicants are interviewed",
      PG_COUNTRY,
      PG_ENGLISH("this course page asks for IELTS 6.0 with no section below 6.0, or an equivalent recognised test"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Computing (Information Systems Processes)",
    slug: "setu-msc-computing-information-systems-processes",
    level: "Master",
    field: "Information Systems",
    duration: "1 year full-time (90 ECTS), September to September; also offered part-time",
    campus: CAMPUS.waterford,
    tuitionNote: FEE("€15,000"),
    description:
      "A one-year MSc at SETU Waterford on the digital transformation of organisations, balancing technology, management and organisational perspectives and treating information systems as socio-technical systems in which human factors matter as much as the technology. Core modules cover business process analysis and design, human-centred systems, ethics and e-privacy and research methods, with three electives chosen from information systems project management, socio-technical entrepreneurship, supply chain integration technologies, agile software development, design patterns, and user experience and design. The final stage is a research project and dissertation. Classes run Monday to Friday between 9am and 5pm, and students can exit with a Postgraduate Diploma.",
    officialProgramUrl: "https://www.setu.ie/courses/msc-in-computing-information-systems-processes",
    degree: "Master of Science in Computing (Information Systems Processes) (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Information systems or digital transformation specialist",
      "Business process analyst",
      "IT project manager",
      "Researcher in academia or industry",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "At least a 2.2 honours Level 8 degree in computing, information technology, science, engineering or business. Applicants without the standard qualification but with relevant industry experience may be considered through Recognition of Prior Learning, subject to interview",
      PG_COUNTRY,
      PG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business in Finance and Business Analytics",
    slug: "setu-master-of-business-finance-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "12 months (90 ECTS), with most classes in person on Tuesdays to Thursdays",
    campus: CAMPUS.waterford,
    tuitionNote: FEE("€14,000"),
    description:
      "A 12-month master's at SETU Waterford's School of Business for graduates who want to become financial or data analysts. Students build quantitative, analytical and ICT skills through lectures and computer-lab practicals, working with live data in SETU's Finance Lab and training in PL/SQL, Real Statistics, Eikon, StockTrak and Qlik. Modules include data modelling and analytics, statistics for data analytics, business intelligence, trading the financial markets or programming for data science, financial regulation and compliance, corporate financial analysis or information systems project management, and distributed ledger technology and blockchain. The final semester is a dissertation, an applied business project, a series of research papers or a professional internship. The programme is accredited by the Institute of Analytics.",
    officialProgramUrl: "https://www.setu.ie/courses/master-of-business-in-finance-and-business-analytics",
    degree: "Master of Business in Finance and Business Analytics (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Financial analyst",
      "Data analyst",
      "Business intelligence analyst",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "At least a 2.2 honours Level 8 degree in business, finance, economics or IT. Graduates of other honours degrees may apply but must show strong numeracy and IT skills and may be asked to attend an advising interview",
      PG_COUNTRY,
      PG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business (Marketing Stream)",
    slug: "setu-master-of-business-marketing",
    level: "Master",
    field: "Marketing",
    duration: "1 year full-time (90 ECTS), with classes on Tuesday, Wednesday and Thursday afternoons; also offered over 2 years part-time",
    campus: CAMPUS.waterford,
    tuitionNote: FEE("€14,000"),
    description:
      "A practice-based master's at SETU Waterford's School of Business for graduates aiming at careers in marketing, branding, product development, sales, market research and international sales. Developed with the Marketing Institute of Ireland's South East branch and regional companies such as Glanbia and Flahavan's, it combines core business modules, including two business simulations and a contemporary issues seminar series with business leaders, with specialist modules in strategic marketing planning, strategic digital marketing, customer retention, reputation management, innovation and design, and contemporary sales and marketing practice. Students use a Digital Marketing Lab sponsored by Salesforce and take part in a week-long study programme in Brussels. The final semester is a dissertation, an applied business project or three research papers.",
    officialProgramUrl: "https://www.setu.ie/courses/master-of-business-marketing-stream",
    degree: "Master of Business (Marketing Stream) (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Digital marketing specialist",
      "Marketing consultant",
      "Brand or reputation manager",
      "Advertising or market research professional",
      "Sales and international sales roles",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A first-class (H1) or 2.1 honours degree in marketing, or a general business degree with a marketing major. Graduates of non-business degrees need business modules taken over one year of study with at least 60% in them, and 2.2 graduates with strong marketing results may be considered for interview",
      PG_COUNTRY,
      PG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Supply Chain Management",
    slug: "setu-msc-supply-chain-management",
    level: "Master",
    field: "Supply Chain Management",
    duration: "1 year full-time (90 ECTS)",
    campus: CAMPUS.carlow,
    tuitionNote: FEE("€14,000"),
    description:
      "A one-year MSc at SETU Carlow, designed with industry, on the theory and best practice of managing supply chains in a global economy where demand, technology and globalisation change quickly. Modules cover lean manufacturing and Six Sigma, strategic and sustainable supply chain management, global logistics and technology, supply chain financial management, performance management and communications for supply chain professionals, followed by a research project. Graduates learn to plan and manage resources at each stage of the supply chain, lead cross-functional teams and redesign supply chains to be more sustainable, competitive and quality-led. Students who complete 60 credits can leave with a Postgraduate Diploma in Science in Supply Chain Management.",
    officialProgramUrl: "https://www.setu.ie/courses/msc-in-supply-chain-management",
    degree: "Master of Science in Supply Chain Management (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Supply chain analyst or manager",
      "Logistics manager",
      "Project manager",
      "Operations consultant or manufacturing/service operations manager",
      "Warehouse or inventory manager",
      "Purchasing manager, buyer or planner",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "At least a 2.2 honours Level 8 degree in a related discipline, or equivalent. Applicants are assessed case by case, may be asked to attend an interview, and relevant work experience can count through SETU Carlow's Recognition of Prior Learning scheme",
      PG_COUNTRY,
      PG_ENGLISH(),
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Construction Project Management",
    slug: "setu-msc-construction-project-management",
    level: "Master",
    field: "Construction Management",
    duration: "1 year full-time (90 ECTS): two taught semesters from September to May, then a dissertation from May to September; also offered over 2 years part-time",
    campus: CAMPUS.waterford,
    tuitionNote: FEE("€15,000"),
    description:
      "A one-year MSc at SETU Waterford for graduates of construction-related disciplines such as civil engineering, quantity surveying, architecture, architectural technology and construction management who want postgraduate skills in managing construction projects. Full-time students have about 12 hours of classes a week, usually on Mondays to Wednesdays, in management of projects, economics and the construction sector, financial management, management of people, construction law, ICT for construction, sustainability and the built environment, professional development and research methodology, with electives in strategic management or lean thinking. The third semester is a research dissertation. The programme is accredited by the Chartered Institute of Building (CIOB) and the Society of Chartered Surveyors Ireland (SCSI) for candidates with relevant prior qualifications.",
    officialProgramUrl: "https://www.setu.ie/courses/msc-in-construction-project-management-ft",
    degree: "Master of Science in Construction Project Management (NFQ Level 9)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Construction project manager",
      "Project management roles in the Irish and international engineering and construction industry",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "Normally a cognate, accredited 2.2 honours Level 8 degree in engineering or science. Applicants with a Level 7 or professional body qualification plus relevant work experience may be considered through Recognition of Prior Learning, which involves a portfolio and an interview",
      PG_COUNTRY,
      PG_ENGLISH(),
    ],
  },
];
