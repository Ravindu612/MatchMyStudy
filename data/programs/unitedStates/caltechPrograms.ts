import type { Program } from "../../programs";

// California Institute of Technology (Caltech): 10 undergraduate options (majors) for fall 2027 first-year entry
// (Computer Science, Electrical Engineering, Mechanical Engineering, Physics, Chemistry, Mathematics, Biology, Chemical
// Engineering, Applied and Computational Mathematics and Astrophysics, all leading to a Bachelor of Science) and 5
// graduate programmes (the one-year MS in Aeronautics or Space Engineering, the Electrical Engineering MS/PhD, and the
// Computer Science, Physics and Chemistry PhDs). Caltech graduate study is overwhelmingly PhD-focused: only Aeronautics,
// Electrical Engineering and Space Engineering admit applicants for a terminal master's degree; every other department
// admits for the PhD only.
// Sources (viewed 21 November 2026): Undergraduate Admissions pages on first-year deadlines, application requirements,
// standardized tests, international applicants and the application fee and waiver
// (admissions.caltech.edu/apply/first-year-applicants/deadlines, /application-requirements, /standardized-tests,
// /international-applicants, /first-year-application-fee-and-waiver) and the majors and minors list
// (admissions.caltech.edu/why-caltech/academics/majors-minors); Financial Aid Office 2026-27 on-campus undergraduate cost
// of attendance (finaid.caltech.edu/costs); the 2026-2027 Caltech Catalog pages for undergraduate graduation requirements,
// the core Institute requirements and each undergraduate option listed, and the graduate option regulations for
// Aerospace, Electrical Engineering, Computer Science, Physics and Chemistry
// (catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/... and
// /information-for-graduate-students/special-regulations-for-graduate-options/...); Graduate Studies Office pages on
// admissions, application requirements, applying online (US$100 fee), FAQ for applicants, financial support and the
// estimated budget (gradoffice.caltech.edu/admissions, /admissions/checklist, /admissions/applyonline,
// /admissions/faq-applicants, /financialsupport, /financialsupport/budget), the GSO application deadlines list
// (gradoffice.caltech.edu/documents/35494/UPDATED_Application_Deadlines_2026-27.pdf) and required tests sheet
// (gradoffice.caltech.edu/documents/32515/AppInstructions_Required_Tests.pdf); the Computing + Mathematical Sciences
// graduate FAQ (cms.caltech.edu/academics/grad); the Physics information for applicants page
// (physics.caltech.edu/academics/graduate-studies/information-for-applicants); and the Chemistry and Chemical
// Engineering graduate admissions and Chemistry graduate programme pages (cce.caltech.edu/graduate/graduate-admissions,
// /graduate/graduate-chemistry).
// Costs are in US dollars. Caltech is private and charges international and US students the same tuition. It runs on
// three terms (fall, winter and spring).

const UNIVERSITY = {
  universitySlug: "california-institute-of-technology",
  universityName: "California Institute of Technology",
  country: "United States",
  language: "English",
  campus: "Pasadena, California",
  programType: "Full-time",
} as const;

// Financial Aid Office 2026-27 on-campus budget (nine months): tuition 68,574; fees 2,655; housing 12,711; food 9,285
// (direct 93,225); books etc. 1,428; personal 3,969 (indirect 5,397). Sum 98,622 (our addition of the two totals).
// Health insurance 5,388 (not in fees); one-time orientation fee 600 for entering students. 2027-28 figures not yet
// published when we checked.
const UG_TUITION =
  "2026-27 (the latest year published when we checked; 2027-28 rates for fall 2027 entrants were not yet available): undergraduate tuition is US$68,574, the same for international and US students. Caltech's estimated nine-month cost of attendance for a student in Caltech housing is US$93,225 in billed costs (tuition, US$2,655 in mandatory fees, US$12,711 for housing and US$9,285 for meals) plus US$5,397 in estimated indirect costs (US$1,428 for books, course materials, supplies and equipment and US$3,969 for personal expenses), about US$98,622 in total. New undergraduates also pay a one-time US$600 orientation fee, and students without comparable health cover must buy the Caltech Student Health Insurance Plan (US$5,388 for 2026-27). Travel is not included for international students. Financial aid: Caltech meets 100% of demonstrated need for all admitted students, but admission is need-aware for international applicants because aid funds for them are limited. International students who may ever want aid at Caltech must apply for it when they apply for admission; those who do not apply (or do not receive aid) in the first year cannot apply later, with possible exceptions for citizens of Canada and Mexico. Aid offers can cover the full cost of attendance";

