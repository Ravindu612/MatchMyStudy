import type { Program } from "../../programs";

// Cornell University (Ithaca, New York): 10 undergraduate majors for fall 2027 first-year entry and 5 graduate programs.
// Sources: Cornell Undergraduate Admissions (first-year applicants, application plans and deadlines, standardized testing and English
// language proficiency policy, and the Duffield Engineering, Arts & Sciences, CALS, SC Johnson College and ILR first-year applicant
// pages), Cornell Financial Aid (2026-27 undergraduate and graduate costs of attendance, aid for international first-years), the Office
// of the Bursar's 2026-27 tuition rates, Student Health Benefits' 2026-27 SHP costs, the 2026-2027 registrar calendar, the Cornell
// Courses of Study catalog program pages for each degree, the Graduate School's English language proficiency and application fee pages,
// the CS M.Eng. application page, Duffield Engineering's M.Eng. admissions, ECE and ORIE Ithaca M.Eng. admission requirements, Johnson's
// MBA application deadlines, requirements and tuition pages, and the ILR School's MILR application information (viewed November 4, 2026).
// Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "cornell-university",
  universityName: "Cornell University",
  country: "United States",
  language: "English",
  campus: "Ithaca",
  programType: "Full-time",
} as const;

// Bursar 2026-27: endowed Ithaca colleges $36,973/semester ($73,946/year); contract colleges charge nonresidents the same $73,946.
// Financial Aid 2026-27 undergraduate COA: tuition 73,946 + mandatory fees 1,024 (student activity 424, Cornell Health 600) + housing
// 13,744 + food 7,604 + books 1,234 + personal 2,182 = 99,734 (transport varies). SHP 2026-27: $3,751 for new fall 2026 students.
const UG_TUITION =
  "2026-27 (fall 2026 and spring 2027): Cornell's bursar charges undergraduates who are not New York residents, including international students, US$73,946 a year in tuition (US$36,973 a semester). The rate is the same in every undergraduate college, including the New York State contract colleges, where only New York residents pay less. Financial Aid's 2026-27 estimated cost of attendance adds US$1,024 in mandatory fees (a US$424 student activity fee and a US$600 Cornell Health fee), US$13,744 for housing, US$7,604 for food, US$1,234 for books and course materials and US$2,182 for personal expenses, for a published total of US$99,734 before travel, which varies by home region. Health insurance is extra: students without cover that meets Cornell's criteria are enrolled in the Student Health Plan, which cost US$3,751 for new students starting in fall 2026 (August to June). Admission for international undergraduates is need-aware, meaning a request for aid is one factor in the decision. Cornell says it meets 100% of admitted international students' demonstrated need with grants, work-study and, depending on family income, loans, and international applicants who may want aid at any point must file the CSS Profile when they apply. 2027-28 rates had not been published when we checked; Cornell sets them each spring";

const UG_INTAKE = "Fall semester (fall 2026 classes began on 24 August; first-years start in late August)";

const UG_DEADLINE =
  "Fall 2027 entry, through the Common Application (US$85 application fee): Cornell offers binding Early Decision (ED) and non-binding Regular Decision (RD), and has no Early Action. ED: submit the application, fee and any required portfolio or design supplement by 1 November 2026 and all other materials by 13 November 2026; decisions come out in mid-December, and students admitted ED must withdraw all other applications. RD: submit the application by 2 January 2027 and other materials by 19 January 2027; decisions come out in late March 2027. International students applying for financial aid must file the 2027-28 CSS Profile (Cornell code 2098) by the same date: 1 November 2026 for ED or 2 January 2027 for RD";

const UG_TESTING =
  "Testing: required. First-year applicants must submit SAT or ACT scores; you can self-report them on the Common Application or in the Cornell applicant portal, and enrolling students must then send official scores. Cornell takes your highest SAT section scores across test dates and the ACT superscore, and the ACT science section is not required (SAT code 2098, ACT code 2726)";

