import type { Program } from "../../programs";

// Georgia Institute of Technology (Atlanta): 8 undergraduate programmes for fall 2027 first-year entry and
// 8 graduate programmes (7 on campus in Atlanta plus the online OMSCS). Sources (viewed November 7, 2026):
// Office of the Bursar Fall 2026 and Spring 2027 tuition and fee rate sheets (bursar.gatech.edu/tuition-fees),
// Office of Scholarships and Financial Aid undergraduate and graduate cost of attendance 2026-2027
// (finaid.gatech.edu/costs/undergraduate-costs and /costs/graduate-costs), Undergraduate Admission first-year
// deadlines, application fees, application review, standardized tests and international first-year pages
// (admission.gatech.edu), the University System of Georgia English proficiency requirements page that Georgia
// Tech admission links to (usg.edu), Graduate Education English proficiency page (grad.gatech.edu) and
// program information pages in the graduate application portal (gradapp.gatech.edu/portal/program-info),
// Georgia Tech Catalog programme pages (catalog.gatech.edu), College of Computing MSCS admission requirements
// (cc.gatech.edu), OMSCS admission criteria and deadlines (omscs.gatech.edu), MS Analytics admissions and
// common questions (analytics.gatech.edu), School of Cybersecurity and Privacy information security track
// (scp.cc.gatech.edu), ECE graduate admissions and FAQs (ece.gatech.edu), Woodruff School BS/MS page
// (me.gatech.edu), AE graduate apply page (ae.gatech.edu), and Scheller Full-time MBA admissions, tuition and
// international applicant pages (scheller.gatech.edu). Costs are in US dollars. Georgia Tech bills
// international (non-US citizen, non-permanent resident) students at a separate "out of country" rate.

const UNIVERSITY = {
  universitySlug: "georgia-institute-of-technology",
  universityName: "Georgia Institute of Technology",
  country: "United States",
  language: "English",
  campus: "Atlanta",
  programType: "Full-time",
} as const;

// Bursar Fall 2026 / Spring 2027, Atlanta undergraduate, more than 6 hours: out of country 17,805 per semester,
// out of state 17,302, in state 5,309; mandatory fees 758 per semester (4+ hours); International Student Fee 100
// per term for F/J visa holders. Finaid 2026-27 first-year out-of-country COA on campus: tuition 35,610 + fees
// 1,716 + books 800 + housing 8,318 + food 6,310 + personal 2,800 + transport 966 = 56,520 (off campus 60,286).
// Current/transfer out of country on campus 59,124. Out of state first-year on campus 55,314.
const UG_TUITION =
  "2026-27 (fall 2026 and spring 2027): Georgia Tech charges international undergraduates on the Atlanta campus an out-of-country tuition rate of US$17,805 per semester for more than six credit hours, or US$35,610 for the year (US out-of-state students pay US$17,302 a semester, US$34,604 a year). Mandatory student fees are US$758 a semester, and students on F or J visas also pay a US$100 International Student Fee each term, so the Office of Scholarships and Financial Aid budgets US$1,716 a year in fees for international students. Its 2026-27 estimated cost of attendance for a first-year international student living on campus is US$56,520: tuition and fees plus US$800 for books and supplies, US$8,318 for housing, US$6,310 for a standard meal plan, US$2,800 for personal expenses and US$966 for transport. Living off campus the estimate is US$60,286; continuing international students on campus are budgeted US$59,124 because of a higher housing allowance. Students who fall under the mandatory student health insurance requirement (see Stamps Health Services for eligibility) are billed US$1,378.82 for fall 2026 on top of these figures. The Institute notes that all charges can change at the end of any term";

const UG_INTAKE =
  "Summer or fall term (all first-year applicants are considered for both; your start term is shown on your admission notification)";

const UG_DEADLINE =
  "Fall 2027 entry (2026-27 cycle), through the Common Application only (US$85 application fee for international applicants, US$75 for others; fee waivers available). Georgia Tech has no binding Early Decision; it offers two non-binding Early Action plans and Regular Decision. Early Action 1 is for Georgia students: apply by 15 October 2026, documents by 30 October, self-reported test scores by 16 November, decisions in early December. Early Action 2 is for students at high schools outside Georgia, including international applicants: apply by 2 November 2026, documents by 16 November, self-reported scores by 8 December, decisions in late January 2027. Regular Decision is open to everyone: apply by 6 January 2027, documents and self-reported scores by 22 January, decisions in mid-March. The deposit deadline for all plans is 1 May. Deadlines are 11:59 p.m. in your own time zone. Merit scholarships such as the Stamps President's Scholars Program require applying through an Early Action plan; no separate scholarship application is needed";

