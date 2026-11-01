import type { Program } from "../../programs";

// University of Limerick (Limerick, Ireland): 7 undergraduate degrees and 8 one-year taught master's programmes, chosen for their
// popularity with international (non-EU) students. Sources (viewed October 31, 2026):
// - UL course pages for each programme, including their Course content / Programme content, Entry requirements (with the
//   country-by-country non-EU requirements selector), How to apply / Apply, Fees and funding / Fees and Careers / Graduate
//   profile tabs (https://www.ul.ie/study/undergraduate/... and https://www.ul.ie/study/postgraduate/...)
// - Student Fees Office: Undergraduate fees 2026-2027 (https://www.ul.ie/fees/course-fees/undergraduate-fees/undergraduate-fees-2026-2027)
//   and Postgraduate taught fees 2026-2027 (https://www.ul.ie/fees/course-fees/postgraduate-fees/postgraduate-taught-fees-2026-2027)
// - Undergraduate English language requirements (https://www.ul.ie/study/undergraduate/international-students/english-language-requirements)
// - Postgraduate English language requirements (https://www.ul.ie/study/postgraduate/applying/entry-requirements/english-language-requirements)
// - Postgraduate entry requirements for international students (https://www.ul.ie/study/postgraduate/applying/entry-requirements/international-students)
// - Postgraduate applying, closing dates and how to apply for taught programmes (https://www.ul.ie/study/postgraduate/applying,
//   https://www.ul.ie/study/postgraduate/applying/taught-programmes)
// - Scholarships for non-EU students (https://www.ul.ie/study/postgraduate/international-students/scholarships) and accepting
//   your offer as an international student (https://www.ul.ie/study/postgraduate/international-students/accepting-your-offer)
// - UL Global, Full Degree (https://www.ul.ie/global/incoming-students/full-degree) and the international students FAQ
//   (https://www.ul.ie/courses/international-students/frequently-asked-questions)
// Fees are in euro. The 2026-27 non-EU fees come from the Student Fees Office schedules and include the €104 student levy.
// UL had not published 2027-28 fee schedules when checked; postgraduate course pages, which already advertise September 2027
// entry, show a (higher) non-EU fee without naming the year, so both figures are given for master's programmes.

const UNIVERSITY = {
  universitySlug: "university-of-limerick",
  universityName: "University of Limerick",
  country: "Ireland",
  language: "English",
  campus: "Limerick (main campus, Castletroy)",
  programType: "Full-time",
} as const;

// ---------- Undergraduate ----------

const UG_FEE = (fee: string, tuition: string) =>
  `2026-27: the non-EU fee is ${fee} a year (${tuition} tuition plus the €104 student levy), per UL's Student Fees Office 2026-2027 undergraduate schedule. Fees are paid in two instalments (4 September 2026 and 22 January 2027 for 2026-27) and are reviewed every year, so students starting in September 2027 will pay the 2027-28 rate, which UL had not published yet`;

const UG_FEE_STANDARD = UG_FEE("€22,700", "€22,596");

const UG_INTAKE =
  "September (autumn semester). Non-EU students apply directly to UL with the 'Apply Now' button on the course page, not through the CAO";

const UG_DEADLINE =
  "UL had not yet published its non-EU undergraduate deadline for September 2027 entry. For September 2026 entry, UL Global said non-EU applications stayed open until early July 2026; visa-required applicants should apply well before then to leave time for the study visa";

const UG_COUNTRY =
  "Non-EU academic requirements: UL lists minimum school qualifications country by country on each course page (for example, applicants from India need Standard X and XII from CBSE, CISCE or a Metro State Board with first-division standing, a combined average of at least 70%, and at least 70% at Standard XII in any subject the course specifically requires). For A Levels and the IB, UL maps its CAO points to grades: 520 = A*AAC or IB 38, 450 = ABBB or IB 32, 400 = BBBC or IB 30, 380 = BBCC or IB 28, 330 = CCCC or IB 26 (IB scores include bonus points). Some courses ask for more, and meeting the minimum does not guarantee a place";

