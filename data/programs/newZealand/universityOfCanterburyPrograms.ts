import type { Program } from "../../programs";

// University of Canterbury | Te Whare Wānanga o Waitaha (Christchurch, New Zealand): 7 undergraduate degrees and 8 taught
// postgraduate masters, chosen for their popularity with international students (business, engineering, computing,
// AI and data, science, law, psychology, accounting, information systems and international relations). Sources
// (viewed 28 November 2026):
// - Qualification pages on canterbury.ac.nz (https://www.canterbury.ac.nz/study/academic-study/qualifications/...), with
//   the start, points and duration panel, overview, entry requirements, degree structure, subjects and courses, fees
//   and careers sections
// - International tuition fee estimates by qualification for 2026-2028:
//   https://www.canterbury.ac.nz/study/getting-started/study-and-living-costs/study-costs/international-tuition-fees/bachelors
//   https://www.canterbury.ac.nz/study/getting-started/study-and-living-costs/study-costs/international-tuition-fees/masters
//   and the general page https://www.canterbury.ac.nz/study/getting-started/study-and-living-costs/study-costs/international-tuition-fees
//   (fees are indicative, worked out course by course unless a Special Programme Fee applies, and include GST)
// - Student Services Levy: https://www.canterbury.ac.nz/study/getting-started/study-and-living-costs/study-costs/student-services-levy
// - English language requirements:
//   https://www.canterbury.ac.nz/study/getting-started/admission-and-enrolment/enrolment-topics/english-language-proficiency/english-language-requirements
// - Admission with an overseas qualification, IB and CIE:
//   https://www.canterbury.ac.nz/study/getting-started/admission-and-enrolment/admission-pathways/overseas-qualification
//   https://www.canterbury.ac.nz/study/getting-started/admission-and-enrolment/admission-pathways/ib-international-baccalaureate-diploma
//   https://www.canterbury.ac.nz/study/getting-started/admission-and-enrolment/admission-pathways/cie-cambridge-international-examinations
// - Enrolment application closing dates (https://www.canterbury.ac.nz/study/study-support-info/dates-and-timetables/enrolment-dates)
//   and key university dates for 2027 (https://www.canterbury.ac.nz/study/study-support-info/dates-and-timetables/key-university-dates)
// - Scholarships for international students
//   (https://www.canterbury.ac.nz/study/getting-started/scholarships/international-student-scholarships), incoming
//   first-year scholarships for international students
//   (https://www.canterbury.ac.nz/study/getting-started/scholarships/incoming-first-year-scholarships/international-students)
//   and the UC Deans Award entry in the UC Scholarships Database
// - Immigration New Zealand: Fee Paying Student Visa (https://www.immigration.govt.nz/visas/fee-paying-student-visa/) and
//   Post-Study Work Visa (https://www.immigration.govt.nz/visas/post-study-work-visa/)
// Fees are the University's published 2027 international tuition estimates in New Zealand dollars (including GST):
// bachelor's degrees are quoted per 120 points (a full-time year); masters with a Special Programme Fee are quoted for
// the whole programme. The Student Services Levy and insurance are extra.
// UC's online admission requirements checker (country-by-country undergraduate entry standards) could not be read, so
// undergraduate entry is described with the University-wide standard and the IB and CIE examples UC publishes.

const UNIVERSITY = {
  universitySlug: "university-of-canterbury",
  universityName: "University of Canterbury",
  country: "New Zealand",
  language: "English",
  programType: "Full-time",
} as const;

const CAMPUS = "Christchurch campus";

const SSL_NOTE =
  "plus the 2027 Student Services Levy of NZ$10.71 per point (NZ$1,285.40 for a 120-point year, capped at the equivalent of 150 points, NZ$1,606.75, a year)";

const FEE_EXTRAS =
  "UC works out tuition course by course from each course's subject band, level and points, so the real amount depends on the courses you take and is confirmed in your Enrolment Agreement; published fees are indicative and can change before enrolment. Most international students pay the estimate on their Offer of Place in advance as evidence for the student visa. Compulsory insurance for international students, course materials and living costs are extra";

