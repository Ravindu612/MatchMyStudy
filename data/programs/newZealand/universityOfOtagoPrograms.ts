import type { Program } from "../../programs";

// University of Otago | Ōtākou Whakaihu Waka (Dunedin, New Zealand): 8 undergraduate degrees and 7 taught postgraduate
// programmes, chosen for their popularity with international students (health professions, business, computing and
// data, law, psychology and peace studies). Sources (viewed 25 November 2026):
// - International tuition fee schedules for 2027 (annual fees in NZ$, points, duration and intake semesters):
//   https://www.otago.ac.nz/study/fees/international-tuition-fees/business-school
//   https://www.otago.ac.nz/study/fees/international-tuition-fees/sciences
//   https://www.otago.ac.nz/study/fees/international-tuition-fees/health-sciences
//   https://www.otago.ac.nz/study/fees/international-tuition-fees/humanities
//   and the general page https://www.otago.ac.nz/study/fees/international-tuition-fees (fees are estimates, worked out
//   paper by paper; continuing students' fees can rise by at most 5% a year; Student Services Fee and insurance are extra)
// - Subject, qualification and regulation pages on otago.ac.nz/courses and otago.ac.nz/study/qualifications, the Otago MBA
//   site (otago.ac.nz/mba), the National Centre for Peace and Conflict Studies (otago.ac.nz/ncpacs), the postgraduate
//   Business Analytics and Finance pages (otago.ac.nz/apply/postgraduate/...), and the Division of Health Sciences
//   admission guidelines and international information
//   (https://www.otago.ac.nz/healthsciences/students/undergraduate/undergraduate-health-science-information-for-international-students)
// - Entry requirements: https://www.otago.ac.nz/international/future-students/entrance-requirements/international-entrance-requirements
//   and English language requirements: https://www.otago.ac.nz/study/entry-requirements/language-requirements
// - Key dates for new international students (2027 intakes):
//   https://www.otago.ac.nz/international/future-students/prepare-for-otago/key-dates-for-new-international-students
//   and enrolment deadlines (limited-entry programmes): https://www.otago.ac.nz/study/enrolment/enrolment-deadlines
// - Scholarships for international students:
//   https://www.otago.ac.nz/international/future-students/fees-scholarships/international-scholarships
// - Immigration New Zealand: Fee Paying Student Visa (https://www.immigration.govt.nz/visas/fee-paying-student-visa/) and
//   Post-Study Work Visa (https://www.immigration.govt.nz/visas/post-study-work-visa/)
// Fees are the University's published 2027 international tuition estimates in New Zealand dollars, for a standard
// full-time year unless stated. The University stresses that the real fee depends on the exact papers you take.

const UNIVERSITY = {
  universitySlug: "university-of-otago",
  universityName: "University of Otago",
  country: "New Zealand",
  language: "English",
  programType: "Full-time",
} as const;

const DUNEDIN = "Dunedin campus";

const FEE_EXTRAS =
  "Fees are estimates calculated from the papers you actually take; if your programme runs into a later year you pay that year's fee, and fees for continuing students can rise by no more than 5% a year. The compulsory Student Services Fee (charged to most new international full-degree students on a 1.05 EFTS basis), the Pūtea Tautoko Student Relief Fund fee, insurance, administration fees and living costs are extra";

// ---------- Undergraduate ----------

const UG_SCHOLARSHIPS =
  "Scholarships for new international bachelor's students (2027): the University of Otago Global Scholarship (NZ$15,000, unlimited offers, for passport holders of Bangladesh, China, Hong Kong, India, Indonesia, Macau, Malaysia, Singapore, South Korea, Sri Lanka, Taiwan, Thailand and Vietnam) and the Vice-Chancellor's Scholarship for International Students (NZ$10,000 towards tuition) are assessed automatically when you apply; high achievers who studied overseas can then be invited to apply for the competitive International Academic Excellence Scholarship (about NZ$35,000 in total)";

const UG_INTAKE =
  "Semester 1 (formal lectures start 1 March 2027, with compulsory international orientation 22–26 February) or Semester 2 (classes start 12 July 2027). Apply online through Otago's eVision portal";

const UG_DEADLINE =
  "International applications for 2027 opened on 1 May 2026. Applicants outside New Zealand had to apply by 15 November 2026 for Semester 1, 2027 (applicants already in New Zealand by 10 December 2026); the deadline for Semester 2, 2027 is 30 April 2027. Offshore applicants should also apply for a residential college by 1 December 2026";

