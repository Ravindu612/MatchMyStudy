import type { Program } from "../../programs";

// University of Chicago: 6 undergraduate majors in the College for autumn 2027 first-year entry and 9 full-time
// graduate programmes (Chicago Booth, Harris School of Public Policy, the Data Science Institute, the Physical Sciences
// Division and the Social Sciences Division).
// Sources (viewed 15 November 2026): College Admissions pages on the application, required and optional materials,
// plans and deadlines, testing, international applicants and international financial aid (collegeadmissions.uchicago.edu/
// apply/application/, /apply/international-applicants/, /financial-support/...); College Aid undergraduate cost of
// attendance 2026-27 (financialaid.uchicago.edu/undergraduate/how-aid-works/undergraduate-costs/); the College Catalog
// pages for Economics, Computer Science, Data Science and Mathematics (collegecatalog.uchicago.edu/thecollege/...);
// Political Science major requirements (political-science.uchicago.edu/undergraduate-major/program-requirements);
// Harris undergraduate Public Policy Studies (harris.uchicago.edu/academics/undergraduate/overview, /academics/degrees/
// ba-public-policy); for graduate study: Graduate admissions English language requirements and required scores
// (grad.uchicago.edu/admissions/apply/english-language-requirements/...); the graduate cost of attendance 2026-27
// (financialaid.uchicago.edu/graduate/costs/cost-of-attendance/); Bursar 2026-27 tuition and fee schedules
// (bursar.uchicago.edu/tuition-and-fees/tuition-and-fees-2026-27/...); U-SHIP rates (wellness.uchicago.edu/student-
// insurance/u-ship/); Chicago Booth Full-Time MBA programme, curriculum, requirements, how-to-apply, international and
// cost pages (chicagobooth.edu/mba/full-time/...); Booth Master in Management programme, curriculum, how-to-apply and
// cost pages (chicagobooth.edu/master-in-management/...); Harris MPP, MA in Public Policy and MSCAPP degree pages,
// requirements and deadlines, tuition and expenses and international pages (harris.uchicago.edu/academics/degrees/...,
// /admissions/...), and the CAPP curriculum page (capp.uchicago.edu/curriculum/); Data Science Institute MS in Applied
// Data Science programme, in-person, how-to-apply and tuition pages (datascience.uchicago.edu/education/masters-
// programs/ms-in-applied-data-science/..., /how-to-apply/, /education/tuition-fees-aid/); Financial Mathematics
// admissions, application requirements, international, curriculum and tuition pages (finmath.uchicago.edu/...); MACSS
// application requirements, financial support and curriculum pages (macss.uchicago.edu/...) with the Social Sciences
// Division English proficiency page (socialsciences.uchicago.edu/admissions/...); and the Masters Program in Computer
// Science academics, 12-course MS, deadlines, FAQ and tuition pages (masters.cs.uchicago.edu/...) with UChicago Advanced
// Scholars (advancedscholars.uchicago.edu/how-to-apply/). Costs are in US dollars. UChicago is private and charges
// international and US students the same tuition. It uses a quarter system (Autumn, Winter and Spring, plus Summer).

const UNIVERSITY = {
  universitySlug: "university-of-chicago",
  universityName: "University of Chicago",
  country: "United States",
  language: "English",
  campus: "Chicago, Illinois (Hyde Park)",
  programType: "Full-time",
} as const;

// College Aid 2026-27 COA, living on campus: tuition 75,960; Student Services Fee 1,677; UPASS 318; food and housing
// 21,414; books 1,800; personal 1,950; travel allowance 702; total 103,821 (off campus 100,407; commuter 91,407).
// Class Fee 720 in each of the first two years applies to students first enrolling in 2026. U-SHIP 2026-27: 5,517 a year.
const UG_TUITION =
  "2026-27 (latest published; 2027-28 rates had not been released when we checked): College tuition is US$75,960 for the Autumn, Winter and Spring quarters, the same for international and US students. College Aid's 2026-27 cost of attendance for a student living on campus is US$103,821 before aid: tuition, the US$1,677 Student Services Fee, the US$318 UPASS transit fee, an estimated US$21,414 for food and housing, US$1,800 for books and supplies, US$1,950 for personal expenses and a US$702 travel allowance (the budget is US$100,407 for students living off campus). Students who first enrolled in 2026 also pay a US$720 Class Fee in each of their first two years; the figure for 2027 entrants was not stated. Health insurance is not in the total: the university student plan (U-SHIP) costs US$5,517 for 2026-27 unless you waive it with comparable cover. Financial aid for international students: international first-year applicants can receive need-based aid and are automatically considered for merit scholarships (partial-tuition awards, paid as a lump sum or renewed each year). UChicago says it meets 100% of demonstrated need with grant-based packages that include no loans. International students must apply for aid at the same time as they apply for admission, or they cannot receive need-based aid later; they complete the Student Financial Aid Worksheet in their UChicago Account and upload income documents (home-country tax forms translated into English and converted to US dollars, or employer or bank statements) and the Asset Verification Form, with no CSS Profile or FAFSA. International transfer students are not eligible for aid";