const UG_INTAKE = "Fall term only (fall 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry. Caltech offers Restrictive Early Action and Regular Decision (no binding Early Decision), and also takes part in QuestBridge. Restrictive Early Action (non-binding): apply by 1 November 2026 (passed when we checked), with supporting and supplemental materials accepted until 6 November and SAT/ACT scores due before 30 November 2026; decisions (admit, defer or deny) in mid-December 2026. REA applicants may not apply Early Action or Early Decision to any other college, except non-binding early applications to public institutions (such as the University of California), non-binding early scholarship or special programme applications, and Early Decision II elsewhere if deferred by Caltech. Regular Decision: apply by 4 January 2027, with supporting materials accepted until 10 January and SAT/ACT scores due before 31 December 2026; decisions (admit, waitlist or deny) in mid-March 2027. Admitted students in both rounds reply by 1 May 2027. English proficiency tests must be taken before the application deadline";

const UG_TESTING =
  "Testing: Caltech requires either the SAT or the ACT from all first-year applicants for fall 2027 entry; neither test is preferred and there is no minimum score. Caltech superscores (highest score in each section across all sittings), looks at individual section scores rather than the ACT composite, and does not require the ACT writing or science sections. Scores are reviewed in bands: SAT sections of 750-800 (ACT 33-36) are shown to readers only as a band, while lower scores are shown exactly. Self-reported scores are accepted for applying; official scores are needed only if you enrol. All AP and IB exam results taken must also be reported. Applicants who could not reach a test centre can explain this in the Caltech application";

const UG_ENGLISH =
  "English proficiency (international applicants): TOEFL, IELTS or Duolingo English Test scores are required unless English is your native language or the main language of instruction at your secondary school (a score is still strongly recommended for non-native speakers at English-medium schools). Caltech's published minimums are IELTS 7 overall and 7 in every band; TOEFL iBT 100 overall with 25 in each section (tests taken before 21 January 2026) or 5 overall and 5 in each section on the new scale (tests from 21 January 2026); Duolingo 130 overall and 130 in each subscore. An InitialView conversation and writing sample is recommended but not required";

const UG_ACADEMIC =
  "Application: the Common App (or QuestBridge Application) with Caltech's supplemental essays, a US$85 application fee or fee waiver, two teacher recommendations (one from a STEM subject such as calculus, chemistry, physics or biology and one from a humanities or social science subject), the School Report, official secondary school transcripts sent by the school (with an English translation if not in English), and a Mid-Year Report. Expected preparation: four years of maths including calculus, one year each of physics and chemistry, biology (recommended), four years of English and at least two years of history or social science. IB students need Higher Level Maths, A-level students need A-level Maths, and students in India need both Year X and Year XII board results. Optional: research papers or portfolios uploaded through the Beaver Breakroom portal";

const UG_CORE =
  "Core curriculum: every Caltech undergraduate first completes the Institute core, which covers first-year mathematics, physics and chemistry, biology, a menu class, chemistry and introductory laboratories, introductory programming, scientific writing, humanities and social sciences and physical education. Students do not declare an option (major) until the end of the first year";

// Graduate Studies Office estimated budget: 2026-27 tuition 68,574 + mandatory fees 2,448 = 71,022. Living cost estimates
// on the page are for 2025-26 (31,774 for a 4-bedroom on-campus bed up to 44,554 for a 2-bedroom lease property). PhD
// stipend 50,000 for 12 months from 1 September 2026.
const GRAD_COST =
  "Graduate Studies Office 2026-27 rates: tuition US$68,574 plus US$2,448 in mandatory fees (US$71,022 a year, charged over three terms). The latest published living-cost estimates (2025-26) run from US$31,774 a year for a bed in a four-bedroom on-campus apartment to US$44,554 for a two-bedroom Caltech lease property, covering housing, food, books, health, dental and vision cover and personal expenses";

const PHD_FUNDING =
  "Funding: all PhD students enrolled full-time and making satisfactory progress receive full tuition and mandatory fees plus a stipend, through fellowships, research assistantships, teaching assistantships or a mix. The PhD stipend is US$50,000 for 12 months from 1 September 2026 (taxable). No separate financial aid application is needed. Most funding sources require work authorisation, so starting the PhD requires evidence of work authorisation unless the department can arrange special compensation. Caltech says the average PhD takes five to six years";

