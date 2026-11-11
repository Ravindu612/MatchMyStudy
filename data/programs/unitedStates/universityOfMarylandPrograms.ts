import type { Program } from "../../programs";

// University of Maryland, College Park: 8 undergraduate majors for fall 2027 first-year entry and 7 on-campus
// graduate programmes in College Park. Sources (viewed 11 November 2026): Office of Undergraduate Admissions
// freshman applicants, international applicants, English language proficiency, application deadlines, limited
// enrollment programs, tuition and aid, and financial certification pages (admissions.umd.edu/apply/freshman-applicants,
// /apply/international-applicants, /apply/english-language-proficiency, /apply/application-deadlines,
// /academics/limited-enrollment-programs, /tuition, /apply/financial-certification), the Limited Enrollment Program
// pages for Computer Science (fall 2024 and later) and Engineering (fall 2027 and later)
// (lep.umd.edu/computerscience-after2024.html and lep.umd.edu/engineering-after27.html), Undergraduate Catalog major
// and college pages (academiccatalog.umd.edu/undergraduate/colleges-schools/...), Student Financial Services and
// Cashiering Fall 2026 & Spring 2027 undergraduate and graduate tuition and fees (billpay.umd.edu/UndergraduateTuition
// and billpay.umd.edu/GraduateTuition), the Office of Student Financial Aid 2026-27 cost of attendance and
// differential tuition FAQs (financialaid.umd.edu/resources-policies/cost-attendance and
// /resources-policies/differential-tuition-faqs), Graduate School international admissions and English language
// proficiency requirements (gradschool.umd.edu/admissions/international-admissions and
// /admissions/english-language-proficiency-requirements), Graduate Catalog programme pages with fall 2027 deadlines
// and degree requirements (academiccatalog.umd.edu/graduate/programs/...), Department of Computer Science M.S.
// catalog, applying and admissions FAQ pages (cs.umd.edu/grad/ms-catalog, /grad/apply, /grad/admissions-faq,
// /grad/ms-policy-manual), Office of Extended Studies tuition pages for the M.S. in Computer Science and the Science
// Academy programmes (exst.umd.edu/professionals-post-baccalaureates/professional-graduate-programs/...), Maryland
// Applied Graduate Engineering programme, application, international admissions and tuition pages
// (mage.umd.edu/programs/electrical-computer, /application-process, /international-admissions, /tuition-rates), the
// Science Academy M.S. in Data Science page (cmns.umd.edu/graduate/science-academy/data-science/master-science), the
// College of Information MIM and graduate tuition pages (ischool.umd.edu/academics/masters-programs/
// master-of-information-management and /academics/tuition-fees-graduate), and Robert H. Smith School of Business pages
// for the M.S. in Business Analytics & AI, Master of Finance, business master's admissions and curriculum, and the
// Full-Time MBA and its admissions page (rhsmith.umd.edu/programs/...). Costs are in US dollars. UMD has no separate
// international tuition rate: international undergraduates and graduate students pay the non-Maryland-resident rate,
// and several professional master's programmes charge their own flat per-credit or per-course tuition instead.

const UNIVERSITY = {
  universitySlug: "university-of-maryland",
  universityName: "University of Maryland",
  country: "United States",
  language: "English",
  campus: "College Park",
  programType: "Full-time",
} as const;

// billpay.umd.edu Fall 2026 & Spring 2027, undergraduate full time (12+ credits) per semester: non-resident tuition
// 21,133.00 + mandatory fees 910.00 = 22,043.00 (resident 6,417.50). Differential tuition 1,687.50/semester for
// full-time juniors/seniors (60+ credits) in business, engineering and computer science, regardless of residency,
// for no more than four semesters (financialaid.umd.edu differential tuition FAQs). International student fee 125 per
// semester. SHIP 2026-27: fall 1,232 + spring 1,707 = 2,939 (waivable with approved other insurance).
// OSFA 2026-27 estimated undergraduate non-Maryland-resident on-campus COA: tuition 42,266, mandatory fees 1,820,
// on-campus housing/cable/phone 10,290, food plan 7,180, books/supplies 1,250, transport 1,514, personal 1,200 = 65,520.
const UG_COSTS =
  "2026-27 (fall 2026 and spring 2027): international students pay UMD's non-Maryland-resident rate. A full-time undergraduate (12 or more credits) is billed US$21,133 in tuition plus US$910 in mandatory fees each semester, or US$22,043 a semester and US$44,086 for the academic year. Students who need a UMD-issued I-20 or DS-2019 also pay a US$125 international student fee each semester, and undergraduates taking 6 or more credits are charged for the Student Health Insurance Plan (US$2,939 for 2026-27, split US$1,232 in fall and US$1,707 in spring) unless an approved waiver shows other coverage. The Office of Student Financial Aid's estimated 2026-27 cost of attendance for a non-Maryland-resident undergraduate living on campus is US$65,520: US$42,266 tuition, US$1,820 mandatory fees, US$10,290 on-campus housing, US$7,180 for an average food plan, US$1,250 books and supplies, US$1,514 transport and US$1,200 personal costs (US$67,318 if living off campus). International students are not eligible for US federal or state aid, and UMD's financial certification page says that as a publicly funded institution it cannot provide financial assistance to international students; admitted F-1 or J-1 students must document one year of funding before an I-20 or DS-2019 is issued, and tuition and fees must be paid in full before classes begin. 2027-28 rates had not been published when we checked";

const UG_TUITION = UG_COSTS;

const UG_TUITION_DIFFERENTIAL = (school: string) =>
  `${UG_COSTS}. Differential tuition: as a ${school} major you will also pay US$1,687.50 per semester (2026-27 rate, the same for residents and non-residents) once you have 60 or more credits, which normally means the junior and senior years. Credits brought in from AP, IB, A levels, dual enrolment or other colleges count toward the 60, and the charge applies for no more than four full-time semesters (up to about US$6,750 in total at the current rate). It is not charged in winter or summer terms`;

