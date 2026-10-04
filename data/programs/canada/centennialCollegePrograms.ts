import type { Program } from "../../programs";

// Centennial College full-time programs for 2027 intakes (international offerings).
// Sourced from Centennial program pages (program details, domestic/international availability, admission requirements, tuition and PGWP alignment) and Centennial's international how-to-apply, offers of admission, language proficiency, required documents and guard.me pages.

export const centennialCollegePrograms: Program[] = [
  {
    name: "Cybersecurity",
    slug: "centennial-cybersecurity",
    level: "Graduate Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Cybersecurity",
    duration: "1 year (2 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 5,682.00 tuition plus CAD 1,422.76 ancillary fees (CAD 7,104.76 total); international students CAD 19,167.00 tuition plus CAD 1,934.41 ancillary fees (CAD 21,101.41 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A one-year graduate certificate at Progress Campus on protecting computers, applications and networks. It covers cryptography, cyber forensics and network security, plus mobile network security, cloud security and ethical hacking tools, with hands-on work in a cybersecurity lab built with industry partners. Courses can be scheduled in non-traditional formats such as five consecutive evenings for students already working in IT.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/cybersecurity",
    intake: "September",
    campus: "Progress Campus (Toronto)",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: a diploma, advanced diploma or degree in computer science, computer, electronics or communication engineering, IT or a related discipline; or a diploma plus relevant work experience",
      "International applicants upload college or university transcripts and the diploma or degree certificate, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): September 2027: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 11.1003). Centennial lists the fully online version of this program as a separate program that is not PGWP-aligned",
    ],
  },

  {
    name: "Supply Chain Management – Logistics",
    slug: "centennial-supply-chain-management-logistics",
    level: "Graduate Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Supply Chain Management",
    duration: "1 year (2 semesters, plus an optional co-op term)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 4,214.50 tuition plus CAD 2,771.11 ancillary fees (CAD 6,985.61 total); international students CAD 18,005.00 tuition plus CAD 3,282.76 ancillary fees (CAD 21,287.76 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A two-semester graduate certificate at Progress Campus giving an interdisciplinary view of supply chain and logistics roles. Students learn SAP enterprise software and Descartes customs and trade-compliance software, take field trips and complete a capstone, and the program covers all courses toward the CITT Certified Logistics Professional (CCLP) designation; Centennial is a CITT-recognized Centre of Excellence in Logistics learning.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/logistics-management",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: a degree or diploma in any discipline. Applicants with a partial university degree (at least 50% complete) and two or more years of relevant work experience may be considered after a transcript and resume review",
      "International applicants upload college or university transcripts and the diploma or degree certificate, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 52.0203)",
      "Optional co-op: students apply in semester 1; admission to the co-op stream needs a cumulative GPA of 3.0 after semester 1, all semester 1 courses passed and a B (3.0) or higher in BUSN-702, and students must be legally eligible to work in Canada. Meeting the minimums doesn't guarantee a co-op place; the co-op is one work term",
    ],
  },

  {
    name: "Construction Project Management",
    slug: "centennial-construction-project-management",
    level: "Graduate Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Construction Management",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for three semesters starting Fall 2026: Canadian students CAD 6,540.75 tuition plus CAD 2,228.53 ancillary fees (CAD 8,769.28 total); international students CAD 28,750.50 tuition plus CAD 2,646.34 ancillary fees (CAD 31,396.84 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A three-semester graduate certificate at Progress Campus that combines construction management with general project management for residential, commercial, industrial, institutional and infrastructure projects. The curriculum covers scheduling, procurement, contracts, cost estimating, construction safety and management information systems, with an emphasis on sustainability and green building, and its courses meet all education components of the Canadian Construction Association's Gold Seal Certification.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/construction-project-management",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: a diploma, advanced diploma or degree in any discipline; a transcript and resume review is part of admission",
      "International applicants upload college or university transcripts and the diploma or degree certificate, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 52.2002)",
    ],
  },

  {
    name: "Marketing – Digital Engagement Strategy",
    slug: "centennial-marketing-digital-engagement-strategy",
    level: "Graduate Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Marketing",
    duration: "1 year (2 semesters, plus an optional co-op term)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 4,265.50 tuition plus CAD 1,631.06 ancillary fees (CAD 5,896.56 total); international students CAD 18,005.00 tuition plus CAD 2,142.71 ancillary fees (CAD 20,147.71 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A two-semester business graduate certificate at Progress Campus in digital marketing: analyzing technology trends, drawing insights from data, content strategy, and planning campaigns across paid, owned and earned media to build customer engagement. An optional 4-month co-op work term in the third semester adds Canadian market experience.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/marketing-digital-engagement-strategy",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: a degree or three-year college diploma in business or marketing with a minimum 3.0 GPA. Applicants with a two-year diploma or a partial degree (at least 75% complete) and two years of relevant work experience may be considered after a transcript and resume review. All applicants attend a mandatory program admission session and complete a written analytical/problem-solving assessment",
      "International applicants upload college or university transcripts and the diploma or degree certificate, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 52.1404)",
      "Optional co-op: students apply in semester 1; admission to the co-op stream needs a cumulative GPA of 3.0 after semester 1, all semester 1 courses passed and a B (3.0) or higher in BUSN-702, and students must be legally eligible to work in Canada. Meeting the minimums doesn't guarantee a co-op place; the co-op is one 4-month work term in semester 3",
    ],
  },

  {
    name: "Occupational Health and Safety Management",
    slug: "centennial-occupational-health-and-safety-management",
    level: "Graduate Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Occupational Health and Safety",
    duration: "1 year (2 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 5,561.00 tuition plus CAD 1,494.16 ancillary fees (CAD 7,055.16 total); international students CAD 18,005.00 tuition plus CAD 2,005.81 ancillary fees (CAD 20,010.81 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A two-semester, in-person graduate certificate at Progress Campus preparing graduates for entry-level supervisory roles in occupational health and safety. Courses cover safety legislation, occupational hygiene, ergonomics, fire protection, emergency preparedness, accident investigation, auditing and OHS analytics, ending with a capstone and work-integrated learning. The Board of Canadian Registered Safety Professionals recognizes it as meeting the education requirement for the CRST designation.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/occupational-health-and-safety-management",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: an Ontario College Diploma, Advanced Diploma, degree or equivalent in any discipline",
      "International applicants upload college or university transcripts and the diploma or degree certificate, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 15.0701)",
    ],
  },

  {
    name: "Advertising – Creative and Digital Strategy",
    slug: "centennial-advertising-creative-digital-strategy",
    level: "Graduate Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Advertising",
    duration: "1 year (2 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 4,553.50 tuition plus CAD 1,534.16 ancillary fees (CAD 6,087.66 total); international students CAD 18,005.00 tuition plus CAD 2,045.81 ancillary fees (CAD 20,050.81 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A two-semester graduate certificate combining digital media with business and marketing to build creative advertising campaigns. Students develop creative strategy, copywriting, concept development, art direction and presentation skills across five focus areas (creative strategy, digital storytelling, brand engagement, entrepreneurship and emerging platforms), and complete a second-semester field placement working on team assignments.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/advertising-creative-digital-strategy",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: a degree or diploma in any discipline, or at least two years of postsecondary study plus relevant work experience. After an offer, students may be asked for a resume or intake questionnaire, attend a mandatory online welcome session and take an English assessment on registration",
      "International applicants upload college or university transcripts and the diploma or degree certificate, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 52.1404)",
      "Field placement: a second-semester field placement working on team assignments in a real-world setting",
      "The program page lists Progress Campus as the location, while the overview describes the program as facilitated from the Story Arts Centre; check the campus with Centennial",
    ],
  },

  {
    name: "Software Engineering Technology",
    slug: "centennial-software-engineering-technology",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Software Engineering",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 2,775.00 tuition plus CAD 1,703.07 ancillary fees (CAD 4,478.07 total); international students CAD 19,167.00 tuition plus CAD 2,214.72 ancillary fees (CAD 21,381.72 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A three-year advanced diploma at Progress Campus focused on AI-oriented software engineering. Students work with AI-assisted programming and agentic frameworks (such as LangChain and LangGraph), Agile and DevOps with CI/CD, automated testing, Python, JavaScript/TypeScript, C#, Java and Kotlin, full-stack development with React, Next.js, Node.js and .NET, enterprise databases, and cloud-native engineering on AWS and Azure, finishing with two major capstone projects.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/software-engineering-technology",
    intake: "September, January",
    campus: "Progress Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U), or Centennial's English Admission Test (a score of 170 or 171 is required), and Grade 11 math (M or U) or Grade 12 math (C or U), or Centennial's Engineering Math Skills Assessment",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency (fast-track programs and diplomas or advanced diplomas that start at COMM 170/171, as this program's admission requirements do): CAEL 60 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 58-60, IELTS Academic 6.5 with no band below 6.0, PTE Academic 58, iTEP 3.9, Cambridge 170-179, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; September 2027: available; January 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 15.1204). Centennial lists the fully online version of this program as a separate program that is not PGWP-aligned",
      "Optional co-op: students apply in semester 2; admission to the co-op stream needs at least 80% of semester 1-2 courses completed, COMM-160/161 passed with a C (60%) or higher by the end of semester 2 and a cumulative GPA of 2.5 or higher, and students must be legally eligible to work in Canada. Meeting the minimums doesn't guarantee a co-op place; the co-op stream has three work terms",
    ],
  },

  {
    name: "Artificial Intelligence – Software Engineering Technology",
    slug: "centennial-artificial-intelligence",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Artificial Intelligence",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 3,176.00 tuition plus CAD 1,615.07 ancillary fees (CAD 4,791.07 total); international students CAD 19,167.00 tuition plus CAD 2,126.72 ancillary fees (CAD 21,293.72 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A three-year advanced diploma at Progress Campus built around four pillars: machine learning foundations and MLOps pipelines; data engineering with Spark, SQL, NoSQL and vector databases; cloud-native AI; and specializations in generative AI and LLM applications, intelligent robotics with ROS 2, advanced NLP and recommender systems. It also covers AI project management, full-stack AI development and AI ethics, ending with a capstone where students build an AI solution from scratch.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/artificial-intelligence",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U), or Centennial's English Admission Test, and Grade 11 math (M or U) or Grade 12 math (C or U), or Centennial's Engineering Math Skills Assessment",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency (certificates, diplomas and advanced diplomas starting at COMM 160/161): CAEL 60, TOEFL iBT 67 (reading 16, writing 23), MET 56-57, IELTS Academic 6.0 with no band below 5.5, PTE Academic 51, iTEP 3.7, Cambridge 167-169, LanguageCert Academic 65-69 with no skill below 60, or Duolingo 105-114. Centennial notes that some diplomas and advanced diplomas start at COMM 170/171 and need the higher tier (CAEL 60 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 58-60, IELTS Academic 6.5 with no band below 6.0, PTE Academic 58, iTEP 3.9, Cambridge 170-179, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125); or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 11.0102). Centennial lists the fully online version of this program as a separate program that is not PGWP-aligned",
      "Optional co-op: students apply in semester 2; admission to the co-op stream needs at least 80% of semester 1-2 courses completed, COMM-160/161 passed with a C (60%) or higher by the end of semester 2 and a cumulative GPA of 2.5 or higher, and students must be legally eligible to work in Canada. Meeting the minimums doesn't guarantee a co-op place; the co-op stream has three work terms",
    ],
  },

  {
    name: "Computer Systems Technology – Networking",
    slug: "centennial-computer-systems-technology-networking",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Networking",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 3,464.00 tuition plus CAD 1,685.07 ancillary fees (CAD 5,149.07 total); international students CAD 19,167.00 tuition plus CAD 2,196.72 ancillary fees (CAD 21,363.72 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A three-year advanced diploma at Progress Campus in computer systems and networks. Students learn network design and troubleshooting, PC hardware and multi-vendor operating systems, Windows and Linux administration, converged (VoIP) and wireless networks, network security, data centres, virtualization and cloud, preparing for technical support roles in networks, internet and telecom.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/computer-systems-technology-networking",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U), or Centennial's English Admission Test, and Grade 11 math (M or U) or Grade 12 math (C or U), or Centennial's Engineering Math Skills Assessment",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency (certificates, diplomas and advanced diplomas starting at COMM 160/161): CAEL 60, TOEFL iBT 67 (reading 16, writing 23), MET 56-57, IELTS Academic 6.0 with no band below 5.5, PTE Academic 51, iTEP 3.7, Cambridge 167-169, LanguageCert Academic 65-69 with no skill below 60, or Duolingo 105-114. Centennial notes that some diplomas and advanced diplomas start at COMM 170/171 and need the higher tier (CAEL 60 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 58-60, IELTS Academic 6.5 with no band below 6.0, PTE Academic 58, iTEP 3.9, Cambridge 170-179, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125); or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 11.1001)",
      "Optional co-op: students apply in semester 2; admission to the co-op stream needs at least 80% of semester 1-2 courses completed, COMM-160/161 passed with a C (60%) or higher by the end of semester 2 and a cumulative GPA of 2.5 or higher, and students must be legally eligible to work in Canada. Meeting the minimums doesn't guarantee a co-op place; the co-op stream has three work terms",
    ],
  },

  {
    name: "Business Administration – Supply Chain and Operations Management",
    slug: "centennial-business-administration-supply-chain-operations",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Supply Chain Management",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 2,775.00 tuition plus CAD 1,632.16 ancillary fees (CAD 4,407.16 total); international students CAD 18,005.00 tuition plus CAD 2,143.81 ancillary fees (CAD 20,148.81 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A three-year business advanced diploma at Progress Campus on running operations efficiently. Students integrate manual and ERP-based systems for supply chain work, build master production schedules with materials requirements planning, balance supply and demand, plan projects and design quality programs, and study purchasing, inventory, logistics, supervision and business process re-engineering.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/business-operations-management",
    intake: "September, January, May",
    campus: "Progress Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U), or Centennial's English Admission Test, and Grade 11 math (C, M or U) or Grade 12 math (C or U), or Centennial's Business Math Skills Assessment",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency (certificates, diplomas and advanced diplomas starting at COMM 160/161): CAEL 60, TOEFL iBT 67 (reading 16, writing 23), MET 56-57, IELTS Academic 6.0 with no band below 5.5, PTE Academic 51, iTEP 3.7, Cambridge 167-169, LanguageCert Academic 65-69 with no skill below 60, or Duolingo 105-114. Centennial notes that some diplomas and advanced diplomas start at COMM 170/171 and need the higher tier (CAEL 60 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 58-60, IELTS Academic 6.5 with no band below 6.0, PTE Academic 58, iTEP 3.9, Cambridge 170-179, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125); or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 52.0203)",
      "Optional co-op: students apply in semester 2; admission to the co-op stream needs at least 80% of semester 1-2 courses completed, COMM-160/161 passed with a C (60%) or higher by the end of semester 2 and a cumulative GPA of 2.5 or higher, and students must be legally eligible to work in Canada. Meeting the minimums doesn't guarantee a co-op place; the co-op stream has two work terms",
    ],
  },

  {
    name: "Early Childhood Education",
    slug: "centennial-early-childhood-education",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Early Childhood Education",
    duration: "2 years (4 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 2,775.00 tuition plus CAD 1,574.16 ancillary fees (CAD 4,349.16 total); international students CAD 18,005.00 tuition plus CAD 2,085.81 ancillary fees (CAD 20,090.81 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A two-year diploma at Progress Campus preparing early childhood educators to plan responsive programs for infants, toddlers, preschoolers and school-age children. Students learn through varied classroom strategies, observe and practise at Centennial's two lab-school childcare centres, and complete three community field placements, with block placements in semesters 3 and 4. Centennial also runs a separate Ashtonbee Campus offering with May and September starts.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/early-childhood-education-progress",
    intake: "September, January",
    campus: "Progress Campus (Toronto)",
    degree: "Ontario College Diploma",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U), or Centennial's English Admission Test",
      "Field placements: three placements; before each, students need a clear police check with vulnerable sector screening, first aid and CPR certificates (before semester 2) and a clear medical report including a TB test. A minimum C grade is needed in all ECEP courses and COMM-160/161",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency (certificates, diplomas and advanced diplomas starting at COMM 160/161): CAEL 60, TOEFL iBT 67 (reading 16, writing 23), MET 56-57, IELTS Academic 6.0 with no band below 5.5, PTE Academic 51, iTEP 3.7, Cambridge 167-169, LanguageCert Academic 65-69 with no skill below 60, or Duolingo 105-114. Centennial notes that some diplomas and advanced diplomas start at COMM 170/171 and need the higher tier (CAEL 60 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 58-60, IELTS Academic 6.5 with no band below 6.0, PTE Academic 58, iTEP 3.9, Cambridge 170-179, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125); or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): January 2027: available; September 2027: available; January 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 19.0709)",
    ],
  },

  {
    name: "Practical Nursing",
    slug: "centennial-practical-nursing",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Nursing",
    duration: "2 years (4 semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 3,350.50 tuition plus CAD 2,094.47 ancillary fees (CAD 5,444.97 total); international students CAD 18,005.00 tuition plus CAD 2,606.12 ancillary fees (CAD 20,611.12 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A two-year diploma at Morningside Campus based on College of Nurses of Ontario standards and national entry-to-practice competencies for Registered Practical Nurses. Classroom and blended learning is combined with independent study, small-group clinical and lab instruction and computerized simulation, and graduates are prepared to practise in a variety of settings.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/practical-nursing",
    intake: "September, January",
    campus: "Morningside Campus (Toronto)",
    degree: "Ontario College Diploma",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status) with Grade 12 English (C or U), Grade 11 math (M or U) or Grade 12 math (C or U), Grade 11 or 12 biology (C or U) and one more Grade 11 or 12 science (physics, chemistry or exercise science); at least 75% in each required subject (65% for U or A-level courses) and an 80% average across the four. Science courses must be from the last seven years",
      "Admission is highly competitive: applicants are ranked on their required-subject average and application date. Centennial advises applying before February 1, and before June 1 for the January start",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency: Centennial lists Practical Nursing among programs with additional English requirements. The program page says proficiency can be shown by three full years of secondary or postsecondary study in Canada in English (or at a school where English is the main language of instruction) or by completing Centennial's English Admission Test",
      "International availability on the program page as of October 5, 2026 (Morningside Campus): January 2027: available; September 2027: available; January 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 51.3901)",
    ],
  },

  {
    name: "Pharmacy Technician",
    slug: "centennial-pharmacy-technician",
    level: "Diploma",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Pharmacy",
    duration: "16 months (4 continuous semesters)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 2,775.00 tuition plus CAD 1,599.47 ancillary fees (CAD 4,374.47 total); international students CAD 18,005.00 tuition plus CAD 2,111.12 ancillary fees (CAD 20,116.12 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A diploma at Morningside Campus delivered in four continuous semesters (16 months, including summer), based on the nine NAPRA entry-to-practice competencies for Canadian pharmacy technicians, from patient care and product distribution to quality and safety. Three work experience placements give at least 160 hours of practice, and graduates then sit the Pharmacy Examining Board of Canada exams and the Ontario College of Pharmacists jurisprudence exam to register.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/pharmacy-technician",
    intake: "September, January, May",
    campus: "Morningside Campus (Toronto)",
    degree: "Ontario College Diploma",
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status) with Grade 12 English (C or U, 60%) or Centennial's English Admission Test, Grade 11 math (M or U, 60%) or Grade 12 math (C 70% or U 60%), and Grade 11 or 12 biology and chemistry (C 70% or U 60%). Students must finish the program within four years of admission",
      "Field placements: three placements; students need a criminal record check with vulnerable sector screening (issued within six months of each placement), immunizations and other health requirements",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation. After acceptance, students in certificate, diploma and advanced diploma programs take a placement skills assessment in English (and possibly math or science)",
      "English proficiency: international students must meet NAPRA's language proficiency criteria before admission: IELTS Academic reading 7.0, listening 7.0, speaking 7.0 and writing 6.5; or OET reading B, listening B, speaking B and writing C+; or TEF Canada reading B2, listening C1, speaking C1 and writing B2; or graduation from a Canadian high school, college or university program with at least three consecutive years of full-time instruction",
      "International availability on the program page as of October 5, 2026 (Morningside Campus): January 2027: available; May 2027: available; September 2027: available; January 2028: available; May 2028: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 51.0805)",
    ],
  },

  {
    name: "Bachelor of Information Technology (Computer and Communication Networks), Honours",
    slug: "centennial-bachelor-information-technology",
    level: "Bachelor",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "Information Technology",
    duration: "4 years (9 semesters, including the work term)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 7,289.00 tuition plus CAD 2,020.16 ancillary fees (CAD 9,309.16 total); international students CAD 22,802.50 tuition plus CAD 2,531.81 ancillary fees (CAD 25,334.31 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A four-year honours degree at Progress Campus, which Centennial describes as the first and longest-running four-year IT bachelor's at an Ontario college. It combines technical and business study across computer systems, enterprise networking, cloud platforms, cybersecurity operations, data centres, wireless networking and VoIP, taught in lab environments that simulate industry settings.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/bachelor-of-information-technology",
    intake: "September",
    campus: "Progress Campus (Toronto)",
    programType: "Work term (mandatory)",
    degree: "Honours Bachelor Degree",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent with at least six Grade 12 U or M courses averaging 65% or higher, including Grade 12 U English (65%) and one Grade 12 U math (Advanced Functions, Calculus and Vectors or Data Management, 60%) or Centennial's Engineering Math Skills Assessment. Mature applicants (21 or older by December 31 of the intake year) need the English and math courses, a full academic history and a resume",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): September 2027: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 11.0901)",
      "Mandatory work term: a co-op work term that normally follows semester 4 (summer between years 2 and 3), or with approval the summer between years 3 and 4; Centennial lists it as a mandatory requirement for graduation",
    ],
  },

  {
    name: "Honours Bachelor of Business Administration – International Business",
    slug: "centennial-bachelor-business-administration-international-business",
    level: "Bachelor",
    universitySlug: "centennial-college",
    universityName: "Centennial College",
    country: "Canada",
    field: "International Business",
    duration: "4 years (8 semesters and 1 co-op work term)",
    language: "English",
    tuitionNote:
      "Centennial's estimated fees for two semesters starting Fall 2026: Canadian students CAD 6,578.00 tuition plus CAD 1,494.10 ancillary fees (CAD 8,072.10 total); international students CAD 18,375.00 tuition plus CAD 2,005.81 ancillary fees (CAD 20,380.81 total). Centennial says mandatory guard.me health insurance for international students is included in their fees. Fees are estimates; 2027-28 fees are not yet published.",
    description:
      "A four-year honours business degree at Progress Campus preparing graduates for international trade, logistics and investment roles. Students build foundations in economics, finance, marketing, HR, operations and logistics, analytics, law and cross-cultural communication, and can earn Canadian International Freight Forwarders Association (CIFFA) certifications through two freight forwarding and global logistics courses with in-class exams.",
    officialProgramUrl:
      "https://www.centennialcollege.ca/programs-courses/full-time/bachelor-of-business-admin-international-business",
    intake: "September",
    campus: "Progress Campus (Toronto)",
    programType: "Co-op (mandatory)",
    degree: "Honours Bachelor Degree",
    workIntegrated: true,
    applicationDeadline: "International applicants: Centennial doesn't publish a fixed international deadline; its international application page currently invites applications for Winter 2027 and Summer 2027 through ApplyCentennial, and each program page shows which intakes are available to international students, so apply early. Canadian applicants: for fall programs, apply through ontariocolleges.ca before February 1; later applications are still considered, on a first-come, first-served basis",
    admissionRequirements: [
      "Apply: international applicants apply through ApplyCentennial (up to two programs) and pay a non-refundable CAD 125 application fee. Qualified applicants complete a short BorderPass assessment before receiving a Letter of Acceptance, then confirm by paying a CAD 2,000 registration deposit (credited to tuition) by the deadline in the letter; Centennial requests the Provincial Attestation Letter (PAL) once the deposit is received. The deposit is non-refundable except if the study permit is refused (refund minus CAD 250 for 2025 and later starts). Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent with six Grade 12 U or M courses averaging at least 65%, including Grade 12 U or M English (65%) and Grade 12 U or M math (65%) or Centennial's Business Math Skills Assessment. Mature applicants (21 or older by December 31 of the intake year) need the English and math courses and a full academic history",
      "International applicants upload high school transcripts and diploma, a passport copy and proof of English proficiency to ApplyCentennial; documents not in English need the original plus a certified English translation",
      "English proficiency (graduate certificates and degrees): CAEL 70 with writing 60, TOEFL iBT 81 (reading 19, writing 23), MET 61, IELTS Academic 6.5 with no band below 6.0, PTE Academic 60, iTEP 4.1, Cambridge 180, LanguageCert Academic 70-74 with no skill below 65, or Duolingo 125; or show English proficiency through previous education (two or more consecutive full years at a recognized school or postsecondary institution where English is the main language of instruction, or a Grade 12 college- or university-stream English course from an OSSD-granting school) or through Centennial's English upgrading routes",
      "International availability on the program page as of October 5, 2026 (Progress Campus): September 2027: available.",
      "PGWP: the program page lists this program as PGWP-aligned (CIP code 52.1101)",
      "Co-op: the program length includes one co-op work term; to be eligible for the placement, students must have completed 80% of their courses (through semester 7) and keep a cumulative GPA of 2.5 or higher",
    ],
  },

];