const SPF_EXTRAS =
  "A Special Programme Fee is a set fee for the whole qualification, paid at the start of your studies even if the programme takes 18–24 months; it does not include the Student Services Levy or insurance and does not cover repeated courses, and if it is not paid in full at the start and your study runs beyond one year, the following year's fees will be higher. Compulsory insurance for international students, course materials and living costs are extra";

// ---------- Undergraduate ----------

const UG_SCHOLARSHIPS =
  "Scholarships: the UC International First Year Scholarship (Offshore) gives NZ$15,000 towards tuition to top-achieving students who completed university entrance overseas or at UC International College (applications are made in rounds; the round for a Semester 1 2027 start closed on 31 October 2026). The UC High Achievers Scholarships contribute NZ$5,000 to first-year tuition for strong new students from China or Hong Kong, India and Southeast Asia (Semester 2 2027 applications open 3 March and close 30 April 2027). New full-fee-paying international students are also considered for the UC Deans Award, which helps with international fees – an expression of interest to a UC recruiter or any UC scholarship application counts as an application";

const UG_INTAKE =
  "Semester 1 (lectures start 22 February 2027) or Semester 2 (lectures start 19 July 2027). Apply online through myUC";

const DEADLINE_S1_S2 =
  "UC advises international students to submit their application in myUC by 1 December 2026 for a Semester 1 2027 start and by 1 May 2027 for Semester 2. Later applications may still be considered if places are available, but may not be processed in time for a student visa and can incur a Late Enrolment Fee; UC recommends applying at least six months before you plan to start";

const UG_ENTRANCE =
  "Academic entry (international): University Entrance or an equivalent overseas qualification, assessed together with your programme application (UC's online admission requirements checker shows the standard for your country). Examples UC publishes: an awarded IB Diploma (with English as a Language A subject or Language B at Higher Level for the literacy requirement), or Cambridge International A/AS Levels with a rank score of at least 120 and at least a D grade in three approved subjects, plus a pass in AS English and a D or better in IGCSE/GCSE maths (or any AS maths pass). The Diploma in University Studies (International) at UC International College is an alternative first year with extra support";

const UG_ENGLISH =
  "English language (if English is not your first language, from one sitting within two years of your start date): IELTS Academic 6.0 overall with no band below 5.5; TOEFL iBT 80 with at least 19 in each skill (tests before 21 January 2026) or, for tests from 21 January 2026, 4.0 overall with Listening 3.0, Reading 3.5, Writing 3.0 and Speaking 3.0; PTE Academic 50 with no communicative skill below 42; C1 Advanced or C2 Proficiency 169 with at least 162 in each skill; Duolingo 105 with no band below 95; or LanguageCert Academic 65 with no skill below 60";

const UG_WORK_RIGHTS =
  "Visa and work: international students need a New Zealand Fee Paying Student Visa, which generally allows part-time work of up to 25 hours a week during study and full-time work in scheduled holidays, depending on visa conditions. After a bachelor's degree with at least 30 weeks of full-time study in New Zealand, graduates can apply once for a Post-Study Work Visa (up to 3 years, depending on the qualification) with open work rights, per Immigration New Zealand";

// ---------- Postgraduate ----------

const PG_SCHOLARSHIPS =
  "Scholarships: new full-fee-paying international students starting a postgraduate programme are considered for the UC Deans Award, which helps with international fees (one year; any UC scholarship application or an expression of interest to a UC recruiter counts as an application). Other awards are listed in the UC Scholarships Database";

const PG_INTAKE =
  "Semester 1 (lectures start 22 February 2027) or Semester 2 (lectures start 19 July 2027). Apply online through myUC";

const PG_ENGLISH =
  "English language (if English is not your first language, from one sitting within two years of your start date): IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 90 with at least 19 in each skill (tests before 21 January 2026) or, for tests from 21 January 2026, 4.5 overall with Listening 3.5, Reading 3.5, Writing 4.0 and Speaking 3.5; PTE Academic 58 with no communicative skill below 50; C1 Advanced or C2 Proficiency 176 with at least 169 in each skill; Duolingo 120 with no band below 105; or LanguageCert Academic 70 with no skill below 65";

