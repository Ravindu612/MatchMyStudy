import type { Program } from "../../programs";

// University of Calgary undergraduate programs (Fall 2027 entry).
// Sourced from UCalgary's official program pages and admission requirements, the 2026-27 undergraduate cost estimator, the UCalgary Calendar (English Language Proficiency, Engineering degree summary) and the first-year degree guides.

export const universityOfCalgaryPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "ucalgary-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Science rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "UCalgary's BSc in Computer Science teaches students to model real-world problems as abstractions a computer can work with efficiently, then lets them specialize in areas ranging from game design and computer graphics to artificial intelligence and information security and privacy. Undergraduates can join faculty research from second year through summer projects or research courses, and the optional Science Internship Program places students in paid roles such as software developer or cloud architect intern.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/computer-science",
    campus: "Calgary (main campus)",
    programType: "Regular or internship",
    degree: "Bachelor of Science (BSc) in Computer Science",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Two of: Biology 30, Chemistry 30, Physics 30, Mathematics 31 or CTS Computing Science 30 level (5 Credits) (or post-secondary equivalents); One approved course or option; estimated competitive average Low 80s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Two of: Biology (HL or SL), Chemistry (HL or SL), Computer Science (HL or SL), Physics (HL or SL) or Calculus; Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); One approved course or option; estimated competitive score 33 - 34. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Two of: Biology, Calculus, Chemistry, Physics, or Computer Science; One approved course or option; estimated competitive average High 80s / 3.5 - 3.7 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Data Science",
    slug: "ucalgary-data-science",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Data Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Science rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Data Science at UCalgary combines statistics and computing with knowledge from another discipline: alongside core courses in linear methods, calculus, discrete mathematics, programming and statistical inquiry, students complete a six-course concentration chosen from more than 25 fields. The program looks at what techniques such as machine learning can and cannot do, and at how people shape the way data is collected and presented, and it finishes with capstone projects on real data done in teams.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/data-science",
    campus: "Calgary (main campus)",
    degree: "Bachelor of Science (BSc) in Data Science",
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Two of: Biology 30, Chemistry 30, Physics 30, Mathematics 31 or CTS Computing Science 30 level (5 Credits) (or post-secondary equivalents); One approved course or option; estimated competitive average Mid 80s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Two of: Biology (HL or SL), Chemistry (HL or SL), Computer Science (HL or SL), Physics (HL or SL) or Calculus; One approved course or option; estimated competitive score 26 - 27. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Two of: Biology, Calculus, Chemistry, Physics, or Computer Science; One approved course or option; estimated competitive average Mid 80s. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Software Engineering",
    slug: "ucalgary-software-engineering",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Software Engineering",
    duration: "4 years (129-136 units); 5 years with the optional internship",
    language: "English",
    tuitionNote:
      "International: about CAD 40,283 tuition for a full-time course load across the fall and winter terms in 2026-27 (Schulich School of Engineering rate, first-year student). Canadian citizens and permanent residents: about CAD 9,471. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Software Engineering at UCalgary's Schulich School of Engineering is an accredited BSc in Engineering focused on building, validating and maintaining software systems, with topics such as streamlining the development process and making software and e-commerce more secure. Students start with the common engineering first year, then move into software analysis and design and project work, including the chance to build a startup. The Engineering Career Centre offers an optional 12 to 16 month paid internship.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/software-engineering",
    campus: "Calgary (main campus)",
    programType: "Regular or internship",
    degree: "Bachelor of Science in Engineering (BSc in Eng), Software Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Admission is to the Schulich School of Engineering's common first year (10 courses in mathematics, science, computing, engineering principles, communications and design); you enter this major in second year, and your first-choice major is guaranteed once you pass all 10 technical common-core courses",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 31; Mathematics 30-1; Chemistry 30; Physics 30 or Biology 30; estimated competitive average Low 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Physics (HL or SL) or Biology (HL or SL); estimated competitive score 31 - 32. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Calculus; Chemistry; Physics or Biology; estimated competitive average Mid 80s / 3.3 - 3.5 GPA (Low 90s / 3.7 - 3.9 GPA without Calculus). US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Engineering applicants can be assessed on Physics or Biology; an offer based on Biology is finalized only after passing the Bioengineering Institute summer course in August. Applicants without Math 31 (or calculus) can still be considered at a higher average and take an alternative calculus stream; IB applicants with Mathematical Studies SL need about 33",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "ucalgary-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "4 years (129-136 units); 5 years with the optional internship",
    language: "English",
    tuitionNote:
      "International: about CAD 40,283 tuition for a full-time course load across the fall and winter terms in 2026-27 (Schulich School of Engineering rate, first-year student). Canadian citizens and permanent residents: about CAD 9,471. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Mechanical Engineering at UCalgary covers the design, testing and manufacture of mechanical devices and systems, with courses in computer-aided design, dynamics, solid and fluid mechanics, thermodynamics, heat transfer and materials. Most courses include hands-on labs, and open-ended design projects bring in problem-based learning and industry contact. After the common first year, students can add a minor such as aerospace, mechatronics, biomedical, digital or petroleum engineering, and an optional 12 to 16 month paid internship is available.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/mechanical-engineering",
    campus: "Calgary (main campus)",
    programType: "Regular or internship",
    degree: "Bachelor of Science in Engineering (BSc in Eng), Mechanical Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Admission is to the Schulich School of Engineering's common first year (10 courses in mathematics, science, computing, engineering principles, communications and design); you enter this major in second year, and your first-choice major is guaranteed once you pass all 10 technical common-core courses",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 31; Mathematics 30-1; Chemistry 30; Physics 30 or Biology 30; estimated competitive average Low 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Physics (HL or SL) or Biology (HL or SL); estimated competitive score 31 - 32. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Calculus; Chemistry; Physics or Biology; estimated competitive average Mid 80s / 3.3 - 3.5 GPA (Low 90s / 3.7 - 3.9 GPA without Calculus). US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Engineering applicants can be assessed on Physics or Biology; an offer based on Biology is finalized only after passing the Bioengineering Institute summer course in August. Applicants without Math 31 (or calculus) can still be considered at a higher average and take an alternative calculus stream; IB applicants with Mathematical Studies SL need about 33",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Chemical Engineering",
    slug: "ucalgary-chemical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Chemical Engineering",
    duration: "4 years (129-136 units); 5 years with the optional internship",
    language: "English",
    tuitionNote:
      "International: about CAD 40,283 tuition for a full-time course load across the fall and winter terms in 2026-27 (Schulich School of Engineering rate, first-year student). Canadian citizens and permanent residents: about CAD 9,471. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Chemical Engineering at UCalgary is an accredited program about turning raw materials into useful products and separating complex mixtures, from refining crude oil to redesigning processes to cut pollution and keeping chemical plants safe. Students begin with the common engineering first year, then learn through classes, tutorials and the design of a complete industrial process for a product. Graduates work in energy, biotechnology, biomedicine and research, and an optional 12 to 16 month paid internship is available.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/chemical-engineering",
    campus: "Calgary (main campus)",
    programType: "Regular or internship",
    degree: "Bachelor of Science in Engineering (BSc in Eng), Chemical Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Admission is to the Schulich School of Engineering's common first year (10 courses in mathematics, science, computing, engineering principles, communications and design); you enter this major in second year, and your first-choice major is guaranteed once you pass all 10 technical common-core courses",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 31; Mathematics 30-1; Chemistry 30; Physics 30 or Biology 30; estimated competitive average Low 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Physics (HL or SL) or Biology (HL or SL); estimated competitive score 31 - 32. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Calculus; Chemistry; Physics or Biology; estimated competitive average Mid 80s / 3.3 - 3.5 GPA (Low 90s / 3.7 - 3.9 GPA without Calculus). US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Engineering applicants can be assessed on Physics or Biology; an offer based on Biology is finalized only after passing the Bioengineering Institute summer course in August. Applicants without Math 31 (or calculus) can still be considered at a higher average and take an alternative calculus stream; IB applicants with Mathematical Studies SL need about 33",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Commerce: Accounting",
    slug: "ucalgary-commerce-accounting",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Accounting",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 32,379 tuition for a full-time course load across the fall and winter terms in 2026-27 (Haskayne School of Business rate, first-year student). Canadian citizens and permanent residents: about CAD 8,369. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "The Accounting concentration of the Haskayne School of Business BComm prepares students to create, communicate and assess financial information as entry-level accountants. After a common first-year business core, students build technical skills and work through conceptual issues in financial, management, audit and tax accounting using live projects, case studies, group work and formal presentations. Graduates go into areas such as auditing, tax and forensic accounting, and co-op work placements, mentorship and international exchange are available.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/accounting",
    campus: "Calgary (main campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Commerce (BComm), Accounting concentration",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Two of: Aboriginal Studies 30 (5-credits), Biology 30, Chemistry 30, CTS Computing Science 30 Level (5-credits), Language or Language and Culture Courses at the 30 level, Mathematics 31, Physics 30, Science 30, Social Studies 30-1; One approved course or option; estimated competitive average High 80s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Two of: Any approved International Baccalaureate (IB) courses, one of which may be a Fine Arts Course; One approved course or option; estimated competitive score 27 - 30. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Two approved courses, excluding Arts/Visual Studies, Dance, and Music; One approved course or option; estimated competitive average Low 80s / 3.0 - 3.3 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Commerce: Finance",
    slug: "ucalgary-commerce-finance",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Finance",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 32,379 tuition for a full-time course load across the fall and winter terms in 2026-27 (Haskayne School of Business rate, first-year student). Canadian citizens and permanent residents: about CAD 8,369. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "The Finance concentration of the Haskayne BComm is about deciding which uncertain investments to pursue and how to fund them, with topics such as interest rates, cost of capital and business valuation. Students use spreadsheet and statistical software and apply core financial principles to a changing business environment through live projects, case studies and presentations. It leads to careers in banking, securities and international finance, with co-op placements, mentorship and study abroad options.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/finance",
    campus: "Calgary (main campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Commerce (BComm), Finance concentration",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Two of: Aboriginal Studies 30 (5-credits), Biology 30, Chemistry 30, CTS Computing Science 30 Level (5-credits), Language or Language and Culture Courses at the 30 level, Mathematics 31, Physics 30, Science 30, Social Studies 30-1; One approved course or option; estimated competitive average High 80s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Two of: Any approved International Baccalaureate (IB) courses, one of which may be a Fine Arts Course; One approved course or option; estimated competitive score 27 - 30. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Two approved courses, excluding Arts/Visual Studies, Dance, and Music; One approved course or option; estimated competitive average Low 80s / 3.0 - 3.3 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Nursing",
    slug: "ucalgary-nursing",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Nursing",
    duration: "3.25 to 3.5 years (120 units, condensed format)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Nursing rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "UCalgary's BScN prepares students to practise as registered nurses through classroom learning, simulated clinical labs and practice placements with small clinical groups in hospitals and community settings. Courses include introduction to nursing, Indigenous health, evidence-informed and ethical nursing practice, and nursing amid complexity. The degree is delivered in a condensed format, so students admitted to Year 1 usually finish in about three and a quarter to three and a half years.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/nursing-year-one",
    campus: "Calgary (main campus)",
    degree: "Bachelor of Science in Nursing (BScN)",
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Main-campus Nursing uses a lottery: applicants who have the required courses and at least an 82% competitive average (high school applicants), and who submit all documents and pay the fee by each round's document deadline, enter selection rounds that each fill 20-40% of seats until the program is full. Nursing can only be chosen as your first program choice",
      "Alberta curriculum: Mathematics 30-1 or 30-2; English Language Arts 30-1; Biology 30; Chemistry 30 or Science 30; One approved course or option; estimated competitive average 82% (the lottery threshold; see the lottery note)",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Alberta Mathematics 30-1 or Math 30-2 or equivalent; Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Biology (HL or SL); One approved course or option; estimated competitive score 35 - 38 (82% lottery threshold applies). IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Alberta Mathematics 30-1 or Math 30-2 or equivalent; One of: Pre-Calculus or College Algebra; Chemistry; Biology; One approved course or option; estimated competitive average 82% (the lottery threshold; see the lottery note). US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required and the Faculty of Nursing sets higher test minimums: IELTS Academic 7.0 with no band below 7.0, TOEFL iBT 92 with at least 23 in each section (tests before January 21, 2026) or 5 overall with no section below 4.5 on the new scale, Duolingo 130 with no integrated subscore below 130, PTE Academic 65 with no skill below 65, or Cambridge C1 Advanced or C2 Proficiency 185 (CAEL is not listed for Nursing). Other ways to meet the requirement include three years of full-time English-medium secondary study in an exempt country, or 80% or more in Alberta English Language Arts 30-1",
    ],
  },

  {
    name: "Kinesiology",
    slug: "ucalgary-kinesiology",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Kinesiology rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Kinesiology at UCalgary is the multidisciplinary study of human movement and function, asking questions such as how physical activity affects ageing and how people adapt to environmental stress. Students build a common foundation in anatomy and physiology, motor control, statistics and research methods, then shape a BKin or BSc around their interests. Labs, practicum placements and study abroad are part of the program, and graduates work in coaching, recreation, health and fitness or research.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/kinesiology",
    campus: "Calgary (main campus)",
    degree: "Bachelor of Kinesiology (BKin) or Bachelor of Science (BSc) in Kinesiology",
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Biology 30; Chemistry 30; One approved course or option; estimated competitive average Low 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Biology (HL or SL); One approved course or option; estimated competitive score 33 - 34. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Chemistry; Biology; One approved course or option; estimated competitive average High 80s / 3.5 - 3.7 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Biomedical Sciences (BHSc)",
    slug: "ucalgary-biomedical-sciences",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Biomedical Sciences",
    duration: "4 years (120 units, Honours)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Cumming School of Medicine rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "The Biomedical Sciences major of UCalgary's Bachelor of Health Sciences, run by the Cumming School of Medicine, is a research-focused honours degree. Students explore areas such as cancer biology, neuroscience, cardiovascular and gastrointestinal physiology, biochemistry, genetics and infectious disease, learning in class, in the lab and through summer research studentships. It prepares graduates for research, the pharmaceutical and biotech sectors, or professional programs such as medicine.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/biomedical-science",
    campus: "Calgary (main campus)",
    degree: "Bachelor of Health Sciences (BHSc) Honours, Biomedical Sciences major",
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Biology 30; Chemistry 30; One approved course or option; estimated competitive average High 80s with supplemental consideration",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Biology (HL or SL); One approved course or option; estimated competitive score 33 - 34. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Chemistry; Biology; One approved course or option; estimated competitive average High 80s / 3.5 - 3.7 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "An online supplementary application is required, and admission combines your average with the supplemental assessment. Math 30-1 (or equivalent) must be at least 70% (IB: grade 4 or higher in Mathematics). The program page does not list separate international application dates for this program, so confirm timing with UCalgary",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "ucalgary-biological-sciences",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Biological Sciences",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Science rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Biological Sciences is UCalgary's broadest biology program, covering life from molecules to ecosystems and topics such as the effects of climate change and using microbes to clean up oil spills. Students can design a flexible degree and choose a concentration in Biodiversity and Conservation, Biotechnology, or Genetics and Evolution, with a strong focus on lab work, research skills, programming and modelling. The Science Internship Program and field courses abroad, such as tropical biodiversity in Belize, are optional.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/biological-sciences",
    campus: "Calgary (main campus)",
    programType: "Regular or internship",
    degree: "Bachelor of Science (BSc) in Biological Sciences",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Biology 30; Chemistry 30; One approved course or option; estimated competitive average Low 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Biology (HL or SL); One approved course or option; estimated competitive score 33 - 34. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Chemistry; Biology; One approved course or option; estimated competitive average High 80s / 3.5 - 3.7 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Neuroscience",
    slug: "ucalgary-neuroscience",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Neuroscience",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Science rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Neuroscience at UCalgary studies the brain and behaviour, from the molecular and cellular basis of behaviour to emotion, memory and how humans and animals respond to everyday challenges. Students learn by working through problems in class, in tutorials and in the lab, starting with chemistry, linear methods, scientific reasoning and an introduction to neuroscience. Graduates go into biomedical research, biotechnology, pharmaceuticals or public health, or on to medicine or graduate school.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/neuroscience",
    campus: "Calgary (main campus)",
    degree: "Bachelor of Science (BSc) in Neuroscience",
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Biology 30; Chemistry 30; One approved course or option at the 30 level; estimated competitive average High 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Biology (HL or SL); One approved course or option; estimated competitive score 39 - 42. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Chemistry; Biology; One approved course or option; estimated competitive average Mid 90s / 3.9 - 4.0 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Psychology (BSc)",
    slug: "ucalgary-psychology-bsc",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Psychology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Arts rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "UCalgary's BSc in Psychology treats psychology as the scientific study of the biological, cognitive, emotional and social bases of behaviour. Students build strong statistics, research and communication skills and can join research labs as volunteers or through research courses. Courses span developmental, social and biological psychology and the history of the field, and a combined degree with a Bachelor of Community Rehabilitation can be completed in five years.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/psychology-science",
    campus: "Calgary (main campus)",
    degree: "Bachelor of Science (BSc) in Psychology",
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Biology 30; Chemistry 30; One approved course or option; estimated competitive average Low 90s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Chemistry (HL or SL); Biology (HL or SL); One approved course or option; estimated competitive score 31 - 32. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Chemistry; Biology; One approved course or option; estimated competitive average Mid 80s / 3.3 - 3.5 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Biology 30 and Chemistry 30 (or equivalents) are needed because they are prerequisites for the first-year biology course in the BSc",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Economics",
    slug: "ucalgary-economics",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Economics",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Arts rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Economics at UCalgary examines how individuals, markets and institutions decide what is produced, how, and who gets it, using economic models to analyse employment, innovation and government policy. The department is known for energy and environmental economics, international trade and monetary economics, and offers an optional applied energy concentration, an honours degree and job-focused courses in data analysis, machine learning and cost-benefit analysis. Co-op placements are available.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/economics",
    campus: "Calgary (main campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Arts (BA) in Economics",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; Mathematics 30-1; Three approved courses, one of which may be an approved option; estimated competitive average Mid 80s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); Mathematics Analysis and Approaches (HL or SL) or Applications and Interpretations (HL or SL); Three approved courses, one of which may be an approved option; estimated competitive score 24 - 25. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; Pre-calculus; Three approved courses, one of which may be an option; estimated competitive average Mid 70s / 2.3 - 2.6 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

  {
    name: "Political Science",
    slug: "ucalgary-political-science",
    level: "Bachelor",
    universitySlug: "university-of-calgary",
    universityName: "University of Calgary",
    country: "Canada",
    field: "Political Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: about CAD 30,782 tuition for a full-time course load across the fall and winter terms in 2026-27 (Faculty of Arts rate, first-year student). Canadian citizens and permanent residents: about CAD 7,387. General fees of about CAD 1,788 a year (health and dental plan, UPass transit, athletics and student services) are extra. These are UCalgary's official 2026-27 estimates, valid to April 2027; Fall 2027 rates are not yet published.",
    description:
      "Political Science at UCalgary studies conflict and cooperation within and between societies, working with ideas such as justice, liberty, representation and democracy. Students build research, statistical and communication skills through courses on political thought, government, ideologies, world politics and the Global South. An honours option, co-op placements and study abroad are available, and graduates go into government, non-profits, business, law or graduate study.",
    officialProgramUrl:
      "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/political-science",
    campus: "Calgary (main campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Arts (BA) in Political Science",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications: Canadian applicants (Alberta and other provinces) October 1, 2026 to March 1, 2027; international applicants August 15, 2026 to April 1, 2027. Admission averages are calculated on 4 Grade 11/12 courses for early admission and 5 final courses for standard admission, so applying early can mean an earlier offer",
    admissionRequirements: [
      "Apply online through UCalgary's application for admission; you can list two program choices",
      "Alberta curriculum: English Language Arts 30-1; 4 approved courses, one of which may be an approved option; estimated competitive average Low 80s",
      "International Baccalaureate: English A Literature (HL or SL), English A Language and Literature (HL or SL), or English B (HL); 4 approved courses, one of which may be an approved option; estimated competitive score 24 - 25. IB Diploma students are assessed on their overall diploma score; IB applicants without the full diploma are assessed on the five required courses",
      "United States curriculum: English; 4 approved courses, one of which may be an approved option; estimated competitive average Mid 70s / 2.3 - 2.6 GPA. US applicants must attend an accredited high school; SAT and ACT scores are optional. Other provinces and countries have their own course lists on the program page",
      "Averages shown are UCalgary's estimated competitive admission averages (based on the previous admission cycle), not guaranteed cut-offs; they change each year with the applicant pool",
      "English language proficiency is required. Ways to meet it include three years of full-time English-medium secondary study in an exempt country or at a school accredited for Canadian, US or British curricula, 80% or more in Alberta English Language Arts 30-1 (or equivalent), IB English A (HL or SL) grade 5+ or English B HL grade 6+, or AP English 4+. Test minimums for most programs: IELTS Academic 6.5, TOEFL iBT 86 (tests before January 21, 2026) or 4.5 on the new scale, Duolingo 120, PTE Academic 60, CAEL 70, Cambridge C1 Advanced or C2 Proficiency 180",
    ],
  },

];
