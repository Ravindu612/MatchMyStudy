import type { Program } from "@/data/programs";

// Queensland University of Technology (QUT, Brisbane) programs for international students starting in 2027.
// Sources (checked October 20, 2026):
// - QUT course pages (qut.edu.au/courses/<course>) viewed as an international student: course code, CRICOS code,
//   delivery campus, international duration, start months, 2027 indicative international fee, entry requirements,
//   assumed knowledge, English test scores, accreditation and course structure. For courses with majors (IT, data
//   science, engineering, business, design, Master of Business, Master of Professional Engineering) the requirement
//   details were read from the course's major pages, which carry the same course code and CRICOS code.
// - QUT international course PDFs (pdf.courses.qut.edu.au/coursepdf/qut_<code>_<id>_int_cms.pdf, "Year 2027"),
//   which repeat the code, CRICOS, duration, start months and 2027 international fee.
// - QUT "International applying" guide (qut.edu.au/study/applying/international-applying): applications open all
//   year for most courses, A$100 application fee, representative requirement for listed nationalities.
// - QUT "Understand your fees" (international) page: indicative fees, deposit on acceptance, annual increases.
// Fees are QUT's 2027 indicative annual international tuition in Australian dollars for a full-time load of
// 96 credit points; they are reviewed every year.

const FEE_EXTRAS =
  "QUT's indicative fee is an estimate for a standard full-time year of 96 credit points: your actual fee depends on the units you enrol in, and fees rise each year, so later years usually cost more. To accept an offer, new international students pay a deposit based on the estimated first-semester fee. Overseas Student Health Cover (required for the student visa), course-specific costs such as equipment or materials, and living costs are extra.";

const fee = (amount: string) =>
  `International: ${amount} a year (QUT's 2027 indicative annual fee for international students, full-time 96 credit points, as shown on the course page). ${FEE_EXTRAS}`;

const APPLY_BASE =
  "QUT accepts international applications all year for most courses (a few courses have their own opening and closing dates, shown on the course page) and advises applying as early as possible, because assessment, offers and the student visa all take time. Apply online through the QUT Application Portal or through a QUT official representative; applicants outside Australia who need a student visa and are nationals of certain countries (including India, Bangladesh, Nepal, Pakistan, Bhutan and most African countries) must apply through a representative. A non-refundable A$100 application fee applies. QUT asks new international students to arrive about two weeks before classes start for orientation.";

const APPLY_UG = `${APPLY_BASE} International students completing an Australian Year 12 curriculum, in Australia or overseas, follow QUT's separate process for international Year 12 students.`;

const APPLY_PG = APPLY_BASE;

const ENGLISH_STD =
  "English (test taken no more than two years before the course starts): IELTS Academic 6.5 overall with at least 6.0 in listening, reading, writing and speaking; or PTE Academic 59 overall (listening 50, reading 50, writing 51, speaking 54); or TOEFL iBT 79 overall (listening 16, reading 16, writing 19, speaking 19). Cambridge C1 Advanced, LanguageCert Academic and the Michigan English Test are also accepted at the scores on the course page. If you fall short, QUT may offer a package with an English or pathway program";

const ugAcademic = (code: string, cricos: string) =>
  `QUT course code ${code}; CRICOS ${cricos}. Academic entry: senior secondary study at a level comparable to Australian Year 12, or recognised post-secondary study. The minimum results QUT accepts for each country and qualification are listed in the international entry requirements guide on the course page`;

const pgAcademic = (code: string, cricos: string, rule: string) =>
  `QUT course code ${code}; CRICOS ${cricos}. Academic entry: ${rule}`;

const INTAKE_FEB_JUL = "February (Semester 1) and July (Semester 2)";

