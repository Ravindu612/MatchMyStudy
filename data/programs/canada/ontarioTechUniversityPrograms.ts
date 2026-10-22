import type { Program } from "@/data/programs";

// Ontario Tech University (University of Ontario Institute of Technology, Oshawa, Ontario) programs for
// international students. Undergraduate entries are for Fall 2027 entry; graduate entries list the
// January, May and September 2027 intakes. Sources (viewed October 21, 2026):
// - Program pages at ontariotechu.ca/programs/undergraduate/... and ontariotechu.ca/programs/graduate/...
//   (degree, faculty, campus, start dates, length, OUAC codes, Ontario prerequisites, last year's and expected
//   cut-offs, graduate admission rules and program structure).
// - Registrar: "Undergraduate international tuition 2026-2027" and "Graduate international tuition 2026-2027"
//   (registrar.ontariotechu.ca/fees-and-payment/international-student-tuition/...), the 2026-2027 undergraduate
//   and graduate ancillary fee breakdowns, and "Miscellaneous and administrative fees 2026-2027" (co-op and
//   internship fees, tuition deposit).
// - Admissions: International applicants page (Fall 2027 important dates, OUAC or internal application,
//   PGWP note), International admission requirements by country and curriculum, the 2027-2028 international
//   admissions chart (subject prerequisites by curriculum), English language proficiency requirements and the
//   Winter applicants page (admissions.ontariotechu.ca).
// - Student Awards and Financial Aid: Scholarships for international students (safa.ontariotechu.ca).
// - School of Graduate and Postdoctoral Studies: Step 2 application deadlines (2027 intakes) and Step 3
//   English language proficiency (gradstudies.ontariotechu.ca).
// Fees are Ontario Tech's 2026-2027 international rates in Canadian dollars. Rates for 2027-2028 had not been
// published when these pages were checked; Ontario Tech says fees are subject to change without notice.

const UG_FEE_EXTRAS =
  "Rates for students entering in Fall 2027 had not been published yet, and Ontario Tech says fees can change without notice. On top of tuition, every student pays ancillary fees (health and dental plan, U-Pass transit pass, sports and recreation, career services and others); Ontario Tech estimates these at about CAD 2,500-3,500 a year, depending on program and status. To accept an offer you pay a non-refundable tuition deposit (amount shown in the offer letter), which international students must pay before asking for a Provincial Attestation Letter (PAL); it may be refunded only if the study permit is refused. International entrants with an admission average of 80% or higher can receive an International Merit Award of CAD 20,000 over four years (CAD 5,000 a year, renewable with a 3.30 GPA), and international secondary school students studying outside Canada can apply for the Global Leadership Award, worth CAD 120,000 over four years";

const ugFee = (amount: string, category: string, extra = "") =>
  `International: ${amount} a year in tuition (Ontario Tech's 2026-2027 international rate for ${category}, based on 10 courses or 30 credit hours a year; the same rate is listed for each year of study). ${extra}${UG_FEE_EXTRAS}`;

const UG_COOP_FEES =
  "Co-op students also pay a one-time CAD 754.23 co-op entrance fee, a one-time CAD 754.23 fee for the mandatory co-op and career readiness workshop series, and CAD 754.23 for each co-op work-term semester (2026-2027 rates). ";

const SCIENCE_COOP_FEES =
  "Co-op students also pay a one-time CAD 754.23 co-op entrance fee and a one-time CAD 754.23 fee for the mandatory co-op and career readiness workshop series (2026-2027 rates). ";

const BIT_INTERNSHIP_FEE =
  "Business and Information Technology students pay an internship fee of CAD 942.79 for each internship semester (2026-2027 rate). ";

const UG_APPLY =
  "Fall 2027 (September): international applicants should send a complete application by Wednesday, 31 March 2027 for equal consideration. Apply either through the OUAC Undergraduate Application (up to three programs, and other Ontario universities) or, if you are applying only to Ontario Tech, through its International Application (CAD 100 for up to three programs). Applications that arrive later are still processed, but program-specific deadlines then apply. Admission decisions for Fall 2027 are released from January 2027. The common deadline to accept an offer is 3 May 2027, residence applications are guaranteed if received by 1 June 2027, the tuition deposit is due by 4 June 2027, and any outstanding documents or offer conditions must be met by 13 August 2027. The Global Leadership Award has its own application deadline of 11 February 2027. Ontario Tech can change these dates without notice";

const UG_APPLY_WINTER =
  `${UG_APPLY}. This program also lists a January start: Winter applications open in September and close at the end of October, and Ontario Tech warns that a January start usually puts you off the standard program map and can add a semester or more`;

