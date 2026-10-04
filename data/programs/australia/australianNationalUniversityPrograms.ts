import type { Program } from "@/data/programs";

// Australian National University undergraduate programs for 2027 entry.
// Sources: ANU Programs and Courses 2027 pages (programsandcourses.anu.edu.au), ANU international application key dates, the ANU GCE A Level indicative entry table,
// the ANU English language admission policy, the ANU Early Offer key dates, UAC international course listings (fees and start dates) and UAC 2026-27 key dates.
// International fees are the 2027 annual indicative amounts, in Australian dollars.

export const australianNationalUniversityPrograms: Program[] = [
  {
    name: "Advanced Computing (Honours)",
    slug: "anu-advanced-computing-honours",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's four-year Bachelor of Advanced Computing (Honours) is an honours computing degree accredited by the Australian Computer Society. Students build a strong base in programming, software engineering, systems, algorithms and the theory of computation, then specialise in artificial intelligence, machine learning, human-centred and creative computing, systems and architecture, or theoretical computer science. In the final year they complete an industry internship, a client team project or a research project. Domestic students apply through UAC (code 135705); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/AACOM",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Advanced Computing (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 135705). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 85 or IB Diploma 33. Applicants who reach a selection rank of 85 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 85 needs about 14 points from the best 3 subjects or 16 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "Prerequisite: Mathematical Methods or equivalent: for example ACT Mathematical Methods (major) or Specialist Mathematics, NSW HSC Mathematics Advanced, VIC, QLD, SA/NT or WA Mathematical Methods, or IB Mathematics: Analysis and Approaches (SL or HL) or Applications and Interpretation (HL)",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Computing",
    slug: "anu-computing",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's three-year Bachelor of Computing covers the fundamentals of computing: programming principles, how computers work, and the mathematics and theory behind them. Students then major in Software Development for a technical, build-focused path, or in Information Systems for a more organisational and conceptual one. The degree can be combined with almost any other ANU degree as a flexible double degree. Domestic students apply through UAC (code 136062); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BCOMP",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Computing",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 136062). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "Prerequisite: Mathematical Methods or equivalent: for example ACT Mathematical Methods (major) or Specialist Mathematics, NSW HSC Mathematics Advanced, VIC, QLD, SA/NT or WA Mathematical Methods, or IB Mathematics: Analysis and Approaches (SL or HL) or Applications and Interpretation (HL)",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Commerce",
    slug: "anu-commerce",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Commerce is a flexible business degree with core courses in business reporting, micro and macroeconomics, quantitative methods and business communication. Students build depth in one or more majors: accounting, business analytics, business information systems, corporate sustainability, economic studies, finance, international business, management or marketing. Domestic students apply through UAC (code 133003); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BCOMM",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Commerce",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 133003). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No formal prerequisites. Assumed knowledge is ACT Mathematical Methods (major), Further Mathematics or Specialist Mathematics, or NSW HSC Mathematics Advanced, or the equivalent",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Economics",
    slug: "anu-economics",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Economics",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Economics teaches economic theory and its applications, taking microeconomics and macroeconomics through to third-year level alongside econometrics and quantitative methods. Students learn analytical and problem-solving tools they can apply to policy, business and international development. Domestic students apply through UAC (code 134003); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BECON",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Economics",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 134003). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No formal prerequisites. Assumed knowledge is ACT Mathematical Methods (major), Further Mathematics or Specialist Mathematics, or NSW HSC Mathematics Advanced, or the equivalent",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Finance",
    slug: "anu-finance",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Finance prepares students for careers in global financial markets, banking, investment and financial consulting. Core courses in finance, accounting, economics and statistics are followed by majors such as quantitative finance, and students develop the analytical skills to solve real financial problems. Domestic students apply through UAC (code 133203); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BFINN",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Finance",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 133203). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No formal prerequisites. Assumed knowledge is ACT Mathematical Methods (major), Further Mathematics or Specialist Mathematics, or NSW HSC Mathematics Advanced, or the equivalent",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Actuarial Studies",
    slug: "anu-actuarial-studies",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Actuarial Studies is a mathematically demanding degree that teaches students to measure and manage risk in insurance, superannuation, investment and other markets. Its large core covers financial mathematics, statistics, stochastic processes, survival models, life contingencies and risk modelling, plus economics. Domestic students apply through UAC (code 134403); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BACTS",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Actuarial Studies",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 134403). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 92 or IB Diploma 36. Applicants who reach a selection rank of 92 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 77",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 92 needs about 16 points from the best 3 subjects or 19 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "Prerequisite: Mathematical Methods or equivalent: for example ACT Mathematical Methods (major) or Specialist Mathematics, NSW HSC Mathematics Advanced, VIC, QLD, SA/NT or WA Mathematical Methods, or IB Mathematics: Analysis and Approaches (SL or HL) or Applications and Interpretation (HL). Specialist Mathematics (ACT) or Mathematics Extension 1 (NSW) is recommended",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Engineering (Honours)",
    slug: "anu-engineering-honours",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Engineering (Honours) is accredited by Engineers Australia and built on a multidisciplinary systems-engineering approach. All students take the same courses for the first two years before choosing a major in aerospace, electronic and communication, environmental, intelligent electronic, mechatronic, nuclear or renewable energy systems. The degree includes 60 days of work experience and a sequence of design projects. Domestic students apply through UAC (code 135004); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/AENGI",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 135004). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 85 or IB Diploma 33. Applicants who reach a selection rank of 85 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 85 needs about 14 points from the best 3 subjects or 16 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "Prerequisite: Mathematical Methods or equivalent: for example ACT Mathematical Methods (major) or Specialist Mathematics, NSW HSC Mathematics Advanced, VIC, QLD, SA/NT or WA Mathematical Methods, or IB Mathematics: Analysis and Approaches (SL or HL) or Applications and Interpretation (HL)",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Science",
    slug: "anu-science",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Natural Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Science is the university's most flexible science degree, with majors across astronomy and astrophysics, biology, chemistry, earth and marine science, environmental science, mathematics, neuroscience, physics, psychology and more. Students work in research laboratories with leading scientists and can take fieldtrips, internships or study overseas. Domestic students apply through UAC (code 138003); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BSC",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 138003). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No formal prerequisites. Chemistry is required for many biology majors, so at least an ACT minor in Chemistry (or a February bridging course) is recommended; some first-year mathematics courses assume Mathematical Methods or Specialist Mathematics",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Medical Science",
    slug: "anu-medical-science",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Biomedical Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Medical Science studies how the human body works, through genetics, immunology, nutrition, physiology, microbiology, biochemistry and anatomy. It is taught by biomedical researchers and health professionals and leads to careers in medical research or to further study, including graduate-entry medicine. It is not available for Semester 2 entry. Domestic students apply through UAC (code 138403); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BMEDS",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Medical Science",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027. This program has no Semester 2 intake. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 138403). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 85 or IB Diploma 33. Applicants who reach a selection rank of 85 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 85 needs about 14 points from the best 3 subjects or 16 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "Prerequisite: Chemistry (for example ACT or NSW Chemistry, or IB Chemistry SL or HL). Applicants without it should seek academic advice; ANU's Research School of Chemistry runs a Chemistry bridging course in February",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Health Science",
    slug: "anu-health-science",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Health Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Health Science draws on the university's strengths in medical education, biomedical science, population health, psychology and public policy to prepare students for health and medical careers. Each year, up to 40 domestic students in the program receive an offer into the ANU Doctor of Medicine and Surgery (MChD), and about 30% of those places go preferentially to rural-background students. It is not available for Semester 2 entry. Domestic students apply through UAC (code 138302); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BHLTH",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Health Science",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027. This program has no Semester 2 intake. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 138302). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 90 or IB Diploma 35. This program has no guaranteed-entry rank, and places are competitive. To be considered at all, applicants need an unadjusted rank of at least 75",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 90 needs about 15 points from the best 3 subjects or 18 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No formal prerequisites. Chemistry (at least an ACT minor, multi-strand science in NSW, or a February bridging course) is strongly recommended for the chemistry and biology courses",
      "The MChD pathway is for domestic students only, and internal transfers into the program are not available",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Laws (Honours)",
    slug: "anu-laws-honours",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Law",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$54,540 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Laws (Honours) is a four-year professional law degree that meets the academic requirements for admission as a legal practitioner in Australia. Students study the core areas of Australian law and build strong research skills through independent legal research. The degree is often taken as a five-year flexible double degree with another ANU bachelor's. Domestic students apply through UAC (code 137004); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/ALLB",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Laws (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 137004). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 97 or IB Diploma 41. Applicants who reach a selection rank of 97 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 87",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 97 needs about 17 points from the best 3 subjects or 21 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "Applicants who have already completed a bachelor's degree (or the international equivalent) are not eligible and should apply for the ANU Juris Doctor instead",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Science (Psychology)",
    slug: "anu-science-psychology",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Science (Psychology) gives a thorough grounding in developmental, social, personality, health and cognitive psychology, research methods and the biological bases of behaviour. Later courses apply this to areas such as neuroscience, counselling, mental health and organisational psychology. Graduates can apply for the one-year Bachelor of Science (Psychology) (Honours) and further postgraduate study, the route to practising as a psychologist. Domestic students apply through UAC (code 138123); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BSPSY",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Science (Psychology)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 138123). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No program-specific prerequisites are listed",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Arts",
    slug: "anu-arts",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$51,170 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Arts offers majors across the creative arts, humanities, social sciences and languages, including anthropology, archaeology, classics, criminology, English, history, linguistics, philosophy, political science and many Asian and European languages. Students can take on hands-on projects, internships or study abroad while building research, analysis and communication skills. Domestic students apply through UAC (code 131003); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BARTS",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Arts",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 131003). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 80 or IB Diploma 31. Applicants who reach a selection rank of 80 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 80 needs about 13 points from the best 3 subjects or 14 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No program-specific prerequisites are listed",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "International Relations",
    slug: "anu-international-relations",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$54,540 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of International Relations covers the history and theory of international affairs and contemporary global challenges, and trains students in policy analysis and data literacy. Specialised topics include geopolitics and great-power rivalry, international organisations, international political economy, war, terrorism and human rights. Students can add language study, exchange or an internship. Domestic students apply through UAC (code 131153); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BIR",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of International Relations",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 131153). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 85 or IB Diploma 33. Applicants who reach a selection rank of 85 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 70",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 85 needs about 14 points from the best 3 subjects or 16 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No program-specific prerequisites are listed",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },

  {
    name: "Politics, Philosophy and Economics",
    slug: "anu-politics-philosophy-economics",
    level: "Bachelor",
    universitySlug: "australian-national-university",
    universityName: "Australian National University",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students: A$57,640 a year for a full-time load (48 units). Domestic students get a Commonwealth Supported Place and pay a student contribution that depends on the courses they take; ANU publishes no single annual figure for the program. Fees are reviewed every year and usually increase.",
    description:
      "ANU's Bachelor of Politics, Philosophy and Economics combines the three disciplines to build the moral, economic and political perspectives needed to understand and tackle complex public problems. Compulsory courses in microeconomics, logic and critical thinking, philosophy and politics are linked by a dedicated PPE integration course each year. Domestic students apply through UAC (code 131161); international students apply directly to ANU.",
    officialProgramUrl:
      "https://programsandcourses.anu.edu.au/2027/program/BPPE",
    campus: "Canberra (Acton)",
    programType: "Full-time",
    degree: "Bachelor of Politics, Philosophy and Economics",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to ANU (A$150 application fee, up to three preferences) by 15 December 2026 for Semester 1, 2027 or by 15 May 2027 for Semester 2, 2027. International students completing Australian Year 12, the IB Diploma or NCEA Level 3 apply through UAC instead. Domestic applicants: ANU's direct Early Offer round for 2027 closed on 8 May 2026, so new domestic applications go through UAC (code 131161). Apply by 26 November 2026 to be included in the main offer round on 23 December 2026. UAC's final closing date for Semester 1, 2027 is 5 February 2027.",
    admissionRequirements: [
      "Selection rank (ATAR plus any adjustments) 94 or IB Diploma 38. Applicants who reach a selection rank of 94 are guaranteed a place, subject to prerequisites. To be considered at all, applicants need an unadjusted rank of at least 79",
      "International applicants are given an equivalent selection rank from their qualification. For GCE A Levels, a rank of 94 needs about 16 points from the best 3 subjects or 20 from the best 4, with A*=6, A=5, B=4, C=3, D=2 and E=1 (ANU's indicative table)",
      "No formal prerequisites. Assumed knowledge is ACT Mathematical Methods (major), Further Mathematics or Specialist Mathematics, or NSW HSC Mathematics Advanced, or the equivalent",
      "English language (for study starting from 2027): IELTS Academic 6.5 overall with at least 6.0 in each band; TOEFL iBT 81 (reading 16, writing 19, listening 16, speaking 19); or PTE Academic 64 with at least 60 in each communicative skill. Tests must be taken in person, and online or at-home versions are not accepted",
      "ANU publishes indicative entry scores for many other qualifications (Singapore A Levels, China's Gaokao, Advanced Placement and more) on its undergraduate entry requirements page",
    ],
  },
];