const UG_ENTRANCE =
  "University entrance (international): a qualification Otago recognises for your country, for example a completed IB Diploma with at least 24 points; three UK GCE A Levels at grade C or higher (General Studies not accepted); India – AISSC (CBSE), ISC or the Karnataka, Maharashtra or West Bengal state boards with an overall average of 75% and at least 60% in English (other state boards 80% overall and 65% in English); or Sri Lanka – three GCE A Level passes at grade C or higher. Students who just miss entrance can use Otago's Foundation Studies Certificate or a Diploma in Arts, Commerce or Science pathway";

const UG_ENGLISH =
  "English language (if English is not your first language): IELTS Academic 6.0 overall with no band below 5.5; TOEFL iBT 4 overall with 4 in writing (tests from 21 January 2026; 80 with 20 in writing for earlier tests); PTE Academic 50 with no communicative skill below 42; C1 Advanced or C2 Proficiency 169 with no band below 162; or Duolingo 105 with no subscore below 95. Tests must normally have been taken within two years of starting at Otago";

const UG_WORK_RIGHTS =
  "Visa and work: international students need a New Zealand Fee Paying Student Visa, which lets you work part-time up to 25 hours a week during study and full-time in holidays, depending on your visa conditions. After a bachelor's degree with at least 30 weeks of full-time study in New Zealand, you can apply once for a Post-Study Work Visa for the same length of time you studied the degree in New Zealand, with open work rights (Immigration New Zealand)";

const HSFY_PATH =
  "Entry is through Health Sciences First Year (HSFY): you are first admitted to the University (one intake a year, late February) and take the seven prescribed HSFY papers at Otago, then apply competitively for a second-year place. There are no compulsory school subjects for HSFY, but Otago strongly recommends Chemistry, Physics and Calculus (and Biology for some programmes) to the final year of school. To be selected you must also pass the HSFY English Diagnostic (or ENGL 128)";

const HSFY_DEADLINE =
  "First apply to the University for Health Sciences First Year (Semester 1 only): international applicants outside New Zealand had to apply by 15 November 2026 for a 2027 start (10 December 2026 if already in New Zealand). During HSFY you apply for the second-year professional programme: for 2027 second-year entry the online application ran from 1 July to 13 August 2026, and the same mid-August closing date is listed on Otago's enrolment deadlines page";

const HSFY_INTAKE =
  "Semester 1 only (Health Sciences First Year starts in late February; Semester 1, 2027 lectures begin 1 March 2027). Apply online through Otago's eVision portal";

// ---------- Postgraduate ----------

const PG_SCHOLARSHIPS =
  "Scholarships (2027): the University of Otago Global Master's Scholarship (NZ$15,000 towards tuition, unlimited offers, assessed automatically) is open to full-time on-campus students in this programme who hold a passport from Bangladesh, China, Hong Kong, India, Indonesia, Macau, Malaysia, Singapore, South Korea, Sri Lanka, Taiwan, Thailand or Vietnam, and the University of Otago Coursework Master's Scholarship (NZ$10,000 towards tuition) is open to international and domestic coursework master's students";

const PG_INTAKE =
  "Semester 1 (starts 1 March 2027, with compulsory international orientation 22–26 February) or Semester 2 (starts 12 July 2027). Apply online through Otago's eVision portal";

const PG_DEADLINE =
  "International applications for 2027 opened on 1 May 2026. Applicants outside New Zealand had to apply by 15 November 2026 for Semester 1, 2027 (10 December 2026 if already in New Zealand), and the deadline for Semester 2, 2027 is 30 April 2027";

const PG_ENGLISH =
  "English language (if English is not your first language): IELTS Academic 6.5 overall with no band below 6.0; TOEFL iBT 4.5 overall with 4.5 in writing (tests from 21 January 2026; 90 with 21 in writing for earlier tests); PTE Academic 58 with no communicative skill below 50; C1 Advanced or C2 Proficiency 176 with no band below 169; or Duolingo 120 with no subscore below 95. A completed degree taught in English in one of the countries Otago lists can also meet the requirement";

const PG_WORK_RIGHTS =
  "Visa and work: a New Zealand Fee Paying Student Visa lets you work part-time up to 25 hours a week during study and full-time in holidays, depending on your visa conditions. A master's degree with at least 30 weeks of full-time study in New Zealand can lead to a Post-Study Work Visa of up to 3 years with open work rights (one per person), per Immigration New Zealand";

const MBUS_ENTRY =
  "A bachelor's degree with an average grade of at least B, a Postgraduate Certificate or Diploma in Business with at least a B average, or other qualifications or experience accepted by the Pro-Vice-Chancellor (Commerce)";

