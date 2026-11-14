import type { Program } from "../../programs";

// Northwestern University: 8 undergraduate majors for fall 2027 first-year entry (McCormick School of Engineering,
// Weinberg College of Arts and Sciences, Medill and the School of Communication) and 7 full-time graduate programmes.
// Sources (viewed 14 November 2026): Office of Undergraduate Admission pages on applying, dates and deadlines,
// application materials, international applicants and the FAQs on testing policy, international applicants,
// application process, admission decisions and high school courses (admissions.northwestern.edu/apply/,
// /faqs/...), Degree Options (admissions.northwestern.edu/academics/degree-options.html); the Undergraduate
// Financial Aid cost of attendance and prospective international student pages (undergradaid.northwestern.edu/
// how-aid-works/cost-of-attendance/, /apply-for-aid/prospective-international-undocumented-students/, /faqs/
// international-students/); Student Finance 2026-27 tuition and fee schedules (northwestern.edu/sfs/tuition/
// undergraduate/, /graduate/kellogg.html, /graduate/mccormick.html, /graduate/medill.html, /graduate/tgs.html); the
// 2026-2027 Undergraduate Catalog (catalogs.northwestern.edu/undergraduate/: admission, the McCormick, Weinberg,
// Medill and School of Communication degree requirement pages, and the Computer Science, Economics, Journalism,
// Mechanical Engineering, Industrial Engineering, Biomedical Engineering, Psychology and Radio/Television/Film
// programme pages); for graduate study: Kellogg Full-Time MBA admissions, how-to-apply, international candidates,
// Two-Year MBA and tuition and aid pages (kellogg.northwestern.edu/admissions/ft-admissions/..., /programs/full-time-
// mba/two-year-mba-program.aspx, /admissions/financial-aid/ft-fin-aid/), Kellogg MiM programme, academics,
// admissions, how-to-apply and tuition pages (kellogg.northwestern.edu/programs/master-in-management/...,
// /admissions/mim-admissions/...); McCormick MS in Machine Learning and Data Science overview, curriculum, admissions,
// application materials and tuition pages (mccormick.northwestern.edu/machine-learning-data-science/...); McCormick
// MS in Artificial Intelligence overview, traditional curriculum, admissions, FAQ and tuition pages
// (mccormick.northwestern.edu/artificial-intelligence/...); Computer Science MS programme, curriculum, admissions,
// FAQ and financial aid pages (mccormick.northwestern.edu/computer-science/academics/graduate/...); The Graduate
// School international applicants page (tgs.northwestern.edu/admission/application-procedures/international-
// applicants1.html); the Evanston Office of Graduate Financial Aid 2026-27 cost of attendance tables for TGS master's,
// MLDS and MSAI (northwestern.edu/evanston-graduate-financial-aid/getting-started/tuition-cost-of-attendance/...); and
// Medill MSJ and full-time IMC programme, curriculum, admissions, application requirements, international applicant,
// immersion quarter and cost of attendance pages (medill.northwestern.edu/journalism/graduate-journalism/...,
// /imc/full-time/...). Costs are in US dollars. Northwestern is private and charges international and US students
// the same tuition in each programme. Northwestern uses a quarter system (fall, winter and spring quarters, plus summer).

const UNIVERSITY = {
  universitySlug: "northwestern-university",
  universityName: "Northwestern University",
  country: "United States",
  language: "English",
  campus: "Evanston, Illinois",
  programType: "Full-time",
} as const;

// Undergraduate Financial Aid 2026-27 COA (on campus): tuition 71,802 (Student Finance: 23,934 per quarter x 3), fees
// 1,260 (ASG 98 x 3, athletics 72, health services 298 x 3), housing and meals 22,941; books 1,239, personal 2,079,
// loan fees 54, transportation varies; total 99,375. NU-SHIP premium 5,996 is listed separately (charged in fall).
const UG_TUITION =
  "2026-27: undergraduate tuition is the same in every Northwestern school, US$23,934 a quarter or US$71,802 for the fall, winter and spring quarters. The Office of Undergraduate Financial Aid's 2026-27 cost of attendance for a student living on campus is US$99,375 before aid: tuition, US$1,260 of required fees (student government, athletics events and the student health services fee), an estimated US$22,941 for a double room and an unlimited meal plan, US$1,239 for books and supplies, US$2,079 for personal expenses and US$54 of loan fees. Travel is listed as varying and is not included in that total, so international students should add their own airfare. Students on the Northwestern student health insurance plan (NU-SHIP) also pay a US$5,996 premium, charged in the fall quarter. Financial aid for international students: Northwestern offers need-based aid to international undergraduates and promises to meet 100% of demonstrated need for all four years for admitted first-year students, issuing four-year aid offers; it describes its need-based packages as loan-free. Admission is need-aware for international applicants, so asking for aid is considered in the decision and the process is more competitive. You must tick the financial aid box on your application and send the CSS Profile (Northwestern code 1565), or the International Student Application for Financial Assistance if you cannot file the Profile, plus your parents' tax or earnings documents translated into English and converted to US dollars. International students cannot borrow US federal loans. 2027-28 rates had not been published when we checked";

const UG_INTAKE = "Fall quarter only (September 2027 first-year entry)";

const UG_DEADLINE =
  "Fall 2027 entry (the 2026-27 admission cycle), through the Common Application or Apply Coalition with Scoir, with a non-refundable US$75 application fee or a fee waiver. Northwestern offers a single binding Early Decision round and Regular Decision; there is no Early Action, Restrictive Early Action or Early Decision II. Early Decision (binding) closed on 1 November 2026 at 11:59 pm in the applicant's local time, so it had passed when we checked; ED decisions come out in mid-December and admitted students must pay the deposit by 1 February 2027. Regular Decision: apply by 4 January 2027 at 11:59 pm your local time; decisions are released in late March 2027 and the enrolment deposit is due by 1 May 2027. For Regular Decision aid applicants, the admissions office lists 1 February 2027 as the financial aid deadline (the financial aid office's checklist gives 2 February for the CSS Profile or ISAFA and 5 February for parents' tax documents). Optional InitialView interviews for students at international high schools must be completed by 16 January 2027. Northwestern says about 7% of first-year applicants for the Class of 2030 were admitted and that roughly half of its last entering class came through Early Decision";