const UG_TESTING =
  "Testing: required. Every first-year applicant must submit at least one SAT or ACT result (the ACT writing section and SAT essay are not required). Self-reporting scores in the Common App or the admission portal is recommended; enrolling students send official scores before orientation (SAT code 5248, ACT code 0818). Georgia Tech uses your highest section scores: SAT Evidence-Based Reading and Writing and Math; ACT English, Math and Reading (Science and Writing are not used). AP, IB, A-Level and CLT results are optional";

const UG_ENGLISH =
  "English proficiency: the University System of Georgia requires every international applicant to show English proficiency through a USG-approved method. Minimums on the USG list include TOEFL iBT 3.5 (69 before 2026; 4.0 or 79 recommended), IELTS Academic 6.0 (6.5 recommended), SAT Evidence-Based Reading and Writing 480, ACT English 17, PTE Academic 53, Cambridge English scale 169, or qualifying IGCSE/O-Level/GCSE/A-Level English grades; a waiver can apply if you completed a secondary or university degree taught in English. Georgia Tech also reviews English and communication skills holistically and welcomes the Duolingo English Test and an optional unscripted InitialView or Vericant interview, but these supplementary items do not satisfy the USG requirement on their own";

const UG_ACADEMIC =
  "Application materials: the Common Application with Georgia Tech questions and essays, transcripts showing grades 9-11 and senior-year courses (Regular Decision and deferred applicants send fall senior grades), SAT or ACT scores, and any documents requested in your admission portal. Review is selective and holistic: academic preparation, contribution to community, personal essays, recommendations, test scores and your choice of major (and evidence of interest in it) are all considered, and your file is read in the context of the school you attend. International curricula are welcome; for example, IB applicants are most competitive with mostly 6s and 7s, British-system applicants should be on track for at least three full A-levels, and Indian-curriculum applicants submit Class X results and Class XI marks with predicted XII results. Applicants who have taken university coursework after finishing secondary school must apply as transfer students";

const UG_ROUTE = (extra: string) =>
  `Admission route: you choose an intended major on the Common Application, and Georgia Tech considers that choice and your evidence of interest in it as part of its holistic review. ${extra}`;

// Bursar Fall 2026 / Spring 2027 graduate (Atlanta), 12+ hours: standard Master & PhD out-of-country 16,540 per
// semester (1,379/hr below 12), out of state 16,073; fees 758; ISF 100. Finaid 2026-27 graduate out-of-country
// living costs excluding tuition/fees: on campus 22,612 (books 800, housing 11,736, food 6,310, personal 2,800,
// transport 966), off campus 25,256.
const GRAD_LIVING =
  "The Office of Scholarships and Financial Aid's 2026-27 graduate budget for an international student, excluding tuition and fees, is US$22,612 a year living on campus (US$800 books and supplies, US$11,736 housing, US$6,310 food, US$2,800 personal, US$966 transport) or US$25,256 off campus. Students who fall under the mandatory student health insurance requirement are billed separately (US$1,378.82 for fall 2026)";

const GRAD_STANDARD_TUITION = (extra: string) =>
  `2026-27 (fall 2026 and spring 2027): this programme uses Georgia Tech's standard graduate rate. International (out-of-country) students on the Atlanta campus pay US$16,540 a semester for 12 or more credit hours, or US$1,379 per credit hour below 12 (US out-of-state students pay US$16,073 a semester). Add mandatory fees of US$758 a semester and the US$100 International Student Fee each term. Two full-time semesters therefore come to about US$34,796 in tuition and fees. ${GRAD_LIVING}. ${extra}`;

const GRAD_ENGLISH_INSTITUTE =
  "Georgia Tech Graduate Education accepts English proficiency through a post-secondary degree taught in English (shown by transcript notation, institutional letter or medium-of-instruction certificate), a degree from a country on its approved list, an approved USG campus ESL programme, or a TOEFL iBT or IELTS Academic score sent directly by the testing agency (TOEFL institute code 5248; scores are valid for two years; TOEFL MyBest, TOEFL Essentials, IELTS General Training, Duolingo and PTE are not accepted)";

