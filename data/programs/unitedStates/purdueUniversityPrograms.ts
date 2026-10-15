import type { Program } from "../../programs";

// Purdue University (West Lafayette, Indiana): 15 undergraduate programs for Fall 2027 entry.
// Sources: Purdue Undergraduate Admissions (major pages, first-year deadlines, first-year criteria, English proficiency, international requirements, closed programs, counselor updates),
// the Office of the Bursar's 2026-27 undergraduate tuition and fee tables, the College of Engineering and School of Nursing pages and the Daniels School of Business (viewed October 16, 2026). Costs are in US dollars.

export const purdueUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "purdue-computer-science",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's Department of Computer Science was the first computer science department in the United States. The BS blends theory and practice across programming, algorithms, systems, data science, software engineering and cybersecurity. Students pick a concentration, with tracks including machine intelligence, security, software engineering, systems software, database and information systems, computer graphics and visualization, algorithmic foundations and programming languages, plus honours versions. Electives reach into areas like AI, robotics and computational biology. Purdue lists careers such as software engineer, data scientist, cybersecurity analyst and AI developer.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/computer-science/",
    campus: "West Lafayette (also offered at Purdue's Indianapolis location)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Science, with a chosen concentration",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Science (Department of Computer Science). Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Data Science",
    slug: "purdue-data-science",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Data Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's Data Science major sits between computer science and statistics. Students learn statistical analysis, machine learning and computational thinking, and how to draw insight from large, messy datasets. Early courses overlap with computer science, and students later choose an emphasis in computer science, mathematics or applied statistics. Electives let them aim the degree at fields such as business, healthcare, security, economics or sustainability. Purdue lists careers including data scientist, machine learning engineer, quantitative researcher and business intelligence analyst.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/data-science/",
    campus: "West Lafayette (also offered at Purdue's Indianapolis location)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Data Science",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: College of Science. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "purdue-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Artificial Intelligence",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "The College of Science's BS in Artificial Intelligence teaches how to build and understand AI systems that learn from data, reason, correct themselves and make decisions. Required courses include AI basics, data structures and algorithms for data science and AI, data mining and machine learning, algorithm analysis and an introduction to AI, alongside maths, statistics, cognitive psychology and ethics. Students finish with an AI capstone, research project or AI Forge project. The program also explores links between AI, neuroscience and psychology. Major courses need a grade of C or better.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/artificial-intelligence-science/",
    campus: "West Lafayette (also offered at Purdue's Indianapolis location)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Artificial Intelligence (College of Science)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: College of Science. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Aeronautical and Astronautical Engineering",
    slug: "purdue-aeronautical-astronautical-engineering",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Aerospace Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's School of Aeronautics and Astronautics is the largest aerospace engineering program in the US, and U.S. News ranked its undergraduate program No. 3 in 2025. After First-Year Engineering, the second year covers statics, dynamics, structures and thermodynamics with an introduction to aircraft and spacecraft design. Third year covers aerodynamics, propulsion, structures, dynamics and control, with aeronautical or astronautical versions of some courses. Design courses bring it together into complete flight systems, and students have access to what Purdue calls the world's largest academic propulsion lab. Purdue reports an average starting salary of US$82,272.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/aeronautical-and-astronautical-engineering/",
    campus: "West Lafayette",
    programType: "Full-time (optional co-op and internships)",
    degree: "Bachelor of Science in Aeronautical and Astronautical Engineering (BSAAE)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Engineering. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "At West Lafayette you apply to First-Year Engineering, not directly to Aeronautical and Astronautical Engineering. Everyone completes the common first-year engineering curriculum (math, chemistry, physics, programming, communication and introductory engineering courses) and then moves into a specialty major in the second year",
      "Engineering preparation: chemistry is expected, and the review gives particular weight to calculus (if offered) and four years of lab science including biology, chemistry and physics (if offered)",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "purdue-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue calls its mechanical engineering program the largest in the US, and U.S. News ranked it No. 4 for undergraduates in 2025. It is the broadest engineering major, covering physics, electronics, 3D printing, fluid mechanics, heat transfer and controls. Students can join motorsports and rocketry teams, do research or study abroad, and internships and co-ops are common. Purdue reports an average starting salary of US$80,861 within six months of graduating.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/mechanical-engineering/",
    campus: "West Lafayette (also offered with direct admission at Purdue's Indianapolis location)",
    programType: "Full-time (optional co-op and internships)",
    degree: "Bachelor of Science in Mechanical Engineering (BSME)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Engineering. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "At West Lafayette you apply to First-Year Engineering, not directly to Mechanical Engineering. Everyone completes the common first-year engineering curriculum (math, chemistry, physics, programming, communication and introductory engineering courses) and then moves into a specialty major in the second year. At the Indianapolis location students are admitted directly to the major instead",
      "Engineering preparation: chemistry is expected, and the review gives particular weight to calculus (if offered) and four years of lab science including biology, chemistry and physics (if offered)",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "purdue-electrical-engineering",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "The BS in Electrical Engineering is offered by the Elmore Family School of Electrical and Computer Engineering, whose history goes back to 1888. Students learn to design and operate the electrical and electronic systems behind autonomous vehicles, biomedical devices, robotics, AI hardware, power grids and communications, from microcontrollers and lasers to smart energy systems. Hands-on labs and a choice of specialisations let students shape the degree. Purdue reports an average starting salary of US$82,685, and employers include Apple, Boeing, Nvidia and Tesla.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/electrical-engineering/",
    campus: "West Lafayette (also offered with direct admission at Purdue's Indianapolis location)",
    programType: "Full-time (optional co-op and internships)",
    degree: "Bachelor of Science in Electrical Engineering (BSEE)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Engineering. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "At West Lafayette you apply to First-Year Engineering, not directly to Electrical Engineering. Everyone completes the common first-year engineering curriculum (math, chemistry, physics, programming, communication and introductory engineering courses) and then moves into a specialty major in the second year. At the Indianapolis location students are admitted directly to the major instead",
      "Engineering preparation: chemistry is expected, and the review gives particular weight to calculus (if offered) and four years of lab science including biology, chemistry and physics (if offered)",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "purdue-computer-engineering",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Computer Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's BS in Computer Engineering comes from the Elmore Family School of Electrical and Computer Engineering. Computer engineering is closely related to electrical engineering, but the school says the two fields focus on different parts of electronics and technology and lead to different careers, with computer engineering centred on computing systems. The school says it offers the same degree at West Lafayette and Indianapolis. Its 120-plus faculty publish hundreds of research papers each year.",
    officialProgramUrl:
      "https://engineering.purdue.edu/ECE/Academics/Undergraduates",
    campus: "West Lafayette (also offered with direct admission at Purdue's Indianapolis location)",
    programType: "Full-time (optional co-op and internships)",
    degree: "Bachelor of Science in Computer Engineering (BSCmpE)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Engineering. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "At West Lafayette you apply to First-Year Engineering, not directly to Computer Engineering. Everyone completes the common first-year engineering curriculum (math, chemistry, physics, programming, communication and introductory engineering courses) and then moves into a specialty major in the second year. At the Indianapolis location students are admitted directly to the major instead",
      "Engineering preparation: chemistry is expected, and the review gives particular weight to calculus (if offered) and four years of lab science including biology, chemistry and physics (if offered)",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Industrial Engineering",
    slug: "purdue-industrial-engineering",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's Edwardson School of Industrial Engineering was ranked No. 2 for undergraduates by U.S. News in 2025. Industrial engineers design and improve systems that combine people, machines, materials and information, such as supply chains, factory production lines and hospital patient flow. The degree uses math, science and business to cut costs and improve efficiency and safety, and graduates work in manufacturing, technology, healthcare, consulting and government. Purdue reports an average starting salary of US$80,690.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/industrial-engineering/",
    campus: "West Lafayette (an Indianapolis 2+2 route moves to West Lafayette for the last two years)",
    programType: "Full-time (optional co-op and internships)",
    degree: "Bachelor of Science in Industrial Engineering (BSIE)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Engineering. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "At West Lafayette you apply to First-Year Engineering, not directly to Industrial Engineering. Everyone completes the common first-year engineering curriculum (math, chemistry, physics, programming, communication and introductory engineering courses) and then moves into a specialty major in the second year. A 2+2 option admits students directly in Indianapolis for the first two years, followed by two years at West Lafayette",
      "Engineering preparation: chemistry is expected, and the review gives particular weight to calculus (if offered) and four years of lab science including biology, chemistry and physics (if offered)",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Chemical Engineering",
    slug: "purdue-chemical-engineering",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$12,042 for Indiana residents, US$32,844 for nonresident US students and US$36,154 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at Purdue's Computer Science/Data Science/Engineering differential rate (US$2,050 a year for Indiana residents and US$4,050 for nonresident and international students). Purdue's trustees set the higher nonresident and international differential for students who first enrol in fall 2026 or later. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,636 (resident), US$53,438 (nonresident) and US$56,748 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "In the Davidson School of Chemical Engineering, students apply chemistry, physics, biology and math to design processes that turn raw materials into products such as fuels, pharmaceuticals, food and consumer goods, scaling them from the lab to full production. The program includes hands-on lab work, internships and an optional co-op that alternates study and paid work semesters (it adds about a year and earns a transcript certificate). Purdue reports an average starting salary of US$83,204 and an 87% placement rate in industry or graduate school.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/chemical-engineering/",
    campus: "West Lafayette",
    programType: "Full-time (optional co-op and internships)",
    degree: "Bachelor of Science in Chemical Engineering (BSChE)",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Engineering. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "At West Lafayette you apply to First-Year Engineering, not directly to Chemical Engineering. Everyone completes the common first-year engineering curriculum (math, chemistry, physics, programming, communication and introductory engineering courses) and then moves into a specialty major in the second year",
      "Engineering preparation: chemistry is expected, and the review gives particular weight to calculus (if offered) and four years of lab science including biology, chemistry and physics (if offered)",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Finance",
    slug: "purdue-finance",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Finance",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$11,428 for Indiana residents, US$32,230 for nonresident US students and US$35,540 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at the Daniels School of Business differential rate (US$1,436 a year for Indiana residents and US$3,436 for nonresident and international students). The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,022 (resident), US$52,824 (nonresident) and US$56,134 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Finance is the largest major in Purdue's Mitch Daniels School of Business. Students learn to read financial statements, value investments, manage risk and analyse markets, in a curriculum that also draws on economics, psychology, data analysis and history. Advanced courses cover investments, corporate finance, derivatives, fixed income, FinTech, financial data analytics, venture capital and M&A. A selective Investment Banking Academy started in fall 2025, and students take part in case competitions, mentoring programmes and hands-on investment management practice. The school reports an average full-time starting salary of about US$70,000 for recent finance graduates.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/finance/",
    campus: "West Lafayette",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Finance",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: Mitch Daniels School of Business. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "You apply to the Finance (pre) major. Calculus in high school is encouraged",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Business Analytics and Information Management",
    slug: "purdue-business-analytics-information-management",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Business Analytics",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$11,428 for Indiana residents, US$32,230 for nonresident US students and US$35,540 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at the Daniels School of Business differential rate (US$1,436 a year for Indiana residents and US$3,436 for nonresident and international students). The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$32,022 (resident), US$52,824 (nonresident) and US$56,134 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's Business Analytics and Information Management (BAIM) major mixes accounting, information systems and advanced analytics. Students learn to gather, analyse and interpret data and explain the results clearly to support business decisions. It draws on the Daniels School's strength in quantitative methods and management information systems. Purdue lists roles such as business analyst, data analyst, database manager, operations analyst and supply chain analyst.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/business-analytics-and-information-management/",
    campus: "West Lafayette (also offered at Purdue's Indianapolis location)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Business Analytics and Information Management",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: Mitch Daniels School of Business. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "You apply to the Business Analytics and Information Management (pre) major. Calculus in high school is encouraged",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Nursing",
    slug: "purdue-nursing",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Nursing",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$10,990 for Indiana residents, US$29,792 for nonresident US students and US$33,102 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at the BSN differential rate (US$998 a year). The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$31,584 (resident), US$50,386 (nonresident) and US$53,696 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's four-year, direct-admit BSN prepares students to become registered nurses. It combines classroom study, practice in the Nursing Center for Education and Simulation (with simulators that respond to treatment) and clinical placements, including at the School of Nursing's Family Health Clinic, hospitals, clinics and long-term care facilities. The first year includes anatomy and physiology, chemistry, psychology and introductory nursing courses.",
    officialProgramUrl:
      "https://hhs.purdue.edu/undergraduate-majors/nursing-bachelor-of-science/",
    campus: "West Lafayette",
    programType: "Full-time with clinical placements",
    degree: "Bachelor of Science in Nursing (BSN)",
    intake: "Fall (August) only. First-year entry for spring 2027 is closed",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants. For this competitive major, 1 November 2026 is a priority deadline: applications after that date are only considered if space remains, so check Purdue's Closed Programs page first",
    admissionRequirements: [
      "College: College of Health and Human Sciences (School of Nursing). Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Nursing is a direct-admit major with limited space. Purdue strongly advises applying early in senior year and no later than 1 November. High school science must include at least one year of chemistry and one year of biology",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Cybersecurity",
    slug: "purdue-cybersecurity",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Cybersecurity",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$10,564 for Indiana residents, US$29,366 for nonresident US students and US$32,676 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at the Polytechnic Institute differential rate (US$572 a year). The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$31,158 (resident), US$49,960 (nonresident) and US$53,270 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "The Purdue Polytechnic Institute's Cybersecurity major teaches how to protect systems and data. Topics include network defence, digital forensics, risk assessment, technical security controls, incident response, vulnerability analysis and applied cryptography, as well as cybercrime, cyber law and ethics. The program is hands-on, with advanced labs at West Lafayette and the same curriculum in Indianapolis, where there are more internship opportunities.",
    officialProgramUrl:
      "https://polytechnic.purdue.edu/degrees/cybersecurity",
    campus: "West Lafayette (also offered at Purdue's Indianapolis location)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Cybersecurity",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: Purdue Polytechnic Institute. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Computer and Information Technology",
    slug: "purdue-computer-information-technology",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Information Technology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$10,564 for Indiana residents, US$29,366 for nonresident US students and US$32,676 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. This major is billed at the Polytechnic Institute differential rate (US$572 a year). The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$31,158 (resident), US$49,960 (nonresident) and US$53,270 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue Polytechnic's Computer and Information Technology (CIT) major teaches students to plan, build, manage and secure computer networks, and to work with databases, information systems and applications. Students design and run local and wide-area networks in labs. The program also builds communication skills for working with users and business leaders. Purdue lists careers including network engineer, IT analyst, data administrator, software developer and project manager, with employers such as Microsoft, JPMorgan Chase and ExxonMobil.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/computer-and-information-technology/",
    campus: "West Lafayette (also offered at Purdue's Indianapolis location)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer and Information Technology",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: Purdue Polytechnic Institute. Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },

  {
    name: "Biology",
    slug: "purdue-biology",
    level: "Bachelor",
    universitySlug: "purdue-university",
    universityName: "Purdue University",
    country: "United States",
    field: "Biology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees at the West Lafayette campus (flat rate for 8+ credit hours, two semesters): US$9,992 for Indiana residents, US$28,794 for nonresident US students and US$32,104 for international students, who pay a separate international student tuition of US$3,310 a year on top of nonresident tuition. The Bursar's 2026-27 budget adds estimated housing and food of US$16,734, books and course materials of US$1,090, transport of US$570 and miscellaneous costs of US$2,200, giving an estimated cost of attendance of about US$30,586 (resident), US$49,388 (nonresident) and US$52,698 (international). Students who fly home will have higher travel costs. Purdue has frozen main-campus tuition and mandatory fees for 14 years in a row through 2026-27, but 2027-28 rates for students entering in fall 2027 are not yet published. Purdue's Boiler Gold Grant covers tuition, fees and books for Indiana students from families earning under US$80,000, and federal aid (FAFSA) is only for US citizens and eligible non-citizens",
    description:
      "Purdue's Biology major in the College of Science gives a broad base in the life sciences, from genetics and ecology to cell biology and neuroscience. The plan of study is flexible, so students can shape it for research, biotechnology or professional school. Many graduates go on to medicine, dentistry, veterinary medicine or graduate research, and others work in biotech, pharmaceuticals, environmental science or teaching. Purdue says it has more than 400 research labs.",
    officialProgramUrl:
      "https://admissions.purdue.edu/majors/biology/",
    campus: "West Lafayette",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biology",
    intake: "Fall (August). Spring 2027 first-year entry is closed for many majors, so check Purdue's Closed Programs page",
    applicationDeadline: "Fall 2027 entry (Common App, US$60 non-refundable fee): the application opens 1 August 2026. Early Action (non-binding) closes 1 November 2026 and is also the deadline for merit scholarships and the John Martinson Honors College; Early Action decisions are released on 15 January 2027. Regular Decision closes 15 January 2027, with decisions by 31 March 2027. Purdue does not offer Early Decision. Purdue says admission is much more competitive for later applicants",
    admissionRequirements: [
      "College: College of Science (Department of Biological Sciences). Purdue admits students to a specific major, and applications are reviewed holistically. Factors include grades in academic core courses and in courses related to the major, the strength of the curriculum, grade trends, SAT/ACT/CLT scores, the essay and Purdue questions, activities, when you apply and space in the major. GPA is converted for reporting but is not itself used in the review",
      "Minimum high school preparation: 4 years of math, 4 years of English, 3 years of lab science, 3 years of social studies and 2 years of a world language (students from non-English-speaking countries do not need the language requirement). International curricula must show the equivalent, such as at least five academic passes including English, math, science and social science for GCSE/IGCSE or WAEC systems",
      "Testing: Purdue is 'test expected' rather than test-optional. It expects an SAT, ACT or CLT score (superscored within each test, from the last five years), but accepts applications without one in exceptional cases. In 2026, 98.3% of admitted students submitted a score",
      "English proficiency (applicants whose first language is not English, tests within the last two years): TOEFL iBT 4.5 overall with at least 4.0 in each section for tests from 21 January 2026 (older tests: 88 with 20 per section); IELTS Academic (including Online and Indicator) generally 6.5 with 6.0 in each band; Duolingo generally 115 with subscores of 110 or more; or SAT EBRW 600 or ACT English 26. Three years of successful study in an English-taught curriculum with B or better in English may also be considered. Meeting the minimum does not guarantee admission",
      "International applicants may need extra documents depending on their country (for example attested Standard X and XII certificates for Indian applicants) and some may be asked about their background, funding and affiliations",
    ],
  },
];