const UG_TESTING =
  "Testing: optional. Northwestern is test-optional for first-year and transfer applicants in the 2026-27 cycle (fall 2027 entry), including international students, and applying without an SAT or ACT does not affect your chances. It has no preference between the two tests. If you send scores you can self-report them and only provide official reports if you enrol; Northwestern superscores the SAT, and for the ACT you should report your highest section scores plus your official ACT superscore from MyACT (the science section is not required). Regular Decision applicants can add December test results through the applicant portal until 15 February 2027. AP, IB and similar results are optional extras, but required national exam results are still needed where they are part of finishing secondary school. Codes: SAT 1565, ACT 1106";

const UG_ENGLISH =
  "English proficiency: required if your first or primary language is not English or your secondary schooling was not in English. Northwestern accepts official results from the Duolingo English Test, IELTS (including IELTS Indicator) or TOEFL iBT (including the Home Edition, but not TOEFL ITP Plus for China Solution). There is no minimum score; Northwestern says competitive applicants typically score in the high range on every section. English test scores cannot be self-reported, they are not superscored and TOEFL MyBest scores are not reviewed (TOEFL code 1565). All transcripts not in English need certified English translations";

const UG_ACADEMIC = (school: string) =>
  `Application (the same for international and US applicants): the Common Application or Apply Coalition with Scoir with Northwestern's writing supplement (one required answer of up to 300 words on how your background shapes how you would engage with Northwestern, plus one or two encouraged short answers of under 200 words each; the general personal essay is optional), official secondary school transcripts, the school report with a counsellor recommendation and at least one recommendation from a core-subject teacher. Northwestern's undergraduate schools are admitted separately (dual-degree applicants are considered by each school on its own), and this major belongs to ${school}. Optional InitialView interviews are accepted from students at international high schools`;

const UG_PREP_GENERAL =
  "Recommended preparation for Weinberg, Medill and the School of Communication: at least 16 full-year academic courses, including 4 years of English, at least 2 years of one foreign language, at least 2 of history or social science, at least 2 of laboratory science and at least 3 of mathematics";

const UG_PREP_MCCORMICK =
  "Recommended preparation for McCormick: 4 years of English, 3.5 to 4 years of mathematics (calculus preferred where available; at minimum two years of algebra, a year of geometry and a semester of trigonometry), at least 3 years of laboratory science with chemistry and physics preferred, and further courses in a foreign language, history and social sciences. Most entering McCormick first-year students have taken calculus";

const UG_MCCORMICK_MAJOR = (major: string, extra: string) =>
  `Admission route: you apply to the McCormick School of Engineering and Applied Science. McCormick's discipline-specific Bachelor of Science degrees, including ${major}, can only be completed as full degree programmes by McCormick students, and every McCormick BS requires 48 course units: a 26-unit core (mathematics, basic science, engineering foundations, design and communication, social sciences/humanities and unrestricted electives) plus a 22-unit major programme. ${extra}`;

const UG_WEINBERG_MAJOR = (major: string, extra: string) =>
  `Admission route: you apply to the Weinberg College of Arts and Sciences, which awards the Bachelor of Arts. There is no separate admission to ${major}; Weinberg students need at least 45 units for the degree and Northwestern asks students to declare a major by the end of their sophomore year. ${extra}`;

// The Graduate School 2026-27 master's: 23,662 per quarter (3-4 units), health services fee 298 per quarter (fall-spring),
// NU-SHIP 5,996; Evanston graduate aid indirect costs for 3 quarters 31,356 (housing and food 22,941, books 2,271,
// personal 2,835, transport 1,551, loan fees 1,758).
const TGS_ENGLISH =
  "English proficiency (The Graduate School): applicants must prove English proficiency with official IELTS Academic, TOEFL iBT or Michigan English Test (MET) scores taken within two years of the quarter of entry (for fall 2027, no older than September 2025). Minimums: IELTS 7; TOEFL iBT 80 for master's applicants on tests taken before 21 January 2026, or 4.5 on the new scale for tests taken after that date; MET 54 for master's applicants. The Duolingo English Test and TOEFL Essentials are not accepted. You may request a waiver if you earned a degree at an institution that teaches primarily in English; approval is at the discretion of the programme and The Graduate School and is only decided after you apply. Use institution code 1565 and TOEFL department code 01";

const TGS_MINIMUM =
  "Graduate School minimums: a US bachelor's degree from a regionally accredited institution or its international equivalent by the time you enrol (The Graduate School publishes country-by-country equivalency guidance and recommends ECE or WES evaluations where a country is not listed), transcripts and, for international credentials, a certified copy of the degree certificate with certified English translations. Admitted students must have official transcripts sent directly to The Graduate School before the term starts. You may submit only one application to one Graduate School programme per year";

const MEDILL_ENGLISH = (code: string) =>
  `English proficiency (Medill): if you are an international student and English is not your first language, you must send official TOEFL (Medill code ${code}) or Duolingo English Test scores taken within two years of the date you submit your application, and self-report them in the application. IELTS is not listed as an accepted test, Medill does not publish a minimum score, and no exceptions or waivers are granted regardless of how many years you have studied at an English-speaking institution. Medill reviews each language section of your result`;

const KELLOGG_ENGLISH =
  "English proficiency (Kellogg): all non-native English speakers must show proficiency. You meet it automatically if you completed an undergraduate or graduate degree in the United States or at an institution where English was the only language of instruction (give the exact URL or documentation in the application), or if you have worked for at least two consecutive years in an English-speaking country within the last five years. Everyone else must submit a TOEFL, IELTS or Duolingo English Test result; Kellogg does not publish a minimum score, and the committee may ask any candidate for a score";

