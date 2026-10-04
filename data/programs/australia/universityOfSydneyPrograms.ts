import type { Program } from "@/data/programs";

// University of Sydney undergraduate programmes for 2027 entry.
// Sources: official University of Sydney course pages (sydney.edu.au/courses) and UAC key dates.
// Fees are 2027 indicative Year 1 amounts in Australian dollars; entry scores are indicative, not guaranteed.

export const universityOfSydneyPrograms: Program[] = [
  {
    name: "Advanced Computing",
    slug: "sydney-advanced-computing",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Computer Science",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$63,600 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$8,943. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Advanced Computing teaches the design principles and programming skills behind modern IT systems, from cybersecurity and data platforms to connected devices and apps. Core computing units are combined with a major in Computer Science, Cybersecurity, Software Development or Computational Data Science, and students can add a second major or minor from the University's shared pool of more than 100 options. Students who meet the academic requirements can complete honours in the final year. The degree is accredited by the Australian Computer Society at the conditional professional level until the end of 2026, with re-accreditation for 2027 under review. Domestic students apply through UAC (code 513500); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-advanced-computing.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Advanced Computing (BAdvComp)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 90.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 90.0",
      "IB Diploma (international applicants): 34 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 15 from three A2 subjects or 16 from four (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted)",
      "Prerequisite: HSC Mathematics Advanced at Band 4 or an equivalent result (the University lists pathway options for applicants who don't meet it)",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Extension 1",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Commerce",
    slug: "sydney-commerce",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Business",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$59,100 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$16,004. Fees are reviewed and rise each year of study.",
    description:
      "The University of Sydney Business School's Bachelor of Commerce has a refreshed structure for 2027: students start with four core units covering professional skills, accounting and finance for decisions, business problem solving and data analytics. They then take a major such as Accounting, Finance, Banking, Business Analytics, Marketing, Management and Leadership, Human Resource Management or Innovation and Entrepreneurship, finishing with a capstone, and can add a second major or minor from areas like Economics, Data Science or Psychological Science. Industry projects, internships and AI skills are built into the degree. Domestic students apply through UAC (code 513300); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-commerce0.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Commerce (BCom)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 96.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 96.0",
      "IB Diploma (international applicants): 38 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 17 from three A2 subjects or 19 from four (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted)",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Standard or higher, depending on the majors chosen",
      "English language (where required): IELTS Academic 7.0 overall and 6.0 in each band; TOEFL iBT 96 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 72 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Economics",
    slug: "sydney-economics",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Economics",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$59,100 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$15,971. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Economics is built on microeconomics, macroeconomics and econometrics, giving students tools to analyse how consumers, firms and governments make trade-offs. Students complete an embedded major in Economics, Econometrics, Financial Economics or Environmental, Agricultural and Resource Economics, plus a major or minor from the shared pool in business, STEM, social sciences or humanities. High-achieving students can take the Advanced Economics program as a route into Honours. Domestic students apply through UAC (code 513225); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-economics.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Economics (BEc)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 85.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 91.0",
      "IB Diploma (international applicants): 31 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 14 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 15 from three or 16 from four",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced",
      "English language (where required): IELTS Academic 7.0 overall and 6.0 in each band; TOEFL iBT 96 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 72 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Software Engineering",
    slug: "sydney-software-engineering",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$63,600 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$8,796. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Engineering Honours (Software Engineering) covers the whole software lifecycle, from strategy and design to coding, testing, quality and project management, including programming languages, data structures and algorithms, databases and operating systems. Students take foundation units in mathematics and computing and a series of multidisciplinary projects, then specialist software engineering units with an optional specialisation. The final year includes an honours thesis and industry work experience through the Professional Engagement Program, and the degree is accredited by Engineers Australia. Domestic students apply through UAC (code 513565); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-engineering-honours-software-engineering1.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Engineering Honours (Software Engineering)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 85.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 90.0",
      "IB Diploma (international applicants): 31 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 14 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 15 from three or 16 from four",
      "Prerequisite: HSC Mathematics Advanced at Band 4 or an equivalent result (the University lists pathway options for applicants who don't meet it)",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Extension 1 (Physics is also recommended)",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "sydney-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Mechanical Engineering",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$63,600 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$8,796. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Engineering Honours (Mechanical Engineering) teaches students to design and analyse components, machines and mechanical systems using the principles of motion, energy and force, with applications in power generation, transport, manufacturing, building services and computer-aided design. After foundation units in mathematics and computing and multidisciplinary projects, students take specialist mechanical units with an optional specialisation. The final year includes an honours thesis and industry work experience, and the degree is accredited by Engineers Australia. Domestic students apply through UAC (code 513555); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-engineering-honours-mechanical-engineering2.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Engineering Honours (Mechanical Engineering)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 85.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 90.0",
      "IB Diploma (international applicants): 31 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 14 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 15 from three or 16 from four",
      "Prerequisite: HSC Mathematics Advanced at Band 4 or an equivalent result (the University lists pathway options for applicants who don't meet it)",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Extension 1 (Physics is also recommended)",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Science",
    slug: "sydney-science",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Natural Sciences",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$63,600 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$10,007. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Science offers more than 40 majors, programs and streams, from biology and chemistry to physics, nanoscience and data science. First year builds a foundation across the core sciences; in the second and third years students specialise in a major or program from the science pool and add a minor or second major from science or the University's shared pool, with room for electives. Domestic students apply through UAC (code 513910); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-science.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 80.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 80.0",
      "IB Diploma (international applicants): 29 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 13 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted)",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced; other assumed knowledge depends on the majors chosen",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Arts",
    slug: "sydney-arts",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Arts & Humanities",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$55,100 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$14,432. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Arts is a liberal studies degree in the humanities and social sciences, focused on analysis, independent thinking and evidence-based argument. After a core foundation unit, students take a major from the arts and social sciences pool, from languages and history to philosophy, politics and media, and can add a second major or minor from across the University. Domestic students apply through UAC (code 513200); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-arts.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Arts (BA)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 75.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 80.0",
      "IB Diploma (international applicants): 26 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 12 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 13",
      "Assumed knowledge (not a formal requirement): depends on the majors and units chosen",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Psychology",
    slug: "sydney-psychology",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Psychology",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$63,600 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$10,306. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's accredited Bachelor of Psychology covers how people think, feel and behave, including behavioural neuroscience, social and developmental psychology, personality, perception, intelligence and mental health. Students complete a psychology program with additional advanced psychology units, a junior mathematics unit and a minor from the shared pool. Graduates who meet the academic standards can apply for an honours year, the usual next step towards registration as a psychologist. Domestic students apply through UAC (code 513905); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-psychology.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Psychology (BPsych)",
    intake: "February (Semester 1), August (Semester 2)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 80.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 85.0",
      "IB Diploma (international applicants): 29 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 13 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 14",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced; other assumed knowledge depends on the units chosen",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Nursing (Advanced Studies)",
    slug: "sydney-nursing",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Nursing",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$51,700 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$4,738. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Nursing (Advanced Studies) prepares students to work as registered nurses, with an added focus on leadership, critical decision-making and global health. Studies cover anatomy and pathophysiology, pharmacology, clinical and communication skills, the social determinants of health and health systems, and students complete 920 hours of clinical placements in public and private settings across Sydney and regional NSW. The course is accredited by ANMAC, and graduates can apply for registration with the Nursing and Midwifery Board of Australia. Domestic students apply through UAC (code 513735); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-nursing-advanced-studies0.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Nursing (Advanced Studies)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) entry; applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 80.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 84.0",
      "IB Diploma (international applicants): 29 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 13 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 14",
      "English language (set by the Nursing and Midwifery Board of Australia): IELTS Academic 7.0 overall with at least 7.0 in each component; PTE Academic 72 overall with at least 72 in listening, reading and writing and 76 in speaking; or TOEFL iBT 96 overall with at least 23 in listening and reading, 25 in writing and 24 in speaking (for tests taken from 23 April 2026). Tests must be taken within two years of the course start; applicants who studied in English in a recognised country can instead declare this",
      "Direct applicants must submit the School's English language declaration form with their application",
      "Registered nurses are not eligible for this course",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Pharmacy (Honours) and Master of Pharmacy Practice",
    slug: "sydney-pharmacy",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Pharmacy",
    duration: "5 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students (48 credit points per full-time year): A$63,600 for the first full-time year of the bachelor's component; A$63,600 for the first full-time year of the master's component. The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amounts were A$9,510 for the bachelor's component and A$9,537 for the master's component. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Pharmacy (Honours) and Master of Pharmacy Practice is a five-year integrated degree covering how medicines are developed and how they act in the body, together with clinical decision making, communication and patient care. Placements in community and hospital pharmacies start in first year, honours research is completed in year four, and the master's year builds in the Pharmacy Board of Australia's intern training. Graduates can apply for general registration as a pharmacist after passing the Board's registration exam. Domestic students apply through UAC (code 513761); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-pharmacy-honours-and-master-of-pharmacy-practice.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Pharmacy (Honours) and Master of Pharmacy Practice (BPharm(Hons)/MPharmPrac)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) entry; applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 85.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 90.0",
      "IB Diploma (international applicants): 31 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 14 from three or four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 15 from three or 16 from four",
      "Prerequisite: HSC Mathematics Advanced at Band 4 or an equivalent result (the University lists pathway options for applicants who don't meet it)",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced or higher, Biology and Chemistry (Physics is also recommended)",
      "Students must register as a student with AHPRA on enrolment and complete clinical placement checks",
      "English language (where required): IELTS Academic 6.5 overall and 6.0 in each band; TOEFL iBT 85 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 64 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Design in Architecture",
    slug: "sydney-architecture",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Architecture",
    duration: "3 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$55,100 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$9,396. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Design in Architecture is the first step towards becoming a registered architect. Each semester is built around a design studio, supported by core units in architectural history and theory, communication, building technology and art workshops, with electives in architecture, design, sustainability, urban design and planning. Teaching combines studio work, lectures, seminars and field trips, and graduates usually continue to a Master of Architecture to qualify for registration. Domestic students apply through UAC (code 513115); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-design-in-architecture.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Design in Architecture (BDesArch)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) entry; applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 90.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 95.0",
      "IB Diploma (international applicants): 34 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 15 from three A2 subjects or 16 from four (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 16 from three or 18 from four",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced and English Advanced",
      "English language (where required): IELTS Academic 7.0 overall and 6.0 in each band; TOEFL iBT 96 overall including 17 in Reading, Listening and Speaking and 19 in Writing; or PTE Academic 72 overall and 60 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Applied Science (Physiotherapy)",
    slug: "sydney-physiotherapy",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Health Sciences",
    duration: "4 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$69,200 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$9,897. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Applied Science (Physiotherapy) trains students to assess, diagnose and treat movement problems caused by joint, muscle and nerve disorders, and to help people prevent injury and stay healthy. Alongside physiotherapy units, students study exercise and sport science, behavioural and community health and biomedical sciences, and complete five clinical placements totalling 1,040 hours, at least one of them in a rural or regional area. The course is accredited by the Australian Physiotherapy Council, and graduates can apply for registration with the Physiotherapy Board of Australia. Domestic students apply through UAC (code 513640); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-applied-science-physiotherapy.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Applied Science (Physiotherapy)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) entry; applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 97.5 for international applicants; domestic selection rank (ATAR plus adjustment factors) 99.5",
      "IB Diploma (international applicants): 40 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 17 from three A2 subjects or 20 from four (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 18 from three or 23 from four",
      "Assumed knowledge (not a formal requirement): Chemistry and Physics (Mathematics Advanced is also recommended)",
      "Applicants should read the course's inherent requirements before applying",
      "English language (where required): IELTS Academic 7.0 overall and 7.0 in each band; TOEFL iBT 96 overall including 23 in Reading, Listening and Speaking and 25 in Writing; or PTE Academic 72 overall and 72 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Commerce and Laws",
    slug: "sydney-commerce-law",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Law",
    duration: "5 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative Year 1 tuition: A$59,100 for international students (full-time, 48 credit points). The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amount was A$16,363. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Commerce and Bachelor of Laws is a five-year double degree for students who want to practise law or take legal knowledge into business. From 2027 students take the new Commerce core (professional skills, accounting and finance, problem solving and data analytics) and a Commerce major alongside foundational law units, then complete the Bachelor of Laws through Sydney Law School's core and elective units, with an optional honours thesis in the final year. Domestic students apply through UAC (code 513810); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-commerce-and-bachelor-of-laws0.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Commerce and Bachelor of Laws (BCom/LLB)",
    intake: "February (Semester 1); August (Semester 2) for international students only",
    applicationDeadline: "International applicants (direct to the University): 1 December 2026 for Semester 1 (February 2027) or 29 May 2027 for Semester 2 (August 2027); applications may close earlier once places fill. Students currently completing an Australian Year 12 (in or outside Australia) or an IB Diploma in Australia apply through UAC instead (UAC's final closing date for Semester 1 2027 courses is 5 February 2027; apply by 26 November 2026 for the main 23 December offer round). Domestic applicants apply through UAC.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 96.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 99.5",
      "IB Diploma (international applicants): 38 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 17 from three A2 subjects or 19 from four (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 18 from three or 23 from four",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Standard or higher, depending on the Commerce major chosen",
      "English language (where required): IELTS Academic 7.5 overall and 7.0 in each band; TOEFL iBT 105 overall including 23 in Reading, Listening and Speaking and 25 in Writing; or PTE Academic 78 overall and 72 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Science and Doctor of Medicine",
    slug: "sydney-science-medicine",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Medicine",
    duration: "7 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students (48 credit points per full-time year): A$63,600 for the first full-time year of the Bachelor of Science component; A$100,500 for the first full-time year of the Doctor of Medicine component. The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amounts were A$10,211 for the Bachelor of Science component and A$13,240 for the Doctor of Medicine component. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's Bachelor of Science and Doctor of Medicine is a double degree for school leavers: students first complete a three-year science degree with a major and a minor, then move into Sydney's four-year graduate-level Doctor of Medicine, covering clinical sciences and skills, diagnostics and therapy, population and Indigenous health, ethics and research, with at least 2,310 hours of clinical experience. Places are very limited (about 30 domestic and 10 international each year across this course and the Arts/MD version), and progression to the MD depends on meeting the undergraduate requirements. Domestic students apply through UAC (code 513720); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-science-and-doctor-of-medicine.html",
    campus: "Camperdown/Darlington",
    programType: "Full-time",
    degree: "Bachelor of Science and Doctor of Medicine (BSc/MD)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants: 31 October 2026 for direct applications to the University (2027 intake). Domestic applicants apply through UAC and must add the course as a preference by 13 December 2026 for Assessment Day 1 or 10 January 2027 for Assessment Day 2. The University says 2027 dates may change.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 99.95 for international applicants; domestic selection rank (ATAR plus adjustment factors) 99.95",
      "IB Diploma (international applicants): 45 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 24 from four A2 subjects (A*=6, A=5, B=4, C=3, D=2, E=1; three-subject results are not accepted for this course)",
      "Selection also requires satisfactory performance in an online assessment with a group interview and a written assessment; international applicants' assessments are scheduled for 23 September and 2 December 2026, and domestic Assessment Days for 18 December 2026 and 18 January 2027",
      "Only school leavers are eligible; applicants who have started a bachelor's degree cannot apply",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced, Biology and Chemistry; other assumed knowledge depends on the units chosen",
      "English language (where required): IELTS Academic 7.0 overall and 7.0 in each band; TOEFL iBT 96 overall including 23 in Reading, Listening and Speaking and 25 in Writing; or PTE Academic 72 overall and 72 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },

  {
    name: "Veterinary Biology and Doctor of Veterinary Medicine",
    slug: "sydney-veterinary-medicine",
    level: "Bachelor",
    universitySlug: "university-of-sydney",
    universityName: "University of Sydney",
    country: "Australia",
    field: "Veterinary Medicine",
    duration: "6 years full-time",
    language: "English",
    tuitionNote:
      "2027 indicative tuition for international students (48 credit points per full-time year): A$69,200 for the first full-time year of the Bachelor of Veterinary Biology component; A$84,000 for the first full-time year of the Doctor of Veterinary Medicine component. The 2027 Commonwealth Supported Place (CSP) student contribution for domestic students is not yet published on the course page; the 2026 indicative CSP amounts were A$10,424 for the Bachelor of Veterinary Biology component and A$13,237 for the Doctor of Veterinary Medicine component. Fees are reviewed and rise each year of study.",
    description:
      "Sydney's six-year Bachelor of Veterinary Biology and Doctor of Veterinary Medicine starts with two years of biomedical and animal sciences, then moves into the Doctor of Veterinary Medicine with case-based tutorials, laboratory and practical classes, clinical skills and animal handling. The final year is a series of intern rotations at the University's veterinary teaching hospitals and partner practices, covering small animal, rural mixed and government practice. Students must be vaccinated against Q fever before the course starts. Domestic students apply through UAC (code 513970); international students apply directly to the University.",
    officialProgramUrl:
      "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-veterinary-biology-and-doctor-of-veterinary-medicine0.html",
    campus: "Camperdown/Darlington and Camden",
    programType: "Full-time",
    degree: "Bachelor of Veterinary Biology and Doctor of Veterinary Medicine (BVetBiol/DVM)",
    intake: "February (Semester 1)",
    applicationDeadline: "International applicants apply directly to the University; applications are ranked in four rounds (8 June, 31 August, 2 November and 14 December 2026) and offers stop once places are filled. The Commitment to Veterinary Science form is due by 30 November 2026. Domestic applicants apply through UAC and upload the form by 3 December 2026.",
    admissionRequirements: [
      "Indicative 2027 entry score (not guaranteed): ATAR 94.0 for international applicants; domestic selection rank (ATAR plus adjustment factors) 98.0",
      "IB Diploma (international applicants): 37 points; domestic IB applicants are assessed using UAC's IB conversion",
      "GCE A levels: aggregate of 16 from three A2 subjects or 17 from four (A*=6, A=5, B=4, C=3, D=2, E=1; AS subjects not counted); domestic applicants: 17 from three or 21 from four",
      "Applicants must sit the Casper situational judgement test (Acuity Insights, test CSP-10400); 2026 test dates run from April to 19 November 2026",
      "Applicants must submit a Commitment to Veterinary Science form (international direct applicants by 30 November 2026; UAC applicants by 3 December 2026)",
      "Inherent requirements include the physical ability to handle large and small animals and Q fever vaccination",
      "Assumed knowledge (not a formal requirement): HSC Mathematics Advanced or higher, Biology and Chemistry (Physics is also recommended)",
      "English language (where required): IELTS Academic 7.0 overall and 7.0 in each band; TOEFL iBT 96 overall including 23 in Reading, Listening and Speaking and 25 in Writing; or PTE Academic 72 overall and 72 in each band",
      "Other Australian and overseas qualifications (including SAT/ACT, AP and national school-leaving certificates) are listed with their entry scores on the course page",
    ],
  },
];
