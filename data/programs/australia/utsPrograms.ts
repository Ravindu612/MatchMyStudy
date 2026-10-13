import type { Program } from "@/data/programs";

// University of Technology Sydney (UTS) undergraduate courses for international students, City campus (Ultimo, Sydney).
// Sources (checked October 13, 2026): UTS course pages on uts.edu.au/courses viewed as an international student
// (course codes, CRICOS codes, duration, intakes, 2027 indicative international fees, admission and English requirements,
// assumed knowledge, professional recognition), the UTS 2027 International Undergraduate Course Summary Table (PDF,
// information correct as of June 2026: fee per session, international intakes, indicative entry scores), UTS's
// English language requirements page, and UTS's international applications page (how to apply, closing dates).
// Fees are 2027 indicative amounts in Australian dollars; entry scores are indicative and do not guarantee an offer.

const FEE_EXTRAS =
  "Fees are reviewed every year. Overseas Student Health Cover (OSHC, required for the student visa), the Student Services and Amenities Fee (SSAF), textbooks and living costs are extra. Domestic undergraduate offers are usually Commonwealth Supported Places (CSP); domestic students should check UTS for the current student contribution.";

const APPLY_FEB_JUL =
  "International applicants apply directly to UTS through the UTS Application Portal or the international undergraduate application form (an application fee applies). Closing dates on UTS's international applications page (checked October 13, 2026): applicants based outside Australia, 30 November for the Autumn session (February/March start, so 30 November 2026 for Autumn 2027) and 30 April for the Spring session (July start, so 30 April 2027 for Spring 2027); applicants based in Australia, 15 January (Autumn) and 31 May (Spring). Complete applications are normally processed in about one to two weeks.";

const APPLY_FEB_ONLY =
  "International applicants apply directly to UTS through the UTS Application Portal or the international undergraduate application form (an application fee applies). Closing dates on UTS's international applications page (checked October 13, 2026) for the Autumn session (February/March start): 30 November for applicants based outside Australia (30 November 2026 for Autumn 2027) and 15 January for applicants based in Australia (15 January 2027). Complete applications are normally processed in about one to two weeks.";

const ACADEMIC_BASE =
  "Academic: an Australian Year 12 qualification, an Australian Qualifications Framework (AQF) Diploma, or an equivalent Australian or overseas qualification at the required level; meeting the minimum does not guarantee a place";

const ENGLISH_STANDARD =
  "English language (UTS standard undergraduate requirement): IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5. Test results must be less than two years old, and applicants with recognised previous study in English may already meet the requirement";

const scores = (atar: string, ib: string, sat: string) =>
  `Indicative 2027 international entry scores (UTS 2027 International Undergraduate Course Summary Table, correct as of June 2026): ATAR ${atar}; IB Diploma ${ib}; SAT ${sat}. The table also lists equivalent scores for Gaokao, GCE A Levels, HKDSE, Indian CBSE and ISC, STPM, Singapore A Levels and UTS College Foundation Studies`;

