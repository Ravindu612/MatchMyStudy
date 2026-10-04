import type { Program } from "../../programs";

// Simon Fraser University undergraduate programs (Fall 2027 entry).
// Sourced from SFU Undergraduate Admission program and requirement pages, the IB requirements, historical grade ranges, English language requirement and Fall 2027 dates pages, the 2026 SFU Calendar (tuition fees and programs), and Faculty of Applied Sciences program pages.

export const simonFraserUniversityPrograms: Program[] = [
  {
    name: "Computing Science",
    slug: "sfu-computing-science",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. From second year, School of Computing Science courses at the 200-400 level are charged a higher premium rate (international CAD 1,327.97 per unit, domestic CAD 231.64). Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Computing Science at SFU's School of Computing Science covers problems from networks and artificial intelligence to complexity theory. The program is very flexible: it can be taken as a BSc or a BA, and is also offered as a minor and in joint programs such as Computing Science and Linguistics, with a focus on practical skills for a fast-growing job market.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/c/computing-science.html",
    campus: "Burnaby",
    degree: "Bachelor of Science (BSc) or Bachelor of Arts (BA) in Computing Science",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum (Fall 2026 onward rules): English Studies 12 or English First Peoples 12; one of Anatomy and Physiology 12, Chemistry 12 or Physics 12; one of Pre-Calculus 12 or Calculus 12; plus other approved Grade 12 courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), and one of Biology, Chemistry or Physics (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: high 80s to low 90s; students on a study permit: high 80s to low 90s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Software Systems",
    slug: "sfu-software-systems",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Software Engineering",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. From second year, School of Computing Science courses at the 200-400 level are charged a higher premium rate (international CAD 1,327.97 per unit, domestic CAD 231.64). Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Software Systems is a School of Computing Science BSc taught at SFU's Surrey campus and focused on building professional software. Students learn the whole development life cycle, from requirements and design to testing, reliability and security, take courses in operating systems, databases and networking, and finish with a team capstone project. Co-op is strongly encouraged, and students are advised to talk to a co-op advisor in first year.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/s/software-systems.html",
    campus: "Surrey",
    degree: "Bachelor of Science (BSc) in Software Systems",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum (Fall 2026 onward rules): English Studies 12 or English First Peoples 12; one of Anatomy and Physiology 12, Chemistry 12 or Physics 12; one of Pre-Calculus 12 or Calculus 12; plus other approved Grade 12 courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), and one of Biology, Chemistry or Physics (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: high 80s to low 90s; students on a study permit: high 80s to low 90s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Computer Engineering (Engineering Science)",
    slug: "sfu-computer-engineering",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Computer Engineering",
    duration: "4 years of study plus a mandatory year of paid co-op (three work terms)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. From second year, Engineering Science or Mechatronic Systems Engineering courses at the 200-400 level are charged a higher premium rate (international CAD 1,348.19 per unit, domestic CAD 242.67). Each co-op work term is charged CAD 932.08. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Computer Engineering is one of five options in SFU's accredited Engineering Science BASc and combines hardware and software design. All students share a common core in computing, electronics, mechanics and engineering analysis in years 1 and 2, then specialize in years 3 and 4, moving from digital electronics and computer architecture to operating systems, embedded and real-time systems, intelligent systems and VLSI. The degree ends with a two-term capstone, and three paid co-op work terms are mandatory.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/c/computer-engineering.html",
    campus: "Burnaby",
    programType: "Co-op (mandatory)",
    degree: "Bachelor of Applied Science (BASc) in Engineering Science, Computer Engineering option",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12; Chemistry 12; Physics 12; one of Pre-Calculus 12 or Calculus 12; plus other approved Grade 12 courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), Chemistry (HL or SL) and Physics (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: mid 80s",
      "All Engineering Science students are enrolled in co-op automatically and must complete at least three co-op work terms before graduating",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Mechatronic Systems Engineering",
    slug: "sfu-mechatronic-systems-engineering",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Mechatronics Engineering",
    duration: "4 years of study plus a mandatory year of paid co-op (three work terms)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. From second year, Engineering Science or Mechatronic Systems Engineering courses at the 200-400 level are charged a higher premium rate (international CAD 1,348.19 per unit, domestic CAD 242.67). Each co-op work term is charged CAD 932.08. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Mechatronic Systems Engineering at SFU Surrey combines mechanical, electrical, control and software engineering to build smart systems that link the physical and digital worlds. Students are admitted directly into the major, work in hands-on labs from first year in small classes, and finish with a two-term capstone project. A year of paid co-op is required, students can follow a four-year or a lighter five-year schedule, and there is an AgriTech concentration.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/m/mechatronic-systemseng/overview.html",
    campus: "Surrey",
    programType: "Co-op (mandatory)",
    degree: "Bachelor of Applied Science (BASc) in Mechatronic Systems Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12; Chemistry 12; Physics 12; one of Pre-Calculus 12 or Calculus 12; plus other approved Grade 12 courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), Chemistry (HL or SL) and Physics (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: mid 80s",
      "Co-op is mandatory: the program includes a year of paid co-op work experience",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Data Science",
    slug: "sfu-data-science",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Data Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Data Science at SFU is an interdisciplinary Faculty of Science program run through the Department of Statistics and Actuarial Science. Students combine courses in statistics, computing science, mathematics and business to learn analytical and computational methods for real problems in business and industry, with the aim of making evidence-based decisions from data. First year can be taken at the Surrey campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/d/data-science.html",
    campus: "Burnaby (first year also offered at Surrey)",
    degree: "Bachelor of Science (BSc) in Data Science",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: in Grade 11, two of Chemistry 11, Life Sciences 11 or Physics 11; in Grade 12, English Studies 12 or English First Peoples 12, Pre-Calculus 12, and at least two of Anatomy and Physiology 12, Calculus 12, Chemistry 12 or Physics 12, plus other approved courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), and two of Biology, Chemistry, Physics or Geography (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: high 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Business Administration (BBA)",
    slug: "sfu-business-administration",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Business",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. From second year, Beedie School of Business courses at the 200-400 level are charged a higher premium rate (international CAD 1,492.13 per unit, domestic CAD 294.15). Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "The Beedie School of Business BBA mixes core business principles with experiential learning through real-world class projects. After admission, students choose at least one of nine concentrations: Accounting, Finance, Marketing, International Business, Human Resource Management, Management Information Systems, Operations Management, Innovation and Entrepreneurship, or Strategic Analysis. Some accounting courses can count toward the CPA designation, and several concentrations are offered only at the Burnaby campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/b/business.html",
    campus: "Burnaby",
    degree: "Bachelor of Business Administration (BBA)",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12 and Pre-Calculus 12, plus other approved Grade 12 courses to reach at least five. All high school applicants also submit a supplemental application. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: all high school applicants: minimum grades in the 80s plus the supplemental application",
      "Beedie applicants must complete every item on their applicant To-Do List, including the supplemental application, by February 7, 2027",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Health Sciences (BSc)",
    slug: "sfu-health-sciences-bsc",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Health Sciences",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "SFU's Health Sciences BSc looks at health and disease through the natural sciences, building on biology, chemistry, molecular biology and statistics. Students study the cellular, molecular and behavioural mechanisms behind population health and chronic and infectious disease, with advanced training in pharmacology, toxicology, pathophysiology and epidemiology. Themes include global health, environmental and occupational health, mental health and addictions, and health policy.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/h/health-science-bsc/overview.html",
    campus: "Burnaby (first year also offered at Surrey)",
    degree: "Bachelor of Science (BSc) in Health Sciences",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12; Anatomy and Physiology 12; Chemistry 12; one of Pre-Calculus 12 or Calculus 12; plus other approved Grade 12 courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count) is the only extra course SFU's IB page lists for the Health Sciences BSc. IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: high 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Biomedical Physiology",
    slug: "sfu-biomedical-physiology",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Physiology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Biomedical Physiology is one of SFU's newer programs, offered by the Department of Biomedical Physiology and Kinesiology. It gives a strong grounding in how the human body works and is designed for students heading toward medicine, dentistry, veterinary medicine or therapy professions, or toward research and lab careers. Students can begin the program at the Surrey campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/b/biomedical-physiology.html",
    campus: "Burnaby (first year also offered at Surrey)",
    degree: "Bachelor of Science (BSc) in Biomedical Physiology",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: in Grade 11, two of Chemistry 11, Life Sciences 11 or Physics 11; in Grade 12, English Studies 12 or English First Peoples 12, Pre-Calculus 12, and at least two of Anatomy and Physiology 12, Calculus 12, Chemistry 12 or Physics 12, plus other approved courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), and two of Biology, Chemistry, Physics or Geography (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: high 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Kinesiology",
    slug: "sfu-kinesiology",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Kinesiology at SFU studies human structure and function and how they relate to movement and health, through physiology, anatomy, fitness appraisal and rehabilitation. Besides the major, the department offers certificates in health and fitness studies and in applied human nutrition. Students can begin at the Surrey campus, and co-op terms, for example working with exercise physiologists, can be added to the degree.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/k/kinesiology.html",
    campus: "Burnaby (first year also offered at Surrey)",
    degree: "Bachelor of Science (BSc) in Kinesiology",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: in Grade 11, two of Chemistry 11, Life Sciences 11 or Physics 11; in Grade 12, English Studies 12 or English First Peoples 12, Pre-Calculus 12, and at least two of Anatomy and Physiology 12, Calculus 12, Chemistry 12 or Physics 12, plus other approved courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), and two of Biology, Chemistry, Physics or Geography (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: high 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "sfu-biological-sciences",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Biology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Biological Sciences at SFU explores life on Earth at the molecular, organism and ecosystem levels. Students can focus on Cells, Molecules and Physiology, or on Ecology, Evolution and Conservation, or build a broad biology degree across the life sciences. The program prepares graduates for research, conservation and teaching, or for professional schools such as medicine, dentistry and veterinary medicine.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/b/biological-sciences.html",
    campus: "Burnaby (first year also offered at Surrey)",
    degree: "Bachelor of Science (BSc) in Biological Sciences",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: in Grade 11, two of Chemistry 11, Life Sciences 11 or Physics 11; in Grade 12, English Studies 12 or English First Peoples 12, Pre-Calculus 12, and at least two of Anatomy and Physiology 12, Calculus 12, Chemistry 12 or Physics 12, plus other approved courses to reach at least five. Equivalent AP or IB courses can replace required courses",
      "IB: Math Analysis and Approaches (HL or SL) or Math Applications and Interpretation HL (AI SL does not count), and two of Biology, Chemistry, Physics or Geography (HL or SL). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: mid 80s; students on a study permit: high 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Psychology",
    slug: "sfu-psychology",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Psychology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Psychology at SFU is the scientific study of behaviour, thinking and emotion, examined at levels from brain cells to society as a whole. The department offers a major, a minor and three joint majors, and students can start at either the Burnaby or the Surrey campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/p/psychology.html",
    campus: "Burnaby or Surrey",
    degree: "Bachelor of Arts (BA) in Psychology",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12 plus other approved Grade 12 courses to reach at least five; the Faculty of Arts and Social Sciences sets no other required courses. Equivalent AP or IB courses can replace required courses",
      "IB: the general IB Diploma requirements only (no extra program courses). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: low 80s; students on a study permit: mid 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Criminology",
    slug: "sfu-criminology",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Criminology",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "SFU's School of Criminology studies crime as both an individual and a social phenomenon: where it comes from and what forms it takes, its causes and consequences, and how society and government respond. The program is interdisciplinary, and alongside the major students can add certificates in areas such as police, legal or forensic studies. It can be started at either the Burnaby or the Surrey campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/c/criminology.html",
    campus: "Burnaby or Surrey",
    degree: "Bachelor of Arts (BA) in Criminology",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12 plus other approved Grade 12 courses to reach at least five; the Faculty of Arts and Social Sciences sets no other required courses. Equivalent AP or IB courses can replace required courses",
      "IB: the general IB Diploma requirements only (no extra program courses). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: low 80s; students on a study permit: mid 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Economics",
    slug: "sfu-economics",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Economics",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Economics at SFU studies human behaviour in many settings, from how individuals and firms decide to big social problems such as poverty, inequality, financial crises and the environment. Students can take a BA or a BSc, combine economics with business or other subjects, or take it as a minor, starting at either the Burnaby or the Surrey campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/e/economics.html",
    campus: "Burnaby or Surrey",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BSc) in Economics",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12 plus other approved Grade 12 courses to reach at least five; the Faculty of Arts and Social Sciences sets no other required courses. Equivalent AP or IB courses can replace required courses",
      "IB: the general IB Diploma requirements only (no extra program courses). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: low 80s; students on a study permit: mid 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Political Science",
    slug: "sfu-political-science",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Political Science",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "Political Science at SFU centres on power: who holds it, from governments and business to the media and citizens, and how people can challenge policies and inequality through voting, advocacy or protest. Besides the major, the department offers a minor, three joint majors and a certificate in African studies, and students can start at either the Burnaby or the Surrey campus.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/p/political-science.html",
    campus: "Burnaby or Surrey",
    degree: "Bachelor of Arts (BA) in Political Science",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12 plus other approved Grade 12 courses to reach at least five; the Faculty of Arts and Social Sciences sets no other required courses. Equivalent AP or IB courses can replace required courses",
      "IB: the general IB Diploma requirements only (no extra program courses). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: low 80s; students on a study permit: mid 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

  {
    name: "Communication",
    slug: "sfu-communication",
    level: "Bachelor",
    universitySlug: "simon-fraser-university",
    universityName: "Simon Fraser University",
    country: "Canada",
    field: "Communication",
    duration: "4 years (120 units)",
    language: "English",
    tuitionNote:
      "International: CAD 1,262.88 per unit in 2026-27 for students who started in 2024/25 or later, so a typical 30-unit year is about CAD 37,886. Canadian citizens and permanent residents: CAD 220.61 per unit, about CAD 6,618 for 30 units. Supplementary fees (student services and athletics, student activity fee, U-Pass, and medical insurance for international students) are extra. Current international students' tuition may rise up to 6% a year. 2027-28 rates are not yet published.",
    description:
      "SFU's School of Communication teaches critical thinking, analysis and media production while studying the cultures, histories, technologies and ideologies of media and communication systems. Students use project and group work to apply communication theory to social change and community engagement, and graduate understanding both media technologies and their social and ethical effects. Joint majors with Interactive Arts and Technology or with Business are available.",
    officialProgramUrl:
      "https://www.sfu.ca/students/admission/programs/a-z/c/communication.html",
    campus: "Burnaby",
    degree: "Bachelor of Arts (BA) in Communication",
    intake: "September",
    applicationDeadline: "Fall 2027 applications (via EducationPlannerBC) open October 1, 2026 and close January 31, 2027. BC high school applicants must also submit the Student Transcript Service form by January 31, and all other admission documents are due February 28, 2027. Early admission offers for BC students go out from mid-November to January; most other decisions are made on a rolling basis from January to late April",
    admissionRequirements: [
      "Apply online through EducationPlannerBC and choose SFU, the faculty and the program",
      "BC curriculum: English Studies 12 or English First Peoples 12 plus other approved Grade 12 courses to reach at least five; the School of Communication sets no other required courses. Equivalent AP or IB courses can replace required courses",
      "IB: the general IB Diploma requirements only (no extra program courses). IB Diploma applicants need the full diploma with at least 3 HL courses and a minimum of 26 points (the competitive score varies by program), plus an IB predicted grades report; program courses can be HL or SL",
      "Applicants from other provinces, the US and other countries (including A Levels and AP) have their own course lists on the program's requirements page",
      "Historical acceptance grade range: Canadian and permanent residents: low 80s; students on a study permit: mid 80s",
      "SFU's grade ranges are historical acceptance ranges from the past three years, given as a guide only; grades in or above the range do not guarantee an offer. Admission is based on all approved academic Grade 11 and 12 courses (or equivalent), and every applicant also needs 70% or more in English 11/12 and SFU's quantitative skills requirement",
      "English language proficiency is required. You can meet it with three years of full-time secondary school in English in Canada or in an English-speaking country (70% in senior English), four years at a recognized English-medium international school (70% in senior English), or the IB Diploma with English A (HL/SL) at grade 3 or higher. Test minimums: IELTS Academic 6.5 with no part below 6.0, TOEFL iBT 4.5 with no part below 4.0 (or 88 with no part below 20 for tests taken before January 21, 2026), Duolingo 125, PTE Academic 65 with at least 60 in each skill, CAEL 70 with no part below 60, Cambridge (B2 First, C1 Advanced or C2 Proficiency) 176 with no part below 169, or LanguageCert Academic 70 with no part below 65. Tests must be less than two years old",
    ],
  },

];