export const queenslandUniversityOfTechnologyPrograms: Program[] = [
  {
    name: "Information Technology",
    slug: "qut-information-technology",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Information Technology",
    duration: "3 years full-time (288 credit points)",
    language: "English",
    tuitionNote: fee("A$46,700"),
    description:
      "QUT's Bachelor of Information Technology is an ACS-accredited degree in Brisbane with seven majors: Artificial Intelligence, Business Analysis and IT Management, Computer Science, Cyber Security, Enterprise Computing, Process Analytics and Automation, and Software Development. First year is common to all majors, so students can try each area before choosing. Ethics, teamwork and project management run through the course, and work-integrated learning units in first and second year build a career portfolio. In final year, interdisciplinary teams solve a real problem for an industry client and present it at QUT's end-of-year IT and Games Showcase. A second major or a minor plus electives makes up the rest of the degree.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/bachelor-of-information-technology",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Bachelor of Information Technology (QUT course code IN01, CRICOS 012656E)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ugAcademic("IN01", "012656E"),
      "Applicants who finished secondary school in Australia: QUT's lowest adjusted ATAR/selection rank offered for Semester 1, 2026 was 70.00, and an ATAR/selection rank of 70.00 or higher guarantees an offer if all other requirements are met",
      "Assumed knowledge: English, and General Mathematics, Mathematical Methods or Specialist Mathematics (Queensland Units 3 & 4, grade C), or equivalent",
      ENGLISH_STD,
      "Professional recognition: accredited by the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Data Science",
    slug: "qut-data-science",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Data Science",
    duration: "3 years full-time (288 credit points)",
    language: "English",
    tuitionNote: fee("A$44,000"),
    description:
      "QUT's Bachelor of Data Science covers the whole data pipeline, from acquiring and storing data to processing, analysing and visualising it, with ethics, communication and teamwork built in. Mathematics and coding in data-science languages are developed step by step. Since 2026 students can major in Artificial Intelligence and Machine Learning, Business Data Science, or Data and Decision Analytics, and minors such as Optimisation and Stochastic Modelling, Computational and Simulation Science, and Information Systems are available. Teaching is linked to the QUT Centre for Data Science, and in third year a capstone project has students tackle a real problem with an industry partner's data.",
    officialProgramUrl: "https://www.qut.edu.au/courses/bachelor-of-data-science",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Bachelor of Data Science (QUT course code DS01, CRICOS 103170C)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ugAcademic("DS01", "103170C"),
      "Applicants who finished secondary school in Australia: QUT's 2027 international course guide lists an ATAR/selection rank of 84.00 for this degree, and an ATAR/selection rank of 84.00 or higher guarantees an offer if all other requirements are met",
      "Assumed knowledge: English, and Mathematical Methods or Specialist Mathematics (Queensland Units 3 & 4, grade C), or equivalent",
      ENGLISH_STD,
    ],
  },

  {
    name: "Engineering (Honours)",
    slug: "qut-engineering-honours",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time (384 credit points)",
    language: "English",
    tuitionNote: fee("A$50,200"),
    description:
      "QUT's Bachelor of Engineering (Honours) is a four-year degree accredited by Engineers Australia, which is recognised in other Washington Accord countries. After a shared first year of core engineering and maths, students choose a major such as Chemical and Sustainable Process, Civil, Computer and Software Systems, Electrical, Electrical and Aerospace, Electrical and Renewable Power, Mechanical, Mechatronics or Medical engineering. Each major adds advanced honours-level units, a research methods unit and a 24-credit-point honours project, plus an engineering minor and QUT You electives. A work placement experience report is required to graduate, and students use industry-standard tools in hands-on labs.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/bachelor-of-engineering-honours",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Bachelor of Engineering (Honours) (QUT course code EN01, CRICOS 084921G)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ugAcademic("EN01", "084921G"),
      "Applicants who finished secondary school in Australia: entry thresholds are set per major. For the Civil major, QUT's lowest adjusted ATAR/selection rank offered for Semester 1, 2026 was 84.00, and 87.00 or higher guarantees an offer",
      "Assumed knowledge: English, and Mathematical Methods or Specialist Mathematics (Queensland Units 3 & 4, grade C), or equivalent",
      ENGLISH_STD,
      "Professional recognition: all majors are accredited by Engineers Australia (a Washington Accord signatory)",
    ],
  },

  {
    name: "Business",
    slug: "qut-business",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time (288 credit points)",
    language: "English",
    tuitionNote: fee("A$46,800"),
    description:
      "QUT's Bachelor of Business comes from a business school with triple international accreditation and combines eight business core units with a major in Accounting, Economics, Entrepreneurship and Innovation, Finance, Human Resource Management, International Business, Management, Marketing, Strategic Advertising and Public Relations, or Strategic Business Analytics. Students fill the rest of the degree with a second major, minors or electives from business or other QUT faculties. Classes use real software such as MYOB and Stata, case studies and client briefs, and final-year students solve a real business problem in a capstone unit. High achievers can add an honours year (BS63).",
    officialProgramUrl: "https://www.qut.edu.au/courses/bachelor-of-business",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Bachelor of Business (QUT course code BS05, CRICOS 003491G)",
    workIntegrated: true,
    intake:
      "February (Semester 1), July (Semester 2) and November (conditions apply for international students starting in November)",
    applicationDeadline: `${APPLY_UG} International students who want to start in November should contact the QUT Business School (bus@qut.edu.au) first, as conditions apply.`,
    admissionRequirements: [
      ugAcademic("BS05", "003491G"),
      "Applicants who finished secondary school in Australia: QUT's lowest adjusted ATAR/selection rank offered for Semester 1, 2026 was 70.00, and 70.00 or higher guarantees an offer if all other requirements are met",
      "Assumed knowledge: English, and General Mathematics, Mathematical Methods or Specialist Mathematics (Queensland Units 3 & 4, grade C), or equivalent",
      ENGLISH_STD,
      "Professional recognition: the Accounting major meets the accreditation requirements of CPA Australia, Chartered Accountants Australia and New Zealand (CA ANZ) and the Institute of Public Accountants (IPA), subject to the required units",
    ],
  },

  {
    name: "Nursing",
    slug: "qut-nursing",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time (288 credit points)",
    language: "English",
    tuitionNote: fee("A$45,100"),
    description:
      "QUT's Bachelor of Nursing in Brisbane prepares students for registration as a nurse in Australia, with 840 hours of scheduled clinical practice (800 are needed for registration) in settings including rural and remote health. Early units cover anatomy, physiology, pathophysiology, pharmacology and professional nursing practice. Skills are built in on-campus facilities that replicate a hospital ward before students move to clinical placements. The degree is accredited by ANMAC and the Nursing and Midwifery Board of Australia (it is going through reaccreditation, expected to be approved in late 2026), and the School of Nursing has more than 40 years of experience.",
    officialProgramUrl: "https://www.qut.edu.au/courses/bachelor-of-nursing",
    campus: "Kelvin Grove campus, Brisbane",
    programType: "Full-time, on campus with clinical placements",
    degree: "Bachelor of Nursing (QUT course code NS42, CRICOS 003501K)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: `${APPLY_UG} Places are limited, so apply early and accept your offer quickly. Offers in this course cannot be deferred.`,
    admissionRequirements: [
      ugAcademic("NS42", "003501K"),
      "Applicants who finished secondary school in Australia: QUT's lowest adjusted ATAR/selection rank offered for Semester 1, 2026 was 74.00, and 80.00 or higher guarantees an offer if all other requirements are met",
      "Assumed knowledge: English (Queensland Units 3 & 4, grade C), or equivalent",
      "English (registration standard): IELTS Academic 7.0 overall with at least 7.0 in listening, reading and speaking and 6.5 in writing, taken within two years before the course starts. Alternatively, the Occupational English Test (Nursing) with listening and writing of 350 and reading and speaking of 360, or PTE Academic, TOEFL iBT or Cambridge C1 Advanced at the scores on the course page. Applicants who completed at least six years of English-taught schooling in a listed English-speaking country (including at least two years between grades 7 and 12) may not need a test",
      "Inherent requirements apply, and students are registered with the Nursing and Midwifery Board of Australia (NMBA) while studying",
      "Professional recognition: accredited by ANMAC/NMBA as a pre-registration nursing course (reaccreditation expected in late 2026); graduates meet the academic requirements for professional membership of the Australian College of Nursing",
    ],
  },

  {
    name: "Laws (Honours)",
    slug: "qut-laws-honours",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Law",
    duration: "4 years full-time (384 credit points)",
    language: "English",
    tuitionNote: fee("A$46,000"),
    description:
      "QUT's Bachelor of Laws (Honours) is a four-year undergraduate law degree that covers the areas of law required for admission to legal practice in Australia, including contract, equity and trusts, constitutional, administrative and property law. It also covers emerging fields such as ESG and an optional law, technology and innovation minor dealing with AI, robotics and legal tech. Aboriginal and Torres Strait Islander perspectives on law are taught throughout. Through more than 600 industry partners, students can do placements with community legal centres, law firms, in-house teams and government. QUT ranks first in Queensland for law in the 2026 Times Higher Education subject rankings.",
    officialProgramUrl: "https://www.qut.edu.au/courses/bachelor-of-laws-honours",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Bachelor of Laws (Honours) (QUT course code LW38, CRICOS 083020J)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ugAcademic("LW38", "083020J"),
      "Applicants who finished secondary school in Australia: QUT's lowest adjusted ATAR/selection rank offered for Semester 1, 2026 was 84.00, and 87.00 or higher guarantees an offer if all other requirements are met",
      "Assumed knowledge: English, Literature, English and Literature Extension, or English as an Additional Language (Queensland Units 3 & 4, grade C), or equivalent",
      ENGLISH_STD,
    ],
  },

  {
    name: "Design",
    slug: "qut-design",
    level: "Bachelor",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Design & Visual Studies",
    duration: "3 years full-time (288 credit points)",
    language: "English",
    tuitionNote: fee("A$42,800"),
    description:
      "QUT's Bachelor of Design is taught at the Kelvin Grove campus by a university ranked first in Queensland for art and design (QS 2026). Students choose one of five majors: Experience Design, Fashion Design, Industrial Design, Strategic Design or Visual Communication. The degree opens with Design Impact Labs, where students from different disciplines work on social and industry problems with real stakeholders. Studio projects then mimic client work from research to presentation, with chances for internships, field trips and study tours. Graduates qualify for membership of the Design Institute of Australia. A four-year version adds a year of study at an overseas partner university.",
    officialProgramUrl: "https://www.qut.edu.au/courses/bachelor-of-design",
    campus: "Kelvin Grove campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Bachelor of Design (QUT course code DE43, CRICOS 096565B)",
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ugAcademic("DE43", "096565B"),
      "Applicants who finished secondary school in Australia: QUT's lowest adjusted ATAR/selection rank offered for Semester 1, 2026 was 70.00 for the design majors (for example Visual Communication and Industrial Design), and 70.00 or higher guarantees an offer if all other requirements are met",
      ENGLISH_STD,
      "Professional recognition: graduates qualify for membership of the Design Institute of Australia (DIA)",
    ],
  },

  {
    name: "Information Technology",
    slug: "qut-master-information-technology",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Information Technology",
    duration: "1.5 to 2 years full-time (192 credit points for the 2-year program)",
    language: "English",
    tuitionNote: fee("A$46,800"),
    description:
      "QUT's Master of Information Technology is a postgraduate IT degree in Brisbane with seven majors, from technical to business-focused: Computer Science, Data Science, Human-Centred Design, Internet of Things, IT Management, Process Analytics and Automation, and Software Development. The course was revised to match industry trends such as machine learning, process mining and cloud development. It now includes two semesters of work-integrated learning, with capstone and industry project units done for real clients. Graduates of any discipline take the two-year program, while IT graduates or people with three years of IT work experience can finish in 1.5 years.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/master-of-information-technology",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Information Technology (QUT course code IN20, CRICOS 083059E)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "IN20",
        "083059E",
        "for the 2-year program, a recognised bachelor degree (or higher) in any discipline with a GPA of at least 4.00 on QUT's 7-point scale. For the 1.5-year program, a recognised bachelor degree in information technology with a GPA of at least 4.00, or a bachelor degree in another discipline with a GPA of at least 4.00 followed by three years of full-time (or equivalent) professional IT work experience (CV and employment statements required). QUT automatically assesses eligible applicants for the shorter program."
      ),
      ENGLISH_STD,
    ],
  },

  {
    name: "Data Science",
    slug: "qut-master-data-science",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Data Science",
    duration: "2 years full-time (192 credit points)",
    language: "English",
    tuitionNote: fee("A$46,500"),
    description:
      "QUT's Master of Data Science combines statistics, computer science and business process management, and is taught by researchers from the QUT Centre for Data Science. Students build programming, data processing and statistical modelling skills, then specialise in computational data science, statistical data science, biomedical data science or information systems analytics, with topics like machine learning at scale, advanced stochastic modelling, cyber security governance and process automation. A capstone industry project with research training applies these skills to complex real data. Graduates work in fields such as banking and finance, health, education, technology, engineering, agriculture and mining.",
    officialProgramUrl: "https://www.qut.edu.au/courses/master-of-data-science",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Data Science (QUT course code IN31, CRICOS 116754E)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "IN31",
        "116754E",
        "for the 2-year program, a recognised bachelor degree (or higher) in any discipline with a GPA of at least 4.00 on QUT's 7-point scale. International applicants with a recognised bachelor degree in information technology, mathematics or biomedical science and a GPA of at least 4.00 may be eligible for a 1.5-year program."
      ),
      ENGLISH_STD,
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "qut-master-artificial-intelligence",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Artificial Intelligence",
    duration: "2 years full-time (192 credit points)",
    language: "English",
    tuitionNote: fee("A$46,800"),
    description:
      "QUT's Master of Artificial Intelligence is an ACS-accredited degree in Brisbane for graduates who want to design and deploy AI responsibly. It starts with programming fundamentals, web development with databases and systems design, then moves on to machine learning (including generative AI and large language models), cyber security and governance, and human-centred software development. The AI specialisation covers trust and AI ethics, machine learning for natural language processing and advanced machine learning applications. Students graduate with a portfolio of work, and the program is led by Professor Richi Nayak, head of QUT's Advanced Data Science and Machine Learning Research Group.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/master-of-artificial-intelligence",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Artificial Intelligence (QUT course code IN28, CRICOS 117578H)",
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "IN28",
        "117578H",
        "for the 2-year program, a recognised bachelor degree (or higher) in any discipline with a GPA of at least 4.00 on QUT's 7-point scale. For the 1.5-year program, a recognised bachelor degree in information technology with a GPA of at least 4.00, or a bachelor degree in another discipline with a GPA of at least 4.00 followed by three years of full-time (or equivalent) professional IT work experience. QUT automatically assesses eligible applicants for the shorter program."
      ),
      ENGLISH_STD,
      "Professional recognition: accredited by the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Cyber Security",
    slug: "qut-master-cyber-security",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Cybersecurity",
    duration: "2 years full-time (192 credit points)",
    language: "English",
    tuitionNote: fee("A$46,800"),
    description:
      "QUT's Master of Cyber Security is an ACS-accredited degree in Brisbane for recent graduates and IT professionals moving into security. It begins with programming fundamentals, web development with databases and the parts of digital information systems, then covers cyber security governance, information security management, the software development life cycle and human-centred design of secure systems. The specialisation adds computer networks and security and the human factors behind cyber risk, with electives such as applied cryptography, blockchain technology and ethical hacking. Students finish with a significant industry project or industry research experience and a portfolio of work.",
    officialProgramUrl: "https://www.qut.edu.au/courses/master-of-cyber-security",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Cyber Security (QUT course code IN29, CRICOS 117577J)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "IN29",
        "117577J",
        "for the 2-year program, a recognised bachelor degree (or higher) in any discipline with a GPA of at least 4.00 on QUT's 7-point scale. For the 1.5-year program, a recognised bachelor degree in information technology with a GPA of at least 4.00, or a bachelor degree in another discipline with a GPA of at least 4.00 followed by three years of full-time (or equivalent) professional IT work experience. QUT automatically assesses eligible applicants for the shorter program."
      ),
      ENGLISH_STD,
      "Professional recognition: accredited by the Australian Computer Society (ACS)",
    ],
  },

  {
    name: "Professional Accounting",
    slug: "qut-master-professional-accounting",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Accounting",
    duration: "2 years full-time (192 credit points); 1 or 1.5 years with relevant prior study",
    language: "English",
    tuitionNote: fee("A$51,500"),
    description:
      "QUT's Master of Professional Accounting prepares graduates from any field for accounting careers, and meets the accreditation requirements of CPA Australia, CA ANZ and the Institute of Public Accountants. Students learn accounting principles and digital practice, including generative AI, under Australian standards equivalent to IFRS, covering transaction recording, assets, liabilities, business structures and cash flow analysis. Tax law gets strong attention, from partnerships, trusts and companies to GST and fringe benefits tax. Students use Xero and can earn Xero certification, and a final capstone has small groups solve a real problem for an industry partner client.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/master-of-professional-accounting",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Professional Accounting (QUT course code BS13, CRICOS 120798C)",
    workIntegrated: true,
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "BS13",
        "120798C",
        "for the 2-year program, a recognised completed bachelor degree (or higher) in any discipline with a GPA of at least 4.00 on QUT's 7-point scale. A 1.5-year program is open to holders of a business (or related) bachelor degree with a GPA of at least 4.00, or graduates of QUT's BS36 Graduate Certificate in Digital Business and Innovation. A 1-year program requires both a relevant business degree and BS36 completed in the Accounting and Finance stream. QUT automatically assesses applicants for the shorter programs."
      ),
      ENGLISH_STD,
      "Professional recognition: meets the accreditation requirements of CPA Australia, Chartered Accountants Australia and New Zealand (CA ANZ) and the Institute of Public Accountants (IPA)",
    ],
  },

  {
    name: "Business",
    slug: "qut-master-business",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Business",
    duration: "2 years full-time (192 credit points); 1 or 1.5 years with relevant prior study",
    language: "English",
    tuitionNote: fee("A$51,500"),
    description:
      "QUT's Master of Business is a specialist postgraduate business degree from a QUT Business School with triple international accreditation. Students choose a major in Financial Analytics and Technology, Global Business, Human Resource Management, Management, Innovation and Analytics, or Marketing Strategy. Teaching is practical and industry-connected, with academics and industry leaders bringing real-world cases into class and work-integrated learning on offer. The Global Business major, for example, covers multinational operations, cross-cultural leadership and sustainable global supply chains. Graduates of any field take the two-year program, while business graduates can finish in 1.5 years.",
    officialProgramUrl: "https://www.qut.edu.au/courses/master-of-business",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Business (QUT course code BS12, CRICOS 085448J)",
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "BS12",
        "085448J",
        "for the 2-year program, a recognised completed bachelor degree (or higher) in any discipline with a GPA of at least 4.00 on QUT's 7-point scale. A 1.5-year program is open to holders of a business (or related) bachelor degree with a GPA of at least 4.00, or graduates of QUT's BS36 Graduate Certificate in Digital Business and Innovation. A 1-year program requires both a relevant business degree and BS36 completed in the Business stream. QUT automatically assesses applicants for the shorter programs."
      ),
      ENGLISH_STD,
    ],
  },

  {
    name: "Professional Engineering",
    slug: "qut-master-professional-engineering",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Engineering",
    duration: "1.5 to 2 years full-time (192 credit points for the 2-year program)",
    language: "English",
    tuitionNote: fee("A$51,100"),
    description:
      "QUT's Master of Professional Engineering is an Engineers Australia-accredited degree for engineering graduates who want advanced skills in their discipline, with recognition in other Washington Accord countries. Students choose from seven majors across civil engineering (Civil, Civil and Construction, Civil with Management), electrical engineering (Electrical, Electrical with Management) and mechanical engineering (Mechanical, Mechanical with Management). The course mixes advanced technical study with sustainability, ethics, evidence-based practice and management skills for engineering leaders. Holders of a four-year engineering degree in the matching discipline can finish in 1.5 years, and three-year graduates take two years.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/master-of-professional-engineering",
    campus: "Gardens Point campus, Brisbane",
    programType: "Full-time, on campus",
    degree: "Master of Professional Engineering (QUT course code EN55, CRICOS 096754G)",
    intake: INTAKE_FEB_JUL,
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "EN55",
        "096754G",
        "a completed recognised engineering degree in the discipline of your chosen major (for example civil engineering for the Civil majors) with a GPA of at least 4.00 on QUT's 7-point scale. A four-year full-time bachelor degree leads to the 1.5-year program. A three-year full-time engineering or engineering technology degree leads to the 2-year program."
      ),
      ENGLISH_STD,
      "Professional recognition: accredited by Engineers Australia (a Washington Accord signatory)",
    ],
  },

  {
    name: "Teaching (Secondary)",
    slug: "qut-master-teaching-secondary",
    level: "Master",
    universitySlug: "queensland-university-of-technology",
    universityName: "Queensland University of Technology",
    country: "Australia",
    field: "Education",
    duration: "2 years full-time (192 credit points)",
    language: "English",
    tuitionNote: fee("A$39,500"),
    description:
      "QUT's Master of Teaching (Secondary) qualifies graduates of a three- or four-year bachelor degree to teach high school, and meets the professional standards of AITSL and the Queensland College of Teachers. Students prepare to teach two areas chosen from about twenty, including business and accounting, digital solutions, engineering, English, health and physical education, mathematics, biology, chemistry, physics, psychology, geography, history, music and visual arts. The degree includes 60 days (420 hours) of supervised placements in real school classrooms, and students can choose where to complete them. Graduates can apply for teacher registration in Australia.",
    officialProgramUrl:
      "https://www.qut.edu.au/courses/master-of-teaching-secondary",
    campus: "Kelvin Grove campus, Brisbane",
    programType: "Full-time, on campus with school placements",
    degree: "Master of Teaching (Secondary) (QUT course code EU50, CRICOS 084583K)",
    workIntegrated: true,
    intake: "February (Semester 1) only",
    applicationDeadline: `${APPLY_PG} International entry to this course is in February only, and offers cannot be deferred.`,
    admissionRequirements: [
      pgAcademic(
        "EU50",
        "084583K",
        "a completed recognised three- or four-year bachelor degree (equivalent overseas qualifications are considered). Selection is based on your prior degree results."
      ),
      "Teaching area prerequisites: your previous degree must include enough study in your first teaching area (usually three quarters of a year of full-time study, or a relevant bachelor degree) and at least half a year in your second teaching area. The exact rules for each area are on the course page",
      "English (higher standard for teaching, test taken within two years before the course starts): IELTS Academic 7.5 overall with at least 8.0 in listening and speaking and 7.0 in reading and writing; or PTE Academic 73 overall (listening 79, reading 66, writing 69, speaking 88); or TOEFL iBT 105 overall (listening 28, reading 24, writing 27, speaking 28); or Cambridge C1 Advanced 191 at the subscores on the course page. Needed if your previous study was not in Australia, Canada, New Zealand, Ireland, the UK or the USA, or was not taught in English",
      "Professional recognition: meets the professional standards of the Australian Institute for Teaching and School Leadership (AITSL) and the Queensland College of Teachers; graduates can apply for teacher registration (registering bodies may set their own English requirements)",
    ],
  },
];
