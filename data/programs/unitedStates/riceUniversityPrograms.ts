import type { Program } from "../../programs";

// Rice University: 9 undergraduate majors for fall 2027 first-year entry (Computer Science BSCS, Electrical and
// Computer Engineering BSECE, Mechanical Engineering BSME, Chemical Engineering BSChE, Bioengineering BSBE, Economics
// BA, Mathematics BA, Architecture BA and the Shepherd School of Music BMus in Piano Performance) and 6 full-time
// graduate programmes (Master of Computer Science, Master of Data Science, the Jones Graduate School of Business
// Full-Time MBA, Master of Electrical and Computer Engineering, Master of Bioengineering in Applied Bioengineering and
// Master of Mechanical Engineering).
// Sources (viewed 19 November 2026): Office of Admission first-year international applicants page with decision plans,
// testing policy, English proficiency, International Student Financial Statement and merit scholarship sections
// (admission.rice.edu/apply/first-year-international-applicants); Office of Financial Aid 2026-2027 cost of
// attendance and international students pages (financialaid.rice.edu/cost-attendance,
// /apply-aid/international-students); General Announcements 2026-2027 programme pages for every degree listed
// (ga.rice.edu/programs-study/departments-programs/...) and the graduate tuition, fees and expenses page
// (ga.rice.edu/graduate-students/student-services-organizations/tuition-fees-expenses); Bursar's Office 2026-2027
// engineering graduate rates (bursar.rice.edu/tuition_fee_rates/graduate-programs/engineering); Office of Graduate and
// Postdoctoral Studies English proficiency page (graduate.rice.edu/admissions/language-proficiency-requirements); OISS
// cost of attendance guidance (oiss.rice.edu/cost-attendance); Computer Science MCS, MDS and graduate application pages
// (csweb.rice.edu/academics/graduate-programs/...); ECE MECE page (eceweb.rice.edu/academics/graduate-programs/
// master-electrical-and-computer-engineering); Mechanical Engineering MME page (mech.rice.edu/academics/
// graduate-programs/masters-mechanical-engineering); Bioengineering master's and FAQ pages
// (bioengineering.rice.edu/academics/masters-programs, /frequently-asked-questions); Rice Business Full-Time MBA
// tuition, admissions guide and international student pages (business.rice.edu/rice-mba/full-time-mba/
// tuition-and-financial-aid, /mba-admissions/guide, /rice-mba/full-time-mba/international-students); and the Shepherd
// School of Music piano audition and first-year checklist pages (music.rice.edu/admissions/undergraduate/...).
// Costs are in US dollars. Rice is private and charges international and US students the same tuition. It runs on two
// semesters (fall and spring).

const UNIVERSITY = {
  universitySlug: "rice-university",
  universityName: "Rice University",
  country: "United States",
  language: "English",
  campus: "Houston, Texas",
  programType: "Full-time",
} as const;

// Office of Financial Aid 2026-2027 cost of attendance, undergraduates who entered in 2024 or later, on campus:
// tuition 71,140; mandatory fees 984; on-campus living 20,530; books and supplies 1,540; personal 3,115; total 97,309
// (Rice's own total). Travel is estimated separately (3,000 for foreign-country residents).
const UG_TUITION =
  "2026-27: undergraduate tuition is US$71,140 for students who entered in 2024 or later, the same for international and US students. The Office of Financial Aid's 2026-27 cost of attendance for a student living on campus is US$97,309: tuition, US$984 in mandatory fees, US$20,530 for on-campus housing and food, US$1,540 for books and supplies and US$3,115 for personal expenses. Rice also estimates US$3,000 a year in travel for students from outside the US (not included in that total). New first-years are billed a US$370 Orientation Week fee (plus US$560 for housing and meals if they stay on campus during orientation), and international first-years a further US$395 for international orientation. Health insurance is required and is billed separately unless you show comparable cover. Financial aid: Rice is need-aware for international applicants and offers need-based aid to a limited number of international first-years; those who receive it have 100% of demonstrated need met with institutional grants, but international students are not eligible for the Rice Investment programme. Apply by ticking the aid request on the International Student Financial Statement and completing the 2027-28 CSS Profile (code 6609) by 15 November 2026 (Early Decision I), 4 January 2027 (Early Decision II) or 1 February 2027 (Regular Decision); students admitted without requesting aid cannot apply in later years. Merit scholarships need no separate application: about 20% of admitted students, domestic and international, are offered one at the time of admission";

