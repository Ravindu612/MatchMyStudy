import type { Program } from "@/data/programs";

// Arizona State University: 15 undergraduate programs.
// Sources: ASU Admission (first-year, international first-year and English proficiency pages), ASU Degree Search program pages (degrees.asu.edu),
// ASU 2026-27 tuition and fee schedule (catalog.asu.edu) and ASU Financial Aid 2026-27 cost of attendance (tuition.asu.edu). Costs are in US dollars.

export const arizonaStateUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "asu-computer-science",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the engineering college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BS in Computer Science, in the Fulton Schools of Engineering, is accredited by the Computing Accreditation Commission of ABET. Its core covers the theory and practice of computing, with programming and problem solving in several modern languages and an emphasis on security and systems. Flexible electives cover artificial intelligence, machine learning, robotics, databases and informatics, and students can add a concentration in software engineering or cybersecurity. The major is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the Ira A. Fulton Schools of Engineering.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/ESCSEBS/computer-science",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Ira A. Fulton Schools of Engineering. Applicants choose the major on the ASU or Common App application",
      "Ira A. Fulton Schools of Engineering standards (higher than ASU's minimum): SAT 1210 or ACT 24, or a 3.00 GPA in ASU competency courses, or top 25% of the high school class, and no high school math or science competency deficiencies. International students meet the same standards",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for engineering (if ASU requires a test): TOEFL iBT 4 with at least 3.5 in each section (or 79 if taken before 21 January 2026), IELTS 6.5, PTE Academic 58, Duolingo 105 or Cambridge English 176. Scores must be no more than two years old at the start date",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "asu-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the engineering college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BSE in Mechanical Engineering is accredited by the Engineering Accreditation Commission of ABET. Students learn how energy is transferred, how machines and mechanical systems are designed, and how sensors and controls work, then apply these principles to practical design problems. The program also builds teamwork, experimentation, data analysis and communication skills. It is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the Ira A. Fulton Schools of Engineering.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/ESMAEMBSE/mechanical-engineering",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science in Engineering (BSE) in Mechanical Engineering",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Ira A. Fulton Schools of Engineering. Applicants choose the major on the ASU or Common App application",
      "Ira A. Fulton Schools of Engineering standards (higher than ASU's minimum): SAT 1210 or ACT 24, or a 3.00 GPA in ASU competency courses, or top 25% of the high school class, and no high school math or science competency deficiencies. International students meet the same standards",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for engineering (if ASU requires a test): TOEFL iBT 4 with at least 3.5 in each section (or 79 if taken before 21 January 2026), IELTS 6.5, PTE Academic 58, Duolingo 105 or Cambridge English 176. Scores must be no more than two years old at the start date",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Aerospace Engineering (Aeronautics)",
    slug: "asu-aerospace-engineering",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the engineering college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BSE in Aerospace Engineering with an aeronautics concentration is accredited by the Engineering Accreditation Commission of ABET. It focuses on designing aircraft, helicopters, missiles and other vehicles that fly in the atmosphere. Required courses cover aerodynamics, aerospace materials, aircraft structures, flight mechanics, propulsion, and stability and control, with some orbital mechanics. The degree ends with a two-semester multidisciplinary capstone design project, and it is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the Ira A. Fulton Schools of Engineering.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/ESAEROBSE/aerospace-engineering-aeronautics",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science in Engineering (BSE) in Aerospace Engineering (Aeronautics)",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Ira A. Fulton Schools of Engineering. Applicants choose the major on the ASU or Common App application",
      "Ira A. Fulton Schools of Engineering standards (higher than ASU's minimum): SAT 1210 or ACT 24, or a 3.00 GPA in ASU competency courses, or top 25% of the high school class, and no high school math or science competency deficiencies. International students meet the same standards",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for engineering (if ASU requires a test): TOEFL iBT 4 with at least 3.5 in each section (or 79 if taken before 21 January 2026), IELTS 6.5, PTE Academic 58, Duolingo 105 or Cambridge English 176. Scores must be no more than two years old at the start date",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "asu-electrical-engineering",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the engineering college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BSE in Electrical Engineering is accredited by the Engineering Accreditation Commission of ABET. After math and science foundations, students take upper-division courses and technical electives in areas such as circuits, communications, signal processing, control systems, computer engineering, electromagnetics, electric power and energy systems, photonics, photovoltaics and quantum engineering. Arizona's growing semiconductor industry offers internships, and the major is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the Ira A. Fulton Schools of Engineering.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/ESEEEBSE/electrical-engineering",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science in Engineering (BSE) in Electrical Engineering",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Ira A. Fulton Schools of Engineering. Applicants choose the major on the ASU or Common App application",
      "Ira A. Fulton Schools of Engineering standards (higher than ASU's minimum): SAT 1210 or ACT 24, or a 3.00 GPA in ASU competency courses, or top 25% of the high school class, and no high school math or science competency deficiencies. International students meet the same standards",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for engineering (if ASU requires a test): TOEFL iBT 4 with at least 3.5 in each section (or 79 if taken before 21 January 2026), IELTS 6.5, PTE Academic 58, Duolingo 105 or Cambridge English 176. Scores must be no more than two years old at the start date",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Biomedical Engineering",
    slug: "asu-biomedical-engineering",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the engineering college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BSE in Biomedical Engineering, from the School of Biological and Health Systems Engineering, is accredited by the Engineering Accreditation Commission of ABET. Engineering and life-science courses teach students to turn an idea for a health solution into a working biomedical device prototype, with attention to design, ethics, regulation and teamwork. Students can join research and draw on ASU's growing health and medical-technology links. The major is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the Ira A. Fulton Schools of Engineering.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/ESBMEBSE/biomedical-engineering",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science in Engineering (BSE) in Biomedical Engineering",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Ira A. Fulton Schools of Engineering. Applicants choose the major on the ASU or Common App application",
      "Ira A. Fulton Schools of Engineering standards (higher than ASU's minimum): SAT 1210 or ACT 24, or a 3.00 GPA in ASU competency courses, or top 25% of the high school class, and no high school math or science competency deficiencies. International students meet the same standards",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for engineering (if ASU requires a test): TOEFL iBT 4 with at least 3.5 in each section (or 79 if taken before 21 January 2026), IELTS 6.5, PTE Academic 58, Duolingo 105 or Cambridge English 176. Scores must be no more than two years old at the start date",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Finance",
    slug: "asu-finance",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Business",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the business college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "The BS in Finance at ASU's W. P. Carey School of Business (AACSB-accredited) prepares students for careers in corporate finance, investment banking, investment management, financial services, real estate and consulting. Students can join the Investment Banking Industry Scholars mentoring program or help manage a real student investment fund, and the department has an advisory board of industry professionals. Note that ASU lists this major as not eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the W. P. Carey School of Business.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/BAFINBS/finance",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Finance",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: W. P. Carey School of Business. Applicants choose the major on the ASU or Common App application",
      "W. P. Carey business BS standards (higher than ASU's minimum): SAT 1230 or ACT 25, or top 8% of the high school class, or a 3.40 GPA in ASU competency courses. First-year applicants must also choose an additional major; applicants not admissible to a business BS go to that second choice or are placed in a W. P. Carey business BA",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Supply Chain Management",
    slug: "asu-supply-chain-management",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Business",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the business college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BS in Supply Chain Management, at the AACSB-accredited W. P. Carey School of Business, covers how goods and services move from raw materials to customers. Topics include logistics, procurement, operations management, planning, negotiation, execution systems and strategy, combined with quantitative methods such as statistical modelling, forecasting, optimisation, data mining and programming. Classes are kept small and use hands-on projects and case studies. The major is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the W. P. Carey School of Business.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/BASCMBS/supply-chain-management",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Supply Chain Management",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: W. P. Carey School of Business. Applicants choose the major on the ASU or Common App application",
      "W. P. Carey business BS standards (higher than ASU's minimum): SAT 1230 or ACT 25, or top 8% of the high school class, or a 3.40 GPA in ASU competency courses. First-year applicants must also choose an additional major; applicants not admissible to a business BS go to that second choice or are placed in a W. P. Carey business BA",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Economics",
    slug: "asu-economics",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the business college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BS in Economics is taught by a department of about 50 faculty within the AACSB-accredited W. P. Carey School of Business. Students tailor their studies with electives from economics and other departments, building critical thinking and communication skills for business, law or graduate study. Students aiming for an economics PhD are encouraged to add a mathematics major or minor. The major is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the W. P. Carey School of Business.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/BAECNBS/economics",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Economics",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: W. P. Carey School of Business. Applicants choose the major on the ASU or Common App application",
      "W. P. Carey business BS standards (higher than ASU's minimum): SAT 1230 or ACT 25, or top 8% of the high school class, or a 3.40 GPA in ASU competency courses. First-year applicants must also choose an additional major; applicants not admissible to a business BS go to that second choice or are placed in a W. P. Carey business BA",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Nursing (BSN)",
    slug: "asu-nursing",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Nursing",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,816 for Arizona residents, US$39,264 for out-of-state (nonresident) US students and US$42,610 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the nursing college fee (US$640 a semester for residents, US$1,095 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$39,020 (resident), US$63,468 (nonresident) and US$69,979 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BSN, from the Edson College of Nursing and Health Innovation, is accredited by the Commission on Collegiate Nursing Education (CCNE) and approved by the Arizona State Board of Nursing. Students complete prerequisite courses and then advance into the full-time clinical nursing program, which combines lectures, simulation and clinical placements; the traditional BSN runs four semesters with fall, spring and summer starts that vary by campus. First-year students who meet the direct-admission criteria are admitted directly, and others compete for remaining places. Graduates can sit the NCLEX licensing exam. Students apply to ASU through the ASU application or the Common App, choosing this major in the Edson College of Nursing and Health Innovation.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/NUNURDBSN/nursing",
    campus: "Downtown Phoenix campus (also Polytechnic, West Valley and other ASU sites)",
    programType: "Full-time",
    degree: "Bachelor of Science in Nursing (BSN)",
    intake: "Fall (August) first-year entry; the clinical BSN has fall, spring and summer starts depending on campus",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027. Nursing's priority application date is 1 November 2026; later applications are considered on a space-available basis",
    admissionRequirements: [
      "College: Edson College of Nursing and Health Innovation. Applicants choose the major on the ASU or Common App application",
      "Edson College nursing standards for direct first-year admission (higher than ASU's minimum): top 10% of the high school class, or a 3.80 GPA in ASU competency courses, or a 3.50 GPA plus ACT 25 or SAT 1230. Applications received after the 1 November priority date are considered only as space allows. Applicants must also choose an additional major, and those not admitted directly to nursing are placed in the BS in community health. Direct-admission students must keep meeting continuing-eligibility criteria to advance into the clinical program",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for nursing (applicants whose native language is not English): TOEFL iBT 4 with at least 3.5 in each section (or 76 if taken before 21 January 2026), IELTS 6.5, Duolingo 100 or Cambridge English 176. PTE is not listed for this major",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "asu-biological-sciences",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,726 for Arizona residents, US$39,134 for out-of-state (nonresident) US students and US$42,480 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the natural sciences college fee (US$595 a semester for residents, US$1,030 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$38,930 (resident), US$63,338 (nonresident) and US$69,849 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BS in Biological Sciences, in The College of Liberal Arts and Sciences, studies life from molecules to ecosystems, including genetics, evolution, ecology, physiology, zoology, microbiology, and cell and molecular biology. Students can take the general degree or a concentration in biology and society; biomedical sciences; conservation biology and ecology; genetics, cell and developmental biology; or neurobiology, physiology and behaviour. There are many undergraduate research opportunities, an accelerated option, and the major is eligible for the STEM-OPT extension. Students apply to ASU through the ASU application or the Common App, choosing this major in the The College of Liberal Arts and Sciences.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/LABSCBS/biological-sciences",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biological Sciences",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: The College of Liberal Arts and Sciences. Applicants choose the major on the ASU or Common App application",
      "University first-year standards: four years of math, four of English, three of lab science, two of social science, two of the same second language and one of fine arts or career and technical education, plus one of: top 25% of the high school class, a 3.00 GPA in these competency courses, or ACT 22 / SAT 1120 (ACT 24 / SAT 1180 for nonresidents). International first-year applicants need at least a 3.00 GPA (or equivalent) with four years of math and three of lab science",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Political Science",
    slug: "asu-political-science",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$13,786 for Arizona residents, US$37,484 for out-of-state (nonresident) US students and US$40,830 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the humanities and social sciences college fee (US$125 a semester for residents, US$205 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$37,990 (resident), US$61,688 (nonresident) and US$68,199 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BA in Political Science, in The College of Liberal Arts and Sciences, studies politics and policy at local, national and global levels. Students look at how citizens interact with governments, how policies are made, and current issues such as elections, lobbying, terrorism and diplomacy, building strong research and writing skills. The program includes two semester-long diplomacy simulation courses and requires an internship, global experience or similar professional experience. Students apply to ASU through the ASU application or the Common App, choosing this major in the The College of Liberal Arts and Sciences.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/LAPOSBA/political-science",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Political Science",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: The College of Liberal Arts and Sciences. Applicants choose the major on the ASU or Common App application",
      "University first-year standards: four years of math, four of English, three of lab science, two of social science, two of the same second language and one of fine arts or career and technical education, plus one of: top 25% of the high school class, a 3.00 GPA in these competency courses, or ACT 22 / SAT 1120 (ACT 24 / SAT 1180 for nonresidents). International first-year applicants need at least a 3.00 GPA (or equivalent) with four years of math and three of lab science",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Journalism",
    slug: "asu-journalism",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,726 for Arizona residents, US$39,134 for out-of-state (nonresident) US students and US$42,480 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the journalism college fee (US$595 a semester for residents, US$1,030 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$38,930 (resident), US$63,338 (nonresident) and US$69,849 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "The BA in Journalism at ASU's Walter Cronkite School of Journalism and Mass Communication (renamed from Journalism and Mass Communication from fall 2026) is accredited by ACEJMC. Students report, produce and publish for real audiences, learning investigation and interviewing, TV reporting and producing, video, audio and photo, audience engagement and multiplatform writing, along with AI-assisted and extended-reality storytelling. Under the school's teaching-hospital model, students work in professional newsrooms, including a live evening newscast, and build a portfolio of published work. Students apply to ASU through the ASU application or the Common App, choosing this major in the Walter Cronkite School of Journalism and Mass Communication.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/CSJMCBA/journalism",
    campus: "Downtown Phoenix campus",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Journalism",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Walter Cronkite School of Journalism and Mass Communication. Applicants choose the major on the ASU or Common App application",
      "University first-year standards: four years of math, four of English, three of lab science, two of social science, two of the same second language and one of fine arts or career and technical education, plus one of: top 25% of the high school class, a 3.00 GPA in these competency courses, or ACT 22 / SAT 1120 (ACT 24 / SAT 1180 for nonresidents). International first-year applicants need at least a 3.00 GPA (or equivalent) with four years of math and three of lab science",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency for Cronkite (international applicants): TOEFL iBT 5 with at least 3.5 in each section (or 100 if taken before 21 January 2026), IELTS 7.0, PTE Academic 73, Duolingo 120 or Cambridge English 185",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Architectural Studies",
    slug: "asu-architectural-studies",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Architecture",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,726 for Arizona residents, US$39,134 for out-of-state (nonresident) US students and US$42,480 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the Design and the Arts college fee (US$595 a semester for residents, US$1,030 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$38,930 (resident), US$63,338 (nonresident) and US$69,849 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "The BSD in Architectural Studies, from The Design School in ASU's Herberger Institute for Design and the Arts, is a pre-professional degree that treats architecture as both cultural expression and technical achievement. For three years students take two studio project courses a year alongside other classes, then follow either a cross-disciplinary or a professional focus. It is not itself a licensing degree: students who want to become registered architects go on to an accredited professional master's degree, such as ASU's two-year MArch. Graduates also move into landscape architecture, construction, planning, preservation or related fields. Students apply to ASU through the ASU application or the Common App, choosing this major in the Herberger Institute for Design and the Arts.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/ARSTDBSD/architectural-studies",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Science in Design (BSD) in Architectural Studies",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Herberger Institute for Design and the Arts. Applicants choose the major on the ASU or Common App application",
      "University first-year standards: four years of math, four of English, three of lab science, two of social science, two of the same second language and one of fine arts or career and technical education, plus one of: top 25% of the high school class, a 3.00 GPA in these competency courses, or ACT 22 / SAT 1120 (ACT 24 / SAT 1180 for nonresidents). International first-year applicants need at least a 3.00 GPA (or equivalent) with four years of math and three of lab science",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio is listed as required for first-year admission to this major",
    ],
  },

  {
    name: "Music Performance (Orchestral Instrument)",
    slug: "asu-music-performance",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,726 for Arizona residents, US$39,134 for out-of-state (nonresident) US students and US$42,480 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the Design and the Arts college fee (US$595 a semester for residents, US$1,030 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$38,930 (resident), US$63,338 (nonresident) and US$69,849 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BMus in Performance with an orchestral instrument concentration, in the School of Music, Dance and Theatre (NASM-accredited), offers eight semesters of focused study of repertoire, solo literature and chamber music with a faculty mentor. Students get coaching from faculty and visiting artists, master classes and frequent performances with large ensembles, chamber groups and as soloists. The degree also covers professional skills such as audition preparation, networking and entrepreneurship. Students apply to ASU through the ASU application or the Common App, choosing this major in the Herberger Institute for Design and the Arts, plus a separate School of Music, Dance and Theatre application and audition.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/FAMUSPOBM/performance-orchestral-instrument",
    campus: "Tempe campus",
    programType: "Full-time",
    degree: "Bachelor of Music (BMus) in Performance (Orchestral Instrument)",
    intake: "Fall (August) or spring (January); auditions are in January-February for fall and November for spring",
    applicationDeadline: "Music application deadline for fall 2027 entry: 5 January 2027 (15 October 2026 for spring 2027), alongside the ASU application. Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: Herberger Institute for Design and the Arts. Applicants choose the major on the ASU or Common App application",
      "University first-year standards: four years of math, four of English, three of lab science, two of social science, two of the same second language and one of fine arts or career and technical education, plus one of: top 25% of the high school class, a 3.00 GPA in these competency courses, or ACT 22 / SAT 1120 (ACT 24 / SAT 1180 for nonresidents). International first-year applicants need at least a 3.00 GPA (or equivalent) with four years of math and three of lab science",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "Audition required: applicants submit a separate School of Music, Dance and Theatre application in addition to the ASU application. Admission to the music program is highly selective and based on the audition, held in January and February for fall entry (November for spring). Students admitted to ASU but not yet to the school (or who miss the audition deadline) are enrolled as music audition majors and must pass the audition in their first semester before taking music major courses",
    ],
  },

  {
    name: "Health Sciences",
    slug: "asu-health-sciences",
    level: "Bachelor",
    universitySlug: "arizona-state-university",
    universityName: "Arizona State University",
    country: "United States",
    field: "Health Sciences",
    duration: "4 years full-time (120 credit hours)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and mandatory fees for a full-time undergraduate (12+ credits, two semesters, ASU's approved schedule): US$14,406 for Arizona residents, US$38,564 for out-of-state (nonresident) US students and US$41,910 for international students. This is base tuition (US$12,178 resident, US$35,716 nonresident, US$39,062 international) plus a US$175-a-semester tuition surcharge, US$404 a semester of student-initiated fees, the new US$100-a-semester Advanced Technology Fee and the Health Solutions college fee (US$435 a semester for residents, US$745 for nonresident and international students). Adding ASU's 2026-27 Tempe on-campus allowances for housing (US$11,473), food (US$7,346), books (US$1,320), travel (US$1,650), personal costs (US$2,343) and loan fees (US$72) gives a cost of attendance (adding up ASU's published line items) of about US$38,610 (resident), US$62,768 (nonresident) and US$69,279 (international, which also includes the US$400 International Student Fee and US$2,765 of required student health insurance). Barrett, The Honors College adds US$1,100 a semester, and course-specific fees are extra. Students from Western Undergraduate Exchange (WUE) states may qualify for a reduced nonresident rate of 150% of resident tuition plus fees. All first-year applicants, including international students, are automatically considered for ASU's New American University merit scholarships; federal need-based aid (FAFSA, priority date 15 January) is only for US citizens and eligible non-citizens",
    description:
      "ASU's BS in Health Sciences, from the College of Health Solutions, studies how health care systems are organised and financed and how providers deliver evidence-based care, alongside leadership, communication and ethics. Students choose a focus area: community-based health outcomes, health legislation and regulation, health and media, integrative care, or mental and behavioural health. A small number of students each year can apply for a Mayo Clinic echocardiography certificate and count those credits towards the degree. Students apply to ASU through the ASU application or the Common App, choosing this major in the College of Health Solutions.",
    officialProgramUrl:
      "https://degrees.asu.edu/bachelors/major/ASU00/NHHSCBS/health-sciences",
    campus: "Downtown Phoenix campus (also Polytechnic and West Valley)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Health Sciences",
    intake: "Fall (August) or spring (January)",
    applicationDeadline: "Fall 2027 entry (first-year applicants): ASU's priority admission date is 1 November 2026 (applying by then gives the most scholarship consideration) and the regular admission date is 15 January 2027. Apply with the ASU application or the Common App (no essay required); the fee is US$55 for Arizona residents, US$85 for domestic nonresidents and US$90 for international applicants. Barrett, The Honors College has a separate application due 15 January 2027. International applicants should apply early to leave time for the I-20 and visa; ASU's international page lists a 1 November 2026 priority deadline for spring 2027",
    admissionRequirements: [
      "College: College of Health Solutions. Applicants choose the major on the ASU or Common App application",
      "University first-year standards: four years of math, four of English, three of lab science, two of social science, two of the same second language and one of fine arts or career and technical education, plus one of: top 25% of the high school class, a 3.00 GPA in these competency courses, or ACT 22 / SAT 1120 (ACT 24 / SAT 1180 for nonresidents). International first-year applicants need at least a 3.00 GPA (or equivalent) with four years of math and three of lab science",
      "Testing: SAT and ACT are optional at ASU. Scores are one way to meet the admission standards for this major and are also used for course placement",
      "English proficiency (international applicants whose native language is not English; scores no more than two years old at the start date): at least TOEFL iBT 61 (tests before 21 January 2026) or 3.5 on the new scale, IELTS 6.0, PTE Academic 53, Duolingo 95 or Cambridge English 170. Applicants below these scores may get conditional admission and complete English study at ASU Global Launch first (valid for up to three semesters)",
      "No portfolio or audition is required for this major",
    ],
  },
];
