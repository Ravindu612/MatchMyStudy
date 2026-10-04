import type { Program } from "../../programs";

// King's College London undergraduate programmes (September 2027 entry).
// Sourced from kcl.ac.uk undergraduate course pages (overview, entry requirements and fees tabs), King's undergraduate English language requirements page and UCAS 2027 entry deadlines.

export const kingsCollegeLondonPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "kcl-computer-science",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £42,900 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "King's Computer Science BSc spends its first two years on programming, software engineering, databases, artificial intelligence, logic and computer systems, including hands-on work with hardware and a second-year team project building a substantial software system. In the third year students choose optional modules and complete a major individual project, sometimes with a research group or industry partner. The degree is accredited by BCS, the Chartered Institute for IT, and students can apply to move to a year-in-industry or study abroad route. Entry is through UCAS (course code G400).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/computer-science-bsc",
    campus: "Strand Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*A*A including grade A in Mathematics or Further Mathematics; Computing or Computer Science preferred (contextual offer: AAA)",
      "IB Diploma: 39 points overall or 20 points from three higher level subjects, including 6 in Higher Level Mathematics: Analysis and Approaches",
      "English language (King's Band D), if required: IELTS Academic 6.5 overall with at least 6.0 in each skill, TOEFL iBT 4.5 overall with at least 4 in each skill (tests from 21 January 2026; earlier tests 92 overall with 23 in writing and 20 in the other skills) or PTE Academic 62 overall with at least 59 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Law",
    slug: "kcl-law",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Law",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £35,900 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The Dickson Poon School of Law's LLB studies law as an academic discipline and can be the first step towards qualifying as a solicitor or barrister, while also suiting students heading into other careers. Teaching is based around Somerset House, close to the Royal Courts of Justice and the Inns of Court, with professional skills modules, a legal clinic and a mooting programme. After first year students can apply for year-abroad or dual-degree routes, including programmes with Hong Kong, Singapore and American law. Entry is through UCAS (course code M100), and applicants must sit the LNAT by 31 December.",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/law-llb",
    campus: "Strand Campus and Waterloo Campus",
    programType: "Full-time",
    degree: "Bachelor of Laws (LLB)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA, no required subjects (contextual offer: AAB)",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects",
      "LNAT (National Admissions Test for Law) must be sat by 31 December for equal consideration",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Medicine",
    slug: "kcl-medicine",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Medicine",
    duration: "5 years (6 with an optional intercalated degree)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £60,200 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £5,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "King's Medicine MBBS integrates biomedical science with clinical teaching throughout, with partner hospitals including Guy's, St Thomas' and King's College Hospital, plus placements at district general hospitals across south-east England and more than 350 general practices. The course runs in three stages: biomedical and population science foundations, blocks built around the human life cycle and common conditions, and a final stage focused on future practice, with elective study abroad and quality improvement projects, plus an optional intercalated degree between Stages 2 and 3. Graduates can apply to the GMC for registration. Entry is through UCAS (course code A100) by 15 October; the UCAT is required and no offers are made without an interview.",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/medicine-mbbs",
    campus: "Guy's Campus and Denmark Hill Campus",
    programType: "Full-time",
    degree: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
    intake: "September",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for medicine and dentistry)",
    admissionRequirements: [
      "A levels: A*AA including grade A in Biology and Chemistry (no contextual offers for this programme); GCSE English Language and Mathematics at grade 6/B",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects, including 6 in Higher Level Biology and Chemistry",
      "UCAT must be taken in the year of application; shortlisted applicants are interviewed between November and May, and no offers are made without an interview",
      "Applicants must turn 18 before the start of the second year; Occupational Health clearance and an enhanced DBS check are required",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Psychology",
    slug: "kcl-psychology",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Psychology",
    duration: "3 years (4 with a year abroad or a professional placement year)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £45,400 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The Psychology BSc is taught at the Institute of Psychiatry, Psychology & Neuroscience (IoPPN) and is accredited by the British Psychological Society. It introduces the psychological sciences, from neuroscience to the social sciences, and asks students to apply research to current real-world problems while building analytical and critical thinking skills, with access to placements and internships across the IoPPN and the NHS. Students can take a year abroad or a professional placement year in Year 3. Entry is through UCAS (course code C800; C801 with a year abroad, C802 with a placement year).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/psychology-bsc",
    campus: "Guy's Campus and Denmark Hill Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including grade A in one of Biology, Chemistry, Mathematics, Physics or Psychology; Biology and Mathematics preferred (contextual offer: AAB)",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects, including 6 at Higher Level in one of Biology, Chemistry, Mathematics, Physics or Psychology",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Economics",
    slug: "kcl-economics",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Economics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £40,600 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "King's Economics BSc is taught jointly by the Department of Political Economy and the Department of Economics at King's Business School. It combines economic theory with statistics, mathematics and econometrics and applies them to problems in the economy, politics and policy. After a foundation first year students choose more freely from optional modules, studying a short walk from both the City of London and Westminster. Entry is through UCAS (course code L100).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/economics-bsc",
    campus: "Strand Campus and Waterloo Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including grade A in Mathematics (contextual offer: AAB)",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects, including 6 in Higher Level Mathematics (Analysis and Approaches or Applications and Interpretation)",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "International Relations",
    slug: "kcl-international-relations",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "International Relations",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £35,900 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "Taught by the Department of War Studies, the International Relations BA analyses contemporary world politics and its theoretical and historical roots. It is built around four strands: international history, international relations theory, international political economy, and international practice such as diplomacy, foreign policy and strategy. All four are introduced in first year, and students specialise through a wide range of options in Years 2 and 3. Entry is through UCAS (course code L250).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/international-relations-ba",
    campus: "Strand Campus and Waterloo Campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA, no required subjects (contextual offer: ABB)",
      "IB Diploma: 36 points overall or 18 points from three higher level subjects",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "War Studies",
    slug: "kcl-war-studies",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "International Relations",
    duration: "3 years (optional year abroad)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £34,000 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The War Studies BA examines war, armed conflict, violence and coercion from historical, political, philosophical, sociological and strategic angles. First year covers the causes and consequences of war, the history of modern war and contemporary security issues, and later years let students specialise through a broad choice of modules taught by the Department of War Studies. Entry is through UCAS (course code L252).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/war-studies-ba",
    campus: "Strand Campus and Waterloo Campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA, no required subjects (contextual offer: ABB)",
      "IB Diploma: 36 points overall or 18 points from three higher level subjects",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Business Management",
    slug: "kcl-business-management",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £40,600 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "King's Business School's Business Management BSc covers economics, psychology, sociology, accounting, finance, marketing, law and human resource management. First year is mostly required modules that give a broad base, and Years 2 and 3 mix required and optional modules so students can specialise or keep a broad focus, with an option to apply for study abroad. Entry is through UCAS (course code N200).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/business-management-bsc",
    campus: "Strand Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including grade A in a humanities or social science subject, excluding modern languages (contextual offer: AAB)",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects, including 6 in a Higher Level humanities or social science subject (excluding modern languages)",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Pharmacy",
    slug: "kcl-pharmacy",
    level: "Master",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Pharmacy",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £40,600 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The four-year Pharmacy MPharm combines pharmaceutical science with pharmacy practice and is the UK qualification that leads to registration as a pharmacist. The course is being aligned with the General Pharmaceutical Council's 2021 standards, under which new pharmacists can prescribe from registration. Students spend more time on clinical placements each year with partner NHS trusts, including Guy's and St Thomas', King's College Hospital and South London and Maudsley. Entry is through UCAS (course code B230), and applicants are invited to an online interview.",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/pharmacy-mpharm",
    campus: "Waterloo Campus",
    programType: "Full-time",
    degree: "Master of Pharmacy (MPharm), integrated undergraduate master's",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including grade A in Chemistry and grade A in one of Biology, Mathematics or Physics (contextual offer: AAC); GCSE English Language and Mathematics at grade 6/B",
      "IB Diploma: 36 points overall or 18 points from three higher level subjects, including 6 in Higher Level Chemistry and 6 in Higher Level Biology, Mathematics or Physics",
      "Online interview (30 minutes on Microsoft Teams) covering motivation, numeracy, communication and a situational scenario",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Biomedical Science",
    slug: "kcl-biomedical-science",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Biomedical Sciences",
    duration: "3 years (4 with a year abroad or an extra-mural year)",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £42,900 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "King's Biomedical Science BSc starts with a Common Year One covering all the biomedical science disciplines, after which students can stay on Biomedical Science or move to a specialist degree such as Biochemistry, Medical Physiology, Molecular Genetics, Neuroscience or Pharmacology. The flexible second and third years can include a year abroad or an extra-mural placement year, usually with a biomedicine employer. Entry is through UCAS (course code BC99).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/biomedical-science-bsc",
    campus: "Guy's Campus and Waterloo Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including grade A in Biology and Chemistry (contextual offer: AAC)",
      "IB Diploma: 36 points overall or 18 points from three higher level subjects, including 6 in Higher Level Biology and Chemistry",
      "English language (King's Band D), if required: IELTS Academic 6.5 overall with at least 6.0 in each skill, TOEFL iBT 4.5 overall with at least 4 in each skill (tests from 21 January 2026; earlier tests 92 overall with 23 in writing and 20 in the other skills) or PTE Academic 62 overall with at least 59 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "English",
    slug: "kcl-english",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "English Literature",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £30,750 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The English BA covers literature from medieval performance to contemporary poetry, global fiction and creative writing, with a curriculum that includes writing from the US, Anglophone Africa, Ireland and South Asia. Students apply theoretical and historical approaches to texts and choose from many optional modules, some taught with London cultural institutions such as Shakespeare's Globe. Entry is through UCAS (course code Q300).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/english-ba",
    campus: "Strand Campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA including grade A in English Literature or English Language and Literature (contextual offer: ABB)",
      "IB Diploma: 36 points overall or 18 points from three higher level subjects, including 6 in Higher Level English Literature or English Language and Literature",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "History",
    slug: "kcl-history",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "History",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £30,750 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "History BA at King's is taught by one of the UK's largest history departments, covering every continent from 300 AD to the present. First year gives a foundation in world history and big themes such as state formation, industrialisation and revolution, later years offer a wide range of options, and the final year includes a dissertation based on primary sources. Entry is through UCAS (course code V100).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/history-ba",
    campus: "Strand Campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: AAA; History is generally expected but not required if the application shows clear engagement with the subject (contextual offer: ABB)",
      "IB Diploma: 36 points overall or 18 points from three higher level subjects",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Dentistry",
    slug: "kcl-dentistry",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Dentistry",
    duration: "5 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £66,800 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £5,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The Dentistry BDS combines current dental education with early clinical experience, linking basic science teaching to clinical practice and focusing on the patient's overall dental and medical needs. Students train in clinical and simulation facilities, including phantom-head and haptic augmented-reality simulation, across King's health campuses. Entry is through UCAS (course code A205) by 15 October; the UCAT is required and shortlisted applicants are interviewed.",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/dentistry-bds",
    campus: "Guy's Campus, St Thomas' Campus, Denmark Hill Campus and Waterloo Campus",
    programType: "Full-time",
    degree: "Bachelor of Dental Surgery (BDS)",
    intake: "September",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for medicine and dentistry)",
    admissionRequirements: [
      "A levels: A*AA including grade A in Biology or Chemistry, plus grade A in one of Biology, Chemistry, Physics, Mathematics or Psychology (Further Mathematics not accepted as the third A level if Mathematics meets a subject requirement); GCSE English Language and Mathematics at grade 6/B",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects, including 6 in Higher Level Chemistry or Biology plus 6 in one of Biology, Chemistry, Mathematics, Physics or Psychology",
      "UCAT must be taken in the year of application; applicants are ranked on GCSE results, UCAT score and context, and shortlisted applicants are interviewed (generally December to March)",
      "English language (King's Band B), if required: IELTS Academic 7.0 overall with at least 6.5 in each skill, TOEFL iBT 5 overall with at least 4.5 in each skill (tests from 21 January 2026; earlier tests 100 overall with 25 in writing and 23 in the other skills) or PTE Academic 69 overall with at least 62 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "kcl-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Artificial Intelligence",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £42,900 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "King's Artificial Intelligence BSc is built around the core areas of AI: its foundations, data science and machine learning, reasoning, interaction and autonomous agents including robotics. It also covers the ethics, philosophy and legal and social impact of AI. Students apply their skills to projects based on real industry problems, which in third year can involve working with an external company, and can switch to the integrated master's. Entry is through UCAS (course code G700).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/artificial-intelligence-bsc",
    campus: "Strand Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*A*A including grade A in Mathematics or Further Mathematics (contextual offer: AAA)",
      "IB Diploma: 39 points overall or 20 points from three higher level subjects, including 6 in Higher Level Mathematics: Analysis and Approaches",
      "English language (King's Band D), if required: IELTS Academic 6.5 overall with at least 6.0 in each skill, TOEFL iBT 4.5 overall with at least 4 in each skill (tests from 21 January 2026; earlier tests 92 overall with 23 in writing and 20 in the other skills) or PTE Academic 62 overall with at least 59 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },

  {
    name: "Mathematics",
    slug: "kcl-mathematics",
    level: "Bachelor",
    universitySlug: "kings-college-london",
    universityName: "King's College London",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28 tuition: £38,100 per year for international students (subject to annual increases in later years) and £10,050 per year for UK students (based on the government cap). International applicants pay a £2,000 deposit, offset against first-year fees, when they firmly accept an unconditional offer.",
    description:
      "The Mathematics BSc covers calculus, algebra, probability and statistics in the first two years. Students can then specialise or stay broad, choosing third-year options from pure mathematics and financial mathematics to statistics and theoretical physics, with an optional supervised dissertation. Students who reach the required grades can transfer to a four-year route with a year abroad. Entry is through UCAS (course code G100).",
    officialProgramUrl:
      "https://www.kcl.ac.uk/study/undergraduate/courses/mathematics-bsc",
    campus: "Strand Campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: A*AA including A*A in Mathematics and Further Mathematics in either order; without full A level Further Mathematics, AS Further Mathematics at grade A can count if combined with grade 3 in any STEP paper or a Merit in AEA Mathematics (contextual offer: AAB)",
      "IB Diploma: 38 points overall or 19 points from three higher level subjects, including 7 in Higher Level Mathematics: Analysis and Approaches",
      "English language (King's Band D), if required: IELTS Academic 6.5 overall with at least 6.0 in each skill, TOEFL iBT 4.5 overall with at least 4 in each skill (tests from 21 January 2026; earlier tests 92 overall with 23 in writing and 20 in the other skills) or PTE Academic 62 overall with at least 59 in each skill",
      "Other UK and international qualifications: see the King's course entry requirements page",
    ],
  },
];