const UG_INTAKE = "Fall semester only (fall 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry. Early Decision I (binding): apply by 1 November 2026 (passed when we checked); decisions by mid-December and, if admitted, the enrolment deposit is due 4 January 2027. Early Decision II (binding): apply by 4 January 2027; decisions by late January and the deposit is due 1 March 2027. Regular Decision (non-binding): apply by 4 January 2027; decisions are released by 1 April 2027 and admitted students reply by 1 May 2027. Under Early Decision you may apply elsewhere only under non-binding plans and must withdraw those applications if admitted; deferred Early Decision applicants move to Regular Decision, while denied applicants cannot be reconsidered that year. The last SAT/ACT sittings Rice uses are September (ACT) and October (SAT) for Early Decision I, and December for Early Decision II and Regular Decision. Optional virtual interviews must be requested by 3 November 2026 (Early Decision I) or 6 January 2027 (Early Decision II and Regular Decision), and InitialView interviews completed by 10 November 2026 or 12 January 2027";

const UG_TESTING =
  "Testing: optional but recommended. Rice recommends that first-year applicants submit SAT or ACT scores if they have them, and applicants who do not are still given full consideration. Rice has no preference between the two tests and superscores them (best section scores across all sittings). The ACT Science section is optional and the SAT/ACT essay is not considered. Self-reported scores are accepted from students at US high schools; others send official scores (SAT and TOEFL code 6609, ACT code 4152), and enrolling students who self-reported must send official scores before matriculation. AP, IB and AICE results can be self-reported, and once you opt in to score consideration you cannot remove scores";

const UG_ENGLISH =
  "English proficiency: required if English is not your first language, unless you have completed at least two years of full-time study in an English-language curriculum before applying. Minimum official scores: TOEFL iBT 5.0 on the updated scale for tests taken on or after 21 January 2026, or 100 for tests taken before that date (TOEFL iBT Home Edition is accepted; MyBest scores are not); IELTS Academic 7.0 (General Training is not accepted); Cambridge C1 Advanced or C2 Proficiency 185; Duolingo English Test 130. Scores must come from a single test sitting and be sent directly by the testing organisation";

const UG_ACADEMIC =
  "Application: the Common App with the Rice writing supplement (two 150-word responses on your academic interests and on what draws you to Rice, a 500-word essay on the residential colleges or on your perspectives, and 'The Box' image), a US$75 non-refundable fee (international applicants cannot request a fee waiver), an official secondary school transcript in English or with a certified translation (exam-based curricula also send final results such as IGCSE/GCSE or CBSE Class X and any predicted results), a counsellor recommendation and two recommendations from teachers of core academic subjects, plus the International Student Financial Statement with bank statements or affidavits (applicants not requesting aid must show funds for the first year; Rice asks for an explanation if available funds are below US$101,634). Minimum preparation is 16 high school credits: 4 English, 2 social studies, 3 mathematics, 2 laboratory science, 2 of one foreign language (waived for curricula such as A-levels that do not offer one) and 3 more in those areas";

const UG_STEM =
  "Science and engineering preparation: Rice's natural science and engineering divisions require at least trigonometry or pre-calculus plus both chemistry and physics in high school (a second year of chemistry or biology can replace physics). Students admitted with gaps are asked to make them up with summer coursework before enrolling";

// Bursar's Office / General Announcements 2026-2027: Professional Master's in Engineering tuition 30,720 a semester,
// 61,440 a year (2,560 per credit for approved part-time study); graduate fees GSA 45 + student organisation 8 + health
// and wellness 720 = 773 a year. OISS estimates for international students: travel ~1,500, personal ~3,000, books
// ~1,400 a year; housing varies and no single graduate living-cost figure is published.
const PM_ENG_TUITION =
  "2026-27: Rice bills on-campus professional (non-thesis) engineering master's students at the Professional Master's in Engineering rate of US$30,720 a semester (US$61,440 for a fall-plus-spring year); approved part-time study (fewer than 9 credits a semester) is charged US$2,560 per credit. Annual fees are US$773 (US$45 Graduate Student Association, US$8 student organisation and US$720 health and wellness). Health insurance is compulsory, either through the Rice student plan or comparable cover. Rice does not publish a single graduate living-cost total; its international student office estimates about US$1,500 a year for travel, US$3,000 for personal costs and US$1,400 for books and supplies, with housing and food depending on where you live";

const GRAD_ENGLISH =
  "English proficiency (Rice graduate admission): applicants who are foreign nationals or whose native language is not English must show proficiency with TOEFL iBT 4.5 on the new scale for tests taken on or after 21 January 2026 (90 for earlier tests; MyBest scores are not accepted), IELTS Academic 7, or Duolingo English Test 115, or with a degree from an accredited US institution or a post-secondary degree taught in English. TOEFL and GRE scores go to Rice code 6609";

