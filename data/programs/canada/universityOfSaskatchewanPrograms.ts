import type { Program } from "../../programs";

// University of Saskatchewan (Saskatoon, Saskatchewan) undergraduate programs for Fall 2027 entry.
// Sources: admissions.usask.ca program pages (2026-27 tuition estimates and 2027 deadlines), the English language proficiency page, the College of Engineering applying page
// and the USask Fall 2027 undergraduate viewbook (viewed October 16, 2026). Costs are in Canadian dollars.

export const universityOfSaskatchewanPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "usask-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Computer Science",
    duration: "3 or 4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,449 for Canadian students and CAD 40,894 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 11,281 for Canadian students and CAD 43,726 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Computer science at USask covers the theory, design and building of software systems, with applications from artificial intelligence and human-computer interaction to computational modelling and graphics. Students can focus on areas such as algorithms, AI, cybersecurity, game development, information visualization, software development or web development. The Computer Science Professional Internship Program offers 12 or 16 months of paid work before the final year. Students begin in a general BSc and compete for the major after first year based on their marks in set computer science and math courses.",
    officialProgramUrl:
      "https://admissions.usask.ca/computer-science.php",
    campus: "Saskatoon or Prince Albert campus",
    programType: "Full- or part-time; optional internship",
    degree: "Bachelor of Science (3-year, 4-year or Honours)",
    workIntegrated: true,
    intake: "September, January, May, July",
    applicationDeadline: "Fall 2027 (September): Canadian applicants apply by 15 July 2027 (documents by 1 August 2027); international applicants apply by 1 May 2027 (documents by 1 June 2027). The College of Arts and Science also admits students for January, May and July terms; for January 2027 the international deadline is 1 September 2026",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Admission is to the College of Arts and Science. Required Grade 12 course: Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be planned for with the college)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook). The average is calculated from the required and other approved Grade 12 subjects on your transcript",
      "Entry to the Computer Science major is competitive at the end of first year, ranked on the average in CMPT 141/142, CMPT 145/146 and MATH 163/164. Seats vary each year",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Applied Computing",
    slug: "usask-applied-computing",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,449 for Canadian students and CAD 40,894 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 11,281 for Canadian students and CAD 43,726 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "The BSc in Applied Computing pairs computer science with an application area, so graduates understand both the software and the field it serves. Concentrations include bioinformatics, which uses computing to study DNA and biological data, and software engineering with business courses from the Edwards School of Business covering business practice, marketing and software project management. Students begin in a general BSc and compete for the major after first year.",
    officialProgramUrl:
      "https://admissions.usask.ca/applied-computing.php",
    campus: "Saskatoon or Prince Albert campus",
    programType: "Full- or part-time",
    degree: "Bachelor of Science in Applied Computing (4-year or Honours)",
    intake: "September, January, May, July",
    applicationDeadline: "Fall 2027 (September): Canadian applicants apply by 15 July 2027 (documents by 1 August 2027); international applicants apply by 1 May 2027 (documents by 1 June 2027). The College of Arts and Science also admits students for January, May and July terms; for January 2027 the international deadline is 1 September 2026",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Admission is to the College of Arts and Science. Required Grade 12 course: Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be planned for with the college)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook). The average is calculated from the required and other approved Grade 12 subjects on your transcript",
      "Entry to the Applied Computing major is competitive at the end of first year, ranked on the average in the required first-year computer science and math courses",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "usask-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 12,269 for Canadian students and CAD 59,383 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 15,101 for Canadian students and CAD 62,215 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Mechanical engineers look at how things move and work, and design products ranging from large engines and turbines to tiny medical devices. USask's program builds on the shared first year with courses in mechanics, thermodynamics, fluids and machine design. All engineering students start with the RE-ENGINEERED common first year of short modular courses taken with a study group, then choose their major part-way through the year. The optional Engineering Co-op Internship Program offers up to 20 months of paid work, and USask's eight engineering majors are accredited by Engineers Canada.",
    officialProgramUrl:
      "https://admissions.usask.ca/mechanical-engineering.php",
    campus: "Saskatoon campus",
    programType: "Full-time; optional co-op internship",
    degree: "Bachelor of Science in Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September) only: apply by 1 December 2026 for early admission (documents also due 1 December). International applicants must apply by 1 December 2026; the regular deadline for Canadian applicants is 15 February 2027 (documents by 1 March 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Chemistry, Physics and Pre-Calculus Mathematics, each with at least 70%",
      "Admission is competitive and ranked by admission average. Early admission (apply and send documents by 1 December 2026) is offered to applicants averaging 89% or more. USask's Fall 2027 viewbook says the expected target average, based on 2026-27 admissions, is 87%",
      "All students enter the common RE-ENGINEERED first year and choose their major part-way through first year through a competitive process",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Civil Engineering",
    slug: "usask-civil-engineering",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 12,269 for Canadian students and CAD 59,383 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 15,101 for Canadian students and CAD 62,215 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Civil engineers plan and build roads, buildings, bridges, tunnels, airports, transit and water systems. Students can go on to specialise in areas such as structures, foundations and geotechnics, surveying or municipal planning. All engineering students start with the RE-ENGINEERED common first year of short modular courses taken with a study group, then choose their major part-way through the year. The optional Engineering Co-op Internship Program offers up to 20 months of paid work, and USask's eight engineering majors are accredited by Engineers Canada.",
    officialProgramUrl:
      "https://admissions.usask.ca/civil-engineering.php",
    campus: "Saskatoon campus",
    programType: "Full-time; optional co-op internship",
    degree: "Bachelor of Science in Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September) only: apply by 1 December 2026 for early admission (documents also due 1 December). International applicants must apply by 1 December 2026; the regular deadline for Canadian applicants is 15 February 2027 (documents by 1 March 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Chemistry, Physics and Pre-Calculus Mathematics, each with at least 70%",
      "Admission is competitive and ranked by admission average. Early admission (apply and send documents by 1 December 2026) is offered to applicants averaging 89% or more. USask's Fall 2027 viewbook says the expected target average, based on 2026-27 admissions, is 87%",
      "All students enter the common RE-ENGINEERED first year and choose their major part-way through first year through a competitive process",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "usask-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 12,269 for Canadian students and CAD 59,383 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 15,101 for Canadian students and CAD 62,215 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Computer engineering at USask focuses on designing and improving the computer hardware and connected technologies used in everyday life, bridging electrical engineering and computing. All engineering students start with the RE-ENGINEERED common first year of short modular courses taken with a study group, then choose their major part-way through the year. The optional Engineering Co-op Internship Program offers up to 20 months of paid work, and USask's eight engineering majors are accredited by Engineers Canada.",
    officialProgramUrl:
      "https://admissions.usask.ca/computer-engineering.php",
    campus: "Saskatoon campus",
    programType: "Full-time; optional co-op internship",
    degree: "Bachelor of Science in Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September) only: apply by 1 December 2026 for early admission (documents also due 1 December). International applicants must apply by 1 December 2026; the regular deadline for Canadian applicants is 15 February 2027 (documents by 1 March 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Chemistry, Physics and Pre-Calculus Mathematics, each with at least 70%",
      "Admission is competitive and ranked by admission average. Early admission (apply and send documents by 1 December 2026) is offered to applicants averaging 89% or more. USask's Fall 2027 viewbook says the expected target average, based on 2026-27 admissions, is 87%",
      "All students enter the common RE-ENGINEERED first year and choose their major part-way through first year through a competitive process",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "usask-electrical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 12,269 for Canadian students and CAD 59,383 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 15,101 for Canadian students and CAD 62,215 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Electrical engineers design and run power systems, communications networks and electronic products. The program covers the electrical and electronic equipment and systems behind modern technology. All engineering students start with the RE-ENGINEERED common first year of short modular courses taken with a study group, then choose their major part-way through the year. The optional Engineering Co-op Internship Program offers up to 20 months of paid work, and USask's eight engineering majors are accredited by Engineers Canada.",
    officialProgramUrl:
      "https://admissions.usask.ca/electrical-engineering.php",
    campus: "Saskatoon campus",
    programType: "Full-time; optional co-op internship",
    degree: "Bachelor of Science in Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September) only: apply by 1 December 2026 for early admission (documents also due 1 December). International applicants must apply by 1 December 2026; the regular deadline for Canadian applicants is 15 February 2027 (documents by 1 March 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Chemistry, Physics and Pre-Calculus Mathematics, each with at least 70%",
      "Admission is competitive and ranked by admission average. Early admission (apply and send documents by 1 December 2026) is offered to applicants averaging 89% or more. USask's Fall 2027 viewbook says the expected target average, based on 2026-27 admissions, is 87%",
      "All students enter the common RE-ENGINEERED first year and choose their major part-way through first year through a competitive process",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Chemical Engineering",
    slug: "usask-chemical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 12,269 for Canadian students and CAD 59,383 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 15,101 for Canadian students and CAD 62,215 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Chemical (process) engineers apply chemistry to solve practical problems and make useful products. Students learn to research, design and develop chemical processes and equipment while reducing environmental impact. All engineering students start with the RE-ENGINEERED common first year of short modular courses taken with a study group, then choose their major part-way through the year. The optional Engineering Co-op Internship Program offers up to 20 months of paid work, and USask's eight engineering majors are accredited by Engineers Canada.",
    officialProgramUrl:
      "https://admissions.usask.ca/chemical-engineering.php",
    campus: "Saskatoon campus",
    programType: "Full-time; optional co-op internship",
    degree: "Bachelor of Science in Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September) only: apply by 1 December 2026 for early admission (documents also due 1 December). International applicants must apply by 1 December 2026; the regular deadline for Canadian applicants is 15 February 2027 (documents by 1 March 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Chemistry, Physics and Pre-Calculus Mathematics, each with at least 70%",
      "Admission is competitive and ranked by admission average. Early admission (apply and send documents by 1 December 2026) is offered to applicants averaging 89% or more. USask's Fall 2027 viewbook says the expected target average, based on 2026-27 admissions, is 87%",
      "All students enter the common RE-ENGINEERED first year and choose their major part-way through first year through a competitive process",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Finance",
    slug: "usask-finance",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Business",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 10,110 for Canadian students and CAD 48,932 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 12,942 for Canadian students and CAD 51,764 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Finance at the Edwards School of Business is about managing money: saving, lending and investing, and how time, money and risk relate to each other. The first two years of the Bachelor of Commerce build a base in core business subjects, and students choose the finance major in second year. Options include study abroad, an international business minor, the Edwards co-op option with 8 months of paid work, and a combined BComm/JD. Edwards is accredited by AACSB.",
    officialProgramUrl:
      "https://admissions.usask.ca/finance.php",
    campus: "Saskatoon or Prince Albert campus",
    programType: "Full-time; optional co-op",
    degree: "Bachelor of Commerce (Finance major)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September): Canadian and international applicants apply by 1 May 2027 (documents by 1 June 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be cleared before second year)",
      "Minimum admission average: 80% (USask's Fall 2027 viewbook)",
      "Students start in the Edwards Bachelor of Commerce and pick a major part-way through second year",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Accounting",
    slug: "usask-accounting",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Business",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 10,110 for Canadian students and CAD 48,932 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 12,942 for Canadian students and CAD 51,764 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Accounting, often called the language of business, is about measuring, reporting and interpreting an organisation's financial activity. At the Edwards School of Business, students take core business courses in the first two years of the Bachelor of Commerce before choosing the accounting major. Options include study abroad, the Edwards co-op option with 8 months of paid work, and a combined BComm/JD. Edwards is accredited by AACSB.",
    officialProgramUrl:
      "https://admissions.usask.ca/accounting.php",
    campus: "Saskatoon or Prince Albert campus",
    programType: "Full-time; optional co-op",
    degree: "Bachelor of Commerce (Accounting major)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 (September): Canadian and international applicants apply by 1 May 2027 (documents by 1 June 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be cleared before second year)",
      "Minimum admission average: 80% (USask's Fall 2027 viewbook)",
      "Students start in the Edwards Bachelor of Commerce and pick a major part-way through second year",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Agribusiness",
    slug: "usask-agribusiness",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Agriculture and Business",
    duration: "4 years (2-year diploma also offered)",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,670 for Canadian students and CAD 41,964 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 11,502 for Canadian students and CAD 44,796 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Agribusiness covers the business side of the food chain, from farming to processing and marketing. The College of Agriculture and Bioresources program teaches business management, economics, marketing, finance and sales, along with the laws and institutions that shape the agri-food sector. Upper-year courses include grain and livestock marketing, agribusiness marketing management and a business-plan venture project.",
    officialProgramUrl:
      "https://admissions.usask.ca/agribusiness.php",
    campus: "Saskatoon or Prince Albert campus, off-campus or online",
    programType: "Full- or part-time",
    degree: "Bachelor of Science in Agribusiness",
    intake: "September",
    applicationDeadline: "Fall 2027 (September): Canadian and international applicants apply by 1 May 2027 (documents by 1 June 2027)",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Grade 12 Mathematics and one of Biology, Chemistry or Physics (one subject deficiency may be allowed if it is cleared before second year)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook)",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Nursing",
    slug: "usask-nursing",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Nursing",
    duration: "4 years (1 pre-professional year + 3 years of nursing)",
    language: "English",
    tuitionNote:
      "Estimated tuition for 2026-27 in the nursing years (CAD): 9,980 for Canadian students and 48,305 for international students. Including student fees and books, USask estimates about CAD 12,964 for Canadian students and CAD 51,289 for international students. The pre-professional first year is taken in Arts and Science and charged at its rates. Rates for 2027-28 have not been published yet.",
    description:
      "USask's Bachelor of Science in Nursing prepares students to become registered nurses. Students complete 30 credit units of pre-professional courses (usually in first year in the College of Arts and Science, using the Nursing Prep pathway) and then apply to the College of Nursing for years 2 to 4. Full-time students finish the nursing years in three academic years. Nursing can be studied in Saskatoon, Prince Albert or at several sites across Saskatchewan, including Île-à-la-Crosse, La Ronge, Lloydminster, Muenster, North Battleford, Swift Current, Weyburn and Yorkton.",
    officialProgramUrl:
      "https://admissions.usask.ca/nursing.php",
    campus: "Saskatoon, Prince Albert and distributed sites across Saskatchewan",
    programType: "Full-time (part-time possible)",
    degree: "Bachelor of Science in Nursing",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "College of Nursing entry for Fall 2027: early admission application by 15 December 2026 (documents by 15 January 2027); regular admission by 30 April 2027 (documents by 1 June 2027). For the first pre-professional year, apply to Arts and Science by its own deadlines",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "First, complete the 10 required pre-professional courses (30 credit units) by 30 April of the admission year",
      "Entry to years 2-4 is competitive. Applicants are ranked on their average in the pre-professional courses and need at least 60% to be considered, and seats depend on clinical placement capacity at each site",
      "Early admission needs at least 5 of the 10 pre-professional courses finished by December; 150 early admission seats are available",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Biology",
    slug: "usask-biology",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Life Sciences",
    duration: "3 or 4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,449 for Canadian students and CAD 40,894 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 11,281 for Canadian students and CAD 43,726 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Biology at USask studies living things and how they interact with each other and their environment. With climate change, habitat loss and genome discoveries in the news, the program prepares students for work and further study across the life sciences. Students can enter directly from high school and choose a three-year, four-year or honours degree.",
    officialProgramUrl:
      "https://admissions.usask.ca/biology.php",
    campus: "Saskatoon campus",
    programType: "Full- or part-time",
    degree: "Bachelor of Science (3-year, 4-year or Honours)",
    intake: "September, January, May, July",
    applicationDeadline: "Fall 2027 (September): Canadian applicants apply by 15 July 2027 (documents by 1 August 2027); international applicants apply by 1 May 2027 (documents by 1 June 2027). The College of Arts and Science also admits students for January, May and July terms; for January 2027 the international deadline is 1 September 2026",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Admission is to the College of Arts and Science. Required Grade 12 course: Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be planned for with the college)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook). The average is calculated from the required and other approved Grade 12 subjects on your transcript",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Psychology",
    slug: "usask-psychology",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Psychology",
    duration: "3 or 4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,449 for Canadian students and CAD 40,894 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 11,281 for Canadian students and CAD 43,726 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Psychology studies behaviour and mental processes and how they relate to physical health, mental state and surroundings. USask offers psychology as a BA or BSc in the College of Arts and Science, with three-year, four-year and honours routes, and students can enter directly from high school.",
    officialProgramUrl:
      "https://admissions.usask.ca/psychology.php",
    campus: "Saskatoon campus",
    programType: "Full- or part-time",
    degree: "Bachelor of Arts or Bachelor of Science (3-year, 4-year or Honours)",
    intake: "September, January, May, July",
    applicationDeadline: "Fall 2027 (September): Canadian applicants apply by 15 July 2027 (documents by 1 August 2027); international applicants apply by 1 May 2027 (documents by 1 June 2027). The College of Arts and Science also admits students for January, May and July terms; for January 2027 the international deadline is 1 September 2026",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Admission is to the College of Arts and Science. Required Grade 12 course: Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be planned for with the college)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook). The average is calculated from the required and other approved Grade 12 subjects on your transcript",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Health Studies",
    slug: "usask-health-studies",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Health Sciences",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,449 for Canadian students and CAD 40,894 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 11,281 for Canadian students and CAD 43,726 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Health Studies looks at health and wellness, including mental health, from biological, psychological, cultural, social and environmental points of view. Students learn how factors like genetics, personality and community shape healthy development over a lifetime, with courses such as problem-based health theory and basic human anatomy.",
    officialProgramUrl:
      "https://admissions.usask.ca/health-studies.php",
    campus: "Saskatoon campus",
    programType: "Full- or part-time",
    degree: "Bachelor of Arts and Science in Health Studies (4-year or Honours)",
    intake: "September, January, May, July",
    applicationDeadline: "Fall 2027 (September): Canadian applicants apply by 15 July 2027 (documents by 1 August 2027); international applicants apply by 1 May 2027 (documents by 1 June 2027). The College of Arts and Science also admits students for January, May and July terms; for January 2027 the international deadline is 1 September 2026",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Admission is to the College of Arts and Science. Required Grade 12 course: Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be planned for with the college)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook). The average is calculated from the required and other approved Grade 12 subjects on your transcript",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },

  {
    name: "Economics",
    slug: "usask-economics",
    level: "Bachelor",
    universitySlug: "university-of-saskatchewan",
    universityName: "University of Saskatchewan",
    country: "Canada",
    field: "Economics",
    duration: "3 or 4 years",
    language: "English",
    tuitionNote:
      "Estimated first-year tuition for 2026-27 (full course load, CAD): CAD 8,059 for Canadian students and CAD 39,007 for international students. USask adds about CAD 1,331.66 in student fees (health, vision and dental cover, a bus pass and recreation access) and suggests budgeting CAD 1,500-2,500 for books, so its own first-year estimate is about CAD 10,891 for Canadian students and CAD 41,839 for international students. Actual tuition depends on the courses taken, and rates for 2027-28 have not been published yet.",
    description:
      "Economics is the study of how wealth is produced and distributed. USask's program gives students the tools to analyse society's pressing problems in economic terms, covering economic theory, public policy, labour and regional development, and the quantitative and historical sides of economics. Upper-year courses include wage determination and money, banking and capital markets.",
    officialProgramUrl:
      "https://admissions.usask.ca/economics.php",
    campus: "Saskatoon campus",
    programType: "Full- or part-time",
    degree: "Bachelor of Arts in Economics (3-year, 4-year or Honours)",
    intake: "September, January, May, July",
    applicationDeadline: "Fall 2027 (September): Canadian applicants apply by 15 July 2027 (documents by 1 August 2027); international applicants apply by 1 May 2027 (documents by 1 June 2027). The College of Arts and Science also admits students for January, May and July terms; for January 2027 the international deadline is 1 September 2026",
    admissionRequirements: [
      "Apply online at apply.usask.ca. The non-refundable application fee is CAD 120",
      "Admission is to the College of Arts and Science. Required Grade 12 course: Grade 12 Mathematics (applicants can be admitted with a mathematics deficiency, which must be planned for with the college)",
      "Minimum admission average: 70% (USask's Fall 2027 viewbook). The average is calculated from the required and other approved Grade 12 subjects on your transcript",
      "English proficiency (if required): IELTS Academic 6.5 with at least 6 in each band; TOEFL iBT 4.5 on the new 1-6 scale (older 0-120 scores of 86 with 19 per section are accepted for two years); Duolingo 120 with 100 in each subscore; PTE Academic 63 with 59 in each skill; or CAEL 70 with 60 in each section. Applicants with enough full-time study in an English-medium secondary school, including Grade 12 English at 70-80%, may be exempt",
    ],
  },
];

