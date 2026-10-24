import type { Program } from "../../programs";

// University of California, Los Angeles (Westwood, Los Angeles, California): 15 undergraduate majors for fall 2027 first-year entry.
// Sources: UCLA Undergraduate Admission (first-year applicants, important dates for fall 2027, international applicants, majors list, choosing a major,
// supplemental application deadlines, tuition and fees), UC Admissions (dates and deadlines, international applicants, English language proficiency,
// application fees), the UCLA General Catalog 2026-27 major pages (catalog.registrar.ucla.edu), UCLA Financial Aid and Scholarships' 2026-27 cost of attendance,
// UCOP's 2026-27 tuition and fee levels, the Registrar's fee descriptions (Tuition Stability Plan), the Samueli School of Engineering Office of Academic
// and Student Affairs change-of-major page and the School of Theater, Film and Television first-year admissions pages (viewed October 24, 2026). Costs are in US dollars.

const UNIVERSITY = {
  universitySlug: "university-of-california-los-angeles",
  universityName: "University of California, Los Angeles",
  country: "United States",
  language: "English",
  campus: "Westwood, Los Angeles",
  programType: "Full-time",
} as const;

const UG_TUITION =
  "2026-27 costs for new undergraduates entering in fall 2026 (three quarters, about nine months): UCLA lists university fees of US$16,430 for every student (UC systemwide tuition and student services fee of US$15,588 plus US$842 in campus fees) and a UC Student Health Insurance Plan charge of US$3,885, which can be waived if you already have adequate cover. Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, so tuition and mandatory fees come to about US$55,700 a year before insurance (UC bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). UCLA Financial Aid and Scholarships puts the 2026-27 estimated nonresident cost of attendance at US$84,770 living in UCLA residence halls (adding housing of US$12,299, food of US$7,568, books and supplies of US$1,588, transportation of US$969 and personal costs of US$2,761), US$87,056 in off-campus apartments or US$75,977 for commuters. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. UCLA gives no scholarships or financial aid to undergraduates who are not US citizens or permanent residents; students admitted for fall 2026 had to show at least about US$80,739 for the first year (plus a recommended US$5,000 extra), and UCLA says this amount usually rises each year. Rates for the class entering in fall 2027 have not been published yet";

const UG_INTAKE =
  "Fall quarter only (late September). UCLA is on the quarter system and accepts first-year applications for the fall term only";

const UG_DEADLINE =
  "Fall 2027 entry (one University of California application covers all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens on 1 August 2026 and must be submitted during the filing period of 1 October to 30 November 2026. UCLA does not offer Early Decision or Early Action. Most first-year decisions are released in late March 2027; admitted students must submit the enrollment deposit and on-campus housing application by 1 May 2027, final official transcripts by 1 July 2027 and official AP/IB results by 15 July 2027";

const UG_TESTING =
  "Testing: test-blind. UCLA does not consider SAT or ACT scores for admission or scholarships, and the UC application does not ask for them";

const UG_ENGLISH =
  "English proficiency (needed if you had less than 3 years of secondary schooling taught in English): UC's minimums are TOEFL iBT 4.5 on the scale used from January 2026 (80 for tests taken earlier), IELTS 6.5 or Duolingo English Test 115 (AP English 3-5, IB English A 5-7 at higher level or 6-7 at standard level, and some other exams also count). UCLA says competitive applicants have TOEFL iBT 5 or higher with every section at 5 or higher (above 100 with sections above 24 on the old 0-120 scale), IELTS 7.5 or higher, or Duolingo 135 or higher. Tests must be taken by December of your final school year and self-reported on the UC application no later than January; admitted students whose native language is not English may have to take UCLA's English as a Second Language Placement Examination";

const UG_ACADEMIC =
  "Academic requirements: a secondary school completion certificate that admits you to university in your own country, plus UC's 15 year-long college-preparatory courses (2 years of history, 4 of composition and literature in your language of instruction, 3 of mathematics, 2 of laboratory science, 2 of a second language, 1 of visual and performing arts and 1 more from these areas) with at least a 3.4 GPA for international and other non-California applicants. Admission is highly selective and based on comprehensive review of 13 faculty-approved criteria, including the rigour of your school programme, special talents or achievements and your answers to the Personal Insight Questions; UCLA reports a 4.0 average unweighted GPA for fall 2025 admitted first-years. External exam results such as GCSE/IGCSE, A-levels or national board exams are reported in the application's International Exams section";