const UG_INTAKE = "Autumn Quarter only (late September 2027 first-year entry)";

const UG_DEADLINE =
  "Autumn 2027 entry (the 2026-27 admission cycle), through the Common Application or Apply Coalition with Scoir. UChicago has four plans. Early Decision I (binding) and Early Action (non-binding) both closed on 2 November 2026, so they had passed when we checked; their decisions come out in mid-December 2026. Early Decision II (binding): apply by 4 January 2027; decisions in mid-February and a reply due in mid-March 2027. Regular Decision: apply by 4 January 2027; decisions in late March and a reply due by 1 May 2027. Early Action applicants can switch to Early Decision I until 1 December 2026, and deferred EA or RD applicants can switch to Early Decision II until 15 January 2027 by sending the ED agreement form. International aid applicants must also send their aid documents by the matching aid deadline: 15 November 2026 for EA and ED I, 15 January 2027 for ED II and 15 February 2027 for RD (moved to the next business day if it falls on a weekend). A mid-year school report is due by 1 February 2027";

const UG_TESTING =
  "Testing: optional. UChicago is test-optional for first-year applicants, including international students, under a No Harm policy, so SAT or ACT results are only used if they help an application. You may self-report scores or send official reports; report every score as it was received rather than calculating your own superscore. For autumn 2027 entry the last accepted sittings are the October ACT or November SAT for EA and ED I, the December SAT or ACT for ED II and the January SAT or February ACT for Regular Decision. Codes: SAT 1832, ACT 1152";

const UG_ENGLISH =
  "English proficiency: UChicago only admits students whose English is at a superior level, but it sets no minimum score and does not require a particular test. Applicants may send results from any English proficiency examination they feel shows their ability, either official or self-reported (official reports are only needed if you enrol). If your mastery of English is clear throughout your application, you do not have to send a test score. UChicago has no English-as-a-second-language programme and does not offer conditional admission. Any document not in English needs an official English translation alongside the original, and transcripts need a grading scale";

const UG_ACADEMIC =
  "Application (the same for international and US applicants): the Common Application or Apply Coalition with Scoir plus the UChicago Supplement, which asks for one extended essay chosen from UChicago's prompts and one short essay on why you want to attend UChicago; the Secondary School Report and transcript (self-submitted transcripts are accepted while you apply); two evaluations from teachers who taught you in academic subjects; and a mid-year report. The application fee is US$90, and it is waived automatically for students applying for need-based aid. A short video profile and an optional supplement of creative, artistic or research work can be added. Students are admitted to the College rather than to a major";

const UG_MAJOR =
  "Choosing the major: College students apply without declaring a major, complete the Core curriculum on campus and can declare a major at any time, as long as they do so by Spring Quarter of their third year. A bachelor's degree needs 42 quarter credits";

const GRAD_ENGLISH_UC = (scores: string) =>
  `English proficiency (University of Chicago graduate admissions): applicants must send an official TOEFL iBT (the Home Edition is accepted) or IELTS Academic result (including IELTS for UKVI and One Skill Retake); the Duolingo English Test is not accepted. Scores must be no more than two years old at the application deadline. Required scores for this programme: ${scores}. You are exempt if English has been your primary language since childhood, or if you completed at least one full-time academic year within the last 10 years at an English-medium institution in a listed country such as the United States, United Kingdom, Canada, Australia, New Zealand, Ireland, Singapore, Hong Kong or South Africa. TOEFL institution code 1832`;

// Graduate cost of attendance 2026-27 (financialaid.uchicago.edu), excluding tuition: 3 quarters 37,878 (books 2,085,
// housing and food 21,750, Graduate Student Services Fee 1,560, personal 3,750, transport 3,000, loan fees 216,
// U-SHIP 5,517); 4 quarters 48,665 (2,780 + 29,000 + 2,080 + 5,000 + 4,000 + 288 + 5,517). Lifetime transcript fee 84.
const GRAD_LIVING =
  "UChicago's 2026-27 graduate cost of attendance, excluding tuition, is US$37,878 for three quarters (about US$21,750 for housing and food, US$2,085 for books, the US$1,560 Graduate Student Services Fee, US$3,750 for personal costs, US$3,000 for transport, US$216 of loan fees and US$5,517 for U-SHIP health insurance) or US$48,665 for four quarters, plus a one-time US$84 lifetime transcript fee";

const HARRIS_APPLICATION = (essays: string) =>
  `Application materials (Harris): a résumé, ${essays}, unofficial transcripts from every post-secondary institution (official transcripts only if you enrol) and three recommenders named in the application, with at least two of the three letters received within about a week of the deadline for the application to be reviewed. Harris has no application fee for master's applicants and considers every applicant for scholarships automatically`;

const HARRIS_GRE =
  "A GRE or GMAT score (self-reported scores are fine for review; code 1832) unless you meet one of Harris's waivers, which cover, for example, five or more years of relevant full-time work since your bachelor's degree, five years of military service, a college Calculus I course passed with a B or better, or a UChicago undergraduate degree";

