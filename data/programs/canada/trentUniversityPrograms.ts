import type { Program } from "../../programs";

// Trent University (Peterborough and Durham GTA campuses, Ontario) undergraduate programs for Fall 2027 entry.
// Sources: trentu.ca/futurestudents/program pages, the international admission requirements, English proficiency, international important dates and Nursing admission pages,
// the Peterborough and Durham GTA international Fall 2026 & Winter 2027 fee tables (regular and co-op), Trent International's estimated cost of living page (2027/28 figures),
// the tuition deposit page and the 2026-27 Academic Calendar admission chart (viewed October 17, 2026). Costs are in Canadian dollars.

export const trentUniversityPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "trent-computer-science",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years (Honours); 5 years in the five-year co-op stream",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total. Durham GTA: CAD 35,631.92 in tuition plus CAD 2,905.95 in ancillary and levy fees, so CAD 38,537.87 in total for 2026-27, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 8,171.04 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Computer Science BSc covers programming, software development, artificial intelligence, cybersecurity, data science and computer graphics in small classes at the Peterborough and Durham GTA campuses. Students can specialise in Data Analytics, Software Engineering or Theoretical Computer Science, or add an option in Digital Humanities, Marketing or Communications. A third-year internship gives 80-120 hours of work experience, and a fourth-year capstone builds an information system or software product for a real business client. Co-op students graduate with 12 months of paid work: the four-year co-op stream is Peterborough only, and the five-year stream runs at both campuses. Past co-op employers include TD Bank, Shopify, Nokia and Amazon.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/computer-science",
    campus: "Peterborough or Durham GTA (Oshawa)",
    programType: "Regular or co-op",
    degree: "Bachelor of Science (B.Sc.) in Computer Science, optional specialisation",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U and a 4U math, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75% (80-85% for co-op; the 2026-27 calendar sets an 80% minimum for Computer Science Co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Software Engineering Co-op",
    slug: "trent-software-engineering-co-op",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Software Engineering",
    duration: "5 years (co-op)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 9,180.00 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Software Engineering Co-op is a five-year BSc taught through the Computer Science department, which Trent says makes it one of only two such programs at an Ontario university. Software engineering courses start in first year and cover software architecture, web development, computer security, software quality and project management. Students complete a third-year internship of 80-120 hours, a full-year capstone that analyses, designs, builds and tests a software product, and a 12-month co-op placement with a single employer, made up of three 12-16-week work terms in the summer of year three and the fall and winter of year four. Work areas include software development, quality assurance and cybersecurity.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/software-engineering-co-op",
    campus: "Peterborough",
    programType: "Co-op (five-year continuing model)",
    degree: "Bachelor of Science (B.Sc.) Honours, Software Engineering Co-op",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U and any 4U math (math requirement from Trent's 2026-27 calendar), within six Grade 12 4U/4M courses (ENG4U at 60% or higher). This is a competitive direct-entry program with limited places. The calendar sets a minimum 80% average, and Trent estimates an admission average of 80-85%",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "trent-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Artificial Intelligence",
    duration: "4 years (Honours); 5 years in the co-op stream",
    language: "English",
    tuitionNote:
      "International: Durham GTA: CAD 35,631.92 in tuition plus CAD 2,905.95 in ancillary and levy fees, so CAD 38,537.87 in total for 2026-27, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent offers two Artificial Intelligence degrees at its Durham GTA campus in Oshawa. The BSc focuses on programming, mathematics, machine learning, algorithms, data science and statistics, while the BA, which Trent calls Canada's first BA in AI, pairs programming and analytics with AI ethics, philosophy, governance, communication and user experience. Both use the AI Exploration Lab's high-performance workstations for machine learning and large-scale data work, include labs and capstone projects, and offer a research practicum on topics such as explainable AI, large language models, deep learning and natural language processing. A five-year co-op stream adds three paid 12-16-week work terms.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/artificial-intelligence",
    campus: "Durham GTA (Oshawa)",
    programType: "Regular or co-op",
    degree: "Bachelor of Arts (B.A.) or Bachelor of Science (B.Sc.) in Artificial Intelligence",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, plus MHF4U for the B.Sc.; a 4U math is recommended, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75% (80-85% for co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Data Science",
    slug: "trent-data-science",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Data Science",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 8,171.04 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Data Science BSc in Peterborough combines programming, statistics, machine learning, predictive modelling, data visualisation and data management with credits in a second area, such as life and health sciences for medical data or economics and finance for risk analysis. Students work with structured and unstructured datasets, take upper-year project courses in advanced analytics, and finish with a faculty-supervised fourth-year capstone that builds and evaluates a data science solution on a real dataset. Options in Leadership, Marketing or Communications can be added. Trent lists careers such as data scientist, data analyst, data engineer and data architect.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/data-science",
    campus: "Peterborough",
    programType: "Full-time or part-time",
    degree: "Bachelor of Science (B.Sc.) in Data Science",
    workIntegrated: false,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, MHF4U, and MCV4U or MDM4U, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75%",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Business Administration",
    slug: "trent-business-administration",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Business",
    duration: "4 years (Honours, including the co-op stream)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total. Durham GTA: CAD 35,631.92 in tuition plus CAD 2,905.95 in ancillary and levy fees, so CAD 38,537.87 in total for 2026-27, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 8,171.04 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "The Trent School of Business offers its Bachelor of Business Administration at both the Peterborough and Durham GTA campuses. Students study leadership, strategy, finance, communication and organisational decision-making and can specialise in areas including Accounting, Finance, Entrepreneurship, Human Resource Management, Marketing & Consumer Culture, Information Systems & e-Commerce, Ethics & Sustainability, or Logistics & Supply Chain Management (Durham GTA only). The co-op stream adds three paid 12-16-week work terms within four years, and students outside co-op can take a 6-12-month paid internship in fourth year. Courses support routes to the CPA and CHRP designations.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/business-administration",
    campus: "Peterborough or Durham GTA (Oshawa)",
    programType: "Regular or co-op",
    degree: "Bachelor of Business Administration (B.B.A.), optional specialisation",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U and MHF4U, MCV4U or MDM4U, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75% (80-85% for co-op; the 2026-27 calendar sets an 80% minimum for the Accounting co-op)",
      "Math exemptions for international applicants: A-level students with at least a C in two of Accounting, Business and Economics, and Commerce-stream students in India, do not need math for the BBA",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Supply Chain Management",
    slug: "trent-supply-chain-management",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Supply Chain Management",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: Durham GTA: CAD 35,631.92 in tuition plus CAD 2,905.95 in ancillary and levy fees, so CAD 38,537.87 in total for 2026-27, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent describes its Supply Chain Management BA at the Durham GTA campus in Oshawa as Canada's only Bachelor of Arts in this field. Students learn how goods move from sourcing to delivery, building business, analytical and problem-solving skills and practising with industry procurement tools and a game-based SAP simulator. The program prepares students to pursue the Supply Chain Management Professional (SCMP) designation. In the final year, students choose a research or consulting project, a work placement or a 6-12-month paid internship, with large regional employers such as Ontario Power Generation, Amazon and General Motors nearby. Trent says a paid co-op stream launches in fall 2027.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/supply-chain-management",
    campus: "Durham GTA (Oshawa)",
    programType: "Full-time or part-time; co-op stream launching fall 2027",
    degree: "Bachelor of Arts (B.A.) in Supply Chain Management",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, and MHF4U or MCV4U, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 75-80%",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Economics",
    slug: "trent-economics",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Economics",
    duration: "4 years (Honours, including the co-op stream)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Economics degree in Peterborough comes as a BA or a BSc and teaches students to analyse inflation, unemployment, growth, public policy and international trade using real economic data, statistics and economic modelling. Students use software such as Python for data processing, visualisation, modelling and machine learning, and learn in small groups with direct faculty mentorship. Practical routes include a final-year placement of at least 100 hours, paid internships of 6, 8 or 12 months, and a co-op stream with three paid 12-16-week work terms within four years in fields such as banking, financial analysis and accounting.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/economics",
    campus: "Peterborough",
    programType: "Regular or co-op",
    degree: "Bachelor of Arts (B.A.) or Bachelor of Science (B.Sc.) in Economics",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, plus MHF4U for the B.Sc., within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75% (80-85% for co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Financial Science",
    slug: "trent-financial-science",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Finance",
    duration: "4 years (Honours, including the co-op stream)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent calls its Financial Science BSc in Peterborough the only program of its kind in Canada. It brings together mathematics, statistics, economics, business and computing to prepare students for complex financial problems. In the Financial Intelligence & Innovation Hub, students use 12 Bloomberg terminals with live stock, bond and commodity data to build portfolios and financial models, and practise portfolio management with bonds, options, ETFs and ESG investing in simulation software. The co-op stream adds three paid 12-16-week work terms in the summers of years two and three and the fall of year four, in banking, accounting, financial analysis and investment advising.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/financial-science",
    campus: "Peterborough",
    programType: "Regular or co-op",
    degree: "Bachelor of Science (B.Sc.) in Financial Science",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, and MHF4U or MCV4U (both are recommended), within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent's 2026-27 calendar sets a minimum 75% average (80% for co-op), and the program page estimates 70-75% (80-85% for co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Psychology",
    slug: "trent-psychology",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Psychology",
    duration: "4 years (Honours); 5 years in the co-op stream",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total. Durham GTA: CAD 35,631.92 in tuition plus CAD 2,905.95 in ancillary and levy fees, so CAD 38,537.87 in total for 2026-27, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Psychology program is offered as a BA or a BSc at the Peterborough and Durham GTA campuses and covers neuroscience, cognition, emotion, health, development, perception and memory. Students can specialise in areas such as Behavioural & Cognitive Neuroscience or Health & Well-Being, and they build research experience through practica, a fourth-year Honours thesis and labs including Action and Cognition @ Trent and the Emotion and Health Research Lab. The five-year co-op stream, offered at Peterborough, adds 12 months of paid work, with the option of another term for up to 16 months, in areas such as research and evaluation, social services and health promotion.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/psychology",
    campus: "Peterborough or Durham GTA (Oshawa); co-op at Peterborough",
    programType: "Regular or co-op",
    degree: "Bachelor of Arts (B.A.) or Bachelor of Science (B.Sc.) in Psychology, optional specialisation",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, with a 4U math recommended for the B.Sc., within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75% (85-90% for co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Criminology",
    slug: "trent-criminology",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Criminology",
    duration: "4 years (Honours, including the co-op stream)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total. Durham GTA: CAD 35,631.92 in tuition plus CAD 2,905.95 in ancillary and levy fees, so CAD 38,537.87 in total for 2026-27, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Co-op students also pay a CAD 750 co-op fee five times during the degree. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Criminology BA can be taken in person at Peterborough or the Durham GTA campus, fully online, or as a mix of both. It examines crime, criminalisation, punishment and social inequality with faculty from Sociology, Law, Gender & Social Justice and Indigenous Studies. Students learn research methods and criminological data analysis, can lead independent research on topics such as homelessness or the victimisation of Indigenous peoples, and complete a fourth-year practicum with community, government or justice partners. The co-op stream adds three paid 12-16-week work terms within four years in research, policy, social services, corrections and victim services.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/criminology",
    campus: "Peterborough, Durham GTA (Oshawa) or online",
    programType: "Regular or co-op",
    degree: "Bachelor of Arts (B.A.) in Criminology",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent's 2026-27 calendar sets a minimum 75% average, and the program page estimates 75-80% (80-85% for co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Forensic Science",
    slug: "trent-forensic-science",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Forensic Science",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Bachelor of Science - Forensic Science is a direct-entry professional degree in Peterborough that draws on biology, chemistry, anthropology and law. Students train in a 4,100-square-foot Forensics Crime Scene Facility, which Trent says was the first of its kind on a Canadian university campus, where they process simulated crime scenes, practise remains recovery and document evidence with laser scanning, drones and virtual reality. Courses include crime scene investigation, wildlife DNA forensics, microbial forensics and forensic toxicology. Third-year placements have included the RCMP, the Canada Border Services Agency and Health Canada, and a Law & Policing specialisation is available.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/forensic-science",
    campus: "Peterborough",
    programType: "Full-time or part-time, with a third-year placement",
    degree: "Bachelor of Science - Forensic Science (B.Sc.F.S.)",
    workIntegrated: true,
    intake: "September only",
    applicationDeadline: "Fall 2027 (September only): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, SBI4U, SCH4U, and MHF4U or MCV4U; SPH4U is recommended, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Admission is competitive and prerequisite grades are part of the calculation. The 2026-27 calendar sets a minimum 75% average, and Trent estimates 75-80%",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Biomedical Science",
    slug: "trent-biomedical-science",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Biomedical Sciences",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent describes its Biomedical Science BSc in Peterborough as Ontario's only program of its kind. It builds a base in biology, chemistry and the biomedical sciences through courses such as cell biology, anatomy, biochemistry and biomedical ethics. Every student completes an internship in a healthcare or medical science setting, and the fourth-year capstone is a 12-week hospital internship shadowing doctors, dentists, pharmacists, physiotherapists and other practitioners. The degree prepares students for medicine, dentistry, veterinary medicine, pharmacy, allied health and research, with an optional Pre-Medical Studies option and an accelerated route into Trent's MSc in Environmental & Life Sciences.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/biomedical-science",
    campus: "Peterborough",
    programType: "Full-time or part-time, with a required internship",
    degree: "Bachelor of Science (B.Sc.) in Biomedical Science",
    workIntegrated: true,
    intake: "September only",
    applicationDeadline: "Fall 2027 (September only): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, SBI4U, SCH4U, MHF4U or MCV4U, and SPH4U or SES4U, plus one more 4U/4M course, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). The 2026-27 calendar sets a minimum 75% average on the required courses, and Trent estimates 75-80%",
      "International equivalents: IB applicants need Biology, Chemistry and either Mathematics or Physics; Indian Standard XII applicants need English, Chemistry, Biology, Mathematics and either Physics or Earth & Space Science",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Biology",
    slug: "trent-biology",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Biology",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Biology BSc in Peterborough uses the university's 1,400 acres of Nature Areas as a field laboratory, alongside labs in the Life and Health Sciences Building. Students can specialise in Conservation Biology, Health Sciences or Natural History, add a Pre-Medical Studies option, or take a joint major with subjects such as Environmental Science, Chemistry or Psychology. Placements and internships have been with the Ministry of Natural Resources (based on campus), Parks Canada, the Ontario Turtle Conservation Centre and the Royal Ontario Museum, and students can complete a fourth-year research thesis. Field courses are also available through the Ontario Universities Program in Field Biology.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/biology",
    campus: "Peterborough",
    programType: "Full-time or part-time",
    degree: "Bachelor of Science (B.Sc.) in Biology, optional specialisation",
    workIntegrated: false,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U, SBI4U and SCH4U; a 4U math is recommended, within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75%",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Environmental & Resource Science / Studies",
    slug: "trent-environmental-resource-science",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Environmental Science",
    duration: "4 years (Honours)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,397.35 in ancillary and levy fees (including the UHIP health plan) for new full-time international students in 2026-27, so CAD 39,029.26 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's School of the Environment in Peterborough offers Environmental & Resource Science (BSc) and Environmental & Resource Studies (BA), and Trent says the BSc is the only ECO Canada accredited environmental science program in the country. Students choose from more than 100 environmental courses covering ecology, pollution, wetland management, environmental law, policy and sustainability, build GIS and remote sensing skills, and work on fisheries, forestry and wildlife management projects with community partners. A Climate Change specialisation and options such as Planning are available, along with placements, paid internships, joint majors and a paid co-op stream that Trent says launches in fall 2027.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/environmental-resource-science-studies",
    campus: "Peterborough",
    programType: "Full-time or part-time; co-op stream launching fall 2027",
    degree: "Bachelor of Science (B.Sc.) or Bachelor of Arts (B.A.) in Environmental & Resource Science / Studies",
    workIntegrated: true,
    intake: "September, January, May",
    applicationDeadline: "Fall 2027 (September): applications opened in mid-September 2026 through OUAC or Trent's International Direct Application. The general deadline is 15 June 2027, but some programs close earlier, so Trent advises applying by 1 February 2027. International applicants must submit their documents by 1 July 2027 (15 February 2027 for programs with earlier deadlines). After accepting an offer, international students pay a CAD 2,000 tuition deposit (by 15 June 2027 for September) and are then considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit. Trent lists winter (January 2027, apply by 15 November 2026) and summer (May 2027, apply by 1 February 2027) starts for this program, but not every program has places in every term, so check the application",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else). International students who are applying only to Trent can use Trent's International Direct Application instead",
      "Ontario prerequisites: ENG4U; SBI4U, SCH4U and a 4U math are recommended for the B.Sc., within six Grade 12 4U/4M courses (ENG4U at 60% or higher). Trent estimates an admission average of 70-75% (80-85% for co-op)",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },

  {
    name: "Nursing (Collaborative B.Sc.N.)",
    slug: "trent-nursing",
    level: "Bachelor",
    universitySlug: "trent-university",
    universityName: "Trent University",
    country: "Canada",
    field: "Nursing",
    duration: "4 years (Collaborative program)",
    language: "English",
    tuitionNote:
      "International: Peterborough: CAD 35,631.91 in tuition plus CAD 3,386.84 in ancillary and levy fees (including the UHIP health plan) for new full-time international Nursing students in 2026-27, so CAD 39,018.75 in total, from Trent's Fall 2026 & Winter 2027 international fee tables (Trent marks these as estimates pending approval). International tuition is the same for every general undergraduate program. For Fall 2027 entry, Trent International's budget uses 2027-28 figures of CAD 37,410 in tuition and CAD 3,420 in ancillary fees; the official Fall 2027 fee tables will be posted by summer 2027. The same budget adds CAD 1,500-3,000 for books, CAD 9,280-13,300 for housing, CAD 4,600-6,570 for food and CAD 1,500-3,000 in personal costs, for CAD 57,710-66,700 over the eight-month year. Domestic students: Trent's program page estimates CAD 6,240.85 in base tuition plus CAD 2,122.22 in ancillary fees. Entering international students can apply for Trent's International Prestigious Scholarships, worth up to CAD 15,000 a year (CAD 60,000 over four years)",
    description:
      "Trent's Collaborative Bachelor of Science in Nursing is a four-year program at the Peterborough campus, run by the Trent/Fleming School of Nursing, with about 120 places a year. From first year, students combine lectures, seminars, case studies, online learning and high-fidelity simulation labs with clinical practice, building more than 1,000 hours of hospital and community experience that ends with a 300-hour fourth-year placement alongside a registered nurse. Areas of focus include aging, mental health, rural and Indigenous health and cultural safety, and second-year students can join a 12-day placement in remote Central American communities. A 28-month Compressed program is available for students with at least two years of university.",
    officialProgramUrl:
      "https://www.trentu.ca/futurestudents/program/nursing",
    campus: "Peterborough, with hospital and community placements",
    programType: "Full-time with clinical placements",
    degree: "Bachelor of Science in Nursing (B.Sc.N.)",
    workIntegrated: true,
    intake: "September only",
    applicationDeadline: "Fall 2027 (September only): apply through OUAC. Applications opened on 17 September 2026, and Trent says 15 January 2027 is the earliest date applications can close, so it is safest to apply before then. Applicants who are not current Ontario high school students submit transcripts and any English test results in February. Offers go out from early to mid-March on a rolling basis and usually finish by mid-June, and all offer conditions, including final transcripts, must be met by 13 August 2027. International students then pay a CAD 2,000 tuition deposit and are considered for the Ontario Provincial Attestation Letter (PAL) needed for a study permit",
    admissionRequirements: [
      "Apply through OUAC (the 101 application for current Ontario high school students, 105 for everyone else)",
      "Ontario prerequisites: ENG4U, SBI4U, SCH4U and a 4U math, each with at least 70%, and a minimum 75% average across those four courses and the next two best 4U/4M courses. Trent estimates an admission average of 80-85%, and prerequisite grades are part of the admission calculation",
      "International equivalents: Indian Standard XII applicants must have English, Chemistry, Biology and Mathematics. Other curricula need equivalent biology, chemistry, math and English courses",
      "Applicants from outside Ontario apply with their own curriculum and must show the equivalent prerequisites. Trent's general minimums include 26 points in the IB Diploma, a C in five O-level/IGCSE subjects plus two A-levels, a B average (3.0 GPA) in a US-patterned Grade 12 program, 70% in the best four Standard XII courses including English (India), 75% in Senior 3 (China) or a B3 average in five WASSCE subjects. Meeting the minimum does not guarantee a place in competitive programs",
      "English proficiency (if English is not your first language): IELTS Academic 6.5 with no band below 6.0; TOEFL iBT 4.5 with at least 4.0 in writing on the 2026 score scale (86 with 20 in writing for tests taken before 2026); Duolingo 115; PTE Academic 59; CAEL 60; Cambridge English 176 with no sub-score below 169; Oxford ELLT 7 with no band below 6; or LanguageCert Academic 70-74 with no score below 65",
      "You may be exempt after three years of full-time study at an English-medium secondary school with no ESL courses, an IB Diploma with English A, or a C in O-level English (Trent also exempts CBSE students). If your offer asks for proof of English, it is due by 1 July 2027 for September entry. Students who fall short can start through Trent's partner pathway with Oxford International Digital Institute",
    ],
  },
];
