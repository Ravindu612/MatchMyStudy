import type { Program } from "../../programs";

// University of Washington (Seattle, Washington): 11 undergraduate and 4 graduate programs for autumn 2027 entry.
// Sources: UW Office of Admissions (first-year deadlines, how to apply, SAT/ACT policy, English proficiency, admission to majors, major pages, cost of attendance), UW Student Financial Aid's 2026-27 cost of attendance,
// UW Finance, Planning & Budgeting's 2026-27 annual tuition and fees tables, the Registrar's tuition tier list, International Student Services' 2026-27 estimated expenses, the Allen School, College of Engineering, Foster School of Business,
// Information School, MS in Data Science program, Department of Electrical & Computer Engineering and UW Graduate School Policy 3.2 (viewed October 22, 2026). Costs are in US dollars.

export const universityOfWashingtonPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "uw-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "The Allen School's Computer Science major is aimed at students most interested in designing software systems and applications, and it also suits students who want a double major with another College of Arts & Sciences subject. Compared with UW's Electrical & Computer Engineering degree, which focuses on hardware, circuits and the physics of computation, the CS major goes deeper into software, algorithms and data, along with areas such as artificial intelligence and human-computer interaction. UW says most of its computer science and computer engineering students are admitted directly to the Allen School as first-years, which the school calls its main admission pathway.",
    officialProgramUrl:
      "https://www.cs.washington.edu/academics/undergraduate/admissions/direct-major/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) with a major in Computer Science",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: Paul G. Allen School of Computer Science & Engineering. Admission route: Direct to Major (DTM) into the Paul G. Allen School of Computer Science & Engineering, and only for autumn entry. You must list Computer Science or Computer Engineering as your first-choice major on the first-year application; listing it second means you are not considered. No computing experience is required and decisions are holistic. UW says that if you are not admitted directly as a first-year, you are unlikely to get into CS or Computer Engineering later, because both are capacity-constrained majors",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "uw-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Computer Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "UW's Bachelor of Science in Computer Engineering, offered by the Allen School, combines hardware and software so that graduates understand how the two interact and limit or enable each other. Core courses cover physical and mathematical sciences, object-oriented programming, algorithms and data structures, software engineering, technical communication, circuits and systems, microprocessors, embedded systems and operating systems. Students can build depth in network design, signal processing, mobile computing, sensor systems, semiconductor devices, testing and quality assurance or project management. UW describes computer engineering as sitting between electrical engineering and computer science.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/computer-engineering/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science in Computer Engineering (BSCompE)",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: Paul G. Allen School of Computer Science & Engineering. Admission route: Direct to Major (DTM) into the Paul G. Allen School of Computer Science & Engineering, and only for autumn entry. You must list Computer Science or Computer Engineering as your first-choice major on the first-year application; listing it second means you are not considered. No computing experience is required and decisions are holistic. UW says that if you are not admitted directly as a first-year, you are unlikely to get into CS or Computer Engineering later, because both are capacity-constrained majors",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Electrical & Computer Engineering",
    slug: "uw-electrical-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "Electrical & Computer Engineering students at UW design and build the hardware and software behind electronic devices, from nanoscale computer chips to large power grids. The BSECE is awarded by the College of Engineering and concentrates on the physical side of computing: hardware, circuits, signal processing and the physics underneath computation. Pathways include sustainable energy systems, sensing and communication, neurotechnology, control systems, VLSI and digital systems design, photonics, computer architecture, embedded systems, machine learning, microelectronics and nanotechnology. It is a different degree from the Allen School's Computer Engineering major and has its own admission route.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/electrical-and-computer-engineering/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science in Electrical and Computer Engineering (BSECE)",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Engineering (Department of Electrical & Computer Engineering). Admission route: Direct to College (DTC) admission to the College of Engineering (autumn only). List this or any engineering major (other than Computer Engineering) as your first choice. If admitted you start as 'Engineering Undeclared', explore the engineering majors in your first year and request placement at the end of that year. Students who meet the placement requirements are guaranteed a place in an engineering major, but not necessarily their first choice. Getting in later from elsewhere at UW goes through a capacity-constrained application with limited space",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "uw-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "UW's Mechanical Engineering degree teaches the core principles of the field and applies them to current technology problems, with students working on interdisciplinary research and design projects. The curriculum focuses on dynamics, controls and robotics; manufacturing processes and advanced materials; energy and environmentally friendly 'green' engineering; and engineering for health through biotechnology and biomechanics. Students can add a Biomechanics or Mechatronics option. Most students enter through the College of Engineering's first-year Direct to College route and are placed into the major after their first year.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/mechanical-engineering/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science in Mechanical Engineering (BSME)",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Engineering (Department of Mechanical Engineering). Admission route: Direct to College (DTC) admission to the College of Engineering (autumn only). List this or any engineering major (other than Computer Engineering) as your first choice. If admitted you start as 'Engineering Undeclared', explore the engineering majors in your first year and request placement at the end of that year. Students who meet the placement requirements are guaranteed a place in an engineering major, but not necessarily their first choice. Getting in later from elsewhere at UW goes through a capacity-constrained application with limited space",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Human Centered Design & Engineering",
    slug: "uw-human-centered-design-engineering",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "Human Centered Design & Engineering (HCDE) students learn design and engineering processes for solving problems by understanding people and the settings they work and live in. Graduates earn an engineering degree with a strong grounding in user experience and interface design, information visualisation, user research, web design and web technologies, and there is a Data Science option. UW says graduates go on to roles such as UX researcher or designer, multimedia and web developer, usability engineer, interface designer and information architect at technology companies. HCDE is one of the majors students can be placed into after Direct to College admission to the College of Engineering.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/human-centered-design-engineering/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science in Human Centered Design and Engineering (BSHCDE)",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Engineering (Department of Human Centered Design & Engineering). Admission route: Direct to College (DTC) admission to the College of Engineering (autumn only). List this or any engineering major (other than Computer Engineering) as your first choice. If admitted you start as 'Engineering Undeclared', explore the engineering majors in your first year and request placement at the end of that year. Students who meet the placement requirements are guaranteed a place in an engineering major, but not necessarily their first choice. Getting in later from elsewhere at UW goes through a capacity-constrained application with limited space",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Informatics",
    slug: "uw-informatics",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Information Technology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "Informatics, taught by UW's Information School, is the study of people, information and technology. Students learn to design, build, manage and secure information systems that serve society, organisations and individuals, through hands-on learning built around problem-solving, teamwork, research, writing and presentations. Curricular options include Data Science, Health & Well-Being, Human-Computer Interaction, Information Architecture, Information Assurance & Cybersecurity, Information Management, Information & Society, and Software Development. A minor is also available.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/informatics/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science in Informatics (BS Info)",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: The Information School (iSchool). Admission route: Informatics is a capacity-constrained major. Most students apply after enrolling at UW, but you can be considered for direct first-year admission by listing Informatics as your first-choice major, and this is competitive. Students applying later need INFO 200, an approved programming course, an approved statistics course and another social science course, each with a grade of at least 2.0, and meeting these does not guarantee a place",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Business Administration",
    slug: "uw-business-administration",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Business",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "The Foster School of Business's Business Administration degree pairs a liberal arts education with the full range of business disciplines. Students can take a broad mix of upper-division electives or specialise by declaring an option: Accounting, Accounting for Business Professionals, Entrepreneurship, Finance, Human Resources Management, Information Systems, Marketing, or Operations & Supply Chain Management. A Certificate of International Studies in Business is also offered. Starting with the autumn 2027 entering class, first-year students admitted through Direct to College begin at Foster in their first autumn quarter.",
    officialProgramUrl:
      "https://foster.uw.edu/academics/degree-programs/undergraduate-programs/admissions/direct-to-college/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Arts in Business Administration (BABA)",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: Michael G. Foster School of Business. Admission route: from autumn 2027, first-year applicants can be considered for Foster's Direct to College (DTC) admission by listing Business Administration as their first-choice major (your second choice does not affect this). DTC students start as general business students and choose up to two Foster majors after the lower-division business core. If you are admitted to UW but not through DTC, you can apply to Foster later after the prerequisites, but that route is capacity-constrained and not guaranteed",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Economics",
    slug: "uw-economics",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "Economics at UW studies how institutions and arrangements create, protect and allocate scarce resources, and how individuals, firms, governments and other organisations behave. The BA suits students drawn to economic problems and an analytical approach to social questions, and prepares graduates for private and public sector work or graduate study in fields such as public policy, law and business. The BS asks for more mathematics and statistics, reflecting how quantitative modern economics is, and is especially aimed at students heading for graduate study in economics or for fields such as computational finance and data science.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/economics/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Economics",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (Department of Economics). Admission route: Economics is a capacity-constrained major at UW. First-year applicants are not admitted directly; you apply to the major after enrolling at UW, and admission may be competitive. The department's published criteria include a minimum 2.5 cumulative GPA, grades in ECON 200 and 201 plus approved statistics, calculus and English composition courses, a reading, critical thinking and writing exam, and a personal statement",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Psychology",
    slug: "uw-psychology",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Psychology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "UW's Psychology major treats psychology as the scientific study of the mind, brain and behaviour, with the aim of supporting healthy minds and a healthy society. It offers a broad curriculum along with chances to take part in undergraduate research and applied fieldwork. The BA builds scientific reasoning on topics such as human potential, social equity and the brain and behaviour, while the BS specialises further in data analysis and scientific research. UW lists career paths in science and research, education, law, medicine, health and human services, politics and public policy.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/psychology/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Psychology",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (Department of Psychology). Admission route: Psychology is a capacity-constrained major at UW. First-year applicants are not admitted directly; you apply to the major after enrolling at UW, and admission may be competitive. Applications are reviewed mainly on grades in PSYCH 101, 202 and 209 (at least 2.0 in each and a 2.5 average across the three) plus an approved math course",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Biology",
    slug: "uw-biology",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Biology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "Biology students at UW learn through classroom, lab and field courses, plus research, internships and study abroad. The department offers a BA in General Biology and BS degrees in General Biology; Ecology, Evolution & Conservation Biology; Molecular, Cellular & Developmental Biology; Physiology; and Plant Biology. UW says the major prepares students for careers in basic and applied research, education, health sciences, environmental science, science policy, government, business and the nonprofit sector.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/biology/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Biology",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (Department of Biology). Admission route: Biology is a capacity-constrained major at UW. First-year applicants are not admitted directly; you apply to the major after enrolling at UW, and admission may be competitive. You need the introductory biology series (BIOL 180, 200 and 220) with at least 2.0 in each course and a 2.5 GPA in supporting science and math courses, and the department also weighs application answers, space in the major and time to degree",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Statistics (including Data Science option)",
    slug: "uw-statistics",
    level: "Bachelor",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Data Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees at the Seattle campus (full-time, 10 to 18 credits a quarter, three quarters: autumn, winter and spring): US$45,789 a year for nonresident students, the rate international students pay (US$15,263 a quarter), compared with US$13,873 for Washington residents. Both figures include the U-PASS transit pass. UW Student Financial Aid's 2026-27 nonresident undergraduate cost of attendance for students living on or off campus adds housing and food of US$18,858, books and course supplies of US$900, transportation of US$1,074 and personal/miscellaneous costs of about US$2,508, for an estimated total of US$69,129. International Student Services adds the required International Student Health Insurance Plan (ISHIP) at US$537 a quarter, giving its own three-quarter estimate of US$70,740. The Office of Admissions cost page still shows a slightly lower nonresident tuition line (US$44,460, total US$67,800). Some majors and courses charge extra fees, and flights and visa costs are not included. UW does not offer financial aid or scholarships to international undergraduates. Rates for students starting in autumn 2027 have not been published yet",
    description:
      "UW describes statistics as the science of learning from data: designing ways to collect data, building mathematical models to analyse and interpret it, and using technology to visualise and explore it. The BS in Statistics trains students in statistical theory, modelling and methods and in applied data analysis. Students choose a Mathematical Statistics, Applied Statistics or Data Science option, and the Data Science option adds more computing and data management. The degree prepares graduates to work as statisticians in science, industry, business and government, or to go on to graduate study.",
    officialProgramUrl:
      "https://admit.washington.edu/majors/statistics/",
    campus: "Seattle",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Statistics",
    intake: "Autumn (late September). Winter first-year entry is not open to international applicants and spring first-year entry is not offered",
    applicationDeadline: "Autumn 2027 entry (Common App; international applicants pay a non-refundable US$95 fee and fee waivers are not available): the application opens 15 August 2026 and closes 15 November 2026. English test scores must come from exams taken on or before 31 December 2026. Decisions are released 1-15 March 2027, and most admitted students confirm by 1 May 2027 (check your offer letter for the exact date). UW does not use Early Decision or Early Action. Winter quarter first-year entry is not open to international applicants",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (Department of Statistics). Admission route: Statistics is a capacity-constrained major. Most students apply once enrolled at UW (applications are considered once a year, by the third Friday of April), but you can be considered for direct first-year admission by listing Statistics as your first-choice major, and this is competitive. The later route requires calculus through MATH 224, a programming course and probability, and completing them does not guarantee admission",
      "Testing: SAT/ACT not required. UW is test-optional, and reviewers do not see test scores in the holistic review, though high scores (1400 SAT / 31 ACT or above) may be considered for a small number of applicants who would not otherwise be admitted. Homeschooled applicants and students from schools without letter or numeric grades must still submit the SAT or ACT",
      "English proficiency (international applicants): official TOEFL iBT of at least 4.0 (new score scale for tests from 21 January 2026; 76 on the older 120-point scale), IELTS 6.0 or Duolingo English Test 110, taken by 31 December 2026. UW does not superscore English tests, does not accept TOEFL MyBest and has no conditional admission. Admitted international students average TOEFL 107, IELTS 7.6 and Duolingo 139. You are exempt if all your primary and secondary schooling was in Australia, Canada (English-speaking provinces), the UK, Ireland, New Zealand or the US. Alternatively, an average B in grade 10-12 English courses at an English-medium school plus SAT Evidence-Based Reading and Writing 580 or ACT English 22 meets the requirement",
      "Minimum preparation (CADRs): 4 years of English, 3 of math plus a math-based quantitative course in senior year, 3 of social science, 2 of a world language, 3 of science including 2 of lab science, and half a year each of arts and an academic elective. You self-report courses and grades through STARS; students at schools outside the US that follow a national curriculum also upload unofficial transcripts from grade 9 onwards. UW does not interview, use recommendation letters or track demonstrated interest",
    ],
  },

  {
    name: "Master of Science in Information Management (MSIM)",
    slug: "uw-ms-information-management",
    level: "Master",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Information Technology",
    duration: "1-2 years full-time (Early-Career 65 credits over about 7 quarters; Early-Career Accelerated 40 credits over 4 quarters; Mid-Career 36 credits over 4 quarters)",
    language: "English",
    tuitionNote:
      "2026-27 (autumn 2026 to summer 2027): the MSIM is a fee-based program charged at US$1,177 per credit, the same for residents, nonresidents and international students and for residential and online study. The iSchool estimates total costs (course fees plus about US$458 a quarter in UW fees) of US$79,564 for the Early-Career track, US$48,912 for Early-Career Accelerated and US$44,204 for Mid-Career, and expects rates to rise by roughly 3-6% a year. It estimates 12-month Seattle living costs of about US$39,780 (rent, utilities and food US$30,932, books US$900, local transport US$2,108, personal costs US$3,344 and health insurance US$2,496). A non-refundable US$500 deposit, credited to first-quarter tuition, is needed to accept an offer. International students cannot get US federal loans",
    description:
      "UW's STEM-designated Master of Science in Information Management, taught by the Information School, develops the strategic leadership and technical skills to set organisational goals, make workplaces more efficient and use information to drive results. The program is interdisciplinary and practice-focused, and students tailor their electives, often through three-course specialisations in Artificial Intelligence, Business Intelligence, Data Science, Information Architecture, Program/Product Management & Consulting, or User Experience. It can be taken residentially in Seattle or online, with Early-Career, Early-Career Accelerated and Mid-Career tracks, and the GRE is waived for eligible applicants.",
    officialProgramUrl:
      "https://ischool.uw.edu/programs/msim",
    campus: "Seattle (residential) or online",
    programType: "Full-time (residential); online also available",
    degree: "Master of Science in Information Management (MSIM)",
    intake: "Autumn for the residential program (online tracks admit every quarter)",
    applicationDeadline: "Autumn 2027 residential entry (US$90 application fee), round-based: the iSchool lists Early-Career rounds closing 18 November 2026, 3 February 2027, 24 March 2027 and 10 June 2027, and Mid-Career rounds closing 20 January, 10 March, 5 May and 10 June 2027 (all 11:59 p.m. Pacific). Later rounds are more selective and funding falls as the year goes on, so the iSchool encourages applying early. Check the MSIM timeline page for the exact dates for your track",
    admissionRequirements: [
      "A bachelor's degree or equivalent in any field by the time classes begin (3-year degrees are accepted under Graduate School policy 3.1). The UW Graduate School minimum GPA is 3.0, but applicants below it may still apply and should show professional and academic readiness",
      "Application materials: statement of purpose, two recommendations, resume or CV, specialization selection and transcripts. Mid-Career applicants need at least five years of full-time professional work after their undergraduate degree; Early-Career tracks need no work experience",
      "UW Graduate School English proficiency (Policy 3.2, for non-native speakers): minimum TOEFL iBT 4.0 (80 for tests before 21 January 2026), Duolingo 115 or IELTS Academic 6.5. Scores below the recommended level (TOEFL 4.5 or 92, Duolingo 130, IELTS 7.0) mean you must take one or two UW Academic English Program courses from your first quarter. A degree taught in English, studied in residence, can also meet the requirement",
    ],
  },

  {
    name: "Master of Science in Data Science (MSDS)",
    slug: "uw-ms-data-science",
    level: "Master",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Data Science",
    duration: "1.5 years full-time (45 credits over 5 quarters); part-time about 2.5 years",
    language: "English",
    tuitionNote:
      "2026-27: the MSDS is a self-sustaining, fee-based program at US$1,244 per credit for everyone (no separate resident or international rate). With 45 credits, estimated tuition is US$55,980, and the program suggests budgeting about 5% more for students entering in autumn 2027. Quarterly UW fees are extra (around US$423 a quarter for full-time students in 2024-25, about US$2,115 over five quarters). International Student Services estimates graduate living expenses at US$9,371 a quarter (US$28,113 for three quarters) for 2026-27, plus the required ISHIP health insurance at US$537 a quarter. International students cannot get US federal aid; the program offers some partial merit scholarships to top admitted students",
    description:
      "UW's MS in Data Science is a professional master's for people starting or advancing a data science career. Evening classes on the Seattle campus cover statistical modelling, data management, machine learning, data visualisation, software engineering, research design, data ethics and user experience. The curriculum has eight core courses and a two-quarter capstone project on a real data science problem for an outside organisation. Full-time students take two courses a quarter on two evenings a week. The program holds an annual data science career fair, and alumni work at companies such as JP Morgan Chase, IBM, Toyota, Northrop Grumman and Zillow.",
    officialProgramUrl:
      "https://www.washington.edu/datasciencemasters/",
    campus: "Seattle",
    programType: "Full-time or part-time (evening classes)",
    degree: "Master of Science in Data Science (MSDS)",
    intake: "Autumn only (once a year)",
    applicationDeadline: "Autumn 2027 entry (US$90 application fee; international F-1/J-1 applicants cannot get fee waivers): Deadline A is 19 January 2027 at 11:59 p.m. Pacific, with decisions in mid-March, and students who need an F-1 visa must apply by this deadline. Deadline B is 8 April 2027, with decisions in mid-June. No late applications or materials are accepted, except recommendation letters up to two weeks after the deadline, and there is no rolling admission",
    admissionRequirements: [
      "A four-year US bachelor's degree or equivalent (3-year degree holders should check with the Graduate School) and a minimum 3.0 GPA over the last two years of graded study; strong candidates below 3.0 can explain this in the application",
      "Documented computer science and mathematics prerequisite skills, through graded coursework or a technical endorsement. GRE and GMAT scores are not used and not accepted",
      "Two short essays, unofficial transcripts, a short resume (ideally one page) and two letters of recommendation, submitted through the UW Slate application",
      "English proficiency (higher than the Graduate School minimum): TOEFL iBT 5.0 overall and in each section on the new scale (106 overall with 25 per section on the old scale), Duolingo 125 or IELTS 7.5. A degree taught entirely in English, with documentation, removes the need for a test",
    ],
  },

  {
    name: "Master of Science in Electrical & Computer Engineering (MSECE)",
    slug: "uw-ms-electrical-computer-engineering",
    level: "Master",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Engineering",
    duration: "42 credits, full-time daytime program (coursework or thesis option)",
    language: "English",
    tuitionNote:
      "2026-27 Seattle annual tuition and fees for three quarters (autumn, winter, spring), using the Graduate Tier III rate that UW's Registrar lists for the daytime MS in Electrical Engineering: US$40,524 for nonresident and international students and US$23,265 for Washington residents, including the U-PASS. Summer quarter is extra. International Student Services estimates graduate living expenses at US$9,371 a quarter (US$28,113 for three quarters) for 2026-27, plus the required ISHIP health insurance at US$537 a quarter. UW ECE says most master's students pay their own way, with a few teaching and research assistant positions available each quarter. (The separate part-time Professional Master's Program is fee-based at US$1,130 per credit in 2026-27.)",
    description:
      "UW ECE's daytime master's program offers advanced preparation for professional practice through a flexible coursework option or a research thesis option. The coursework option suits students heading for senior industry roles, while the thesis option, built around deeper research, is meant for students who may go on to a PhD. Students can shape their studies around areas such as computer architecture, embedded systems, machine learning and AI, signal processing, power electronics and power systems, photonics, semiconductor devices, neural engineering, wireless communications and robotics and controls. Graduates go to research institutions and to employers such as Boeing, Microsoft, Intel, Apple and Amazon.",
    officialProgramUrl:
      "https://ece.uw.edu/academics/grad/",
    campus: "Seattle",
    programType: "Full-time (daytime)",
    degree: "Master of Science in Electrical & Computer Engineering (MSECE)",
    intake: "Autumn only (once a year)",
    applicationDeadline: "Autumn 2027 entry (US$90 application fee): the UW Graduate School application opens 1 October 2026 and must be completed by 15 December 2026. Materials received after the deadline are not reviewed, and nothing should be sent directly to the department",
    admissionRequirements: [
      "A cumulative GPA of at least 3.0 (on a 4.0 scale) for the last 90 graded quarter credits or 60 graded semester credits. Applicants from other technical fields (math, physics, computer science or other engineering) are welcome but must first make up any gaps in ECE background",
      "Application materials: resume or CV, up to four research areas of interest, a statement of purpose (no more than three pages, double-spaced), three letters of recommendation and unofficial transcripts from all colleges attended. GRE scores are not required or accepted",
      "UW Graduate School English proficiency (Policy 3.2, for non-native speakers): minimum TOEFL iBT 4.0 (80 for tests before 21 January 2026), Duolingo 115 or IELTS Academic 6.5. Scores below the recommended level (TOEFL 4.5 or 92, Duolingo 130, IELTS 7.0) mean you must take one or two UW Academic English Program courses from your first quarter. A degree taught in English, studied in residence, can also meet the requirement. UW ECE strongly suggests meeting the recommended 'ELP satisfied' scores to be competitive",
    ],
  },

  {
    name: "Full-Time MBA",
    slug: "uw-full-time-mba",
    level: "Master",
    universitySlug: "university-of-washington",
    universityName: "University of Washington",
    country: "United States",
    field: "Business",
    duration: "2 years full-time (6 quarters)",
    language: "English",
    tuitionNote:
      "Students starting in 2026-27: total tuition and fees for the two-year program are US$122,778 for nonresident and international students and US$87,414 for Washington residents. Nonresidents are billed about US$20,060 in tuition plus US$403 in fees each quarter (US$61,389 a year for incoming MBA students on UW's 2026-27 rate table), and each cohort keeps the same rate for both years, though rates for new cohorts can change every year. Foster estimates 12-month costs of US$30,932 for room and board, US$1,100 for books, US$2,108 for local transport, US$3,344 for personal costs and US$3,600 for health, plus about US$650 in MBA Association and club dues. Merit scholarships are open to domestic and international candidates with no separate application (priority goes to Rounds 1 and 2), and some out-of-state students may receive tuition waivers",
    description:
      "The Foster School of Business's Full-Time MBA is a two-year, in-person program in Seattle with daytime weekday classes and small cohorts that give students individual attention. It combines a rigorous business curriculum, taught by faculty who are leaders in their fields, with dedicated career coaching and direct links to Seattle's business community, and Foster builds AI into coursework, projects and research. Foster reports an average starting salary of more than US$144,000 for the Class of 2025 and says the program has one of the highest returns on investment among top-20 business schools.",
    officialProgramUrl:
      "https://foster.uw.edu/academics/degree-programs/full-time-mba/",
    campus: "Seattle",
    programType: "Full-time (in person, daytime weekday classes)",
    degree: "Master of Business Administration (MBA)",
    intake: "Autumn only (one intake a year)",
    applicationDeadline: "Autumn 2027 entry (US$90 non-refundable fee, one application per year): Round 1 closed 1 October 2026 (decisions by 18 December 2026). Round 2 closes 5 January 2027 at 11:59 p.m. Pacific, with decisions by 26 March 2027 and an enrollment deadline of 29 April 2027, and this is the final deadline for international applicants. Round 3 closes 23 March 2027 (decisions by 14 May 2027) for domestic applicants",
    admissionRequirements: [
      "A four-year US bachelor's degree or equivalent in any subject; there is no minimum GPA, but Foster generally looks for 3.0 (B) or better. Work experience is not strictly required but is highly valued",
      "Two required essays (post-MBA plans, and the Foster mission statement), resume, two recommendations (preferably professional) and transcripts, plus a video interview after the deadline; admission interviews are by invitation",
      "Testing: GMAT (10th Edition or Focus) or GRE, with no preference; GMAT Superscore is not used for the 2027 cycle. Applicants can apply test-optional with a short statement of quantitative readiness, but Foster strongly encourages international applicants to submit a score",
      "English proficiency (non-native speakers, cannot be waived): TOEFL 5 on the new scale (100 iBT for tests before 21 January 2026), IELTS 7.0 or Duolingo 130, or a full degree taught in English that meets UW's residency rules",
    ],
  },
];
