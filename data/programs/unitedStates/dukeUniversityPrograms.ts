import type { Program } from "../../programs";

// Duke University: 8 undergraduate majors for fall 2027 first-year entry (Trinity College of Arts & Sciences and the
// Pratt School of Engineering) and 7 full-time graduate programmes on the Durham, North Carolina campus. Sources
// (viewed 13 November 2026): Duke Undergraduate Admissions first-year requirements, deadlines, testing, English
// proficiency, international and FAQ pages (admissions.duke.edu/apply/ and /resources/), the Karsh Office of
// Undergraduate Financial Support 2026-27 cost of attendance and awarding policy pages (financialaid.duke.edu/how-aid-
// calculated/cost-attendance/, /forms-resources/awarding-policy/, /international-students/), the Bursar's 2026-27
// undergraduate tuition and fees schedule (finance.duke.edu/bursar/TuitionFees/tuition/), the Karsh International
// Scholars page (ousf.duke.edu/merit-scholarships/karsh-international-scholars-program/), the 2026-27 Undergraduate
// Instruction Bulletin programme pages (undergraduate.bulletins.duke.edu: U-CPS-BS, U-STA-BS, U-BIO-BS, U-PPS-AB,
// U-ECE-BSE, U-ME-BSE, U-BME-BSE), the Economics department B.S. page (econ.duke.edu/undergraduate/bs-economics), the
// Computer Science B.S. page (cs.duke.edu/undergraduate/degrees/BS), Pratt general BSE requirements
// (pratt.duke.edu/academics/undergrad/requirements/), Trinity's Trinity-Pratt transfer policy and the Office of
// Undergraduate Education article on major declaration; and for graduate study: The Graduate School 2026-27 tuition
// schedule, cost to attend, application instructions, English proficiency and fall 2027 deadline pages
// (gradschool.duke.edu/financial-support/..., /admissions/...), the Graduate School M.S. in Computer Science and MIDS
// programme pages, the Computer Science MS requirements page (cs.duke.edu/graduate/ms/ms-req), Duke MIDS admissions
// FAQ and tuition pages (datascience.duke.edu/admissions/...), Duke Engineering Master's tuition, deadlines and
// application instructions (masters.pratt.duke.edu/admissions/tuition-financial-aid/, /apply/deadlines/,
// /apply/instructions/, /management/), the 2026-27 Pratt Professional Programs Bulletin MEng ECE page
// (prattprofessional.bulletins.duke.edu/allprograms/e-egr/ece), Duke ECE master's page (ece.duke.edu/academics/masters/),
// Fuqua School of Business Daytime MBA and Duke MMS pages on dates, tuition and costs, application instructions,
// curriculum and English proficiency (fuqua.duke.edu/programs/daytime-mba/..., /programs/duke-mms/tuition-costs,
// /programs/mms-foundations-of-business/..., /resources/mba-english-proficiency-requirements), and Sanford School of
// Public Policy MPP programme, cost of attendance and application process pages (sanford.duke.edu/academics/masters-
// programs/master-public-policy/, /admissions/mpp-admissions/mpp-estimated-cost-attendance/, /admissions/masters-
// program-application-process/). Costs are in US dollars. Duke is private and charges the same tuition to
// international and US students in each programme.

const UNIVERSITY = {
  universitySlug: "duke-university",
  universityName: "Duke University",
  country: "United States",
  language: "English",
  campus: "Durham, North Carolina",
  programType: "Full-time",
} as const;

// Karsh Office 2026-27 first-year COA: tuition 73,740, estimated fees 3,019, Pratt engineering dues 60, double room
// 11,560, food 10,469 (billed 98,788-98,848); books 536, personal 3,274, domestic transport 582-1,318; total
// 103,180-103,975. Bursar 2026-27: tuition 36,870 per semester; student medical insurance 4,290 (fall term only),
// which is not itemised in the Karsh COA table.
const UG_TUITION =
  "2026-27: Duke charges the same undergraduate tuition in Trinity College and the Pratt School of Engineering, US$36,870 a semester or US$73,740 for the academic year. The Karsh Office of Undergraduate Financial Support puts the 2026-27 cost of attendance for a first-year student at US$103,180 to US$103,975 before aid. The billed part is US$98,788 to US$98,848: tuition, about US$3,019 of required fees, US$60 of engineering dues for Pratt students only, US$11,560 for a double room and US$10,469 for food. Duke adds unbilled estimates of US$536 for books and supplies, US$3,274 for personal expenses and US$582 to US$1,318 for travel within the US (international students should budget their own airfare). The Bursar also lists Duke student medical insurance at US$4,290 for 2026-27, charged in the fall term, which is not itemised in that cost of attendance, so check Duke's student health insurance rules when budgeting. Financial aid for international students: Duke meets full demonstrated need, but it expects to enrol only 20 to 25 international students a year on university need-based aid. You must tick the financial aid interest box on your original first-year application, which places you in a separate and more competitive pool (Duke says the admit rate for aid-seeking foreign citizens is usually under half the overall rate); applicants admitted without aid interest can never apply for aid later, and international transfer students get no need-based or merit aid. Aid for international students is awarded for four years and renewed automatically, and the Karsh International Scholarship covers full need plus summer funding for some aided international students. All applicants are automatically considered for Duke's small number of merit scholarships. 2027-28 rates had not been published when we checked";

