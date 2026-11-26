import type { Program } from "../../programs";

// Auckland University of Technology | Te Wānanga Aronui o Tāmaki Makau Rau (AUT, Auckland, New Zealand): 8 undergraduate
// degrees and 7 postgraduate masters, chosen for their popularity with international students (business, computing and
// data, engineering and construction, design, communications, hospitality and health). Sources (viewed 26 November 2026):
// - Programme pages on aut.ac.nz (https://www.aut.ac.nz/study/study-options/...), with quick facts (programme code,
//   points, duration, campus, 2027 start dates), the international fee, minimum entry and English requirements, structure,
//   majors and career sections
// - International student fees at AUT (https://www.aut.ac.nz/study/fees-and-scholarships/fees-to-study-at-aut/international-student-fees-at-aut,
//   last updated 2 November 2026) and the International Student Fees 2027 flyer
//   (https://www.aut.ac.nz/__data/assets/pdf_file/0004/708925/International-Student-Fees-2027-Digital.pdf)
// - International student entry requirements by country:
//   https://www.aut.ac.nz/study/entry-requirements/international-student-entry-requirements
// - English language requirements for bachelor's and master's degrees:
//   https://www.aut.ac.nz/study/entry-requirements/english-language-requirements/bachelors-degrees and
//   https://www.aut.ac.nz/study/entry-requirements/english-language-requirements/english-language-requirements-for-masters-degrees
// - Applying to study at AUT (https://www.aut.ac.nz/study/applying), the 2027 Prospectus and programme guides ("Applying
//   for 2027": Semester 1 apply by 7 December 2026, Semester 2 apply by 3 May 2027) and 2027 semester dates
//   (https://www.aut.ac.nz/study/semester-dates)
// - International scholarships (https://www.aut.ac.nz/study/fees-and-scholarships/scholarships-and-awards-at-aut/international-scholarships)
//   and the AUT International Scholarships – South Asia regulations for the 2027 intakes
// - Immigration New Zealand: Fee Paying Student Visa (https://www.immigration.govt.nz/visas/fee-paying-student-visa/) and
//   Post-Study Work Visa (https://www.immigration.govt.nz/visas/post-study-work-visa/)
// Fees are AUT's published 2027 international fees in New Zealand dollars (including GST). AUT quotes most programmes per
// 120 points (a full-time year) as tuition plus the NZ$1,259.67 student services levy; the MBA and Master of Professional
// Accounting are quoted for the whole 180-point programme. AUT says the exact fee depends on the courses you enrol in and
// that fees can change from year to year.

const UNIVERSITY = {
  universitySlug: "auckland-university-of-technology",
  universityName: "Auckland University of Technology",
  country: "New Zealand",
  language: "English",
  programType: "Full-time",
} as const;

const CITY = "City Campus, Auckland";

const FEE_EXTRAS =
  "AUT says the exact fee depends on the courses you choose at enrolment and that fees can change from year to year, so later years of study may cost more. Other costs such as insurance, course materials and living costs are extra";

// ---------- Undergraduate ----------

const UG_SCHOLARSHIPS =
  "Scholarships: AUT International Scholarships for new full-fee-paying students from South Asia, Southeast Asia, North Asia and Europe start with an AUT offer; under the South Asia scheme (citizens of India, Pakistan, Bangladesh, Sri Lanka, Nepal, Afghanistan, Bhutan and the Maldives) the award is NZ$10,000 towards first-year bachelor's tuition, with applications for Semester 2, 2027 closing on 23 May 2027 or when places are filled. Some faculties also run their own international scholarships";

const UG_INTAKE =
  "Semester 1 (classes start 22 February 2027, orientation week from 15 February) or Semester 2 (starts 12 July 2027). Apply online at apply.aut.ac.nz or through an AUT-registered international agent";

