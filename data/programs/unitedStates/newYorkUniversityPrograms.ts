import type { Program } from "@/data/programs";

// New York University undergraduate majors for Fall 2027 entry (New York campus).
// Sources: NYU Bulletins 2026-2027 program pages, the NYU Undergraduate Admissions first-year, early decision, standardized testing, English language testing,
// high school preparation and additional program requirements pages, the NYU 2026-2027 estimated cost of attendance, and the Tisch Film & TV and Drama admissions pages.
// Costs are in US dollars.

export const newYorkUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "nyu-computer-science",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Computer Science is taught by the Department of Computer Science at the Courant Institute of Mathematical Sciences. It builds a foundation in programming, data structures, computer systems, operating systems and algorithms, together with the mathematics behind them, and adds hands-on software development. Advanced students can join faculty research or take an accelerated five-year master's. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/computer-science-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Computer Science",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Data Science",
    slug: "nyu-data-science",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Data Science, offered with the Center for Data Science, gives rigorous training in statistical modelling, machine learning and data-driven reasoning, built on computer science and mathematics. Students learn to design, analyse and deploy data-driven systems with attention to ethics and to the difference between prediction and causal inference. Single majors pair the degree with a CAS minor to apply these methods in another field. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/data-science-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Data Science",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "nyu-computer-engineering",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the Tandon School of Engineering). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Tandon's BS in Computer Engineering is ABET-accredited and covers computer systems from hardware to software. It combines electronics, communications, control and programming with courses such as cyber security, VLSI and system-on-chip design, wireless networks and image processing, and includes team design projects. Students apply through the Common App to the NYU Tandon School of Engineering and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/engineering/programs/computer-engineering-bs/",
    campus: "Downtown Brooklyn",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Engineering",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: Tandon School of Engineering. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "Preparation: competitive Tandon applicants have Physics, Chemistry and Calculus (or at least Precalculus) on their transcript. A Level Mathematics is encouraged for engineering applicants. No portfolio, audition or interview is required",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "nyu-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the Tandon School of Engineering). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Tandon's BS in Mechanical Engineering is ABET-accredited and teaches the principles behind machines and physical systems, from robots and vehicles to power plants and medical devices. Students do hands-on lab and computer work in solid and fluid mechanics, control systems and robotics, and can add a minor in aerospace engineering. Students apply through the Common App to the NYU Tandon School of Engineering and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/engineering/programs/mechanical-engineering-bs/",
    campus: "Downtown Brooklyn",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: Tandon School of Engineering. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "Preparation: competitive Tandon applicants have Physics, Chemistry and Calculus (or at least Precalculus) on their transcript. A Level Mathematics is encouraged for engineering applicants. No portfolio, audition or interview is required",
    ],
  },

  {
    name: "Business",
    slug: "nyu-business",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Business",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$70,464 for the year (NYU's estimate for the Leonard N. Stern School of Business). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$102,886: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Stern's STEM-designated BS in Business combines core business courses with a liberal arts foundation, a social impact core and a New York City consulting capstone. By the end of their junior year, students declare a concentration such as finance, accounting, marketing, AI, computing and data science, entrepreneurship, management, real estate or sustainable business. Students apply through the Common App to the NYU Stern School of Business.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/business/programs/business-bs/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Business",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: Leonard N. Stern School of Business. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "Preparation: applicants should have Calculus, or at least Precalculus, on their transcript. Applicants who use 3 AP or 3 IB Higher Level scores as their testing should include one literature or humanities score and one math score. No portfolio, audition or interview is required",
    ],
  },

  {
    name: "Economics",
    slug: "nyu-economics",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Economics teaches how individuals, markets and economies work, with a Policy or a Theory concentration and honours research under faculty supervision. Studying in New York gives economics students access to opportunities on Wall Street, at the United Nations and in policy organisations, and the major prepares them for graduate study, business, law or public service. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/economics-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Biology",
    slug: "nyu-biology",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Biology spans modern biology from molecules and cells to genetics, development, behaviour, ecology and evolution. Students take hands-on lab courses, can do research in NYU or New York City laboratories, and can study away while continuing the major. The program is strong preparation for research, medicine, dentistry and other health professions. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/biology-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Biology",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Neural Science",
    slug: "nyu-neural-science",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Biomedical Sciences",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BS in Neural Science, offered by the Center for Neural Science, studies how the brain works at every level, from molecular and cellular mechanisms in nerve cells to neural circuits, large brain systems and behaviour. Students combine lab experiments with mathematical and computational modelling, and pre-health students can add the courses needed for medical school. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/neural-science-bs/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Neural Science",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Psychology",
    slug: "nyu-psychology",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Psychology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Psychology studies mind and behaviour from cognitive, social and personality, developmental and neuroscience perspectives, with a strong emphasis on psychology as a science. Advanced students can join faculty research through the Research Experiences and Methods course or the honours program, which includes a research thesis. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/psychology-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Psychology",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Nursing",
    slug: "nyu-nursing",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Nursing",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the Rory Meyers College of Nursing). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Rory Meyers College of Nursing's four-year BS prepares students for the NCLEX licensing exam to become registered nurses. The 128-credit program combines liberal arts and science courses with nursing courses and clinical placements across the lifespan. Nursing courses start in the junior year, so students can study abroad in their sophomore year. Students apply through the Common App to NYU Rory Meyers College of Nursing.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/nursing/programs/nursing-traditional-4-year-bs/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Nursing",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: Rory Meyers College of Nursing. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "Preparation: applicants to NYU Meyers should have chemistry on their transcript. No portfolio, audition or interview is required",
    ],
  },

  {
    name: "Mathematics",
    slug: "nyu-mathematics",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Mathematics is taught by faculty of the Courant Institute of Mathematical Sciences and covers both pure and applied mathematics. Students can take joint majors with computer science, data science, economics or engineering, an honours track or an accelerated BA/MS, and can take mathematics courses at NYU's Abu Dhabi, London, Paris or Shanghai campuses. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/mathematics-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Mathematics",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Politics",
    slug: "nyu-politics",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the College of Arts and Science). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU's BA in Politics, offered by the Wilf Family Department of Politics, takes an analytical, evidence-based approach to political theory, quantitative and formal analysis, American, comparative and international politics. Topics range from elections, law and public policy to war, development and political economy, preparing graduates for government, NGOs, law and international organisations. Students apply through the Common App to NYU's College of Arts and Science and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts-science/programs/politics-ba/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Politics",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: College of Arts and Science (CAS). Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Media, Culture, and Communication",
    slug: "nyu-media-culture-communication",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$68,576 for the year (NYU's estimate for the Steinhardt School of Culture, Education, and Human Development). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$100,998: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Steinhardt's BS in Media, Culture, and Communication looks at the history, politics and culture of media and technology. After three core courses in theory and analysis, students choose framing courses and electives across global communication, visual culture and sound, interaction and experience, media industries and politics, and technology and society. Options include study abroad, internships and professional electives. Students apply through the Common App to NYU Steinhardt and choose this major.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/culture-education-human-development/programs/media-culture-communication-bs/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Media, Culture, and Communication",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year.",
    admissionRequirements: [
      "School: Steinhardt School of Culture, Education, and Human Development. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "No portfolio, audition or interview is required. NYU recommends 4 years of English and 3 to 4 years each of history, mathematics, laboratory science and a foreign language",
    ],
  },

  {
    name: "Film and Television",
    slug: "nyu-film-television",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$75,326 for the year (NYU's estimate for the Tisch School of the Arts). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$107,748: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Tisch's BFA in Film and Television, at the Kanbar Institute of Film and Television, trains students in visual storytelling through hands-on production, screenwriting, history and criticism. Students work in collaboration with faculty and classmates, and the department produces more than 5,000 films a year. Students apply through the Common App to the Tisch School of the Arts and submit a Creative Portfolio through SlideRoom.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts/programs/film-television-bfa/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Fine Arts (BFA) in Film and Television",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year. The SlideRoom Creative Portfolio is due on the same date as the chosen deadline, and Tisch suggests submitting it at least a week early.",
    admissionRequirements: [
      "School: Tisch School of the Arts. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "Portfolio (required): a five-part Creative Portfolio submitted through SlideRoom by the same deadline as the Common App. It has a creative résumé, a short introductory video, a short story, a 'Set the Scene' response, and one creative submission: a film or video of up to 5 minutes, 10 to 15 images of artwork, or up to 6 pages of writing. Requirements can change each year, and the Common App must be submitted before SlideRoom",
      "Film and Television says it does not require the SAT, ACT or any other standardized test",
    ],
  },

  {
    name: "Drama (Theatre)",
    slug: "nyu-drama",
    level: "Bachelor",
    universitySlug: "new-york-university",
    universityName: "New York University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees: US$75,326 for the year (NYU's estimate for the Tisch School of the Arts). The same rate applies to US and international students. NYU's estimated total cost of attendance for 2026-27 is US$107,748: tuition and fees plus food and housing (US$26,438), books and supplies (US$1,492), transportation (US$2,438) and personal expenses (US$2,054). Health insurance is extra unless waived. 2027-28 rates have not been published yet. Under the NYU Promise, NYU meets 100% of demonstrated need for first-time, first-year students admitted to the New York campus.",
    description:
      "NYU Tisch's BFA in Theatre, taught by the Department of Drama, combines conservatory training in renowned New York City studios with theatre studies and liberal arts courses. Students audition into one discipline, such as acting or musical theatre, and are placed in a studio for their primary training in the theatre capital of the world. Students apply through the Common App to Tisch Drama and complete an artistic review.",
    officialProgramUrl:
      "https://bulletins.nyu.edu/undergraduate/arts/programs/theatre-bfa/",
    campus: "Washington Square (Manhattan)",
    programType: "Full-time",
    degree: "Bachelor of Fine Arts (BFA) in Theatre",
    intake: "Fall (September)",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App): Early Decision I closes 1 November 2026, with decisions on 15 December 2026. Early Decision II closes 1 January 2027, with decisions on 15 February 2027. Regular Decision closes 5 January 2027, with decisions by 1 April 2027. NYU has no Early Action round. Deadlines are 11:59 pm in the applicant's local time zone, and NYU allows one application per year. Tisch Drama's artistic review must be scheduled by 9 November 2026 (Early Decision I), 11 January 2027 (Early Decision II) or 18 January 2027 (Regular Decision), each at 9:00 am New York time. Tisch recommends submitting the Common App by 15 October or 15 December.",
    admissionRequirements: [
      "School: Tisch School of the Arts. Apply with the Common App and NYU supplement, choosing this school and major",
      "Testing: NYU is test-optional through the 2027-28 application cycle. Applicants who choose to submit testing submit one form: SAT or ACT (both superscored), or one of NYU's other accepted options such as the IB Diploma, AP or IB Higher Level results, or national exams",
      "English proficiency (international applicants): required if English is not your first language and your last three full years of school were not taught entirely in English. Accepted tests are TOEFL iBT, Duolingo, IELTS Academic, PTE Academic, and C1 Advanced or C2 Proficiency, taken within the last two years. NYU sets no minimum score, but competitive applicants score TOEFL iBT 100+ (or 5+ overall and in each section on the new scale from 21 January 2026), IELTS 7.5+, Duolingo 135+, PTE 70+ or Cambridge 191+",
      "Audition (required): every applicant completes an artistic review (audition or portfolio) in one discipline through the Drama Artistic Review Portal. NYU emails a link a few days after the Common App is submitted, and the portal opens in mid-October 2026. Reviews take place in person in New York City (and in Chicago for Regular Decision) or online",
      "Regular Decision Acting and Musical Theatre applicants first submit a Phase 1 video by 18 January 2027 and may then be invited to a live Phase 2 review. Applicants must bring a performing-arts résumé without a photo",
    ],
  },
];
