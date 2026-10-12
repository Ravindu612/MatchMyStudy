import type { Program } from "../../programs";

// NAIT (Northern Alberta Institute of Technology) full-time programs in Edmonton that NAIT lists with international deliveries.
// Sourced from NAIT program pages (credential, length, intakes, entrance requirements, delivery and PGWP-ineligible flags),
// the 2026/27 international and 2026-2027 domestic tuition tables, the English Language Proficiency page, and the
// international application checklist (apply path, deposit/PAL), checked October 12, 2026.

export const naitPrograms: Program[] = [
  {
    name: "Software Development",
    slug: "nait-software-development",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Software Development",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 340.00 per credit; about CAD 10,200 in year 1 and CAD 10,200 in year 2 (roughly CAD 20,400 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton for people entering software without prior coding experience. Students work through full-stack development, data and AI basics, DevOps, systems skills and UX-focused apps, then move toward roles such as software developer, web developer or data-minded IT contributor.",
    officialProgramUrl:
      "https://www.nait.ca/programs/software-development",
    intake: "September, January, May",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time, co-op available",
    degree: "NAIT Software Development Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027; Spring 2026/27 closes May 3, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 11 Language Arts (English 20-2) and Grade 11 Mathematics (Math 20-2 or Applied Math 20), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September, January, May",
      "Optional co-op: the program lists a co-op work permit among work-integrated learning requirements; international students who take co-op need the appropriate co-op work permit",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "Cybersecurity",
    slug: "nait-cybersecurity",
    level: "Graduate Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Cybersecurity",
    duration: "1 year",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 tuition CAD 22,050 (about 30 credits at a full-time load). Canadian students (domestic 2026-2027 per-credit table): CAD 466.00 per credit, about CAD 13,980 for a 30-credit year. Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included. The international fee table lists matching year-1 and year-2 tuition cells for Cybersecurity; NAIT's program length for international delivery is one year, so plan on about CAD 22,050 tuition for the credential at the 2026/27 rate.",
    description:
      "A one-year NAIT post-diploma certificate in Edmonton that builds advanced cyber defence skills on top of a prior IT or computer science credential. Students learn how organizations assess risk, harden systems and respond to evolving threats, aiming at security-focused technical roles.",
    officialProgramUrl:
      "https://www.nait.ca/programs/cybersecurity",
    intake: "September",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time",
    degree: "NAIT Cybersecurity Post-Diploma Certificate",
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: an accredited or recognized IT or computer science-related diploma or degree completed within the last five years with a minimum GPA of 2.0 (NAIT lists eligible NAIT diplomas such as Computer Engineering Technology, Software Development, IT Business Analysis, IT Systems Administration and related DMIT streams)",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "IT Systems Administration",
    slug: "nait-it-systems-administration",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Information Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 383.00 per credit; about CAD 11,490 in year 1 and CAD 11,490 in year 2 (roughly CAD 22,980 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton focused on building and running digital infrastructure. Students practise systems and cloud administration, integrating services across an organization so they can support reliable networks, servers and day-to-day IT operations.",
    officialProgramUrl:
      "https://www.nait.ca/programs/it-systems-administration",
    intake: "September, January",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time, co-op available",
    degree: "NAIT IT Systems Administration Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 11 Language Arts (English 20-2) and Grade 11 Mathematics (Math 20-2 or Applied Math 20), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September, January",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "IT Business Analysis",
    slug: "nait-it-business-analysis",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "IT Business Analysis",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 369.00 per credit; about CAD 11,070 in year 1 and CAD 11,070 in year 2 (roughly CAD 22,140 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton that trains students to turn business needs into technology solutions. Coursework covers requirements, collaboration with developers and project delivery so graduates can bridge product owners, stakeholders and technical teams.",
    officialProgramUrl:
      "https://www.nait.ca/programs/it-business-analysis",
    intake: "September, January",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time, co-op available",
    degree: "NAIT IT Business Analysis Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 11 Language Arts (English 20-2) and Grade 11 Mathematics (Math 20-2 or Applied Math 20), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September, January",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "Civil Engineering Technology",
    slug: "nait-civil-engineering-technology",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Civil Engineering Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 26,460 (about 36 credits at a full-time load); year 2 CAD 26,460; full program tuition CAD 52,920. Canadian students (domestic 2026-2027 per-credit table): CAD 204.00 per credit; about CAD 7,344 in year 1 and CAD 7,344 in year 2 (roughly CAD 14,688 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT engineering technology diploma in Edmonton for construction and infrastructure work. Students learn to support design, project delivery and field or lab tasks on civil projects, preparing for technologist roles in consulting, construction and public works.",
    officialProgramUrl:
      "https://www.nait.ca/programs/civil-engineering-technology",
    intake: "September",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time, co-op available",
    degree: "NAIT Civil Engineering Technology Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2), Grade 12 Mathematics (Math 30-2), and Grade 11 Physics (Physics 20) or Grade 11 Science (Science 20), or equivalents; see the program page for recommended courses",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "Mechanical Engineering Technology",
    slug: "nait-mechanical-engineering-technology",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Mechanical Engineering Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 26,460 (about 36 credits at a full-time load); year 2 CAD 26,460; full program tuition CAD 52,920. Canadian students (domestic 2026-2027 per-credit table): CAD 163.00 per credit; about CAD 5,868 in year 1 and CAD 5,868 in year 2 (roughly CAD 11,736 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton that pairs mechanical engineering fundamentals with modern analysis tools and lab equipment. Graduates are prepared for mechanical engineering technologist work in design support, manufacturing, testing and industrial operations.",
    officialProgramUrl:
      "https://www.nait.ca/programs/mechanical-engineering-technology",
    intake: "September, January",
    campus: "Edmonton (Main Campus), in person",
    programType: "Full-time, co-op available",
    degree: "NAIT Mechanical Engineering Technology Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2), Grade 12 Mathematics (Math 30-1), and Grade 12 Physics (Physics 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as in person; start terms open to international applicants include September, January",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "Electrical Engineering Technology",
    slug: "nait-electrical-engineering-technology",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Electrical Engineering Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 26,460 (about 36 credits); full program tuition CAD 48,510. Canadian students (domestic 2026-2027 per-credit table): CAD 258.00 per credit; about CAD 7,740 in year 1 and CAD 9,288 in year 2 (roughly CAD 17,028 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton covering the structure, operation, protection and control of electrical and electronic systems. Students build practical skills for electrical engineering technologist roles in power, industrial and building systems environments.",
    officialProgramUrl:
      "https://www.nait.ca/programs/electrical-engineering-technology",
    intake: "September, January",
    campus: "Edmonton (Main Campus), in person",
    programType: "Full-time, co-op available",
    degree: "NAIT Electrical Engineering Technology Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2), Grade 12 Mathematics (Math 30-1), and Grade 12 Physics (Physics 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as in person; start terms open to international applicants include September, January",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "Electronics Engineering Technology",
    slug: "nait-electronics-engineering-technology",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Electronics Engineering Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 24,255 (about 33 credits at a full-time load); year 2 CAD 22,050 (about 30 credits); full program tuition CAD 46,305. Canadian students (domestic 2026-2027 per-credit table): CAD 163.00 per credit; about CAD 5,379 in year 1 and CAD 4,890 in year 2 (roughly CAD 10,269 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton in electricity, embedded systems, communications and industrial electronics. Hands-on labs emphasize troubleshooting and applied problem solving for electronics technologist careers.",
    officialProgramUrl:
      "https://www.nait.ca/programs/electronics-engineering-technology",
    intake: "September",
    campus: "Edmonton (Main Campus), in person",
    programType: "Full-time, co-op available",
    degree: "NAIT Electronics Engineering Technology Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2), Grade 12 Mathematics (Math 30-1), and Grade 12 Chemistry (Chemistry 30) or Grade 12 Physics (Physics 30) or Grade 12 Science (Science 30), or equivalents; see recommended courses on the program page",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as in person; start terms open to international applicants include September",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data does not flag this credential as PGWP-ineligible (pgwpIneligible false) for the standard international deliveries checked October 12, 2026. Online-only deliveries can be marked PGWP-ineligible. NAIT does not guarantee individual eligibility; IRCC rules can change",
    ],
  },

  {
    name: "Architectural Technology",
    slug: "nait-architectural-technology",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Architectural Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 26,460 (about 36 credits at a full-time load); year 2 CAD 26,460; full program tuition CAD 52,920. Canadian students (domestic 2026-2027 per-credit table): CAD 158.00 per credit; about CAD 5,688 in year 1 and CAD 5,688 in year 2 (roughly CAD 11,376 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton that develops freehand sketching and computer-aided drawing skills for buildings and construction systems. Students produce technical drawings and architectural documentation used across design and construction teams.",
    officialProgramUrl:
      "https://www.nait.ca/programs/architectural-technology",
    intake: "September",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time, co-op available",
    degree: "NAIT Architectural Technology Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2) and Grade 12 Mathematics (Math 30-2 or Applied Math 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },

  {
    name: "Business Administration – Finance",
    slug: "nait-business-administration-finance",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Finance",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 212.00 per credit; about CAD 6,360 in year 1 and CAD 6,360 in year 2 (roughly CAD 12,720 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT business diploma in Edmonton with a finance major. Students study financial management, markets and analysis, with case work and networking that support paths toward banking, planning, analysis and related designations.",
    officialProgramUrl:
      "https://www.nait.ca/programs/business-administration-finance",
    intake: "September, January, May",
    campus: "Edmonton (Main Campus), delivery mode selectable (Your Choice)",
    programType: "Full-time, co-op available",
    degree: "NAIT Business Administration Diploma (Finance)",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027; Spring 2026/27 closes May 3, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2) and Grade 12 Mathematics (Math 30-2 or Applied Math 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists. Business Administration also offers provisional admission with lower ELP (for example IELTS Academic 5.5 overall and in each section) if other academics are met, with ESL Level 6 to be completed within the first 12 months",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as delivery mode selectable (Your Choice); start terms open to international applicants include September, January, May",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },

  {
    name: "Business Administration – Accounting",
    slug: "nait-business-administration-accounting",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Accounting",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 212.00 per credit; about CAD 6,360 in year 1 and CAD 6,360 in year 2 (roughly CAD 12,720 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT business diploma in Edmonton focused on accounting theory, software and managerial skills. Graduates are prepared for bookkeeping and accounting roles across sectors and for further study toward a CPA path.",
    officialProgramUrl:
      "https://www.nait.ca/programs/business-administration-accounting",
    intake: "September, January, May",
    campus: "Edmonton (Main Campus), delivery mode selectable (Your Choice)",
    programType: "Full-time, co-op available",
    degree: "NAIT Business Administration Diploma (Accounting)",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027; Spring 2026/27 closes May 3, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2) and Grade 12 Mathematics (Math 30-2 or Applied Math 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists. Business Administration also offers provisional admission with lower ELP (for example IELTS Academic 5.5 overall and in each section) if other academics are met, with ESL Level 6 to be completed within the first 12 months",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as delivery mode selectable (Your Choice); start terms open to international applicants include September, January, May",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },

  {
    name: "Business Administration – Management",
    slug: "nait-business-administration-management",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Business Management",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 212.00 per credit; about CAD 6,360 in year 1 and CAD 6,360 in year 2 (roughly CAD 12,720 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT business diploma in Edmonton that builds core business knowledge and people-leadership skills. Industry-linked projects and competitions help students practise planning, resource decisions and team leadership for public, private and nonprofit workplaces.",
    officialProgramUrl:
      "https://www.nait.ca/programs/business-administration-management",
    intake: "September, January, May",
    campus: "Edmonton (Main Campus), delivery mode selectable (Your Choice)",
    programType: "Full-time, co-op available",
    degree: "NAIT Business Administration Diploma (Management)",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027; Spring 2026/27 closes May 3, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2) and Grade 12 Mathematics (Math 30-2 or Applied Math 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists. Business Administration also offers provisional admission with lower ELP (for example IELTS Academic 5.5 overall and in each section) if other academics are met, with ESL Level 6 to be completed within the first 12 months",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as delivery mode selectable (Your Choice); start terms open to international applicants include September, January, May",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },

  {
    name: "Culinary Arts",
    slug: "nait-culinary-arts",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Culinary Arts",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,785 (about 31 credits); full program tuition CAD 44,835. Canadian students (domestic 2026-2027 per-credit table): CAD 202.00 per credit; about CAD 6,060 in year 1 and CAD 6,262 in year 2 (roughly CAD 12,322 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT culinary diploma in Edmonton covering fundamental cooking skills, hot and cold presentation, pastry and international cuisine. Students train for professional kitchen roles in restaurants, hotels and related food-service settings.",
    officialProgramUrl:
      "https://www.nait.ca/programs/culinary-arts",
    intake: "September, January",
    campus: "Edmonton (Main Campus), hybrid",
    programType: "Full-time, co-op available",
    degree: "NAIT Culinary Arts Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 10 Language Arts (English 10-2) and Grade 10 Mathematics (Math 10C, Math 10-3, Math 20-4, Applied Math 10, Math 13 or Math 24), or equivalents; the program page notes competitive entrance details",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as hybrid; start terms open to international applicants include September, January",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },

  {
    name: "Hospitality Management",
    slug: "nait-hospitality-management",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Hospitality Management",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 22,050 (about 30 credits at a full-time load); year 2 CAD 22,050; full program tuition CAD 44,100. Canadian students (domestic 2026-2027 per-credit table): CAD 175.00 per credit; about CAD 5,250 in year 1 and CAD 5,250 in year 2 (roughly CAD 10,500 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton for careers in hotels, tourism and guest services. Students learn to manage fast-paced hospitality operations and guest experiences across lodging, food and beverage and related services.",
    officialProgramUrl:
      "https://www.nait.ca/programs/hospitality-management",
    intake: "September",
    campus: "Edmonton (Main Campus), in person",
    programType: "Full-time, co-op available",
    degree: "NAIT Hospitality Management Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2) and Grade 12 Mathematics (Math 30-2 or Applied Math 30), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as in person; start terms open to international applicants include September",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },

  {
    name: "Instrumentation Engineering Technology",
    slug: "nait-instrumentation-engineering-technology",
    level: "Diploma",
    universitySlug: "nait",
    universityName: "Northern Alberta Institute of Technology (NAIT)",
    country: "Canada",
    field: "Instrumentation Engineering Technology",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "NAIT international students tuition table for 2026/27 (study periods September 1, 2026 to August 31, 2027), checked October 12, 2026: CAD 735 per credit; year 1 CAD 26,460 (about 36 credits at a full-time load); year 2 CAD 26,460; full program tuition CAD 52,920. Canadian students (domestic 2026-2027 per-credit table): CAD 231.88 per credit; about CAD 8,348 in year 1 and CAD 8,348 in year 2 (roughly CAD 16,696 over two years at the same credit loads). Figures are tuition only; mandatory fees (technology, recreation/athletics, NAITSA, U-Pass, health and dental, and any program/material fees) are extra and listed on NAIT's additional fees page. Books and supplies are not included.",
    description:
      "A two-year NAIT diploma in Edmonton on measuring and controlling automated industrial processes. Practical and theory courses prepare graduates to work safely with instruments, control systems and process automation in industrial settings.",
    officialProgramUrl:
      "https://www.nait.ca/programs/instrumentation-engineering-technology",
    intake: "September, January",
    campus: "Edmonton (Main Campus), in person",
    programType: "Full-time, co-op available",
    degree: "NAIT Instrumentation Engineering Technology Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (NAIT program delivery data and international checklist, checked October 12, 2026): applications for Fall generally open August 1 of the prior year; Winter opens January 1 of the prior year. Program-specific international application closing dates on the program page for 2026/27 deliveries include Fall 2026/27 closes July 1, 2026; Winter 2026/27 closes January 7, 2027. Seats can fill or close earlier, so confirm open status on NAIT's Program Availability for International Students tool before applying. Canadian applicants: apply through ApplyAlberta and watch each delivery's domestic close date on the program page",
    admissionRequirements: [
      "Apply: international applicants use NAIT's International Application for Admission (application.nait.ca), submit required documents, and pay NAIT's non-refundable international application fee. After an offer, accept by paying the non-refundable tuition deposit by the deadline on the offer letter; NAIT then requests a Provincial Attestation Letter (PAL) and usually emails it within about seven business days of the deposit (international checklist, checked October 12, 2026). Canadian citizens and permanent residents apply through ApplyAlberta.",
      "Academic: Grade 12 Language Arts (English 30-2), Grade 12 Mathematics (Math 30-1), Grade 11 Chemistry (Chemistry 20) and Grade 11 Physics (Physics 20), or equivalents",
      "English proficiency (NAIT ELP page, checked October 12, 2026; results valid two years): IELTS Academic 6.0 in each section; TOEFL iBT before January 21, 2026: 70 overall with at least 17 in each section, or on/after January 21, 2026: 4.0 overall with 4.0 in each section; Duolingo 115 overall with at least 100 in each integrated subscore; PTE Academic 58 overall; CAEL 60 overall; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each section; NAIT ELP Exam 73% or B in each section; plus other tests NAIT lists. NAIT also accepts consecutive full-time English study in Canada or an ELP-exempt country (for example three years of high school including Grade 12 English, or two years of for-credit post-secondary), NAIT ESL Level 6, or other pathway courses NAIT lists",
      "Intakes and delivery: campus Edmonton (Main Campus); international full-time delivery listed as in person; start terms open to international applicants include September, January",
      "Optional co-op: work-integrated learning may require a co-op work permit for international students",
      "PGWP: NAIT's program data flags this credential as PGWP-ineligible (pgwpIneligible true) as of the October 12, 2026 check. Confirm the latest status on NAIT's international PGWP guidance and IRCC rules before you apply",
    ],
  },
];