const ENGINEERING_ROUTE = (major: string, switchGpa: string, extra = "") =>
  `School and admission route: Henry Samueli School of Engineering and Applied Science. List ${major} as your major on the UC application; the School of Engineering reviews engineering applicants itself and there is no supplemental application (you may also apply as Undeclared Engineering). Moving into ${major} after enrolling in another major is competitive and not guaranteed: students must complete engineering preparatory courses at UCLA and need at least a ${switchGpa} preparatory GPA${extra}, and junior transfer students cannot change into engineering`;

const COLLEGE_ROUTE = (dept: string, extra: string) =>
  `School and admission route: College of Letters and Science, ${dept}. For first-year applicants to the College, the major you choose neither helps nor hurts your chances (it is not considered in review, and many students apply as undeclared). ${extra}`;

export const uclaPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "ucla-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Computer Science, from the Samueli School of Engineering, is built for students who want professional training in computing without a heavy focus on hardware. After a lower-division base of programming, computer organisation, calculus, linear algebra, discrete structures and physics, students take operating systems, programming languages, algorithms and theory of computation, a probability course, seven computer science electives, science and technology courses and technical breadth. A software engineering or product design capstone finishes the degree, and the program is ABET-accredited.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/ComputerScienceBS",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Computer Science", "3.7", " (the level set for students admitted from fall 2025 onward), plus first-attempt grades of B- or better in Computer Science 31, 32 and 33"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science and Engineering",
    slug: "ucla-computer-science-and-engineering",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Computer Science and Engineering combines the Computer Science and Electrical and Computer Engineering departments to cover digital systems from both sides: electronic and logic design through VLSI concepts, machine-level programming, operating systems, networking and higher-level languages. Alongside 18 preparatory courses in programming, mathematics, physics and circuits, students complete ten required upper-division courses, probability, computer architecture and digital design labs, an electrical engineering elective, three computer science electives and technical breadth, ending with a major product design capstone.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/ComputerScienceandEngineeringBS",
    degree: "Bachelor of Science (BS) in Computer Science and Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Computer Science and Engineering", "3.7", " (the level set for students admitted from fall 2025 onward), plus first-attempt grades of B- or better in Computer Science 31, 32 and 33"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "ucla-electrical-engineering",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Electrical Engineering, from the Department of Electrical and Computer Engineering, spans the field's three main areas: signals and systems, circuits and embedded systems, and physical wave electronics. Nineteen preparatory courses in mathematics, physics, chemistry, programming and circuits lead to six required courses, six core courses chosen from a list spanning those areas, 12 units of electrical and computer engineering electives and technical breadth. Students finish with a two-quarter team capstone in which they design and present a project under realistic constraints.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/ElectricalEngineeringBS",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Electrical Engineering", "3.4"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "ucla-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's ABET-accredited BS in Mechanical Engineering, offered by the Department of Mechanical and Aerospace Engineering, covers thermodynamics, fluid mechanics, heat transfer, solid mechanics, mechanical design, dynamics, control, manufacturing and materials. After preparatory work in calculus, physics, chemistry and programming, students take 14 required courses, materials science and electrical engineering breadth, two major field electives and technical breadth. In the two-quarter capstone, teams propose, design, analyse and build a mechanical or electromechanical device.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/MechanicalEngineeringBS",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Mechanical Engineering", "3.7", " (the level set for students admitted from fall 2025 onward)"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bioengineering",
    slug: "ucla-bioengineering",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's ABET-accredited BS in Bioengineering trains engineers to work where biology meets engineering. Twenty preparatory courses span general and organic chemistry, life sciences, calculus and differential equations, physics, programming and an introductory bioengineering course. The major adds eight required bioengineering courses, six major field electives and technical breadth, which can be grouped into tracks such as biomedical devices or biomaterials and regenerative medicine. Teams then design and build bioengineering solutions in a capstone with written and oral presentations and a team competition.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/BioengineeringBS",
    degree: "Bachelor of Science (BS) in Bioengineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ROUTE("Bioengineering", "3.5"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Economics",
    slug: "ucla-business-economics",
    level: "Bachelor",
    field: "Business",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BA in Business Economics gives a business focus to economics rather than copying a business school degree, and is aimed at students heading for graduate study in business, economics or law. Nine preparation courses cover introductory economics, microeconomic theory, statistics for economists, calculus and two principles of accounting courses from the Anderson School of Management. The 15-course major adds macroeconomic theory, econometrics with lab, two courses from the Economics 106 series, an English composition course and five upper-division electives, of which up to three can be approved Anderson management courses.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/BusinessEconomicsBA",
    degree: "Bachelor of Arts (BA) in Business Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Economics",
        "Business Economics students are admitted as pre-majors. To enter the major you apply to the Department of Economics after at least one full-time term at UCLA and all nine preparation courses, with a C or better in each, at least a 3.0 GPA across the preparation courses and the department's required score; applications are accepted in the first three weeks of each quarter, must be made by the end of your eighth quarter, and meeting the minimums does not guarantee a place",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "ucla-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BA in Economics begins with six preparation courses: two introductory economics courses, microeconomic theory, statistics for economists and two quarters of calculus. Students then take 12 upper-division courses, including microeconomic and macroeconomic theory, econometrics with lab, either Economics 104 or 109D with its lab, and six electives, up to two of which can come from approved Anderson management courses. Strong students can join the honors program and write a two-quarter senior thesis.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/EconomicsBA",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Economics",
        "Economics students start as pre-majors. To enter the major you apply after at least one full-time term at UCLA and all preparation courses, with a C or better in each pre-major course and at least a 2.5 GPA across the economics and mathematics preparation; you must apply by the end of your eighth quarter, and repeating more than two pre-major economics courses means automatic denial",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Psychology",
    slug: "ucla-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BA in Psychology is the broadest of the department's three majors, covering the core areas of the discipline in breadth and depth. Seven preparation courses include introductory psychology, a two-quarter statistics and research methods sequence, and one course each in philosophy, life sciences, a mathematics or physical science, and computing or statistics. The major then requires five core courses chosen from the department's core list, a laboratory or fieldwork course and four upper-division electives, with an optional year-long honors thesis.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/PsychologyBA",
    degree: "Bachelor of Arts (BA) in Psychology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Psychology",
        "You first declare the Psychology pre-major (after earning a 2.9 GPA in at least one preparation course). Students who entered as first-years then apply for the major, competitively, after all seven preparation courses and by the end of fall quarter of their third year; a 2.9 GPA or higher in the preparation courses guarantees entry, and repeating more than two preparation courses means denial",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Biology",
    slug: "ucla-biology",
    level: "Bachelor",
    field: "Biology",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Biology, run by the Department of Ecology and Evolutionary Biology, stresses breadth across every level of biology, from molecules to ecosystems. Students complete the Life Sciences Core in biology, chemistry, physics, mathematics and statistics, then ten upper-division courses, two from each of five principles: evolution and genetics, information flow, structure and function, transformations of energy and matter, and systems. Field Biology and Marine Biology quarters offer off-campus research, and a Computing specialization is available. The degree prepares students for medicine, research and other careers.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/BiologyBS",
    degree: "Bachelor of Science (BS) in Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Ecology and Evolutionary Biology",
        "First-year applicants can choose Biology on the UC application; the Life Sciences Core in biology, chemistry, physics, mathematics and statistics is completed in the first two years before the upper-division major courses",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Political Science",
    slug: "ucla-political-science",
    level: "Bachelor",
    field: "Political Science",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BA in Political Science looks at how political processes and institutions work in different national and cultural settings, how states interact, how relations between citizens and governments change, and how the quality of political life is judged. Preparation is a statistics course plus four introductory courses chosen from political theory, world politics, formal and game-theoretic models, American politics and comparative politics. Students then take ten upper-division political science courses, which they can shape toward the liberal arts, graduate study, public administration or law.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/PoliticalScienceBA",
    degree: "Bachelor of Arts (BA) in Political Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Political Science",
        "Everyone enrols as a Political Science pre-major and petitions to enter the major after finishing the five preparation courses, which must be completed with a 2.0 GPA before reaching 135 units",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics and Data Science",
    slug: "ucla-statistics-and-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Statistics and Data Science introduces the practice of statistics to students heading for graduate study or jobs in industry and government. Preparation covers calculus, multivariable calculus, linear algebra and statistical programming. The major has 13 courses: nine required courses (the Statistics 100A-C, 101A-C and 102A-C sequences) in probability and mathematical statistics, data analysis and statistical modelling, and statistical computing, plus four electives from statistics or advanced mathematics. Students learn to turn research questions into models, run reproducible analyses and explain results to non-specialists, and the department recommends pairing the degree with an applied minor.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/StatisticsandDataScienceBS",
    degree: "Bachelor of Science (BS) in Statistics and Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Statistics and Data Science",
        "Admitted first-years can start as Statistics and Data Science pre-majors and declare the major after completing all preparation courses with grades of C or better and an overall GPA of at least 2.5, no later than the end of fall quarter of their junior year",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Cognitive Science",
    slug: "ucla-cognitive-science",
    level: "Bachelor",
    field: "Cognitive Science",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Cognitive Science, offered by the Department of Psychology, studies intelligent systems, both human and artificial. It builds on psychology but draws heavily on cognitive psychology, computer science and mathematics. Twelve or thirteen preparation courses cover psychology, research methods and statistics, programming, calculus, philosophy, life sciences and a choice of chemistry, linguistics or physics. Upper-division work includes three required psychology courses, one further course from a list of labs and artificial intelligence, five electives, four computing courses, two psychology electives and a capstone term in the junior or senior year.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/CognitiveScienceBS",
    degree: "Bachelor of Science (BS) in Cognitive Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Psychology",
        "You declare the Cognitive Science pre-major after earning a 2.9 GPA in at least one preparation course. Students who entered as first-years then apply for the major, competitively, after all preparation courses (C or better in each) and by the end of fall quarter of their third year, with at least a 2.9 GPA in the preparation coursework",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Neuroscience",
    slug: "ucla-neuroscience",
    level: "Bachelor",
    field: "Neuroscience",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's interdepartmental BS in Neuroscience starts with the Life Sciences Core in biology, chemistry, physics and mathematics. The major has ten courses (about 43 units): five required core courses (the three-part Neuroscience M101A-C sequence, Neuroscience 102 and biochemistry), then one elective from each of three areas: molecular, cell and developmental neuroscience; behavioural and cognitive neuroscience; and systems and integrative neuroscience. A research capstone, through a lab course, two quarters of supervised research or a team project, completes the degree, and an honors thesis option is available.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/NeuroscienceBS",
    degree: "Bachelor of Science (BS) in Neuroscience",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Undergraduate Interdepartmental Program for Neuroscience",
        "First-year applicants can choose Neuroscience on the UC application; the Life Sciences Core in biology, chemistry, physics and mathematics is completed before the upper-division major courses",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mathematics",
    slug: "ucla-mathematics",
    level: "Bachelor",
    field: "Mathematics",
    duration: "4 years full-time (at least 180 quarter units including general education)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BS in Mathematics is designed for students whose main interest is mathematics itself. Ten preparation courses cover single and multivariable calculus, linear algebra, differential equations, programming, physics and two electives. The major then requires 12 upper-division courses: abstract algebra, linear algebra, differential geometry, real analysis and complex analysis, plus at least five electives. An honors program asks for an approved seminar or original research project and a 3.6 GPA in advanced mathematics, and a Computing specialization is also offered.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/MathematicsBS",
    degree: "Bachelor of Science (BS) in Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      COLLEGE_ROUTE(
        "Department of Mathematics",
        "First-year applicants who choose Mathematics are automatically admitted to the pre-major. You petition for the major after the six-course calculus, linear algebra and differential equations sequence, with a C or better in each, at least a 2.5 GPA in the calculus sequence, one full-time term at UCLA and fewer than 160 units",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Film and Television",
    slug: "ucla-film-and-television",
    level: "Bachelor",
    field: "Film and Media",
    duration: "4 years full-time (about two years of general studies followed by two years of major coursework)",
    tuitionNote: UG_TUITION,
    description:
      "UCLA's BA in Film and Television, from the School of Theater, Film and Television, helps students develop a personal creative vision within a liberal arts education. Courses cover film and television history and theory, critical thinking, animation, screenwriting and the basics of film, video and television production. After preparation courses, students take seven required courses, a cinema and media studies elective and a capstone internship, then 20 units of advanced work in one area: animation, cinema and media studies, cinematography, documentary, narrative directing or screenwriting.",
    officialProgramUrl: "https://catalog.registrar.ucla.edu/major/2026/FilmandTelevisionBA",
    degree: "Bachelor of Arts (BA) in Film and Television",
    intake: UG_INTAKE,
    applicationDeadline: `${UG_DEADLINE}. Film and Television also needs a first-year supplemental application, due 7 December 2026 at 11:59 pm Pacific time`,
    admissionRequirements: [
      "School and admission route: School of Theater, Film and Television, Department of Film, Television, and Digital Media. Film and Television must be your first-choice major on the UC application (an alternate-major choice is not reviewed), admission is highly competitive and limited, and new students start in fall only. After submitting the UC application you complete the department's online supplemental application (US$50 fee) using your UC Application ID: a personal essay, a life challenge essay, a critical or creative writing sample, a video interview of up to 3 minutes, two letters of recommendation and unofficial transcripts. Prior film experience is not required, and films, reels and links are not accepted",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },
];
