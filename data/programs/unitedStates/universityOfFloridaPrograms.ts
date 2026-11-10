import type { Program } from "../../programs";

// University of Florida: 8 undergraduate majors for summer/fall 2027 first-year entry and 7 on-campus
// graduate programmes in Gainesville. Sources (viewed 10 November 2026): Office of Admissions first-year
// how to apply, dates and deadlines, Early Decision FAQ, requirements, international applicants and
// decision process pages (admissions.ufl.edu/apply/freshman, /deadlines, /early-decision, /requirements,
// /international, /our-decision-process), the Undergraduate International Admissions Guide
// (admissions.ufl.edu/international-admissions-guide), the transfer international page for the only
// published undergraduate English minimums (admissions.ufl.edu/apply/transfer/international), the
// Undergraduate Catalog admission section (catalog.ufl.edu/UGRD/admission) and major pages
// (catalog.ufl.edu/UGRD/colleges-schools/...), the CFO Division 2026-27 tuition and fees per credit hour
// (cfo.ufl.edu/student-financial-resources/current-and-former-students/2026-27-academic-year-tuition-and-fees)
// and UF Regulation 3.0375 (policy.ufl.edu/regulation/3-0375), the Office of Student Financial Aid and
// Scholarships 2026-27 cost of attendance (sfa.ufl.edu/cost), the UF International Center 2026-27 start-up
// cost / I-20 estimates (internationalcenter.ufl.edu/iss/obtaining-f-1-status/start-up-cost), graduate
// how to apply and international applicants pages (admissions.ufl.edu/apply/graduate and
// /apply/graduate/international), the Graduate Catalog admission section (gradcatalog.ufl.edu/graduate/admission),
// CISE graduate admissions and master's degree requirements (cise.ufl.edu/admissions/graduate and
// cise.ufl.edu/academics/graduate/masters/degree-requirements), ECE graduate admissions and non-thesis
// master's requirements (ece.ufl.edu/admissions/graduate and
// ece.ufl.edu/academics/graduate/degree-programs/masters-degree-non-thesis), ISE master's, apply-now and
// master's FAQ pages (ise.ufl.edu/academics/graduate/masters, /apply-now, ise.ufl.edu/academics/faq/faq-masters),
// MAE graduate admissions and degree programmes (mae.ufl.edu/students/graduate/admissions and /degree-programs),
// and Warrington College of Business pages for the MS in Business Analytics, MS-ISOM Data Science
// concentration, Full-time MBA, master's admissions and graduate costs (warrington.ufl.edu/graduate/... and
// warrington.ufl.edu/admissions-aid/...). Costs are in US dollars. UF has no separate international tuition
// rate: international students pay the non-Florida-resident rate, charged per credit hour.

const UNIVERSITY = {
  universitySlug: "university-of-florida",
  universityName: "University of Florida",
  country: "United States",
  language: "English",
  campus: "Gainesville",
  programType: "Full-time",
} as const;

// CFO 2026-27 per credit hour, undergraduate courses (0000-4999): Florida resident total 214.54; non-resident
// fee 894.61 + non-resident financial aid fee 44.73 -> non-resident total 1,153.88. 30 credits = 34,616.40.
// SFA 2026-27 out-of-state undergraduate COA (incoming freshmen, 30 credits): tuition/fees 34,620, books 1,220,
// transport 1,700, living 14,190, personal 2,224, loan fees 56 = 54,010. UFIC 2026-27 undergraduate I-20
// estimate: tuition 30,886 (30 credits), books 1,220, transport 1,700, living 14,190, personal 2,224, loan fees 56,
// health insurance (mandatory) 3,185, between-term 1,000 = 54,461.
const UG_TUITION =
  "2026-27: UF charges undergraduates per credit hour, and international students pay the non-Florida-resident rate of US$1,153.88 per credit hour for undergraduate courses (US$214.54 in resident tuition and fees plus a US$894.61 non-resident fee and a US$44.73 non-resident financial aid fee). The Office of Student Financial Aid and Scholarships estimates US$34,620 in tuition and fees for an incoming out-of-state freshman taking 30 credits over fall and spring, and an out-of-state undergraduate cost of attendance of US$54,010 for the year: US$34,620 tuition and fees, US$1,220 books and supplies, US$1,700 transport, US$14,190 living expenses, US$2,224 personal expenses and US$56 loan fees. For the I-20, the UF International Center uses a 2026-27 minimum undergraduate budget of US$54,461, which includes mandatory health insurance (about US$3,185 a year) and US$1,000 for between-term expenses; it recommends arriving with about US$20,000 available, as fee deferment is not offered to international students. UF says a limited number of admissions scholarships go to admitted freshmen, including international students, who meet the application deadlines. 2027-28 rates had not been published when we checked";