const UG_DEADLINE =
  "AUT's 2027 guides say to apply by 7 December 2026 for Semester 1 and by 3 May 2027 for Semester 2. AUT processes applications up to the start of semester if places remain, but recommends applying at least three months before the start date to allow time for the student visa and travel";

const UG_ENTRANCE =
  "University entrance (international): a school qualification AUT accepts for your country, for example India – 12 years of schooling with a 75% average in four academic subjects and at least 60% in English (CBSE AISSC, CISCE ISC, or the Karnataka, Maharashtra or West Bengal state boards; other state boards 80% with 65% in English); Sri Lanka – three GCE A Level grades with at least one C (General Studies not counted); USA – a High School Diploma with a GPA of at least 2.5; or worldwide – the IB Diploma with at least 24 points or three GCE A Levels including at least one C. Some programmes are competitive and need more than the minimum";

const UG_ENGLISH =
  "English language (if English is not your first language): IELTS Academic 6.0 overall with all bands 5.5 or higher; TOEFL iBT 80 (Reading 15, Listening 15, Speaking 18, Writing 20); PTE Academic 50 with no score below 42; C1 Advanced 169 with no band below 162; or Duolingo 105, in a single sitting within the last two years (IELTS One Skill Retake accepted; IELTS and PTE online tests not accepted)";

const UG_WORK_RIGHTS =
  "Visa and work: international students need a New Zealand Fee Paying Student Visa, which generally allows part-time work of up to 25 hours a week during study and full-time work in scheduled holidays, depending on visa conditions. After a bachelor's degree with at least 30 weeks of full-time study in New Zealand, graduates can apply once for a Post-Study Work Visa for the same length of time they studied the degree in New Zealand (up to 3 years), with open work rights, per Immigration New Zealand";

// ---------- Postgraduate ----------

const PG_SCHOLARSHIPS =
  "Scholarships: AUT International Scholarships for new full-fee-paying students from South Asia, Southeast Asia, North Asia and Europe start with an AUT offer; under the South Asia scheme the award is NZ$7,000 towards the first year of a master's programme, with applications for Semester 2, 2027 closing on 23 May 2027 or when places are filled (previous AUT graduates are not eligible)";

const PG_INTAKE =
  "Semester 1 (classes start 22 February 2027) or Semester 2 (starts 12 July 2027). Apply online at apply.aut.ac.nz or through an AUT-registered international agent";

const PG_DEADLINE =
  "AUT's 2027 guides say to apply by 7 December 2026 for Semester 1 and by 3 May 2027 for Semester 2; applications are processed up to the start of semester if places remain, and AUT recommends applying at least three months ahead to allow for the student visa";

const PG_ENGLISH =
  "English language (if English is not your first language): IELTS Academic 6.5 overall with all bands 6.0 or higher; TOEFL iBT 90 (Writing 24, Reading, Listening and Speaking 20), or 5.0 with no score below 4.5 on the 1–6 scale for tests from January 2026; PTE Academic 58 with no score below 50; C1 Advanced 176 with no band below 169; or Duolingo 120, in a single sitting within the last two years";

const PG_WORK_RIGHTS =
  "Visa and work: a New Zealand Fee Paying Student Visa generally allows up to 25 hours of work a week during study and full-time work in scheduled holidays, depending on visa conditions. A master's degree with at least 30 weeks of full-time study in New Zealand can lead to a Post-Study Work Visa of up to 3 years with open work rights (one per person), per Immigration New Zealand";

const PG_DEGREE_NOTE =
  "Applicants with qualifications from outside New Zealand need a completed bachelor's degree from a recognised university that AUT assesses as equivalent; AUT may also ask for evidence of relevant work or research experience";

