import type { Program } from "../../programs";

// Stanford University: 8 undergraduate majors for fall 2027 first-year entry and 7 full-time graduate programmes on
// the Stanford, California campus. Sources (viewed 12 November 2026): Office of Undergraduate Admission first-year
// requirements and deadlines, Regular Decision and Restrictive Early Action, standardized testing and international
// applicant pages (admission.stanford.edu/apply/first-year/index.html, /apply/first-year/decision_process.html,
// /apply/first-year/testing.html, /apply/international/index.html), the Financial Aid Office 2026-27 undergraduate and
// graduate student budgets (financialaid.stanford.edu/undergrad/budget/index.html and /grad/budget/index.html), the
// Stanford Bulletin 2026-27 tuition table and undergraduate major policy (bulletin.stanford.edu/academic-polices/
// tuition-fees/tuition and /academic-polices/degree-requirements/undergraduate-major), Student Services 2026-27
// graduate and professional tuition rates (studentservices.stanford.edu/tuition-rates), Stanford Bulletin programme
// pages (bulletin.stanford.edu/programs/CS-BS, EE-BS, ME-BS, MGTSC-BS, ECON-BA, SYMBO-BS, DATSC-BS, HUMBI-BA, CS-MS,
// EE-MS, ME-MS, MGTSC-MS and STATS-MS), Graduate Admissions eligibility, test score and application fee pages and the
// Explore Graduate Programs list with autumn 2027 deadlines and GRE policies (gradadmissions.stanford.edu/apply/
// eligibility, /apply/test-scores, /apply/application-fee and applygrad.stanford.edu/portal/explore-programs), the
// Computer Science graduate deadlines and application checklist pages (cs.stanford.edu/admissions-graduate-application-
// deadlines and /admissions/graduate-application-checklists), Electrical Engineering MS admissions and application
// instructions (ee.stanford.edu/admissions/ms and /admissions/required-materials), Mechanical Engineering master's
// admissions (me.stanford.edu/academics-admissions/graduate-programs/masters-program/masters-admissions), Management
// Science and Engineering admission (msande.stanford.edu/academics-admissions/graduate/how-apply), Statistics graduate
// admissions and MS admissions FAQ (statistics.stanford.edu/graduate-admissions and /msadmissions/ms-admissions-faq),
// and Stanford Graduate School of Business MBA and MSx pages on deadlines, cost of attendance, tuition and financial
// aid, GMAT/GRE/EA, English proficiency, education, application fee, professional experience and curriculum
// (gsb.stanford.edu/programs/mba/... and /programs/msx/...). Costs are in US dollars. Stanford is private and charges
// one tuition rate to all students in a programme, so international students pay the same tuition as US students.

const UNIVERSITY = {
  universitySlug: "stanford-university",
  universityName: "Stanford University",
  country: "United States",
  language: "English",
  campus: "Stanford, California",
  programType: "Full-time",
} as const;

// Bulletin 2026-27: undergraduate full-time tuition 22,577 per quarter (x3 = 67,731). FAO 2026-27 standard student
// budget: tuition 67,731, housing and food 22,944, student fees allowance 2,610, books and supplies 855, personal
// 3,405, travel varies; total 97,545. New students add New Student Orientation Fee 525 and Document Fee 250.
// FAO assumes international students take Cardinal Care and adds it to their budget (8,808 for 2026-27 in the
// graduate budget table).
const UG_TUITION =
  "2026-27: Stanford charges every full-time undergraduate the same tuition, US$22,577 a quarter or US$67,731 for the three-quarter academic year (autumn, winter and spring). The Financial Aid Office's 2026-27 standard budget for an undergraduate is US$97,545 before travel: US$67,731 tuition, US$22,944 housing and food, a US$2,610 student fees allowance (campus health service fee, student activities fee, house dues and similar charges), US$855 for books and supplies and US$3,405 for personal expenses, with travel to and from campus added separately because it varies. New first-year students also pay a one-time US$525 New Student Orientation Fee and US$250 Document Fee. Every student must have health insurance, and the Financial Aid Office assumes international students will take Stanford's Cardinal Care plan and adds its cost to their budget (Cardinal Care is listed at US$8,808 for 2026-27 in the university's graduate budget). Financial aid: Stanford meets the full demonstrated need of every admitted student who applied for aid during the admission process, whatever their citizenship, but for international citizens a request for aid is a factor in the admission decision, which makes the process more selective; international students who say they will not apply for aid and are then admitted cannot apply for aid at any point in their four years. Stanford does not offer merit scholarships apart from a limited number of athletic scholarships. 2027-28 rates had not been published when we checked";

const UG_INTAKE =
  "Autumn quarter only (fall 2027 first-year entry; Stanford does not admit first-year students for winter or spring)";

