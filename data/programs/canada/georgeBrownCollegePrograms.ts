import type { Program } from "../../programs";

// George Brown College (now branded George Brown Polytechnic) full-time programs for 2027-28 intakes (international-eligible offerings).
// Sourced from George Brown program pages (program details, domestic/international availability, tuition, admission requirements and PGWP eligibility) and George Brown's international how-to-apply, admission requirements, English proficiency and tuition pages.

export const georgeBrownCollegePrograms: Program[] = [
  {
    name: "Cyber Security",
    slug: "georgebrown-cyber-security",
    level: "Graduate Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Cybersecurity",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first three semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 13,152.00; international students CAD 28,967.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A three-semester graduate certificate at Casa Loma Campus covering networking and operating systems, security operations centre (SOC) work, cryptography, secure network architecture, ethical hacking and penetration testing, cloud application security, digital forensics and incident response, and AI for cybersecurity. Classes are blended, mostly late afternoons, evenings and Saturdays, and the program ends with a group capstone project.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/cyber-security-program-postgraduate-t433",
    intake: "January, September",
    campus: "Casa Loma Campus (Toronto)",
    degree: "Ontario College Graduate Certificate",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: a two-year college diploma or bachelor's degree in IT, computer science or a related field; or a two- or three-year diploma or bachelor's degree in any field plus one year of related work experience (resume required)",
      "Students need their own laptop meeting the program's specifications (virtualization support, at least 8 GB RAM and 256 GB SSD, plus a 2 TB external drive)",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 11.1003) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

  {
    name: "Applied A.I. Solutions Development",
    slug: "georgebrown-applied-ai-solutions-development",
    level: "Graduate Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Artificial Intelligence",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 9,015.00; international students CAD 19,719.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. Semester 3 costs extra: a CAD 500 co-op fee or a variable fee for the work-integrated project, neither included in the totals above. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A one-year graduate certificate at Casa Loma Campus that blends computer science, mathematics and business to build AI solutions. Students design machine learning and deep learning models, work with data science and analytics, build dashboards that communicate results, and practise presenting to technical, business and investor audiences using a design-thinking approach.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/applied-ai-solutions-development-program-postgraduate-t431",
    intake: "January, May, September",
    campus: "Casa Loma Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, Spring 2028 (May) opens June 2, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: a diploma or bachelor's degree in IT, computer science or a related field (Python skills strongly recommended); applicants from unrelated fields submit transcripts and a resume and may have an online interview, and must already have Python programming skills",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May) opens June 2, 2027",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 11.0102) and notes that the field of study is only one part of PGWP eligibility",
      "Optional co-op: in semester 3, qualified students can take a co-op placement instead of the work-integrated project",
    ],
  },

  {
    name: "Cloud Computing Technologies",
    slug: "georgebrown-cloud-computing-technologies",
    level: "Graduate Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Cloud Computing",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 5,418.00; international students CAD 19,719.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. Semester 3 has a separate flat CAD 500 fee for the co-op placement or work-integrated project, not included in the totals above. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A one-year graduate certificate at Casa Loma Campus on designing, administering, securing and troubleshooting cloud and on-premises systems. Lab work and projects use Microsoft 365, Microsoft Azure and Amazon AWS, and students can specialize in either the Microsoft or the Amazon track and pursue vendor certifications. Classes run mainly on evenings and weekends.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/cloud-computing-technologies-program-postgraduate-t465",
    intake: "January, May, September",
    campus: "Casa Loma Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, Spring 2028 (May) opens June 2, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: a bachelor's degree, three-year advanced diploma or two-year diploma in mathematics, business, computer science, economics, engineering or science",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May) opens June 2, 2027",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 11.0902) and notes that the field of study is only one part of PGWP eligibility",
      "Optional co-op: in semester 3, qualified students can take a co-op placement instead of the work-integrated project",
    ],
  },

  {
    name: "Information Systems Business Analysis",
    slug: "georgebrown-information-systems-business-analysis",
    level: "Graduate Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Business Analysis",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 9,511.00; international students CAD 20,215.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. Semester 3 has a separate flat CAD 500 fee for the co-op placement or work-integrated project, not included in the totals above. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A one-year graduate certificate at Casa Loma Campus for IT and business professionals moving into business analyst roles, bridging business needs and technical teams. It covers problem identification, requirements gathering and analysis, process and workflow modelling, facilitation, project management and technical writing. George Brown is an academic member of the International Institute of Business Analysis, and students are prepared to write the IIBA Entry Certificate in Business Analysis.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/information-systems-business-analysis-program-with-experiential-learning-capstone-postgraduate-t405",
    intake: "January, May, September",
    campus: "Casa Loma Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, Spring 2028 (May) opens June 2, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: a two- or three-year college diploma or bachelor's degree in computer science, commerce, engineering or a related field, plus at least one year of relevant work experience (resume required); admission weighs education and work experience together",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May) opens June 2, 2027",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 11.0103) and notes that the field of study is only one part of PGWP eligibility",
      "Optional co-op: in semester 3, qualified students can take a co-op placement instead of the work-integrated project (the program is offered as the experiential learning capstone version)",
    ],
  },

  {
    name: "Health Informatics",
    slug: "georgebrown-health-informatics",
    level: "Graduate Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Health Informatics",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 8,311.00; international students CAD 20,605.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. Semester 3 has a separate flat CAD 500 fee for the co-op placement or work-integrated project, not included in the totals above. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A one-year graduate certificate at Casa Loma Campus that brings health care and IT professionals together to work on health information systems. Topics include health care systems and trends, electronic medical records, health data standards, privacy, legal and policy issues, requirements analysis, workflow and solution modelling, and clinical decision support. Classes are mostly evenings and weekends, with some daytime courses.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/health-informatics-program-postgraduate-t419",
    intake: "January, May, September",
    campus: "Casa Loma Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, Spring 2028 (May) opens June 2, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: one of three routes: (1) a two- or three-year health sciences diploma plus one year of work as a health care professional, or a health sciences bachelor's degree; (2) a two- or three-year IT or computer science diploma plus one year of work as an IT professional, or a computer science bachelor's degree; or (3) a bachelor's degree in another field with at least B+ (77%) in the final year. Final-year bachelor's students may get a conditional offer",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May) opens June 2, 2027",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 51.2706) and notes that the field of study is only one part of PGWP eligibility",
      "Optional co-op: in semester 3, qualified students can take a co-op placement instead of the work-integrated learning project",
    ],
  },

  {
    name: "Marketing Management – Digital Media",
    slug: "georgebrown-marketing-management-digital-media",
    level: "Graduate Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Marketing",
    duration: "12 months (2 academic semesters plus 1 work experience semester)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 4,625.00; international students CAD 19,579.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. The totals don't include the cost of the work experience semester. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A 12-month graduate certificate at St. James Campus on digital marketing across social, mobile, search, content, owned and paid media, plus marketing analytics and market research. About 30% of the program is online, and students finish with a capstone project before a required work term.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/marketing-management-digital-media-program-postgraduate-b433",
    intake: "January, May, September",
    campus: "St. James Campus (Toronto)",
    programType: "Work term (mandatory)",
    degree: "Ontario College Graduate Certificate",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, Spring 2028 (May) opens June 2, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: a bachelor's degree, diploma, advanced diploma or equivalent. Applicants with partial postsecondary study and/or significant relevant work experience may be considered with a resume and references; applicants admitted on work experience alone must also prove college-level English",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May) opens June 2, 2027",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 52.1404) and notes that the field of study is only one part of PGWP eligibility",
      "Required work term: one semester of work experience after the second academic semester, either paid co-op or unpaid internship",
      "Not for international students: the fully online version (B423) is a separate program that George Brown says may not suit international students because of study permit requirements",
    ],
  },

  {
    name: "Computer Programming and Analysis",
    slug: "georgebrown-computer-programming-and-analysis",
    level: "Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Computer Science",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 4,511.00; international students CAD 19,567.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A three-year advanced diploma at Casa Loma Campus in programming and IT analysis. The first two years build software development and testing skills; the final year adds full-stack and mobile development, AI and machine learning, and teamwork, communication and client service skills, with project-based learning throughout.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/computer-programming-and-analysis-program-t177",
    intake: "January, September",
    campus: "Casa Loma Campus (Toronto)",
    degree: "Ontario College Advanced Diploma",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: Ontario Secondary School Diploma or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U) and Grade 11 Math (C, M or U) or Grade 12 Math (C or U); applicants are selected on academic achievement and may need grades above the minimums",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (international table, diplomas and certificates): IELTS Academic 6.0 with no band below 5.5; TOEFL overall 4 with no band below 4 (George Brown's general English proficiency page still lists TOEFL iBT 80 with 20 in each skill); Duolingo 110 with a production score of 90; PTE Academic 54 with 50 in each band; CAEL 60; MELAB 80; Cambridge 169 with no skill below 162; George Brown EAP Level 8 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 11.0201) and notes that the field of study is only one part of PGWP eligibility",
      "Not for international students: the fully online version (T197) is for domestic students only",
    ],
  },

  {
    name: "Computer Systems Technology",
    slug: "georgebrown-computer-systems-technology",
    level: "Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Information Technology",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 4,302.00; international students CAD 19,518.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A three-year advanced diploma at Casa Loma Campus designed with industry input, covering IT infrastructure, virtualization (through the VMware IT Academy) and cloud computing. In the third year students choose an optional Networking specialization (network security, VoIP, wireless LANs) or Systems specialization (mail servers, content management, database administration, security), and complete real-world projects with industry partners or George Brown's research office.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/computer-systems-technology-program-t190",
    intake: "January, September",
    campus: "Casa Loma Campus (Toronto)",
    degree: "Ontario College Advanced Diploma",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: Ontario Secondary School Diploma or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U) and Grade 11 Math (M or U) or Grade 12 Math (C or U); applicants are selected on academic achievement and may need grades above the minimums",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (international table, diplomas and certificates): IELTS Academic 6.0 with no band below 5.5; TOEFL overall 4 with no band below 4 (George Brown's general English proficiency page still lists TOEFL iBT 80 with 20 in each skill); Duolingo 110 with a production score of 90; PTE Academic 54 with 50 in each band; CAEL 60; MELAB 80; Cambridge 169 with no skill below 162; George Brown EAP Level 8 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 15.1202) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

  {
    name: "Civil Engineering Technology",
    slug: "georgebrown-civil-engineering-technology",
    level: "Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Civil Engineering",
    duration: "3 years (6 semesters, plus an optional co-op)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 4,234.00; international students CAD 19,278.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A three-year advanced diploma at Casa Loma Campus on planning, designing and building roads, bridges, tunnels, subdivisions, buildings and municipal infrastructure. Students design reinforced concrete and steel structures and storm, water and sanitary systems, read real construction drawing sets, and learn estimating, scheduling, site safety, quality management, contracts and construction business management.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/civil-engineering-technology-program-t164",
    intake: "January, September",
    campus: "Casa Loma Campus (Toronto)",
    programType: "Regular or co-op",
    degree: "Ontario College Advanced Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: Ontario Secondary School Diploma or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U) and Grade 11 Math (M or U) or Grade 12 Math (C or U); applicants are selected on academic achievement and may need grades above the minimums",
      "January starters must take semester 2 in the summer (May to August) to continue into semester 3 in the fall",
      "Students need a Windows laptop that can run CAD, BIM, scheduling and estimating software (Core i7/Ryzen 7 or equivalent, 32 GB RAM, 1 TB SSD, dedicated NVIDIA RTX graphics); Macs aren't recommended",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (international table, diplomas and certificates): IELTS Academic 6.0 with no band below 5.5; TOEFL overall 4 with no band below 4 (George Brown's general English proficiency page still lists TOEFL iBT 80 with 20 in each skill); Duolingo 110 with a production score of 90; PTE Academic 54 with 50 in each band; CAEL 60; MELAB 80; Cambridge 169 with no skill below 162; George Brown EAP Level 8 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 15.0201) and notes that the field of study is only one part of PGWP eligibility",
      "Optional co-op: eligible students can do an 8-12 month co-op after semester 5, starting in the winter, and return for semester 6 the following winter",
    ],
  },

  {
    name: "Business Administration – Supply Chain and Operations Management",
    slug: "georgebrown-business-administration-supply-chain-operations-management",
    level: "Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Supply Chain Management",
    duration: "3 years (6 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 4,068.00; international students CAD 19,227.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A three-year business advanced diploma at St. James Campus focused on supply chain and operations: demand forecasting and management, production planning, procurement, logistics, transportation, warehousing and exporting. Graduates can work as procurement officers, logistics or customs analysts, forecasting and demand specialists, or supply chain specialists.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/business-administration-supply-chain-and-operations-management-program-b122",
    intake: "September",
    campus: "St. James Campus (Toronto)",
    degree: "Ontario College Advanced Diploma",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: Ontario Secondary School Diploma or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U) and Grade 11 Math (C, M or U) or Grade 12 Math (C or U); applicants are selected on academic achievement and may need grades above the minimums",
      "Field education: the program page lists an optional field education course, and George Brown also offers a separate version of this program with a built-in work experience term (B162)",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (international table, diplomas and certificates): IELTS Academic 6.0 with no band below 5.5; TOEFL overall 4 with no band below 4 (George Brown's general English proficiency page still lists TOEFL iBT 80 with 20 in each skill); Duolingo 110 with a production score of 90; PTE Academic 54 with 50 in each band; CAEL 60; MELAB 80; Cambridge 169 with no skill below 162; George Brown EAP Level 8 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January): not available; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 52.0203) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

  {
    name: "Computer Programming",
    slug: "georgebrown-computer-programming",
    level: "Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Computer Science",
    duration: "2 years (4 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 4,577.00; international students CAD 19,567.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A two-year diploma at Casa Loma Campus on designing, building and testing software and web applications. Students learn programming logic, object-oriented and test-driven development and database management, work through the full project life cycle, get weekly lab tutor support, and finish with a capstone project solving a real-world problem.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/computer-programming-program-t186",
    intake: "January, September",
    campus: "Casa Loma Campus (Toronto)",
    degree: "Ontario College Diploma",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: Ontario Secondary School Diploma or equivalent (or mature student status, 19 or older) with Grade 12 English (C or U) and Grade 11 Math (C, M or U) or Grade 12 Math (C or U); applicants are selected on academic achievement and may need grades above the minimums",
      "Students need their own laptop meeting the program's specifications (at least 16 GB RAM, 256 GB SSD and a quad-core i7 or better)",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (international table, diplomas and certificates): IELTS Academic 6.0 with no band below 5.5; TOEFL overall 4 with no band below 4 (George Brown's general English proficiency page still lists TOEFL iBT 80 with 20 in each skill); Duolingo 110 with a production score of 90; PTE Academic 54 with 50 in each band; CAEL 60; MELAB 80; Cambridge 169 with no skill below 162; George Brown EAP Level 8 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 11.0201) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

  {
    name: "Practical Nursing",
    slug: "georgebrown-practical-nursing",
    level: "Diploma",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Nursing",
    duration: "2 years (4 semesters, in a 2-1-2 format)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 5,123.00; international students CAD 19,501.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A two-year diploma at Waterfront Campus that prepares students to become Registered Practical Nurses in Ontario. It is approved by the College of Nurses of Ontario, and graduates can apply to write the RPN registration exams. Classes and labs are in the Daphne Cockwell Centre for Health Sciences, with unpaid, faculty-supervised clinical placements across the Greater Toronto Area and a final-semester practicum with a preceptor.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/practical-nursing-program-pn-s121",
    intake: "January, May, September",
    campus: "Waterfront Campus (Toronto)",
    degree: "Ontario College Diploma",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, Winter 2028 (January) opens February 3, 2027, Spring 2028 (May) opens June 2, 2027, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD or equivalent (or mature student status, 19 or older) with 70% or higher in Grade 12 English (C or U), Grade 11 Math (M or U) or Grade 12 Math (C or U), Grade 11 Biology (C or U) or Grade 12 Biology (U), and Grade 11 Chemistry (U) or Grade 12 Chemistry (C or U). Admission is competitive and only the top-ranked applicants get offers; only first-semester applications are accepted, and advanced standing isn't available",
      "The program runs in a 2-1-2 format: two consecutive semesters, a one-semester break, then the last two semesters, whichever term you start in",
      "Clinical placements: unpaid, supervised placements in GTA care settings, which can involve extended, evening and weekend shifts starting as early as 6:30 a.m. and travel of up to two hours. Students must complete pre-placement health requirements (10 to 12 weeks) and a clear Vulnerable Sector Check, renewed every year, before placements",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency: George Brown lists Practical Nursing among programs that don't accept English test scores or other proof of proficiency; applicants must hold the required Grade 12 English credit (70% or higher, or an equivalent)",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January) opens February 3, 2027; Spring 2028 (May) opens June 2, 2027",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 51.3901) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

  {
    name: "Honours Bachelor of Technology (Construction Management)",
    slug: "georgebrown-construction-management-bachelor",
    level: "Bachelor",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Construction Management",
    duration: "4 years (including 1 field experience semester)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 9,907.00; international students CAD 22,491.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A four-year honours degree from George Brown's Angelo DelZotto School of Construction Management, described as Ontario's first four-year construction management degree. It combines construction engineering and technology with business and management methods, applied research and field study, preparing graduates to manage construction projects from start to finish; graduates qualify to pursue Gold Seal Certification.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/honours-bachelor-of-technology-program-construction-management-t312",
    intake: "September",
    campus: "Casa Loma Campus (Toronto)",
    degree: "Honours Bachelor's Degree",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD with six Grade 12 U or M courses, including Grade 12 U English and any Grade 12 U Math, with at least 60% in English and Math and a 65% average across the six courses (or equivalent). Recommended: Basic Computer Software Applications and Calculus and Vectors. Mature applicants (19 or older without an OSSD) must already have Grade 12 U English and Math at 65% or higher, as there's no mature student testing for degree programs",
      "Field experience: a mandatory field experience semester in the spring/summer of third year, needing at least 450 hours of relevant construction management work (or equivalent past experience through PLAR). Tuition doesn't include the cost of the field placement",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (bachelor's degrees): the program page asks for George Brown EAP Level 9, TOEFL iBT 84 with 21 in each skill, IELTS Academic 6.5 with no band below 6.0, MELAB 85 or CAEL 70 with writing 60. George Brown's international table also lists Duolingo 120 (production 100), PTE Academic 60 (55 in each band), Cambridge 176 (no skill below 169) and TOEFL overall 4.5 with no band below 4.5 on the newer scale; the Admissions Test isn't available for degree programs. Alternatively, two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January): not available; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 52.2001) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

  {
    name: "Honours Bachelor of Commerce (Digital Marketing)",
    slug: "georgebrown-commerce-digital-marketing",
    level: "Bachelor",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Marketing",
    duration: "4 years (8 semesters) plus 1 co-op work term",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first two semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 7,889.00; international students CAD 22,439.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A four-year honours commerce degree at St. James Campus. The first two years cover business foundations shared with other George Brown business degrees; the last two focus on digital marketing, including owned and social media, data-driven and personalized customer communication, a set of capstone courses and a paid co-op work term.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/honours-bachelor-of-commerce-digital-marketing-program-b312",
    intake: "September",
    campus: "St. James Campus (Toronto)",
    programType: "Co-op (mandatory)",
    degree: "Honours Bachelor's Degree",
    workIntegrated: true,
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: OSSD with six Grade 12 U or M courses, including Grade 12 U English and Grade 12 U Math, with at least 60% in both and a 65% average across the six courses (or equivalent). Recommended: basic computer software applications and Mathematics of Data Management (MDM4U). Mature applicants (19 or older without an OSSD) must already have Grade 12 U English and Math at 65% or higher",
      "International applicants need senior secondary school graduation or equivalent (George Brown asks for country-specific documents, usually attested true copies of transcripts) and must meet the English requirement",
      "English proficiency (bachelor's degrees): the program page asks for George Brown EAP Level 9, TOEFL iBT 84 with 21 in each skill, IELTS Academic 6.5 with no band below 6.0, MELAB 85 or CAEL 70 with writing 60. George Brown's international table also lists Duolingo 120 (production 100), PTE Academic 60 (55 in each band), Cambridge 176 (no skill below 169) and TOEFL overall 4.5 with no band below 4.5 on the newer scale; the Admissions Test isn't available for degree programs. Alternatively, two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January): not available; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 52.1404) and notes that the field of study is only one part of PGWP eligibility",
      "Required co-op: students complete one paid co-op work term (the program includes one work experience semester or equivalent)",
    ],
  },

  {
    name: "Master of Construction Management",
    slug: "georgebrown-master-of-construction-management",
    level: "Master",
    universitySlug: "george-brown-college",
    universityName: "George Brown College",
    country: "Canada",
    field: "Construction Management",
    duration: "1 year (3 semesters)",
    language: "English",
    tuitionNote:
      "George Brown's estimated total for the first three semesters (tuition plus materials, student service and ancillary fees) for programs starting Fall 2026: Canadian students CAD 14,050.00; international students CAD 41,275.00. Books and other course materials are extra, and fees may change for Fall 2027 and later starts. (On the program page, the domestic estimate is labelled for Fall 2025 starts and the international estimate for Fall 2026 starts.) International students also pay mandatory health insurance (CAD 932 for a full year, based on 2025-26 costs).",
    description:
      "A one-year, course-based master's degree at Waterfront Campus for construction professionals preparing for leadership roles. It combines advanced construction management with business strategy, financial and legal frameworks, project forensics, sustainability and digital, data-driven project tools, and ends with an industry-focused capstone project.",
    officialProgramUrl:
      "https://www.georgebrown.ca/programs/master-of-construction-management-program-t550",
    intake: "September",
    campus: "Waterfront Campus (Toronto)",
    degree: "Master's Degree",
    applicationDeadline: "International applicants: George Brown doesn't publish a fixed deadline; it reviews applications selectively once each intake opens, and programs can close early when international seats fill. For this program, Fall 2027 (September) opens October 6, 2026, so apply early. Canadian applicants apply through ontariocolleges.ca; apply early",
    admissionRequirements: [
      "Apply: international applicants apply through George Brown's online application system (applynow.georgebrown.ca) and pay a non-refundable CAD 110 application fee; George Brown assesses the first program choice and only looks at the second if the applicant isn't admissible to the first. To accept an offer, new international students pay at least CAD 2,000 (or the first semester or first year of fees); there are no payment plans for new students. Canadian applicants apply through ontariocolleges.ca",
      "Academic: a four-year honours bachelor's degree (or equivalent) in construction management, civil or construction engineering, architecture, interior design, building science or another building-related field, with at least 70% (B-) over the last 60 credit hours. Applicants who fall short may be considered on a combination of academics and industry experience",
      "International applicants need a completed college diploma or university degree (George Brown asks for country-specific documents, usually attested true copies of transcripts and credentials) and must meet the English requirement",
      "English proficiency (international table, postgraduate and master's programs): IELTS Academic 6.5 with no band below 6.0; TOEFL overall 4.5 with no band below 4.5 (George Brown's general English proficiency page still lists TOEFL iBT 88 with 22 in each skill for postgraduate and master's programs); Duolingo 120 with a production score of 100; PTE Academic 60 with 55 in each band; CAEL 70 with writing 60; MELAB 85; Cambridge 176 with no skill below 169; George Brown EAP Level 9 or the George Brown Admissions Test; or two consecutive years of full-time study in English (high school, or a diploma or degree) in Canada or another English-speaking country, completed within the last four years. Test scores are valid for two years",
      "International application windows on the program page (2027-28, checked October 5, 2026): Fall 2027 (September) opens October 6, 2026; Winter 2028 (January): not available; Spring 2028 (May): not available",
      "PGWP: the program page lists this program as PGWP-eligible (CIP code 52.2001) and notes that the field of study is only one part of PGWP eligibility",
    ],
  },

];