const UG_INTAKE = "Fall semester only (fall 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry (the 2026-27 admission cycle), through the Common Application or QuestBridge, with a non-refundable US$85 application fee or a fee waiver request. Early Decision (binding) closed on 2 November 2026, with first-quarter grades due by 20 November and decisions in mid-December, so it had passed when we checked. Regular Decision: submit the application, school report, counsellor and teacher recommendations and any test scores by 4 January 2027 (the last test dates Duke can use are 5 December 2026 for the SAT and 12 December 2026 for the ACT). Midyear grades are due by 15 February 2027 and decisions come in late March or early April 2027. International students applying for aid must submit the CSS Profile and documents by 1 February 2027 for Regular Decision. Duke reported admitting 13.7% of Early Decision and 3.7% of Regular Decision applicants in 2025-26";

const UG_TESTING =
  "Testing: optional. Duke is test-optional for first-year applicants in the 2026-27 cycle, including international students and merit scholarship candidates, and students who apply without SAT or ACT scores are not disadvantaged. If you choose to have scores considered you can self-report them, and official reports are needed only if you enrol. Duke takes your highest section scores across SAT sittings and builds a new ACT composite from your best sections (send your ACT superscore and highest section scores); the ACT science section is optional but considered if you send it, especially for STEM applicants. You can switch from not sending scores to sending them until 21 November 2026 (Early Decision) or 13 February 2027 (Regular Decision). AP and IB results can be self-reported. Duke CEEB code: 5156";

const UG_ENGLISH =
  "English proficiency: Duke recommends, but does not require, an English test for non-native speakers or students not in an English-medium curriculum, and it has no preference between tests. The scores it expects are TOEFL iBT 100 (tests before 21 January 2026) or 5.0 on the new scale (tests on or after 21 January 2026), IELTS 7, Duolingo English Test 130, PTE Academic 70, or Cambridge C1 Advanced/C2 Proficiency 180; your highest score is used. Duke suggests sending Duolingo results officially because that is free, and other scores can be self-reported. Transcripts not in English must be translated by an official service, an EducationUSA adviser or a school official and sent with the originals";

const UG_ACADEMIC = (school: string) =>
  `Application (the same for international and US applicants): you apply to either Trinity College of Arts & Sciences or the Pratt School of Engineering, not to a major, and list preliminary interests; Duke says neither school is easier to enter. This major is in ${school}. Materials: the Common Application with Duke's two required short essays (Why Duke and Communities, 250 words each) plus an optional one, official transcripts sent by your school, the school report with a counsellor recommendation and two teacher recommendations from major academic subjects (an optional personal recommendation is allowed). Duke recommends four years of English and at least three years each of mathematics, natural science, a world language and social studies, with five academic courses a year and advanced work where available. Alumni or InitialView interviews are optional and not every applicant is offered one. After one semester, students may apply to transfer between Trinity and Pratt`;

const UG_PRATT =
  "Pratt applicants must have taken calculus, physics is strongly recommended, and at least one teacher recommendation should come from a mathematics or science teacher";

const UG_TRINITY_MAJOR = (major: string, extra: string) =>
  `Admission route: there is no separate admission to ${major}. Trinity students declare a major after their first year, most in the spring of their sophomore year (the deadline is the Friday before spring break). ${extra}`;

const UG_PRATT_MAJOR = (major: string, extra: string) =>
  `Admission route: you are admitted to the Pratt School of Engineering and declare ${major} in the summer after your first year. ${UG_PRATT}. ${extra}`;

// The Graduate School 2026-27: master's tuition 34,940 per fall/spring semester, 4,055 per unit part-time/continuing;
// international master's COA (9 months) 101,780 = tuition/fees 75,814 (tuition 69,880, health fee 1,048, transcript
// 120, services 28, recreation 408, activity 40, medical insurance 4,290) + books 676 + housing 14,220 + food 4,428 +
// transport 2,142 + miscellaneous 4,500.
const GS_COSTS =
  "The Graduate School's 2026-27 estimated cost of attendance for an international master's student is US$101,780 for the nine-month academic year: US$69,880 tuition, US$5,934 of fees and insurance (including the US$4,290 Duke student medical insurance, a US$1,048 health fee and a one-time US$120 transcript fee), US$676 for books and supplies, US$14,220 housing, US$4,428 food, US$2,142 transport and US$4,500 miscellaneous. Students bringing a spouse must show an extra US$12,645 (US$6,323 per child) for visa documents. The Graduate School says tuition typically rises by no more than 4% a year, and 2027-28 rates had not been published when we checked";

const GS_ENGLISH =
  "English proficiency (Duke Graduate School): if your first language is not English, send an official TOEFL, IELTS Academic or Duolingo English Test score (Duolingo must include subscores); the at-home versions are accepted. The Graduate School generally looks for at least TOEFL iBT 90 (tests before 21 January 2026) or 5 (tests from that date), IELTS 7.0 or Duolingo 125, and says admitted students usually score higher. For fall 2027 the score must be dated 1 August 2024 or later. You may be exempt if, before the programme starts, you have studied full-time for at least two years at a university where English is the sole language of instruction in a country where English is the primary language; waivers are only confirmed after an offer. All admitted international students whose first language is not English take English Language Support Program placement tests on arrival. Send TOEFL scores to institution code 5156";

const GS_MINIMUM =
  "Duke Graduate School minimums: a US bachelor's degree or an equivalent from an accredited institution (applicants without a four-year degree are advised to get a WES or ECE evaluation), unofficial transcripts with the application and official ones if admitted, three letters of recommendation, a statement of purpose, a résumé and the non-refundable US$105 application fee. Admitted students' degrees are verified through third-party services";