const HARRIS_ENGLISH =
  "English proficiency (Harris): TOEFL or IELTS results are required unless you meet the University of Chicago's waiver criteria (English as your primary language since childhood, or a recent full-time year at an English-medium institution in a listed country), which the Harris application applies automatically; Harris itself cannot waive the requirement. Harris accepts your best total and section scores across valid tests, and applicants whose scores fall below the minimum can be offered conditional admission. Harris does not publish its own minimum score on its admissions pages";

const HARRIS_DEADLINE = (program: string) =>
  `Autumn 2027 entry to the ${program}, all at 11:59 pm Central Time: Early Action closed on 8 October 2026 (decisions in early December 2026), so it had passed when we checked. Round One: 3 December 2026, with decisions in early February 2027. Round Two: 21 January 2027, with decisions in mid-March 2027. Round Three: 17 June 2027, decided on a rolling basis while places remain. Admitted students accept with a US$2,000 deposit, due 15 April 2027 for decisions released before then. Harris strongly encourages applicants who need a US student visa to apply by Round Two`;

const HARRIS_TUITION = (courses: string, extra: string) =>
  `2026-27 (latest published; Harris expects tuition to rise by roughly 3 to 7% a year): full-time Harris master's students take three courses (300 units) a quarter, charged at US$23,190 a quarter, or US$69,570 for the Autumn, Winter and Spring quarters (our sum). ${courses} ${GRAD_LIVING}. ${extra}`;