const UG_INTAKE = "Fall semester or Summer B term (2027 entry); UF may offer a different term from the one you request";

const UG_DEADLINE =
  "2027 entry (UF's 2026-27 application cycle), through the Common App only; the application fee is US$30. UF offers all three options. Early Decision (binding, single-choice): apply by 15 October 2026 with materials by 22 October 2026; decisions 11 December 2026; admitted students must confirm by 8 January 2027 and withdraw other applications. Early Action (non-binding): apply by 1 November 2026 with materials by 8 November 2026; decisions 22 January 2027. Regular Decision (non-binding): apply by 15 January 2027 with materials (transcripts or credential evaluation and test scores) by 22 January 2027; decisions 19 March 2027, with outcomes of admit, deny, waitlist or a Santa Fe College pathway. The Early Decision and Early Action dates had already passed when we checked, so Regular Decision is the remaining option for 2027 entry. Non-binding admits confirm with a US$200 deposit by 1 May 2027. Official test scores are due by 1 May and final transcripts by 1 July. International applicants follow the same process and deadlines but are advised to apply early because foreign credentials take time to process";

const UG_TESTING =
  "Testing: required. Under Florida Board of Governors regulation, every first-year applicant must submit an SAT, ACT or Classic Learning Test (CLT) score by the materials deadline (self-reported scores are accepted for review; SAT and TOEFL code 5812, ACT code 0758). UF superscores all three tests and uses only the ACT Reading, English and Mathematics sections. The middle 50% of students admitted in 2026 had SAT 1420-1520, ACT 32-35 and a UF-recalculated weighted core GPA of 4.5-4.7";

const UG_ENGLISH =
  "English proficiency: UF's Undergraduate Catalog says applicants whose native language is not English must submit official TOEFL or IELTS scores, but neither the catalog nor the Office of Admissions first-year international page publishes a minimum score for first-year applicants. The only undergraduate minimums UF publishes are on its transfer page (TOEFL iBT 80, TOEFL paper-based 550, IELTS Academic 6.0), with exemptions for citizens of listed English-speaking countries, so confirm what applies to you with the Office of Admissions before you test";

const UG_ACADEMIC =
  "Application materials: the Common App with the UF supplement short answers and the personal essay, an activities list and family information. Applicants with secondary schooling outside the United States do not use the STARS self-reported record; instead they upload at least four years of secondary transcripts (including the final-year schedule) in the original language with certified word-for-word English translations, and must also send a course-by-course credential evaluation with a GPA calculation from a NACES member, all by the materials deadline. Minimum preparation is 16 academic units (4 English, 4 mathematics at Algebra 1 or above, 3 natural sciences with two labs, 3 social sciences and 2 sequential years of one foreign language). Review is comprehensive and looks at a UF-calculated weighted core GPA, curriculum strength, test scores, activities, the essay and personal background. Admitted F-1 students must document funding for the I-20, which UF's International Center bases on its yearly budget";

const UG_ROUTE = (major: string, tracking: string) =>
  `Admission route: you list ${major} as your intended major on the Common App, but UF states that it does not admit by major. Once enrolled you stay in the major by meeting its critical-tracking milestones each semester: ${tracking}`;

// Graduate 2026-27 per credit hour (graduate courses 5000-9999): resident total 532.52; non-resident fee 873.11 +
// non-resident financial aid 43.65 -> non-resident total 1,449.28. SFA 2026-27 out-of-state graduate off-campus
// COA: tuition/fees 34,780, books 1,220, transport 1,700, living 18,090, personal 2,593, loan fees 87 = 58,470.
// UFIC graduate I-20 estimate: tuition 31,869 (24 credits), books 1,660, transport 1,660, living 17,755, personal
// 2,603, loan fees 87, health insurance 3,185, between-term 1,000 = 59,394.
const GRAD_RATE =
  "2026-27: graduate courses are charged per credit hour, and international students pay the non-Florida-resident rate of US$1,449.28 per credit hour (US$532.52 in resident tuition and fees plus a US$873.11 non-resident fee and a US$43.65 non-resident financial aid fee)";

const GRAD_LIVING =
  "The Office of Student Financial Aid and Scholarships' 2026-27 out-of-state graduate budget (living off campus) is US$58,470: US$34,780 tuition and fees, US$1,220 books and supplies, US$1,700 transport, US$18,090 living expenses, US$2,593 personal expenses and US$87 loan fees. For the I-20, the UF International Center uses a minimum graduate budget of US$59,394, which includes mandatory health insurance (about US$3,185 a year) and US$1,000 for between-term expenses. International graduate students must normally carry at least 9 credits in fall and spring to keep F-1 status. 2027-28 rates had not been published when we checked";

