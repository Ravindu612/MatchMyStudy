import type { Program } from "../../programs";

// Western University undergraduate programs (Fall 2027 entry).
// Sourced from welcome.uwo.ca program, requirements, deadline and English-proficiency pages, Western's registrar 2026-27 fee schedules, and faculty/Ivey program pages.

export const westernUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "western-computer-science",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (Honours); 3-year degree and co-op routes from 3 to 5 years",
    language: "English",
    tuitionNote:
      "International: CAD 55,167 tuition in year 1 (58,166.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Computer Science rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 8,077 tuition (10,128.46 total), out-of-province CAD 8,077 tuition (10,128.46 total); international Computer Science tuition is at this rate in years 1-3 and CAD 46,597 in year 4. The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Western's Computer Science program covers programming fundamentals, systems programming, software tools, artificial intelligence, cryptography and security, visual analytics and game design. Students can take an Honours Specialization, Specialization, Major or Minor (including minors in Game Development and Software Engineering), or combine an Honours Specialization with an Ivey HBA. The Science Co-op program offers paid placements from second year, and project options include open-source and game-development work.",
    officialProgramUrl:
      "https://welcome.uwo.ca/what-can-i-study/undergraduate-programs/computer-science.html",
    campus: "London, Ontario (Main Campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Science (BSc) in Computer Science (combined BSc + Ivey HBA available)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ECS",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, MCV4U, MHF4U and one of MDM4U, SBI4U, SCH4U, SPH4U, SES4U or ICS4U",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Math (any) and one Science, HL or SL",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: low to mid 80s (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Software Engineering",
    slug: "western-software-engineering",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Software Engineering",
    duration: "4 years (up to 5 with long co-op terms or a combined degree)",
    language: "English",
    tuitionNote:
      "International: CAD 64,310 tuition in year 1 (67,384.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Engineering rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 12,539 tuition (14,665.46 total), out-of-province CAD 15,688 tuition (17,814.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Software Engineering at Western starts with the common first year of Engineering (Foundations of Engineering Practice, Statics and other core courses) before students enter the discipline. Upper-year courses cover algorithms and data structures for object-oriented design, software requirements and analysis, human-computer interface design and information security, with a software design project. Students can add an Ivey HBA or Law combined degree, and Engineering co-op terms can be 4 months (summer) or 8 to 16 months.",
    officialProgramUrl:
      "https://www.eng.uwo.ca/future-students/programs/index.html#software",
    campus: "London, Ontario (Main Campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Engineering Science (BESc) in Software Engineering (combined with Ivey HBA or Law available)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027; last Casper test date March 2, 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EE",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, MHF4U, MCV4U, SCH4U and SPH4U",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Chemistry and Physics (HL or SL), plus Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation (HL only)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Not direct entry to the discipline: apply to Engineering (OUAC EE) and choose Software Engineering after the common first year",
      "Engineering applicants must complete the Casper test (the last test date for Fall 2027 is March 2, 2027); no offer can be made without the result",
      "Admission average guideline: high 80s to low 90s (Engineering) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "western-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "4 years (up to 5 with long co-op terms or a combined degree)",
    language: "English",
    tuitionNote:
      "International: CAD 64,310 tuition in year 1 (67,384.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Engineering rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 12,539 tuition (14,665.46 total), out-of-province CAD 15,688 tuition (17,814.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Mechanical Engineering at Western applies core engineering principles and modern design to devices, processes, materials (including smart materials), automotive and aerospace systems, conventional and alternative energy, and robotics and controls. After the common first year, courses include mechanics of materials, product design and development, kinematics and dynamics of machines, and advanced manufacturing, plus a design project. Modules can pair Mechanical Engineering with AI Systems or Biomedical Engineering, an Ivey HBA or Law, and co-op is available.",
    officialProgramUrl:
      "https://www.eng.uwo.ca/future-students/programs/index.html#mechanical",
    campus: "London, Ontario (Main Campus)",
    programType: "Regular or co-op",
    degree: "Bachelor of Engineering Science (BESc) in Mechanical Engineering (combined with Ivey HBA or Law available)",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027; last Casper test date March 2, 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EE",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, MHF4U, MCV4U, SCH4U and SPH4U",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Chemistry and Physics (HL or SL), plus Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation (HL only)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Not direct entry to the discipline: apply to Engineering (OUAC EE) and choose Mechanical Engineering after the common first year",
      "Engineering applicants must complete the Casper test (the last test date for Fall 2027 is March 2, 2027); no offer can be made without the result",
      "Admission average guideline: high 80s to low 90s (Engineering) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Medical Sciences (BMSc)",
    slug: "western-medical-sciences-bmsc",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Medical Sciences",
    duration: "4 years (Honours BMSc; Years 1-2 in Medical Sciences first entry)",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,492.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Science/Social Science/Bio-Medical Sciences rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,222.46 total), out-of-province CAD 7,719 tuition (9,770.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "The BMSc is offered jointly by Western's Faculty of Science and the Schulich School of Medicine & Dentistry and teaches the basic medical sciences at an advanced level. Students apply to Medical Sciences first entry and are assured admission to Year 3 of the BMSc if they complete Medical Sciences 1 and 2 successfully. Modules span biochemistry, epidemiology and biostatistics, medical biophysics, medical cell biology, microbiology and immunology, pathology, physiology and pharmacology, and public health, with research, capstone and Science Co-op options.",
    officialProgramUrl:
      "https://www.schulich.uwo.ca/find-your-program/undergraduate/bmsc.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Medical Sciences (BMSc), entered through Medical Sciences first entry (combined BMSc + Ivey HBA available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ESM",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, SBI4U, MCV4U and SCH4U (SPH4U recommended)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Biology, Chemistry and Math (any), HL or SL (Physics recommended)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Years 1 and 2 are Medical Sciences first entry; BMSc admission in Year 3 is assured after successful completion of Medical Sciences 1 and 2",
      "Admission average guideline: mid to high 80s (Medical Sciences) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Neuroscience (BSc)",
    slug: "western-neuroscience",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Neuroscience",
    duration: "4 years (Honours; Neuroscience module entered in Year 2)",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,492.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Science/Social Science/Bio-Medical Sciences rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,222.46 total), out-of-province CAD 7,719 tuition (9,770.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Neuroscience at Western studies how basic cellular processes produce complex behaviours such as language, music and social interaction, drawing on fields from anatomy and molecular biology to psychology and computer science. Students apply from high school to Medical Sciences (ESM) or Science (ES), take first-year biology and psychology, and then apply at the end of Year 1 for the limited-enrolment Honours Specialization in Neuroscience. The program includes a fourth-year research project, and Science Co-op is available.",
    officialProgramUrl:
      "https://www.schulich.uwo.ca/find-your-program/undergraduate/bsc-neuroscience.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Science (BSc), Honours Specialization in Neuroscience",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ESM or ES",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, SBI4U, MCV4U and SCH4U (SPH4U recommended) for Medical Sciences (ESM); ENG4U, MCV4U and two of MHF4U, SBI4U, SCH4U, ICS4U, SES4U, MDM4U or SPH4U for Science (ES)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Biology, Chemistry and Math (any), HL or SL (Physics recommended) for Medical Sciences; Math (any) and one Science, HL or SL for Science (Biology and Chemistry are needed for the first-year courses Neuroscience requires)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Not direct entry: apply to Medical Sciences (ESM) or Science (ES) and apply to the Honours Specialization in Neuroscience at the end of Year 1; it is highly competitive with about 30-35 places, and Western first-year students have priority",
      "Admission average guideline: mid to high 80s (Medical Sciences, ESM) or low to mid 80s (Science, ES) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Health Sciences (BHSc)",
    slug: "western-health-sciences",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Health Sciences",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,517.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Health Sciences/Kinesiology rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,247.46 total), out-of-province CAD 7,719 tuition (9,795.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Health Sciences is the most flexible program in Western's School of Health Studies. It covers health across the lifespan, including youth and adolescent health, aging populations, health promotion, ethics, global health, research methods and the health of marginalized populations. Students choose an Honours Specialization, Specialization, Major or Minor, or related options such as Health Sciences with Biology and Rehabilitation Sciences, and can gain experience through placements, internships and research.",
    officialProgramUrl:
      "https://www.uwo.ca/fhs/shs/undergraduate/programs/health_sci.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Health Sciences (BHSc) (combined BHSc + Ivey HBA available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EW",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, SBI4U and one of MHF4U, MCV4U or MDM4U (SCH4U needed for Health Sciences with Biology)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Biology and Math (any), HL or SL (Chemistry recommended)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: high 80s to low 90s (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Kinesiology",
    slug: "western-kinesiology",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,517.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Health Sciences/Kinesiology rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,247.46 total), out-of-province CAD 7,719 tuition (9,795.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Kinesiology at Western studies human movement across anatomy and physiology, biomechanics, exercise physiology, psychology, sociology and history, along with leadership and communication. Students choose a BA or BSc and can take Honours Specializations including Clinical Kinesiology. Courses with built-in practicums, internships and research projects prepare students for work in coaching, sport management, strength training and wellness, or for further study.",
    officialProgramUrl:
      "https://www.uwo.ca/fhs/kin/undergrad/programs/index.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BSc) in Kinesiology (combined BA and BSc, or BA + Ivey HBA, available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EP",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U and SBI4U (Grade 12 Math and Physics recommended; SCH4U, MCV4U, MHF4U and SPH4U recommended for the BSc)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Biology, HL or SL (Chemistry needed for first-year chemistry; Math and Physics recommended)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: high 80s (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Nursing (Direct Entry BScN)",
    slug: "western-nursing",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Nursing",
    duration: "3.5 years",
    language: "English",
    tuitionNote:
      "International: CAD 59,798 tuition in year 1 (62,822.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Nursing rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,247.46 total), out-of-province CAD 7,719 tuition (9,795.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Western's Direct Entry BScN is a 3.5-year program starting in September with hands-on learning every term from year one. Students train in clinical skills labs and high-fidelity simulation suites, work with simulated patients and complete varied clinical placements with a one-to-one preceptor (mentor) model. Graduates are prepared to write the Registered Nurse licensing exam; licensure in Ontario through the College of Nurses of Ontario has its own residency and immigration-status rules.",
    officialProgramUrl:
      "https://www.uwo.ca/fhs/nursing/undergrad/bscn/index.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Science in Nursing (BScN), Direct Entry 3.5-year program",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ENW",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, SBI4U and SCH4U, plus one of MCF3M, MCR3U, MHF4U, MCV4U or MDM4U (at least 70% in each; a Grade 12 U math at 70% can stand in for the Grade 11 math)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Biology, Chemistry, English and Math Analysis or Math Applications, HL or SL",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: high 80s to low 90s (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "Nursing has its own English requirement (unless English is your first language), covering both an English test and spoken English: TOEFL iBT 92-93 with 22-24 writing, 26 speaking, 20 reading and 20 listening, or for tests after January 21, 2026 5.0 overall with 5.0 speaking, 4.5 writing and listening and 4.0 reading; IELTS 7.0 with 6.5 reading and listening and 7.0 writing and speaking; or Duolingo 135 (literacy 130, no other subscore below 125)",
    ],
  },

  {
    name: "Biology",
    slug: "western-biology",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Biology",
    duration: "4 years (Honours); 3-year degree and co-op routes from 3 to 5 years",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,492.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Science/Social Science/Bio-Medical Sciences rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,222.46 total), out-of-province CAD 7,719 tuition (9,770.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Biology at Western looks at life from the cellular level up to global ecosystems, using modern analytical instruments, experimental design and data analysis. Modules include Honours Specializations in Animal Behaviour, Biodiversity and Conservation, Biology, Genetics, Genetics and Biochemistry, and Synthetic Biology, along with majors in Biology, Ecosystem Health and Genetics. Field courses can take students to places such as the Adirondacks, Costa Rica or Ecuador, and Science Co-op, independent study and honours thesis options are available.",
    officialProgramUrl:
      "https://www.uwo.ca/biology//undergraduate/future-students/index.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Science (BSc) in Biology (Honours Science + Ivey HBA combined degree available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ES",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U, MCV4U and two of MHF4U, SBI4U, SCH4U, ICS4U, SES4U, MDM4U or SPH4U (SBI4U and SCH4U are needed for first-year Biology and Chemistry, which all Biology modules require)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Math (any) and one Science, HL or SL (Biology and Chemistry are needed for first-year Biology and Chemistry)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: low to mid 80s (Science) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Psychology",
    slug: "western-psychology",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Psychology",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,492.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Science/Social Science/Bio-Medical Sciences rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,222.46 total), out-of-province CAD 7,719 tuition (9,770.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Psychology at Western uses data to explain human behaviour, from brain chemistry and learning to social influence. First-year courses include Introduction to Psychology and Data Science Concepts, and upper years cover research methods, psychological statistics, behavioural neuroscience, animal cognition, and the psychology of sport and of status and power. Students can take a BA or BSc Honours Specialization, an Honours Specialization in Developmental Cognitive Neuroscience, or a Major or Minor, with research, thesis and Social Science Co-op options.",
    officialProgramUrl:
      "https://www.psychology.uwo.ca/undergraduate/future_students/index.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BSc) in Psychology (Psychology + Ivey HBA combined degree available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EO",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U (Grade 12 U/M Math strongly recommended because all Psychology majors and specializations need first-year university math; SBI4U and SCH4U or SPH4U may be needed for BSc courses)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: no required courses; IB Math highly recommended (Biology and Chemistry or Physics for the BSc)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: low to mid 80s (Social Science) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Economics",
    slug: "western-economics",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Economics",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,492.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Science/Social Science/Bio-Medical Sciences rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,222.46 total), out-of-province CAD 7,719 tuition (9,770.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Economics at Western studies how individuals, businesses, governments and markets make choices with limited resources, and what those choices lead to. Beyond classic topics such as trade, tax policy, wages, and money and banking, courses apply economics to health care, sport, AI and automation, and social issues. Modules include Honours Specializations in Economics and Global Economics and a Major in Financial Economics, with exchanges, the undergraduate economics review, research internships and Social Science Co-op.",
    officialProgramUrl:
      "https://economics.uwo.ca/undergraduate/index.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Arts (BA) in Economics (Economics + Ivey HBA combined degree available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EO",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U (MHF4U and MCV4U are needed for all Economics modules)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: no required courses for admission; Math Applications (HL only) or Math Analysis (SL or HL) is needed for all Economics modules",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: low to mid 80s (Social Science) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Political Science",
    slug: "western-political-science",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Political Science",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 47,493 tuition in year 1 (50,492.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Science/Social Science/Bio-Medical Sciences rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 6,171 tuition (8,222.46 total), out-of-province CAD 7,719 tuition (9,770.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "Political Science at Western asks where rules and laws come from, why they change, what policies intend, and what the evidence says about their effects. Courses range from political ideas and institutions, Canadian government and comparative politics to data science methods for politics, decolonizing politics, global justice, and misinformation and conspiracy theories. Students can take Honours Specializations or Majors in Political Science or Global Justice, with community placements, a student journal, thesis work and Social Science Co-op.",
    officialProgramUrl:
      "https://politicalscience.uwo.ca/undergraduate/future_students/index.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Arts (BA) in Political Science (Political Science + Ivey HBA combined degree available)",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code EO",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U (Grade 12 U/M Math recommended)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: no required courses (IB Math recommended)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: low to mid 80s (Social Science) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Management and Organizational Studies: Accounting",
    slug: "western-mos-accounting",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Accounting",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 60,105 tuition in year 1 (63,104.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Management and Organizational Studies (MOS) rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 8,077 tuition (10,128.46 total), out-of-province CAD 8,077 tuition (10,128.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "The Accounting stream of Western's BMOS teaches students to analyse and communicate financial information in many kinds of organizations. Courses cover financial and management accounting, auditing, Canadian taxation and accounting information systems, and the program supports students heading toward the Chartered Professional Accountant (CPA) designation. Accounting is offered as an Honours Specialization, Specialization or Major, with Social Science Co-op, industry projects and exchanges available.",
    officialProgramUrl:
      "https://dan.uwo.ca/undergraduate/degree-programs/accounting.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Management and Organizational Studies (BMOS), Accounting",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ED",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U and two of MHF4U, MCV4U or MDM4U (MCV4U recommended for Finance)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Math (any), HL or SL",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: mid to high 80s (MOS) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Management and Organizational Studies: Finance",
    slug: "western-mos-finance",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Finance",
    duration: "4 years (Honours); 3-year degree options",
    language: "English",
    tuitionNote:
      "International: CAD 60,105 tuition in year 1 (63,104.46 single-payment total with ancillary fees and health plans) under Western's 2026-27 Management and Organizational Studies (MOS) rate. International tuition rises no more than 4% per year after year 1. Canadian students (2026-27): Ontario residents CAD 8,077 tuition (10,128.46 total), out-of-province CAD 8,077 tuition (10,128.46 total). The 2026-27 schedules are marked draft and Fall 2027 rates are not yet published.",
    description:
      "The Finance stream of Western's BMOS builds the analytical and quantitative skills used to judge financial decisions in organizations. It covers financial markets, investments, corporate finance and economics, with courses such as econometrics, mathematics for financial analysis, advanced finance, investment management, and REITs and mortgage-backed securities. Graduates move into banking, investment management, financial analysis and consulting; Finance is offered as an Honours Specialization, Specialization or Major, and Social Science Co-op is available.",
    officialProgramUrl:
      "https://dan.uwo.ca/undergraduate/degree-programs/finance.html",
    campus: "London, Ontario (Main Campus)",
    degree: "Bachelor of Management and Organizational Studies (BMOS), Finance",
    intake: "September",
    applicationDeadline: "January 15, 2027 (OUAC application deadline for equal consideration); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC using Western code ED",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: ENG4U and two of MHF4U, MCV4U or MDM4U (MCV4U recommended for Finance)",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: Math (any), HL or SL",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Admission average guideline: mid to high 80s (MOS) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

  {
    name: "Ivey Business Administration (HBA), via Advanced Entry Opportunity",
    slug: "western-ivey-hba",
    level: "Bachelor",
    universitySlug: "western-university",
    universityName: "Western University",
    country: "Canada",
    field: "Business Administration",
    duration: "4 years (2 years in any Western program, then 2 HBA years); 5 years for an HBA combined degree",
    language: "English",
    tuitionNote:
      "Years 1-2 are charged at the rate of the Western program you start in. For the two HBA years, Western's 2026-27 Business (HBA) rate is CAD 70,040 tuition for international students (73,214.07 single-payment total in HBA year 1), CAD 25,704 for Ontario residents (27,930.07 total) and CAD 32,159 for out-of-province Canadians (34,385.07 total). HBA course material fees are extra. The 2026-27 schedules are marked draft, and the rates for students entering in Fall 2027 (who reach HBA in 2029) are not yet published.",
    description:
      "Ivey's HBA uses a 2+2 structure: students spend their first two years in any Western program, from science to music, and complete most business courses in years three and four. Teaching is case-based, with about 300 real business cases and a focus on leadership. High school applicants seek Advanced Entry Opportunity (AEO) status, a conditional place in the HBA that they keep by meeting progression requirements over their first two years. Students can also earn a combined degree (HBA plus another Western degree) in five years.",
    officialProgramUrl:
      "https://www.ivey.uwo.ca/hba/admissions/secondary-school-students/",
    campus: "London, Ontario (Main Campus)",
    degree: "Honours Business Administration (HBA), Ivey Business School",
    intake: "September",
    applicationDeadline: "January 15, 2027, 11:59 pm ET (Ivey AEO application and OUAC equal-consideration deadline); English test results by mid-April 2027",
    admissionRequirements: [
      "Apply on the OUAC to a Western first-year program and apply separately for Ivey AEO",
      "Ontario: OSSD with at least six Grade 12 U/M courses (excluding co-op), including ENG4U; each required course needs at least 70%",
      "Ontario required courses: the requirements of the Western first-year program you choose, plus a Grade 12 university-preparation math course for Ivey AEO",
      "IB: full IB Diploma with at least 27 points (including TOK and Extended Essay), six subjects with three at HL, and no mark below 4. Program IB requirements: the requirements of the Western first-year program you choose (IB Math recommended for AEO)",
      "Applicants from other curricula (A Levels, AP, US high school and national curricula by country) are assessed against Western's curriculum- and country-specific requirements",
      "Ivey AEO is a status, not an OUAC program choice: apply on the OUAC to any Western (or Huron or King's) first-year program, indicate Ivey AEO on the OUAC form, and submit the separate Ivey AEO supplemental application (two activity essays of up to 500 words, up to five more activities, references, and a Kira Talent video interview)",
      "A competitive AEO application has a low-90s average in the best Grade 12 courses including English, a university-preparation math course, and leadership in extracurricular activities, community involvement and work (academics and leadership are weighted equally)",
      "AEO students must meet Ivey's progression requirements in Years 1 and 2 to move into the HBA",
      "Admission average guideline: low 90s (Ivey AEO, best Grade 12 courses including English) (Averages reflect Ontario high school students. Reaching the guideline does not guarantee admission)",
      "English language proficiency is required if English is not your first language (tests written from January 1, 2025 and before March 2027): IELTS Academic 6.5 (6.0 in each section), TOEFL iBT 83 (20 in each section) for tests before January 21, 2026 or 4.5 overall (4.0 in reading, speaking and writing; 4.5 in listening) for tests on or after that date, PTE Academic 58 (56 in each section), Cambridge C1 Advanced/C2 Proficiency 176 (169 in each section) or Duolingo 115 (100 in each subscore). A waiver may be possible, for example after four full-time years of secondary school in English",
    ],
  },

];