const INTL_ACADEMIC =
  "Students from outside Canada need the secondary credential that gives university entry in their own system, with the program's subject prerequisites at the senior level. Examples from Ontario Tech's country list: the British-patterned GCE with at least five IGCSE/GCSE/O-level academic subjects (including English) and at least two A-levels, all at grade C or higher; the full IB Diploma with six subjects (three at Higher Level), at least 24 points and no score below 4; U.S. high school graduation from an accredited school with competitive Grade 12 prerequisite marks (send SAT or ACT scores if you have them); or India's CBSE, CISCE or a State Board Grade XII certificate (current Grade XII students send final Grade XI marks and Grade XII midterm marks). Post-secondary credentials from outside Canada may need a WES evaluation. Meeting the minimum does not guarantee admission";

const UG_ENGLISH =
  "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 overall with no section below 4.0; Duolingo English Test 120; CAEL 70 with no sub-score below 60; PTE Academic 58; Cambridge English Advanced 180 with no band below 170; Oxford ELLT 7; or IB English A at grade 4 or higher. The test must be taken within two years of the start date. Three years of full-time study (at least three academic courses a term) at a secondary or post-secondary school that teaches and examines in English also meets the requirement (ESL time does not count). Applicants who meet every requirement except English can take the online English for Academic Purposes program of Ontario Tech's partner, Oxford International Digital Institute";

const UG_PGWP =
  "Ontario Tech says all of its in-person bachelor's degree programs are eligible for the post-graduation work permit (PGWP), with no CIP code requirement";

const GRAD_APPLY_NOTE =
  "Ontario Tech gives priority to applications completed (with every supporting document, including reference letters) by the deadline; later applications are considered case by case if seats remain. International applicants who need a study permit are advised to apply at least six months before the start date. Graduate applications are submitted online through the OUAC graduate application, and Ontario Tech may change or close deadlines without notice";

const GRAD_ENGLISH_STD =
  "English proficiency: a test is not needed if you studied full-time for at least three years in a university degree program taught and examined in English, or completed such a degree (ESL study does not count). Otherwise: IELTS Academic 6.5 overall; TOEFL iBT (tests from 21 January 2026) 4.5 overall with no section below 4.0, or for earlier tests 83 overall with Listening 20, Reading 20, Speaking 19 and Writing 20 (MyBest scores are not accepted); TOEFL paper-based 560; or CAEL 70 with no sub-score below 60. Test results more than 24 months old at the time of application are not accepted";

const GRAD_ENGLISH_COURSE = `${GRAD_ENGLISH_STD}. Duolingo 120 is also accepted for this course-based program`;

const GRAD_ACADEMIC_B =
  "Minimum overall academic standing of B (GPA 3.0 on a 4.3 scale, or 73-76%), with at least a B average in the last two full-time years (four semesters) of undergraduate study, or the equivalent";

const GRAD_ENG_DEGREE =
  "A four-year honours undergraduate engineering degree in a relevant field from an accredited engineering program at a Canadian university, or the equivalent from a recognized institution";

const MASC_FEE =
  "MASc: CAD 22,313.12 a year in tuition (Ontario Tech's 2026-2027 international flat fee, CAD 7,437.71 a term), charged in all three terms (fall, winter and spring) for as long as you are registered, so about CAD 44,626 over the standard 24 months at this year's rate";

const MENG_FEE =
  "MEng: CAD 4,693.57 per 3-credit course (CAD 1,564.52 per credit) in 2026-2027; the degree needs 30 credits, so tuition is about CAD 46,936 at this year's rate, normally over 16 months";

const GRAD_FEE_EXTRAS =
  "Graduate students also pay ancillary fees each term (health and dental plan, legal protection, virtual doctor, sports and recreation and other services) and students in fee-per-credit programs who need extra terms to finish a project, major paper or thesis pay a continuation fee. These are Ontario Tech's 2026-2027 international rates; fees for 2027-2028 had not been published and are subject to change without notice";

const ENG_GRAD_COOP_FEE =
  "Graduate co-op students in Engineering and Applied Science pay a one-time CAD 754.23 co-op administrative fee and CAD 1,131.35 for each co-op work term. ";

const engUgPrereq = (cutoff: string) =>
  `Ontario prerequisites: the OSSD with six 4U/4M courses including English (ENG4U) with at least 60%, Advanced Functions (MHF4U), Calculus and Vectors (MCV4U), Chemistry (SCH4U) and Physics (SPH4U), with a combined average of at least 70% in the math and science prerequisites and no prerequisite grade below 60%. Last year's cut-off was 70% and the expected cut-off is ${cutoff}. Apply through OUAC to either the regular or the direct-entry co-op program code`;

const ENG_INTL_PREREQ =
  "International prerequisites (2027-2028 admissions chart): British-patterned curriculum: English, Chemistry, Mathematics and Physics, with Mathematics and either Physics or Chemistry at A-level (the other may be at IGCSE/GCSE/O or AS level). IB: English, Chemistry, Physics and Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation at Higher Level. CAPE: Communication Studies, Chemistry 1, Pure Math 1, Pure Math 2 and Physics 1";

const ENG_DESC_COMMON =
  "Every engineering student starts with a common foundation year before moving into the chosen discipline, and students can switch to the five-year Bachelor of Engineering and Management (Honours) to add business and management courses.";

