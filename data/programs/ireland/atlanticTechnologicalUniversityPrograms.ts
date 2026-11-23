import type { Program } from "../../programs";

// Atlantic Technological University (ATU; Galway, Mayo, Donegal and Sligo, Ireland): 8 undergraduate degrees and 7 full-time
// taught master's programmes from ATU Global's non-EU course lists, chosen for their popularity with international (non-EU)
// students. Sources (viewed 22 November 2026):
// - ATU course pages for each programme (https://www.atu.ie/courses/...), with their course details, overview, module listing,
//   entry requirements, fees, careers and non-EU application sections
// - ATU Global undergraduate and postgraduate course hubs for non-EU students, including the September 2027 and January 2027
//   masters lists (https://www.atu.ie/study/global/undergraduate-courses, https://www.atu.ie/study/global/international-postgraduate,
//   https://www.atu.ie/study/global/september-2026-masters-courses-non-eu-students)
// - International Fee and Refund Policy: annual international tuition fees for the September 2027 intake onwards, deposits,
//   payment deadlines and application fees (https://www.atu.ie/study/global/international-fee-and-refund-policy)
// - Material Fees 2026/27 (https://www.atu.ie/app/uploads/2025/10/material-fees.pdf)
// - How to Apply (Non-EU students), with the September 2027 dates and the countries that must apply through an agent
//   (https://www.atu.ie/study/global/international-how-to-apply)
// - English Language and Entry Requirements (https://www.atu.ie/study/global/language-requirements)
// - Non-EU Scholarships (https://www.atu.ie/study/fees-and-funding/scholarships/non-eu-scholarships)
// - Stay Back Visa (https://www.atu.ie/study/global/stay-back-visa) and the International Quick Guide 27/28
//   (https://www.atu.ie/app/uploads/2026/10/ATU-International-Quick-Guide-2027.2028-3.pdf)
// Fees are in euro. ATU publishes a single international rate for the September 2027 intake onwards (undergraduate €13,000 a year,
// on-campus postgraduate €15,000 a year), and the course pages show the same figures; ATU reserves the right to change fees for
// future intakes. Several postgraduate course pages still showed a September 2026 start and "closed" notice, while ATU Global lists
// the same courses as open to non-EU applicants for September 2027.

const UNIVERSITY = {
  universitySlug: "atlantic-technological-university",
  universityName: "Atlantic Technological University",
  country: "Ireland",
  language: "English",
  programType: "Full-time",
} as const;

const CAMPUS = {
  galway: "Galway City – Dublin Road (Galway)",
  letterkenny: "Donegal – Letterkenny (Co. Donegal)",
  sligo: "Sligo",
  stAngelas: "St Angela's (Sligo)",
} as const;

const AGENT_RULE =
  "ATU does not accept direct applications from residents of any African country, Afghanistan, Bangladesh, Nepal, Pakistan or Sri Lanka; applicants from these countries must apply through one of ATU's authorised education agents";

const SCHOLARSHIPS =
  "ATU Global scholarships are fee discounts: the Global Entry Scholarship (€2,000 or €3,000, depending on the World Bank GDP per capita of your home country), the Global Merit Entry Scholarship (€4,000, limited and competitive) and the Global Partnership and Ireland Homecoming scholarships";

const DEPOSIT_UG =
  "A €1,000 deposit is due within 60 days of an offer issued before 31 January (within 30 days for offers from 1 February), and the full fee must be paid by 31 May for visa-required students (15 August if no visa is needed). Continuing students must pay at least €6,000 by 15 August and the balance by 31 January";

const DEPOSIT_PG =
  "A €2,000 deposit is due within 30 days of the offer, and the full fee must be paid by 31 May for visa-required students starting in September (15 August if no visa is needed)";

// ---------- Undergraduate ----------

const UG_FEE = (extra?: string) =>
  `September 2027 intake onwards: the non-EU fee is €13,000 a year, per ATU's International Fee and Refund Policy and the course page (ATU may change fees for later intakes).${extra ? ` ${extra}` : ""} ${DEPOSIT_UG}. ${SCHOLARSHIPS}, plus the €6,000 Global Excellence Scholarship for top first-year undergraduate entrants`;

