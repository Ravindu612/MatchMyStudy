import type { Program } from "@/data/programs";

// Macquarie University undergraduate courses for international students, North Ryde campus (Macquarie Park, Sydney).
// Sources (checked October 15, 2026): Macquarie course pages on mq.edu.au/study/find-a-course viewed as an international
// student for 2027 entry (course codes, CRICOS and UAC codes, international selection rank, duration, credit points,
// 2027 estimated annual international fee and fee per credit point, start dates and application closing dates,
// assumed knowledge, recommended studies, majors and professional recognition), Macquarie's English language
// requirements page for international applicants (scores from 1 March 2026), its academic entry requirements page for
// international students, and its international applications page (how to apply, UAC rules).
// Fees are 2027 estimated annual amounts in Australian dollars for a standard full-time load; selection ranks are
// minimums and do not guarantee an offer.

const FEE_EXTRAS =
  "Macquarie charges tuition per credit point, so the actual cost depends on the units you take and any credit for prior learning. Fees are reviewed every year and you pay the rate that applies in each year you study. The Student Services and Amenities Fee (SSAF), Overseas Student Health Cover (required for the student visa), textbooks and living costs are extra. Domestic students are offered Commonwealth Supported Places (CSP) and should check Macquarie's CSP fee page.";

const APPLY_INTRO =
  "International applicants apply directly to Macquarie through its Online Application Manager or through an authorised Macquarie representative (in some cases applications are only accepted through an agent), with certified copies of their passport, academic transcripts and English results. Applicants currently completing an Australian Year 12 qualification (in or outside Australia), the IB Diploma in Australia or NCEA Level 3 must apply through UAC instead.";

const APPLY_S1_S2 = `${APPLY_INTRO} Closing dates on the course page for 2027 (North Ryde): 8 February 2027 for Session 1 (starts 22 February 2027) and 12 July 2027 for Session 2 (starts 26 July 2027). Closing dates can vary by country, so Macquarie advises checking with your local representative and applying early to leave time for the student visa.`;

const APPLY_S1_ONLY = `${APPLY_INTRO} This course starts in Session 1 only. Closing date on the course page for 2027 (North Ryde): 8 February 2027 for Session 1, which starts 22 February 2027. Closing dates can vary by country, so Macquarie advises checking with your local representative and applying early to leave time for the student visa.`;

const ACADEMIC_BASE =
  "Academic: a recognised senior secondary qualification (such as the NSW HSC or an equivalent Australian or overseas high school qualification), a recognised university foundation program, a recognised diploma, advanced diploma or associate degree, or at least one year of a recognised bachelor's degree. Macquarie recognises qualifications from more than 70 countries, and applicants who don't qualify for direct entry may get a packaged offer with a Macquarie University College foundation or diploma pathway";

const rank = (score: string) =>
  `International selection rank for 2027 entry: ${score}. This is the minimum academic requirement on the Australian ATAR scale; overseas results are converted with the international qualification converter on the course page, and meeting the rank does not guarantee a place`;

const ENGLISH_COMPETENT =
  "English language (Macquarie's Competent standard for most undergraduate courses, scores from 1 March 2026): IELTS Academic 6.5 overall with at least 6.0 in reading, writing, listening and speaking; TOEFL iBT 86 (reading 18, writing 20, listening 17, speaking 20), or 4.5 overall with 4 in each skill on the new 1-6 scale; PTE Academic 60 (reading 51, writing 55, listening 50, speaking 54); Cambridge C1 Advanced or C2 Proficiency 180 with 169 in each skill; LanguageCert Academic 67 (reading 60, writing 64, listening 57, speaking 70); Duolingo English Test 125 (reading 110, writing 120, listening 110, speaking 110); OET is also accepted. Results must be less than two years old when the course starts. Applicants below the requirement may receive a packaged offer that includes an English program at Macquarie";

