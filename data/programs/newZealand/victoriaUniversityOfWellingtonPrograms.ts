import type { Program } from "../../programs";

// Victoria University of Wellington | Te Herenga Waka (Wellington, New Zealand): 7 undergraduate degrees and 8 taught
// postgraduate masters, chosen for their popularity with international students (business, engineering and computing,
// AI and data, law, architecture and design, international relations, trade and public policy). Sources (viewed
// 27 November 2026):
// - Qualification pages on wgtn.ac.nz (https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/... and
//   .../postgraduate/...), with the "At a glance" panel (duration, points, campus, 2027 international fee estimate and
//   2027 international apply-by and start dates), the qualification regulations (entry requirements), majors, structure
//   and future careers sections
// - Fees for international students, including the 2027 cost per point and average 120-point year by subject area
//   (https://www.wgtn.ac.nz/students/money/fees/international) and the Fees Schedule 2027
//   (https://www.wgtn.ac.nz/__data/assets/pdf_file/0007/2374198/Fees-Schedule-2027.pdf)
// - International entry requirements (https://www.wgtn.ac.nz/international/applying/entry-requirements) and the
//   country-by-country undergraduate requirements shown on the qualification pages
// - English language requirements: standard undergraduate
//   (https://www.wgtn.ac.nz/international/applying/entry-requirements/english-language/standard-undergraduate), standard
//   postgraduate (https://www.wgtn.ac.nz/international/applying/entry-requirements/english-language/standard-postgraduate)
//   and programmes with higher requirements
//   (https://www.wgtn.ac.nz/international/applying/entry-requirements/english-language/higher)
// - VUW Undergraduate International Scholarship
//   (https://www.wgtn.ac.nz/scholarships/current/vuw-undergraduate-international-scholarship) and VUW Postgraduate
//   International Scholarship (https://www.wgtn.ac.nz/scholarships/current/vuw-postgraduate-international-scholarship)
// - Immigration New Zealand: Fee Paying Student Visa (https://www.immigration.govt.nz/visas/fee-paying-student-visa/) and
//   Post-Study Work Visa (https://www.immigration.govt.nz/visas/post-study-work-visa/)
// Fees are the University's published 2027 international tuition estimates in New Zealand dollars (including GST), as
// shown on each qualification page: bachelor's degrees and two-year masters are quoted per year (a full-time 120-point
// year), one-year masters for the full programme. The Student Services Fee (estimated by the University at NZ$1,310 a
// year for a 120-point year and NZ$1,630 a year for a 180-point programme) and insurance are extra.
// The Bachelor of Architectural Studies fee is the University's 2027 architecture cost per point and its average
// 120-point year from the international fees table, because the qualification page's estimate could not be read.

const UNIVERSITY = {
  universitySlug: "victoria-university-of-wellington",
  universityName: "Victoria University of Wellington",
  country: "New Zealand",
  language: "English",
  programType: "Full-time",
} as const;

const FEE_EXTRAS =
  "Victoria works out tuition course by course from each course's points and subject rate, so the real amount depends on the courses you take, is confirmed at enrolment and can change from year to year. Medical and travel insurance (compulsory for international students), course materials and living costs are extra";

// ---------- Undergraduate ----------

const UG_SCHOLARSHIPS =
  "Scholarships: the VUW Undergraduate International Scholarship gives eligible new full-fee-paying international students NZ$15,000 off first-year bachelor's tuition. There is no separate application: eligibility is assessed with your programme application and confirmed in your Offer of Place (it cannot be combined with credit transfer, and government-sponsored students are not eligible)";

const UG_INTAKE_3 =
  "Trimester 1 (study starts 22 February 2027), Trimester 2 (starts 5 July 2027) or Trimester 3 (starts 15 November 2027). Apply online through the University's application portal";

const UG_DEADLINE_3 =
  "For international students the 2027 qualification pages say to apply by 7 December 2026 for Trimester 1, by 4 May 2027 for Trimester 2 and by 31 August 2027 for Trimester 3. You can apply before meeting the English requirement and receive a conditional Offer of Place";