const UG_ENGLISH =
  "English language (if English is not your first language): Academic IELTS 6.5 overall with no band below 6.0 (General IELTS is not accepted; some courses ask for more); TOEFL iBT 90 (paper 580); PTE Academic 61 with no section below 59; Duolingo 120 with at least 110 in each subscore (an interview may also be needed); LanguageCert ESOL B2 Communicator High Pass with 33+ in each skill; Cambridge Proficiency or Advanced grade C; or GCSE/GCE O Level English grade C. You can apply before you have a score, but any offer will be conditional on meeting the requirement before enrolment";

const UG_LEAVING_CERT = (subjects: string) =>
  `Irish Leaving Certificate benchmark (UL's base standard, which equivalents are measured against): six subjects with two H5 and four O6 grades (or four H7 grades), including Mathematics, English and Irish or another language${subjects}`;

const UG_CAREERS_COMPUTING = [
  "Software developer or engineer",
  "IT consultant",
  "Web developer",
  "DevOps engineer",
  "Network security analyst",
  "Games programmer",
];

// ---------- Postgraduate ----------

const PG_FEE = (tableFee: string, pageFee: string) =>
  pageFee === tableFee
    ? `2026-27: the full-time non-EU fee is ${tableFee} for the year (including the €104 student levy), per UL's Student Fees Office 2026-2027 postgraduate taught schedule, and the programme page, which already advertises September 2027 entry, shows the same ${pageFee}. Fees are billed by semester and are reviewed every year`
    : `2026-27: the full-time non-EU fee is ${tableFee} for the year (including the €104 student levy), per UL's Student Fees Office 2026-2027 postgraduate taught schedule. The programme page, which already advertises September 2027 entry, now shows ${pageFee} for non-EU students without naming the year, which is probably the 2027-28 rate. Fees are billed by semester`;

const PG_ACCEPT =
  "Offers are accepted by paying a €1,000 deposit, which is taken off the tuition fee; visa-required students must pay at least 50% of the tuition fee to get the visa support letter";

const PG_SCHOLARSHIP_SE =
  "Non-EU applicants are automatically considered for a Faculty of Science and Engineering merit scholarship of €2,000 a year (a tuition reduction, offered for 2026/27)";

const PG_SCHOLARSHIP_KBS =
  "Non-EU applicants are automatically considered for a Kemmy Business School merit scholarship of €2,500 a year (a tuition reduction, offered for 2026/27)";

const PG_INTAKE = "September (full-time, on campus in Limerick)";

const PG_DEADLINE_GENERAL =
  "No programme-specific closing date was listed. UL's rule for non-EU visa-required applicants is an autumn deadline of 1 July (stated as 1 July 2026 for autumn 2026 entry; the 2027 date had not been updated), and later applications are not considered. Many programmes close earlier once places are filled, so UL advises applying early. Apply online through the programme page; the €50 application fee covers up to two programmes";

const PG_APPLY =
  "Application: apply online from the programme page and upload transcripts and degree certificates (with English translations), a copy of your passport or birth certificate and an English language certificate. Applicants who have not graduated yet can apply with results to date. A €50 application fee covers up to two programmes";

const PG_COUNTRY =
  "Country-specific degree equivalents (UL postgraduate international entry requirements): India, a four-year bachelor's or three-year honours bachelor's in a relevant subject with first-division results, normally 55-70% overall depending on the programme, with semester-by-semester mark sheets; Pakistan, a four-year bachelor's (awarded from 2016) with 70% or 3.0/4; Nigeria, a 2:2 from a federal university or 2:1 from a private or state university; China, high grades in a four-year degree (three-year degrees are not accepted). Some programmes also interview applicants";

const PG_ENGLISH =
  "English language (unless you completed a degree taught in English in a country where English is an official language): Academic IELTS 6.5 overall with no band below 6.0 (some programmes ask for more; General IELTS is not accepted); TOEFL iBT 4.5 overall with 4.5 in each section on the scale used from 21 January 2026 (90 iBT or 580 paper for earlier tests); PTE Academic 61 with no section below 59; Duolingo 120 with no subscore below 110 (an interview may be required); LanguageCert Academic 70 overall with 65 in each skill or LanguageCert ESOL B2 Communicator High Pass with 33+ in each skill; Cambridge Proficiency or Advanced grade C. Certificates must be less than two years old. Visa applicants may still need to show an English test result to immigration even if UL waives it";