const UG_INTAKE =
  "Fall semester (fall 2027 first-year entry; fall applicants are automatically considered for spring if not offered fall)";

const UG_DEADLINE =
  "Fall 2027 entry, through the Common App or ApplyWeb (UMD reviews both the same way); the non-refundable application fee is US$80. UMD does not offer binding Early Decision. Non-binding Early Action: complete applications by 1 November 2026, with decisions by 1 February 2027; this gives priority consideration for admission, merit scholarships and special programmes, and UMD strongly encourages international students to use it so there is time for the visa process. The 2026 Early Action date had already passed when we checked, so Regular Decision is the remaining option: apply by 20 January 2027, with decisions by 1 April 2027. Applications after that are considered on a rolling, space-available basis. Admitted students confirm enrolment by 1 May 2027. All required documents must be submitted or postmarked by the deadline, including English test scores. International first-year applicants can also apply for spring 2028 entry by 1 August 2027";

const UG_TESTING =
  "Testing: optional. UMD is test-optional through the spring and fall 2027 application cycles, so you choose whether to send SAT or ACT scores and indicate your choice on the application. If you are admitted, you send official AP, IB or A/AS level results to be considered for credit";

const UG_ENGLISH =
  "English proficiency (Office of Undergraduate Admissions): international applicants must send an official score from the Duolingo English Test (passing score 120), IELTS Academic or IELTS Indicator (7.0) or TOEFL iBT, including Home Edition (95 on the 0-120 scale or 5 on the new 1-6 scale; MyBest superscores are not accepted). Scores must be less than two years old and sent directly by the testing agency (UMD code 5814), and the application is not complete until they arrive. Scores of Duolingo 115 or lower, IELTS 6.5 or lower, or TOEFL 94 (4.5) or lower fall in the Maryland English Institute range, and some admitted students are required to take MEI coursework before starting their degree. UMD may waive the test, for example after four years at a US high school without ESL courses, or if English is your first language and you are a citizen of, or completed secondary school or a degree in, one of its listed English-speaking countries (including the UK, Ireland, Australia, New Zealand, Canada outside the French system, Singapore, South Africa, Nigeria, Ghana and Kenya)";

const UG_ACADEMIC =
  "Application materials: the online application with an essay and an activities and awards list (or resume), two letters of recommendation (one from your school counsellor and one from a teacher), and official secondary school transcripts covering the equivalent of US grades 9-12, plus national examination results such as GCSE/GCE, CBSE or WAEC where relevant. Records not in English must be sent in the original language with a certified English translation, and a course-by-course evaluation from ECE or Josef Silny & Associates is required only for any university-level study completed outside the United States. The minimum preparation is four years of English, four of mathematics (including Algebra I, Geometry and Algebra II), three of history or social science, three of science in at least two areas with two lab experiences, and two of a foreign language; UMD says the most competitive applicants have an A-/B+ or better average with several honours, AP or IB courses. Use your full legal name as it appears on your passport and give a foreign street address as your permanent address";

const UG_LEP = (major: string, review: string) =>
  `Admission route: ${major} is a Limited Enrollment Program. You choose it as your preferred major on the application; this does not affect whether you are admitted to UMD, but you are then reviewed separately for the major. Most applicants are admitted to their preferred major, and those who are not are placed in Letters & Sciences to work toward the gateway requirements. ${review}`;

// billpay.umd.edu Fall 2026 & Spring 2027 graduate: non-resident 1,916.00 per credit (resident 913.00); mandatory fees
// 738.00 per semester for 9+ credits (382.50 for 1-8). International student fee 125 per semester. SHIP 2,939.
// OSFA 2026-27 estimated graduate non-Maryland-resident COA: tuition 26,824, fees 764, housing & food off campus
// 17,724, personal 1,200, books 1,000, transport 3,058, loan fees 220 = 50,790.
const GRAD_STANDARD_RATE =
  "2026-27 (fall 2026 and spring 2027): international graduate students pay UMD's non-Maryland-resident rate of US$1,916 per credit hour, plus mandatory fees of US$738 a semester for 9 or more credits";

const GRAD_LIVING =
  "Students who need a UMD-issued I-20 or DS-2019 pay a US$125 international student fee each semester, and full-time graduate students are charged for the Student Health Insurance Plan (US$2,939 for 2026-27) unless an approved waiver shows other coverage. The Office of Student Financial Aid's estimated 2026-27 cost of attendance for a non-Maryland-resident graduate student is US$50,790: a US$26,824 tuition estimate, US$764 fees, US$17,724 for off-campus housing and food, US$1,200 personal expenses, US$1,000 books and supplies, US$3,058 transport and US$220 loan fees, so use your programme's actual tuition in place of the tuition line. Admitted F-1 or J-1 students must show one year of funding to receive an I-20 or DS-2019. 2027-28 rates had not been published when we checked";

const GRAD_ENGLISH =
  "English proficiency (UMD Graduate School): if you do not hold a degree from a regionally accredited US institution or a recognised university in one of the Graduate School's listed English-speaking countries, you need TOEFL iBT, IELTS Academic or PTE Academic scores. Full enrolment requires TOEFL 96 overall with at least 26 reading, 24 listening, 22 speaking and 24 writing (tests taken on or before 20 January 2026), or on the new TOEFL scale 5 overall with 5 in reading, listening and writing and 4.5 in speaking; or IELTS 7.0 overall with 7.0 in reading, listening and writing and 6.5 in speaking; or PTE 68. Slightly lower scores can lead to admission with a required Maryland English Institute writing course or English Bridge Program, and lower scores to Intensive English (not offered for spring 2027). TOEFL Home Edition, IELTS Online and Indicator and PTE Online are accepted, TOEFL MyBest scores are accepted, and the Duolingo English Test is not accepted for graduate admission. Send TOEFL scores to code 5814 and IELTS scores electronically to the Graduate School's e-download account";

