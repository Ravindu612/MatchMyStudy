import type { Program } from "@/data/programs";

// University of Adelaide programs for international students starting in 2027.
// IMPORTANT: the University of Adelaide and the University of South Australia (UniSA) merged into the new
// Adelaide University, which opened on 1 January 2026 and has taught all new students since Semester 1 2026.
// New international students now apply to, enrol in and graduate from Adelaide University, and adelaide.edu.au
// is the Adelaide University website. These records use Adelaide University's current degree pages.
// Sources (checked October 18, 2026): Adelaide University 2027 degree pages viewed as an international student
// (adelaide.edu.au/study/degrees/2027/<degree>/int/: program code, CRICOS code, campus, duration, start months,
// 2027 indicative annual international fee, prerequisites, assumed knowledge, admission criteria, minimum scores
// for international qualifications, English requirements, accreditation), the Adelaide University 2027
// International Student Guide (PDF, July 2026), the 2027 academic calendar, the international finances page
// (fee basis and deposit), and Adelaide University's "When is the last date to apply?" and international
// undergraduate application FAQs.
// Fees are 2027 indicative annual amounts in Australian dollars for a standard full-time load of 48 units;
// minimum scores do not guarantee an offer.

const FEE_EXTRAS =
  "Adelaide University bases this on a standard full-time load of 48 units a year and charges by study period according to your enrolled load. Fees are reviewed every year and fees for continuing students may increase. A deposit of 50% of the annual fee is payable when you accept your offer. Overseas Student Health Cover (required for the student visa), other non-tuition costs listed by the university and living costs are extra.";

const fee = (amount: string) =>
  `International: ${amount} a year (indicative annual fee for international students starting in 2027, as shown on Adelaide University's 2027 international degree page). ${FEE_EXTRAS}`;

const DATES_2027 =
  "In the 2027 academic calendar, Semester 1 teaching starts 22 February 2027 (orientation from 8 February) and Semester 2 teaching starts 2 August 2027 (orientation from 26 July).";

const APPLY_UG = `Adelaide University has no fixed application closing date for international students in most programs, but advises applying at least three months before the start date: international admissions can take 4-6 weeks to assess an application, and you also need time to get a student visa. ${DATES_2027} Apply online through the International Application System or through an official Adelaide University education agent. Citizens of the Middle East, North Africa, Sub-Saharan Africa, South Asia (Bangladesh, India, Maldives, Nepal, Pakistan and Sri Lanka), the Philippines and Latin America must apply through an agent. A non-refundable A$150 application fee applies to each application. International students completing Year 12 (SACE or equivalent), or the IB Diploma in Australia, apply through SATAC instead.`;

const APPLY_PG = `Adelaide University has no fixed application closing date for international students in most programs, but advises applying at least three months before the start date: international admissions can take 4-6 weeks to assess an application, and you also need time to get a student visa. ${DATES_2027} Apply online through the International Application System or through an official Adelaide University education agent (depending on your country of citizenship, you may have to use an agent). A non-refundable A$150 application fee applies to each application.`;

const ug = (code: string, cricos: string) =>
  `Adelaide University program code ${code}; CRICOS ${cricos}. Academic entry: a completed secondary qualification equivalent to the South Australian Certificate of Education (SACE), a Certificate IV (AQF level 4) or higher from a registered training organisation, or at least six months of full-time study in a higher education award program. If there are more eligible applicants than places, selection is competitive`;

const scores = (atar: string, ib: string, cbse: string, stateBoard: string) =>
  `Minimum scores listed for international applicants on the 2027 degree page: ATAR ${atar}, International Baccalaureate ${ib}, India CBSE/CISCE ${cbse} or Indian state board ${stateBoard}. Equivalents for other countries are listed on the degree page, and meeting a minimum does not guarantee a place`;

const ENGLISH_65 =
  "English: IELTS 6.5 overall with at least 6.0 in reading, writing, listening and speaking, achieved within two years before admission. Other accepted tests and alternatives (such as previous study in English, with certified evidence) are on Adelaide University's equivalent English qualifications page";

const pgAcademic = (code: string, cricos: string, rule: string) =>
  `Adelaide University program code ${code}; CRICOS ${cricos}. Academic entry: ${rule} If there are more eligible applicants than places, selection is competitive`;

