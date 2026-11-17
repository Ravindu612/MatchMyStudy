import type { Program } from "../../programs";

// Michigan State University (MSU): 8 undergraduate majors for fall 2027 first-year entry (College of Engineering, the
// Eli Broad College of Business, the School of Packaging and the College of Natural Science) and 7 full-time,
// on-campus graduate programmes (Broad Full-Time MBA, MS Finance, MS Accounting, MS Computer Science, MS Electrical
// and Computer Engineering, MS Mechanical Engineering and MS Data Science).
// Sources (viewed 17 November 2026): Office of Admissions first-year and international pages on dates and deadlines,
// admission criteria, ACT/SAT-optional policy, how to apply, English language proficiency and international
// scholarships (admissions.msu.edu/apply/first-year/..., /apply/international/..., /cost-aid/scholarships/
// international); the Admissions 2026-27 cost estimates (admissions.msu.edu/cost-aid); Office of Financial Aid
// 2026-27 sample budgets (finaid.msu.edu/undergrad/manage-aid); Office of the Controller tuition, fee and tax rates
// for fall 2026 and spring 2027 for international undergraduate and graduate students (controller.msu.edu/student-
// accounts/tuition-rates-by-semester/international-undergrad-fall-spring, /international-graduate-fall-spring); the
// Office for International Students and Scholars financial assistance page (oiss.isp.msu.edu/resources/financial);
// College of Engineering degree pages and undergraduate secondary admission (engineering.msu.edu/academics/majors-
// degrees/..., /admissions/undergraduate); Broad College undergraduate admissions, curriculum and major pages
// (broad.msu.edu/undergraduate/...); School of Packaging undergraduate, curriculum and admissions pages
// (canr.msu.edu/packaging/undergraduate_information/...); the CMSE Data Science B.S. page and planning guide
// (cmse.msu.edu/Academics/undergrad_program/bsds.aspx); Broad Full-Time MBA overview, admissions, international
// criteria, curriculum and tuition pages and the fall 2027 deadline graphic (broad.msu.edu/masters/mba/...); Broad
// MS Finance and MS Accounting overview, admissions, curriculum and tuition pages (broad.msu.edu/masters/finance/...,
// /masters/accounting/...); Graduate School English language competency (grad.msu.edu/admissions/apply/international-
// applicants/english-language-competency); Registrar Academic Programs Catalog entries for the MS in Computer Science,
// Electrical and Computer Engineering, Mechanical Engineering and Data Science (reg.msu.edu/AcademicPrograms/...);
// and the MSDS site and student handbook (msds.msu.edu). Costs are in US dollars. MSU is a public university and
// charges international students non-resident tuition. It runs on semesters (fall and spring, plus summer).

const UNIVERSITY = {
  universitySlug: "michigan-state-university",
  universityName: "Michigan State University",
  country: "United States",
  language: "English",
  campus: "East Lansing, Michigan",
  programType: "Full-time",
} as const;

// Controller fall 2026/spring 2027 international undergraduate flat rate (12-18 credits a semester): freshman and
// sophomore 22,520 (all units); junior and senior 23,188 (core/professional units, e.g. Natural Science, Agriculture
// and Natural Resources) or 23,497 (Broad and Engineering). Annual figures below are our sums of two semesters.
// Admissions 2026-27 international first-year estimate: tuition 45,040; fees and taxes 1,966; food and housing 14,146;
// books and supplies 1,420; personal 3,930; medical 3,998; travel 2,600; total 73,100.
const ugTuition = (upperDivision: string) =>
  `2026-27 (fall 2026 and spring 2027 rates): MSU charges international undergraduates a flat tuition rate for 12 to 18 credits a semester, plus a per-credit charge for each credit above 18. Freshmen and sophomores pay US$22,520 a semester (US$45,040 a year). ${upperDivision} The Admissions office estimates the 2026-27 cost for an international first-year student at US$73,100: US$45,040 tuition, US$1,966 in fees and taxes, US$14,146 for food and housing (a double room and the Silver dining plan, including the three weeks between the fall and spring semesters), US$1,420 for books and supplies, US$3,930 for personal costs, US$3,998 for medical costs and US$2,600 for travel. This is also the amount international students must show as financial proof before MSU issues the I-20, and MSU finalises the following year's costs each July. International students cannot receive US federal financial aid, but every admitted international first-year is considered automatically for the merit-based MSU Non-resident Scholarship (decisions by mid-February), and Honors College invitees can be offered the Honors College Excellence Scholarship of US$13,000 a year for eight semesters. Applying by the 1 November Early Action deadline guarantees maximum scholarship consideration. MSU reports that in 2025-26, 76% of international first-year students received gift aid averaging US$19,348`;

const UG_TUITION_ENGINEERING = ugTuition(
  "Juniors and seniors in the College of Engineering pay US$23,497 a semester (US$46,994 a year, our sum), and students admitted to the college also pay a College of Engineering program fee of US$785 a semester.",
);

const UG_TUITION_BROAD = ugTuition(
  "Juniors and seniors in the Eli Broad College of Business pay US$23,497 a semester (US$46,994 a year, our sum), and students admitted to the Broad College also pay a program fee of US$750 a semester.",
);

const UG_TUITION_CORE = ugTuition(
  "Juniors and seniors in this college pay MSU's core and professional upper-division rate of US$23,188 a semester (US$46,376 a year, our sum).",
);