export const autPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Business",
    slug: "aut-bachelor-of-business",
    level: "Bachelor",
    field: "Business",
    duration: "3 years full-time (360 points); part-time available",
    campus: "City Campus (core and some first-year courses also at South Campus), Auckland",
    tuitionNote: `2027 international fee: NZ$39,959.67 for 120 points (a full-time year), made up of NZ$38,700 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "AUT's Bachelor of Business (programme AK3693) is a flexible three-year degree from a business school that holds both AACSB and EQUIS accreditation. It has three equal parts: 120 points of core courses that explain how organisations work, a 120-point major, and a 120-point flexible block that can be two minors, a minor plus electives, or a second major, which can even come from outside business (for example tourism, journalism or sport). Majors are Accounting, Economics, Finance, Human Resource Management and Employment Relations, Information Systems, International Business and Strategy, Management and Leadership, and Marketing, and minors include Business Law, Data Analytics for Business, Entrepreneurship and Innovation, Supply Chain Management and Sustainable Enterprise. The final semester is a capstone in which you complete workplace experience, an applied project or a new business venture, with a strong focus on social impact.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/business/courses/bachelor-of-business",
    degree: "Bachelor of Business (BBus)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant",
      "Financial or economic analyst",
      "Marketing or brand coordinator",
      "Human resources adviser",
      "Business or information systems analyst",
      "Entrepreneur or small business owner",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No specific school subjects are required; AUT lists subjects such as English, Economics, Business Studies, Statistics and Calculus as useful. If you do not meet entry, the Diploma in Business is a pathway",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Computer and Information Sciences",
    slug: "aut-bachelor-of-computer-and-information-sciences",
    level: "Bachelor",
    field: "Computer Science",
    duration: "3 years full-time (360 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$45,159.67 for 120 points (a full-time year), made up of NZ$43,900 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "The BCIS (programme AK3697) is AUT's main computing degree. Core courses in the first year give you a base in programming, computing and IT before you specialise, and every student finishes with a research and development project in the third year, often working with industry. You choose a major from Computer Science, Data Science, Digital Services, Networks and Cybersecurity, or Software Development, and fill the flexible third of the degree with a second major, minors (including Artificial Intelligence) or electives from other AUT subjects. Double majors can share up to 30 points. AUT highlights strong links with New Zealand employers, and graduates can go on to AUT's postgraduate certificate, diploma and master's in computer and information sciences.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/bachelor-of-computer-and-information-sciences",
    degree: "Bachelor of Computer and Information Sciences (BCIS)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer",
      "Data analyst or data scientist",
      "Cybersecurity or network specialist",
      "Business or systems analyst",
      "IT consultant",
      "Digital services or UX specialist",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects; AUT suggests Calculus, Mathematics, Statistics and Digital Technologies as useful. Pathways if you do not meet entry: the Certificate in Science and Technology or the Diploma in Computer and Information Sciences",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Engineering (Honours)",
    slug: "aut-bachelor-of-engineering-honours",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (480 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$51,359.67 for 120 points (a full-time year), made up of NZ$50,100 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "AUT's four-year BE(Hons) (programme AK3751) is accredited by Engineering New Zealand, a Washington Accord signatory, so the degree is recognised internationally. Full-time students take eight courses (120 points) a year. The first year introduces the different fields of engineering and shares many courses with the Bachelor of Engineering Technology, which can make it easier to change major; from the second year you specialise in your chosen engineering major and build advanced design, modelling and analysis skills through projects and practical courses. In the final year you complete an industry-based design and analysis project for an organisation such as an energy company, infrastructure firm or manufacturer, and you must also complete 800 hours of planned, supervised work experience to graduate.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/bachelor-of-engineering-honours",
    degree: "Bachelor of Engineering with Honours (BE(Hons))",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Professional engineer in your chosen discipline",
      "Design engineer",
      "Project engineer",
      "Energy or infrastructure engineer",
      "Engineering consultant",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "Mathematics and physics are required: for example IB Mathematics and Physics at grade 4 or better, or Cambridge A Level Mathematics with at least AS Physics (or A Level Physics with at least AS Mathematics). Applicants entering by other routes must show calculus and physics to NCEA level 3 or equivalent. Pathways: Certificate in Science and Technology or Diploma in Engineering",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Design",
    slug: "aut-bachelor-of-design",
    level: "Bachelor",
    field: "Design",
    duration: "3 years full-time (360 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$45,659.67 for 120 points (a full-time year), made up of NZ$44,400 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "The Bachelor of Design Te Tohu Paetahi mō te Hoahoa (programme AK3619) is a studio-based degree that focuses on the links between design disciplines, mātauranga Māori and new technologies, as well as the ethical responsibilities of designers. Core courses cover design principles and processes, and the final semester includes Integrated Design Practice, a chance to gain workplace experience. Majors are Animation, Visual Effects and Game Design; Communication Design; Fashion Design; Industrial Design; Interaction Design; and Spatial and Interior Design, and you can add a second major (including visual arts) or minors such as Extended Reality, Motion Capture, Digital Fabrication, Design for Health or Creative Entrepreneurship. Students can show their work at the AUT Art & Design Festival.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/art-and-design/courses/bachelor-of-design",
    degree: "Bachelor of Design (BDes)",
    areaOfInterest: "Design & Visual Studies",
    careerOutcomes: [
      "Graphic or communication designer",
      "Animator, VFX or game designer",
      "Fashion designer",
      "Industrial or product designer",
      "UX or interaction designer",
      "Spatial or interior designer",
    ],
    intake:
      "Semester 1 only (classes start 22 February 2027). Apply online at apply.aut.ac.nz or through an AUT-registered international agent",
    applicationDeadline:
      "AUT's 2027 Art and Design guide says to apply by 7 December 2026 for Semester 1, 2027; applications are processed up to the start of semester if places remain, and AUT recommends applying at least three months ahead to allow for the student visa",
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects; AUT lists art, design, digital technologies, media studies and similar subjects as useful. Pathway if you do not meet entry: the Diploma in Design Tītohu mō te Hoahoa",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Health Science (Nursing)",
    slug: "aut-bachelor-of-health-science-nursing",
    level: "Bachelor",
    field: "Nursing",
    duration: "3 years full-time (360 points)",
    campus: "North Campus, Auckland",
    tuitionNote: `2027 international fee: NZ$44,959.67 for 120 points (a full-time year), made up of NZ$43,700 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "AUT's nursing degree (programme AK3324) prepares you to sit the Nursing Council of New Zealand State Examination and register as a Registered Nurse. Teaching is built around interprofessional practice: in the first semester all health science students share four courses on communication, Te Tiriti o Waitangi, healthcare systems and the human body, then the second semester introduces nursing practice. Year 2 covers acute nursing, long-term care and disability, mental health nursing and pharmacology, with placements in hospitals and the community, and Year 3 focuses on complex acute and community nursing and ends with a 360-hour transition-to-practice placement. Across the degree you complete 1,000 hours of clinical experience, in settings that can include Starship children's hospital, emergency and critical care, mental health and aged care.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/health-sciences/courses/bachelor-of-health-science-in-nursing",
    degree: "Bachelor of Health Science (Nursing) (BHSc(Nursing))",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Registered nurse (after the Nursing Council State Examination)",
      "Acute care nurse",
      "Mental health nurse",
      "Primary healthcare nurse",
      "Health manager or administrator",
      "Nurse researcher or educator",
    ],
    workIntegrated: true,
    intake:
      "Semester 1 (22 February 2027) or Semester 2 (12 July 2027). AUT states that the February 2027 intake is full and closed; you can still apply to start in July 2027",
    applicationDeadline:
      "The February 2027 intake is full and applications have closed. For the July 2027 start, AUT's 2027 guides say to apply by 3 May 2027; places are limited and may involve selection, so apply early to allow for the student visa",
    admissionRequirements: [
      UG_ENTRANCE,
      "Competitive entry: if there are more applicants than places, AUT selects on academic results (indicative rank scores are IB 30, CAIE 290 and NCEA 220) and may consider health workforce needs. You must meet Health Practitioners Competence Assurance Act and Children's Act 2014 requirements, including police clearance, and the programme's fitness-to-practise and placement requirements",
      "English language (higher than standard, IELTS required): IELTS Academic 6.5 overall with all bands 6.5 or higher, for applicants with English as a second language who have not completed at least three years of secondary school in New Zealand",
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Communication Studies",
    slug: "aut-bachelor-of-communication-studies",
    level: "Bachelor",
    field: "Communication and Media",
    duration: "3 years full-time (360 points)",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$39,459.67 for 120 points (a full-time year), made up of NZ$38,200 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "AUT's Bachelor of Communication Studies (programme AK3303) combines communication theory with hands-on media work. First-year core courses introduce the media world and communication theory, then you choose a major from Advertising and Brand Creativity, Digital Communication, Journalism, Public Relations, Radio and Audio Media, or Screen Production, plus a second major, minors (such as Communication for Social Change or Multi-Camera Production) or electives. Students use industry-standard facilities including a media centre, radio studio and TV studio, and can work on the training news service Te Waha Nui, student radio station Static 88.1FM and the student-run PR agency Outside the Square. The degree includes workplace experience before you graduate.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/communication-studies/courses/bachelor-of-communication-studies",
    degree: "Bachelor of Communication Studies (BCS)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Journalist or content producer",
      "Public relations or communications adviser",
      "Advertising creative or brand strategist",
      "Digital or social media specialist",
      "Radio, audio or podcast producer",
      "Screen and video producer",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects; AUT recommends language-rich subjects such as English, Media Studies, History or Drama",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of International Hospitality Management",
    slug: "aut-bachelor-of-international-hospitality-management",
    level: "Bachelor",
    field: "Hospitality and Tourism",
    duration: "3 years full-time (360 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$41,459.67 for 120 points (a full-time year), made up of NZ$40,200 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "This degree (programme AK3708) teaches how hospitality businesses run and how to create memorable guest experiences. Core courses cover food and beverage and accommodation operations alongside human resource management, strategic management, and sales and marketing, and the practical side includes working front of house in AUT's two training restaurants and learning to use commercial kitchen equipment. You major in Hospitality Management and can add minors such as Event Management, Gastronomy, Global Tourism or Restaurant Management, or a second major from another AUT degree. In the final year a workplace experience course places you with an organisation on a project related to your studies, and graduates can continue to honours or AUT's Master of International Hospitality Management.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/hospitality-tourism-and-events/courses/bachelor-of-international-hospitality-management",
    degree: "Bachelor of International Hospitality Management (BIHM)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Hotel or resort manager",
      "Food and beverage manager",
      "Event manager",
      "Restaurant manager",
      "Tourism operations or guest experience manager",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects. The practical courses require you to work safely in training restaurants and commercial kitchens; the Diploma in Arts is a pathway if you do not meet entry",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Construction",
    slug: "aut-bachelor-of-construction",
    level: "Bachelor",
    field: "Construction Management",
    duration: "3 years full-time (360 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$49,859.67 for 120 points (a full-time year), made up of NZ$48,600 tuition and the NZ$1,259.67 student services levy. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "AUT's Bachelor of Construction (programme AK1220) prepares you for careers as a construction manager or quantity surveyor, the people who keep building projects on time, on budget and safe. The degree is fully accredited by the Royal Institution of Chartered Surveyors (RICS) when you complete a construction major together with the compulsory Professional Practice minor, and the Quantity Surveying major is also accredited by the New Zealand Institute of Quantity Surveyors. Alongside core courses and your 120-point major, the Professional Practice minor covers work practices, construction processes and leadership in construction organisations, and you add a second minor or electives. In the final year you complete an interdisciplinary Construction Integration Specialisation Project, and you need at least 600 hours of supervised work experience to graduate.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/architecture-and-built-environment/courses/bachelor-of-construction",
    degree: "Bachelor of Construction (BConst)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Construction manager",
      "Quantity surveyor",
      "Project manager or site manager",
      "Property or facilities manager",
      "Cost manager or estimator",
    ],
    workIntegrated: true,
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects; AUT lists mathematics (with statistics or calculus), science, business, economics, design and construction technology as useful",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  // ---------- Postgraduate ----------

  {
    ...UNIVERSITY,
    name: "Master of Business Administration (MBA)",
    slug: "aut-master-of-business-administration",
    level: "Master",
    field: "Business Administration",
    duration: "1.5 years full-time (180 points), or 2–4 years part-time; the length depends on how many courses you take each term",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$67,289.51 for the full 180-point programme (NZ$65,400 tuition and NZ$1,889.51 student services levy); the 2026 fee was NZ$64,082.40. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The AUT MBA (programme AK3717) is aimed at experienced professionals moving into or already in senior management, and at self-employed people who want stronger business skills. It is taught in eight-week terms, with one three-hour class a week per course, so you can start in any of four terms and fit study around work. The 120-point core covers accounting and financial analysis, operations and supply chain strategy, economics for managers, diversity and inclusion, strategy, leadership and change, market analysis and sustainability, and finishes with a two-part Applied Business Project. You then choose six electives from topics such as managing projects, digital business transformation, entrepreneurship, negotiation, high-performing teams and sales management, and electives can also be taken at AUT's partner business schools overseas.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/business/courses/master-of-business-administration",
    degree: "Master of Business Administration (MBA)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Senior manager or general manager",
      "Business unit or operations leader",
      "Strategy or management consultant",
      "Entrepreneur or business owner",
      "Project or programme director",
    ],
    intake:
      "Four terms a year: 22 February, 3 May, 12 July or 20 September 2027. Apply online at apply.aut.ac.nz or through an AUT-registered international agent",
    applicationDeadline:
      "AUT does not publish a separate MBA closing date; its 2027 guides say to apply by 7 December 2026 for Semester 1 and by 3 May 2027 for Semester 2, and AUT recommends applying at least three months before your start term to allow for the student visa",
    admissionRequirements: [
      "A bachelor's degree, a graduate diploma, or a professional qualification or experience approved as equivalent, plus at least five years of relevant professional experience (shown in a CV uploaded with your application). Admission is approved by the MBA Director, and an aptitude test and/or interview may be required",
      PG_DEGREE_NOTE,
      "English language: IELTS Academic 6.5 overall with at least 6.0 in each band, or an equivalent AUT-accepted test",
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Professional Accounting",
    slug: "aut-master-of-professional-accounting",
    level: "Master",
    field: "Accounting",
    duration: "1 to 1.5 years full-time (180 points, taught over three 15-week trimesters); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$62,789.51 for the full 180-point programme (NZ$60,900 tuition and NZ$1,889.51 student services levy). ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The Master of Professional Accounting (programme AK3411) is a conversion degree for graduates of any discipline who want to retrain as accountants. You take a fixed set of courses covering financial and advanced financial accounting, management and strategic management accounting, New Zealand taxation, accounting information systems, finance, accounting regulation and business law, auditing, and economics and quantitative methods, and finish with an applied professional accounting project. Cross-credits are not available. AUT says the programme meets the academic requirements for membership of CA ANZ, CPA Australia, ACCA and CIMA, opening routes to chartered accountant, management accountant and finance roles.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/business/courses/master-of-professional-accounting",
    degree: "Master of Professional Accounting (MProfAcc)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Chartered accountant",
      "Management accountant",
      "Auditor or forensic accountant",
      "Tax specialist",
      "Finance manager or chief financial officer",
    ],
    intake:
      "Trimester starts on 1 March 2027 or 26 October 2027. Apply online at apply.aut.ac.nz or through an AUT-registered international agent",
    applicationDeadline:
      "AUT does not publish a separate closing date for this trimester-based programme; it recommends applying at least three months before your start date to allow for the student visa. Check the programme page for current dates",
    admissionRequirements: [
      "A bachelor's degree in any discipline with a B- grade average or higher in level 7 (final-year) courses, or equivalent",
      PG_DEGREE_NOTE,
      "English language: IELTS Academic 6.5 overall with at least 6.0 in each band, or an equivalent AUT-accepted test. The Programme Director may waive IELTS if you completed an English-taught qualification in the last 3 years or have lived or worked in an English-speaking environment for 3 years",
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Analytics",
    slug: "aut-master-of-analytics",
    level: "Master",
    field: "Data Science and Analytics",
    duration: "1.5 years full-time (180 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$49,459.67 for 120 points (NZ$48,200 tuition and NZ$1,259.67 student services levy); the 180-point programme is about 1.5 times this. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "AUT's Master of Analytics (programme AK1321) builds the mathematical, statistical and computing skills needed to model and analyse very large datasets. Required courses cover data mining and machine learning, data warehousing and big data, mathematical modelling and simulation, optimisation and operations research, an advanced topic in analytics, and STEM research methods. You add two electives from options such as artificial intelligence, natural language processing and large language models, nature-inspired computing, financial modelling, official statistics and computational statistics, and complete a one-semester, 60-point research dissertation. Depending on your course choices, you may also qualify for the SAS Joint Certificate in Advanced Analytics.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/master-of-analytics",
    degree: "Master of Analytics (MAnalytics)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist",
      "Data or business intelligence analyst",
      "Machine learning analyst",
      "Operations research analyst",
      "Quantitative or risk analyst",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A relevant bachelor's degree in the mathematical sciences (or equivalent) with a B grade average in level 7 courses; in exceptional cases a mix of academic and professional experience may be considered, subject to prerequisite courses",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Computer and Information Sciences",
    slug: "aut-master-of-computer-and-information-sciences",
    level: "Master",
    field: "Computer Science",
    duration: "1.5 years full-time (180 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$49,459.67 for 120 points (NZ$48,200 tuition and NZ$1,259.67 student services levy); the 180-point programme is about 1.5 times this. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The MCIS (programme AK1329) is a research-focused master's for computing graduates who want to go deeper into a specialist area. You take STEM Research Methods and a selection of advanced courses, for example data mining and machine learning, artificial intelligence, deep learning, natural language processing and large language models, information security, cloud computing, Internet of Things, software architecture, human-computer interaction and video and image processing, and then complete a research project or thesis with an academic supervisor (thesis entry needs at least a B average and an approved proposal). Research areas include AI, robotics, health informatics, information security, networking and computational astronomy, and many students work with AUT's research institutes and labs. AUT says graduates are well prepared for PhD study.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/master-of-computer-and-information-sciences",
    degree: "Master of Computer and Information Sciences (MCIS)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software engineer or architect",
      "AI or machine learning engineer",
      "Research and development specialist",
      "Information security specialist",
      "PhD candidate or researcher",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A Bachelor of Computer and Information Sciences or equivalent qualification with a B grade average or higher in level 7 (final-year) courses",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Cyber Security and Digital Forensics",
    slug: "aut-master-of-cyber-security-and-digital-forensics",
    level: "Master",
    field: "Cybersecurity",
    duration: "1.5 years full-time (180 points); part-time available",
    campus: CITY,
    tuitionNote: `2027 international fee: NZ$48,559.67 for 120 points (NZ$47,300 tuition and NZ$1,259.67 student services levy); the 180-point programme is about 1.5 times this. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "This master's (programme AK1324) trains specialists who protect networks and systems and who can find and record digital evidence of crime from networks, hard drives, phones and other devices. Everyone takes Advanced Cybercrime and Cybersecurity, Digital Forensics Tools and Techniques, and STEM Research Methods, then chooses from courses such as information security, cryptography and cryptanalysis, network security and forensics, advanced cyber forensics, applied blockchains and cryptocurrencies, cloud computing and IT strategy. You finish with either a one-semester dissertation or a two-semester thesis (each needs a B- average and an approved proposal). Teaching mixes academic study with practical labs using dedicated specialist hardware and software.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/master-of-cyber-security-and-digital-forensics",
    degree: "Master of Cyber Security and Digital Forensics (MCSDF)",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Information security specialist",
      "Digital forensic analyst or investigator",
      "Network security engineer",
      "Incident response team member",
      "Information systems auditor",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A Bachelor of Computer and Information Sciences (or equivalent) with a B grade average in level 7 courses; you may be asked for references and a selection interview",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Engineering Project Management",
    slug: "aut-master-of-engineering-project-management",
    level: "Master",
    field: "Engineering Management",
    duration: "1 year full-time (120 points); part-time available",
    campus: "City Campus, Auckland (some courses online or in blocks)",
    tuitionNote: `2027 international fee: NZ$52,859.67 for the 120-point programme (NZ$51,600 tuition and NZ$1,259.67 student services levy). ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "AUT describes this programme (AK1317) as the first of its kind in New Zealand. It is aimed at practising engineering project managers aiming for senior roles and at recent engineering graduates who want business and project management skills. Required courses are Advanced Integrated Project Management, Engineering Corporate Social Responsibility, and Economics and Finance for Engineers, together with a full-year, 45-point project in engineering project management. You then choose two electives from engineering resource efficiency, built asset management, engineering supply chain management and specialist readings. Many courses are taught in blocks or online to suit working professionals, although international students on a student visa need to follow their visa's study conditions.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/master-of-engineering-project-management",
    degree: "Master of Engineering Project Management (MEPM)",
    areaOfInterest: "Engineering & Applied Sciences",
    careerOutcomes: [
      "Engineering project manager",
      "Engineering manager",
      "Process manager",
      "Leader of an engineering business unit",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "With a B grade average or higher: a relevant four-year bachelor's degree, a relevant bachelor's degree with honours, or a relevant postgraduate diploma (or equivalent); relevant project engineering or managerial experience may be considered with the Dean's approval",
      PG_DEGREE_NOTE,
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Health",
    slug: "aut-master-of-public-health",
    level: "Master",
    field: "Public Health",
    duration: "2 years full-time (240 points); part-time available",
    campus: "South Campus, Manukau (some courses at City or North Campus)",
    tuitionNote: `2027 international fee: NZ$48,359.67 for 120 points (NZ$47,100 tuition and NZ$1,259.67 student services levy), with 240 points in total. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "AUT's Master of Public Health (programme AK3805) is for people who want to lead change in community and public health, tackle health inequities or influence health policy. Core courses cover principles of public health, social epidemiology, public health policy and systems, and Māori health development, and you choose a research methods course (including options in Māori or Pacific health research). Electives span violence and trauma, disasters and emergency management, disability and health, leadership and management, digital health and health technologies, and you finish with a thesis or dissertation on a topic you choose. The programme is based mainly at the South Campus in Manukau, with some courses at the City or North campuses; international students must take the on-campus versions of courses to meet student visa rules.",
    officialProgramUrl:
      "https://www.aut.ac.nz/study/study-options/health-sciences/courses/master-of-public-health",
    degree: "Master of Public Health (MPH)",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Public health adviser or analyst",
      "Health policy and strategy roles",
      "Health promotion manager",
      "Community health programme leader",
      "Epidemiology or health research roles",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A relevant bachelor's degree or relevant graduate diploma with a B average or higher; a relevant professional qualification or experience approved as equivalent to a bachelor's degree may also be accepted",
      PG_DEGREE_NOTE,
      "English language: IELTS Academic 6.5 overall with no band below 6.0, or an equivalent AUT-accepted test",
      PG_WORK_RIGHTS,
    ],
  },
];
