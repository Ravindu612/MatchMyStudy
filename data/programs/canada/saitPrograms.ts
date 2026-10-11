import type { Program } from "../../programs";

// SAIT (Southern Alberta Institute of Technology) full-time programs in Calgary that SAIT lists as accepting international applicants and PGWP eligible.
// Sourced from SAIT program pages (overview, admission requirements and 2026/27 domestic/international cost estimates), the 2026/27 academic calendar (start terms), and SAIT's apply, English proficiency, international fee table and international bundle pages, checked October 11, 2026.

export const saitPrograms: Program[] = [
  {
    name: "Software Development",
    slug: "sait-software-development",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Software Development",
    duration: "2 years (4 semesters, plus an optional co-op work term after year 1)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 25,824.50 (tuition 24,060 + fees 1,764.50); year 2 CAD 25,824.50; program total CAD 51,649. Canadian students: year 1 CAD 11,574.50; year 2 CAD 11,574.50; total CAD 23,149. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000 per year, and students need their own laptop meeting SAIT's power-user specs.",
    description:
      "A two-year SAIT diploma in Calgary that trains full-stack developers from scratch, with no coding background needed. Students build web, mobile and desktop applications, learn databases, object-oriented programming, UX, cloud computing, software testing and secure coding, and finish with a capstone project for real stakeholders.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    intake: "September, January, May",
    campus: "Calgary (Main Campus); also offered online",
    programType: "Full-time, optional co-op work term",
    degree: "SAIT Software Development Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 50% in Math 30-1 or 60% in Math 30-2, and 55% in English Language Arts 30-1 or 60% in ELA 30-2 (Alberta grade 12), or equivalents",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists fall, winter and spring starts. International students can also take this diploma as part of a bundle with SAIT's Bachelor of Technology (Software Development) for years three and four",
      "Optional paid co-op: students can complete a full-time paid work term between year one and year two",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 11.0201), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change. SAIT's academic calendar adds that students must take on-campus classes or complete more than half of their courses on campus; international students taking all classes online won't be eligible",
    ],
  },

  {
    name: "Cyber Security",
    slug: "sait-cyber-security",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Cybersecurity",
    duration: "2 years (4 semesters, plus an optional co-op work term after year 1)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 31,854.50 (tuition 30,090 + fees 1,764.50); year 2 CAD 31,854.50; program total CAD 63,709. Canadian students: year 1 CAD 16,344.50; year 2 CAD 16,344.50; total CAD 32,689. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500 per year; students also need their own power-user laptop, lab kits (electronics and sensor kits, a wireless access point) and a cloud services subscription that SAIT estimates at CAD 800-1,200 per year.",
    description:
      "A new two-year SAIT diploma in Calgary covering how to defend networks, systems and data. Students learn networking, operating systems, programming and tool building, offensive and defensive security, risk assessment and incident response through guided labs, case studies and a capstone, and are prepared to sit CompTIA Security+.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/cyber-security",
    intake: "September, January",
    campus: "Calgary (Main Campus and Downtown Campus)",
    programType: "Full-time, optional co-op work term",
    degree: "SAIT Cyber Security Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 65% in Math 30-1 or 70% in Math 30-2, and 60% in English Language Arts 30-1 or 65% in ELA 30-2 (Alberta grade 12), or equivalents",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists fall and winter starts. International students can also take it as part of a bundle with SAIT's Bachelor of Technology (Cyber Security) for years three and four",
      "Optional co-op: a co-op work term is available between year one and year two, and year two includes a capstone project",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 11.1003), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Information Technology Services",
    slug: "sait-information-technology-services",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Information Technology",
    duration: "2 years (4 semesters, plus an optional work term after year 1)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 26,154.50 (tuition 24,390 + fees 1,764.50); year 2 CAD 26,154.50; program total CAD 52,309. Canadian students: year 1 CAD 11,574.50; year 2 CAD 11,574.50; total CAD 23,149. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000 per year, and students need their own laptop meeting SAIT's power-user specs.",
    description:
      "A two-year SAIT diploma in Calgary for IT support and systems careers. Students learn networking and troubleshooting, operating systems, cloud services, scripting and automation, IT security and client service, then tackle a real-world IT capstone, leading to roles such as service desk technician or junior network analyst.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/information-technology-services",
    campus: "Calgary (Main Campus), blended with online courses",
    programType: "Full-time, optional work term",
    degree: "SAIT Information Technology Services Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 50% in Math 30-1 or 60% in Math 30-2, and 55% in English Language Arts 30-1 or 60% in ELA 30-2 (Alberta grade 12), or equivalents",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: neither the program page nor the academic calendar lists specific start terms; check SAIT's international availability tool",
      "Optional work term: students can take a work term after year one; year two includes a capstone project",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 11.1002), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change. SAIT's academic calendar adds that students must take on-campus classes or complete more than half of their courses on campus; international students taking all classes online won't be eligible",
    ],
  },

  {
    name: "Business Administration – Supply Chain Management",
    slug: "sait-business-administration-supply-chain-management",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Supply Chain Management",
    duration: "2 years (4 semesters)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 22,164.50 (tuition 20,400 + fees 1,764.50); year 2 CAD 22,164.50; program total CAD 44,329. Canadian students: year 1 CAD 7,914.50; year 2 CAD 7,914.50; total CAD 15,829. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500 per year, plus a laptop meeting SAIT's standard specs.",
    description:
      "A two-year SAIT business diploma in Calgary with a supply chain major. Alongside core business courses, students study procurement, logistics, materials management, operations planning, quality and performance analytics, with an optional capstone solving a challenge for a local organization. Graduates can move on toward designations such as SCMP or P.Log.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/business-administration-supply-chain-management",
    intake: "September, January, May",
    campus: "Calgary (Main Campus); also offered online",
    degree: "SAIT Business Administration Diploma (Supply Chain Management major)",
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 50% in Math 30-1 or Math 30-2, and 50% in English Language Arts 30-1 or 60% in ELA 30-2 (Alberta grade 12), or equivalents",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists fall, winter and spring terms",
      "Pathway: graduates with a cumulative GPA of at least 2.3 (C+) may be eligible to continue into SAIT's Bachelor of Business Administration",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 52.0203), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change. SAIT's academic calendar adds that students must take on-campus classes or complete more than half of their courses on campus; international students taking all classes online won't be eligible",
    ],
  },

  {
    name: "Civil Engineering Technology – Construction Management",
    slug: "sait-civil-engineering-technology-construction-management",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Civil Engineering",
    duration: "2 years (fall start: 4 semesters with a summer break; winter start: 4 back-to-back semesters)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 22,428.50 (tuition 20,664 + fees 1,764.50); year 2 CAD 21,444.50 (tuition 19,680 + fees 1,764.50); program total CAD 43,873. Canadian students: year 1 CAD 8,222; year 2 CAD 7,914.50; total CAD 16,136.50. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500 per year; students also need a workstation-grade laptop and CSA-approved steel-toe boots, a hard hat and safety glasses.",
    description:
      "A two-year accredited SAIT diploma in Calgary for building and infrastructure careers. Year one covers building science, 2D and 3D drafting, structures and geotechnics; the construction management major then adds estimating, scheduling and project control, ending with a capstone presented to industry guests.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/civil-engineering-technology-construction-management",
    intake: "September, January",
    campus: "Calgary (Main Campus)",
    degree: "SAIT Civil Engineering Technology Diploma (Construction Management major)",
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 60% in Math 30-1, 60% in English Language Arts 30-1 or 75% in ELA 30-2, and 60% in Science 30 or Physics 20 (Alberta grade 12), or equivalents",
      "Major selection: students choose construction management, municipal or virtual design and construction before year two; if a major is oversubscribed, places go by first-year GPA",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Accreditation: nationally accredited at the technologist level by Technology Accreditation Canada; graduates can join ASET, and the Canadian Institute of Quantity Surveyors recognizes the program for estimator training",
      "Pathway: graduates with a cumulative GPA of at least 2.3 (C+) can apply to SAIT's Bachelor of Science in Construction Project Management",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 15.0201), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Mechanical Engineering Technology",
    slug: "sait-mechanical-engineering-technology",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Mechanical Engineering",
    duration: "2 years (4 semesters)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 21,444.50 (tuition 19,680 + fees 1,764.50); year 2 CAD 21,444.50; program total CAD 42,889. Canadian students: year 1 CAD 8,694.50; year 2 CAD 8,694.50; total CAD 17,389. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,500 per year.",
    description:
      "A two-year accredited SAIT diploma in Calgary grounded in engineering math, science and CAD. After year one, students specialize in design and analysis, design and development (prototyping), or design and automation (PLCs and robotics), and complete a team capstone on a real-world problem, sometimes with an industry partner.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/mechanical-engineering-technology",
    intake: "September, January",
    campus: "Calgary (Main Campus)",
    degree: "SAIT Mechanical Engineering Technology Diploma",
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 60% in Math 30-1 or 75% in Math 30-2, 60% in English Language Arts 30-1 or ELA 30-2, and 60% in both Physics 20 and Chemistry 20 or 60% in Science 30 (Alberta grade 12), or equivalents",
      "Specialization: chosen after year one; if one is oversubscribed, places go by grades in relevant courses",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Accreditation: nationally accredited by Technology Accreditation Canada; graduates can apply for the Certified Engineering Technologist (CET) designation after two years of relevant work experience",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 15.0805), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Electrical Engineering Technology",
    slug: "sait-electrical-engineering-technology",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Electrical Engineering",
    duration: "2 years full-time (4 semesters); a 3-year evening and weekend blended option also exists",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 21,960.50 (tuition 20,196 + fees 1,764.50); year 2 CAD 22,878.50 (tuition 21,114 + fees 1,764.50); program total CAD 44,839. Canadian students: year 1 CAD 8,694.50; year 2 CAD 9,009.50; total CAD 17,704. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000 in year one and CAD 500 in year two.",
    description:
      "A two-year accredited SAIT diploma in Calgary covering power generation, transmission and distribution, renewables integration, circuit design, automation and control, and electrical codes and standards. Students work in hands-on labs and finish with a team capstone on an industry problem, mentored by an instructor and an industry advisor.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/electrical-engineering-technology",
    campus: "Calgary (Main Campus); evening/weekend stream is blended",
    degree: "SAIT Electrical Engineering Technology Diploma",
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 60% in Math 30-1 or 75% in Math 30-2, 60% in English Language Arts 30-1 or 75% in ELA 30-2, and 60% in Physics 20 (Alberta grade 12), or equivalents",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's calendar refers applicants to sait.ca for upcoming intakes; the evening and weekend blended stream starts each September. Check SAIT's international availability tool for the full-time day stream",
      "Accreditation: nationally accredited by Technology Accreditation Canada; graduates can join ASET",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 15.0303), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change. SAIT's academic calendar adds that students must take on-campus classes or complete more than half of their courses on campus; international students taking all classes online won't be eligible",
    ],
  },

  {
    name: "Culinary Arts",
    slug: "sait-culinary-arts",
    level: "Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Culinary Arts",
    duration: "2 years (4 semesters, plus a paid internship of at least 320 hours between years)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 29,534.50 (tuition 27,525 + fees 2,009.50); year 2 CAD 28,376.50 (tuition 26,424 + fees 1,952.50); program total CAD 57,911. Canadian students: year 1 CAD 10,484.50; year 2 CAD 10,145.50; total CAD 20,630. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Fees include a mandatory CAD 188 per year uniform and apron laundry fee. Books and supplies cost about CAD 900-1,100 (bought in the first week), plus a professional knife kit (about CAD 500), the required chef's uniform and a laptop.",
    description:
      "A two-year SAIT diploma in Calgary taught mostly in professional kitchens by expert chefs. Students learn foundational and global cooking, patisserie, garde manger and kitchen management, serve guests in SAIT's own restaurants such as Highwood Kitchen + Bar, and complete a paid industry internship. Graduates can work toward Red Seal certification.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/diplomas/culinary-arts",
    intake: "September, January",
    campus: "Calgary (Main Campus)",
    programType: "Full-time, includes a paid internship",
    degree: "SAIT Culinary Arts Diploma",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: 50% in English Language Arts 10-1, ELA 10-2 or Humanities 10, and 50% in Math 10C or Math 10-3 (Alberta grade 10), or equivalents",
      "Paid internship: at least 320 hours in an approved kitchen (hotel, restaurant or catering) between year one and year two; proof of the work experience is required to graduate",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 12.0500), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Data Analytics",
    slug: "sait-data-analytics",
    level: "Graduate Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Data Analytics",
    duration: "2 semesters full-time (one year); part-time evening online option over 3 semesters",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 20,724.50 (tuition 18,960 + fees 1,764.50); program total CAD 20,724.50. Canadian students: year 1 CAD 15,372.50; total CAD 15,372.50. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500.",
    description:
      "A one-year SAIT post-diploma certificate in Calgary for graduates who want to move into data work. It covers turning raw data into insights, visualization and storytelling, data mining and predictive analytics, industry analytics tools and data ethics and security, ending with a capstone business case for an industry partner.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/certificates/data-analytics",
    campus: "Calgary (Main Campus); part-time stream online",
    degree: "SAIT Post-Diploma Certificate in Data Analytics",
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: a degree or diploma from a recognized university, institute or college; a mix of education and work experience may be considered with the Academic Chair's approval",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: the program page and calendar don't list start terms. SAIT's international bundle page offers it in January 2027, May 2027 and Fall 2027 bundles (Data Analytics followed by Integrated Artificial Intelligence, or Object-Oriented Software Development followed by Data Analytics)",
      "PGWP note: international students should take the full-time on-campus stream; SAIT's calendar says students attending all classes online aren't PGWP eligible",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 30.7101), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Integrated Artificial Intelligence",
    slug: "sait-integrated-artificial-intelligence",
    level: "Graduate Diploma",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Artificial Intelligence",
    duration: "1 year (2 semesters, plus an optional co-op work term)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 24,204.50 (tuition 22,440 + fees 1,764.50); program total CAD 24,204.50. Canadian students: year 1 CAD 19,764.50; total CAD 19,764.50. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,500.",
    description:
      "A one-year SAIT post-diploma certificate in Calgary on putting AI to work. Students learn ethical AI design, data management, and building and deploying AI solutions for sectors such as healthcare, finance and energy, plus AI project leadership and stakeholder communication, with a capstone on a real AI challenge and an optional co-op.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/certificates/integrated-artificial-intelligence",
    intake: "September, January, May",
    campus: "Calgary (Main Campus)",
    programType: "Full-time, optional co-op work term",
    degree: "SAIT Post-Diploma Certificate in Integrated Artificial Intelligence",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: a diploma or degree in information technology, computer science, data analytics or software development from an accredited institution, with a cumulative GPA of at least 2.3 (C+); relevant work experience combined with education may be considered by the Academic Chair",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists fall, winter and spring starts; international students can also take it after Data Analytics as a bundle",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 11.0102), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Bachelor of Business Administration – Accounting",
    slug: "sait-bachelor-of-business-administration-accounting",
    level: "Bachelor",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Accounting",
    duration: "4 years (8 semesters, 120 credits)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 23,484.50 (tuition 21,720 + fees 1,764.50); year 2 CAD 23,484.50; year 3 CAD 23,484.50; year 4 CAD 23,484.50; program total CAD 93,938. Canadian students: year 1 CAD 9,384.50; year 2 CAD 9,384.50; year 3 CAD 9,384.50; year 4 CAD 9,384.50; total CAD 37,538. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500 per year.",
    description:
      "A four-year SAIT business degree in Calgary with an accounting major accredited by CPA. Students cover financial and management accounting, tax, finance, financial reporting, information systems and ethics, with an optional construction or energy minor and a final-year practicum or capstone, and graduate ready for the CPA program.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/degrees/bachelor-of-business-administration-accounting",
    intake: "September",
    campus: "Calgary (Main Campus)",
    programType: "Full-time; final-year practicum or capstone",
    degree: "SAIT Bachelor of Business Administration (Accounting major)",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic (option one): a 65% average across English 30-1 (at least 60%), Math 30-1 (at least 60%) or Math 30-2 (at least 70%), two academic grade 12 courses and one more academic or arts/PE course, or equivalents",
      "Other routes: a SAIT Business Administration diploma or Bachelor of Applied Business Administration, or any two-year diploma or bachelor's degree, with a cumulative GPA of at least 2.3 (C+) (plus English 30-1 and Math 30-1 or 30-2 for the general diploma/degree route). SAIT Business Administration – Accounting graduates may enter year three",
      "Major selection: the first semester is common to all BBA majors, and students declare the accounting major in semester two through competitive screening",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists a fall start, with advanced-standing entry also available",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 52.0301), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Bachelor of Business Administration – Management",
    slug: "sait-bachelor-of-business-administration-management",
    level: "Bachelor",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Business Management",
    duration: "4 years (8 semesters, 120 credits)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 23,484.50 (tuition 21,720 + fees 1,764.50); year 2 CAD 23,484.50; year 3 CAD 23,484.50; year 4 CAD 23,484.50; program total CAD 93,938. Canadian students: year 1 CAD 9,384.50; year 2 CAD 9,384.50; year 3 CAD 9,384.50; year 4 CAD 9,384.50; total CAD 37,538. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500 per year.",
    description:
      "A four-year SAIT business degree in Calgary with a management major. Students build skills in project management, finance and accounting, business law, marketing, HR and operations, and strategy, with an optional construction or energy minor and a fourth-year practicum or capstone. It prepares graduates for the CIM designation.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/degrees/bachelor-of-business-administration-management",
    intake: "September",
    campus: "Calgary (Main Campus)",
    programType: "Full-time; final-year practicum or capstone",
    degree: "SAIT Bachelor of Business Administration (Management major)",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic (option one): a 65% average across English 30-1 (at least 60%), Math 30-1 (at least 60%) or Math 30-2 (at least 70%), two academic grade 12 courses and one more academic or arts/PE course, or equivalents",
      "Other routes: a SAIT Business Administration diploma or Bachelor of Applied Business Administration, or any two-year diploma or bachelor's degree, with a cumulative GPA of at least 2.3 (C+) (plus English 30-1 and Math 30-1 or 30-2 for the general diploma/degree route). SAIT Business Administration – Management graduates may enter year three",
      "Major selection: the first semester is common to all BBA majors, and students declare the management major in semester two through competitive screening",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists a fall start, with advanced-standing entry also available",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 52.0201), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Bachelor of Technology – Software Development",
    slug: "sait-bachelor-of-technology-software-development",
    level: "Bachelor",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Software Development",
    duration: "2 years after a related diploma (4 semesters, 60 credits), plus an optional 10-12 week co-op",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 29,634.50 (tuition 27,870 + fees 1,764.50); year 2 CAD 29,634.50; program total CAD 59,269. Canadian students: year 1 CAD 12,834.50; year 2 CAD 12,834.50; total CAD 25,669. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000 per year.",
    description:
      "A new two-year SAIT degree-completion program in Calgary for software diploma graduates. Students apply advanced design patterns, algorithms and data structures across web development, databases, testing and security, building full-stack solutions for real business needs, with an optional co-op between the two years.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/degrees/bachelor-of-technology-software-development",
    intake: "September, January",
    campus: "Calgary (Main Campus)",
    programType: "Full-time, optional co-op work term",
    degree: "SAIT Bachelor of Technology (Software Development major)",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: a SAIT information technology diploma (such as Software Development) or an equivalent diploma from an accredited institution, with a cumulative GPA of at least 2.3 (C+)",
      "Optional co-op: a 10-12 week full-time placement between the two years; students find their own placement with support, and it may involve relocating or travel",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists fall and winter terms. International students can enter directly or through a bundle after SAIT's Software Development diploma",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 11.0201), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Bachelor of Science in Construction Project Management",
    slug: "sait-bachelor-of-science-construction-project-management",
    level: "Bachelor",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Construction Management",
    duration: "4 years (123 credits, including a 15-week internship)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 24,204.50 (tuition 22,440 + fees 1,764.50); year 2 CAD 24,204.50; year 3 CAD 26,699 (2.5 semesters, including a part-time internship term); year 4 CAD 24,204.50; program total CAD 99,312.50. Canadian students: year 1 CAD 9,384.50; year 2 CAD 9,384.50; year 3 CAD 10,397; year 4 CAD 9,384.50; total CAD 38,550.50. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000 per year.",
    description:
      "A four-year SAIT science degree in Calgary, described by SAIT as the only one of its kind in Canada. It blends construction technology, estimating and cost control, scheduling, codes and soils with project management practice, includes a 15-week industry internship and capstone, and is accredited by CIQS and PMI-GAC.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/degrees/bachelor-of-science-construction-project-management",
    intake: "September, January",
    campus: "Calgary (Main Campus)",
    programType: "Full-time, includes a 15-week internship",
    degree: "SAIT Bachelor of Science in Construction Project Management",
    workIntegrated: true,
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic (option one): a 70% average across Math 30-1, English Language Arts 30-1, two of Math 31, Biology 30, Chemistry 30, Physics 30 or Science 30, and one more grade 12 course, or equivalents",
      "Option two: a two-year diploma or a bachelor's degree with a cumulative GPA of at least 2.3 (C+), plus English 30-1 and Math 30-1 or 30-2",
      "Internship: a required 15-week internship managing construction work, with daily logs, monthly reports and a final report signed by the industry supervisor",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists fall and winter starts",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 52.2002), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

  {
    name: "Bachelor of Hospitality and Tourism Management",
    slug: "sait-bachelor-of-hospitality-and-tourism-management",
    level: "Bachelor",
    universitySlug: "sait",
    universityName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
    field: "Hospitality and Tourism Management",
    duration: "2 years after a hospitality diploma (4 semesters, 60 credits)",
    language: "English",
    tuitionNote:
      "SAIT 2026/27 estimate for international students starting in 2026/27 (program page, tuition plus additional fees at the suggested full-time course load): year 1 CAD 23,664.50 (tuition 21,900 + fees 1,764.50); year 2 CAD 23,664.50; program total CAD 47,329. Canadian students: year 1 CAD 9,384.50; year 2 CAD 9,384.50; total CAD 18,769. Additional fees are SAIT's mandatory student fees (technology, learning support, wellness, career readiness, athletics and recreation, and the UPass transit pass) plus Saitsa student association, health and dental plan fees. SAIT says the program total on an international student's admission letter is a maximum tuition guarantee for the program, so it won't rise in later years. Books and supplies are about CAD 1,000-1,500 per year.",
    description:
      "A two-year SAIT degree-completion program in Calgary for hospitality diploma graduates, part of a two-plus-two model. Students study leadership, strategy and project management, process improvement, sales and marketing, sustainability and change management, finishing with a business plan built with industry partners.",
    officialProgramUrl:
      "https://www.sait.ca/programs-and-courses/degrees/bachelor-of-hospitality-and-tourism-management",
    intake: "September",
    campus: "Calgary (Main Campus)",
    degree: "SAIT Bachelor of Hospitality and Tourism Management",
    applicationDeadline: "International applicants (SAIT apply page, checked October 11, 2026): Winter 2027 (classes start January 6, 2027) applications close October 30, 2026; Spring 2027 (May 3, 2027) close February 5, 2027; Fall 2027 (September 1, 2027) opened August 4, 2026 with the closing date still to be announced; Winter 2028 opens December 9, 2026. Not every program starts every term and programs can fill or close early, so check SAIT's Available Seats for International Applicants tool before applying. Canadian applicants: Fall 2027 applications close June 30, 2027",
    admissionRequirements: [
      "Apply: international applicants apply online through SAIT's Virtual Admissions System and pay a non-refundable CAD 175 application fee; one international application can list up to two programs (a first and a second choice). Applicants educated outside Canada must prove they meet the admission requirements with an international document assessment, and SAIT only assesses an application once every required document is in. Canadian applicants apply through ApplyAlberta (CAD 120 fee).",
      "Academic: a SAIT Hospitality and Tourism Management diploma or an equivalent diploma from an accredited institution with a cumulative GPA of at least 2.3 (C+), plus 50% in English 30-1 or 60% in English 30-2 (COMM 240 or COMN 220 can replace the English course) and 50% in Math 30-1 or 30-2, or equivalents",
      "English proficiency (SAIT English proficiency page, required of every applicant): IELTS Academic with 6.0 in each band; TOEFL iBT taken before January 21, 2026 with at least 20 in each section, or taken on or after January 21, 2026 with 4.5 overall and 4.5 in each section; PTE Academic 53; Duolingo 115 with no subscore below 95; CAEL 60 in each section; Cambridge B2 First, C1 Advanced or C2 Proficiency with 169 in each skill; plus other tests SAIT lists. Test scores must be from within one year of applying. SAIT also accepts, among other proof, at least three years of full-time English-taught study at an English-speaking secondary school, two years of English-taught post-secondary study at a recognized institution, a post-secondary English, literature or communications course passed with a C or better, SAIT's English Language Foundations program, or a recognized partner language-school pathway",
      "Intakes: SAIT's 2026/27 academic calendar lists a fall start. International students can also take it as years three and four of a Fall 2027 bundle after SAIT's Hospitality and Tourism Management diploma",
      "PGWP: SAIT's program page lists it as accepting international applicants and PGWP eligible (CIP 52.0901), saying it currently meets IRCC's field-of-study requirement. SAIT doesn't guarantee individual eligibility, and IRCC's rules can change",
    ],
  },

];