const UG_INTAKE =
  "Fall semester (fall 2027 first-year entry). MSU says most students start in the fall and that admission for other semesters may be limited or not offered";

const UG_DEADLINE =
  "Fall 2027 entry, the same dates for international and US first-year applicants. MSU offers non-binding Early Action and Regular Decision; it has no Early Decision plan. Early Action: a complete application and every required document by 1 November 2026 (11:59 pm Eastern Time), with the Early Action option selected; this had passed when we checked. Early Action applicants are guaranteed an initial decision by 15 January 2027 and maximum scholarship consideration. Regular Decision is reviewed on a rolling basis: complete applications submitted by the 1 February 2027 priority deadline are guaranteed a decision by 31 March 2027, and the final application deadline is 1 April 2027. Admitted students must accept the offer and pay the acceptance fee by 1 May 2027. MSU advises applying by 1 November because qualified applicants have recently outnumbered available places";

const UG_TESTING =
  "Testing: optional, including for international applicants. You choose on the application whether the SAT or ACT should be considered, and you can self-report scores; admitted students who self-reported must send official scores (SAT code 1465, ACT code 2032) before New Student Orientation. MSU uses the highest total SAT or composite ACT on file and does not combine subscores from different sittings. Applicants without a score are still considered for merit scholarships. For the fall 2026 entering class, the middle 50% ranges were a 3.5-4.0 high school GPA, ACT 25-31 and SAT 1100-1320";

const UG_ENGLISH =
  "English proficiency: required if you are not a US citizen or permanent resident and English is not your first language. Minimums for regular admission: TOEFL iBT taken before 21 January 2026, 79 with no section below 17; TOEFL iBT taken on or after 21 January 2026 (1-6 scale), 4 with no section below 4 except 3.5 in speaking (Home Edition accepted, MyBest scores not; code 1465); IELTS or IELTS Indicator 6.5; Duolingo English Test 110; PTE Academic 53 with no subscore below 48; SAT Evidence-Based Reading and Writing 510 with a total of at least 1110; ACT English 18 with a composite of at least 23; AP English Language 4. MSU also accepts its own MSUELT and CELP tests and set grades in English in IGCSE, GCSE, O-level, A-level, Singapore O/A-level and IB exams, and three years of full-time US high school (from ninth grade) with a 3.0 GPA and no English-learner classes. Lower scores (for example TOEFL 60-78, IELTS 6.0, Duolingo 95-105 or PTE 46) can lead to provisional admission, in which case you take the MSUELT on arrival and may be placed in English Language Center courses. Most scores can be self-reported, with official results due before enrolment";

const UG_ACADEMIC =
  "Application: one application through the MSU application, the Common App or Coalition with Scoir (MSU has no preference), a US$75 application fee, official transcripts, mark sheets and certificates sent directly by every secondary school and examination board (with official English translations where needed) and one essay of 250 to 650 words from MSU's prompt list. MSU does not want letters of recommendation, photos, portfolios or extra essays. There are no minimum admission requirements; MSU reviews your secondary school results, the strength of your curriculum, recent grade trends, class rank, test results if submitted, English proficiency, and leadership, talents and conduct. You choose a major preference on the application and can change it until 1 May. After admission, international students upload a signed affidavit of support and a bank statement so MSU can issue the I-20";

const ENGINEERING_ADMISSION = (major: string, extraCourse: string, gpa: string) =>
  `College of Engineering admission: you are admitted to MSU, not straight into an engineering major. Students who list an engineering preference apply to the College of Engineering (secondary admission) during the semester in which they finish the requirements, and must be admitted before reaching 56 credits. The ${major} requirements are at least 28 credits earned at MSU, Calculus I and II (MTH 132 and 133) with at least a 2.0 in each and a 2.0 average across all mathematics courses, ${extraCourse}, and a combined GPA (the average of your cumulative and technical GPAs) of at least ${gpa}`;

const BROAD_ADMISSION =
  "Broad College admission: enrolment in the Eli Broad College of Business is limited and admission is competitive. High school students who choose a Broad major on the MSU first-year application are considered for direct admission to the college; current MSU students can instead apply through the Broad College's standard admission process, which has its own academic and non-academic requirements. Students admitted to the Broad College from fall 2025 onwards earn a Bachelor of Science (earlier students received a Bachelor of Arts), complete the Broad core curriculum and the Broad 360 integrative experience, and need a 2.0 minimum GPA in their major field courses";

// Financial Aid 2026-27 graduate sample budget, out-of-state, 9 credits a semester: tuition 32,668; fees and taxes 388;
// food and housing 19,688; books and supplies 1,998; personal 3,930; travel 2,600; total 61,272. International extras
// from the Controller and Broad MBA 2026-27 budget: international student fee 75 a semester (150 a year) and health
// insurance 3,998. Non-tuition total 32,752 is our sum (388 + 150 + 19,688 + 1,998 + 3,930 + 2,600 + 3,998).
const GRAD_COA =
  "The Office of Financial Aid's 2026-27 graduate sample budget for a non-resident student taking 9 credits a semester is US$61,272: US$32,668 tuition (at the standard master's rate), US$388 in fees and taxes, US$19,688 for food and housing, US$1,998 for books and supplies, US$3,930 for personal costs and US$2,600 for travel. International students also pay a US$75-a-semester international student fee, and MSU's international budgets add US$3,998 for health insurance, so non-tuition costs come to about US$32,752 a year (our sum). International students are not eligible for US federal financial aid; graduate funding may be available through academic departments (assistantships, fellowships and departmental awards) and the Graduate School";

