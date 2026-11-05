import type { Program } from "../../programs";

// Johns Hopkins University (Baltimore, Maryland; SAIS in Washington, DC): 8 undergraduate majors for fall 2027 first-year entry and
// 7 graduate programs. Sources: JHU Undergraduate Admissions (application deadlines and requirements, standardized testing and English
// proficiency, international applicants and financial aid FAQs, the general FAQ, and the biomedical engineering admission pages),
// Student Financial Support's 2026-27 cost of attendance, the 2026-27 JHU Academic Catalogue (university-wide tuition, fees and student
// budgets, the KSAS/WSE requirements for a bachelor's degree, and each programme's catalogue page), Whiting School of Engineering
// Graduate Admissions (2027 application deadlines and English proficiency policy), the Computer Science MSE admissions and FAQ pages,
// the Applied Mathematics and Statistics admissions page, the BME master's application page, the Bloomberg School's MPH requirements,
// application deadlines, international applicants and MPH tuition and funding pages, Carey Business School's 2026-27 tuition and fees,
// fall 2027 deadlines, full-time MBA and MS application pages and international applicant page, and Johns Hopkins SAIS's MAIR
// application page and English examination policy (viewed November 5, 2026). Costs are in US dollars unless marked in euros.

const UNIVERSITY = {
  universitySlug: "johns-hopkins-university",
  universityName: "Johns Hopkins University",
  country: "United States",
  language: "English",
  campus: "Baltimore (Homewood)",
  programType: "Full-time",
} as const;

// SFS 2026-27 COA, first-year on campus: tuition 68,670 + one-time matriculation fee 500 + housing 13,073 + meals 8,894 + personal 1,606
// + books 1,377 + transport 738 = 94,858. Second year on campus 95,729; off campus 88,233. Catalogue student budget lists health
// insurance at 3,624 (not in the SFS total).
const UG_TUITION =
  "2026-27 (fall 2026 and spring 2027): Johns Hopkins charges all full-time undergraduates, including international students, US$68,670 in tuition for the year (12 or more credits each semester). Student Financial Support's estimated cost of attendance for a first-year student living on campus is US$94,858: tuition plus a one-time US$500 matriculation fee, US$13,073 for housing in a double room, US$8,894 for the meal plan, US$1,606 for personal expenses, US$1,377 for books and course materials and US$738 for travel (an average that varies by home location). From the second year the on-campus estimate is US$95,729, or US$88,233 living off campus. The university's 2026-27 student budget also lists US$3,624 for health insurance, which is not part of that total. International first-year applicants are reviewed need-aware: Hopkins says it meets 100% of demonstrated need for admitted international students with scholarships and work-study rather than loans, awards a small number of merit scholarships (everyone is considered automatically), and gives about 10% of international students financial aid. If you may need aid at any point in the four years, you must ask for it on your admission application and submit the CSS Profile (or Hopkins's free International Student Financial Aid Application); international students cannot apply for aid later, and international transfer students are not offered aid. 2027-28 rates had not been published when we checked";

const UG_INTAKE = "Fall semester only (first-year students enrol in August)";

const UG_DEADLINE =
  "Fall 2027 entry, through the Common Application or the Coalition Application on Scoir (US$70 application fee or a fee waiver): Hopkins offers two binding Early Decision rounds and Regular Decision, and has no Early Action plan. Early Decision I: apply by 1 November 2026, financial aid documents by 15 November 2026, decisions on 11 December 2026. Early Decision II: apply by 2 January 2027, financial aid by 15 January 2027, decisions on 12 February 2027. Regular Decision: apply by 2 January 2027, financial aid by 15 January 2027, decisions on 24 March 2027, reply by 1 May 2027. Students admitted through Early Decision must withdraw their other applications and enrol, and applicants denied in Early Decision I cannot reapply that year. All international applicants must also submit the International Certification of Finances form in the applicant portal by their plan's deadline, whether or not they apply for aid";

const UG_TESTING =
  "Testing: required. First-year applicants must submit SAT (Math and Evidence-Based Reading and Writing) or ACT (Math, Reading and English) scores. Self-reported scores are accepted when you apply, and enrolling students then send official scores. Hopkins superscores both tests, has no minimum score, and does not require the ACT science or writing sections (SAT code 5332, ACT code 1704). It suggests testing by October of your final school year for Early Decision or by December for Regular Decision";

const UG_ENGLISH =
  "English proficiency: an English test is recommended but not required if English is not your primary language or you have not attended an English-language school for the last three years, and Hopkins encourages you to send one if you score below 690 on SAT Evidence-Based Reading and Writing or below 30 on both ACT Reading and English. Competitive results are typically TOEFL iBT 5 overall (preferred sub-scores 5.5 reading, 5.5 listening, 5 writing and 5 speaking), IELTS 7.0 or higher in every band, a Duolingo English Test score of 120 or higher (preferred sub-scores 125 literacy, 120 conversation, 135 comprehension and 105 production), or a Cambridge C1 Advanced or C2 Proficiency score of 185 or higher (TOEFL code 5332)";