export const utsPrograms: Program[] = [
  {
    name: "Information Technology",
    slug: "uts-information-technology",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Information Technology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load of 48 credit points a year); indicative total course tuition A$178,680.38, which includes UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "UTS's Bachelor of Information Technology mixes computing theory with hands-on work on real IT problems, so graduates leave with both technical depth and business sense. Core subjects cover web systems, databases, networking, requirements modelling and project management, alongside communication and professional practice for IT. The course suits people heading for roles such as software developer, systems or business analyst, network specialist, web developer or IT project manager, and it can lead on to honours or postgraduate study. Graduates can apply for professional-level membership of the Australian Computer Society.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-information-technology",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Information Technology (UTS course C10148, CRICOS 040941A)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 603201).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("75", "27 (predicted IB 32)", "1120"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Advanced and any two units of English; Mathematics Extension 1 and English Advanced are recommended",
      ENGLISH_STANDARD,
      "Professional recognition: graduates are eligible to apply for professional-level membership of the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Computing Science",
    slug: "uts-computing-science",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load); indicative total course tuition A$178,680.38, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Computing Science is aimed at students who want technical computer science roles in industry, with a specialisation chosen inside the degree. Alongside strong programming and computing foundations, students build problem-solving, teamwork, project management and communication skills. International students take the Standard program; the cadetship-based Industry Degree Academy (IDeA) version is offered only to domestic school leavers. Typical paths include software engineer, data scientist, systems analyst, cybersecurity analyst and network specialist, and a four-year honours version (C09119) is available for research-minded students.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-computing-science",
    campus: "City campus, Sydney",
    programType: "Full-time (Standard program)",
    degree: "Bachelor of Computing Science (UTS course C10476, CRICOS 118360G)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (Standard program code 603232; IDeA program code 603231, Autumn only).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("75", "27 (predicted IB 32)", "1120"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Advanced and any two units of English; Mathematics Extension 1 and English Advanced are recommended",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Program mode: international students are admitted to the Standard program only (the IDeA cadetship program is for domestic current school leavers). UTS's 2027 international summary table lists February and July intakes; the course page currently shows Autumn session dates, so confirm Spring availability with UTS before applying",
      "Recognition of prior learning is not available for this course",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "uts-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Artificial Intelligence",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load); indicative total course tuition A$178,680.38, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "UTS's Bachelor of Artificial Intelligence trains students to design, build and test AI systems, from framing a problem to validating a working solution. The course covers machine learning, deep learning, reinforcement learning, image processing and natural language processing, with attention to data analysis and the ethical limits of AI. International students take the Standard program (the IDeA cadetship version is domestic only). Graduates target roles such as machine learning engineer, AI analyst or specialist, computer vision engineer and NLP engineer, and can apply for professional-level membership of the Australian Computer Society.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-artificial-intelligence",
    campus: "City campus, Sydney",
    programType: "Full-time (Standard program; part-time also available)",
    degree: "Bachelor of Artificial Intelligence (UTS course C10474, CRICOS 110746J)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (Standard program code 603236; IDeA program code 603238, Autumn only).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("78", "28 (predicted IB 33)", "1140"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Advanced and any two units of English; Mathematics Extension 1 and English Advanced are recommended",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Professional recognition: graduates of the City campus course are eligible to apply for professional-level membership of the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Cybersecurity",
    slug: "uts-cybersecurity",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Cybersecurity",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load); indicative total course tuition A$178,680.38, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Cybersecurity prepares students to build and run secure networks, systems and devices, on top of a solid computing and IT foundation. Subjects span system, information, network, cloud, mobile and IoT security, privacy preservation, threat intelligence and incident response, taught through hands-on work with current tools. International students take the Standard program. Graduates move into roles such as security analyst, security architect, incident responder or information security auditor and can apply for cybersecurity professional-level membership of the Australian Computer Society.",
    officialProgramUrl: "https://www.uts.edu.au/courses/bachelor-of-cybersecurity",
    campus: "City campus, Sydney",
    programType: "Full-time (Standard program; part-time also available)",
    degree: "Bachelor of Cybersecurity (UTS course C10471, CRICOS 110749F)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (Standard program code 603235; IDeA program code 603237, Autumn only).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("78", "28 (predicted IB 33)", "1140"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Advanced and any two units of English; Mathematics Extension 1 and English Advanced are recommended",
      ENGLISH_STANDARD,
      "Program mode: the Standard program is open to domestic and international students; the IDeA cadetship program is only for domestic current school leavers",
    ],
  },

  {
    name: "Software Engineering",
    slug: "uts-software-engineering",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Software Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load); indicative total course tuition A$251,437.94 over four years, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "Software Engineering is a major of UTS's four-year Bachelor of Engineering (Honours), teaching students to design, build and evaluate software for complex real-world problems. Eight core engineering subjects and 20 major subjects are combined with electives and a professional engineering practice stream, plus skills in project management, design, innovation and commercialisation. The major is fully accredited by Engineers Australia at Professional Engineer level and recognised under the Washington Accord. Graduates work as software engineers, DevOps engineers, software architects, application developers and, later, technical leaders.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-engineering-honours-software",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Engineering (Honours), Software Engineering major (UTS course C09066, CRICOS 084098A)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 603086).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("75", "27 (predicted IB 32)", "1120"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Extension 1, Physics and English Standard; English Advanced is recommended, and a sound knowledge of programming fundamentals is recommended for this major",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Professional recognition: fully accredited by Engineers Australia at the level of Professional Engineer and recognised by Washington Accord signatories",
    ],
  },

  {
    name: "Civil Engineering",
    slug: "uts-civil-engineering",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Civil Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load); indicative total course tuition A$251,437.94 over four years, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "Civil Engineering at UTS is a major of the four-year Bachelor of Engineering (Honours) that teaches students to analyse, design and deliver infrastructure using mathematics, lab and field testing and computer simulation. Study moves from civil engineering fundamentals through applied practice to professional practice and project delivery, with sub-majors such as civil and environmental engineering. The degree is accredited by Engineers Australia at Professional Engineer level and recognised internationally under the Washington Accord. Graduates head into infrastructure consulting, transport projects, construction and asset management.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-engineering-honours-civil",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Engineering (Honours), Civil Engineering major (UTS course C09066, CRICOS 084098A)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 603016).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("75", "27 (predicted IB 32)", "1120"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Extension 1, Physics and English Standard; English Advanced is recommended, and Chemistry is recommended for the Civil major",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Professional recognition: accredited by Engineers Australia at the level of Professional Engineer and recognised by Washington Accord signatories",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "uts-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Mechanical Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$57,240 for the first year (A$28,620 per session at a full-time load); indicative total course tuition A$251,437.94 over four years, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "Mechanical Engineering at UTS is a major of the four-year Bachelor of Engineering (Honours) focused on how solids, fluids, heat and electricity interact and how to calculate and control the forces involved. Students also take electrical engineering subjects on circuits and electrical devices, building hands-on skills for machine-based technology. The major is fully accredited by Engineers Australia at Professional Engineer level and recognised under the Washington Accord. Graduates find work with aerospace, defence, automotive, biomedical, robotics, manufacturing and mining employers, or in research groups.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-engineering-honours-mechanical",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Engineering (Honours), Mechanical Engineering major (UTS course C09066, CRICOS 084098A)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 603056).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("75", "27 (predicted IB 32)", "1120"),
      "Assumed knowledge (not a formal prerequisite): HSC Mathematics Extension 1, Physics and English Standard; English Advanced is recommended",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Professional recognition: fully accredited by Engineers Australia at the level of Professional Engineer and recognised by Washington Accord signatories",
    ],
  },

  {
    name: "Business",
    slug: "uts-business",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$51,015 for the first year (A$25,508 per session at a full-time load); indicative total course tuition A$159,248.42, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Business gives a broad grounding in how organisations work, then lets students specialise from second year in one of nine majors: Accounting, Advertising and Marketing Communications, Business Analytics, Economics, Finance, Human Resource Management, International Business, Management or Marketing. Core subjects include Business and Social Impact, Marketing and Customer Value, and People and Organisations, with ethics, inclusion and sustainability built in. Students can add a second major, sub-major or electives from other faculties. The Accounting major (with Law for Business Professionals) meets the education requirements of CPA Australia, CA ANZ, CIMA, ACCA and IPA.",
    officialProgramUrl: "https://www.uts.edu.au/courses/bachelor-of-business",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Business (UTS course C10026, CRICOS 006487A)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (full-time code 601030, part-time code 601035).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("80", "29 (predicted IB 34)", "1160"),
      "Assumed knowledge (not a formal prerequisite): Mathematics and any two units of English; UTS offers bridging courses for students without the assumed knowledge",
      ENGLISH_STANDARD,
      "Professional recognition: the Accounting major plus 21644 Law for Business Professionals meets educational requirements for CPA Australia, CA ANZ, CIMA, ACCA and IPA; the Human Resource Management major is accredited by AHRI; UTS is a CFA Institute affiliated university",
    ],
  },

  {
    name: "Nursing",
    slug: "uts-nursing",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$51,015 for the first year (A$25,508 per session at a full-time load); indicative total course tuition A$159,248.42, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Nursing prepares students to practise as Registered Nurses, combining theory with clinical placements from the very first session and in every session after that. Subjects include anatomy, pharmacology and patient care, supported by simulation-based learning before students head into health settings. In final year, students can pick a specialty elective such as paediatrics, critical care, perioperative or mental health nursing. The course is accredited by ANMAC and approved by the Nursing and Midwifery Board of Australia.",
    officialProgramUrl: "https://www.uts.edu.au/courses/bachelor-of-nursing",
    campus: "City campus, Sydney (plus clinical placements)",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Nursing (UTS course C10122, CRICOS 019877B)",
    intake: "February (Autumn session)",
    workIntegrated: true,
    applicationDeadline: `${APPLY_FEB_ONLY} Domestic applicants apply through UAC (full-time code 606000).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("69", "25 (predicted IB 30)", "1070"),
      "Assumed knowledge (not a formal prerequisite): any two units of English; two units each of science and mathematics are recommended",
      "English language (higher than the UTS standard): IELTS Academic 7.0 overall with at least 7.0 in listening, speaking and reading and 6.5 in writing; PTE Academic 63 overall with at least 58 listening, 76 speaking, 59 reading and 60 writing; TOEFL iBT 91 overall with at least 22 listening, 24 speaking, 22 reading and 23 writing; OET 350 listening, 360 reading, 360 speaking and 350 writing; Cambridge C1 Advanced 178 overall or C2 Proficiency 185 overall with the component minimums UTS lists. These figures apply to tests taken from 23 April 2026, and UTS accepts up to two sittings of the same test within 12 months under set conditions",
      "Clinical placements: anyone placed in a NSW public health facility must provide a criminal record check from their country of residence (or a statutory declaration of no criminal record), and screening and vaccination against infectious diseases are prerequisites for placements",
      "Professional recognition: accredited by the Australian Nursing and Midwifery Accreditation Council (ANMAC) and approved by the Nursing and Midwifery Board of Australia (NMBA)",
    ],
  },

  {
    name: "Laws",
    slug: "uts-laws",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Law",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$51,680 for the first year (A$25,840 per session at a full-time load); indicative total course tuition A$219,457.26 over four years, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Laws is a four-year undergraduate law degree that covers law foundations, ethics and justice, constitutional law and procedure, then lets students specialise through electives such as environmental law, law and technology, commercial law and human rights. Students can add a Legal Futures and Technology major and take UTS's optional Practical Legal Training subjects. With that training, the course meets the requirements for admission as a lawyer in NSW. Graduates work as lawyers, legal and policy advisers, legislative drafters and mediators across government, business and community organisations.",
    officialProgramUrl: "https://www.uts.edu.au/courses/bachelor-of-laws",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Laws (LLB) (UTS course C10124, CRICOS 013614G)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (full-time code 604000, part-time code 604001).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("93", "36 (predicted IB 41)", "1300"),
      "Assumed knowledge: proficiency in English",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Professional recognition: meets the requirements for admission to the Supreme Court of NSW as a lawyer if students complete the optional Practical Legal Training program during or after the course (check time limits with the NSW Legal Profession Admission Board)",
    ],
  },

  {
    name: "Communication (Digital and Social Media)",
    slug: "uts-communication-digital-and-social-media",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Digital Media",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$45,880 for the first year (A$22,940 per session at a full-time load); indicative total course tuition A$143,219.01, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "UTS's Bachelor of Communication in Digital and Social Media builds practical skills in social media communication, user experience and app design, and data analysis and visualisation. After core communication subjects, students study media metrics, digital audiences, UX and app prototyping, and look critically at AI, data bias and the social effects of technology. A second specialist stream, electives or an industry internship can be added, and team projects with industry help build a portfolio. Graduates go into roles such as social media executive, digital content manager, communications manager and UX/UI designer.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-communication-in-digital-and-social-media",
    campus: "City campus, Sydney",
    programType: "Full-time",
    degree: "Bachelor of Communication (Digital and Social Media) (UTS course C10371, CRICOS 087738E)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 600007).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("70", "25 (predicted IB 30)", "1080"),
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
    ],
  },

  {
    name: "Design in Visual Communication",
    slug: "uts-design-in-visual-communication",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Design & Visual Studies",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$51,015 for the first year (A$25,508 per session at a full-time load); indicative total course tuition A$159,248.42, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Design in Visual Communication is a studio-based degree in typography, interaction design and image-making, taught in a dedicated studio space with input from industry practitioners. Students work on digital media, interaction design, photography and editorial design, from print publications to interactive apps, and engage critically with tools such as generative AI. Design and transdisciplinary electives broaden the degree, and projects with industry clients build real-world experience. Graduates become graphic, UX/UI, motion, publication and branding designers, illustrators and photographers.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-design-in-visual-communication",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Design in Visual Communication (UTS course C10308, CRICOS 077339C)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 602070).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("73.25", "26 (predicted IB 31)", "1100"),
      "Selection: non-current school leavers are selected on academic merit or on portfolio and interview rank; UTS asks applicants to check its portfolio eligibility guidance and the inherent requirements for Design and Architecture degrees",
      "Assumed knowledge (not a formal prerequisite): any two units of English; Design and Technology and Visual Arts are recommended",
      ENGLISH_STANDARD,
    ],
  },

  {
    name: "Design in Architecture",
    slug: "uts-design-in-architecture",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Architecture",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$47,080 for the first year (A$23,540 per session at a full-time load); indicative total course tuition A$146,964.93, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Design in Architecture is the first step toward becoming an architect, exploring how innovative spatial ideas shape cities. Students learn digital design and fabrication, key software and model-making, and work on real projects with industry partners, with chances to study and compete internationally. The degree also looks at architecture's ethical role in tackling social issues. On its own it does not give professional recognition: to register as an architect, graduates go on to the two-year UTS Master of Architecture (C04235), and the pair is accredited by the NSW Architects Registration Board.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-design-in-architecture",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Design in Architecture (UTS course C10004, CRICOS 044179J)",
    intake: "February (Autumn session); July (Spring session) for UTS College pathway applicants only",
    applicationDeadline: `${APPLY_FEB_ONLY} Domestic applicants apply through UAC (code 602010).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("80", "29 (predicted IB 34)", "1160"),
      "Selection: non-current school leavers are selected on academic merit or on portfolio and interview rank; UTS asks applicants to check its portfolio eligibility guidance and the inherent requirements for Design and Architecture degrees",
      "Assumed knowledge (not a formal prerequisite): Mathematics and any two units of English; Design and Technology and Visual Arts are recommended",
      ENGLISH_STANDARD,
      "Intake note: the Spring (July) intake is only for UTS College applicants, who are not accepted for the Autumn intake",
      "Professional recognition: this degree followed by the Master of Architecture (C04235) is accredited by the NSW Architects Registration Board, the Australian Institute of Architects and the Commonwealth Association of Architects",
    ],
  },

  {
    name: "Psychology",
    slug: "uts-psychology",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$48,030 for the first year (A$24,015 per session at a full-time load); indicative total course tuition A$149,930.45, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "The UTS Bachelor of Psychology covers the mind, brain and behaviour and is the first step toward becoming a registered psychologist in Australia. Students learn research methods and statistics, psychological assessment and mental health, applying psychology to issues such as climate change, misinformation, cybersecurity, ageing and human-computer interaction. Cultural responsiveness and Indigenous perspectives run through the course. It is accredited by APAC (with conditions) at Level 1, and strong students can apply for a fourth-year honours program, the next step on the path to registration.",
    officialProgramUrl: "https://www.uts.edu.au/courses/bachelor-of-psychology",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Psychology (UTS course C10477, CRICOS 113304M)",
    intake: "February (Autumn session)",
    applicationDeadline: `${APPLY_FEB_ONLY} Domestic applicants apply through UAC (code 606075); offers made through UAC have limited acceptance periods listed on the course page.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("75", "27 (predicted IB 32)", "1120"),
      "Assumed knowledge (not a formal prerequisite): any two units of English",
      "English language: IELTS Academic 6.5 overall with 6.0 in writing; TOEFL iBT 79 overall with 21 in writing (or 4 overall and 4.5 in writing on the 1-6 scale); PTE Academic 58 overall with 50 in writing; Cambridge C1 Advanced or C2 Proficiency 176 overall with 169 in writing; or a Pass in UTS College Academic English Level 5",
      "Professional recognition: provides APAC Level 1 foundational competencies (accredited with conditions); a further honours year gives Level 2 pre-professional competencies",
    ],
  },

  {
    name: "Mathematical Sciences",
    slug: "uts-mathematical-sciences",
    level: "Bachelor",
    universitySlug: "university-of-technology-sydney",
    universityName: "University of Technology Sydney",
    country: "Australia",
    field: "Mathematics & Statistics",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: `2027 indicative international tuition (UTS course page and 2027 summary table): A$49,450 for the first year (A$24,725 per session at a full-time load); indicative total course tuition A$154,363.12, including UTS's estimate of yearly fee increases. ${FEE_EXTRAS}`,
    description:
      "UTS's Bachelor of Mathematical Sciences is an applied maths degree in which every student takes a major in Statistics and Data Science, building expertise in statistical modelling, data analysis and quantitative reasoning. Learning mixes workshops, computer labs and hands-on projects covering modelling, regression and linear models, programming and complex problem solving. The skills suit traditional maths fields and newer industries that rely on complex data. Graduates work as statisticians, data analysts and data scientists, financial or market analysts, mathematical modellers, programmers and business analysts.",
    officialProgramUrl:
      "https://www.uts.edu.au/courses/bachelor-of-mathematical-sciences",
    campus: "City campus, Sydney",
    programType: "Full-time (part-time also available)",
    degree: "Bachelor of Mathematical Sciences (UTS course C10457, CRICOS 106661D)",
    intake: "February (Autumn session), July (Spring session)",
    applicationDeadline: `${APPLY_FEB_JUL} Domestic applicants apply through UAC (code 607081).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      scores("80", "29 (predicted IB 34)", "1160"),
      "Assumed knowledge (not a formal prerequisite): Mathematics Advanced and any two units of English; Mathematics Extension 1 is recommended",
      ENGLISH_STANDARD,
    ],
  },
];