const UG_DEADLINE =
  "Fall 2027 entry, through the Common Application, with a non-refundable US$100 application fee or a fee waiver request. Stanford has no Early Decision. Restrictive Early Action (non-binding) closed on 1 November 2026 (15 October for applicants sending an optional arts portfolio), with decisions by mid-December, so it had passed when we checked. Regular Decision: submit the Common App by 5 January 2027 (or by 5 December 2026 if you are sending an optional arts portfolio, with portfolio materials by 10 December), and the remaining documents can follow up to 5 January. Missing-document notices go out by mid-February, the midyear transcript is due by 15 February 2027, decisions are released by early April, and admitted students reply by 1 May 2027. Under Stanford's REA policy, early applicants may not also apply early (EA, REA, ED or early notification) to another private college or to a binding early plan at a public university, though non-binding early plans at public, rolling, non-US and some scholarship programmes are allowed. Students may apply to Stanford no more than three times in total";

const UG_TESTING =
  "Testing: required. Stanford requires either the SAT or the ACT (it has no preference and no minimum score), so international applicants must sit one of them; for Regular Decision the latest sittings Stanford can use are in December, and scores from the last five years are recommended. You self-report your highest scores in the application; Stanford superscores the SAT and accepts the ACT Superscore Composite, and admitted students who enrol must then send official scores for every sitting they reported. You must also self-report all AP exam scores you have received, even for self-study. For the Class of 2029, which applied when testing was optional, the middle 50% of submitted scores were 1520-1570 on the SAT and 34-36 on the ACT. IB Diploma students outside the US need their school to send predicted IB marks, and students in the British system need their school to send GCSE results and predicted A level grades (Stanford generally expects at least three full A levels)";

const UG_ENGLISH =
  "English proficiency: Stanford does not require TOEFL, IELTS, Duolingo or any other English test from undergraduate applicants, although you may self-report a score if you wish. Stanford says fluency in English is a prerequisite for admission, and English tests cannot replace the SAT or ACT requirement. Transcripts and teacher recommendations not in English must be translated into English by a school official or teacher (not by you), with the originals also submitted";

const UG_ACADEMIC =
  "Application materials (identical for international and US applicants): the Common Application with Stanford's own questions and essays, the School Report form and a counsellor letter, letters from two academic teachers, official transcripts or academic results sent by your school, and the midyear transcript. There are no required courses or minimum grades, and no preferred curriculum (A levels, IB, AP or national systems are all fine); Stanford recommends completing the coursework needed to enter a bachelor's programme in your own country and reviews you in the context of your school and country, so there is no need to convert marks to a US GPA. You must hold your secondary school diploma by the time you enrol, and if you have already earned credit at a degree-granting programme after leaving school you must apply as a transfer student. You apply to Stanford as a whole, not to a major: you may list intended majors but are not bound by them, and you declare your major by the end of your sophomore (second) year. Stanford currently cannot process applications from people located in Iran or ordinarily resident there, following a US Treasury licence change on 24 August 2026";

const UG_MAJOR = (major: string, extra: string) =>
  `Admission route: there is no separate admission to ${major}. Admitted students choose it by declaring the major in Axess by the end of the sophomore year, after agreeing a programme plan with the department. ${extra}`;

// Bulletin / Student Services 2026-27 graduate tuition per quarter: Graduate 8-10 units 14,180, 11-18 units 21,815,
// each unit above 18 1,454; Graduate Engineering 8-10 units 15,100, 11-18 units 23,239, each unit above 18 1,549.
// FAO 2026-27 graduate standard budget (single, on campus), academic year: rent 20,055, food 7,710, personal 9,135,
// transportation 1,980, books 585, campus health service fee 843, Cardinal Care 8,808 = 49,116; 12 months 61,142.
const GRAD_ENG_TUITION =
  "2026-27: Graduate Engineering tuition, which is the same for international and US students, is US$23,239 a quarter for 11-18 units (US$69,717 for autumn, winter and spring), US$15,100 a quarter for a reduced 8-10 unit load and US$1,549 for each unit above 18";

const GRAD_LIVING =
  "The Financial Aid Office's 2026-27 standard budget for a single graduate student living on campus adds US$49,116 for the nine-month academic year on top of tuition: US$20,055 rent, US$7,710 food, US$9,135 personal expenses, US$1,980 transport, US$585 books and supplies, the US$843 Campus Health Service Fee and US$8,808 for Cardinal Care health insurance (US$61,142 over 12 months including summer). Living off campus typically costs 10% to 40% more. Tuition usually rises each year, and 2027-28 rates had not been published when we checked";