const MBUS_DURATION =
  "12 months full-time (180 points); 18 months if you start in Semester 2 and choose the dissertation option";

export const universityOfOtagoPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Bachelor of Commerce (BCom)",
    slug: "university-of-otago-bachelor-of-commerce",
    level: "Bachelor",
    field: "Business",
    duration: "3 years full-time (360 points)",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$42,840 to NZ$46,200 a year depending on the major, for example Tourism NZ$42,840, Accounting NZ$44,520, Marketing NZ$44,940, Economics NZ$45,255, Management NZ$45,360, Finance NZ$45,570 and Business Analytics NZ$46,200. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Otago Business School's BCom is a three-year, 360-point degree that starts with five required first-year business papers (BSNS 111 to 115), which give every student a common grounding before they specialise. You then complete at least one major, choosing from areas such as Accounting, Business Analytics, Economics, Finance, Human Resource Management, International Business, Management, Marketing, Philosophy, Politics and Economics, and Tourism, and you can add an optional minor from Commerce, Arts, Science or Health Sciences (for example a Marketing major with a Japanese minor). Up to 90 points can come from outside Commerce, and the degree can be extended into an honours year in many majors or combined with Arts or Science in four-year double-major degrees (BACom and BComSc).",
    officialProgramUrl: "https://www.otago.ac.nz/courses/qualifications/bachelor-of-commerce",
    degree: "Bachelor of Commerce (BCom)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Accountant or auditor",
      "Business or data analyst",
      "Financial analyst",
      "Marketing or brand manager",
      "Human resources adviser",
      "Tourism or international business manager",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No specific school subjects are required for the BCom; all five required BSNS papers are normally attempted in the first year",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Computer Science",
    slug: "university-of-otago-bsc-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "3 years full-time (360 points)",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$47,145 a year for a BSc majoring in Computer Science (a BA in Computer Science is listed at NZ$45,360). ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Otago's School of Computing teaches all the core areas of computer science, with a focus on analysing, designing and building algorithms and software systems. Under the major requirements that apply from 2026, first year covers Computer Programming (COMP 121), Foundations of Computer Science (COMP 122) and Socially Responsible Computing (DHUM 101) plus a maths or statistics paper; second year moves on to algorithms and data structures, software development and computer systems; and third year includes at least four 300-level papers in computing, data science, digital humanities or software engineering, with options such as artificial intelligence, cryptography and security, cloud computing, databases, graphics and vision, and computational problem solving. Staff research areas include AI, computer graphics and vision, distributed computing and biological data science, and students can use a Human-Computer Interaction lab for virtual, augmented and mixed reality work. The rest of the 360-point degree is open, so computer science combines well with a second major or a minor.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/computer-science",
    degree: "Bachelor of Science (BSc), Computer Science major",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software developer",
      "Game designer or developer",
      "Systems analyst",
      "Network manager",
      "IT consultant",
      "Technology entrepreneur",
    ],
    intake:
      "Semester 1 (formal lectures start 1 March 2027) or Semester 2 (starts 12 July 2027); Otago notes that a July start is possible but can lengthen the degree or limit paper choice. Apply online through Otago's eVision portal",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects; Otago suggests that final-year school mathematics (preferably calculus) and digital technology are useful preparation",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Science in Psychology",
    slug: "university-of-otago-bsc-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "3 years full-time (360 points)",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$46,200 a year for a BSc majoring in Psychology (the BA in Psychology is listed at NZ$45,360). ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Psychology at Otago looks at how people think, feel and behave, from single neurons in the brain to the behaviour of groups and whole communities. First year combines Brain and Behaviour (PSYC 111) and Human Thought and Behaviour (PSYC 112) with a weekly lab programme in which senior students show you how psychological research is done. Second year covers research principles, brain and cognition, and social and applied psychology, and in third year you pick four papers from a wide list that includes cognition and neuropsychology, social, developmental and health psychology, biopsychology, psychology in legal contexts, human factors, and drugs, behaviour and addiction. Quantitative Methods (PSYC 311) is required if you want to go on to postgraduate study. Otago says both its BSc and BA majors meet the requirements for postgraduate study in clinical psychology and professional psychologist pathways.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/psychology",
    degree: "Bachelor of Science (BSc), Psychology major",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Behavioural researcher or data analyst",
      "Human resources or organisational consultant",
      "Health, social services or counselling roles",
      "Legal, safety or forensic policy work",
      "Education or community development",
      "Postgraduate study towards clinical psychology",
    ],
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No previous psychology study is needed; Otago says English, Biology or Statistics at school is helpful but not essential",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Biomedical Sciences (BBiomedSc)",
    slug: "university-of-otago-bachelor-of-biomedical-sciences",
    level: "Bachelor",
    field: "Biomedical Sciences",
    duration: "3 years full-time (360 points) starting in Semester 1, or 3.5 years starting in Semester 2",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$49,350 a year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "This interdisciplinary degree explains how the human body works, how it copes with challenges, and how diseases such as cancer, diabetes, heart disease and infections are diagnosed and treated. You can enter it directly or through Health Sciences First Year: the first year is built around core health science papers in biology, chemistry and physics, five of them shared with HSFY, so students who complete HSFY can move straight into second year without losing time. In second and third year you specialise in a major such as Drugs and Human Health, Functional Human Biology, Infection and Immunity, Molecular Basis of Health and Disease, or Reproduction, Genetics and Development, alongside lab work, data analysis, scientific writing and teamwork. Many graduates continue to honours, master's or PhD study, and the degree is also a route towards professional programmes such as medicine, dentistry or pharmacy.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/biomedical-sciences",
    degree: "Bachelor of Biomedical Sciences (BBiomedSc)",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Medical or biotechnology researcher",
      "Laboratory technician",
      "Regulatory or patent specialist",
      "Science writer or medical communications specialist",
      "Healthcare sales and marketing",
      "Entry to professional programmes such as Medicine or Dentistry",
    ],
    intake:
      "Semester 1 (formal lectures start 1 March 2027) or Semester 2 (starts 12 July 2027, adding half a year to the degree). Apply online through Otago's eVision portal",
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      "No compulsory school subjects, but Chemistry is strongly recommended; students without it can take Introductory Chemistry or CHEM 150 at Summer School first",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Dental Surgery (BDS)",
    slug: "university-of-otago-bachelor-of-dental-surgery",
    level: "Bachelor",
    field: "Dentistry",
    duration: "5 years full-time (606 points), including Health Sciences First Year",
    campus: "Dunedin campus (final-year clinical training in Dunedin or Auckland)",
    tuitionNote: `2027 international tuition: NZ$45,415 for Health Sciences First Year, NZ$114,535 for Year 2 and NZ$120,587 a year for Years 3 to 5. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Otago's Faculty of Dentistry is New Zealand's only dental school, and the BDS is a five-year degree: Health Sciences First Year followed by four years in the Faculty. Three themes run through the programme. Biomedical Sciences lays the foundations in anatomy, physiology and oral biology and later covers pathology, growth and development, medicine, surgery and therapeutics. The Dentist and the Patient builds clinical skills, first in a simulation laboratory and then with real patients, across prosthodontics and cariology, endodontics, periodontics, paediatric dentistry, orthodontics, oral medicine, oral surgery and special needs dentistry. Dental Epidemiology and Public Health covers cultural safety, public health dentistry, communication and ethics. In fifth year the class is split between the Dunedin clinics and Otago's clinical facility in Auckland, with international students allocated to both centres, and top students can complete the degree with honours.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/dentistry",
    degree: "Bachelor of Dental Surgery (BDS)",
    workIntegrated: true,
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "General dental practitioner",
      "Hospital dentist",
      "Defence force dentist",
      "Specialist dentist after postgraduate training",
      "Dental academic or researcher",
    ],
    intake: HSFY_INTAKE,
    applicationDeadline: HSFY_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      HSFY_PATH,
      "Places are limited: subject to University Council confirmation, up to 40 second-year BDS places were expected for international applicants in 2027. HSFY applicants need an average of at least 65% across their best seven papers with no prescribed paper below 60%, and around 350 applicants across all categories are invited to an online interview; academic score is the final deciding factor",
      "Applicants with an overseas qualification or a further degree can apply in the Alternative category, which normally involves a one-year prescribed course of study in the BSc first",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Pharmacy (BPharm)",
    slug: "university-of-otago-bachelor-of-pharmacy",
    level: "Bachelor",
    field: "Pharmacy",
    duration: "4 years full-time (486 points), including Health Sciences First Year",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$45,415 for Health Sciences First Year, NZ$50,825 for Year 2 and NZ$53,505 a year for Years 3 and 4. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Otago has trained pharmacists for longer than any other New Zealand university, and its BPharm is strongly focused on patient care. After Health Sciences First Year, second year starts with an introduction to pharmacy and fundamental pharmaceutical science, followed by integrated, module-based papers that link the science of medicines to conditions across body systems, such as cardiology, respiratory disease and psychiatry. Practical skills are taught in a professional practice laboratory and in Otago's pharmacy clinic, the only university pharmacy clinic in New Zealand, where students help patients with complex medication needs, and clinical placements start in second year. Fourth year combines applied pharmacotherapy, leadership and management, electives and a structured experiential programme alongside practising pharmacists, with an honours pathway that adds a research project. Graduates then complete a paid one-year internship before registering as pharmacists.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/pharmacy",
    degree: "Bachelor of Pharmacy (BPharm)",
    workIntegrated: true,
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Community pharmacist",
      "Hospital pharmacist",
      "General practice (clinic) pharmacist",
      "Medicines regulation or policy adviser",
      "Pharmaceutical industry or research roles",
    ],
    intake: HSFY_INTAKE,
    applicationDeadline: HSFY_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      HSFY_PATH,
      "Competitive entry: subject to University Council confirmation, up to 20 second-year places were expected for international applicants in 2027, and the School of Pharmacy says international HSFY applicants need roughly a B- average to be considered",
      "Direct entry: each year 10 to 15 high-achieving international students with recognised pre-university qualifications (or completing Otago's Foundation Year) are accepted straight into the Pharmacy pathway at HSFY and move on to second year if they pass all HSFY papers",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Physiotherapy (BPhty)",
    slug: "university-of-otago-bachelor-of-physiotherapy",
    level: "Bachelor",
    field: "Physiotherapy",
    duration: "4 years full-time (486 points), including Health Sciences First Year",
    campus: "Dunedin campus (final-year clinical centres in Dunedin, Christchurch or Wellington)",
    tuitionNote: `2027 international tuition: NZ$45,415 for Health Sciences First Year, NZ$50,825 for Year 2 and NZ$53,505 a year for Years 3 and 4. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Otago is home to New Zealand's first School of Physiotherapy. After Health Sciences First Year, second year concentrates on the science a physiotherapist needs, including anatomy, physiology, pharmacology and an introduction to physiotherapy science and clinical practice, and students get out into the community, hospitals and marae early in the programme. Third year adds pathology, management skills and community engagement, with clinical practice as a key part of the year. In fourth year you are based at one of the School's clinical centres in Dunedin, Christchurch or Wellington and spend most of the year on supervised clinical placements around New Zealand, plus a research project. The strongest third-year students are invited into an honours year that opens a path to research, and graduates are eligible to apply for registration as physiotherapists.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/physiotherapy",
    degree: "Bachelor of Physiotherapy (BPhty)",
    workIntegrated: true,
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Hospital physiotherapist",
      "Private practice physiotherapist",
      "Sports physiotherapist",
      "Rehabilitation or aged-care physiotherapist",
      "Occupational health and safety professional",
    ],
    intake: HSFY_INTAKE,
    applicationDeadline: HSFY_DEADLINE,
    admissionRequirements: [
      UG_ENTRANCE,
      HSFY_PATH,
      "Competitive entry: subject to University Council confirmation, up to 10 second-year places were expected for international applicants in 2027. HSFY applicants must pass all HSFY papers with an average of at least 60% in their best seven, and international applicants must meet a minimum standard set each year",
      "Up to 5 outstanding international students who want to study only Physiotherapy can be accepted directly into the programme at Health Sciences First Year, based on their pre-university results",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Bachelor of Laws (LLB)",
    slug: "university-of-otago-bachelor-of-laws",
    level: "Bachelor",
    field: "Law",
    duration: "4 years full-time (534 points)",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$45,675 a year. ${FEE_EXTRAS}. ${UG_SCHOLARSHIPS}`,
    description:
      "Otago's Faculty of Law has taught law for more than 150 years and is ranked in the QS top 200 for Law (2026). In first year you take LAWS 101 The Legal System, with three lectures and a small-group tutorial each week, alongside papers from other subjects. If you are selected for second-year Law, you study four full-year papers (Criminal Law, Contract, Property and Public Law) and nothing else, a demanding year that builds your legal analysis skills. Third and fourth years add Torts, Jurisprudence and Māori Laws and Philosophy, then a wide range of electives at 300 and 400 level so you can specialise, plus practical training in legal research, writing and courtroom advocacy. An honours version adds research, and the LLB can be combined with Arts, Commerce or Science in a double degree. The programme is built around New Zealand law, which matters if you plan to practise elsewhere.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/subjects/law",
    degree: "Bachelor of Laws (LLB)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Lawyer (barrister or solicitor)",
      "In-house legal counsel",
      "Policy adviser in government",
      "Compliance or regulatory specialist",
      "Roles in business, journalism or human rights organisations",
    ],
    intake:
      "Semester 1 only (formal lectures start 1 March 2027). Apply online through Otago's eVision portal",
    applicationDeadline:
      "International applicants outside New Zealand had to apply by 15 November 2026 to start first year in Semester 1, 2027 (10 December 2026 if already in New Zealand). Entry to second-year Law is a separate application, due by 1 October in your first year according to Otago's enrolment deadlines page",
    admissionRequirements: [
      UG_ENTRANCE,
      "Second-year Law is limited entry: you apply for a place during first year, and selection is competitive. Otago does not require particular school subjects, but strong language and analytical skills help",
      UG_ENGLISH,
      UG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business Administration (MBA)",
    slug: "university-of-otago-master-of-business-administration",
    level: "Master",
    field: "Business Administration",
    duration: "15 months full-time on campus (240 points); part-time on campus over 27 months or online over 24 months also available",
    campus: DUNEDIN,
    tuitionNote:
      "2027 international tuition: NZ$76,240 for the whole 240-point programme (Phase 1: 12 papers at NZ$4,765, NZ$57,180; Phase 2: NZ$19,060), including 15% GST. International students on campus must pay the full fee in advance. The annual Student Services Fee and other sundry charges are extra, and Otago notes that international fees have recently risen by about 3–5% a year. The University's coursework master's scholarships exclude the MBA",
    description:
      "Running since 1976, the Otago MBA is taught at a business school that holds EQUIS, AACSB and AMBA accreditation, and the University says it is ranked New Zealand's number one full-time MBA in the QS Global MBA Rankings. Phase 1 is 12 compulsory core papers designed for the programme: Business Law, Markets and Value Creation, Transformational Leadership, Business Economics, People and Culture, Accounting, Investment and Global Financial Markets, Strategic Planning for International Markets, Leading Sustainable Enterprises, Operational Excellence, International Business and Strategy Implementation, with a live case study for on-campus students. In Phase 2 you choose a professional consulting project with a real client, short elective courses taught each January and February, or an exchange with partner schools such as Copenhagen Business School, Rotterdam School of Management, NUS, Yonsei, Duke Fuqua and Ivey. Full-time students also get a mentor programme, personal coaching, workshops and networking events.",
    officialProgramUrl: "https://www.otago.ac.nz/mba",
    degree: "Master of Business Administration (MBA)",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Senior or general manager",
      "Management consultant",
      "Strategy or operations leader",
      "Entrepreneur or business owner",
      "International business manager",
    ],
    intake:
      "On campus: March each year (Phase 1 papers start in early March). Online cohorts start in April and September",
    applicationDeadline:
      "Rolling admissions: applications are assessed as they arrive and each cohort closes once its seats are filled, so Otago advises applying early. The process includes an online application with your CV, an entrance test and a video interview with a case presentation (a GMAT of 550+ can replace the test), then a formal University application through eVision",
    admissionRequirements: [
      "An undergraduate degree (or equivalent, or an acceptable level of management experience)",
      "At least 3 years of professional or management experience",
      "A GMAT score of 550 or higher, or a pass in the Otago MBA Admissions Test",
      "IELTS 6.5 or equivalent if English is not your first language; applicants who fall short may be assessed case by case on their MBA test or interview performance",
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business (MBus) in Business Analytics",
    slug: "university-of-otago-mbus-business-analytics",
    level: "Master",
    field: "Business Analytics",
    duration: MBUS_DURATION,
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$68,145 for the 180-point MBus in Business Analytics (listed in the Otago Business School schedule of 2027 fees). ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "This one-year master's teaches you to turn organisational data into useful insight for accounting, finance, marketing, management, economics or tourism. Everyone takes Business Principles for the 21st Century and Research Skills and Methods, 40 points of 500-level business papers, and a large block of analytics papers chosen from artificial intelligence and machine learning (AIML 401 and 402), information systems, computing, data science, economics and statistics. You then finish through coursework only, an applied project (40 points) or a research dissertation (60 points). Teaching mixes lectures, labs, tutorials and workshops, with hands-on data wrangling and statistical work in R and Python. You do not need a computing degree: students without one must take AIML 401, AIML 402 and INFO 420 as part of the programme.",
    officialProgramUrl: "https://www.otago.ac.nz/apply/postgraduate/business-analytics",
    degree: "Master of Business (MBus), Business Analytics",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data analyst",
      "Business intelligence analyst",
      "Marketing analyst",
      "CRM analyst",
      "Financial analyst",
      "HR analyst",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      MBUS_ENTRY,
      "No computing background is required, but non-computing graduates take AIML 401, AIML 402 and INFO 420 within the degree",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Business (MBus) in Finance",
    slug: "university-of-otago-mbus-finance",
    level: "Master",
    field: "Finance",
    duration: MBUS_DURATION,
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$64,785 for the 180-point MBus in Finance (listed in the Otago Business School schedule of 2027 fees). ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "Run by the Department of Accountancy and Finance, this MBus goes deeper into investment analysis, corporate finance and risk, blending quantitative analysis with strategic judgement. The compulsory core is Business Principles for the 21st Century, Research Skills and Methods, and Advanced Financial Econometrics (ACFI 406), and the rest of the 180 points come from 500-level finance papers such as Advanced Corporate Finance, Mathematical Finance, Behavioural Finance, Climate and Energy Finance and governance in accounting and finance (the papers offered change from year to year). You can complete it by coursework, with an applied project or with a research dissertation. Teaching includes case studies, discussions of current financial issues, the software finance professionals use, and contact with industry.",
    officialProgramUrl: "https://www.otago.ac.nz/apply/postgraduate/finance",
    degree: "Master of Business (MBus), Finance",
    areaOfInterest: "Business, Commerce & Management",
    careerOutcomes: [
      "Financial analyst or adviser",
      "Corporate finance manager",
      "Investment banker",
      "Risk manager",
      "Financial consultant",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      MBUS_ENTRY,
      "For the Finance subject the bachelor's degree must have a sciences or quantitative focus",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science (Coursework) in Computer Science",
    slug: "university-of-otago-msc-coursework-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "12 or 18 months full-time (180 points, or 120 points for BSc(Hons) graduates)",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$74,760 for the 180-point programme, or NZ$49,875 for the 120-point option open to honours graduates. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "A new coursework master's from 2027, taught by Otago's School of Computing, where the researchers who advance the field also teach in small postgraduate classes. Most of the programme is advanced computing papers chosen from computer science and related subjects, with at least 40 points at 500 level; options in the schedule include advanced computer networks, advanced cryptography and security, advanced operating systems and machine learning topics. To broaden your professional skills you also take two papers from a pool shared across the Sciences, covering advanced project management, solving wicked problems, global indigenous worldviews, and resources, design and sustainability. Students can use the Human Computer Interaction Lab for virtual and augmented reality, GPU machines in the Trimble Technology Lab, the Datum Lab and the University's high-performance computing resources.",
    officialProgramUrl:
      "https://www.otago.ac.nz/study/qualifications/master-of-science-coursework?subject=641835",
    degree: "Master of Science (Coursework) – MSc(Coursework), Computer Science",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Software engineer",
      "Machine learning or AI engineer",
      "Security specialist",
      "Technical lead",
      "Technology consultant",
    ],
    intake: PG_INTAKE,
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A bachelor's degree with an average of at least B in the relevant 300-level papers, a Postgraduate Certificate or Diploma in Science, or other qualifications or experience accepted by the Pro-Vice-Chancellor (Sciences)",
      "The shorter 120-point option requires a BSc with Honours with at least a B average",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Science (Applied) in Data Science",
    slug: "university-of-otago-msc-applied-data-science",
    level: "Master",
    field: "Data Science",
    duration: "12 to 18 months full-time (180 points)",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$73,100 for the 180-point MSc(Applied) in Data Science. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "The Master of Science (Applied) replaces Otago's former Master of Applied Science from 2027. The Data Science subject is taught jointly by the School of Computing and the Department of Mathematics and Statistics and combines advanced study in machine learning, large-scale data management and high-performance computing with applied work. The programme is 180 points of 400-level and higher papers, including at least 40 points from the Sciences' 500-level applied papers (SCNC 501, 503, 597 or 598) or other approved 500-level papers, and you also examine the ethics of AI and data use and Māori and Indigenous data sovereignty in Aotearoa New Zealand. Advanced papers shared with master's students across the Sciences give practice in interdisciplinary teamwork on real-world problems.",
    officialProgramUrl:
      "https://www.otago.ac.nz/study/qualifications/master-of-science-applied?subject=642196",
    degree: "Master of Science (Applied) – MSc(Applied), Data Science",
    areaOfInterest: "Data & Computer Science",
    careerOutcomes: [
      "Data scientist or analyst",
      "Machine learning engineer",
      "Data engineer",
      "Research analyst",
      "Policy or strategy analyst",
    ],
    intake: PG_INTAKE,
    applicationDeadline:
      "Otago lists 10 December as the due date for first enrolment in the MSc(Applied) (late applications are considered), but international applicants outside New Zealand had to apply by 15 November 2026 for Semester 1, 2027 under the University's international application rules; the international deadline for Semester 2, 2027 is 30 April 2027",
    admissionRequirements: [
      "A bachelor's degree with an average of at least B in the relevant 300-level papers, or other qualifications or experience accepted by the Pro-Vice-Chancellor (Sciences)",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Health (MPH)",
    slug: "university-of-otago-master-of-public-health",
    level: "Master",
    field: "Public Health",
    duration: "2 years full-time (240 points); 1 year for holders of Otago's Postgraduate Diploma in Public Health",
    campus: "Dunedin, Christchurch or Wellington (Department of Public Health)",
    tuitionNote: `2027 international tuition: NZ$55,125 a year. ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "Otago's MPH starts with 120 points of coursework that includes four compulsory papers – Principles of Epidemiology, Foundations of Hauora Māori, Society, Health and Health Promotion, and Public Policy and Health Systems – plus a research methods paper suited to your planned research and further public health electives. You then complete either more papers with a 60-point dissertation or a 120-point research thesis, on a public health topic approved by the department. Students need at least a B average and a B+ in an approved research methods paper to move into the research part; anyone who stops earlier can have their papers credited to a postgraduate certificate or diploma in public health. The Department of Public Health supports postgraduate students in Dunedin, Christchurch and Wellington.",
    officialProgramUrl: "https://www.otago.ac.nz/courses/qualifications/master-of-public-health",
    degree: "Master of Public Health (MPH)",
    areaOfInterest: "Health & Life Sciences",
    careerOutcomes: [
      "Epidemiologist or health data analyst",
      "Health promotion adviser",
      "Health policy analyst",
      "Public health researcher",
      "Programme manager in health organisations",
    ],
    intake:
      "Semester 1 (starts 1 March 2027) or Semester 2 (starts 12 July 2027). Otago's fee schedule also lists an 'anytime' start for the MPH. Apply online through Otago's eVision portal",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A bachelor's degree, or a professional qualification equal to a bachelor's degree that took at least three years of full-time study, awarded with an average grade of at least B; or Otago's Postgraduate Diploma in Public Health with a B average and at least B+ in an approved research methods paper; or other qualifications and experience accepted by the Course Director",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Peace and Conflict Studies (MPCS)",
    slug: "university-of-otago-master-of-peace-and-conflict-studies",
    level: "Master",
    field: "Peace and Conflict Studies",
    duration: "1 year full-time (180 points), or part-time over a longer period",
    campus: DUNEDIN,
    tuitionNote: `2027 international tuition: NZ$56,700 for the 180-point programme (Otago notes that the workload is higher than a standard full-time year if completed in the minimum time). ${FEE_EXTRAS}. ${PG_SCHOLARSHIPS}`,
    description:
      "Taught at Te Ao o Rongomaraeroa, the National Centre for Peace and Conflict Studies, the MPCS is an interdisciplinary master's that analyses where violent conflict within and between societies comes from and how peace can be built. You complete two compulsory core papers in peace and conflict studies, one or two electives from the Centre or from approved papers in other departments, and either a 60-point research dissertation or a practicum placement with a report. The programme covers peace and conflict studies, development and peacebuilding, and aims to prepare graduates for careers in the public, private and non-government sectors. The Centre also offers a research-only Master of Arts in Peace and Conflict Studies for students who want to write a thesis.",
    officialProgramUrl: "https://www.otago.ac.nz/ncpacs/study/masters",
    degree: "Master of Peace and Conflict Studies (MPCS)",
    areaOfInterest: "Social Sciences",
    careerOutcomes: [
      "Peacebuilding or humanitarian programme officer",
      "Policy adviser",
      "Development or NGO professional",
      "Conflict resolution and mediation roles",
      "Researcher",
    ],
    intake:
      "Semester 1 (February; lectures start 1 March 2027) or Semester 2 (July; starts 12 July 2027). Apply online through Otago's eVision portal",
    applicationDeadline: PG_DEADLINE,
    admissionRequirements: [
      "A degree with at least a B average (or equivalent) over the final year; relevant practical experience may be considered if you fall short, and alternative qualifications or experience can be approved by the Pro-Vice-Chancellor (Humanities)",
      PG_ENGLISH,
      PG_WORK_RIGHTS,
    ],
  },
];
