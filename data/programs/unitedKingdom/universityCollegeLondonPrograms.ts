import type { Program } from "../../programs";

// University College London undergraduate programmes (September 2027 entry).
// Sourced from ucl.ac.uk undergraduate course pages (fees, entry requirements, deadlines), UCL's undergraduate English language requirements page and UCAS 2027 entry deadlines.

export const universityCollegeLondonPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "ucl-computer-science",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £48,600 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "UCL's Computer Science BSc builds a strong base in programming, algorithms, the theory of computation and the mathematics behind computing, then moves on to computer architecture, databases, software and systems engineering. In second year students complete a team project set by an industry partner through the Industry Exchange Network (IXN), and the final year combines specialist options such as machine learning, cryptography and quantum computing with an individual project. Entry is through UCAS (course code G400), and applicants must also sit the TARA admissions test.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/computer-science-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*A*A with an A* in Mathematics or Further Mathematics (Access UCL contextual offer: A*AB); GCSE English Language and Mathematics at grade 4/C",
      "IB Diploma: 40 points with 20 points in three higher level subjects, including 7 in Mathematics (Analysis and Approaches preferred; Applications and Interpretation accepted)",
      "TARA (Test of Academic Reasoning for Admissions) required for 2027 entry, booked through University Admissions Tests UK (entry fee applies)",
      "English language (UCL Level 1), if required: IELTS Academic 6.5 overall with at least 6.0 in each component, TOEFL iBT 4.5 overall with 4.0 in each skill (tests from 21 January 2026; earlier tests 92 overall with 24 in reading and writing and 20 in speaking and listening) or PTE Academic 75 with at least 67 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Economics",
    slug: "ucl-economics",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Economics",
    duration: "3 years (4 years with a placement year)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £40,800 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "Economics BSc (Econ) at UCL starts with microeconomics, macroeconomics, mathematics, statistics and a module on coding, data and communication, then moves on to core micro, macro and econometrics in second year. The final year is made up entirely of options, such as game theory, public economics and tax policy, financial economics and economic inequality, including at least two research-based modules. Students can transfer to a four-year version with a UK work placement if they secure an approved role. Entry is through UCAS (course code L100); applicants must sit the TMUA and resits are not considered.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/economics-bsc-econ",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (Economics), BSc (Econ)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA with an A* in Mathematics (Access UCL contextual offer: A*AB); GCSE English Language and Mathematics at grade 4/C",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 7 in Mathematics and no higher level score below 5",
      "TMUA (Test of Mathematics for University Admission) required for 2027 entry; applicants who are resitting qualifications are not considered",
      "English language (UCL Level 2), if required: IELTS Academic 7.0 overall with at least 6.5 in each component, TOEFL iBT 4.5 overall with 4.5 in each skill (tests from 21 January 2026; earlier tests 96 overall with 24 in reading and writing and 22 in speaking and listening) or PTE Academic 76 with at least 75 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Medicine",
    slug: "ucl-medicine",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Medicine",
    duration: "6 years (including an integrated BSc)",
    language: "English",
    tuitionNote:
      "UK students: £10,050 for the first year (2027/28 entry). International: UCL had not yet published the 2027/28 overseas MBBS fee on the course page at the time of checking; for 2026/27 entrants it was £57,300 for the first year, paid as five annual instalments (two of £39,200 and three of £69,367) that can rise by up to RPI-X each year. Medicine is excluded from UCL's cohort fee guarantee.",
    description:
      "UCL's six-year MBBS BSc starts with systems-based science modules and early patient contact, and includes an integrated BSc year in Year 3 that develops research skills. Later years are increasingly placement-based across hospitals and GP practices in and around London, leading up to the UK Medical Licensing Assessment and an eight-week elective in the final year; some students take the MBPhD route after Year 4. Entry is through UCAS (course code A100) by the 15 October deadline, with the UCAT required and multiple mini interviews (MMIs) for shortlisted applicants.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/medicine-mbbs-bsc",
    campus: "London, Bloomsbury, Royal Free Hospital (Hampstead) and Whittington Hospital (Archway)",
    programType: "Full-time",
    degree: "Bachelor of Medicine, Bachelor of Surgery and Bachelor of Science (MBBS BSc)",
    intake: "September",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for medicine)",
    admissionRequirements: [
      "A levels: A*AA including Biology and Chemistry, with an A* in one of them (Access UCL contextual offer: AAB with A in Biology and Chemistry); GCSE English Language and Mathematics at grade 6/B",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 7 and 6 in Biology and Chemistry and no higher level score below 5",
      "UCAT must be taken in the year of application; shortlisted applicants are invited to multiple mini interviews (MMIs) held between December and March",
      "Resits are not considered",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Law",
    slug: "ucl-law",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Law",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £36,800 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "The UCL Laws LLB treats law as a broad academic discipline while covering the knowledge needed for the first stage of the Solicitors Qualifying Exam, and it is recognised by the Bar Standards Board as the academic stage of training for barristers. Students build practical skills through mooting, client interviewing and negotiation competitions, and through pro bono work at the UCL Integrated Legal Advice Clinic, with options to study abroad or take modules outside law. Entry is through UCAS (course code M100), and all applicants must sit the LNAT.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/law-llb",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Laws (LLB)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA (Access UCL contextual offer: AAB); GCSE English Language and Mathematics at grade 6/B",
      "IB Diploma: 39 points with 19 points in three higher level subjects and no higher level score below 5",
      "LNAT (Law National Aptitude Test) required before the application is considered; resits are not considered",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Architecture",
    slug: "ucl-architecture",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Architecture",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £40,800 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "The Bartlett School of Architecture's Architecture BSc is taught mainly through studio work, where students develop ideas through drawing, model-making and portfolio building, supported by lectures on technology, history and theory and professional practice. From second year students join a Bartlett Design Unit, a small studio led by practising architects with its own design agenda, and the course includes an international field trip in first year. Entry is through UCAS (course code K100), and applicants may be invited to submit a portfolio of creative work at the application stage.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/architecture-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAB, no specific subjects required (Access UCL contextual offer: BBC); GCSE English Language and Mathematics at grade 4/C",
      "IB Diploma: 36 points with 17 points in three higher level subjects and no higher level score below 5",
      "A comprehensive portfolio of creative work is required if you are invited to submit one during the application stage",
      "English language (UCL Level 1), if required: IELTS Academic 6.5 overall with at least 6.0 in each component, TOEFL iBT 4.5 overall with 4.0 in each skill (tests from 21 January 2026; earlier tests 92 overall with 24 in reading and writing and 20 in speaking and listening) or PTE Academic 75 with at least 67 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Psychology",
    slug: "ucl-psychology",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Psychology",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £44,400 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "Psychology BSc at UCL covers cognitive and social psychology, individual differences, developmental, health and clinical psychology, perception and the brain basis of behaviour, with research design and data analysis in R taught from the first term. Year 1 includes one elective from across UCL, Year 2 is fully compulsory, and the final year is made up of options such as educational psychology, cognitive neuroscience and organisational psychology, plus an empirical research project supervised within the faculty. Entry is through UCAS (course code C800).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/psychology-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA, including A*A in two of Biology, Chemistry, Mathematics, Physics and Psychology (Access UCL contextual offer: A*AC); GCSE English Language, Mathematics and two sciences at grade 6/B",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 7 and 6 in two of Biology, Chemistry, Mathematics, Physics or Psychology, and no higher level score below 5",
      "English language (UCL Level 3), if required: IELTS Academic 7.0 overall with at least 7.0 in each component, TOEFL iBT 5.0 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in reading and writing and 23 in speaking and listening) or PTE Academic 76 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Management Science",
    slug: "ucl-management-science",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years (4 years with a year in industry)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £44,400 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "UCL School of Management's Management Science BSc applies mathematics, data analytics, computational thinking and behavioural science to business problems, alongside modules in strategy, marketing science, finance, operations and decision science. Students take part in eight intensive Scenario Weeks at the Canary Wharf campus, working in teams on problems set with organisations from the school's network, and can add an Engineering Sciences minor, a study abroad period or a year in industry. Entry is through UCAS (course code N991).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/management-science-bsc",
    campus: "London, Canary Wharf",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA with an A* in Mathematics; a science or social science subject is preferred (Access UCL contextual offer: A*BB); GCSE English Language at grade 6/B and Mathematics at grade 4/C",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 7 in Mathematics and no score below 5",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Mathematics",
    slug: "ucl-mathematics",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £44,400 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "UCL's Mathematics BSc gives a broad grounding in algebra, analysis, applied mathematics and mathematical methods through core modules in the first year and a half, after which students build their own degree from more than 30 specialist options. The first two years are shared with the four-year MSci, and UCL advises applicants to apply for the MSci first because transfers to the BSc are possible during the first three years. Entry is through UCAS (course code G100); resits are not considered.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/mathematics-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*A*A with A*A* in Mathematics and Further Mathematics, or A*AA with A*A in Mathematics and Further Mathematics plus grade 2 in any STEP paper or a Distinction in the Mathematics AEA (Access UCL contextual offers available); GCSE English Language and Mathematics at grade 4/C",
      "IB Diploma: 40 points with 20 points in three higher level subjects including 7 in Mathematics: Analysis and Approaches, or 39 points (19 at higher level, including 7 in Mathematics) plus grade 2 in a STEP paper or an AEA Distinction",
      "Resits are not considered",
      "English language (UCL Level 1), if required: IELTS Academic 6.5 overall with at least 6.0 in each component, TOEFL iBT 4.5 overall with 4.0 in each skill (tests from 21 January 2026; earlier tests 92 overall with 24 in reading and writing and 20 in speaking and listening) or PTE Academic 75 with at least 67 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "ucl-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Mechanical Engineering",
    duration: "3 years (4 years with a year in industry)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £44,400 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "Mechanical Engineering BEng at UCL develops a deep understanding of the core principles of mechanical engineering and applies them to areas ranging from biomedical devices to alternative fuels and low-carbon shipping. Students take optional modules from across the Faculty of Engineering Sciences, complete individual projects and cross-faculty team challenges, and can compete for a year in industry in Year 3, which makes the degree four years long. Entry is through UCAS (course code H300), and applicants must also sit the TARA admissions test.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/mechanical-engineering-beng",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Engineering (BEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including Mathematics and Physics, with the A* in one of them (Access UCL contextual offer: A*AB); GCSE English Language and Mathematics at grade 4/C",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 7 and 6 in Mathematics and Physics (either order) and no higher level score below 5",
      "TARA (Test of Academic Reasoning for Admissions) required for 2027 entry, booked through University Admissions Tests UK (entry fee applies)",
      "English language (UCL Level 1), if required: IELTS Academic 6.5 overall with at least 6.0 in each component, TOEFL iBT 4.5 overall with 4.0 in each skill (tests from 21 January 2026; earlier tests 92 overall with 24 in reading and writing and 20 in speaking and listening) or PTE Academic 75 with at least 67 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Biomedical Sciences",
    slug: "ucl-biomedical-sciences",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Biomedical Sciences",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £44,400 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "UCL's Biomedical Sciences BSc gives first-year students a broad base across the life sciences, from molecules to populations, together with computational and analytical skills. From second year students choose one of five specialisms (Cells and Molecules, Control Systems, Developmental Biology, Drug Mechanisms, or Organs and Systems) and study it in depth, and the final year centres on an original research project with one of UCL's research groups. Entry is through UCAS (course code B990).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/biomedical-sciences-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including Biology and Chemistry, with Mathematics preferred (Access UCL contextual offer: AAB with AA in Biology and Chemistry); GCSE English Language and Mathematics at grade 6/B",
      "IB Diploma: 38 points with 18 points in three higher level subjects, including 6 in Biology and Chemistry and no higher level score below 5",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Natural Sciences",
    slug: "ucl-natural-sciences",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Natural Sciences",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £44,400 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "Natural Sciences at UCL combines modules taught by several science departments: students start with three scientific disciplines in first year and then choose an interdisciplinary specialism, such as Chemical Biology, Brains, Minds and Machines, Environment and Climate, Materials Science or Quantum Technologies and Big Data. The third year includes a supervised interdisciplinary research project, and students can move to the four-year MSci or apply for a study abroad year. Entry is through UCAS (course code CFG0); some specialisms need a specific A level such as Chemistry or Physics.",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/natural-sciences-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including Mathematics and at least one of Biology, Chemistry and Physics (Access UCL contextual offer: AAB); GCSE English Language and Mathematics at grade 4/C",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 6 in Mathematics and at least one of Biology, Chemistry and Physics, and no higher level score below 5",
      "Some specialisms require a particular A level (for example Chemistry for Chemical Biology, Physics for Earth, Planets and the Universe)",
      "English language (UCL Level 2), if required: IELTS Academic 7.0 overall with at least 6.5 in each component, TOEFL iBT 4.5 overall with 4.5 in each skill (tests from 21 January 2026; earlier tests 96 overall with 24 in reading and writing and 22 in speaking and listening) or PTE Academic 76 with at least 75 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "History",
    slug: "ucl-history",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "History",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £33,300 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "UCL's History BA offers modules spanning more than 5,000 years, with strengths in the ancient Near East, the Americas, European cultural and intellectual history, economic and social history, and imperial and global history. The flexible structure lets students draw on modules from the Institute of the Americas, the School of Slavonic and East European Studies and other University of London colleges, and includes a public history group project using London's museums and archives. Entry is through UCAS (course code V100).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/history-ba",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including History (Access UCL contextual offer: ABB with A in History); GCSE English at grade 6/B and Mathematics at grade 4/C",
      "IB Diploma: 38 points with 18 points in three higher level subjects, including 6 in History and no higher level score below 5",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "English",
    slug: "ucl-english",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "English Literature",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £33,300 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "The English BA at UCL begins with a foundation year covering narrative texts from the Renaissance to the present, Old and Middle English, critical method and literary theory. In Years 2 and 3 students study Chaucer and Shakespeare and choose six further modules from Old English to contemporary writing, including American, colonial and postcolonial literature, with at least one pre-1800 and one post-1800 module. Entry is through UCAS (course code Q300).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/english-ba",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including English Literature (or combined English Language and Literature) (Access UCL contextual offer: ABB with A in English Literature); GCSE English Language at grade 6/B and Mathematics at grade 4/C",
      "IB Diploma: 38 points with 18 points in three higher level subjects, including 6 in English A Literature or Language and Literature, and no higher level score below 5",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Philosophy, Politics and Economics",
    slug: "ucl-philosophy-politics-economics",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "Politics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £40,800 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "UCL's PPE introduces philosophy, politics and economics and the principles of social and political analysis in first year. Students then follow a politics-and-philosophy or politics-and-economics concentration with research methods training, and write a dissertation in one of the three disciplines in the final year. The programme has a strong policy and methods focus, and a separate Social Data Science stream is available. Entry is through UCAS (course code 4V86).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/philosophy-politics-and-economics-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA with an A* in Mathematics (Access UCL contextual offer: A*BB); GCSE English Language at grade 6/B and Mathematics at grade 4/C",
      "IB Diploma: 39 points with 19 points in three higher level subjects, including 7 in Mathematics and no higher level score below 5",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },

  {
    name: "Politics and International Relations",
    slug: "ucl-politics-international-relations",
    level: "Bachelor",
    universitySlug: "university-college-london",
    universityName: "University College London",
    country: "United Kingdom",
    field: "International Relations",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £36,800 per year for international students and £10,050 for UK students. The UK fee is for the first year only and subject to parliamentary approval; UCL's cohort guarantee means the international fee does not rise during the course (except to cover new government levies).",
    description:
      "Politics and International Relations BSc at UCL opens with today's major political challenges and the main subfields of the discipline: international relations, comparative politics, public policy and political philosophy. Second year adds compulsory quantitative and qualitative research methods and contact with practitioners, and the final year lets students concentrate on the subfields and methods that interest them most, with a limited number of study abroad places available. Entry is through UCAS (course code L251).",
    officialProgramUrl:
      "https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/politics-and-international-relations-bsc",
    campus: "London, Bloomsbury",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA, with an essay-based subject preferred (Access UCL contextual offer: ABB); GCSE English Language at grade 6/B and Mathematics at grade 4/C",
      "IB Diploma: 38 points with 18 points in three higher level subjects and no higher level score below 5",
      "English language (UCL Level 4), if required: IELTS Academic 7.5 overall with at least 7.0 in each component, TOEFL iBT 5.5 overall with 5.0 in each skill (tests from 21 January 2026; earlier tests 109 overall with 27 in reading and writing and 23 in speaking and listening) or PTE Academic 80 with at least 76 in each skill",
      "Other UK and international qualifications: see the entry requirements selector on the UCL course page",
    ],
  },
];
