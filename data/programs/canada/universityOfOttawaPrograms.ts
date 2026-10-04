import type { Program } from "../../programs";

// University of Ottawa undergraduate programs (Fall 2027 entry, English-language streams).
// Sourced from uOttawa's admission requirements tool, application deadlines, language requirements and tuition fee tables, the uOttawa undergraduate catalogue, and faculty program pages.

export const universityOfOttawaPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "uottawa-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 31,582.15 per term in 2026-27 (Engineering faculty rate for Computer Science, full-time flat rate, first progress level), so about CAD 63,164.30 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 4,210.55, out-of-province CAD 4,874.24. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "uOttawa's Honours BSc in Computer Science is taught by the School of Electrical Engineering and Computer Science and pairs the foundations of computation with applications. Upper-year courses cover databases, artificial intelligence, computer graphics, security, distributed computing and algorithm design, and the degree ends with an honours project. Students can add options, minors or a second major, join the co-op program, or take the French Immersion Stream.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/computer-science",
    campus: "Ottawa (main campus)",
    programType: "Regular or co-op",
    degree: "Honours Bachelor of Science (BSc) in Computer Science",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code ORC)",
      "Program notes: Limited enrolment",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U) (A minimum combined average of 70% is required for all prerequisite courses in mathematics); minimum admission average 90%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL) (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 31 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus) (A minimum grade of 70% is required for mathematics); minimum admission average 90%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Software Engineering",
    slug: "uottawa-software-engineering",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Software Engineering",
    duration: "4 years (129 units, co-op mandatory)",
    language: "English",
    tuitionNote:
      "International: CAD 31,582.15 per term in 2026-27 (Engineering rate, full-time flat rate, first progress level), so about CAD 63,164.30 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 5,721.69, out-of-province CAD 5,721.69. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Software Engineering at uOttawa is a co-op-only BASc that applies engineering methods to software: rapid prototyping, requirements analysis, system modelling, design, implementation, testing and project management. Paid co-op work terms are built into the degree, and in the fourth-year project students can team up and use their work experience to build real applications. An Engineering Management and Entrepreneurship option and a French Immersion Stream are available.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/software-engineering",
    campus: "Ottawa (main campus)",
    programType: "Co-op (mandatory)",
    degree: "Bachelor of Applied Science (BASc) in Software Engineering (co-op)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OJA)",
      "Program notes: Limited enrolment. The Co-operative Education program is mandatory to complete during this program",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), One of the following: Biology 4U (SBI4U), Chemistry 4U (SCH4U), Computer Science 4U (ICS4U), Physics 4U (SPH4U) (A minimum grade of 70% is required for each prerequisite course); minimum admission average 87%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL), One of the following: Biology, Chemistry, Physics (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 34 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus), One of the following: Biology, Chemistry, Physics (A minimum of 70% is required for each prerequisite course; CO-OP is mandatory); minimum admission average 87%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "uottawa-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Computer Engineering",
    duration: "4 years (129 units)",
    language: "English",
    tuitionNote:
      "International: CAD 31,582.15 per term in 2026-27 (Engineering rate, full-time flat rate, first progress level), so about CAD 63,164.30 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 5,721.69, out-of-province CAD 5,721.69. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Computer Engineering at uOttawa builds on core engineering training and covers both hardware and software design. Students can focus on microprocessor-based systems, computer architecture, programming concepts, real-time operating systems, software engineering and robotics, which opens several career paths. Co-op is optional, and an Engineering Management and Entrepreneurship option is also offered.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/computer-engineering",
    campus: "Ottawa (main campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Applied Science (BASc) in Computer Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OBE)",
      "Program notes: Limited enrolment",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), Chemistry 4U (SCH4U), Physics 4U (SPH4U) (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics); minimum admission average 85%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL), Chemistry, Physics (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 31 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus), Chemistry, Physics (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics); minimum admission average 85%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "uottawa-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "4 to 5 years (132 units)",
    language: "English",
    tuitionNote:
      "International: CAD 31,582.15 per term in 2026-27 (Engineering rate, full-time flat rate, first progress level), so about CAD 63,164.30 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 5,721.69, out-of-province CAD 5,721.69. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Mechanical Engineering at uOttawa is a broad program covering mechanical, thermal and biomedical systems and devices, from computer components and manufacturing systems to power plants and spacecraft. Graduates work in high tech, aerospace, manufacturing, automotive, energy, biomedical and consulting. Co-op is optional, there is an Engineering Management and Entrepreneurship option, and French-language courses are available mainly in the first two years.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/mechanical-engineering",
    campus: "Ottawa (main campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Applied Science (BASc) in Mechanical Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OJE)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), Chemistry 4U (SCH4U), Physics 4U (SPH4U) (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics); minimum admission average 84%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL), Chemistry, Physics (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 35 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus), Chemistry, Physics (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics); minimum admission average 84%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Biomedical Science",
    slug: "uottawa-biomedical-science",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Biomedical Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Science rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Biomedical Science at uOttawa is an interdisciplinary program on the structure and function of the human body and those of other animals. The first two years cover human anatomy and psychology alongside biology, chemistry, biochemistry and mathematics. From the end of second year, students either take a minor or choose an option such as Neuroscience, Cellular and Molecular Medicine, Bioanalytical Science, Medicinal Chemistry or Biostatistics. The program prepares students for research training or professional health programs, and co-op entry is in second year.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bsc-biomedical-science/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Science (BSc) in Biomedical Science",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OUN)",
      "Program notes: Admission to co-op in second year",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), Two of the following: Biology 4U (SBI4U), Chemistry 4U (SCH4U), Physics 4U (SPH4U), Earth and Space Science 4U (SES4U) (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics; Students who do not have Calculus and Vectors 4U (MCV4U) can take the replacement course at the University either the summer before or during their first term; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 80%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL), Two of the following: Biology, Chemistry or Physics (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 31 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus), Two of the following: Biology, Chemistry, Physics (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 80%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Biology",
    slug: "uottawa-biology",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Biology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Science rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "uOttawa's Honours BSc in Biology connects knowledge from molecules to ecosystems, using classroom teaching, lab projects with current technology, field courses around the world, and close research mentoring at every year level. Students can follow a general route or an option in Cellular and Molecular Biology, Physiology, or Ecology, Evolution and Behaviour, which includes an independent research project. Graduates go into conservation, land-use management, ecotoxicology, research or health care, and co-op is available.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bsc-biology/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Science (BSc) in Biology",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OUR)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), Two of the following: Biology 4U (SBI4U), Chemistry 4U (SCH4U), Physics 4U (SPH4U), Earth and Space Science 4U (SES4U) (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics; Students who do not have Calculus and Vectors 4U (MCV4U) can take the replacement course at the University either the summer before or during their first term; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 78%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL), Two of the following: Biology, Chemistry or Physics (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 30 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus), Two of the following: Biology, Chemistry, Physics (A minimum combined average of 70% is required for all prerequisite courses in science and mathematics; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 80%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Health Sciences",
    slug: "uottawa-health-sciences",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Health Sciences",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Health Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "The Honours BHSc takes an integrative approach to health. It combines a core in the biosciences with quantitative and qualitative research methods, set within the social and environmental determinants of health. Students can focus on Integrative Health Biosciences, Technologies and Innovation in Healthcare, or Population and Public Health, with chances for a thesis and fieldwork. Graduates are prepared for health-related master's programs, public health careers, or further study in medicine, rehabilitation, dentistry or pharmacy. Co-op starts in second year.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bachelor-health-sciences/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Health Sciences (BHSc)",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OKC)",
      "Program notes: Admission to co-op in second year",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Biology 4U (SBI4U), Chemistry 4U (SCH4U), One of the following: Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), Physics 4U (SPH4U) (Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 85%",
      "IB Diploma: English A, Biology, Chemistry, One of the following: Mathematics, Analysis and Approaches or Mathematics, Applications and Interpretation, Physics (SL or HL unless stated); minimum 30 points; English B students must also submit an English test",
      "High school outside Canada: English, Biology, Chemistry, One of the following: Mathematics, Calculus, Physics (Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 80%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Nursing",
    slug: "uottawa-nursing",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Nursing",
    duration: "4 years (120 units, fixed course sequence)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Health Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "uOttawa's Honours BScN is a four-year, full-time program that trains generalist nurses to give quality care in any setting and to take on leadership roles in the health system. It emphasizes communication, critical thinking and lifelong learning, and can lead on to graduate studies in nursing. Courses follow a fixed sequence over at least four years, so direct entry into second year is not possible, and students transferring from another nursing program are not eligible. A French or English immersion stream is available.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bsc-nursing/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Science in Nursing (BScN)",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code ONE)",
      "Program notes: Limited enrolment. Due to the program structure and the mandatory sequencing of courses, the program must be completed according to a predetermined course sequence over a minimum duration of four years. Direct admission into the second year is not permitted, including for applicants who could be granted transfer credits. University transfer students coming from another nursing program, including bachelor programs offered at colleges, are not eligible for admission to our nursing program",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Biology 4U (SBI4U), Chemistry 4U (SCH4U), One of the following: Functions 3M (MCF3M), Functions 3U (MCR3U), Mathematics 4U course (A minimum grade of 65% is required for each prerequisite course; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 90%",
      "IB Diploma: English A, Biology, Chemistry, Mathematics, Analysis and Approaches or Mathematics, Applications and Interpretation (SL or HL unless stated); minimum 37 points; English B students must also submit an English test",
      "High school outside Canada: English, Biology, Chemistry, Mathematics (A minimum grade of 65% is required in each prerequisite course; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 90%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Human Kinetics (BSc)",
    slug: "uottawa-human-kinetics-bsc",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Health Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "The Honours BSc in Human Kinetics focuses on the biophysical side of human movement: how the biological, anatomical, musculoskeletal and neuromotor systems shape motor performance, and how sport and physical activity affect the body. Core subjects include anatomy, biomechanics, exercise physiology and motor control, along with social-science perspectives. Students can do community internships or supervised research. The degree leads toward physiotherapy, occupational therapy, medicine, chiropractic or graduate study, and toward certifications such as Registered Kinesiologist. Co-op entry is in third year.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bsc-human-kinetics/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Science in Human Kinetics",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OUL)",
      "Program notes: Admission to co-op in third year only",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U), Biology 4U (SBI4U), One of the following: Chemistry 4U (SCH4U), Physics 4U (SPH4U), Physics 3U (SPH3U) (Students who do not have Calculus and Vectors 4U (MCV4U) can take the replacement course at the University either the summer before or during their first term; Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 75%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL), Biology, One of the following: Chemistry, Physics (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 29 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus), Biology, Chemistry, Physics (Past experience indicates that students with a strong background in biology, chemistry and physics have an increased rate of success); minimum admission average 75%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Psychology (BA)",
    slug: "uottawa-psychology-ba",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Psychology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Social Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "uOttawa's Honours BA in Psychology studies human behaviour and mental processes, with a particular focus on how people learn, communicate and interact. It prepares students for graduate study in experimental or clinical psychology, the health sciences, education or administration. A BSc in Psychology is offered separately for students who want a more science-heavy route, and the BA can be taken with the French Immersion Stream.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-social-sciences/psychology/undergraduate/psychology-ba-programs",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Arts (BA) in Psychology",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OXM)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U); minimum admission average 75%",
      "IB Diploma: English A (SL or HL unless stated); minimum 26 points; English B students must also submit an English test",
      "High school outside Canada: English; minimum admission average 75%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Criminology",
    slug: "uottawa-criminology",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Criminology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Social Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Criminology at uOttawa analyses crime, criminalization and social control, and also treats criminology as an applied field that looks at ways to intervene in and resolve conflicts. Courses cover behaviour that breaks social norms, how norms and the idea of crime are socially constructed, the criminalization of specific behaviours, the goals and workings of the criminal justice system, and contemporary forms of intervention. A French Immersion Stream is available.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-social-sciences/criminology/undergraduate/programs",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Social Sciences (BSocSc) in Criminology",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OXD)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U); minimum admission average 75%",
      "IB Diploma: English A (SL or HL unless stated); minimum 26 points; English B students must also submit an English test",
      "High school outside Canada: English; minimum admission average 75%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Political Science",
    slug: "uottawa-political-science",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Political Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Social Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Political Science at uOttawa's School of Political Studies examines the principles and power relations that govern social life, along with the institutions, ideas, groups and movements that shape politics at local, national and international levels. Students build knowledge in four subfields: political thought, Canadian and Quebec politics, comparative politics, and international relations and global politics. Recurring themes include citizenship, identity, participation, globalization, governance, ethics and democracy. Co-op and a French Immersion Stream are available.",
    officialProgramUrl:
      "https://www.uottawa.ca/faculty-social-sciences/political-studies/undergraduate/political-science-programs",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Social Sciences (BSocSc) in Political Science",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OXL)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U); minimum admission average 75%",
      "IB Diploma: English A (SL or HL unless stated); minimum 26 points; English B students must also submit an English test",
      "High school outside Canada: English; minimum admission average 75%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Economics",
    slug: "uottawa-economics",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Economics",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 21,667.54 per term in 2026-27 (Social Sciences rate, full-time flat rate, first progress level), so about CAD 43,335.08 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 3,104.96, out-of-province CAD 3,594.37. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "Economics at uOttawa studies how individuals and societies make choices when resources are limited, looking at the production, distribution and consumption of goods and services. Two themes run through the program: efficiency and fairness. Students use them to explore questions such as why some countries are richer than others and why income inequality has grown. Co-op and a French Immersion Stream are available, and related programs include economics with public policy or international development.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bsocsc-economics/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Social Sciences (BSocSc) in Economics",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OXE)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U) (Calculus and Vectors 4U is strongly recommended); minimum admission average 75%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches or Mathematics, Applications and Interpretation (SL or HL unless stated); minimum 26 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (Students who have not completed a mathematics course that is equivalent to Calculus must take a replacement course at the University during their first year); minimum admission average 75%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Commerce: Accounting",
    slug: "uottawa-commerce-accounting",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Accounting",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 26,592.19 per term in 2026-27 (Telfer School of Management Commerce rate, full-time flat rate, first progress level), so about CAD 53,184.38 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 5,036.46, out-of-province CAD 5,179.00. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "The Telfer School of Management's Honours BCom in Accounting builds a strong base in financial and managerial accounting, auditing and taxation, and moves on to more advanced accounting topics beyond preparing financial statements. Students can take every course needed to pursue Ontario's Chartered Professional Accountant (CPA) designation, or follow a more general accounting stream. Co-op and a French Immersion Stream are available.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bachelor-commerce-accounting/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Commerce (BCom) in Accounting",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OTC)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U) (High school students who do not have Calculus and Vectors 4U (MCV4U) can take the replacement course at the University either the summer before or during their first year); minimum admission average 80%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL) (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 30 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus) (Students who have not completed a mathematics course that is equivalent to Calculus must take a replacement course at the University during their first year); minimum admission average 80%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

  {
    name: "Commerce: Finance",
    slug: "uottawa-commerce-finance",
    level: "Bachelor",
    universitySlug: "university-of-ottawa",
    universityName: "University of Ottawa",
    country: "Canada",
    field: "Finance",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 26,592.19 per term in 2026-27 (Telfer School of Management Commerce rate, full-time flat rate, first progress level), so about CAD 53,184.38 for the fall and winter terms. For international students admitted from Fall 2022 onward, uOttawa limits later tuition increases to 7% a year while they study full time and progress normally. Canadian students (2026-27, per term): Ontario residents CAD 5,036.46, out-of-province CAD 5,179.00. Ancillary and incidental fees are extra, and Fall 2027 rates are not yet published.",
    description:
      "The Finance option of Telfer's Honours BCom prepares students for careers in corporate finance or investments. It combines the theory and practice of financial management with the financial instruments that corporations issue and modern valuation techniques. Advanced courses cover derivative markets and specialized topics in corporate and international finance, and co-op and a French Immersion Stream are available.",
    officialProgramUrl:
      "https://catalogue.uottawa.ca/en/undergrad/honours-bachelor-commerce-option-finance/",
    campus: "Ottawa (main campus)",
    degree: "Honours Bachelor of Commerce (BCom), option in Finance",
    intake: "September",
    applicationDeadline: "Applications for Fall 2027 open September 17, 2026, and uOttawa recommends applying before January 15, 2027; complete documents and test results by February 15, 2027 (or within 30 days of applying). Programs can close once full: most close in May for international applicants and in June for Canadian applicants",
    admissionRequirements: [
      "Apply through the OUAC (uOttawa program code OTO)",
      "Ontario: English 4U (ENG4U) or Français 4U (FRA4U), Advanced Functions 4U (MHF4U), Calculus and Vectors 4U (MCV4U) (High school students who do not have Calculus and Vectors 4U (MCV4U) can take the replacement course at the University either the summer before or during their first year); minimum admission average 80%",
      "IB Diploma: English A, Mathematics, Analysis and Approaches (SL or HL) or Mathematics, Applications and Interpretation (HL) (SL or HL unless stated; Math Applications and Interpretation SL is not accepted); minimum 30 points; English B students must also submit an English test",
      "High school outside Canada: English, Mathematics (preferably Calculus) (Students who have not completed a mathematics course that is equivalent to Calculus must take a replacement course at the University during their first year); minimum admission average 80%",
      "Other provinces and curricula (CEGEP, A Levels, US curriculum and others) have their own prerequisite lists in uOttawa's admission requirements tool",
      "The listed admission averages and prerequisites are uOttawa's published minimums; meeting them does not guarantee admission, and competitive programs often need more",
      "English proficiency is required unless you completed at least three years of full-time study in English in a country where English is an official language (other exemptions apply). Minimums for admission without language conditions: IELTS Academic 6.5 overall with 6.5 in writing, TOEFL iBT 86 with 22 in writing (tests before January 21, 2026) or 4.5 overall with 4.5 in writing on the new scale, Duolingo 120 overall with 120 literacy, PTE Academic 60 with 60 in writing, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176, or CAEL 60 (60 in reading, speaking and listening). Lower scores may lead to conditional admission with ESL courses or the English Intensive Program",
    ],
  },

];
