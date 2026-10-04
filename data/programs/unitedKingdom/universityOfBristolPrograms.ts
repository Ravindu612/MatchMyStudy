import type { Program } from "../../programs";

// University of Bristol undergraduate programmes (September 2027 entry).
// Sourced from bristol.ac.uk 2027-entry undergraduate course pages (summary, structure, fees, entry requirements, additional requirements), Bristol's English language profile pages (A, B, C, E, G) and UCAS 2027 key dates.

export const universityOfBristolPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "bristol-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £34,700 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BCS-accredited BSc Computer Science starts with algorithms, programming paradigms and the mathematics and statistics behind computing, plus computer architecture, concurrent and networked computing, human-computer interaction and software tools. In Year 2 students work in a team on a software development project for a real business or organisation, and in the final year they choose advanced options in areas such as high-performance computing, machine learning, cryptography and AI, alongside an individual project co-created with a supervisor. Facilities include Windows, Linux and GPU labs and a Maker Space. Entry is through UCAS (course code G400).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/computer-science/bsc-computer-science/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA including A* in Mathematics; contextual offer AAB including A in Mathematics",
      "IB Diploma: 38 points overall with 18 at Higher Level, including 7 in HL Mathematics (Analysis and Approaches or Applications and Interpretation); contextual offer 34 with 17 at HL including 6 in HL Mathematics",
      "No specific GCSE subjects required",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Economics",
    slug: "bristol-economics",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Economics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £29,300 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BSc Economics is a technically rigorous degree with econometrics at its centre, accredited by CIMA. Years 1 and 2 cover compulsory macroeconomics, microeconomics, mathematics, statistics and econometrics, with a growing range of options from the School of Economics, the Business School and elsewhere, in topics such as behavioural economics, machine learning, development, international trade and corporate finance. In Year 3 students can write an applied economics dissertation under academic supervision. The BSc is designed for students with A-level Mathematics; those without it can consider Bristol's BA Economics. Entry is through UCAS (course code L100).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/economics/bsc-economics/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA including Mathematics; contextual offer AAB including Mathematics",
      "IB Diploma: 38 points overall with 18 at Higher Level, including Mathematics at 6 at HL (Analysis and Approaches or Applications and Interpretation) or 7 at SL (Analysis and Approaches); contextual offer 34 with 17 at HL",
      "No specific GCSE subjects required",
      "English language (Bristol profile level G), if English is not your first language: IELTS Academic 6.5 overall with 7.0 in reading and listening and no score below 6.0; TOEFL iBT 4.5 overall with 5 in reading and listening and 4.5 in speaking and writing (tests from 21 January 2026; earlier tests 88 overall with Reading 24, Listening 22, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 71 in reading and listening and 64 in all other skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Law",
    slug: "bristol-law",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Law",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £26,500 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's three-year LLB gives a solid grounding in legal knowledge, taught in the Wills Memorial Building with its traditional law library and Moot Court. Year 1 introduces how to think, write and argue like a lawyer, with research and analysis skills; Years 2 and 3 offer specialist units such as corporate governance, international, commercial, environmental, intellectual property and human rights law, plus a Clinical Legal Studies option, a Corporate Law Simulation and socio-legal units, ending with an Independent Research Project. Entry is through UCAS (course code M100), and applicants must sit the LNAT.",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/law/llb-law/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Laws (LLB)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA or A*A*B; contextual offer AAB",
      "IB Diploma: 38 points overall with 18 at Higher Level; contextual offer 34 with 17 at HL",
      "Law National Aptitude Test (LNAT) required",
      "No specific GCSE subjects required",
      "English language (Bristol profile level B), if English is not your first language: IELTS Academic 7.0 overall with 7.0 in writing and 6.5 in all other skills; TOEFL iBT 5 overall with 5 in writing and 4.5 in all other skills (tests from 21 January 2026; earlier tests 95 overall with Reading 22, Listening 21, Speaking 23, Writing 24); or PTE Academic 71 overall with no less than 71 in writing and 67 in all other skills; or GCSE English Language grade B/6",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Medicine",
    slug: "bristol-medicine",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Medicine",
    duration: "5 years (optional intercalated year between Years 3 and 4)",
    language: "English",
    tuitionNote:
      "2027 entry: £47,600 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's GMC-recognised MB ChB combines early clinical exposure in hospital, community and primary care with lectures, case-based learning, cadaveric anatomy and inter-professional placements. Years 1 and 2 cover health and disease through case-based learning alongside placements; Years 3 and 4 are based in clinical academies across primary, community and secondary care, covering care across the life course; and Year 5 follows an elective and prepares students for foundation doctor posts. Students can intercalate a Bachelor's or Master's between Years 3 and 4. Entry is through UCAS (course code A100) by 15 October; the UCAT is required and shortlisted applicants are interviewed between November and April.",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/medicine/mb-chb-medicine/",
    campus: "Bristol, Clifton campus with clinical placements",
    programType: "Full-time",
    degree: "Bachelor of Medicine and Bachelor of Surgery (MB ChB)",
    intake: "September",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for medicine)",
    admissionRequirements: [
      "A levels: standard offer AAA including Chemistry and one of Biology, Physics, Mathematics or Further Mathematics; contextual offer ABB including A in Chemistry and B in one of those subjects. Graduates need a 2:1 degree plus BBB at A level in the same subjects",
      "IB Diploma: 36 points overall with 18 at Higher Level, including 6, 6 at HL in Chemistry and one of Biology, Physics or Mathematics; contextual offer 32 with 16 at HL",
      "GCSE: Mathematics grade 7/A and English grade 4/C (or equivalent)",
      "UCAT required: the combined score of all subtests except Situational Judgement is used to select applicants for interview (for 2026 entry the threshold was 2240 for Home and 2270 for Overseas applicants; it changes each year)",
      "Interviews: applicants must be available for interview between November and April after applying; work experience is encouraged but not required",
      "English language (Bristol profile level A), if English is not your first language: IELTS Academic 7.5 overall with 7.0 in all skills; TOEFL iBT 5.5 overall with 5 in all skills (tests from 21 January 2026; earlier tests 103 overall with Reading 24, Listening 22, Speaking 25, Writing 24); or PTE Academic 78 overall with no less than 71 in all skills; or GCSE English Language grade B/6",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Psychology",
    slug: "bristol-psychology",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Psychology",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £34,700 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BPS-accredited BSc Psychology trains students in the theories, methods and applications of contemporary psychological science, opening the door to further professional training. Core areas include social, cognitive, developmental and biological psychology and individual differences, with specialist options such as drug use and addiction, climate and behaviour change and social neuroscience. Students learn to design studies and analyse data through lectures, seminars, tutorials and lab classes, and the final year centres on a substantial original research project. Entry is through UCAS (course code C801).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/psychology/bsc-psychology/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA including A in a science-related subject (Biology, Chemistry, Computer Science, Further Mathematics, Geography, Mathematics, Physics, Psychology or Statistics); contextual offer AAB including A in a science-related subject",
      "IB Diploma: 38 points overall with 18 at Higher Level, including 6 at HL in a science-related subject; contextual offer 34 with 17 at HL",
      "GCSE: Mathematics grade 6/B (or equivalent)",
      "English language (Bristol profile level B), if English is not your first language: IELTS Academic 7.0 overall with 7.0 in writing and 6.5 in all other skills; TOEFL iBT 5 overall with 5 in writing and 4.5 in all other skills (tests from 21 January 2026; earlier tests 95 overall with Reading 22, Listening 21, Speaking 23, Writing 24); or PTE Academic 71 overall with no less than 71 in writing and 67 in all other skills; or GCSE English Language grade B/6",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Mathematics",
    slug: "bristol-mathematics",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £32,500 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BSc Mathematics, accredited by the IFoA and IMA, gives a rigorous foundation in compulsory topics in Year 1, taught through lectures, small-group tutorials and problem classes. In Years 2 and 3 students shape the degree around pure mathematics, theoretical physics, statistics and probability or a mix, with topics as varied as quantum mechanics, financial risk management and number theory, and can take units outside mathematics; the final year offers project work supervised by research staff. Entry is through UCAS (course code G100).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/maths/bsc-mathematics/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*A*A including A* in Mathematics and A in another mathematics-related subject (Biology, Chemistry, Computer Science, Economics or Physics), or A*AA including A* and A (any order) in Mathematics and Further Mathematics; STEP may form part of an alternative offer. Contextual offer AAA (with another mathematics-related subject) or AAB including AA in Mathematics and Further Mathematics",
      "IB Diploma: 40 points overall with 18 at Higher Level, including 7 in HL Mathematics and 6 in another HL mathematics-related subject; contextual offer 36 with 18 at HL including 6, 6",
      "No specific GCSE subjects required",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "bristol-mechanical-engineering",
    level: "Master",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Mechanical Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £33,600 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's MEng Mechanical Engineering covers four core areas: design and manufacture, dynamics and control, materials, and energy and fluid flow. Year 1 is shared with Aerospace, Civil, Mechanical and Electrical, and Design Engineering students, including an interdisciplinary project; Year 2 completes the common mechanical curriculum through lectures, labs, design classes and modelling and manufacturing projects. Year 3 applies these principles to complex real applications through an open-ended group project, and Year 4 combines specialist options with a substantial individual project. The course is IMechE-accredited and currently going through its scheduled five-year re-accreditation. Entry is through UCAS (course code H300).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/mechanical-engineering/meng-mechanical-engineering/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA including A* and A (any order) in Mathematics and one of Further Mathematics, Physics, Chemistry, Biology or Computer Science (preference may go to applicants with three subjects from that list); contextual offer AAB including AA in Mathematics and one of those subjects",
      "IB Diploma: 38 points overall with 18 at Higher Level, including 7, 6 (any order) at HL in Mathematics and one of Physics, Chemistry or Computer Science; contextual offer 34 with 17 at HL including 6, 6",
      "No specific GCSE subjects required",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Aerospace Engineering",
    slug: "bristol-aerospace-engineering",
    level: "Master",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £34,700 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's RAeS-accredited MEng Aerospace Engineering is organised around four themes: aerodynamics, structures and materials, dynamics and control, and systems and design, applied to fixed and rotary wing aircraft, spacecraft and renewable energy. Year 1 is shared with other engineering disciplines and includes an introduction to aerospace; Year 2 specialises, with a hands-on group design-build-test project; Year 3 covers advanced topics such as computational fluid dynamics, finite element analysis and feedback control with an individual research project; and Year 4 is a capstone group design project with options. Entry is through UCAS (course code H410).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/aerospace/meng-aerospace-engineering/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA including Mathematics, with preference for applicants taking two of Further Mathematics, Physics, Chemistry, Biology or Computer Science; contextual offer AAB including A in Mathematics",
      "IB Diploma: 38 points overall with 18 at Higher Level, including 6 in HL Mathematics, with preference for two HLs from Physics, Chemistry, Biology or Computer Science; contextual offer 34 with 17 at HL including 6 in HL Mathematics",
      "No specific GCSE subjects required",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Accounting and Finance",
    slug: "bristol-accounting-finance",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £29,300 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BSc Accounting and Finance is a professionally accredited degree (ACCA, CIPFA, ICAEW, ICAS and CIMA) that combines accounting institutions, firms and regulation with financial institutions, trading, investment and regulation. Year 1 builds foundations through compulsory units in accounting, finance, economics, mathematics and statistics, with options from the second semester; Year 2 deepens finance, financial accounting and management accounting with a wide range of options; and the final year allows further specialisation. Teaching is split between the Clifton campus and Temple Quarter. Entry is through UCAS (course code NN43).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/accounting-finance/bsc-accounting-and-finance/",
    campus: "Bristol, Clifton campus and Temple Quarter",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer AAA including Mathematics, or A*AB including A in Mathematics; contextual offer ABB including Mathematics",
      "IB Diploma: 36 points overall with 18 at Higher Level, including Mathematics at 6 at HL or 7 at SL (Analysis and Approaches); contextual offer 32 with 16 at HL",
      "No specific GCSE subjects required",
      "English language (Bristol profile level G), if English is not your first language: IELTS Academic 6.5 overall with 7.0 in reading and listening and no score below 6.0; TOEFL iBT 4.5 overall with 5 in reading and listening and 4.5 in speaking and writing (tests from 21 January 2026; earlier tests 88 overall with Reading 24, Listening 22, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 71 in reading and listening and 64 in all other skills",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Business and Management",
    slug: "bristol-business-management",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £29,300 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BSc Business and Management covers finance, business law, strategy, marketing, business statistics and data analysis, using real industry case studies to connect theory and practice in a global context. Year 1 introduces marketing, management, accounting and finance and statistics; Year 2 has four mandatory units plus options; and Year 3 centres on a dissertation with options in areas such as human resource management, corporate social responsibility, management accounting, consultancy and brands. Teaching is split between the Clifton campus and Temple Quarter. Entry is through UCAS (course code N200).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/business-and-management/bsc-business-and-management/",
    campus: "Bristol, Clifton campus and Temple Quarter",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer AAA or A*AB; contextual offer ABB",
      "IB Diploma: 36 points overall with 18 at Higher Level; contextual offer 32 with 16 at HL",
      "GCSE: Mathematics grade 6/B (or equivalent)",
      "English language (Bristol profile level G), if English is not your first language: IELTS Academic 6.5 overall with 7.0 in reading and listening and no score below 6.0; TOEFL iBT 4.5 overall with 5 in reading and listening and 4.5 in speaking and writing (tests from 21 January 2026; earlier tests 88 overall with Reading 24, Listening 22, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 71 in reading and listening and 64 in all other skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Physics",
    slug: "bristol-physics",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Physics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £32,500 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's IOP-accredited BSc Physics explores the building blocks and forces of nature, from particle and nuclear physics to galaxies and cosmology, through quantum physics and relativity. Year 1 gives a grounding in physics and mathematics with practical and computing skills; Year 2 develops the core principles with hands-on lab work and computational physics; and Year 3 offers a wide choice of units plus a major project or dissertation. Entry is through UCAS (course code F300).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/physics/bsc-physics/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer A*AA including A* and A (any order) in Mathematics and Physics; contextual offer AAB including AA in Mathematics and Physics",
      "IB Diploma: 38 points overall with 18 at Higher Level, including 7, 6 (any order) at HL in Mathematics and Physics; contextual offer 34 with 17 at HL including 6, 6",
      "No specific GCSE subjects required",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Chemistry",
    slug: "bristol-chemistry",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Chemistry",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £32,500 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's RSC-accredited BSc Chemistry builds strong foundations in inorganic, organic and physical chemistry, with applications in analytical, environmental, materials and theoretical chemistry, chemistry-specific mathematics and extensive practical work in teaching labs. The first two years are shared with Bristol's other chemistry degrees, with careers support built into units, and in Year 3 students specialise through a project, which can be in a research lab, in a local school developing science resources, or in chemistry education research. Entry is through UCAS (course code F100).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/chemistry/bsc-chemistry/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer AAA including Chemistry; contextual offer ABB including A in Chemistry",
      "IB Diploma: 36 points overall with 18 at Higher Level, including 6 in HL Chemistry; contextual offer 32 with 16 at HL including 6 in HL Chemistry",
      "GCSE: Mathematics grade 6/B (or equivalent)",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Biomedical Sciences",
    slug: "bristol-biomedical-sciences",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "Biomedical Sciences",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £34,700 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BSc Biomedical Sciences begins with a broad first year across biology related to human health and disease, including biochemistry, cell and cancer biology, genetics, immunology, microbiology, neuroscience, pharmacology, physiology and virology. Year 2 offers a range of biomedical units with training in practical, transferable and research skills, supported by the eBiolabs online resources, and in the final year students choose research-led options and complete a research project. Entry is through UCAS (course code B900).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/biomedical-sciences/bsc-biomedical-sciences/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer AAA including Chemistry and another core science/mathematics subject (Biology, Further Mathematics, Human Biology, Mathematics or Physics); contextual offer ABB including B in Chemistry and B in another core subject",
      "IB Diploma: 36 points overall with 18 at Higher Level, including 6, 6 at HL in Chemistry and another core science/mathematics subject; contextual offer 32 with 16 at HL including 5, 5",
      "No specific GCSE subjects required",
      "English language (Bristol profile level E), if English is not your first language: IELTS Academic 6.5 overall with no score below 6.0; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 20, Listening 19, Speaking 22, Writing 22); or PTE Academic 67 overall with no less than 64 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "History",
    slug: "bristol-history",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "History",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £29,300 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BA History offers choice in every year across more than 1,500 years of history and all seven continents, from the major themes of medieval, early modern, modern and contemporary history to new social, cultural, political, environmental and global histories. Recent first-year options have included democracy and protest, slavery, modern revolutions and war and society, followed by specialist units in later years and original research on topics students care about. Entry is through UCAS (course code V100).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/history/ba-history/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer AAA; contextual offer ABB",
      "IB Diploma: 36 points overall with 18 at Higher Level; contextual offer 32 with 16 at HL",
      "No specific GCSE subjects required",
      "English language (Bristol profile level B), if English is not your first language: IELTS Academic 7.0 overall with 7.0 in writing and 6.5 in all other skills; TOEFL iBT 5 overall with 5 in writing and 4.5 in all other skills (tests from 21 January 2026; earlier tests 95 overall with Reading 22, Listening 21, Speaking 23, Writing 24); or PTE Academic 71 overall with no less than 71 in writing and 67 in all other skills; or GCSE English Language grade B/6",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },

  {
    name: "Politics and International Relations",
    slug: "bristol-politics-international-relations",
    level: "Bachelor",
    universitySlug: "university-of-bristol",
    universityName: "University of Bristol",
    country: "United Kingdom",
    field: "International Relations",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £26,500 for the first year for international students and £10,050 for Home students. Bristol reviews fees every year: Home fees follow UK government policy and international fees rise annually in line with expected inflation.",
    description:
      "Bristol's BSc Politics and International Relations examines power, who exercises it and with what consequences, across the politics of Latin America, Africa, Asia, the Middle East, Europe, the US and Britain. Year 1 has compulsory units that ground students in the discipline; Year 2 introduces specific fields such as security, gender, political philosophy, development, peace-building and environmental politics; and Year 3 offers research-led units and a supervised dissertation on a topic of the student's choice. Entry is through UCAS (course code L200).",
    officialProgramUrl:
      "https://www.bristol.ac.uk/study/undergraduate/2027/politics-international-relations/bsc-politics-and-international-relations/",
    campus: "Bristol, Clifton campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: standard offer AAA including an essay-based subject (for example History, English, Economics, Geography, Government and Politics, Philosophy, Psychology or Sociology); contextual offer ABB",
      "IB Diploma: 36 points overall with 18 at Higher Level, including 6 at HL in an essay-based subject; contextual offer 32 with 16 at HL including 5 in an essay-based HL subject",
      "No specific GCSE subjects required",
      "English language (Bristol profile level C), if English is not your first language: IELTS Academic 6.5 overall with 6.5 in all skills; TOEFL iBT 4.5 overall with 4.5 in all skills (tests from 21 January 2026; earlier tests 88 overall with Reading 22, Listening 21, Speaking 23, Writing 22); or PTE Academic 67 overall with no less than 67 in all skills; or GCSE English Language grade C/4",
      "Contextual offers are available to eligible UK applicants; BTEC, Access to HE, Scottish, Welsh Baccalaureate and international qualifications are listed on the Bristol course page",
    ],
  },
];
