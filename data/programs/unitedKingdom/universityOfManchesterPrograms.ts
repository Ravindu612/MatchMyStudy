import type { Program } from "../../programs";

// University of Manchester undergraduate programmes (September 2027 entry).
// Sourced from manchester.ac.uk 2027 undergraduate course pages (fees, entry requirements, English language, application and selection) and UCAS 2027 entry deadlines.

export const universityOfManchesterPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "manchester-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £39,700 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's Computer Science BSc is the department's most flexible programme, in the university where the first stored-program computer was built. First year covers programming, mathematical techniques, computer architecture, operating systems, data science and a first-year team project. Second year adds core software engineering, programming paradigms and algorithms, with options in AI, machine learning, databases and distributed systems, and third year centres on a 40-credit individual project plus specialist options such as natural language processing, computer vision, cybersecurity and quantum computing. Around 60% of assessment is by examination. Entry is through UCAS (course code G400, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00560/bsc-computer-science/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including A* in Mathematics and at least one of Computer Science, Further Mathematics, Biology, Chemistry or Physics (contextual offer: AAA with the same subjects); GCSE Mathematics grade B/6 and English Language grade C/4",
      "IB Diploma: 37 points with 7,6,6 at Higher Level, including 7 in Mathematics: Analysis and Approaches and at least one HL science (Computer Science, Physics, Chemistry or Biology)",
      "English language (any one of): GCSE/IGCSE English Language grade C/4; IGCSE English as a Second Language grade 8 (CAIE, Oxford AQA or Pearson Edexcel); IELTS 6.5 overall with no sub-skill below 6.5; TOEFL iBT 90 with no sub-skill below 22 (or 4.5 overall and in every skill on the 1-6 scale)",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Economics",
    slug: "manchester-economics",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Economics",
    duration: "3 years (4 with a year abroad or placement year)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £35,300 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's BSc Economics is a quantitative degree for students who already know they want to specialise in economics and have a good mathematical background. It gives in-depth training in economic principles, mathematical modelling and econometrics before students specialise through optional units, with an optional dissertation in Year 3. Students can add a year abroad or a placement year, which makes the degree four years long. Entry is through UCAS (course code L102, institution code M20); the school does not interview.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/10224/bsc-economics/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including Mathematics; preference is given to applicants taking two subjects from the school's list of acceptable subjects (contextual offer: ABB including A in Mathematics)",
      "IB Diploma: 36 points with 6,6,6 at Higher Level, including Mathematics",
      "English language (any one of): GCSE/IGCSE English Language grade C; IELTS 6.5 overall with no component below 6.0 (in-person tests at official IELTS centres only); TOEFL iBT 90 overall with at least 20 in each section; IGCSE English as a Second Language grade B",
      "No interview",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Medicine",
    slug: "manchester-medicine",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Medicine",
    duration: "5 years",
    language: "English",
    tuitionNote:
      "UK (home) students: £10,050 for 2027/28 under the government fee cap. International: Manchester had not yet set 2027 entry fees when checked; for 2026/27 entrants the international fee was £39,900 per year for the pre-clinical Years 1-2, with the clinical Years 3-5 charged at the rate in force when a student enters Year 3 (£60,900 for 2026/27). The university may raise international fees by up to 7% a year.",
    description:
      "Manchester runs the UK's largest medical school. Its five-year MBChB is built around themed case discussions and team-based learning alongside lectures, practical classes and anatomy dissection, and integrates science with clinical learning from the start. Years 1 and 2 are mostly on the Oxford Road campus with visits to hospitals and community settings across the North West; from Year 3 students learn mainly through clinical placements at four Clinical Education Campuses, their teaching hospitals and general practices in Greater Manchester. Graduates can apply for provisional registration with the General Medical Council. Entry is through UCAS (course code A106, institution code M20) by the 15 October deadline; the UCAT is required and no offers are made without an interview.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/01428/mbchb-medicine/",
    campus: "Oxford Road campus (Years 1-2), then clinical placements across Greater Manchester and the North West",
    programType: "Full-time",
    degree: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
    intake: "September",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for medicine)",
    admissionRequirements: [
      "A levels: AAA including Biology/Human Biology or Chemistry, plus one of Chemistry, Biology/Human Biology, Physics, Psychology, Mathematics or Further Mathematics (contextual offer: AAB with the same subjects); GCSE Mathematics grade B/6",
      "IB Diploma: 36 points with 6,6,6 at Higher Level, including Chemistry or Biology plus another HL science (Chemistry, Biology, Physics, Psychology or Mathematics); Mathematics and English at grade 6/B at GCSE/IGCSE if not in the Diploma",
      "UCAT must be taken in the year of application; applicants with Band 3 or 4 in the Situational Judgement Test are not considered",
      "Interview required: no offers are made without interview; offers are subject to health screening",
      "English language: GCSE English Language grade B/6, IGCSE English first language grade B, IELTS 7.0 overall with no component below 6.5 (same sitting), PTE Academic 65 with at least 65 in each skill, or 5 in English in the IB Diploma",
      "International applicants should contact the medical school to confirm country-specific requirements before applying",
    ],
  },

  {
    name: "Law",
    slug: "manchester-law",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Law",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £29,800 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's LLB Law is the school's most flexible law degree. Students study the foundations of English and Welsh law and then choose from a broad range of optional units, analysing the law in its social, economic, ethical and political context. Practical experience is built in through the Justice Hub, a clinical legal education centre giving free advice to the public, and the degree supports routes to the Bar (through units recognised by the Bar Standards Board) and to qualifying as a solicitor via preparation for the SQE. Entry is through UCAS (course code M100, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/12446/llb-law/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Laws (LLB)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including at least one subject from the school's list (e.g. Law, Economics, History, Government and Politics, English, Mathematics, sciences or modern languages); preference for two listed subjects (contextual offer: AAB)",
      "IB Diploma: 37 points with 7,6,6 at Higher Level",
      "English language: IELTS 7.0 with at least 6.5 in each sub-test, or an accepted equivalent (in-person IELTS tests at official centres only)",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Psychology",
    slug: "manchester-psychology",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Psychology",
    duration: "3 years (4 with study abroad or a placement year)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £35,800 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's BSc Psychology is accredited by the British Psychological Society, so graduates are eligible for Graduate Membership, the first step towards training as a professional psychologist. The first two years cover the core areas (biological, cognitive, developmental and social psychology, individual differences, research methods and conceptual issues), with semester-long lab units building research skills, and Year 3 centres on an independent research project. Students can add a short placement, a full placement year or study abroad. Entry is through UCAS (course code C800, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00653/bsc-psychology/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including at least one of Psychology, Biology, Human Biology, Chemistry, Physics, Statistics, Mathematics or Further Mathematics; applicants predicted AAB are encouraged to apply (contextual offer: AAB)",
      "IB Diploma: 36 points with 6,6,6 at Higher Level, including one of Chemistry, Biology, Physics, Psychology or Mathematics",
      "English language: GCSE/IGCSE English Language grade B/6, or IELTS 7.0 overall with at least 6.5 in each component, or an accepted equivalent",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Mathematics",
    slug: "manchester-mathematics",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £38,100 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's BSc Mathematics is based in the Alan Turing Building. First year builds a broad core, and in second year students choose two of three themes (pure mathematics, applied mathematics, and probability and statistics) alongside options such as programming with Python. From second year they can also take units from other subjects, and the final year can include a staff-supervised project. Entry is through UCAS (course code G100, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00590/bsc-mathematics/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including A* in Mathematics or Further Mathematics; Further Mathematics preferred but not essential (contextual offer: A*AB with A* in Mathematics, or AAA with AA in Mathematics and Further Mathematics)",
      "IB Diploma: 37 points with 7,6,6 at Higher Level, including 7 in Mathematics: Analysis and Approaches",
      "English language (any one of): GCSE/IGCSE English Language grade C/4; IELTS Academic or UKVI 6.5 overall with no sub-skill below 6.0; TOEFL iBT 90 overall with nothing below 20 (Special Home Edition not accepted); IGCSE English as a Second Language grade 8",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "manchester-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Mechanical Engineering",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £37,500 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "The BEng Mechanical Engineering gives a broad grounding in the most fundamental engineering discipline, covering engineering science, design, experimentation, manufacturing technologies and the management of engineering companies. Core units run through all three years, and the final year adds specialist options and a major individual investigative project. The degree is accredited by the Institution of Mechanical Engineers, and students can extend to the integrated MEng. Entry is through UCAS (course code H300, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/03389/beng-mechanical-engineering/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Engineering (BEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*A*A in Mathematics, Physics and one other subject; applicants without Physics but with Further Mathematics are considered case by case (contextual offer: A*AA)",
      "IB Diploma: 38 points with 7,7,6 at Higher Level, including Mathematics (Analysis and Approaches or Applications and Interpretation) and Physics",
      "English language (any one of): GCSE/IGCSE English Language grade 4/C; IGCSE English as a Second Language grade 8 (CAIE, Oxford AQA or Pearson Edexcel); IELTS 6.5 overall with no sub-skill below 6.5; TOEFL iBT 90 with no sub-skill below 22 (or 4.5 overall and in every skill on the 1-6 scale); Pearson PTE 70 overall with no sub-skill below 70",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Management",
    slug: "manchester-management",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £35,300 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Alliance Manchester Business School's BSc Management gives a foundation across a wide range of business areas and lets students either keep a broad degree or specialise in Accounting and Finance, Human Resources, Innovation Strategy and Entrepreneurship, International Business Economics, or Marketing, with the specialism shown in the degree title. Optional units cover topics such as digital transformation and AI, ethical business and entrepreneurship, and final-year students choose a dissertation, a live consultancy project with a real organisation or more taught units. A placement year can be added. Entry is through UCAS (course code N201, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/03519/bsc-management/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA; preferred subjects include Accounting, Business Studies, Economics, English, Geography, Government and Politics, Law, Mathematics/Further Mathematics, Psychology, Sociology and Statistics (contextual offers available)",
      "IB Diploma: 36 points with 6,6,6 at Higher Level",
      "English language: GCSE/IGCSE English Language grade B/6, or IELTS 6.5 with no component below 6.0, or an accepted equivalent",
      "Applicants are not normally interviewed",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Accounting and Finance",
    slug: "manchester-accounting-finance",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years (4 with a year abroad or a Professional Experience Year)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £34,800 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "This BA (Econ) pathway combines core economics with a sequence of accounting and finance units taught by Alliance Manchester Business School, covering financial reporting and regulation, management accounting, auditing and governance, investment analysis and financial markets. Depending on optional units, it offers exemptions from ICAEW, CIMA and ACCA professional exams, so it suits students heading for chartered accountancy and other finance careers. Entry is through UCAS (course code NN43, institution code M20); the school does not interview.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/05151/baecon-accounting-and-finance/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Arts in Economic and Social Studies (BAEcon)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including at least one subject from the school's list of acceptable subjects, with preference for two (contextual offer: ABB); GCSE Mathematics grade B/6 and English Language grade C/4",
      "IB Diploma: 36 points with 6,6,6 at Higher Level",
      "English language (any one of): GCSE/IGCSE English Language grade C; IELTS 6.5 overall with no component below 6.0 (in-person tests at official IELTS centres only); TOEFL iBT 90 overall with at least 20 in each section; IGCSE English as a Second Language grade B",
      "No interview",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Pharmacy",
    slug: "manchester-pharmacy",
    level: "Master",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Pharmacy",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £34,800 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's four-year MPharm integrates pharmaceutical science with pharmacy practice throughout, using clinical problems, teaching from practising pharmacists and pharmacist prescribers, and workplace experience across different sectors of pharmacy. Students develop consultation, clinical decision-making, professional and leadership skills. The degree is accredited by the General Pharmaceutical Council (GPhC); after graduating, students complete a foundation training year and the GPhC registration assessment to register as pharmacists. Entry is through UCAS (course code B230, institution code M20), and interviews are part of selection.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/01695/mpharm-pharmacy/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Master of Pharmacy (MPharm)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAB including Chemistry, either Mathematics or Biology, and one further rigorous academic subject (contextual offer: ABB); resits considered only with BBB at first attempt",
      "IB Diploma: 35 points with 6,6,5 at Higher Level, including HL Chemistry plus either HL Biology with SL Mathematics or HL Mathematics with SL Biology",
      "Interview required (international applicants are interviewed on Microsoft Teams); applicants choosing Pharmacy as a second option with a personal statement aimed at another discipline are not considered",
      "English language: GCSE/IGCSE English Language grade 5/B, or IELTS Academic/UKVI 7.0 with no component below 6.5, or an accepted equivalent",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Aerospace Engineering",
    slug: "manchester-aerospace-engineering",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Engineering",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £37,500 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "The BEng Aerospace Engineering is a broad preparation for a professional career in the aerospace industry, combining engineering science with practical skills, design, commercial awareness and transferable skills, taught with industry-standard tools in the university's new engineering building. It is accredited by the Institution of Mechanical Engineers, with Royal Aeronautical Society re-accreditation in progress, and leads on to industry roles or specialist postgraduate study. Entry is through UCAS (course code H400, institution code M20); there are no interviews, but offer holders are invited to webinars or on-campus offer-holder days.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/03333/beng-aerospace-engineering/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Engineering (BEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including Mathematics, Physics and one other subject; applicants without Physics but with Further Mathematics are considered case by case (contextual offer: AAA)",
      "IB Diploma: 37 points with 7,6,6 at Higher Level in Mathematics (Analysis and Approaches or Applications and Interpretation), Physics and one other subject",
      "English language (any one of): GCSE/IGCSE English Language grade 4/C; IGCSE English as a Second Language grade 8 (CAIE, Oxford AQA or Pearson Edexcel); IELTS 6.5 overall with no sub-skill below 6.5; TOEFL iBT 90 with no sub-skill below 22 (or 4.5 overall and in every skill on the 1-6 scale); Pearson PTE 70 overall with no sub-skill below 70",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Chemical Engineering",
    slug: "manchester-chemical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Engineering",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £39,700 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester describes itself as the birthplace of chemical engineering, and its BEng teaches how to design and manage processes that transform materials at industrial scale, from energy to food and pharmaceuticals. The technical core is about controlling materials and chemical reactions and predicting the compositions, flows, temperatures and pressures of solids, liquids and gases, balanced by process safety and sustainability throughout, and culminates in a third-year team project designing a complete production process. All the department's programmes are accredited by the Institution of Chemical Engineers (IChemE). Entry is through UCAS (course code H800, institution code M20); UK-based applicants are invited to an online UCAS interview day.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/03340/beng-chemical-engineering/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Engineering (BEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including Mathematics and either Chemistry or Physics (contextual offer: AAB with A in Mathematics and B or above in Chemistry or Physics)",
      "IB Diploma: 36 points with 6,6,6 at Higher Level, including Mathematics: Analysis and Approaches and either Chemistry or Physics",
      "UK-based applicants are invited to a UCAS Interview Day (normally online, November to April) that includes an academic interview",
      "English language (any one of): GCSE/IGCSE English Language grade 4/C; IGCSE English as a Second Language grade 8 (CAIE, Oxford AQA or Pearson Edexcel); IELTS 6.5 overall with no sub-skill below 6.5; TOEFL iBT 90 with no sub-skill below 22 (or 4.5 overall and in every skill on the 1-6 scale); Pearson PTE 70 overall with no sub-skill below 70",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Biomedical Sciences",
    slug: "manchester-biomedical-sciences",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Biomedical Sciences",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £38,000 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's BSc Biomedical Sciences covers a wide range of medically related disciplines, including physiology, pharmacology, neuroscience, cell biology, microbiology, anatomy, genetics, biochemistry and immunology, with a strong focus on practical lab experience. Students can extend the degree with an integrated master's, a year in industry, entrepreneurship or a modern language, and can usually transfer between bioscience courses after first year. The degree is deliberately not accredited by the Institute of Biomedical Science, to keep unit choice flexible. Entry is through UCAS (course code B940, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00532/bsc-biomedical-sciences/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAB including two of Biology, Chemistry, Physics and Mathematics; applicants with only one of these plus Geography, Psychology, Environmental Studies or Physical Education can be considered for AAA (contextual offers typically AAB-ABC)",
      "IB Diploma: 35 points with 6,6,5 at Higher Level, including two sciences (normally Biology and Chemistry); with only one core science plus HL Geography, Psychology or Sports, Exercise and Health Science, the offer is 36 points with 6,6,6",
      "English language: GCSE/IGCSE English Language grade 4/C, or IELTS 6.5 with no component below 6.5, or an accepted equivalent",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "English Literature",
    slug: "manchester-english-literature",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "English Literature",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £29,200 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "Manchester's BA English Literature covers writing from the Anglo-Saxon period to the present, from illuminated manuscripts to graphic novels and from poetry to postmodern fiction, drawn from the English-speaking world and beyond. First year samples a wide range of literature, and Years 2 and 3 let students pick the units that interest them most, in a UNESCO City of Literature with a busy programme of literary events. Students can apply for a semester abroad in second year or a placement year. Entry is through UCAS (course code Q320, institution code M20).",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00060/ba-english-literature/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including English Literature or English Language and Literature (contextual offer: ABB with A in English Literature or English Language and Literature); GCSE English Language grade 6/B and Mathematics grade 4/C",
      "IB Diploma: 36 points with 6,6,6 at Higher Level, including English Literature or English Language and Literature",
      "English language: GCSE/IGCSE English Language grade B/6, or IELTS Academic/UKVI 7.0 overall, or an accepted equivalent",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },

  {
    name: "Politics and International Relations",
    slug: "manchester-politics-international-relations",
    level: "Bachelor",
    universitySlug: "university-of-manchester",
    universityName: "University of Manchester",
    country: "United Kingdom",
    field: "Politics",
    duration: "3 years (4 with a year abroad or placement)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £29,200 per year for international students and £10,050 per year for UK (home) students starting in September 2027 (the home fee follows the government fee cap).",
    description:
      "The BSocSc Politics and International Relations is Manchester's single honours course for politics specialists, organised around comparative politics, international politics and political theory. Years 1 and 2 combine units from all three areas with options from disciplines such as economics, sociology, history, philosophy or languages, and the final year draws on staff research expertise, which includes the British Election Study. Students can apply to spend Year 3 abroad or on a 12-month placement as part of a four-year option. Entry is through UCAS (course code L200, institution code M20); the school does not interview.",
    officialProgramUrl:
      "https://www.manchester.ac.uk/study/undergraduate/courses/2027/00675/bsocsc-politics-and-international-relations/",
    campus: "Oxford Road campus, Manchester",
    programType: "Full-time",
    degree: "Bachelor of Social Sciences (BSocSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including at least one subject from the school's list of acceptable subjects, with preference for two (contextual offer: ABB)",
      "IB Diploma: 36 points with 6,6,6 at Higher Level",
      "English language (any one of): GCSE/IGCSE English Language grade C; IELTS 6.5 overall with no component below 6.0 (in-person tests at official IELTS centres only); TOEFL iBT 90 overall with at least 20 in each section; IGCSE English as a Second Language grade B",
      "No interview",
      "Other UK and international qualifications: see the entry requirements section of the Manchester course page",
    ],
  },
];