export const ontarioTechUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "ontario-tech-computer-science",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years full-time; 5 years with the co-op option or the Science and Management degree",
    language: "English",
    tuitionNote: ugFee(
      "CAD 37,831.43",
      "the Bachelor of Science in Computer Science",
      SCIENCE_COOP_FEES
    ),
    description:
      "Ontario Tech's Honours BSc in Computer Science in Oshawa covers software, algorithms and computing theory, with AI, data science and co-op options. It is taught by the Faculty of Science and its School of Artificial Intelligence. Students can add a specialization in Artificial Intelligence (programming, machine learning, data analytics and intelligent systems), Data Science (large-scale data analysis, programming and statistics), Interactive Computing (graphics, human-computer interaction and mobile development) or Software Development (software engineering, application development and team projects). A five-year direct-entry co-op option adds full-time paid work terms, and students can instead complete an Honours thesis with a faculty advisor. Students interested in management can move into the five-year Bachelor of Science and Management (Honours) in upper years.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/computers-and-technology/computer-science/index.php",
    campus: "North Oshawa campus",
    programType: "Regular or co-op (OUAC codes DSD regular, DCD co-op)",
    degree: "Bachelor of Science (Honours) in Computer Science; optional Bachelor of Science and Management (Honours)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: UG_APPLY_WINTER,
    admissionRequirements: [
      "Ontario prerequisites: the OSSD with six 4U/4M courses including English (ENG4U), Advanced Functions (MHF4U) and one of Calculus and Vectors (MCV4U), Physics (SPH4U) or Computer Science (ICS4U), with a combined average of at least 70% in the computer science, math and science prerequisites. Ontario Tech recommends taking all three of MCV4U, ICS4U and SPH4U. Last year's cut-off was 75% and the expected cut-off is 73%",
      "International prerequisites (2027-2028 admissions chart): British-patterned curriculum: English and Mathematics. IB: English and Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation at Higher Level. CAPE: Communication Studies, Pure Math 1 and one of Physics 1 or Pure Math 2. Ontario Tech does not consider BTEC credentials for Computer Science",
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Software Engineering",
    slug: "ontario-tech-software-engineering",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Software Engineering",
    duration: "4 or 5 years full-time (the Engineering and Management degree takes five years)",
    language: "English",
    tuitionNote: ugFee(
      "CAD 46,561.31",
      "the Bachelor of Engineering",
      UG_COOP_FEES
    ),
    description:
      "Ontario Tech's Software Engineering BEng trains engineers to design, build, test and integrate software into complex systems, with co-op and IoT options. Software engineering is one of Canada's newer engineering disciplines. Courses cover software design for embedded, enterprise, mobile, distributed and real-time control systems, as well as user interfaces, advanced networks and algorithm design and analysis. Students can specialize in the Internet of Things (embedded systems, networking and data analysis for connected devices) or Railway Engineering (rail infrastructure, signalling and transport planning). Labs are small and interactive, and the program has a direct-entry co-op option as well as engineering internships. " +
      ENG_DESC_COMMON,
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/engineering/software-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "Regular or co-op (OUAC codes DEW regular, DCW co-op)",
    degree: "Bachelor of Engineering (Honours) in Software Engineering; optional Bachelor of Engineering and Management (Honours)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: UG_APPLY_WINTER,
    admissionRequirements: [
      engUgPrereq("in the mid-70s"),
      ENG_INTL_PREREQ,
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "ontario-tech-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "4 or 5 years full-time (the Engineering and Management degree takes five years)",
    language: "English",
    tuitionNote: ugFee(
      "CAD 46,561.31",
      "the Bachelor of Engineering",
      UG_COOP_FEES
    ),
    description:
      "Ontario Tech's accredited Mechanical Engineering BEng applies motion, energy and force to design, with aerospace, AI and railway options and co-op. Students learn how these principles are used to design and build machines and systems. The curriculum was developed with industry input and focuses on design, controls, thermo-fluids and instrumentation, with hands-on labs in facilities such as the ACE research facilities and the Energy Systems and Nuclear Science Research Centre. Students can specialize in Aerospace Engineering (aerodynamics, propulsion, structures and flight dynamics), Artificial Intelligence (machine learning, deep learning and model development) or Railway Engineering. A direct-entry co-op option and engineering internships with more than 200 partner companies are available. " +
      ENG_DESC_COMMON,
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/engineering/mechanical-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "Regular or co-op (OUAC codes DEC regular, DCN co-op)",
    degree: "Bachelor of Engineering (Honours) in Mechanical Engineering; optional Bachelor of Engineering and Management (Honours)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: UG_APPLY_WINTER,
    admissionRequirements: [
      engUgPrereq("in the mid-70s"),
      ENG_INTL_PREREQ,
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "ontario-tech-electrical-engineering",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Electrical Engineering",
    duration: "4 or 5 years full-time (the Engineering and Management degree takes five years)",
    language: "English",
    tuitionNote: ugFee(
      "CAD 46,561.31",
      "the Bachelor of Engineering",
      UG_COOP_FEES
    ),
    description:
      "Ontario Tech's Electrical Engineering BEng covers power, control, electronic and wireless systems, with a Smart Grid option and direct-entry co-op in Oshawa. It looks at how electrical technologies are designed and how their components are integrated into complex systems. Students learn to analyze, design and implement electrical, power, control, electronic, biomedical, photonic and wireless systems, with attention to the practices of the Canadian electrical industry. An optional Smart Grid specialization looks at how communication and networking technology is changing power systems, including energy systems, smart metering, power quality and grid security. The program has a direct-entry co-op option and engineering internships, and students learn in buildings such as the Ontario Power Generation (OPG) Engineering Building and the Energy Systems and Nuclear Science Research Centre. " +
      ENG_DESC_COMMON,
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/engineering/electrical-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "Regular or co-op (OUAC codes DEE regular, DCE co-op)",
    degree: "Bachelor of Engineering (Honours) in Electrical Engineering; optional Bachelor of Engineering and Management (Honours)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: UG_APPLY_WINTER,
    admissionRequirements: [
      engUgPrereq("in the mid-70s"),
      ENG_INTL_PREREQ,
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Mechatronics Engineering",
    slug: "ontario-tech-mechatronics-engineering",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Engineering",
    duration: "4 or 5 years full-time (the Engineering and Management degree takes five years)",
    language: "English",
    tuitionNote: ugFee(
      "CAD 46,561.31",
      "the Bachelor of Engineering",
      UG_COOP_FEES
    ),
    description:
      "Ontario Tech's accredited Mechatronics Engineering BEng blends mechanical, electrical and software engineering to build robots and devices, with co-op. Ontario Tech is one of a few Canadian universities with a dedicated mechatronics degree, which adds real-time control to that mix. Students learn to build products that join hardware and software, such as consumer devices, medical devices, high-tech automotive systems and robots, using facilities that include a robotics and automation lab. Graduates work in robotics, automotive, aerospace and consumer product companies. Optional specializations are Artificial Intelligence (machine learning, deep learning and AI system design) and Railway Engineering. A direct-entry co-op option and engineering internships are available. " +
      ENG_DESC_COMMON,
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/engineering/mechatronics-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "Regular or co-op (OUAC codes DEH regular, DCO co-op)",
    degree: "Bachelor of Engineering (Honours) in Mechatronics Engineering; optional Bachelor of Engineering and Management (Honours)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: UG_APPLY_WINTER,
    admissionRequirements: [
      engUgPrereq("in the high 70s"),
      ENG_INTL_PREREQ,
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Networking and Information Technology Security",
    slug: "ontario-tech-networking-and-it-security",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Cybersecurity",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: ugFee(
      "CAD 42,143.13",
      "the Bachelor of Information Technology",
      BIT_INTERNSHIP_FEE
    ),
    description:
      "Ontario Tech's Networking and IT Security BIT trains students to build, defend and test enterprise networks in labs, with internships and certification prep. It is a Bachelor of IT from the Faculty of Business and Information Technology, taught in specialized labs. Courses cover fundamental and advanced networking, enterprise network engineering, cloud computing, programming and scripting, databases, cryptography, security policy, malware analysis and digital forensics. The coursework also prepares students for industry certifications from Cisco, CompTIA and (ISC)². Students who have finished two years with a cumulative GPA of at least 3.0 can take a paid internship with an employer in Canada or abroad, and a capstone project is part of the degree. Graduates work as security analysts, network security engineers and system and network managers.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/computers-and-technology/information-technology-networking-and-information-technology-security/index.php",
    campus: "North Oshawa campus",
    programType: "Full-time, with optional internship (OUAC code DIT)",
    degree: "Bachelor of Information Technology (Honours) in Networking and Information Technology Security",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: UG_APPLY,
    admissionRequirements: [
      "Ontario prerequisites: the OSSD with six 4U/4M courses including English (ENG4U) with at least 60%, plus one of Advanced Functions (MHF4U), Calculus and Vectors (MCV4U) or Mathematics of Data Management (MDM4U) with at least 60%, or Computer Science (ICS4U) with at least 70%. Last year's cut-off was 70% and the expected cut-off is in the mid-70s",
      "International prerequisites (2027-2028 admissions chart): British-patterned curriculum: English and Mathematics. IB: English and one of Computer Science, Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation. CAPE: Communication Studies and one of Applied Math 1, Integrated Math or Pure Math 1",
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Accounting",
    slug: "ontario-tech-accounting",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Accounting",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: ugFee(
      "CAD 37,877.47",
      "the Bachelor of Commerce",
      UG_COOP_FEES + BIT_INTERNSHIP_FEE
    ),
    description:
      "Ontario Tech's CPA Ontario-accredited Accounting major (BCom Honours) prepares students for the CPA designation, with co-op, internships and capstones. Because the program is accredited by CPA Ontario, students who complete all the required courses can enter the CPA Professional Education Program (CPA PEP). Courses build current accounting knowledge along with the professional judgment and critical thinking accountants need. Students can apply directly to a co-op version with full-time paid work terms, or take internships (in Canada or abroad) or capstone projects in which teams act as consultants to real organizations. Graduates work as accountants, auditors, tax accountants, financial analysts, controllers and consultants.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/business/accounting/index.php",
    campus: "North Oshawa campus",
    programType: "Regular or co-op (OUAC codes DBG regular, DCG co-op)",
    degree: "Bachelor of Commerce (Honours), Accounting major",
    workIntegrated: true,
    intake: "September",
    applicationDeadline: UG_APPLY,
    admissionRequirements: [
      "Ontario prerequisites: the OSSD with six 4U/4M courses including English (ENG4U) with at least 60%, plus one of Advanced Functions (MHF4U), Calculus and Vectors (MCV4U) or Mathematics of Data Management (MDM4U) with at least 60%. Last year's cut-off was 70% and the expected cut-off is in the low 70s. Students with previous post-secondary study apply to the regular code and can only move into co-op after a transfer-credit assessment",
      "International prerequisites (2027-2028 admissions chart): British-patterned curriculum: English and Mathematics. IB: English and one of Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation. CAPE: Communication Studies and one of Applied Math 1, Integrated Math or Pure Math 1",
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Forensic Science",
    slug: "ontario-tech-forensic-science",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Forensic Science",
    duration: "4 years full-time; 5 years for the Science and Management degree",
    language: "English",
    tuitionNote: ugFee("CAD 34,148.27", "the Bachelor of Science"),
    description:
      "Ontario Tech's FEPAC-accredited Forensic Science BSc teaches crime scene work, evidence analysis and court testimony through biology, chemistry and physics. Accredited by the Forensic Science Education Programs Accreditation Commission (FEPAC), it teaches students to work like forensic examiners. Lectures and labs in biology, chemistry and physics lead into documenting mock crime scenes, collecting evidence, writing scientific reports, extracting DNA, analyzing blood stain patterns and testifying in mock court. Training uses a Crime Scene House, a Forensic Ecology Research Facility and a forensic teaching lab, and the program works with partners including local law enforcement, Canadian border services, Ontario's Centre of Forensic Sciences, Lakeridge Hospital and private laboratories. After first year, students choose an elective stream in forensic biology, chemistry or physics. In the final year they complete a thesis, a directed study or a mock crime scene practicum.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/science/forensic-science/index.php",
    campus: "North Oshawa campus",
    programType: "Full-time (OUAC code DSN)",
    degree: "Bachelor of Science (Honours) in Forensic Science; optional Bachelor of Science and Management (Honours)",
    workIntegrated: false,
    intake: "September",
    applicationDeadline: UG_APPLY,
    admissionRequirements: [
      "Ontario prerequisites: the OSSD with six 4U/4M courses including English (ENG4U), Advanced Functions (MHF4U) and two of Biology (SBI4U), Calculus and Vectors (MCV4U), Chemistry (SCH4U) or Physics (SPH4U), with a combined average of at least 70% in the math and science prerequisites. Ontario Tech recommends taking all four of MCV4U, SBI4U, SCH4U and SPH4U. Last year's cut-off was 70% and the expected cut-off is in the low 70s",
      "International prerequisites (2027-2028 admissions chart): British-patterned curriculum: English, Mathematics and one of Biology, Chemistry or Physics. IB: English, Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation (HL), and one of Biology, Chemistry or Physics. CAPE: Communication Studies, Pure Math 1 and two of Biology 1, Chemistry 1, Physics 1 or Pure Math 2",
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Kinesiology",
    slug: "ontario-tech-kinesiology",
    level: "Bachelor",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Kinesiology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: ugFee("CAD 34,148.27", "the Bachelor of Health Science"),
    description:
      "Ontario Tech's Kinesiology degree studies human movement, health and performance, prepares students for Registered Kinesiologist exams and offers placements. It is an Honours Bachelor of Health Science focused on improving performance and quality of life. It covers the behavioural, biomechanical, physiological and psychosocial sides of health and performance, applied to rehabilitation, adapted physical activity, sport, exercise and general health. Students can choose courses that prepare them for the exams to become a Registered Kinesiologist in Ontario, and they learn in a dedicated Kinesiology Teaching Laboratory. Specializations are Biomechanics and Ergonomics, which looks at the body's interaction with its physical environment and injury prevention, or Exercise Science and Rehabilitation. Placements of one term or a full year, for example in cardiac rehabilitation or physiotherapy settings, are available.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/undergraduate/health-sciences-and-medicine/kinesiology/index.php",
    campus: "North Oshawa campus",
    programType: "Full-time, with optional placements (OUAC code DKN)",
    degree: "Bachelor of Health Science (Honours) in Kinesiology",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: UG_APPLY_WINTER,
    admissionRequirements: [
      "Ontario prerequisites: the OSSD with six 4U/4M courses including English (ENG4U) with at least 60%, Biology (SBI4U) and one of Advanced Functions (MHF4U), Calculus and Vectors (MCV4U) or Mathematics of Data Management (MDM4U). Chemistry (SCH4U) is recommended for the Exercise Science option. Last year's cut-off was 70% and the expected cut-off is in the mid-70s",
      "International prerequisites (2027-2028 admissions chart): British-patterned curriculum: English, Biology and Mathematics (Chemistry recommended). IB: English, Biology and one of Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation (Chemistry recommended). CAPE: Communication Studies, Biology 1 and one of Applied Math 1, Integrated Math or Pure Math 1 (Chemistry recommended)",
      INTL_ACADEMIC,
      UG_ENGLISH,
      UG_PGWP,
    ],
  },

  {
    name: "Electrical and Computer Engineering",
    slug: "ontario-tech-master-electrical-and-computer-engineering",
    level: "Master",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Electrical Engineering",
    duration: "MEng 16 months full-time; MASc 24 months full-time (part-time study possible)",
    language: "English",
    tuitionNote: `International: ${MENG_FEE}. ${MASC_FEE}. ${GRAD_FEE_EXTRAS}`,
    description:
      "Ontario Tech offers a 16-month course-based MEng and a 24-month research MASc in Electrical and Computer Engineering, covering power, control and software. Together they cover electrical, computer and software systems engineering, including electronics, intelligent systems, communications, control, biomedical engineering, power electronics, power generation, mobile and embedded software. The Master of Engineering (MEng) is a 16-month professional degree of 10 courses (30 credits) with four core courses; after one term, students who find a supervisor can switch to a project option of eight courses plus a 6-credit project. The research-based Master of Applied Science (MASc) combines five courses with a 15-credit thesis and a research seminar. MASc students can focus on communications and signal processing, control systems, power systems and power electronics, or software systems, and graduates can go on to a PhD.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/graduate/engineering-and-applied-science/masters-electrical-and-computer-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "MEng: course-based or project; MASc: research thesis",
    degree: "Master of Engineering (MEng) or Master of Applied Science (MASc) in Electrical and Computer Engineering",
    workIntegrated: false,
    intake: "MEng: September or January; MASc: September, January or May",
    applicationDeadline: `International applicants, MEng: September 2027 entry by 1 April 2027 (the January 2027 intake closed on 1 October 2026; there is no May intake). MASc: September 2027 entry by 1 February 2027 and May 2027 entry by 13 November 2026 (the January 2027 intake closed on 1 September 2026). ${GRAD_APPLY_NOTE}`,
    admissionRequirements: [
      GRAD_ENG_DEGREE,
      `${GRAD_ACADEMIC_B}. B+ is preferred for the MASc. MASc applicants are admitted to a research program and work with a faculty supervisor`,
      "All MEng students start in the course-based option and can ask to move to the project option after at least one term if a faculty member agrees to supervise the project",
      `${GRAD_ENGLISH_STD}. Duolingo 120 is accepted for the MEng only`,
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "ontario-tech-master-mechanical-engineering",
    level: "Master",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "MEng 16 months full-time; MASc 24 months full-time (part-time study possible)",
    language: "English",
    tuitionNote: `International: ${MENG_FEE}. ${MASC_FEE}. ${GRAD_FEE_EXTRAS}`,
    description:
      "Ontario Tech offers a 16-month course-based MEng and a 24-month research MASc in Mechanical Engineering, with design, energy and mechatronics fields. Students can study the whole discipline or focus on one of three fields: Design (design and innovation, CAD/CAE/CAM, machine design and solid mechanics), Energy and Thermofluids Engineering (renewable energy, hydrogen, engines, gas turbines, power plants and HVAC), or Mechatronics and Manufacturing Engineering. Topics range from robotics, automation and controls to heat transfer and fluid mechanics. The Master of Engineering (MEng) is a 16-month professional degree of 10 courses (30 credits), with an optional project route, for engineers who want to upgrade their skills. The Master of Applied Science (MASc) combines five courses with a thesis and research seminar and prepares graduates for research and development work or a PhD.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/graduate/engineering-and-applied-science/masters-mechanical-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "MEng: course-based or project; MASc: research thesis",
    degree: "Master of Engineering (MEng) or Master of Applied Science (MASc) in Mechanical Engineering",
    workIntegrated: false,
    intake: "MEng: September or January; MASc: September, January or May",
    applicationDeadline: `International applicants, MEng: September 2027 entry by 1 April 2027 (the January 2027 intake closed on 1 October 2026; there is no May intake). MASc: September 2027 entry by 1 February 2027 and May 2027 entry by 13 November 2026 (the January 2027 intake closed on 1 September 2026). ${GRAD_APPLY_NOTE}`,
    admissionRequirements: [
      GRAD_ENG_DEGREE,
      `${GRAD_ACADEMIC_B}. B+ is preferred for the MASc. MASc applicants are admitted to a research program and work with a faculty supervisor`,
      "All MEng students start in the course-based option and can ask to move to the project option after at least one term if a faculty member agrees to supervise the project",
      `${GRAD_ENGLISH_STD}. Duolingo 120 is accepted for the MEng only`,
    ],
  },

  {
    name: "Software Engineering",
    slug: "ontario-tech-master-software-engineering",
    level: "Master",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Software Engineering",
    duration: "MEng 16 months full-time; MASc 24 months full-time (part-time study possible)",
    language: "English",
    tuitionNote: `International: ${MENG_FEE}. ${MASC_FEE}. ${ENG_GRAD_COOP_FEE}${GRAD_FEE_EXTRAS}`,
    description:
      "Ontario Tech offers a 16-month MEng (with a co-op version) and a 24-month research MASc in Software Engineering, focused on building reliable software. Both deepen students' knowledge of rigorous design and construction methods through advanced courses, projects or a research thesis. They suit graduates in software, computer or electrical engineering, computer science and related fields. The Master of Engineering (MEng), also offered as a co-op version, takes 16 months: 10 courses, or seven courses plus a project, including core courses in advanced engineering mathematics, engineering communication and ethics, and project management. The Master of Applied Science (MASc) requires five courses, among them Foundations of Software Engineering and Software Development Methods and Tools, plus a thesis and a research seminar, and leads to research and development careers or a PhD.",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/graduate/engineering-and-applied-science/masters-software-engineering/index.php",
    campus: "North Oshawa campus",
    programType: "MEng: course-based or project, regular or co-op; MASc: research thesis",
    degree: "Master of Engineering (MEng) or Master of Applied Science (MASc) in Software Engineering",
    workIntegrated: true,
    intake: "MEng: September or January; MASc: September, January or May",
    applicationDeadline: `International applicants, MEng (including MEng co-op): September 2027 entry by 1 April 2027 (the January 2027 intake closed on 1 October 2026; there is no May intake). MASc: September 2027 entry by 1 February 2027 and May 2027 entry by 13 November 2026 (the January 2027 intake closed on 1 September 2026). ${GRAD_APPLY_NOTE}`,
    admissionRequirements: [
      GRAD_ENG_DEGREE,
      `${GRAD_ACADEMIC_B}. B+ is preferred for the MASc. MASc applicants are admitted to a research program and work with a faculty supervisor`,
      "All MEng students start in the course-based option and can ask to move to the project option after at least one term if a faculty member agrees to supervise the project. MEng students may not count undergraduate courses or courses from outside the program",
      `${GRAD_ENGLISH_STD}. Duolingo 120 is accepted for the MEng only`,
    ],
  },

  {
    name: "Information Technology Security",
    slug: "ontario-tech-master-information-technology-security",
    level: "Master",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Cybersecurity",
    duration: "24 months full-time (part-time study possible)",
    language: "English",
    tuitionNote: `International: CAD 4,834.52 per 3-credit course (CAD 1,611.51 per credit) in 2026-2027; the degree needs 30 credits, so tuition is about CAD 48,345 at this year's rate. ${GRAD_FEE_EXTRAS}`,
    description:
      "Ontario Tech's two-year Master of IT Security (MITS) is a STEM degree with AI security and governance fields, a hacker lab and a capstone or internship. It was one of the first graduate degrees of its kind in Canada and prepares students for the IT security industry. It mixes theory with hands-on work in a Hacker Research Lab, a secure space with varied network setups and wireless devices for security projects and experiments, and ends with a substantial capstone project or internship in a workplace. Students can follow the General stream, which covers the knowledge domains of the CISSP certification exam; a field in Artificial Intelligence in Security, which adds machine learning and AI systems; or Cybersecurity Governance, focused on ethical management and leadership of IT security. MITS is classed as a STEM program (CIP 11.1003).",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/graduate/business-and-information-technology/master-of-information-technology-security/index.php",
    campus: "North Oshawa campus",
    programType: "Course-based, with an IT security capstone project or internship",
    degree: "Master of Information Technology Security (MITS)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: `International applicants: September 2027 entry by 1 April 2027 (the January 2027 intake closed for international applicants on 1 October 2026). ${GRAD_APPLY_NOTE}`,
    admissionRequirements: [
      "A four-year honours undergraduate degree in any field, or the equivalent from a recognized institution; preference goes to degrees in information technology, engineering, science or related fields",
      GRAD_ACADEMIC_B,
      "At least one course in advanced programming (for example Java, C, C++ or C#) and one in advanced mathematics (for example linear algebra, calculus or number theory), plus at least one course or proven work experience in operating systems (Windows and/or Unix or Linux). IT work experience is preferred",
      GRAD_ENGLISH_COURSE,
    ],
  },

  {
    name: "Business Analytics and Artificial Intelligence",
    slug: "ontario-tech-master-business-analytics-and-ai",
    level: "Master",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Data Analytics",
    duration: "16 months full-time (part-time study possible)",
    language: "English",
    tuitionNote: `International: CAD 5,469.78 per 3-credit course (CAD 1,823.26 per credit) in 2026-2027; the degree needs 30 credits, so tuition is about CAD 54,698 at this year's rate. ${GRAD_FEE_EXTRAS}`,
    description:
      "Ontario Tech's 16-month MBAI master's applies analytics and machine learning to business problems and ends with an internship or capstone project. This course-based professional master's teaches students to solve business problems with advanced analytics and AI. Designed mainly for commerce and business graduates, it covers applied AI, business analytics and management, including machine learning models, data storytelling, database design, data quality and the ethics, bias, privacy and fairness of analytic models. Students finish with an internship or a comprehensive capstone project with industry partners, and can choose a field in AI Governance, Entrepreneurship or Supply Chain. The program is run by the Faculty of Business and Information Technology and its School of Artificial Intelligence, and is classed as a STEM program (CIP 11.0102, Artificial Intelligence).",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/graduate/business-and-information-technology/master-of-business-analytics-and-ai/index.php",
    campus: "North Oshawa campus",
    programType: "Course-based, with an internship or comprehensive capstone project",
    degree: "Master of Business Analytics and Artificial Intelligence (MBAI)",
    workIntegrated: true,
    intake: "September or January",
    applicationDeadline: `International applicants: September 2027 entry by 1 April 2027 (the January 2027 intake closed for international applicants on 1 October 2026). ${GRAD_APPLY_NOTE}`,
    admissionRequirements: [
      "A four-year honours undergraduate degree in any field, or the equivalent from a recognized institution; preference goes to degrees in business, management, economics, informatics or related fields",
      `${GRAD_ACADEMIC_B}. Work experience or a strong GMAT score can be used instead of the GPA requirement`,
      "At least one course in information systems and one in advanced mathematics (for example linear algebra, calculus or statistics), plus a CV covering education, employment, teaching and research experience and any publications",
      "English proficiency (higher than most Ontario Tech graduate programs): a test is not needed if you studied full-time for at least three years in a university degree program taught and examined in English, or completed such a degree. Otherwise: IELTS Academic 7.0 overall; TOEFL iBT (tests from 21 January 2026) 5.0 overall with no section below 4.0, or for earlier tests 100 overall with Listening 20, Reading 20, Speaking 19 and Writing 20; Duolingo 120; TOEFL paper-based 560; or CAEL 70 with no sub-score below 60. Test results more than 24 months old at the time of application are not accepted",
    ],
  },

  {
    name: "Computer Science",
    slug: "ontario-tech-master-computer-science",
    level: "Master",
    universitySlug: "ontario-tech-university",
    universityName: "Ontario Tech University",
    country: "Canada",
    field: "Computer Science",
    duration: "About 24 months full-time",
    language: "English",
    tuitionNote: `International: CAD 20,124.30 a year in tuition (Ontario Tech's 2026-2027 international flat fee for Master of Science programs, CAD 6,708.10 a term), charged in all three terms (fall, winter and spring) for as long as you are registered, so about CAD 40,249 over 24 months at this year's rate. ${GRAD_FEE_EXTRAS}`,
    description:
      "Ontario Tech's two-year, thesis-based MSc in Computer Science pairs applied research with professional skills, in digital media, AI/data, security or software. Offered by the Faculty of Science, it takes a broad approach that draws on engineering, science and business to train high-quality software professionals. Alongside applied research for a thesis, it builds professional skills such as project management, teamwork, leadership and written and oral communication, and students are encouraged to present their results at conferences. Most graduates go on to industrial research or software development. Students research in one of four fields: Digital Media (graphics, animation, visual analytics, games and computer vision), Information Science (databases, machine learning, intelligent systems and health informatics), Networks and IT Security, or Software Design (software engineering, distributed computing and software architecture).",
    officialProgramUrl:
      "https://ontariotechu.ca/programs/graduate/science/masters-computer-science/index.php",
    campus: "North Oshawa campus",
    programType: "Full-time, courses with a research thesis",
    degree: "Master of Science (MSc) in Computer Science",
    workIntegrated: false,
    intake: "September, January or May",
    applicationDeadline: `International applicants: September 2027 entry by 1 February 2027 and May 2027 entry by 13 November 2026 (the January 2027 intake closed on 1 September 2026). ${GRAD_APPLY_NOTE}`,
    admissionRequirements: [
      "A four-year honours undergraduate degree in computer science, computer engineering, information technology or software engineering from a Canadian university, or the equivalent from a recognized institution",
      GRAD_ACADEMIC_B,
      "Admission depends on a research supervisor being available, so Ontario Tech recommends contacting a potential supervisor before applying. In the statement of academic intent, list the kinds of courses you could teach as a teaching assistant",
      GRAD_ENGLISH_STD,
    ],
  },
];