const GRAD_ENGLISH =
  "English proficiency (MSU Graduate School minimums for regular admission; some departments set higher scores): TOEFL iBT taken before 21 January 2026, an average of 80 with reading, listening and speaking at least 19 and writing at least 22; TOEFL iBT taken after 21 January 2026, 4.5 overall with at least 4 in reading and speaking and 4.5 in listening and writing (MSU code 1465); IELTS 6.5 with no band below 6.0; PTE Academic 53 with reading, listening and speaking at least 51 and writing at least 59; Duolingo English Test 110. MSU also accepts the MELAB and its own MSUELT. Provisional admission is possible with lower scores (for example TOEFL 70 or 3.5, IELTS 6, PTE 48 or Duolingo 95-105); provisionally admitted students take the MSUELT on arrival, study at the English Language Center as placed and must clear the requirement within one calendar year. The test is normally not needed for citizens of the English-speaking countries MSU lists who studied in English, or for applicants with a bachelor's degree earned mainly in the US or another English-speaking country, a bachelor's from MSU or a master's from an AAU university's US campus";

// Controller 2026-27 international graduate tuition: master's core/professional 1,814.75 a credit; master's in the
// College of Engineering 1,922.00 a credit; MS in Accounting 2,064.75 a credit; Broad MBA 29,138 a semester; MS in
// Finance 51,000 and MS in Data Science 39,000 for the whole programme. Programme totals at 30 credits are our sums.
const ENGINEERING_MS_TUITION =
  `2026-27: international master's students in the College of Engineering pay US$1,922 per credit, so the 30-credit degree comes to about US$57,660 in tuition (our sum). ${GRAD_COA}`;