const UG_ACADEMIC =
  "Application materials: the Common Application or Coalition Application with the Hopkins supplement, secondary school records for the equivalent of grades 9 to 11 with any national examination results (O-levels, A-levels, IB and similar) and verified English translations where needed, two teacher evaluations, a mid-year report by mid-February, test scores and, for Early Decision, a signed agreement. Hopkins recommends four years each of English, mathematics, a foreign language, laboratory science and history or social science, reviews applications holistically, does not offer interviews and does not track demonstrated interest. It has more than 1,000 international undergraduates from over 80 countries";

const KSAS_ROUTE = (extra: string) =>
  `School and admission route: Krieger School of Arts and Sciences. You apply to Johns Hopkins rather than to a single major, listing your intended areas of interest on the application; outside biomedical engineering these choices are not binding and you can change major, including between Arts and Sciences and Engineering. ${extra}`;

const WSE_ROUTE = (extra: string) =>
  `School and admission route: Whiting School of Engineering. You apply to Johns Hopkins and list your intended majors on the application; outside biomedical engineering these choices are not binding and you can change major later. ${extra}`;

// Catalogue 2026-27 KSAS/WSE graduate student budget: matriculation 500, food 8,488, housing 12,215, personal 1,330, transport 648,
// books 1,624 (living 24,305), health insurance 3,624. Full-time graduate tuition 68,670. Our total without insurance: 93,475.
const WSE_GRAD_TUITION = (extra: string) =>
  `2026-27: full-time master's students in the Whiting School of Engineering pay the university's full-time graduate tuition of US$68,670 for the fall and spring semesters. The university's graduate student budget adds a one-time US$500 matriculation fee and estimates US$12,215 for housing, US$8,488 for food, US$1,624 for books and course materials, US$1,330 for personal expenses and US$648 for transport, so the year comes to about US$93,475 (our total of the official figures), plus US$3,624 for health insurance if you need the university plan. ${extra}`;

const WSE_GRAD_ENGLISH =
  "English proficiency (Whiting School of Engineering): international applicants whose country of citizenship does not have English as its official language must send official scores or qualify for a waiver before they can be admitted. TOEFL iBT, IELTS Academic, Cambridge English (B2 First, C1 Advanced or C2 Proficiency) and the Duolingo English Test are accepted, with preferred minimums of TOEFL 100 (or 5.0 on the new 1-6 scale), IELTS 7, Cambridge 185 and Duolingo 135; scores older than two years are not accepted (TOEFL code C559). A waiver is possible if you are a citizen of, or earned your bachelor's or master's degree in, a country on the school's list of English-speaking countries, or if your degree elsewhere was taught and examined entirely in English (documentation required)";

const WSE_GRAD_APPLY =
  "Apply through the Whiting School of Engineering graduate application, which opens around 15 August; deadlines are 11:59 p.m. US Eastern time, and all materials apart from official test scores, credential evaluations and recommendation letters must be in the application when you submit it. The US$75 application fee is waived for fall 2027 master's applicants";

