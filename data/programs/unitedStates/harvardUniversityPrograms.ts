import type { Program } from "../../programs";

// Harvard University: 8 Harvard College undergraduate concentrations for fall 2027 first-year entry
// and 7 graduate programmes at HBS, HLS, HKS, the Harvard T.H. Chan School of Public Health,
// Harvard Griffin GSAS / SEAS, and HGSE. Sources (viewed 8 November 2026):
// Harvard College first-year applicants, international applicants, application requirements,
// Restrictive Early Action and testing FAQs (college.harvard.edu/admissions and
// college.harvard.edu/resources/faq), the First Year Application Supplement for entrance in
// fall 2027 (college.harvard.edu/sites/default/files/2026-08/Harvard_FY_supplement_2026-2027.pdf),
// financial aid and 2026-27 cost of attendance (college.harvard.edu/financial-aid and
// college.harvard.edu/financial-aid/how-aid-works/cost-attendance), academic environment and
// concentrations pages (college.harvard.edu), the Advising Programs Office curriculum and
// graduation requirements page (advising.college.harvard.edu), Fields of Concentration 2026-27
// (handbook.college.harvard.edu), SEAS undergraduate pages for Computer Science, Applied
// Mathematics and Engineering Sciences (seas.harvard.edu), the MCB Neuroscience page
// (mcb.harvard.edu), HBS MBA cost of attendance, application dates, application process,
// international applicants and MBA overview (hbs.edu/mba), the HBS MBA Application Guide
// 2026-2027 (apply.hbs.edu), HLS LL.M. admissions, deadlines and materials, and tuition and
// financial aid (hls.harvard.edu), HKS MPP programme page, how to apply, and 2026-27 tuition
// and fees (hks.harvard.edu), Harvard Chan School 2026-27 tuition and cost of attendance,
// application requirements and programme eligibility (hsph.harvard.edu), Harvard Griffin GSAS
// 2026-27 cost of attendance, applying to degree programs, English proficiency, and the Data
// Science and Computational Science and Engineering programme pages (gsas.harvard.edu), SEAS
// graduate FAQs (seas.harvard.edu), and HGSE tuition and costs, how to apply, Ed.M. application
// requirements and international applicants pages (gse.harvard.edu). Costs are in US dollars.
// Harvard College does not offer an undergraduate business major; the HBS MBA is the business
// degree listed here. The MD and JD were skipped because international eligibility, seats,
// tuition and deadlines were not assembled to the same standard; the HLS LL.M. is listed
// instead of the JD. A separate Harvard College Electrical Engineering S.B. or Mechanical
// Engineering S.B. was not added in this batch.

const UNIVERSITY = {
  universitySlug: "harvard-university",
  universityName: "Harvard University",
  country: "United States",
  language: "English",
  campus: "Cambridge",
  programType: "Full-time",
} as const;

// College 2026-27 COA (college.harvard.edu/financial-aid/how-aid-works/cost-attendance):
// tuition 62,226 + fees 6,216 + housing 14,250 + food 8,942 = billed 91,634; personal 2,500;
// books 1,000; transport 0-5,000; total billed and unbilled 95,134-100,134. Student health
// insurance 4,954 unless covered by a family plan.
const UG_TUITION =
  "2026-27 (fall 2026 and spring 2027): Harvard College charges all undergraduates, including international students, US$62,226 in tuition plus US$6,216 in fees, US$14,250 for housing and US$8,942 for food, or US$91,634 in billed costs. Adding estimated personal expenses of US$2,500, books of US$1,000 and transportation of US$0 to US$5,000 brings the published cost of attendance to US$95,134 to US$100,134. Health insurance is required and costs US$4,954 for 2026-27 unless you are covered under a family plan. International students are eligible for the same need-based aid as US students: admissions are need-blind, including for foreign citizens, and the College meets 100 percent of demonstrated need. There are no merit scholarships. For families with typical assets, those with annual incomes below US$100,000 are not asked for a parent contribution, and aid covers at least the full cost of tuition for incomes up to US$200,000; aid above that level depends on individual circumstances. Students are generally expected to cover about US$3,500 in personal expenses each year, usually through work. Travel allowances are included in aid awards for students who receive financial aid. 2027-28 rates had not been published when we checked";

const UG_INTAKE = "Fall semester only (first-year students enrol for fall 2027 entry)";

const UG_DEADLINE =
  "Fall 2027 entry (2026-27 cycle), through the Common Application with the Harvard College Questions (or QuestBridge via the National College Match). Harvard offers non-binding Restrictive Early Action and Regular Decision; it does not offer binding Early Decision. Restrictive Early Action: apply by 1 November 2026 at 11:59 p.m. in your local time (counselors may submit supporting materials up to a week later); decisions by mid-December. Regular Decision: apply by 1 January 2027 at 11:59 p.m. in your local time; decisions by the end of March. The reply deadline is early May, and no enrolment deposit is required. If you apply Restrictive Early Action you may not apply early to another private university under Early Decision, Early Action or Restrictive Early Action, or to a binding early plan at a public university; non-binding early applications to public universities, military academies or universities outside the United States are allowed, as are Regular Decision and Early Decision II applications elsewhere. Standardized test scores should reach Harvard by the end of October for Restrictive Early Action (the November series is still accepted) and as early as possible for Regular Decision (December SAT or February ACT scores may be used). Submit the College's financial aid application with Restrictive Early Action if you want an aid decision in mid-December, or by 1 February 2027 for Regular Decision if you want an aid decision when admissions results are released in late March. The application fee is US$95, or a fee waiver (available to international students if the fee is a hardship)";