const GRAD_MINIMUM =
  "UMD Graduate School minimums: a four-year bachelor's degree from a regionally accredited US institution or an equivalent degree from abroad, and a 3.0 GPA (on a 4.0 scale) across prior coursework. A three-year bachelor's degree is accepted if you will also hold a master's degree, if it followed 13 years of pre-university schooling, or if it is paired with a recognised postgraduate diploma; otherwise a department may consider an exception. Apply through the Graduate School's TerpEngage application with the non-refundable US$90 fee, uploading scanned transcripts and degree certificates in the original language with literal English translations (official copies are requested only after admission). The programme recommends a decision and the Graduate School issues the formal offer, after which International Student & Scholar Services collects financial documents for the I-20 or DS-2019";

export const universityOfMarylandPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "umd-bs-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION_DIFFERENTIAL("computer science"),
    description:
      "UMD's Computer Science BS, run by the Department of Computer Science in the College of Computer, Mathematical, and Natural Sciences, covers how computing systems are designed, built, analysed and used. Students start with two semesters of calculus and a cumulative programming sequence: object-oriented programming I and II, computer systems and discrete structures (exemption exams are offered for these four courses if you already know the material). They then take organisation of programming languages and algorithms, a statistics course, five 400-level courses drawn from at least three areas (systems, information processing, software engineering and programming languages, theory, and numerical analysis), two further CS electives, and at least 12 upper-level credits in one discipline outside computer science. Upper-level options include operating systems, computer networks, security, databases, artificial intelligence, machine learning, deep learning, computer vision, natural language processing, human-computer interaction, cryptography and quantum computing. Students can follow the general track or a Cybersecurity, Data Science, Machine Learning or Quantum Information specialisation, and can take on independent research with faculty. Strong students can later apply to the department's combined BS/MS programme.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/computer-science/computer-science-major/",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEP(
        "Computer Science",
        "Students admitted directly to the major as first-years are reviewed once they reach 45 UMD credits: by then they must have passed Object-Oriented Programming I (CMSC131, 133 or 141), Object-Oriented Programming II (CMSC132 or 142) and Calculus I (MATH140), each with a C- or better, and hold at least a 2.0 GPA. Only one gateway course may be repeated, once. Switching into Computer Science after enrolling is extremely limited, so applicants who want the major should list it when they apply"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Engineering",
    slug: "umd-bs-computer-engineering",
    level: "Bachelor",
    field: "Computer Engineering",
    duration: "Typically 4 years full-time (129 credits in the sample programme)",
    tuitionNote: UG_TUITION_DIFFERENTIAL("Clark School of Engineering"),
    description:
      "The ABET-accredited Computer Engineering BS is shared by the A. James Clark School of Engineering's Department of Electrical and Computer Engineering and the Department of Computer Science, and covers hardware, software and the way the two interact in computers and embedded systems. After a foundation in calculus, physics and chemistry for engineers, students take programming and data structures, discrete structures, digital logic, circuits, signals and systems, electronics, computer organisation, computer systems architecture, algorithms, programming languages and operating systems. They then complete 26 credits of computer engineering technical electives spread across set categories, including advanced laboratory and capstone design courses, and may count up to five credits of supervised senior projects. A grade of C- or better is required in every engineering, mathematics and science course and in their prerequisites. Graduates go on to work in industry or government, to graduate study in computer or electrical engineering, or to start their own ventures.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/engineering/electrical-and-computer/computer-engineering-major/",
    degree: "Bachelor of Science (BS) in Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEP(
        "Engineering",
        "Admission to the Clark School is competitive, and first-year applicants can name a specific engineering major or enter as Undecided Engineering. Under the rules for students entering in fall 2027 or later, directly admitted first-years must complete Calculus II (MATH141), Physics: Mechanics (PHYS161) and General Chemistry for Engineers (CHEM135, or an approved alternative) with a C- or better and keep at least a 2.0 GPA by the review at 45 credits; only one gateway course may be repeated, once, and a W counts as an attempt. Computer Engineering is one of the Clark School's high-demand majors, so moving into it later requires a competitive review"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering",
    slug: "umd-bs-electrical-engineering",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "Typically 4 years full-time (122 credits in the sample programme)",
    tuitionNote: UG_TUITION_DIFFERENTIAL("Clark School of Engineering"),
    description:
      "UMD's ABET-accredited Electrical Engineering BS, offered by the Department of Electrical and Computer Engineering, builds a thorough grounding in mathematics, physics, chemistry and engineering science, with required courses that include programming, electric circuits, digital logic, signal analysis, engineering probability, microelectronics, computer organisation and electromagnetics. Students then spread 22 credits of electrical engineering technical electives across the department's three categories (senior projects can count toward some of them) and add a general technical elective, which lets them focus on fields the department highlights such as wireless communications and signal processing, micro- and nanoelectronics, power systems, lasers and optics, control systems, hardware-software integration and biomedical devices. A grade of C- or better is needed in all engineering, mathematics and science courses and their prerequisites. UMD notes that employers recruiting on campus seek out electrical engineering students more than those of any other major.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/engineering/electrical-and-computer/electrical-engineering-major/",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEP(
        "Engineering",
        "Admission to the Clark School is competitive, and first-year applicants can name a specific engineering major or enter as Undecided Engineering. Under the rules for students entering in fall 2027 or later, directly admitted first-years must complete Calculus II (MATH141), Physics: Mechanics (PHYS161) and General Chemistry for Engineers (CHEM135, or an approved alternative) with a C- or better and keep at least a 2.0 GPA by the review at 45 credits; only one gateway course may be repeated, once. Electrical Engineering is one of the Clark School's high-demand majors, so moving into it later requires a competitive review"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "umd-bs-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (124 credits in the sample programme)",
    tuitionNote: UG_TUITION_DIFFERENTIAL("Clark School of Engineering"),
    description:
      "The ABET-accredited Mechanical Engineering BS from UMD's Department of Mechanical Engineering, which calls itself the broadest of the engineering disciplines, teaches students to design, make and run components, machines and systems ranging from surgical micro-devices to engines and wind turbines. Students must become fluent in the discipline's fundamentals: solid and fluid mechanics, thermodynamics, transfer processes, materials engineering, electronic instrumentation and measurement, controls, and design. Electives let students explore newer areas such as smart structures, machine learning, additive manufacturing, Lean Six Sigma and medical robotics. The curriculum is built so many students can fit in study abroad or co-op placements, and they can join faculty research, serve as teaching fellows or compete with teams such as Formula SAE and Baja SAE.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/engineering/mechanical-engineering/mechanical-engineering-major/",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEP(
        "Engineering",
        "Admission to the Clark School is competitive, and first-year applicants can name a specific engineering major or enter as Undecided Engineering. Under the rules for students entering in fall 2027 or later, directly admitted first-years must complete Calculus II (MATH141), Physics: Mechanics (PHYS161) and General Chemistry for Engineers (CHEM135, or an approved alternative) with a C- or better and keep at least a 2.0 GPA by the review at 45 credits; only one gateway course may be repeated, once. Mechanical Engineering (College Park) is one of the Clark School's high-demand majors, so moving into it later requires a competitive review"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Aerospace Engineering",
    slug: "umd-bs-aerospace-engineering",
    level: "Bachelor",
    field: "Aerospace Engineering",
    duration: "Typically 4 years full-time (minimum 124 credits)",
    tuitionNote: UG_TUITION_DIFFERENTIAL("Clark School of Engineering"),
    description:
      "UMD's ABET-accredited Aerospace Engineering BS, from the Clark School's Department of Aerospace Engineering, deals with vehicles that fly inside and beyond the atmosphere, from helicopters and other vertical take-off aircraft to airliners, supersonic aircraft and spacecraft. The programme is built around five sub-disciplines: aerodynamics, flight dynamics and control, propulsion, structures, and design. After shared foundations in mathematics, physics, chemistry and engineering mechanics, every student chooses either the aeronautical or the astronautical track and completes all of that track's required courses; courses from the other track can be taken as electives for a broader education. Recent electives have included flight testing, hybrid rocket design, high-speed aerodynamics, computational structural dynamics and remotely piloted vehicle design, and students can take elective research credits. Progress is checked against published academic benchmarks, with extra advising for students who fall behind.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/engineering/aerospace-engineering/aerospace-engineering-major/",
    degree: "Bachelor of Science (BS) in Aerospace Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEP(
        "Engineering",
        "Admission to the Clark School is competitive, and first-year applicants can name a specific engineering major or enter as Undecided Engineering. Under the rules for students entering in fall 2027 or later, directly admitted first-years must complete Calculus II (MATH141), Physics: Mechanics (PHYS161) and General Chemistry for Engineers (CHEM135, or an approved alternative) with a C- or better and keep at least a 2.0 GPA by the review at 45 credits; only one gateway course may be repeated, once. Aerospace Engineering is one of the Clark School's high-demand majors, so moving into it later requires a competitive review"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Finance (Robert H. Smith School of Business)",
    slug: "umd-bs-finance",
    level: "Bachelor",
    field: "Finance",
    duration: "Typically 4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION_DIFFERENTIAL("Smith School of Business"),
    description:
      "The Finance major in the Robert H. Smith School of Business covers three areas: corporate finance (how companies manage their money), investments (managing securities and portfolios) and financial institutions and markets. Within the major, students take Investments and Advanced Financial Management, then choose four further finance courses from options such as Wall Street finance, quantitative financial analysis, fixed income, portfolio management, applied equity analysis, futures and options, banking, international finance, private equity and venture capital, or the Lemma Senbet Fund investment fund management course. They also take an analytical course such as financial statement analysis, intermediate accounting or data modelling in business, an intermediate economics course and Money and Banking. The major prepares students for corporate financial analysis, investment analysis and portfolio management, investment banking, risk management, commercial banking and international finance, and for later study in business, economics or law.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/finance/finance-major/",
    degree: "Bachelor of Science (BS) in Finance",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_LEP(
        "Business",
        "Direct admission to the Smith School is offered to first-year applicants with the most competitive academic records, on a space-available basis. Students admitted directly are reviewed when they reach 45 credits (not counting AP and ESL credit): they must have a 2.0 GPA or better and have completed the gateway courses BMGT220 (accounting), BMGT230 (business statistics) and MATH120, 136 or 140, each with a C- or better, with only one repeat of one gateway course allowed. Students who enter UMD outside Smith compete for limited places later and need at least a 3.0 GPA"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Information Science",
    slug: "umd-bs-information-science",
    level: "Bachelor",
    field: "Information Science",
    duration: "Typically 4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION,
    description:
      "Offered by UMD's College of Information, the Information Science BS looks at where information, people and technology meet, drawing on computer science, management, social science and the humanities with a focus on users and their information needs. Required courses include precalculus, introductory psychology and statistics, programming for information science (introductory and object-oriented), information organisation, statistics for information science, database design and modelling, organisations and teamwork, technology infrastructure and architecture, user needs assessment and user-centred design, ending with an integrated capstone. Students add at least 15 credits of INST electives and can follow a cognate area in data science, cybersecurity and privacy, digital curation or health information. Graduates aim for roles in information management, IT, user-centred design and data analytics in sectors from finance and healthcare to consulting and cultural institutions. A grade of C- or better is required in all major courses.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/information/information-science-major/",
    degree: "Bachelor of Science (BS) in Information Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Admission route: Information Science is not a Limited Enrollment Program. Students admitted to UMD who list Information Science as their preferred major start directly in the programme. It cannot be combined as a double major or double degree with the BA in Technology and Information Design",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "umd-ba-bs-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (at least 120 credits, including at least 41 credits for the major)",
    tuitionNote: UG_TUITION,
    description:
      "UMD's Department of Economics, in the College of Behavioral and Social Sciences, studies how people, firms and governments make decisions under scarcity, covering topics from inflation, unemployment and poverty to financial markets, trade, health care and environmental quality. Majors choose a Bachelor of Arts track, which applies economic analysis to social issues, or a more quantitative Bachelor of Science track focused on the methods of economic analysis. Both start with principles of micro- and macroeconomics and calculus, then move to intermediate theory and statistics (with an extra methods and tools course and econometrics on the BS track), at least one upper-level course in quantitative analysis and several upper-level topic electives. All major courses need a C- or better and a 2.0 average. The department suggests that students aiming for graduate school in economics take the full econometrics sequence and advanced calculus and linear algebra. Graduates work in government, international agencies, business, finance and banking, journalism and politics, or continue to law, business or public policy study.",
    officialProgramUrl:
      "https://academiccatalog.umd.edu/undergraduate/colleges-schools/behavioral-social-sciences/economics/economics-major/",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Admission route: Economics is not a Limited Enrollment Program, so students admitted to UMD with Economics as their preferred major are admitted directly to it. To stay in the major, students must pass benchmark courses within two semesters of entering it, with a C- or better: ECON200, ECON201 and MATH120 or MATH140 for the BA, or ECON200, ECON201, MATH140 and ECON300 for the BS. Each student agrees an individual benchmark plan with an economics advisor",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "umd-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "Typically 2 years full-time (30 credits, thesis or non-thesis)",
    tuitionNote: `${GRAD_STANDARD_RATE}. The Office of Extended Studies estimates total tuition for the 30-credit M.S. at US$57,480 at the 2026-27 non-resident rate. M.S. admission does not come with funding; students may apply for hourly teaching assistant roles (with no tuition remission or health insurance), research assistantships with faculty or other campus jobs, and the department notes that such support for master's students is limited and competitive. ${GRAD_LIVING}`,
    description:
      "The Department of Computer Science's research-oriented M.S. is meant for students who want rigorous training and research skills in computing but are not yet ready to commit to a PhD, and its courses are the same ones taken by PhD students. The degree requires at least 30 credits with a B average, all at the 400 level or above, with at least 18 credits at the 600-800 level and at least 21 in computer science. Students must pass at least four qualifying courses at the 600-800 level covering four of the department's eight areas, earning an A in two of them and a B or better in the other two. The default non-thesis option ends with a scholarly paper of conference or journal quality approved by a CS faculty member (up to six credits of non-thesis research can count), while the thesis option requires six credits of thesis research, a written thesis and an oral defence. The department works across artificial intelligence, systems and networking, databases, programming languages, software engineering, scientific computing, theory, computer vision, graphics, human-computer interaction and bioinformatics.",
    officialProgramUrl: "https://www.cs.umd.edu/grad/ms-catalog",
    degree: "Master of Science (M.S.) in Computer Science",
    intake: "Fall semester only (external applicants are not admitted for spring)",
    applicationDeadline:
      "Fall 2027 entry: apply by 4 December 2026 for both international and domestic applicants (the portal opened on 1 July 2026; recommenders have two extra weeks to submit letters). Decisions are released from mid-February to late March 2027, and funded offers must be accepted by 15 April 2027. For timely I-20 issuance, admitted international students should submit their iTerp request by 1 May 2027. Select programme code CSMS in the Graduate School application",
    admissionRequirements: [
      "Application materials: transcripts from all colleges attended (unofficial copies for review), a statement of purpose describing your academic background, research interests and goals, three letters of recommendation from people who can judge your academic or research potential, and a CV. GRE scores are not required for the M.S. and leaving them out does not count against you. Competitive applicants usually have a bachelor's degree in computer science or a close field, evidence of research potential or substantial independent projects, and coursework in programming languages, data structures, algorithms, Calculus I and II and linear algebra. The department reports M.S. admission rates of 4% in 2023, 9.2% in 2021 and 4.7% in 2020",
      `${GRAD_ENGLISH}. The department follows the Graduate School policy and cannot waive it; self-reported scores are not accepted`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering (Master of Engineering)",
    slug: "umd-meng-electrical-computer-engineering",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration: "30 credits (10 courses), coursework only, no thesis",
    tuitionNote:
      "Fall 2026 to summer 2027: the Maryland Applied Graduate Engineering (MAGE) on-campus rate is US$1,271 per credit hour for residents and non-residents alike, so the 30-credit degree comes to about US$38,130 in tuition, plus mandatory fees of US$738 a semester for 9 or more credits on the College Park campus (US$382.50 for 1-8 credits). Courses outside the MAGE-rated subjects, or with differential tuition (for example business or Science Academy courses), are charged at their own rate. The programme offers no departmental assistantships or fellowships. Students who need a UMD-issued I-20 pay a US$125 international student fee each semester and are charged for the Student Health Insurance Plan (US$2,939 for 2026-27) unless they hold approved other insurance. The Office of Student Financial Aid's 2026-27 graduate budget adds about US$23,000 a year for off-campus housing and food (US$17,724), books, transport, personal costs and loan fees on top of tuition and fees. 2027-28 rates had not been published when we checked",
    description:
      "This practice-oriented Master of Engineering is offered by MAGE, the Clark School's applied graduate engineering unit, together with the Department of Electrical and Computer Engineering, and is taught in person at College Park. Students take six ENEE courses at the 600 level or above to cover the core foundations of electrical and computer engineering, plus four technical electives. Pre-approved electives include further ENEE graduate courses and applied courses in software engineering, embedded systems, advanced networking, network security, reverse software engineering, robot learning, data science, machine learning applied to cybersecurity, fundamentals of AI and machine learning, the Internet of Things and software-defined networking. There is no research or thesis. MAGE says the industry-focused electives are designed to help students win internships and full-time jobs, and that its graduates have been hired by Fortune 500 companies and technology start-ups.",
    officialProgramUrl: "https://mage.umd.edu/programs/electrical-computer",
    degree: "Master of Engineering (M.Eng.) in Electrical and Computer Engineering",
    intake: "Fall or spring semester (international on-campus applicants)",
    applicationDeadline:
      "Fall 2027 entry: international applicants who need a student visa must apply by the on-campus international deadline, which MAGE lists as 8 March and the Graduate Catalog as 9 March 2027 (domestic on-campus applicants have until 31 July 2027). The spring international deadline is 24 September, so spring 2027 has closed; spring 2028 would follow the next cycle. The application opens each July. Apply through the Graduate School and choose the programme ending in \"M.Eng.\" with \"Professional\" in its title",
    admissionRequirements: [
      "A bachelor's degree in electrical and/or computer engineering with a GPA of 3.0 or better. Applicants with another STEM degree must first complete Calculus I and II, a programming course in C, C++ or Java, introductory micro- and nanoelectronics and computer organisation (engineering probability, signals and systems, and algorithms and data structures are recommended). Application materials: unofficial transcripts and degree certificates (MAGE does not accept third-party evaluations), two letters of recommendation, a short required statement confirming you understand the degree has no research, thesis or financial assistance (a 500-word goals statement is optional), short personal experience prompts, and a resume (strongly recommended). GRE scores are recommended but not required, and applicants below a 3.0 GPA are encouraged to show relevant work experience and strong GRE scores",
      `${GRAD_ENGLISH}. MAGE adds that on-campus applicants must at least reach the English Bridge Program range, and anyone in the Intensive English range will not be considered`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science (Science Academy)",
    slug: "umd-ms-data-science",
    level: "Master",
    field: "Data Science",
    duration: "30 credits (10 courses), non-thesis; can be completed in under two years",
    tuitionNote:
      "2026-27: Science Academy programmes charge a flat rate that is the same for residents and non-residents, US$4,484 per course for in-person (PCS) sections, so the 10-course degree comes to an estimated US$44,840 in tuition. Mandatory graduate campus fees are added each fall and spring (US$738 for 9 or more credits, US$382.50 for 8 or fewer), with separate summer fees. Students who need a UMD-issued I-20 pay a US$125 international student fee each semester and are charged for the Student Health Insurance Plan (US$2,939 for 2026-27) unless they hold approved other insurance. The Office of Student Financial Aid's 2026-27 graduate budget adds about US$23,000 a year for off-campus housing and food (US$17,724), books, transport, personal costs and loan fees on top of tuition and fees. 2027-28 rates had not been published when we checked",
    description:
      "The M.S. in Data Science is run by the Science Academy in the College of Computer, Mathematical, and Natural Sciences and is designed to prepare students to work as data scientists. It teaches the theory and practice of the field across statistics (from general linear models to Bayesian estimation), machine learning beyond classical statistics (such as neural networks, support vector machines, decision trees and ensembles), computing (databases and scripting languages such as Python) and communicating results. The seven core courses are probability and statistics, principles of data science, principles of machine learning, data representation and modelling, big data systems, algorithms for data science, and communication in data science and analytics, and students add three electives from options such as deep learning, natural language processing, cloud computing, computer vision, robotics and big data analytics. Teaching is face to face at College Park, mostly in the evenings, with at least one online course; full-time students take three courses a semester. The programme is practical and offers no research opportunities, so the Science Academy points research-minded students to the M.S. in Computer Science instead.",
    officialProgramUrl: "https://cmns.umd.edu/graduate/science-academy/data-science/master-science",
    degree: "Master of Science (M.S.) in Data Science",
    intake: "Fall or spring semester",
    applicationDeadline:
      "Fall 2027 entry: international applicants by 26 February 2027 (domestic 28 May 2027). Spring entry: international applicants by 30 September (spring 2027 has closed; domestic 30 October 2026). Apply through the UMD Graduate School application",
    admissionRequirements: [
      "Prior coursework showing quantitative ability, including Calculus II, linear algebra and statistics, and proficiency in programming shown through coursework or substantial software development experience. Application materials: a statement of purpose, transcripts, a letter of recommendation, a CV or resume and a description of research or work experience. The GRE is optional",
      GRAD_ENGLISH,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Information Management",
    slug: "umd-mim-information-management",
    level: "Master",
    field: "Information Management",
    duration: "36 credits (12 courses); as little as two years (four semesters) full-time",
    tuitionNote: `${GRAD_STANDARD_RATE}. The College of Information adds a course fee of US$50 per credit for its 499-799-level INST, LBSC and INFM courses, so a non-resident taking 9 credits pays about US$18,432 a semester including fees, and the 36-credit degree comes to about US$70,776 in tuition and course fees before mandatory fees. The college offers some merit-based aid. ${GRAD_LIVING}`,
    description:
      "The Master of Information Management (MIM) from UMD's College of Information prepares students to lead at the point where technology, data and organisations meet, drawing on management, computer science, information systems and information science. Everyone takes four core courses: information management ecosystems, information technology and organisational context, users and use context, and managing information projects, programmes and services. Students then follow the Data Science & Analytics track (for example machine learning models, predictive analytics, AI and robotic process automation), the Cybersecurity & Risk Management track (such as audit and compliance, critical infrastructure, incident response and human-centred cybersecurity) or a custom plan, and finish with either a thesis or an information management experience and capstone carried out with partner organisations. Courses run in person and online, by day and in the evening. The college reports that MIM graduates work at employers such as Accenture, Amazon, Capital One, Deloitte, Google, IBM, Microsoft, the World Bank and the US Department of Defense.",
    officialProgramUrl:
      "https://ischool.umd.edu/academics/masters-programs/master-of-information-management/",
    degree: "Master of Information Management (M.I.M.)",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: international applicants (and first-priority domestic applicants) by 29 January 2027; the final domestic deadline is 9 July 2027. Apply through the Graduate School's TerpEngage application",
    admissionRequirements: [
      "A bachelor's degree with at least a B (3.0 on a 4.0 scale) average across all academic work. Application materials: a statement of purpose, the MIM supplementary application questions on why the programme fits your goals, three letters of recommendation and transcripts. GRE or GMAT scores are optional. The committee also looks at potential for leadership and innovation in information management, as shown by earlier degrees and work experience",
      `${GRAD_ENGLISH}. The MIM programme requires a TOEFL score of at least 96 and admits only applicants who qualify for full enrolment`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Business Analytics & AI (Smith School of Business)",
    slug: "umd-ms-business-analytics-ai",
    level: "Master",
    field: "Business Analytics",
    duration: "30 credits over 3 semesters, full-time in person",
    tuitionNote:
      "The Smith School's most recently published rates for full-time in-person specialty master's programmes (fall 2025/spring 2026) are US$2,072.50 per credit for non-Maryland residents, or about US$62,175 for 30 credits, plus a US$738 mandatory fee each semester, a US$90 MS Association fee in fall and spring and a US$125 international student fee each semester. Smith estimates about US$18,000 a year for living expenses and about US$3,000 for books and medical costs. Admitted students pay two US$1,000 deposits to confirm their place. All admitted full-time in-person students are considered, first come first served, for limited financial awards such as the merit-based Terrapin Scholar award (US$2,500 to US$15,000). 2026-27 specialty master's tuition had not been posted on that page when we checked",
    description:
      "Smith's in-person M.S. in Business Analytics & AI is aimed at recent graduates from many backgrounds who want to use data to solve business problems, and no prior coding experience is required. Students learn statistical modelling, data visualisation, predictive analytics, simulation and optimisation, responsible use of AI and business intelligence tools, working in Python, R and SQL. The 2026-27 in-person plan runs over two fall semesters and a spring: database management systems, AI-augmented data programming in Python, data models and decisions, and decision analytics in the first fall; data visualisation and web analytics, enterprise cloud computing and big data, data mining and predictive analytics, sustainability analytics and computer simulation in spring; and business communication, price optimisation and revenue management and a capstone project in the final fall. An optional Analytics Bridge Program offers mini-courses in calculus, statistics, Python and SQL before classes begin. Smith reports that 81% of its recent business analytics graduates were employed within 180 days, with an average salary of US$87,000.",
    officialProgramUrl:
      "https://www.rhsmith.umd.edu/programs/business-masters/academics/business-analytics-ai",
    degree: "Master of Science (M.S.) in Business Analytics",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: Smith's business master's rounds are 15 October and 15 November 2026, 15 January 2027 (priority deadline for international candidates), 15 February 2027 (domestic priority) and 12 March 2027 (final deadline for international candidates), then 1 April 2027, after which applications are reviewed on a rolling basis. The first two rounds had passed when we checked. Decisions usually come within four weeks of a complete application",
    admissionRequirements: [
      "Application materials (all in-person Smith master's programmes): the US$90 application fee, an essay on your qualifications and interest, a current resume, one letter of recommendation and transcripts from every college attended, with an optional essay if your GPA is below 3.0 or you have work gaps. Prerequisite: statistics plus data analytics or calculus with a grade of B or higher",
      "Test: GMAT or GRE scores are required, but applicants are reviewed automatically for a waiver if they have a GPA of at least 3.2/4 (or 4/5, 8/10, 80/100) in a quantitative degree, or 24 months of relevant work experience after their bachelor's degree. Smith's average incoming business master's profile is a 3.4 GPA, GMAT 639 or GRE 309, and age 24",
      `${GRAD_ENGLISH}. Smith asks for TOEFL or IELTS (or PTE) if you do not hold a degree from a US institution or an English-speaking country`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Finance (Smith School of Business)",
    slug: "umd-mfin-finance",
    level: "Master",
    field: "Finance",
    duration: "30 credits over 2 or 3 semesters, full-time in person",
    tuitionNote:
      "The Smith School's most recently published rates for full-time in-person specialty master's programmes (fall 2025/spring 2026) list the Master of Finance at US$2,115 per credit for non-Maryland residents, or about US$63,450 for 30 credits, plus a US$738 mandatory fee each semester, a US$90 MS Association fee in fall and spring and a US$125 international student fee each semester. Smith estimates about US$18,000 a year for living expenses and about US$3,000 for books and medical costs. Admitted students pay two US$1,000 deposits to confirm their place. All admitted full-time in-person students are considered, first come first served, for limited financial awards such as the merit-based Terrapin Scholar award (US$2,500 to US$15,000). 2026-27 specialty master's tuition had not been posted on that page when we checked",
    description:
      "Smith's Master of Finance is designed for recent graduates, often with quantitative backgrounds, who want to move from financial theory to practice, and Smith lists international students seeking US work experience among its ideal candidates. The 30-credit degree has six two-credit core courses (financial management, capital markets, valuation in corporate finance, financial data analytics, machine learning in finance and derivative securities) and 18 credits in a focus area: Asset Management (for example portfolio management, quantitative investment strategies, fixed income, financial engineering and fintech), Corporate Finance and Risk Management (such as financial strategy, restructuring, advanced financial modelling and credit risk management) or Climate Finance. Students work on experiential projects with organisations such as Capital One, Deloitte and Google and can help manage part of Smith's Global Equity Fund, and AI tools are used across the curriculum for modelling, forecasting and research. Smith reports that more than four in five recent business master's graduates found jobs within 180 days, with an average salary of US$87,000.",
    officialProgramUrl: "https://www.rhsmith.umd.edu/programs/business-masters/academics/finance",
    degree: "Master of Finance (M.Fin.)",
    intake: "Fall semester",
    applicationDeadline:
      "Fall 2027 entry: Smith's business master's rounds are 15 October and 15 November 2026, 15 January 2027 (priority deadline for international candidates), 15 February 2027 (domestic priority) and 12 March 2027 (final deadline for international candidates), then 1 April 2027, after which applications are reviewed on a rolling basis. The first round had passed when we checked. Decisions usually come within four weeks of a complete application",
    admissionRequirements: [
      "Application materials (all in-person Smith master's programmes): the US$90 application fee, an essay on your qualifications and interest, a current resume, one letter of recommendation and transcripts from every college attended, with an optional essay if your GPA is below 3.0 or you have work gaps. Prerequisite: statistics with a grade of B or higher",
      "Test: GMAT or GRE scores are required (GMAT code SQT-N8-48), but applicants are reviewed automatically for a waiver if they have a GPA of at least 3.2/4 (or 4/5, 8/10, 80/100) in a quantitative degree, or 24 months of relevant work experience after their bachelor's degree. Smith's average incoming business master's profile is a 3.4 GPA, GMAT 639 or GRE 309, and age 24",
      `${GRAD_ENGLISH}. Smith asks for TOEFL or IELTS (or PTE) if you do not hold a degree from a US institution or an English-speaking country`,
      GRAD_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA (Smith School of Business)",
    slug: "umd-mba-full-time",
    level: "Master",
    field: "Business Administration",
    duration: "48 credits: two-year option with internship, or one-year accelerated option (one-year path only for applicants already in the US who do not need visa sponsorship)",
    tuitionNote:
      "Fall 2026: Full-Time MBA tuition is US$1,759.50 per credit hour regardless of residency, so the 48-credit degree comes to about US$84,456 in tuition. Smith estimates one year (24 credits) at US$44,454: US$42,228 tuition and US$2,226 in fees (a one-time US$750 MBA Association fee and the US$738 university fee each semester), not counting the US$125 international student fee each semester. All applicants are automatically considered for Smith scholarships and merit awards, up to full funding for the most competitive candidates, with best consideration by the scholarship priority deadline. Full-time students are also charged for the Student Health Insurance Plan (US$2,939 for 2026-27) unless they hold approved other insurance, and the Office of Student Financial Aid's 2026-27 graduate budget adds about US$23,000 a year for off-campus housing and food (US$17,724), books, transport, personal costs and loan fees",
    description:
      "The Robert H. Smith School of Business Full-Time MBA in College Park has a redesigned 48-credit curriculum. Eleven two-credit core courses cover leadership and teamwork, financial and managerial accounting, managerial economics and public policy, data-driven decision-making, financial management, marketing, strategy, digital transformation, operations and the global economy, and the remaining 26 credits are electives approved by an advisor, with focus areas including information systems & AI and supply chain management. AI and analytics tools are built into coursework, and students apply what they learn in Execution Labs with real clients, consulting-style projects, case competitions and the Mayer Fund. The two-year option includes a summer internship and suits career changers, and two-year students can add a Graduate Certificate in Technology Management. Smith reports that recent Full-Time MBA graduates had a median salary of US$125,000 and an average signing bonus of US$39,000, with nearly four in five accepting jobs within three months of graduating.",
    officialProgramUrl: "https://www.rhsmith.umd.edu/programs/full-time-mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall 2027 (two-year MBA); summer 2027 (one-year accelerated MBA, not open to applicants needing a visa)",
    applicationDeadline:
      "Fall 2027 two-year MBA rounds: 1 October and 1 November 2026, 15 December 2026 (scholarship priority deadline for international candidates), 15 January 2027 (domestic scholarship priority), 12 March 2027 (final deadline for international candidates) and 15 April 2027 (final domestic deadline), with rolling review afterwards. Elsewhere the same admissions page says international applicants must submit complete applications by 15 March, so aim for 12 March. The October and November rounds had passed when we checked. Decisions usually come 3 to 6 weeks after a complete application, and interviews are by invitation",
    admissionRequirements: [
      "A bachelor's degree, and Smith says competitive candidates have strong quantitative skills and at least five years of full-time work experience after their degree (the average student has six years of experience and a 3.25 undergraduate GPA). Application materials: the US$90 fee, scanned transcripts from every college attended (with English translations; third-party evaluations are not accepted), a professional resume and two recommenders, preferably current or former supervisors. Quantitative ability must be shown through B grades or higher in quantitative courses, professional experience or the GMAT/GRE",
      "Test: GMAT or GRE scores are required unless you qualify for a waiver, with either a 3.4 GPA or higher in a quantitative undergraduate degree or at least 24 months of relevant work experience after your bachelor's degree; waiver reviews start automatically once your application is complete. The average admitted student scores in the 55th-72nd percentile on the GMAT Focus Edition",
      GRAD_ENGLISH,
      GRAD_MINIMUM,
    ],
  },
];