export const universityOfAdelaidePrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "adelaide-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Computer Science",
    duration: "3 years full-time (144 units)",
    language: "English",
    tuitionNote: fee("A$55,400"),
    description:
      "The Bachelor of Computer Science is now taught by Adelaide University, the institution formed in 2026 from the University of Adelaide and UniSA. First year covers problem solving and programming, structured data, IT systems, security foundations, system requirements and maths, followed by data structures and algorithms, operating systems, theory of computation, distributed computing and the ethical and legal side of technology. Students can major in Artificial Intelligence and Machine Learning, Human-Centred Computing or Programming Languages, or take a general major. A two-part ICT capstone project has teams building something for a real client. Graduates go into roles such as software engineer, backend or frontend developer, API developer and cloud engineer.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-computer-science/int/",
    campus: "Adelaide City Campus and Mawson Lakes (some cross-campus study may be needed)",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Computer Science (Adelaide University, program code BCOMP, CRICOS 115685K)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("BCOMP", "115685K"),
      scores("75", "26", "70", "80"),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: provisionally accredited at professional level by the Australian Computer Society (ACS); subject to full accreditation, graduates are eligible for ACS membership and recognised internationally through the Seoul Accord",
    ],
  },

  {
    name: "Information Technology",
    slug: "adelaide-information-technology",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Information Technology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: fee("A$52,500"),
    description:
      "Adelaide University's Bachelor of Information Technology (the University of Adelaide and UniSA merged into Adelaide University in 2026) starts with programming, IT systems, system requirements and security foundations shared with its other IT degrees, so students can switch majors with credit. They can then major in Data Analytics, Games Development, Networking and Cyber Security or Software Development, or mix courses across those areas. In third year an ICT capstone project is done with industry or professional clients, and a placement with an industry partner is possible. Graduates work in software development, network administration, games development and data analytics.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-information-technology/int/",
    campus: "Adelaide City Campus and Mawson Lakes (some cross-campus study may be needed)",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Information Technology (Adelaide University, program code BINFT, CRICOS 115719E)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("BINFT", "115719E"),
      scores("70", "25", "65", "75"),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: provisionally accredited at professional level by the Australian Computer Society (ACS); subject to full accreditation, graduates are eligible for ACS membership and recognised internationally through the Seoul Accord",
    ],
  },

  {
    name: "Software Engineering (Honours)",
    slug: "adelaide-software-engineering-honours",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Software Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: fee("A$57,100"),
    description:
      "This four-year honours degree is offered by Adelaide University, which replaced the University of Adelaide and UniSA in 2026. After a first year of programming, databases, networking and IT systems, students move into data structures, system design, agile development, DevOps, design patterns, secure software development, and cloud and concurrent programming, then system architecture, software quality assurance and scalable system design. The honours year centres on a project for a real industry client, along with an internship with a university industry partner. Graduates work as software engineers, full stack, web or cloud developers and UX designers, in tech companies, defence and other industries.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-software-engineering-honours/int/",
    campus: "Adelaide City Campus and Mawson Lakes (some cross-campus study may be needed)",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Software Engineering (Honours) (Adelaide University, program code HSOEN, CRICOS 115758J)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("HSOEN", "115758J"),
      scores("80", "28", "75", "85"),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: provisionally accredited by the Australian Computer Society (ACS, Seoul Accord) and, at professional engineer level, by Engineers Australia (Washington Accord). Engineers Australia assesses full accreditation after the first cohort graduates",
    ],
  },

  {
    name: "Engineering (Civil) (Honours)",
    slug: "adelaide-civil-engineering-honours",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Civil Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: fee("A$57,100"),
    description:
      "Adelaide University's Bachelor of Engineering (Civil) (Honours) (the University of Adelaide and UniSA became Adelaide University in 2026) covers structural, water, geotechnical and transportation engineering, with design projects on roads, bridges, tunnels, buildings and water systems. First-year engineering courses are common across specialisations, so students can switch with credit. The degree includes up to 12 weeks of professional work placement and, in the final year, an honours research project with industry representatives or academic researchers acting as clients. Graduates work in construction, transport, water resources, environmental, geotechnical and structural engineering, mining and urban development.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-engineering-civil-honours/int/",
    campus: "Adelaide City Campus and Mawson Lakes (some cross-campus study may be needed)",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Engineering (Civil) (Honours) (Adelaide University, program code HENCI, CRICOS 115699D)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("HENCI", "115699D"),
      scores("80", "28", "75", "85"),
      "Prerequisite: SACE Stage 2 Mathematical Methods (or equivalent). Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: provisionally accredited at professional engineer level by Engineers Australia, which assesses full accreditation after the first cohort graduates; subject to that, graduates are eligible for membership and recognised internationally through the Washington Accord",
    ],
  },

  {
    name: "Business",
    slug: "adelaide-business",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Business & Management",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: fee("A$52,500"),
    description:
      "The Bachelor of Business at Adelaide University (formed in 2026 when the University of Adelaide and UniSA merged) builds core knowledge in accounting, economics, people management, marketing, decision-making and corporate law, along with computing skills, negotiation and conflict management, and cross-cultural skills. Real-world projects and case studies run through the course, with community and industry engagement and work placements. Students can stay general or pick a major such as Digital Business, Human Resource Management, International Business, Innovation, Entrepreneurship and Strategy, Management, Marketing, Project Management, Real Estate, Sport Management, Procurement and Supply Chain Management, or Tourism, Events and Hospitality Management. Roles include business consultant, marketing, HR and project management.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-business/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Business (Adelaide University, program code BBUSI, CRICOS 115681C)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("BBUSI", "115681C"),
      scores("70", "25", "65", "75"),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
    ],
  },

  {
    name: "Commerce (Accounting)",
    slug: "adelaide-commerce-accounting",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Accounting",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: fee("A$52,200"),
    description:
      "Adelaide University's Bachelor of Commerce majoring in Accounting (the University of Adelaide and UniSA merged into Adelaide University in 2026) teaches financial, management and corporate accounting, auditing, taxation, financial statement analysis and accounting information systems, along with the ethical, social and environmental issues in the profession. Commerce core courses are shared with the other majors, and electives can come from business, management and languages. Across second and third year students complete more than 300 hours of work-integrated learning on placement with accounting professionals. The degree is accredited by CA ANZ and CPA Australia. Graduates work as management, tax, forensic or practising accountants, risk consultants and business advisers.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-commerce-accounting/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Commerce majoring in Accounting (Adelaide University, program code BCOMM, CRICOS 115684M)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("BCOMM", "115684M"),
      scores("80", "28", "75", "85"),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: accredited by Chartered Accountants Australia and New Zealand (CA ANZ) and CPA Australia; graduates are eligible for membership of these bodies",
    ],
  },

  {
    name: "Nursing",
    slug: "adelaide-nursing",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time",
    language: "English",
    tuitionNote: fee("A$48,600"),
    description:
      "The Bachelor of Nursing is taught by Adelaide University, which took over from the University of Adelaide and UniSA in 2026. It is a clinically focused degree with 880 hours of clinical placement, starting in first year, in metropolitan, regional and rural hospitals and health services across South Australia, plus practice in simulated hospital settings. Courses include human biology, mental health nursing, health of older people, of adults and of infants, children and adolescents, assessment and pharmacotherapeutics, and Aboriginal health. The degree is accredited by ANMAC and approved by the Nursing and Midwifery Board of Australia (NMBA), and graduates can apply to register as a Registered Nurse. Diploma of Nursing graduates registered with the NMBA receive a year of credit.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-nursing/int/",
    campus: "Adelaide City Campus, Mount Gambier or Whyalla",
    programType: "Full-time, on campus (some online study only where visa conditions allow; placements and some courses must be done in person)",
    degree: "Bachelor of Nursing (Adelaide University, program code BNURS, CRICOS 115738B)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      ug("BNURS", "115738B"),
      scores("70", "25", "65", "75"),
      "Prerequisites: none. Assumed knowledge: none. A quota applies to this degree",
      "English: IELTS 7.0 overall with at least 7.0 in reading, writing, listening and speaking, achieved within two years before admission. Applicants must also meet the Nursing and Midwifery Board of Australia's English Language Skills registration standard and complete a declaration on how they meet it",
      "On entry, all students must confirm they meet the Fitness to Practice in Clinical Placements requirements",
    ],
  },

  {
    name: "Pharmacy (Honours)",
    slug: "adelaide-pharmacy-honours",
    level: "Bachelor",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Pharmacy",
    duration: "4 years full-time",
    language: "English",
    tuitionNote: fee("A$54,300"),
    description:
      "Adelaide University's Bachelor of Pharmacy (Honours) (Adelaide University replaced the University of Adelaide and UniSA in 2026) builds a base in chemistry, human physiology and pharmaceutical science over the first two years. Later years cover managing common diseases, clinical decision-making, compounding and formulating medicines, quality use of medicines, clinical trials and international medicines regulation. Students train in the Pharmacy Practice Integrated Learning Suite and complete 12 weeks of placement in community and hospital pharmacies in the final year. The degree is accredited by the Australian Pharmacy Council, and graduates are eligible for registration with the Pharmacy Board of Australia. Pharmacists work in hospitals, community pharmacies, GP practices, aged care and industry.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/bachelor-of-pharmacy-honours/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Bachelor of Pharmacy (Honours) (Adelaide University, program code HPHAR, CRICOS 115744D)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2); the 2027 International Student Guide says the July start may be available to international students with credit, case by case",
    applicationDeadline: APPLY_UG,
    admissionRequirements: [
      "Adelaide University program code HPHAR; CRICOS 115744D. Academic entry: a completed secondary qualification equivalent to the South Australian Certificate of Education (SACE), a Diploma (AQF level 5) or higher from a registered training organisation, or at least six months of full-time study at undergraduate diploma level (AQF level 5) or higher. If there are more eligible applicants than places, selection is competitive",
      scores("85", "30", "80", "90"),
      "Prerequisite: SACE Stage 2 Biology, Chemistry or Physics (or equivalent). Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: accredited by the Australian Pharmacy Council; graduates are eligible for registration with the Pharmacy Board of Australia",
    ],
  },

  {
    name: "Data Science",
    slug: "adelaide-data-science",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Data Science",
    duration: "2 years full-time",
    language: "English",
    tuitionNote: fee("A$57,100"),
    description:
      "Adelaide University's Master of Data Science (the University of Adelaide and UniSA merged into Adelaide University in 2026) covers the whole data science pipeline, from collecting data to analysing, visualising and evaluating it. First year builds data and statistics fundamentals, and second year develops analytical and machine learning skills, with courses on AI integration and leadership in data science and an option to specialise in artificial intelligence. In the final year students design and deliver a project for an industry client. The degree is provisionally accredited by the Australian Computer Society. Careers include data scientist, data engineer, machine learning engineer, statistician, research scientist and data modeller.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-data-science/int/",
    campus: "Adelaide City Campus and Mawson Lakes (some cross-campus study may be needed)",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Master of Data Science (Adelaide University, program code MADSC, CRICOS 115904D)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "MADSC",
        "115904D",
        "a completed bachelor (AQF level 7) or bachelor honours (AQF level 8) degree or equivalent from a recognised higher education institution, or a completed nested or related graduate certificate (AQF level 8) or higher. A GPA equivalent to at least 4.5 on Adelaide University's 7-point scale is required."
      ),
      "Prerequisites: none. Assumed knowledge: pre-calculus mathematics, equivalent to Adelaide University's MATH1015 Essential Mathematics",
      ENGLISH_65,
      "Professional recognition: provisionally accredited at professional level by the Australian Computer Society (ACS), with international recognition through the Seoul Accord subject to full accreditation",
    ],
  },

  {
    name: "Artificial Intelligence and Machine Learning",
    slug: "adelaide-artificial-intelligence-machine-learning",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Artificial Intelligence",
    duration: "2 years full-time",
    language: "English",
    tuitionNote: fee("A$57,100"),
    description:
      "The Master of Artificial Intelligence and Machine Learning is taught by Adelaide University, formed in 2026 from the University of Adelaide and UniSA. First year covers AI and machine learning fundamentals, programming for AI, statistical foundations and the ethics of AI, along with project management and leadership. Students then move to advanced machine learning, deep learning and applied AI, and in second year to generative AI, with electives such as computer vision and multi-modal machine learning, big data technologies, and text and social media analytics. An industry capstone project ends the degree. It is provisionally accredited by the Australian Computer Society. Graduates aim for roles such as machine learning engineer, AI engineer, data scientist and NLP specialist.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-artificial-intelligence-and-machine-learning/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Master of Artificial Intelligence and Machine Learning (Adelaide University, program code MAAIM, CRICOS 115898H)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "MAAIM",
        "115898H",
        "a completed bachelor (AQF level 7) or bachelor honours (AQF level 8) degree or equivalent in computer science, computer systems engineering or software engineering from a recognised higher education institution, or a completed nested or related graduate certificate (AQF level 8) or higher in computer science. A GPA equivalent to at least 4.5 on Adelaide University's 7-point scale is required."
      ),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: provisionally accredited at professional level by the Australian Computer Society (ACS), with international recognition through the Seoul Accord subject to full accreditation",
    ],
  },

  {
    name: "Computer Science",
    slug: "adelaide-master-computer-science",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Computer Science",
    duration: "2 years full-time",
    language: "English",
    tuitionNote: fee("A$57,100"),
    description:
      "Adelaide University's Master of Computer Science (the University of Adelaide and UniSA merged into Adelaide University in 2026) is for graduates who already studied computing. Core courses include specialised programming, advanced algorithmic problem solving, evolutionary computation, computer networks and systems modelling, and designing and building large software systems. Students choose electives in computer security, data and information management, or networks, many of which cover mobile and wireless systems. Every student proposes and completes a research project, then presents it publicly and writes a report. The degree is provisionally accredited by the Australian Computer Society. Careers include computer scientist, AI specialist, defence scientist, systems programmer and IT manager.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-computer-science/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Master of Computer Science (Adelaide University, program code MACSC, CRICOS 117267A)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "MACSC",
        "117267A",
        "a completed bachelor (AQF level 7) or bachelor honours (AQF level 8) degree or equivalent in computer science, computer systems engineering or software engineering from a recognised higher education institution, or a completed graduate diploma (AQF level 8) or higher in computer science. A GPA equivalent to at least 4.5 on Adelaide University's 7-point scale is required."
      ),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: provisionally accredited at professional level by the Australian Computer Society (ACS), with international recognition through the Seoul Accord subject to full accreditation",
    ],
  },

  {
    name: "Business Administration (MBA)",
    slug: "adelaide-mba",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Business & Management",
    duration: "1.5 years full-time",
    language: "English",
    tuitionNote: fee("A$57,100"),
    description:
      "Adelaide University's 1.5-year MBA (the University of Adelaide and UniSA became Adelaide University in 2026) is designed for experienced professionals aiming for senior management and leadership roles. It has seven core courses, including a capstone industry project, covering finance, accounting, sustainability, leadership and marketing, plus five electives in areas such as entrepreneurship, negotiation and behavioural economics. In the last six months students can specialise in Finance, Marketing, Human Resource Management or Sustainable Futures. The program includes the Australian Institute of Company Directors (AICD) Company Directors Course and pairs students with an experienced business mentor through its Executive Partners Program.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-business-administration/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (some online study only where visa conditions allow)",
    degree: "Master of Business Administration (Adelaide University, program code MABUA, CRICOS 115899G)",
    intake: "January, April, June or September (start months listed on the 2027 international degree page)",
    applicationDeadline: `${APPLY_PG} The MBA does not follow the semester calendar: its 2027 international degree page lists January, April, June and September starts.`,
    admissionRequirements: [
      "Adelaide University program code MABUA; CRICOS 115899G. Direct entry: a completed bachelor's degree or equivalent and at least three years of full-time managerial experience, shown in a detailed CV (for example staff supervision, budget responsibility, project leadership, business ownership or strategic decision-making). The Program Director may ask for an interview or more evidence",
      "Applicants without a bachelor's degree but with at least seven years of full-time managerial experience may be considered for the Graduate Certificate in Business Administration, which can lead to the MBA",
      "English: IELTS 7.0 overall with at least 6.0 in reading, writing, listening and speaking, achieved within two years before admission. Other accepted tests are on Adelaide University's equivalent English qualifications page",
    ],
  },

  {
    name: "Professional Accounting",
    slug: "adelaide-professional-accounting",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Accounting",
    duration: "1.5 years full-time",
    language: "English",
    tuitionNote: fee("A$54,300"),
    description:
      "The Master of Professional Accounting at Adelaide University (the institution formed in 2026 from the University of Adelaide and UniSA) is a conversion degree for graduates from other fields who want to become accountants. In the first year students cover analytical tools for business, economics, accounting, finance principles, accounting information systems, corporate law, management accounting and financial reporting. The final six months consolidate financial accounting, auditing and assurance, with an elective such as sustainability accounting. Delivery is hybrid, mixing on-campus and online study. The degree is accredited by CA ANZ and CPA Australia, so graduates can enter their professional programs, and careers include auditing, tax, business advisory and management accounting.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-professional-accounting/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus with some online study (part-time study is not available to international students)",
    degree: "Master of Professional Accounting (Adelaide University, program code MAPAC, CRICOS 115941K)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "MAPAC",
        "115941K",
        "a completed bachelor (AQF level 7) or bachelor honours (AQF level 8) degree or equivalent from a recognised higher education institution, or a completed nested or related graduate certificate (AQF level 8) or higher. A GPA equivalent to at least 4.5 on Adelaide University's 7-point scale is required."
      ),
      "Prerequisites: none",
      ENGLISH_65,
      "Professional recognition: accredited by Chartered Accountants Australia and New Zealand (CA ANZ) and CPA Australia; graduates can enter the professional qualification pathways of these bodies",
    ],
  },

  {
    name: "Public Health",
    slug: "adelaide-public-health",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Health Sciences",
    duration: "2 years full-time",
    language: "English",
    tuitionNote: fee("A$52,500"),
    description:
      "Adelaide University's Master of Public Health (Adelaide University succeeded the University of Adelaide and UniSA in 2026) focuses on the health of whole populations rather than individual treatment. Core courses cover epidemiology, biostatistics, global public health, environmental and occupational health, health promotion, evaluation and qualitative research methods. In second year students choose one of four pathways: a research dissertation, a research thesis, a professional practice placement or an applied professional skills project. A mentoring program links students with alumni and public health professionals, and applicants with relevant prior study may qualify for a shorter program. Graduates work as policy advisers, research and clinical studies coordinators, community development officers and data analysts.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-public-health/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Master of Public Health (Adelaide University, program code MAPUH, CRICOS 115956C)",
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "MAPUH",
        "115956C",
        "a completed bachelor (AQF level 7) degree or equivalent from a recognised higher education institution with a competitive GPA (equivalent to at least 5.0 on Adelaide University's 7-point scale), or at least seven years of public health-related professional experience."
      ),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
    ],
  },

  {
    name: "Project Management",
    slug: "adelaide-project-management",
    level: "Master",
    universitySlug: "university-of-adelaide",
    universityName: "University of Adelaide",
    country: "Australia",
    field: "Business & Management",
    duration: "2 years full-time",
    language: "English",
    tuitionNote: fee("A$52,500"),
    description:
      "The Master of Project Management is taught by Adelaide University, formed in 2026 from the University of Adelaide and UniSA. First year builds project management foundations: theory and technical principles, risk management, leadership, ethics and sustainability. Second year can be tailored with courses on portfolio and program management, enterprise transformation and innovation, project governance and complex decision-making, or other advanced electives. Students finish with an industry project on a topic of their choice plus an internship, career development or research skills course. The degree is accredited by PMI's Global Accreditation Center and endorsed by the Australian Institute of Project Management (AIPM). Graduates work as project and program managers, risk managers and project consultants.",
    officialProgramUrl:
      "https://adelaide.edu.au/study/degrees/2027/master-of-project-management/int/",
    campus: "Adelaide City Campus",
    programType: "Full-time, on campus (part-time study is not available to international students)",
    degree: "Master of Project Management (Adelaide University, program code MAPRM, CRICOS 115952G)",
    workIntegrated: true,
    intake: "February (Semester 1), July (Semester 2)",
    applicationDeadline: APPLY_PG,
    admissionRequirements: [
      pgAcademic(
        "MAPRM",
        "115952G",
        "a completed bachelor (AQF level 7) or bachelor honours (AQF level 8) degree or equivalent from a recognised higher education institution, or a completed nested or related graduate certificate (AQF level 8) or higher."
      ),
      "Prerequisites: none. Assumed knowledge: none",
      ENGLISH_65,
      "Professional recognition: accredited by the Project Management Institute's (PMI) Global Accreditation Center and endorsed by the Australian Institute of Project Management (AIPM); students who complete it during the endorsement period can apply for AIPM's Certified Practising Project Practitioner (CPPP) certification through automatic recognition, subject to AIPM's requirements",
    ],
  },
];
