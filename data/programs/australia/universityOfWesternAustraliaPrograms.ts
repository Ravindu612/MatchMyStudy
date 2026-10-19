import type { Program } from "../../programs";

// University of Western Australia (Perth, Western Australia) undergraduate programs for international students.
// Sources checked October 16, 2026:
// - UWA 2026 Handbook course pages (handbooks.uwa.edu.au) for course codes, CRICOS, credit points, majors, duration and international availability
// - UWA Future Students course pages (uwa.edu.au/study/courses/...) for ATAR minima, intakes, prerequisites and course summaries
// - UWA International Undergraduate fee browser for 2026 annual fees (fees.uwa.edu.au/Browse/BrowseCourses?feeType=INTUG&feeYear=2026)
// - UWA English language requirements (uwa.edu.au/study/how-to-apply/pathways-and-eligibility/english-language-requirements)
// - UWA international applicants page for application process, AUD $150 application fee and 2027 Semester 1/2 closing dates
// Fees below are UWA's published 2026 annual international onshore undergraduate course fees for a standard 48-credit-point full-time load; fees are charged per credit point and are indexed annually.

const FEE_EXTRAS =
  "UWA charges international onshore undergraduate tuition per credit point at a course-specific rate; the annual figure assumes a standard 48-point full-time load. Fees are reviewed each year and you pay the rate that applies in each year you study. The Student Services and Amenities Fee (SSAF), Overseas Student Health Cover (required for the student visa), textbooks, equipment and living costs are extra. High-achieving international applicants are automatically considered for UWA's Global Excellence Scholarship when they apply.";

const APPLY =
  "International applicants apply online through the UWA Application Portal or through an authorised UWA agent (AUD $150 non-refundable application fee when applying direct or via an agent). Supporting documents typically include academic results, English test results and a passport copy. You can apply up to two years before your intended start. For 2027 entry, UWA's published international closing dates are 11 January 2027 for Semester 1 (February) and 7 June 2027 for Semester 2 (July) for most countries; applicants from a listed set of earlier-deadline countries (including India, Pakistan, Sri Lanka, Vietnam, Philippines, Bangladesh, Nepal and many African countries) must apply by 28 December 2026 (Semester 1) or 24 May 2027 (Semester 2). Dates can change and some courses differ, so confirm on the UWA international applicants page and leave time for the student visa.";

const ENGLISH_MIN =
  "English (UWA Minimum standard ELC, scores valid for two years): IELTS Academic 6.5 overall with no band below 6.0; or TOEFL iBT 82 (speaking and writing 20, listening and reading 17); or PTE Academic 64 with no band below 60; or Cambridge C1 Advanced / C2 Proficiency overall 170 (speaking and writing 175, listening and reading 165); or Duolingo 125 (speaking 115, writing 125, reading 115, listening 110); or another accepted qualification on UWA's English language requirements page. Applicants below the requirement may consider the Academic English and Study Skills Bridging Course at UWA CELT";

const ACADEMIC_EQ =
  "Academic: a recognised senior secondary qualification (or equivalent overseas qualification) at or above UWA's published minimum ATAR for this course, or another pathway UWA recognises (foundation, diploma, prior tertiary study). Meeting the minimum ATAR does not guarantee a place";