export const universityOfChicagoPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "uchicago-ba-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (42 quarter credits for the degree; 13 courses, 1300 units, in the standard major)",
    tuitionNote: UG_TUITION,
    description:
      "Economics at the University of Chicago is taught by the Kenneth C. Griffin Department of Economics and can be completed in four ways: the standard track or a specialisation in business economics, data science, or politics and policy. The standard track has 13 courses. Students finish calculus and take Mathematical Methods for Economic Analysis (MATH 15250), then the three-quarter Elements of Economic Analysis core in price theory and macroeconomics (honours versions are available), a sequence of linear algebra, Statistical Models and Methods and Econometrics, a course on economic policy and four economics electives. The business economics specialisation brings in courses from Chicago Booth, and the data science specialisation adds introductory computer science (CMSC 14200) and data science courses in econometrics. Courses in the major need a C- or better and the major GPA must be at least 2.0; students with a 3.5 major GPA and a 3.2 overall GPA can earn honours by writing a paper through the honours workshop. Mathematics majors can instead take a BS in Mathematics with specialisation in economics.",
    officialProgramUrl: "http://collegecatalog.uchicago.edu/thecollege/economics/",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "uchicago-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (42 quarter credits for the degree; 14 computer science courses for the BA, 15 for the BS)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Computer Science offers the major as either a Bachelor of Arts or a Bachelor of Science. Both start with the four-course introductory sequence (CMSC 14100-14400, from introductory programming to systems programming), followed by theory courses in discrete mathematics and algorithms, and both require calculus and general education in the physical sciences. The BA adds eight electives spread across at least five areas of computer science, which leaves room for a second major. The BS adds a third theory course, a systems course, a machine learning course, a three-course specialisation (computer security, computer systems, data science, human-computer interaction, machine learning, programming languages or theory) and three more electives. Placement exams let students with programming experience skip parts of the introductory sequence. Students with a 3.5 GPA who complete a thesis can graduate with honours, and strong students can apply for a joint bachelor's and master's (BA/MS or BS/MS).",
    officialProgramUrl: "http://collegecatalog.uchicago.edu/thecollege/computerscience/",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Data Science",
    slug: "uchicago-data-science",
    level: "Bachelor",
    field: "Data Science",
    duration: "Typically 4 years full-time (42 quarter credits for the degree; 15 courses for the BA major, 18 for the BS)",
    tuitionNote: UG_TUITION,
    description:
      "UChicago's Data Science major draws on statistics, computer science and applied mathematics and pays particular attention to responsible data use, privacy and ethics, and communicating with data. After calculus, the 15-course BA covers a two-quarter introduction to data science, computer science for data science, data engineering, two quarters of mathematical methods (probability, multivariable calculus and linear algebra), a course on models in data science, machine learning, data visualisation, ethics, fairness and privacy, three electives and the two-quarter Data Science Clinic, a capstone in which teams work on real projects for public interest groups, government agencies, companies and researchers. The 18-course BS adds three courses in a separate field where data science can be applied (in the sciences, social sciences or humanities) and requires one elective in machine learning. A Theory Track replaces the mathematics courses with probability, linear algebra and statistical theory for students heading to graduate research, and a Computation Track uses the main computer science sequence. Major courses need a C or better, and a major GPA of 3.7 earns honours. The BA is designed to combine well with a second major.",
    officialProgramUrl: "http://collegecatalog.uchicago.edu/thecollege/datascience/",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Data Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mathematics",
    slug: "uchicago-mathematics",
    level: "Bachelor",
    field: "Mathematics",
    duration: "Typically 4 years full-time (42 quarter credits for the degree; 1400 units for the BA major, 1700 for the BS)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Mathematics offers four undergraduate degrees: a BA in Mathematics, a BS in Mathematics, a BS in Applied Mathematics and a BS in Mathematics with specialisation in economics (only one of them can be earned). Every version builds on a calculus sequence and a proof-based course (Honors Calculus III or Introduction to Proofs in Analysis), then Abstract Linear Algebra, a three-quarter sequence in analysis in Rn (regular, accelerated, inquiry-based or honours) and basic algebra. The BA leaves more room for electives; the BS adds a second quarter of algebra and a three-course minor field in another physical sciences department; the applied mathematics BS adds numerical analysis, complex variables and ordinary and partial differential equations; and the economics specialisation adds probability, statistics, the economics theory core, econometrics and economics electives. Majors also take courses in physics or chemistry and other physical sciences. Entering students take an online placement test, and strong students can be invited into honours calculus or honours analysis. Honours require, among other things, a 3.25 GPA in mathematics and an honours sequence. Students can spend a spring quarter studying mathematics in Paris, and qualified students can earn a joint BA/MS or BS/MS.",
    officialProgramUrl: "http://collegecatalog.uchicago.edu/thecollege/mathematics/",
    degree: "Bachelor of Arts (BA) or Bachelor of Science (BS) in Mathematics, or BS in Applied Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Political Science",
    slug: "uchicago-ba-political-science",
    level: "Bachelor",
    field: "Political Science",
    duration: "Typically 4 years full-time (42 quarter credits for the degree; 12 courses, 1200 units, in the major)",
    tuitionNote: UG_TUITION,
    description:
      "The Political Science major has 12 courses. Students take introductions to three of the department's four fields (political theory, American politics, comparative politics and international relations), a course in research methods and six to eight electives, and they must meet a writing requirement in one of two ways: a long research paper of at least 20 pages written in an elective (with eight electives in total), or a BA thesis of about 35 to 50 pages written through the BA Colloquium and thesis course (with six electives). Up to two courses may be taken pass/fail, and the department recommends a statistics course. Students with a 3.6 GPA in the major and 3.0 overall who write a thesis can be considered for honours. Most students declare the major at the end of their second year.",
    officialProgramUrl: "https://political-science.uchicago.edu/undergraduate-major/program-requirements",
    degree: "Bachelor of Arts (BA) in Political Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Public Policy Studies",
    slug: "uchicago-ba-public-policy-studies",
    level: "Bachelor",
    field: "Public Policy",
    duration: "Typically 4 years full-time (42 quarter credits for the degree)",
    tuitionNote: UG_TUITION,
    description:
      "Public Policy Studies is the College's undergraduate major run by the Harris School of Public Policy. Students first meet general education requirements in calculus and statistics (a new public policy statistics course is planned from Spring 2027), then take a five-course core in public policy (PBPL 20000, 22100, 22200, 22300 and 26400). They choose a three-course specialisation, with at least one public policy course, and complete a practicum of one methods course and one Windows course built around real-world engagement and analysis outside the classroom. The major ends with a capstone: either the BA Thesis Seminar or the BA Project Seminar. All courses in the major must be taken for quality grades, and students with a 3.5 GPA who write a thesis can earn honours. Students double-majoring in economics can substitute some economics courses.",
    officialProgramUrl: "https://harris.uchicago.edu/academics/undergraduate/overview",
    degree: "Bachelor of Arts (BA) in Public Policy Studies",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MAJOR,
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Full-Time MBA (Chicago Booth School of Business)",
    slug: "uchicago-booth-full-time-mba",
    level: "Master",
    field: "Business Administration",
    duration: "21 months full-time (tuition billed over six quarters)",
    tuitionNote:
      "2026-27 (latest published, for the Class of 2028; Booth will release 2027-28 tuition in spring 2027): Full-Time MBA tuition is US$89,976 for the year, charged at US$29,992 a quarter; the programme's tuition is billed in six quarterly instalments and covers up to 2200 units of coursework (2000 are required to graduate). Booth's first-year cost of attendance is US$132,449: tuition, the US$1,560 Student Services Fee, a US$3,100 Administrative Service Fee (first year only), the US$84 lifetime transcript fee, US$549 for books, about US$26,010 for housing and food, US$7,770 for personal expenses (including an estimate for health insurance), US$1,800 for transport and US$1,600 for a computer. Booth awards merit scholarships through the admissions process, and international students can borrow through loan programmes that do not need a US co-signer",
    description:
      "Chicago Booth's Full-Time MBA is known for its flexible curriculum: the only required course is LEAD, Booth's leadership development course. Beyond it, students take three foundations courses (financial accounting, microeconomics and statistics), seven courses spread across seven of eight areas covering business functions, management and the business environment, and ten electives, of which up to six can be taken elsewhere in the University. Students carry three or four courses a quarter, complete an internship or other qualifying work experience, and can follow one or more of 16 concentrations. Classes are held at the Harper Center in Hyde Park, and students can join more than 70 student groups. Booth reports that 86.8% of its graduates accepted job offers within three months of graduating. The programme is STEM-eligible, so eligible F-1 graduates can apply for the STEM OPT extension. Graduates can also take up to 300 units of further Booth courses at no charge.",
    officialProgramUrl: "https://www.chicagobooth.edu/mba/full-time",
    degree: "Master of Business Administration (MBA)",
    intake: "Autumn 2027",
    applicationDeadline:
      "Autumn 2027 entry, all at 11:59 pm Central Time: Round 1 closed on 15 September 2026 (decisions on 3 December 2026), so it had passed when we checked. Round 2: 7 January 2027, decisions on 25 March 2027. Round 3: 1 April 2027, decisions on 20 May 2027. Applicants to the Chicago Booth Scholars deferred-admission programme apply by 1 April 2027 and hear on 24 June 2027",
    admissionRequirements: [
      "A US bachelor's degree from an accredited institution or its equivalent; three-year bachelor's degrees from Bologna Process countries are accepted",
      "A GMAT or GRE score (no minimum, no preferred test and no superscoring; scores are valid for five years). Codes: GMAT H9X-9F-34, GRE 0685",
      "Application materials: four short answers of up to 300 characters each plus an optional 300-word answer, a résumé, one letter of recommendation from a supervisor, unofficial transcripts and a US$250 application fee. Interviews are virtual and by invitation, are required for admission and come with a short video simulation exercise",
      "English proficiency (Booth): non-native speakers send TOEFL (code 1832-02), IELTS, PTE or Duolingo English Test results. Booth's minimums are TOEFL 5.0 on tests taken from 21 January 2026 (104 iBT or 600 paper-based on older tests), IELTS 7, PTE 70 and Duolingo 135. Applicants below the minimum may still apply, and Booth will also assess their English at interview",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in Management (Chicago Booth School of Business)",
    slug: "uchicago-booth-master-in-management",
    level: "Master",
    field: "Management",
    duration: "10 months full-time",
    tuitionNote:
      "2026-27 (latest published estimate, for three quarters; fall 2027 rates were not yet available): MiM tuition is US$70,296, covering 1000 units (10 courses) charged in three quarterly instalments, and Booth's estimated cost of attendance is US$108,844: tuition, the US$1,560 Student Services Fee, the US$84 lifetime credentials fee, a US$775 Administrative Service Fee for orientation, US$549 for books and course materials, about US$26,010 for housing and food, US$7,770 for personal expenses (including an allowance for health insurance) and US$1,800 for transport. Every applicant is considered automatically for merit scholarships, and Booth encourages early applications",
    description:
      "Booth's Master in Management is a ten-month programme for recent high-achieving graduates from any background, including liberal arts and STEM, who want practical business skills before starting their careers. Students take five cohort core courses (Business Statistics, Financial Accounting, Microeconomics, Managerial Decision Modeling and Managerial Psychology), a career foundations course with workshops during Boothcamp and September term, and five electives chosen from more than 100 options, most of them taken alongside MBA students. Students can use four electives for an Area of Specialization in Analytics, Entrepreneurship, Finance, Marketing or Strategic Management, or design their own elective path. Booth reports a 93.5% job acceptance rate by six months after graduation, with graduates going into consulting, financial services, technology and other industries.",
    officialProgramUrl: "https://www.chicagobooth.edu/master-in-management",
    degree: "Master in Management (MiM)",
    intake: "Autumn 2027 (Class of 2028)",
    applicationDeadline:
      "Autumn 2027 entry (Class of 2028), at 11:59 pm Central Time: Round One closed on 8 October 2026 (decisions the week of 7 December 2026), so it had passed when we checked. Round Two: 7 January 2027, decisions the week of 8 March 2027. Round Three: 4 March 2027, decisions the week of 19 April 2027. Round Four: 29 April 2027, decisions the week of 31 May 2027",
    admissionRequirements: [
      "Eligibility: you must have finished, or will finish, your undergraduate degree between September 2025 and August 2027, at an institution recognised by its country's education ministry. You need at least one college-level quantitative course, such as mathematics or statistics, before the programme starts",
      "A GMAT or GRE score, with no preference between them. Waivers are available for UChicago graduates and for graduates of other universities who have taken at least three quantitative or STEM courses and have a GPA (or converted GPA) of 3.4 or higher out of 4.0",
      "Application materials: two essays (up to 300 words on how the MiM fits your career goals and up to 400 words about yourself), a 60-second video introduction, two letters of recommendation from people who know your undergraduate work, and unofficial transcripts (official transcripts and English translations after admission). Interviews are virtual, by invitation and required for admission, and come with a short video simulation",
      "English proficiency (Booth MiM): international applicants whose native language is not English send TOEFL (code 1832-02), IELTS Academic or PTE results, valid for two years. You are exempt with a degree from an institution in a listed English-speaking country (including the US, UK, Canada, Australia, Ireland, New Zealand, Singapore, Hong Kong and South Africa) or a degree taught only in English elsewhere, or after at least two years living and working full time in the United States. The MiM admissions page does not publish a minimum score",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Public Policy (MPP, Harris School of Public Policy)",
    slug: "uchicago-harris-mpp",
    level: "Master",
    field: "Public Policy",
    duration: "2 years full-time (18 courses)",
    tuitionNote: HARRIS_TUITION(
      "The two-year MPP is 18 courses, so you will normally pay this rate for six quarters, and the second year will be charged at that year's rate.",
      "Harris notes that international students need to show funding at the university's 12-month living-cost rate for visa paperwork"
    ),
    description:
      "Harris's flagship MPP trains students to use data and economic and political analysis to design and evaluate policy. The two-year programme has 18 courses (1800 units), at least 12 of them Harris public policy courses. Six are the core: Political Economy for Public Policy I and II, Statistics for Data Analysis I and II, and Microeconomics I and II, each available in a standard or advanced version. The remaining courses are electives. Students must also meet a mathematics requirement and a practical experience requirement, earn a C- or better in core courses and keep a cumulative GPA of at least 2.7. The MPP is STEM-designated, which lets eligible international graduates apply for the STEM OPT extension.",
    officialProgramUrl: "https://harris.uchicago.edu/academics/degrees/master-public-policy-mpp",
    degree: "Master of Public Policy (MPP)",
    intake: "Autumn 2027",
    applicationDeadline: HARRIS_DEADLINE("MPP"),
    admissionRequirements: [
      "A bachelor's degree or its equivalent",
      HARRIS_APPLICATION(
        "a 300-word motivation statement answering 'Why Harris? Why public policy?', an optional short essay (a policy puzzle in up to 500 words or a community essay in up to 300 words)"
      ),
      HARRIS_GRE,
      HARRIS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MA in Public Policy (Harris School of Public Policy)",
    slug: "uchicago-harris-ma-public-policy",
    level: "Master",
    field: "Public Policy",
    duration: "1 academic year full-time (about nine months, 9 courses)",
    tuitionNote: HARRIS_TUITION(
      "The nine-course MA is normally completed in those three quarters.",
      "Harris notes that international students need to show funding at the university's 12-month living-cost rate for visa paperwork"
    ),
    description:
      "Harris's one-year MA in Public Policy is aimed at people who already hold an advanced degree or have significant work experience and want the core tools of policy analysis, such as data analysis, microeconomics and statistics, with minimal time away from work. Students take nine graduate courses (900 units), at least seven of them Harris public policy courses: five of the six MPP core courses (all three autumn core courses in political economy, statistics and microeconomics and at least two of the winter sequels) and four electives, so the spring quarter is typically all electives. They must keep a 2.7 GPA, earn a C- or better in the core and meet the mathematics requirement. Students in other one-year UChicago master's programmes can combine it with their main degree.",
    officialProgramUrl: "https://harris.uchicago.edu/academics/degrees/ma-public-policy",
    degree: "Master of Arts (MA) in Public Policy",
    intake: "Autumn 2027",
    applicationDeadline: HARRIS_DEADLINE("MA in Public Policy"),
    admissionRequirements: [
      "A bachelor's degree or its equivalent; the programme is designed for applicants with an advanced degree or significant professional experience",
      HARRIS_APPLICATION(
        "a 300-word motivation statement answering 'Why Harris? Why public policy?', an optional short essay (a policy puzzle in up to 500 words or a community essay in up to 300 words)"
      ),
      HARRIS_GRE,
      HARRIS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MS in Computational Analysis and Public Policy (MSCAPP)",
    slug: "uchicago-harris-mscapp",
    level: "Master",
    field: "Public Policy and Computer Science",
    duration: "2 years full-time (18 courses, with a summer internship)",
    tuitionNote: HARRIS_TUITION(
      "MSCAPP is billed at the same 2026-27 Computational Analysis rate (US$23,190 for 300 units a quarter), and the two-year programme normally runs for six quarters.",
      "Harris notes that international students need to show funding at the university's 12-month living-cost rate for visa paperwork"
    ),
    description:
      "MSCAPP is run jointly by Harris and the University of Chicago's Department of Computer Science for students who want to apply programming and large data sets to public policy. The 18-course programme includes at least seven Harris courses (six core and one elective) and six computer science courses (five core and one elective). In the first year students take Computer Science with Applications I and II, databases for public policy, statistics and programme evaluation, then spend the summer in an internship; the second year adds microeconomics and electives. Students must pass the Harris mathematics requirement, meet a practical experience requirement and keep a GPA of at least 2.7. The degree is STEM-designated.",
    officialProgramUrl: "https://harris.uchicago.edu/academics/degrees/ms-computational-analysis-public-policy-mscapp",
    degree: "Master of Science (MS) in Computational Analysis and Public Policy",
    intake: "Autumn 2027",
    applicationDeadline: HARRIS_DEADLINE("MSCAPP programme"),
    admissionRequirements: [
      "A bachelor's degree or its equivalent",
      HARRIS_APPLICATION(
        "short answers of about 150 words each on your goals and on how a degree that is one-third public policy and one-third computer science will help you reach them (in place of the MPP motivation statement)"
      ),
      HARRIS_GRE,
      HARRIS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "MS in Applied Data Science (in-person programme)",
    slug: "uchicago-ms-applied-data-science",
    level: "Master",
    field: "Data Science",
    campus: "Chicago, Illinois (downtown: NBC Tower and Gleacher Center)",
    duration: "12-course track: typically 4 to 5 quarters full-time; 18-course thesis track: 21 months full-time",
    tuitionNote:
      "Summer 2026 to spring 2027 rates (latest published; the Data Science Institute expects tuition to rise by roughly 3 to 7% each fiscal year): US$6,830 per course, so US$81,960 for the 12-course programme or US$122,940 for the 18-course thesis track, charged by the courses you take each quarter. The US$1,500 enrolment deposit is credited toward tuition. Partial merit scholarships are available to admitted students. Living costs are not included: UChicago's 2026-27 graduate cost of attendance, excluding tuition, is US$37,878 for three quarters or US$48,665 for four quarters (including the US$5,517 U-SHIP health insurance), plus a one-time US$84 lifetime transcript fee",
    description:
      "The Data Science Institute's MS in Applied Data Science prepares students to work as data scientists, combining statistics, machine learning and data engineering with consulting and leadership skills. The standard track is 12 courses: six core courses (time series analysis and forecasting, statistical models, Machine Learning I and II, cloud-native data engineering, and leadership and consulting for data science), four electives and a two-course capstone project. From 2026-27 there is also a two-year, 18-course thesis track, full-time only. All students take a non-credit career seminar. Classes meet mostly on weekday evenings at UChicago's downtown campus, so many students also work or intern. Only the full-time in-person programme can sponsor an F-1 student visa, and the degree is STEM-designated for OPT purposes. The institute says competitive applicants typically have at least a year of work experience plus internships.",
    officialProgramUrl:
      "https://datascience.uchicago.edu/education/masters-programs/ms-in-applied-data-science/in-person-program/",
    degree: "Master of Science (MS) in Applied Data Science",
    intake: "Autumn 2027",
    applicationDeadline:
      "Autumn 2027 entry: the First Priority deadline (9 November 2026) had passed when we checked. Second Priority: 7 December 2026. International deadline for applicants who need visa sponsorship: 26 January 2027. Third Priority: 4 March 2027. Fourth Priority: 6 May 2027. Final deadline: 23 June 2027. Decisions are usually released one to two months after each deadline, and the application may close early if the class fills",
    admissionRequirements: [
      "A bachelor's degree from an accredited institution or its equivalent",
      "Application materials: unofficial transcripts, a résumé, a candidate statement of up to 700 words, a programming supplement of up to two pages, a video portfolio (one required and one optional video of about 90 seconds each), two letters of recommendation (ideally one from a supervisor) and a US$90 application fee",
      GRAD_ENGLISH_UC("TOEFL iBT 5.0 on the new score scale (102 on tests taken before 21 January 2026) or IELTS Academic 7.0, with no section minimums"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "MS in Financial Mathematics",
    slug: "uchicago-ms-financial-mathematics",
    level: "Master",
    field: "Financial Mathematics",
    duration: "5 quarters full-time (accelerated; 1250 units)",
    tuitionNote:
      "2026-27 (latest published): Financial Mathematics tuition is US$8,017 per 100-unit course, so the 1250-unit degree comes to about US$100,212 at this year's rate (our sum); later quarters are charged at the rates then in force. Students also pay the US$520 quarterly student services fee and, unless they waive it, U-SHIP health insurance at US$1,839 a quarter, plus the one-time US$84 transcript fee. Admitted students pay a US$3,000 deposit. Every applicant is considered for merit scholarships. UChicago's 2026-27 graduate cost of attendance, excluding tuition, is US$37,878 for three quarters or US$48,665 for four",
    description:
      "UChicago's MS in Financial Mathematics, part of the Department of Mathematics and the Physical Sciences Division, trains quantitative professionals for trading, risk management, asset management and financial technology. The full-time curriculum takes five quarters: the first autumn lays the mathematical foundations and introduces markets; winter and spring cover risk, regression and time series, portfolio theory, option pricing, fixed income and foreign exchange; the summer is spent on a Project Lab or an internship (through Curricular Practical Training for international students); and the final autumn is mostly electives. Students can also earn a degree concentration. Courses are 100 units for a full quarter or 50 units for a half-quarter course, and the degree needs 1250 units. The programme is STEM-designated.",
    officialProgramUrl: "https://finmath.uchicago.edu/curriculum/",
    degree: "Master of Science (MS) in Financial Mathematics",
    intake: "Autumn 2027",
    applicationDeadline:
      "Autumn 2027 entry: Round 1 closed on 2 November 2026, so it had passed when we checked. Round 2: 1 February 2027. Applications, letters of recommendation and verified test scores must all arrive by the deadline, and offers are made on a rolling basis",
    admissionRequirements: [
      "A bachelor's degree with preparation in multivariable calculus, linear algebra and probability, and programming experience (C++ or Python)",
      "Application materials: a CV, transcripts, three short written statements of up to 250 words each, two video statements, three letters of recommendation (at least one from a professional contact) and a US$90 application fee. The GRE is not required (GRE institution code 1832, department code 0799)",
      "English proficiency: TOEFL or IELTS results are required unless you meet the University of Chicago's waiver criteria (English as your primary language since childhood, or a recent full-time year at an English-medium institution in a listed country). The Physical Sciences Division minimum for this programme is TOEFL iBT 4.5 on the new scale (90 on older tests) or IELTS Academic 7.0, and the programme says higher scores are preferred. The Duolingo English Test is not accepted. TOEFL institution code 1832, department code 72",
    ],
  },

  {
    ...UNIVERSITY,
    name: "MA in Computational Social Science (MACSS)",
    slug: "uchicago-ma-computational-social-science",
    level: "Master",
    field: "Computational Social Science",
    duration: "2 years full-time (18 courses and an MA thesis)",
    tuitionNote:
      "2026-27 (latest published): Social Sciences Division master's tuition is US$24,462 a quarter for 300 units, or US$73,386 for the Autumn, Winter and Spring quarters (our sum); the second year is charged at that year's rate. " +
      GRAD_LIVING +
      ". MACSS awards scholarships at admission and says most applicants who ask to be considered receive aid; its full-tuition Dean's Opportunity Scholarship is only open to Round 1 and Round 2 applicants, and second-year renewal needs a GPA of at least 3.1",
    description:
      "MACSS is the University of Chicago's two-year master's programme in computational social science, for students who want to combine social science questions with programming, machine learning and large-scale data. The first year starts with boot camps, then the core sequence (MACS 30000, 30100 and 30200: Introduction to Computational Social Science, Machine Learning for Computational Social Science and Computational Research Design), a three-course computing sequence in Python, social science electives and a workshop. In the second year students take three advanced computational courses, three more social science electives and three open electives, and they write an MA thesis of about 30 to 70 pages, which can be academic research or a professional project. There is also an economics track.",
    officialProgramUrl: "https://macss.uchicago.edu/programs-of-study/macss-general-curriculum",
    degree: "Master of Arts (MA) in Computational Social Science",
    intake: "Autumn 2027",
    applicationDeadline:
      "Autumn 2027 entry (MACSS lists the dates without years; we read them as the current cycle): Round 1 on 2 November had passed when we checked. Round 2: 7 January 2027. Round 3: 25 March 2027. Round 4: 1 June 2027. MACSS advises applicants who need a student visa to apply in an earlier round",
    admissionRequirements: [
      "A bachelor's degree or its equivalent",
      "Application materials: unofficial transcripts, a candidate statement, a single-authored writing sample of up to 30 pages, a CV, three letters of recommendation and the application fee (fee waivers are available). The GRE is only required for the economics track",
      "English proficiency (Social Sciences Division, for autumn 2027): applicants who are not exempt under the University of Chicago's criteria must send TOEFL iBT or IELTS Academic results (no other tests are accepted) showing at least 5.0 in every TOEFL section on the new scale (on older tests, Reading 24, Listening 22, Writing 24 and Speaking 25) or IELTS 7.0 in every band. Applicants with lower scores may be considered for conditional admission",
    ],
  },

  {
    ...UNIVERSITY,
    name: "MS in Computer Science (12-course programme, Masters Program in Computer Science)",
    slug: "uchicago-mpcs-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "15 to 24 months (12 courses plus an internship or practicum)",
    tuitionNote:
      "2026-27 (latest published): MPCS tuition is US$7,415 per course, or US$22,254 for a full-time load of three courses a quarter, so the 12-course programme totals US$89,016 at this year's rate (the 9-course programme is US$66,762). The 12-course programme page still shows an older estimate of about US$85.5K, so we used the tuition page. Students also pay the US$520 quarterly student services fee, U-SHIP health insurance (US$1,839 a quarter in 2026-27) unless waived and the one-time US$84 transcript fee; any immersion courses cost extra. UChicago's 2026-27 graduate cost of attendance, excluding tuition, is US$37,878 for three quarters or US$48,665 for four",
    description:
      "The Masters Program in Computer Science (MPCS) offers a professionally focused MS in Computer Science that does not require a computer science undergraduate degree: newcomers take summer or autumn immersion courses in programming and discrete mathematics first. The 12-course version has five core courses in programming, algorithms and computer systems (with choices such as Java, Python or C and systems courses in Unix, security, networking or databases), four courses in one specialisation (Artificial Intelligence - Applications, Artificial Intelligence - Foundations, High Performance Computing, or Software Engineering) and three electives, plus an internship or practicum. Classes are in Hyde Park, and many are taught in the evening. The degree is STEM-designated, so eligible graduates can apply for the STEM OPT extension, and international students can use Curricular Practical Training for internships. MPCS reports an average salary of US$167,400 for its 2024-25 graduates.",
    officialProgramUrl: "https://masters.cs.uchicago.edu/cs-masters-specializations-2/",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Autumn 2027 (full-time)",
    applicationDeadline:
      "Autumn 2027 full-time entry, at 11:59 pm Central Time, through UChicago Advanced Scholars: Round 1 closed on 2 November 2026, so it had passed when we checked. Round 2: 1 February 2027. Round 3: 3 May 2027",
    admissionRequirements: [
      "A bachelor's degree in any field; applicants without a computer science background may be asked to complete immersion courses before or at the start of the programme",
      "Application materials (UChicago Advanced Scholars): transcripts, two letters of recommendation, a résumé and a personal statement",
      GRAD_ENGLISH_UC("TOEFL iBT 5.0 on the new score scale (100 on tests taken before 21 January 2026) or IELTS Academic 7.0"),
    ],
  },
];
