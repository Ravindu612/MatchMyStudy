import type { Program } from "../../programs";

// University of Waterloo undergraduate programs (September 2027 entry).
// Sourced from uwaterloo.ca/future-students program, admission requirements, deadlines, tuition and English language pages.

export const universityOfWaterlooPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "uwaterloo-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (regular) or 5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 73,000 for international students, CAD 18,000 for Canadian students from outside Ontario and CAD 16,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Waterloo's Computer Science program, offered by the Faculty of Mathematics, starts from first principles, so no previous coding experience is needed. First year pairs functional programming and algorithm design with honours algebra and calculus, and upper years draw on more than 70 CS courses in areas such as algorithms, artificial intelligence, human-computer interaction and security. Students can add specializations such as Artificial Intelligence, Bioinformatics, Game Design or Software Engineering, switch to the Data Science major after first year, and in the co-op stream graduate with up to two years of paid work experience.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/computer-science",
    campus: "Waterloo",
    programType: "Co-op or regular",
    degree: "Bachelor of Computer Science (BCS) or Bachelor of Mathematics (BMath) in Computer Science",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents and Admission Information Form due February 15, 2027)",
    admissionRequirements: [
      "Admission Information Form required (due February 15, 2027)",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course; admission average: individual selection from the low to mid-90s (Grade 11 U Introduction to Computer Science recommended)",
      "IB: HL Mathematics Analysis and Approaches (minimum 6) and HL or SL English A; total 32 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Software Engineering",
    slug: "uwaterloo-software-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Software Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Software Engineering at Waterloo is offered by both the Faculty of Engineering and the Faculty of Mathematics and treats software as an engineering discipline. Alongside programming, students study algorithms, software architecture, digital hardware and human-computer interface design, and learn to manage projects and work in teams. The program is co-op only, so classroom terms alternate with paid work terms at technology companies and start-ups from the end of first year.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/software-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Software Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form, a Software Engineering supplementary information form and an online Software Engineering interview are required (due February 1, 2027)",
      "Programming experience (a Grade 11 or 12 computing course or equivalent, or self-study) is required",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the low to mid-90s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "uwaterloo-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Computer Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Computer Engineering covers the full computing stack, from chips, circuits and wiring through to software, networks and communications. Students combine lectures with lab work on hardware-software interaction and complete two years of paid co-op work terms in this co-op-only program. Graduates go into roles such as software developer, hardware engineer and systems designer in industries ranging from automotive and aerospace to health care and security.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/computer-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Applied Science in Computer Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form and online video interview are required (due February 1, 2027); students are selected individually, not on grades alone",
      "Previous programming experience is recommended",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the high 80s to low 90s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "uwaterloo-electrical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Electrical Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Electrical Engineering at Waterloo builds a foundation in electromagnetism, circuits, algorithms and instrumentation, then lets students focus on areas such as power and clean energy, electric vehicles, the Internet of Things, quantum computing, integrated circuit design or machine learning. Hands-on lab work starts in first year and the program is co-op only, giving students paid work terms throughout the degree.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/electrical-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Applied Science in Electrical Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form and online video interview are required (due February 1, 2027); students are selected individually, not on grades alone",
      "Previous programming experience is recommended",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the high 80s to low 90s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "uwaterloo-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Mechanical Engineering gives students a broad grounding in mechanical design, mechanics, power, controls and manufacturing, starting with math, physics, chemistry and engineering design in first year. Students learn to lead multidisciplinary teams and to make machines lighter, cleaner and more reliable, and the co-op-only format means they graduate with about two years of relevant paid experience.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/mechanical-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Applied Science in Mechanical Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form and online video interview are required (due February 1, 2027); students are selected individually, not on grades alone",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the high 80s to low 90s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Mechatronics Engineering",
    slug: "uwaterloo-mechatronics-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Mechatronics Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Mechatronics Engineering, the first program of its kind in Canada, combines mechanical design, control systems, programming and sensors to build smart machines such as robots, drones, autonomous vehicles and 3D printers. Students build and test real devices in Waterloo's labs and complete two years of paid co-op work terms, preparing for careers in robotics, aerospace, automotive and manufacturing.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/mechatronics-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Applied Science in Mechatronics Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form and online video interview are required (due February 1, 2027); students are selected individually, not on grades alone",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the high 80s to low 90s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Systems Design Engineering",
    slug: "uwaterloo-systems-design-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Systems Design Engineering teaches students to look at a whole system - people, materials, software and tools - when solving an engineering problem. The curriculum mixes the fundamentals of electrical, mechanical and software engineering with design methods, modelling, simulation, human factors, optimization and machine learning, taught through team projects. Students can specialize in areas such as human factors and design, biomedical systems or vision and intelligent systems, and the program is co-op only.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/systems-design-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Applied Science in Systems Design Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form and online video interview are required (due February 1, 2027); students are selected individually, not on grades alone",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the high 80s to low 90s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Civil Engineering",
    slug: "uwaterloo-civil-engineering",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Civil Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 21,000 for Canadian students from outside Ontario and CAD 19,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Civil Engineering prepares students to design, build and manage large-scale infrastructure such as bridges, transportation networks, buildings and municipal water systems, with growing emphasis on climate change, ageing infrastructure and sustainable cities. First year covers math, physics, chemistry and introductory engineering, and a wide choice of electives lets students shape the degree. The co-op-only program includes six paid work terms with construction and engineering firms, governments or employers abroad.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/civil-engineering",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Applied Science in Civil Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (documents, Admission Information Form and online interview due February 1, 2027)",
    admissionRequirements: [
      "Admission Information Form and online video interview are required (due February 1, 2027); students are selected individually, not on grades alone",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, Chemistry, Physics and English (ENG4U), each with a minimum final grade of 70%; admission average: individual selection from the mid to high 80s",
      "IB: Mathematics Analysis and Approaches and Physics (HL recommended), Chemistry and English A, minimum 4 in each, plus one other HL or SL course (minimum 4); total 31 with 6s and 7s recommended (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Accounting and Financial Management",
    slug: "uwaterloo-accounting-and-financial-management",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Accounting & Finance",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 58,000 for international students, CAD 10,000 for Canadian students from outside Ontario and CAD 9,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term. Waterloo notes that tuition for accounting and finance programs is significantly higher in upper years.",
    description:
      "Accounting and Financial Management (AFM), offered by Waterloo's School of Accounting and Finance, focuses on how business decisions are made using accounting, finance, data and analytics. From first year students take the program's Value Suite courses on ethics and decision-making and its Tech Stack courses in data and digital tools, then choose career specializations and professional pathways such as CPA or CFA. AFM is co-op only, and applicants may apply to AFM or to Sustainability and Financial Management, but not both.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/accounting-and-financial-management",
    campus: "Waterloo",
    programType: "Co-op only",
    degree: "Bachelor of Accounting and Financial Management (BAFM)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents due February 15, 2027)",
    admissionRequirements: [
      "No Admission Information Form is used for this program",
      "Ontario: six Grade 12 U/M courses including any Grade 12 U English, Advanced Functions and Calculus and Vectors, each with a minimum final grade of 75%; admission average: mid-80s",
      "IB: HL or SL English A (minimum 4) or HL English B (minimum 5), and HL (recommended) or SL Mathematics Analysis and Approaches (minimum 4); total 28 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Data Science",
    slug: "uwaterloo-data-science",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Data Science",
    duration: "4 years (regular) or 5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 62,000 for international students, CAD 10,000 for Canadian students from outside Ontario and CAD 9,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Waterloo's Data Science program combines computer science, mathematics and statistics to collect, analyse and draw decisions from large data sets such as sensor readings, images, video and medical scans. Students can apply directly to Data Science or enter through Computer Science or Mathematics and choose the major at the end of first year. It is offered in co-op or regular streams, and graduates work in fields such as medicine, business, advertising, entertainment and public health.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/data-science",
    campus: "Waterloo",
    programType: "Co-op or regular",
    degree: "Bachelor of Computer Science or Bachelor of Mathematics in Data Science",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents and Admission Information Form due February 15, 2027)",
    admissionRequirements: [
      "Admission Information Form required (due February 15, 2027)",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course; admission average: individual selection from the mid-80s if applying directly to Data Science or through Mathematics, low to mid-90s if applying through Computer Science",
      "IB: HL Mathematics Analysis and Approaches (minimum 6) and HL or SL English A; total 30 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Mathematics",
    slug: "uwaterloo-mathematics",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Mathematics",
    duration: "4 years (regular) or 5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 62,000 for international students, CAD 10,000 for Canadian students from outside Ontario and CAD 9,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Waterloo's Faculty of Mathematics, which offers more than 500 math courses, admits students to a common first year in mathematics and computer science before they pick one of 16 majors. Options range from Pure and Applied Mathematics, Statistics and Combinatorics and Optimization to Actuarial Science, Mathematical Finance, Biostatistics and Data Science. Depending on the major, students can follow the co-op stream for paid work experience or the regular stream to finish sooner.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/mathematics",
    campus: "Waterloo",
    programType: "Co-op or regular",
    degree: "Bachelor of Mathematics in one of 16 majors",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents and Admission Information Form due February 15, 2027)",
    admissionRequirements: [
      "Admission Information Form required (due February 15, 2027)",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course; admission average: individual selection from the mid-80s (Grade 11 U Introduction to Computer Science recommended)",
      "IB: HL Mathematics Analysis and Approaches (minimum 6) and HL or SL English A; total 30 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Actuarial Science",
    slug: "uwaterloo-actuarial-science",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Mathematics",
    duration: "4 years (regular) or 5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 62,000 for international students, CAD 10,000 for Canadian students from outside Ontario and CAD 9,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Actuarial Science at Waterloo trains students to measure and price financial risk, with courses in the mathematics of finance, risk theory and pension mathematics taught by professional actuaries. Electives in computer science, arts and further mathematics build the technical and communication skills employers look for, and popular add-ons include the Finance and Predictive Analytics specializations. Students apply to Mathematics and choose Actuarial Science as their major at the end of first year, in either the co-op or regular stream.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/actuarial-science",
    campus: "Waterloo",
    programType: "Co-op or regular",
    degree: "Bachelor of Mathematics in Actuarial Science",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents and Admission Information Form due February 15, 2027)",
    admissionRequirements: [
      "Apply to Mathematics and choose the Actuarial Science major at the end of first year; Admission Information Form required (due February 15, 2027)",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course; admission average: individual selection from the mid-80s (Grade 11 U Introduction to Computer Science recommended)",
      "IB: HL Mathematics Analysis and Approaches (minimum 6) and HL or SL English A; total 30 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Business Administration (Laurier) and Computer Science (Waterloo) Double Degree",
    slug: "uwaterloo-business-administration-computer-science-double-degree",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Computer Science",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 20,000 for Canadian students from outside Ontario and CAD 17,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "This double degree lets students earn a co-op Bachelor of Computer Science from Waterloo and a Bachelor of Business Administration from Wilfrid Laurier University in five years. Computer science courses (programming, data structures, algorithms, software engineering and operating systems) are taken at Waterloo, while finance, accounting, marketing, organizational behaviour and other business courses are taken at Laurier, within walking distance. Students complete four to five co-op work terms and can study abroad through either university.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree",
    campus: "Waterloo (business courses at nearby Wilfrid Laurier University)",
    programType: "Co-op only",
    degree: "Bachelor of Computer Science (BCS, Waterloo) and Bachelor of Business Administration (BBA, Wilfrid Laurier University)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents and Admission Information Form due February 15, 2027)",
    admissionRequirements: [
      "Both Waterloo and Laurier admit students to this program; Waterloo recommends applying to both (the academic program is the same either way)",
      "Admission Information Form required (due February 15, 2027)",
      "Ontario: six Grade 12 U/M courses including Advanced Functions, Calculus and Vectors, any Grade 12 U English and one other 4U course; admission average: individual selection from the low to mid-90s (Grade 11 U Introduction to Computer Science recommended)",
      "IB: HL Mathematics Analysis and Approaches (minimum 6) and HL or SL English A; total 32 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Architecture",
    slug: "uwaterloo-architecture",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Architecture",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 75,000 for international students, CAD 15,000 for Canadian students from outside Ontario and CAD 14,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 8,100 (laptop, studio supplies, equipment and field trips) extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Waterloo's Bachelor of Architectural Studies is a pre-professional, studio-based program taught at the School of Architecture in Cambridge, about 30 km from the main campus. Design studio courses form the core of the program from first year, supported by courses in visual and digital media, architectural history, building materials and construction, and environmental design. The program is co-op only, with paid work terms in Canada and abroad.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/architecture",
    campus: "Cambridge (School of Architecture)",
    programType: "Co-op only",
    degree: "Bachelor of Architectural Studies",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents due February 15, 2027)",
    admissionRequirements: [
      "Two-stage admission: applicants are shortlisted on grades, then those advancing (invited in early March) submit a digital portfolio (due mid to late March) and attend an interview in April (in person in Cambridge or virtual); no Admission Information Form",
      "Ontario: six Grade 12 U/M courses including English (ENG4U, minimum 78%), Advanced Functions or Calculus and Vectors (minimum 70%) and Physics (minimum 70%); admission average: individual selection from the mid-80s",
      "IB: HL or SL English A (minimum 4), HL or SL Mathematics Analysis and Approaches or HL Applications and Interpretation (minimum 4) and Physics (HL recommended, minimum 4); total 31 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

  {
    name: "Health Sciences",
    slug: "uwaterloo-health-sciences",
    level: "Bachelor",
    universitySlug: "university-of-waterloo",
    universityName: "University of Waterloo",
    country: "Canada",
    field: "Health Sciences",
    duration: "4 years (regular) or 5 years (co-op)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition and incidental fees: CAD 54,000 for international students, CAD 10,000 for Canadian students from outside Ontario and CAD 9,000 for Ontario residents. Waterloo's estimate for two terms (eight months) based on fees for students starting in September 2026; books and supplies about CAD 1,500 extra. Co-op students also pay a co-op fee of CAD 836 per school term.",
    description:
      "Health Sciences in Waterloo's Faculty of Health takes a 'cell to society' view of human health, combining physiology, biology and chemistry with the social determinants of health, epidemiology and health policy. Students work on real-world projects and learn to analyse health data and research. The program is offered in a four-year regular stream or a five-year co-op stream with 20 months of paid work, and prepares graduates for further study such as medicine or occupational therapy or for work in health research, policy and public health.",
    officialProgramUrl:
      "https://uwaterloo.ca/future-students/programs/health-sciences",
    campus: "Waterloo",
    programType: "Co-op or regular",
    degree: "Bachelor of Science in Health Sciences",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "February 1, 2027 (documents due February 15, 2027)",
    admissionRequirements: [
      "Co-op and regular streams are separate choices; Waterloo recommends applying to both if you want to be considered for both. No Admission Information Form is used",
      "Ontario: six Grade 12 U/M courses including any Grade 12 U English, any Grade 12 U Mathematics, Biology and Chemistry, each with a minimum final grade of 70%; admission average: mid-80s (regular) and high 80s (co-op)",
      "IB: HL or SL Mathematics Analysis and Approaches or HL Applications and Interpretation, HL or SL Chemistry, HL or SL Biology and HL or SL English A (minimum 4 each; or HL English B minimum 5); total 28 (IB diploma with at least three HL courses)",
      "Not studying in Ontario or IB? Waterloo's admission requirements tool lists the equivalent courses for other provinces and countries",
      "English language proof, if required (four most recent years of full-time study not in English): IELTS Academic 6.5 overall (6.5 writing and speaking, 6.0 reading and listening), TOEFL iBT 4.5 overall with 5 in writing and speaking (90 overall with 25/25 for tests before January 21, 2026), PTE Academic 63 (65 writing and speaking) or Duolingo 120 (125 Literacy and Production), due by the document deadline",
    ],
  },

];