export const universityOfLimerickPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (Common Entry) - LM121",
    slug: "ul-computer-science-common-entry",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time, including an 8-month cooperative education placement",
    tuitionNote: UG_FEE_STANDARD,
    description:
      "LM121 is UL's common first year in computing. You spend the first year on programming in Java and Python (with a taste of functional and assembly languages), foundations of computer science, computer organisation, discrete and computer mathematics and games modelling, and in the spring semester you choose one of three degrees: Computer Systems (software engineering with an emphasis on AI and data science), Cyber Security and IT Forensics, or Computer Games Development. There is no cap on places in any of the three. All three pathways cover mobile, web and cloud development and include eight months of work experience through UL's Cooperative Education programme.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/computer-science-common-entry",
    degree: "BSc in Computer Systems, BSc in Cyber Security and IT Forensics, or BSc in Computer Games Development (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Computer Science and AI",
    careerOutcomes: UG_CAREERS_COMPUTING,
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(", plus at least O2 or H6 in Mathematics. Course code LM121; the 2026 CAO points for EU entrants were 362"),
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Artificial Intelligence and Machine Learning (BSc/MSc) - LM174",
    slug: "ul-artificial-intelligence-machine-learning-bsc",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time for the BSc, or 5 years for the integrated MSc route; includes an 8-month cooperative education placement",
    tuitionNote: `${UG_FEE_STANDARD}. UL's course page does not state a separate fee for the optional fifth (master's) year`,
    description:
      "LM174 was Ireland's first undergraduate degree in AI and machine learning and mixes computer science with a strong maths core. First year covers programming (including a language suited to AI), foundations of computer science, calculus and linear algebra; later years add operating systems, databases, data structures and algorithms, graphics, intelligent systems, machine learning, neural computing, data mining, AI governance and AI culture. Third year includes eight months on cooperative education. Students can finish with a BSc after four years (with a year-long AI project) or, with a QCA of 2.6 or higher after Year 3, switch to a fifth year and leave with an MSc that adds deep reinforcement learning, probabilistic and explainable AI and a research project.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/artificial-intelligence-and-machine-learning-bsc-or-msc",
    degree: "Bachelor of Science in Artificial Intelligence and Machine Learning (NFQ Level 8), with an optional integrated Master of Science (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Computer Science and AI",
    careerOutcomes: [
      "Data scientist or analyst",
      "Machine learning or AI engineer",
      "Software engineer",
      "Research scientist",
      "AI gameplay programmer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(", plus at least H3 in Higher Level Mathematics. Course code LM174; the 2026 CAO points for EU entrants were 456"),
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Aeronautical Engineering (BE/ME) - LM077",
    slug: "ul-aeronautical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time for the BE, or 5 years for the ME; includes an 8-month industry placement",
    tuitionNote: `${UG_FEE_STANDARD}. UL's course page does not state a separate fee for the fifth (ME) year`,
    description:
      "UL's Aeronautical Engineering degree, accredited by Engineers Ireland, prepares students for the aerospace industry with wind tunnels and composites manufacturing facilities on campus. The first two years build engineering foundations such as mathematics, thermodynamics, materials, fluid mechanics, engineering mechanics, CAD, aerodynamics, aircraft systems and air transport management. After an eight-month placement at the end of Year 2 (past students have gone to companies such as Boeing and Airbus), the later years cover flight mechanics, with flight-test labs on board a twin-engine turboprop, aircraft design, flight dynamics, propulsion and aerospace structures. Final-year students design, build and fly a model aircraft to an annual AIAA brief. UL says more than 70% of its graduates work in aerospace.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/aeronautical-engineering-be-or-me",
    degree: "Bachelor of Engineering (BE) in Aeronautical Engineering (NFQ Level 8), or Master of Engineering (ME) via the five-year pathway",
    workIntegrated: true,
    areaOfInterest: "Engineering",
    careerOutcomes: [
      "Aeronautical or aerospace engineer",
      "Aircraft design engineer",
      "Aerospace stress engineer",
      "Maintenance programme engineer",
      "Quality engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(
        ", plus at least H4 in Higher Level Mathematics and O6/H7 in one of Applied Maths, Physics, Chemistry, Physics with Chemistry, Engineering, Design & Communication Graphics, Technology, Computer Science, Biology, Agricultural Science or Construction Studies. Course code LM077; the 2026 CAO points for EU entrants were 544"
      ),
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electronic and Computer Engineering (BEng/MEng) - LM118",
    slug: "ul-electronic-computer-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time for the BEng, or 5 years for the MEng; includes an 8-month industrial placement",
    tuitionNote: `${UG_FEE_STANDARD}. UL's course page does not state a separate fee for the fifth (MEng) year`,
    description:
      "Designed with employers, LM118 combines electronic hardware, software and mathematical analysis for areas such as edge devices, electric vehicles, energy, health technology and AI. Years 1 and 2 are a common syllabus, followed by an eight-month industrial placement across the summer and first semester of Year 3. Students then choose one of five majors: Computer Engineering, Electronic Engineering, Electrical Energy Engineering, Robotic Engineering or a General option. They either graduate with a BEng after four years or transfer at the end of Year 4 into a fifth, master's year of specialist electives. UL's BE programmes are accredited by Engineers Ireland, and this new BEng will be accredited once its first students graduate.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/electronic-and-computer-engineering-be-or-me",
    degree: "Bachelor of Engineering (BEng) in Electronic and Computer Engineering (NFQ Level 8), or Master of Engineering (MEng) via the five-year track",
    workIntegrated: true,
    areaOfInterest: "Engineering",
    careerOutcomes: [
      "Electronic or computer hardware engineer",
      "Embedded and software engineer",
      "Robotics and automation engineer",
      "Power and energy systems engineer",
      "Telecommunications engineer",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(
        ", plus at least H4 in Higher Level Mathematics and O6/H7 in one of Physics, Chemistry, Physics with Chemistry, Engineering, Computer Science, Construction Studies, Design & Communication Graphics, Technology, Biology, Agricultural Science or Applied Maths. Course code LM118; the 2026 CAO points for EU entrants were 465"
      ),
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Business Studies - LM050",
    slug: "ul-bachelor-business-studies",
    level: "Bachelor",
    field: "Business & Management",
    duration: "4 years full-time, including an 8-month paid cooperative education placement in Year 3",
    tuitionNote: `${UG_FEE("€17,500", "€17,396")}. Indian students with 75% or more in Standard X and XII (including English and Maths) can be considered for the Kemmy Business School 'Jim Kemmy India Scholarship', worth €4,000 and available across the four years of the degree if progression standards are met`,
    description:
      "The BBS at UL's Kemmy Business School, which holds EQUIS, AMBA and AACSB accreditation, is one of Ireland's most popular business degrees. The first three semesters cover accounting, economics, finance, risk, human resources, management, marketing and business analytics. In Year 2 you choose a major in Accounting and Taxation, Economics and Public Policy, Finance, Human Resource Management, Marketing or Risk Management and Insurance, and in the final two years you add a minor. Year 3 includes an eight-month paid placement, and there are options for international exchange or a dual degree, spending the last two years at a partner school in Canada, Finland, France, Germany, Poland or Japan. You can also take the degree with French, German, Japanese or Spanish.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/business-studies-bbs",
    degree: "Bachelor of Business Studies (BBS) (Hons) (NFQ Level 8)",
    workIntegrated: true,
    areaOfInterest: "Business",
    careerOutcomes: [
      "Accountant or tax adviser",
      "Financial analyst",
      "HR specialist",
      "Marketing executive",
      "Risk and insurance professional",
      "Economist or policy analyst",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(
        ", plus at least O4/H7 in Mathematics. The language streams need H4 in that language (or, for Japanese or beginners' Spanish, H4 in a language other than English). Course code LM050; the 2026 CAO points for EU entrants were 442"
      ),
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Psychology - LM102",
    slug: "ul-bsc-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "4 years full-time",
    tuitionNote: UG_FEE_STANDARD,
    description:
      "This four-year honours degree is accredited by the Psychological Society of Ireland (PSI), so graduates can register with the society. After a broad introduction to the discipline, you study the core areas PSI requires: social, developmental, biological and cognitive psychology, personality and individual differences, and research methods and statistics. In the final year you specialise in advanced topics. Research skills are built through lab classes and group research exercises and end with your own final-year research project. The course also includes options to study abroad and to work in a psychology-related setting.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/psychology-bsc",
    degree: "Bachelor of Science in Psychology (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Health, Medicine and Psychology",
    careerOutcomes: [
      "Postgraduate training in clinical, counselling or other applied psychology",
      "Research assistant",
      "Applied behaviour analysis tutor",
      "HR or recruitment roles",
      "Data and pricing analyst",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(" (F6 in Foundation Mathematics is also accepted). Course code LM102; the 2026 CAO points for EU entrants were 500"),
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Physiotherapy - LM100",
    slug: "ul-bsc-physiotherapy",
    level: "Bachelor",
    field: "Health Sciences",
    duration: "4 years full-time, with supervised clinical placements",
    tuitionNote: `${UG_FEE("€26,300", "€26,196")}. Health screening, vaccinations and placement uniforms are extra costs paid by the student`,
    description:
      "UL's physiotherapy degree is approved by CORU, Ireland's state registration body for physiotherapists. Year 1 is mostly biomedical science, covering anatomy and physiology, health informatics, exercise and health fitness and introductory physiotherapy skills. Year 2 focuses on assessing and managing respiratory, musculoskeletal and neurological problems and starts research and evidence-based practice. Year 3 deals with more complex cases and prepares you for the final-year research project, and Year 4 adds case-based and inter-professional modules alongside the last two practice education placements. Students learn with other health professions throughout and complete several supervised clinical placements.",
    officialProgramUrl: "https://www.ul.ie/study/undergraduate/physiotherapy-bsc",
    degree: "Bachelor of Science in Physiotherapy (NFQ Level 8, honours)",
    workIntegrated: true,
    areaOfInterest: "Health, Medicine and Psychology",
    careerOutcomes: ["Chartered physiotherapist", "Research assistant", "Graduate-entry medicine or PhD study"],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEAVING_CERT(
        " (F6 in Foundation Mathematics is also accepted), plus at least O3/H7 in one of Physics, Chemistry, Physics with Chemistry, Biology, Physical Education or Agricultural Science. Entry is competitive and usually well above the minimum; course code LM100, and the 2026 CAO points for EU entrants were 579"
      ),
      "Placements: Garda (police) vetting is required because placements can involve children or vulnerable adults, and students must complete health screening, vaccinations and CPR certification as category A healthcare workers",
      UG_COUNTRY,
      UG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Artificial Intelligence and Machine Learning",
    slug: "ul-msc-artificial-intelligence-machine-learning",
    level: "Master",
    field: "Computer Science",
    duration: "1 year full-time (autumn, spring and summer semesters)",
    tuitionNote: `${PG_FEE("€20,800", "€21,500")}. ${PG_SCHOLARSHIP_SE}. ${PG_ACCEPT}`,
    description:
      "A one-year, on-campus master's for graduates with a computing, engineering or maths-heavy science background who want to build and apply AI systems. The autumn semester covers data engineering and machine learning in Python, evolutionary computation and humanoid robotics, text analytics and NLP, AI for games and machine vision. In spring you move to machine learning theory, deep reinforcement learning, probabilistic and explainable AI, modern AI ecosystems and research methods. The summer is spent on an individual AI and machine learning project, and teaching mixes lectures, workshops and hands-on work.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/artificial-intelligence-and-machine-learning-msc",
    degree: "Master of Science (MSc) in Artificial Intelligence and Machine Learning (NFQ Level 9)",
    areaOfInterest: "Computer Science and AI",
    intake: PG_INTAKE,
    applicationDeadline:
      "12 March 2027 for September 2027 entry (the closing date on the programme page). Apply online through the programme page; the €50 application fee covers up to two programmes",
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in computer science, computer engineering or a science subject with enough maths and programming. Applicants without the standard qualification can be considered under UL's Recognition of Prior Learning policy",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Software Engineering",
    slug: "ul-msc-software-engineering",
    level: "Master",
    field: "Computer Science",
    duration: "1 year full-time (autumn, spring and summer semesters)",
    tuitionNote: `${PG_FEE("€20,800", "€21,500")}. ${PG_SCHOLARSHIP_SE}. ${PG_ACCEPT}`,
    description:
      "A one-year master's for computing graduates who want to deepen their software engineering skills. Core modules cover research methods, advanced object-oriented and component-based design, software development paradigms, concurrency and parallelism, software quality, human-computer interaction and advanced software architectures. Students also pick a stream: Software Process and Analysis (software evolution, requirements engineering and project management) or Data Analytics (machine learning, big data and visualisation, and data mining). The year ends with a dissertation, which can be written as a conference-style research paper, and students who leave after the spring semester can take a Postgraduate Diploma.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/software-engineering-msc",
    degree: "Master of Science (MSc) in Software Engineering (NFQ Level 9)",
    areaOfInterest: "Computer Science and AI",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in a relevant subject such as computer systems, computer science or applied mathematics. UL may shortlist applicants for interview, and a CV detailing work experience is required",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Data Science and Statistical Learning",
    slug: "ul-msc-data-science-statistical-learning",
    level: "Master",
    field: "Data Science",
    duration: "1 year full-time (autumn, spring and summer semesters)",
    tuitionNote: `${PG_FEE("€20,800", "€21,500")}. ${PG_SCHOLARSHIP_SE}. ${PG_ACCEPT}`,
    description:
      "This master's turns strong quantitative skills into data science for careers in ICT, finance, consulting, manufacturing and pharma. Most students follow Pathway A: R for statistical data science, database systems (relational and NoSQL), text analytics and NLP, statistical inference and statistical modelling in the autumn, then quantitative research methods, network science, big data and visualisation, AI and machine learning, and statistical learning in the spring. Pathway B is for students who already studied a lot of statistics and swaps in scientific computation and machine learning. The year finishes with a summer research project.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/data-science-and-statistical-learning-msc",
    degree: "Master of Science (MSc) in Data Science and Statistical Learning (NFQ Level 9)",
    areaOfInterest: "Computer Science and AI",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in mathematics, statistics, physics or another quantitative subject with a strong mathematical or statistical component. UL only considers applicants who did well in maths in their previous studies and may shortlist for interview; statistical programming experience helps but is not required",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Business Analytics",
    slug: "ul-msc-business-analytics",
    level: "Master",
    field: "Business & Management",
    duration: "1 year full-time (autumn, spring and summer semesters)",
    tuitionNote: `${PG_FEE("€20,400", "€20,400")}. ${PG_SCHOLARSHIP_KBS}. ${PG_ACCEPT}`,
    description:
      "A one-year Kemmy Business School master's that builds quantitative skills first and then applies them to business. The autumn semester covers analytical decision making, statistics for data analytics, database systems, machine learning and project management. Spring moves on to data governance and ethics, applied econometrics, digital markets and consumers, big data and visualisation, and leadership and change. Summer is hands-on, with a Digital Futures Lab and a business simulation. Students can leave with a Graduate Diploma after spring, or take a dual degree with one of five French business schools.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/business-analytics-msc",
    degree: "Master of Science (MSc) in Business Analytics (NFQ Level 9)",
    areaOfInterest: "Business",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in a relevant subject such as business, finance, economics, mathematics, engineering or computer science, plus a CV. Applicants without the standard qualification can be considered under UL's Recognition of Prior Learning policy",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in International Management and Global Business",
    slug: "ul-msc-international-management",
    level: "Master",
    field: "Business & Management",
    duration: "1 year full-time (autumn, spring and summer semesters)",
    tuitionNote: `${PG_FEE("€18,400", "€18,900")}. ${PG_SCHOLARSHIP_KBS}. Registered students may be able to use a monthly payment plan. ${PG_ACCEPT}`,
    description:
      "A one-year master's for business graduates aiming for international careers. The autumn semester covers project management, international corporate finance, cross-cultural management, corporate sustainability and leadership. Spring covers international economics, global business strategy, international marketing, global supply chains and HR in a changing world of work. In summer, students take part in an international workshop and either do an international management simulation with an industry-led capstone or write a research dissertation. A dual degree with one of seven international business schools is also available.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/international-management-msc",
    degree: "Master of Science (MSc) in International Management and Global Business (NFQ Level 9)",
    areaOfInterest: "Business",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in business or a related subject, plus a CV",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Finance",
    slug: "ul-msc-finance",
    level: "Master",
    field: "Finance",
    duration: "1 year full-time (autumn, spring and summer semesters); the dual-degree option adds a second year in France",
    tuitionNote: `${PG_FEE("€18,400", "€18,900")}. ${PG_SCHOLARSHIP_KBS}. ${PG_ACCEPT}`,
    description:
      "UL's MSc in Finance covers risk, regulation, analytics and decision making. In autumn you study financial analysis and governance, global finance, risk modelling and derivatives, and corporate sustainability. In spring you take wealth and portfolio management, data science for risk management, financing the shift to new energy, food and transport systems, and European financial regulation, plus a one-week module with a visiting international professor. For the summer capstone you choose a research dissertation, a business analytics route (Digital Futures Lab and a business simulation), or a second year at a French partner school for a double degree. A Postgraduate Diploma exit is available after spring.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/finance-msc",
    degree: "Master of Science (MSc) in Finance (NFQ Level 9)",
    areaOfInterest: "Business",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in a relevant subject; relevant professional qualifications and experience can also be considered. A CV and personal statement are required",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Project Management",
    slug: "ul-msc-project-management",
    level: "Master",
    field: "Business & Management",
    duration: "1 year full-time (autumn, spring and summer semesters)",
    tuitionNote: `${PG_FEE("€18,400", "€18,900")}. ${PG_SCHOLARSHIP_KBS}. ${PG_ACCEPT}`,
    description:
      "A one-year master's on leading projects and organisational change. The autumn semester covers strategy, the science and principles of project management, planning and control, people and behaviour in projects, and research methods. Spring covers decision analysis, knowledge and information management, commercial and contract management, international project management, and project leadership and governance. The summer applies all of this in a project management simulation and a module on managing complexity. A Postgraduate Diploma exit is available after spring, and a dual degree with one of five French business schools is offered.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/project-management-msc",
    degree: "Master of Science (MSc) in Project Management (NFQ Level 9)",
    areaOfInterest: "Business",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a second-class honours, grade 2 (2:2), in a field related to project management, such as engineering, science, business, IT, public administration, health or education, plus a CV. UL may shortlist applicants for interview",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSc in Public Health",
    slug: "ul-msc-public-health",
    level: "Master",
    field: "Health Sciences",
    duration: "1 year full-time (a 2-year part-time option exists, but only full-time study qualifies for a study visa)",
    tuitionNote: `${PG_FEE("€16,000", "€16,250")}. Non-EU applicants to the full-time programme are automatically considered for a Faculty of Education and Health Sciences merit scholarship of €2,000 (offered for 2026/27). ${PG_ACCEPT}`,
    description:
      "This master's prepares students for public health work in Ireland and abroad. Teaching is on campus three days a week, with case studies, group assignments and on-campus assessments. The autumn semester covers public health and health systems, designing public health interventions, and research and data analysis. Spring covers monitoring and evaluation, global health and sustainable development, and an eight-week supervised public health practicum. A research project in the third semester completes the degree.",
    officialProgramUrl: "https://www.ul.ie/study/postgraduate/public-health-msc",
    degree: "Master of Science (MSc) in Public Health (NFQ Level 9)",
    workIntegrated: true,
    areaOfInterest: "Health, Medicine and Psychology",
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE_GENERAL,
    admissionRequirements: [
      "Academic: a bachelor's degree (NFQ Level 8) with at least a 2:1 (second-class honours, grade 1). Applicants with a 2:2 or lower may be considered if they have significant public health work experience. UL may shortlist and interview applicants. A CV and a personal statement explaining why you want to take the programme and which research area interests you are required",
      PG_COUNTRY,
      PG_ENGLISH,
      PG_APPLY,
    ],
  },
];