export const northwesternUniversityPrograms: Program[] = [
  {
    ...UNIVERSITY,
    name: "Computer Science",
    slug: "northwestern-bs-computer-science",
    level: "Bachelor",
    field: "Computer Science",
    duration: "Typically 4 years full-time (48 course units, 22 of them in the major programme)",
    tuitionNote: UG_TUITION,
    description:
      "Northwestern's Computer Science BS, taught in the McCormick School of Engineering, is built around software, from theoretical models to practical applications, and gives every student a common breadth of computer science knowledge before they specialise. Alongside McCormick's 26-unit engineering core (calculus, multivariable calculus, discrete mathematics, physics and other basic science, design and communication and social sciences/humanities), the 22-unit major covers four required courses in software design, data structures and algorithms, systems-level programming and computer systems, four advanced electives, one breadth course in each of five areas (theory, systems, artificial intelligence, interfaces, and software development and programming languages), two project courses, a societal impact course and six technical electives. Areas students can specialise in include artificial intelligence and robotics, parallel and distributed systems, networked systems and security, programming languages and compilers, human-computer interaction, graphics and theoretical computer science. Strong AP Computer Science A or IB Computer Science HL results earn introductory credit. Northwestern also lists a Computer Science major (BA) in Weinberg College and a separate Artificial Intelligence BS in McCormick.",
    officialProgramUrl:
      "https://catalogs.northwestern.edu/undergraduate/engineering-applied-science/computer-science/computer-science-degree/",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MCCORMICK_MAJOR(
        "Computer Science",
        "AP Computer Science A scores of 4 or 5 and IB Computer Science HL scores of 5 to 7 transfer as introductory computer science credit"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the McCormick School of Engineering and Applied Science"),
      UG_PREP_MCCORMICK,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Economics",
    slug: "northwestern-ba-economics",
    level: "Bachelor",
    field: "Economics",
    duration: "Typically 4 years full-time (45 course units for the degree; 12 department courses plus 2 related courses for the major)",
    tuitionNote: UG_TUITION,
    description:
      "Economics in Weinberg College teaches students how economists frame problems and design solutions, with coursework that can lean toward macroeconomics, applied microeconomics, quantitative economics or economic history. The major has 12 department courses: introductory macroeconomics and microeconomics (taken first and in that order), introductory applied econometrics, a three-course intermediate theory sequence in microeconomics and macroeconomics, and six 300-level field courses, plus related courses in single-variable calculus and probability and statistics. Students who plan the major should take statistics and differential calculus early, because they are prerequisites for the econometrics and intermediate theory courses. Majors with strong records can be invited to pursue departmental honours through a two-quarter senior seminar, two quarters of independent study or two graduate-level field courses. Northwestern describes the major as preparation for graduate study in economics, law school and careers in business or government rather than specialised professional training. Students in the separate Mathematical Methods in the Social Sciences programme can complete a joint economics major, and industrial engineering students can double-count some courses toward an economics major.",
    officialProgramUrl: "https://catalogs.northwestern.edu/undergraduate/arts-sciences/economics/economics-major/",
    degree: "Bachelor of Arts (BA) with a major in Economics",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_WEINBERG_MAJOR(
        "Economics",
        "Applicants who also want the selective Mathematical Methods in the Social Sciences (MMSS) programme must also submit Northwestern's separate MMSS application"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the Weinberg College of Arts and Sciences"),
      UG_PREP_GENERAL,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Journalism (Medill School of Journalism, Media, Integrated Marketing Communications)",
    slug: "northwestern-bsj-journalism",
    level: "Bachelor",
    field: "Journalism",
    duration: "Typically 4 years full-time (45 course units, including a 4-unit Journalism Residency)",
    tuitionNote: UG_TUITION,
    description:
      "Every undergraduate in Medill majors in journalism and earns the Bachelor of Science in Journalism. The degree pairs 14 to 18 units of journalism with a broad arts and sciences base: foundational courses in the social sciences, history, philosophy or religion, literature and arts, natural sciences or quantitative reasoning and business or economics, a five-course concentration in one Weinberg College department, 10 to 14 non-Medill electives and proficiency in a language other than English. The journalism core covers reporting and writing news, video journalism, journalism values and trends, a Journalism in Practice course, a history, representation or business course and media law and ethics, followed by two advanced courses chosen from areas such as investigative, data, sports, health and science, magazine, documentary, social media video and bilingual reporting. Students then spend a quarter in the Journalism Residency, working at a media organisation in Chicago, elsewhere in the US or abroad (Argentina is one listed option). Other Medill opportunities include the Medill Investigative Lab, the Medill on the Hill programme reporting from Washington, D.C., and short or quarter-long reporting trips abroad.",
    officialProgramUrl:
      "https://catalogs.northwestern.edu/undergraduate/journalism-media-integrated-marketing-communications/journalism/journalism-degree/",
    degree: "Bachelor of Science in Journalism (BSJ)",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Admission route: you apply to the Medill School of Journalism, Media, Integrated Marketing Communications, and all Medill undergraduates pursue the journalism major and the BSJ (45 units). Five-year dual bachelor's programmes pair the BSJ with a Bachelor of Music from the Bienen School of Music or a BSEd from the School of Education and Social Policy; students usually apply for these when they first apply to Northwestern",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the Medill School of Journalism, Media, Integrated Marketing Communications"),
      UG_PREP_GENERAL,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Mechanical Engineering",
    slug: "northwestern-bs-mechanical-engineering",
    level: "Bachelor",
    field: "Mechanical Engineering",
    duration: "Typically 4 years full-time (48 course units, 22 of them in the major programme)",
    tuitionNote: UG_TUITION,
    description:
      "Mechanical engineering at Northwestern covers any engineered system that involves motion or mechanics, from aircraft to nanoscale bio-inspired materials. After a first stage of mathematics, physics, chemistry, programming and design thinking, students take engineering statics and dynamics, differential equations and eleven required courses in mechanics of materials, materials science, thermodynamics, electronics design, mechanical design and manufacturing, fluid mechanics, machine dynamics, machine design, computer-integrated manufacturing, heat transfer and dynamic systems. Six further courses form a concentration declared by the end of the second year, such as general mechanical engineering breadth, aerospace engineering, design, energy systems and sustainability, manufacturing, mechanical sciences or robotics. The degree ends with a two-quarter team capstone in which students carry a project through human-centred design, analysis, prototyping, testing and documentation. The programme is accredited by the Engineering Accreditation Commission of ABET, and the department also offers a robotics certificate.",
    officialProgramUrl:
      "https://catalogs.northwestern.edu/undergraduate/engineering-applied-science/mechanical-engineering/mechanical-engineering-degree/",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MCCORMICK_MAJOR(
        "Mechanical Engineering",
        "The basic science core for this major includes two quarters of physics with laboratories and a chemistry course with laboratory"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the McCormick School of Engineering and Applied Science"),
      UG_PREP_MCCORMICK,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Industrial Engineering",
    slug: "northwestern-bs-industrial-engineering",
    level: "Bachelor",
    field: "Industrial Engineering",
    duration: "Typically 4 years full-time (48 course units, 22 of them in the major programme)",
    tuitionNote: UG_TUITION,
    description:
      "Industrial engineering, taught by McCormick's Department of Industrial Engineering and Management Sciences, trains students to design, analyse and improve complex organisational systems such as financial, information, production, logistics and transportation systems. Every student learns statistics, economics, optimisation, computing and simulation, then chooses advanced electives in analytics, data science, financial engineering, management science, service operations and production and supply-chain management. The 22-unit major includes two related courses, seven industrial engineering methods courses, three professional practice courses, an ethical development course, seven IEMS electives and three general technical electives. Students can add optional concentrations in quantitative finance, graduate preparation, data science and engineering, human-centred engineering, operations, transportation and logistics, or product management. Realistic team problems are central, and the IE Client Project Challenge lets students tackle a current problem for a real client. Students often combine the degree with a minor in machine learning and data science, computer science or economics, the Kellogg Certificate Program for Undergraduates, study abroad or the co-op programme, and some industrial engineering courses can double-count toward an economics major.",
    officialProgramUrl:
      "https://catalogs.northwestern.edu/undergraduate/engineering-applied-science/industrial-engineering-management-sciences/industrial-engineering-degree/",
    degree: "Bachelor of Science (BS) in Industrial Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MCCORMICK_MAJOR(
        "Industrial Engineering",
        "At most two general technical electives may be taken pass/no credit, and no other major electives may be"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the McCormick School of Engineering and Applied Science"),
      UG_PREP_MCCORMICK,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Biomedical Engineering",
    slug: "northwestern-bs-biomedical-engineering",
    level: "Bachelor",
    field: "Biomedical Engineering",
    duration: "Typically 4 years full-time (48 course units, 22 of them in the major programme)",
    tuitionNote: UG_TUITION,
    description:
      "Northwestern was among the first universities to recognise the value of biomedical engineering, and its department runs one of the largest and broadest programmes in the US. The degree applies engineering and mathematics to problems in the life sciences and clinical medicine, from molecules up to whole physiological systems, and to devices that replace or support body functions and improve diagnosis and care. Students build on the McCormick core (including chemistry) with six basic engineering courses and nine core biomedical courses: organic chemistry or physics, an experimental design laboratory, a three-quarter quantitative systems physiology sequence, biomedical signals and circuits, biomedical systems analysis, transport fundamentals and biomedical engineering design. Seven units of technical electives, including at least two 300-level BME engineering courses, let students build their own specialisation. The programme requires at least 21 units of engineering science and design and is accredited by ABET's Engineering Accreditation Commission. Students heading for medical or dental school can use their electives to cover the extra entrance courses those schools usually ask for.",
    officialProgramUrl:
      "https://catalogs.northwestern.edu/undergraduate/engineering-applied-science/biomedical-engineering/biomedical-engineering-degree/",
    degree: "Bachelor of Science (BS) in Biomedical Engineering",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_MCCORMICK_MAJOR(
        "Biomedical Engineering",
        "Students aiming for medical or dental school should check those schools' entrance requirements (often extra physics, organic or physical chemistry and laboratory biology) and plan them into their electives"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the McCormick School of Engineering and Applied Science"),
      UG_PREP_MCCORMICK,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Psychology",
    slug: "northwestern-ba-psychology",
    level: "Bachelor",
    field: "Psychology",
    duration: "Typically 4 years full-time (45 course units for the degree; 11 department courses plus 5 related courses for the major)",
    tuitionNote: UG_TUITION,
    description:
      "Psychology at Northwestern spans the natural and social sciences, with courses in cognition, neuroscience, clinical, health, developmental, personality and social psychology, and a strong research orientation that gives undergraduates the chance to work in the department's laboratories. The single undergraduate major starts with introductory psychology, statistical methods and research methods, then adds eight more courses: at least two in personality, clinical or social psychology, two in cognitive psychology or neuroscience, one cross-cutting or integrative course and one upper-level research course, with at least three at the 300 level. Five related courses complete the major, including two quantitative courses in mathematics or advanced statistics and three more in mathematics, statistics or the natural sciences. Students with strong records can apply in the spring of junior year for the honours programme and write a thesis. The department presents the major as useful preparation for careers in education, medicine, law, management and the helping professions, as well as for graduate study in psychology.",
    officialProgramUrl: "https://catalogs.northwestern.edu/undergraduate/arts-sciences/psychology/psychology-major/",
    degree: "Bachelor of Arts (BA) with a major in Psychology",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      UG_WEINBERG_MAJOR(
        "Psychology",
        "College Seminars and First-Year Writing Seminars do not count toward the major, and only one quarter each of certain independent study and research courses can be counted"
      ),
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the Weinberg College of Arts and Sciences"),
      UG_PREP_GENERAL,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Radio/Television/Film (School of Communication)",
    slug: "northwestern-ba-radio-television-film",
    level: "Bachelor",
    field: "Film and Media",
    duration: "Typically 4 years full-time (42 course units, 12 of them in the major)",
    tuitionNote: UG_TUITION,
    description:
      "The Department of Radio/Television/Film in the School of Communication teaches the history, theory and production of media, from cinema and broadcast and cable television to alternative and emerging media, and deliberately combines scholarly analysis with creative production. The 12-unit major begins with Media Construction, Analyzing Media Texts and a further 200-level course such as screenwriting foundations, then requires a 300-level media history or theory course and eight more advanced communication courses, at least six of them in RTVF. Around the major, students complete a first-year seminar, a capstone, 18 units outside the school (including School of Communication distribution areas in science and technology, individual and social behaviour and humanities and fine arts), electives and two-year proficiency in a language other than English. Facilities include 16mm film and HD equipment, a sound stage, editing suites, advanced audio post-production and computer graphics, and students run the 7,200-watt FM station WNUR. The school funds student-run production groups and offers internship opportunities with television and radio stations and production companies in Chicago, New York and Los Angeles. Minors in film and media studies, game design, media arts and animation, and sound design are also offered.",
    officialProgramUrl:
      "https://catalogs.northwestern.edu/undergraduate/communication/radio-television-film/radio-television-film-major/",
    degree: "Bachelor of Arts in Communication (BACMN) with a major in Radio/Television/Film",
    intake: UG_INTAKE,
    applicationDeadline: UG_DEADLINE,
    admissionRequirements: [
      "Admission route: you apply to the School of Communication. Radio/Television/Film offers only the Bachelor of Arts in Communication (BACMN), which includes a language requirement. First-year entrants must earn at least 32 of their 42 units at Northwestern, so no more than 10 can come from AP/IB, most study abroad programmes or transfer credit",
      UG_TESTING,
      UG_ENGLISH,
      UG_ACADEMIC("the School of Communication"),
      UG_PREP_GENERAL,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Two-Year Full-Time MBA (Kellogg School of Management)",
    slug: "northwestern-kellogg-two-year-mba",
    level: "Master",
    field: "Business Administration",
    duration: "2 years full-time (starts in September)",
    tuitionNote:
      "2026-27 (latest published; 2027-28 rates were not yet available): Kellogg Full-Time MBA tuition is US$29,512 a quarter, or US$88,536 for the three academic quarters of the year. Kellogg's estimated first-year budget for the Two-Year MBA is US$130,072, made up of tuition, about US$22,941 for food and housing, US$1,743 for books, US$310 for course materials, US$1,551 for travel, US$2,835 for personal costs, US$5,996 for health insurance, US$1,200 for a computer, the US$894 University Health Services fee, a US$1,400 student activity fee, a US$450 student association fee, a US$2,000 one-time first-year fee and US$216 of loan fees. The second year costs roughly the same again at whatever rates apply then. Kellogg offers merit- and need-based scholarships (including awards aimed at second-year students), and its financial aid advisers help students arrange loans",
    description:
      "Kellogg's Two-Year MBA starts in September with Kellogg's Growth Core curriculum in core management and leadership, then opens up to specialised electives, more than 1,000 experiential learning opportunities The programme stresses bringing insights from several disciplines together to solve complex problems. Students can study abroad through 37 exchange programmes in 20 countries and join more than 120 student-led clubs and organisations, and Kellogg says more than 500 companies hire its graduates each year. All Kellogg Full-Time MBA programmes are STEM-designated, so eligible F-1 graduates can apply for the 24-month STEM OPT extension on top of the standard year of practical training. Kellogg runs six full-time MBA programmes in total (One-Year, Two-Year, MBAi, MMM, JD-MBA and MD-MBA), each with its own requirements and costs.",
    officialProgramUrl: "https://www.kellogg.northwestern.edu/programs/full-time-mba/two-year-mba-program/",
    degree: "Master of Business Administration (MBA)",
        intake: "September 2027",
    applicationDeadline:
      "Fall 2027 entry (the 2026-27 admission cycle): Round 1 closed on 9 September 2026 (decisions 9 December 2026), so it had passed when we checked. Round 2: 6 January 2027, decisions on 24 March 2027. Round 3: 31 March 2027, decisions on 12 May 2027. Kellogg strongly encourages international candidates to apply in Round 1 or Round 2 because visas take time to arrange. Video essays are due 96 hours after the application deadline",
    admissionRequirements: [
      "A bachelor's degree or equivalent from an accredited college or university by matriculation; previous business or economics study is not required for the Two-Year MBA. Kellogg strongly recommends at least two years of full-time work experience by the time you start",
      "A GMAT or GRE score from a single sitting (Kellogg does not superscore and has no preferred test; it publishes typical ranges in its class profile but no minimum). Scores must still be valid when you submit, and are valid for five years. Codes: GMAT 6WZ-3J-89, GRE 7921",
      "Application materials: a résumé or CV, transcripts from every institution attended (with a conferred-degree date or a copy of the diploma), one written essay of up to 550 words, a video essay of five questions recorded after you submit (about 30 minutes, no re-takes) and two letters of recommendation, ideally one from a current supervisor. The application fee is US$250. Interviews are virtual and by invitation",
      KELLOGG_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Master in Management (MiM, Kellogg School of Management)",
    slug: "northwestern-kellogg-mim-management",
    level: "Master",
    field: "Management",
    duration: "10 months full-time (September to June)",
    tuitionNote:
      "Latest published figures (Kellogg's MiM tuition page does not label the year; the per-quarter rate matches 2026-27 pricing, and fall 2027 rates were not yet published): tuition of US$71,724 (three quarters at US$23,908) and an estimated total budget of US$108,659, which adds about US$22,941 for food and housing, a US$150 student activity fee, a US$300 student life fee, US$1,692 for books, US$360 for course materials, US$5,996 for health insurance, the US$894 University Health Services fee, US$1,551 for travel, US$2,835 for personal costs and US$216 of loan fees. Kellogg offers merit-based and need-based MiM scholarships, decided at admission: you must complete the Financing Your Kellogg Degree/Sponsorship section of the application, everyone is then considered for merit awards automatically, and need-based awards also require the MiM Optional Scholarship form in the Welcome Portal",
    description:
      "Kellogg's Master in Management is a 10-month programme, September to June, for ambitious recent graduates from STEM, economics or the liberal arts who want a foundation in business before or early in their careers. Kellogg faculty teach the curriculum, which focuses on communication, leadership and innovation and mixes academic rigour with practical application, and the school's collaborative model means a lot of the work is done in teams. Classes are held in downtown Chicago, close to many large companies. Students get personal coaching from Kellogg's Career Management Center, and Kellogg reports that 85% of the Class of 2025 who were looking for work accepted a role within six months of graduating. Northwestern undergraduates can also apply to a MiM-JD dual degree with Northwestern Pritzker Law.",
    officialProgramUrl: "https://www.kellogg.northwestern.edu/programs/master-in-management/",
    degree: "Master in Management (MiM)",
    campus: "Chicago, Illinois (downtown campus)",
    intake: "September 2027",
    applicationDeadline:
      "Fall 2027 entry: Round 1 closed on 28 October 2026 (decisions 16 December 2026), so it had passed when we checked. Round 2: 13 January 2027, decisions on 10 March 2027. Round 3: 21 April 2027, decisions on 26 May 2027. Round 4: 2 June 2027, decisions on 23 June 2027. Rounds 3 and 4 are open only to applicants who do not need a US student visa, so international students should apply by Round 2",
    admissionRequirements: [
      "Eligibility: you should be completing your undergraduate degree before July 2027 or have less than two years of full-time work experience by September 2027. Applicants who graduated before January 2025 are not eligible",
      "Testing: a GMAT or GRE score is required unless you are a Northwestern undergraduate or have a cumulative undergraduate GPA of 3.4 or higher; applicants graduating on a scale other than 4.0 need a NACES-member (for example WES) course-by-course evaluation to show the GPA equivalent",
      "Application materials: a one-page résumé, your undergraduate academic record, one written essay of up to 450 words, a three-question video essay (due 96 hours after the deadline) and two letters of recommendation, one of them academic (preferably a professor). The application fee is US$125. Selected applicants are invited to interview",
      "English proficiency (Kellogg MiM): non-native English speakers meet the requirement with a degree from a US college or university or from an institution where English was the only language of instruction (provide the URL or documentation). Otherwise English is assessed through the application and interview together with a valid TOEFL, IELTS or Duolingo English Test score; no minimum is published, and the committee may ask any candidate for a score",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Machine Learning and Data Science (MS)",
    slug: "northwestern-ms-machine-learning-data-science",
    level: "Master",
    field: "Data Science",
    duration: "15 months full-time (five consecutive quarters, fall to the following fall)",
    tuitionNote:
      "2026-27 (latest published; fall 2027 entrants will pay 2027-28 rates, which were not yet published): tuition is US$23,662 a quarter, billed for the fall, winter and spring quarters of the first year and again for the final fall quarter, when the programme says to expect roughly 5% more. That makes about US$94,648 of tuition at 2026-27 rates before the increase on the last quarter (our sum). There is no tuition for the summer internship quarter. Fees: a US$125 student activity fee per quarter and the student health services fee (US$298 a quarter in the graduate financial aid office's 2026-27 table; the programme's own page still shows the 2025-26 figure of US$287), plus the US$5,996 NU-SHIP health insurance premium unless you have qualifying cover (international students must buy it). The Office of Graduate Financial Aid's 2026-27 indirect cost estimate for this programme is US$31,134 for three quarters or US$41,512 for four (housing and food, books, personal costs, transport and loan fees). MLDS awards a small number of scholarships; apply by the 1 December priority deadline for full consideration. Students cannot hold teaching or research assistant positions in the department",
    description:
      "The MS in Machine Learning and Data Science (MLDS, formerly the MS in Analytics) is a full-time professional master's housed in McCormick's Department of Industrial Engineering and Management Sciences. Students move through a set curriculum as a cohort of about 55 to 60, studying statistics, machine learning, artificial intelligence, optimisation, databases and data engineering. The first three quarters combine required courses with an eight-month practicum project sourced from industry, done in small teams guided by business and technical advisers. The summer quarter is reserved for an experiential learning requirement, usually a ten-week full-time internship, and students return for a final fall quarter to finish coursework and a 10-week industry capstone project. Faculty come from several Northwestern schools and departments as well as industry, and students lead their own job searches with support from the programme, McCormick and Northwestern Career Advancement. Students admitted for fall 2027 are expected to graduate in December 2028.",
    officialProgramUrl: "https://www.mccormick.northwestern.edu/machine-learning-data-science/",
    degree: "Master of Science (MS) in Machine Learning and Data Science",
    intake: "Fall quarter only (September 2027)",
    applicationDeadline:
      "Fall 2027 entry: the application opened on 8 September 2026. Scholarship priority deadline: 1 December 2026, 11:59 pm Central Time. Regular Decision deadline: 15 January 2027, 11:59 pm Central Time (considered for admission and any scholarship funding that remains). Decisions are released gradually between March and May 2027",
    admissionRequirements: [
      "A bachelor's degree (or the international equivalent) from a regionally accredited institution, conferred before you enrol, with a cumulative GPA of at least 3.0 on a 4.0 scale or the international equivalent. There are no strict prerequisites, but you should show a strong background in, or aptitude for, mathematics and programming",
      "Application materials: three letters of recommendation (the programme suggests more academic letters if you graduated recently and more professional ones the longer you have worked), a personal statement, a scholarship statement, unofficial transcripts from every degree-granting or relevant institution, a résumé or CV, links to GitHub or a portfolio of coding projects and an optional but strongly encouraged candidate video. GRE and GMAT scores are not required",
      "English proficiency (MLDS): international applicants must send TOEFL iBT (minimum 100) or IELTS (minimum 7.5) scores that are less than two years old when they enrol; no other English tests are accepted. The requirement is waived automatically if you hold a bachelor's degree or higher from a native English-speaking country, and you can request a waiver with an official letter confirming your degree was taught in English",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Artificial Intelligence (MS)",
    slug: "northwestern-ms-artificial-intelligence",
    level: "Master",
    field: "Artificial Intelligence",
    duration: "15 months full-time for the traditional track (fall to the following fall, four tuition quarters plus a summer)",
    tuitionNote:
      "2026-27 (latest published; fall 2027 entrants will pay 2027-28 rates): full-time tuition is US$23,662 a quarter. Traditional-track students pay four quarters of full-time tuition (first fall, winter, spring and second fall), about US$94,648 at 2026-27 rates (our sum), with no tuition for the summer quarter when most do an optional internship. The programme also lists about US$24,000 a year for on-campus living costs, a US$125 student activity fee per quarter (which covers the U-Pass transit card), a US$298 health services fee per quarter, roughly US$500 to US$1,000 for textbooks, about US$5,000 for personal and transport costs and Northwestern's student health insurance, which international students must buy (US$5,996 for 2026-27). McCormick puts the total cost of the degree at approximately US$125,000, depending on living costs. MSAI does not offer institutional grants, scholarships or teaching assistantships; students can apply for loans through the Evanston Office of Graduate Financial Aid",
    description:
      "Northwestern's MS in Artificial Intelligence (MSAI) aims to produce graduates with strong technical skills in machine intelligence who also understand the human environments and business workflows their systems will be used in. The traditional track is for people who want to build complex AI systems in industry. In the first fall quarter the cohort takes Introduction to AI, Machine Learning, Data Science and Generative and Agentic AI in the Cloud, plus a short topics course; winter adds Representation, Reasoning and Language, Deep Learning, Frameworks for AI and an elective; spring brings Human-Computer Interaction, a team practicum on an open-ended AI problem and two electives such as natural language processing, computer vision or generative AI. Most students take an optional external internship in the summer. In the final fall quarter students take three electives and an industry capstone, working in mixed teams with Kellogg MBAi students on a real company problem. The cohort is limited to about 45 students, and the programme can only be completed full-time and in person, with daytime classes. A separate MSAI+X track, starting with a summer bootcamp, is for people who want to bring AI back into their original field.",
    officialProgramUrl: "https://www.mccormick.northwestern.edu/artificial-intelligence/",
    degree: "Master of Science (MS) in Artificial Intelligence",
    intake: "Fall quarter (September 2027) for the traditional track; MSAI+X starts in the summer",
    applicationDeadline:
      "Rolling review for the next fall entry: the application opens on 15 September each year. Recommended submission deadline: 15 December; final deadline: 15 April. The admissions page does not print a year on these dates, so for fall 2027 entry we read them as 15 December 2026 and 15 April 2027. Applications sent before the recommended deadline are reviewed first and decisions start about six to eight weeks later; later applications may not get full consideration if the cohort is full",
    admissionRequirements: [
      "A BA or BS in computer science or a related field. Strong preference goes to applicants with at least two years of related work experience (for example development, design or software architecture), and a strong programming background is important",
      "Application materials: unofficial transcripts from every college attended, three letters of recommendation from faculty or current employers, a résumé or CV, links to self-directed computer science work such as GitHub repositories, a two-part personal statement (up to 500 words on why MSAI, what you will add and your career goals, then up to 300 words on a problem AI will help solve in the next five years) and an optional video of up to two minutes. GRE scores are optional but recommended, and are considered if sent (ETS code 2601)",
      "English proficiency (MSAI): applicants whose primary language is not English need a TOEFL score of at least 100 (internet-based) or 600 (paper-based) (institution code C038) or an IELTS score of at least 7.0, taken no more than two years before enrolling. Alternatively, a degree from an accredited US institution, or an undergraduate or graduate degree from an institution that teaches in English (with programme approval), can satisfy the requirement",
    ],
  },

  {
    ...UNIVERSITY,
    name: "Computer Science (MS)",
    slug: "northwestern-ms-computer-science",
    level: "Master",
    field: "Computer Science",
    duration: "3 to 4 quarters full-time (12 units of graduate-level credit); some students take longer",
    tuitionNote:
      "2026-27 (latest published; fall 2027 entrants will pay 2027-28 rates): The Graduate School charges master's students US$23,662 a quarter for 3 to 4 units, plus a US$298 health services fee in the fall, winter and spring quarters and the US$5,996 NU-SHIP health insurance premium unless you have qualifying cover (international students must buy it). The Office of Graduate Financial Aid estimates indirect costs of US$31,356 for three quarters (housing and food US$22,941, books US$2,271, personal US$2,835, transport US$1,551, loan fees US$1,758). Adding these up, three full-time quarters come to about US$109,232 at 2026-27 rates (our sum), and a fourth quarter adds roughly US$34,000 more. The computer science department does not offer financial aid to MS students, and MS applicants are not eligible for application fee waivers; students can still use loans through the graduate financial aid office",
    description:
      "The MS in Computer Science, offered through The Graduate School by McCormick's Department of Computer Science, is a flexible degree that students shape with the MS programme director to fit their own goals. You need 12 units of graduate-level credit, which can come from computer science courses, relevant courses in other departments and research, and you can either follow a course-based plan or add a formal master's thesis or a multi-quarter application project with a faculty member. MS students share classrooms with PhD students. The department's CS+X approach links computer science with fields such as medicine, business, journalism, music and art,. The Evanston campus sits on Lake Michigan about 12 miles north of downtown Chicago, close to the city's tech sector, and career support comes from Engineering Career Development and Northwestern Career Advancement. The MS is a terminal degree and does not count as admission to the PhD.",
    officialProgramUrl: "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/masters/",
    degree: "Master of Science (MS) in Computer Science",
    intake: "Fall quarter only (September 2027)",
    applicationDeadline:
      "Fall 2027 entry (the 2027-28 academic year): applications opened on 15 September 2026 and are reviewed in rounds. Applications submitted by 30 November 2026 get a decision by 10 January 2027; by 31 December 2026, a decision by 10 February 2027; by 28 February 2027, a decision by 31 March 2027; and by 15 June 2027, a decision by 15 July 2027 (space may be limited). Space is limited and the portal may close early once the cohort is full, so the department encourages early applications.",
    admissionRequirements: [
      TGS_MINIMUM,
      "Application materials (through The Graduate School's online application, choosing the MS option): a statement of purpose, scanned transcripts (keep GPAs on your institution's own scale), a résumé and at least two letters of recommendation (three are strongly recommended). GRE scores are not required and are not considered for MS applicants. The department says it recently received about 1,700 MS applications for about 250 offers, and that admitted students had an average GPA of 3.82 and a median TOEFL score of 108",
      TGS_ENGLISH,
    ],
  },

  {
    ...UNIVERSITY,
    name: "Journalism (MSJ, Medill)",
    slug: "northwestern-msj-journalism",
    level: "Master",
    field: "Journalism",
    duration: "1 year full-time (four quarters, starting in September)",
    tuitionNote:
      "2026-27 budget (latest published; fall 2027 entrants will pay 2027-28 rates): Medill lists direct charges of US$78,218 for the four quarters of the MSJ, made up of US$75,676 in tuition, a US$1,648 activity fee and a US$894 health services fee. Its estimated variable costs for the four quarters are US$1,400 for books and supplies, US$2,064 for transport, US$29,412 for housing and food, US$220 of federal loan fees and US$3,780 for personal expenses, plus the US$5,996 NU-SHIP health insurance premium, which international students must buy. That comes to about US$121,090 in total (our sum). All admitted students are considered for merit-based scholarships, and Medill says it gives scholarships or grants to more than 95% of its graduate journalism students each year. The Medill Explores reporting trips cover students' flights and lodging",
    description:
      "Medill's one-year Master of Science in Journalism gives students a foundation in the principles and techniques of modern journalism and then lets them specialise in a subject area or reporting method: Health, Environment and Science; Magazine; Media Management and Leadership; the Medill Investigative programmes; Politics, Policy and Foreign Affairs; Sports Media; or Video and Broadcast. Teaching mixes academic scholars with prize-winning journalists, courses are often tied to professional work, and every student must complete an internship, practicum or freelance work before graduating. Students report in local, national and international settings, from Chicago to Washington, D.C., where they can cover Congress and federal policy, and the Medill Explores programme pays for flights and lodging on reporting trips. Medill also arranges credentialed access to newsrooms, sports arenas, business summits and political events, helps fund conference travel and offers funded reporting fellowships. The MSJ is a STEM-designated degree (CIP code 09.0702), and Medill reports that 95% of graduates are employed within six months. Medill admits students straight from undergraduate study, professionals with one to three years of work experience and career changers; its quick facts list 109 students in the class.",
    officialProgramUrl: "https://www.medill.northwestern.edu/journalism/graduate-journalism/",
    degree: "Master of Science in Journalism (MSJ)",
    campus: "Evanston and Chicago, Illinois (with reporting in Washington, D.C. and abroad)",
    intake: "September 2027",
    applicationDeadline:
      "Fall 2027 entry: Round 1 closed on 9 November 2026 (interviews by 4 December 2026, decisions on 8 January 2027), so it had passed when we checked. Round 2: apply by 18 January 2027, complete any interview by 19 February 2027, decisions on 12 March 2027. Round 3: apply by 29 March 2027, interview by 23 April 2027, decisions on 21 May 2027",
    admissionRequirements: [
      "A four-year bachelor's degree completed before you start (you can apply while finishing it). Applicants with degrees from outside the United States must send a course-by-course credential evaluation and degree verification from a NACES member when they apply, showing their degree equals a US four-year bachelor's",
      "Application materials: transcripts from all colleges attended, a résumé, a professional statement of up to 750 words, a writing sample of up to three pages that shows your research and reporting, up to three optional clips, one letter of recommendation and a non-refundable US$75 application fee. GRE and GMAT scores are not required. The admissions interview is optional, but Medill recommends it for applicants whose first language is not English or who have limited reporting experience in English",
      MEDILL_ENGLISH("1699"),
    ],
  },

  {
    ...UNIVERSITY,
    name: "Integrated Marketing Communications (MS, full-time, Medill)",
    slug: "northwestern-ms-integrated-marketing-communications",
    level: "Master",
    field: "Marketing",
    duration: "12 months full-time (four quarters and 18 graduate credits, starting in September)",
    tuitionNote:
      "2026-27 budget (latest published; fall 2027 entrants will pay 2027-28 rates): Medill lists direct charges of US$106,394 for the four quarters of the full-time IMC programme, made up of US$104,964 in tuition, a US$536 activity fee and a US$894 health services fee. Its estimated variable costs for the four quarters are US$1,200 for books and supplies, US$2,064 for transport, US$29,412 for housing and food, US$220 of federal loan fees and US$3,780 for personal expenses, plus the US$5,996 NU-SHIP health insurance premium, which international students must buy. That comes to about US$149,066 in total (our sum). All admitted students are considered for merit-based scholarships whichever round they apply in, and Medill also lists Dean's Scholarships for the programme",
    description:
      "Medill's full-time Master of Science in Integrated Marketing Communications teaches a customer-centred approach to marketing, in which customer insight guides strategy, execution and measurement across every channel. Over 12 months students take core courses such as Marketing Research, Financial Accounting, the IMC Strategic Process, Consumer Insight and Marketing Strategy, then combine more than one of the programme's four sequences (consumer insights and analytics, brand strategy, strategic communications and media), with courses ranging from brand management and digital marketing activation to data science foundations, marketing models, machine learning and data storytelling. In the final Immersion Quarter, students apply what they have learned in capstone projects, blending sequences to develop strategies for real companies. Options include a Sports Marketing concentration and the Spiegel Scholars programme. The IMC degree is STEM-designated (CIP code 09.0702), and Medill reports that 95% of graduates are employed within six months of graduating. Medill has run IMC for more than 30 years, and its alumni network numbers over 18,000.",
    officialProgramUrl: "https://www.medill.northwestern.edu/imc/full-time/",
    degree: "Master of Science (MS) in Integrated Marketing Communications",
    intake: "September 2027",
    applicationDeadline:
      "Fall 2027 entry: Round 1 closed on 5 October 2026 (decisions on 11 December 2026), so it had passed when we checked. Round 2: apply by 30 November 2026, decisions on 12 February 2027. Round 3: apply by 15 March 2027, decisions on 30 April 2027. Decisions are not rolling: applications completed by a deadline get a decision by that round's notification date, and every round uses the same review process",
    admissionRequirements: [
      "A four-year bachelor's degree completed before you start (you can apply while finishing it). Applicants with transcripts from outside the United States must send a course-by-course credential evaluation and degree verification from a NACES member when they apply",
      "GRE or GMAT scores from the last five years are required (GRE code 1699, GMAT code 6WZ-XH-66; at-home versions accepted). You can ask for a waiver if you have a final or current undergraduate GPA of 3.5 or above on a 4.0 scale, a master's or doctoral degree, or are a current Northwestern degree student or alumnus; other applicants can still send a written waiver request with a résumé and transcript",
      "Application materials: transcripts from all colleges attended, a résumé of no more than two pages, a professional statement of up to 750 words, two letters of recommendation and a non-refundable US$100 application fee. A Medill interview is required for applicants who are invited to one after submitting a complete application",
      MEDILL_ENGLISH("1699"),
    ],
  },
];