const UG_ENTRANCE =
  "Academic entry (international): all Victoria bachelor's degrees share the same entry standard, for example the IB Diploma with at least 24 points; three GCE A Levels (from outside the UK, at least one at grade C or higher); India – an overall average of at least 75% in CBSE, CISCE or the Maharashtra, Karnataka or West Bengal state board certificate (80% for other state boards), counted on your best four academic subjects; Sri Lanka – three GCE A Level passes with at least one at grade C or higher; USA – a high school diploma with an unweighted GPA of at least 2.5. One year of recognised university study or Victoria's Foundation Studies programme also gives entry";

const UG_ENGLISH =
  "English language (if English is not your first language): IELTS Academic 6.0 overall with no band below 5.5 (IELTS Online and One Skill Retake accepted); TOEFL iBT 80; PTE Academic 50 with no communicative skill below 42; C1 Advanced or C2 Proficiency 169 with no skill below 162; or Duolingo 105 with no band below 95";

const UG_WORK_RIGHTS =
  "Visa and work: international students need a New Zealand Fee Paying Student Visa, which generally allows part-time work of up to 25 hours a week during study and full-time work in scheduled holidays, depending on visa conditions. After a bachelor's degree with at least 30 weeks of full-time study in New Zealand, graduates can apply once for a Post-Study Work Visa for the same length of time they studied the degree in New Zealand (up to 3 years), with open work rights, per Immigration New Zealand";

// ---------- Postgraduate ----------

const PG_SCHOLARSHIPS =
  "Scholarships: the VUW Postgraduate International Scholarship gives eligible new full-fee-paying international students NZ$10,000 off tuition for one year of a 120-, 180- or 240-point master's degree. There is no separate application: eligibility is assessed with your programme application and confirmed in your Offer of Place";

const PG_ENGLISH =
  "English language (if English is not your first language): IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 90 with at least 20 in Writing; PTE Academic 58 with no communicative skill below 50; C1 Advanced or C2 Proficiency 176 with each skill at least 169; or Duolingo 120 with no band below 105";

const PG_DEGREE_NOTE =
  "Overseas qualifications must be equivalent to a New Zealand bachelor's degree from a recognised institution (Victoria uses UK ENIC and NOOSR to judge recognition); GMAT and GRE scores are not required";

const PG_WORK_RIGHTS =
  "Visa and work: a New Zealand Fee Paying Student Visa generally allows up to 25 hours of work a week during study and full-time work in scheduled holidays, depending on visa conditions. A master's degree with at least 30 weeks of full-time study in New Zealand can lead to a Post-Study Work Visa of up to 3 years with open work rights (one per person), per Immigration New Zealand";

const DEADLINE_T1_T2 =
  "For international students the 2027 qualification page says to apply by 7 December 2026 for Trimester 1 and by 4 May 2027 for Trimester 2. Apply early to leave time for your student visa";

export const victoriaUniversityOfWellingtonPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Commerce",
    slug: "victoria-university-of-wellington-bachelor-of-commerce",
    level: "Bachelor",
    field: "Business",
    duration: "3 years full-time (360 points)",
    campus: "Pipitea campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$39,800 per year (a full-time 120-point year; commerce courses are charged at NZ$331.65 per point at undergraduate level), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Victoria's Bachelor of Commerce is taught by the Wellington School of Business and Government, one of the small group of business schools worldwide that hold the 'Triple Crown' of international accreditations, on a campus a few minutes' walk from Parliament, the Supreme Court and Wellington's business district. Around your major you take four core courses that follow a single thread: in first year you identify the 'grand challenges' facing business and government and build study and professional skills; in second year you analyse those challenges in team projects; and in third year you work with an industry partner and students from other majors on a real problem. You choose at least one of 15 majors – Accounting, Actuarial Science, Commercial Law, Data Science, Digital Intelligence, Economics, Finance, Human Resource Management and Employment Relations, International Business, Management, Marketing, Public Policy, Sustainability and Ethics in Business, Taxation, and Tourism Management – and can add a second major from the BCom or from more than 90 majors across the University.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-commerce",
    degree: "Bachelor of Commerce (BCom)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant or auditor",
      "Actuary",
      "Business or management consultant",
      "Data or business analyst",
      "Financial or investment analyst",
      "Marketing or communications specialist",
      "Policy or advisory analyst",
    ],
    workIntegrated: true,
    intake: UG_INTAKE_3,
    applicationDeadline: UG_DEADLINE_3,
    admissionRequirements: [
      UG_ENTRANCE,
      "No specific school subjects are required for entry; at least 210 of the 360 points must come from BCom courses, including the four core courses and the requirements of at least one major",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Engineering with Honours",
    slug: "victoria-university-of-wellington-bachelor-of-engineering-with-honours",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (480 points)",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$49,250 per year (a full-time 120-point year; engineering courses are charged at NZ$410.31 per point at 100–400 level), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Victoria's four-year BE(Hons) is fully accredited by Engineering New Zealand and recognised internationally under the Washington Accord, and it concentrates on digital and electronic engineering – designing and building real systems such as autonomous robots, renewable energy systems, apps, games and secure networks. You choose one of four majors: Cybersecurity Engineering (which the University says is the only named cybersecurity discipline of its kind in Australasia), Electrical and Electronic Engineering, Mechatronics, or Software Engineering. First year covers program design, data structures and algorithms, engineering mathematics and modelling, and includes the team-based Autonomous Vehicle Challenge. Later years add 200- to 400-level courses in your major, project management, entrepreneurship and ethics, industry projects in third and fourth year, and 800 hours of approved work experience. You need at least a B average in the Part 1 courses to continue into Part 2 of the degree.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-engineering-with-honours",
    degree: "Bachelor of Engineering with Honours (BE(Hons))",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Software engineer",
      "Electrical power engineer",
      "Robotics engineer",
      "Space engineer",
      "Information security analyst",
      "Systems architect",
    ],
    workIntegrated: true,
    intake:
      "Trimester 1 (study starts 22 February 2027) or Trimester 2 (starts 5 July 2027). Apply online through the University's application portal",
    applicationDeadline: DEADLINE_T1_T2,
    admissionRequirements: [
      UG_ENTRANCE,
      "Physics and mathematics (calculus and statistics) at final-year school level are strongly recommended. Continuing from Part 1 into Part 2 of the degree normally needs at least a B average in the Part 1 courses, and 800 hours of approved work experience are required before graduation",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science",
    slug: "victoria-university-of-wellington-bachelor-of-science",
    level: "Bachelor",
    field: "Science",
    duration: "3 years full-time (360 points)",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$42,900 per year (a full-time 120-point year; science courses are charged at NZ$357.43 per point at undergraduate level), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Victoria describes its BSc as New Zealand's most flexible science degree: you sample 100-level courses across several subjects in first year, settle on a major by the end of it, and can add a second major or a minor from inside or outside science. There are 24 majors, among them Artificial Intelligence, Computer Science, Data Science, Biotechnology, Cell and Molecular Bioscience, Chemistry, Climate Science, Earth Science, Ecology and Biodiversity, Marine Biology, Mathematics, Physics, Psychological Science, Space Science and Statistics. Somewhere in the degree you must take one course in mathematics, physics, statistics or econometrics. Learning combines lectures with laboratory work, field trips and summer research scholarships with researchers and outside organisations, and strong students can continue to a one-year BSc with Honours or a Master of Science.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-science",
    degree: "Bachelor of Science (BSc)",
    areaOfInterest: "Mathematics & Physical Sciences",
    careerOutcomes: [
      "Computer scientist",
      "Data scientist or statistician",
      "Environmental scientist",
      "Geologist or hydrologist",
      "Marine biologist",
      "Biotechnologist",
      "Government or policy analyst",
    ],
    intake: UG_INTAKE_3,
    applicationDeadline: UG_DEADLINE_3,
    admissionRequirements: [
      UG_ENTRANCE,
      "Some majors expect chemistry, mathematics or physics at final-year school level",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Laws",
    slug: "victoria-university-of-wellington-bachelor-of-laws",
    level: "Bachelor",
    field: "Law",
    duration: "4 years full-time (480 points)",
    campus: "Kelburn and Pipitea campuses, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$43,800 per year (a full-time 120-point year; law courses are charged at NZ$365.02 per point at 100–400 level), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Victoria's LLB is taught at the Pipitea campus, steps from Parliament, the Supreme Court, the High Court and major law firms; the University says its Faculty of Law is consistently placed in the QS top 100 law schools and was ranked first for law in New Zealand by Times Higher Education's 2026 subject rankings. The degree has no majors. You study public, commercial, international, common and statute law, the relationship between tikanga Māori and the general legal system, and Te Tiriti o Waitangi, largely through discussion-based teaching plus mooting, negotiation and client-interviewing competitions. Up to 70 points come from outside law (for example economics, international relations, psychology or criminology), and many students combine the LLB with a BA, BCom or BSc as a five-year conjoint degree. Entry to second-year law is limited: you must pass the four compulsory first-year courses and average at least a B across the three first-year law courses.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-laws",
    degree: "Bachelor of Laws (LLB)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Lawyer",
      "In-house legal counsel",
      "Policy analyst",
      "Journalist",
      "Diplomat or international civil servant",
      "Academic",
    ],
    intake: UG_INTAKE_3,
    applicationDeadline: UG_DEADLINE_3,
    admissionRequirements: [
      UG_ENTRANCE,
      "Limited entry to second year: pass all four compulsory first-year courses (MAOR 126, LAWS 121, LAWS 122 and LAWS 123) with at least a B average across the three first-year law courses. To practise as a lawyer in New Zealand, graduates also complete professional legal studies and are admitted to the High Court",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Arts",
    slug: "victoria-university-of-wellington-bachelor-of-arts",
    level: "Bachelor",
    field: "Arts and Humanities",
    duration: "3 years full-time (360 points)",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$37,500 per year (a full-time 120-point year; humanities and social sciences courses are charged at NZ$312.36 per point at undergraduate level), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Victoria's BA is a flexible three-year degree from the Faculty of Humanities and Social Sciences, with 42 majors to choose from – including Art History, Asian Studies, Chinese, Criminology, Cultural Anthropology, Data Science, Development Studies, Economics, English Literature, Film, French, Geography, International Relations, Māori Studies, Media Studies, Philosophy, Political Science, Psychological Science, Sociology and languages from Chinese and Japanese to Spanish and Te Reo Māori. You build the degree around one or two majors, add minors if you wish, and develop research, analysis, communication and critical-thinking skills that transfer to almost any workplace. Studying in the capital puts you close to government agencies, cultural institutions such as Te Papa and creative employers such as Wētā FX, and the faculty's FHSS Internship course places students with organisations including the Ministry of Foreign Affairs and Trade, EY and the Department of Internal Affairs.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-arts",
    degree: "Bachelor of Arts (BA)",
    areaOfInterest: "Literature, Language, & Culture",
    careerOutcomes: [
      "Policy analyst",
      "Creative content and production roles",
      "Researcher",
      "Project coordinator",
      "Community facilitator",
      "Communications or media roles",
    ],
    workIntegrated: true,
    intake: UG_INTAKE_3,
    applicationDeadline: UG_DEADLINE_3,
    admissionRequirements: [
      UG_ENTRANCE,
      "No specific school subjects are required for entry",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Architectural Studies",
    slug: "victoria-university-of-wellington-bachelor-of-architectural-studies",
    level: "Bachelor",
    field: "Architecture",
    duration: "3 years full-time (360 points)",
    campus: "Te Aro campus, Wellington",
    tuitionNote: `2027 international fee: architecture courses are charged at NZ$392.81 per point at undergraduate level, which Victoria shows as NZ$47,137.20 for an average full-time 120-point year (including GST), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "The BAS is the first step towards becoming a registered architect or landscape architect, and offers four majors: Architecture, Interior Architecture, Landscape Architecture, and Architectural History and Theory. First year is common to everyone – eight core courses (four shared with the Bachelor of Building Science) covering design concepts, history and theory, design communication and sustainable building technology. In second year you move into your major with small-scale projects such as houses, rooms, small gardens and timber construction; places in each second-year major are limited and awarded on academic performance. Third year tackles larger and more complex buildings, fit-outs, parks and urban projects, with concrete, steel and mass-timber construction. To register as a professional you go on to the accredited Master of Architecture (Professional) or Master of Landscape Architecture and then gain work experience.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-architectural-studies",
    degree: "Bachelor of Architectural Studies (BAS)",
    areaOfInterest: "Design & Visual Studies",
    careerOutcomes: [
      "Architectural graduate (towards registration as an architect)",
      "Interior architect or designer",
      "Landscape architecture graduate",
      "Urban design roles",
      "Architectural history and heritage roles",
    ],
    admissionRequirements: [
      UG_ENTRANCE,
      "Entry to each second-year major is limited and based on your first-year academic performance",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Design Innovation",
    slug: "victoria-university-of-wellington-bachelor-of-design-innovation",
    level: "Bachelor",
    field: "Design",
    duration: "3 years full-time (360 points)",
    campus: "Te Aro campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$44,400 per year (a full-time 120-point year; design courses are charged at NZ$369.99 per point at undergraduate level), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "The BDI is a three-year design degree in what Victoria calls New Zealand's creative capital, with links to Wellington's film, gaming, technology and government sectors. First year is broad and interdisciplinary, mixing core design courses and electives; you then specialise in one of eight majors – Animation and Visual Effects, Communication Design, Design for Social Innovation, Fashion Design Technology, Game Design, Industrial Design, Interaction Design or Media Design – and can add a second BDI major, an outside major or a minor, or take the BDI as a conjoint degree. Teaching ranges from hands-on making to high-tech virtual and digital production, with attention to sustainability, accessibility and social impact, and the final year includes a self-directed capstone project that becomes a showcase piece for your portfolio.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/undergraduate/bachelor-of-design-innovation",
    degree: "Bachelor of Design Innovation (BDI)",
    areaOfInterest: "Design & Visual Studies",
    careerOutcomes: [
      "Animator or visual effects artist",
      "Game designer",
      "UX or interaction designer",
      "Communication or graphic designer",
      "Industrial or product designer",
      "Fashion technology designer",
    ],
    intake: UG_INTAKE_3,
    applicationDeadline: UG_DEADLINE_3,
    admissionRequirements: [
      UG_ENTRANCE,
      "No specific school subjects are required for entry",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  // ---------- Postgraduate ----------

  {
    ...UNIVERSITY,
    name: "Master of Artificial Intelligence",
    slug: "victoria-university-of-wellington-master-of-artificial-intelligence",
    level: "Master",
    field: "Artificial Intelligence",
    duration: "1 year full-time (180 points over three trimesters)",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$78,600 for the full 180-point programme, plus an estimated NZ$1,630 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "Victoria's MAI was the first Master of Artificial Intelligence established in New Zealand, and the University reports that its AI programme sits in the world top 50 of ShanghaiRanking's Global Ranking of Academic Subjects. The 180-point degree has two parts. Part 1 is 120 points of coursework: a core course on the applications and implications of AI (including ethics), further AI courses on topics including generative AI and big data, and electives from postgraduate AI, computer science, data science, engineering, software engineering or statistics. Part 2 is a research essay and an AI research project worth 60 points together. Most students start in February and finish in about 12 months over three consecutive trimesters; a Trimester 2 start may be possible with the school's approval.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-artificial-intelligence",
    degree: "Master of Artificial Intelligence (MAI)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Machine learning engineer",
      "Data scientist or data engineer",
      "AI consultant",
      "Deep learning engineer",
      "Applied AI researcher",
      "Process automation developer",
    ],
    intake:
      "Trimester 1 (study starts 22 February 2027); Trimester 2 (starts 5 July 2027) with the school's approval",
    applicationDeadline: DEADLINE_T1_T2,
    admissionRequirements: [
      "A bachelor's degree in computer science or a related subject with at least a B average in the relevant final-year courses; extensive practical, professional or scholarly experience may be accepted instead",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Computer Science",
    slug: "victoria-university-of-wellington-master-of-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "1 year full-time (180 points over three trimesters)",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$72,250 for the full 180-point programme, plus an estimated NZ$1,630 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MCompSc is a flexible 12-month, three-trimester master's from the School of Engineering and Computer Science. Part 1 is coursework chosen from 400-level Computer Science, Cybersecurity, Artificial Intelligence and Software Engineering courses: you can specialise in one of these areas or take a broad mix that suits your career plans. Part 2 is a research project on a problem you choose – which can be an industry or real-world problem – or a place on an existing research project, giving you a portfolio piece that shows your skills. Most students start in Trimester 1 in February; starting in Trimester 2 is possible with the school's approval.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-computer-science",
    degree: "Master of Computer Science (MCompSc)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software engineer",
      "Web developer",
      "Data analyst",
      "Information security analyst",
      "Business analyst",
      "Systems architect",
    ],
    intake:
      "Trimester 1 (study starts 22 February 2027); Trimester 2 (starts 5 July 2027) with the school's approval",
    applicationDeadline: DEADLINE_T1_T2,
    admissionRequirements: [
      "A bachelor's degree with at least a B average, and acceptance by the head of school as having adequate preparation in computer science through an appropriate degree or diploma or professional experience",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Data Science",
    slug: "victoria-university-of-wellington-master-of-data-science",
    level: "Master",
    field: "Data Science",
    duration:
      "2 years full-time (240 points); 12 months (180 points) if you are exempted from Part 1",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$48,150 per year (a full-time 120-point year; postgraduate science courses are charged at NZ$401.31 per point), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MDataSc is an industry-focused master's taught by the School of Mathematics and Statistics that combines advanced coursework, a research project and a work placement. Part 1 covers the fundamentals of data science, statistical methods and machine learning. Part 2 includes big data, a choice of neural networks and deep learning, evolutionary computation or probabilistic machine learning, computational statistics, generalised linear models, research preparation and advanced techniques in data science, followed by a supervised research project and a practicum placement with an industry partner such as a data science consultancy, government agency or private company. The programme also looks at working with data collected by, for and about Māori. Graduates with a data science degree, or a double major in statistics and computer science or AI, can be exempted from Part 1 and finish in 12 months.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-data-science",
    degree: "Master of Data Science (MDataSc)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Data analyst",
      "Machine learning specialist",
      "Statistical analyst",
      "Data science consultant",
    ],
    workIntegrated: true,
    intake:
      "Trimester 1 (study starts 22 February 2027) or Trimester 2 (starts 5 July 2027)",
    applicationDeadline: DEADLINE_T1_T2,
    admissionRequirements: [
      "A bachelor's degree in data science, computer science or statistics, ideally with a B+ average or better; relevant data science work experience or enough data science, computer science or statistics coursework may be considered instead",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of International Relations",
    slug: "victoria-university-of-wellington-master-of-international-relations",
    level: "Master",
    field: "International Relations",
    duration: "1 year full-time (180 points over three trimesters)",
    campus: "Kelburn campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$60,900 for the full 180-point programme, plus an estimated NZ$1,630 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MIR is a 12-month, three-trimester master's for recent graduates and working professionals who want an international career, and it does not require an honours degree. In the first two trimesters you take the core course Approaches to International Relations and three further taught courses, attending weekly seminars on campus; the course work covers the main theories of why states clash or cooperate – realism and neorealism, liberal internationalism and new institutionalism, and the theory of international society – and the rise and transformation of the liberal international order. You can focus on international political economy, foreign policy analysis, international organisations and global governance, or regional trade, security and geopolitics in East Asia, Europe and the South Pacific. In Trimester 3 most students combine a 30-point supervised research project with another 30-point course, or write a 60-point dissertation.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-international-relations",
    degree: "Master of International Relations (MIR)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Government international policy roles",
      "International business and trade roles",
      "International organisation staff",
      "Think tank or research analyst",
      "International news reporter",
      "NGO programme roles",
    ],
    intake: "Trimester 1 (study starts 22 February 2027)",
    applicationDeadline:
      "For international students the 2027 qualification page says to apply by 7 December 2026 for Trimester 1",
    admissionRequirements: [
      "A bachelor's degree, or a graduate diploma in international relations or a relevant area, with at least a B average in 60 points of final-year (300-level) courses in the major or a relevant subject; extensive practical, professional or scholarly experience may be accepted instead",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Policy",
    slug: "victoria-university-of-wellington-master-of-public-policy",
    level: "Master",
    field: "Public Policy",
    duration: "1.5 years full-time (180 points over four trimesters)",
    campus: "Pipitea campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$61,700 for the full 180-point programme, plus an estimated NZ$1,630 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "Taught by the Wellington School of Business and Government at the Pipitea campus, the MPP is designed for current and future public-sector professionals who want to design, analyse and implement policy at local, national or international level, and you learn directly from policymakers and advisers. The degree has six core courses – including a Policy Capstone spread over two trimesters in which you apply your learning to a live policy challenge – and three to five electives, one of which can be a work-based project. Most courses are taught in three to five intensive blocks per trimester and the programme is built around in-person participation. Depending on course availability you can add an optional specialisation such as Public Management or Health and Wellbeing. You can start in any trimester, but Trimester 1 is recommended if you want to finish within four trimesters.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-public-policy",
    degree: "Master of Public Policy (MPP)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Policy analyst or adviser",
      "Policy development leader in central, local or regional government",
      "Crown entity or not-for-profit policy roles",
      "Policy consultant",
    ],
    intake:
      "Trimester 1 (study starts 22 February 2027), Trimester 2 (starts 5 July 2027) or Trimester 3 (starts 15 November 2027)",
    applicationDeadline:
      "For international students the 2027 qualification page says to apply by 7 December 2026 for Trimester 1, by 4 May 2027 for Trimester 2 and by 31 August 2027 for Trimester 3",
    admissionRequirements: [
      "A bachelor's degree approved by the Wellington School of Business and Government and normally two years of relevant work experience (the work experience can be waived in special cases, and the University also admits some recent graduates with high grades)",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Laws",
    slug: "victoria-university-of-wellington-master-of-laws",
    level: "Master",
    field: "Law",
    duration: "1 year full-time (120 points over two to three trimesters)",
    campus: "Pipitea campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$46,300 for the full 120-point programme, plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "Victoria's 120-point LLM lets law graduates and legal professionals specialise, change direction or move into research. Everyone takes the 10-point Advanced Legal Study course on research methods and legal theory, then follows one of three routes: by coursework (110 further points of 500-level law courses, up to 40 of which can be replaced by approved postgraduate courses from outside the faculty – the University says this is the most popular route for international students); by dissertation and coursework (20 points of courses plus a 90-point, 35,000-word dissertation); or by thesis (a 120-point, 50,000-word thesis). Courses change from year to year and are taught in block, intensive or seminar formats, and all postgraduate law courses have limited entry, so you nominate alternatives. Note that an LLM is not a professional qualification – practising law in New Zealand requires an LLB.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-laws",
    degree: "Master of Laws (LLM)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Lawyer (with an LLB)",
      "In-house legal counsel",
      "Policy analyst",
      "Government legal or policy roles",
      "Academic or legal researcher",
    ],
    intake:
      "Trimester 1 (study starts 22 February 2027) or Trimester 2 (starts 5 July 2027)",
    applicationDeadline: DEADLINE_T1_T2,
    admissionRequirements: [
      "An LLB or LLB(Hons) degree, usually with at least a B average, and acceptance by the Faculty of Law's Director of Postgraduate Studies; applicants without an LLB may be accepted with suitable practical or professional experience",
      PG_DEGREE_NOTE,
      "English language (higher requirement for the LLM): IELTS Academic 7.0 overall with no band below 6.5; TOEFL iBT 100 with at least 21 in Writing; PTE Academic 65 with no communicative skill below 58; or Duolingo 130 with no band below 120",
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Architecture (Professional)",
    slug: "victoria-university-of-wellington-master-of-architecture-professional",
    level: "Master",
    field: "Architecture",
    duration: "2 years full-time (240 points)",
    campus: "Te Aro campus, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$51,300 per year (a full-time 120-point year), plus an estimated NZ$1,310 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MArch(Prof) is the professional degree for people who want to practise as architects. It is accredited by the New Zealand Registered Architects Board, so it meets the academic requirements for registration in New Zealand (after at least three years of practical experience and an assessment of professional competence), and the University says it can also lead to registration or licensing in Australia, the UK and parts of the United States. The first year is coursework, with plenty of options to explore your interests in depth, as you develop your ability to think visually and in three dimensions and to design complex buildings that respond to challenges such as climate change and the shortage of affordable housing. The second year is devoted to a single major design or research project. Links with practices in Wellington and around New Zealand give students the chance to work with practitioners on research and construction projects.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-architecture-professional",
    degree: "Master of Architecture (Professional) (MArch(Prof))",
    areaOfInterest: "Design & Visual Studies",
    careerOutcomes: [
      "Architect in private or public practice",
      "Urban planner or urban designer",
      "Property developer",
      "Project manager",
      "Stage or film set designer",
    ],
    intake:
      "Trimester 1 (study starts 22 February 2027) or Trimester 3 (starts 15 November 2027)",
    applicationDeadline:
      "For international students the 2027 qualification page says to apply by 7 December 2026 for Trimester 1 and by 31 August 2027 for Trimester 3",
    admissionRequirements: [
      "A Victoria University of Wellington BAS in Architecture or Graduate Diploma in Designed Environments in Architecture, or an equivalent qualification accepted by the Faculty of Architecture and Design Innovation; extensive professional or scholarly experience may be accepted instead",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of International Trade",
    slug: "victoria-university-of-wellington-master-of-international-trade",
    level: "Master",
    field: "International Trade",
    duration:
      "1 year full-time (180 points; intensive pathway) or 1.5 years (balanced pathway)",
    campus: "Kelburn and Pipitea campuses, Wellington",
    tuitionNote: `2027 international fee estimate: NZ$62,700 for the full 180-point programme (the Master of International Trade is charged at a flat point rate), plus an estimated NZ$1,630 Student Services Fee per year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MIntTr is a multidisciplinary trade-policy master's taught jointly by the Faculty of Law, the Wellington School of Business and Government, the Faculty of Science and Engineering and the Faculty of Humanities and Social Sciences, and it is open to graduates of any discipline. Four core courses worth 120 points – starting with the 30-point Multidisciplinary Approaches to International Trade – bring together trade law, economics, international relations, political economy, development studies and Māori perspectives on trade, and cover issues such as digital commerce, climate change and the impact of trade on Indigenous peoples. The other 60 points are electives at 400 or 500 level, or electives combined with a research component such as a 60-point dissertation. You can study on an intensive one-year schedule or a balanced 1.5-year schedule.",
    officialProgramUrl:
      "https://www.wgtn.ac.nz/study/sq/qualifications/postgraduate/master-of-international-trade",
    degree: "Master of International Trade (MIntTr)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Trade policy specialist or adviser",
      "Trade legal adviser",
      "Trade economist",
      "Trade negotiator",
    ],
    intake:
      "Trimester 1 (study starts 22 February 2027) or Trimester 2 (starts 5 July 2027)",
    applicationDeadline: DEADLINE_T1_T2,
    admissionRequirements: [
      "A bachelor's degree in any discipline with at least a B average or equivalent, and acceptance by the programme director; extensive practical, professional or scholarly experience may be accepted instead",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },
];