const UG_ENGLISH =
  "English proficiency (not needed if you are a US citizen or permanent resident, English is your native language, or English has been your main language of instruction for the past four years): Cornell lists the scores needed to be most competitive as TOEFL iBT 100 for tests taken before January 2026, or 5.0 for tests from January 2026 on the new scale (5.5 recommended); IELTS 7.5; Duolingo English Test 130; or 191 on Cambridge C1 Advanced or C2 Proficiency. Self-reported scores are accepted when you apply, but enrolling students must have official scores sent by the testing agency";

const UG_ACADEMIC =
  "Application materials: the Common Application with the Cornell supplement for the college or school you choose (you apply directly to one of them, and each has its own essay questions), an official secondary school transcript with mid-year grades when available, a school report and counsellor recommendation, and two teacher recommendations. Applications are reviewed holistically. About 10% of Cornell students come from more than 125 countries outside the US";

const ENGINEERING_ROUTE = (affiliation: string) =>
  `School and admission route: Cornell Duffield College of Engineering. You apply to the college rather than to a major: all first-years follow the common engineering curriculum (calculus, physics, chemistry, computing, writing seminars and engineering distribution courses), then apply to affiliate with a major, usually in the third semester and no later than the start of the fifth. Applicants need 4 years of secondary school mathematics including calculus and a year each of physics and chemistry (computer science and biology are recommended), and one of the two teacher recommendations must come from a mathematics, science or computer science teacher. ${affiliation}`;

const CONTRACT_NOTE =
  "This is a New York State contract college, but non-New York residents, including international students, pay the same tuition as at Cornell's endowed colleges";

const CALS_ROUTE = (major: string, extra: string) =>
  `School and admission route: College of Agriculture and Life Sciences (CALS). CALS applicants apply directly to a major, so choose ${major} on the application. CALS recommends 4 years of English, 4 of mathematics (pre-calculus required) and 3 of science, with biology and chemistry required and physics strongly recommended, and calculus is required for ${major}. The CALS supplement has two 350-word essays: why you chose your major, and what draws you to CALS. ${extra}${CONTRACT_NOTE}`;

const SCJ_ROUTE = (school: string, coursework: string, extra: string) =>
  `School and admission route: ${school}, part of the Cornell SC Johnson College of Business. You apply directly to its single undergraduate major. Applicants need at least 16 units of secondary school coursework, including ${coursework}. SC Johnson College applicants must also submit a resume and answer a 650-word essay on what kind of business student they are and how their interests fit the school. ${extra}`;

// Financial Aid 2026-27 graduate COA (Ithaca): mandatory fees 701 (student activity 110, Cornell Health 580) + housing 19,962 + food
// 5,768 + books 2,464 + transport 3,754 + personal 4,196 (non-billed 36,144). Bursar 2026-27: Tier 1 (M.Eng.) 73,946; Tier 2 (M.I.L.R.)
// 48,414. Totals: M.Eng. 110,791; M.I.L.R. 85,259.
const GRAD_LIVING =
  "Financial Aid's 2026-27 graduate cost of attendance for Ithaca adds US$701 in mandatory fees (student activity and Cornell Health fees) and US$36,144 in living costs (housing US$19,962, food US$5,768, books and course materials US$2,464, transport US$3,754 and personal expenses US$4,196)";

const GRAD_SHP =
  "Health insurance is extra if you do not have cover that meets Cornell's criteria: the Student Health Plan cost US$3,751 for new students starting in fall 2026";

const MENG_TUITION = (extra: string) =>
  `2026-27: Cornell bills Master of Engineering students the Tier 1 professional tuition of US$73,946 a year (US$36,973 a semester). ${GRAD_LIVING}, so a two-semester year comes to about US$110,791 (our total of the official figures). ${GRAD_SHP}. The M.Eng. is self-funded: aid for professional master's students is limited and based on merit, and Duffield Engineering automatically considers applicants who apply by 1 February for fall entry for its fellowships and scholarships. ${extra}`;

const GRAD_ENGLISH =
  "English proficiency (Cornell Graduate School; not needed if you speak English as a first language and are a citizen or permanent resident of a country where English is an official language, will hold a bachelor's degree from a US institution or from an English-medium university in a country where English is official, or have studied or worked full time for 2 consecutive years within the last 10 in such a country): IELTS Academic 7.0 overall, or TOEFL iBT section scores of at least Speaking 22, Reading 20, Listening 15 and Writing 20 for tests taken before January 2026, or Speaking 4, Reading 4, Listening 3.5 and Writing 4 for tests from January 2026. Only IELTS and TOEFL are accepted (not Duolingo), and scores must still be valid at the application deadline (TOEFL code 2098). The Graduate School published these minimums for 2026-27 admission and says they are expected to rise for 2028, so check the current figures before you test";