export const michiganStateUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (BS)",
    slug: "msu-computer-science-bs",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "MSU's Department of Computer Science and Engineering runs an ABET-accredited computer science degree inside the College of Engineering. Students start with Introduction to Programming I, Introduction to Engineering Design, Calculus I and II, multivariable calculus and two semesters of calculus-based physics, plus a biology course and a lab. The core then covers Programming II, a tools and teamwork course, discrete structures, computer organisation and architecture, computer systems, algorithms and data structures, two semesters of software engineering, fundamentals of artificial intelligence, data management and the cloud, professional ethics, probability and statistics, and matrix algebra. Students pick five advanced electives from options such as machine learning, operating systems, parallel programming, computer networks, computer security, autonomous vehicles, computer graphics, mobile and web application development, database systems and big data analysis, and finish with the Collaborative Design capstone. Optional concentrations are offered in artificial intelligence, computer systems, cybersecurity, multimedia and graphics, and theory. The curriculum shown applies to students admitted to the major from spring 2027",
    officialProgramUrl: "https://engineering.msu.edu/academics/majors-degrees/computer-science-bs",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ADMISSION(
        "Computer Science",
        "Physics for Scientists and Engineers I (PHY 183), Introduction to Engineering Design (EGR 100) and Introduction to Programming I (CSE 231); computer science applicants do not need the general chemistry course other engineering majors require",
        "3.0",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering (BS)",
    slug: "msu-mechanical-engineering-bs",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "The Department of Mechanical Engineering's ABET-accredited degree builds on the College of Engineering's mathematics, physics, chemistry and programming foundation. Major courses cover thermodynamics, mechanics of deformable solids, graphic communications, fluid mechanics with a lab, dynamics, mechanical engineering analysis, heat transfer with a lab, control systems with a vibration and controls lab, mechanical vibrations, and a two-course sequence in mechanical design and manufacturing, plus a professional issues course. Students take nine credits of senior electives and at least three credits of design-intensive electives, and finish with the Mechanical Engineering Design Projects capstone. Optional concentrations are available in aerospace engineering, automotive powertrain, biomedical engineering, computational design, cryogenic engineering, energy, engineering mechanics, global engineering and manufacturing engineering, and adding one may take the degree beyond 128 credits",
    officialProgramUrl: "https://engineering.msu.edu/academics/majors-degrees/mechanical-engineering-bs",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ADMISSION(
        "Mechanical Engineering",
        "General Chemistry (CEM 141 or 151, or an approved substitute), PHY 183, EGR 100 and Introduction to Programming I (CSE 231)",
        "3.1, the highest of any engineering major",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering (BS)",
    slug: "msu-electrical-engineering-bs",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "Typically 4 years full-time (128 credits)",
    tuitionNote: UG_TUITION_ENGINEERING,
    description:
      "The Department of Electrical and Computer Engineering's electrical engineering degree pairs the College of Engineering foundation with a 38-credit core: circuits and systems I and II with a lab, digital logic, electrical engineering analysis, electronic circuits with a lab, electromagnetic fields and waves, control systems, energy conversion and power electronics, microprocessors and digital systems, signal processing, electronic devices, and ethics and professionalism. Students complete a senior design course and 18 credits of major electives, including at least 12 credits from the focus areas with at least one laboratory course, covering topics such as VLSI design, embedded cyber-physical systems, smart sensors, autonomous vehicles, communication networks, RF circuits, electro-optics, microelectronic fabrication, robotics, power systems and biomedical instrumentation. Optional concentrations include biomedical engineering, digital systems and IoT, EM, acoustics and optics, microelectronics, RF and wireless, robotics and automation, and smart devices",
    officialProgramUrl: "https://engineering.msu.edu/academics/majors-degrees/electrical-engineering-bs",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      ENGINEERING_ADMISSION(
        "Electrical Engineering",
        "General Chemistry (CEM 141 or 151, or an approved substitute), PHY 183, EGR 100 and CSE 220",
        "2.9",
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Supply Chain Management (BS)",
    slug: "msu-supply-chain-management-bs",
    level: "Bachelor",
    field: "Supply Chain Management",
    duration: "Typically 4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION_BROAD,
    description:
      "Supply chain management at the Broad College brings manufacturing operations, purchasing, transportation and physical distribution together in one programme, and the college highlights its U.S. News ranking of #2 nationally in supply chain management and logistics. After the Broad business core, majors take procurement and supply chain management, manufacturing and service operations management, logistics and transportation management, data analytics in supply chain management (forecasting, inventory, network design and sourcing decisions using spreadsheet modelling), and an integrated supply chain capstone, with an option for an experiential course solving industry supply chain problems alongside engineering students. They add four to six credits of SCM electives, such as short workshops on procurement contracting and customs. Typical roles include industry analyst, consultant, procurement analyst, purchasing manager, transportation director and manufacturing supervisor",
    officialProgramUrl: "https://broad.msu.edu/undergraduate/programs/supply-chain-management-major/",
    degree: "Bachelor of Science (BS) in Supply Chain Management",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [BROAD_ADMISSION, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Finance (BS)",
    slug: "msu-finance-bs",
    level: "Bachelor",
    field: "Finance",
    duration: "Typically 4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION_BROAD,
    description:
      "The finance major in the Broad College's Department of Finance has four required courses and three electives on top of the business core. The required courses are intermediate financial accounting (or intermediate accounting for finance majors), introduction to investments, financial modelling and advanced business finance. Students then choose nine credits from electives such as advanced investments, management of financial institutions, financial data analytics, deep learning and neural networks in finance, entrepreneurial finance, international financial management, security analysis, wealth management sales and relationships, debt and money markets, behavioural finance, investment strategies and speculative markets, and financial risk management. The department suggests course combinations for particular career paths",
    officialProgramUrl: "https://broad.msu.edu/undergraduate/programs/finance-major/",
    degree: "Bachelor of Science (BS) in Finance",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [BROAD_ADMISSION, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Accounting (BS)",
    slug: "msu-accounting-bs",
    level: "Bachelor",
    field: "Accounting",
    duration: "Typically 4 years full-time (at least 120 credits)",
    tuitionNote: UG_TUITION_BROAD,
    description:
      "The Broad College's Department of Accounting and Information Systems says it has been Michigan's largest provider of certified public accountants for more than 50 years. Accounting majors take a career-preparation course, intermediate financial accounting I and II, accounting information systems, federal income tax accounting, cost and managerial accounting, auditing, and governmental and not-for-profit accounting, plus the law of commercial transactions, alongside the Broad business core. The department notes that the Big Four public accounting firms recruit at Broad, that around 200 students do accounting internships each year, and that students can earn both a bachelor's and an MS in five years, meeting the 150 credit hours Michigan requires for CPA certification",
    officialProgramUrl: "https://broad.msu.edu/undergraduate/programs/accounting-major/",
    degree: "Bachelor of Science (BS) in Accounting",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [BROAD_ADMISSION, UG_TESTING, UG_ENGLISH, UG_ACADEMIC],
  },

  {
    ...UNIVERSITY,
    name: "Packaging (BS)",
    slug: "msu-packaging-bs",
    level: "Bachelor",
    field: "Packaging Science",
    duration: "Typically 4 years full-time (120 credits)",
    tuitionNote: UG_TUITION_CORE,
    description:
      "MSU's School of Packaging, in the College of Agriculture and Natural Resources, started the first specialised packaging degree in 1952. The technical, science-based programme covers packaging materials (glass, plastics, paper and metals), packaging processes and systems, distribution dynamics, computer applications, design and prototyping, life cycle analysis and environmental impacts, and the economics of packaging. The 11-course packaging core makes up 35 of the 120 credits and includes more than 100 hours of laboratory work. Students add nine credits of packaging electives (for example RFID, virtual design and prototyping, sustainability, medical, perishables or hazardous materials packaging, or credit for an internship or study abroad), introduction to marketing or to supply chain management, and science and mathematics requirements: general chemistry with a lab, survey of organic chemistry, two semesters of physics, Calculus I and II, and microbiology or food safety. Graduates work as packaging engineers, structural designers, R&D specialists and consumer behaviour analysts in industries from food and consumer goods to medical and automotive",
    officialProgramUrl: "https://www.canr.msu.edu/packaging/undergraduate_information/",
    degree: "Bachelor of Science (BS) in Packaging",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "School of Packaging admission: first-year students are admitted to MSU and to the packaging lower division through the Office of Admissions. Packaging majors are reviewed automatically for the upper division when they reach junior standing (56 credits), which requires General Chemistry (CEM 141), Calculus I (MTH 132) and Physics (PHY 231) with at least a 2.0 in each and a cumulative MSU GPA of at least 3.0. Students who are not admitted must change out of the major",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science (BS)",
    slug: "msu-data-science-bs",
    level: "Bachelor",
    field: "Data Science",
    duration: "Typically 4 years full-time (the department's planning guide sets out the degree over years 1-2 and 3-4)",
    tuitionNote: UG_TUITION_CORE,
    description:
      "MSU's Bachelor of Science in Data Science is run by the Department of Computational Mathematics, Science and Engineering (CMSE) in the College of Natural Science, together with the Departments of Computer Science and Engineering and of Statistics and Probability. In the first two years students take two semesters of computational modelling and data analysis, an introduction to data science, Calculus I and II, multivariable calculus, matrix algebra with computational applications, calculus-based physics, general chemistry and a biology course. The last two years cover fundamentals of data science methods, optimisation methods in data science, Programming II, algorithms and data structures, probability and statistics for data science, 12 credits of 400-level data science electives in CMSE, computer science, statistics or mathematics, and an experiential learning capstone in data science. Graduates are prepared for roles such as data scientist, machine learning engineer and quantitative scientist",
    officialProgramUrl: "https://cmse.msu.edu/Academics/undergrad_program/bsds.aspx",
    degree: "Bachelor of Science (BS) in Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Admission to the major: you apply to MSU through the standard first-year application and choose Data Science as your major preference; the CMSE pages we checked do not describe a separate secondary admission process for this major",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA and STEM MBA (Broad College of Business)",
    slug: "msu-broad-full-time-mba",
    level: "Master",
    field: "Business Administration",
    duration: "21 months full-time (four semesters, with a summer internship in between)",
    tuitionNote:
      "2026-27: the Broad Full-Time MBA uses block tuition of US$29,138 a semester for non-resident and international students, letting students take up to 18 credits a semester and up to 68 credits over the four semesters. Broad's estimated 2026-27 annual cost for an international student is US$90,427: US$58,276 tuition, US$387 in student taxes and a US$150 international student fee (US$58,813 in all), plus a student budget of US$31,614 (US$19,688 room and board, US$3,930 personal, US$2,000 travel, US$1,998 books and supplies and US$3,998 health insurance). Every student needs a laptop, and Financial Aid can raise the budget by up to US$2,000 to cover one. For fall 2027, Broad guarantees a scholarship of at least US$20,000 and the in-state tuition rate to all admitted Round 1 applicants who accept and pay the deposit by the given deadline; Round 1 closed on 12 October 2026. Fellowships, assistantships and scholarships are also available",
    description:
      "Broad's Full-Time MBA is a cohort programme in East Lansing with classes in person Monday to Thursday. The 23.5-credit core covers financial accounting and reporting strategy, social issues in management, leadership and teamwork (including a first-semester Team Effectiveness Laboratory), accounting for decision-making and control, managerial economics, managerial communication, marketing strategy, supply chain management concepts, corporate investment decisions, managing people and organisations, and competitive strategy. Students then take 30.5 credits of concentrations and electives, choosing up to two concentrations from business analytics, entrepreneurship, finance, human resources and strategic management, marketing, supply chain management, and corporate social responsibility and sustainability, or building their own elective plan. The STEM MBA uses the same classes with more quantitative electives and is STEM-designated, which gives eligible international graduates up to three years of Optional Practical Training instead of one. Broad reports an average salary of US$120,000 and an average signing bonus of US$20,500 for the class of 2024",
    officialProgramUrl: "https://broad.msu.edu/masters/mba/",
    degree: "Master of Business Administration (MBA), with an optional STEM-designated curriculum",
    intake: "Fall 2027 (August)",
    applicationDeadline:
      "Fall 2027 entry: Round 1 closed on 12 October 2026 (decisions by 20 November 2026). Round 2: 11 January 2027 (decisions by 17 February 2027). Round 3, the last round for international applicants: 15 February 2027 (decisions by 19 March 2027). Round 4, 5 April 2027, is for domestic applicants only",
    admissionRequirements: [
      "A four-year bachelor's degree, or a three-year bachelor's plus a master's degree. Broad pays special attention to the last two undergraduate years (the average GPA for those years is 3.4). It strongly recommends at least two years of full-time work experience after the bachelor's degree (admitted students average four years); applicants with less are considered but are encouraged to send a test score and to have at least a 3.4 GPA",
      "GMAT, GRE or Executive Assessment: optional (averages are GMAT 604 and GRE 316). Since 1 May 2025 Broad no longer accepts at-home GRE scores",
      "Application materials: the online application and a US$85 application fee (waived for US citizens and permanent residents), transcripts (international applicants can upload scanned records with English translations; originals are needed if admitted, and third-party evaluations are not accepted), a résumé, a required written essay and an optional second essay, a two-minute video essay, at least one reference (two recommended, ideally supervisors) and, if shortlisted, an evaluative interview of about 30 minutes on Microsoft Teams or on campus. Admitted international students submit the Statement of Financial Proof within 14 days for the visa",
      "English proficiency (Broad MBA): non-native speakers need TOEFL iBT 100 (taken before 21 January 2026) or 4.5 (taken after that date), IELTS 7, Duolingo English Test 110 or PTE Academic 70 (MSU code 1465, department code 02); institutional TOEFL is not accepted. Waivers must be requested in the optional essay and are possible for a bachelor's earned in the US, a bachelor's from MSU, a master's from an AAU university's US campus, three years of full-time English-speaking work in the US, or English-medium high school and college study confirmed after the interview. Citizens of the English-speaking countries Broad lists who studied in English usually do not need a waiver",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Finance",
    slug: "msu-ms-finance",
    level: "Master",
    field: "Finance",
    duration: "One year full-time, in person (August to the end of the summer semester; 30 credits)",
    tuitionNote:
      `2026-27: tuition for the MS in Finance is a block fee of US$51,000 for non-resident and international students (US$46,500 in-state), paid in three equal instalments at the start of each semester. It covers credit tuition and departmental fees but not other university fees, books or course materials, and students should have a laptop. Broad says 40% of non-sponsored students receive financial support. For other living costs: ${GRAD_COA}`,
    description:
      "Broad's MS in Finance is a STEM-designated, full-time, on-campus programme (it is not offered part-time or online) that runs from August to the end of the following summer semester. The 30-credit, non-thesis (Plan B) degree requires 18 credits of 800-level finance courses, including Managerial Finance unless a waiver exam is passed, and 12 credits of approved electives in finance or related fields such as economics, statistics or mathematics, and students must maintain a 3.25 GPA. Courses span financial modelling and simulation, investments and security analysis, derivatives, mergers and acquisitions, multinational corporate finance, financial technology, deep learning and neural networks in finance, financial data analytics, quantitative risk management and venture capital. Students can follow concentrations in corporate finance, financial technology, investment banking, asset management, risk management or commercial banking, which appear on the transcript",
    officialProgramUrl: "https://broad.msu.edu/masters/finance/",
    degree: "Master of Science (MS) in Finance",
    intake: "August 2027 (fall start)",
    applicationDeadline:
      "Applications can be submitted at any time, with two rounds for complete applications: 1 February (decisions by 21 February) and 1 March (decisions by 20 March). Broad's page gives these dates without a year; for the August 2027 intake they fall in 2027",
    admissionRequirements: [
      "A four-year undergraduate degree with a cumulative GPA of at least 3.0, at least two years of full-time work experience after the bachelor's (can be waived for exceptional candidates), working computer skills, and the equivalents of MSU's Survey of Calculus I and Introductory Probability and Statistics for Business (otherwise remedial maths is required before the programme starts). A finance degree is not required",
      "GMAT (minimum 600) or GRE (minimum 310 verbal plus quantitative), taken within the last five years; a waiver can be requested when you apply",
      "Application materials: the online application (major code 6016) with a US$50 application fee, scanned transcripts and degree certificates (certified originals are requested if you are recommended for admission), two letters of recommendation (preferably at least one from a professor), a statement of objectives and financial proof if recommended for admission",
      "English proficiency (MS Finance): international applicants need IELTS 7 or TOEFL iBT 100 (MSU code 1465, department code 4102); applicants with lower or no scores may be admitted provisionally under university rules",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Accounting",
    slug: "msu-ms-accounting",
    level: "Master",
    field: "Accounting",
    duration: "Typically one year full-time (30 credits); some students take up to 18 months",
    tuitionNote:
      `2026-27: international MS in Accounting students pay US$2,064.75 per credit, about US$61,943 for the 30-credit degree (our sum); students without an accounting degree may need extra prerequisite courses. The Department of Accounting and Information Systems awarded more than US$400,000 in scholarships to undergraduate and graduate students last year, and there are limited graduate assistantships and grading jobs. ${GRAD_COA}`,
    description:
      "Broad's Master of Science in Accounting is a STEM-designated programme that meets Michigan's 150-credit-hour requirement for CPA certification, and the department says many students sit the CPA exam during the master's year. Students choose one of four concentrations, Taxation, Public and Corporate Accounting, Transaction Services (mergers and acquisitions) or Information Systems, and take 12 to 15 credits in it, plus 15 credits of electives, at least nine of them outside accounting. At least 24 credits must be at the 800 level and a 3.0 GPA is needed to graduate. Courses include tax research, corporate and multinational taxation, accounting and tax for mergers and acquisitions, financial statement analysis, financial reporting decisions, advanced auditing, value chain accounting and analytics, and ESG measurement and disclosure, supported by data visualisation workshops, team case studies and the Ernst & Young Communication Center",
    officialProgramUrl: "https://broad.msu.edu/masters/accounting/",
    degree: "Master of Science (MS) in Accounting",
    intake: "Fall (August), spring (January) or summer (May), as space permits; summer start is advised if you need prerequisites",
    applicationDeadline:
      "Rolling admission for each semester. For summer and fall 2027 starts, and for scholarship consideration, apply by 15 January 2027; a second review round follows 1 March 2027 if places remain. For a spring start the deadline is 1 October. Broad's page gives these dates without a year; the years shown are for the 2027 intakes",
    admissionRequirements: [
      "A bachelor's degree in accounting, or one that includes intermediate financial accounting and probability and statistics, with a cumulative GPA of at least 3.0 and at least 3.0 in junior- and senior-level accounting courses. Students without an accounting degree must complete the equivalent of MSU's undergraduate accounting major before or during the programme",
      "GMAT or GRE: not required for applicants with a GPA of 3.0 or higher, though scores can strengthen an application; where a test is required, the minimum is GMAT 550 (code QH0-5P-32) or strong GRE scores (code 1465)",
      "Application materials: the online MSU graduate application, two written essays of 350 to 750 words on your educational and professional goals, a two-minute video essay, two letters of recommendation (one from a faculty member in your major) and a résumé. Official transcripts, financial proof and test scores are requested only after admission",
      "English proficiency (MS Accounting): TOEFL iBT 5 with no section below 4 (MyBest superscores not accepted), IELTS 7 or Duolingo English Test 110",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Computer Science",
    slug: "msu-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "30 credits under Plan A (thesis) or Plan B (no thesis); MSU does not publish a fixed length, but at the 9 credits a semester its graduate budget assumes, that is about three to four semesters (our estimate)",
    tuitionNote: ENGINEERING_MS_TUITION,
    description:
      "The MS in Computer Science from the Department of Computer Science and Engineering prepares students for industry or for a PhD. Under both plans, students take at least 18 credits from approved graduate courses with at least one course in each breadth area: system design and analysis (distributed systems, computer architecture, parallel computing, networks, computer and network security, automated vehicles and software engineering), theory and algorithms (verification, algorithm design and theory, graph theory, computational biology and foundations of computing) and data analysis and applications (pattern recognition, computer vision, artificial intelligence, natural language processing, machine learning, deep learning, adversarial machine learning, evolutionary computation and data mining). Plan A students take at least 21 credits at the 800-900 level plus 6 to 8 thesis credits; Plan B students take at least 24 credits at the 800-900 level. Research areas span software systems, intelligent systems, networking and ubiquitous computing, and biological computing. Outstanding applicants are considered automatically for teaching and research assistantships and fellowships",
    officialProgramUrl: "https://engineering.msu.edu/academics/majors-degrees/computer-science-ms",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Fall 2027 (August); spring entry is also possible",
    applicationDeadline:
      "Fall 2027 entry: apply by 31 December 2026 to be guaranteed full consideration for university and college fellowships, and by 15 January 2027, the closing date for full consideration (later applications are still reviewed, but full consideration is not guaranteed). Offers with funding go out by early April. Spring entry: 15 September. The department asks for applications at least two months before the semester begins",
    admissionRequirements: [
      "A bachelor's degree in computer science or a related field such as mathematics, physics or electrical engineering, generally with a GPA of at least 3.2. Applicants from other fields need calculus (some areas also want linear algebra and probability and statistics), discrete mathematics and the other computing background the department lists",
      "Application materials: the online MSU graduate application (answering the CSE supplemental questions), an academic statement and a personal statement, letters of recommendation (ideally at least two from college faculty), transcripts and degree certificates, a CV and an application fee. The GRE is highly recommended but not required (median scores of recent admits: 164 quantitative, 153 verbal, 3.0 writing; GRE code 1465, department code 0402)",
      `${GRAD_ENGLISH}. CSE's TOEFL department code is 78, and waiver requests go in the application's ELP Waiver section`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Electrical and Computer Engineering",
    slug: "msu-ms-electrical-computer-engineering",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration: "30 credits under Plan A (thesis) or Plan B (no thesis); MSU does not publish a fixed length, but at the 9 credits a semester its graduate budget assumes, that is about three to four semesters (our estimate)",
    tuitionNote:
      `${ENGINEERING_MS_TUITION}. ECE ties admission to the availability of support (a teaching or research assistantship, a fellowship or a government scholarship); for international students this is usually a faculty research assistantship or a home-government scholarship, and self-funded master's applicants must submit an affidavit of support and bank statement that meet the funding requirement`,
    description:
      "The Department of Electrical and Computer Engineering's MS is offered on campus (an online version also exists). Students complete 30 credits, including at least four 800- or 900-level ECE courses totalling 12 credits or more, two of which must come from advanced power electronics, embedded cyber-physical systems, advanced electromagnetic fields and waves, performance modelling of communication networks, linear systems and control, analysis of stochastic systems, and physical electronics. They add supporting courses outside the department at the 400 level or above, and first-year students attend seven graduate seminars. Plan A requires at least 20 credits at the 800 level or above, 4 to 8 thesis credits and an oral thesis defence; Plan B requires 18 credits at the 800 level or above and a final examination or evaluation",
    officialProgramUrl: "https://engineering.msu.edu/academics/majors-degrees/electrical-and-computer-engineering-ms",
    degree: "Master of Science (MS) in Electrical and Computer Engineering",
    intake: "Fall 2027 (August); spring entry is also possible",
    applicationDeadline:
      "Fall 2027 entry: complete applications and all documents by 30 December 2026 for full consideration for admission, financial support and fellowships; later applications are still reviewed but full consideration is not guaranteed. Spring entry: 15 September",
    admissionRequirements: [
      "A four-year bachelor's degree in electrical engineering or a related field such as physics, mathematics or computer science (students without an EE degree may need collateral courses). ECE says successful international applicants typically come from highly ranked schools and are in the top 10% of their class",
      "Application materials: the online MSU graduate application (ECE master's programme code 8093) and fee, three references (ideally at least two from college faculty), two official copies of transcripts and degree certificates in sealed envelopes, and academic and personal statements. The GRE is required for all international applicants (GRE code 1465, department code 1203); quantitative scores are generally above 159, and verbal scores below 146 or writing below 3.0 are generally not acceptable",
      `English proficiency (ECE): TOEFL is required for international applicants, with at least 80 overall and 19 in each section except 22 in writing (department code 66), or IELTS 6.5 or higher. ${GRAD_ENGLISH}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Mechanical Engineering",
    slug: "msu-ms-mechanical-engineering",
    level: "Master",
    field: "Mechanical Engineering",
    duration: "30 credits under Plan A (thesis) or Plan B (no thesis); MSU does not publish a fixed length, but at the 9 credits a semester its graduate budget assumes, that is about three to four semesters (our estimate)",
    tuitionNote:
      `${ENGINEERING_MS_TUITION}. All applications are considered for financial aid and assistantships, and the department says competitive candidates for funding are in the top 10% of their BS class with at least a 3.5 GPA`,
    description:
      "The Department of Mechanical Engineering's MS is available on campus and online. Students complete 30 credits, at most nine at the 400 level, including breadth courses across the department's areas: fluid-thermal science and engineering (thermodynamics, conductive and convective heat transfer, combustion, fluid mechanics, computational fluid dynamics, turbomachinery and the finite element method), dynamic systems and control (linear systems and control, vibrations and advanced dynamics), and solid mechanics, design, manufacturing and biomechanics (continuum mechanics, linear elasticity and laminated composites). Plan A students take 21 credits at the 800-900 level including 6 to 8 thesis credits, submit a thesis proposal and defend the thesis orally; Plan B students take 21 credits at the 800-900 level by coursework alone or with a project, and pass a final evaluation. Typical tracks include dynamics and vibration, mechanical systems and control, and biomechanics",
    officialProgramUrl: "https://engineering.msu.edu/academics/majors-degrees/mechanical-engineering-ms",
    degree: "Master of Science (MS) in Mechanical Engineering",
    intake: "Fall 2027 (August); spring entry is also possible, with very few funding offers",
    applicationDeadline:
      "Fall 2027 entry: apply by 15 December 2026, when review begins and applications get maximum consideration for financial aid and assistantships. Spring entry: 15 September",
    admissionRequirements: [
      "A bachelor's degree in mechanical engineering, engineering mechanics or a closely related field, completed before the term you apply for. Applicants with a BS can also apply straight to the PhD (Direct Admit PhD)",
      "Application materials: the online MSU graduate application with a US$75 application fee for international applicants (US$65 domestic; not waived), three letters of recommendation through the graduate portal, a personal statement and an academic statement (each up to two pages), official academic records and, for self-funded international students, a Statement of Financial Proof and Affidavit of Support. MSU's Academic Programs Catalog says applicants must submit GRE General Test scores",
      `English proficiency (Mechanical Engineering): applicants from countries where English is not the official language send TOEFL scores (department code 68), and the department points to the Graduate School minimums. ${GRAD_ENGLISH}`,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science in Data Science",
    slug: "msu-ms-data-science",
    level: "Master",
    field: "Data Science",
    duration: "Most students finish in four semesters (30 credits)",
    tuitionNote:
      `2026-27: the MS in Data Science has a set programme fee of US$39,000 for international and non-resident students, charged at one quarter (US$9,750) a semester for students who finish in four semesters; taking more than 9 credits in one semester to finish early means paying half the total that semester. ${GRAD_COA}`,
    description:
      "MSU's MSDS is a professional, cross-disciplinary master's run jointly by the Departments of Computational Mathematics, Science and Engineering, Computer Science and Engineering, and Statistics and Probability. The 30-credit, non-thesis degree has six required courses (foundations of data science, computational optimisation, big data analysis, data mining, mathematical statistics for data scientists and applied statistical modelling for data scientists) and nine credits of electives such as data visualisation, parallel computing, pattern recognition, design and theory of algorithms, machine learning, statistical computation, statistical learning and data mining, Bayesian analysis and R programming. It ends with a three-credit capstone in which students work on an applied industry or government data science project and present it publicly, followed by a final evaluation. The programme stresses why methods work and when to use them, not only how to apply them",
    officialProgramUrl: "https://msds.msu.edu/",
    degree: "Master of Science (MS) in Data Science",
    intake: "Fall semester (August), with a required orientation the week before classes",
    applicationDeadline:
      "When we checked, the MSDS site still described the fall 2026 cycle (priority deadline 15 January 2026, then rolling admission) and had not posted fall 2027 dates. If the pattern holds, mid-January 2027 would be the fall 2027 priority date, but confirm on msds.msu.edu before applying",
    admissionRequirements: [
      "A four-year bachelor's degree in a relevant quantitative discipline and enough quantitative preparation, shown through coursework, work or other experience",
      "Application materials: online through the MSU admissions portal, with transcripts of all college study (unofficial copies are enough to apply; official ones are needed before you start), a professional résumé, a personal statement on your motivation, preparation and career goals, three letters of recommendation (they do not have to be from professors) and answers to the portal questions. GRE scores are not required but can be submitted",
      `English proficiency (MSDS): most international applicants need an English test; the MSDS handbook says these university-set requirements cannot be waived. ${GRAD_ENGLISH}`,
    ],
  },
];
