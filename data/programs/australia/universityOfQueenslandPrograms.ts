import type { Program } from "@/data/programs";

// University of Queensland undergraduate programs for 2027 entry.
// Sources: official UQ program pages (study.uq.edu.au/study-options/programs), UQ's international entry-score data on those pages, the UQ undergraduate application page, and QTAC key information.
// International fees are the 2027 amounts on each program page, in Australian dollars. Domestic student contributions are 2026 figures unless stated otherwise.

export const universityOfQueenslandPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "uq-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,952 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$8,355 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Computer Science covers the theory and practice of computing, including programming, algorithms, software and systems. It draws on more than 50 years of computer science teaching at UQ. Students can take majors in artificial intelligence, cyber security, data science or programming theory, and the program links to industry networks, global experiences and postgraduate pathways. Domestic students apply through QTAC (code 733401); international students apply directly to UQ (program code 2559).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-computer-science-2559",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Computer Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 733401). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 84, GCE A Level aggregate 10 or IB Diploma 32. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 84",
      "Prerequisites: Queensland Year 12 (or equivalent) General English and Mathematical Methods (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Engineering (Honours)",
    slug: "uq-engineering-honours",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,952 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$8,255 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's four-year Bachelor of Engineering (Honours) begins with a flexible first year across the engineering disciplines. Students then choose one of six specialisations: chemical, civil, electrical, mechanical, robotic and mechatronic, or software engineering. Majors and minors such as AI and data science are available, and hands-on lab, studio and industry projects run throughout the degree. Domestic students apply through QTAC (code 717001); international students apply directly to UQ (program code 2455).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-engineering-honours-2455",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 717001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 85, GCE A Level aggregate 10.5 or IB Diploma 32.75. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 84",
      "Prerequisites: Queensland Year 12 (or equivalent) General English, Mathematical Methods, and one of Chemistry or Physics (Units 3 & 4, grade C). UQ recommends Specialist Mathematics and both Chemistry and Physics for more flexibility in choosing a specialisation",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Commerce",
    slug: "uq-commerce",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$56,800 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$16,030 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Commerce combines core business knowledge with strong analytical and problem-solving skills. Students build depth through one or two majors in accounting, business analytics, business information systems or finance, and connect with industry through guest lectures, career events and industry projects. It is often combined with science, economics, computer science or law in a dual program. Domestic students apply through QTAC (code 711001); international students apply directly to UQ (program code 2336).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-commerce-2336",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Commerce",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 711001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 84, GCE A Level aggregate 10 or IB Diploma 32. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 82.25",
      "Prerequisites: Queensland Year 12 (or equivalent) General English and Mathematical Methods (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Business Management",
    slug: "uq-business-management",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$56,800 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$16,030 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Business Management develops broad management and leadership skills that apply in the private, public and not-for-profit sectors. Students choose up to two majors from seven options, including business economics, business information systems, human resources, and innovation and entrepreneurship. Work-integrated learning includes placements, consulting projects and global study experiences. Domestic students apply through QTAC (code 709001); international students apply directly to UQ (program code 2171).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-business-management-2171",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Business Management",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 709001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 74, GCE A Level aggregate 5.5 or IB Diploma 27.75. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 72",
      "Prerequisites: Queensland Year 12 (or equivalent) General English and one of General Mathematics, Mathematical Methods or Specialist Mathematics (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Economics",
    slug: "uq-economics",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Economics",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$56,800 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$17,180 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Economics is taught by Queensland's largest school of economics. It trains students in the theory and the statistical and analytical tools used to tackle policy and business decisions. Majors include economics and public policy, economics of strategy and behaviour, international and financial economics, and quantitative analysis, and students can complete a professional placement. Domestic students apply through QTAC (code 714001); international students apply directly to UQ (program code 2467).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-economics-2467",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Economics",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 714001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 84, GCE A Level aggregate 10 or IB Diploma 32. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 82.35",
      "Prerequisites: Queensland Year 12 (or equivalent) General English and Mathematical Methods (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Science",
    slug: "uq-science",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Natural Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$56,800 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$9,690 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Science is a flexible degree in which students can mix science and non-science courses in first year before settling on their study path. It offers 16 extended majors, 26 majors and 35 minors across the physical, life, earth and mathematical sciences, as well as minors outside science, and it can be combined with one of 13 other programs, including law, engineering and business. Domestic students apply through QTAC (code 731001); international students apply directly to UQ (program code 2461).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-science-2461",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 731001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 80, GCE A Level aggregate 8.5 or IB Diploma 30.25. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 80",
      "Prerequisites: Queensland Year 12 (or equivalent) General English, Mathematical Methods, and one of Biology, Chemistry, Earth and Environmental Science or Physics (Units 3 & 4, grade C). Earth and Environmental Science will no longer be accepted from Semester 1, 2028",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Biomedical Science",
    slug: "uq-biomedical-science",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Biomedical Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,952 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$9,210 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Biomedical Science studies how the human body works in health and disease, taught by researchers active in biomedical science and medicine. Students spend extensive time in research-grade laboratories, and many use the degree as a pathway to medicine or allied health. Domestic students apply through QTAC (code 731201); international students apply directly to UQ (program code 2546).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-biomedical-science-2546",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Biomedical Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 731201). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027. The program page lists only a Semester 1 closing date for international direct applicants.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 80, GCE A Level aggregate 8.5 or IB Diploma 30.25. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 80.1",
      "Prerequisites: Queensland Year 12 (or equivalent) General English, Mathematical Methods, and one of Biology, Chemistry or Physics (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Medical Science / Doctor of Medicine",
    slug: "uq-medical-science-doctor-of-medicine",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Medicine",
    duration: "6 years full-time (2-year Bachelor of Medical Science, then the 4-year Doctor of Medicine)",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,952 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$11,920 a year (2027 figure). Actual fees depend on the courses taken and are reviewed every year. The international fee covers the Bachelor of Medical Science (years 1–2); UQ expects Doctor of Medicine tuition for years 3–6 to be about A$110,000 a year.",
    description:
      "UQ's Bachelor of Medical Science/Doctor of Medicine is a new direct-entry pathway for school leavers. After two years of tailored pre-medicine study (32 units of core science and biomedical science courses plus electives), students move straight into UQ's four-year MD. The MD includes clinical placements from its second year and finishes with internship preparation. Graduates qualify at least a year sooner than via the traditional graduate-entry route. Domestic students apply through QTAC (code 721502); international students apply directly to UQ (program code 2578).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-medical-science-doctor-medicine-2578",
    campus: "St Lucia, then UQ clinical units and teaching hospitals",
    programType: "Full-time",
    degree: "Bachelor of Medical Science / Doctor of Medicine",
    intake: "February (Semester 1)",
    applicationDeadline: "Applications for 2027 entry have closed. Domestic applicants applied through QTAC (code 721502) by 30 September 2026, and international applicants applied directly to UQ by 30 September 2026. For future intakes, expect the same 30 September deadline in the year before entry, and sit the UCAT ANZ in the year you apply.",
    admissionRequirements: [
      "Direct-entry requirements: an adjusted ATAR of 95 (or equivalent), a competitive UCAT ANZ aggregate score from the year of application, and a multiple mini-interview (MMI). For 2027 entry, interviews are scheduled for mid to late November 2026",
      "Prerequisites: Queensland Year 12 (or equivalent) General English and Mathematical Methods (Units 3 & 4, grade C). Chemistry and/or Biology are recommended but not required",
      "English language: IELTS Academic 7.0 overall with at least 7 in each band; TOEFL iBT 100 (listening 25, reading 25, writing 27, speaking 23); or PTE Academic 72 with at least 72 in every communicative skill. Bridging English results are not accepted",
    ],
  },

  {
    name: "Laws (Honours)",
    slug: "uq-laws-honours",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Law",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$56,800 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$16,405 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Laws (Honours) is a four-year professional law degree taught in small, interactive seminars and tutorials that develop legal reasoning, research, advocacy and communication. Students can volunteer through the UQ Pro Bono Centre, and dedicated wellbeing and career support is available for law students. It can also be studied as a dual degree with arts, commerce, science and other programs. Domestic students apply through QTAC (code 718001); international students apply directly to UQ (program code 2471).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-laws-honours-2471",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Laws (Honours)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 718001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 98, GCE A Level aggregate 15 or IB Diploma 41.75. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 97.6",
      "Prerequisites: Queensland Year 12 (or equivalent) General English (Units 3 & 4, grade C)",
      "English language: IELTS Academic 7.0 overall with writing and speaking at least 7 and reading and listening at least 6; TOEFL iBT 100 (listening 19, reading 19, writing 27, speaking 23); or PTE Academic 72 (listening 60, reading 60, writing 72, speaking 72)",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Psychological Science (Honours)",
    slug: "uq-psychological-science-honours",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Psychology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$52,528 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$10,780 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Psychological Science (Honours) is a four-year program that covers psychological theory, research and practice. Topics include child development, neuroscience, learning and cognition, social and organisational psychology, and psychological assessment. Students complete an honours research project in their final year, which prepares them for postgraduate study towards registration as a psychologist or for work in related fields. Domestic students apply through QTAC (code 757001); international students apply directly to UQ (program code 2379).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-psychological-science-honours-2379",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Psychological Science (Honours)",
    intake: "February (Semester 1), July (Semester 2, international students only)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 30 June 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 757001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027. Domestic entry is in Semester 1 only.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 88, GCE A Level aggregate 11.5 or IB Diploma 34. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 89",
      "Prerequisites: Queensland Year 12 (or equivalent) General English (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Nursing",
    slug: "uq-nursing",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,080 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$6,565 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Nursing prepares students to register as nurses, with rostered clinical placement shifts and simulation training from first year. Extended placements in the final year ease the move from student to registered nurse, and the program emphasises person-centred care in partnership with patients. Domestic students apply through QTAC (code 728502); international students apply directly to UQ (program code 2241).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-nursing-2241",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Nursing",
    intake: "February (Semester 1), July (Semester 2, international students only)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 30 April 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 728502). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027. Domestic entry is in Semester 1 only.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 84, GCE A Level aggregate 10 or IB Diploma 32. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 83.1",
      "Prerequisites: Queensland Year 12 (or equivalent) General English (Units 3 & 4, grade C). UQ strongly recommends one of Biology, Chemistry or Physics",
      "English language: IELTS Academic 7.0 overall with at least 7 in each band; TOEFL iBT 100 (listening 25, reading 25, writing 27, speaking 23); or PTE Academic 72 with at least 72 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Pharmacy (Honours)",
    slug: "uq-pharmacy-honours",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Pharmacy",
    duration: "4 years full-time (3.5 years for Semester 2 entry)",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,952 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$9,540 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Pharmacy (Honours) is taught at the purpose-built pharmacy teaching and research facility at UQ Dutton Park. Students learn the science of medicines alongside the clinical and interpersonal skills needed in practice, train with students from other health professions, and complete more than 500 hours of supervised clinical practice, including two six-week placements. Domestic students apply through QTAC (code 725002); international students apply directly to UQ (program code 2373).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-pharmacy-honours-2373",
    campus: "Dutton Park",
    programType: "Full-time",
    degree: "Bachelor of Pharmacy (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 725002). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 80, GCE A Level aggregate 8.5 or IB Diploma 30.25. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 80.45",
      "Prerequisites: Queensland Year 12 (or equivalent) General English, one of General Mathematics, Mathematical Methods or Specialist Mathematics, and Chemistry (Units 3 & 4, grade C). Biology is recommended",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Physiotherapy (Honours)",
    slug: "uq-physiotherapy-honours",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Health Sciences",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$60,952 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$10,525 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Physiotherapy (Honours) builds a foundation in anatomy, therapeutic exercise, psychology, ethics and physiotherapy practice. Students train through clinical visits, practical classes, an award-winning simulated-patient program in the school's hospital simulation ward, and supervised clinical practice, including in the UQ Physiotherapy Clinics. The honours component opens a pathway to research. Domestic students apply through QTAC (code 726002); international students apply directly to UQ (program code 2369).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-physiotherapy-honours-2369",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Physiotherapy (Honours)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 726002). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 96, GCE A Level aggregate 14 or IB Diploma 39.75. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 99.05",
      "Prerequisites: Queensland Year 12 (or equivalent) General English and one of Biology, Chemistry or Physics (Units 3 & 4, grade C)",
      "English language: IELTS Academic 7.0 overall with at least 7 in each band; TOEFL iBT 100 (listening 25, reading 25, writing 27, speaking 23); or PTE Academic 72 with at least 72 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },

  {
    name: "Veterinary Science (Honours)",
    slug: "uq-veterinary-science-honours",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Veterinary Medicine",
    duration: "5 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$89,712 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$11,925 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's five-year Bachelor of Veterinary Science (Honours) is taught at the Gatton campus. UQ describes it as Australia's only internationally accredited undergraduate veterinary program. Students gain hands-on experience in UQ Gatton's Small Animal Hospital, Equine Hospital and Production Animal Service and on external placements, and graduate able to practise on small and large animals in Australia and overseas. Domestic students apply through QTAC (code 736002); international students apply directly to UQ (program code 2378).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-veterinary-science-honours-2378",
    campus: "Gatton",
    programType: "Full-time",
    degree: "Bachelor of Veterinary Science (Honours)",
    intake: "February (Semester 1)",
    applicationDeadline: "International direct applications for 2027 closed on 30 September 2026 (for future intakes, apply by 30 September of the year before entry). Domestic applicants apply through QTAC (code 736002) by 30 October 2026 and must sit the Casper test in the year they apply. Offers are made in two rounds: early to mid October, and late December to early January.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 94, GCE A Level aggregate 13.5 or IB Diploma 38. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value. International applicants are ranked 60% on their adjusted ATAR or selection rank and 40% on their Casper score, and the lowest adjusted rank considered is 94",
      "Domestic applicants are ranked 60% on their adjusted ATAR or selection rank and 40% on their Casper score. The lowest adjusted rank considered is 95, and the lowest Casper score considered is -0.5. The lowest adjusted rank offered a place for Semester 1, 2026 was 98.2",
      "Prerequisites: Queensland Year 12 (or equivalent) General English, Chemistry, Mathematical Methods, and one of Physics or Biology (Units 3 & 4, grade C). Applicants must also sit the online Casper situational judgement test in the year they apply",
      "Immunisation against tetanus and Q fever is mandatory, with evidence required when starting the program",
      "English language: IELTS Academic 7.0 overall with at least 7 in each band; TOEFL iBT 100 (listening 25, reading 25, writing 27, speaking 23); or PTE Academic 72 with at least 72 in every communicative skill",
    ],
  },

  {
    name: "Arts",
    slug: "uq-arts",
    level: "Bachelor",
    universitySlug: "university-of-queensland",
    universityName: "University of Queensland",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,080 a year for a full-time load (16 units). Domestic students in a Commonwealth Supported Place pay a student contribution of about A$14,615 a year (2026 figure; the 2027 amount is not yet published). Actual fees depend on the courses taken and are reviewed every year.",
    description:
      "UQ's Bachelor of Arts offers more than 45 study areas across the humanities, social sciences and languages, so students can shape a degree around their interests while building critical thinking and creativity. Students can study overseas at a partner university for up to a year with credit, and can combine the BA with one of 17 other degrees. Domestic students apply through QTAC (code 707001); international students apply directly to UQ (program code 2000).",
    officialProgramUrl:
      "https://study.uq.edu.au/study-options/programs/bachelor-arts-2000",
    campus: "St Lucia",
    programType: "Full-time",
    degree: "Bachelor of Arts",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to UQ by 30 November 2026 for Semester 1, 2027 or by 31 May 2027 for Semester 2, 2027. International students completing Australian Year 12 or the IB in Australia apply through QTAC instead. Domestic applicants apply through QTAC (QTAC code 707001). For Semester 1, 2027, QTAC applications for the major offer round close on 7 December 2026, and UQ makes offers from 1 October 2026 to 16 February 2027.",
    admissionRequirements: [
      "International applicants (2027 entry): minimum entry score of ATAR 70, GCE A Level aggregate 5 or IB Diploma 26.25. UQ scores A levels as the total of the best 3 (or 2) A Level subjects, or an equivalent A/AS combination, with A*=6, A=5, B=4, C=3, D=2 and E=1 and AS Levels counted at half value",
      "Domestic applicants: the lowest adjusted ATAR/selection rank offered a place for Semester 1, 2026 was 70",
      "Prerequisites: Queensland Year 12 (or equivalent) General English (Units 3 & 4, grade C)",
      "English language: IELTS Academic 6.5 overall with at least 6 in each band; TOEFL iBT 87 (listening 19, reading 19, writing 21, speaking 19); or PTE Academic 64 with at least 60 in every communicative skill",
      "Minimum scores for other qualifications (foundation programs, national school-leaving certificates and more) are listed by country on the UQ program page",
    ],
  },
];