const GRAD_ENGLISH =
  "English proficiency (UF Graduate School minimum): TOEFL iBT 80, or on the new TOEFL scale (effective spring 2027) 4.5 overall with at least 4.0 in reading, listening, speaking and writing, or IELTS Academic 6.5 (electronic delivery only), or a UF English Language Institute exit certificate. Scores from different tests cannot be combined. Exemptions may be granted, at the department's discretion, if you completed a year of degree study or earned a degree in the United States, in a country where English is the only official language, or at an institution taught only in English, or if you are a citizen of one of UF's listed English-speaking countries. Where a programme requires the GRE, a verbal score of at least 140 is also needed";

const GRAD_MINIMUM =
  "UF Graduate School minimums: a bachelor's degree equivalent to a US bachelor's degree (UF does not recognise three-year bachelor's degrees from India, Australia, Bangladesh, Canada outside Quebec, Nepal or Pakistan) and a GPA of at least 3.0 on all coursework after your first 60 semester credits; applicants below 3.0 can only be admitted conditionally. Apply through the UF graduate application on CollegeNET; the application fee is US$30, there is no fee waiver from the Office of Admissions, and each programme needs its own application and fee. Unofficial transcripts and degree certificates (with certified English translations) are enough for review; official copies are due by the end of your first semester. Your CV must list all post-secondary education and employment and any international affiliations and research funding, as Florida law requires";