export const universityOfWesternAustraliaPrograms: Program[] = [
  {
    name: "Engineering (Honours)",
    slug: "uwa-engineering-honours",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time (192 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BH011): A$53,700 for a standard full-time load (48 credit points), or about A$1,119 per credit point. ${FEE_EXTRAS}`,
    description:
      "UWA's Bachelor of Engineering (Honours) is a four-year specialist degree developed with industry around relevance, integration and excellence. Students choose one of nine majors — Automation and Robotics, Biomedical, Chemical, Civil, Electrical and Electronic, Environmental, Mechanical, Mining, or Software — and complete a 12-week (450-hour) work-integrated practicum plus hands-on intensives. The course is accredited by Engineers Australia; Chemical Engineering is also accredited by IChemE, and Software Engineering by the Australian Computer Society.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-engineering-honours",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Engineering (Honours) (BH011, CRICOS 106081B)",
    workIntegrated: true,
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BH011; CRICOS 106081B. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Prerequisites: a scaled score of at least 50 in Mathematics Methods ATAR, plus a scaled score of at least 50 in one of Chemistry ATAR, Physics ATAR or Mathematics Specialist ATAR (all three are recommended; missing subjects can be picked up with free electives in first year)",
      ENGLISH_MIN,
      "Professional accreditation: Engineers Australia (all majors); IChemE (Chemical); Australian Computer Society (Software)",
    ],
  },

  {
    name: "Advanced Computer Science (Honours)",
    slug: "uwa-advanced-computer-science-honours",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Computer Science",
    duration: "4 years full-time (192 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BH008): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Advanced Computer Science (Honours) builds a strong core in the principles of computation and information systems, then specialises through streams in Artificial Intelligence, Computing and Data Science, International Cybersecurity, or Quantum Computing. Students finish with a research project that develops research and communication skills. The degree is aimed at high-achieving students who want advanced technical depth across AI, data, cybersecurity and quantum computing.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-advanced-computer-science",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Advanced Computer Science (Honours) (BH008, CRICOS 102867M)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Confirm mid-year availability for your preferred stream on the course page.`,
    admissionRequirements: [
      "UWA course code BH008; CRICOS 102867M. Minimum ATAR 90 (or equivalent) under the 2026 Handbook course rules",
      ACADEMIC_EQ,
      "Prerequisite: Mathematics Methods ATAR (scaled mark of at least 50%, or equivalent). Progression rules require a minimum weighted average mark; students who do not maintain the required WAM may transfer to another bachelor's course",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Commerce",
    slug: "uwa-commerce",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP002): A$50,700 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "UWA's Bachelor of Commerce develops analytical, communication and problem-solving skills with a global business perspective for careers in business, government and the not-for-profit sector. Students choose from majors including Accounting, Business Law, Business Economics, Finance, Human Resource Management, Management, Marketing and Business Analytics, and can take real-world experiences through industry networks and work-integrated options.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-commerce",
    campus: "UWA Crawley campus, Perth (also offered at Albany)",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Commerce (BP002, CRICOS 003006C)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP002; CRICOS 003006C. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major on the major page",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Science",
    slug: "uwa-science",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Science",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP004): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Science focuses on understanding and improving the natural world through observation, experimentation, modelling and calculation. Students choose from a wide range of science majors — from chemistry, computer science and mathematics to biological, earth and environmental fields — and can combine majors across Science, Arts or Commerce. The degree prepares graduates for scientific careers and for further study in specialised science and professional pathways.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-science",
    campus: "UWA Crawley campus, Perth (also offered at Albany)",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Science (BP004, CRICOS 068914G)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP004; CRICOS 068914G. Minimum ATAR 70 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major (many science majors recommend or require Mathematics Methods and related ATAR subjects)",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Biomedical Science",
    slug: "uwa-biomedical-science",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Health Sciences",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP006): A$51,400 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Biomedical Science is a practical health-science degree that builds knowledge of how the human body works in healthy and diseased states. Students specialise in one or two of about ten majors — such as Anatomy and Human Biology, Biochemistry and Molecular Biology, Microbiology and Immunology, Neuroscience, Pathology and Laboratory Medicine, Pharmacology, and Physiology — or combine a biomedical major with Arts, Commerce or Science. It supports careers in health, research and pathways into postgraduate professional health courses.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-biomedical-science",
    campus: "UWA Crawley campus, Perth (also offered at Albany)",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Biomedical Science (BP006, CRICOS 095001B)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP006; CRICOS 095001B. Minimum ATAR 70 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Business",
    slug: "uwa-business",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP009): A$50,700 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "UWA's Bachelor of Business develops practical skills across management, marketing, applied business economics, leadership, communication, innovation and entrepreneurship. The course emphasises real-world industry experience through internships and work-integrated learning, and is designed for students who want a broad business foundation rather than a single specialised commerce major track.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-business",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Business (BP009, CRICOS 102866A)",
    workIntegrated: true,
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP009; CRICOS 102866A. Minimum ATAR 70 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Psychology",
    slug: "uwa-psychology",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP030): A$49,200 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Psychology builds a scientific understanding of human thought and behaviour, the psychological processes behind them, and how those processes relate to brain function. Students gain group research experience, explore applications of psychology in business settings, and learn about Indigenous heritage and knowledge. The degree is a common first step toward further study required for professional registration as a psychologist in Australia.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-psychology",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Psychology (BP030, CRICOS 107443F)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: Semester 1 and Semester 2.`,
    admissionRequirements: [
      "UWA course code BP030; CRICOS 107443F. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Arts",
    slug: "uwa-arts",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Arts and Humanities",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP001): A$42,500 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "UWA's Bachelor of Arts offers a wide choice of majors across the humanities, social and cultural studies, languages and music — more than 30 majors on the course page. Students develop research, writing and critical-thinking skills that transfer into media, government, education, culture and business careers, and can combine Arts majors with study from other bachelor's degrees.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-arts",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Arts (BP001, CRICOS 003005D)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP001; CRICOS 003005D. Minimum ATAR 70 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major (language and music majors may have additional requirements)",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Economics",
    slug: "uwa-economics",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Economics",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP013): A$50,300 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Economics trains students to analyse how individuals, firms and governments make choices and what those choices mean for society now and in the future. The specialised degree builds quantitative and policy skills for careers in government, consulting, finance, research and international organisations, and can be combined with Commerce or extended into a Master of Economics pathway.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-economics",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Economics (BP013, CRICOS 107721M)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP013; CRICOS 107721M. Minimum ATAR 85 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major (mathematics preparation is typically recommended for economics)",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Environmental Science",
    slug: "uwa-environmental-science",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Environmental Science",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP022): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Environmental Science prepares students to protect and manage natural systems through science-based study of environmental processes, conservation and sustainability. Fieldwork and laboratory work are part of the learning experience. Graduates move into environmental consultancy, government agencies, resource management and further study such as UWA's Master of Environmental Science combined pathway.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-environmental-science",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Environmental Science (BP022, CRICOS 107578B)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: Semester 1 and Semester 2.`,
    admissionRequirements: [
      "UWA course code BP022; CRICOS 107578B. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for your preferred major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Marine Science",
    slug: "uwa-marine-science",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Marine Science",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP023): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Marine Science covers the full breadth of the discipline, combining knowledge of marine life with a solid understanding of the physical ocean environment. Through lectures, laboratory work and field excursions, students learn how marine ecosystems function and how to manage them under climate and human pressures — a natural fit with Perth's Indian Ocean setting.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-marine-science",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Marine Science (BP023, CRICOS 107723J)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: Semester 1 and Semester 2.`,
    admissionRequirements: [
      "UWA course code BP023; CRICOS 107723J. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for the Marine Science major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Agricultural Science",
    slug: "uwa-agricultural-science",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Agriculture",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP019): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Agricultural Science prepares graduates for future farming systems by integrating agricultural technology (AgTech) with core agricultural science. Students develop skills in digital agriculture, agricultural economics, soil science, and crop and livestock production, learning how to combine traditional agricultural systems with new digital tools for better farm efficiency and productivity.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-agricultural-science",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Agricultural Science (BP019, CRICOS 107574F)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: Semester 1 and Semester 2.`,
    admissionRequirements: [
      "UWA course code BP019; CRICOS 107574F. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for the Agricultural Science and Technology major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "International Relations",
    slug: "uwa-international-relations",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "International Relations",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP058): A$42,500 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "UWA's Bachelor of International Relations is a practice-oriented degree that builds conceptual knowledge and real-world experience for roles in government, business and non-profit organisations. Students study global politics, diplomacy and international affairs in a specialised major structure designed for careers that respond to crises and change on a global scale.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-international-relations",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of International Relations (BP058, CRICOS 115274G)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP058; CRICOS 115274G. Minimum ATAR 70 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Satisfy any prerequisites listed for the International Relations major",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Human Sciences",
    slug: "uwa-human-sciences",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Health Sciences",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP031): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Human Sciences takes an interdisciplinary look at what it means to be human — structure, function, development, genetics, adaptation, performance and evolution. Majors include Human Science and Neuroscience, Human Sciences (Anatomy and Physiology), and Human Sciences and Data Analytics. The degree suits students interested in human biology, health, performance science and data-driven health analysis.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-human-sciences",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Human Sciences (BP031, CRICOS 108367E)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: Semester 1 and Semester 2.`,
    admissionRequirements: [
      "UWA course code BP031; CRICOS 108367E. Minimum ATAR 80 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Mathematics: Mathematics Methods ATAR, or Mathematics Applications ATAR with a mathematics unit taken in the first year; students without ATAR mathematics take two first-year mathematics units",
      ENGLISH_MIN,
    ],
  },

  {
    name: "Mathematics",
    slug: "uwa-mathematics",
    level: "Bachelor",
    universitySlug: "university-of-western-australia",
    universityName: "University of Western Australia",
    country: "Australia",
    field: "Mathematics",
    duration: "3 years full-time (144 credit points)",
    language: "English",
    tuitionNote: `2026 international annual fee (UWA fee browser, course BP059): A$52,000 for a standard full-time load (48 credit points). ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Mathematics gives high-achieving students a solid foundation in calculus, linear algebra and statistics, then moves into advanced topics such as complex systems, networks, abstract algebra, analysis, topology, probability theory and numerical methods. The specialised extended major structure prepares graduates for quantitative careers in data science, finance, research, technology and further postgraduate study.",
    officialProgramUrl:
      "https://www.uwa.edu.au/study/courses/bachelor-of-mathematics",
    campus: "UWA Crawley campus, Perth",
    programType: "Full-time (on campus)",
    degree: "Bachelor of Mathematics (BP059, CRICOS 114341J)",
    intake: "February (Semester 1) and July (Semester 2)",
    applicationDeadline: `${APPLY} Course intakes: February and July.`,
    admissionRequirements: [
      "UWA course code BP059; CRICOS 114341J. Minimum ATAR 90 (or equivalent) as published on the UWA course page",
      ACADEMIC_EQ,
      "Mathematics preparation: ATAR Mathematics Specialist or ATAR Mathematics Methods; students below this level may be able to take additional first-year mathematics units to meet the requirement",
      ENGLISH_MIN,
    ],
  },
];