const PG_WORK_RIGHTS =
  "Visa and work: a New Zealand Fee Paying Student Visa generally allows up to 25 hours of work a week during study and full-time work in scheduled holidays, depending on visa conditions. A master's degree with at least 30 weeks of full-time study in New Zealand can lead to a Post-Study Work Visa of up to 3 years with open work rights (one per person), per Immigration New Zealand";

const PRE_MASTERS =
  "If you are an international student who does not yet meet the entry standard, UC's International Pre-Master's pathways can prepare you for entry to this degree";

export const universityOfCanterburyPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Commerce",
    slug: "university-of-canterbury-bachelor-of-commerce",
    level: "Bachelor",
    field: "Business",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$39,590 per 120 points (a full-time year), ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "UC's Bachelor of Commerce is taught by Te Kura Umanga | UC Business School, which holds AACSB, EQUIS and AMBA accreditation. In first year everyone takes five core courses – accounting and financial information, microeconomics, business information systems, management fundamentals and statistics – and later years add a course on business and culture and the UC Employability Portfolio, which gives credit for your work experience. You choose one or two majors from Accounting, Economics, Finance, Human Resource Management, Information Systems, Innovation and Entrepreneurship, International Business, Management, Marketing, Operations and Supply Chain Management, and Taxation and Accounting, and can add a minor from commerce or from other UC degrees. Students practise with a live market data feed in UC's Trading Room, enter business competitions and can apply for internships, exchanges and overseas study tours.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-commerce",
    degree: "Bachelor of Commerce (BCom)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant",
      "Business or management consultant",
      "Marketing professional",
      "Financial analyst",
      "Human resources specialist",
      "Entrepreneur",
      "Software developer",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      UG_ENTRANCE,
      "No specific school subjects are required, though accounting, economics, business studies and mathematics (especially statistics) are useful preparation; at least 255 of the 360 points must come from Commerce courses",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Computer Science",
    slug: "university-of-canterbury-bachelor-of-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$45,000 per 120 points (a full-time year; the degree is new in 2027), ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "The Bachelor of Computer Science is a new UC degree from 2027, developed with industry input and designed to keep pace with changing technology. First-year courses cover programming, computer science fundamentals, discrete mathematics and engineering mathematics; second year moves on to algorithms, formal languages and compilers, computer systems and software engineering foundations; and in third year you pick advanced electives. You can follow the general Computer Science programme, which ends with a capstone project, or major in Artificial Intelligence or in Cybersecurity and Networking, each with a final project course. A minor from another UC degree – for example business, mathematics, game development or psychology – is optional. The focus goes beyond coding to designing secure, ethical and reliable computing systems.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-computer-science",
    degree: "Bachelor of Computer Science (BCompSc)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer",
      "Systems analyst",
      "AI or machine learning engineer",
      "Network administrator",
      "Cybersecurity specialist",
      "Systems architect",
    ],
    intake: UG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      UG_ENTRANCE,
      "Mathematics is required: UC asks for University Entrance including the equivalent of 14 credits in NCEA Level 3 Mathematics",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Data Science",
    slug: "university-of-canterbury-bachelor-of-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$43,930 per 120 points (a full-time year), ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "UC's Bachelor of Data Science combines programming, mathematics, statistics and computer science to teach you how to collect, store, process and interpret large data sets securely and ethically, and how to turn the results into decisions. About 195 points are core data science courses – from an introduction to data science and programming in first year, through data wrangling, multivariable methods, algorithms and bioethics in second year, to big data computing and computational data methods in third year – alongside 135–165 points in a major: Bioinformatics, Business Analytics, Climate Data Analytics, Data Science, Population Health Data Science or Spatial Data Science. The degree finishes with an industry-supervised capstone project, and UC's research centres work on projects such as Antarctic climate modelling and geospatial mapping.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-data-science",
    degree: "Bachelor of Data Science (BDataSc)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Data or business analyst",
      "Statistician",
      "Software developer",
      "Software architect",
      "IT consultant",
    ],
    intake: UG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      UG_ENTRANCE,
      "Open to anyone with entry to the University; school maths, statistics, computing or IT is especially useful, and introductory courses are available if your background is limited",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Engineering with Honours",
    slug: "university-of-canterbury-bachelor-of-engineering-with-honours",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (480 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$49,540 per 120 points for the first year and NZ$54,180 per 120 points for the second to fourth years, ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "The BE(Hons) is UC's four-year professional engineering degree, accredited by Engineering New Zealand so graduates can work as professionally qualified engineers internationally. The first year is common to everyone: courses in engineering skills and foundations, engineering mathematics, physics and programming, plus three courses chosen for the discipline you are aiming for, which lets you keep several options open. You then apply for one of eight disciplines for years two to four – Chemical and Process, Civil, Computer, Electrical and Electronic, Forest, Mechanical, Mechatronics or Software Engineering – and some offer minors such as aerospace, biomedical, structural, geotechnical, power or sustainable energy engineering. Along the way you complete about 800 hours (roughly 100 days) of practical work placements, and the BE(Hons) can also be combined with another degree as a five-year conjoint.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-engineering-with-honours",
    degree: "Bachelor of Engineering with Honours (BE(Hons))",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Civil or structural engineer",
      "Mechanical or mechatronics engineer",
      "Electrical and electronic engineer",
      "Software or computer engineer",
      "Chemical and process engineer",
      "Engineering consultant or manager",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: `${DEADLINE_S1_S2}. Entry to years two to four is limited and based on your first-year grades: Engineering First Year students apply for their discipline by 1 November for the following year`,
    admissionRequirements: [
      UG_ENTRANCE,
      "Subject requirements: IB Diploma with at least 4 at HL (or 5 at SL) in maths and at least 4 at HL (or 6 at SL) in physics and chemistry; or Cambridge A Levels with at least a D (or an A at AS level) in maths, physics and chemistry. Chemistry is not needed for Computer, Electrical and Electronic, Mechatronics or Software Engineering. Students with gaps can take introductory courses first, and the Diploma in University Studies (International) or the Certificate in Foundation Studies at UC International College are pathways",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science",
    slug: "university-of-canterbury-bachelor-of-science",
    level: "Bachelor",
    field: "Science",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$44,980 per 120 points (a full-time year), ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "UC's Bachelor of Science lets you 'do science' from your first semester, with lab work, research projects and fieldwork using what UC says is the largest set of field stations of any New Zealand university, reaching from Antarctica to Nigeria and across Aotearoa. Everyone takes SCIE101 Science, Society and Me and a quantitative literacy course, then builds at least one major from Astronomy, Biochemistry, Biological Sciences, Chemistry, Computer Science, Earth Science, Economics, Environmental Science, Finance, Financial Engineering, Geography, Geology, Linguistics, Mathematical Sciences Education, Mathematics, Medicinal Chemistry, Philosophy, Physics, Psychology or Statistics. You can take a double major or add a minor from science or another UC degree, and international exchanges with partner universities are available.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-science",
    degree: "Bachelor of Science (BSc)",
    areaOfInterest: "Mathematics & Physical Sciences",
    careerOutcomes: [
      "Field or laboratory scientist",
      "Marine biologist",
      "Researcher",
      "Science-based roles in business, finance or politics",
    ],
    intake: UG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      UG_ENTRANCE,
      "Some majors build on school chemistry, mathematics or physics, and some first-year courses have their own prerequisites; Headstart preparatory courses are available if you need more background",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Laws",
    slug: "university-of-canterbury-bachelor-of-laws",
    level: "Bachelor",
    field: "Law",
    duration: "4 years full-time (480 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$40,270 per 120 points (a full-time year), ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "UC's four-year LLB is a professional law degree with a strong practical streak: through clinical studies and law internships you work with real people on real legal problems, and the purpose-built Moot Court room hosts client interviewing, witness examination, mooting and negotiation competitions. Year one combines three compulsory law courses – Law and Legal Systems, Statute Law and Constitutional Essentials, and Case Law and Reasoning – with five non-law courses of your choice. From year two you study contract, torts, land law and public law, then criminal law and equity and trusts, and the final two years are mostly electives in areas such as international human rights, environmental law and family law (Legal Ethics is needed if you plan to be admitted as a barrister and solicitor). High achievers may be invited into the honours programme, and the LLB is often studied as a double degree with arts, commerce, science or criminal justice.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-laws",
    degree: "Bachelor of Laws (LLB)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Barrister or solicitor",
      "Policy analyst",
      "Legal adviser",
      "Foreign affairs officer",
      "Journalist",
    ],
    workIntegrated: true,
    intake: "Semester 1 only (lectures start 22 February 2027). Apply online through myUC",
    applicationDeadline:
      "UC advises international students to submit their application in myUC by 1 December 2026 for a Semester 1 2027 start. Later applications may still be considered if places are available, but may not be processed in time for a student visa and can incur a Late Enrolment Fee",
    admissionRequirements: [
      UG_ENTRANCE,
      "No particular school subjects are required; entry to second-year law courses is limited and normally needs good grades (usually at least a B) in the three first-year law courses",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Psychological Science",
    slug: "university-of-canterbury-bachelor-of-psychological-science",
    level: "Bachelor",
    field: "Psychology",
    duration: "3 years full-time (360 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international fee estimate: NZ$43,140 per 120 points (a full-time year), ${SSL_NOTE}. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Offered by UC's Faculty of Science, the Bachelor of Psychological Science covers how the brain works and how environment, culture and relationships shape behaviour and wellbeing. About 195 points are core courses: introductory psychology, the foundations of psychological science and human communication in year one; research methods and statistics, developmental, cognitive, social and behavioural neuroscience courses in year two; and advanced research methods, psychopathology and a community-based 'Psychology in Action' course in year three. You focus your degree through a psychological science minor – Forensic Psychology, Māori and Indigenous Perspectives, Neuroscience and Cognition, Psychological Wellbeing, Psychology for Common Good or Workplace Psychology – and can add a second minor or electives. An online version with different term dates and a more prescribed course list also exists; this listing describes the on-campus programme.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/bachelor-of-psychological-science",
    degree: "Bachelor of Psychological Science (BPsycSc)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Psychology or healthcare support roles",
      "Roles in local or central government ministries",
      "Non-governmental organisation roles",
      "Research assistant",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      UG_ENTRANCE,
      "No particular study background is required; UC's qualifications leading to registration as a practising psychologist in New Zealand are at postgraduate level",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Artificial Intelligence",
    slug: "university-of-canterbury-master-of-artificial-intelligence",
    level: "Master",
    field: "Artificial Intelligence",
    duration: "18 months full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$59,400 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "UC's MAI is an applied master's for computing graduates who want to move into AI engineering. The 120 points of taught courses include compulsory Machine Learning, Deep Learning, Research Methods in Computer Science and Software Engineering, and Ethics of Artificial Intelligence (taught by philosophy), plus either Intelligent Tutoring Systems or Computer Vision; up to 45 points of electives can come from 400-level computer science, software engineering and data science courses or AI in business and business intelligence. The degree finishes with a 60-point personalised AI project on a topic of your choice, carried out over the summer months (November to January). You can start in February or July.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-artificial-intelligence",
    degree: "Master of Artificial Intelligence (MAI)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "AI engineer",
      "Machine learning engineer",
      "AI researcher",
      "Data processing or big data engineer",
      "Cybersecurity specialist",
    ],
    intake: PG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      "A bachelor's degree in a subject related to computer science with a B average in 60 points of 300-level COSC, SENG, ENCE or DATA301 courses; or a B average in 60 points of 300-level courses plus other approved qualifications or at least 5 years' experience in the field",
      "International students who need help meeting the entry requirements can take UC's Pre-Master's Two Semester programme",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Professional Master of Computer Science",
    slug: "university-of-canterbury-professional-master-of-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "1 year full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$71,400 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The PMCS is a one-year, hands-on master's for graduates with a computing background. You take Research Methods in Computer Science and Software Engineering and choose most of your 120 taught points from 400-level computer science and software engineering courses, with limited options in data science, AI in business and business intelligence (and, with approval, up to 30 points from other subjects such as health technologies or statistics). In the second half of the year you complete a 60-point professional project in which you design, build and test an advanced computing application. UC sits in Canterbury's 'Silicon Plains' tech cluster and is home to the Computer Science Unplugged project and the Intelligent Computer Tutoring group.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/professional-master-of-computer-science",
    degree: "Professional Master of Computer Science (PMCS)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer",
      "Web developer",
      "Database administrator",
      "Embedded systems developer",
      "IT specialist",
    ],
    intake: "Semester 1 only (lectures start 22 February 2027). Apply online through myUC",
    applicationDeadline:
      "UC advises international students to submit their application in myUC by 1 December 2026 for a Semester 1 2027 start. Later applications may still be considered if places are available, but may not be processed in time for a student visa and can incur a Late Enrolment Fee",
    admissionRequirements: [
      "A bachelor's degree (or equivalent) with a background in a computing subject such as computer science, computer engineering or software engineering, with either a B average in your 300-level courses or experience working in the field",
      "International students who need help meeting the entry requirements can take UC's Pre-Master's Two Semester programme",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Applied Data Science",
    slug: "university-of-canterbury-master-of-applied-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1 to 1.5 years full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$59,400 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MADS is a conversion master's for graduates from many backgrounds – not only maths, statistics or computer science – who want to build data science and analytics skills. Unless you can show prior learning, you start with three foundation courses (Introduction to Data Science, Computer Programming and Data Management), then take four advanced courses in scalable data science, text and data in the humanities, big data and data mining, plus 30 points of electives from areas such as machine learning, deep learning, computer vision, GIS or business intelligence. A 45-point applied project – which can be an industry project – completes the degree, and you can take it unendorsed or endorsed in Geographic Information Systems or in Digital Humanities and Computational Social Science.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-applied-data-science",
    degree: "Master of Applied Data Science (MADS)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Business or data analyst",
      "Market research analyst",
      "Analytics roles in government or finance",
      "Data-driven project lead",
    ],
    workIntegrated: true,
    intake: PG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      "A bachelor's degree in any subject with a B average in 300-level courses, or evidence of achievement at postgraduate level",
      PRE_MASTERS,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Management",
    slug: "university-of-canterbury-master-of-business-management",
    level: "Master",
    field: "Business",
    duration: "1.5 years full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$59,400 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MBM replaced UC's Master of Business in 2026 and is part of the Business Taught Masters suite, open to graduates of any discipline. UC says it is the only Master of Business Management in Australasia with AMBA accreditation. Compulsory courses cover accounting for managers, business economics, managerial finance, leadership, managing people and performance, evidence-based management, business strategy, innovation and marketing; you then complete 45 points of project work – either a consultancy project for an external organisation or a structured capstone – and fill any remaining points with electives such as business law, international business, Indigenous economics or critical thinking and problem solving.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-business-management",
    degree: "Master of Business Management (MBM)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Business consultant",
      "Human resources professional",
      "Business strategy roles",
      "Operations and logistics manager",
      "Manager or business owner",
    ],
    workIntegrated: true,
    intake: PG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      "Any bachelor's degree with at least a B- average in your final-year courses, a Postgraduate Certificate in Business, or another degree assessed as an equivalent standard",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Professional Accounting",
    slug: "university-of-canterbury-master-of-professional-accounting",
    level: "Master",
    field: "Accounting",
    duration: "17 months full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$59,400 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MPA is a conversion master's that prepares graduates of any discipline – no prior commerce or accounting study is needed – for a career as a professional accountant. It is made up of 12 compulsory courses: accounting for managers, business economics, managerial finance, business law, management of information systems, two professional accounting principles courses, taxation, auditing, financial accounting and reporting, strategic management accounting, and a course on financial accounting research methods. The programme is aligned with Chartered Accountants Australia and New Zealand, CPA Australia and ACCA, so graduates can gain provisional membership of these bodies.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-professional-accounting",
    degree: "Master of Professional Accounting (MPA)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Professional accountant",
      "Auditor",
      "Tax accountant",
      "Management accountant",
      "Financial reporting analyst",
    ],
    intake: PG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      "A bachelor's degree with at least a B- average in your 300-level courses (a New Zealand degree or another approved equivalent degree)",
      PRE_MASTERS,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Information Systems",
    slug: "university-of-canterbury-master-of-business-information-systems",
    level: "Master",
    field: "Information Technology",
    duration: "17 months full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$59,400 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MBIS is a Business Taught Masters degree for graduates – including those without an IT or commerce background – who want to manage technology and technology-driven innovation in organisations. Everyone takes Management of Information Systems, then chooses an applied IS project, a research project or a 100-hour internship on an IS project inside an organisation (research projects and internships depend on availability and approval). You can stay unendorsed or major in Business Analytics (data management, business intelligence, AI in business, statistics or data science) or Technology Management (systems analysis and process modelling plus related courses), with electives such as project management, IS security and risk management, digital business and computer programming.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-business-information-systems",
    degree: "Master of Business Information Systems (MBIS)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Business analyst",
      "Business intelligence analyst",
      "Systems developer",
      "IT project manager",
      "IT consultant",
    ],
    workIntegrated: true,
    intake: PG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      "A bachelor's degree with at least a B- average in your 300-level courses (a New Zealand degree or another approved equivalent degree)",
      PRE_MASTERS,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Civil Engineering",
    slug: "university-of-canterbury-master-of-civil-engineering",
    level: "Master",
    field: "Civil Engineering",
    duration: "1 year full-time (120 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$54,600 for the full 120-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MCivilEng is a taught one-year master's for engineers who want advanced knowledge for career progression. You normally take eight 15-point courses, four each semester, and can graduate unendorsed or with an endorsement in Construction Management, Earthquake Engineering, Geotechnical Engineering, Structural Engineering, Transportation Engineering or Water Engineering, choosing at least 60 points from the endorsement list and the rest from department courses at 400 or 600 level (with no more than 45 points at 400 level). All students also attend a workshop on Māori and Pacific engagement and consultation, building skills for working with mana whenua and iwi on infrastructure projects. Teaching is mainly in person.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-civil-engineering",
    degree: "Master of Civil Engineering (MCivilEng)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Structural engineer",
      "Geotechnical engineer",
      "Transportation engineer",
      "Water engineer",
      "Construction or infrastructure project manager",
    ],
    intake: PG_INTAKE,
    applicationDeadline: DEADLINE_S1_S2,
    admissionRequirements: [
      "A New Zealand Bachelor of Engineering with Honours or Bachelor of Science with Honours in a relevant subject (or an equivalent qualification), or the Postgraduate Certificate in Civil Engineering with at least a B- average; admission is approved based on how relevant your previous study is",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of International Relations and Diplomacy",
    slug: "university-of-canterbury-master-of-international-relations-and-diplomacy",
    level: "Master",
    field: "International Relations",
    duration: "1 year full-time (180 points)",
    campus: CAMPUS,
    tuitionNote: `2027 international Special Programme Fee: NZ$54,000 for the full 180-point programme, ${SSL_NOTE}. ${SPF_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MIRAD is a one-year interdisciplinary master's with a strong professional focus, drawing on UC's political science and international relations, history and law departments and research centres such as the National Centre for Research on Europe and the Macmillan Brown Centre for Pacific Studies. It is made up of a 30-point compulsory course on the principles and practice of international relations and diplomacy, which includes a professional seminar series, 90 points of electives, and a 60-point research dissertation of 15,000–20,000 words. A two-day field trip to Wellington includes meetings with senior figures at the Ministry of Foreign Affairs and Trade and the Ministry of Defence, embassies and high commissions, and a networking event with UC alumni.",
    officialProgramUrl:
      "https://www.canterbury.ac.nz/study/academic-study/qualifications/master-of-international-relations-and-diplomacy",
    degree: "Master of International Relations and Diplomacy (MIRAD)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Diplomat or foreign affairs officer",
      "Inter-state coordination roles",
      "International relations researcher",
      "Policy roles in government",
    ],
    intake: "Semester 1 only (lectures start 22 February 2027). Apply online through myUC",
    applicationDeadline:
      "UC advises international students to submit their application in myUC by 1 December 2026 for a Semester 1 2027 start. Later applications may still be considered if places are available, but may not be processed in time for a student visa and can incur a Late Enrolment Fee",
    admissionRequirements: [
      "A bachelor's degree in any subject, normally with at least a B average in 60 points of 300-level courses in your major; a degree plus a qualifying course, a degree with relevant professional experience, or another approved equivalent may also be accepted, and all students need approval to enrol",
      PRE_MASTERS,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },
];