const GRAD_ENGLISH =
  "English proficiency (Stanford Graduate Admissions): you do not need a test if you are a US citizen or permanent resident, if English is your first language, if you earned a bachelor's, master's or doctorate from a university where all instruction was in English, or if you have at least two consecutive years of full-time work or study in English within the past ten years. Otherwise you must submit an official TOEFL iBT or IELTS Academic score with the application. The university minimum for admission consideration is TOEFL 90 (tests taken before 21 January 2026), TOEFL 4.5 on the new scale (tests taken on or after 21 January 2026) or IELTS 7; individual programmes may set a higher bar. Incoming students who scored below TOEFL 109 (or 5.5 on the new scale) or IELTS 8 must take Stanford's English Placement Test before their first quarter. Scores are valid for two years, so for autumn 2027 entry the test must be taken on or after 1 September 2024. TOEFL MyBest scores are accepted; send TOEFL scores to institution code 4704 and IELTS scores by e-delivery to the account \"Stanford University Graduate\"";

const GRAD_MINIMUM =
  "Stanford Graduate Admissions minimums: a US bachelor's degree or its international equivalent from a college or university of recognised standing, held before you enrol (Stanford suggests the WES degree equivalency tool if you are unsure, and admitted students with degrees from outside the US may be asked for a WES evaluation after accepting). Apply online with the non-refundable US$125 application fee; fee waiver requests must be made at least 10 business days before your programme's deadline. You may apply to only one Stanford graduate degree programme per year, apart from limited exceptions such as applying to one department and one professional school. Uploaded unofficial transcripts are used for review, and official transcripts are requested only after you accept an offer. Stanford currently cannot process applications from people located in or ordinarily resident in Iran following a US Treasury licence change on 24 August 2026. The university-wide Knight-Hennessy Scholars programme (up to three years of full funding, open to all nationalities) had a 6 October 2026 deadline for the 2027 cohort, which had passed when we checked";