export const georgiaTechPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Computer Science",
    slug: "gatech-bs-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (124 credit hours plus a 2-hour wellness course); 5-year co-op plan available",
    tuitionNote: UG_TUITION,
    description:
      "Georgia Tech's College of Computing builds its computer science degree around Threads, a system in which you combine two of nine focused paths through the curriculum on top of shared fundamentals in programming and computational theory. The Threads are Cybersecurity and Privacy, Embedded Devices, Information Internetworks, Artificial Intelligence, Media, Modeling and Simulation, People, Systems and Architecture, and Theory, and any pair satisfies the requirements of an accredited BS in Computer Science. You do not have to pick Threads early, so your focus can shift as you go. Required CS and Thread courses need a C or better. Undergraduate research, international study and a five-year cooperative plan that alternates study with paid industry work are all available.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/computer-science-bs/",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Computer Science is offered by the College of Computing"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Mechanical Engineering",
    slug: "gatech-bs-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (129 credit hours in the general concentration)",
    tuitionNote: UG_TUITION,
    description:
      "The Woodruff School of Mechanical Engineering offers a broad, flexible ME degree made up of a core of fundamental mechanical engineering concepts, a design and professional-practice stem, and 15 credit hours of free electives. The programme stresses design, creativity and hands-on work, and includes electronics, materials science, programming and manufacturing because ME careers are so varied. Optional 15-hour concentrations include Acoustics and Vibration, Automation and Robotic Systems, Automotive, Design, Manufacturing, Mechanics of Materials, Micro- and Nano-Engineering, Nuclear and Radiological Engineering, and Thermal, Fluid and Energy Systems. The electives make room for minors, co-op, internships, study abroad, research and the International Plan, and students with a GPA of 3.5 or higher can apply to a BS/MS programme.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/mechanical-engineering-bs/",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Mechanical Engineering is offered by the George W. Woodruff School of Mechanical Engineering in the College of Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Electrical Engineering",
    slug: "gatech-bs-electrical-engineering",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "4 years full-time (about 129 credit hours, depending on the thread pair chosen)",
    tuitionNote: UG_TUITION,
    description:
      "The School of Electrical and Computer Engineering's BS in Electrical Engineering combines engineering analysis and design throughout the degree with a shared capstone design experience that weighs economic and societal issues. Elective hours let you specialise or stay broad, with options in analog electronics, bioengineering, computer engineering, systems and controls, micro- and nanosystems, electronics packaging, digital signal processing, optics and photonics, electrical energy, electromagnetics and telecommunications, organised as pairs of technical threads. You can also take advanced courses in computer science, mathematics, physics or management. More than 30 percent of ECE undergraduates join Georgia Tech's optional co-op programme, and there are a Research Option, the International Plan with a junior-year option at Georgia Tech-Europe in Metz, a dual degree with KAIST in Korea, and a BS/MS path in ECE.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/electrical-engineering-bs/",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Electrical Engineering is offered by the School of Electrical and Computer Engineering in the College of Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Computer Engineering",
    slug: "gatech-bs-computer-engineering",
    level: "Bachelor",
    field: "Computer Engineering",
    duration: "4 years full-time (about 129 credit hours, depending on the thread pair chosen)",
    tuitionNote: UG_TUITION,
    description:
      "Computer engineering at Georgia Tech centres on digital design, computer architecture, computer networks and internetworking, and computer applications. Students combine two technical threads, such as Cybersecurity, Computing Hardware and Emerging Architectures, Distributed System and Software Design, Embedded Devices, Robotics and Autonomous Systems, Signal and Information Processing, Systems and Architecture, Telecommunications or Information Internetworks, and can add advanced courses in other EE areas, computer science, mathematics, physics or management. Like the EE degree it ends in a shared major design experience. Co-op (which more than 30 percent of ECE undergraduates join), the Research Option, the International Plan with a junior-year option in Metz, France, a KAIST dual degree and a BS/MS path in ECE are available.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/computer-engineering-bs/",
    degree: "Bachelor of Science (BS) in Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Computer Engineering is offered by the School of Electrical and Computer Engineering in the College of Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Aerospace Engineering",
    slug: "gatech-bs-aerospace-engineering",
    level: "Bachelor",
    field: "Aerospace Engineering",
    duration: "4 years full-time (131 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "The Daniel Guggenheim School of Aerospace Engineering's undergraduate degree starts with chemistry, mathematics, physics, humanities and social sciences, adds general engineering science and introductory aerospace subjects in the second year, and spends the third and fourth years on aerospace disciplines, vehicle systems integration and design, and elective Options. The programme emphasises analysis, experiments and design, and you can specialise through your choice of Options and an air-focused or space-focused track. Undergraduate research and team competition courses are available, and each student keeps the same faculty advisor throughout the degree. Graduates go into industry or government, or on to graduate study.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/aerospace-engineering-bs/",
    degree: "Bachelor of Science (BS) in Aerospace Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Aerospace Engineering is offered by the Daniel Guggenheim School of Aerospace Engineering in the College of Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Industrial Engineering",
    slug: "gatech-bs-industrial-engineering",
    level: "Bachelor",
    field: "Industrial Engineering",
    duration: "4 years full-time (128 credit hours in the general concentration)",
    tuitionNote: UG_TUITION,
    description:
      "The H. Milton Stewart School of Industrial and Systems Engineering offers a BS in Industrial Engineering that blends mathematics, physical sciences and business applications, on a methods foundation of probability, optimisation, statistics, computing and economics. A concentration system lets you stay broad with General Industrial Engineering or specialise in Advanced Studies in Operations Research and Statistics, Analytics and Data Science, Artificial Intelligence and Operations Research for Decisions, Economic and Financial Systems, Operations Research, Quality and Statistics, or Supply Chain Engineering. The degree ends in capstone design, and co-op, the International Plan and BS/MS options are available. Graduates work on making systems, services and organisations run better and more efficiently.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/industrial-engineering-bs/",
    degree: "Bachelor of Science (BS) in Industrial Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Industrial Engineering is offered by the H. Milton Stewart School of Industrial and Systems Engineering in the College of Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Biomedical Engineering",
    slug: "gatech-bs-biomedical-engineering",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "4 years full-time (128 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "Georgia Tech's BS in Biomedical Engineering integrates the life sciences with engineering from the start. The curriculum gives a solid base in engineering fundamentals, mathematics, biology, chemistry and physics alongside humanities, social sciences and communication skills, and it uses problem-based learning so students practise self-directed learning and team problem-solving on open-ended biomedical problems. At least 39 credit hours must be upper-division coursework, and the degree finishes with a capstone design course (including an interdisciplinary capstone option). A Research Option with at least nine hours of undergraduate research over three or more terms, the International Plan and co-op are available.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/biomedical-engineering-bs/",
    degree: "Bachelor of Science (BS) in Biomedical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Biomedical Engineering is offered in the College of Engineering"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Business Administration",
    slug: "gatech-bs-business-administration",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (122 credit hours in the General Management concentration)",
    tuitionNote: UG_TUITION,
    description:
      "Scheller College of Business's BSBA covers the functional, environmental, behavioural and legal sides of business and gives analytical and conceptual tools for complex problems in a technology-driven economy. Every student completes a concentration in Accounting, Finance, General Management, Information Technology Management, Leadership and Organizational Change, Marketing, Operations and Supply Chain Management, or Strategy and Innovation, and Scheller expects you to choose (or have a strong idea of) your concentration by the end of your second year. A large number of elective hours lets you tailor the degree. The International Plan is open to all business undergraduates, and strong students (GPA 3.5 or higher) can apply for a BS/MS option.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/business-administration-bs/",
    degree: "Bachelor of Science in Business Administration (BSBA)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Business Administration is offered by the Scheller College of Business; concentrations are chosen after enrolment"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science",
    slug: "gatech-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "30 credit hours full-time; length depends on course load (course, project or thesis option)",
    tuitionNote: GRAD_STANDARD_TUITION(
      "The College of Computing does not offer financial aid to students entering this programme; research or teaching assistantships (which carry a tuition waiver and stipend) are not guaranteed and are usually found through faculty after arrival, so plan to cover at least your first semester"
    ),
    description:
      "The on-campus MS in Computer Science prepares students for advanced careers in industry. You complete 30 credit hours through a course, project or thesis option, and every student completes at least one specialisation, such as Machine Learning, Interactive Intelligence, Computing Systems, High-Performance Computing, Human-Computer Interaction, Computer Graphics, Modeling and Simulation, Scientific Computing, Social Computing or Visual Analytics. A GPA of at least 3.0 is required to graduate, and specialisation courses need a B or better. Applicants without a CS degree are welcome but may have to take remedial courses so they show core competency in systems, algorithms, formal languages and automata, databases, networking, computer architecture and human-computer interaction.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/computer-science-ms/",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Fall semester only",
    applicationDeadline:
      "Fall 2027 entry: apply by 1 February 2027 (11:59 p.m. US Eastern) through Georgia Tech's graduate application. Admission is once a year for fall. The committee prefers to see the whole applicant pool and begins review after the deadline; decisions should be available in the first week of April",
    admissionRequirements: [
      "A four-year US bachelor's degree or equivalent. The desirable minimum GPA is 3.0 out of 4.0, though most candidates are higher. A strong undergraduate CS background, including C programming, is highly recommended",
      "Three letters of recommendation, a statement of purpose and transcripts. The GRE is not required; if you send scores they will be considered, and the College suggests them if your degree is unrelated, you have been out of school more than 10 years, or you are worried about your application's strength (GRE institute code R5248, department 0402)",
      `English: programme minimum TOEFL iBT 5.0 on the new 1-6 scale (4 in Reading, Listening and Writing, 3.5 Speaking), or 100 on the 0-120 scale before January 2026 with 19 in each section; or IELTS Academic 7.5 overall with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Online Master of Science in Computer Science (OMSCS)",
    slug: "gatech-omscs-online-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    campus: "Online",
    programType: "Part-time (online)",
    duration: "30 credit hours; study one or more courses per semester and finish within six years",
    tuitionNote:
      "2026-27: OMSCS tuition is charged per credit hour. International (out-of-country) students pay US$248 per credit hour (out-of-state US$236), plus an online learning fee each semester of US$212 when taking fewer than 4 credit hours or US$531 for 4 or more. The 30-credit degree is therefore about US$7,440 in tuition before the per-semester fees, which depend on how many semesters you take. The programme itself does not provide financial assistance",
    description:
      "OMSCS is Georgia Tech's online version of its MS in Computer Science, with the same curriculum requirements as the residential degree: 30 credit hours, a GPA of 3.0, and one specialisation, which usually requires a B or better in five or six specific courses. All courses and activities are asynchronous, so you can study around work and family, take one course a semester if you wish, and have up to six years to finish. Georgia Tech says the programme graduated 10,000 alumni in its first ten years. It suits students who want a Georgia Tech degree without relocating or paying on-campus costs.",
    officialProgramUrl: "https://omscs.gatech.edu/",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Fall or spring semester (no summer admission)",
    applicationDeadline:
      "Fall 2027 entry: apply by 1 March 2027. Spring 2027 entry: 15 August 2026 (passed); spring 2028: 15 August 2027. All application materials are due by the deadline, and decisions are released about 10-12 weeks after it",
    admissionRequirements: [
      "A bachelor's degree or equivalent must be awarded before you matriculate; work experience cannot replace a degree. Preferred applicants hold a degree in computer science or a related field (such as mathematics, computer engineering or electrical engineering) with a cumulative GPA of 3.0 or higher; others are considered case by case",
      "Three letters of recommendation, short answers about your background and experience, a resume, and scans of officially issued transcripts from every institution attended. The GRE is not required",
      `English for international applicants: TOEFL iBT 5.0 (4 in Reading, Listening and Writing, 3.5 Speaking), or 100 on the prior 0-120 scale with 19 in each section; or IELTS Academic 7.5 with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Analytics",
    slug: "gatech-ms-analytics",
    level: "Master",
    field: "Data Science",
    duration: "36 credit hours; 1 year (3 semesters) or 1.5 years (4 semesters) full-time on campus",
    tuitionNote:
      "2026-27: MS Analytics has its own graduate tuition rate. International (out-of-country) students pay US$22,999 a semester for 12 or more credit hours, or US$1,917 per credit hour below 12 (out-of-state US$22,350 a semester), plus mandatory fees of US$758 a semester and the US$100 International Student Fee each term. The programme's FAQ estimates total tuition for out-of-country students at US$61,774 for the 1-year (3-semester) path or US$74,034 for the 1.5-year (4-semester) path. A US$2,000 non-refundable deposit, credited to first-semester tuition, is due when you accept an offer. " +
      GRAD_LIVING,
    description:
      "Georgia Tech's MS in Analytics is an interdisciplinary degree run jointly by the Stewart School of Industrial and Systems Engineering, the School of Computational Science and Engineering and Scheller College of Business, joining statistics, operations research, computing and business. Students take introductory and advanced core courses (computing for data analysis, analytics modelling, data and visual analytics, and data analytics in business), statistics and operations research courses, and 6-15 hours of electives in one of three tracks chosen at application: Analytical Tools, Business Analytics or Computational Data Analytics. A 6-credit Applied Analytics Practicum, done as an internship or a team project for a sponsor, applies the skills to a real problem.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/analytics-ms/",
    degree: "Master of Science (MS) in Analytics",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry (Atlanta cohort): priority deadline 1 January 2027; late deadline 1 March 2027 (11:59 p.m. US Eastern). Deadlines are the same for domestic and international applicants, and seats are limited, so priority applicants get the fullest consideration. The application fee is US$105 for international applicants (US$95 for US applicants)",
    admissionRequirements: [
      "A four-year bachelor's degree or equivalent, with at least one college-level course (or equivalent knowledge) in calculus, probability and statistics, and some linear algebra, plus at least one in programming in a high-level language such as Python, C++ or Java. Applicants missing a prerequisite may still be admitted if they complete it before starting",
      "GRE or GMAT scores are required (no waivers, but expired scores are accepted), plus three letters of recommendation, a resume, a personal statement and transcripts. You choose one of the three tracks when you apply",
      `English: TOEFL iBT 5.0 (4 in each section), or 100 on the 0-120 scale before January 2026 with 19 in each section; or IELTS Academic 7.5 with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Electrical and Computer Engineering",
    slug: "gatech-ms-electrical-computer-engineering",
    level: "Master",
    field: "Electrical Engineering",
    duration: "30 credit hours; full-time students who start in fall can finish in about 12 months",
    tuitionNote:
      "2026-27: the MSECE has its own graduate tuition rate. International (out-of-country) students on the Atlanta campus pay US$19,377 a semester for 12 or more credit hours, or US$1,616 per credit hour below 12 (out-of-state US$18,830 a semester), plus mandatory fees of US$758 a semester and the US$100 International Student Fee each term. Two full-time semesters come to about US$40,470 in tuition and fees. Funding is very limited for master's students; ECE advises admitted students to have another way to pay. " +
      GRAD_LIVING,
    description:
      "The MSECE lets you go deeper in areas such as autonomous systems and robotics, bioengineering, computer systems and software, signal processing, electrical energy, electromagnetics, electronic design, machine learning, nanotechnology, optics and photonics, systems and controls, telecommunications, and VLSI systems. The degree needs 30 credit hours, including a minor outside ECE. In the non-thesis option you take three groups of courses drawn from one or two technical interest areas, other ECE areas and electives, plus the ECE 6001 technology entrepreneurship course; the thesis option replaces some courses with 12 hours of thesis research. Courses run in all three terms, but full-time students aiming to finish in 12 months should start in fall. A 2.7 GPA must be maintained.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/electrical-computer-engineering-ms/",
    degree: "Master of Science in Electrical and Computer Engineering (MSECE)",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: apply by 16 December 2026 (11:59 p.m. US Eastern). ECE says its deadlines are firm",
    admissionRequirements: [
      "A four-year US bachelor's degree or equivalent, normally in engineering or a related field. Transcripts (unofficial accepted for review; official ones only after admission), three letters of recommendation and a statement of purpose of up to 1,000 words",
      "The GRE is not required; scores are considered if you send them but are not a primary factor (GRE institute code R5248, department 1203). The committee weighs your prior GPA, statement and letters most",
      `English: TOEFL iBT 4.5 (4 in Reading, Listening and Writing, 3.5 Speaking), or 90 on the 0-120 scale before January 2026 with 19 in each section; or IELTS Academic 7.0 with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Mechanical Engineering",
    slug: "gatech-ms-mechanical-engineering",
    level: "Master",
    field: "Mechanical Engineering",
    duration: "30 credit hours minimum, thesis or non-thesis option",
    tuitionNote: GRAD_STANDARD_TUITION(
      "Some thesis students receive a graduate research assistantship with a stipend and tuition waiver, but this is not guaranteed"
    ),
    description:
      "The Woodruff School's MSME is open to graduates in engineering, mechanics, mathematics, the physical sciences and the life sciences. The 30-credit programme needs 21 hours in a coherent major area, a 6-hour minor in a clearly different area and 3 hours of mathematics; the non-thesis route may count up to 6 hours of supervised special-problems research, while the thesis route replaces 9 major-area hours with MS thesis research under a faculty mentor. Only 6 credits may be at the 4000 level. Research areas include acoustics and dynamics, AI and informatics for ME, automation and robotics, bioengineering, design, fluid mechanics, heat transfer and energy systems, manufacturing, mechanics of materials, micro- and nano-engineering, nuclear and radiological engineering, and tribology. A graduate GPA of at least 3.0 is required.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/mechanical-engineering-ms/",
    degree: "Master of Science in Mechanical Engineering (MSME)",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: apply by 2 March 2027; spring 2028 entry: 1 October 2027 (11:59 p.m. US Eastern)",
    admissionRequirements: [
      "A four-year US bachelor's degree or equivalent and a GPA of at least 3.3 for the MSME. Admission is very competitive, and meeting the minimums does not guarantee a place",
      "The GRE has not been required for the MSME since December 2022",
      `English: TOEFL iBT 4.5 (4 in Reading, Listening and Writing, 3.5 Speaking), or 94 on the 0-120 scale before January 2026 with 19 in each section; or IELTS Academic 7.0 with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Aerospace Engineering",
    slug: "gatech-ms-aerospace-engineering",
    level: "Master",
    field: "Aerospace Engineering",
    duration: "33 credit hours (all coursework, or 24 hours of coursework plus 9 hours of thesis)",
    tuitionNote: GRAD_STANDARD_TUITION(
      "Applying by 1 December 2026 gives full consideration for research assistantships"
    ),
    description:
      "The MS in Aerospace Engineering can be earned through 33 hours of coursework (up to 3 of them special-problems research) or through 24 hours of coursework plus a 9-hour MS thesis that you propose, write and defend. Both options include a first-year graduate seminar, a mathematics requirement and a minimum number of AE courses, and the programme of study is tailored with your advisor to your career goals. Specialisation areas are aerodynamics and fluid mechanics, aeroelasticity and structural dynamics, flight mechanics and control, propulsion and combustion, structural mechanics and materials behaviour, and system design and optimisation. A GPA of 2.7 is needed to graduate, and an online distance-learning version of the degree is also offered.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/aerospace-engineering-ms/",
    degree: "Master of Science in Aerospace Engineering (MSAE)",
    intake: "Fall, spring or summer semester",
    applicationDeadline:
      "Fall 2027 entry: 1 December 2026 for full consideration for financial aid, final deadline 1 March 2027. Summer 2027: 1 December 2026 for aid consideration, final 1 February 2027. Spring 2028: 1 September 2027. Supporting materials (letters and English scores) may arrive up to four weeks after each deadline",
    admissionRequirements: [
      "A four-year US bachelor's degree or equivalent, a resume or CV, any certificates, a statement of purpose, and three letters of recommendation, ideally from recommenders who hold a graduate degree and can judge your potential for independent graduate research",
      "The GRE is optional for AE master's applicants; scores are considered in a holistic review and are recommended if your academic preparation may be hard to assess (GRE institute code R5248, department 1601)",
      `English: TOEFL iBT 4.5 (4 in Reading, Listening and Writing, 3.5 Speaking), or 90 on the 0-120 scale before January 2026 with 19 in each section; or IELTS Academic 7.0 with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Cybersecurity (Information Security)",
    slug: "gatech-ms-cybersecurity-information-security",
    level: "Master",
    field: "Cybersecurity",
    duration: "32 credit hours, including a 5-credit practicum project",
    tuitionNote: GRAD_STANDARD_TUITION(
      "An online version of the MS Cybersecurity is billed at a separate online per-credit rate"
    ),
    description:
      "Georgia Tech's MS in Cybersecurity is interdisciplinary and offered by three schools, each with its own specialisation; this entry covers the information security specialisation from the School of Cybersecurity and Privacy in the College of Computing. All students take Introduction to Information Security, Information Security Policies and Strategies, a 5-credit Cyber Security Practicum and one elective from another specialisation (policy or cyber-physical systems). The information security specialisation adds Applied Cryptography, Secure Computer Systems, Network Security, an information security lab (or advanced malware analysis) and 6 more hours of graduate CS. Graduates need a 3.0 GPA, and no grade below C counts.",
    officialProgramUrl: "https://catalog.gatech.edu/programs/cybersecurity-ms/",
    degree: "Master of Science (MS) in Cybersecurity",
    intake: "Fall semester only",
    applicationDeadline:
      "Fall 2027 entry: apply by 17 February 2027 (11:59 p.m. US Eastern). Admission is once a year for fall, and decisions usually arrive in the first week of April",
    admissionRequirements: [
      "An undergraduate degree in computer science or computer engineering, or strong programming skills plus foundational CS coursework in discrete mathematics, algorithms, operating systems, computer networks and computer architecture. The desirable minimum GPA is 3.3 out of 4.0; most admitted students are higher",
      "Online application with essay questions, transcripts from each institution (unofficial accepted for review; certified translations if not in English), three recommendation letters (ideally one from a faculty member), and a resume (optional but recommended). GRE scores are optional but strongly encouraged",
      `English: TOEFL iBT 4.5 (4 in Reading, Listening and Writing, 3.5 Speaking), or 100 on the 0-120 scale before January 2026 with 20 in each section; or IELTS Academic 7.5 with 6.5 in Reading, Listening and Speaking and 5.5 Writing. ${GRAD_ENGLISH_INSTITUTE}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-time MBA",
    slug: "gatech-scheller-full-time-mba",
    level: "Master",
    field: "Business",
    campus: "Atlanta (Scheller College of Business)",
    duration: "2 years full-time (54 credit hours, with a summer internship)",
    tuitionNote:
      "2026-27: Scheller lists annual Full-time MBA tuition of US$46,260 for out-of-country (international) students (US$23,130 a semester), US$44,956 for out-of-state and US$30,548 for in-state students, plus mandatory fees of US$1,516 a year and a US$100 International Student Fee each term for international students. More than half of students receive merit-based funding; all applicants are reviewed for merit awards, and most funding goes to Round 1 and 2 applicants. Graduate assistantships (up to 14 hours a week with a salary and tuition reduction) and fellowships are awarded through the admission process. " +
      GRAD_LIVING,
    description:
      "The Georgia Tech Scheller Full-time MBA is a two-year programme focused on experiential learning where business meets technology. Students complete 54 credit hours: 21 hours of core courses that build a common business foundation, then electives that can form STEM-designated concentrations, with a summer internship between the two years at companies ranging from Fortune 500 firms and consultancies to start-ups. Since May 2022 the MBA has been STEM-designated, so international graduates can apply for the two-year STEM OPT extension. Applicants from every academic background are welcome, and the core does not assume earlier business study.",
    officialProgramUrl: "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/admissions/index.html",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall semester only",
    applicationDeadline:
      "Fall 2027 entry, four rounds: Round 1 by 5 October 2026 (decision 20 November 2026; passed); Round 2 by 8 January 2027 (decision 5 March 2027); Round 3 by 5 March 2027 (decision 16 April 2027); Round 4 by 30 April 2027 (decision 28 May 2027). International applicants are encouraged to apply by Round 2. Interviews are by invitation. The application fee is US$105 for international applicants (US$95 domestic)",
    admissionRequirements: [
      "An accredited four-year bachelor's degree in any field, with transcripts from each college attended (official transcripts are required before a formal offer). Two to three or more years of full-time work after graduation is recommended; the average student has about five years",
      "Online application with three required essays (plus optional and reapplicant essays), a resume, two professional recommendations (one preferably from a current or former manager), and GMAT, GMAT Focus or GRE scores from the past five years. A test-optional route is available, and applicants with five or more years of work experience may submit the Executive Assessment",
      "English: a valid TOEFL or IELTS score unless you qualify for a Graduate Education exception (such as a degree taught in English). Scheller requires TOEFL iBT 5 on the 1-6 scale or 95 on the 0-120 scale, or IELTS 7.0. Translated transcripts and degree documents, and financial documents for a student visa, may also be required",
    ],
  },
];