const ENGLISH_PROFICIENT =
  "English language (higher standard for this course, scores from 1 March 2026): IELTS Academic 7.0 overall with at least 6.5 in reading, writing, listening and speaking; TOEFL iBT 95 (reading 22, writing 23, listening 20, speaking 23), or 5 overall with 4.5 in each skill on the new 1-6 scale; PTE Academic 68 (reading 56, writing 64, listening 55, speaking 66); Cambridge C1 Advanced or C2 Proficiency 185 with 176 in each skill; LanguageCert Academic 73 (reading 65, writing 71, listening 62, speaking 76); Duolingo English Test 135 (reading 120, writing 135, listening 120, speaking 120); OET is also accepted. Results must be less than two years old when the course starts";


export const macquarieUniversityPrograms: Program[] = [
  {
    name: "Information Technology",
    slug: "macquarie-information-technology",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Information Technology",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$48,900 a year for a standard full-time load (A$611.25 per credit point), or roughly A$146,700 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Information Technology starts with a base in programming, data, networking and cyber security, then lets students go deeper through a major in artificial intelligence, cyber security, data science, game design and development, information systems and business analysis, software technology, or web and mobile app development. The degree was co-designed with industry, includes an industry-based project on a real IT problem, and uses the campus's Cyber Security Hub and 14-lab computing precinct. Graduates work as software or full-stack developers, data analysts and scientists, business systems analysts, IT consultants and IT project managers.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-information-technology",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Information Technology (Macquarie course C000105, CRICOS 047327M)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300540.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("75"),
      "Assumed knowledge: none. Recommended studies: HSC Mathematics Extension 1 or Extension 2, plus HSC Information Processes and Technology and/or Software Design and Development, or equivalent",
      ENGLISH_COMPETENT,
      "Professional recognition: the degree and its majors are professionally accredited by the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Cyber Security",
    slug: "macquarie-cyber-security",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Cybersecurity",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$48,900 a year for a standard full-time load (A$611.25 per credit point), or roughly A$146,700 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Cyber Security at Macquarie trains students to prevent, detect and respond to cybercrime, combining technical security skills with units on policy, crime prevention, ethics and governance. It was co-designed with organisations such as Amazon, EY, CSIRO's Data61, DSTG, IBM, Microsoft and SAS, and students learn in the university's Cyber Security Hub, where academia, industry and government work together. Industry projects for real clients are built in. Graduates move into roles such as cybersecurity analyst, consultant or architect, digital forensics analyst, ethical hacker, cyber risk strategist and security operations centre manager.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-cyber-security",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Cyber Security (Macquarie course C000102, CRICOS 099143M)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300568.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("75"),
      "Assumed knowledge: none. Recommended studies: HSC Mathematics Extension 1 or Extension 2, plus Information Processes and Technology and/or Software Design and Development, or equivalent",
      ENGLISH_COMPETENT,
      "Professional recognition: professionally accredited by the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Engineering (Honours)",
    slug: "macquarie-engineering",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time (320 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$49,200 a year for a standard full-time load (A$615 per credit point), or roughly A$196,800 for the 320-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's four-year Bachelor of Engineering (Honours) is a hands-on, project-based degree with a specialisation in civil, electrical and electronic, mechanical, mechatronic or software engineering, or a flexible first year for students who want to choose later. Teaching takes place in a new engineering building with renewable-energy, satellite, geotechnical, drone, robotics, rapid prototyping and VR facilities, and the course stresses sustainability and ethical design. Internships are available with companies such as Cochlear, Dell, Microsoft and Hyundai in the Macquarie Park innovation district. Graduates become civil, electrical, mechanical, mechatronic or software engineers, consultants and design engineers.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-engineering-honours",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Engineering (Honours) with a specialisation (Macquarie course C000133, CRICOS 087876F)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC codes: 300585 (Civil), 300587 (Electrical and Electronic), 300582 (Mechanical), 300583 (Mechatronic), 300586 (Software), 300588 (Flexible First Year).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("80"),
      "Assumed knowledge: HSC Mathematics Advanced (Band 4) or equivalent; students without it are advised to take a mathematics bridging course. Recommended studies: HSC Mathematics Extension 1 or Extension 2 plus HSC Physics, and HSC Software Design and Development, or equivalent",
      ENGLISH_COMPETENT,
      "Professional recognition: the Civil, Electrical and Electronic, Mechanical, Mechatronic and Software Engineering specialisations were previously fully accredited by Engineers Australia (Software Engineering also by the Australian Computer Society). Macquarie says it will notify both bodies of changes to the course and seek accreditation for the amended course, so check the current status before applying",
    ],
  },

  {
    name: "Commerce",
    slug: "macquarie-commerce",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Business, Commerce & Management",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$49,200 a year for a standard full-time load (A$615 per credit point), or roughly A$147,600 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Commerce is built around data-driven decision-making, with ten majors to choose from: accounting and auditing, business analytics, business information systems, cyber security management, economics, finance, human resource management, international business, marketing, and marketing insights and analytics. Students can switch majors or take a double major, and an embedded employability unit covers CVs, LinkedIn, personal branding and interviews. Industry projects, guest speakers and a cross-faculty capstone with a sustainability focus round out the degree. Graduates work as accountants, auditors, business and data analysts, consultants, economists, HR professionals and investment managers.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-commerce",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Commerce (Macquarie course C000130, CRICOS 048246D)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300221.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("80"),
      "Assumed knowledge: HSC Mathematics Advanced or equivalent for the business analytics, economics and finance majors; HSC Mathematics Standard 2 or equivalent for the other majors. Without it, students are advised to take a mathematics or quantitative methods elective in first year. Recommended: HSC Mathematics Advanced for accounting and business information systems, and Mathematics Extension 1 for finance",
      ENGLISH_COMPETENT,
      "Professional recognition: Macquarie Business School is AACSB-accredited; the Human Resource Management major is accredited by the Australian HR Institute (AHRI), and the Marketing and Marketing Insights and Analytics majors by the Australian Marketing Institute (AMI)",
    ],
  },

  {
    name: "Business",
    slug: "macquarie-business",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$49,200 a year for a standard full-time load (A$615 per credit point), or roughly A$147,600 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Business at Macquarie focuses on leadership, management and entrepreneurship, with majors in AI in business and innovation, business administration, human resource management, international business, management and leadership, marketing, and strategy, innovation and entrepreneurship. An integrated employability program runs from the first year, and students can take industry internships or work with start-ups in the on-campus incubator. Sustainability is covered in a dedicated second-year unit and a third-year capstone project, and international partners offer cultural and leadership experiences. Graduates go into business development, marketing, HR, operations, consulting or their own ventures.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-business",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Business (Macquarie course C000389, CRICOS 111851M)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300205.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("75"),
      "Assumed knowledge: HSC Mathematics Standard 2 or equivalent; without it, students are advised to take a quantitative methods elective in first year. Recommended studies: none",
      ENGLISH_COMPETENT,
      "Professional recognition: Macquarie Business School is AACSB-accredited; the Human Resource Management major is accredited by the Australian HR Institute (AHRI) and the Marketing major by the Australian Marketing Institute (AMI)",
    ],
  },

  {
    name: "Professional Accounting",
    slug: "macquarie-professional-accounting",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Accounting",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$49,200 a year for a standard full-time load (A$615 per credit point), or roughly A$147,600 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Professional Accounting was designed with input from about 150 Sydney CFOs and balances data analysis and practical business skills with training in industry-standard software. Macquarie says it is the only undergraduate accounting degree offering forensic accounting and blockchain units, and it is accredited by CA ANZ, CPA Australia, the IPA and ACCA, which helps graduates move quickly into professional exams. Students can complete projects with the Big Four and take cadetships, internships or paid roles at Big Four and mid-tier firms. Graduates become accountants, auditors, forensic accountants, tax specialists and finance managers.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-professional-accounting",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Professional Accounting (Macquarie course C000014, CRICOS 099149E)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300223.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("80"),
      "Assumed knowledge: HSC Mathematics Standard 2 or equivalent; without it, students are advised to take a mathematics or quantitative methods elective in first year. Recommended studies: HSC Mathematics Advanced or equivalent",
      ENGLISH_COMPETENT,
      "Professional recognition: accredited by Chartered Accountants Australia and New Zealand (CA ANZ), CPA Australia, the Institute of Public Accountants (IPA) and the Association of Chartered Certified Accountants (ACCA); Macquarie Business School is AACSB-accredited",
    ],
  },

  {
    name: "Actuarial Studies",
    slug: "macquarie-actuarial-studies",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Actuarial Science",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$49,200 a year for a standard full-time load (A$615 per credit point), or roughly A$147,600 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie describes its Bachelor of Actuarial Studies as the world's first accredited actuarial degree, and the university is recognised as a Centre of Actuarial Excellence by the Society of Actuaries. Students apply mathematics, statistics and financial analysis to risk, insurance, superannuation and investment problems, taught by actuarial fellows and industry practitioners. Strong ties with employers such as the Big Four, Taylor Fry and Quantium bring internships and placements. With good results, graduates can gain exemptions from Actuaries Institute exams, and they work as actuaries, risk and insurance analysts, fund managers and underwriters.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-actuarial-studies",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Actuarial Studies (Macquarie course C000117, CRICOS 067838M)",
    intake: "February (Session 1) only",
    applicationDeadline: `${APPLY_S1_ONLY} UAC code: 300239.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("95"),
      "Assumed knowledge: HSC Mathematics Extension 1 or equivalent (for IB applicants, Mathematics HL). Recommended studies: HSC Mathematics Extension 2 (Band E4) or equivalent (for IB, a 6 or 7 in Further Mathematics HL or Mathematics: Analysis and Approaches HL)",
      ENGLISH_COMPETENT,
      "Professional recognition: recognised by the Actuaries Institute. With sufficient results in the relevant units, students may be exempt from Foundation Program subjects CM1, CM2, CS1, CS2, CB1 and CB2 and Actuary Program subjects ACC and DSP; Macquarie Business School is AACSB-accredited",
    ],
  },

  {
    name: "Applied Finance",
    slug: "macquarie-applied-finance",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Finance",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$49,200 a year for a standard full-time load (A$615 per credit point), or roughly A$147,600 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Applied Finance is a practical, finance-only degree covering financial markets, investment banking, corporate finance, superannuation, trading and fintech. Macquarie says it is the only standalone degree of its kind in Sydney. Students work in the Finance Decision Lab with industry databases such as FactSet and S&P Capital IQ, and complete simulations, work-integrated learning and an industry-informed capstone. The degree is a CFA Institute University Affiliation Program partner, so its curriculum is aligned with the CFA Program. Graduates work as financial analysts, market analysts, stockbrokers, management consultants and policy analysts.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-applied-finance",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Applied Finance (Macquarie course C000017, CRICOS 027342M)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300202.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("85"),
      "Assumed knowledge: HSC Mathematics Advanced or equivalent; without it, students are advised to take a mathematics or quantitative methods elective in first year. Recommended studies: none",
      ENGLISH_COMPETENT,
      "Professional recognition: a partner program of the CFA Institute's University Affiliation Program; Macquarie Business School is AACSB-accredited",
    ],
  },

  {
    name: "Economics",
    slug: "macquarie-economics",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Economics",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$48,800 a year for a standard full-time load (A$610 per credit point), or roughly A$146,400 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Economics teaches students to analyse how limited resources are allocated, building problem-solving and data analysis skills through work-integrated learning from the first year. Internships are possible at organisations such as Snowy Hydro, the Reserve Bank of Australia and the e61 Institute, and staff include academics with RBA and IMF experience. The Vernon L Smith experimental economics lab lets students design experiments and replicate market behaviour. Many students pair economics with actuarial studies, applied finance, business analytics, commerce or law, and graduates work as economists, policy analysts, consultants, financial analysts and risk analysts.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-economics",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Economics (Macquarie course C000119, CRICOS 001362K)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300215.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("80"),
      "Assumed knowledge: HSC Mathematics Advanced or equivalent; without it, Macquarie strongly recommends a quantitative methods elective (such as ECON1031) in first year. Recommended studies: none",
      ENGLISH_COMPETENT,
      "Professional recognition: Macquarie Business School is accredited by AACSB",
    ],
  },

  {
    name: "Psychology",
    slug: "macquarie-psychology",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$46,100 a year for a standard full-time load (A$576.25 per credit point), or roughly A$138,300 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Psychology starts with core units on the mind and behaviour, then adds one of three interdisciplinary majors: applied psychological science, cognitive and brain sciences, or mental health and counselling. Many teachers are practising or consulting psychologists, and students use tools such as VR, motion tracking, EEG and MRI on a campus with health research centres, clinics and a hospital. Industry projects have involved groups such as Sydney FC, Google and the Australian Defence Force. The degree is APAC-accredited; becoming a registered psychologist needs an honours year and postgraduate study, while graduates can also work in HR, research, mental health support and consumer insights.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-psychology",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Psychology (Macquarie course C000009, CRICOS 099150A)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300416.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("80"),
      "Assumed knowledge: none. Recommended studies: HSC Mathematics Advanced or equivalent",
      ENGLISH_COMPETENT,
      "Professional recognition: accredited by the Australian Psychology Accreditation Council (APAC). Followed by an honours year, it leads to the postgraduate study needed to become a psychologist",
    ],
  },

  {
    name: "Medical Sciences",
    slug: "macquarie-medical-sciences",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Biomedical Sciences",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$47,900 a year for a standard full-time load (A$598.75 per credit point), or roughly A$143,700 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "The Bachelor of Medical Sciences at Macquarie covers human health and disease from the molecular level up, with majors in anatomy and physiology, genomics and precision medicine, infectious disease and diagnostics, medicinal chemistry, and neuroscience. Teaching is in small groups and draws on research in genomics, modern therapeutics, proteomics and glycomics, using facilities such as Australia's first genome foundry, an RNA manufacturing facility and an NMR facility. Placements are possible with partners such as Lifeblood, Cochlear, Merck and the Woolcock Institute. Graduates work as biomedical scientists, clinical trial coordinators, biotechnologists and genomic data analysts, or go on to further study.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-medical-sciences",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Medical Sciences (Macquarie course C000131, CRICOS 020161F)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300560.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("85"),
      "Assumed knowledge: none. Recommended studies: HSC Mathematics Advanced and HSC Chemistry, or equivalent",
      ENGLISH_COMPETENT,
      "Professional recognition: the Medicinal Chemistry major is accredited by the Royal Australian Chemical Institute (RACI)",
    ],
  },

  {
    name: "Clinical Science",
    slug: "macquarie-clinical-science",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Health Sciences",
    duration: "2 years full-time, accelerated with an intensive summer session (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$78,600 a year for the accelerated full-time load (A$655 per credit point), or roughly A$157,200 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Clinical Science is an accelerated two-year degree, completed using an intensive summer session, aimed at students heading for graduate-entry medicine, physiotherapy, audiology, speech and language pathology or public health. Anatomy and physiology are taught together in an integrated way, alongside units in ethics, health disparities, Indigenous health and professionalism, with a local, regional, rural or international placement. Classes are small and taught by clinicians and researchers on a campus with its own hospital. Students ranked in the top 30 by GEMSAS admissions who meet the Doctor of Medicine minimums are guaranteed an MD interview.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-clinical-science",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Clinical Science (Macquarie course C000020, CRICOS 087679M)",
    intake: "February (Session 1) only",
    applicationDeadline: `${APPLY_S1_ONLY} UAC codes: 300676 (Bachelor of Clinical Science), 300671 (leading to the Doctor of Physiotherapy), 300672 (leading to the Master of Clinical Audiology), 300673 (leading to the Master of Speech and Language Pathology), 300674 (leading to the Master of Public Health).`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("90"),
      "Assumed knowledge: none. Recommended studies: HSC Chemistry and HSC Mathematics Advanced, or equivalent; students without them are advised to take bridging courses before starting",
      ENGLISH_PROFICIENT,
      "Pathway note: top-30 GEMSAS-ranked clinical science students who meet the minimum Doctor of Medicine entry requirements are guaranteed an interview for Macquarie's MD; entry to the postgraduate health degrees is a separate application",
    ],
  },

  {
    name: "Laws",
    slug: "macquarie-laws",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Law",
    duration: "4 years full-time (320 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$50,800 a year for a standard full-time load (A$635 per credit point), or roughly A$203,200 for the 320-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's four-year Bachelor of Laws is built around practical experience and industry links, informed by a board of top-tier firms and legal innovators. Students can complete a for-credit internship at firms such as Allens, Ashurst, Clayton Utz or MinterEllison, gain client experience at Wallumatta Legal, the university's not-for-profit family law practice, and work in its Social Justice and Strategic Litigation Clinics. A Clerkship Buddy Program connects students with law clerks and recruiting firms. The LLB qualifies graduates for admission as lawyers across Australia after Practical Legal Training, and also leads to roles in policy, compliance and in-house counsel.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-laws",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Laws (LLB) (Macquarie course C000132, CRICOS 080288E)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300160.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("90"),
      "Assumed knowledge: none. Recommended studies: none",
      ENGLISH_PROFICIENT,
      "Professional recognition: accredited with the professional bodies that regulate admission to legal practice, so the LLB qualifies graduates for admission as a lawyer throughout Australia; all law graduates must also complete Practical Legal Training (further study plus supervised legal practice)",
    ],
  },

  {
    name: "Media and Communications",
    slug: "macquarie-media-and-communications",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Media Studies",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$44,100 a year for a standard full-time load (A$551.25 per credit point), or roughly A$132,300 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Media and Communications prepares students to create content for a fast-changing media landscape, from film and music videos to journalism, interactive websites, podcasts, live streaming and public relations campaigns. Students choose a major in interactive design, journalism, public relations and social media, or screen practice and production. They work in a media hub with professional production studios, industry-standard digital workstations and a theatre, and learn from published academics and award-winning producers. A media internship matched to career interests is part of the degree, and graduates work as journalists, producers, PR managers and communications specialists.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-media-and-communications",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Media and Communications (Macquarie course C000030, CRICOS 099147G)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300154.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("75"),
      "Assumed knowledge: none. Recommended studies: none",
      ENGLISH_COMPETENT,
    ],
  },

  {
    name: "Science",
    slug: "macquarie-science",
    level: "Bachelor",
    universitySlug: "macquarie-university",
    universityName: "Macquarie University",
    country: "Australia",
    field: "Natural Sciences",
    duration: "3 years full-time (240 credit points)",
    language: "English",
    tuitionNote: `2027 estimated international fee (Macquarie course page): A$47,900 a year for a standard full-time load (A$598.75 per credit point), or roughly A$143,700 for the 240-credit-point degree at 2027 rates before yearly increases. ${FEE_EXTRAS}`,
    description:
      "Macquarie's Bachelor of Science was co-designed with CSIRO, J&J and ResMed and mixes apprenticeship-style practical learning with industry placements and research projects. Students choose from ten majors: applied physics, astronomy and astrophysics, biology, biotechnology, chemistry, earth and environmental sciences, human biology, marine science, mathematics, and statistical data science. Facilities include Australia's first genome foundry, quantum physics labs, seawater and plant-growth facilities, an NMR facility and an 11-hectare fauna park, and built-in employability units develop career skills. Graduates work as data analysts, biotechnologists, chemical analysts, geologists, marine and environmental scientists and physicists.",
    officialProgramUrl:
      "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-science",
    campus: "North Ryde campus, Sydney",
    programType: "Full-time, in person on campus",
    degree: "Bachelor of Science (Macquarie course C000352, CRICOS 001365G)",
    intake: "February (Session 1), July (Session 2)",
    applicationDeadline: `${APPLY_S1_S2} UAC code: 300555.`,
    admissionRequirements: [
      ACADEMIC_BASE,
      rank("75"),
      "Assumed knowledge: HSC Mathematics Advanced (Band 4) or equivalent for the astronomy and astrophysics, mathematics, statistical data science and applied physics majors; students below that level can take an introductory unit instead. Recommended studies: HSC Mathematics Advanced and at least two units of science; HSC Physics for astronomy and applied physics; HSC Mathematics Extension 1 (Band E2) or Extension 2 for the mathematics major",
      ENGLISH_COMPETENT,
      "Professional recognition: some majors are independently accredited, including Astronomy and Astrophysics by the Australian Institute of Physics (AIP) and Chemistry by the Royal Australian Chemical Institute (RACI)",
    ],
  },
];