const UG_TESTING =
  "Testing: required. First-year applicants must submit the SAT or ACT (SAT code 3434, ACT code 1840). In exceptional cases, when those tests are not accessible because of cost, test-centre availability or similar barriers, AP exam results, IB actual or predicted scores, GCSE/A-Level actual or predicted results, or national leaving-exam results or predictions can meet the requirement; English proficiency exams such as the TOEFL, IELTS or Duolingo cannot. Students who have AP, IB, GCSE or national-exam results are still expected to take the SAT or ACT if they can. There are no score cutoffs. Harvard does not create a superscore, but it notes the highest SAT section scores across test dates and the strongest single ACT sitting (you may send an ACT superscore, and Harvard will also receive the full results from your best sitting). The optional science section of the new ACT is not required, and Harvard will not superscore across old and new ACT versions. You may self-report scores; enrolling students who self-reported must later send official results. The digital SAT is reviewed in the same way as earlier SAT formats";

const UG_ENGLISH =
  "English proficiency: first-year and transfer applicants are not required to take an English proficiency exam. Harvard says a strong command of English is essential, and you may submit TOEFL, IELTS or Duolingo scores if you wish. Those scores cannot replace the SAT or ACT requirement";

const UG_ACADEMIC =
  "Application materials: the Common Application, including an activities list, the personal essay and five required Harvard short-answer questions (150 words each), a school report with counselor letter and high school transcript, two teacher recommendations, a midyear school report after first-semester senior grades (Restrictive Early Action applicants send it later if deferred; IB and A-Level applicants send predicted grades), and a final school report if you enrol. Review is holistic: academic preparation, contributions to community, talents and life experience, and the ability to make use of Harvard's resources are all considered. There are no quotas by citizenship or by the location of your secondary school, and asking for financial aid does not affect the admission decision, including for foreign citizens. Translations of transcripts or recommendations should be done by someone other than you (an English teacher is acceptable) and should accompany the original documents";

const UG_ROUTE = (extra: string) =>
  `Admission route: you apply to Harvard College as a whole, not to a concentration. Harvard does not admit first-year applicants to particular programmes; the application invites you to list fields you might like to explore, but those choices are not binding. The College's Advising Programs Office says students declare a concentration in their third term (typically the fall of sophomore year). Harvard College does not offer an undergraduate business major. ${extra}`;

