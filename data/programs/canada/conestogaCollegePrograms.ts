import type { Program } from "../../programs";

// Conestoga College full-time programs for 2027 intakes (international offerings).
// Sourced from Conestoga full-time program pages (description, admissions, intakes and 2026-27 fees), Conestoga International admission requirements, application information, academic documents, fees and PGWP-aligned programs pages, the Registrar's English language requirements and the domestic applying page.

export const conestogaCollegePrograms: Program[] = [
  {
    name: "Applied Artificial Intelligence & Machine Learning (Optional Co-op)",
    slug: "conestoga-applied-ai-machine-learning",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Artificial Intelligence",
    duration: "1 year (2 academic terms + 1 co-op term, if applicable)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 7,443 tuition (about CAD 9,157 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 19,908 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A two-term graduate certificate for people who already program and want to work as applied AI practitioners. The first term covers machine learning, deep learning, natural language processing, data visualization and the mathematics behind AI, using Agile and Scrum practices. The second term moves to reinforcement learning, AI for business decisions and fitting AI into existing systems, with end-to-end projects from use case to deployed model. An optional co-op term is available.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/applied-artificial-intelligence-machine-learning",
    intake: "September, January, May",
    campus: "Waterloo",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: a diploma or degree of at least two years in computer science and/or software engineering, or two to five years of full-time work experience in software development",
      "Applicants are ranked on grades, length and level of their credential and its discipline, and must submit a resume",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: September 2027 at Waterloo: upcoming; January 2028 at Waterloo: upcoming; May 2028 at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications. Listed for Canadian applicants only (no international offering): January 2027 at Waterloo (suspended); May 2027 at Waterloo (suspended)",
      "Conestoga lists this program (code 1557) on its PGWP-aligned programs page under CIP code 11.0102. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op is optional: everyone is admitted to the non co-op program, and seats in the co-op stream depend on the labour market and Level 1 grades (Conestoga asks for at least an 80% weighted average with no dropped or failed courses). International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Information Technology Project Management",
    slug: "conestoga-it-project-management",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Project Management",
    duration: "1 year (2 academic terms)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 6,443 tuition (about CAD 8,567 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 20,317 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A one-year graduate certificate in leading technology projects with Agile, Scrum, Kanban and Waterfall methods. Students practise planning, delivery, risk, change, resource and stakeholder management in line with Project Management Institute practices, preparing for roles such as IT project manager, Scrum master or product owner and for certifications such as CSM, PMI-ACP and, with experience, PMP.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/information-technology-project-management",
    intake: "September, January, May",
    campus: "Waterloo",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: an Ontario College Diploma, Advanced Diploma, degree or equivalent in computer science, information technology, computer information systems, computer programming or business, or at least three years of related IT industry experience",
      "Applicants without the credential must send a resume outlining their work experience and goals",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Waterloo: open; May 2027 at Waterloo: open; September 2027 at Waterloo: upcoming; January 2028 at Waterloo: upcoming; May 2028 at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 1566) on its PGWP-aligned programs page under CIP code 11.1005. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
    ],
  },

  {
    name: "Cybersecurity Response Planning (Optional Co-op)",
    slug: "conestoga-cybersecurity-response-planning",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Cybersecurity",
    duration: "1 year (2 academic terms + 1 co-op term, if applicable)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 7,965 tuition (about CAD 9,679 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 19,908 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A two-term graduate certificate that combines technical and risk-management skills so graduates can help organizations prevent, prepare for and respond to cyber-attacks. It builds on earlier computing or IT studies, mixes business and operational technical training, and uses hands-on labs and real-world challenges designed by Conestoga faculty and researchers. A one-term optional co-op is available.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/cybersecurity-response-planning",
    intake: "September, January, May",
    campus: "Waterloo",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: an Ontario College diploma, advanced diploma, degree or equivalent with at least a B average (assessed to Ontario standards) in computer science, IT, software engineering, computer programming, computer systems or applications development, or a graduate certificate in computer applications or mobile solutions development with a B average. Related fields with substantial software development, such as health informatics, may be considered",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Waterloo: open; September 2027 at Waterloo: upcoming; January 2028 at Waterloo: upcoming; May 2028 at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications. Listed for Canadian applicants only (no international offering): May 2027 at Waterloo (suspended)",
      "Conestoga lists this program (code 1580) on its PGWP-aligned programs page under CIP code 11.1003. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op is optional: everyone is admitted to the non co-op program, and seats in the co-op stream depend on the labour market and Level 1 grades (Conestoga asks for at least an 80% weighted average with no dropped or failed courses). International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Supply Chain Management - Global",
    slug: "conestoga-supply-chain-management-global",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Supply Chain Management",
    duration: "1 year (2 academic terms)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 5,564 tuition (about CAD 8,415 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 21,044 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A one-year graduate certificate preparing graduates for logistics, procurement, supply chain and operations roles. Through practical activities, students learn to link strategy and stakeholder needs to supply chain design, judge the financial impact of supply chain decisions, manage risk and compliance, and build relationships with partners. Conestoga says the program is approved for advanced standing toward the Certified Supply Chain Leader (CSCL) designation.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/supply-chain-management-global",
    intake: "September, January, May",
    campus: "Kitchener – Doon",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: a two- or three-year diploma or a degree from an accredited college or university",
      "Engineering degree graduates must also submit a resume",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Kitchener – Doon: open; May 2027 at Kitchener – Doon: open; September 2027 at Kitchener – Doon: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 1411) on its PGWP-aligned programs page under CIP code 52.0203. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
    ],
  },

  {
    name: "Computer Applications Development (Optional Co-op)",
    slug: "conestoga-computer-applications-development",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Software Development",
    duration: "1 year (2 academic terms + 1 co-op term, if applicable)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 4,177 tuition (about CAD 5,891 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 19,908 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "An intensive graduate certificate for college or university graduates who want to become software developers or analysts. It covers web, mobile and database application development along with systems analysis and design, so students can design IT solutions for business and consumer applications. Courses are taught by industry practitioners, and an optional one-term co-op is available to students studying in person.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/computer-applications-development",
    intake: "September, January, May",
    campus: "Waterloo",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: a three-year advanced diploma or a degree, or equivalent experience in a business setting, with at least a B average (assessed to Ontario standards)",
      "Applicants without the education but with three to five years of professional or management experience in business may be considered case by case, with references, a portfolio and an interview",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: May 2027 at Waterloo: suspended; September 2027 at Waterloo: upcoming; January 2028 at Waterloo: upcoming; May 2028 at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications. Listed for Canadian applicants only (no international offering): January 2027 at Waterloo (suspended)",
      "Conestoga lists this program (code 0066) on its PGWP-aligned programs page under CIP code 11.0201. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op is optional: everyone is admitted to the non co-op program, and seats in the co-op stream depend on the labour market and Level 1 grades (Conestoga asks for at least an 80% weighted average with no dropped or failed courses). International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Financial Technology",
    slug: "conestoga-financial-technology",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Financial Technology",
    duration: "1 year (2 academic terms)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 5,508 tuition (about CAD 7,434 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 20,120 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A two-term graduate certificate for people with computing, finance or business backgrounds who want to work in fintech. Through projects and case studies, students study financial technology tools, blockchain, AI and market trends, fintech entrepreneurship, data analysis and security in financial systems, and business analysis methods. Graduates target roles such as business or blockchain analyst and fintech product manager in banks, insurers, investment firms and start-ups.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/financial-technology",
    intake: "September, January",
    campus: "Waterloo",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: an Ontario College Diploma, Advanced Diploma or degree, or equivalent, in computer technology, finance, business or a related field",
      "Applicants using work experience must submit a resume and references",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Waterloo: open; September 2027 at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 1519) on its PGWP-aligned programs page under CIP code 30.7104. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
    ],
  },

  {
    name: "Mental Health, Addiction and Substance Use",
    slug: "conestoga-mental-health-addiction-substance-use",
    level: "Graduate Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Mental Health",
    duration: "1 year (2 academic terms)",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees of CAD 5,107 tuition (about CAD 7,491 with compulsory fees) for Canadian students, and CAD 16,809 tuition (about CAD 20,577 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A one-year graduate certificate that teaches evidence-based ways to support people, families and communities affected by mental health and substance use concerns, at both the individual and the group or system level. Students work on applied community projects and with professionals on topics such as community collaboration, program development, trauma-informed care and advocacy, preparing for front-line, program and community development roles or further clinical study.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/mental-health-addiction-and-substance-use",
    intake: "September, January",
    campus: "Kitchener – Doon",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: a bachelor's degree, advanced diploma, diploma or equivalent in a community-focused, liberal arts or health-related field, or a suitable combination of at least five years of related work and personal experience",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Kitchener – Doon: open; September 2027 at Kitchener – Doon: upcoming; January 2028 at Kitchener – Doon: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications. Listed for Canadian applicants only (no international offering): May 2027 at Kitchener – Doon (suspended)",
      "Conestoga lists this program (code 1401) on its PGWP-aligned programs page under CIP code 51.1599. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
    ],
  },

  {
    name: "Computer Programming and Analysis (Optional Co-op)",
    slug: "conestoga-computer-programming-analysis",
    level: "Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Computer Programming",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 2,750 tuition (about CAD 4,464 with compulsory fees) for Canadian students, and CAD 15,477 tuition (about CAD 18,576 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A three-year advanced diploma for future software developers. Students use current languages and tools to build enterprise, web and mobile applications, applying object-oriented analysis and design and agile methods, with supporting courses in mathematics, accounting and communication. The final term ends with a group capstone, such as a business application for a local company. An optional co-op adds four consecutive four-month work terms, and graduates can move into Conestoga's Bachelor of Computer Science with advanced standing.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/computer-programming-and-analysis",
    intake: "September, January, May",
    campus: "Waterloo",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD or equivalent, or mature student status (19 or older), with Grade 12 English (C or U) and Grade 12 math (C or U). Minimum math grades: MCT4C 60%, MAP4C 60%, MHF4U or MCV4U 50%, MDM4U 50%, or Conestoga preparatory math",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.0 with no band below 5.5, TOEFL iBT 80 with no skill below 20 (or 4.5 on the new 1-6 scale), PTE Academic 53, Duolingo 110, CAEL 70 (writing 60, no sub-test below 30) or Cambridge 170 (no skill below 165). Conestoga notes that required scores may vary for some IT and engineering programs",
      "International intakes listed on the program page as of October 5, 2026: January 2027 (accelerated delivery) at Waterloo: open; May 2027 (accelerated delivery) at Waterloo: open; September 2027 at Waterloo: upcoming; January 2028 (accelerated delivery) at Waterloo: upcoming; May 2028 (accelerated delivery) at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 0057) on its PGWP-aligned programs page under CIP code 11.0201. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op is optional: everyone is admitted to the non co-op program and applies for the co-op stream later; seats depend on the labour market and academic eligibility. International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Software Engineering Technology (Optional Co-op)",
    slug: "conestoga-software-engineering-technology",
    level: "Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Software Engineering",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 2,750 tuition (about CAD 4,464 with compulsory fees) for Canadian students, and CAD 15,477 tuition (about CAD 18,576 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A three-year advanced diploma aimed at careers in mobile apps, embedded systems, the Internet of Things, simulation and big data. Students learn a range of languages and technologies, including web development, databases, business intelligence and cybersecurity, and choose options in a flexible third year. Students can apply after first year for an optional 16-month co-op, and graduates can enter Conestoga's Bachelor of Computer Science with advanced standing.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/software-engineering-technology",
    intake: "September, January",
    campus: "Waterloo",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD or equivalent, or mature student status, with Grade 12 English (C or U) and Grade 12 math (MCT4C 60%, MHF4U or MCV4U 50%, MDM4U 70%, or Conestoga preparatory math). MAP4C is not accepted without the college math pre-admission test",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.0 with no band below 5.5, TOEFL iBT 80 with no skill below 20 (or 4.5 on the new 1-6 scale), PTE Academic 53, Duolingo 110, CAEL 70 (writing 60, no sub-test below 30) or Cambridge 170 (no skill below 165). Conestoga notes that required scores may vary for some IT and engineering programs",
      "International intakes listed on the program page as of October 5, 2026: January 2027 (accelerated delivery) at Waterloo: open; September 2027 at Waterloo: upcoming; January 2028 (accelerated delivery) at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 1132) on its PGWP-aligned programs page under CIP code 15.1204. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op is optional: everyone is admitted to the non co-op program and applies for the co-op stream later; seats depend on the labour market and academic eligibility. International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Business Administration - Management",
    slug: "conestoga-business-administration-management",
    level: "Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Business Administration",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 2,750 tuition (about CAD 5,296 with compulsory fees) for Canadian students, and CAD 15,477 tuition (about CAD 19,408 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A three-year advanced diploma covering all the main areas of business, including finance, accounting, marketing, human resources and supply chain, with a focus on leadership, practical management and entrepreneurship. Students learn through consulting projects, simulations and guest speakers. Graduates can work in corporate, public, non-profit or small-business settings, are eligible for the Certified in Management (C.I.M.) designation, and can continue into year four of Conestoga's International Business Management degree.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/business-administration-management",
    intake: "September",
    campus: "Kitchener – Doon",
    degree: "Ontario College Advanced Diploma",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD or equivalent, or mature student status, with Grade 12 English (C at 60% or U at 50%) and Grade 12 math (C at 60% or U at 50%), or Conestoga preparatory equivalents. The minimum average considered is 65%",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.0 with no band below 5.5, TOEFL iBT 80 with no skill below 20 (or 4.5 on the new 1-6 scale), PTE Academic 53, Duolingo 110, CAEL 70 (writing 60, no sub-test below 30) or Cambridge 170 (no skill below 165). Conestoga notes that required scores may vary for some IT and engineering programs",
      "International intakes listed on the program page as of October 5, 2026: September 2027 at Kitchener – Doon: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "This program (code 0055) does not appear on Conestoga's PGWP-aligned programs list as of October 5, 2026. Conestoga says the list is updated periodically and that a program's absence does not by itself mean it is ineligible; IRCC decides PGWP eligibility",
    ],
  },

  {
    name: "Mechanical Engineering Technology - Robotics and Automation (Optional Co-op)",
    slug: "conestoga-mechanical-engineering-technology-robotics",
    level: "Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Robotics and Automation",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 2,750 tuition (about CAD 4,834 with compulsory fees) for Canadian students, and CAD 15,477 tuition (about CAD 18,946 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A three-year advanced diploma in controlling robotic and automated equipment with electronics, programmable controllers, computers, hydraulics and pneumatics. Students also learn 3D CAD, mechanical technology, motors and servo systems, advanced robotics, industrial automation, IoT and Industry 4.0 concepts and safety standards, and finish with a capstone in which they design and build a working manufacturing work cell. An optional co-op stream adds three work terms.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/mechanical-engineering-technology-robotics-and-automation",
    intake: "September",
    campus: "Cambridge – Fountain Street",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD or equivalent, or mature student status, with Grade 12 English (C or U) and Grade 12 math (MCT4C 55%, MAP4C 80%, MHF4U or MCV4U 55%, MDM4U 70%, or Conestoga preparatory math at 55%). MCT4C is strongly recommended",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.0 with no band below 5.5, TOEFL iBT 80 with no skill below 20 (or 4.5 on the new 1-6 scale), PTE Academic 53, Duolingo 110, CAEL 70 (writing 60, no sub-test below 30) or Cambridge 170 (no skill below 165). Conestoga notes that required scores may vary for some IT and engineering programs",
      "International intakes listed on the program page as of October 5, 2026: September 2027 at Cambridge – Fountain Street: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 0092) on its PGWP-aligned programs page under CIP code 15.0405. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op is optional: everyone is admitted to the non co-op program and applies for the co-op stream later; seats depend on the labour market and academic eligibility. International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Early Childhood Education",
    slug: "conestoga-early-childhood-education",
    level: "Diploma",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Early Childhood Education",
    duration: "2 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 2,750 tuition (about CAD 4,808 with compulsory fees) for Canadian students, and CAD 15,477 tuition (about CAD 18,920 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A two-year diploma preparing students to work in early learning and child care. Building on child development and responsive practice, students learn to design, deliver and evaluate inclusive, play-based programs together with families and communities, and practise in college-run child development centres, kindergarten classrooms, licensed child care and community agencies. Graduates can continue to Conestoga's Bachelor of Early Learning Program Development (Honours) with advanced standing.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/early-childhood-education",
    intake: "September, January, May",
    campus: "Kitchener – Doon, Brantford, Stratford",
    degree: "Ontario College Diploma",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD or equivalent, or mature student status, with Grade 12 English (C at 65% or U at 55%) or Conestoga preparatory communications at 65%",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.0 with no band below 5.5, TOEFL iBT 80 with no skill below 20 (or 4.5 on the new 1-6 scale), PTE Academic 53, Duolingo 110, CAEL 70 (writing 60, no sub-test below 30) or Cambridge 170 (no skill below 165). Conestoga notes that required scores may vary for some IT and engineering programs",
      "International intakes listed on the program page as of October 5, 2026: January 2027 (accelerated delivery) at Kitchener – Doon: closed; May 2027 (accelerated delivery) at Kitchener – Doon: open; September 2027 at Brantford: upcoming; September 2027 at Kitchener – Doon: upcoming; September 2027 at Stratford: upcoming; January 2028 (accelerated delivery) at Kitchener – Doon: upcoming; May 2028 (accelerated delivery) at Kitchener – Doon: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications. Listed for Canadian applicants only (no international offering): September 2027 at Waterloo (open)",
      "Conestoga lists this program (code 0003) on its PGWP-aligned programs page under CIP code 19.0709. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Accelerated (AD) intakes complete the program in four consecutive semesters",
    ],
  },

  {
    name: "Personal Support Worker - International",
    slug: "conestoga-personal-support-worker-international",
    level: "Professional Certificate",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Personal Support Work",
    duration: "1 year (2 academic terms)",
    language: "English",
    tuitionNote:
      "This offering is for international students only, so no Canadian fee is listed. Conestoga lists 2026-27 fees of CAD 15,477 tuition (about CAD 19,214 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A two-term certificate offered specifically for international students that prepares graduates to work as personal support workers on health-care teams in long-term care, community and hospital settings. Students learn person-centred care across the lifespan, including help with daily living, personal care, home management and nutrition, safe environments, responsive behaviours and end-of-life care, and practise in Conestoga's Living Classroom in long-term care and retirement settings.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/personal-support-worker-international",
    intake: "September, January, May",
    campus: "Guelph, Kitchener – Doon, Milton – Steeles Avenue, Waterloo",
    degree: "Ontario College Certificate",
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic: OSSD or equivalent, or mature student status, with Grade 12 English (C or U) or Conestoga preparatory communications",
      "A clear police check for vulnerable sector screening is needed for placements, and students must complete work-integrated learning requirements (immunizations, TB test, first aid) to finish the program. Conestoga recommends arriving in Canada about 30 days before the program starts",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.0 with no band below 5.5, TOEFL iBT 80 with no skill below 20 (or 4.5 on the new 1-6 scale), PTE Academic 53, Duolingo 110, CAEL 70 (writing 60, no sub-test below 30) or Cambridge 170 (no skill below 165). Conestoga notes that required scores may vary for some IT and engineering programs",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Guelph: open; January 2027 at Kitchener – Doon: open; January 2027 at Milton – Steeles Avenue: suspended; January 2027 at Waterloo: open; May 2027 at Milton – Steeles Avenue: open; May 2027 at Kitchener – Doon: open; May 2027 at Waterloo: open; May 2027 at Guelph: open; September 2027 at Kitchener – Doon: upcoming; September 2027 at Guelph: upcoming; September 2027 at Milton – Steeles Avenue: upcoming; January 2028 at Guelph: upcoming; January 2028 at Kitchener – Doon: upcoming; January 2028 at Waterloo: upcoming; May 2028 at Waterloo: upcoming; May 2028 at Kitchener – Doon: upcoming; May 2028 at Milton – Steeles Avenue: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 11651) on its PGWP-aligned programs page under CIP code 51.2602. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
    ],
  },

  {
    name: "Bachelor of Computer Science (Honours)",
    slug: "conestoga-bachelor-computer-science-honours",
    level: "Bachelor",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "Computer Science",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 6,636 tuition (about CAD 8,844 with compulsory fees) for Canadian students, and CAD 16,933 tuition (about CAD 20,526 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A four-year honours degree with two paid co-op work terms that trains software developers in computer science theory and its application, with a focus on software quality, reliability and security, testing methods, software project management and privacy. Students can major in areas such as big data analysis, cybersecurity and cloud computing.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/bachelor-of-computer-science-honours",
    intake: "September, January",
    campus: "Waterloo",
    programType: "Co-op (mandatory)",
    degree: "Bachelor of Computer Science (Honours)",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD, or 19 or older, with six Grade 12 U/M courses averaging at least 65%, including ENG4U and any 4U math (or Conestoga preparatory courses for degrees). Conestoga notes that higher averages are often needed because of competition for places",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: January 2027 at Waterloo: open; September 2027 at Waterloo: upcoming; January 2028 at Waterloo: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 1514C) on its PGWP-aligned programs page under CIP code 11.0701. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op: the degree includes two paid co-op work terms. International students need a work permit to take co-op jobs",
    ],
  },

  {
    name: "Bachelor of Business Administration (Honours) - International Business Management",
    slug: "conestoga-bba-international-business-management",
    level: "Bachelor",
    universitySlug: "conestoga-college",
    universityName: "Conestoga College",
    country: "Canada",
    field: "International Business",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "Conestoga lists 2026-27 fees for the first year (two terms) of CAD 6,885 tuition (about CAD 10,225 with compulsory fees) for Canadian students, and CAD 16,933 tuition (about CAD 21,658 with compulsory fees, including health insurance) for international students. These are the 2026-27 (September 2026 to August 2027) rates; Conestoga says fees for programs starting September 2027 or later will be published in spring 2027. A non-refundable CAD 2,500 deposit is required from international students to hold a seat.",
    description:
      "A four-year honours business degree with paid co-op terms that prepares students to lead international business initiatives and cross-border operations. Courses cover international strategy and operations, global marketing, finance and supply chain, and data-driven decision-making. At the end of year two, students can choose a major in human resource management, supply chain management, marketing management or sustainability management (subject to enrolment) or stay in general management.",
    officialProgramUrl:
      "https://www.conestogac.on.ca/fulltime/bachelor-of-business-administration-honours-international-business-management",
    intake: "September",
    campus: "Kitchener – Doon",
    programType: "Co-op (mandatory)",
    degree: "Bachelor of Business Administration (Honours)",
    workIntegrated: true,
    applicationDeadline: "International applicants: Conestoga accepts applications until a program reaches capacity and does not keep waitlists, so apply early; incomplete applications close when the program closes. Canadian applicants (September 2027): February 1, 2027 is the equal-consideration date; most programs keep accepting applications after that while space remains, but most oversubscribed programs do not",
    admissionRequirements: [
      "Apply: international applicants use the ontariocolleges.ca (OCAS) international applicant portal and pay a CAD 100 application fee; Canadian applicants apply through ontariocolleges.ca. After an offer, international students pay the non-refundable CAD 2,500 deposit and Conestoga requests the Provincial Attestation Letter (PAL) needed for the study permit",
      "Academic (Canadian applicants): OSSD, or 19 or older, with six Grade 12 courses averaging at least 65%, including ENG4U (60%) and one of MCV4U, MHF4U or MDM4U (60%), plus four other U or M courses. Higher averages are often needed, and applicants may be asked for a supplementary information sheet and interview",
      "International applicants must meet the same program requirements with equivalent qualifications, and upload both their graduation document and transcript (Conestoga lists accepted documents by country)",
      "English proficiency (if your previous studies were not in English): IELTS Academic 6.5 with no band below 6.0, TOEFL iBT 88 with no skill below 22 (or 5.0 on the new 1-6 scale), PTE Academic 58, Duolingo 120, CAEL 70 (no sub-test below 60) or Cambridge 180 (no skill below 170). Conestoga applies this higher tier to graduate certificates and degrees",
      "International intakes listed on the program page as of October 5, 2026: September 2027 at Kitchener – Doon: upcoming. \"Upcoming\" is Conestoga's status for an intake that is not yet open for applications",
      "Conestoga lists this program (code 1172C) on its PGWP-aligned programs page under CIP code 52.1101. Conestoga notes that it does not determine PGWP eligibility; IRCC makes the final decision and applicants should check IRCC's current list",
      "Co-op: the degree includes paid co-op work terms. International students need a work permit to take co-op jobs",
    ],
  },

];
