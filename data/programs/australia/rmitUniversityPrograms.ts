import type { Program } from "@/data/programs";

// RMIT University undergraduate programs for 2027 entry.
// Sources: RMIT program pages (rmit.edu.au/study-with-us), including their international entry calculator and selection task details; the RMIT international and local application dates pages;
// and VTAC 2027 key dates. International fees are 2027 annual amounts in Australian dollars, for a full-time load of 96 credit points.

export const rmitUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "rmit-computer-science",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$45,120 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Computer Science gives a broad, practical grounding in computing: programming, data structures and algorithms, operating systems, networks, databases and software engineering. Much of the learning happens in RMIT's programming bootcamps and studios on real-world projects, and students can steer their electives towards AI, cloud computing, security, game design or data science. The degree is accredited at Professional level by the Australian Computer Society. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-computer-science-bp094",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Computer Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 75.10 (current and recent Year 12 applicants)",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Information Technology",
    slug: "rmit-information-technology",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$45,120 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Information Technology teaches students to design, build, support and troubleshoot systems ranging from websites and business applications to networks. Students can take a major in cyber security, enterprise system development or digital innovation, and choose from 15 IT minors such as cloud computing, data science and AI. Work-integrated learning is built into the degree, alongside RMIT's project-based Bootcamp2Studio teaching model. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-information-technology-bp162",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Information Technology",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): guaranteed entry for 2027 with a selection rank of 70; the lowest selection rank offered a place for 2026 entry was 70.15",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Engineering (Software Engineering) (Honours)",
    slug: "rmit-software-engineering-honours",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,960 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Engineering (Software Engineering) (Honours) combines computer science, engineering and mathematics to design software applications, embedded systems and hardware devices. Students start with computing hardware in the lab and move on to software development, enterprise solutions and user-interface design, with projects and work-integrated learning throughout. The degree is new and RMIT is seeking Engineers Australia accreditation. International students start in February; domestic students can also start in July. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/honours-degrees/bachelor-of-engineering-software-engineering-honours-bh120",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Software Engineering) (Honours)",
    intake: "February (Semester 1), July (Semester 2, domestic students only)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027. International students can start only in February (Semester 1).",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 80.65",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "Accreditation: RMIT states the degree does not yet have Engineers Australia accreditation and will seek it as soon as the accreditation timelines allow",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Business",
    slug: "rmit-business",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$47,040 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Business uses a flexible, project-based structure in the heart of Melbourne's CBD. Students choose from 13 majors and work on real challenges set by partner organisations, including a social impact subject, with the option of an internship. The degree builds critical thinking, problem-solving and interpersonal skills for careers ranging from entrepreneurship to corporate management. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-business-bp343",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Business",
    intake: "February (Semester 1), July (Semester 2), October (Semester 3, international students)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027. International students can also start in Semester 3 (October 2026): the application deadline was 14 October 2026, with an interview, if required, by 10 September 2026.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): guaranteed entry for 2027 with a selection rank of 70; the lowest selection rank offered a place for 2026 entry was 67.00",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL; no other subject prerequisites",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Commerce",
    slug: "rmit-commerce",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$47,040 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Commerce focuses on the technology side of business: how emerging technologies change the exchange of goods and services, and the laws, policy and market dynamics behind them. Students choose from five majors, build data-driven decision-making skills, meet industry professionals through workplace visits and finish with an industry-based project. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-commerce-bp357",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Commerce",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): guaranteed entry for 2027 with a selection rank of 80; the lowest selection rank offered a place for 2026 entry was 80.05",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 80%. RMIT's calculator gives, for example: GCE A Levels at least 10 points from 3 A Level subjects (about CCB), IB Diploma 31, or India's AISSC (CBSE Class 12) with an average of at least 80% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Engineering (Aerospace Engineering) (Honours)",
    slug: "rmit-aerospace-engineering-honours",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,960 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Engineering (Aerospace Engineering) (Honours) trains students to analyse, design and operate aircraft and spacecraft systems. Study covers aerodynamics, aerospace materials and structures, propulsion, thermodynamics, and dynamics and control, with minors in aircraft and spacecraft technologies and sustainability built in. Students gain practical experience through capstone projects, industry placements and the Engineers Without Borders Challenge, and graduates qualify for Engineers Australia membership. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/honours-degrees/bachelor-of-engineering-aerospace-engineering-bh078",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Aerospace Engineering) (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 80.25",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Engineering (Civil and Infrastructure) (Honours)",
    slug: "rmit-civil-infrastructure-engineering-honours",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,960 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Engineering (Civil and Infrastructure) (Honours) is a sustainability-focused degree on planning, designing and building the infrastructure that cities depend on. Students work on design-and-build projects, take part in the Engineers Without Borders Challenge, complete industry capstone and research projects, and can do work placements in Australia or overseas. Graduates qualify for Engineers Australia membership. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/honours-degrees/bachelor-of-engineering-civil-and-infrastructure-bh077",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Civil and Infrastructure) (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 80.45",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Engineering (Mechanical Engineering) (Honours)",
    slug: "rmit-mechanical-engineering-honours",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,960 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Engineering (Mechanical Engineering) (Honours) covers the design, analysis and manufacture of machines and mechanical systems, with minors that let students broaden into areas such as business, mathematics or computing. The degree includes sustainable design-and-build projects, the humanitarian Engineers Without Borders Challenge, industry placements and a final-year capstone project. Graduates qualify for Engineers Australia membership. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/honours-degrees/bachelor-of-engineering-mechanical-engineering-bh070",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Engineering (Mechanical Engineering) (Honours)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 80.05",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, and at least 20 in one of General Mathematics, Mathematical Methods or Specialist Mathematics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Architectural Design",
    slug: "rmit-architectural-design",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Architecture",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$52,800 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Architectural Design is a studio-based degree, taught by practising architects, that builds drawing, 2D and 3D design and communication skills through experimental and practical projects, including live industry briefs. It is the first step towards becoming an architect, usually followed by the Master of Architecture. RMIT ranks first in Australia for Architecture and Built Environment (QS 2026). Entry is by selection task. Domestic students apply through VTAC or directly to RMIT; international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-architectural-design-bp250",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Architectural Design",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. For Semester 1, 2027, RMIT's timely closing date for this program for local applicants (VTAC and direct) and for international applicants applying through VTAC was 2 October 2026, which has passed; late applications are considered only if places remain. For other international applicants, RMIT's international dates require any selection task by 24 February 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): selection is based on a range of criteria rather than an ATAR cut-off; all applicants must submit RMIT's Architectural Design selection task",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL; no other subject prerequisites",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE); the program page sets no higher minimum average because selection is by task. RMIT's calculator gives, for example: GCE A Levels at least 4 points from 2 A Levels plus 1 AS Level (about DE/E), IB Diploma 24, or India's AISSC (CBSE Class 12) with an average of at least 60% in graded academic subjects. International applicants must also submit the selection task with their application, and shortlisted applicants may be interviewed in person or by video call",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Nursing",
    slug: "rmit-nursing",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$45,120 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Nursing, taught at the Bundoora campus, prepares students to register as nurses. It combines theory with simulated practice in modern clinical labs and placements in metropolitan and rural healthcare settings, covering areas such as mental health nursing and Indigenous health. The degree is accredited by the Australian Nursing and Midwifery Accreditation Council (ANMAC) for entry to nursing practice. Domestic students apply through VTAC; international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-nursing-bp032",
    campus: "Bundoora",
    programType: "Full-time",
    degree: "Bachelor of Nursing",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. School leavers start in February (Semester 1); July entry is only for Enrolled Nurses with a Diploma of Nursing.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 72.90",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL; no other subject prerequisites",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "July (Semester 2) entry is only for applicants who have completed an Australian-accredited Diploma of Nursing within the last 10 years and are registered as Enrolled Nurses",
      "Applicants must be 18 by 1 December of their first year, to meet clinical placement requirements",
      "English language (higher standard for nursing registration): IELTS Academic 7.0 overall with 6.5 in writing and 7.0 in the other bands; TOEFL iBT 94 (24 in listening, reading and writing, 23 in speaking); PTE Academic 66 (56 in writing); or OET grade B in each skill (C+ in writing)",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Pharmacy (Honours)",
    slug: "rmit-pharmacy-honours",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Pharmacy",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$49,920 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Pharmacy (Honours) is a selective-entry, research-oriented degree taught at Bundoora. Students get hands-on research experience and work placements in hospital and community pharmacies. The degree prepares them for the one-year internship needed for registration as a pharmacist anywhere in Australia, in community, hospital or industry practice. Domestic students apply through VTAC; international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/honours-degrees/bachelor-of-pharmacy-honours-bh102",
    campus: "Bundoora",
    programType: "Full-time",
    degree: "Bachelor of Pharmacy (Honours)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. This program has a February (Semester 1) intake only.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 81.50",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, at least 25 in one of General Mathematics, Mathematical Methods or Specialist Mathematics, and at least 25 in Chemistry",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language (higher standard for pharmacy): IELTS Academic 7.0 overall with no band below 6.5; TOEFL iBT 94 (reading 19, listening 20, speaking 20, writing 24); or PTE Academic 65 with no communicative skill below 58",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Psychology",
    slug: "rmit-psychology",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$45,120 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Psychology covers the major areas of psychology, including social, developmental, biological and cognitive psychology, personality, psychopathology and research methods, with an emphasis on applied knowledge and work-integrated learning. It is accredited by the Australian Psychology Accreditation Council (APAC). Through RMIT's Bachelor + Honours Psychology package, eligible students can move straight into the Bachelor of Psychology (Honours), the next step towards registration as a psychologist. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-psychology-bp154",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Psychology",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): lowest selection rank offered a place for 2026 entry was 70.05; the Bachelor + Honours Psychology package had a selection rank of 90.00",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL; no other subject prerequisites",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Biomedical Science",
    slug: "rmit-biomedical-science",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Biomedical Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$47,040 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Biomedical Science explains how the human body works and what goes wrong in disease. Core subjects in cell biology, biochemistry, anatomy, physiology, immunology and pathology are taught in purpose-built labs, and the final year focuses on current health and disease research and ends with a capstone. Many graduates go on to postgraduate study in medicine, physiotherapy or dentistry, or to research. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-biomedical-science-bp231",
    campus: "Bundoora",
    programType: "Full-time",
    degree: "Bachelor of Biomedical Science",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): guaranteed entry for 2027 with a selection rank of 70; the lowest selection rank offered a place for 2026 entry was 70.30",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL, at least 20 in Biology or Chemistry, and at least 20 in one of General Mathematics, Mathematical Methods, Specialist Mathematics or Physics",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Laws",
    slug: "rmit-laws",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Law",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$47,040 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's three-year Bachelor of Laws is taught in Melbourne's CBD, close to the courts and legal organisations. It combines a grounding in the Australian legal system with practical skills such as drafting, advocacy, negotiation and advising, has a strong technology focus, and includes an on-site law clinic. It is accredited by the Victorian Legal Admissions Board and, with Practical Legal Training, meets the academic requirements for admission to legal practice. Domestic students apply through VTAC (or directly to RMIT for mid-year entry); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-laws-bp335",
    campus: "Melbourne City",
    programType: "Full-time",
    degree: "Bachelor of Laws",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): guaranteed entry for 2027 with a selection rank of 88; the lowest selection rank offered a place for 2026 entry was 86.00",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL; no other subject prerequisites",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 85%. RMIT's calculator gives, for example: GCE A Levels at least 11 points from 3 A Level subjects (about BBC), IB Diploma 33, or India's AISSC (CBSE Class 12) with an average of at least 85% in graded academic subjects",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },

  {
    name: "Fashion (Design)",
    slug: "rmit-fashion-design",
    level: "Bachelor",
    universitySlug: "rmit-university",
    universityName: "RMIT University",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 tuition for international students: A$48,960 a year for a full-time load (96 credit points). Domestic students get a Commonwealth Supported Place; their student contribution is set each year by the government and depends on the subject bands they take, so RMIT publishes no single annual figure for the program. Fees are reviewed every year.",
    description:
      "RMIT's Bachelor of Fashion (Design) is a hands-on, studio-based degree at the Brunswick campus. Students design and make garments, develop skills in construction, materials and textiles, and build a portfolio that shows their own design identity, with minors in textile design, enterprise or sustainable innovation and real industry projects. RMIT ranks first in Australia for Art & Design (QS 2026). Entry is by selection task. Domestic students apply through VTAC (or directly to RMIT); international students apply directly to RMIT.",
    officialProgramUrl:
      "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-fashion-design-bp328",
    campus: "Brunswick",
    programType: "Full-time",
    degree: "Bachelor of Fashion (Design)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: "International applicants apply directly to RMIT (online or through an RMIT-registered agent). For Semester 1, 2027 the bachelor-degree application deadline is 3 March 2027, with offers to be accepted by 5 March 2027; RMIT recommends applying at least 4 to 8 weeks before classes start to allow time for a student visa. Semester 2, 2027 dates have not been published yet. International students completing Australian Year 12 or the IB in Australia apply through VTAC. Domestic applicants apply through VTAC for Semester 1, 2027: applications opened on 3 August 2026, the timely closing date of 28 September 2026 has passed, late applications close on 30 October 2026, very late applications on 4 December 2026, and applications for January round 2 and later on 13 January 2027. VTAC applicants must also register and submit the selection task by 20 November 2026 for the December and January round 1 offers, 27 November 2026 for January round 2, or 15 January, 22 January or 5 February 2027 for the February rounds, if places remain. Direct applicants submit the selection task by 26 February 2027. International applicants submit theirs by 24 February 2027. Semester 2 (July) entry for domestic students is by direct application to RMIT only, and those applications open in March 2027.",
    admissionRequirements: [
      "Domestic applicants (VCE or equivalent): selection is based on a range of criteria rather than an ATAR cut-off, including a compulsory selection task",
      "Prerequisites (VCE Units 3 and 4, or equivalent): a study score of at least 25 in English (excluding EAL) or 27 in EAL; no other subject prerequisites",
      "International applicants need a qualification RMIT recognises as equivalent to the Victorian Certificate of Education (VCE) with a minimum average of 65%. RMIT's calculator gives, for example: GCE A Levels at least 7 points from 3 A Level subjects (about CDD), IB Diploma 25, or India's AISSC (CBSE Class 12) with an average of at least 65% in graded academic subjects. International applicants must also submit the selection task with their application",
      "English language: IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); PTE Academic 58 with no communicative skill below 50; or C1 Advanced/C2 Proficiency 176 with no skill below 169. At-home and online test versions are not accepted",
      "RMIT's international entry calculator on each program page lists the equivalent minimum results for many other national qualifications and foundation programs",
    ],
  },
];
