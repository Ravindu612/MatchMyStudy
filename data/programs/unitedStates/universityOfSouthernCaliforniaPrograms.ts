import type { Program } from "@/data/programs";

// University of Southern California undergraduate majors for Fall 2027 entry (University Park Campus, Los Angeles).
// Sources: USC Undergraduate Admission (first-year, international, test-optional and spring-admission pages), USC Financial Aid 2026-27 cost of attendance,
// and official school pages: Viterbi Admission, Marshall, Dornsife (department pages and 2026 major sheets), Mann, School of Architecture, Cinematic Arts and Thornton. Costs are in US dollars.

export const universityOfSouthernCaliforniaPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "usc-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Viterbi's BS in Computer Science, from the Thomas Lord Department of Computer Science, prepares students for software design, development, application and maintenance, with intensive study of algorithm design and analysis and the theory of computing. Students can work in areas such as networks, games, virtual reality, data science, AI, machine learning and robotics. Related degrees include Computer Science (Games), Computer Engineering and Computer Science, and Computer Science/Business Administration. Students apply through the Common App to USC, choosing this major in the USC Viterbi School of Engineering.",
    officialProgramUrl:
      "https://viterbiadmission.usc.edu/cs/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Viterbi School of Engineering. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "usc-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Viterbi's BS in Artificial Intelligence is an interdisciplinary degree that draws on computer science, electrical and computer engineering, and industrial and systems engineering. Students learn to design, build and train models for tasks such as image recognition, natural language processing and recommendation, and choose one of three tracks: AI Systems and Operations (data engineering and analytics), Computing Foundations and Applications (NLP, robotics, computer vision and trustworthy AI), or Hardware Systems for AI (chip and circuit design, communications and control). Students apply through the Common App to USC, choosing this major in the USC Viterbi School of Engineering.",
    officialProgramUrl:
      "https://viterbiadmission.usc.edu/ai/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Artificial Intelligence",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Viterbi School of Engineering. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "usc-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Viterbi's BS in Mechanical Engineering, in the Department of Aerospace and Mechanical Engineering, gives a foundation in mechanical principles and the design of things that move. It covers mechanics, thermodynamics, fluid mechanics, heat transfer, materials and design. Undergraduates can join faculty research in areas such as combustion, computational fluid mechanics, control systems, biomechanics and robotics. Students apply through the Common App to USC, choosing this major in the USC Viterbi School of Engineering.",
    officialProgramUrl:
      "https://viterbiadmission.usc.edu/ame/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Viterbi School of Engineering. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Biomedical Engineering",
    slug: "usc-biomedical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Viterbi's BS in Biomedical Engineering, from the Alfred E. Mann Department of Biomedical Engineering, combines engineering (electronics, systems analysis and mechanics) with the life sciences (biology, physiology and biochemistry) to solve problems in biology and medicine. Students can take the general degree or an emphasis in Molecular & Cellular, Electrical or Mechanical. The program can include most medical school prerequisites, and research placements include County-USC Medical Center and Children's Hospital Los Angeles. Students apply through the Common App to USC, choosing this major in the USC Viterbi School of Engineering.",
    officialProgramUrl:
      "https://viterbiadmission.usc.edu/bme/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biomedical Engineering",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Viterbi School of Engineering. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "usc-electrical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Viterbi's BS in Electrical Engineering, from the Ming Hsieh Department of Electrical and Computer Engineering, covers computer and information systems, telecommunications and wireless, nanoelectronics, circuit design and robotics. Core classes lead into one of three emphases: Circuits, Signals and Systems; Computer Engineering; or Energy and Electrical Sciences. The department also runs a joint BS in Computer Engineering and Computer Science with Computer Science. Hands-on studio labs combine lectures with analogue and digital electronics, microprocessor and radio-frequency work. Students apply through the Common App to USC, choosing this major in the USC Viterbi School of Engineering.",
    officialProgramUrl:
      "https://viterbiadmission.usc.edu/ece/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Electrical Engineering (with an emphasis)",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Viterbi School of Engineering. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Business Administration",
    slug: "usc-business-administration",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Business",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Marshall's BS in Business Administration is a four-year business degree. Its core covers leadership and organisational behaviour, micro- and macroeconomics, financial and managerial accounting, corporate finance, marketing, business analytics, data science, operations, communication and strategy. About 32 units of free electives leave room for most USC minors, and students choose from more than 250 business electives. Optional emphases of 12-16 units include Business Analytics, Entrepreneurship and Innovation, Finance, Marketing, Real Estate Finance and Risk Management. Students apply through the Common App to USC, choosing this major in the USC Marshall School of Business.",
    officialProgramUrl:
      "https://www.marshall.usc.edu/programs/undergraduate-programs/undergraduate-degrees/business-administration-program",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Business Administration",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Marshall School of Business. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Economics",
    slug: "usc-economics",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Economics",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Dornsife's BA in Economics combines economic theory with practical models and emphasises applied research in areas such as health care, law and the environment. Eight core courses cover principles of micro- and macroeconomics, calculus, intermediate theory, statistics for economists, econometrics and a computing elective, followed by four upper-division electives such as neuroeconomics, games and economics, or economic analysis of law. A progressive BA/MS can be finished in five and a half years. Students apply through the Common App to USC, choosing this major in the USC Dornsife College of Letters, Arts and Sciences.",
    officialProgramUrl:
      "https://dornsife.usc.edu/econ/undergraduate/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Economics",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Dornsife College of Letters, Arts and Sciences. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Neuroscience",
    slug: "usc-neuroscience",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Biomedical Sciences",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Dornsife's Neuroscience major covers the whole range of modern neuroscience, with faculty from biology, chemistry, computer science, biomedical engineering, psychology, gerontology, medicine and pharmacy. The core includes biology, chemistry, calculus, statistics, behavioural, systems and cellular and molecular neuroscience, and neurobiology. The BS adds further chemistry (including organic chemistry), two semesters of physics and an extra upper-division elective. More than 60 faculty run funded labs that welcome undergraduates, and research can count for elective credit. Students apply through the Common App to USC, choosing this major in the USC Dornsife College of Letters, Arts and Sciences.",
    officialProgramUrl:
      "https://dornsife.usc.edu/usc-neuroscience/programs-of-study/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Neuroscience",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Dornsife College of Letters, Arts and Sciences. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "usc-biological-sciences",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Natural Sciences",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Dornsife's BS in Biological Sciences studies living systems from the biochemical and genetic level to cells and global biodiversity. Students take introductory biology, general and organic chemistry, calculus, physics for the life sciences and statistics, then molecular biology, biochemistry, genetics and upper-division lab courses. Optional emphases are Biotechnology; Ecology, Evolution and Environment; Marine Biology; and Molecular, Cellular and Developmental Biology. Research is possible in more than 60 faculty labs and at the Wrigley Marine Science Center on Catalina Island. Students apply through the Common App to USC, choosing this major in the USC Dornsife College of Letters, Arts and Sciences.",
    officialProgramUrl:
      "https://dornsife.usc.edu/bisc/undergraduate/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Biological Sciences",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Dornsife College of Letters, Arts and Sciences. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Psychology",
    slug: "usc-psychology",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Psychology",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Dornsife's BA in Psychology studies human behaviour and how people develop and change over time, including its neural and physiological basis and environmental and social influences. Students take introductory psychology, statistics, and experimental and non-experimental research methods, then courses in four of five areas (biological, clinical, cognitive, developmental and social) plus electives. Undergraduates can work in research labs, and some major courses can be taken abroad. Students apply through the Common App to USC, choosing this major in the USC Dornsife College of Letters, Arts and Sciences.",
    officialProgramUrl:
      "https://dornsife.usc.edu/psyc/undergraduate-program/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in Psychology",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Dornsife College of Letters, Arts and Sciences. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "International Relations",
    slug: "usc-international-relations",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Dornsife's BA in International Relations, in the Department of Political Science and International Relations, studies how global developments shape business, government and law. Students take introductory, historical, research-methods and global economy courses, then one course in each of four areas (culture, gender and global society; foreign policy analysis; international political economy; and international politics and security), plus regional and 400-level courses. The major needs four semesters of one foreign language and offers travel, research and internship opportunities. Students apply through the Common App to USC, choosing this major in the USC Dornsife College of Letters, Arts and Sciences.",
    officialProgramUrl:
      "https://dornsife.usc.edu/poir/undergraduate-programs/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA) in International Relations",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Dornsife College of Letters, Arts and Sciences. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Pharmacology and Drug Development",
    slug: "usc-pharmacology-drug-development",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Pharmacy",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Mann's BS in Pharmacology and Drug Development builds skills in pharmacology, toxicology, and how medical products are developed and used, through coursework and independent research. It prepares students for graduate study in pharmacy, medicine, dentistry and other health fields, or for research and development careers in biotechnology, industry and government. Sample courses cover addiction pharmacology, clinical trials and taking medical products from idea to market, and an honours capstone is available. It is not the professional Doctor of Pharmacy (PharmD), which USC offers as a separate program. Students apply through the Common App to USC, choosing this major in the USC Alfred E. Mann School of Pharmacy and Pharmaceutical Sciences.",
    officialProgramUrl:
      "https://mann.usc.edu/programs/bs-pharmacology-and-drug-development/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Pharmacology and Drug Development",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD)",
    admissionRequirements: [
      "School: USC Alfred E. Mann School of Pharmacy and Pharmaceutical Sciences. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "No portfolio or audition is required for this major",
    ],
  },

  {
    name: "Architecture (BArch)",
    slug: "usc-architecture",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Architecture",
    duration: "5 years full-time (10 semesters, 160 units)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance. The BArch takes five years of tuition, and the School of Architecture lists extra program-specific costs for computers, equipment and materials",
    description:
      "The USC School of Architecture's Bachelor of Architecture is a five-year, ten-semester professional degree of 160 units, accredited by the National Architectural Accrediting Board (NAAB). It combines a design studio sequence with a broad university education and prepares students for professional licensure and practice. Based in Los Angeles but with a global outlook, the program encourages thinking about architecture's cultural and social role. Students apply through the Common App to USC, choosing this major in the USC School of Architecture.",
    officialProgramUrl:
      "https://arch.usc.edu/programs/bachelor-of-architecture",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Architecture (BArch)",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD). The architecture portfolio and the Writing and Video Supplement are due by the same deadline as the Common App",
    admissionRequirements: [
      "School: USC School of Architecture. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "Portfolio required: 6 to 12 digital images of creative work uploaded to SlideRoom (through the link in the Common App), showing creativity and curiosity. The work need not be architectural, and can include drawing, painting, photography, graphic or web design, sculpture, ceramics, fashion or furniture. Applicants also complete the School of Architecture Writing and Video Supplement: short written responses of up to 200 words each and a 30-60 second video, due by the applicant's Common App deadline",
    ],
  },

  {
    name: "Film and Television Production (BFA)",
    slug: "usc-film-television-production",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "The BFA in Film and Television Production, from the Kevin Feige Division of Film and Television Production in the USC School of Cinematic Arts, is an intensive production degree. Students learn all parts of filmmaking (directing, producing, writing, editing, sound, and cinematography and production design) through individual and group projects for screens of every size. They also take requirements and electives in cinema and media studies, writing, animation and interactive media. Students apply through the Common App to USC, choosing this major in the USC School of Cinematic Arts.",
    officialProgramUrl:
      "https://cinema.usc.edu/production/index.cfm",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Fine Arts (BFA) in Cinematic Arts, Film and Television Production",
    intake: "Fall (August, University Park Campus, Los Angeles). Students cannot apply for spring, but USC offers spring-semester admission to about 500 fall applicants each year, and they may move to fall only if space opens. Cinematic Arts admits students to a specific semester and cohort, and deferrals are not normally granted",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Early Decision closes 1 November 2026 (binding; admission or deferral to Regular Decision by mid-December 2026). Early Action closes 1 November 2026 (non-binding and non-restrictive; admission or deferral in late January 2027). Regular Decision closes 10 January 2027 (decisions by 1 April 2027). Applying by 1 November is required for USC Merit Scholarship consideration. Need-based aid (FAFSA and CSS Profile) is due 1 November 2026 (ED), 15 November 2026 (EA) or 3 February 2027 (RD). The SlideRoom application must be complete by the same deadline; late applications are not considered",
    admissionRequirements: [
      "School: USC School of Cinematic Arts. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "Creative portfolio required through the Film and Television Production BFA SlideRoom application. It includes a Cinematic Arts personal statement (500 words), a writing sample (either a four-minute film with no dialogue or a two-person dialogue scene, each up to 400 words), a creative portfolio list, a creative team question (500 words) and a 30-60 second video introduction. Applicants also submit a new 2-minute short film made for the application on the set prompt, in which they perform at least 3 of 6 crew jobs, together with a short critique and a crew list. Film and Television Production must be the first-choice major on the Common App, and applicants receive a Kira Talent interview/assessment invitation after the deadline, which must be completed within 5 business days",
    ],
  },

  {
    name: "Popular Music (BM)",
    slug: "usc-popular-music",
    level: "Bachelor",
    universitySlug: "university-of-southern-california",
    universityName: "University of Southern California",
    country: "United States",
    field: "Arts & Humanities",
    duration: "4 years full-time (8 semesters)",
    language: "English",
    tuitionNote:
      "2026-27 tuition: US$75,384 for two semesters (12-18 units a semester), the same for California residents, out-of-state and international students. USC's 2026-27 estimated cost of attendance for an undergraduate living on campus is US$103,162: tuition, fees (US$1,952), housing (US$13,510), food (US$8,442), books and supplies (US$670), transportation (US$1,188) and personal expenses (US$2,016), plus a one-time US$450 new-student fee in the first semester. Some majors cost more because of lab or studio fees. US citizens and eligible non-citizens apply for need-based aid with the FAFSA and CSS Profile. International students cannot get need-based aid and must document funds for the full first-year cost, but they are eligible for USC Merit Scholarships, none of which covers the full cost of attendance",
    description:
      "USC Thornton's BM in Popular Music trains the next generation of artists for changing careers in the music industry. Students enter with a primary emphasis (guitar, bass, keyboard/piano, drums, voice, singer/songwriter or multi-instrumentalist) and then, in a collaborative cohort, build further skills in other instruments, songwriting, vocal performance, arranging and music production. Graduates leave as versatile, all-round creative professionals. Students apply through the Common App to USC, choosing this major in the USC Thornton School of Music.",
    officialProgramUrl:
      "https://music.usc.edu/admission/appreqs/popular-music-undergraduate/",
    campus: "University Park Campus (Los Angeles)",
    programType: "Full-time",
    degree: "Bachelor of Music (BM) in Popular Music",
    intake: "Fall only (August, University Park Campus, Los Angeles). USC Thornton does not accept first-year applications for spring admission",
    applicationDeadline: "Fall 2027 entry (first-year applicants, Common App, US$85 fee or waiver): Thornton majors use Regular Decision only, with a 1 December 2026 deadline for the USC application and the Thornton SlideRoom portfolio. Early Decision and Early Action are not available. Applying by 1 December gives USC Merit Scholarship consideration. Prescreen results are emailed in late December, and final decisions come by 1 April 2027. Need-based aid (FAFSA and CSS Profile) is due 3 February 2027",
    admissionRequirements: [
      "School: USC Thornton School of Music. Applicants choose the major (with first- and second-choice options) on the Common App and are admitted to that school",
      "Testing: test-optional for Fall 2027 entry (the 2027-28 academic year), with no penalty for applying without SAT or ACT scores. Applicants who do submit scores must have them sent officially by the testing agency (self-reported scores are not accepted). USC records the highest score for each section across sittings",
      "English proficiency (international applicants whose native language is not English; no waivers): USC's recommended minimums are TOEFL iBT 100 with at least 20 in each section (tests before 21 January 2026) or 5 with at least 4 in each section (tests from 21 January 2026), IELTS 7, C1 Advanced 185 (at least 169 in each skill), PTE Academic 68, SAT Evidence-Based Reading and Writing 650, or ACT English 27. Applicants below these scores can still be admitted, but at lower rates; admitted students average above TOEFL 111. The Duolingo English Test (minimum 130) is accepted only from applicants who cannot sit an approved exam, and Duolingo-only admits take USC's International Student Exam on arrival",
      "One letter of recommendation from a school counselor or a teacher is required, along with transcripts and fall grades. International applicants also submit the Financial Statement of Personal or Family Support. USC Admission does not hold evaluative interviews or track demonstrated interest",
      "Audition required, in two rounds. First, applicants submit a prescreen video recording through the Thornton SlideRoom portfolio (US$35 fee, waived for Common App fee-waiver recipients) by 1 December, choosing an emphasis. Prescreen results arrive in late December, and those who pass are invited to a live audition. Popular Music must be the only Thornton major and the first-choice major on the Common App; a second Thornton major needs a separate Second Major Request by 1 December",
    ],
  },
];
