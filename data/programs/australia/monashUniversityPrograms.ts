import type { Program } from "@/data/programs";

// Monash University undergraduate programmes for 2027 entry.
// Sources: official Monash course pages (monash.edu/study/courses/find-a-course), the Monash admissions and Medicine direct-entry pages, and VTAC key dates.
// Fees are the 2027 amounts on each course page, in Australian dollars.

export const monashUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "monash-computer-science",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$58,940 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$10,000. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Computer Science, taught by the Faculty of Information Technology, focuses on the theory of computation and its mathematical foundations. Students learn to design algorithms and data structures and turn them into working software. They can specialise in algorithms and software, artificial intelligence, cybersecurity or data science, and professional practice units with industry partners, placements and internships help them build a portfolio of real projects. The course is also offered at Monash Malaysia. Domestic students apply through VTAC; international students apply directly to Monash with course code C2001.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/computer-science-c2001",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Computer Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to Monash (course code C2001). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 80, GCE A Level score 9 or IB Diploma 28. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 80.15; lowest ATAR offered in 2026 70.15. The Monash Guarantee ATAR for 2027 is 78, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 25 in either Mathematical Methods or Specialist Mathematics",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Information Technology",
    slug: "monash-information-technology",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$58,940 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$10,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Information Technology is a flexible, applied IT degree that lets students sample the field before choosing majors and minors such as artificial intelligence, cybersecurity, computer science, software development, games and immersive media, data science and business AI systems. Alongside technical skills, it builds problem-solving, teamwork, communication and project management, and embedded professional placement units add industry experience. Domestic students apply through VTAC; international students apply directly to Monash with course code C2000.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/information-technology-c2000",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Information Technology",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to Monash (course code C2000). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 75, GCE A Level score 8 or IB Diploma 26. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 73.00; lowest ATAR offered in 2026 63.00. The Monash Guarantee ATAR for 2027 is 73, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or at least 25 in English other than EAL; Maths: Units 1 & 2: satisfactory completion of two units (any study combination) of General Mathematics, Mathematical Methods or Specialist Mathematics or Units 3 and 4: any Mathematics",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Commerce",
    slug: "monash-commerce",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$59,140 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$16,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash Business School's Bachelor of Commerce is a quantitative business degree built on mathematics, data analysis and core commerce knowledge. Students then major in areas such as accounting, actuarial studies, behavioural commerce, business analytics, econometrics, economics, finance, management or marketing science, or in sustainability and responsible management. Many students pair it with a second degree. Domestic students apply through VTAC; international students apply directly to Monash with course code B2001.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/commerce-b2001",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Commerce",
    intake: "February (Semester 1), July (Semester 2), November (international students only)",
    applicationDeadline: "International applicants apply directly to Monash (course code B2001). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027, with a November 2026 intake also open. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 87.5, GCE A Level score 11 or IB Diploma 31. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 87.15; lowest ATAR offered in 2026 77.20. The Monash Guarantee ATAR for 2027 is 77, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools); the Guarantee does not apply to the Law Pathway, which requires an ATAR of 90+",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or at least 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 25 in one of Maths: Mathematical Methods or Maths: Specialist Mathematics",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Business",
    slug: "monash-business",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$59,140 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$16,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Business, based at the Caulfield campus, is a practical, applied degree on how organisations, brands and markets work. Students can specialise in areas including accounting, marketing, economics and business law, and can take it in one of 10 double-degree combinations. Domestic students apply through VTAC; international students apply directly to Monash with course code B2000.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/business-b2000",
    campus: "Caulfield",
    programType: "Full-time",
    degree: "Bachelor of Business",
    intake: "February (Semester 1), July (Semester 2), November (international students only)",
    applicationDeadline: "International applicants apply directly to Monash (course code B2000). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027, with a November 2026 intake also open. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 77.5, GCE A Level score 8.5 or IB Diploma 27. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 76.05; lowest ATAR offered in 2026 66.30. The Monash Guarantee ATAR for 2027 is 70, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or at least 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 22 in one of Maths: Mathematical Methods or Maths: Specialist Mathematics or at least 25 in Maths: General Mathematics (previously known as Maths: Further Mathematics)",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Economics",
    slug: "monash-economics",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Economics",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$59,140 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$15,000. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Economics teaches the theories, tools and policies of modern economics: how people, businesses and governments use limited resources, and what follows from their decisions. Students choose one of four specialisations: business analytics for economics; economics and economic policy; macroeconomics and financial markets; or mathematical economics and econometrics. Graduates work as economists, analysts and policy advisers in the public and private sectors. Domestic students apply through VTAC; international students apply directly to Monash with course code B2031.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/economics-b2031",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Economics",
    intake: "February (Semester 1), July (Semester 2), November (international students only)",
    applicationDeadline: "International applicants apply directly to Monash (course code B2031). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027, with a November 2026 intake also open. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 87.5, GCE A Level score 11 or IB Diploma 31. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 89.40; lowest ATAR offered in 2026 85.65. The Monash Guarantee ATAR for 2027 is 77, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or at least 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 25 in one of Maths: Mathematical Methods or Maths: Specialist Mathematics",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Actuarial Science",
    slug: "monash-actuarial-science",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$59,140 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$12,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Actuarial Science trains students to measure and manage financial risk by applying mathematics and statistics to business problems. It builds on financial accounting, micro- and macroeconomics and economic statistics, then moves into corporate finance, debt markets and fixed-income securities, with specialisations in actuarial analytics or actuarial studies. It is accredited by the Actuaries Institute, giving a route to the Foundation Program of the Institute's professional qualification. Domestic students apply through VTAC; international students apply directly to Monash with course code B2033.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/actuarial-science-b2033",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Actuarial Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to Monash (course code B2033). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 90, GCE A Level score 12 or IB Diploma 33. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 92.30; lowest ATAR offered in 2026 91.30. The Monash Guarantee ATAR for 2027 is 86, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or at least 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 25 in one of Maths: Mathematical Methods or Maths: Specialist Mathematics",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Engineering (Honours)",
    slug: "monash-engineering",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$63,040 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$9,000. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's four-year Bachelor of Engineering (Honours) starts with a common first year across the engineering disciplines. Students then specialise from second year in aerospace, biomedical, chemical, civil, electrical and computer systems, environmental, materials, mechanical, robotics and mechatronics, or software engineering. The degree is accredited by Engineers Australia and includes 420 hours of professional development, such as vacation employment. Students can join the Co-operative Education Program and more than 30 student teams, including Monash Motorsport. The course is also offered at Monash Malaysia. Domestic students apply through VTAC; international students apply directly to Monash with course code E3001.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/engineering-e3001",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Honours)",
    intake: "February (Semester 1); July (Semester 2) for international students only (not for Biomedical Engineering)",
    applicationDeadline: "International applicants apply directly to Monash (course code E3001). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Mid-year (July) entry is offered to international applicants only.",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 85, GCE A Level score 10 or IB Diploma 30. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants (Engineering (Honours) entry): 2026 lowest selection rank (ATAR plus adjustments) 85.00; lowest ATAR offered in 2026 75.10. The Monash Guarantee ATAR for 2027 is 75, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools); the Biomedical Engineering (Honours) entry point had a 2026 lowest selection rank of 85.10",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 25 in Mathematical Methods or Specialist mathematics; Sciences/Other: Units 3 & 4: a study score of at least 25 in Chemistry or Physics, or 30 in Biology",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Science",
    slug: "monash-science",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Natural Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,040 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$10,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Science offers majors, extended majors and minors across the biological sciences, biomedical and behavioural sciences, earth and environmental sciences, mathematical and computational sciences, and physical and chemical sciences. Students can explore several areas before settling on one or two, or commit to a field from the start. Teaching uses purpose-built chemistry, physics and astronomy facilities, with field trips and research experience. The course is also offered at Monash Malaysia. Domestic students apply through VTAC; international students apply directly to Monash with course code S2000.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/science-s2000",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to Monash (course code S2000). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 80, GCE A Level score 9 or IB Diploma 28. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 82.00; lowest ATAR offered in 2026 72.00. The Monash Guarantee ATAR for 2027 is 72, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL; Sciences/Other: Units 3 & 4: a study score of at least 25 in one of Biology, Chemistry, Environmental Science, Geography, Mathematical Methods, Specialist Mathematics, Physics or Psychology",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Biomedical Science",
    slug: "monash-biomedical-science",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Biomedical Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$58,040 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$10,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Biomedical Science studies how disease develops, affects the body and can be treated or prevented, combining core biomedical units with electives ranging from global health to languages. Assessment is often hands-on and project-based, and students gain experience through internships, work-integrated learning and research projects. High achievers can join the Biomedicine Undergraduate Scholars Program. Graduates go into research, clinical trials, the pharmaceutical industry, health policy or graduate-entry medicine. Domestic students apply through VTAC; international students apply directly to Monash with course code M2003.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/biomedical-science-m2003",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Biomedical Science",
    intake: "February (Semester 1); July (Semester 2) for international students only",
    applicationDeadline: "International applicants apply directly to Monash (course code M2003). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Mid-year (July) entry is offered to international applicants only.",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 90, GCE A Level score 12 or IB Diploma 33. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 91.05; lowest ATAR offered in 2026 81.35. The Monash Guarantee ATAR for 2027 is 86, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools); the Scholars Program had a 2026 lowest selection rank of 98.05 and requires a study score of 35 in Chemistry",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 22 in one of Maths: Mathematical Methods or Maths: Specialist Mathematics or at least 25 in one of Maths: General Mathematics or Physics; Sciences/Other: Units 3 & 4: a study score of at least 25 in Chemistry. SCHOLARS: Units 3 & 4: a study score of at least 35 in Chemistry",
      "English language (Monash English Level B, where required): IELTS Academic 6.5 overall (listening 6.5, reading 6.5, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 20, reading 19, speaking 18, writing 21); or PTE Academic 58 overall (listening 58, reading 58, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Medical Science and Medicine (Direct Entry)",
    slug: "monash-medicine",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Medicine",
    duration: "5 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$107,240 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$14,046. The actual amount depends on the units taken, and fees are reviewed each year. The page shows the international fee under 2027 but notes it is based on 2026 rates and is a guide only. CSP places in Medicine are capped by the federal government.",
    description:
      "Monash's five-year Bachelor of Medical Science and Doctor of Medicine lets school leavers enter medicine directly. The first two years are taught on campus and the last three are based in hospitals and the community, through Monash's network of teaching hospitals, including Monash Medical Centre and The Alfred. Learning combines lectures, small-group case-based tutorials, simulation and early clinical visits, and includes a supervised research placement. An Extended Rural Cohort option places most clinical training in regional Victoria. Domestic students apply through VTAC; international students apply directly to Monash with course code M6011, or through VTAC if completing an Australian Year 12 or the IB in Australia.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/medical-science-and-medicine-direct-entry-m6011",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Medical Science and Doctor of Medicine (MD)",
    intake: "February (Semester 1)",
    applicationDeadline: "International main round for 2027 entry: complete ISAT by 8 May 2026 (registration closed 13 April 2026) and apply directly by 30 June 2026. Interviews were held on Zoom on 21 and 22 July 2026, with offers made on a rolling basis from August 2026. International students completing an Australian Year 12, the IB in Australia or New Zealand, or NCEA had to complete ISAT by 7 August 2026 and apply through VTAC (code 2800311233) by 28 September 2026, with Zoom interviews on 26 November 2026 and offers in December 2026 and January 2027. Domestic applicants could only apply during VTAC's timely period (closed 28 September 2026), and offers are made only in the January and February VTAC rounds. All 2027 closing dates have now passed.",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 97.5, GCE A Level score 15 or IB Diploma 39. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Admissions test and interview: international applicants must sit ISAT, with at least 170 overall and 165 in both Critical Reasoning and Quantitative Reasoning. For the 2027 intake, interviews went to applicants scoring 178 or above. Shortlisted applicants complete an online multiple mini interview (four stations). Domestic applicants must sit UCAT ANZ",
      "Domestic selection ranks UCAT ANZ, ATAR (after equity and rural adjustments) and interview equally. The lowest ATARs offered places in 2026 were 96.10 for school-leaver entry, 95.05 for the Extended Rural Cohort and 91.25 for bonded places. The Monash Guarantee does not apply",
      "Only final results are accepted: no conditional offers are made on predicted or provisional results",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 and 4: a study score of at least 35 in English (EAL) or 30 in English other than EAL; Sciences/Other: Units 3 and 4: a study score of at least 30 in Chemistry",
      "English language (Monash English Level C, where required): IELTS Academic 7.0 overall (listening 6.5, reading 6.5, speaking 6.5, writing 6.5); TOEFL iBT 94 overall (listening 20, reading 19, speaking 20, writing 24); or PTE Academic 65 overall (listening 58, reading 58, speaking 58, writing 58)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Laws (Honours)",
    slug: "monash-laws",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Law",
    duration: "4 years full-time (accelerated; 4.25 years standard)",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$58,540 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$17,500. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Laws (Honours) starts with the concepts, procedures and reasoning of the Australian legal system. Students then choose specialist law electives, such as negotiation and conflict resolution or media law, plus non-law electives or a double degree. Monash guarantees every student a clinical legal education placement, and students can moot in the on-site courtroom and study abroad, for example at the Prato Centre in Italy. The course is equivalent to 4.25 years of full-time study and can be accelerated to finish in four. Domestic students apply through VTAC; international students apply directly to Monash with course code L3001, or through VTAC if completing an Australian Year 12 or the IB in Australia.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/laws-l3001",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Laws (Honours) (LLB (Hons))",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to Monash (course code L3001). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 95, GCE A Level score 13 or IB Diploma 36. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: 2026 lowest selection rank (ATAR plus adjustments) 95.00; lowest ATAR offered in 2026 85.35. The Monash Guarantee ATAR for 2027 is 85, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: at least 35 in English (EAL) or at least 30 in English other than EAL",
      "English language (Monash English Level C, where required): IELTS Academic 7.0 overall (listening 6.5, reading 6.5, speaking 6.5, writing 6.5); TOEFL iBT 94 overall (listening 20, reading 19, speaking 20, writing 24); or PTE Academic 65 overall (listening 58, reading 58, speaking 58, writing 58)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Psychology",
    slug: "monash-psychology",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$51,140 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$11,000. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Psychology covers the science of how people think, feel and behave. Core areas include cognition, emotion, development, personality and mental health, alongside research design and data analysis. Its core sequence is accredited by the Australian Psychology Accreditation Council, and electives include Indigenous and cross-cultural psychology, cognitive neuroscience, and digital technology and innovation. The final year includes a work-integrated learning project with industry, clinical, community or research partners. The course is also offered at Monash Malaysia. Domestic students apply through VTAC; international students apply directly to Monash with course code M2018.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/psychology-m2018",
    campus: "Clayton",
    programType: "Full-time",
    degree: "Bachelor of Psychology",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to Monash (course code M2018). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Clayton entry is in Semester 1 only (Semester 2 entry is offered at the Malaysia campus).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 85, GCE A Level score 10 or IB Diploma 30. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants (Clayton): 2026 lowest selection rank (ATAR plus adjustments) 87.05; lowest ATAR offered in 2026 75.10. The Monash Guarantee ATAR for 2027 is 77, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Nursing",
    slug: "monash-nursing",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$47,340 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$7,000. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's three-year Bachelor of Nursing prepares students to register as nurses. They build clinical decision-making, patient care, communication, cultural competence and research skills, with extensive placements across Victoria in acute care, primary health care, mental health and health promotion. Students learn alongside those in other health courses, such as physiotherapy, paramedicine and occupational therapy, and high achievers can join a Scholars Program. It is taught at the Clayton and Peninsula campuses. Domestic students apply through VTAC; international students apply directly to Monash with course code M2006.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/nursing-m2006",
    campus: "Clayton and Peninsula",
    programType: "Full-time",
    degree: "Bachelor of Nursing",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to Monash (course code M2006). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027.",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 77.5, GCE A Level score 8.5 or IB Diploma 27. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants (Clayton): 2026 lowest selection rank (ATAR plus adjustments) 76.85; lowest ATAR offered in 2026 66.85. The Monash Guarantee ATAR for 2027 is 70, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools); the Peninsula campus had a 2026 lowest selection rank of 70.50 and the Clayton Scholars Program 90.00",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 and 4: a study score of at least 25 in English (EAL) or at least 25 in English other than EAL; Maths: Units 1 and 2: satisfactory completion in two units (any study combination) of Maths: General Mathematics, Maths: Mathematical Methods or Maths: Specialist Mathematics or Units 3 and 4: any Mathematics",
      "English language: Monash English Level F, which applies the Ahpra/Nursing and Midwifery Board of Australia registration standard (for example, IELTS Academic 7.0 overall with at least 7.0 in each component), as well as Monash's own minimums. The accepted scores for tests taken before and after 23 April 2026 are listed on the Ahpra website",
      "Inherent requirements and clinical placement checks apply",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Pharmacy (Honours) / Doctor of Pharmacy",
    slug: "monash-pharmacy",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Pharmacy",
    duration: "5 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$63,640 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$10,500. The actual amount depends on the units taken, and fees are reviewed each year. Because the course is new for 2027, entry ranks are estimates.",
    description:
      "From 2027, Monash replaces its pharmacy degree with a five-year Bachelor of Pharmacy (Honours) / Doctor of Pharmacy. This vertical double degree links an honours undergraduate degree to an extended master's that awards the Doctor of Pharmacy title, within the five years normally needed to register as a pharmacist. It is taught at the Parkville campus, which is dedicated to pharmacy and pharmaceutical sciences. Faculty-organised community and hospital pharmacy placements run in years 2 to 4, and year 5 combines paid work-integrated learning with an intern training program. Students can also study abroad in Malaysia, the US or Italy. Domestic students apply through VTAC; international students apply directly to Monash with course code P6007.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/pharmacy-p6007",
    campus: "Parkville",
    programType: "Full-time",
    degree: "Bachelor of Pharmacy (Honours) / Doctor of Pharmacy",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to Monash (course code P6007). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027.",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 90, GCE A Level score 12 or IB Diploma 33. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants: estimated 2027 lowest selection rank 89+. The Monash Guarantee ATAR for 2027 is 80, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools); the Scholars Program has an estimated lowest selection rank of 98+",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL; Maths: Units 3 & 4: a study score of at least 25 in Mathematical Methods (Any) or Specialist Mathematics; Sciences/Other: Units 3 & 4: a study score of at least 25 in Chemistry",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },

  {
    name: "Arts",
    slug: "monash-arts",
    level: "Bachelor",
    universitySlug: "monash-university",
    universityName: "Monash University",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$47,340 per full-time year (48 credit points). Domestic students in a Commonwealth Supported Place (CSP) pay a 2027 average annual student contribution of A$16,000. The actual amount depends on the units taken, and fees are reviewed each year.",
    description:
      "Monash's Bachelor of Arts is a flexible humanities and social sciences degree with more than 30 areas of study, including languages, history, psychology and sociology. Students don't need to choose a major until second year. It includes the Professional Futures program for workplace skills, plus funded overseas study, work placements and peer mentoring. Graduates work in fields from government and international relations to media, marketing and the arts. Domestic students apply through VTAC; international students apply directly to Monash with course code A2000.",
    officialProgramUrl:
      "https://www.monash.edu/study/courses/find-a-course/arts-a2000",
    campus: "Caulfield and Clayton",
    programType: "Full-time",
    degree: "Bachelor of Arts",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to Monash (course code A2000). There is no fixed closing date and applications are accepted all year, but Monash advises applying as early as possible: courses can fill months ahead, and student visas can take up to six months. Semester 1 teaching starts in early March 2027, Semester 2 in mid-July 2027. International students completing an Australian Year 12 or an IB Diploma in Australia apply through VTAC instead. Domestic applicants apply through VTAC. VTAC applications for 2027 courses: timely by 28 September 2026, late by 30 October 2026, very late by 4 December 2026, and for January round 2 and later by 13 January 2027. Semester 2 entry for domestic students depends on CSP availability (there was no domestic Semester 2 intake in 2026).",
    admissionRequirements: [
      "International applicants (2027 intake): ATAR 75, GCE A Level score 8 or IB Diploma 26. Monash scores A levels from the best three subjects (or allowed A2/AS combinations), with A* and A both worth 5 points, B 4, C 3, D 2 and E 1, plus up to 1 bonus point for an A*",
      "Domestic applicants (Caulfield): 2026 lowest selection rank (ATAR plus adjustments) 72.05; lowest ATAR offered in 2026 62.05. The Monash Guarantee ATAR for 2027 is 70, for eligible equity applicants only (for example, those from regional or low-income backgrounds or under-represented schools)",
      "Prerequisites (VCE, or the equivalent in other qualifications): English: Units 3 & 4: a study score of at least 25 in English (EAL) or 25 in English other than EAL",
      "English language (Monash English Level A, where required): IELTS Academic 6.5 overall (listening 6.0, reading 6.0, speaking 6.0, writing 6.0); TOEFL iBT 79 overall (listening 12, reading 13, speaking 18, writing 21); or PTE Academic 58 overall (listening 50, reading 50, speaking 50, writing 50)",
      "Other qualifications (Monash Foundation Year, SAT/ACT, AP, Gaokao, HKDSE, Indian and Sri Lankan boards, and more) have their own 2027 minimums on the course page",
    ],
  },
];
