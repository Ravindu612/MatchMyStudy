import type { Program } from "../../programs";

// University of Warwick undergraduate programmes (September 2027 entry).
// Sourced from warwick.ac.uk 2027 undergraduate course pages (key facts, entry requirements, modules), Warwick's undergraduate overseas fee table (2027-28 column), Warwick's English language requirements and TMUA pages, and UCAS 2027 key dates.

export const universityOfWarwickPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "warwick-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years (4 with an optional intercalated year in industry, research or abroad)",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BCS-accredited BSc Computer Science is one of the longest-established computer science degrees in the UK and is taught from first principles, so no prior programming is needed, only strong mathematics. Year 1 covers advanced mathematics, computer architecture and programming alongside theoretical computing; Year 2 moves on to operating systems and networks, databases and software engineering; and Year 3 centres on an individual project supervised by research staff, with options such as artificial intelligence, computer graphics and security throughout. Students can add a year in industry, research or study abroad between Years 2 and 3. Entry is through UCAS (course code G400, institution code W20), and applicants must sit the TMUA unless they are eligible for a contextual offer.",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-computer-science/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*A*A including A* in Mathematics (Further Mathematics highly recommended but not essential; only the top three grades are considered). Contextual offer A*AA including A in Mathematics",
      "IB Diploma: typical offer 39 with 7, 6, 6 in three Higher Level subjects including 7 in HL Mathematics (Analysis and Approaches only); contextual offer 38 with 6 in HL Mathematics (AA)",
      "TMUA required for 2027 entry (2026-27 application cycle) except for contextual-offer applicants; the score threshold is set once all results are in and is not published",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band A), if required: IELTS Academic 6.0 overall with at least 5.5 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 87 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 60 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Economics",
    slug: "warwick-economics",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Economics",
    duration: "3 years (4 with study abroad)",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BSc Economics is a research-led degree in microeconomics, macroeconomics and econometrics that trains students to simplify economic problems and analyse them both theoretically and with data. Year 1 has five core modules plus options, Year 2 three core modules plus options, and the final year combines a research-focused core module and final-year project with up to seven options, which can be taken in other departments such as Warwick Business School, Politics, Philosophy or Computer Science. Entry is through UCAS (course code L100, institution code W20); the TMUA is optional but encouraged, and high scorers can be considered for a reduced AAA offer.",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-economics/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA including A in Mathematics (only the top three grades are considered; Further Mathematics and Economics not required); GCSE English Language grade 6/B. Contextual offer AAB including A in Mathematics",
      "IB Diploma: typical offer 38 including 6 in Higher Level Mathematics (Analysis and Approaches or Applications and Interpretation), plus GCSE English 6/B or IB English A 5 (HL/SL), English B HL 5 or SL 6; contextual offer 34",
      "TMUA optional: applicants achieving the highest TMUA scores may be considered for a reduced offer of AAA; applicants without TMUA are still considered (Warwick says requirements are under review for 2027 entry)",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band C), if required: IELTS Academic 7.0 overall with at least 6.5 in each component (one sitting); TOEFL iBT 5.0 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 100 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 75 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Mathematics",
    slug: "warwick-mathematics",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BSc Mathematics develops strong mathematical ability through core modules in algebra, analysis and applied mathematics in the first two years, followed by a third year made up entirely of options across pure and applied mathematics, from number theory, geometry and topology to differential equations and applications in physics, biology and data science. Up to half of the final year can be taken outside the Mathematics Institute. Warwick plans curriculum changes for 2027 entry, so module details may be updated. Entry is through UCAS (course code G100, institution code W20); applicants are typically required to take the TMUA, or receive a STEP grade 2 condition.",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-mathematics/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*A* in Mathematics and Further Mathematics plus A in a third subject; STEP grade 2 is a condition for applicants who have not taken TMUA. Contextual offer A*A*B with A* in Mathematics and Further Mathematics",
      "IB Diploma: typical offer 39 with 6, 6, 6 in three Higher Level subjects including Mathematics (Analysis and Approaches only); contextual offer 38",
      "TMUA typically required (except contextual-offer applicants); in the last cycle most offers went to applicants scoring 5.0 or above, with thresholds set during the cycle and finalised around April",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band A), if required: IELTS Academic 6.0 overall with at least 5.5 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 87 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 60 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Law",
    slug: "warwick-law",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Law",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £29,260 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick Law School pioneered the 'law in context' approach, studying legal rules alongside their social, political and economic effects. The three-year LLB builds core legal skills in Year 1, then combines core modules in later years with options and the chance to take modules from other departments; in the final year students write a 6,000 or 12,000 word dissertation or supervised project. The school's research feeds international and comparative perspectives throughout. Entry is through UCAS (course code M100, institution code W20); the LNAT is not currently required.",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/llb-law/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Laws (LLB)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA; GCSE Mathematics grade 4/C and GCSE English Language grade 6/B (or English Literature 6/B with English Language 4/C). Contextual offer AAB",
      "IB Diploma: typical offer 38, plus GCSE English 6/B or IB English A 5 (HL/SL), English B HL 5 or SL 6; contextual offer 34",
      "No admissions test: Warwick's Law programmes do not currently require the LNAT",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band C), if required: IELTS Academic 7.0 overall with at least 6.5 in each component (one sitting); TOEFL iBT 5.0 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 100 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 75 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Philosophy, Politics and Economics (PPE)",
    slug: "warwick-philosophy-politics-economics",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Politics",
    duration: "3 years (4 with placement)",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's PPE is one of the largest and most international programmes of its kind in the UK, using philosophy, politics and economics together to understand issues such as climate change, poverty and international justice. All students take the same core first year across the three departments, with mathematics and statistics at intermediate or advanced level, then choose from six pathways before Year 2, either keeping all three subjects or focusing on two, and graduate with a BA or BSc depending on the pathway. Warwick plans curriculum changes for 2027 entry. Entry is through UCAS (course code L0V0, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/ba-bsc-philosophy-politics-economics/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BSc), depending on pathway",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA plus GCSE Mathematics grade 7/A and GCSE English Language 6/B (or English Literature 6/B with English Language 4/C). Contextual offer AAB (still with GCSE Mathematics 7/A)",
      "IB Diploma: typical offer 38 including 4 in Higher Level or 5 in Standard Level Mathematics, plus GCSE English 6/B or IB English A 5 (HL/SL), English B HL 5 or SL 6; contextual offer 34",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band C), if required: IELTS Academic 7.0 overall with at least 6.5 in each component (one sitting); TOEFL iBT 5.0 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 100 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 75 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Accounting and Finance",
    slug: "warwick-accounting-finance",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Taught at Warwick Business School, the BSc Accounting and Finance is a professionally oriented degree for careers in multinational companies and global financial markets; certain module combinations can earn exemptions from professional accountancy exams. Each year is built on WBS's CORE spine modules, moving from structured foundations in Year 1 to case-based learning in Year 2 and independent study in Year 3, alongside corporate finance, financial markets, management and financial accounting, with specialist accounting and finance options and final-year electives such as marketing, entrepreneurship or data science. Entry is through UCAS (course code NN34, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-accounting-finance/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA including A in Mathematics; GCSE English Language grade 6/B (or English Literature 6/B with English Language 4/C). Contextual offer AAB including A in Mathematics",
      "IB Diploma: typical offer 38 including 6 in Higher Level Mathematics (Analysis and Approaches or Applications and Interpretation), plus GCSE English 6/B or IB English A 5 (HL/SL), English B HL 5 or SL 6; contextual offer 34",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band C), if required: IELTS Academic 7.0 overall with at least 6.5 in each component (one sitting); TOEFL iBT 5.0 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 100 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 75 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Business and Management",
    slug: "warwick-business-management",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Business & Management",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick Business School's BSc Business and Management builds a foundation in core management and business principles, teaching students to analyse real business issues for roles in international brands, multinationals, financial markets and new ventures. Like other WBS degrees it follows the CORE spine, from structured learning in Year 1 to case-based application in Year 2 and independent study in Year 3, and the school's PRACTICE framework develops communication, leadership and teamwork. In Years 2 and 3 students can stay general or follow recognised routes through elective modules. Entry is through UCAS (course code N200, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-business-management/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA, plus GCSE Mathematics grade 7/A and GCSE English Language 6/B (or English Literature 6/B with English Language 4/C). Contextual offer AAB",
      "IB Diploma: typical offer 38 with no specific Higher Level subject requirements, plus GCSE English 6/B or IB English A 5 (HL/SL), English B HL 5 or SL 6; contextual offer 34",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band C), if required: IELTS Academic 7.0 overall with at least 6.5 in each component (one sitting); TOEFL iBT 5.0 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 100 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 75 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Psychology",
    slug: "warwick-psychology",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Psychology",
    duration: "3 years (4 with an intercalated year)",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BSc Psychology is accredited by the British Psychological Society and has a strong practical focus on the science of human behaviour and research methods. Most Year 1 and 2 modules are core, in line with BPS accreditation, with options available from Psychology or other departments; students carry out a research project every year, culminating in a final-year individual project alongside six psychology options. The department works with partners such as the NHS, the police and the United Nations. Entry is through UCAS (course code C800, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-psychology/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer AAB including a science from Mathematics, Further Mathematics, Statistics, Chemistry, Biology, Human Biology or Physics, or AAA/A*AB without a science; GCSE Mathematics or Statistics grade 6/B, and a GCSE science at 6/B if not taking Biology, Chemistry or Physics at A level. Contextual offer ABB (with a science) or AAB",
      "IB Diploma: typical offer 34 including Higher Level Mathematics, Biology, Chemistry or Physics, or 36 without a science at Higher Level; contextual offer 32 (or 34 without an HL science)",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band B), if required: IELTS Academic 6.5 overall with at least 6.0 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 92 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 69 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "warwick-mechanical-engineering",
    level: "Master",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Mechanical Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's integrated MEng Mechanical Engineering starts with the School of Engineering's general first year across several disciplines before specialising in mechanically based systems from Year 2, drawing on research at the School of Engineering and WMG in precision mechanics, fluid dynamics and sustainable thermal energy. The course is accredited by IMechE, the IET and InstMC (the IET and InstMC reviews are scheduled during 2026), and students can move between the BEng and MEng if they meet the academic requirements. Entry is through UCAS (course code H302, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/meng-mechanical-engineering/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA including Mathematics and Physics (strong applicants taking only one of the two may be considered). Contextual offer AAA including Mathematics and Physics",
      "IB Diploma: typical offer 38 with 6, 6, 6 at Higher Level and 6, 6 in Mathematics and Physics, at least one at Higher Level; contextual offer 36",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band A), if required: IELTS Academic 6.0 overall with at least 5.5 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 87 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 60 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Data Science",
    slug: "warwick-data-science",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BSc Data Science, run by the Department of Statistics and accredited by the Royal Statistical Society, combines mathematical and statistical modelling with software engineering and algorithm design. Year 1 is all core, delivered by four departments (Business School, Computer Science, Mathematics and Statistics), and options grow to about 75% by the final year, covering areas such as computational statistics, data visualisation, machine learning and AI; Year 3 includes a data science project taken from idea to delivery, sometimes with industry. With suitable modules graduates can work towards Chartered Statistician status. Entry is through UCAS (course code 7G73, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-data-science/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer met by any one of: A*A*A including A*A* in Mathematics and Further Mathematics; A*AA including A* and A (any order) in Mathematics and Further Mathematics plus STEP grade 2, TMUA score 5.0 or AEA Distinction; or A*A*A*A including A* and A in Mathematics and Further Mathematics. Routes are also published for AS Further Mathematics (A*A*Aa) and for no Further Mathematics (A*A*A* including A* in Mathematics, or A*AA including A* in Mathematics plus STEP 2 / TMUA 5.0 / AEA Distinction). The course may assume Further Mathematics knowledge",
      "IB Diploma: typical offer 39 including 7 in Higher Level Mathematics (Analysis and Approaches or Applications and Interpretation), or 38 including 6 in HL Mathematics plus STEP grade 2, TMUA score 5.0 or AEA Distinction",
      "TMUA is optional for this course: a TMUA score of 5.0 (or STEP grade 2 / AEA Distinction) can be used to meet the lower A*AA or IB 38 routes",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band A), if required: IELTS Academic 6.0 overall with at least 5.5 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 87 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 60 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Mathematics, Operational Research, Statistics and Economics (MORSE)",
    slug: "warwick-morse",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "MORSE combines mathematics, operational research, statistics and economics, with core modules taught by the Mathematics, Statistics and Economics departments and Warwick Business School. The first two years are mainly fixed and build the underlying mathematics alongside economics and operational research; from part of Year 2 and throughout Year 3 students choose from a wide range of options, either specialising in one or two subjects or keeping a balance, including advanced probability, statistical modelling and financial and actuarial mathematics. The course is accredited by the Royal Statistical Society and offers exemptions from some actuarial exams. Entry is through UCAS (course code GLN0, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-morse/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer met by any one of: A*A*A including A*A* in Mathematics and Further Mathematics; A*AA including A* and A (any order) in Mathematics and Further Mathematics plus STEP grade 2, TMUA score 5.0 or AEA Distinction; or A*A*A*A including A* and A in Mathematics and Further Mathematics. Routes are also published for AS Further Mathematics (A*A*Aa) and for no Further Mathematics (A*A*A* including A* in Mathematics, or A*AA including A* in Mathematics plus STEP 2 / TMUA 5.0 / AEA Distinction). The course may assume Further Mathematics knowledge",
      "IB Diploma: typical offer 39 including 7 in Higher Level Mathematics (Analysis and Approaches or Applications and Interpretation), or 38 including 6 in HL Mathematics plus STEP grade 2, TMUA score 5.0 or AEA Distinction",
      "TMUA is optional for this course: a TMUA score of 5.0 (or STEP grade 2 / AEA Distinction) can be used to meet the lower A*AA or IB 38 routes",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band B), if required: IELTS Academic 6.5 overall with at least 6.0 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 92 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 69 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Physics",
    slug: "warwick-physics",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Physics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BSc Physics, accredited by the Institute of Physics, explores the fundamental properties of space and matter. Core modules, concentrated in the first two years, develop quantum theory, electromagnetism and the mathematics of physics, while options show how these ideas explain real phenomena, from light emitted by stars to how materials respond to forces. Years 2 and 3 give wide freedom to design your own degree, and in the final year students join a research group for a year-long project; summer research placements are also encouraged. Entry is through UCAS (course code F300, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/bsc-physics/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer A*AA including A in Mathematics (or Further Mathematics) and Physics. Contextual offer AAA including Mathematics and Physics",
      "IB Diploma: typical offer 38 including 6 in Higher Level Mathematics (Analysis and Approaches only) and 6 in HL Physics; contextual offer 36",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band A), if required: IELTS Academic 6.0 overall with at least 5.5 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 87 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 60 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Chemistry",
    slug: "warwick-chemistry",
    level: "Master",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "Chemistry",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027/28: £37,310 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's four-year MChem Chemistry builds a foundation across inorganic, organic and physical chemistry in Years 1 and 2, alongside lab, coding and digital, communication and research skills. Year 3 adds options such as chemistry for the energy crisis, scientific writing or polymers for drug delivery, and the final MChem year is a significant research project in one of the department's research groups. Students can transfer between Warwick's chemistry degrees during the first two years, subject to academic requirements and, for overseas students, visa rules. Entry is through UCAS (course code F105, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/mchem-chemistry/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Master of Chemistry (MChem)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer AAA including Chemistry and one of Mathematics, Further Mathematics, Physics, Biology, Geology, Statistics, Electronics or Computer Science. Contextual offer ABB including BB in Chemistry and one of those subjects",
      "IB Diploma: typical offer 36 including 6 in Higher Level Chemistry and 5 in a second HL science (Biology, Physics, Mathematics or Computer Science); contextual offer 32",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band A), if required: IELTS Academic 6.0 overall with at least 5.5 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 87 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 60 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "History",
    slug: "warwick-history",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "History",
    duration: "3 years (4 with study abroad or a work placement)",
    language: "English",
    tuitionNote:
      "2027/28: £29,260 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BA History covers world history from the Renaissance to the present, with expertise spanning the British Isles, continental Europe, Africa, Asia, the Caribbean and the Americas. After a foundational first year, students continue on the History degree or apply for Renaissance and Modern History, which includes a term in Venice, and at the start of Year 2 can apply for an optional intercalated year abroad or on a work placement. Throughout, the emphasis is on developing your own independent view of the themes that interest you most. Entry is through UCAS (course code V100, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/ba-history/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer AAA including History. Contextual offer ABB including B in History",
      "IB Diploma: typical offer 36 with at least 6 in Higher Level History; contextual offer 32 with 5 in HL History",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band B), if required: IELTS Academic 6.5 overall with at least 6.0 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 92 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 69 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },

  {
    name: "Politics and International Studies",
    slug: "warwick-politics-international-studies",
    level: "Bachelor",
    universitySlug: "university-of-warwick",
    universityName: "University of Warwick",
    country: "United Kingdom",
    field: "International Relations",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027/28: £29,260 per year for Overseas students (including EU students) and £10,050 per year for Home students (the government fee cap for 2027/28). Warwick says fees for continuing students may rise each year in line with inflation.",
    description:
      "Warwick's BA Politics and International Studies has political theory at its core, with a strong emphasis on the international side of politics: how power is distributed globally, how societies organise their political systems and how economic pressures shape foreign policy. Each year combines core modules with options in four pathways (Political Theory and Public Policy; International Relations and Security; Comparative Politics and Democratisation; International Political Economy), which students can follow or mix. Year 1 must be passed but does not count towards the final classification. Warwick plans curriculum changes for 2027 entry. Entry is through UCAS (course code L260, institution code W20).",
    officialProgramUrl:
      "https://warwick.ac.uk/study/undergraduate/courses/ba-politics-international-studies/",
    campus: "Coventry, University of Warwick main campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "September",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: typical offer AAA. Contextual offer ABB",
      "IB Diploma: typical offer 36; contextual offer 32",
      "Warwick does not typically interview applicants; offers are based on the UCAS application (predicted and achieved grades, personal statement and reference)",
      "English language (Warwick Band B), if required: IELTS Academic 6.5 overall with at least 6.0 in each component (one sitting); TOEFL iBT 4.5 with at least 4.5 in each component (tests from 21 January 2026; earlier tests 92 overall with at least 21 Listening, 21 Writing, 22 Reading and 23 Speaking); or PTE Academic 69 with at least 59 in each communicative skill (Warwick's English language page still lists these scores for September 2026 entry, so check for 2027 updates before booking a test)",
      "Contextual offers (typically one or two grades lower) are available to eligible UK applicants; other UK and international qualifications are listed on the Warwick course page",
    ],
  },
];