const GRAD_APPLY =
  "Apply through the Cornell Graduate School online application. The non-refundable application fee is US$105; fee waivers are mainly for applicants to fully funded research programmes or those who will file a FAFSA";

export const cornellPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "cornell-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (at least 123 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's Department of Computer Science, part of the Ann S. Bowers College of Computing and Information Science, offers its major through both the Duffield College of Engineering (BS, described here) and the College of Arts and Sciences (BA). After engineering calculus, multivariable calculus, linear algebra, an introductory programming course and object-oriented programming and data structures, students take the CS core: mathematical foundations of computing, functional programming, computer system organisation, an AI reasoning or machine learning course, operating systems or systems programming, and analysis of algorithms. They then add two 4000-level CS electives, a practicum or project course (for example in compilers, databases, operating systems, graphics, artificial intelligence or software engineering), three technical electives, an external specialisation of three upper-level courses in a field outside computer science, and a major-approved elective. A research-based honours option is available.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/computer-science-bs/",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("To affiliate with Computer Science you need at least a C (not C-) in all completed CS and critical mathematics courses, a GPA of at least 2.5 across object-oriented programming and data structures (CS 2110 or 2112) and mathematical foundations of computing (CS 2800 or 2802), and at least 2.3 across multivariable calculus and another critical mathematics course, all taken at Cornell for a letter grade, plus a supplemental application. If you would rather take the BA, apply to the College of Arts and Sciences instead"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering",
    slug: "cornell-electrical-computer-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (at least 126 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's ABET-accredited BS in Electrical and Computer Engineering gives a broad base in electronics, computing, signals and data. Students take introductory circuits, digital logic and computer organisation, and data science for engineers, then at least three foundation courses chosen from electromagnetic fields and waves, microelectronics, probability and inference for random signals, signals and systems, and embedded systems. A culminating design course (such as analog integrated circuit design, VLSI design, microcontroller-based digital systems, digital communication systems or computer architecture), at least five more ECE electives (two at the 4000 level) and at least nine credits of technical electives outside ECE complete the major. Areas of focus range from computer architecture, embedded systems and robotics to power systems, communications and signal processing, devices and nanotechnology, lasers and optoelectronics, and space plasmas. The major normally begins in the spring of the second year.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/electrical-computer-engineering-bs/",
    degree: "Bachelor of Science (BS) in Electrical and Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("To affiliate with ECE you need at least a C+ in differential equations or linear algebra (MATH 2930 or 2940), electromagnetism (PHYS 2213) and one introductory ECE course (circuits, digital logic or data science for engineers), and a GPA of at least 2.5 across the listed mathematics, physics, programming and ECE courses you have completed"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Operations Research and Engineering",
    slug: "cornell-operations-research-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (at least 125 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's BS in Operations Research and Engineering, from the School of Operations Research and Information Engineering (ORIE), teaches how to model, analyse and run complex systems, including artificial intelligence, using statistics, probability, optimisation and computing. Alongside calculus, linear algebra, physics, chemistry and programming, students take engineering probability and statistics and object-oriented programming, then the major core: practical tools for operations research, machine learning and data science; Optimization I and II; a second probability and statistics course; stochastic processes for decision-making; simulation modelling; and accounting or an advanced mathematics course. The final year is flexible, with 4000-level ORIE electives, three focused electives in data, decisions and AI (such as optimisation for AI, reinforcement learning or causal inference), approved technical electives and advisor-approved courses. Graduates go into operations research, consulting, financial engineering and financial services, IT, entrepreneurship and engineering management.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/operations-research-engineering-bs/",
    degree: "Bachelor of Science (BS) in Operations Research and Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("To affiliate with Operations Research and Engineering you need at least a C in engineering probability and statistics (ENGRD 2700) and linear algebra (MATH 2940), a GPA of at least 2.2 in mathematics, science and engineering courses both overall and in the term before you affiliate, at least a C- in any ORIE courses already taken, and good academic standing"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "cornell-mechanical-engineering",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (at least 127 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's ABET-accredited BS in Mechanical Engineering, from the Sibley School of Mechanical and Aerospace Engineering, covers both main streams of the discipline: mechanical systems, design and materials, and fluids, energy and thermal systems. After the engineering common curriculum and a statics and mechanics of solids course, the major includes thermodynamics, mechanical design, dynamics, mechatronics, fluid mechanics, heat transfer, mechanics of engineering materials, system dynamics, a fluids and heat transfer laboratory, and a course on engineers and society. Students also complete a senior design elective (for example spacecraft technology, automotive or electric-drive vehicle engineering, wind power or advanced product design, or a supervised senior design project), three major-approved electives in areas such as aerospace, robotics, biomechanics, and energy and the environment, a mathematics elective and a technical elective.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/mechanical-engineering-bs/",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("To affiliate with Mechanical Engineering you need at least a C- in statics and mechanics of solids (ENGRD 2020) and in all completed required mathematics, physics, chemistry and computing courses, and a GPA above 2.5 across differential equations, electromagnetism, ENGRD 2020 and, if taken, thermodynamics"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Hotel Administration",
    slug: "cornell-hotel-administration",
    level: "Bachelor",
    field: "Hospitality Management",
    duration: "4 years full-time (at least 120 credits plus 800 hours of work experience)",
    tuitionNote: UG_TUITION,
    description:
      "The Peter and Stephanie Nolan School of Hotel Administration offers an AACSB-accredited BS that is a full business degree grounded in hospitality. Students take a 58-credit core, about two-thirds of it in the first two years: financial and managerial accounting, finance and hospitality real estate, organisational behaviour, human resources and business law, food and beverage operations and restaurant management, business computing, business writing and persuasive communication, hotel operations, quantitative analysis and operations modelling, hospitality development and management, services microeconomics and marketing, and strategic management. They add 12 credits of upper-level hotel electives (or the Real Estate minor), 42 credits of liberal arts distribution courses and free electives. Every student must also complete 800 hours of paid or unpaid work (practice credit) in at least two different roles, usually over two summers, and some gain management experience at the Statler Hotel on campus.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/hotel-management-bs/",
    degree: "Bachelor of Science (BS) in Hotel Administration",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SCJ_ROUTE(
        "Peter and Stephanie Nolan School of Hotel Administration",
        "4 years of English, 4 of mathematics (pre-calculus required, and calculus strongly recommended unless you take pre-calculus in your final year), 2 of science including chemistry, and 3 years of one foreign language",
        "The Nolan School is one of Cornell's endowed schools",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Applied Economics and Management",
    slug: "cornell-applied-economics-management",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The Charles H. Dyson School of Applied Economics and Management, shared by the College of Agriculture and Life Sciences and the SC Johnson College of Business, runs an AACSB-accredited undergraduate business programme. The core combines introductory micro- and macroeconomics with business management and organisation, financial and managerial accounting, finance, marketing, managerial economics, strategy, management communication, business law and business ethics, plus calculus, spreadsheet modelling, introductory statistics, a quantitative elective (for example Python, R, business statistics or econometrics) and applied economics courses from two areas such as sustainable business, international markets and development, or food and agricultural economics. Every student completes at least one concentration: accounting, applied economics, business analytics, entrepreneurship, finance, food business management, international markets and development, marketing, strategy, or sustainable business and economic policy. The major combines easily with a CALS minor or second major.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/applied-economics-management-bs/",
    degree: "Bachelor of Science (BS) in Applied Economics and Management",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      SCJ_ROUTE(
        "Charles H. Dyson School of Applied Economics and Management",
        "4 years of English, 4 of mathematics (calculus is required if your school offers it, and advanced mathematics in the final year is preferred to AP Statistics) and 3 of science, including chemistry and biology",
        `Dyson is also part of CALS. ${CONTRACT_NOTE}`,
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial and Labor Relations",
    slug: "cornell-industrial-labor-relations",
    level: "Bachelor",
    field: "Human Resource Management",
    duration: "4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's School of Industrial and Labor Relations (ILR) studies work, workers, employers and the economy, and all of its undergraduates follow the same BS major. The 40-credit core covers an introduction to industrial and labor relations, the psychology of work, the sociology of work and organisations, US labor history, labor and employment law, labor relations, the economics of wages and employment, micro- and macroeconomics, diversity in the workplace, international and comparative labor, and seven credits of statistics. Students also take a first-year and a sophomore writing seminar and an advanced writing-intensive course, then shape the rest of the degree with ILR advanced electives and courses from Cornell's other colleges. Up to 12 elective credits can come from an approved credit internship semester, and ILR exchange programmes are available. Graduates go into law, business, government, international affairs, academia, labor organisations and non-profit work.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/industrial-labor-relations-bs/",
    degree: "Bachelor of Science (BS) in Industrial and Labor Relations",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      `School and admission route: School of Industrial and Labor Relations. You apply directly to ILR. Applicants need at least 16 units of secondary school coursework, including 4 years of English and 4 of mathematics, and successful applicants have strong records in related subjects such as social studies, history, English, government, economics and psychology. ILR's 650-word essay asks about the topics and issues you care about and how they align with the school. ${CONTRACT_NOTE}`,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "cornell-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's BA in Economics, in the College of Arts and Sciences, treats economics as a set of precise analytical tools for studying households, firms, markets, governments and whole economies. The major is 12 economics courses passed with at least a C-. It starts with introductory microeconomics and macroeconomics, which count only with a B- or better or with qualifying AP, A-level or IB results plus a department placement exam. Students then take four core courses at Cornell: intermediate microeconomic theory, intermediate macroeconomic theory, probability and statistics, and econometrics. At least three electives must be at the 4000 level, covering topics such as labour markets, banking, development, international trade, the public sector and politics, economic history, and health and education, with advanced options in dynamic optimisation, game theory and econometrics; approved graduate courses can also count.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/economics-ba/",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: College of Arts and Sciences (A&S), one of Cornell's endowed colleges. You choose up to two areas of interest on the application but do not declare a major until the end of your second year, and many A&S students double major or add minors. A&S asks for 4 years of English, 3 of mathematics including pre-calculus (an extra year of advanced mathematics is recommended), 3 of science and 3 years of one foreign language, and its 650-word essay asks about an intellectual passion and how you would use the liberal arts curriculum",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Biological Sciences",
    slug: "cornell-biological-sciences",
    level: "Bachelor",
    field: "Biology",
    duration: "4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Cornell's biological sciences major is offered by both CALS (BS, described here) and the College of Arts and Sciences (BA), with shared advising through the Office of Undergraduate Biology. Students complete an introductory biology cluster (two of cell and developmental biology, comparative physiology, and ecology and the environment, plus an investigative biology laboratory), evolutionary biology and diversity, genetics and genomics, and biochemistry and molecular biology, along with general and organic chemistry, mathematics and physics. Each student also chooses one of 13 concentrations, such as animal physiology, biochemistry, human nutrition, immunology, microbiology, or molecular and cell biology, built mainly from advanced courses and usually including laboratory work, which some concentrations let you meet through independent research. The introductory cluster meets the introductory biology requirement for medical, dental and veterinary school, and majors declare a concentration by the end of the second year.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/biological-sciences-bs/",
    degree: "Bachelor of Science (BS) in Biological Sciences",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      CALS_ROUTE("Biological Sciences", "Students in the College of Arts and Sciences can take the same major as a BA. "),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Information Science",
    slug: "cornell-information-science",
    level: "Bachelor",
    field: "Information Systems",
    duration: "4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Information Science, from the Bowers College of Computing and Information Science, is about the human side of computing: how people interact with technology, how they behave in social and information networks, and how computing systems affect society and culture. CALS students earn a BS (described here) and Arts and Sciences students a BA, with the same major requirements. Everyone takes five core courses at Cornell (information ethics, law and policy or choices and consequences in computing; introductory design and programming for the web; communication and technology; networks; and introduction to data science), plus introductory programming, calculus and statistics. Students then take four courses in one concentration, chosen from behavioural science, data science, digital culture and production, information ethics, law and policy, interactive technologies, and networks, crowds and markets, and three electives, for at least 50 credits in the major.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/information-science-bs/",
    degree: "Bachelor of Science (BS) in Information Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      CALS_ROUTE("Information Science", "Students in the College of Arts and Sciences can take the same major as a BA. "),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Engineering in Computer Science",
    slug: "cornell-meng-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "2 semesters full-time (at least 30 credits)",
    tuitionNote: MENG_TUITION("The CS department does not offer financial aid, but it has some scholarships (tick the box in the application to be considered) and limited teaching assistant roles"),
    description:
      "Cornell's Master of Engineering in Computer Science is a two-semester professional degree on the Ithaca campus for students who want deeper technical expertise and a substantial project before moving into industry. Students need at least 30 credits: at least 15 credits of 5000- and 6000-level computer science courses, 3-6 credits of faculty-supervised project work (CS 5999), done alone or in a small group and tied to department research or other fields, and further advisor-approved technical courses. Course areas include AI and machine learning, natural language processing, computer vision, robotics, systems and security, distributed computing, databases, graphics and software engineering, and electives can add business and entrepreneurship training. Students must keep at least a 2.5 GPA and take at least 12 credits each semester.",
    officialProgramUrl: "https://www.cs.cornell.edu/masters",
    degree: "Master of Engineering (MEng) in Computer Science",
    intake: "Fall semester (August) or spring semester (January)",
    applicationDeadline: `Fall 2027 entry: apply by 1 February 2027 (the spring deadline is 1 October). Applications received after the deadline are not processed without prior approval from the CS M.Eng. office. Review of complete applications takes about six to eight weeks, and admitted applicants have about a month to respond. ${GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree in computer science or a related technical field (such as electrical and computer engineering, information science or operations research). Applicants from other fields are welcome if they can show knowledge of object-oriented programming and data structures, functional programming and advanced data structures, computer system organisation, discrete mathematics, and calculus and linear algebra; MOOCs do not count towards these prerequisites. The department receives close to two thousand applications a year",
      "Application materials: transcripts, a resume or CV, two letters of recommendation (academic referees for recent graduates; supervisors are also accepted), a statement of purpose and a personal statement of up to 1,000 words each. GRE scores are not required and have no effect on the decision",
      "English proficiency (unless you meet a Graduate School exemption): the CS M.Eng. requires TOEFL iBT section scores of at least Writing 4, Listening 3.5, Reading 4 and Speaking 5.5, or IELTS 7.0 overall, sent to Cornell before the deadline (TOEFL code 2098). No other English tests are accepted, and most admitted applicants exceed the minimums",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Engineering in Electrical and Computer Engineering",
    slug: "cornell-meng-electrical-computer-engineering",
    level: "Master",
    field: "Engineering",
    duration: "2 semesters full-time (30 credits); an optional 3-semester version requires 36 credits",
    tuitionNote: MENG_TUITION("These figures are for a two-semester year; the optional three-semester version adds a further semester"),
    description:
      "Cornell's M.Eng. in Electrical and Computer Engineering on the Ithaca campus is a professional degree designed for industry careers, although graduates have also gone on to PhD programmes, business and other professional degrees. Students complete 30 credits over two semesters: a faculty-supervised design project (3-8 credits) that runs across both semesters and ends with a final report and a poster session judged by faculty and industry experts, at least two 5000-level ECE courses each semester, and technical electives from ECE, the wider College of Engineering or selected business courses in accounting, organisational leadership, finance, entrepreneurship and marketing. Many students choose a three-semester version (36 credits), which leaves room for more advanced courses and a summer internship. A separate ECE M.Eng. is offered at Cornell Tech in New York City.",
    officialProgramUrl: "https://www.duffield.cornell.edu/ece/meng-electrical-computer-engineering-ithaca/admission-requirements-ithaca-campus/",
    degree: "Master of Engineering (MEng) in Electrical and Computer Engineering",
    intake: "Fall semester (August) or spring semester (January)",
    applicationDeadline: `Fall 2027 entry: apply by 17 January 2027 (the spring deadline is 15 October); applications are reviewed on a rolling basis. ${GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree, ideally a rigorous degree in electrical and computer engineering; the recommended minimum GPA is 3.5/4.0. Prerequisites are introductory circuits, digital logic and computer organisation, an engineering calculus sequence including linear algebra and vector calculus, engineering probability and statistics, and introductory and intermediate programming (for example C, C++ or Python)",
      "Application materials: two letters of recommendation (faculty referees are strongly suggested), a one-page academic statement of purpose, a personal statement and transcripts. A resume is optional but encouraged, and the GRE is not required",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Engineering in Operations Research and Information Engineering",
    slug: "cornell-meng-operations-research-information-engineering",
    level: "Master",
    field: "Engineering",
    duration: "2 semesters full-time (at least 30 credits); the financial engineering concentration takes 3 semesters",
    tuitionNote: MENG_TUITION("These figures are for a two-semester year in Ithaca; the financial engineering concentration runs over three semesters, the last in New York City"),
    description:
      "Cornell's ORIE M.Eng. is a full-time, in-person professional degree in using data, models and algorithms to make better decisions, for both operations research graduates and students from other quantitative fields. Everyone studies core material in optimisation, stochastics, and data science and statistical modelling, then follows one of six concentrations: applied operations research, data analytics, financial engineering, information technology, manufacturing and industrial engineering, or strategic operations. Most concentrations take two semesters. Financial engineering takes three, with a summer internship and a final semester at Cornell Financial Engineering Manhattan in New York City. The capstone is a team project with a real organisation and its data, which builds project planning, teamwork and communication skills.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/operations-research-information-engineering-orie-meng/",
    degree: "Master of Engineering (MEng) in Operations Research and Information Engineering",
    intake: "Fall semester (August); spring entry is only for Cornell undergraduates",
    applicationDeadline: `Fall 2027 entry: apply by 1 December 2026. Late applications are not reviewed without the M.Eng. director's permission, and an asynchronous video interview is released shortly after the deadline. ${GRAD_APPLY}`,
    admissionRequirements: [
      "Prerequisites, to be completed before you start: an engineering calculus sequence including linear algebra and vector calculus, a calculus-based probability and statistics course, and introductory and intermediate programming in a general-purpose language such as C, C++, Java or Python. The data analytics and financial engineering concentrations need a second probability and statistics course; financial engineering also needs stochastic processes and an introductory finance course, plus a pre-semester refresher",
      "Application materials: a resume, two letters of recommendation (three preferred), an academic statement of purpose and a personal statement of up to 1,000 words each, transcripts, a GRE or GMAT score (GRE preferred; current Cornell students are exempt) and the video interview",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Two-Year MBA (Cornell SC Johnson College of Business)",
    slug: "cornell-johnson-two-year-mba",
    level: "Master",
    field: "Business",
    duration: "21 months full-time (60 credits over four semesters, with a summer internship)",
    tuitionNote:
      "2026-27: Johnson's estimated first-year cost of attendance for the Two-Year MBA in Ithaca is US$127,278. That is tuition of US$88,934, a one-time US$1,500 first-year fee for core course packs and materials, a US$100 student activity fee and a US$600 health fee, plus estimates of US$19,962 for housing, US$5,768 for meals, US$2,464 for books and supplies, US$3,754 for transport and US$4,196 for other costs. Johnson puts total tuition for the two years at US$177,868 at the current rate. The Student Health Plan (US$3,751 for new students in fall 2026) is billed separately if you do not have qualifying insurance. Admitted students pay two non-refundable US$1,500 enrolment deposits, and merit-based scholarships, including the Park Leadership Fellowship, are available",
    description:
      "Johnson's full-time Two-Year MBA in Ithaca runs for 21 months from early August, with a summer internship between the two years, and its immersion approach lets students focus on an industry of their choice in the first year. The 20.5-credit core covers financial accounting, data analytics and modelling, microeconomics for management, marketing management, leading teams, critical and strategic thinking, managerial finance, managing operations and strategy, alongside a core teams practicum, a work experience course, a leadership elective and a sustainability elective. Most of the remaining 60 credits are electives, at least 21.5 of them from the SC Johnson College of Business. Leadership development runs through the programme, and students can join programming offered with Cornell Tech in New York City. Students must keep a GPA of at least 2.70 overall and 2.50 in the core.",
    officialProgramUrl: "https://catalog.cornell.edu/programs/two-year-residential-mba/",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall (early August)",
    applicationDeadline:
      "2026-2027 admissions cycle (fall 2027 entry; deadlines at 11:59 p.m. ET): Round 1 closed 17 September 2026 (final decisions by 9 December 2026); Round 2 by 5 January 2027 (interview invitations or other first notifications by 3 March, final decisions by 26 March 2027); Round 3 by 6 April 2027 (final decisions by 21 May 2027). Consortium applicants have an early deadline of 15 October 2026 and a traditional deadline of 5 January 2027. The application fee is US$250, non-refundable",
    admissionRequirements: [
      "A bachelor's degree by the time you enrol, with transcripts for all coursework (report grades as your university lists them; do not convert them to a 4.0 scale). Full-time work experience is not required, but students have worked for about five years on average before enrolling",
      "Application materials: resume, a goals statement and one of two essay prompts, one letter of recommendation (up to two accepted), and a GMAT, GRE or Executive Assessment score. There is no minimum score, but the middle 80% of applicants score 660-740 on the GMAT; scores are valid for five years, and you can request a test waiver with a 100-word statement before submitting. After a first review, applicants are invited to interview, placed on the waitlist or denied",
      "English proficiency (if English is not your native language and you have not earned a university degree in an English-speaking country): Johnson looks for TOEFL iBT 100 with at least 25 in each section (or 5 on the CEFR-aligned scale), IELTS Academic 7.0 with at least 7.0 in speaking and writing, or Duolingo English Test 120. TOEFL MyBest scores are not accepted, and admitted students with lower section scores may have to complete a summer English programme before the MBA",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Industrial and Labor Relations",
    slug: "cornell-milr",
    level: "Master",
    field: "Human Resource Management",
    duration: "2 years full-time (48 credits; can be finished in 3 semesters)",
    tuitionNote: `2026-27: the M.I.L.R. is billed at Cornell's Tier 2 professional tuition of US$48,414 a year (US$24,207 a semester). ${GRAD_LIVING}, so a year comes to about US$85,259 (our total of the official figures). ${GRAD_SHP}. Applicants who submit a funding consideration statement are reviewed for any available funding, and ILR recommends also looking for outside funding`,
    description:
      "The Master of Industrial and Labor Relations, administered by Cornell's Graduate School and taught by the ILR School, is a two-year professional degree for future leaders in human resource management, human capital consulting and labor relations. Students complete at least 48 credits (16 or more courses): six core courses in labor relations, labor and employment law, human resource management, labor economics, organisational behaviour, and HR statistics and analytics; six human resources and organisation concentration courses, with strategy and finance for HR professionals and the HR practicum strongly recommended so students can take full part in the HR Bundle; and four electives from ILR or approved courses elsewhere at Cornell, such as global strategy, Python or R for business analytics, and consumer behaviour. All courses must be at graduate level and passed with at least a C, with a 3.0 GPA overall. A one-year option exists for holders of a US JD or MBA, or a Cornell ILR bachelor's, with work experience.",
    officialProgramUrl: "https://www.ilr.cornell.edu/programs/graduate-degree-programs/master-industrial-and-labor-relations-milr",
    degree: "Master of Industrial and Labor Relations (MILR)",
    intake: "Fall semester (August) or spring semester (January)",
    applicationDeadline: `Fall 2027 entry: apply by 1 December 2026 for scholarship consideration; ILR does not publish a later fall date. The spring 2027 deadline was 2 November 2026, and applications opened on 1 September 2026. After you submit, you are invited to record an online video interview. ${GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree from an accredited institution or an equivalent international degree. There is no minimum GPA cut-off, but your coursework and grades are part of the decision",
      "Application materials: unofficial transcripts from every college or university attended, two letters of recommendation (academic or professional), a resume, an academic statement of purpose, a personal statement and the online video interview. GRE and GMAT scores are not reviewed",
      GRAD_ENGLISH,
    ],
  },
];