export const riceUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (BSCS)",
    slug: "rice-computer-science-bscs",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (eight semesters; 120 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "Rice's Bachelor of Science in Computer Science is the department's in-depth route for students heading into the computing industry (a lighter BA is also offered, but students cannot hold both). The major takes 68-72 credit hours across at least 21 courses within a 120-credit degree. Mathematics comes first: two semesters of calculus, multivariable calculus or a computational optimisation course, a probability and statistics course and linear algebra. The computer science core runs from Computational Thinking and Algorithmic Thinking through Introduction to Program Design, computer organisation, computer ethics, a short AI-assisted software development course, programming languages, concurrent program design, computer systems and Reasoning About Algorithms. Students then take one design or capstone course (for example software engineering methodology, production programming or a robotics senior design), one course each in systems (such as operating systems, security, networks or quantum computing systems), application domains (artificial intelligence, computer vision, natural language processing, reinforcement learning, robotics) and theory (cryptography, automata, probabilistic algorithms), plus two COMP electives at the 300 level or above. Rice science and engineering undergraduates may also be able to add a fifth-year Master of Computer Science",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/engineering/computer-science/computer-science-bscs/",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_STEM],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering (BSECE)",
    slug: "rice-electrical-computer-engineering-bsece",
    level: "Bachelor",
    field: "Electrical and Computer Engineering",
    duration: "Typically 4 years full-time (eight semesters; 125 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "The ABET-accredited BSECE is Rice's professional electrical and computer engineering degree, with more hours and depth than the department's BA. Majors complete 82-83 credit hours (28-30 courses) inside a 125-credit degree. First-years take physics, calculus and Computational Thinking, then the department's first core courses, Fundamentals of Computer Engineering, Fundamentals of Electrical Engineering (lecture and lab) and Introduction to Physical Electronics, along with multivariable calculus, linear algebra, probability through Random Signals, and an approved science elective. A junior design laboratory and a two-semester senior design capstone (ELEC 494 and 496) give hands-on project work. Each student declares one of four areas of specialisation, AI & Systems, Computer Engineering, Neuroengineering, or Photonics, Electronics and Nano-devices, and takes six specialisation courses (18 credit hours) across at least two areas, so the degree combines depth with breadth; students can switch areas after declaring. Topics on offer range from machine learning, wireless communications and digital signal processing to computer architecture, VLSI and real-time systems, neural interfaces and biomedical optics, and quantum and semiconductor devices",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/engineering/electrical-computer-engineering/electrical-computer-engineering-bsece/",
    degree: "Bachelor of Science in Electrical and Computer Engineering (BSECE)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_STEM],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering (BSME)",
    slug: "rice-mechanical-engineering-bsme",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (eight semesters; 127 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "Rice's ABET-accredited BSME prepares students for professional engineering practice. The major requires 87 credit hours (31 courses) within a 127-credit degree. After the mathematics and science base (calculus, differential equations and linear algebra, multivariable calculus, general chemistry with lab and calculus-based physics) plus engineering computation and numerical methods, students take the mechanical engineering core: thermodynamics, statics, design tools, rigid-body dynamics, stress analysis, mechanical elements, fluid mechanics, control systems and heat transfer. A laboratory sequence runs from a sophomore lab through two junior labs and an industrial process lab, and the degree ends with a two-semester capstone design project (MECH 407 and 408). Each student also declares one of five areas of specialisation, Aerospace, Computational Engineering, Mechanics/Dynamics, Thermal Fluids or Breadth in Mechanical Engineering, and takes three technical electives there, choosing from courses such as introduction to aeronautics, finite element analysis, computational fluid mechanics, vibrations, composite aerospace structures and aerospace propulsion",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/engineering/mechanical-engineering/mechanical-engineering-bsme/",
    degree: "Bachelor of Science in Mechanical Engineering (BSME)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_STEM],
  },

  {
    ...UNIVERSITY,
    name: "Chemical Engineering (BSChE)",
    slug: "rice-chemical-engineering-bsche",
    level: "Bachelor",
    field: "Chemical Engineering",
    duration: "Typically 4 years full-time (eight semesters; 127 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "Offered by the Department of Chemical and Biomolecular Engineering, the ABET-accredited BSChE requires 95 credit hours in the major within a 127-credit degree. Students build a base in general and organic chemistry, physical chemistry, calculus, differential equations and linear algebra and calculus-based physics, then move through the chemical engineering sequence: chemical engineering fundamentals, applied programming and computation, numerical methods for chemical engineers, biomolecular engineering, two semesters each of thermodynamics and transport phenomena, chemical kinetics and reactor design, separation technologies, process dynamics and control and process safety. Three chemical engineering laboratories and two design courses, Design Fundamentals and Chemical Engineering Design, complete the core. Every student also declares one of five areas of specialisation, Biomolecular Engineering, Computational Engineering, Energy/Sustainability, Materials/Nanotechnology or Engineering Breadth, and takes at least three courses (9 credit hours) in it, drawing on bioengineering, computational mathematics, environmental engineering and materials science courses",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/engineering/chemical-biomolecular-engineering/chemical-biomolecular-engineering-bsche/",
    degree: "Bachelor of Science in Chemical Engineering (BSChE)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_STEM],
  },

  {
    ...UNIVERSITY,
    name: "Bioengineering (BSBE)",
    slug: "rice-bioengineering-bsbe",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "Typically 4 years full-time (eight semesters; at least 131 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "Rice's ABET-accredited Bachelor of Science in Bioengineering is the most credit-heavy of its engineering degrees: 97-99 credit hours (at least 37 courses) in the major within a degree of at least 131 credits. Alongside introductory biology, general and organic chemistry, calculus, differential equations, multivariable calculus, physics, engineering computation, electronic measurement and engineering mechanics, students take a bioengineering core that includes Bioengineering Fundamentals, systems physiology with a lab module, bioreaction engineering, bioengineering thermodynamics, cell and molecular biology for engineers, tissue culture laboratory, biomaterials, biomechanics, biomedical instrumentation with its lab, numerical methods and transport phenomena in bioengineering. Statistics for bioengineering and a two-semester bioengineering design sequence (BIOE 451 and 452) round out the core,, with technical electives completing the major",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/engineering/bioengineering/bioengineering-bsbe/",
    degree: "Bachelor of Science in Bioengineering (BSBE)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_STEM],
  },

  {
    ...UNIVERSITY,
    name: "Economics (BA)",
    slug: "rice-economics-ba",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (eight semesters; 120 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "The BA with a major in Economics, taught in Rice's School of Social Sciences, requires 44-48 credit hours (14-15 courses) within a 120-credit degree, leaving plenty of room for a second major or minor. The core covers single-variable calculus, a probability and statistics course (options include data analytics and probability and statistics for data science), Principles of Economics, microeconomics, macroeconomics, game theory and applied econometrics. Students then take four economics electives, from introductory topics such as behavioural economics, programming for economists, environmental economics, law and economics or sports economics up to advanced ECON 320-497 courses, and two advanced courses numbered ECON 410-497. One elective can come from an approved list outside the department, including corporate finance, investments, derivatives, optimisation and stochastic models. Students with a GPA of 3.67 or above in the major can apply for the two-semester honours programme (ECON 498-499). Rice also offers a separate, more quantitative Mathematical Economic Analysis major",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/social-sciences/economics/economics-ba/",
    degree: "Bachelor of Arts (BA) with a major in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Mathematics (BA)",
    slug: "rice-mathematics-ba",
    level: "Bachelor",
    field: "Mathematics",
    duration: "Typically 4 years full-time (eight semesters; 120 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "Rice's Mathematics BA is a compact, theory-focused major: 36 credit hours (12 courses) within a 120-credit degree, with at least eight courses at the 300 level or above. The core is two semesters of single-variable calculus followed by a pair of second-year courses combining ordinary differential equations and linear algebra with multivariable calculus, with honours versions (Honors Calculus III and IV, honours ODEs and honours multivariable calculus) for well-prepared students; AP scores of 4 or 5 earn calculus credit, and students are encouraged to start at the most advanced course they are ready for. The rest of the major is eight mathematics electives at the 300 level or above; at most three credits of research-type courses may count. Double majors may replace up to three of those electives with approved mathematics-related courses from other departments",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/natural-sciences/mathematics/mathematics-ba/",
    degree: "Bachelor of Arts (BA) with a major in Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_STEM],
  },

  {
    ...UNIVERSITY,
    name: "Architecture (BA, leading to the BArch)",
    slug: "rice-architecture-ba",
    level: "Bachelor",
    field: "Architecture",
    duration: "4 years full-time for the BA (130 credit hours); the full BArch path takes 6 years including a preceptorship year",
    tuitionNote: UG_TUITION,
    description:
      "The BA with a major in Architecture is the Rice School of Architecture's main undergraduate programme and the first part of its professional Bachelor of Architecture (BArch) path; students admitted to Rice and the school enter it directly. The major requires 75 credit hours (17 courses) inside a 130-credit degree, and all architecture courses follow a set semester-by-semester plan in four integrated sequences: design studios (Principles of Architecture I-IV on space, systems, context and urbanity), history and theory, technology, and practice. The first two years lay this foundation, together with most of Rice's general distribution courses; students apply for approval of the major in spring of their second year, when the school expects a B average in required courses and no more than one studio grade in the C range. Years three and four add the comprehension studios on structure and assembly, further technology courses and a fourth-year design research seminar linked to a spring studio, along with 55 elective credits (45 outside architecture). After graduating with the BA, students can apply to the BArch stage, which includes a year of preceptorship in professional practice. No study abroad or transfer credit counts towards the major",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/architecture/architecture/architecture-ba/",
    degree: "Bachelor of Arts (BA) with a major in Architecture (pathway to the Bachelor of Architecture)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
      "Architecture portfolio (required): upload through the Rice Admission Student Portal a single landscape A4 or Letter PDF named after you, up to 15 MB and up to 10 pages after a title page, showing creative potential through sketches, paintings, photography, models or similar work (it need not be architectural, and computer drafting is discouraged), with each piece captioned by title, medium, year and setting. Architecture applicants also answer two 250-word essays, on why they want to study architecture at Rice and on a building, place or city that has shaped their thinking",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Piano Performance (BMus)",
    slug: "rice-piano-performance-bmus",
    level: "Bachelor",
    field: "Music",
    duration: "Typically 4 years full-time (eight semesters; 120 credit hours)",
    tuitionNote: UG_TUITION,
    description:
      "The Shepherd School of Music's Bachelor of Music in Piano Performance requires 69 credit hours in the major within a 120-credit degree. Pianists take weekly one-hour private lessons in Piano for Majors in every one of their eight semesters, at least eight semesters of collaborative study chosen from chamber music (at least two semesters), collaborative piano skills, sonata class, accompanying and chorus, and present a junior and a senior recital. The academic core includes four semesters of music theory and four of aural skills and performance technique, a four-course music history survey from the medieval era to the modern era, and an upper-level theory or composition elective such as orchestration, electronic music, music for media or music business and law. All BMus students must pass a keyboard proficiency exam, may face end-of-semester juries and are expected to keep at least a B- in their main applied area; two grades of C+ or lower there end BMus candidacy. Outstanding students can apply in their fifth or sixth semester for the coordinated five-year BMus/MMus honours programme",
    officialProgramUrl: "https://ga.rice.edu/programs-study/departments-programs/music/music/piano-performance-bmus/",
    degree: "Bachelor of Music (BMus) with a major in Piano Performance",
    intake: UG_INTAKE,
    applicationDeadline:
      "Fall 2027 entry: Shepherd School of Music applicants must complete the Common App, Rice writing supplement (with Music chosen as the first-choice school), US$75 fee, transcript, school report and two teacher evaluations by 1 December 2026, and upload the online preliminary (prescreening) video and the Shepherd School Financial Assistance Application by 1 December 2026 at 11:59 pm Eastern time (a US$10 upload fee applies). Music applicants cannot use Early Decision or QuestBridge. Invited applicants then audition live in late January or February 2027, final decisions are released by 1 April 2027, and 1 February 2027 is the priority date for Shepherd School scholarship consideration",
    admissionRequirements: [
      "Audition (piano): the preliminary video and the live audition use the same programme, at least 30 minutes of memorised repertoire from four of five style periods (Baroque, Classical, Romantic, Impressionist/Early 20th-century, Post-1950) including a complete Classical-period sonata; scales and arpeggios are not required. The school asks for good audio with automatic volume control switched off. Admission is decided jointly by the Shepherd School faculty and Rice's admission committee, and admitted students must stay in the music programme for at least one year before changing schools",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Computer Science (MCS)",
    slug: "rice-master-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "Typically 3 semesters full-time (30 credit hours); part-time study is also possible",
    tuitionNote:
      `${PM_ENG_TUITION}. The Computer Science department considers applicants who apply by the early deadline automatically for merit scholarships, and a limited number of teaching and research assistant roles exist; the General Announcements note that MCS students are otherwise expected to pay full tuition and fees`,
    description:
      "Rice's on-campus MCS is a 30-credit, non-thesis degree for students aiming at technical careers in the computing industry. Students take a theory course (for example graduate algorithms, probabilistic algorithms, optimisation or cryptography), a systems and software course (operating systems, database implementation, parallel computing or software engineering methodology) and COMP 608 Workplace Communication, then complete three courses in one of five specialisations: Artificial Intelligence; Bioinformatics and Computational Biology; Data Science and Machine Learning; Management and Leadership; or Systems and Security. Graduate COMP electives (500 level or above) make up the rest of the 30 credits. Every MCS student must also complete an internship of ten weeks to six months; international students become eligible for Curricular Practical Training after two full-time semesters. The department reports a 93% internship placement rate and lists employers such as Amazon, Meta, Microsoft and Google. Up to 6 transfer credits can be approved, and with permission up to 9 credits may be taken in the online MCS",
    officialProgramUrl: "https://csweb.rice.edu/academics/graduate-programs/master-computer-science",
    degree: "Master of Computer Science (MCS)",
    intake: "Fall 2027 or spring (January) entry",
    applicationDeadline:
      "Fall 2027: 10 February 2027 is the early deadline for scholarship consideration, 1 May 2027 the deadline for international applicants and 1 July 2027 for domestic applicants; applications continue to be reviewed on a rolling basis and decisions start rolling out from March. Spring 2027 entry closed on 1 November 2026 (passed when we checked)",
    admissionRequirements: [
      "A bachelor's degree with a GPA of about 3.0 or higher, transcripts from every college attended (electronic copies to apply; official transcripts after admission), a CV or résumé, a statement of purpose, at least three letters of recommendation and an US$85 application fee (waived for those who attend an information session; other waivers are rare)",
      "GRE: optional (recommended but not required); no GRE subject test is needed",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Data Science (MDS)",
    slug: "rice-master-data-science",
    level: "Master",
    field: "Data Science",
    duration: "3 consecutive semesters full-time (fall, spring, second fall; 31-35 credit hours depending on course choices)",
    tuitionNote:
      `${PM_ENG_TUITION}. Merit scholarships are awarded to top applicants, who are considered automatically when they apply`,
    description:
      "Rice's on-campus Master of Data Science is a non-thesis degree that blends graduate statistics and computer science and takes three consecutive semesters, with summer free for an optional internship. The core covers big data tools and models, data visualisation, machine learning, programming for data science and statistics for computing and data science, plus one elective from areas such as data ethics, cybersecurity, data privacy, cloud computing or algorithms. Each student chooses a specialisation of at least three courses: Artificial Intelligence, Business Analytics (taught with Rice Business), Energy Transition and Sustainability, Image Processing or Sport Analytics, the last three available only on campus. A professional development requirement can be met with a course, an internship of ten weeks to six months or existing post-graduation work experience. The final semester is the D2K (Data to Knowledge) capstone, in which teams work on a real problem for a partner organisation; the department names partners such as NASA, Texas Children's Hospital and Chevron",
    officialProgramUrl: "https://csweb.rice.edu/academics/graduate-programs/master-data-science",
    degree: "Master of Data Science (MDS)",
    intake: "Fall only (fall 2027)",
    applicationDeadline:
      "Fall 2027: 10 February 2027 is the early deadline for scholarship consideration, 1 May 2027 the deadline for international applicants and 1 July 2027 for domestic applicants. Applications are reviewed on a rolling basis, with most decisions in late March and early April 2027",
    admissionRequirements: [
      "A bachelor's degree with a GPA of about 3.0 or higher, transcripts from every college attended, a CV or résumé, a statement of purpose, three letters of recommendation and an US$85 application fee (waived for information session attendees). You apply to either the on-campus or the online MDS, not both",
      "GRE: optional (recommended but not required)",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA",
    slug: "rice-jones-full-time-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time (four semesters; 60 credit hours)",
    tuitionNote:
      "2026-27: Full-Time MBA tuition is US$79,116 a year, a flat rate per semester. Required fees add US$1,323 (US$45 Graduate Student Association, US$8 student organisation, US$720 health and wellness and US$550 MBA activity fee), so tuition and fees come to US$80,439 a year (our sum). Rice Business also lists health insurance at US$3,448 (waivable with comparable cover), estimated textbooks at US$2,600 and optional parking at US$217-1,067; housing and living costs are extra and not given as a single figure. A non-refundable US$2,500 enrolment deposit is due on acceptance and counts towards fall charges, and the required first-year global field experience carries additional costs. Scholarships: all admitted students, domestic and international, are considered automatically for merit scholarships, with Round 1 and Round 2 applicants getting priority; Rice Business says 95% of full-time students receive scholarships, averaging US$91,000. Named awards include the Crownover Scholars and the full-tuition McNair Scholar. International students must show funding for their visa, and Rice Business points to lenders such as Prodigy Finance and MPower that do not require a US co-signer",
    description:
      "The Jones Graduate School of Business Full-Time MBA is a two-year, 60-credit programme with four semesters in residence in Houston. The first year concentrates on a core in financial and managerial accounting, organisational behaviour, leading change, managerial economics, finance, corporate social responsibility, competitive and industry analysis, strategy, operations, marketing, data analysis and strategic business communication, plus career strategy and recruiting skills. In the second semester students choose two 'custom core' courses (such as management control, the economic environment of business, new enterprises, business law or leading across differences) and begin electives. Two experiential requirements are built in: a Global Field Experience in the first year and a required summer work experience between the two years; international students can use field-study courses as the basis for Curricular Practical Training. The second year is entirely electives, and students can optionally complete one of ten specialisations: Accounting, Energy, Entrepreneurship, Finance, Healthcare, Leadership, Marketing, Operations Management, Real Estate or Strategic Management",
    officialProgramUrl: "https://business.rice.edu/rice-mba/full-time-mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall 2027 (Class of 2029)",
    applicationDeadline:
      "Class of 2029, all at 11:59 pm Central time: Round 1, 16 October 2026 (passed when we checked; decisions from 10 December 2026); Round 2, 6 January 2027 (decisions from 10 March 2027); Round 3, 31 March 2027 (decisions from 5 May 2027). Round 4 (1 June 2027) is open only to US citizens and permanent residents, so international applicants must apply by Round 3. Complete Round 1 and Round 2 applications get priority for merit scholarships",
    admissionRequirements: [
      "A four-year US bachelor's degree or its international equivalent. Unofficial transcripts are enough to apply (with certified English translations bearing an ink signature and seal where needed); enrolling students with non-US degrees must have them evaluated by WES or The Evaluation Company, and an offer can be withdrawn if the degree is not equivalent to a four-year US bachelor's",
      "Standardised test: the GMAT, GMAT Focus, GRE or Executive Assessment is required, though full-time applicants may request a test waiver at least 10 days before applying. Only your highest score is considered, and enrolling students send official scores (GMAT code 3WS-WD-92, GRE code 7502)",
      "Application materials: a one-page professional résumé, one or two professional recommendations through the GMAC Common Letter of Recommendation (ideally from a current or former supervisor), two 100-word short answers on short- and long-term career goals, a 500-word creative essay about a meaningful photo (or a one- to three-minute video), an optional essay and a US$200 application fee (waived for groups such as admissions event attendees, alumni referrals, Fulbright Scholars and US military). Shortlisted candidates complete a video interview and an interview over Zoom",
      "English proficiency (Rice Business Full-Time MBA): the current Rice Business admissions guide does not list separate English test minimums. Rice Business's application checklist asks international applicants whose most recent degree was not taught mainly in English to submit TOEFL or IELTS scores, and Rice's university-wide graduate minimums are TOEFL iBT 4.5 on the new scale (90 for tests before 21 January 2026), IELTS 7 or Duolingo 115",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Electrical and Computer Engineering (MECE)",
    slug: "rice-master-electrical-computer-engineering",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration: "3 semesters full-time (fall, spring, fall; 30-32 credit hours); longer part-time",
    tuitionNote:
      `${PM_ENG_TUITION}. The ECE department says every MECE applicant is considered automatically for a merit scholarship covering 25% to 66% of full-time tuition, with awards announced in the admission letter`,
    description:
      "Rice's MECE is a non-thesis professional degree for engineers and computer scientists heading into industry to design chips, computing systems and AI. It requires 30-32 credit hours (at least ten courses at the 500 level or above, 27 credits at Rice): a foundations course followed by a year-long team capstone (ELEC 594, 9 credits in total) in which students design, build and test a product or deliver a real-world data analysis for a company or faculty sponsor; two courses in one of seven specialisations, AI and Systems, Computer Engineering, Computer Vision, Digital Health, Neuroengineering, Quantum Engineering or Wireless Systems; two engineering software development courses; an engineering communications course; two free electives, which can include research with a faculty member; and the department seminar each semester. Representative courses include efficient machine learning, advanced digital integrated circuit design, VLSI systems design and intelligent mobile systems. The summer is left free for an internship, and the department says many graduates start in integrated circuit design, with Silicon Valley and Austin the most common destinations",
    officialProgramUrl: "https://eceweb.rice.edu/academics/graduate-programs/master-electrical-and-computer-engineering",
    degree: "Master of Electrical and Computer Engineering (MECE)",
    intake: "Fall 2027 (the department says spring entry is also possible)",
    applicationDeadline:
      "Fall 2027: priority deadline 15 December 2026 and late deadline 15 January 2027. Applications opened on 1 September 2026 and are reviewed on a rolling basis, so the department advises applying early",
    admissionRequirements: [
      "A bachelor's degree, usually in electrical engineering, computer engineering, computer science or statistics (other majors are welcome but may need to build background first), a GPA of about 3.0 or higher, transcripts from all colleges attended (unofficial copies to apply), a statement of purpose, a current résumé or CV, at least three letters of recommendation and an US$85 application fee",
      "GRE: recommended but not required",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Bioengineering (MBE), Applied Bioengineering",
    slug: "rice-master-bioengineering-applied",
    level: "Master",
    field: "Biomedical Engineering",
    duration: "30-31 credit hours (Rice does not publish a standard length for this concentration)",
    tuitionNote:
      `${PM_ENG_TUITION}. Applicants who apply by the 31 January priority deadline and start in the fall automatically receive a US$1,000 scholarship; the department says Rice's Office of Financial Aid does not award other scholarships to its graduate students, though loans and payment plans are available`,
    description:
      "The Master of Bioengineering is Rice's professional, non-thesis bioengineering degree, and the Applied Bioengineering concentration is its flexible option for students heading to medical school, a PhD or a career in the biomedical industry. The degree requires 30-31 credit hours, at least 30 of them at the 500 level or above. Everyone takes the two-semester Medical Innovation Industry Seminar; the concentration then needs six graduate bioengineering electives (18 credits, of which up to 6 can be independent research, the basis of a research-option version of the programme), a quantitative course such as computational biology, applied statistics for bioengineering, quantitative cell and molecular biology or biomechanics, a professional development course in communication, engineering ethics, management or project leadership, and one more relevant graduate elective. At least four courses must be BIOE lecture courses taken at Rice, and the programme requires a 3.0 GPA in degree coursework. Rice also offers a separate one-year Global Medical Innovation concentration with clinical immersion in the US, Brazil and Costa Rica",
    officialProgramUrl: "https://bioengineering.rice.edu/academics/masters-programs",
    degree: "Master of Bioengineering (MBE), Applied Bioengineering concentration",
    intake: "Fall 2027",
    applicationDeadline:
      "Applications opened 1 September 2026. Priority deadline 31 January 2027 at 11:59 pm Eastern time (fall starters who apply by then automatically get a US$1,000 scholarship); final deadline 1 May 2027 for international applicants and 1 July 2027 for domestic applicants, both at 11:59 pm Eastern time",
    admissionRequirements: [
      "A BS or BA in an engineering or science discipline; depending on background, some students need extra undergraduate engineering courses to complete the MBE. Apply online at gradapply.rice.edu, choosing the Applied Bioengineering concentration (a separate application is needed for Global Medical Innovation)",
      "Application materials: unofficial transcripts from every school attended (official ones if admitted), a statement of purpose, at least three letters of recommendation and the US$85 application fee; papers, a résumé and awards can be added. The GRE is not required",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Mechanical Engineering (MME)",
    slug: "rice-master-mechanical-engineering",
    level: "Master",
    field: "Mechanical Engineering",
    duration: "Typically 2 or 3 semesters full-time (about 12-16 months; 30 credit hours); part-time possible",
    tuitionNote:
      `${PM_ENG_TUITION}. Partial merit scholarships are available, and every application is considered automatically on a rolling basis`,
    description:
      "Rice's Master of Mechanical Engineering is a non-thesis professional degree for engineers going into industry rather than research. It requires 30 credit hours (ten courses at the 500 level or above, at least 24 at Rice): three foundations courses in mechanical engineering, an engineering communication course taught with communication specialists, three courses in one of five areas of specialisation (Aerospace Engineering, Biomedical Engineering, Energy, Robotics or general Mechanical Engineering), one ME elective and two semesters of applied work, either a team project (MECH 601 and 602) or an independent project with a faculty member (MECH 621 and 622). Representative courses include design of mechatronic systems, introduction to aeronautics, neuromusculoskeletal modelling and simulation, and renewable and advanced energy systems. The department highlights Houston's Texas Medical Center, NASA's Johnson Space Center and the energy industry as nearby employers, and lists careers in robotics, aerospace and propulsion, energy systems, mechanical design, manufacturing and biomedical devices",
    officialProgramUrl: "https://mech.rice.edu/academics/graduate-programs/masters-mechanical-engineering",
    degree: "Master of Mechanical Engineering (MME)",
    intake: "Fall 2027 or spring 2028",
    applicationDeadline:
      "Fall 2027: 1 May 2027 for international applicants and 1 July 2027 for domestic applicants. Spring 2028: 15 October 2027 for all applicants. Applications open on 1 September, and offers and scholarships are made on a rolling basis, so early applications are encouraged",
    admissionRequirements: [
      "A bachelor's degree in engineering or a related STEM field with a GPA of about 3.0 or higher; a strong background in calculus, linear algebra, differential equations and physics is recommended, and applicants from outside mechanical engineering may need prerequisite courses. Submit transcripts from all colleges attended (unofficial copies to apply), a statement of purpose, at least three letters of recommendation and an US$85 application fee",
      "GRE: recommended but not required",
      "English proficiency (MME): the department lists TOEFL iBT 90 (internet-based) or IELTS 7 as minimums where applicable; Rice's graduate admission office also sets TOEFL 4.5 on the new scale for tests taken from 21 January 2026 and accepts the Duolingo English Test at 115, and exempts holders of a degree taught in English",
    ],
  },
];
