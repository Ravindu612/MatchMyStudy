import type { Program } from "@/data/programs";

// Northeastern University undergraduate majors for Fall 2027 entry (Boston campus).
// Sources: Northeastern Academic Catalog program pages, the Undergraduate Admissions deadlines and decisions, first-year applicants, international applicants and cost & financial aid pages,
// the Student Financial Services 2026-2027 tuition and fees page, the CAMD portfolio page and the N.U.in Program pages. Costs are in US dollars.

export const northeasternUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "northeastern-computer-science",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Computer Science, taught by the Khoury College of Computer Sciences, covers program design, software development, computer organisation, systems and networks, the theory of computation, programming languages and advanced algorithms. Students can add concentrations such as artificial intelligence, and the 133-credit degree includes Khoury's co-op preparation course and paid six-month co-op placements in industry. Students apply through the Common App or Coalition App to Northeastern, choosing the Khoury College of Computer Sciences and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: Khoury College of Computer Sciences. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "northeastern-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Artificial Intelligence, from the Khoury College of Computer Sciences, covers the field from classical methods to modern data-centric AI. It combines computer and data science with mathematics, statistics and probability. Students get hands-on experience with machine learning, neural networks, reinforcement learning and generative AI, study responsible AI development, and take part in co-op. Students apply through the Common App or Coalition App to Northeastern, choosing the Khoury College of Computer Sciences and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/computer-information-science/data-science/artificial-intelligence-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Artificial Intelligence",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: Khoury College of Computer Sciences. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Cybersecurity",
    slug: "northeastern-cybersecurity",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Cybersecurity, from the Khoury College of Computer Sciences, builds a computer science foundation and then focuses on keeping systems and networks secure and reliable, through lab-based security courses and co-op. It is strongly interdisciplinary, covering how human behaviour, policy and law affect cybersecurity alongside the technical tools. Students apply through the Common App or Coalition App to Northeastern, choosing the Khoury College of Computer Sciences and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/computer-information-science/cybersecurity/cybersecurity-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Cybersecurity",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: Khoury College of Computer Sciences. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Business Administration",
    slug: "northeastern-business-administration",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Business",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BSBA, from the D'Amore-McKim School of Business, combines management theory and practice through active learning, corporate partnerships and experiential projects. Students build technical, analytical and strategic skills, choose concentrations such as finance, marketing, accounting or entrepreneurship (or combined majors and minors), and are expected to complete paid co-op placements. Students apply through the Common App or Coalition App to Northeastern, choosing the D'Amore-McKim School of Business and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/business/business-administration-bsba/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science in Business Administration (BSBA)",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: D'Amore-McKim School of Business. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Economics",
    slug: "northeastern-economics",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Economics, in the College of Social Sciences and Humanities, focuses on the mathematics behind economic models through six core courses and seven electives. It leaves room for topics such as game theory, economic development and mathematical economics, plus supporting courses in mathematics and computer science. Students aiming for a PhD are encouraged to double major in mathematics. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Social Sciences and Humanities and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/social-sciences-humanities/economics/economics-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Economics",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Social Sciences and Humanities. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "northeastern-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BSME, in the College of Engineering, covers the design, development and manufacture of machines and devices that transmit power and convert energy. Students use computational tools to design, model and test systems, with applications from heating and engines to energy conversion, robotics and new technologies. Co-op placements are built into the degree. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Engineering and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/engineering/mechanical-industrial/bsme/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science in Mechanical Engineering (BSME)",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Engineering. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "northeastern-computer-engineering",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Computer Engineering, in the College of Engineering, gives a strong grounding in engineering principles and physical science together with hardware and software design. Core courses cover computer organisation and architecture, computer networks, computer-aided design, programming languages, optimisation and software design, followed by technical electives and co-op. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Engineering and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/engineering/electrical-computer/computer-engineering-bscompe/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science in Computer Engineering (BSCmpE)",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Engineering. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Biology",
    slug: "northeastern-biology",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Biology, in the College of Science, builds on mathematics, chemistry and physics to explore life from molecules and cells to organ systems, populations, ecosystems and evolution. Advanced electives let students specialise in areas such as developmental or stem cell biology, microbiology or physiology, and co-op or research placements add hands-on experience. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Science and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/science/biology/biology-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biology",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Science. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Behavioral Neuroscience",
    slug: "northeastern-behavioral-neuroscience",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Biomedical Sciences",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Behavioral Neuroscience, in the College of Science, studies the biological basis of behaviour in health and disease. It combines biology and psychology with physical sciences and mathematics, covering the brain's structure and function from neurons to circuits and networks, before advanced electives in specialist topics. Students cannot double major with psychology, biology, cell and molecular biology or biochemistry. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Science and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/science/interdisciplinary/behavioral-neuroscience-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Behavioral Neuroscience",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Science. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Psychology",
    slug: "northeastern-psychology",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Psychology",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Psychology, in the College of Science, is a research-based degree spanning biological, cognitive, social, personality, clinical, developmental and applied psychology. Students can build an interdisciplinary cluster of courses, do research in faculty laboratories and take part in co-op. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Science and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/science/psychology/psychology-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Psychology",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Science. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Nursing",
    slug: "northeastern-nursing",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Nursing",
    duration: "4 years full-time, with two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BSN, in the Bouvé College of Health Sciences School of Nursing, is a 130-credit program of sequential nursing courses and clinical practice that prepares students for the NCLEX-RN licensing exam. First-year entrants follow a four-year plan with two six-month co-ops, at least one of them working directly with registered nurses in patient care. Students apply through the Common App or Coalition App to Northeastern, choosing the Bouvé College of Health Sciences and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/health-sciences/nursing/bsn/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science in Nursing (BSN)",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: Bouvé College of Health Sciences. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "Nursing students must meet the School of Nursing's clinical requirements and technical standards for clinical practice. No portfolio or audition is required",
    ],
  },

  {
    name: "Pharmacy (PharmD, direct entry)",
    slug: "northeastern-pharmacy-pharmd",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Pharmacy",
    duration: "6 years full-time (2 pre-professional + 4 professional years)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships. The graduate-level final PharmD year is billed at Bouvé's graduate pharmacy rates, which differ from undergraduate tuition.",
    description:
      "Northeastern's direct-entry Doctor of Pharmacy, in the Bouvé College of Health Sciences, admits students straight from high school into a six-year program: two pre-professional years followed by four professional years. Students earn a BS in Pharmacy Studies after year 5 and complete the PharmD at graduate level in year 6. Introductory pharmacy practice experiences are fulfilled through co-op, and advanced practice experiences follow under pharmacist preceptors. Students apply through the Common App or Coalition App to Northeastern, choosing the Bouvé College of Health Sciences and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/health-sciences/pharmacy/pharmacy-pharmd/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Doctor of Pharmacy (PharmD); a BS in Pharmacy Studies is awarded after year 5",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: Bouvé College of Health Sciences. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "Students must meet the School of Pharmacy and Pharmaceutical Sciences' academic and professional standing requirements to progress into the professional years. No portfolio or audition is required",
    ],
  },

  {
    name: "Health Science",
    slug: "northeastern-health-science",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Health Sciences",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Health Science, in the Bouvé College of Health Sciences, gives an academic and experiential foundation for graduate or professional study in fields such as medicine, dentistry, public health, physician assistant studies, pharmacy, physical therapy and speech-language pathology. Electives can cover clinical prerequisites, and students get individual advice from Northeastern's PreMed and PreHealth Advising Program. Students apply through the Common App or Coalition App to Northeastern, choosing the Bouvé College of Health Sciences and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/health-sciences/community-health-behavioral-sciences/health-science-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Health Science",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: Bouvé College of Health Sciences. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },

  {
    name: "Architecture",
    slug: "northeastern-architecture",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Architecture",
    duration: "4 years full-time (or a 5-year track with two 6-month co-ops)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BS in Architecture, in the College of Arts, Media and Design, combines a project-based design studio sequence with architectural history and building technology. Students can take a four-year track with one six-month co-op (plus an optional four-month co-op) or a five-year track with two six-month co-ops. The BS is not itself accredited, but graduates in good standing can apply to Northeastern's one-year, NAAB-accredited Master of Architecture, the route to licensure. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Arts, Media and Design and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/arts-media-design/architecture/architecture-bs/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Architecture",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round. The optional CAMD portfolio is due 15 November 2026 (ED I), 15 December 2026 (EA), 15 January 2027 (ED II) or 1 February 2027 (RD).",
    admissionRequirements: [
      "College: College of Arts, Media and Design. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "Portfolio (optional but encouraged): 5 to 10 items, such as drawings, photography, digital graphics, drafting, models or other artwork, showing visual, spatial or organisational representation, craft and conceptual thinking. It is submitted through the Application Status Check after applying, with CAMD selected as the home college",
    ],
  },

  {
    name: "International Affairs",
    slug: "northeastern-international-affairs",
    level: "Bachelor",
    universitySlug: "northeastern-university",
    universityName: "Northeastern University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time, with up to two 6-month co-ops",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$71,050 a year (US$35,525 a semester) plus US$1,650 in fees, at the same rate for US and international students. Northeastern's estimated total cost of attendance for a first-year student on the Boston campus in 2026-27 is US$98,322: tuition and fees plus housing (US$13,612), food (US$9,210), books and course materials (US$1,000), personal expenses (US$900) and transportation (US$900). These estimates are subject to Board of Trustees approval. The Massachusetts-required student health plan (US$3,049) is extra unless waived. If the first semester is spent in the N.U.in Program, the fall semester instead costs US$46,600 in direct costs (tuition plus a program fee that covers housing and flights). International students are not eligible for need-based aid but are considered for merit scholarships.",
    description:
      "Northeastern's BA in International Affairs, in the College of Social Sciences and Humanities, is a flexible, multidisciplinary program on global affairs since the early 20th century. It covers conflict and cooperation between states, civil society, transnational advocacy and social movements, and democracy, authoritarianism and inequality. Students can add regional concentrations and international experience through co-op. Students apply through the Common App or Coalition App to Northeastern, choosing the College of Social Sciences and Humanities and this major.",
    officialProgramUrl:
      "https://catalog.northeastern.edu/undergraduate/social-sciences-humanities/international-affairs/international-affairs-ba/",
    campus: "Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in International Affairs",
    intake: "Fall (September, Boston). Some admits are offered a Spring start instead: the N.U.in Program (fall semester abroad, then Boston from January) or another first-year option (London Scholars, New York City Scholars or the Oakland campus), where the major is compatible",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App or Coalition App, US$75 fee): Early Decision I closes 1 November 2026 (binding; decision by 1 January 2027). Early Action closes 1 November 2026 (non-binding; decision by 15 February 2027). Early Decision II closes 1 January 2027 (binding; decision by 1 March 2027). Regular Decision closes 1 January 2027 (non-binding; decision by 1 April 2027). Optional InitialView or Vericant interviews are due by 15 November, 1 December, 15 January or 1 February, depending on the round.",
    admissionRequirements: [
      "College: College of Social Sciences and Humanities. Applicants choose this college and major on the Common App or Coalition App",
      "Testing: Northeastern is test-optional for all applicants, including international students, with no disadvantage for applying without scores. Applicants who submit can send the SAT, the ACT or both, and Northeastern superscores and uses the better result",
      "English proficiency (non-native speakers): official results from TOEFL iBT (test centre or Home Edition), IELTS Academic, Duolingo, PTE Academic, or C1 Advanced/C2 Proficiency, no more than 2 years old. A waiver is possible after 4 consecutive full-time years in English-medium schools. There is no minimum score. The middle 50% of admitted students scored TOEFL iBT 102 to 110 (5.0 to 5.5 on the new scale from 21 January 2026), IELTS 7.5 to 8.0, Duolingo 130 to 140, PTE 79 to 86 and Cambridge 195 to 202. Strong applicants who need more English support may be offered NU Immerse",
      "International applicants also submit the Declaration and Certification of Finances (DCF). One teacher and one counselor recommendation are required",
      "No portfolio or audition is required",
    ],
  },
];