// Duke Engineering Master's 2026-27: MEng campus tuition 35,680 per semester; 30 credits over three semesters =
// 107,040; COA one year 103,260 (fall 52,430, spring 50,830). MEM campus tuition 36,225 per semester; 8 courses =
// 72,450; COA one year 104,350.
const PRATT_ENGLISH =
  "English proficiency (Duke Engineering master's): if English is not your first language you may need an official test score; there is no minimum score. The Duolingo English Test is preferred, and TOEFL (code 5156) or IELTS are accepted, but admitted students who are not exempt must submit a Duolingo score by 15 June for English placement (at their own cost if they applied with another test), and may be placed in free oral or written English courses. You are exempt if English is your native language, if you are a citizen of a listed country (including Australia, Canada, Ghana, India, Ireland, Kenya, New Zealand, Nigeria, Singapore, the United Kingdom and others), or if you have completed at least three full years of degree study taught only in English in a country where English is the official language and use English daily at an advanced level";

const PRATT_MINIMUM =
  "Duke Engineering master's application: the 2027 Pratt online application, unofficial transcripts and GPA (with your grade scale if your school does not use 4.0), a 1-2 page résumé, short-answer essays, three letters of recommendation (at least one academic for recent graduates), a timed video introduction, the Courses and Technical Skills Assessment and the US$75 application fee (various waivers apply). GRE scores are optional for all 2027 applicants and there is no minimum GPA or GRE. A US bachelor's degree or an equivalent from an accredited institution is required; Duke publishes extra transcript rules for applicants from China and India. Financial documents are not needed until after you are admitted and enrol";

const PRATT_DEADLINE =
  "Fall 2027 entry (campus): Round 1 closed on 3 November 2026, so it had passed when we checked; Round 2 is 19 January 2027 and Round 3 is 17 March 2027. Applicants interested in applying after the deadline must contact Engineering Master's Admissions at pratt_masters@duke.edu";