export const johnsHopkinsPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Biomedical Engineering",
    slug: "jhu-biomedical-engineering",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "4 years full-time (129 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Johns Hopkins' ABET-accredited BS in Biomedical Engineering combines engineering, mathematics and physics with modern biology to solve problems in living systems. Students start with a design cornerstone course and take calculus, linear algebra and differential equations, probability and statistics, chemistry and physics with laboratories, and a BME core covering health and human physiology, cellular and molecular foundations, biochemistry and molecular engineering, biomedical data science, statistical physics, biological models and simulations, signals and systems, systems and controls, and systems biology of the cell. They add four laboratory-based core electives (for example neuroengineering, immunoengineering, cell and tissue engineering or building an imager) and a two-semester team design sequence, and focus at least 18 credits in one of seven areas: biomedical data science, computational medicine, genomics and systems biology, imaging and medical devices, immunoengineering, neuroengineering, or translational cell and tissue engineering. Strong students can apply in their final year for the combined BS/MSE.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/biomedical-engineering/biomedical-engineering-bachelor-science/",
    degree: "Bachelor of Science (BS) in Biomedical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School and admission route: Whiting School of Engineering, with direct entry to the major. To be considered you must list BME as your first-choice major on the application (there is no separate application). Students are admitted to the BME major on the strength of their credentials and the space available, and you can be admitted to Hopkins without being admitted to BME; the decision letter tells you which. Students not admitted to BME may choose another Arts and Sciences or Engineering major. Moving into BME later is rare and possible only if places open at the end of the first year, and transfer applicants cannot enter the major",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "jhu-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The BS in Computer Science, accredited by ABET's Computing Accreditation Commission, combines a fixed core with a lot of room to choose. Students need 40 credits of computer science: gateway computing (Java or Python), data structures, computer system fundamentals and introduction to algorithms; a computing ethics course; a foundations requirement (mathematical foundations for computer science, or discrete mathematics with theory of computation); a team-based course; and at least 12 upper-level credits, covering at least two of the department's four areas (applications, reasoning, software and systems), plus CS electives. Around this sit 16 credits of mathematics (Calculus I and II, probability and statistics, with linear algebra and Calculus III recommended), eight credits of laboratory science, and the engineering school's foundational requirements in writing, oral presentation, creative expression, engagement with society and ethics. A senior honours thesis is available, and a separate BA is also offered.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/computer-science/computer-science-bs/",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      WSE_ROUTE("Within the major you need at least a C+ in gateway computing and at least a C- in every other CS course"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Public Health Studies",
    slug: "jhu-public-health-studies",
    level: "Bachelor",
    field: "Public Health",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Public Health Studies, a BA in the Krieger School of Arts and Sciences, gives undergraduates a population view of health and a direct link to the Johns Hopkins Bloomberg School of Public Health. Foundation courses cover calculus, two biology lectures with a laboratory and two introductory social science courses from different departments. The core is introduction to public health, research methods in public health, the environment and your health, fundamentals of health policy and management, public health biostatistics, fundamentals of epidemiology, and a course on social and behavioural determinants of health, followed by three intermediate public health courses. Every student completes an applied experience of at least 80 hours over at least four weeks on a supervised public health project or programme. In the final year, after finishing the core, majors take 15 credits of graduate-level courses at the Bloomberg School in East Baltimore, onsite or online. All major courses need a C- or better and a letter grade.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/arts-sciences/full-time-residential-programs/degree-programs/public-health-studies/public-health-studies-bachelor-arts/",
    degree: "Bachelor of Arts (BA) in Public Health Studies",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      KSAS_ROUTE("Public Health Studies is a Krieger School major, and the Bloomberg School courses are open to majors only in their final year"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Neuroscience",
    slug: "jhu-neuroscience",
    level: "Bachelor",
    field: "Neuroscience",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION,
    description:
      "The BS in Neuroscience studies the nervous system from molecules and cell membranes up to the brain systems behind thinking and language, drawing on researchers in Biology, Biomedical Engineering, Biophysics, Cognitive Science, Psychological and Brain Sciences and the Krieger Mind/Brain Institute. First-years take foundations of brain, behaviour and cognition (or introduction to cognitive neuropsychology), then the neuroscience sequence: cognitive neuroscience, a neuroscience laboratory, and two semesters of cellular and systems neuroscience. Supporting courses are Calculus I and II, statistics, general chemistry with laboratories, organic chemistry I, two semesters of physics with laboratories and one biology course with its laboratory. Majors choose one of four focus areas (cellular and molecular, cognitive, computational or systems neuroscience) for nine credits of advanced electives, add three advanced credits outside it, and complete six credits of research in a neuroscience laboratory alongside two semesters of scientific communication and mentoring. Courses must be letter-graded with a C- or better.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/arts-sciences/full-time-residential-programs/degree-programs/neuroscience/neuroscience-bachelor-science/",
    degree: "Bachelor of Science (BS) in Neuroscience",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      KSAS_ROUTE("Students aiming for medical school need a second semester of organic chemistry with its laboratory and biochemistry, which are not major requirements, and a combined BS/MS in Neuroscience is also offered"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "jhu-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The BA in Economics, in the Krieger School of Arts and Sciences, builds from two introductory courses, Elements of Macroeconomics and Elements of Microeconomics, which both need a C or better before you can major. The core then covers microeconomic theory, macroeconomic theory and econometrics, supported by Calculus I and a statistics course. Students choose five more economics electives, at least two of them at the 300 level, from a department that does not run every elective each year, so courses are planned with an adviser. Qualified students can take 600-level graduate courses from the spring of their third year with the instructor's consent, and a two-semester senior honours thesis is available. Six credits of writing-intensive electives within the major meet the school's writing and communication requirement, and every other course in the major needs a C- or better and a letter grade.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/arts-sciences/full-time-residential-programs/degree-programs/economics/economics-bachelor-arts/",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      KSAS_ROUTE("To be an economics major you need a C or better in both Elements courses"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Molecular and Cellular Biology",
    slug: "jhu-molecular-cellular-biology",
    level: "Bachelor",
    field: "Biology",
    duration: "4 years full-time",
    tuitionNote: UG_TUITION,
    description:
      "The Biology Department's BS in Molecular and Cellular Biology is a rigorous preparation for PhD study, biotechnology careers and medical school. Students take Calculus I and II, two semesters of physics with laboratories, general chemistry with laboratories and two semesters of organic chemistry with a laboratory. The biology core is genetics, molecular biology, cell biology and biochemistry, with laboratory courses in biochemistry or protein engineering, developmental genetics and cell biology. Students then choose at least four upper-level biology electives (12 or more credits, at least one taught by the Biology Department), such as biology of disease, microbiology or cancer biology, and complete at least six credits of supervised research, including group meetings and a written summary of their work at the end of the year. Required courses must be letter-graded and passed with a C- or better, with one exception allowed in the final year.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/arts-sciences/full-time-residential-programs/degree-programs/biology/molecular-cellular-biology-bachelor-science/",
    degree: "Bachelor of Science (BS) in Molecular and Cellular Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      KSAS_ROUTE("The major is designed for students heading to PhD programmes, biotechnology or medical school"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Applied Mathematics and Statistics",
    slug: "jhu-applied-mathematics-statistics",
    level: "Bachelor",
    field: "Mathematics",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The BS in Applied Mathematics and Statistics, in the Whiting School of Engineering, trains students to model and solve real problems with mathematics, statistics and computing. Required courses cover single- and multivariable calculus, linear algebra (linear algebra for data science is preferred), differential equations or dynamical systems, intermediate programming, discrete mathematics, a computational or numerical mathematics course, optimisation, probability, mathematical statistics and a foundations course in applied or engineering mathematics. Students then take two courses in one area of focus: computational mathematics, discrete mathematics, financial mathematics, optimisation and operations research, probability and stochastic processes, or statistics and statistical learning, with options such as Monte Carlo methods, game theory, financial derivatives, Bayesian statistics, time series analysis and data mining. Grades of C- or better are needed in major courses, and satisfactory/unsatisfactory grades do not count.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/applied-mathematics-statistics/applied-mathematics-statistics-bs/",
    degree: "Bachelor of Science (BS) in Applied Mathematics and Statistics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      WSE_ROUTE("A BA in Applied Mathematics and Statistics is also offered"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "International Studies",
    slug: "jhu-international-studies",
    level: "Bachelor",
    field: "International Relations",
    duration: "4 years full-time (120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "The interdisciplinary BA in International Studies combines political science, history, economics and a modern foreign language. Students take a gateway course (such as contemporary international politics or introduction to global studies), one course each in international relations, American politics and political theory, two in comparative politics, five in global history and four in economics, including Elements of Macroeconomics and Elements of Microeconomics by the end of the second year. They must reach proficiency in a modern foreign language other than English: two years of study for Arabic, Chinese, Japanese or Korean, three years for other languages, and at least two language courses for Hopkins credit whatever your starting level. Each student also builds a four-course focus area defined by region, theme or language, and at least five history, politics or economics courses must be at the 300 level or above. Selected students can add a master's degree at the Johns Hopkins School of Advanced International Studies (SAIS) through a combined BA/MA programme.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/arts-sciences/full-time-residential-programs/degree-programs/international-studies/international-studies-bachelor-arts/",
    degree: "Bachelor of Arts (BA) in International Studies",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      KSAS_ROUTE("International Studies majors should start economics and language courses early, and American Sign Language does not count towards the language requirement"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Health (Bloomberg School of Public Health)",
    slug: "jhu-mph-bloomberg",
    level: "Master",
    field: "Public Health",
    campus: "Baltimore (East Baltimore)",
    duration: "11 months full-time (80 credits); part-time and online formats take longer",
    tuitionNote:
      "2026-27: tuition for the full-time MPH (five terms) is US$87,480. The Bloomberg School's student budget adds a one-time US$500 matriculation fee, a US$900 health services fee and estimates of US$16,479 for housing, US$6,147 for food, US$4,599 for transport, US$2,862 for personal expenses and US$1,000 for books and supplies, for about US$119,967 before health insurance (our total of the official figures). Health insurance and the health services fee are required for full-time students. All admitted full-time applicants are considered automatically for merit awards: the Wade Hampton Frost, Lowell J. Reed and Dean's scholarships (US$10,000 to US$40,000), the Dean's Fellowship in Public Health Leadership (US$10,000) and the Sommer Scholars Program (full tuition plus a living stipend, 12 awards a year). The MPH Program awards merit scholarships only",
    description:
      "The Johns Hopkins MPH gives students a population perspective on health and the multidisciplinary skills to tackle current and emerging public health problems worldwide. The full-time version starts with an onsite orientation in Baltimore in early July and runs for 11 months at 12 or more credits per term. About 45 to 50 of the 80 credits form the core: biostatistics, epidemiology (taken in the first year), public health policy and problem solving, biology and public health and other foundations, a practicum in population-based health with the course The Tools of Public Health Practice, a communication course and an MPH capstone project. The rest are electives, which students can mix across onsite East Baltimore courses, online courses and intensive summer and winter institutes. Students may follow an informal focus or a formal concentration such as Child and Adolescent Health, Epidemiological and Biostatistical Methods, Food, Nutrition and Health, Global Climate Change, Health Leadership and Management, Health Systems and Policy, Humanitarian Health or Infectious Diseases, or add a Bloomberg School certificate. Students need a cumulative GPA of at least 2.75.",
    officialProgramUrl: "https://publichealth.jhu.edu/academics/mph/requirements",
    degree: "Master of Public Health (MPH)",
    intake: "Full-time cohort: late June/early July (part-time cohorts start at other times of year)",
    applicationDeadline:
      "Full-time, onsite MPH starting late June/early July 2027: apply through SOPHAS by 1 December 2026, the same date as the Bloomberg Fellows application. All supporting documents (transcripts, credential evaluations, letters and any test scores) must arrive within two weeks of the deadline, and the school strongly advises applying early. Brazilian citizens and residents applying for the Fundação Maria Emília scholarship must submit their full application by 1 November",
    admissionRequirements: [
      "Health-related experience: at least two years of full-time, paid, post-bachelor's health-related work; or a doctoral degree in a field underlying public health; or two years of US post-baccalaureate health professional training (such as MD, DVM, DDS, PharmD or nursing). The requirement is waived for graduates of medical schools outside the US, and you may apply before reaching two years if you will meet it by the time you enrol",
      "Prior coursework, completed for credit and a letter grade by the time you start: one mathematics course (such as calculus, algebra or statistics) and one health-related science course (such as biology, microbiology, nutrition, anatomy and physiology, epidemiology, psychology or genetics). GRE, MCAT, GMAT and LSAT scores are optional, but you must show quantitative ability through your transcripts or supplemental answers. Three letters of recommendation are required, ideally including one professional and one academic",
      "International applicants need a course-by-course credential evaluation from WES or ECE for all university study outside the US and English-speaking Canada (start at least three months before the deadline) and the equivalent of a four-year US bachelor's degree, although some three-year degrees may be considered. English proficiency (unless exempt, for example as a citizen of a listed English-speaking country or a graduate of a four-year degree there): TOEFL iBT 100 for tests before 21 January 2026 or 5.0 after, IELTS Academic 7, Duolingo English Test 130 or PTE Academic 68, less than two years old",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Engineering in Computer Science",
    slug: "jhu-mse-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "Usually 3 full-time semesters (at least 2 required)",
    tuitionNote: WSE_GRAD_TUITION(
      "The annual rate covers fall and spring, so a third semester is billed on top. MSE students are not normally eligible for tuition waivers, but they can work on campus for up to 19.99 hours a week, for example as course assistants",
    ),
    description:
      "The MSE in Computer Science is a residential programme that most students finish in three full-time semesters. The department groups its courses into five areas (applications, reasoning, software, systems and theory), and students take at least one graduate course in four of them plus four advisor-approved electives, which can come from closely related departments such as electrical and computer engineering, cognitive science, mathematics or applied mathematics and statistics. They then complete the degree with two more graduate computer science courses, a supervised research project with a report, or an original master's thesis. Students can follow the official concentration in Human Language Technology, run with the Center for Language and Speech Processing, or an informal artificial intelligence track. Courses must be at the 600 level or above, most must be taught by the department, and the course average must be at least a B.",
    officialProgramUrl: "https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/admissions/",
    degree: "Master of Science in Engineering (MSE) in Computer Science",
    intake: "Fall or spring semester",
    applicationDeadline: `Fall 2027 entry: apply by 15 February 2027 (the spring 2027 deadline was 1 October 2026). Review of applications received after the deadline is not guaranteed. ${WSE_GRAD_APPLY}`,
    admissionRequirements: [
      "Academic background equivalent to the Johns Hopkins BS in Computer Science. Applicants from other fields need coursework or equivalent experience in intermediate programming (C++ and Java), data structures, computer system fundamentals and mathematical foundations of computer science, shown through courses, research or work",
      "Application materials: transcripts, a statement of purpose, a resume or CV and two letters of recommendation; a sample of work is optional. The GRE is not required and the department reviews applications holistically",
      `${WSE_GRAD_ENGLISH}. The CS department's preferred scores are the same: TOEFL 100, IELTS 7.0 or Duolingo 135`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Engineering in Data Science",
    slug: "jhu-mse-data-science",
    level: "Master",
    field: "Data Science",
    duration: "3 full-time semesters",
    tuitionNote: WSE_GRAD_TUITION(
      "The annual rate covers fall and spring, so the third semester is billed on top. The Department of Applied Mathematics and Statistics offers limited partial support to some full-time master's students; to be considered, answer yes to the funding question in the application and complete the master's financial assistance form that is emailed to you",
    ),
    description:
      "The Data Science master's, run by the Department of Applied Mathematics and Statistics, is a fully residential programme that teaches the applied mathematics, statistics and computing behind modern data science tools and how to turn real data problems into mathematical ones. In the first semester students take introduction to data science or machine learning. They then take one course in each of four core areas: statistics (for example Bayesian statistics, time series analysis or causal inference), machine learning (such as deep learning, reinforcement learning or probabilistic graphical models), optimisation, and computing. Students choose a capstone option, with three electives and a six-credit research capstone presented at a poster session with a final paper, or a course-only option with five electives. Everyone also completes a data science ethics course, academic ethics and responsible conduct of research training, and a communication skills practicum. The programme is STEM-designated (CIP 27.05.01).",
    officialProgramUrl: "https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/applied-mathematics-statistics/data-science-masters-degree/",
    degree: "Master of Science in Engineering (MSE) in Data Science",
    intake: "Fall or spring semester",
    applicationDeadline: `Fall 2027 entry: apply by 15 January 2027 (the spring deadline is 15 September). For fall 2026 the programme received 1,162 applications and admitted 659. ${WSE_GRAD_APPLY}`,
    admissionRequirements: [
      "A bachelor's degree, ideally in engineering, mathematics, computer science or the sciences, with undergraduate courses in calculus through multivariable calculus, linear algebra, differential equations, probability (preferably with statistics), computer programming (for example C++ or Python) and at least two proof-writing courses. Three-year bachelor's degrees are accepted. Mathematical background, grades and recommendation letters carry the most weight",
      "Application materials: statement of purpose, supplementary information section, unofficial transcripts (a professional credential evaluation is strongly encouraged for non-US degrees) and three letters of recommendation. GRE scores are not required for spring 2027 and fall 2027 applications, and the department prefers that you apply to only one of its programmes",
      `${WSE_GRAD_ENGLISH}. The Applied Mathematics and Statistics department states TOEFL 100 or IELTS 7 for non-native English speakers`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Engineering in Biomedical Engineering",
    slug: "jhu-mse-biomedical-engineering",
    level: "Master",
    field: "Biomedical Engineering",
    duration: "30 credits full-time (course-based); the thesis option adds a second year",
    tuitionNote: WSE_GRAD_TUITION(
      "The department does not give MSE students financial aid, though external aid may be available and partial tuition remission may be possible for former Johns Hopkins students. Students selected for the thesis track may receive support such as tuition waivers or a monthly stipend, negotiated individually",
    ),
    description:
      "The MSE in Biomedical Engineering is for students heading into research and development careers or towards PhD or MD/PhD study. It has two options. The course-based plan requires at least 30 credits of approved graduate coursework; students are encouraged to concentrate in one focus area, and up to six credits of research in a confirmed laboratory, three credits of an advanced teaching practicum and up to two seminars can count. The thesis-based track uses the same 30 credits in the first year and adds a research thesis applying quantitative or engineering principles to a biomedical problem, completed in a second year. Students must keep a GPA of 3.0 or higher in every semester and can count no more than two C-range grades towards the degree.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/biomedical-engineering/biomedical-engineering-master-science-engineering/",
    degree: "Master of Science in Engineering (MSE) in Biomedical Engineering",
    intake: "Fall semester only",
    applicationDeadline: `Fall 2027 entry: apply by 15 January 2027; BME does not admit for spring or summer. Decisions are usually made by March. Applications are handled by Engineering Graduate Admissions, not the department. ${WSE_GRAD_APPLY}`,
    admissionRequirements: [
      "An undergraduate degree in engineering; exceptional applicants with degrees in the basic sciences may apply but would normally need extra courses to fill gaps",
      "Application materials: the online application, unofficial transcripts, three letters of recommendation from instructors or employers, a statement of your interest in and motivation for biomedical engineering graduate study, and a resume. GRE scores are not required and, if sent, are not part of the review",
      `${WSE_GRAD_ENGLISH}. The BME department lists TOEFL, IELTS and Cambridge English as its accepted tests`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Finance (Carey Business School)",
    slug: "jhu-carey-ms-finance",
    level: "Master",
    field: "Finance",
    campus: "Baltimore or Washington, DC",
    duration: "9 months full-time (30 credits over fall and spring); 12- and 15-month versions also offered",
    tuitionNote:
      "2026-27: tuition for the 30-credit, nine-month full-time MS in Finance is US$78,500 (US$39,250 a semester), plus a one-time US$1,000 matriculation fee. Carey's 2026-27 estimates for the year add US$17,474 for housing, US$5,220 for food, US$2,708 for books and supplies, US$2,350 for transport and US$3,640 for personal expenses, so the year comes to about US$110,892 before health insurance (our total of the official figures); students in Washington, DC also pay a US$238 transit authority fee. Carey publishes higher tuition for the 12-month (US$94,500) and 15-month (US$99,750) versions. International students pay the same tuition as domestic students and are considered automatically for limited merit scholarships, but federal aid is not available to them. Carey does not provide housing. Rates are subject to change each year",
    description:
      "Carey's full-time MS in Finance builds a working understanding of global financial markets and what they mean for local investment, with a strong grounding in analysing complex financial instruments, portfolio allocation and risk management as well as corporate finance, company valuation and corporate governance. The 30-credit, two-semester programme (all courses are two credits) opens with business communication, business leadership and human values, and statistical analysis, followed by a core in accounting and financial reporting, corporate finance, derivatives, financial modelling and valuation, fixed income and investments. Students then choose six electives from options such as private equity, mergers and acquisitions, machine learning for finance, computational finance, cryptocurrencies and blockchain, emerging markets, hedge fund strategies, wealth management and a student-managed investment fund. Much of the curriculum follows the CFA Institute's Candidate Body of Knowledge, no course waivers are granted, and the programme is STEM-designated, so eligible F-1 graduates may apply for the STEM OPT extension.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/business/degrees-certificates/finance-master-science/",
    degree: "Master of Science (MS) in Finance",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: Round 1 closed 21 October 2026 (decisions by 2 December 2026); Round 2 by 13 January 2027 (decisions by 24 February); Round 3 by 10 February 2027 (decisions by 17 March); Round 4 by 10 March 2027 (decisions by 21 April), the final deadline for international students who need a new F-1 visa; Round 5 by 14 April 2027 for domestic applicants and those already in the US in a status that allows study. Carey strongly encourages international applicants to apply by Round 3. The application fee is US$100, non-refundable",
    admissionRequirements: [
      "A bachelor's degree, earned or in progress, with transcripts from every institution where you attempted more than 15 credit hours; non-US degrees need an official course-by-course evaluation from a NACES member agency confirming US bachelor's equivalence (some three-year degrees qualify). Work experience is not required",
      "Application materials: two essays of 300-500 words (one set question and one chosen from a list), a resume, one recommendation (up to two are read) and a video interview on the Kira platform. The programme is test-optional, so GMAT or GRE scores are needed only if you think they strengthen your application. You can apply to only one Carey specialty master's at a time, and you can state a preference for Baltimore or Washington, DC, where space is limited",
      "English proficiency (unless you hold a US degree, a degree taught only in English, or have lived and worked in the US for at least four years immediately before applying): TOEFL iBT, IELTS, PTE or Duolingo, with preferred minimums of TOEFL 100 (MyBest scores accepted), IELTS 7.0, PTE 70 or Duolingo 130 (TOEFL code 0834)",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA (Carey Business School)",
    slug: "jhu-carey-full-time-mba",
    level: "Master",
    field: "Business",
    campus: "Baltimore",
    duration: "2 years full-time (54 credits, with a summer practical experience)",
    tuitionNote:
      "Fall 2026 cohort (locked-in rate): tuition is US$154,750 for the full two-year programme, billed at US$38,687.50 a semester, plus a one-time US$1,000 matriculation fee; Carey notes that rates may change for students starting in fall 2027. Its 2026-27 estimates for a year of living costs are US$17,474 for housing, US$5,220 for food, US$2,708 for books and supplies, US$2,350 for transport and US$3,640 for personal expenses, so the first year comes to about US$109,767 before health insurance (our total of the official figures). International students pay the same tuition as domestic students and are considered automatically for limited merit scholarships, but federal aid is not available to them. Carey does not provide housing",
    description:
      "The full-time Johns Hopkins MBA is a two-year, cohort-based programme that combines business analytics with leadership development. It starts in August with Foundations Weeks and a professional development course before classes begin. The 26-credit core covers accounting, leadership and organisational behaviour, collaborative negotiation, business communication, statistics, finance, marketing management, microeconomics and market design, operations management, strategic management, a big data consulting project and an innovation field project. Students can use their 28 remaining credits for a specialisation, either Analytics, Leadership and Innovation or Health, Technology and Innovation (each includes AI and a leadership immersion capstone), and in the second year for a Carey certificate in areas such as AI for business, digital marketing, financial management or investments. Between the two years everyone completes a practical experience of at least six weeks at 20 or more hours a week. The programme cannot be accelerated, grants no course waivers and is STEM-designated, and an MBA/MS in Health Care Management dual degree is available.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/business/degrees-certificates/business-administration-fulltime-mba/",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall (August)",
    applicationDeadline:
      "Fall 2027 entry: Early Action closed 9 September 2026 and Round 1 closed 21 October 2026 (decisions by 9 December 2026); Round 2 by 6 January 2027 (decisions by 10 March, deposit by 21 April); Round 3 by 17 March 2027 (decisions by 28 April); Round 4 by 26 May 2027 (rolling decisions). International applicants who need a new F-1 visa are strongly encouraged to apply by Round 2. Carey generally does not grant extensions, and the non-refundable application fee is US$100",
    admissionRequirements: [
      "A bachelor's degree, earned or in progress, with transcripts from every institution where you attempted more than 15 credit hours; non-US degrees need an official course-by-course evaluation from a NACES member agency. Work experience is not required, but applicants with at least two years of full-time work after their bachelor's are the most competitive",
      "Application materials: two essays of 300-500 words (post-MBA career goals and why the Johns Hopkins MBA, and which of Carey's four values resonates with you), a one-page resume, one professional recommendation (up to two are read) and GMAT or GRE scores no more than five years old. You can request a test waiver if you meet both of Carey's conditions, which include work experience, and applicants with non-US degrees need a verified GPA of at least 3.0. Interviews of 45-60 minutes are by invitation, in person or on Zoom",
      "English proficiency (unless you hold a US degree, a degree taught only in English, or have lived and worked in the US for at least four years immediately before applying): TOEFL iBT, IELTS Academic, PTE Academic or Duolingo, with preferred minimums of TOEFL 100, IELTS 7.0, PTE 70 or Duolingo 130 (TOEFL code 0834)",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Arts in International Relations (SAIS)",
    slug: "jhu-sais-ma-international-relations",
    level: "Master",
    field: "International Relations",
    campus: "Washington, DC (first year can be in Bologna, Italy or Nanjing, China)",
    duration: "2 academic years full-time (64 credits)",
    tuitionNote:
      "2026-27: full-time tuition at Johns Hopkins SAIS in Washington, DC is US$66,995 a year. A first year at SAIS Europe in Bologna is billed at €46,665, and a first year at the Hopkins-Nanjing Center at US$44,995. SAIS's 2026-27 student budget adds a one-time US$500 matriculation fee, US$18,000 for housing, US$5,175 for food, US$3,620 for personal expenses, US$1,000 for transport, US$349 for books, US$3,429 for health insurance and a US$236 transit pass fee, so a year in Washington comes to about US$99,304 (our total of the official figures)",
    description:
      "The two-year, full-time Master of Arts in International Relations is the degree most SAIS students take. It mixes international economics, policy and regional studies, international relations and languages, and students can spend both years in Washington, DC or their first year in Bologna or Nanjing, with at least one full-time semester in Washington. The 24-credit core is the SAIS seminar World in Transition, leadership, ethics and decision-making, two semesters of international economics, statistics for data analysis and a research methods course. Students then design a 40-credit programme with at least 12 credits in a functional focus area (development, climate and sustainability; governance, politics and society; international economics and finance; security, strategy and statecraft; or technology and innovation) and 12 in a regional one (Africa, the Americas, Asia, China, Europe and Eurasia, the Middle East or the United States). A capstone (practicum, project, study trip, research seminar or research paper), proficiency in a non-native language tested by exam, and two professional skills courses complete the degree, with a cumulative GPA of at least 2.67.",
    officialProgramUrl: "https://e-catalogue.jhu.edu/advanced-international-studies/programs/master-arts/",
    degree: "Master of Arts (MA) in International Relations",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: early notification deadline 1 November 2026 (decisions by 16 December 2026) or regular decision deadline 7 January 2027 (decisions by 10 March 2027). The application fee is US$85 (not charged to SAIS Europe applicants); waivers are available for listed service programmes and for attending a SAIS admissions event. Optional interviews run from mid-October to early December",
    admissionRequirements: [
      "At least a three-year undergraduate degree, with transcripts for all university-level coursework (official English translations and a grading explanation for transcripts in other languages; a credential evaluation is strongly encouraged). Introductory microeconomics and macroeconomics with a B- or better are required before you enrol but not to apply, and admitted students can meet this through SAIS's online Principles of Economics course. There is no minimum work experience",
      "Application materials: resume or CV, a statement of purpose and an essay on a challenge you have overcome (each up to 600 words), two letters of recommendation (a third is optional) and, optionally, GRE or GMAT scores and an interview",
      "English proficiency (if English is not your native language, unless your whole degree was taught in English at an accredited institution): TOEFL 100 on the previous format or 5 on the new format, IELTS 7, or Cambridge C1 185 or C2 Proficiency, valid for two years and sent directly to SAIS (TOEFL code 5610). Admitted students with a TOEFL speaking or writing sub-score below 25 (or 5), or IELTS below 7, must complete SAIS's English Pre-Term, and all non-native speakers take an internal English diagnostic",
    ],
  },
];