const GRAD_APPLICATION =
  "Application: the Caltech graduate online application with a US$100 fee (a limited number of need-based waivers are available), a bachelor's degree or equivalent completed before enrolment, transcripts from every college attended (unofficial copies are fine for applying), three letters of recommendation, a CV and the required essays. You may apply to only one academic option per cycle, though your file can be referred to another option at no extra cost. Admission is for the fall term only and all decisions are posted by 1 April. There is no minimum GPA, though most successful applicants have at least a 3.5 US GPA or rank in the top 5-10% of their class";

const GRAD_ENGLISH =
  "English proficiency: the Graduate Studies Office does not require an English test for admission and sets no minimum score, but applicants whose native language is not English, or who did not earn a degree where English is the main language of instruction, are advised to show strong English, for example with TOEFL, IELTS, PTE or Duolingo scores (self-reported or sent with institution code 4034). Admitted international students who did not graduate from an English-medium university are assessed in a one-on-one English evaluation at orientation and may be asked to take an English as a Second Language course";

export const caltechPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science (BS)",
    slug: "caltech-computer-science-bs",
    level: "Bachelor",
    field: "Computer Science",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "Caltech's Computer Science option sits in the Computing + Mathematical Sciences department and stresses both mathematical rigour and creativity, preparing students for research careers, industry or start-ups. After the programming fundamentals sequence, students take decidability and tractability, computing systems and introduction to algorithms, then build at least 72 units of advanced computer science that must include a theory or algorithms course such as operating systems, algorithm analysis, networks or complexity. Every major completes a project: an undergraduate thesis, a mentored two-term project, or a three-course sequence in an area such as learning and vision, networks and communication, quantum and molecular computing, robotics or programming languages. The option also requires sophomore mathematics, discrete mathematics, technical communication courses and science electives, and leaves plenty of room for electives",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/computer-science-option-and-minor-cs/",
    degree: "Bachelor of Science (B.S.) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering (BS)",
    slug: "caltech-electrical-engineering-bs",
    level: "Bachelor",
    field: "Electrical Engineering",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "Electrical Engineering at Caltech builds on the core to give a broad, rigorous grounding for careers and graduate study in areas such as telecommunications, solid-state devices, robotics, information, computer and electrical systems. Formal study starts in the sophomore year with systems and circuits analysis, the mathematics and physics of electrical engineering, and digital logic and embedded systems, followed by electronics laboratories, an analogue electronics project lab and signal-processing systems. Students also take applied mathematics, either electromagnetic engineering or information transmission and storage, experimental projects in electronic circuits (or a senior thesis), and 72 units of advanced electives. Students may follow an optional track, named on the diploma, in Circuits and Electronics, Computer Engineering, Intelligent Systems, Medical Engineering, or Photonics and Quantum",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/electrical-engineering-option-ee/",
    degree: "Bachelor of Science (B.S.) in Electrical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering (BS)",
    slug: "caltech-mechanical-engineering-bs",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "Caltech's Mechanical Engineering option is accredited by the Engineering Accreditation Commission of ABET and focuses on forces, motion, energy and the design of fluid, thermal and mechanical systems. After the core, students take an ME sequence that starts with an engineering-thinking course and covers thermal science, mechanics, mechanical prototyping, design and fabrication, dimensional and data analysis, and experimentation and modelling, alongside differential equations, applied mathematics, sophomore physics and computing. A capstone design project (a two-term design course or a three-term project) brings these skills together, and 45 units of advanced engineering electives give depth in one track and breadth in two others. Each student is matched with an adviser near their interests at the end of the first year, and graduates move into fields from aerospace and robotics to energy, semiconductors, bioengineering and finance",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/mechanical-engineering-option-me/",
    degree: "Bachelor of Science (B.S.) in Mechanical Engineering (ABET-accredited)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Physics (BS)",
    slug: "caltech-physics-bs",
    level: "Bachelor",
    field: "Natural Sciences",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "The Physics option teaches the fundamentals of modern physics and is designed as a foundation for graduate study and research, while also suiting applied careers. Sophomores take an intensive course on waves, quantum physics and statistical mechanics, physics laboratories and sophomore mathematics; juniors then work through topics in classical physics and a two-term quantum mechanics sequence, plus computational physics and a course in oral and written communication. Advanced laboratory work (or an experimental thesis) and 90 units of advanced physics electives let students explore particular research areas, and nine more units must come from science or engineering outside physics and mathematics. Students are encouraged to join research groups on campus during the summer and the academic year",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/physics-option-ph/",
    degree: "Bachelor of Science (B.S.) in Physics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Chemistry (BS)",
    slug: "caltech-chemistry-bs",
    level: "Bachelor",
    field: "Natural Sciences",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "Caltech's Chemistry option combines core courses in chemical equilibrium and analysis, physical chemistry and organic chemistry with sophomore mathematics and physics and an oral presentation course. Students complete at least five terms of laboratory work, chosen from synthesis and analysis, advanced synthesis techniques, physical and biophysical chemistry and biochemistry labs (one term of research can count), plus at least five advanced chemistry electives. A Biochemistry track adds introductory biochemistry, biology and biochemistry laboratories, advanced biology or chemistry electives and a three-term senior thesis. The division strongly encourages research during the academic year, and up to 27 units each of research and senior thesis work can count toward the degree",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/chemistry-option-and-minor-ch/",
    degree: "Bachelor of Science (B.S.) in Chemistry",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Mathematics (BS)",
    slug: "caltech-mathematics-bs",
    level: "Bachelor",
    field: "Mathematics",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "The Mathematics option gives a thorough training in pure mathematics. Majors take introductory abstract algebra, classical analysis and introduction to geometry and topology as year-long sequences, along with differential equations, probability or statistics, sophomore physics, discrete mathematics or an equivalent, and an oral presentation course. They then complete 45 further units of advanced mathematics (or applied and computational mathematics), including a two-term advanced course in a single subject, which can lead into graduate study, research or quantitative careers. Up to 18 of those units can come from mathematically demanding courses in other options with approval",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/mathematics-option-ma/",
    degree: "Bachelor of Science (B.S.) in Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Biology (BS)",
    slug: "caltech-biology-bs",
    level: "Bachelor",
    field: "Life Sciences",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "Caltech's Biology option builds on strong mathematics and physical science to introduce the facts, concepts and methods of modern biology, and it serves as preparation for graduate school in any area of biology or for medical school. Required courses include developmental biology, genetics, introduction to neuroscience and a year of organic chemistry, plus sophomore mathematics, two terms of physics, two biochemistry courses, an advanced laboratory (or a three-term senior thesis) and a scientific writing course. At least eight biology electives at the 100 level or above and a minimum of 170 units of biology round out the degree. The division expects research to be part of every student's programme, and premedical students follow essentially the same curriculum",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/biology-option-bi/",
    degree: "Bachelor of Science (B.S.) in Biology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Chemical Engineering (BS)",
    slug: "caltech-chemical-engineering-bs",
    level: "Bachelor",
    field: "Chemical Engineering",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "Chemical Engineering at Caltech prepares students for industrial research and development or graduate study in fields such as sustainable technology, biotechnology, materials and process engineering. From the second year students study chemical engineering computation, synthesis and characterisation, physical and organic chemistry, separation processes, thermodynamics, transport phenomena, reaction engineering and the dynamics and control of chemical systems, using tools such as Python, MATLAB, Mathematica and COMSOL, and they complete a chemical engineering laboratory, a scientific writing course and an economics or business course. In the third year each student also completes a track of at least 63 units in biomolecular, sustainability, process systems, materials or computational chemical engineering",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/chemical-engineering-option-che/",
    degree: "Bachelor of Science (B.S.) in Chemical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Applied and Computational Mathematics (BS)",
    slug: "caltech-applied-computational-mathematics-bs",
    level: "Bachelor",
    field: "Mathematics",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "The Applied and Computational Mathematics (ACM) option, offered by the Computing + Mathematical Sciences department, is for students who want to combine fundamental mathematics with serious applications. It covers mathematical foundations (differential equations, probability and statistics, discrete mathematics and classical analysis), programming and basic numerical algorithms, and a core of applied mathematical methods, applied linear algebra, probability models and numerical analysis. Students add 27 units of advanced ACM electives and a 27-unit sequence in an application area such as machine learning and vision or mechanics, plus science fundamentals and technical communication. All option courses must be passed with at least a C-",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/applied-and-computational-mathematics-acm/",
    degree: "Bachelor of Science (B.S.) in Applied and Computational Mathematics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Astrophysics (BS)",
    slug: "caltech-astrophysics-bs",
    level: "Bachelor",
    field: "Natural Sciences",
    duration: "4 years full-time (12 terms; at least 486 units)",
    tuitionNote: UG_TUITION,
    description:
      "The Astrophysics option uses the tools of physics to understand the universe, its contents and its evolution, combining observation, theory and instrument development. Students take basic astronomy and the galaxy, galaxies and cosmology, the physics of stars and the physics of the interstellar medium, along with an introduction to modern research and a written communication course. Physics is central: the option requires sophomore physics, quantum mechanics and topics in classical physics, three laboratory courses, 63 further units of astronomy or physics and 27 units of science or engineering outside the division. Research leading to a senior thesis is encouraged but not required",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/astrophysics-option-and-minor-ay/",
    degree: "Bachelor of Science (B.S.) in Astrophysics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [UG_TESTING, UG_ENGLISH, UG_ACADEMIC, UG_CORE],
  },

  {
    ...UNIVERSITY,
    name: "Aeronautics and Space Engineering (MS)",
    slug: "caltech-aeronautics-space-engineering-ms",
    level: "Master",
    field: "Aerospace Engineering",
    duration: "1 year full-time (at least 138 units, completed within one academic year)",
    tuitionNote: `${GRAD_COST}. Funding: Caltech generally does not provide financial support to master's students, although they can hold teaching or research assistantships; the Aerospace department says priority for admission and financial aid goes to PhD applicants, so most MS students are self-funded or sponsored`,
    description:
      "The Lynn Booth and Kent Kresa Department of Aerospace (GALCIT) offers a one-year, coursework-only master's degree in either Aeronautics or Space Engineering, with no research component. Students take at least 138 units, including two 27-unit sequences from their track: autonomy and control plus experimental methods for Aeronautics, or autonomy and control plus space engineering for Space Engineering. They also take 27 units of mathematics chosen with their adviser, the first-year aerospace engineering seminar and 27 units of electives, with at least a C in all required classes. MS-only students who later want a PhD must reapply through the normal graduate admissions process",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/aerospace-ae/",
    degree: "Master of Science (M.S.) in Aeronautics or in Space Engineering",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: the Graduate Studies Office deadline list gives 15 December for Aeronautics and Space Engineering (all degree programmes); the application system closes at 12:01 am the following day. Late applications may be considered as space allows",
    admissionRequirements: [
      GRAD_APPLICATION,
      "Testing: GRE scores are optional (the Graduate Studies Office lists the GRE General Test as recommended for Aeronautics and Space Engineering; applicants without scores are not disadvantaged)",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Electrical Engineering (MS/PhD)",
    slug: "caltech-electrical-engineering-ms-phd",
    level: "PhD",
    field: "Electrical Engineering",
    duration: "MS normally 1 year full-time; the PhD typically takes five to six years in total (Caltech-wide average)",
    tuitionNote: `${GRAD_COST}. ${PHD_FUNDING}. MS-only students are generally self-funded or sponsored; for PhD applicants the department offers teaching assistantships and fellowships that include a full tuition scholarship (tuition-only scholarships are not offered)`,
    description:
      "Electrical Engineering is one of only three Caltech departments that admit students for a terminal MS. The one-year MSEE requires 135 units of advanced coursework approved by the graduate adviser, including at least 54 units of letter-graded EE courses and the EE seminar; MS-only students must reapply if they later want a PhD. PhD applicants are normally admitted first to the MSEE and assessed on their research interest and potential; during that year they take a qualifying oral exam and join a research group. To reach candidacy by the end of the third year, PhD students complete research units, an approved 135-unit course plan, 27 units of mathematics and an oral candidacy exam. The PhD can be taken in EE alone or in a joint Medical and Electrical Engineering track",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/electrical-engineering-ee/",
    degree: "Master of Science (M.S.) in Electrical Engineering and Doctor of Philosophy (Ph.D.) in Electrical Engineering",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: the Graduate Studies Office deadline list gives 15 December for Electrical Engineering (all degree programmes); the application system closes at 12:01 am the following day. Late applications may be considered as space allows",
    admissionRequirements: [
      GRAD_APPLICATION,
      "Testing: GRE scores are encouraged but not required (listed as recommended); applicants who cannot take the GRE in their home country are not disadvantaged",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science (PhD)",
    slug: "caltech-computer-science-phd",
    level: "PhD",
    field: "Computer Science",
    duration: "At least 3 years of residence; most CMS students finish in four to six years",
    tuitionNote: `${GRAD_COST}. ${PHD_FUNDING}`,
    description:
      "Graduate study in Computer Science, within the Computing + Mathematical Sciences department, is oriented almost entirely toward PhD research, and Caltech does not offer a terminal master's in the field (PhD students in good standing can petition to add an MS). Students complete at least 135 units of advanced courses including research, a first-year CMS seminar each term, at least 54 units of advanced CS courses that include algorithms or complexity, networks, deep learning and an optimisation, linear analysis or probability course, and 27 more advanced units in any discipline. A preliminary exam at the end of the first year is followed by an oral candidacy exam, an original thesis supervised by an adviser and a final defence before a committee of at least four faculty. Students are admitted directly to an adviser and research group",
    officialProgramUrl:
      "https://catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/computer-science-cs/",
    degree: "Doctor of Philosophy (Ph.D.) in Computer Science",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 15 December (Graduate Studies Office deadline list and CMS department FAQ); late submissions are considered with lower priority",
    admissionRequirements: [
      GRAD_APPLICATION,
      "Testing: the CMS department says the GRE is not required; the Graduate Studies Office lists it as recommended, and applicants without scores are not disadvantaged",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Physics (PhD)",
    slug: "caltech-physics-phd",
    level: "PhD",
    field: "Physics",
    duration: "Typically five to six years (Caltech-wide PhD average); oral candidacy exam due by the end of the third year",
    tuitionNote: `${GRAD_COST}. ${PHD_FUNDING}`,
    description:
      "Caltech's Physics PhD prepares students for research careers, and independent research is its most important part. Students must show proficiency across basic physics through two written candidacy exams (offered in July and October, with up to three attempts, to be passed by the end of the second year), complete six advanced graduate courses spread over at least three areas of modern physics, and pass an oral candidacy exam on their research by the end of the third year. They then write a thesis on original research and defend it in a final oral exam. Research areas include elementary particle and nuclear physics, astronomy across several wavelengths, condensed matter, atomic, molecular and optical physics, quantum information, gravitational physics, cosmology, biophysics and theoretical physics. An MS is awarded only along the way to the PhD, and applicants interested in astrophysical problems are also considered for the Astrophysics PhD",
    officialProgramUrl: "https://physics.caltech.edu/academics/graduate-studies/information-for-applicants",
    degree: "Doctor of Philosophy (Ph.D.) in Physics",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 15 December (Physics catalogue entry and Graduate Studies Office deadline list); admitted students must respond by 15 April",
    admissionRequirements: [
      GRAD_APPLICATION,
      "Testing (fall 2027 cohort): the GRE Physics Subject Test is required; the GRE General Test is recommended but not required, and General scores are considered if submitted",
      GRAD_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Chemistry (PhD)",
    slug: "caltech-chemistry-phd",
    level: "PhD",
    field: "Chemistry",
    duration: "Typically five to six years (Caltech-wide PhD average)",
    tuitionNote: `${GRAD_COST}. ${PHD_FUNDING}`,
    description:
      "The Chemistry PhD trains students for independent research and scientific leadership in academia, industry or government, and students are encouraged to start research in their first year. The programme is flexible and interdisciplinary, spanning areas such as organic, inorganic and physical chemistry, chemical biology and biochemistry, and it runs in two tracks (Chemistry, and Chemical Biology and Molecular Bioscience) that differ in the timing of rotations, adviser choice and teaching. Students complete at least five advanced science or engineering courses with a B or better (one well outside their research area), serve as graduate teaching assistants, reach candidacy, meet their thesis committee every year from the third year, prepare and defend written research propositions, and finish with a thesis and final oral exam. Theses with more than one adviser are not unusual. A master's in chemistry is not normally offered",
    officialProgramUrl: "https://cce.caltech.edu/graduate/graduate-chemistry",
    degree: "Doctor of Philosophy (Ph.D.) in Chemistry",
    intake: "Fall 2027 entry",
    applicationDeadline:
      "Fall 2027 entry: apply by 1 December (Division of Chemistry and Chemical Engineering and Graduate Studies Office deadline list); late applications may be considered but can be at a disadvantage for admission and funding",
    admissionRequirements: [
      GRAD_APPLICATION,
      "Testing: the Chemistry division says the GRE is required for all Chemistry PhD applicants in the current cycle (applicants unable to test because of test-centre availability are considered case by case), although the Graduate Studies Office's older test sheet lists it as recommended; check with the division before applying",
      "English proficiency: the Chemistry division says English test scores are no longer required for admission, and English is instead assessed through interviews with faculty. Admitted international students who did not graduate from an English-medium university also take the Graduate Studies Office English evaluation at orientation",
    ],
  },
];
