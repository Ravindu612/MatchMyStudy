import type { Program } from "../../programs";

// Boston University (Boston, Massachusetts): 15 undergraduate programs for Fall 2027 entry.
// Sources: BU Admissions (first-year application, deadlines, international applicants and English proficiency, full tuition figures for 2026-27) and the BU Bulletin program pages (viewed October 16, 2026). Costs are in US dollars.

export const bostonUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "bu-computer-science",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "Computer Science majors in BU's College of Arts & Sciences learn how hardware and software systems for computing are organised, designed and built. They develop the mathematical skills to model and analyse computation formally, and learn to design and implement efficient solutions to problems that need computing. As with every BU major, students also take courses in the BU Hub, the university's general education program.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cas/programs/computer-science/ba/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Computer Science",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (CAS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Data Science",
    slug: "bu-data-science",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Data Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "The BS in Data Science is offered by BU's Faculty of Computing & Data Sciences. It combines computational and statistical thinking to collect, explore and analyse data, find patterns and make predictions about complex real-world processes. The program covers the maths, statistics, algorithms, informatics and software engineering needed to work with large or complex data. It also covers the ethics, regulation and social context of data work, and students learn the full cycle of data-driven inquiry. It is designed so students can add a minor in another field that uses data.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cds/programs/bs-in-data-science/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Data Science",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: Faculty of Computing & Data Sciences (CDS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Economics",
    slug: "bu-economics",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "BU's Economics major gives a firm grounding in core microeconomic and macroeconomic theory together with the empirical and econometric skills to apply economic reasoning to data. Electives range from financial economics to labour markets and development economics. Coursework in the major also counts towards the BU Hub requirements in social inquiry and quantitative reasoning.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cas/programs/economics/ba/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (CAS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Business Administration",
    slug: "bu-business-administration",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Business",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "The Questrom School of Business BSBA combines business courses with study across the university through the BU Hub. From the start, students take a set of 16 core courses across the business disciplines, covering how they connect and the role of business in society. They also build teamwork, critical thinking and career management skills through required career courses. Every student completes at least one concentration and can add the Questrom Honors Program, minors, study abroad, directed study or a dual degree.",
    officialProgramUrl:
      "https://www.bu.edu/academics/questrom/programs/bsba/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science in Business Administration (BSBA)",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: Questrom School of Business. Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "bu-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "BU's Mechanical Engineering students study how robots move, how aircraft fly and how data drives engineering, along with sustainable energy, engineered tissues, new materials and work at scales from nanotechnology to space. They can concentrate in aerospace engineering, manufacturing, energy technologies and sustainability, nanotechnology, machine learning or technology innovation. Student teams build rockets and race cars, and students can build prototypes in the Engineering Product Innovation Center (EPIC).",
    officialProgramUrl:
      "https://www.bu.edu/academics/eng/programs/mechanical-engineering/bs/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Engineering (ENG). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Biomedical Engineering",
    slug: "bu-biomedical-engineering",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Biomedical Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "Biomedical engineering at BU applies engineering to problems in biology, medicine and biotechnology. Examples include designing physiological measurement and diagnostic systems and using quantitative experiments to understand how the body works in health and disease. The program combines rigorous engineering, maths and science with biology and physiology from the molecular level to whole organisms. Almost all pre-medical requirements can be completed within the degree, and graduates go into engineering, science, healthcare or business, or on to medicine, law or graduate study.",
    officialProgramUrl:
      "https://www.bu.edu/academics/eng/programs/biomedical-engineering/bs/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biomedical Engineering",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Engineering (ENG). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "bu-computer-engineering",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Computer Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "Computer Engineering is one of two BS programs in BU's Department of Electrical & Computer Engineering. Students learn to engineer hardware, software and computer networks. After a foundation in physical science, maths and computer science, they study logic design, computer organisation, operating systems, software design and algorithms. Technical electives cover VLSI, networking and software design, and an optional course sequence covers cybersecurity and the Internet of Things.",
    officialProgramUrl:
      "https://www.bu.edu/academics/eng/programs/computer-engineering/bs/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Engineering",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Engineering (ENG). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Biology",
    slug: "bu-biology",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Biology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "BU's Biology major gives breadth across all the biological disciplines, plus the option to go deeper in one of several specialisations. Students take lecture, lab, field and seminar courses, and can join faculty research and use Boston's extensive life-science resources. Graduates are prepared for jobs in the life sciences or for graduate and professional school.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cas/programs/biology/ba/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Biology",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (CAS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Neuroscience",
    slug: "bu-neuroscience",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Neuroscience",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "BU's Neuroscience major explores how networks of nerve cells create motivation, sensation, memory and behaviour in humans and other animals, and how disorders and injuries such as Alzheimer's disease or spinal cord damage cause symptoms. It prepares students for neuroscience and other science careers in academia and industry. It also builds skills for paths such as medicine and clinical therapy, public health, law, policy, education and communication.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cas/programs/neuroscience/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Neuroscience",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (CAS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Psychology",
    slug: "bu-psychology",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Psychology",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "Psychology at BU is the scientific study of human behaviour and mental processes. Students learn research methods, including study design, data analysis and interpretation, and the ethics of research with people and animals, then carry out their own research. With suitable related courses, the major prepares students for graduate programs in psychology, medicine, law and other professions, and it gives a broad liberal arts base.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cas/programs/psychology/ba/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Psychology",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (CAS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Mathematics and Statistics",
    slug: "bu-mathematics-statistics",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Mathematics",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "BU's Mathematics and Statistics major builds abstract thinking and critical reasoning through courses across mathematics and statistics. BU notes that mathematicians and statisticians are in demand in government, business, industry, universities and research labs, and that the degree is a strong base for graduate study in maths, statistics and computational fields.",
    officialProgramUrl:
      "https://www.bu.edu/academics/cas/programs/mathematics-statistics/ba/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Mathematics and Statistics",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Arts & Sciences (CAS). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Journalism",
    slug: "bu-journalism",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Journalism",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "The College of Communication's BS in Journalism trains students in reporting, writing, editing, production and design, with a focus on civic responsibility. Students learn to meet deadlines, interview, research and find new approaches in the field, alongside a liberal arts education through the BU Hub. The program prepares graduates to report from the front lines while respecting cultural and ethical boundaries.",
    officialProgramUrl:
      "https://www.bu.edu/academics/com/programs/journalism/bs/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Journalism",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Communication (COM). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Film and Television",
    slug: "bu-film-television",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Film and Media",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "BU's BS in Film & Television covers film, TV and new media, alongside a liberal arts education. Students learn from faculty and alumni who work in the industry, study film and television theory, practise storytelling through writing courses and apply it all in production courses. BU says graduates leave with the theory, professional skills and industry connections to compete in the field.",
    officialProgramUrl:
      "https://www.bu.edu/academics/com/programs/film-television/film-televisionbs/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Film & Television",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Communication (COM). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
      "No portfolio is listed as required for this major. BU's application deadlines page lists prescreening only for School of Music and School of Theatre applicants",
    ],
  },

  {
    name: "Advertising",
    slug: "bu-advertising",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Advertising",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "The College of Communication's BS in Advertising teaches communication theory and research together with practical skills in critical thinking, collaboration, creative design, consumer insight, and management and account strategy. Students learn to write, design and present persuasive ideas through individual and team projects on the creative, managerial, branding and technology sides of advertising.",
    officialProgramUrl:
      "https://www.bu.edu/academics/com/programs/advertising/advertising-bs/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Advertising",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: College of Communication (COM). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },

  {
    name: "Health Science",
    slug: "bu-health-science",
    level: "Bachelor",
    universitySlug: "boston-university",
    universityName: "Boston University",
    country: "United States",
    field: "Health Sciences",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2026-27 (BU's published undergraduate figures, the same for US and international students): tuition US$73,024, fees US$1,570, housing US$13,170 (it depends on the accommodation) and food US$7,570 for most dining plans. That makes US$95,334 in estimated billed expenses. Adding books and supplies (US$1,000), personal expenses (US$1,455) and local transport (US$630) gives a total cost of attendance of about US$98,419. Travel to and from Boston is not part of this budget, and tuition and fees for students entering in fall 2027 have not been set yet. For admitted first-years starting in 2026-27, BU says families with incomes up to US$75,000 (and typical assets) pay nothing, and those up to US$200,000 pay no more than US$20,000 a year. CSS Profile and FAFSA deadlines are listed for US citizens and permanent residents, and international first-year students can apply for merit scholarships",
    description:
      "Sargent College's BS in Health Science combines the health sciences with global public health. The first two years cover biological sciences, humanities and social sciences alongside foundations in global health. The last two apply health science to global public health problems with qualitative and quantitative methods and a senior seminar. The degree ends with a practicum in public health or clinical care at an affiliated site in Boston or abroad, and four study abroad programs can count toward requirements.",
    officialProgramUrl:
      "https://www.bu.edu/academics/sar/programs/health-science/",
    campus: "Charles River Campus, Boston",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Health Science",
    intake: "Fall (September). First-year deadlines are for September entry",
    applicationDeadline: "Fall 2027 entry (Common App, US$80 fee or fee waiver): Early Decision I closes 2 November 2026 (binding, decisions 14 December 2026, deposit due early to mid January). Early Decision II and Regular Decision both close 5 January 2027 (ED II decisions 8 February 2027, with the deposit due in late February). The Regular Decision enrolment deposit is due 1 May 2027. BU does not offer Early Action. Some merit scholarships require you to apply by 1 December 2026",
    admissionRequirements: [
      "School or college: Sargent College of Health & Rehabilitation Sciences (SAR). Apply through the Common App, including a counselor recommendation and school report",
      "Testing: BU is test-optional for first-year applicants through fall 2028 and spring 2029, so SAT/ACT scores are optional for Fall 2027. If you choose to submit scores, BU superscores both the SAT and the ACT and accepts self-reported scores, with official reports needed before you enrol. Your choice about scores cannot be changed after you submit (SAT code 3087, ACT code 1794)",
      "English proficiency (required if English is not your first language): BU does not set a hard cut-off for every test, but says the most competitive applicants have a TOEFL iBT of at least 90-100 with 20 or more in each section (5.0 or higher on the new TOEFL score scale from 21 January 2026), or a Duolingo score of at least 125-135 (all subscores required). IELTS Academic 7.0 overall meets the requirement for all programs. BU does not accept IELTS Indicator, IELTS One Skill Retake, TOEFL ITP Plus or TOEFL Essentials. An optional InitialView or Vericant interview can add evidence of English, and waiver requests must reach BU by the application deadline",
    ],
  },
];