export const universityOfFloridaPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (Herbert Wertheim College of Engineering)",
    slug: "uf-bs-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "UF's engineering-based Computer Science BS is run by the Department of Computer & Information Science & Engineering (CISE) within the Herbert Wertheim College of Engineering, so students share the same general education and mathematics and science grounding as other engineers: three semesters of calculus, computational linear algebra, two semesters of calculus-based physics and engineering statistics. The computing core covers programming fundamentals, discrete structures, and data structures and algorithms, followed by computer organisation, software engineering, databases, computer networks, programming language concepts, algorithm design, operating systems, engineering ethics and a senior project (or UF's Integrated Product and Process Design sequence). Students add 14 credits of CISE technical electives and 14 credits of interdisciplinary electives in an area of their choice, such as a minor or predefined track, and the programme requires extra professional communication coursework. A cybersecurity specialisation is available. UF also offers a Computer Science BS through the College of Liberal Arts and Sciences; this entry is the engineering version.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/CPS_BSCS/",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Computer Science (engineering)",
        "you must complete the critical-tracking courses (Calculus 1-3, Programming Fundamentals 1 and Physics with Calculus 1-2) at a pace of roughly one or two a semester, each with a C or better within two attempts, keeping a 2.5 GPA across critical-tracking courses and a 2.0 UF GPA"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Engineering",
    slug: "uf-bs-computer-engineering",
    level: "Bachelor",
    field: "Computer Engineering",
    duration: "Typically 4 years full-time (126 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The Computer Engineering BS is shared by UF's Department of Computer & Information Science & Engineering and Department of Electrical & Computer Engineering, combining software and hardware. Required courses include programming fundamentals, discrete structures, data structures and algorithms, computer organisation, software engineering, digital logic and computer systems, and microprocessor applications, along with a two-semester computer engineering design sequence (or UF's Integrated Product and Process Design programme) and engineering ethics. Through technical electives from both departments, students specialise in areas such as computer architecture, computer systems engineering, digital signal processing, embedded systems, intelligent systems, networking and communication, and security, and a cybersecurity specialisation is offered. Co-op placements help students see how computer engineering is applied in industry, and graduates go on to graduate study or careers across computing and high-technology fields.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/CPE_BSCO/",
    degree: "Bachelor of Science in Computer Engineering (BSCO)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Computer Engineering",
        "the critical-tracking courses are Calculus 1-3, Differential Equations and Physics with Calculus 1-2, completed semester by semester with a C or better in each within two attempts, a 2.5 critical-tracking GPA and a 2.0 UF GPA. Students must keep cumulative, college, upper-division and computer engineering GPAs of at least 2.0"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "uf-bs-electrical-engineering",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "Typically 4 years full-time (128 credits)",
    tuitionNote: UG_TUITION,
    description:
      "UF's Electrical Engineering BS, offered by the Department of Electrical & Computer Engineering, gives a foundation in basic engineering with depth and breadth in electrical engineering and room for electives. Students can specialise in electronic devices and circuits; electromagnetics, power and photonics; or computers, communications, and systems and controls. The curriculum includes a computer programming requirement, electrical engineering breadth and depth courses and technical electives, and students must finish both circuits (EEL 3111C) and digital logic (EEL 3701C) before taking 4000-level electrical engineering courses. It also prepares graduates for professional engineering licensure. The department's laboratories and research programmes support both experimental and theoretical work, and students can join UF's industry-sponsored Integrated Product and Process Design programme.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/ELE_BSEE/",
    degree: "Bachelor of Science in Electrical Engineering (BSEE)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Electrical Engineering",
        "the seven critical-tracking courses (Calculus 1-3, Differential Equations, Physics with Calculus 1-2 and General Chemistry) must each be passed with a C or better within two attempts, including withdrawals, with a 2.5 GPA across them and a 2.0 UF GPA. Electrical engineering majors must keep a 2.0 GPA in all ECE courses"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "uf-bs-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (128 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The Mechanical Engineering BS comes from UF's Department of Mechanical & Aerospace Engineering, one of the founding departments of the Herbert Wertheim College of Engineering, whose mechanical engineering programme marked its centenary in 2009. The accredited degree builds a strong foundation in mathematics, science and the engineering sciences, including statics, dynamics, mechanics of materials, thermodynamics and numerical methods, then lets students develop interests in manufacturing, robotics, solid mechanics, thermal and fluid systems, dynamics and controls, and biomechanics through specialisation and technical electives. The first six semesters match the Aerospace Engineering BS, so students can earn a dual mechanical and aerospace degree with about one extra semester, and a combined BS/MS lets strong students count graduate courses toward both degrees. Graduates work across many industries or continue to graduate study.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/MCE_BSME/",
    degree: "Bachelor of Science in Mechanical Engineering (BSME)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Mechanical Engineering",
        "you must complete two of the eight critical-tracking courses (General Chemistry, EML 2023, Calculus 1-3, Differential Equations and Physics with Calculus 1-2) in each of your first semesters, each with a C or better within two attempts, keeping a 2.8 GPA across the group and a 2.0 UF GPA"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial and Systems Engineering",
    slug: "uf-bs-industrial-systems-engineering",
    level: "Bachelor",
    field: "Industrial Engineering",
    duration: "Typically 4 years full-time (125 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Industrial and Systems Engineering at UF prepares students to design and improve processes and operations, combining operations research, data analytics for Industry 4.0, human and systems analysis, production and quality control, and the economic analysis of operational systems. Students learn to use engineering principles, statistics, economics, mathematics and computing to make quantitative decisions. After the ISE core, which introduces the main sub-disciplines, students choose a focus among three restricted elective areas (operations research and data analytics, human systems engineering, or production and logistics), taking at least three courses in their chosen area and at least one in each of the other two. The curriculum also prepares students for graduate study.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/ISE_BSIS/",
    degree: "Bachelor of Science in Industrial and Systems Engineering (BSIS)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Industrial and Systems Engineering",
        "the eight critical-tracking courses (VB.NET programming, ESI 3327C, Calculus 1-3, Computational Linear Algebra and Physics with Calculus 1-2) are completed over the first five semesters, each with a C or better within two attempts, with a 2.5 critical-tracking GPA and a 2.0 UF GPA. The department's minimum for admission to the upper division is a 2.5 overall GPA and a 2.5 GPA in the pre-engineering technical courses"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science",
    slug: "uf-bs-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "UF's Data Science BS, administered by the Department of Statistics in the College of Liberal Arts and Sciences, teaches students to draw conclusions from large data sets generated in many fields. After 15 credits of foundations (a calculus sequence and introductory statistics), the major requires at least 56 credits covering the mathematics of data science (computational mathematics and linear algebra, including linear algebra for data science), statistics (programming with data in R, probability, statistical theory, regression, statistical learning and statistical computing), computer science (two programming fundamentals courses, discrete mathematics, data structures and algorithms, and databases) and a course on ethics, data and technology. Students then apply these skills through three subject-area electives drawn from fields across the university, such as machine learning, econometrics, bioinformatics, geographic information systems and audience analytics.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGLAS/DAT_BS/",
    degree: "Bachelor of Science (BS), Data Science major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Data Science",
        "you must earn at least a B, within two attempts, in Calculus 2 and 3 and in introductory statistics (STA 2023 or STA 3032), then complete the computing, linear algebra and statistics critical-tracking courses by set semesters, with a critical-tracking GPA of 2.5 in semester 3, 2.65 in semester 4 and 2.75 in semester 5 and a 2.0 UF GPA throughout. Students are told to see a department advisor early"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Finance (Heavener School of Business)",
    slug: "uf-bsba-finance",
    level: "Bachelor",
    field: "Finance",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The BSBA in Finance from UF's Heavener School of Business (part of the Warrington College of Business) covers the main areas of business with a focus on finance. After foundation courses in economics, mathematics, computing and accounting, students take a business core in business law, business finance, international business, management, operations and supply chain management, marketing, business statistics, and business analytics and artificial intelligence. The finance major adds financial accounting, financial management, financial modelling and equity and capital markets, plus electives and a professional communication course. The degree deals with how businesses raise and manage money, financial markets, security analysis and valuation, financial institutions, investments, risk management, venture capital and capital structure, and leads to careers in corporate finance and financial services. All campus Heavener majors complete a six-credit career readiness sequence, and internships, study abroad and student organisations are encouraged.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGBUS/FIN_BSBA/",
    degree: "Bachelor of Science in Business Administration (BSBA), Finance major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Finance",
        "complete the business critical-tracking courses (financial and managerial accounting, a computing course, micro- and macroeconomics, two calculus courses, statistics and Business Finance) at a set pace over four semesters, with a 3.0 GPA on all attempts of critical-tracking courses, at least a B in Financial Accounting (ACG 2021) and in Business Finance (FIN 3403, within two attempts), and a 2.0 UF GPA. Finance majors must keep 2.0 core, major and UF GPAs"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Information Systems (Heavener School of Business)",
    slug: "uf-bsba-information-systems",
    level: "Bachelor",
    field: "Information Systems",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The BSBA in Information Systems is for students interested in information systems, information technology and supply chain management. Alongside the Heavener School of Business core (business law, finance, international business, management, operations and supply chain management, marketing, business statistics, and business analytics and artificial intelligence), the major covers business systems analysis and design, database management, business data communications, information systems and operations strategy, and managerial operations analysis, focusing on the computing, quantitative and applied skills used to solve business problems. Graduates work as decision support specialists, information systems specialists and systems analysts, or continue to graduate study in information systems, operations management, supply chain management or business. A six-credit career readiness sequence is required, and internships, study abroad and student organisations are encouraged.",
    officialProgramUrl: "https://catalog.ufl.edu/UGRD/colleges-schools/UGBUS/IST_BSBA/",
    degree: "Bachelor of Science in Business Administration (BSBA), Information Systems major",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE(
        "Information Systems",
        "complete all seven business critical-tracking courses (financial and managerial accounting, a computing course, micro- and macroeconomics, calculus and statistics) by the end of the fourth semester, including Financial Accounting by semester 3, with a 3.0 GPA on all attempts and a 2.0 UF GPA. Majors must keep 2.0 core, major and UF GPAs"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "uf-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "30 credits; CISE caps enrolment at 9 credits a semester, so plan on at least four terms",
    tuitionNote: `${GRAD_RATE}, so the 30-credit degree comes to about US$43,478 in tuition and fees. CISE's Academic Achievement Award gives new master's students who are not Florida residents, including international students, a total of US$3,300 (US$1,100 a semester for three fall or spring semesters) if admitted for fall 2026 or later; there is no separate application, recipients must take at least 9 credits and keep a 3.0 GPA, and it cannot be combined with assistantships or other college awards. ${GRAD_LIVING}`,
    description:
      "UF's MS in Computer Science, offered by the Department of Computer & Information Science & Engineering, can be taken with or without a thesis and requires 30 graduate credits; CISE does not let graduate students count undergraduate courses. Every student takes four core courses chosen from twelve: human-computer interaction, bioinformatics, database management systems, computer architecture, software engineering, cryptography, computer networks, advanced data structures, programming language principles, distributed operating systems, analysis of algorithms, and mathematics for intelligent systems. Non-thesis students then take 18 more graduate credits (at least 12 in CISE), while thesis students take 12 more plus 6 thesis research credits; up to 3 internship credits can count. The department's research spans algorithms, computer vision, databases, graphics, machine learning, networks, systems, bioinformatics, human-centred computing and cybersecurity.",
    officialProgramUrl: "https://cise.ufl.edu/academics/graduate/masters/degree-requirements/",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: MS priority deadline 5 January 2027; international MS applicants must apply by 1 February 2027 (domestic 31 May 2027). Spring entry: international MS applicants by 1 August (the spring 2027 date has passed; the next is 1 August 2027 for spring 2028). Apply through the UF graduate application; the department does not give pre-evaluations",
    admissionRequirements: [
      "CISE expects a B average in upper-level courses, and most admitted students hold a degree in computer science, computer engineering or electrical engineering with at least a 3.3/4.0 GPA. Prerequisites (or equivalents): Calculus 1-2, statistics, introductory programming, discrete structures, computer organisation, data structures and algorithms, and operating systems. Upload a statement of purpose and three letters of recommendation with the online application. GRE scores are optional (a verbal score of at least 140 is expected if you send them)",
      "CISE English requirement (higher than the Graduate School minimum): TOEFL iBT 90 with at least 19 in each section, or IELTS 7.5 overall with at least 6.5 in reading, listening and speaking and 5.5 in writing (MELAB 77 is also listed). The department notes that applicants from India must now submit a TOEFL or IELTS score. CISE had not published an equivalent on the new TOEFL scale when we checked",
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering",
    slug: "uf-ms-electrical-computer-engineering",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration: "30 graduate credits (non-thesis option)",
    tuitionNote: `${GRAD_RATE}, so the 30-credit degree comes to about US$43,478 in tuition and fees. ${GRAD_LIVING}`,
    description:
      "The MS in Electrical and Computer Engineering, offered by UF's Department of Electrical & Computer Engineering, lets students build their own plan from more than 80 graduate courses. The non-thesis degree needs 30 graduate credits, at least 21 of them in ECE courses taken at UF, including a 12-credit depth and breadth requirement: at least 9 credits in one of the department's research divisions (computer engineering, devices, electromagnetics and energy systems, electronics, or signals and systems) and at least 3 credits outside it. Up to 18 credits of special topics and up to 3 credits of internship can count, and non-thesis students finish with a technical mock job interview with an ECE faculty member. The department reports that more than 60% of its students land internships with major employers and more than 95% of admitted master's students graduate on time. In the UF application choose the MS in Electrical and Computer Engineering; a Computer Engineering selection goes to the CISE department instead.",
    officialProgramUrl: "https://ece.ufl.edu/admissions/graduate/",
    degree: "Master of Science (MS) in Electrical and Computer Engineering",
    intake: "Fall semester (spring and summer entry only for current UF undergraduates, online EDGE applicants and funded PhD applicants)",
    applicationDeadline:
      "Fall 2027 entry: international MS applicants by 5 January 2027 (domestic MS applicants by 1 April 2027). Spring (1 August) and summer (1 January) deadlines apply only to the eligible groups above; other spring or summer applications are deferred to the following fall. Applicants are automatically considered for any available funding",
    admissionRequirements: [
      "A minimum undergraduate GPA of 3.0/4.0 for master's applicants. Admission is competitive and holistic; the department favours applicants who have engaged with ECE faculty (for example through undergraduate research or summer programmes) and who explain why they want to study in this department specifically. GRE scores are not required, and the department discourages sending them because scores below university minimums count against you",
      "ECE English requirement: IELTS Academic 6.5, or TOEFL 4.5 overall with at least 4.0 in each section on the new scale. Duolingo and IELTS Indicator are not accepted, and the department will not waive the English test because your previous degree was taught in English (other UF exemptions, such as citizenship of a listed English-speaking country, are applied through the English Language Testing Exemptions list)",
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial and Systems Engineering",
    slug: "uf-ms-industrial-systems-engineering",
    level: "Master",
    field: "Industrial Engineering",
    duration: "31 or more graduate credits, thesis or non-thesis",
    tuitionNote: `${GRAD_RATE}, so 31 credits come to about US$44,928 in tuition and fees. The department does not give assistantships to incoming master's students; at admission, its selection committee may grant some applicants an Achievement Award for New Engineering Graduate Students, a partial tuition waiver for up to 36 credits. The department says only about 5-10% of master's students later find assistantships on campus and expects master's students to fund their own studies. ${GRAD_LIVING}`,
    description:
      "UF's on-campus MS in Industrial and Systems Engineering trains students to analyse and improve complex real-world systems of people, information, money and physical resources using analytics and optimisation. Teaching focuses on data analytics, human performance analysis and operations research, with applications in human, health, production, supply chain and transportation systems, and optional concentrations including advanced manufacturing, data analytics, engineering management, health systems, human systems, information technology, operations research, quantitative finance, and supply chain and logistics. The degree needs at least 31 graduate credits, 17 or more of them in ISE courses, a one-credit graduate seminar in the first year and a 3.0 GPA. Non-thesis students must pass an approved project course (for example simulation, systems design or data analytics) within six months of graduating, and thesis students take 3-6 thesis credits and defend their thesis. Graduates have joined employers such as CSX, GE, Google, Bank of America, American Express, Walt Disney and Siemens.",
    officialProgramUrl: "https://ise.ufl.edu/academics/graduate/masters/",
    degree: "Master of Science (MS) in Industrial and Systems Engineering",
    intake: "Fall or spring semester (the application page also lists a summer 2027 start under the fall deadline)",
    applicationDeadline:
      "Summer or fall 2027 entry: priority deadline 1 February 2027 for the online application and all supporting documents; international applicants must apply by this date (the 1 March 2027 regular deadline is for domestic applicants only). Spring 2027 entry closed on 1 August 2026. After applying, email the department to confirm your submission",
    admissionRequirements: [
      "Undergraduate courses in calculus, probability and/or statistics, matrix methods and computer programming are expected. Application materials: statement of purpose, a CV meeting UF's disclosure rules, transcripts from all colleges, and three letters of recommendation submitted through the application system before you submit. GRE scores are not required",
      "English proficiency (as listed by the department): TOEFL 4.5 overall with at least 4.0 in each section, or IELTS Academic 6.5 (General Training is not accepted)",
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "uf-ms-mechanical-engineering",
    level: "Master",
    field: "Mechanical Engineering",
    duration: "Minimum 30 credits, thesis or non-thesis; full-time or part-time",
    tuitionNote: `${GRAD_RATE}, so a 30-credit degree comes to about US$43,478 in tuition and fees. ${GRAD_LIVING}`,
    description:
      "The MS in Mechanical Engineering from UF's Department of Mechanical & Aerospace Engineering, home to more than 400 graduate students, prepares students for fields such as robotics, artificial intelligence, renewable energy, autonomous systems and advanced manufacturing. The degree needs at least 30 credits, with core courses set by the programme and electives that can come from mathematics, physics, statistics and other engineering disciplines. Non-thesis students have no research or thesis requirement and pass a cumulative final exam in their last semester; thesis students take up to 6 credits of thesis research under a faculty advisor and defend a written thesis. The department's research includes renewable energy, autonomous systems, advanced manufacturing, computational science, cellular mechanics and space sciences.",
    officialProgramUrl: "https://mae.ufl.edu/students/graduate/degree-programs/",
    degree: "Master of Science (MS) in Mechanical Engineering",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: priority consideration by 5 January 2027; final deadline for international applicants 1 March 2027 (domestic 1 June 2027). Spring entry: international applicants by 1 September (the spring 2027 date has passed). Apply through the UF graduate application",
    admissionRequirements: [
      "A bachelor's degree in engineering, mathematics, physics or statistics with an upper-division GPA above 3.0 (the department provides a GPA worksheet). Application materials: a statement of purpose of 500 words or less, two letters of recommendation, unofficial transcripts and a resume. The GRE and the Fundamentals of Engineering exam are not required",
      "English proficiency (as listed by the department): IELTS 6.5 or higher, or TOEFL 4.5 or higher overall with at least 4.0 in each section",
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Analytics",
    slug: "uf-ms-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: "10 months full-time (36 credits, 7-week modules)",
    tuitionNote: `Warrington lists out-of-state tuition for the on-campus MS in Business Analytics at US$52,174 for the programme (36 credits at the 2026-27 non-resident graduate rate of US$1,449.28 per credit hour), plus a professional development fee of US$650 for international students (US$350 for domestic students). Tuition is billed each semester by registered credits. Select students may receive scholarships, announced with the offer of admission, and assistantships may be offered after the first semester; international students cannot get US federal or state loans and must cover living costs. ${GRAD_LIVING}`,
    description:
      "Warrington College of Business's on-campus MS in Business Analytics is an intensive, STEM-designated 10-month programme that starts in fall and finishes by summer. Students learn to mine structured and unstructured data and turn it into business decisions, working in Python, R and Tableau, querying data on IBM and AWS clouds and the UFIT Data Lake, using UF's HiPerGator supercomputer and learning to recommend and deploy commercial AI tools. Core courses include business systems design and development, an analytics process bootcamp and business database systems. The programme ends with a team practicum for a real client, where each member takes a role across the data life cycle; past sponsors include Accenture, AT&T, Bank of America, Disney and PwC. GMAT and GRE scores are not required. An online version also exists; this entry is the on-campus programme.",
    officialProgramUrl: "https://warrington.ufl.edu/graduate/masters-business-analytics/",
    degree: "Master of Science (MS) in Business Analytics",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: international applicants have a priority deadline of 1 January 2027 and a final deadline of 15 February 2027 (domestic applicants 1 May 2027). Apply through the UF graduate application (US$30 fee). Warrington interviews applicants who studied at a non-US institution",
    admissionRequirements: [
      "A bachelor's degree or four-year international equivalent (a 3.0 upper-division GPA is stated for US degrees), a statement of purpose of 400-600 words, a resume or CV covering all post-high-school education and employment, international affiliations and research funding, two or more letters of recommendation from a supervisor (peer or student-leader letters are not accepted), and transcripts from all institutions. GRE or GMAT scores are optional",
      GRAD_ENGLISH,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Information Systems and Operations Management: Data Science",
    slug: "uf-ms-isom-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1.5 years (36 credits) with a business degree or minor; 2 years (40 credits) otherwise; 8-week modules",
    tuitionNote: `Warrington lists out-of-state tuition for the MS in Information Systems and Operations Management at US$52,174 to US$57,971, depending on whether you need the 36- or 40-credit route (both at the 2026-27 non-resident graduate rate of US$1,449.28 per credit hour), plus a professional development fee of US$650 for international students (US$350 for domestic students). Select scholarships and research assistant posts are offered to students who have completed at least one semester. ${GRAD_LIVING}`,
    description:
      "The MS in Information Systems and Operations Management (MS-ISOM) with a Data Science concentration is a STEM-accredited Warrington College of Business degree open to graduates of any major, including those without a technical background. It combines a technical business core (systems analysis and design, business programming in Java and Python, statistics and managerial quantitative analysis, project management and professional communication) with a five-course data science sequence covering database systems, business intelligence, data mining and data visualisation, and uses AI and machine learning throughout. Integrated projects train students to present solutions to business problems, and an optional summer internship or business analytics practicum with a Warrington partner is available. Students without an undergraduate business major or minor complete core business courses, which is why their route is longer. GMAT and GRE scores are not required.",
    officialProgramUrl: "https://warrington.ufl.edu/graduate/masters-information-systems-operations-management-data-science/",
    degree: "Master of Science (MS) in Information Systems and Operations Management, Data Science concentration",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: international applicants have a priority deadline of 1 January 2027 and a final deadline of 15 February 2027 (domestic applicants 1 May 2027). Spring entry: international applicants by 15 July (domestic 1 September). Apply through the UF graduate application (US$30 fee). Warrington interviews applicants who studied at a non-US institution",
    admissionRequirements: [
      "A bachelor's degree or four-year international equivalent (a 3.0 upper-division GPA is stated for US degrees); a programming course is recommended before you start. Application materials: a statement of purpose of 400-600 words, a resume or CV covering all post-high-school education and employment, international affiliations and research funding, two or more letters of recommendation from a supervisor (peer or student-leader letters are not accepted), and transcripts from all institutions. GRE or GMAT scores are optional",
      GRAD_ENGLISH,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "uf-mba-full-time",
    level: "Master",
    field: "Business Administration",
    duration: "2-year format: 22 months (48 credits); 1-year formats: 12 months (48 credits, any major) or 10 months (32 credits, recent business graduates)",
    tuitionNote:
      "Warrington lists out-of-state tuition and fees of US$69,565 for the two-year Full-time MBA and for the one-year all-majors format (48 credits at the 2026-27 non-resident graduate rate of US$1,449.28 per credit hour), and US$46,377 for the 10-month business-majors format (32 credits), plus a US$1,000 non-refundable professional development fee. Tuition is billed each semester by registered credits. Warrington awards full and partial tuition scholarships and merit awards to competitive students; international students cannot file the FAFSA and should look to scholarships and UF International Center resources instead. For living costs, the Office of Student Financial Aid and Scholarships' 2026-27 out-of-state graduate budget adds about US$23,690 a year (books, transport, living and personal costs and loan fees) on top of tuition, and the UF International Center's minimum I-20 graduate budget is US$59,394 including mandatory health insurance of about US$3,185",
    description:
      "Warrington's Full-time MBA in Gainesville is offered in three formats: a two-year programme that suits career changers and includes an internship between the first and second years, a 12-month programme for graduates of any major, and a 10-month programme for those with an AACSB-accredited business degree from the last seven years. Students choose from up to 75 electives or follow a concentration, get hands-on training in cloud and AI-driven analytics tools, and can join domestic or global immersion trips, case competitions and the Washington Campus programme. The typical student arrives with four years of work experience, a GMAT of 615 and a 3.4 undergraduate GPA, and Warrington reports that 94% of Full-time MBA students had job offers within three months of graduating. The two-year programme starts each August, the all-majors programme each May and the business-majors programme each June, and all formats need at least 40 hours a week.",
    officialProgramUrl: "https://warrington.ufl.edu/graduate/full-time-mba/",
    degree: "Master of Business Administration (MBA)",
    intake: "August (two-year), May (one-year all majors) or June (one-year business majors)",
    applicationDeadline:
      "Warrington lists Round 1 on 15 October (also given as the international applicant deadline), Round 2 on 15 January and Round 3 on 15 March for the one-year formats or 15 May for the two-year format. The page does not give years; for 2027 starts, Round 1 (15 October 2026) has already passed. Applications are reviewed once complete, and those received after a deadline are considered only if space remains, so international applicants should contact the MBA admissions team before applying late. Apply through the UF graduate application (US$30 fee)",
    admissionRequirements: [
      "A bachelor's degree or four-year international equivalent and at least two years of significant full-time work experience. Application materials: two or more letters of recommendation from supervisors, a required essay plus a second essay for Full-time applicants (a third is optional), official transcripts from all institutions, and an interview by invitation, which is required before a Full-time decision. International applicants who studied outside the United States are interviewed as part of admission",
      "Test: Full-time applicants must submit a GMAT (preferred) or GRE score from the past five years; Warrington publishes no minimum score",
      GRAD_ENGLISH,
      GRAD_MINIMUM,
    ],
  },
];
