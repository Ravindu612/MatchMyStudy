import type { Program } from "../../programs";

// University of Windsor (Windsor, Ontario) undergraduate programs for Fall 2027 entry.
// Sources: future.uwindsor.ca program pages and international application page, the Office of the Registrar's admission and English proficiency pages, the 2026/27 tuition fee schedule (Academic Policy Committee package, April 2026),
// Windsor's 2025-26 international guide and Windsor's OUAC undergraduate guide (viewed October 16, 2026). Costs are in Canadian dollars.

export const universityOfWindsorPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "windsor-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 37,500 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 9,205 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Honours Bachelor of Computer Science is very hands-on and developed with industry partners. Students learn programming languages, data structures and algorithms, algorithm design and analysis, software engineering and web information systems, and can specialise in Artificial Intelligence, Game Development, Multimedia, or Networks and Security. Co-op can be 4, 8 or 12 months long. Windsor says its computer science graduates are tied for first in Ontario for employment rates and find jobs in their field within two years.",
    officialProgramUrl:
      "https://future.uwindsor.ca/computer-science",
    campus: "Windsor main campus",
    programType: "Regular or co-op",
    degree: "Bachelor of Computer Science (Honours), optional specialisation",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70% with a 70% average in math courses (75% for co-op, plus 70% in all math courses attempted except Data Management). Windsor lists a mean entering average of 82%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Computer Science - Software Engineering Specialization",
    slug: "windsor-software-engineering-specialization",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Software Engineering",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 37,500 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 9,205 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "This Honours BSc in Computer Science with a Software Engineering Specialization focuses on creating, designing and maintaining software. It brings in methods from computer science, project management, engineering, interface design and digital asset management. Courses include object-oriented programming in Java, data structures and algorithms, software development, game design and tools, advanced web design and AI concepts. Windsor notes that the degree does not lead to a professional engineering (PEng) designation.",
    officialProgramUrl:
      "https://future.uwindsor.ca/computer-science",
    campus: "Windsor main campus",
    programType: "Regular or co-op",
    degree: "Bachelor of Science (Honours) in Computer Science, Software Engineering Specialization",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70% with a 70% average in math courses (75% for co-op, plus 70% in all math courses attempted except Data Management). Windsor lists a mean entering average of 83%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Computer Science - Applied Computing",
    slug: "windsor-applied-computing",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 37,500 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 9,205 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "The Honours BCS in Applied Computing starts with hands-on work in AI, game development, multimedia, and networks and security from the first term. Courses include programming, data structures, digital design, advanced web design, game design and AI concepts, and students meet industry leaders through networking events. Co-op is available with flexible scheduling. Career paths include software developer, game developer, systems engineer, web developer and network administrator.",
    officialProgramUrl:
      "https://future.uwindsor.ca/computer-science",
    campus: "Windsor main campus",
    programType: "Regular or co-op",
    degree: "Bachelor of Computer Science (Honours) (Applied Computing)",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70% with a 70% average in math courses (75% for co-op, plus 70% in all math courses attempted except Data Management). Windsor lists a mean entering average of 82%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Bachelor of Information Technology",
    slug: "windsor-information-technology",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Information Technology",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "Windsor's 2026/27 schedule does not list this program separately. The BIT is new and appears on the computer science admissions page, so the Computer Science rate is shown here. For the 2026-27 cohort, international tuition is CAD 37,500 at the Computer Science rate a year, and Ontario residents pay about CAD 9,205 a year. Rates for students starting in Fall 2027 have not been published yet, so confirm the billing category with the fee estimator. Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's new Honours Bachelor of Information Technology trains IT professionals in hardware basics, software development and programming, data management systems, web and mobile applications, customer service systems and networks. Courses include applied algorithms and data structures, information security, applied databases and data analytics. Windsor says graduates will be well prepared for professional IT certifications such as ITCP, AITP and ISP. Co-op is available.",
    officialProgramUrl:
      "https://future.uwindsor.ca/computer-science",
    campus: "Windsor main campus",
    programType: "Regular or co-op",
    degree: "Bachelor of Information Technology (Honours)",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: English (ENG4U) and one of Data Management (MDM4U), Advanced Functions (MHF4U) or Calculus and Vectors (MCV4U). Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70%, with at least 70% in one of the listed math courses",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Business Administration and Computer Science",
    slug: "windsor-business-administration-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Business and Computing",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "Windsor's 2026/27 schedule does not list this program separately. This combined BComm draws on both Business and Computer Science. For the 2026-27 cohort, international tuition is between CAD 37,500 (Computer Science rate) and CAD 38,620 (Business rate) a year, and Ontario residents pay about CAD 9,205-10,565 a year. Rates for students starting in Fall 2027 have not been published yet, so confirm the billing category with the fee estimator. Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "This Honours BComm combines a business degree with computer science, with an emphasis on technology in business. Courses include programming, Java, system programming, management information systems, financial accounting and business communications. Students can specialise in Accounting, Business Analytics and Supply Chain Management, Human Resources, International Business, Finance, Marketing, or Strategy and Entrepreneurship. Windsor says it can lead toward CPA, CFA or CHRP designations. Co-op and a thesis option are available.",
    officialProgramUrl:
      "https://future.uwindsor.ca/computer-science",
    campus: "Windsor main campus (Odette School of Business and School of Computer Science)",
    programType: "Regular or co-op",
    degree: "Bachelor of Commerce (Honours) Business Administration and Computer Science",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 73%, with a 70% average in all math courses and at least one Grade 12 U math course at 70% (78% for co-op). Windsor lists a mean entering average of 82%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Business Administration",
    slug: "windsor-business-administration",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Business",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 38,620 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 10,565 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "The Odette School of Business's Honours BComm gives a broad introduction to business in the first two years, through case studies, group projects, community engagement and optional co-op. In third year students choose a specialisation such as Accounting (towards the CPA), Finance (towards the CFA), Human Resources, Marketing, International Business, Business Analytics and Supply Chain Management, or Strategy and Entrepreneurship. First-year courses include marketing, HR management, financial accounting and management information systems.",
    officialProgramUrl:
      "https://future.uwindsor.ca/business-administration",
    campus: "Windsor main campus (Odette School of Business)",
    programType: "Regular or co-op; thesis option",
    degree: "Bachelor of Commerce (Honours) Business Administration",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: English (ENG4U) and one of Advanced Functions (MHF4U), Calculus and Vectors (MCV4U) or Data Management (MDM4U). Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 73%, with at least 70% in one Grade 12 U math course (78% for co-op). Windsor lists a mean entering average of 82%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "windsor-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Engineering",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 44,100 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 11,443 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Mechanical Engineering program builds a base in machine design, CAD and thermofluids, with applications in automotive, aerospace, manufacturing and materials. Students can take a General option or specialise in Automotive (vehicle handling, thermal management and powertrains), Aerospace (propulsion, aerodynamics and drones, with a chance to earn a private pilot's licence for credit), Environmental or Materials. A dedicated project courtyard and student competition teams that design, build and race vehicles give hands-on practice. The degree leads toward a PEng licence.",
    officialProgramUrl:
      "https://future.uwindsor.ca/mechanical-engineering",
    campus: "Windsor main campus (Faculty of Engineering)",
    programType: "Regular or co-op",
    degree: "Bachelor of Applied Science (Honours) in Mechanical Engineering",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U), Chemistry (SCH4U), Physics (SPH4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 74%, including a 74% average in all math and science courses (excluding Biology). Windsor lists a mean entering average of 84%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "windsor-electrical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Engineering",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 44,100 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 11,443 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Electrical Engineering program covers robotics, autonomous vehicles, smart cities, the internet and network design. Early courses include circuit analysis, digital logic design, signals and systems, and electrical and computing fundamentals. Students have many research opportunities, and Windsor notes that many hold patents on inventions developed during their studies. Careers include automation, controls, electronics, power, robotics, signal processing and telecommunications engineering. The degree leads toward a PEng licence.",
    officialProgramUrl:
      "https://future.uwindsor.ca/electrical-engineering",
    campus: "Windsor main campus (Faculty of Engineering)",
    programType: "Regular or co-op",
    degree: "Bachelor of Applied Science (Honours) in Electrical Engineering",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U), Chemistry (SCH4U), Physics (SPH4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 74%, including a 74% average in all math and science courses (excluding Biology). Windsor lists a mean entering average of 86%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Civil Engineering",
    slug: "windsor-civil-engineering",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Engineering",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 44,100 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 11,443 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's accredited Civil Engineering degree is broad and widely recognised in industry. Courses include geotechnical engineering, hydraulics, steel and concrete design, civil and environmental engineering materials, structural analysis, and transportation and traffic engineering. Co-op is available. Graduates work as structural, transportation and civil engineers, and the degree leads toward a PEng licence.",
    officialProgramUrl:
      "https://future.uwindsor.ca/civil-engineering",
    campus: "Windsor main campus (Faculty of Engineering)",
    programType: "Regular or co-op",
    degree: "Bachelor of Applied Science (Honours) in Civil Engineering",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U), Chemistry (SCH4U), Physics (SPH4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 74%, including a 74% average in all math and science courses (excluding Biology). Windsor lists a mean entering average of 85%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Industrial Engineering",
    slug: "windsor-industrial-engineering",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Engineering",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 44,100 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 11,443 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Industrial Engineering program teaches how to streamline production systems and design flexible manufacturing for efficiency and lower costs. Courses include manufacturing process design, CAD/CAM and supply chain engineering, and co-op, internships and industry projects add hands-on experience. Students can add a business minor, and the program teaches leadership and communication skills. Careers include process, quality and industrial engineering, logistics, operations and project management. The degree leads toward a PEng licence.",
    officialProgramUrl:
      "https://future.uwindsor.ca/industrial-engineering",
    campus: "Windsor main campus (Faculty of Engineering)",
    programType: "Regular or co-op",
    degree: "Bachelor of Applied Science (Honours) in Industrial Engineering",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U), Chemistry (SCH4U), Physics (SPH4U) and English (ENG4U), with Calculus and Vectors (MCV4U) strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 74%, including a 74% average in all math and science courses (excluding Biology). Windsor lists a mean entering average of 81%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Nursing",
    slug: "windsor-nursing",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Nursing",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 43,350 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Domestic tuition for Nursing is not listed as its own line in Windsor's 2026-27 schedule, so check the fee estimator. Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's BScN starts clinical practicum courses in first year, with one instructor for every eight students, in hospitals and community agencies across southwestern Ontario (the Faculty has more than 250 partners). In the final year, students work one-on-one with a preceptor. Seven experiential learning labs use simulation to connect theory with practice. Graduates write the NCLEX-RN to register with the College of Nurses of Ontario, and Windsor reports that 99% of its 2019 graduates passed by the end of their graduating year.",
    officialProgramUrl:
      "https://future.uwindsor.ca/nursing",
    campus: "Windsor main campus and clinical placements across southwestern Ontario",
    programType: "Full-time with clinical practicum",
    degree: "Bachelor of Science in Nursing (BScN)",
    workIntegrated: true,
    intake: "September only",
    applicationDeadline: "Fall 2027 (September only): Ontario high school students apply through OUAC by 15 January 2027. Applicants from outside Ontario, transfer students and Registered Practical Nurse graduates must apply by 1 March 2027 and submit a Nursing applicant profile. International applicants should apply early to allow time for the Provincial Attestation Letter and study permit",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Biology (SBI4U), Chemistry (SCH4U), English (ENG4U) and one Grade 12 math. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70% over the top six Grade 12 U/M courses, with 65% in English and 70% each in Chemistry and Biology. Windsor lists a mean entering average of 85%, which gives a realistic idea of how competitive the program is",
      "Nursing is very competitive. Windsor recommends an 85% average and at least 80% in Chemistry and Biology",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "windsor-biological-sciences",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Biology",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 36,050 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 6,091 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Honours Biological Sciences degree is flexible. Students can focus on microbiology, cellular development, environmental and evolutionary biology, or population and ecosystem ecology, or combine them. Courses include biological diversity, cell biology, ecology, evolution, genetics, human physiology and microbiology, with research training in new labs and in the field. A thesis option and combined honours are available. Graduates go on to professional schools such as medicine, pharmacy, dentistry or veterinary medicine, or work in ecology, conservation and lab science.",
    officialProgramUrl:
      "https://future.uwindsor.ca/biological-sciences",
    campus: "Windsor main campus",
    programType: "Regular; thesis option",
    degree: "Bachelor of Science (Honours) in Biological Sciences",
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U), Chemistry (SCH4U), Biology (SBI4U) and English (ENG4U), with Physics and Calculus and Vectors recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70%, with a 70% average in all science and math courses attempted (excluding Data Management). Windsor lists a mean entering average of 86%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Forensic Science",
    slug: "windsor-forensic-science",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Forensic Science",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 36,050 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 6,091 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Honours Bachelor of Forensic Science trains students to investigate and analyse evidence from crimes ranging from homicide and abuse to fraud and hacking. Students use biometric, laser, fingerprint and security-document scanners, work through mock crime scenes and labs, and learn from academics, police officers, lawyers and expert witnesses. Courses include crime scene investigation, forensic identification, analytical chemistry, expert witness testimony and cyber ethics. Specialisations are Life Sciences, Biology, Chemistry and Information Technology.",
    officialProgramUrl:
      "https://future.uwindsor.ca/forensic-science",
    campus: "Windsor main campus",
    programType: "Regular",
    degree: "Bachelor of Forensic Science (Honours)",
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: Advanced Functions (MHF4U), Chemistry (SCH4U), Biology (SBI4U) and English (ENG4U), with Physics strongly recommended. Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70%, with a 70% average in the required science and math courses. Windsor lists a mean entering average of 85%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Psychology",
    slug: "windsor-psychology",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Psychology",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "Windsor's 2026/27 schedule does not list this program separately. Psychology is in the Faculty of Arts, Humanities and Social Sciences, which is normally billed at the 'Other' rate. For the 2026-27 cohort, international tuition is CAD 33,000 (the 'Other' rate) a year, and Ontario residents pay about CAD 5,916 a year. Rates for students starting in Fall 2027 have not been published yet, so confirm the billing category with the fee estimator. Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "Windsor's Psychology program studies why people think and act as they do. You can major in psychology alone or take combined honours with another subject. First-year majors take a small-group introductory course led by mentors. Courses include child development, social, clinical and health psychology, and human cognitive neuroscience, and students can do research and community placements or join co-op. The Honours with thesis route prepares students for graduate study in psychology.",
    officialProgramUrl:
      "https://future.uwindsor.ca/psychology",
    campus: "Windsor main campus",
    programType: "Regular or co-op; thesis option",
    degree: "Bachelor of Arts (Honours) in Psychology (3-year general degree also offered)",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: English (ENG4U). Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70% (80% for co-op, with at least 70% in English). Windsor lists a mean entering average of 79%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },

  {
    name: "Kinesiology - Health Studies",
    slug: "windsor-kinesiology-health-studies",
    level: "Bachelor",
    universitySlug: "university-of-windsor",
    universityName: "University of Windsor",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: CAD 36,050 a year in tuition for students starting in the 2026-27 cohort (Spring/Summer 2026, Fall 2026 or Winter 2027), from Windsor's 2026/27 fee schedule (two semesters). International tuition is set by entry cohort and stays flat for that cohort, but rates for students starting in Fall 2027 have not been published yet. Ontario residents pay about CAD 6,091 a year (2026-27, first year; domestic rates rose 2% for 2026-27). Since the 2025-26 cohort, international kinesiology students pay the Science rate because the degree became a BSc. Windsor's international guide estimates about CAD 3,900 in incidental fees, CAD 3,000 for textbooks, CAD 8,938-11,500 for living costs and CAD 7,025-7,325 for a meal plan over the eight-month year. Out-of-province Canadian students pay a separate, higher domestic rate. The fee estimator at uwindsor.ca/tuition gives exact per-term amounts",
    description:
      "The Faculty of Human Kinetics's Kinesiology - Health Studies program focuses on the human side of movement science and active living. Courses include biomechanics, exercise physiology, anatomy, human growth and development, ergonomics, sport psychology, and health and wellness. Students get hands-on experience through co-op (apply in first year), internships, community outreach and research in the faculty's labs. Graduates go on to become registered kinesiologists or ergonomists, or continue to professional programs such as medicine or physiotherapy. Windsor reports that 98% of graduates are employed within six months.",
    officialProgramUrl:
      "https://future.uwindsor.ca/kinesiology",
    campus: "Windsor main campus (Faculty of Human Kinetics)",
    programType: "Regular or co-op; thesis option",
    degree: "Bachelor of Science (Kinesiology and Health Sciences), Health Studies stream (Honours)",
    workIntegrated: true,
    intake: "September, January, May (most programs)",
    applicationDeadline: "Fall 2027 (September): Windsor accepts applications from October 2026 to 1 August 2027. Ontario high school students should apply through OUAC by the 15 January 2027 equal-consideration date. Windsor recommends that international (visa) and transfer students apply by 1 May 2027 so there is time for the Provincial Attestation Letter and study permit, and the overall recommended fall deadline is 1 July 2027. Qualified students are still admitted after these dates while space remains. Winter (January, recommended by 1 November 2026) and spring (May, by 1 March 2027) entry are possible for most programs",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for Ontario high school students, 105 for others). International applicants living outside Canada and the US who are only applying to Windsor in Ontario can use Windsor's direct international application or an authorised agent",
      "Ontario prerequisites: English (ENG4U), one of Biology (SBI4U), Chemistry (SCH4U) or Physics (SPH4U), and (from 2026) one of Calculus and Vectors (MCV4U) or Advanced Functions (MHF4U). Applicants from outside Canada need the equivalent of the OSSD with six Grade 12 academic courses, and their grades are converted to Ontario equivalents. The SAT is not required for US applicants",
      "Minimum admission average: 70%, with 70% in English and in the chosen science. Windsor lists a mean entering average of 83%, which gives a realistic idea of how competitive the program is",
      "English proficiency (if English is not your first language and you are not exempt): IELTS Academic or IELTS Online 6.5 (one-band retakes accepted); TOEFL iBT 83 with 20 in writing (Home Edition accepted); Duolingo 115; PTE Academic 60; CAEL 60; Cambridge C1 Advanced or C2 Proficiency 176; or Level III of Windsor's English Language Improvement Program (ELIP) with 75%. Three years of full-time study in an English-taught curriculum may exempt you",
      "You do not need to meet the English requirement when you apply. Windsor gives conditional offers to students who will meet it through ELIP or a test before their program starts",
    ],
  },
];

