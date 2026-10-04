import type { Program } from "../../programs";

// McGill University undergraduate programs (September 2027 entry).
// Sourced from McGill Undergraduate Admissions program pages and admission requirement pages (Ontario, other Canadian provinces, US, IB), the English proficiency page, the 2026-2027 McGill Course Catalogue and McGill Student Accounts 2026-27 tuition tables.

export const mcgillUniversityPrograms: Program[] = [
  {
    name: "Software Engineering (Co-op)",
    slug: "mcgill-software-engineering",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Software Engineering",
    duration: "141-144 credits, including Year 0 foundation courses and three or four mandatory co-op work terms",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 15,749 (about CAD 18,818 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 65,168 (about CAD 69,212 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "McGill's B.Eng. in Software Engineering, offered by the Faculty of Engineering with the School of Computer Science, teaches how to design, build, test and maintain complex software systems across their whole lifecycle. It rests on a base of computer and electrical engineering, mathematics and computer science, leaves room for complementary courses in areas such as management, humanities and law, and includes mandatory paid co-op work terms.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/software-engineering-faculty-engineering",
    campus: "Montreal",
    programType: "Co-op (mandatory)",
    degree: "Bachelor of Engineering (BEng), Co-op in Software Engineering",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Engineering",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, 4U Physics and 4U Chemistry. Typical minimum range: low to mid 90s (math and science courses: low to mid 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math, physics and chemistry. Typical minimum range: low to mid 90s (math and science: low 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math, chemistry and physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 35-38 points out of 42, with 5-6 in each math and science subject and 6 in any SL math or science",
      "US high school: prerequisites: pre-calculus, chemistry and physics. Typical range: B+ to A- unweighted average in grades 11 and 12, A- in each prerequisite math and science, ACT 28-30 or SAT Evidence-Based Reading and Writing 680-700 and Math 690-710. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "mcgill-computer-engineering",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Computer Engineering",
    duration: "About 4 years for students entering from outside Quebec (133-136 credits, including the Year 0 foundation courses)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 15,749 (about CAD 18,818 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 65,168 (about CAD 69,212 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Computer Engineering at McGill sits between computer science and electrical engineering, covering both the hardware and the software of modern computing devices, from phones and networks to medical equipment and aircraft systems. Students work on theory and practice in equipped labs and graduate ready for industry roles in hardware, software, telecommunications or robotics, or for graduate study.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/computer-engineering",
    campus: "Montreal",
    degree: "Bachelor of Engineering (BEng) in Computer Engineering",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Engineering",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, 4U Physics and 4U Chemistry. Typical minimum range: low to mid 90s (math and science courses: low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math, physics and chemistry. Typical minimum range: low to high 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math, chemistry and physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 35-38 points out of 42, with 5-6 in each math and science subject and 6 in any SL math or science",
      "US high school: prerequisites: pre-calculus, chemistry and physics. Typical range: A- to A unweighted average in each of grades 11 and 12, A- in each prerequisite math and science, ACT 30-31 or SAT Evidence-Based Reading and Writing 700-720 and Math 700-720. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "mcgill-electrical-engineering",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Electrical Engineering",
    duration: "About 4 years for students entering from outside Quebec (134-137 credits, including the Year 0 foundation courses)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 15,749 (about CAD 18,818 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 65,168 (about CAD 69,212 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "McGill's Electrical Engineering degree gives a broad grounding in fast-moving fields such as computer technology, microelectronics, automation and robotics, telecommunications and power systems. Students learn to design, test and troubleshoot electrical systems at every scale, from industrial installations to nanoscale devices, write and debug software, and shape the degree to their interests through technical electives.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/electrical-engineering-faculty-engineering",
    campus: "Montreal",
    degree: "Bachelor of Engineering (BEng) in Electrical Engineering",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Engineering",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, 4U Physics and 4U Chemistry. Typical minimum range: mid to high 90s (math and science courses: mid 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math, physics and chemistry. Typical minimum range: mid to high 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math, chemistry and physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 35-38 points out of 42, with 5-6 in each math and science subject and 6 in any SL math or science",
      "US high school: prerequisites: pre-calculus, chemistry and physics. Typical range: A- to A unweighted average in each of grades 11 and 12, A- in each prerequisite math and science, ACT 30-31 or SAT Evidence-Based Reading and Writing 700-720 and Math 700-720. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "mcgill-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "About 4 years for students entering from outside Quebec (142 credits, including the Year 0 foundation courses)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 15,749 (about CAD 18,818 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 65,168 (about CAD 69,212 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Mechanical Engineering at McGill covers how mechanical systems are conceived, designed, built and run, from bicycles to spacecraft, through design and manufacturing, solid mechanics, thermodynamics, fluid mechanics, dynamics, control and mechatronics. Students can focus on design, aeronautics or mechatronics, preparing for careers in aerospace, energy, manufacturing, robotics and transportation.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/mechanical-engineering",
    campus: "Montreal",
    degree: "Bachelor of Engineering (BEng) in Mechanical Engineering",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Engineering",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, 4U Physics and 4U Chemistry. Typical minimum range: mid to high 90s (math and science courses: mid 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math, physics and chemistry. Typical minimum range: high 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math, chemistry and physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 38-42 points out of 42, with 6 in each math and science subject",
      "US high school: prerequisites: pre-calculus, chemistry and physics. Typical range: A- to A unweighted average in each of grades 11 and 12, A- in each prerequisite math and science, ACT 30-31 or SAT Evidence-Based Reading and Writing 680-720 and Math 700-720. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Civil Engineering",
    slug: "mcgill-civil-engineering",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Civil Engineering",
    duration: "About 4 years for students entering from outside Quebec (139 credits, including the Year 0 foundation courses)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 15,749 (about CAD 18,818 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 65,168 (about CAD 69,212 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Civil Engineering at McGill prepares students to design and build sustainable, resilient public infrastructure such as bridges, roads and water systems. Core subjects include solid and fluid mechanics, soil behaviour, structural analysis, environmental and transportation systems and water resources, taught through project-based learning with real-world applications. Graduates work in construction, structural, environmental, geotechnical and transportation engineering.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/civil-engineering",
    campus: "Montreal",
    degree: "Bachelor of Engineering (BEng) in Civil Engineering",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Engineering",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, 4U Physics and 4U Chemistry. Typical minimum range: low to mid 90s (math and science courses: low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math, physics and chemistry. Typical minimum range: low to mid 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math, chemistry and physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 35-38 points out of 42, with 5-6 in each math and science subject and 6 in any SL math or science",
      "US high school: prerequisites: pre-calculus, chemistry and physics. Typical range: A- to A unweighted average in each of grades 11 and 12, A- in each prerequisite math and science, ACT 30-31 or SAT Evidence-Based Reading and Writing 700-720 and Math 700-720. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Bioengineering",
    slug: "mcgill-bioengineering",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Biomedical Engineering",
    duration: "About 4 years for students entering from outside Quebec (142-143 credits, including the Year 0 foundation courses)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 15,749 (about CAD 18,818 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 65,168 (about CAD 69,212 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "McGill's Bioengineering degree, one of few undergraduate programs of its kind in Canada, applies engineering, biology, physical sciences and mathematics to biological and medical problems. Topics include biomaterials and tissue engineering, medical devices and sensing, imaging, synthetic biology and biomanufacturing, leading to careers in medical devices, pharmaceuticals, healthcare and biotechnology or to graduate study.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/bioengineering",
    campus: "Montreal",
    degree: "Bachelor of Engineering (BEng) in Bioengineering",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Engineering",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, 4U Physics and 4U Chemistry. Typical minimum range: mid to high 90s (math and science courses: mid 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math, physics and chemistry. Typical minimum range: mid to high 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math, chemistry and physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 39-41 points out of 42, with 6 in each math and science subject",
      "US high school: prerequisites: pre-calculus, chemistry and physics. Typical range: A- to A unweighted average in grades 11 and 12, A- in each prerequisite math and science, ACT 30-31 or SAT Evidence-Based Reading and Writing 680-700 and Math 700-720. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Computer Science",
    slug: "mcgill-computer-science",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit freshman year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,563 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 64,786 (about CAD 68,338 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Computer Science at McGill's School of Computer Science, where an early internet search engine was built in 1987, ranges from theory to practice: algorithms, programming languages, software engineering, databases, operating systems, artificial intelligence, computer vision, robotics, game development and computational biology. The standard major leaves room for a minor, and students can try out careers through paid internship years and industry events.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/computer-science-faculty-science",
    campus: "Montreal",
    degree: "Bachelor of Science (BSc), Major in Computer Science",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Science, Physical, Earth, Math & Computer Sciences group",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, and two of 4U Biology, Chemistry or Physics. Typical minimum range: low 90s (math and science courses: high 80s to low 90s; McGill lists these as last year's cut-offs)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math and two of biology, chemistry or physics. Typical minimum range: low 90s (math and science: high 80s to low 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math and two of biology, chemistry or physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 35-38 points out of 42, with 5-6 in each math and science subject including at least one 6 (6 if Math AA is taken at SL)",
      "US high school: prerequisites: pre-calculus and two of biology, chemistry or physics. Typical range: B+ to A- unweighted average in grades 11 and 12, A- in each prerequisite math and science, ACT 29-31 or SAT Evidence-Based Reading and Writing 690-700 and Math 690-710. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Biology",
    slug: "mcgill-biology",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Biology",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit freshman year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,563 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 64,786 (about CAD 68,338 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "McGill's Biology Major studies life from molecules and cells to organisms and ecosystems, including development, behaviour and evolution. After introductory courses, students can focus on molecular, cellular and developmental biology, on conservation, ecology and evolution, or on neurobiology and behaviour. Classes get smaller in upper years, and students can earn credit for independent research projects in labs or in the field.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/biology",
    campus: "Montreal",
    degree: "Bachelor of Science (BSc), Major in Biology",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Science, Biological, Biomedical & Life Sciences group",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, and two of 4U Biology, Chemistry or Physics. Typical minimum range: low to mid 90s (math and science courses: low 90s; McGill lists these as last year's cut-offs)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math and two of biology, chemistry or physics. Typical minimum range: low to mid 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math and two of biology, chemistry or physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 36-39 points out of 42, with 6 in each math and science subject (5-6 if taken at HL)",
      "US high school: prerequisites: pre-calculus and two of biology, chemistry or physics. Typical range: B+ to A- unweighted average in grades 11 and 12, A- in each prerequisite math and science, ACT 29-31 or SAT Evidence-Based Reading and Writing 690-700 and Math 690-710. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Physiology",
    slug: "mcgill-physiology",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Physiology",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit freshman year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,563 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 64,786 (about CAD 68,338 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Physiology at McGill examines how living organisms function, from interactions between molecules to how organs work in the human body, with the aim of finding new ways to prevent and treat disease. The major combines in-depth physiology with core biomedical sciences such as molecular and cell biology and biochemistry, with topics including endocrinology, neurophysiology and exercise physiology. Students formally enter the major in second year (U2) after the required first-year courses.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/physiology",
    campus: "Montreal",
    degree: "Bachelor of Science (BSc), Major in Physiology",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Science, Biological, Biomedical & Life Sciences group",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors, and two of 4U Biology, Chemistry or Physics. Typical minimum range: low to mid 90s (math and science courses: low 90s; McGill lists these as last year's cut-offs)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math and two of biology, chemistry or physics. Typical minimum range: low to mid 90s (math and science: low to mid 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math and two of biology, chemistry or physics with at least one at Higher Level (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 36-39 points out of 42, with 6 in each math and science subject (5-6 if taken at HL)",
      "US high school: prerequisites: pre-calculus and two of biology, chemistry or physics. Typical range: B+ to A- unweighted average in grades 11 and 12, A- in each prerequisite math and science, ACT 29-31 or SAT Evidence-Based Reading and Writing 690-700 and Math 690-710. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Kinesiology",
    slug: "mcgill-kinesiology",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit foundation year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,524 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 31,837 (about CAD 35,350 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "McGill's B.Sc. in Kinesiology, offered by the Faculty of Education's Department of Kinesiology and Physical Education, studies human movement, often called exercise or sport science. It mixes biological and social sciences, including anatomy, physiology, ergonomics, exercise psychology, health and nutrition and adapted physical activity. Internships are possible from second year, and research-minded students can move into the Honours stream after year two.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/kinesiology",
    campus: "Montreal",
    degree: "Bachelor of Science in Kinesiology (BSc(Kinesiology))",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Education",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French, 4U Calculus and Vectors and two 4U sciences. Typical minimum range: mid 80s to mid 90s (math and science courses: mid 80s to low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French, Grade 12 pre-calculus or calculus math and two sciences. Typical minimum range: mid 80s to low 90s (math and science: mid 80s to low 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: math and two sciences (math must be Analysis and Approaches HL/SL or Applications and Interpretation HL). Typical minimum range: 30-31 points out of 42, with 5 in each math and science subject",
      "US high school: prerequisites: pre-calculus and two sciences. Typical range: B+ unweighted average in grades 11 and 12, ACT 26-28 or SAT Evidence-Based Reading and Writing 670-680 and Math 610-630. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Finance (BCom)",
    slug: "mcgill-finance",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Finance",
    duration: "4 years for students entering from outside Quebec (120 credits)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 16,427 (about CAD 19,101 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 71,687 (about CAD 75,336 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "The Finance Major in McGill's Desautels Faculty of Management builds on the B.Com. management core with finance theory, financial institutions, investment analysis and risk management. Students start with corporate finance and investments, then move to topics such as trading simulations, mergers and acquisitions, pensions, sustainable finance and behavioural finance, preparing for banking, investment and corporate finance roles. All B.Com. students complete an experiential learning course.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/finance",
    campus: "Montreal",
    degree: "Bachelor of Commerce (BCom), Major in Finance",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Desautels Faculty of Management (Bachelor of Commerce)",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French and 4U Calculus and Vectors. Typical minimum range: mid 90s (math: low to mid 90s; English: high 80s to low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French and Grade 12 pre-calculus or calculus math. Typical minimum range: mid 90s (math: low to mid 90s; English: high 80s to low 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: Mathematics Analysis and Approaches HL or SL, or Applications and Interpretation HL, at 6-7. Typical minimum range: 35-38 points out of 42, with math at 5 or higher at HL or 6 or higher in SL Analysis and Approaches",
      "US high school: prerequisites: English and pre-calculus. Typical range: B+ to A- unweighted average in grades 11 and 12, B+ in math and A- in English, ACT 29-31 or SAT Evidence-Based Reading and Writing 690-700 and Math 690-710. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 100 (5.0 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 130, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Accounting (BCom)",
    slug: "mcgill-accounting",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Accounting",
    duration: "4 years for students entering from outside Quebec (120 credits)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 16,427 (about CAD 19,101 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 71,687 (about CAD 75,336 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition per credit is guaranteed for the length of the program; international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "The Accounting Major at McGill's Desautels Faculty of Management teaches how organizations prepare, interpret and use financial and managerial information. Courses cover financial and managerial accounting, auditing and taxation, along with tools for working with large data sets, preparing students for professional accounting careers and for finance roles. All B.Com. students complete an experiential learning course.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/accounting",
    campus: "Montreal",
    degree: "Bachelor of Commerce (BCom), Major in Accounting",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Desautels Faculty of Management (Bachelor of Commerce)",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French and 4U Calculus and Vectors. Typical minimum range: mid 90s (math: low to mid 90s; English: high 80s to low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French and Grade 12 pre-calculus or calculus math. Typical minimum range: mid 90s (math: low to mid 90s; English: high 80s to low 90s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: Mathematics Analysis and Approaches HL or SL, or Applications and Interpretation HL, at 6-7. Typical minimum range: 35-38 points out of 42, with math at 5 or higher at HL or 6 or higher in SL Analysis and Approaches",
      "US high school: prerequisites: English and pre-calculus. Typical range: B+ to A- unweighted average in grades 11 and 12, B+ in math and A- in English, ACT 29-31 or SAT Evidence-Based Reading and Writing 690-700 and Math 690-710. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 100 (5.0 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 130, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Economics",
    slug: "mcgill-economics",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Economics",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit freshman year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,595 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 54,000 (about CAD 57,584 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Economics at McGill's Faculty of Arts looks at how economies work at home and globally: what drives consumers and prices, exchange rates, interest rates and inflation, and how public policy and world events affect markets. The flexible major lets students follow interests such as development, environmental economics, international trade and finance, labour economics, money and banking or public finance, with an Honours option for those wanting more mathematics.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/economics-faculty-arts",
    campus: "Montreal",
    degree: "Bachelor of Arts (BA), Major Concentration in Economics",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Arts",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French. Typical minimum range: high 80s to low 90s (English or French courses: high 80s to low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French. Typical minimum range: high 80s to low 90s (English or French: mid to high 80s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: no specific prerequisite subjects. Typical minimum range: 33-36 points out of 42",
      "US high school: prerequisites: English. Typical range: B+ unweighted average in grades 11 and 12, B+ in each English course, ACT 27-29 (English and Reading subscores 26 or higher) or SAT Evidence-Based Reading and Writing 670-700 and Math 610-640. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Political Science",
    slug: "mcgill-political-science",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Political Science",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit freshman year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,595 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 54,000 (about CAD 57,584 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "Political Science at McGill studies governments, public policy, political systems and political behaviour. The 36-credit major spans four fields, comparative politics, international relations, Canadian politics and political theory, plus empirical methods. It suits students interested in how people govern themselves and how policy is made, and leads to careers in government, diplomacy, policy analysis, law and business.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/political-science",
    campus: "Montreal",
    degree: "Bachelor of Arts (BA), Major Concentration in Political Science",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Arts",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French. Typical minimum range: high 80s to low 90s (English or French courses: high 80s to low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French. Typical minimum range: high 80s to low 90s (English or French: mid to high 80s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: no specific prerequisite subjects. Typical minimum range: 33-36 points out of 42",
      "US high school: prerequisites: English. Typical range: B+ unweighted average in grades 11 and 12, B+ in each English course, ACT 27-29 (English and Reading subscores 26 or higher) or SAT Evidence-Based Reading and Writing 670-700 and Math 610-640. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

  {
    name: "Psychology (BA)",
    slug: "mcgill-psychology",
    level: "Bachelor",
    universitySlug: "mcgill-university",
    universityName: "McGill University",
    country: "Canada",
    field: "Psychology",
    duration: "4 years for students entering from outside Quebec (120 credits, including a 30-credit freshman year)",
    language: "English",
    tuitionNote:
      "McGill's 2026-27 fee tables for new students list annual tuition of about CAD 12,986 (about CAD 15,595 with fees) for Canadian citizens and permanent residents from outside Quebec, and about CAD 54,000 (about CAD 57,584 with fees) for international students. Quebec residents pay lower Quebec rates. For out-of-province students in this degree, tuition is expected to rise each year (McGill estimates about 3%, set by the Quebec government); international students get guaranteed per-credit tuition for the program. Rates for fall 2027 entrants are not yet published.",
    description:
      "McGill's B.A. in Psychology treats psychology as the science of mind and behaviour, drawing on both the social and the biological sciences. The 36-credit major covers the core areas of psychological science and more advanced specialized topics, with optional research courses. McGill notes that the degree alone is not a professional qualification, and students aiming for graduate study and practice are advised to take Honours, or the major with a Behavioural Science minor.",
    officialProgramUrl:
      "https://www.mcgill.ca/undergraduate-admissions/program/psychology-faculty-arts",
    campus: "Montreal",
    degree: "Bachelor of Arts (BA), Major Concentration in Psychology",
    intake: "September",
    applicationDeadline: "September 2027 entry: Canadian high school applicants (including Ontario) apply by February 1, 2027, with supporting documents due May 4, 2027. US high school and IB/international applicants apply by January 15, 2027, with supporting documents due March 1, 2027. Students at Canadian and US schools also self-report grades during set periods",
    admissionRequirements: [
      "Apply directly to McGill through its online application, which opens October 1. For this program you apply to the Faculty of Arts",
      "Ontario: OSSD, assessed on a Top 6 average of Grade 12 4U/4M courses (at least four at 4U/DU level, at most two 4M), including the prerequisites: 4U English or French. Typical minimum range: high 80s to low 90s (English or French courses: high 80s to low 90s)",
      "Other Canadian provinces: assessed on a Top 5 average of academic Grade 12 courses, including the prerequisites: Grade 12 English or French. Typical minimum range: high 80s to low 90s (English or French: mid to high 80s)",
      "IB Diploma: McGill generally expects the Diploma with 5 or higher in each Higher and Standard Level subject. Prerequisites: no specific prerequisite subjects. Typical minimum range: 33-36 points out of 42",
      "US high school: prerequisites: English. Typical range: B+ unweighted average in grades 11 and 12, B+ in each English course, ACT 27-29 (English and Reading subscores 26 or higher) or SAT Evidence-Based Reading and Writing 670-700 and Math 610-640. Submitting ACT or SAT scores is optional for fall 2027 applicants",
      "McGill states that the B.A. Psychology program requires a separate application",
      "McGill publishes these as typical minimum admission ranges. Admission is competitive and limited by space, so cut-offs change from year to year, and meeting them does not guarantee admission",
      "English proficiency: no test is needed after four consecutive years of study in an English-primary country such as Canada or the US, with IB English A at 5 or higher, or with other qualifications on McGill's list. Otherwise McGill's minimums for this program are TOEFL iBT 90 (4.5 on the new scale), IELTS Academic 6.5 (each band 6.0), CAEL 70 (each part 60), Duolingo 125, PTE Academic 65 (each part 60), or Cambridge C1 Advanced grade B / C2 Proficiency grade C",
    ],
  },

];