export const harvardUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "harvard-ab-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "Harvard College's Computer Science concentration, offered through the Harvard John A. Paulson School of Engineering and Applied Sciences, leads to the Bachelor of Arts (A.B.), not an S.B. The basic programme is 11 to 14 four-credit courses in mathematics, theoretical computer science, computer software and other areas of computer science; students who place out of part or all of introductory calculus (Mathematics 1ab) reduce that total to 11 courses. Mathematics covers linear algebra, single-variable calculus and probability or statistics, and plans of study must include more than one subfield of computer science. An honors track adds courses and breadth, and joint or double concentrations and a Mind, Brain, and Behavior pathway are available. Typical starting courses include CS 50 (Introduction to Computer Science I) and, for some students, CS 32, CS 51 or CS 61. Many SEAS courses meet at the Science and Engineering Complex in Allston as well as in Cambridge. A concurrent A.B./S.M. is open only to students already enrolled in the College.",
    officialProgramUrl: "https://seas.harvard.edu/computer-science/bachelors-degree-computer-science",
    degree: "Bachelor of Arts (A.B.) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Computer Science is a Harvard College concentration taught in SEAS"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "harvard-ab-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "Harvard College's Economics concentration is a Bachelor of Arts that treats economics as a social science: it studies how people pursue goals and how markets, firms, legislatures and families take shape through those choices. Concentrators learn core principles, explore subfields and gain a foundation for reading and carrying out economics research. Common starting points include Economics 10a and 10b (Principles of Economics), mathematics at least through the level of Math 1a, a statistics course, intermediate microeconomics and macroeconomics (Economics 1010 or 1011), econometrics (Economics 1123 or 1126) and the Economics 970 sophomore tutorial, where students apply theory to a field and practise critiquing and conducting research.",
    officialProgramUrl: "https://college.harvard.edu/academics/liberal-arts-sciences/concentrations",
    degree: "Bachelor of Arts (A.B.) in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Economics is a Harvard College concentration in the social sciences"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Applied Mathematics",
    slug: "harvard-ab-applied-mathematics",
    level: "Bachelor",
    field: "Applied Mathematics",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "Applied Mathematics at Harvard College is a quantitative Bachelor of Arts offered through SEAS. Students build foundations in computation, probability and discrete and continuous mathematics, then combine that training with an application area in which mathematical methods are used in a substantial way. Pairing applied mathematics with physics can look similar to a physics degree; pairing it with psychology or government looks quite different. Current concentrators have chosen application areas ranging from government, psychology, astronomy or astrophysics and chemistry to theoretical neuroscience, and there is a defined path for students who specialise in economics. Many SEAS courses meet at the Science and Engineering Complex in Allston as well as in Cambridge.",
    officialProgramUrl: "https://seas.harvard.edu/applied-mathematics/bachelors-applied-mathematics",
    degree: "Bachelor of Arts (A.B.) in Applied Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Applied Mathematics is a Harvard College concentration taught in SEAS"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Government",
    slug: "harvard-ab-government",
    level: "Bachelor",
    field: "Political Science",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "The Government concentration is Harvard College's political science Bachelor of Arts. The department sits at the meeting point of history, law, economics, sociology, philosophy and ethics, and it both borrows from those fields and develops methods of its own. Students are asked to examine their assumptions about politics, analyse theoretical, empirical and rhetorical arguments, consider alternatives and write and speak clearly. The programme aims for breadth across political science and also lets each student shape a path through electives and at least one required seminar. Gateway courses include foundations in political theory, comparative politics, American government and international conflict and cooperation, as well as a data course (Government 1005).",
    officialProgramUrl: "https://college.harvard.edu/academics/liberal-arts-sciences/concentrations",
    degree: "Bachelor of Arts (A.B.) in Government",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Government is a Harvard College concentration in the social sciences"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Neuroscience",
    slug: "harvard-ab-neuroscience",
    level: "Bachelor",
    field: "Neuroscience",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "Harvard College's Neuroscience concentration is a Bachelor of Arts that studies how the nervous system gives rise to behaviour, from molecules and cells to circuits, cognition and disease. The curriculum mixes foundational life-science and quantitative courses with advanced electives in areas such as cells and circuits, physiology, learning and memory, cognitive science, development, genetics, computational modelling, and disease and therapeutics. Laboratory work and independent research are available. First-year pathways often include Life Sciences 1a or an approved computational introduction, later work such as Neuro 80 (Neurobiology of Behavior), and a foundational course chosen from options that include behaviour, circuits, neurophysiology, computational neuroscience or molecular approaches.",
    officialProgramUrl: "https://www.mcb.harvard.edu/undergraduate/neuroscience/",
    degree: "Bachelor of Arts (A.B.) in Neuroscience",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Neuroscience is a Harvard College life-sciences concentration"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Engineering Sciences",
    slug: "harvard-engineering-sciences",
    level: "Bachelor",
    field: "Engineering",
    duration: "4 years full-time (128 credits overall; the A.B. concentration is 14 to 16 courses and the S.B. concentration is 20 courses)",
    tuitionNote: UG_TUITION,
    description:
      "Engineering Sciences is the integrative engineering concentration in Harvard College, offered through SEAS, and it is available as either a Bachelor of Arts or a Bachelor of Science. The A.B. requires 14 to 16 courses (56 to 64 credits) with a track in biomedical sciences and engineering, electrical and computer engineering, engineering physics, or mechanical and materials science and engineering. The S.B. requires 20 courses (80 credits) and typically follows a bioengineering or environmental science and engineering track; a cross-disciplinary S.B. track is also available. Related but separate SEAS degrees include the Biomedical Engineering A.B., Environmental Science and Engineering A.B., Electrical Engineering S.B. and Mechanical Engineering S.B. Many engineering courses meet at the Science and Engineering Complex in Allston as well as in Cambridge.",
    officialProgramUrl: "https://seas.harvard.edu/engineering-sciences",
    degree: "Bachelor of Arts (A.B.) or Bachelor of Science (S.B.) in Engineering Sciences",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Engineering Sciences is a Harvard College concentration taught in SEAS; you do not apply separately to the A.B. or S.B. as a first-year applicant"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Statistics",
    slug: "harvard-ab-statistics",
    level: "Bachelor",
    field: "Statistics",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "Harvard College's Statistics concentration is a Bachelor of Arts organised around principled ways to collect and analyse data, make decisions under uncertainty and model randomness, with applications across the social, natural and medical sciences. Students learn conceptual, computational and mathematical tools for quantifying uncertainty and making sense of complex data. Common starting points include an introductory statistics and data science course (only one of Statistics 100, 102 or 104 may be taken for credit) and then, in sequence, Statistics 110 (Introduction to Probability), Statistics 111 (Introduction to Theoretical Statistics) and Statistics 139 (linear models).",
    officialProgramUrl: "https://college.harvard.edu/academics/liberal-arts-sciences/concentrations",
    degree: "Bachelor of Arts (A.B.) in Statistics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Statistics is a Harvard College concentration in the mathematical sciences"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Molecular and Cellular Biology",
    slug: "harvard-ab-molecular-cellular-biology",
    level: "Bachelor",
    field: "Biology",
    duration: "4 years full-time (128 credits, or 32 four-credit courses, over eight semesters)",
    tuitionNote: UG_TUITION,
    description:
      "Molecular and Cellular Biology is a Harvard College Bachelor of Arts that studies biological processes through molecules and their interactions in cells and tissues, and through the way the genome organises cell behaviour. Concentrators learn to investigate life at the cellular and molecular scale, apply the scientific method in and beyond the laboratory, and read scientific literature critically. First-year preparation typically includes mathematics through a multivariable or equivalent sequence, general chemistry, and either Life Sciences 1a and 1b or Life Sciences 50; Chemistry 10 is another common early course. Second-year work usually includes MCB 60, a further MCB foundation course and organic chemistry.",
    officialProgramUrl: "https://college.harvard.edu/academics/liberal-arts-sciences/concentrations",
    degree: "Bachelor of Arts (A.B.) in Molecular and Cellular Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_ROUTE("Molecular and Cellular Biology is a Harvard College life-sciences concentration"),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC,
    ],
  },

  {
    ...UNIVERSITY,
    campus: "Allston",
    name: "Master of Business Administration",
    slug: "harvard-mba",
    level: "Master",
    field: "Business",
    duration: "2 years full-time",
    tuitionNote:
      "2026-27: Harvard Business School's full-time MBA tuition is US$84,760. For a single student the published nine-month budget also includes a US$1,944 Student Health Fee, US$4,954 for the Student Health Insurance Plan (which you may waive if you have comparable coverage; the health fee cannot be waived), US$18,600 for housing, US$9,400 for food, US$1,860 for transport and US$8,800 for other living expenses, for a total of US$130,318. A computer is budgeted separately at about US$1,500. Married-student and family budgets are higher because of additional housing, food, transport, living costs and dependent health coverage. The academic year is nine months; off-campus leases are often 12 months, so extra rent is not in the nine-month total. Need-based scholarships are available to domestic and international students (the School quotes an average award of US$47,000 a year). 2027-28 rates had not been published when we checked",
    description:
      "The Harvard Business School MBA is a two-year, full-time general management degree on the School's Allston campus, taught primarily through the case method. First-year students move through a required curriculum in a section of about 90 classmates and take a required course on building with AI tools; the second year is largely elective. The programme is residential and discussion-heavy, so spoken and written English need to be strong enough for cold-called case discussion. Joint degrees and a 2+2 deferred-admission path for college students are offered separately. International students on a STEM academic track may qualify for extended Optional Practical Training after graduation.",
    officialProgramUrl: "https://www.hbs.edu/mba",
    degree: "Master of Business Administration (MBA)",
    intake: "Fall (Class of 2029 matriculates fall 2027)",
    applicationDeadline:
      "Fall 2027 entry (MBA Class of 2029): Round One by 9 September 2026 at 12:00 p.m. US Eastern (decisions 10 December 2026); Round Two by 5 January 2027 at 12:00 p.m. US Eastern (decisions 25 March 2027). Applications that arrive after Round One are read in Round Two; applications after Round Two are not considered. You may apply in only one round each year. The 2+2 deferred-admission round is due 28 April 2027. There is an application fee; need-based fee waivers are available if you request one at least two weeks before the deadline",
    admissionRequirements: [
      "A college or university degree equivalent to a four-year US bachelor's degree (international three-year bachelor's degrees are accepted). Upload transcripts from every undergraduate and graduate institution where you earned a degree; unofficial copies are acceptable to apply. If you are admitted, original-language transcripts and official English translations are verified through World Education Services",
      "GMAT or GRE required (no preference between them, no minimum score and no test waiver described in the application guide); you must take the test before you submit. An interview is by invitation only and is required if offered, followed by a written post-interview reflection within 24 hours. Other materials include a resume, employment history, activities and awards, post-MBA goals, essays and recommendations",
      "English language test: a TOEFL, IELTS, Pearson Test of English or Duolingo English Test is required if your undergraduate institution did not teach solely in English (a later graduate degree taught in English does not remove the requirement, though HBS then recommends but does not require a score). There is no minimum score, but the Admissions Board discourages applications below TOEFL 5 on the new 1-6 scale or 109 on the traditional 0-120 scale, IELTS 7.5, PTE 75 or Duolingo 145. Send official scores (TOEFL code 3444)",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Laws",
    slug: "harvard-llm",
    level: "Master",
    field: "Law",
    duration: "1 academic year full-time",
    tuitionNote:
      "2026-27: Harvard Law School LL.M. tuition is US$84,400. The published single-student budget also includes US$6,898 for health insurance and health services fees, a US$450 activities fee, US$18,900 for housing, US$6,760 for food, US$6,192 for personal expenses, US$1,750 for books and supplies and US$1,900 for travel, for a total of at least US$127,250. Add at least US$16,000 for a spouse and US$8,400 for each child if those family members will live with you (these family figures are the School's own budget, not a US federal-loan budget). Aid is need-based and is offered as grants and loans; the School reports that everyone in the 2026-27 LL.M. class who demonstrated need received some form of aid. 2027-28 rates had not been published when we checked",
    description:
      "The Harvard Law School LL.M. is a one-year graduate law degree in Cambridge for about 180 students from around 60 countries each year. It is designed for intellectually curious lawyers from many legal systems, including practitioners, government officials, teachers, judges, diplomats, activists and others, and the class is drawn mainly from outside the United States. Students propose a course of study, join the Law School community and typically return home to teaching, public service, the judiciary, international organisations, NGOs or private practice. Harvard is rarely able to admit applicants who already hold or are pursuing another US LL.M.",
    officialProgramUrl: "https://hls.harvard.edu/graduate-program/graduate-program-admissions-and-financial-aid/ll-m-admissions/",
    degree: "Master of Laws (LL.M.)",
    intake: "August (class beginning August 2027)",
    applicationDeadline:
      "For the LL.M. class beginning in August 2027: apply by 1 December 2026 at 11:59 p.m. US Eastern. The deadline is strict, and transcripts, TOEFL reports and other required documents must also arrive by that date. The application fee is US$90; fee-waiver requests are considered only for extreme financial hardship after you submit both the application and a complete financial aid application, never on a merit basis",
    admissionRequirements: [
      "A J.D. from an ABA-approved US law school or a first law degree (J.D., LL.B. or the equivalent) from a foreign law school. Applicants from abroad are not required to have work experience, but the Graduate Program generally finds that at least two years of work or further study after law school leads to a clearer plan for the LL.M. year. US applicants are typically expected to have at least two or three years beyond law school and a commitment to law teaching",
      "Application materials through the Graduate Program's online form: CV or resume, personal statement (parts A and B), transcripts and diplomas from each university attended, and two or three letters of recommendation. MyBest TOEFL reports are not accepted",
      "TOEFL is required if you come from a non-English-speaking country and your full-time legal education was not entirely in English; scores must be from a test taken within two years (institution code 3457). Minimums are 100 on the internet-based TOEFL with at least 25 on each subsection for tests taken before 21 January 2026, or an overall score of 5.5 with at least 5.5 in reading and listening and 5.0 in writing and speaking for tests taken after that date. Waivers are rare and are considered only after you apply, typically if you completed at least two consecutive years of full-time university education entirely in English and your English is near that of a native speaker",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in Public Policy",
    slug: "harvard-mpp",
    level: "Master",
    field: "Public Policy",
    duration: "2 years full-time in residence (at least 72 credits; typically 12 to 24 credits a semester)",
    tuitionNote:
      "2026-27: Harvard Kennedy School MPP tuition is US$64,340, plus a US$618 course materials fee, a US$250 student activity fee, a US$1,944 Student Health Fee and US$4,954 for the Student Health Insurance Plan (which you may waive with comparable coverage), or US$72,106 in tuition and fees. Estimated indirect costs for nine months are US$26,568 for living expenses, US$2,583 for personal expenses, US$891 for transport and US$1,611 for books and supplies (US$31,653), for a total cost of attendance of US$103,759. Full-time tuition covers 12 to 24 credits a semester. 2027-28 rates are due to be published in March 2027",
    description:
      "The Harvard Kennedy School Master in Public Policy is a two-year, full-time professional degree in Cambridge that trains students to analyse public problems and design workable solutions. The first year is a cross-disciplinary core in economics, quantitative analysis, policy design and delivery, politics, ethics, negotiation and related subjects, ending in a two-week Spring Exercise in which small teams tackle a live policy problem. Most students take a policy internship in the summer after the first year. In the second year each student joins a Policy Area of Concentration seminar — Business and Government Policy; Democracy, Politics, and Institutions; International and Global Affairs; International Development; Social and Urban Policy; or Technology (a pilot for 2026-27 and 2027-28) — and completes a Policy Analysis Exercise for a public or nonprofit client. Joint MBA and J.D. degrees and concurrent professional degrees at partner schools are available.",
    officialProgramUrl: "https://www.hks.harvard.edu/educational-programs/masters-programs/master-public-policy",
    degree: "Master in Public Policy (MPP)",
    intake: "Fall (2027-28 academic year; one start date each year)",
    applicationDeadline:
      "For the 2027-28 academic year: 1 December 2026 at 12:00 p.m. (noon) US Eastern. The financial aid application is due 15 January 2027 at noon Eastern. Decisions are released in mid-March 2027. You may apply to only one HKS master's programme per cycle. The application fee is US$100 (waivers are available for listed public-service programmes and for applicants who need one in order to apply)",
    admissionRequirements: [
      "A bachelor's degree with a strong academic record and evidence of quantitative preparation, such as undergraduate economics, statistics or calculus, regardless of your major. Work experience is preferred but not required; incoming MPP students typically have two to three years of professional experience",
      "Application materials: online form, essays (including a 750-word public-service essay, a 250-word perspectives essay and a 250-word professional biography), a resume, three letters of recommendation, transcripts from every college or university where you earned academic credit, and the application fee. You may upload unofficial transcripts to apply",
      "GRE or GMAT scores are required and are not superscored (GRE code 3454; GMAT code HRL-27-69). The School describes a waiver for applicants with an overall average of B or better and grades of B+ or better in statistics and/or calculus and intermediate economics, but as of 8 November 2026 its how-to-apply page said the waiver deadline for 2027-28 applicants had passed, so anyone who had not already requested a waiver must submit GRE or GMAT results. Official scores must arrive by the application deadline and are valid for five years",
      "English proficiency: required if you are a non-native English speaker and your undergraduate degree was not taught in English (a later master's or doctorate taught in English does not satisfy this). Minimums in a single sitting are TOEFL iBT 5 on the current 1-6 scale (or 100 on tests taken before January 2026), with competitive applicants closer to 5 (or 25) on each section; IELTS Academic 7 overall (7 on each section is more competitive); or Cambridge English C1 or C2 with 185 overall and on each section. MyBest TOEFL, IELTS One Skill Retake and IELTS General Training are not accepted. Applicants who must submit English scores also record a video essay",
    ],
  },

  {
    ...UNIVERSITY,
    campus: "Longwood",
    name: "Master of Public Health",
    slug: "harvard-mph",
    level: "Master",
    field: "Public Health",
    duration: "MPH-45: 1 year full-time; MPH-65: 1.5 years full-time (residential programmes on the Longwood campus)",
    tuitionNote:
      "2026-27 (June 2026 to May 2027): residential MPH-45 tuition is US$77,400 a year and MPH-65 tuition is US$67,760 a year. Adding the US$4,954 Student Health Insurance Plan and US$1,944 Student Health Fee brings direct billed costs to US$84,298 (MPH-45) or US$74,658 (MPH-65). Estimated nine-month indirect costs are US$30,236 (US$1,400 books and supplies, US$18,594 housing, US$5,238 food, US$4,194 personal and US$810 transport), for a published yearly total of US$114,534 (MPH-45) or US$104,894 (MPH-65). Part-time students generally pay half the full-time tuition. Online and summer-focused MPH variants use different rates. Tuition rises each year, and 2027-28 figures had not been published when we checked",
    description:
      "The Harvard T.H. Chan School of Public Health's residential Master of Public Health is offered on the Longwood campus in Boston as a 45-credit one-year programme or a 65-credit 1.5-year programme, depending on your prior education, work experience and field of study. MPH-65 fields listed for 2027-28 entry are Health and Social Behavior, Health Management and Health Policy. MPH-45 fields include Clinical Effectiveness, Occupational and Environmental Health and Quantitative Methods (which require a prior master's or doctoral degree) and Global Health, Health and Social Behavior, Health Management, Health Policy and Nutrition (which require a bachelor's degree plus at least five years of relevant work, or a master's or doctoral degree). Online variants such as MPH-GEN and MPH-EPI exist separately and are not this residential degree.",
    officialProgramUrl: "https://hsph.harvard.edu/admissions/applying-to-a-degree-program/program-eligibility-requirements/",
    degree: "Master of Public Health (MPH)",
    intake: "Fall (2027-28 academic year for most residential MPH fields; confirm the exact start term for your field)",
    applicationDeadline:
      "For most Harvard Chan master's programmes, including the MPH, apply through SOPHAS by 1 December (the School's 2027-28 application instructions encourage submitting by mid-November so materials can be verified). SOPHAS charges US$155 for the first programme and US$65 for each additional programme; SOPHAS fee assistance is limited and first come, first served",
    admissionRequirements: [
      "A US bachelor's degree from a regionally accredited college or university, or the international equivalent (non-US and non-English-language Canadian credentials need a course-by-course iCAP WES evaluation showing US equivalency). MPH-65 applicants also need at least two years of relevant work experience. MPH-45 eligibility depends on the field: some fields require a prior master's or doctoral degree, and others accept a bachelor's degree plus at least five years of relevant work or a prior graduate degree",
      "Application materials via SOPHAS: statement of purpose and objectives (no more than 600 words for the MPH, covering your preparation, your chosen field and your plans after the degree), three letters of recommendation, a resume or CV, all post-secondary transcripts and the SOPHAS fee",
      "Standardized tests (GRE or, where allowed, MCAT, LSAT, GMAT or DAT) are optional with guidance for all MPH fields. The School looks for quantitative preparation through coursework or professional work; it recommends submitting a test if you have little quantitative coursework, earned below a B in a quantitative course and lack other evidence, or think your file does not otherwise show quantitative skill",
      "English proficiency is required if English is not your first language and you have not earned a degree from an institution where English is the official language of instruction (a US medical residency does not waive this). Minimums are TOEFL iBT 5.5 on each section for tests taken on or after 21 January 2026, or 100 overall (104 preferred) with at least 25 on each section for earlier tests; IELTS Academic 7.5; or Duolingo English Test 140. MyBest TOEFL scores are not accepted (TOEFL code 3456, or 5688 if you have already started a SOPHAS application)",
    ],
  },

  {
    ...UNIVERSITY,
    campus: "Allston",
    name: "Master of Science in Data Science",
    slug: "harvard-sm-data-science",
    level: "Master",
    field: "Data Science",
    duration: "1.5 years full-time (three terms)",
    tuitionNote:
      "2026-27: the SEAS Data Science S.M. is billed separately from other Harvard Griffin GSAS master's programmes. Tuition is US$67,504 for the first year and US$33,752 for the second year (one term only). Part-time course loads, when approved, are billed at US$8,438 per course up to US$33,752 for four courses a term. Required Harvard University Student Health Program fees are US$972 a term for the Student Health Fee and US$2,477 a term for the Student Health Insurance Plan (about US$6,898 for two terms; the insurance plan may be waived with comparable coverage). A US$35 GSAS Student Council fee is charged in the fall. GSAS estimates 2026-27 nine-month living costs at US$31,860 on campus without dependents or US$33,930 off campus (shared housing), covering housing, food, books, transport and miscellaneous expenses. 2027-28 rates had not been published when we checked",
    description:
      "The Data Science master's is a terminal Master of Science offered by SEAS and administered through Harvard Griffin GSAS. Students apply to Engineering and Applied Sciences and choose \"SM Data Science\" as the area of study. The curriculum combines computer science and statistics and emphasises statistical modelling, machine learning, optimisation, working with large data sets and data acquisition. Courses are project-based, and students complete either a faculty-supervised master's thesis or a team capstone drawn from industry partners. Teaching takes place in residence, including at the Science and Engineering Complex in Allston. Graduates move into technology, finance and startups or continue to doctoral study. Harvard does not offer a standalone terminal master's in Computer Science; this S.M. and the Computational Science and Engineering S.M. are the SEAS master's degrees open to new applicants.",
    officialProgramUrl: "https://gsas.harvard.edu/program/data-science",
    degree: "Master of Science (S.M.) in Data Science",
    intake: "Fall only (fall 2027)",
    applicationDeadline:
      "Fall 2027 entry: 1 December 2026 at 5:00 p.m. (the GSAS Data Science page lists this deadline; SEAS graduate FAQs give the same 1 December 2026 date for terminal S.M. and M.E. programmes). The Harvard Griffin GSAS application fee is US$105, payable by credit card; fee waivers are requested inside the application. You may not apply to more than one SEAS master's programme in the same cycle",
    admissionRequirements: [
      "A bachelor's degree (BA, BS or equivalent; a three- or four-year undergraduate degree from a recognised institution is accepted for international applicants) completed before you enrol. Applicants typically have an undergraduate degree in a technical or quantitative field such as the natural or physical sciences, engineering, mathematics or computer science. Official transcripts are not required at the time of application; upload copies (international transcripts should be in English or come with a certified translation)",
      "Application materials through Harvard Griffin GSAS: transcripts, three letters of recommendation, a statement of purpose, demonstration of English proficiency, and any other items the portal requests. The GRE General Test and GRE Mathematics or Physics subject tests are optional. Written application materials must be your own work and not generated by a third party or by generative AI, beyond minor editing help",
      "English proficiency if you are a non-native English speaker and you do not hold an undergraduate degree from an institution where English is the primary language of instruction (a later master's or doctorate does not count). Minimums are TOEFL iBT 5 overall and 4.5 on Speaking (or 95 overall and 23 Speaking for tests taken before 21 January 2026), or IELTS Academic 7 overall and 6.5 on Speaking. TOEFL MyBest reports are not accepted. Scores are valid for two years; for fall 2027 entry, tests must be no earlier than 5 January 2025 (TOEFL code 3451). Home or online versions of the TOEFL iBT and IELTS Academic are accepted",
    ],
  },

  {
    ...UNIVERSITY,
    campus: "Allston",
    name: "Master of Science in Computational Science and Engineering",
    slug: "harvard-sm-computational-science-engineering",
    level: "Master",
    field: "Computational Science",
    duration: "1 year full-time (two terms)",
    tuitionNote:
      "2026-27: the SEAS Computational Science and Engineering S.M. is a one-year programme billed at US$67,504. Part-time course loads, when approved, use the same per-course rates as the Data Science S.M. (US$8,438 per course). Required student health fees are US$972 a term (Student Health Fee) and US$2,477 a term (Student Health Insurance Plan, about US$6,898 for two terms if not waived), plus a US$35 GSAS Student Council fee in the fall. GSAS estimates 2026-27 nine-month living costs at US$31,860 on campus without dependents or US$33,930 off campus. A separate two-year Master of Engineering in CSE is billed at US$67,504 in the first year and US$33,752 in the second year and is not this S.M. 2027-28 rates had not been published when we checked",
    description:
      "The Computational Science and Engineering S.M. is a one-year, coursework-based terminal master's offered by SEAS through Harvard Griffin GSAS (select \"SM ME Computational Science and Engineering\" in the Engineering and Applied Sciences application). Students learn mathematical techniques for modelling and simulating complex systems, parallel programming and collaborative software development, then add electives and project work from across Harvard. Many courses end in an applied project, and students may deepen that work through a thesis or an industry capstone. The S.M. does not require a thesis, a foreign-language exam or a general examination. Teaching is in residence, including at the Science and Engineering Complex in Allston. A two-year, research-based Master of Engineering in CSE is offered separately.",
    officialProgramUrl: "https://gsas.harvard.edu/program/computational-science-and-engineering",
    degree: "Master of Science (S.M.) in Computational Science and Engineering",
    intake: "Fall only (fall 2027)",
    applicationDeadline:
      "Fall 2027 entry: 1 December 2026 at 5:00 p.m. (same GSAS/SEAS terminal master's deadline as Data Science). The Harvard Griffin GSAS application fee is US$105. You may not apply to both the Data Science S.M. and this CSE master's in the same cycle; you may apply to one SEAS master's and a SEAS Ph.D. with entirely separate materials",
    admissionRequirements: [
      "A bachelor's degree (BA, BS or equivalent; international three- or four-year undergraduate degrees from recognised institutions are accepted) completed before enrolment, typically in a technical or quantitative field. Upload transcript copies with your application; international transcripts should be in English or accompanied by a certified translation showing courses, grades, the grading scale and degree conferral",
      "Application materials through Harvard Griffin GSAS match other SEAS master's programmes: transcripts, three letters of recommendation, a statement of purpose and English proficiency. The GRE General Test and GRE Mathematics or Physics subject tests are optional",
      "English proficiency follows Harvard Griffin GSAS rules: non-native speakers without an undergraduate degree taught primarily in English must send TOEFL iBT scores of at least 5 overall and 4.5 Speaking (or 95 and 23 Speaking before 21 January 2026) or IELTS Academic scores of at least 7 overall and 6.5 Speaking. Scores must be from 5 January 2025 or later for fall 2027 entry (TOEFL code 3451). MyBest TOEFL reports are not accepted",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master of Education",
    slug: "harvard-edm",
    level: "Master",
    field: "Education",
    duration: "1 academic year full-time for the residential Ed.M. (online Foundations coursework begins in early June; on-campus courses begin in early August)",
    tuitionNote:
      "2026-27: full-time HGSE degree tuition is US$64,428 (part-time tuition is US$32,214). The standard residential Ed.M. student budget for a 10-month academic year also includes US$27,825 for housing and food, US$4,954 for the Student Health Insurance Plan, US$1,944 for the Student Health Fee, a US$120 graduation fee, a US$75 student activity fee, US$330 for books, course materials and the document fee, US$4,714 for personal expenses and US$1,590 for transport, for a total of US$106,196 (US$216 in federal loan fees is listed only for US citizens and permanent residents). 2027-28 tuition and fees are due to be published in March 2027. The online part-time Ed.M. uses a different budget and is not this residential degree",
    description:
      "The Harvard Graduate School of Education's residential Master of Education is a one-year, full-time degree on the Appian Way campus in Cambridge. Students apply to a specific HGSE master's programme and, where relevant, a strand. Programmes named on official HGSE pages include Education Policy and Analysis; Human Development and Education; Learning Design, Innovation, and Technology (these three carry STEM-eligible CIP codes); and Teaching and Teacher Leadership, which has a licensure strand with an earlier deadline and extra materials. For 2027 entry, all Ed.M. students begin an online Foundations course, How People Learn, in early June 2027, and residential students start on-campus coursework in early August 2027. The Doctor of Education Leadership is not admitting a class for 2027-28.",
    officialProgramUrl: "https://www.gse.harvard.edu/admissions-and-aid/apply",
    degree: "Master of Education (Ed.M.)",
    intake: "Residential Ed.M. coursework begins early August 2027, after an online Foundations course in early June 2027",
    applicationDeadline:
      "For 2027-28 Ed.M. programmes (except the earlier licensure deadline below): 5 January 2027, with decisions in early March 2027 and an enrolment reply by 15 April 2027. The Teaching and Teacher Leadership Teaching Licensure Strand deadline for residency fieldwork applicants and priority internship-fieldwork applicants is 1 November 2026, with decisions in mid-December 2026. The application fee is US$85 (need-based waivers may be requested inside the application with documentation)",
    admissionRequirements: [
      "A bachelor's degree. Submit unofficial transcripts from every post-secondary institution showing courses, grades, dates of study and any degree awarded; admitted students later provide official transcripts, and international students who enrol send verified documents through WES, ECE or SpanTran. Transcripts that are not issued in English need a certified word-for-word translation prepared by someone other than you",
      "Application materials: a statement of purpose (1,000 words) on your background, goals and fit with your chosen programme; a 500-word short essay about engaging with a conflicting view; a resume or CV; and three letters of recommendation submitted through HGSE's system (not Interfolio). Some applicants are invited to a virtual interview in January or February; not being invited is not itself a signal about admission. The GRE is optional; if you submit scores for 2027-28 they must be from a test taken on or after 1 January 2022",
      "English proficiency: required if English is not your native language and your bachelor's degree was not from an institution where English was the sole language of instruction for at least three years of full-time enrolment (a later graduate degree taught in English does not waive the requirement). Submit TOEFL, IELTS Academic or the Duolingo English Test from a sitting on or after 1 January 2025. HGSE prefers TOEFL iBT 5.0 overall and on each section for tests taken after 21 January 2026 (or 104 overall and at least 26 on each section for earlier tests), IELTS 7.5 overall and on each section, or Duolingo 140. Non-native English speakers also record a 120-second video response; licensure-strand applicants record a video even if they are native speakers. TOEFL institution code 3428",
    ],
  },
];