const UG_INTAKE = `September. Non-EU applicants apply through ATU's international application portal (noneuapply.atu.ie) via the course page's International Applications button, not through the CAO; up to three course choices can be listed, and a €20 non-refundable fee applies to direct applications. ${AGENT_RULE}`;

const UG_DEADLINE =
  "For September 2027 entry, applications opened on 20 October 2026 and close on 1 May 2027 for non-EU applicants who need a visa, or 31 July 2027 for non-EU applicants who do not";

const UG_COUNTRY =
  "Non-EU academic requirements (ATU Global minimums, examples): India – Standard XII (CBSE, CISCE or state boards) with at least 70% overall, including 65% in Maths and English; Sri Lanka – at least three GCE A-Levels at grade C or above (or O-Levels with 75%/distinction plus a recognised foundation programme with 60%); GCE A-Levels – as a guide, at least three A-Levels at grade C or above for an honours (Level 8) degree. ATU Global lists requirements for many other countries on its entry requirements page. Courses can set higher subject or grade requirements, and meeting the minimum does not guarantee a place";

const UG_ENGLISH = (course?: string) =>
  `English language (if English is not your first language; results within 2 years of the course start, and medium-of-instruction letters are not accepted): ${course ? `${course}. ` : ""}ATU Global's undergraduate minimums are IELTS Academic 5.5 overall with 5.0 in each component, Duolingo 95 (90 in each section), PTE Academic 51, TOEFL iBT 70 (3.5 on the post-January 2026 scale), Cambridge B2 First/C1 Advanced grade C, or Oxford Test of English 111. Visa applicants should also check the Irish Immigration Service's English requirements`;

// ---------- Postgraduate ----------

const PG_FEE = (extra?: string) =>
  `September 2027 intake onwards: the non-EU fee for on-campus postgraduate courses is €15,000 a year, per ATU's International Fee and Refund Policy and the course page (ATU may change fees for later intakes).${extra ? ` ${extra}` : ""} ${DEPOSIT_PG}. ${SCHOLARSHIPS}. ATU alumni get 20% off eligible Level 9 master's fees`;

const PG_INTAKE = `September (full-time, on campus). Non-EU applicants apply through ATU's international application portal (noneuapply.atu.ie) via the course page; up to three choices can be listed and a €30 non-refundable application fee applies. ${AGENT_RULE}`;

const PG_DEADLINE =
  "For September 2027 entry, applications opened on 20 October 2026 and close on 1 May 2027 for non-EU applicants who need a visa, or 31 July 2027 for those who do not. Some course pages still showed a 'closed for September 2026' notice at the time of writing, while ATU Global lists the course as open for September 2027";

const PG_COUNTRY =
  "ATU Global's postgraduate minimum for most countries (including India and Sri Lanka) is a bachelor's degree in a relevant subject from a recognised institution that is comparable to an Irish 2.2 honours degree (NFQ Level 8)";

const PG_ENGLISH = (course?: string) =>
  `English language (if English is not your first language; results within 2 years of the course start, and medium-of-instruction letters are not accepted): ${course ? `${course}. ` : ""}ATU Global's postgraduate minimums are IELTS Academic 6.0 overall with 5.5 in each component, Duolingo 105 (100 in each section), PTE Academic 55, TOEFL iBT 80 (4 on the post-January 2026 scale), Cambridge B2 First/C1 Advanced grade B, or Oxford Test of English 125`;

const STAY_BACK_UG =
  "Graduates of an NFQ Level 8 honours degree can apply for one year of stay-back (Third Level Graduate Programme) to look for graduate-level work in Ireland, subject to the Irish Immigration Service's eligibility rules";

const STAY_BACK_PG =
  "Graduates of an NFQ Level 9 master's can apply for two years of stay-back (Third Level Graduate Programme) to look for graduate-level work in Ireland, subject to the Irish Immigration Service's eligibility rules";