export const stanfordUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "stanford-bs-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (180 units for the degree, at least 93 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Stanford's Computer Science BS, offered in the School of Engineering, aims to give students breadth across the discipline and the ability to apply its core processes of theory, abstraction, design and implementation to real problems. Students build a mathematical base of at least 26 units (calculus or AP credit plus two maths electives), at least 11 units of science and 10 units of engineering fundamentals, and take a Technology in Society course. The CS core then moves from programming techniques and the mathematical foundations of computing to automata and complexity theory, systems programming, computer architecture, algorithm analysis and artificial intelligence. Each student chooses a track: Artificial Intelligence, Computational Biology, Computer Engineering, Human-Computer Interaction, Information, Systems, Theory, Visual Computing, an Unspecialized track or an individually designed track, and some tracks can count one approved humanities course as a track elective. The major ends with a Writing in the Major course and a senior capstone, and an honours option is available. Stanford says the programme prepares graduates for careers in industry, government and law and for graduate study.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/CS-BS",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Computer Science",
        "Students without prior programming experience are advised to start with CS106A, and AP calculus, physics and chemistry credit can count toward some requirements if approved by the School of Engineering"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "stanford-bs-electrical-engineering",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "Typically 4 years full-time (180 units for the degree, at least 100 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "The Electrical Engineering BS adds a grounding in electrical engineering to Stanford's broad liberal education and teaches students to design and build systems that meet real needs. It starts with at least 40 units of mathematics and science (including probability or statistics) plus a Technology in Society course, then at least 57 engineering units: engineering fundamentals, a core in electronics, information systems and digital systems, and at least 31 units of discipline courses and electives. Students have wide freedom beyond the core, choosing among hardware and software, information systems and science, and physical technology and science, or multidisciplinary areas such as bio-electronics and bio-imaging, energy and environment, and music. A Writing in the Major, design and capstone component completes the degree, and all major courses must be taken for a letter grade where offered. The department says the programme prepares students for a broad range of industrial and government careers and for professional and academic graduate study.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/EE-BS",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Electrical Engineering",
        "AP Calculus can satisfy part of the mathematics requirement under School of Engineering rules"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "stanford-bs-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (180 units for the degree, at least 116 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Stanford's Mechanical Engineering BS combines a rigorous education in mathematics, science and engineering with hands-on design, preparing students to analyse and design a wide range of mechanical systems. The programme requires at least 45 units of mathematics and science (at least 24 in mathematics, with ordinary differential equations and linear algebra or statistics, and at least 20 in science, including mechanics and electricity and magnetism), a Technology in Society course and engineering fundamentals. The mechanical engineering depth core then covers four areas: computational and experimental synthesis; design and manufacturing; structures, dynamics and control; and thermodynamics, fluids and heat transfer. Along the way students learn to build analytical and computational models of real systems, run experiments and interpret the results, and design to engineering specifications. The department says its recent graduates work in advanced manufacturing, aviation, biomechanics, data science, energy, healthcare and medical devices, renewable energy, robotics and transportation, or go on to graduate study.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/ME-BS",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Mechanical Engineering",
        "Courses must be taken in prerequisite order, and the department publishes a programme sheet, four-year plans and a flowchart to help students plan. A 5 on AP Physics C exams can satisfy the matching physics requirement"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Management Science and Engineering",
    slug: "stanford-bs-management-science-engineering",
    level: "Bachelor",
    field: "Management Science and Engineering",
    duration: "Typically 4 years full-time (180 units for the degree, at least 95 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Management Science and Engineering (MS&E), in the School of Engineering, teaches engineering systems analysis for planning, designing and running complex economic and technical management systems. After foundations in calculus and linear algebra, students take a core in mathematical modelling, systems analysis, organisation theory, optimisation, probability, statistics, ethics, computer science and economics, which leads to a senior capstone project. They then build depth in the department's three application areas: Finance and Decision (financial and strategic planning), Operations and Analytics (algorithms, theory and the design of manufacturing, production and service systems) and Organizations, Technology, and Policy (organisations and public policy, especially technology issues). Stanford points MS&E graduates toward investment banking, management consulting, and facilities and process management, and toward graduate school in industrial engineering, operations research, business, economics, law, medicine or public policy.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/MGTSC-BS",
    degree: "Bachelor of Science (BS) in Management Science and Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR("Management Science and Engineering", "The major also has a capstone experience in the senior year"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "stanford-ba-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (180 units for the degree, at least 80 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "The Economics BA, in the School of Humanities and Sciences, introduces micro- and macroeconomic theory, teaches students to think and write clearly about economic problems and policy, and trains them in the main tools of economic analysis. Every student completes a core sequence for a letter grade (from autumn 2024, with at least a C in each core course), followed by five field courses and 20 to 27 units of economics electives; up to 10 elective units can come from approved upper-level mathematics, statistics and computer science courses or programmes such as Bing Overseas Study, Stanford in Washington and Stanford in New York, and strong students can take 200-level graduate courses with permission. There is no required track, but the department groups its courses by focus area. The major includes a Writing in the Major requirement and a two-part capstone: an electronic portfolio of work in the junior year, then either the Economic Policy Seminar in the final year or an honours thesis written with a faculty adviser. Stanford says the degree suits careers in government and private enterprise and later study in professional schools or economics. The department does not give credit for internships.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/ECON-BA",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Economics",
        "Some core and capstone courses must be taken at Stanford in California, and the honours thesis course is open only to students accepted to the Economics Honors Program"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Symbolic Systems",
    slug: "stanford-bs-symbolic-systems",
    level: "Bachelor",
    field: "Cognitive Science",
    duration: "Typically 4 years full-time (180 units for the degree, at least 70 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Symbolic Systems is Stanford's interdisciplinary programme on how natural and artificial systems, from computer programs and natural languages to the human mind and the internet, represent, process and act on information. The curriculum combines humanistic approaches with current computing science and technology: majors take courses in cognitive science, computer programming, logic and computational theory, probability, cognitive psychology, philosophy of mind, linguistics and artificial intelligence. Each student then completes a concentration, with options including Applied Logic, Artificial Intelligence, Biomedical Applications, Cognitive Science, Computational Foundations, Computational Social Science, Computer Music, Decision Making and Rationality, Human-Centered Artificial Intelligence, Human-Computer Interaction, Learning, Mathematical Foundations, Media and Communication, Natural Language, Neurosciences, Philosophical Foundations or an individually designed plan, and finishes with a capstone. Stanford notes that the major is on the US Department of Homeland Security's STEM designated degree list. It prepares students for public and private sector careers, especially in the human-facing side of technology, and for research in the cognitive and information sciences.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/SYMBO-BS",
    degree: "Bachelor of Science (BS) in Symbolic Systems",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Symbolic Systems",
        "Once the declaration is approved, the programme director and associate director act as major advisers, and each student must also confirm a concentration adviser (by autumn of the junior year at the latest) and describe how they plan to complete the capstone"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science",
    slug: "stanford-bs-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "Typically 4 years full-time (180 units for the degree, at least 65 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Stanford's Data Science BS, sponsored jointly by the departments of Statistics, Mathematics, Computer Science and Management Science and Engineering, gives students an analytical and quantitative base for data-driven problems in science, industry and society, and students take courses in all four departments. The core covers the mathematics underlying the mathematical sciences together with computation, optimal decision-making, probabilistic modelling and statistical inference. Every student then picks a subplan: Mathematics and Computation for more depth in the core subjects, or one of three application areas, Biology and Medicine, Computational Neuroscience or Quantitative Finance. The major includes a capstone experience. Stanford describes it as strong preparation for graduate study in quantitative fields such as computer science and statistics, and for quantitative careers in areas such as information technology and finance.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/DATSC-BS",
    degree: "Bachelor of Science (BS) in Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Data Science",
        "The programme sets early mathematics, statistics and data science coursework that students should complete or be taking when they declare; check the Bulletin's admissions and declaration section for the current list"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Human Biology",
    slug: "stanford-ba-human-biology",
    level: "Bachelor",
    field: "Human Biology",
    duration: "Typically 4 years full-time (180 units for the degree, at least 81 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "Human Biology studies people from biological, behavioural, social and cultural perspectives at once. Majors begin with the Human Biology core sequence, in which two series taken side by side, normally starting in autumn of the sophomore year, introduce the biological and social sciences and the links between them (a C- or better is needed in each core course), and they also complete a statistics requirement. Each student then designs an individual course of study around a personal Area of Concentration, choosing 20-25 units of breadth courses, 18-25 units of depth courses (5-7 courses) and 9 units of electives with approval from the programme's advising team, and finishes with a capstone. On the BA option most coursework must be in the social sciences and humanities, with a minority in the natural sciences. Stanford says the degree suits many paths, including graduate and professional school such as medicine, and advises planning early because the major requires 81 units.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/HUMBI-BA",
    degree: "Bachelor of Arts (BA) in Human Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR(
        "Human Biology",
        "Students who plan to apply to medical or other professional schools should check those schools' entry requirements early and plan courses with the Human Biology advisers"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "stanford-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "45 units; most students take six quarters, and only well-prepared students finish in one year",
    tuitionNote: `${GRAD_ENG_TUITION}. Half-time course and research assistantships give a tuition scholarship for 8-10 units a quarter plus a salary for about 20 hours of work a week, and many MS students hold them, but the Bulletin warns that MS students should not plan on being appointed. ${GRAD_LIVING}`,
    description:
      "The MS in Computer Science is a terminal professional degree in the School of Engineering; it does not lead to the PhD. Students complete 45 units, at least 36 of them letter-graded with a GPA of 3.0 or better. Foundations courses in logic, automata and computability, probability, algorithmic analysis, computer organisation and systems, and principles of computer systems can be waived with equivalent prior study, and at most 10 foundations units count toward the 45. Students must take a course with significant software implementation and three breadth courses from different areas: formal foundations, learning and modelling, systems, and people and society. The heart of the degree is a 21-unit depth specialisation in Artificial Intelligence, Computational Biology, Computer and Network Security, Human-Computer Interaction, Information Management and Analytics, Software Theory, Systems, Theoretical Computer Science or Visual Computing, plus technical electives. An MS with distinction in research adds three quarters of supervised half-time research and a publishable research report, and the department also runs joint MS/MBA and MS/JD programmes.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/CS-MS",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Autumn quarter only (one admission cycle a year)",
    applicationDeadline:
      "Autumn 2027 entry: the application opened on 15 September 2026 and closes on 8 December 2026, with decisions in March 2027. Deadlines are final and late applications are not accepted. The department suggests taking TOEFL or IELTS by October 2026 so scores arrive in time. You may apply to the MS or the PhD in Computer Science, not both",
    admissionRequirements: [
      "Application materials: the online application, a statement of purpose, exactly three letters of recommendation submitted online (at least two from academic sources is recommended; Interfolio letters are not accepted), a resume or CV listing any publications, the department's supplemental form, and unofficial transcripts from every institution attended full-time for a year or more. GRE scores are not required and are not considered",
      `${GRAD_ENGLISH}. Computer Science uses the university minimums`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "stanford-ms-electrical-engineering",
    level: "Master",
    field: "Electrical Engineering",
    duration: "45 units, coursework only (no thesis); typically 1.5-2 years (about five quarters) full-time",
    tuitionNote: `${GRAD_ENG_TUITION}. ${GRAD_LIVING}`,
    description:
      "Stanford's MS in Electrical Engineering is a terminal, coursework-based degree that prepares students for advanced professional practice, built around an individual programme each student plans with a faculty adviser and submits for approval in the first quarter. The 45 units include a 12-unit depth in one of five areas: Circuits; Software and Hardware Systems; Communications and Networking; Physical Technology and Science; or Signal Processing, Control and Optimization (all depth courses at the 200 level or above and at least six units at the 300 level). Students add nine units of breadth from other areas, 15 units of technical courses in engineering, natural sciences, mathematics or statistics, and nine further units that can include independent study, curricular practical training or design and entrepreneurship courses. There is no thesis, and all requirements must be completed within three years. Most courses are not offered in summer. Students who want a PhD must apply separately through the PhD admission process.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/EE-MS",
    degree: "Master of Science (MS) in Electrical Engineering",
    intake: "Autumn quarter only (applications reviewed once a year)",
    applicationDeadline:
      "Autumn 2027 entry: apply by 1 December 2026 at 11:59 pm Pacific time (the application opened in mid-September 2026). Decisions are emailed in late February 2027, and admitted students must respond by 15 April 2027",
    admissionRequirements: [
      "Applicants usually hold a BS or BA in electrical engineering, another branch of engineering, physics, mathematics or a related science, with preparation in circuits, digital systems, fields, lab work, mathematics and physics; capable students without that background may also be considered. Application materials: unofficial transcripts from every college attended, a statement of purpose of up to two single-spaced pages, and exactly three letters of recommendation (academic references are strongly preferred). The GRE is not required",
      `${GRAD_ENGLISH}. Electrical Engineering uses the university minimums`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "stanford-ms-mechanical-engineering",
    level: "Master",
    field: "Mechanical Engineering",
    duration: "45 units, non-thesis",
    tuitionNote: `${GRAD_ENG_TUITION}. ${GRAD_LIVING}`,
    description:
      "The MS in Mechanical Engineering is a non-thesis degree designed mainly for students heading into industry as practising engineers, with wide freedom to combine lecture and project-based courses. Students take at least two mathematics courses chosen from linear algebra, partial differential equations, numerical analysis and statistics, and build a depth cluster of at least nine units (two or three related courses) in one area: Automatic Controls, Biomechanical Engineering, Design Methodology, Energy and Transport Sciences, Fluid Mechanics, Manufacturing and Product Realization, Materials and Stress Analysis, Mechatronics, Reactive and Ionized Gas Dynamics, Robotics and Kinematics, or Solid Mechanics. Two breadth courses from graduate-level ME areas outside the depth widen their grounding. The department highlights its emphasis on human-centred design, multidisciplinary study and sustainability, and US News ranked Stanford's graduate mechanical engineering programme second in its 2026 rankings.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/ME-MS",
    degree: "Master of Science (MS) in Mechanical Engineering",
    intake: "Autumn quarter for full-time applicants (winter and spring starts are only for the part-time Honors Cooperative Program)",
    applicationDeadline:
      "Autumn 2027 entry: the complete application, including official TOEFL scores if required, unofficial transcripts and all recommendation letters, must be received by 1 December 2026",
    admissionRequirements: [
      "A completed or in-progress Bachelor of Science in engineering, physics or a comparable science. Anyone who has completed or enrolled in a master's in mechanical engineering or a closely related field (or an international equivalent) is not eligible for the MS. Application materials: the online application and fee, a statement of purpose of up to two single-spaced pages, the MS Supplementary Information form (short answers on your goals, motivation, an independent project you led and a setback you learned from), a resume or CV, three letters of recommendation (at least one academic, two preferred) and unofficial transcripts from every college attended for a year or more. GRE scores are not considered",
      `${GRAD_ENGLISH}. Mechanical Engineering uses the university minimums`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Management Science and Engineering",
    slug: "stanford-ms-management-science-engineering",
    level: "Master",
    field: "Management Science and Engineering",
    duration: "45 units (courses numbered 100 and above)",
    tuitionNote: `${GRAD_ENG_TUITION}. ${GRAD_LIVING}`,
    description:
      "Stanford's MS in Management Science and Engineering (MS&E) combines breadth across the department with depth in one area, over at least 45 units of courses numbered 100 or higher. The standard depth areas are Data, AI, and Decisions (data and decision sciences, machine learning and AI for operational and strategic decisions); Financial Analytics (quantitative methods and finance fundamentals with team projects and case studies, for careers such as risk, investment management and fintech); Technology and Engineering Management (product and project management, consulting and entrepreneurship); and Technology Policy (public policy and corporate strategy on technology issues, grounded in microeconomics and modelling). Students can also design their own depth, for example in Computational Social Science, Decision and Risk Analysis, Energy and Environment, or Health Systems Modeling.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/MGTSC-MS",
    degree: "Master of Science (MS) in Management Science and Engineering",
    intake: "Autumn quarter (full-time)",
    applicationDeadline:
      "Autumn 2027 entry: apply by 1 December 2026. The GRE and any English test must be taken by (not received by) the deadline, and recommenders can upload letters until one week after it",
    admissionRequirements: [
      "Application materials: a statement of purpose of no more than two single-spaced pages, three letters of recommendation, scanned transcripts (with grading scale and degree certificate where needed), a resume or CV, at least one selected academic interest and the US$125 fee; an abstract of a paper is optional. An official GRE General Test score is required from every applicant regardless of education or experience, although you may request an exemption for hardship (the department warns that applicants without a quantitative degree may need a score to be competitive)",
      `${GRAD_ENGLISH}. MS&E sets a higher bar than the university: its minimum expected score is TOEFL 100 or IELTS 7.5`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics (including Data Science track)",
    slug: "stanford-ms-statistics",
    level: "Master",
    field: "Statistics",
    duration: "45 units; usually 5 quarters (autumn to spring of year one, then autumn and winter of year two)",
    tuitionNote:
      "2026-27: Statistics is in the School of Humanities and Sciences and charges the regular graduate rate, the same for international and US students: US$21,815 a quarter for 11-18 units or US$14,180 for 8-10 units. The department says most MS students take about 10 units a quarter and finish in five quarters on the 8-10 unit rate, which at 2026-27 prices is about US$70,900 in total tuition, and it expects graduate tuition to rise roughly 3.5% a year. There is no financial aid, scholarship or RA/TA funding for Statistics master's students, who must fund the whole degree themselves. Admitted students who need a visa must show funding for at least one year of tuition at the 11-18 unit rate (US$65,445 for 2026-27) plus living costs. The Financial Aid Office's 2026-27 standard budget for a single graduate student on campus adds US$49,116 for the academic year (rent US$20,055, food US$7,710, personal US$9,135, transport US$1,980, books US$585, Campus Health Service Fee US$843 and Cardinal Care insurance US$8,808). 2027-28 rates had not been published when we checked",
    description:
      "Stanford's MS in Statistics and its Data Science track (a subplan of the same degree, shown as Data Science on the record) are terminal degrees preparing students for careers in statistics, data science and related fields; they are not routes into the Statistics PhD. Students complete 45 units, mostly at the 200 level or above, including letter-graded core requirements in probability, stochastic processes, theoretical statistics, applied statistics and linear algebra, plus electives. Recommended preparation includes advanced undergraduate linear algebra and probability, introductory stochastic processes and numerical methods, and programming in Python and C/C++. The Data Science track is designed to match the data science track in ICME, with room to lean computational or theoretical, and it is not offered part-time or to coterminal students. The department says graduates work as data scientists, research scientists, machine learning engineers, software engineers, product managers, quantitative analysts and statisticians, mostly in technology and finance.",
    officialProgramUrl: "https://bulletin.stanford.edu/programs/STATS-MS",
    degree: "Master of Science (MS) in Statistics (optionally with the Data Science subplan)",
    intake: "Autumn quarter only",
    applicationDeadline:
      "Autumn 2027 entry: apply by 7 January 2027 at 11:59 pm Pacific time for either the Statistics MS or the Data Science track (choose the Data Science specialisation in the application if you want it; you will not be considered for both). Applicants also applying to Knight-Hennessy Scholars had to submit by 1 December 2026. Decisions are sent by the end of March 2027, and late applications are not accepted",
    admissionRequirements: [
      "Preparation: multivariable calculus and linear algebra (MATH 51 level), programming (CS 106A level for Statistics, CS 106B for Data Science), intermediate statistics with multiple regression and ANOVA (STATS 191 level) and probability (STATS 117 level, or the more advanced STATS 118 for Data Science); prerequisite courses do not count toward the 45 units. Application materials: a statement of purpose of up to two single-spaced pages, three letters of recommendation (at least one from a faculty member at your last school if you studied full-time within five years) and transcripts. The GRE General Test is required (no subject test, and the GMAT is not accepted), with waivers only for people unable to test or holding a doctorate. There is no interview and no minimum GPA or GRE. The department reports more than 700 applications a year for the two options combined and about 40 admissions, and it usually does not admit people who already hold a graduate degree in a related field",
      `${GRAD_ENGLISH}. Statistics uses the university minimum of TOEFL 90 or IELTS 7, but says successful applicants usually score TOEFL 100+ or IELTS 7.0+`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MBA (Graduate School of Business)",
    slug: "stanford-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time",
    tuitionNote:
      "2026-27: MBA tuition is US$29,729 a quarter in the first year (US$89,187 for the year) and US$28,585 a quarter in the second year. The GSB's 2026-27 first-year cost of attendance for a single student is US$140,940: US$89,187 tuition, US$19,950 living expenses, US$22,152 housing, US$8,808 Cardinal Care medical insurance (included for every student) and the US$843 health fee (US$168,825 for a married student). The global experience requirement, typically US$4,000 to US$6,000, is extra. Admission is need-blind, and all MBA students with demonstrated need, whatever their citizenship, can receive need-based fellowships (which do not have to be repaid) plus loans; the average fellowship for the class of 2026 was about US$50,000 a year. Rates for the class entering in 2027 had not been published when we checked",
    description:
      "The Stanford GSB MBA is a two-year, full-time general management programme. The first year is mostly the core: Analytical Foundations (data and decisions, finance, financial accounting, microeconomics, and optimisation and simulation modelling), Leadership Foundations (the Leadership Laboratory in small squads, Leading with Values, managing groups and teams, and organisational behaviour) and Management Foundations courses in areas such as marketing. Some core courses come in different levels so students with different backgrounds can be placed appropriately, and every student completes a global experience requirement before winter of the second year. The second year is made up entirely of electives, seminars and courses elsewhere at Stanford, and students can pursue joint or dual degrees, including the MS in Computer Science/MBA, MS in Electrical Engineering/MBA, JD/MBA, MPP/MBA, MA in Education/MBA, MD/MBA and MS in Environment and Resources/MBA. The Center for Social Innovation and the Center for Entrepreneurial Studies offer further courses and activities.",
    officialProgramUrl: "https://www.gsb.stanford.edu/programs/mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Autumn 2027 (once a year)",
    applicationDeadline:
      "Rounds for entry in autumn 2027, each due at 4:00 pm Pacific time with letters of recommendation and fee: Round 1 closed on 9 September 2026 (decisions 9 December 2026); Round 2 is 6 January 2027 (decisions 1 April 2027); Round 3 is 7 April 2027 (decisions 27 May 2027). You may apply once per year in one round, and Stanford encourages Round 1 or 2. Need-based application fee waiver requests are due by 18 December 2026",
    admissionRequirements: [
      "A US bachelor's degree or equivalent, including three-year international bachelor's degrees; there is no minimum GPA. Upload transcripts (translated if not in English) with your application, and official ones are requested only after admission. The application fee is US$275 (US$100 for final-year undergraduates and those who moved straight into a graduate programme). The GSB reviews how you think, how you lead and how you see the world, and says calculus, statistics and microeconomics coursework strengthens your candidacy if you have not already taken it",
      "Test: GMAT (10th Edition or Focus Edition) or GRE is required, taken before the deadline of your round and valid on that date (for Round 2, taken on or after 6 January 2022). There is no minimum score and no preference between the tests; the Executive Assessment, LSAT and MCAT are not accepted, and interviews are not offered without a valid score. GMAT school code L9R-KW-09, GRE code 4704",
      "English proficiency (GSB): required unless your undergraduate or graduate university taught all classes exclusively in English; citizenship and work experience do not exempt you. Minimums: TOEFL iBT 100 (tests before 21 January 2026) or 5.0 (from 21 January 2026), IELTS Academic 7.0 or PTE Academic 68 (test-centre only). Scores must be from a single sitting (MyBest scores are not accepted), valid for two years and taken before the round deadline",
    ],
  },

  {
    ...UNIVERSITY,
    name: "MSx Master of Science in Management for Experienced Leaders (Graduate School of Business)",
    slug: "stanford-msx-management",
    level: "Master",
    field: "Management",
    duration: "1 year (12 months, four quarters) full-time, in person",
    tuitionNote:
      "2026-27: MSx tuition is US$154,828 for the four-quarter year. The GSB's estimated cost of attendance for the 12-month programme running July 2026 to June 2027 is US$221,190 for a single student: US$154,828 tuition, US$29,548 housing, a US$250 document fee, US$24,584 living expenses, US$10,866 Cardinal Care medical insurance and the US$1,114 health fee (US$258,342 for a married student, with extra allowances for children). Students of any citizenship can receive need-based GSB fellowships, and international students can borrow through lenders the GSB works with, although the school recommends checking home-country loans first. Working during the programme is not allowed. Costs for the cohort starting in 2027 had not been published when we checked",
    description:
      "The Stanford MSx is a 12-month, full-time, in-person Master of Science in Management for accomplished mid-career leaders; the GSB describes it as faster than a traditional MBA and more intensive than a part-time executive MBA. A class of about 80 students, with an average of 13 years of work experience, takes the core together in an MSx-only cohort, covering accounting, economics, finance, strategy, operations and leading with values, with negotiations, leadership, organisational behaviour, marketing and data and decisions also in the first two quarters. Electives start in the second quarter, and more than half of the programme is chosen from over 140 electives at the GSB and across Stanford's schools of law, medicine, engineering, education, humanities and sciences, and sustainability, as well as the d.school. Students also receive personal executive coaching, career services and a speaker series with leaders from Stanford and Silicon Valley.",
    officialProgramUrl: "https://www.gsb.stanford.edu/programs/msx",
    degree: "Master of Science (MS) in Management",
    intake: "Summer (the programme year runs July to June)",
    applicationDeadline:
      "MSx 2026-27 rounds, each due at 4:00 pm Pacific time: Round 1 closed on 8 October 2026 (decisions 9 December 2026); Round 2 is 6 January 2027 and Round 3 is 11 February 2027, both with decisions on 1 April 2027. A single joint application to both the MBA and MSx must be made in Round 2 (6 January 2027). You may apply once per year, and offers cannot normally be deferred",
    admissionRequirements: [
      "At least eight years of post-graduate professional work experience (the median is 13+ years, ranging from 8 to 30+). Application materials: education history and transcripts, a business resume of no more than two pages, details of each employer and your role, essays, and two letters of recommendation, preferably from people who have supervised your work. The application fee is US$275",
      "Test: a current GMAT, GRE or Executive Assessment score is required, with no waivers, no minimum and no preferred test; it must be taken before your round's deadline (for Round 2, on or after 6 January 2022). Joint MBA/MSx applicants need the GMAT or GRE, as the MBA does not accept the EA",
      "English proficiency (GSB): required unless your undergraduate or graduate university taught all classes exclusively in English; citizenship and work experience do not exempt you. Minimums: TOEFL iBT 100 (tests before 21 January 2026) or 5 (tests after that date), IELTS Academic 7.0 or PTE Academic 68 (test-centre only); the median TOEFL for the class of 2026 was 106. MyBest scores are not accepted, and scores are valid for two years",
    ],
  },
];
