import type { Program } from "../../programs";

// University of Alberta undergraduate programs (Fall 2027 entry).
// Sourced from ualberta.ca undergraduate program, admission requirements, deadlines, tuition and language pages and the 2026-27 international viewbook.

export const universityOfAlbertaPrograms: Program[] = [
  {
    name: "Computing Science",
    slug: "ualberta-computing-science",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,792 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Science rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The University of Alberta's BSc major in Computing Science gives students core programming, algorithms and systems skills in a department with research strengths in artificial intelligence, machine learning, robotics, games, multimedia, software and database systems, and bioinformatics. The degree is flexible: students can add a minor from more than 60 subjects or a second major, or concentrate on computing. A BSc Honors route is available for students who want more depth and research experience.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-computing-science.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Science (BSc) with Major in Computing Science",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1 and two of Biology 30, Chemistry 30, Physics 30, Mathematics 31 or Computing Science (Advanced CTS), plus one further subject (fine arts, humanities, a language other than English, or math/science)",
      "International curricula: English, Mathematics and two of Biology, Chemistry, Physics or Calculus, plus one further approved subject",
      "Recent admission-average range (past three cycles): low 80s to mid 90s (Faculty of Science)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Data Science",
    slug: "ualberta-data-science",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Data Science",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,792 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Science rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "Data Science at the University of Alberta combines computing science, mathematics and statistics to teach students how to work with data rigorously and responsibly. Coursework covers mathematical foundations, programming, algorithms, databases, probability, statistics, optimization and machine learning, with the aim of using today's tools and building new methods as the field changes. It is offered as a BSc major (with an optional minor or double major) or as an Honors degree.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-data-science.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Science (BSc) with Major in Data Science",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1 and two of Biology 30, Chemistry 30, Physics 30, Mathematics 31 or Computing Science (Advanced CTS), plus one further subject (fine arts, humanities, a language other than English, or math/science)",
      "International curricula: English, Mathematics and two of Biology, Chemistry, Physics or Calculus, plus one further approved subject",
      "Recent admission-average range (past three cycles): low 80s to mid 90s (Faculty of Science)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Engineering (Foundational/Qualifying First Year)",
    slug: "ualberta-engineering-first-year",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Engineering",
    duration: "4 years (traditional) or 5 years (co-op)",
    language: "English",
    tuitionNote:
      "International: CAD 49,953 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Engineering rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees, and engineering courses are charged CAD 1,123.04 each. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "All high school applicants to Engineering at the University of Alberta start in a common foundational (qualifying) first year covering calculus, linear algebra, chemistry, physics, mechanics and computer programming, plus labs and two courses on engineering design and the profession. After first year, students move into a discipline: chemical, civil, computer, electrical, materials, mechanical, mining or petroleum engineering, or engineering physics. They also choose a traditional route or a co-op route with 20 months of paid work placements. The first year can also be taken in French at Campus Saint-Jean.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-engineering-qualifying-year.html",
    campus: "Edmonton (North Campus)",
    programType: "Traditional or co-op",
    degree: "Bachelor of Science in Engineering (BSc Eng), entered through the foundational first year",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1, Mathematics 31, Chemistry 30 and Physics 30",
      "International curricula: English, Mathematics, Calculus, Chemistry and Physics",
      "Recent admission-average range (past three cycles): mid 80s to low 90s (Engineering)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "ualberta-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "4 years (traditional) or 5 years (co-op), including the first year",
    language: "English",
    tuitionNote:
      "International: CAD 49,953 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Engineering rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees, and engineering courses are charged CAD 1,123.04 each. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "Mechanical Engineering at the University of Alberta is a broad program built on five core areas: solid mechanics, dynamics, fluid mechanics, thermodynamics and design. Theory is paired with hands-on design work, and graduates go into industries from transportation to medicine. Students enter after the common first year of Engineering, can choose a traditional or co-op route, and can add a co-op-only Biomedical Option.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-mechanical-engineering-mechanical-engineering.html",
    campus: "Edmonton (North Campus)",
    programType: "Traditional or co-op",
    degree: "Bachelor of Science in Mechanical Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Not a direct-entry program: high school applicants apply to the Engineering foundational/qualifying first year and enter Mechanical Engineering in second year",
      "First-year Engineering requirements: Alberta English Language Arts 30-1, Mathematics 30-1, Mathematics 31, Chemistry 30 and Physics 30; international curricula English, Mathematics, Calculus, Chemistry and Physics",
      "Recent admission-average range (past three cycles): mid 80s to low 90s (Engineering, for entry to the first year)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "ualberta-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Computer Engineering",
    duration: "4 years (traditional) or 5 years (co-op), including the first year",
    language: "English",
    tuitionNote:
      "International: CAD 49,953 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Engineering rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees, and engineering courses are charged CAD 1,123.04 each. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "Computer Engineering at the University of Alberta teaches students to design computer systems where hardware and software are tightly linked. Graduates work in areas such as artificial intelligence, software engineering and cybersecurity. Students enter after the common first year of Engineering and can follow the standard program, a Nanoscale System Design Option, or a co-op-only Software Option.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-computer-engineering-computer-engineering.html",
    campus: "Edmonton (North Campus)",
    programType: "Traditional or co-op",
    degree: "Bachelor of Science in Computer Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Not a direct-entry program: high school applicants apply to the Engineering foundational/qualifying first year and enter Computer Engineering in second year",
      "First-year Engineering requirements: Alberta English Language Arts 30-1, Mathematics 30-1, Mathematics 31, Chemistry 30 and Physics 30; international curricula English, Mathematics, Calculus, Chemistry and Physics",
      "Recent admission-average range (past three cycles): mid 80s to low 90s (Engineering, for entry to the first year)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Commerce: Accounting",
    slug: "ualberta-commerce-accounting",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Accounting",
    duration: "4 years (longer with the optional 12-month co-op)",
    language: "English",
    tuitionNote:
      "International: CAD 46,547 per year guaranteed tuition for students who entered in Fall 2026 (Alberta School of Business rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees, and business courses are charged CAD 1,152 each. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The Accounting major in the Alberta School of Business BCom teaches students to gather, analyse and communicate financial information, a foundation for careers in accounting or financial management. Graduates can go on to the Chartered Professional Accountant (CPA) designation. Students are admitted to the BCom directly from high school, and after 24 credits they can apply to the Business Co-op program, which adds 12 months of paid work experience.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-commerce-accounting.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Commerce (BCom), Accounting major",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1, two subjects from humanities, languages other than English or math/sciences, and one further subject (which may also be a fine art)",
      "International curricula: English, Mathematics, two subjects from humanities, languages other than English or math/sciences, and one further approved subject",
      "Recent admission-average range (past three cycles): mid to high 80s (Business)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Commerce: Finance",
    slug: "ualberta-commerce-finance",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Finance",
    duration: "4 years (longer with the optional 12-month co-op)",
    language: "English",
    tuitionNote:
      "International: CAD 46,547 per year guaranteed tuition for students who entered in Fall 2026 (Alberta School of Business rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees, and business courses are charged CAD 1,152 each. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The Finance major in the Alberta School of Business BCom prepares students for careers in banking, investments and portfolio management, corporate and international finance, mergers and acquisitions, and trading. The curriculum covers at least 70% of the CFA Level 1 material, which ties it closely to professional practice and the CFA exams. BCom students can apply to the Business Co-op program after 24 credits for 12 months of paid work experience.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-commerce-finance.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Commerce (BCom), Finance major",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1, two subjects from humanities, languages other than English or math/sciences, and one further subject (which may also be a fine art)",
      "International curricula: English, Mathematics, two subjects from humanities, languages other than English or math/sciences, and one further approved subject",
      "Recent admission-average range (past three cycles): mid to high 80s (Business)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Nursing",
    slug: "ualberta-nursing",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Nursing",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 35,908 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Nursing rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The University of Alberta's four-year BScN prepares students for a nursing career, with hands-on training starting in the first semester. Students use patient simulation and other current technology and complete several clinical placements. In the collaborative program, students can study on North Campus in Edmonton or at a partner site (Red Deer Polytechnic, Keyano College or Northwestern Polytechnic). After second year, students can apply to the competitive BScN Honors program, which includes a research project.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-nursing-nursing.html",
    campus: "Edmonton (North Campus) or a partner institution (Red Deer Polytechnic, Keyano College or Northwestern Polytechnic)",
    degree: "Bachelor of Science in Nursing (BScN), Collaborative program",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Biology 30, Chemistry 30 (or Science 30), Mathematics 30-1 or 31 (Mathematics 30-2 is also listed, with a footnote on the requirements tool), plus one further subject",
      "International curricula: English, Biology, Chemistry, Mathematics or Calculus, plus one further approved subject",
      "Spoken English Proficiency is also required for Nursing (for example IELTS Speaking 7.5, TOEFL iBT Speaking 26 or 5.0 on the new scale, or Duolingo 140 with no integrated subscore below 120)",
      "Recent admission-average range (past three cycles): high 80s to low 90s (BSc in Nursing)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Psychology (BSc)",
    slug: "ualberta-psychology-bsc",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Psychology",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,792 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Science rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The BSc in Psychology studies how the brain works and how people perceive, learn, remember and are motivated, with an emphasis on the biological, physical and mathematical sciences. Courses range from cognitive psychology and behaviour modification to abnormal psychology, and the program gives students wide flexibility in how many psychology courses they take. Students can add a minor or second major, choose the Honors route, or take Psychology as a BA instead.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-psychology.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Science (BSc) with Major in Psychology",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1 and two of Biology 30, Chemistry 30, Physics 30, Mathematics 31 or Computing Science (Advanced CTS), plus one further subject (fine arts, humanities, a language other than English, or math/science)",
      "International curricula: English, Mathematics and two of Biology, Chemistry, Physics or Calculus, plus one further approved subject",
      "Recent admission-average range (past three cycles): low 80s to mid 90s (Faculty of Science)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "ualberta-biological-sciences",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Biology",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,792 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Science rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The Biological Sciences major gives a broad view of the life sciences across animal, plant and human biology, and lets students steer their course choices toward their interests. As a BSc with Major, it can be combined with a minor from more than 60 subjects or a second major. An Honors version is available for students drawn to research.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-biological-sciences.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Science (BSc) with Major in Biological Sciences",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1 and two of Biology 30, Chemistry 30, Physics 30, Mathematics 31 or Computing Science (Advanced CTS), plus one further subject (fine arts, humanities, a language other than English, or math/science)",
      "International curricula: English, Mathematics and two of Biology, Chemistry, Physics or Calculus, plus one further approved subject",
      "Recent admission-average range (past three cycles): low 80s to mid 90s (Faculty of Science)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Neuroscience",
    slug: "ualberta-neuroscience",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Neuroscience",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,792 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Science rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "Neuroscience at the University of Alberta is an interdisciplinary program run jointly by the Faculty of Science and the Neuroscience and Mental Health Institute. It covers the full range of brain function: development, nerve cells and synapses, sensation and perception, learning and memory, movement control, animal behaviour, cognitive psychology and nervous-system disorders. It is offered as a BSc major or as an Honors degree.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-with-major-neuroscience.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Science (BSc) with Major in Neuroscience",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Mathematics 30-1 and two of Biology 30, Chemistry 30, Physics 30, Mathematics 31 or Computing Science (Advanced CTS), plus one further subject (fine arts, humanities, a language other than English, or math/science)",
      "International curricula: English, Mathematics and two of Biology, Chemistry, Physics or Calculus, plus one further approved subject",
      "Recent admission-average range (past three cycles): low 80s to mid 90s (Faculty of Science)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Kinesiology (BSc)",
    slug: "ualberta-kinesiology-bsc",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,233 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Kinesiology, Sport, and Recreation rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The Bachelor of Science in Kinesiology is a science-focused degree in human movement, exercise science and athletic performance. It concentrates on promoting health, preventing and managing chronic disease, and improving human performance. The faculty also offers a broader, interdisciplinary Bachelor of Kinesiology (BKin) for students who want a less science-heavy route.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-science-in-kinesiology-kinesiology.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Science in Kinesiology",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1, Chemistry 30, Mathematics 30-1, Physics 30, plus one physical education or math/science subject",
      "International curricula: English, Chemistry, Mathematics, Physics, plus one physical education or math/science subject",
      "Recent admission-average range (past three cycles): mid to high 80s (BSc in Kinesiology)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Economics (BA)",
    slug: "ualberta-economics",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Economics",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,233 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Arts rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "Economics at the University of Alberta looks at how a society produces, manages and distributes its wealth, and trains students to weigh the costs and benefits of decisions. The major blends economic theory with methods courses that build analytical problem-solving tools, taught by a department with a strong research record. It can also be taken within a BA Honors degree.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-arts-economics.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Arts (BA), Economics major",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1 plus four further subjects (at least three from humanities, languages other than English or math/sciences; the fourth may also be a fine art)",
      "International curricula: English plus four further approved subjects (at least three from humanities, languages other than English or math/sciences; the fourth may also be a fine art)",
      "Recent admission-average range (past three cycles): low to mid 70s (Faculty of Arts)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Political Science (BA)",
    slug: "ualberta-political-science",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Political Science",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,233 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Arts rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "Political Science at the University of Alberta studies power, governance and engaged citizenship through teaching methods that include simulations and student-led research. Courses cover democracy, citizenship and law; municipal, provincial and federal politics in Canada; gender and health politics; and international politics. The major is also available as part of a BA Honors degree.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-arts-political-science.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Arts (BA), Political Science major",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1 plus four further subjects (at least three from humanities, languages other than English or math/sciences; the fourth may also be a fine art)",
      "International curricula: English plus four further approved subjects (at least three from humanities, languages other than English or math/sciences; the fourth may also be a fine art)",
      "Recent admission-average range (past three cycles): low to mid 70s (Faculty of Arts)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

  {
    name: "Criminology",
    slug: "ualberta-criminology",
    level: "Bachelor",
    universitySlug: "university-of-alberta",
    universityName: "University of Alberta",
    country: "Canada",
    field: "Criminology",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "International: CAD 39,233 per year guaranteed tuition for students who entered in Fall 2026 (Faculty of Arts rate, fixed for years 1-4). Rates for Fall 2027 entrants will be stated in the offer of admission. Canadian students: 2026/27 tuition is CAD 729.36 per standard 3-credit course; U of A's first-year estimate for a general Arts program is CAD 7,200 tuition plus about CAD 3,700 for books, supplies and fees. The international guarantee covers instructional tuition only; non-instructional fees, books and housing are extra.",
    description:
      "The BA in Criminology examines why crime happens, how behaviour comes to be labelled criminal, how crime is measured, and how society and the criminal justice system respond. Alongside lectures, seminars and research mentorship, students build skills in research methods and social theory. They complete two supervised field placements in criminal justice settings to apply what they learn.",
    officialProgramUrl:
      "https://www.ualberta.ca/en/undergraduate-programs/bachelor-of-arts-in-criminology-criminology.html",
    campus: "Edmonton (North Campus)",
    degree: "Bachelor of Arts in Criminology",
    intake: "September",
    applicationDeadline: "March 1, 2027 (high school applicants; final documents due August 1, 2027). Admission is rolling, so applying early is encouraged",
    admissionRequirements: [
      "Alberta: English Language Arts 30-1 plus four further subjects (at least three from humanities, languages other than English or math/sciences; the fourth may also be a fine art)",
      "International curricula: English plus four further approved subjects (at least three from humanities, languages other than English or math/sciences; the fourth may also be a fine art)",
      "Recent admission-average range (past three cycles): high 80s to low 90s (BA Criminology)",
      "Minimum 70% average across the five required subjects (Grade 12 marks of 50%+ in each); admission is competitive and meeting the minimum does not guarantee an offer",
      "IB: HL or SL courses may be used. Full IB Diploma students present the five admission subjects the program requires, and predicted grades can be submitted",
      "English language proficiency is required of all applicants. It can be shown through three or more years of full-time study in English, approved courses, or tests: IELTS Academic 6.5 (no band below 6.0), TOEFL iBT 90 (no section below 21) for tests before January 21, 2026, or 4.5 overall (no band below 4.5) on the new scale, Duolingo 120 (no integrated subscore below 100), PTE Academic 61 (no skill below 60) or CAEL 70 (no band below 60)",
    ],
  },

];
