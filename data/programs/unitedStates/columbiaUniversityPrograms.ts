import type { Program } from "@/data/programs";

// Columbia University undergraduate majors for Fall 2027 entry (Morningside Heights campus).
// Columbia College majors are BAs; Columbia Engineering (SEAS) majors are BSs. Applicants apply to one of the two schools.
// Sources: Columbia College Bulletin and Columbia Engineering Bulletin (bulletin.columbia.edu), Columbia Undergraduate Admissions pages on deadlines, testing,
// English proficiency, recommendations, preparation and cost of attendance (2026-27). Costs are in US dollars.

export const columbiaUniversityPrograms: Program[] = [
  {
    name: "Computer Science (Columbia College)",
    slug: "columbia-computer-science-ba",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Computer Science major is a liberal arts BA taught by the same Computer Science Department that serves Columbia Engineering. Students take a common core of foundational courses, then six electives: three upper-level area-foundation courses and three more from across the department, planned with a faculty advisor. The degree sits alongside the Core Curriculum, so it suits students who want computing combined with broad study in the humanities and sciences. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/computer-science/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Computer Science",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Economics",
    slug: "columbia-economics",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Economics major trains students to think analytically about how societies allocate scarce resources, with core theory courses in micro- and macroeconomics and econometrics, upper-level electives and a senior seminar. Topics range from international trade and financial systems to labour markets and development. Besides the general major, the department runs five interdisciplinary majors (Financial Economics, and joint majors with mathematics, political science, statistics and philosophy) that share the same theoretical core. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/economics/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Economics",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Mathematics",
    slug: "columbia-mathematics",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Mathematics major introduces the main developments of theoretical mathematics of the past four centuries from a modern point of view, with applications in physics, cryptography and finance. Students start with Honors Mathematics or the calculus sequence and linear algebra, then move on to the main branches of modern mathematics (algebra, analysis and geometry), with courses becoming more theoretical and proof-based. Joint majors with computer science, economics and statistics are also available. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/mathematics/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Mathematics",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Statistics",
    slug: "columbia-statistics",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Statistics major treats statistics as the art and science of study design and data analysis, built on probability theory and statistical theory. After mathematical and computing prerequisites and a calculus-based introduction, students take five core courses in probability and in theoretical and applied statistics (such as probability theory, statistical inference and linear regression models), then electives. Interdisciplinary majors are offered with computer science, economics, mathematics and political science, and a Data Science major is run with Computer Science. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/statistics/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Statistics",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Political Science",
    slug: "columbia-political-science",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Political Science major studies power and governance: political institutions, behaviour, processes and political economy. Students cover four subfields (American politics, comparative politics, international relations and political theory), choosing a primary and a secondary subfield, and learn methods such as statistical analysis and formal modelling. Joint majors are offered with economics and statistics. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/political-science/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Political Science",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Psychology",
    slug: "columbia-psychology",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Psychology",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Psychology major covers the science of the mind and behaviour, with 11 courses spread across three areas (perception and cognition; psychobiology and neuroscience; and social, personality and abnormal psychology), plus statistics, research methods and an advanced seminar. Students are encouraged to take supervised research courses in faculty laboratories. The department also co-sponsors the interdepartmental Neuroscience and Behavior major with Biological Sciences. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/psychology/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Psychology",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Biology",
    slug: "columbia-biology",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's Biology major, from the Department of Biological Sciences, gives broad training in the core biological disciplines with an emphasis on cell and molecular biology. It starts with a year of introductory biology, normally taken in the sophomore year after a year of general chemistry, followed by upper-level biology courses, with many chances to join research projects in campus laboratories. Related majors include Biochemistry, Biophysics, Computational Biology and Neuroscience and Behavior. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/biological-sciences/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Biology",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "English",
    slug: "columbia-english",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's English major, in the Department of English and Comparative Literature, builds critical and imaginative reading. It is organised around three ways of studying literature (history, genre and geography), so students read major authors alongside popular culture, and British literature alongside postcolonial, global and transatlantic writing. Advanced seminars, capped at 18 students, let majors do specialised work. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/english-comparative-literature/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in English",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "History",
    slug: "columbia-history",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College's History major covers most regions of the world and most periods of history, without insisting on any single method or interpretive model. Students combine lectures with research seminars, choose a specialisation and plan their courses with faculty on the Undergraduate Education Committee. A senior thesis is optional but required for departmental honours. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/history/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in History",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Architecture (Barnard College department)",
    slug: "columbia-architecture",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Architecture",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia College students can major in Architecture through the Department of Architecture at Barnard College, which runs the undergraduate architecture program for Barnard, Columbia College and General Studies students. It is a liberal arts BA in which students learn to think about the world through design, from full-scale installations to models of the built environment, mixing hand-made representation with digital tools and using New York City for projects. It is a liberal arts degree rather than a professional one: students who want to practise as architects go on to graduate professional programs. Applicants apply to Columbia College through the Common App, the Coalition App on Scoir or QuestBridge, and declare the major in the sophomore year.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-college/departments-instruction/architecture/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA), major in Architecture",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia College (the liberal arts college; all students take the Core Curriculum). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations and a counselor recommendation are required",
      "Recommended preparation: 4 years of English, 4 years of mathematics (at least through pre-calculus), 3-4 years each of history/social studies and laboratory science, and 3-4 years of one foreign language",
      "The major is taught by Barnard College's Architecture Department; Columbia College students apply to Columbia College, not to Barnard (a separate women's college with its own admissions). No portfolio is required for admission; an optional arts portfolio can be submitted as a supplementary material",
    ],
  },

  {
    name: "Computer Science (Columbia Engineering)",
    slug: "columbia-computer-science-bs",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia Engineering's BS in Computer Science needs at least 62 points in the major: the Computer Science core, four area-foundation courses, four CS electives and four general technical electives, on top of calculus, linear algebra, probability and the SEAS first-year curriculum in mathematics, physics and chemistry. The department publishes example programs for students who want to focus on particular areas of computer science. Compared with the Columbia College BA, it is more technical and includes engineering-school science requirements. Applicants apply to Columbia Engineering (SEAS) through the Common App, the Coalition App on Scoir or QuestBridge, and choose the major after the common first-year engineering curriculum.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-engineering/academic-departments-programs/computer-science/undergraduate-programs/computer-science-bs/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia Engineering (The Fu Foundation School of Engineering and Applied Science, SEAS). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations (one from a math or science teacher) and a counselor recommendation are required",
      "Recommended preparation: 4 years of mathematics through calculus, 4 years of laboratory science including chemistry and physics, 4 years of English, 3-4 years of history/social studies and 2-3 years of a foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Operations Research",
    slug: "columbia-operations-research",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia Engineering's BS in Operations Research, in the Department of Industrial Engineering and Operations Research (IEOR), teaches probability, statistics, applied mathematics, simulation and optimisation, followed by professionally oriented operations research courses. It suits mathematically minded students and prepares them for analyst roles in consulting and financial services or graduate study in operations research or business. Finance-focused students can also look at IEOR's newer Quantitative Finance and Financial Technology BS. Applicants apply to Columbia Engineering (SEAS) through the Common App, the Coalition App on Scoir or QuestBridge, and choose the major after the common first-year engineering curriculum.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-engineering/academic-departments-programs/industrial-engineering-operations-research/undergraduate-programs/operations-research-bs/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Operations Research",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia Engineering (The Fu Foundation School of Engineering and Applied Science, SEAS). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations (one from a math or science teacher) and a counselor recommendation are required",
      "Recommended preparation: 4 years of mathematics through calculus, 4 years of laboratory science including chemistry and physics, 4 years of English, 3-4 years of history/social studies and 2-3 years of a foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "columbia-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia Engineering's BS in Mechanical Engineering is ABET-accredited and covers mechanics of solids and fluids, thermodynamics, heat transfer, dynamics and vibrations, materials and manufacturing processes, and computer graphics and design, with a sequence of mechanical engineering laboratory courses. It prepares graduates to work across many industries or go on to research and graduate study, and it also suits careers in business, patent law, medicine or management. Students should declare the major before the start of junior year. Applicants apply to Columbia Engineering (SEAS) through the Common App, the Coalition App on Scoir or QuestBridge, and choose the major after the common first-year engineering curriculum.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-engineering/academic-departments-programs/mechanical-engineering/undergraduate-programs/mechanical-engineering-bs/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia Engineering (The Fu Foundation School of Engineering and Applied Science, SEAS). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations (one from a math or science teacher) and a counselor recommendation are required",
      "Recommended preparation: 4 years of mathematics through calculus, 4 years of laboratory science including chemistry and physics, 4 years of English, 3-4 years of history/social studies and 2-3 years of a foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Biomedical Engineering",
    slug: "columbia-biomedical-engineering",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia Engineering's ABET-accredited BS in Biomedical Engineering applies engineering and applied science to biology and medicine: measurement, data analysis, modelling and device design, from single cells to whole organisms. Optional elective concentrations let students focus on a particular biomedical engineering topic. Graduates move into the medical device industry, consulting and biotechnology, graduate study, or medical school, for which the department lists the extra pre-medical courses. An integrated BS/MS is available. Applicants apply to Columbia Engineering (SEAS) through the Common App, the Coalition App on Scoir or QuestBridge, and choose the major after the common first-year engineering curriculum.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-engineering/academic-departments-programs/biomedical-engineering/undergraduate-programs/biomedical-engineering-bs/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biomedical Engineering",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia Engineering (The Fu Foundation School of Engineering and Applied Science, SEAS). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations (one from a math or science teacher) and a counselor recommendation are required",
      "Recommended preparation: 4 years of mathematics through calculus, 4 years of laboratory science including chemistry and physics, 4 years of English, 3-4 years of history/social studies and 2-3 years of a foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "columbia-electrical-engineering",
    level: "Bachelor",
    universitySlug: "columbia-university",
    universityName: "Columbia University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$72,800 a year (US$36,400 a term), at the same rate for US and international students and for Columbia College and Columbia Engineering. Columbia's 2026-27 estimated first-year cost of attendance is US$99,774: tuition, fees of US$4,160 (including US$730 of one-time transcript and orientation fees), housing (US$12,522), food (US$7,128), books and supplies (US$1,320) and personal expenses (US$1,844). Travel varies and is extra. First-year students must live on campus. Columbia meets 100% of demonstrated financial need for all admitted students, including international students, with grants rather than loans. Admission is need-blind for US citizens and eligible non-citizens and need-aware for other international applicants, who must apply for aid at the time of application to be considered. There are no merit scholarships",
    description:
      "Columbia Engineering's ABET-accredited BS in Electrical Engineering gives a thorough grounding in circuit theory and electronic circuits, semiconductor devices, electromagnetics, signals and systems, digital systems and communications or networking, with laboratory courses from the first year. Electives let students focus on communications, devices, circuits or signal processing, and undergraduates can join faculty research. It prepares graduates for careers in industry, research or business, and an integrated BS/MS is available. The department also offers Computer Engineering jointly with Computer Science. Applicants apply to Columbia Engineering (SEAS) through the Common App, the Coalition App on Scoir or QuestBridge, and choose the major after the common first-year engineering curriculum.",
    officialProgramUrl:
      "https://bulletin.columbia.edu/columbia-engineering/academic-departments-programs/electrical-engineering/undergraduate-programs/electrical-engineering-bs/",
    campus: "Morningside Heights (Manhattan, New York City)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: "Fall (September, Morningside Heights campus, New York City). First-year students can enter only in the fall",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, Coalition App on Scoir or QuestBridge; US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; decisions mid-December 2026; financial aid application due 15 November). Regular Decision closes 1 January 2027 (decisions late March 2027; financial aid application due 15 February). Columbia has no Early Action or Early Decision II round and does not offer admission interviews. The QuestBridge National College Match deadline is also 1 November 2026",
    admissionRequirements: [
      "School: Columbia Engineering (The Fu Foundation School of Engineering and Applied Science, SEAS). Applicants choose Columbia College or Columbia Engineering on the application; the major itself is declared later",
      "Testing: test-optional for the 2026-27 application cycle (Fall 2027 entry), with no disadvantage for applying without SAT or ACT scores (scores that are submitted are superscored). Columbia has announced that it will require the SAT or ACT from the 2027-28 cycle (Fall 2028 entry). Scores from tests up to November (Early Decision) or February (Regular Decision) can be used",
      "English proficiency (applicants whose first language is not English): TOEFL iBT 105 (tests taken on or before 20 January 2026) or 5.5 (tests from 21 January 2026), IELTS Academic 7.5, Duolingo English Test 135, or Cambridge C1 Advanced/C2 Proficiency 191. Testing is not required if English is the applicant's home language, if secondary school was taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+",
      "Two teacher recommendations (one from a math or science teacher) and a counselor recommendation are required",
      "Recommended preparation: 4 years of mathematics through calculus, 4 years of laboratory science including chemistry and physics, 4 years of English, 3-4 years of history/social studies and 2-3 years of a foreign language",
      "No portfolio or audition is required; optional supplementary materials (such as an arts portfolio) may be submitted",
    ],
  },
];