export const dukeUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "duke-bs-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (34 course credits for the degree, at least 15 of them for the major)",
    tuitionNote: UG_TUITION,
    description:
      "Duke's Computer Science BS, offered in Trinity College, was revised for students entering in fall 2026 so that artificial intelligence sits in the core. Students first cover an introductory programming course, two semesters of calculus and a probability or statistics course, then a five-course core: data structures and algorithms, discrete mathematics, computer systems or architecture, an introduction to AI (or two advanced mathematics courses) and algorithm design and analysis. On top of that they take one systems course chosen from areas such as operating systems, databases, networking, security or distributed systems, one further AI course (for example machine learning, computer vision or natural language processing) and four electives, one of which may be a policy-oriented computing course. Optional concentrations in software systems, data science, AI and machine learning, and software engineering and design appear on the transcript, and a year-long project can lead to graduation with distinction.",
    officialProgramUrl: "https://cs.duke.edu/undergraduate/degrees/BS",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_TRINITY_MAJOR(
        "Computer Science",
        "Students with no programming background usually start with COMPSCI 101L, which is waived if you pass COMPSCI 201"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("Trinity College of Arts & Sciences"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "duke-bs-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (34 course credits for the degree)",
    tuitionNote: UG_TUITION,
    description:
      "The Economics BS is the more quantitative of Duke's two economics majors (an AB is also offered) and is aimed at building strong analytical and data skills that apply to economics and institutions. Students need multivariable calculus and a six-course core: economics principles, statistical foundations of econometrics and data science, econometrics, two semesters of intermediate microeconomics and intermediate macroeconomics, which must be finished before senior year. They then take five 300- or 400-level electives in economics or financial economics, including at least one at each level, and may add an optional Concentration in Financial Economics within the degree. The department says the degree prepares students for industry, government, law school and graduate study, and recommends extra advanced mathematics for anyone considering a PhD. All of Duke's economics majors are STEM-classified (CIP 45.0603), so eligible F-1 graduates can apply for the 24-month STEM extension of OPT.",
    officialProgramUrl: "https://econ.duke.edu/undergraduate/bs-economics",
    degree: "Bachelor of Science (BS) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_TRINITY_MAJOR(
        "Economics",
        "Since fall 2023 Economics 101 must be taken at Duke (AP or transfer credit is not accepted for it), and at most two economics transfer credits count toward the major"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("Trinity College of Arts & Sciences"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Public Policy",
    slug: "duke-ab-public-policy",
    level: "Bachelor",
    field: "Public Policy",
    duration: "Typically 4 years full-time (34 course credits for the degree, at least 11 of them for the major)",
    tuitionNote: UG_TUITION,
    description:
      "The public policy major is taught by the Sanford School of Public Policy as a liberal arts degree that builds political and economic analysis, leadership and ethical decision-making. Students complete six core courses (some economics and statistics courses can substitute for parts of the core), one history course with a policy component and four public policy electives, at least one at the 400 level. Sanford teaches across areas such as education and social policy, health, environment and energy, international development, global governance and security, and leadership and ethics. Every major completes a policy internship of at least 300 hours, usually in the summer after the sophomore or junior year (or through the Duke in DC spring semester or a year-long Bass Connections project). An honours thesis can lead to graduation with distinction, and strong Duke majors can apply in junior year for the 4+1 accelerated Master of Public Policy.",
    officialProgramUrl: "https://undergraduate.bulletins.duke.edu/allprograms/bachelors3/u-pps-ab",
    degree: "Bachelor of Arts (AB) in Public Policy",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_TRINITY_MAJOR(
        "Public Policy",
        "To start the internship you must have completed at least three of the six core courses, and no more than two transfer credits count toward the major"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("Trinity College of Arts & Sciences, taught by the Sanford School of Public Policy"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistical Science",
    slug: "duke-bs-statistical-science",
    level: "Bachelor",
    field: "Statistics",
    duration: "Typically 4 years full-time (34 course credits for the degree, at least 13 of them for the major)",
    tuitionNote: UG_TUITION,
    description:
      "Duke's Statistical Science BS teaches modern statistical methods, including computationally intensive modelling, alongside the mathematical and computing tools behind them, with an emphasis on framing problems and handling uncertainty in decisions. After prerequisites in single and multivariable calculus and linear algebra, students take a six-course statistics core that includes probability, then three electives (at least two in statistics, with room for one course from another quantitative department or an approved research project). Optional concentrations in Data Science and in Mathematical Statistics are built from specific course choices within the major. Majors can complete supervised research for credit, and the department says graduates are prepared for data science, analytics, technology, finance, medicine and graduate study.",
    officialProgramUrl: "https://undergraduate.bulletins.duke.edu/pages/DplzxtiSYvU1RYkhYQEk",
    degree: "Bachelor of Science (BS) in Statistical Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_TRINITY_MAJOR(
        "Statistical Science",
        "Transfer credit can cover at most one core or two elective courses, and no more than two D-range grades can count toward the major"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("Trinity College of Arts & Sciences"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Biology",
    slug: "duke-bs-biology",
    level: "Bachelor",
    field: "Biology",
    duration: "Typically 4 years full-time (34 course credits for the degree, at least 10 of them for the major)",
    tuitionNote: UG_TUITION,
    description:
      "The Biology BS is the route Duke points to for students heading toward biological or biomedical research and the health professions. Alongside co-requisites in chemistry, mathematics or statistics and physics, students take two introductory biology courses, three area courses that span biological structure and function, ecology and organismal diversity, and five electives, at least four at the 200 level or above. Across the major they must complete at least two courses with an approved lab and a 400-level capstone, and up to two independent study courses can count. Optional concentrations include anatomy and physiology, animal behaviour, biochemistry, cell and molecular biology, ecology, evolutionary biology, genetics, genomics, marine biology, neurobiology, pharmacology and plant biology. Students with a research thesis can graduate with distinction. Duke does not offer a pre-medicine major; it supports pre-health students through advising instead.",
    officialProgramUrl: "https://undergraduate.bulletins.duke.edu/pages/Yt39ZjOB6XsxGOqqkOsN",
    degree: "Bachelor of Science (BS) in Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_TRINITY_MAJOR("Biology", "Major courses must be taken for a grade, not satisfactory/unsatisfactory"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("Trinity College of Arts & Sciences"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering",
    slug: "duke-bse-electrical-computer-engineering",
    level: "Bachelor",
    field: "Electrical and Computer Engineering",
    duration: "Typically 4 years full-time (34 course credits for the BSE)",
    tuitionNote: UG_TUITION,
    description:
      "Duke's ABET-accredited Electrical and Computer Engineering BSE is organised around integrated sensing and information processing: how systems interact with the physical world, move energy and information, and turn data into decisions. Beyond Pratt's common requirements in mathematics, physics, chemistry, writing, design, computing and five liberal arts courses, students take data structures and five ECE foundation courses (a first-year fundamentals course with a team design challenge, then digital systems, microelectronics, sensing and waves, and signals and systems), a statistics course and seven ECE electives. The electives must include courses in at least two concentration areas (computer engineering and digital systems; signal processing, communications and control; solid-state devices and integrated circuits; engineering physics; and photonics), a 300-level course, an extension elective and a team design course on a real-world problem. Computer science and biomedical engineering are the most common second majors.",
    officialProgramUrl: "https://undergraduate.bulletins.duke.edu/pages/XxAyh86HqynixoDfGMur",
    degree: "Bachelor of Science in Engineering (BSE) in Electrical and Computer Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_PRATT_MAJOR("Electrical and Computer Engineering", "A sample semester-by-semester plan is published on the ECE website"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the Pratt School of Engineering"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "duke-bse-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (34 course credits for the BSE)",
    tuitionNote: UG_TUITION,
    description:
      "The ABET-accredited Mechanical Engineering BSE prepares students to design machines, structures, devices and thermal and electro-mechanical systems for industries from aerospace and energy to biomedical engineering, manufacturing and transport. On top of Pratt's shared mathematics, science, computing, design and liberal arts requirements, students take a natural science course, four engineering foundation courses, eight required mechanical engineering courses (most with a lab component), two 400-level ME technical electives and three general electives, at least two of them at the 200 level or above. The department offers certificates in aerospace engineering, energy and the environment, robotics and automation, and materials science, plus second-major options in electrical and computer engineering or biomedical engineering. Students planning to study abroad usually go in the fall of junior year.",
    officialProgramUrl: "https://undergraduate.bulletins.duke.edu/pages/fiTnrJxjsrMCxlzt3QHL",
    degree: "Bachelor of Science in Engineering (BSE) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_PRATT_MAJOR(
        "Mechanical Engineering",
        "The department's handbook, curriculum flow chart and check sheet set out the course sequence"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the Pratt School of Engineering"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Biomedical Engineering",
    slug: "duke-bse-biomedical-engineering",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "Typically 4 years full-time (34 course credits for the BSE)",
    tuitionNote: UG_TUITION,
    description:
      "Duke's ABET-accredited Biomedical Engineering BSE applies engineering, physical science and mathematics to biology and medicine. After Pratt's common requirements, students take an eight-course BME core that includes biology, engineering mechanics, the fundamentals of electrical and computer engineering and several BME lab courses, then two area core courses and five advanced electives (including a design elective). Each student builds depth in one area matched to faculty research: biomechanics and biomaterials; electrobiology; imaging and measurement systems (including ultrasound and biophotonics); or molecular, cellular and tissue engineering, with a data science option among the area courses. Design runs through the curriculum and ends in capstone design, and many students join research labs through independent study. The department's handbook covers pre-medical planning, study abroad and double majors with electrical and computer, civil or mechanical engineering.",
    officialProgramUrl: "https://undergraduate.bulletins.duke.edu/pages/dbXHQ4iluXiWRAJBjm6l",
    degree: "Bachelor of Science in Engineering (BSE) in Biomedical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_PRATT_MAJOR(
        "Biomedical Engineering",
        "Some BME courses require students to have a suitable laptop with wireless capability"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the Pratt School of Engineering"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Daytime MBA (Fuqua School of Business)",
    slug: "duke-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time (starting in August)",
    tuitionNote:
      "Latest published (class starting August 2026, Class of 2028): tuition US$83,700 for the first year, including a US$4,000 non-refundable deposit due on admission. Fuqua's 2026-27 first-year cost of attendance for nine months is US$118,974: US$92,834 billed to the student account (tuition, US$4,290 student medical insurance, which can be waived with other cover, a US$1,048 health fee, US$575 MBA Association fee, a US$2,625 pre-term fee and smaller activity, recreation, services and transcript fees), US$850 for books and course packs, and US$25,290 living costs (US$14,220 housing, US$4,428 food, US$4,500 miscellaneous, US$2,142 transport). All applicants are considered for merit scholarships without a separate application, and international students can use an international student loan that needs no co-signer. Costs for the class entering in August 2027 had not been published when we checked",
    description:
      "Fuqua's Daytime MBA is a full-time general management programme with only 13 required core courses and more than 100 electives, so students shape most of the degree around their own goals; those who can show prior mastery of a core subject may be exempted from it. Core and elective subjects span accounting, decision sciences and business analytics, managerial economics and game theory, finance, leadership communication, leadership, ethics and organisations, marketing, operations and strategy, with electives in areas such as energy and environment, health sector management, impact investing and entrepreneurial strategy. The whole programme is STEM-designated, so eligible international graduates can apply for the extra two years of OPT work authorisation. Fuqua emphasises its team-based culture, and the Class of 2028 is 38% international citizens from 46 countries and territories. Dual degrees are offered with law, medicine, environment and public policy.",
    officialProgramUrl: "https://www.fuqua.duke.edu/programs/daytime-mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall (August) once a year",
    applicationDeadline:
      "Rounds for the 2026-27 cycle (entry August 2027): Early Action (binding) closed on 2 September 2026 and Round 1 closed on 30 September 2026 (decisions 10 December 2026), so both had passed when we checked. Round 2 is 5 January 2027 (interview invitations by 11 February, decisions 11 March, deposit by 23 April 2027) and Round 3 is 25 March 2027 (decisions 6 May 2027). Fuqua asks international applicants to apply in Early Action, Round 1 or Round 2 to leave time for visas. Consortium applicants use the Consortium deadlines of 15 October and 5 January",
    admissionRequirements: [
      "A completed bachelor's degree from an accredited institution before the programme starts; no major is preferred, and Fuqua generally accepts international degrees, including three-year degrees from England, Scotland, Wales or Australia. There is no minimum work experience. Application materials: unofficial transcripts (translated and attested if not in English), a one-page business résumé, a 100-word career goals answer, the '25 Random Things' list and an essay on how you would contribute to Fuqua, one professional recommendation and the US$225 application fee (discounts and waivers apply). Interviews are by invitation, in person or virtual, and conducted in English. The Class of 2028's middle 80% undergraduate GPA ran from 3.15 to 3.90 and work experience from 3.17 to 9.50 years",
      "Test: a GMAT, GMAT Focus, GRE or Executive Assessment score is required, with no minimum and no preference; scores are self-reported, valid for five years and can be updated after you apply. GMAT/EA code Q13-N5-32; GRE code 5156",
      "English proficiency: the Daytime MBA does not accept TOEFL, IELTS, PTE or Duolingo scores. Fuqua judges your English from your essays, résumé, recommendation and the English-language interview instead. The MBA/MEM dual degree is an exception, because the Nicholas School's MEM application needs an English test",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Duke MMS: Master of Management Studies (Fuqua School of Business)",
    slug: "duke-mms-management-studies",
    level: "Master",
    field: "Management",
    duration: "10 months full-time (July to April)",
    tuitionNote:
      "Latest published (Class of 2027, starting July 2026): tuition US$69,900; Fuqua's cost table says this includes a US$4,000 non-refundable deposit credited to summer tuition, while the application instructions mention a US$2,000 deposit, so confirm the current amount. Fuqua's 10-month cost of attendance for 2026-27 is US$105,421: US$76,521 billed (tuition, US$4,290 student medical insurance, which can be waived with other cover, a US$1,235 health fee, US$500 MMS Association fee and smaller activity, recreation, services and transcript fees), US$800 for books and course packs, and US$28,100 living costs (US$15,800 housing, US$4,920 food, US$5,000 miscellaneous, US$2,380 transport). Optional MMS electives cost US$2,500. All applicants are considered automatically for merit scholarships, and international student loans are available. Costs for the class starting in 2027 had not been published when we checked",
    description:
      "The Duke MMS (Master of Management Studies: Foundations of Business) is a pre-experience business master's for recent graduates of any major who want to start a business career. Students first take a shared core across accounting, finance, economics, analytics, marketing, strategy, management, operations and business communication, then follow one of five pathways: Finance and Accounting; Consulting and Strategy; Marketing and Sales; Health and Life Sciences; or Sports and Entertainment, each with an applied learning requirement such as a project or mentored study. A required course on judgement and AI-assisted work teaches students to frame business questions, use AI and analytical tools and check their results. Teaching mixes lectures, cases, simulations, company visits and guest speakers. The whole programme is STEM-designated, giving eligible international graduates two additional years of OPT work authorisation. Duke runs a separate MMS with Duke Kunshan University, and applicants can apply to only one of the two in a year.",
    officialProgramUrl: "https://www.fuqua.duke.edu/programs/mms-foundations-of-business",
    degree: "Master of Management Studies (MMS)",
    intake: "Summer (July) once a year",
    applicationDeadline:
      "Rounds for entry in July 2027: Round 1 closed on 7 October 2026 (decisions 9 December 2026), so it had passed when we checked. Round 2 is 13 January 2027 (decisions 9 March, deposit by 9 April 2027), Round 3 is 4 March 2027 and Round 4 is 13 April 2027. International applicants who need an F-1 visa and are not already studying in the US must apply by Round 2; those already in the US on a student visa should apply by Round 3. You may apply in only one round a year",
    admissionRequirements: [
      "Eligibility: a bachelor's degree from an accredited institution by the start of the programme (three-year degrees equivalent to a US bachelor's are accepted). MBA holders are not eligible, and Fuqua recommends no more than two years of full-time post-graduate work experience (contact admissions if you have more). Application materials: transcripts, a one-page résumé, three short answers (about 100 words each), the '25 Random Things' list, a 350-word community essay, one recommendation (preferably professional) and the US$125 application fee, which is waived if you submit a Duolingo English Test score. Interviews are by invitation, mostly by video",
      "Test: a GMAT, GRE, SAT or ACT score is required (SAT/ACT scores up to ten years old are accepted). You can request a test waiver if you have a cumulative undergraduate GPA of 3.4 or higher on a 4.0 scale and strong quantitative coursework; requests are due at least two weeks before your round's deadline and are not guaranteed",
      "English proficiency (Duke MMS): required if your first language is not English, unless you qualify for an exemption. Minimum (preferred) scores: Duolingo English Test 125 (135+), the Fuqua-preferred test; TOEFL iBT 95 (105+) on the 0-120 scale or 5 (5.5+) on the new 1-6 scale; IELTS Academic 7.0 (7.5+). Scores must be no more than two years old; unofficial scores are fine for the application and official reports are needed before enrolment. Applicants with exceptional English can request a waiver after starting an application",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical and Computer Engineering (MEng)",
    slug: "duke-meng-electrical-computer-engineering",
    level: "Master",
    field: "Electrical and Computer Engineering",
    duration:
      "30 credits; Duke Engineering budgets three semesters (1.5 years), and the ECE department says most students finish in four semesters with a part-time final semester",
    tuitionNote:
      "2026-27: campus Master of Engineering tuition is US$35,680 per semester, the same for international and US students; the usual 30 credits over three semesters come to US$107,040, and internship courses carry no tuition. Duke Engineering's 2026-27 estimated cost of attendance for the first year is US$103,260 (US$52,430 in fall and US$50,830 in spring): tuition, US$4,290 student health insurance (required unless you have comparable cover), health, activity, services, recreation and transcript fees, US$14,220 housing, US$4,428 food, US$676 books, US$2,142 local transport and US$4,500 personal expenses. Mission Scholarships are awarded through extra essays in the application. Tuition and estimates are confirmed each May, and 2027-28 rates had not been published when we checked",
    description:
      "Duke's Master of Engineering in Electrical and Computer Engineering is an industry-focused degree that combines deep technical coursework with business and management training. Students take two core industry-preparation courses (Management of High Tech Industries and Business Fundamentals for Engineers), complete an industry internship with an assessment course, attend the weekly ECE Master's Success Seminar, and take eight courses in one track: Software Engineering; Computer Hardware Engineering; Machine Learning and Artificial Intelligence; Quantum Hardware and Software; or Semiconductor Technology. Students can also take courses from other ECE tracks, other engineering departments and wider STEM fields. The department reports an average US base salary of US$136,000 for the Class of 2025, with employers including Amazon, Apple, Google, Meta, Microsoft and NVIDIA. A research-oriented MS in ECE is offered separately through the Graduate School.",
    officialProgramUrl: "https://prattprofessional.bulletins.duke.edu/allprograms/e-egr/ece",
    degree: "Master of Engineering (MEng) in Electrical and Computer Engineering",
    intake: "Fall semester (August)",
    applicationDeadline: PRATT_DEADLINE,
    admissionRequirements: [
      "Preparation: an undergraduate degree in a STEM or STEM-adjacent field, a degree with technical courses in mathematics, statistics or hard sciences, or relevant technical work experience if your degree is in another field, plus prior programming or computer science coursework. Work experience is not required. The ECE short answers ask what makes you well suited to the programme and what attracted you to Duke",
      PRATT_ENGLISH,
      PRATT_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Engineering Management (MEM)",
    slug: "duke-mem-engineering-management",
    level: "Master",
    field: "Engineering Management",
    duration: "About 1 year of tuition on campus; most students finish in three semesters (two to four are possible)",
    tuitionNote:
      "2026-27: campus MEM tuition is US$36,225 per semester, the same for international and US students, and the eight required courses come to US$72,450 over two semesters. Students who finish in three semesters pay no tuition in the third (fees still apply), and a fourth semester is charged per unit. Duke Engineering's 2026-27 estimated cost of attendance for the year is US$104,350 (US$52,975 in fall and US$51,375 in spring), including US$4,290 student health insurance (required unless you have comparable cover), fees, US$14,220 housing, US$4,428 food, US$676 books, US$2,142 local transport and US$4,500 personal expenses. Two US$10,000 Wilkinson and Garda Fellowships go to applicants with outstanding undergraduate records, and Mission Scholarships are awarded through extra essays. 2027-28 rates had not been published when we checked",
    description:
      "Duke's Master of Engineering Management is for engineers and scientists early in their careers who want to lead technical projects, teams and products without leaving engineering behind; Duke presents it as an engineering-centred alternative to an MBA. Students take business and management core courses for engineering leaders in areas such as marketing, management, finance and law, a professional development seminar series, and four technical electives drawn from courses across Duke, either freely or within one of six tracks: Customer Experience and Product Design; Data Analytics and Machine Learning/AI; Operations and Supply Chain Management; Product Management; Technology Development; and Commercialization and Entrepreneurship. Every student completes an 8-12 week internship or a six-month co-op. Duke reports that 96% of the Class of 2025 were employed or in further study, with an average US base salary of US$105,200, in roles such as product, project and program manager, analyst and consultant. An online version is also offered.",
    officialProgramUrl: "https://masters.pratt.duke.edu/management/",
    degree: "Master of Engineering Management (MEM)",
    intake: "Fall semester (August) for the campus programme",
    applicationDeadline:
      "Fall 2027 entry (campus): Round 1 closed on 3 November 2026, so it had passed when we checked; Round 2 is 19 January 2027 and Round 3 is 17 March 2027. Applicants interested in applying after the deadline must contact Engineering Master's Admissions at pratt_masters@duke.edu",
    admissionRequirements: [
      "Preparation: an undergraduate degree in a STEM or STEM-adjacent field (or substantial STEM coursework, or relevant technical work experience), with Calculus I, II and III or statistics, mathematics beyond Calculus II and at least two courses in engineering, computer science, mathematics or physics. Work experience is not required for the campus programme but many applicants have one or two years. The MEM short answers ask about your future impact, one of the programme's Five Principles of Professionalism and a time you went beyond expectations",
      PRATT_ENGLISH,
      PRATT_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science (MS)",
    slug: "duke-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "30 graduate credits with at least three full-time semesters (usually 1.5 years)",
    tuitionNote: `2026-27: Graduate School master's tuition is US$34,940 per fall or spring semester, the same for international and US students, and master's students must pay full-time tuition for at least three semesters (US$104,820 at 2026-27 rates); any later credits are charged per unit (US$4,055 per unit on the 2026-27 schedule). The Graduate School lists no financial aid for the CS master's. ${GS_COSTS}`,
    description:
      "Duke's MS in Computer Science, in the Graduate School, requires 30 graduate credits, three full-time semesters and a final master's exam. By default students take the course-only option: at least 18 credits of graduate computer science, six credits outside CS in a related field, six credits of approved electives and a career preparation course, with at least six credits from project-heavy courses and a short oral exam based on a portfolio of papers, projects and any internship report. Alternatively, students can choose a project or thesis option with up to six credits of research under a faculty adviser, ending in a written report or thesis and a public defence. Optional concentrations in Artificial Intelligence/Machine Learning and in Cybersecurity combine breadth, depth and elective courses with a portfolio of activities beyond coursework. Faculty research spans algorithms, systems and networking, security, databases and cloud computing, machine learning, AI, computer vision, NLP and computational biology and economics.",
    officialProgramUrl: "https://gradschool.duke.edu/academics/programs-degrees/computer-science-ms/",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Fall semester only",
    applicationDeadline:
      "Fall 2027 entry: apply through the Duke Graduate School by 1 February 2027 at 11:59:59 pm US Eastern time. The MS in Computer Science admits for fall only",
    admissionRequirements: [
      "Preparation: a strong undergraduate grounding in calculus and discrete mathematics and a working knowledge of data structures, algorithms and at least one high-level programming language. The GRE General Test is required for the MS (the subject test is optional), and your undergraduate GPA is reported on a 4.0 scale. No writing sample is required. Courses count toward the degree only with a grade of B- or higher",
      GS_ENGLISH,
      GS_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in Interdisciplinary Data Science (MIDS)",
    slug: "duke-mids-data-science",
    level: "Master",
    field: "Data Science",
    duration: "2 years full-time (four semesters, 42 credits, with a required summer internship)",
    tuitionNote: `2026-27: Graduate School master's tuition is US$34,940 per fall or spring semester, the same for international and US students. MIDS runs for four semesters, but students may go part-time in the final semester and pay per credit instead (US$4,055 per unit on the 2026-27 Graduate School schedule; MIDS says careful planning can bring final-semester tuition to roughly US$14,000). A limited number of partial-tuition scholarships, based on merit and need, are available without a separate application. ${GS_COSTS}`,
    description:
      "Duke's Master in Interdisciplinary Data Science trains data scientists who pair strong computing and statistics with communication, teamwork and domain knowledge. Before arriving, students complete online review modules in linear algebra, statistics, R and Python, then a three-week on-campus programming bootcamp before the fall semester. The 42 credits include seven core MIDS courses, a year-long capstone project course, professional development seminars and at least four semester-long electives from across Duke, with a summer internship between the two years. MIDS says its curriculum goes deeper into the statistical and mathematical theory behind data tools than typical business analytics degrees and is broader and more hands-on than a single-department statistics or computer science degree. Cohorts are small (about 35-40 students), the programme is campus-only and not part-time, and it is STEM-designated (CIP 30.3001).",
    officialProgramUrl: "https://gradschool.duke.edu/academics/programs-degrees/master-interdisciplinary-data-science/",
    degree: "Master in Interdisciplinary Data Science (MIDS)",
    intake: "Fall semester only (with required summer online review and an August bootcamp)",
    applicationDeadline:
      "Fall 2027 entry: apply through the Duke Graduate School by 28 January 2027 at 11:59:59 pm US Eastern time. There is no early round. Interviews, if needed, are mostly held in mid-to-late March, and all decisions are made by 31 March 2027",
    admissionRequirements: [
      "A completed undergraduate degree from an accredited institution in any field (three-year degrees can be considered; contact the Graduate School). No prerequisites are required, but successful applicants usually have quantitative coursework such as linear algebra and statistics and programming experience, ideally Python; applicants without a technical degree should show their ability through online courses, portfolios or code repositories. The GRE is optional for 2027 and there is no minimum GPA or test score. MIDS also asks for a video of up to five minutes presenting a project you have worked on to an intelligent non-specialist audience, and some candidates are interviewed",
      GS_ENGLISH,
      GS_MINIMUM,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Policy (Sanford School of Public Policy)",
    slug: "duke-mpp-public-policy",
    level: "Master",
    field: "Public Policy",
    duration: "2 years full-time, residential (51 credit hours, with a summer internship)",
    tuitionNote:
      "2026-27: MPP tuition is US$28,854 per semester (US$57,708 for the year), the same for international and US students, and tuition plus fees total US$63,746 for the year, including US$4,290 student medical insurance (compulsory for F-1 and J-1 students), a US$1,048 health fee and smaller activity, recreation, services and transcript fees. Sanford's 2026-27 estimated cost of attendance is US$89,712 for nine months, adding US$676 for books and US$25,290 for living costs (US$14,220 housing, US$4,428 food, US$4,500 miscellaneous, US$2,142 transport). For an F-1 visa, Duke Visa Services needs proof of at least US$85,922 for the first year (US$8,500 more for a spouse and US$6,323 per child). Sanford expects tuition to rise 3-4% a year, and 2027-28 rates had not been published when we checked",
    description:
      "Duke Sanford's MPP is a two-year residential degree that prepares early-career professionals to lead in government, non-profits and the private sector in the US and abroad. The core covers policy analysis, statistics, data analysis and evaluation, microeconomics, political analysis (US or global), ethics, and management and leadership. Students then specialise through electives across Duke and an optional concentration, such as environment and energy, health, international development, national security, social, technology or education policy, or a policy generalist route, each needing nine credits, a related internship and a related capstone. Practical work is built in: a spring consulting project for a real client, a required summer internship after year one and, in year two, a client-based Master's Project or capstone coursework. Cohorts usually have 60 to 80 students, and dual degrees are offered with business, law, divinity, engineering, environment and data science.",
    officialProgramUrl: "https://sanford.duke.edu/academics/masters-programs/master-public-policy/",
    degree: "Master of Public Policy (MPP)",
    intake: "Fall (August) once a year",
    applicationDeadline:
      "Fall 2027 entry: applications open in mid-August 2026 and close on 5 January 2027 at 5:00 pm US Eastern time, with decisions in mid-March 2027",
    admissionRequirements: [
      "At least the equivalent of a four-year US bachelor's degree (three-year degrees are reviewed against the Bologna framework); there is no minimum GPA, but the average is about 3.5. Sanford prefers at least two years of relevant work experience and admits only a limited number of applicants straight from undergraduate study. Before enrolling you must have passed one microeconomics and one statistics course with a B or higher; applicants missing them can be admitted conditionally and are encouraged to submit the otherwise optional GRE. Application materials: a 750-1,000 word statement of purpose, a résumé of up to two pages, transcripts, three recommendations, a recorded video introduction, an optional but strongly recommended one-minute curated video and the US$80 application fee",
      "English proficiency (Sanford MPP): required if your first language is not English. Preferred minimum scores: Duolingo 130, IELTS 7.0, or TOEFL 100 (5 on the new scale for tests taken on or after 1 January 2026), and admitted students often score higher. You may request a waiver if you studied full-time for at least two years at a college where English is the sole language of instruction in a country where English is the primary language, completed before you apply, or in other cases of exceptional English; send TOEFL scores to code 5156",
      "The MPP is fully residential with in-person classes, so you must be able to move to Durham, North Carolina; Sanford stresses that strong written and spoken English is essential to succeed in the programme",
    ],
  },
];