export const atlanticTechnologicalUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "BSc (Hons) Computing in Software Development - AU676",
    slug: "atu-bsc-computing-software-development-au676",
    level: "Bachelor",
    field: "Software Development",
    duration: "4 years full-time (NFQ Level 8)",
    campus: CAMPUS.galway,
    tuitionNote: UG_FEE(),
    description:
      "ATU Galway's four-year software development degree is built around hands-on programming, mainly in Java and C#, and applying computer science theory to real problems. Early years cover program design, GUI and front-end web development, mathematics for computing, computer technology, data structures and algorithms, cross-platform app development, systems analysis, software testing, databases and networking. Third year adds operating systems, database administration, security principles for software systems, microservices, object-oriented and graphics programming, and a software internship or professional practice module, with the option of an Oracle Java or MySQL certification. Final year covers distributed systems, advanced software design, AI-assisted programming, machine learning, AI and emerging technologies, ending with a capstone applied project and minor dissertation. Students can exit with a Higher Certificate after two years or an ordinary BSc after three, and ATU says over 90% of graduates in the last ten years found ICT jobs within six months.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-science-honours-software-development-on-campus-galway",
    degree: "Bachelor of Science (Honours) in Computing in Software Development (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software or full-stack developer",
      "Mobile, web or UI developer",
      "QA and test automation engineer",
      "DevOps or cloud engineer",
      "Data or machine learning engineer",
      "Systems analyst",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7 and Maths at O6/H7 (or Foundation Maths F2). GCE: 2 A-levels at grade C plus 4 GCSEs at grade C including English and Maths. The 2026 CAO points for EU entrants were 300",
      UG_COUNTRY,
      UG_ENGLISH(),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Computer Science - AU361",
    slug: "atu-bsc-computer-science-au361",
    level: "Bachelor",
    field: "Computer Science",
    duration: "3 years full-time (NFQ Level 8), for applicants who already have a computing background",
    campus: CAMPUS.letterkenny,
    tuitionNote: UG_FEE(),
    description:
      "An accelerated three-year honours degree at ATU Donegal for students who have already studied computing at school (for example Leaving Certificate Computer Science, a GCE in Computing or a QQI Level 5 computing award), so they can move quickly through the core and on to advanced topics. First year covers operating systems, object-oriented and algorithmic programming, web fundamentals, IT infrastructure, databases, cloud and web technologies and mathematics for computing. Second year adds object-oriented analysis and design, data analytics, client-side scripting, cybersecurity and secure programming, Python scripting, AI and machine learning, project management and a team project. Final year covers DevOps, software engineering, computer vision, server-side scripting, UX design, predictive analysis, research with emerging technologies, legal and ethical issues, and a development project. The course page lists a work placement.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-science-honours-computer-science",
    degree: "Bachelor of Science (Honours) in Computer Science (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software engineer or developer",
      "Machine learning or AI developer",
      "Data analyst",
      "Database administrator or developer",
      "Systems administrator",
      "IT consultant or project manager",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7, Computer Science at O4/H6 and Maths at O4/H7. GCE: 2 A-levels at grade C plus GCSE Maths and ICT at grade B and two more GCSEs at grade C including English. The 2026 CAO points for EU entrants were 309",
      "Because the degree is compressed into three years, applicants need prior study of computing (Computer Science or Computing at school level or an equivalent award), with minimum grades",
      UG_COUNTRY,
      UG_ENGLISH("this course page asks non-native speakers for IELTS 6.5 overall with no section below 6.0 (or equivalent), higher than ATU Global's general minimum, so plan for 6.5"),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Computer Networks and Cyber Security - AU956",
    slug: "atu-bsc-computer-networks-cyber-security-au956",
    level: "Bachelor",
    field: "Cybersecurity",
    duration: "4 years full-time (NFQ Level 8), including a work placement in Year 3",
    campus: CAMPUS.sligo,
    tuitionNote: UG_FEE(),
    description:
      "A lab-heavy degree at ATU Sligo on the infrastructure that moves data around the internet and how to secure it. Students start with computer systems, programming, operating systems and networks, IoT, web design and mathematics, then move to Linux, routing and switching, cyber security, databases, maker labs and cloud computing in second year. Third year covers scaling and connecting networks, network security (CCNA Security), directory services, database administration and a group project, plus a work placement of at least 12 weeks. Final year includes software-defined networks, virtualisation, hybrid cloud management, infrastructure security testing, converged networks, advanced network design, start-up engineering, a final project and AWS Academy Cloud Architecting. The programme is mapped to CompTIA A+, Cisco CCNA, Microsoft Server and AWS certifications, and ATU says over 70% of students gain employment directly from their placement.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-science-honours-computer-networks-and-cyber-security",
    degree: "Bachelor of Science (Honours) in Computer Networks and Cyber Security (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Network systems administrator",
      "Cybersecurity engineer",
      "Cloud solutions architect",
      "Computer network defence administrator",
      "Wireless network engineer",
      "Systems design engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7 and Maths at O6/H7 (or Foundation Maths F2). GCE: 2 A-levels at grade C plus 4 GCSEs at grade C including English and Maths. The 2026 CAO points for EU entrants were 300",
      UG_COUNTRY,
      UG_ENGLISH(),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BEng (Hons) Mechanical Engineering - AU645",
    slug: "atu-beng-mechanical-engineering-au645",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (NFQ Level 8), with a work placement opportunity in Year 3",
    campus: CAMPUS.galway,
    tuitionNote: UG_FEE(),
    description:
      "ATU Galway's honours mechanical engineering degree focuses on three themes: design with 3D modelling and simulation, manufacturing technology with integrated CAD/CAM, and automation from process control to programming robot arms. About half of the time is spent in small-group laboratory work, using current CAD packages and CNC turning and milling machines. First year covers mathematics, engineering and electrical science, CAD, manufacturing engineering and mechanical dissection; second year adds fluid mechanics, thermodynamics, mechanics of machines and materials, and pneumatics-based automation. Third year brings machine design, heat transfer, numerical methods and programming, instrumentation and control, Six Sigma and a work placement opportunity, and final year covers automation and control, reliability and maintenance, energy management, lean and supply chain engineering, quality and regulatory affairs, and medical devices. Exit awards are available after two or three years, and the course is accredited by Engineers Ireland at Associate Engineer level.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-engineering-honours-mechanical-engineering-galway",
    degree: "Bachelor of Engineering (Honours) in Mechanical Engineering (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Mechanical or design engineer",
      "Manufacturing or process engineer",
      "Medical device engineer",
      "Maintenance or facilities engineer",
      "Energy systems engineer",
      "Technical sales engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7 and Maths at O4/H7. GCE: 2 A-levels at grade C plus GCSE Maths at grade B and three more GCSEs at grade C including English. The 2026 CAO points for EU entrants were 462",
      UG_COUNTRY,
      UG_ENGLISH(),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Business (Hons) International Hotel and Hospitality Management - AU630",
    slug: "atu-bbus-international-hotel-hospitality-management-au630",
    level: "Bachelor",
    field: "Hospitality Management",
    duration: "4 years full-time (NFQ Level 8), including a 12-week and a 30-week industry placement",
    campus: CAMPUS.galway,
    tuitionNote: UG_FEE(
      "ATU's 2026/27 material fee schedule also lists material fees for this course of €320 (Year 1), €378 (Year 2), €100 (Year 3) and €500 (Year 4), payable on registration and subject to change."
    ),
    description:
      "ATU says this was the first hotel management degree offered in Ireland, and it is taught by lecturers with long industry experience and links to hotel groups in Ireland, Europe, the USA and Canada. The course combines management study with practical hospitality skills: early years include events, social media, public relations, world cultures and etiquette, financial accounting, marketing, culinary skills for hospitality managers, food for health, management principles and business law. After Year 1 students complete a 12-week placement in an Irish hotel or approved property, and after Year 2 a 30-week industrial placement with an industry project; non-EU students complete this placement in Ireland. Later years cover strategic hospitality management, HR, management accounting, services and sales marketing, business intelligence, tourism economics and transport, sustainable hospitality and tourism, ethics and governance, with optional French, German, Spanish or Irish. Final-year students compete in the annual IHI Management Games.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-business-honours-international-hotel-and-hospitality-management",
    degree: "Bachelor of Business (Honours) in International Hotel and Hospitality Management (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Hotel or resort manager",
      "Hospitality operations manager",
      "Events manager",
      "Hospitality sales and marketing manager",
      "Hospitality HR or finance specialist",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7 and Maths at O6/H7 (or Foundation Maths F2). GCE: 2 A-levels at grade C plus 4 GCSEs at grade C including English and Maths. The 2026 CAO points for EU entrants were 300",
      UG_COUNTRY,
      UG_ENGLISH(),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Business (Hons) Accounting - AU600",
    slug: "atu-bbus-accounting-au600",
    level: "Bachelor",
    field: "Accounting",
    duration: "3 years full-time (NFQ Level 8)",
    campus: CAMPUS.galway,
    tuitionNote: UG_FEE(),
    description:
      "A three-year honours accounting degree at ATU Galway that leads directly into an accounting career and also suits finance, financial services and consulting roles; no previous accounting or business study is needed. Lecturers are qualified accountants, some of whom examine for the professional bodies, and the programme is updated to match professional body and employer requirements. Modules run from management principles, business maths, IT, cloud computing and an introduction to business analytics in first year, through management accounting, managerial finance and investment decisions, computerised accounting packages and business analytics, to taxation, FRS 102 financial reporting, strategic management, systems thinking for accountants and business and estate planning in the final year. The degree is accredited by ACCA, Chartered Accountants Ireland and CIMA and earns exemptions from professional exams, giving a faster route to qualifying as an accountant.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-business-honours-accounting-galway",
    degree: "Bachelor of Business (Honours) in Accounting (NFQ Level 8)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Trainee accountant (ACCA, Chartered Accountants Ireland, CPA or CIMA route)",
      "Accounts or finance officer in industry",
      "Financial services professional",
      "Tax trainee",
      "Management consultant",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7 and Maths at O6/H7 (or Foundation Maths F2). GCE: 2 A-levels at grade C plus 4 GCSEs at grade C including English and Maths. The 2026 CAO points for EU entrants were 307",
      UG_COUNTRY,
      UG_ENGLISH(),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Applied Freshwater and Marine Biology - AU655",
    slug: "atu-bsc-applied-freshwater-marine-biology-au655",
    level: "Bachelor",
    field: "Marine Biology",
    duration: "4 years full-time (NFQ Level 8)",
    campus: CAMPUS.galway,
    tuitionNote: UG_FEE(
      "ATU's 2026/27 material fee schedule also lists a €150 material fee for this course, payable on registration and subject to change."
    ),
    description:
      "An applied ecology degree at ATU Galway on freshwater and marine environments and how to manage their resources sustainably and within the law. No school biology is needed, as first year covers the basics of biology, chemistry, physics and mathematics. Students then study botany and zoology, the biology and culture of aquatic species, limnology and oceanography, field and laboratory techniques and statistics, followed by ecology of aquatic environments, environmental and fisheries monitoring, ecological techniques and species identification. Final year covers aquatic animal behaviour, GIS, biodiversity and conservation, advanced data analysis, environmental legislation, aquatic resource management, ecological modelling and a research project, plus an international residential field course. Fieldwork is a big part of the course, including time on the Marine Institute's research vessel Celtic Voyager, and ATU's Marine and Freshwater Research Centre is based on the campus. Exit awards are available after two or three years.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-science-honours-applied-freshwater-and-marine-biology",
    degree: "Bachelor of Science (Honours) in Applied Freshwater and Marine Biology (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Sustainability & the Environment",
    careerOutcomes: [
      "Marine or freshwater research scientist",
      "Fisheries officer or fisheries development officer",
      "Aquaculture development officer",
      "Environmental officer",
      "Fish or marine farm manager",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Irish Leaving Certificate benchmark: six subjects at O6/H7 including two at H5, English or Irish at O6/H7 and Maths at O6/H7 (or Foundation Maths F2). GCE: 2 A-levels at grade C plus 4 GCSEs at grade C including English and Maths. The 2026 CAO points for EU entrants were 410",
      UG_COUNTRY,
      UG_ENGLISH(),
      STAY_BACK_UG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "BSc (Hons) Nursing/Midwifery International (top-up)",
    slug: "atu-bsc-nursing-midwifery-international-top-up",
    level: "Bachelor",
    field: "Nursing",
    duration: "1 year full-time (90 ECTS, NFQ Level 8 top-up)",
    campus: CAMPUS.stAngelas,
    tuitionNote: UG_FEE(),
    description:
      "A one-year honours top-up degree at ATU St Angela's in Sligo for registered nurses educated overseas who hold a nursing diploma and want to upgrade to a European Level 8 (honours) degree, or study for continuing professional development. Modules cover evidence-based practice, patient safety and quality improvement, professional issues and transcultural practice, leadership and management for healthcare delivery, and health and wellness coaching. Important: ATU states that this degree does not lead to registration with the Nursing and Midwifery Board of Ireland (NMBI); nurses who want to register in Ireland must check NMBI's own process and its minimum theoretical and clinical hours. ATU says graduates have found work in Irish healthcare and abroad, and some continue to its MHSc in International Healthcare Management.",
    officialProgramUrl: "https://www.atu.ie/courses/bachelor-of-science-honours-nursing-midwifery-international",
    degree: "Bachelor of Science (Honours) in Nursing/Midwifery International (NFQ Level 8)",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Registered nurse (in the country of registration) with an honours degree",
      "Healthcare team leader",
      "Further study in public health, nursing or healthcare management",
    ],
    intake: `September. Unlike most ATU courses, applications are made by contacting the ATU St Angela's international office (international.stangelas@atu.ie) from the course page. ${AGENT_RULE}`,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "A portfolio including a Diploma in General Nursing, current valid and recognised nursing registration, original nursing academic documents and experience records, a completed application form, CV and statement of purpose; further documents may be requested",
      "Medical insurance is required for successful applicants",
      UG_ENGLISH("this course page asks for IELTS Academic 6.0 or a Duolingo English Test score of 105-115"),
      STAY_BACK_UG,
    ],
  },

  // ---------- Postgraduate ----------

  {
    ...UNIVERSITY,
    name: "MSc Business Analytics",
    slug: "atu-msc-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "1 year full-time (90 ECTS)",
    campus: CAMPUS.galway,
    tuitionNote: PG_FEE(),
    description:
      "An applied MSc at ATU Galway on using an organisation's data, statistics and analytical tools to support decisions and improve performance. Taught modules cover business analytics and intelligence, data management for analytics, quantitative methods, programming for business analytics, data visualisation, AI and emerging technologies including responsible AI, IT strategy and governance, and research methods. A 30-credit applied project, completed in semester two and over the summer, has students tackle a real business problem and write a full research report. There are about 12 contact hours a week plus substantial independent study. Exit awards are a Postgraduate Certificate (30 credits) and Postgraduate Diploma (60 credits).",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-science-business-analytics",
    degree: "Master of Science in Business Analytics (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: ["Business analyst", "Business intelligence analyst", "Operations analyst", "Data analyst", "R&D analyst"],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A Level 8 honours bachelor's degree with at least a 2.2 (or equivalent) in business, business information systems, business or data analytics, IT/computing or a related area. Applicants who do not meet this may be considered through Recognition of Prior Learning (RPL)",
      PG_COUNTRY,
      PG_ENGLISH(),
      STAY_BACK_PG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Computing in Big Data Analytics and Artificial Intelligence",
    slug: "atu-msc-big-data-analytics-artificial-intelligence",
    level: "Master",
    field: "Artificial Intelligence",
    duration: "1 year full-time (90 ECTS); also offered over 2 years part-time",
    campus: CAMPUS.letterkenny,
    tuitionNote: PG_FEE(),
    description:
      "An MSc at ATU Donegal on analysing large and varied datasets to find patterns and correlations, and on building systems that use that data to make decisions on their own. Modules cover big data analytics, big data architecture, machine learning, principles of artificial intelligence, AI for computer vision and natural language processing, and mathematics for analytics, followed by a dissertation. ATU points to opportunities in banking and financial services, retail, healthcare, energy, manufacturing, transport and communications. Applicants from outside computing can qualify with at least 30 ECTS of computing modules or industry experience, and a one-week bridging course is offered where needed.",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-science-computing-in-big-data-analytics-and-artificial-intelligence",
    degree: "Master of Science in Computing in Big Data Analytics and Artificial Intelligence (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "AI or machine learning engineer",
      "Data engineer",
      "Computer vision engineer",
      "Business intelligence analyst",
      "Data analytics consultant",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A Level 8 honours degree in computing (or equivalent) with at least a second-class honours (2.2), or a Higher Diploma in Computing. Non-computing graduates need at least 30 ECTS in computing-related modules or computer industry experience; RPL is possible for applicants without an honours degree",
      PG_COUNTRY,
      PG_ENGLISH(),
      STAY_BACK_PG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Computing in Cybersecurity",
    slug: "atu-msc-computing-cybersecurity",
    level: "Master",
    field: "Cybersecurity",
    duration: "1 year full-time (90 ECTS); also offered over 2 years part-time",
    campus: CAMPUS.letterkenny,
    tuitionNote: PG_FEE(),
    description:
      "An industry-developed MSc at ATU Donegal made up of three taught blocks followed by a dissertation over one or two semesters. Modules cover secure infrastructure, cryptography and forensic analysis, information security management, threat management, software compliance, and web application security and software standards. ATU highlights roles in organisations with large IT infrastructure, the payment card industry and financial services. Full-time attendance on campus is required.",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-science-computing-in-cybersecurity",
    degree: "Master of Science in Computing in Cybersecurity (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Information security analyst or engineer",
      "Security incident analyst",
      "IT security threat analyst",
      "Secure systems manager",
      "Cyber security manager",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A Level 8 honours degree in computing (or equivalent) with at least a second-class honours (2.2), or a Higher Diploma in Computing. Applicants without an honours degree but with relevant experience may be considered through RPL",
      PG_COUNTRY,
      PG_ENGLISH(),
      STAY_BACK_PG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Data Science",
    slug: "atu-msc-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1 year full-time (90 ECTS), with an online preparatory computing certificate in June and July; also offered part-time",
    campus: CAMPUS.letterkenny,
    tuitionNote: PG_FEE(),
    description:
      "A conversion-style MSc at ATU Donegal aimed at graduates from a wide range of non-computing subjects who want to become data scientists. Before arriving, students take an online preparatory Certificate in Computing during June and July. The on-campus programme then covers descriptive analytics and visualisation, data operations and management, computational mathematics, machine learning, predictive analytics and deep learning, followed by a dissertation applying these skills to a data science problem. Students who do not complete the dissertation can graduate with a Postgraduate Diploma in Data Science. Full-time attendance on campus is required.",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-science-data-science",
    degree: "Master of Science in Data Science (NFQ Level 9)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Data analyst",
      "Data engineer",
      "Business intelligence analyst",
      "Marketing or operations analyst",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "An honours degree with first- or second-class honours (or an equivalent qualification) in any discipline; applicants without an honours degree but with significant relevant experience may be considered through RPL",
      PG_COUNTRY,
      PG_ENGLISH("this course page asks non-EU students for IELTS 6.0 or equivalent"),
      STAY_BACK_PG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Human Resource Management and Employee Relations",
    slug: "atu-msc-human-resource-management-employee-relations",
    level: "Master",
    field: "Human Resource Management",
    duration: "1 year full-time (90 ECTS); also offered over 2 years part-time",
    campus: CAMPUS.galway,
    tuitionNote: PG_FEE(),
    description:
      "A CIPD-accredited MSc at ATU Galway for anyone aiming for a career in HR or employee relations, or managing people in any kind of organisation. It draws on HRM, organisational psychology, employee relations and labour research, and adds practical skills such as HR analytics and HR information systems, mediation and negotiation, and change management. Modules include competing perspectives in people management, organisational analysis, labour economics and policy, international employee relations, strategic talent management, learning and development, change and sustainability, contemporary HR issues, and employment law, followed by a dissertation. The course is blended: about half the modules have on-site hours, four are taught fully online and some mix both.",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-science-human-resource-management-and-employee-relations",
    degree: "Master of Science in Human Resource Management and Employee Relations (NFQ Level 9)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "HR officer or HR business partner",
      "Employee relations specialist",
      "Talent acquisition or learning and development specialist",
      "HR analyst",
      "People manager",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A Level 8 degree in any discipline with at least a 2.2; applicants with other qualifications and relevant work experience may be considered through RPL",
      PG_COUNTRY,
      PG_ENGLISH(),
      STAY_BACK_PG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Health Science in International Healthcare Management (International Stream)",
    slug: "atu-mhsc-international-healthcare-management",
    level: "Master",
    field: "Healthcare Management",
    duration: "1 year full-time (90 ECTS)",
    campus: CAMPUS.stAngelas,
    tuitionNote: PG_FEE(),
    description:
      "A one-year master's at ATU St Angela's in Sligo that prepares experienced healthcare professionals, such as nurses, doctors, pharmacists and physiotherapists, to take on management and leadership roles in healthcare settings around the world. Its seven modules cover managing finance in healthcare organisations, principles of healthcare leadership, healthcare ethics, quality and healthcare management, strategic management, healthcare project management and enhancing evidence-based practice. Students attend campus two days a week and complete a further two full days of work online each week. ATU highlights small groups with one-to-one academic support, and Sligo as an affordable place to live.",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-health-science-international-healthcare-management-international-stream",
    degree: "Master of Health Science in International Healthcare Management (NFQ Level 9)",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Healthcare manager or ward/unit manager",
      "Senior nurse or clinical leader",
      "Healthcare quality or project manager",
    ],
    intake: `September (full-time). Applications are made by contacting the ATU St Angela's international office (international.stangelas@atu.ie) from the course page. ${AGENT_RULE}`,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A primary Level 8 degree (minimum 2.2) in nursing or another healthcare field, which must include a human science module, plus at least 36 months of work experience after the degree",
      "Registration as a healthcare professional (for example nurse, doctor, pharmacist, physiotherapist or CORU-registered professional), with evidence of current registration in your country of residence where applicable; some healthcare administrators or managers may also be eligible",
      "Application form with a personal statement, original academic documents and experience records, full high school records and passport",
      PG_ENGLISH(),
      STAY_BACK_PG,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc Applied Marine Conservation",
    slug: "atu-msc-applied-marine-conservation",
    level: "Master",
    field: "Marine Conservation",
    duration: "1 year full-time (90 ECTS)",
    campus: CAMPUS.galway,
    tuitionNote: PG_FEE(),
    description:
      "A one-year, full-time on-campus MSc at ATU Galway on fisheries, marine conservation, sustainability and ecosystem-based management, taught by staff researching fisheries, marine mammals and seabirds. Modules cover data analysis in R and RStudio, applied GIS, population assessment for seabirds and marine mammals, life-history strategies, the wider effects of harvesting on wild populations and ecosystems, and the ecology of top marine predators. The course is applied, with fieldwork and practicals and 100% continuous assessment, and ends with a major research thesis co-supervised by ATU and an external organisation.",
    officialProgramUrl: "https://www.atu.ie/courses/master-of-science-applied-marine-conservation",
    degree: "Master of Science in Applied Marine Conservation (NFQ Level 9)",
    areaOfInterest: "Sustainability & the Environment",
    careerOutcomes: [
      "Ecological consultant",
      "Marine conservation officer (NGOs and charities)",
      "Research institute or agency scientist",
      "PhD researcher",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "At least a 2.2 in a related honours degree, such as zoology, ecology, marine biology, wildlife management or conservation biology",
      PG_COUNTRY,
      PG_ENGLISH("this course page asks non-EU, non-native English speakers for IELTS 6.0 or equivalent"),
      STAY_BACK_PG,
    ],
  },
];
