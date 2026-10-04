import type { Program } from "../../programs";

// University of Glasgow undergraduate programmes (September 2027 entry).
// Sourced from gla.ac.uk 2027 undergraduate degree pages (programme structure, entry requirements for 2027, English language, how to apply), Glasgow's 2027/28 tuition fee pages (international/EU, Scottish, rest of UK) and UCAS 2027 key dates.

export const universityOfGlasgowPrograms: Program[] = [
  {
    name: "Computing Science",
    slug: "glasgow-computing-science",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "4 years (BSc Honours); MSci 5 years",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BSc Computing Science puts a strong emphasis on programming, mainly in Python in Year 1, alongside computer systems, databases, human-computer interaction and computational thinking. Year 2 covers Java and object-oriented software engineering, data structures and algorithms, algorithmic foundations, networks and operating systems and web application development. In Years 1 and 2 students also take other subjects under Glasgow's flexible degree structure, then progress to Honours in Years 3 and 4. Honours covers algorithmics, data fundamentals, systems programming, human-centred design and professional software development, with a team project and a substantial individual project; students with exceptional grades can take a faster route. Entry is through UCAS (course code G400; G402 for the 5-year MSci).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/computingscience/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Science with Honours (BSc Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAA-AAB including Mathematics",
      "IB Diploma: 38 points (6,6,6 at Higher Level) including HL Mathematics (Analysis and Approaches) at 6",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Economics",
    slug: "glasgow-economics",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Economics",
    duration: "4 years (MA Social Sciences Honours)",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Taught at the triple-accredited Adam Smith Business School, Glasgow's MA (Social Sciences) in Economics covers how markets work and how individuals and governments make choices about scarce resources. Years 1 and 2 cover introductory and intermediate microeconomics and macroeconomics, mathematics and statistics, alongside other subjects under the flexible degree structure. At Honours (Years 3 and 4) students take advanced micro and macroeconomic analysis, can study econometrics, and choose electives such as behavioural, health, environmental and labour economics, game theory, financial markets and international trade, finishing with a dissertation. No previous study of economics is needed. Entry is through UCAS (course code L150).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/economics/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Master of Arts in Social Sciences with Honours (MA SocSci Hons, undergraduate)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAB-BBB including Mathematics and English or a Humanities subject",
      "IB Diploma: 36 points (6,6,5 at Higher Level) including HL English or a Humanities subject and HL Mathematics (Analysis and Approaches)",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Scots Law",
    slug: "glasgow-scots-law",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Law",
    duration: "4 years (Honours); 3 years (Ordinary)",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's Scots Law LLB is the degree for those planning to enter the Scottish legal profession, and a starting point for later qualifying in other jurisdictions. Year 1 offers foundational courses such as constitutional law, legal study, obligations, family law and criminal law and evidence; Year 2 adds jurisprudence, law and government, property, commercial law, business organisations and EU law, with options such as environmental, labour and international private law. Admission to Honours follows Year 2, after which students choose from over 50 courses a year to specialise; the degree can also end as a three-year Ordinary LLB. Entry is through UCAS (course code M114), and applicants must complete the LNAT.",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/scotslaw/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Laws (LLB)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAA including English or a Humanities subject, plus GCSE English Language or English Literature at B/5",
      "IB Diploma: 38 points (6,6,6 at Higher Level) including HL Humanities and SL English at 6",
      "Satisfactory completion of the LNAT is required",
      "Applicants should apply for either the Scots Law LLB or the Common Law LLB, not both; transfer between them is not allowed after admission",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Psychology",
    slug: "glasgow-psychology",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Psychology",
    duration: "4 years (BSc Honours)",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's School of Psychology and Neuroscience brings together experimental psychology, cognitive science and cognitive neuroscience. Years 1 and 2 introduce cognitive, social, developmental and physiological psychology, individual differences and research methods, with an open-science approach and training in statistical programming, alongside other subjects under the flexible degree structure. Honours (Years 3 and 4) develops statistical modelling, cognitive neuroscience and clinical health approaches, with options from health and neuroscience to neurodiversity and data visualisation, and a major final-year research project. Entry is through UCAS (course code C800 for the BSc; the MA routes are C801 and C802).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/psychology/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Science with Honours (BSc Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAA-ABB plus GCSE Mathematics at B (5-6); BSc applicants need two A-level science subjects (MA routes need English or a Humanities subject)",
      "IB Diploma: 36 points (6,6,5 at Higher Level) with SL Mathematics at 4; BSc applicants need two HL science subjects",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Mathematics",
    slug: "glasgow-mathematics",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "4 years (BSc Honours); MSci 5 years",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BSc Mathematics starts with a 40-credit Year 1 course in matrices, linear equations, complex numbers, vectors, calculus and groups, taught with small-group problem solving. Year 2 covers multivariable calculus, linear algebra, applied mathematics, classical mechanics and modelling, real analysis and pure topics such as groups and symmetries, with optional graphs, networks and discrete mathematics. At Honours students choose from a wide range of pure and applied courses, and the subject can be combined with others such as Physics, Chemistry or Economics; a schools ambassador scheme builds workplace skills. Entry is through UCAS (course code G100; G101 for the 5-year MSci).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/mathematics/",
    campus: "Glasgow, Gilmorehill campus (with work placement options)",
    programType: "Full-time",
    degree: "Bachelor of Science with Honours (BSc Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAB-BBB including Mathematics (the MA route also needs a Humanities subject)",
      "IB Diploma: 34 points (6,5,5 at Higher Level) including HL Mathematics (Analysis and Approaches)",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "glasgow-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Mechanical Engineering",
    duration: "4 years (BEng Honours); MEng 5 years",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BEng Mechanical Engineering gives a thorough grounding in mechanical engineering principles, with practising engineers contributing to teaching. Year 1 is a broad curriculum in mechanical engineering, mathematics, dynamics, electronics, materials, statics, thermodynamics and engineering skills, making it easy to switch discipline; Year 2 adds applied mechanics, fluid mechanics, microelectronics, computing, power electronics and design and manufacture; and Year 3 includes industrial visits and advanced topics from dynamics and control to heat transfer and engine thermodynamics. Year 4 offers options such as robotics, renewable energy, vibration and advanced thermal engineering. The BEng and MEng share the first three years. Entry is through UCAS (course code H300; H302 for the MEng).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/mechanicalengineering/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Engineering with Honours (BEng Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: BEng AAB-BBB (MEng AAA) including Mathematics and Physics (Design and Technology may replace Physics for 3D or Product Design options)",
      "IB Diploma: BEng 34 points (6,5,5 at HL), MEng 38 (6,6,6), including Mathematics (Analysis and Approaches) and Physics at HL (SL 6 accepted in one of them)",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Aeronautical Engineering",
    slug: "glasgow-aeronautical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years (BEng Honours); MEng 5 years",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BEng Aeronautical Engineering covers how aircraft are designed, built, powered and controlled, with practical labs including a jet engine test. Year 1 is a broad engineering curriculum that allows switching discipline; Year 2 covers fluid mechanics, dynamics, thermodynamics and mathematics; and Year 3 turns to aircraft design, behaviour, performance, propulsion and structural analysis. In Year 4 students study composites, aeroelasticity, high-speed aerodynamics and flight dynamics and control, and BEng students complete an individual project; the 5-year MEng adds a team project and a flight-testing course in a Saab 340B. Entry is through UCAS (course code H415; H410 for the MEng).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/aeronauticalengineering/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Engineering with Honours (BEng Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: BEng AAB-BBB (MEng AAA) including Mathematics and Physics (Design and Technology may replace Physics for 3D or Product Design options)",
      "IB Diploma: BEng 34 points (6,5,5 at HL), MEng 38 (6,6,6), including Mathematics (Analysis and Approaches) and Physics at HL (SL 6 accepted in one of them)",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Accountancy",
    slug: "glasgow-accountancy",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BAcc Accountancy, taught at the triple-accredited Adam Smith Business School, makes use of guest speakers from the accountancy profession. Year 1 introduces financial and management accounting, finance, budgeting and control and financial markets, alongside economics and management; Year 2 covers the regulatory framework, standard setting, cost information, decision making and markets, plus business law, taxation and statistics; and Years 3 and 4 cover advanced financial accounting and audit with a supervised dissertation. Variants with finance, international accounting or languages are also available. Entry is through UCAS (course code N400).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/accountancy/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Accountancy (BAcc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAB-BBB including Mathematics (Accounting, Chemistry, Physics, Further Mathematics, Economics, Statistics or Applied Statistics considered instead), plus GCSE English Language or Literature at B/5",
      "IB Diploma: 36 points (6,6,5 at Higher Level) including HL Mathematics (Analysis and Approaches or Applications and Interpretation) and SL English at 5",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Business and Management",
    slug: "glasgow-business-management",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "4 years (MA Social Sciences Honours)",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's MA (Social Sciences) in Business and Management, at the triple-accredited Adam Smith Business School, combines theory and practice with input from local industry. Year 1 covers organisational behaviour, marketing, principles of management and foundations of finance; Year 2 covers human resource management, business decision analysis, entrepreneurship and service operations, alongside other subjects under the flexible degree structure. Honours includes strategic management, global business, ethics, research methods and an experiential learning course, plus options in entrepreneurship, marketing, HR, international business, operations and finance. No previous business study is needed. Entry is through UCAS (course code N200).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/businessmanagement/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Master of Arts in Social Sciences with Honours (MA SocSci Hons, undergraduate)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAB-BBB including English or a Humanities subject",
      "IB Diploma: 36 points (6,6,5 at Higher Level) including English HL 6, or a Humanities HL 6 with English SL 6",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Physics",
    slug: "glasgow-physics",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Physics",
    duration: "4 years (BSc Honours); MSci 5 years",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BSc Physics covers matter and energy from elementary particles to the origins of the universe, taught by staff involved in projects such as CERN's Large Hadron Collider and the LIGO gravitational wave observatory. Year 1 covers dynamics, waves, properties of matter, thermal physics, optics, electromagnetism and quantum physics; Year 2 adds specialised experimental techniques, solids, nuclear and particle physics and mathematical methods, with Mathematics studied alongside. Honours deepens core physics with specialist options emphasising applications such as lasers, semiconductors, nuclear physics and medical imaging, ending with a research project in one of the school's groups. Entry is through UCAS (course code F300; F301 for the 5-year MSci).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/physics/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Science with Honours (BSc Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAB-BBB including Mathematics and Physics",
      "IB Diploma: 34 points (6,5,5 at Higher Level) including HL Mathematics (Analysis and Approaches) and Physics",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Chemistry",
    slug: "glasgow-chemistry",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Chemistry",
    duration: "4 years (BSc Honours); MSci with work placement 5 years",
    language: "English",
    tuitionNote:
      "2027/28: £33,708 per year for international and EU students (Glasgow's Science, Engineering, Nursing and Medical, Veterinary & Life Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BSc Chemistry covers the science of molecules and materials. Year 1 includes main group and transition metal chemistry, organic chemistry, kinetics, states of matter, energetics, equilibria and macromolecules; Year 2 adds molecular thermodynamics, stereochemistry, quantum mechanics and bonding, organometallic and coordination chemistry, spectroscopy, synthesis and electrochemistry, with interactive units on ethical, environmental and financial issues. Honours covers advanced synthetic methods, medicinal chemistry, catalysis and spectroscopy, and the final year includes a research project; the MSci adds a work placement year in the UK or abroad. Entry is through UCAS (course code F100; F101 for the MSci with work placement).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/chemistry/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Bachelor of Science with Honours (BSc Hons)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: ABB-BBB including Mathematics and Chemistry",
      "IB Diploma: 32 points (5,5,5 at Higher Level) including HL Mathematics (Analysis and Approaches) and Chemistry",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "History",
    slug: "glasgow-history",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "History",
    duration: "4 years (MA Honours)",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's MA History develops critical thinking, analysis and communication through small-group teaching, varied assessments such as policy papers and museum displays, and one-to-one feedback. Year 1 covers the Middle Ages (cross-cultural interaction, religious conversion, women and gender) and modernity (empires, enlightenment and revolution, race and migration, industrialisation); Year 2 examines how historians work and how these approaches shape Scottish history. Honours allows closer study of sources and topics, drawing on research centres in gender history, war studies, slavery studies, American studies and Scottish and Celtic studies. Entry is through UCAS (course code V100).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/history/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Master of Arts with Honours (MA Hons, undergraduate)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: ABB-BBB including English or another Humanities subject",
      "IB Diploma: 34 points (6,5,5 at Higher Level) including English HL 6, or a Humanities HL 6 with English SL 6",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "International Relations",
    slug: "glasgow-international-relations",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "International Relations",
    duration: "4 years (MA Social Sciences Honours)",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's MA (Social Sciences) in International Relations examines how states and societies interact across borders, with particular strengths in global security and conflict and in Russia, Central and Eastern Europe, Latin America, China and the Middle East. Teaching is based on lectures and seminar discussion of questions such as the causes of war, state cooperation on climate change and human rights, and the role of non-state actors. Year 1 introduces politics and international relations, Year 2 covers the history of political thought and comparative politics, and Honours allows specialisation. Entry is through UCAS (course code L250).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/internationalrelations/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Master of Arts in Social Sciences with Honours (MA SocSci Hons, undergraduate)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: AAB-BBB including English or a Humanities subject",
      "IB Diploma: 36 points (6,6,5 at Higher Level) including English HL 6, or a Humanities HL 6 with English SL 6",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "English Literature",
    slug: "glasgow-english-literature",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "English Literature",
    duration: "4 years (MA Honours)",
    language: "English",
    tuitionNote:
      "2027/28: £28,275 per year for international and EU students (Glasgow's Arts and Social Sciences fee band) and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's MA English Literature covers literature in English from the early modern to the postmodern, including American, Irish and postcolonial literatures, critical theory, creative writing and links with other arts, media and science, with access to the Hunterian collection and the Library's Special Collections. Year 1 focuses on poetry and narrative prose with critical and creative writing; Year 2 examines literature's relationship with the environment and the body, from the medieval period to today. Honours (Years 3 and 4) allows specialisation. Entry is through UCAS (course code Q301).",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/englishliterature/",
    campus: "Glasgow, Gilmorehill campus",
    programType: "Full-time",
    degree: "Master of Arts with Honours (MA Hons, undergraduate)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline for UK applicants); Glasgow's course pages list 30 June as the deadline for international applicants",
    admissionRequirements: [
      "A levels: ABB-BBB including English or another Humanities subject",
      "IB Diploma: 34 points (6,5,5 at Higher Level) including English HL 6, or a Humanities HL 6 with English SL 6",
      "English language, for applicants from non-English-speaking countries: IELTS Academic 6.5 with no subtest below 6.0 (one test, taken within 2 years 5 months of the start date; One Skill Retake accepted); TOEFL iBT 92 overall with at least Reading 22, Listening 20, Speaking 23 and Writing 21 for tests from 21 January 2026 (earlier tests 90 overall with at least Reading 20, Listening 19, Speaking 19 and Writing 21); or PTE Academic 59 with at least 59 in every subtest",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },

  {
    name: "Veterinary Medicine and Surgery",
    slug: "glasgow-veterinary-medicine",
    level: "Bachelor",
    universitySlug: "university-of-glasgow",
    universityName: "University of Glasgow",
    country: "United Kingdom",
    field: "Veterinary Medicine",
    duration: "5 years",
    language: "English",
    tuitionNote:
      "2027/28: £38,670 per year for international and EU students and £1,820 per year for Scottish students. The 2027/28 fee for students from England, Wales and Northern Ireland is still to be confirmed (2026/27: £9,790).",
    description:
      "Glasgow's BVMS integrates clinical and science subjects in a spiral curriculum that revisits topics with increasing clinical focus, alongside a running theme of professional and clinical skills. The foundation phase (Years 1 and 2) relates anatomy and physiology to health and disease in domestic animals through realistic cases, with animal handling, suturing and clinical examination from Year 1. The clinical phase (Year 3 and part of Year 4) builds broad training in common veterinary problems, disease investigation and control, followed by the professional phase (part of Year 4 and Year 5). Teaching is at the Garscube campus. Entry is through UCAS (course code D100) by 15 October, with a maximum of four veterinary choices; practical experience and an interview are required.",
    officialProgramUrl:
      "https://www.gla.ac.uk/undergraduate/degrees/veterinarymedicine/",
    campus: "Glasgow, Garscube campus",
    programType: "Full-time",
    degree: "Bachelor of Veterinary Medicine and Surgery (BVMS)",
    intake: "September",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for veterinary medicine)",
    admissionRequirements: [
      "A levels: AAA including Chemistry and Biology, plus GCSE English at B/5",
      "IB Diploma: 38 points (6,6,6 at Higher Level) including HL Chemistry and Biology, and SL English and SL Physics or Mathematics at 6",
      "Practical experience and an interview are required; Glasgow does not set a fixed amount of work experience",
      "Graduates with (or predicted) a 2:1 science degree in a relevant subject are also considered",
      "English language: IELTS Academic 7.0 with no subtest below 7.0, achieved within two years of the application being considered",
      "UCAS allows a maximum of four veterinary choices; Glasgow does not offer deferred entry for the BVMS",
      "Scottish Highers, adjusted (Access Glasgow) offers and international qualifications are listed on the Glasgow course page; applicants with exceptional grades may be considered for advanced (second-year) entry where the page offers it",
    ],
  },
];
