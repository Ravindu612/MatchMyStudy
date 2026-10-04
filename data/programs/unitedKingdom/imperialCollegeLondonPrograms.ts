import type { Program } from "../../programs";

// Imperial College London undergraduate programmes (October 2027 entry).
// Sourced from imperial.ac.uk 2027 undergraduate course pages (key facts, entry requirements, admissions tests, fees, how to apply) and Imperial's English language requirements page (standard and higher levels).

export const imperialCollegeLondonPrograms: Program[] = [
  {
    name: "Computing",
    slug: "imperial-computing",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Computer Science",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's BEng Computing is the Department of Computing's general programme, covering how modern computer and communication systems work and how to build the next generation of applications. Year 1 combines computer systems, architecture, databases and programming practicals with discrete mathematics, logic, graphs and algorithms, calculus and linear algebra. Year 2 adds algorithm design, software engineering, models of computation, operating systems, networks, machine learning and a group project, and Year 3 pairs a substantial individual project with optional modules such as computer vision, robotics, security, deep learning and compilers. Entry is through UCAS (course code G400, institution code I50), and applicants must sit the TMUA.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/computing-beng/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Bachelor of Engineering (BEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A (three A levels) or A*AAA (four), including A* in Mathematics; Further Mathematics preferred; ICT, Business Studies, General Studies and Critical Thinking not accepted. Typical offer: A*A*A, or A*A*AA with four A levels",
      "IB Diploma: minimum 41 points including 7 in Higher Level Mathematics (Analysis and Approaches or Applications and Interpretation) and 7 in another relevant HL subject; typical offer 42 points",
      "TMUA (Test of Mathematics for University Admission) required for 2027 entry; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "Interviews are not standard but may be offered at the admissions tutors' discretion",
      "English language (Imperial standard level), if required: IELTS Academic 6.5 overall with at least 6.0 in every element (one sitting); TOEFL iBT 4.5 with at least 4.5 in every element (tests from 21 January 2026; earlier tests 92 overall with at least 20 in each); or PTE Academic 62 overall with at least 56 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Medicine",
    slug: "imperial-medicine",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Medicine",
    duration: "6 years (including an integrated BSc)",
    language: "English",
    tuitionNote:
      "2027 entry: £61,550 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's six-year MBBS/BSc is taught by one of the largest medical schools in Europe, with campuses across north and west London and a wide network of NHS partners. Phase 1 (Years 1-3) covers the body systems through case-based learning, with early clinical skills and patient contact in community settings; Phase 2 (Year 4) is a compulsory BSc with modules and a supervised research project; and Phase 3 (Years 5-6) is clinical training across the patient journey, ending with a Pre-Foundation Assistantship. Graduates receive both an MBBS and a BSc. Entry is through UCAS (course code A100, institution code I50) by 15 October; the UCAT is required and shortlisted applicants attend Multiple Mini Interviews.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/medicine/",
    campus: "London, South Kensington and Charing Cross, with clinical placements at partner NHS trusts",
    programType: "Full-time",
    degree: "Bachelor of Medicine and Bachelor of Surgery with Bachelor of Science (MBBS/BSc)",
    intake: "October",
    applicationDeadline: "15 October 2026, 18:00 UK time (UCAS deadline for medicine)",
    admissionRequirements: [
      "A levels: minimum and typical offer A*AA, including A* and A in Biology and Chemistry (A* in either) and A in a third subject, all in the same sitting (for contextual offers the A* can be in any subject); resits not accepted; General Studies and Critical Thinking not accepted",
      "IB Diploma: minimum 38 points including 6 in Higher Level Biology and Chemistry; typical offer 39 points with 6 and 7 in HL Biology and Chemistry",
      "UCAT must be taken in the year of application (2026 testing ran from 13 July to 24 September 2026); applications are first checked against the minimum academic requirements",
      "Shortlisted applicants are invited to Multiple Mini Interviews (MMIs) with academic staff and healthcare professionals",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "imperial-mechanical-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Mechanical Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's integrated MEng Mechanical Engineering builds the core of solid mechanics, thermofluids and mechatronics through lectures, labs and tutorials, alongside technical drawing, specialist design software and hands-on workshop sessions in manufacturing. Students develop design skills through a group project, can take modules from other engineering disciplines, and finish with a research project in an area of their choice, preparing them for advanced research or careers in sectors such as automotive and energy. Entry is through UCAS (course code H301, institution code I50), with the ESAT and an interview with academic staff.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/mechanical-engineering/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A or A*AAA, including A* in Mathematics and A* in Physics with three A levels (at least A in Physics with four), plus A in the other subject(s); typical offer A*A*A* (three A levels) or A*A*AA (four)",
      "IB Diploma: minimum 40 points including 6 in Higher Level Mathematics (Analysis and Approaches preferred) and 6 in HL Physics; typical offer 40 points with 7 in HL Mathematics and 7 in HL Physics",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Mathematics 2 and Physics modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "Shortlisted applicants have a 25-30 minute interview with a member of academic staff",
      "English language (Imperial standard level), if required: IELTS Academic 6.5 overall with at least 6.0 in every element (one sitting); TOEFL iBT 4.5 with at least 4.5 in every element (tests from 21 January 2026; earlier tests 92 overall with at least 20 in each); or PTE Academic 62 overall with at least 56 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Aeronautical Engineering",
    slug: "imperial-aeronautical-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "The MEng Aeronautical Engineering prepares students for careers in the aerospace industry through aerodynamics, lightweight structures, structural mechanics and flight mechanics. Year 2 adds mechatronics, propulsion and turbomachinery and a flight-testing course at Cranfield University's National Flying Laboratory Centre; Years 3 and 4 offer a wide range of specialist options, a design-team group project in Year 3 and an individual research project in Year 4. All students apply to this course (H401) and can later stay on it or transfer to the department's other aeronautics routes. Entry is through UCAS (institution code I50), with the ESAT and an interview for strong applicants.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/aeronautical-engineering/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A or A*AAA, including A* in Mathematics and A* in Physics with three A levels (at least A in Physics with four), plus A in the other subject(s); Further Mathematics recommended but not essential; typical offer A*A*A* (three A levels) or A*A*AA (four)",
      "IB Diploma: minimum 40 points including 7 in Higher Level Mathematics (Analysis and Approaches preferred) and 7 in HL Physics; typical offer 43-44 points",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Mathematics 2 and Physics modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "Applicants with excellent performance across the admissions stages are invited to a 25-30 minute interview with academic staff",
      "English language (Imperial standard level), if required: IELTS Academic 6.5 overall with at least 6.0 in every element (one sitting); TOEFL iBT 4.5 with at least 4.5 in every element (tests from 21 January 2026; earlier tests 92 overall with at least 20 in each); or PTE Academic 62 overall with at least 56 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Chemical Engineering",
    slug: "imperial-chemical-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's professionally accredited MEng Chemical Engineering applies science, engineering and business principles to problems in the process industries. Students build strong foundations in science, mathematics and engineering, study the environmental effects of chemical operations and safety engineering throughout, and choose specialist modules as the course progresses. The fourth, Master's-level year includes a substantial research project and a full chemical plant design, with lab work using facilities such as the Carbon Capture Pilot Plant. Entry is through UCAS (course code H801, institution code I50), with the ESAT and interview days as part of selection.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/chemical-engineering/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A, including A* in Chemistry, A* in Mathematics and A in one of Biology, Business Studies, Economics, Further Mathematics or Physics; typical offer A*A*A (three A levels) or A*A*AA (four)",
      "IB Diploma: minimum 40 points including 7 in Higher Level Mathematics, 7 in HL Chemistry and 6 in HL Biology, Business Management, Economics or Physics; typical offer 41 points",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Mathematics 2 and Chemistry modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "The department holds interview days as part of selection",
      "English language (Imperial standard level), if required: IELTS Academic 6.5 overall with at least 6.0 in every element (one sitting); TOEFL iBT 4.5 with at least 4.5 in every element (tests from 21 January 2026; earlier tests 92 overall with at least 20 in each); or PTE Academic 62 overall with at least 56 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Electrical and Electronic Engineering",
    slug: "imperial-electrical-electronic-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's MEng Electrical and Electronic Engineering covers everything that involves electrons and electromagnetism, from transistors, sensors and wireless communication to power systems, alongside the algorithms and software behind autonomous and robotic systems. The programme is research-led and flexible, letting students explore the breadth of the subject before choosing a route that suits their interests, including pathways with advanced software and computer systems, business studies or a year abroad. Entry is through UCAS (course code H604, institution code I50), with the ESAT and an online interview for shortlisted applicants.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/electrical-electronic-engineering-meng/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A or A*AAA, including A* in Mathematics and A* in Physics with three A levels (at least A with four), plus A in the other subject(s); Further Mathematics strongly encouraged; typical offer A*A*A (three A levels) or A*AAA (four)",
      "IB Diploma: minimum 40 points including 7 in Higher Level Mathematics (Analysis and Approaches preferred) and 7 in HL Physics; typical offer 41 points",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Mathematics 2 and Physics modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "Shortlisted applicants who perform well in the admissions test may be invited to a 25-30 minute online interview",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Civil Engineering",
    slug: "imperial-civil-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's MEng Civil Engineering covers how engineers shape the built and natural environment, from safe drinking water to earthquake-resistant structures and sustainable development. It builds a strong base in engineering science, including geotechnics, energy systems and professional practice, then lets students specialise or keep a broad programme. Fieldwork includes land surveying, a geology field course and Constructionarium, where teams build scaled-down versions of real structures. Graduates meet the educational requirements for professional registration as a step towards Chartered Engineer status. Entry is through UCAS (course code H201; H202 for the year-abroad route, institution code I50), and applicants must sit the ESAT.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/civil-engineering/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A or A*AAA, including A* in Mathematics and A* in Physics with three A levels (at least A with four), plus A in the other subject(s); typical offer A*A*A (three A levels) or A*AAA (four)",
      "IB Diploma: minimum 40 points including 7 in Higher Level Mathematics and 6 in HL Physics; typical offer 40 points",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Mathematics 2 and Physics modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "The year-abroad route (H202) also requires a modern foreign language, e.g. GCSE grade B/6",
      "English language (Imperial standard level), if required: IELTS Academic 6.5 overall with at least 6.0 in every element (one sitting); TOEFL iBT 4.5 with at least 4.5 in every element (tests from 21 January 2026; earlier tests 92 overall with at least 20 in each); or PTE Academic 62 overall with at least 56 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Mathematics",
    slug: "imperial-mathematics",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Mathematics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £44,850 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's BSc Mathematics covers algebra, analysis, probability and statistics along with the logical structure of arguments, mathematical modelling and the rigour of computation, building on A-level ideas while introducing new ways of thinking. Students choose from more than 50 specialist modules, many linked to the department's research. Entry is through UCAS (course code G100, institution code I50); applicants are expected to sit the TMUA, and Imperial does not normally interview.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/mathematics-bsc/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*A*A to A*A*AA, including A* in Mathematics and A* in Further Mathematics (special cases are made for schools that do not offer Further Mathematics); typical offer A*A*A (three A levels) or A*A*AA (four)",
      "IB Diploma: minimum 39 points including 7 in Higher Level Mathematics (Analysis and Approaches preferred) and 6 in another HL subject; typical offer 40 points",
      "TMUA (Test of Mathematics for University Admission) required for 2027 entry; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau); applicants unable to sit it will usually be asked to take at least one STEP paper",
      "Interviews are not part of the regular admissions process",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Physics",
    slug: "imperial-physics",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Physics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's accredited three-year BSc Physics shows how the laws of physics underpin science and engineering, building a thorough grounding in physics, mathematics and experimental methods through modules, lab work and projects covering mechanics, relativity and quantum physics. Students specialise through options in Year 3, using mathematical and computing tools on well-defined problems, and finish with an independent experimental investigation or a review of an area at the frontiers of physics. Entry is through UCAS (course code F300, institution code I50), and applicants must sit the ESAT.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/physics-bsc/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum and typical offer A*A*A, including A* in Mathematics and A* in Physics; Further Mathematics recommended but not essential",
      "IB Diploma: minimum 40 points including 7 in Higher Level Mathematics (Analysis and Approaches preferred), 7 in HL Physics and 6 in a third HL subject; typical offer 42 points",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Mathematics 2 and Physics modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "The department does not generally hold interviews",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Economics, Finance and Data Science",
    slug: "imperial-economics-finance-data-science",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Economics",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £44,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Taught at Imperial Business School, the BSc Economics, Finance and Data Science combines rigorous economics and finance with data science and its applications, on a curriculum designed with input from industry and public policy leaders. Students develop the analytical and coding skills needed by future economists, policy experts and business leaders, plus specialist modules in communication, teamwork and emotional intelligence. Entry is through UCAS (course code L1N3, institution code I50); applicants must sit the TMUA, and successful candidates are invited to a 20-30 minute online interview.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/economics-finance-data-science/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*AA including A* in Mathematics (Further Mathematics and/or Economics useful but not required); typical offer A*AA or A*A*A",
      "IB Diploma: minimum and typical offer 39 points, including 7 in Higher Level Mathematics and 6 in two further HL subjects",
      "TMUA (Test of Mathematics for University Admission) required for 2027 entry; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "Online interview (20-30 minutes) with an academic for shortlisted candidates",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Biomedical Engineering",
    slug: "imperial-biomedical-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's MEng Biomedical Engineering applies engineering principles and knowledge of the human body to projects that help people live longer and healthier lives, drawing on mechanics, nanotechnology, physiology, programming and design. The course is built around practical work in interdisciplinary facilities, and students can steer their studies towards biomedical, electrical, mechanical or computational bioengineering, leading to careers in medical device design, diagnostics, research or start-ups. Entry is through UCAS (course code BH9C, institution code I50); there is no admissions test, and shortlisted applicants may be invited to an online interview.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/biomedical-engineering/",
    campus: "London, South Kensington and White City",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum A*AA including A* in Mathematics, A in Physics and A in a third subject; typical offer A*AA to A*A*A",
      "IB Diploma: minimum 39 points including 6 in Higher Level Mathematics (Analysis and Approaches preferred), 6 in HL Physics and 6 in a third HL subject; typical offer 40 points",
      "No admissions test; shortlisted applicants may be invited to an online interview",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Design Engineering",
    slug: "imperial-design-engineering",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Engineering",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "The Dyson School of Design Engineering's MEng combines traditional engineering with modern design tools and mindsets, covering computer-aided engineering, rapid prototyping, human-centred design, systems thinking and sustainability. The first two years cover design principles, mathematics, electronics, mechatronics and data science through team projects in extensive hackspaces and workshops; the final two years add specialist options and a six-month paid industrial placement in Year 3. The degree is professionally accredited. Entry is through UCAS (course code 28G3, institution code I50), with the ESAT and an online interview, typically held between November and March.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/design-engineering/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Master of Engineering (MEng)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum and typical offer A*AA, including A* in Mathematics",
      "IB Diploma: minimum and typical offer 39 points, including 7 in Higher Level Mathematics and 6 in another HL subject",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1 and Mathematics 2 modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "Online interview for applicants who show sufficient potential (typically November to March); applicants are encouraged to bring examples of their own work",
      "English language (Imperial standard level), if required: IELTS Academic 6.5 overall with at least 6.0 in every element (one sitting); TOEFL iBT 4.5 with at least 4.5 in every element (tests from 21 January 2026; earlier tests 92 overall with at least 20 in each); or PTE Academic 62 overall with at least 56 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Chemistry",
    slug: "imperial-chemistry",
    level: "Master",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Chemistry",
    duration: "4 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's professionally accredited MSci Chemistry takes students to Master's level over four years. The first two years cover inorganic, organic, physical, analytical, synthetic and computational chemistry through interdisciplinary modules and an extensive lab programme, before students specialise in advanced topics. Year 3 introduces 'industry 4.0' approaches such as rapid prototyping, 3D printing, electronics and machine learning, and the final year centres on a six-month independent research project in one of the department's research groups. Entry is through UCAS (course code F103, institution code I50); there is no admissions test, and shortlisted applicants are invited to an academic interview.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/chemistry-msci/",
    campus: "London, South Kensington (with some activity at White City)",
    programType: "Full-time",
    degree: "Master in Science (MSci)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum AAA including A in Chemistry and Mathematics plus a third subject (Biology, Physics or Further Mathematics preferred); typical offer A*AA; widening participation applicants successful at interview receive an adjusted AAA offer",
      "IB Diploma: minimum 38 points including 6 in Higher Level Chemistry, 6 in HL Mathematics and 6 in a third HL subject (Biology, Economics or Physics preferred); typical offer 39-40 points",
      "No admissions test; shortlisted applicants are invited to an academic interview",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Biological Sciences",
    slug: "imperial-biological-sciences",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Biological Sciences",
    duration: "3 years (4-year routes with a year in industry/research or a research year abroad)",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "Imperial's BSc Biological Sciences studies living systems from molecules and cells to whole organisms and ecosystems, including the evolution and diversity of life on Earth. A Life Sciences Skills programme trains students in quantitative methods, programming, statistics and scientific communication, and from Year 2 they specialise in areas such as ecology, molecular biology, cell biology and development, microbiology and immunology, with lab, computational and field work. The final year centres on an extensive research project. Entry is through UCAS (course code C100, institution code I50), and applicants must sit the ESAT; the department does not generally interview.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/biological-sciences/",
    campus: "London, South Kensington",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum and typical offer AAA, including A in Biology and A in Chemistry, Mathematics or Physics",
      "IB Diploma: minimum 38 points including 6 in Higher Level Biology and 6 in HL Chemistry, Mathematics or Physics; typical offer 39 points",
      "ESAT (Engineering and Science Admissions Test) required for 2027 entry: Mathematics 1, Chemistry and Biology modules; 2027-entry test windows 12-16 October 2026 and 4-8 January 2027 (specific dates apply in China, Hong Kong and Macau)",
      "The department does not generally hold interviews",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },

  {
    name: "Medical Biosciences",
    slug: "imperial-medical-biosciences",
    level: "Bachelor",
    universitySlug: "imperial-college-london",
    universityName: "Imperial College London",
    country: "United Kingdom",
    field: "Biomedical Sciences",
    duration: "3 years",
    language: "English",
    tuitionNote:
      "2027 entry: £47,800 per year for Overseas (international) students and £10,050 per year for Home students. Imperial charges Home fees in line with the government fee cap, which is expected to rise each year with inflation.",
    description:
      "The School of Medicine's BSc Medical Biosciences explores the principles of biomedical science and how they are applied in research, policy and industry, through a research-intensive, lab-focused curriculum with training in science communication and ethics. The first two years cover fundamental human biology and the molecular basis of disease, using real research questions in a lab-style learning environment, and the final year combines an independent research project with optional specialist modules. Entry is through UCAS (course code B101, institution code I50); there is no admissions test and the department does not generally interview.",
    officialProgramUrl:
      "https://www.imperial.ac.uk/study/courses/undergraduate/medical-biosciences/",
    campus: "London, Hammersmith and South Kensington",
    programType: "Full-time",
    degree: "Bachelor of Science (BSc)",
    intake: "October",
    applicationDeadline: "13 January 2027, 18:00 UK time (UCAS equal consideration deadline)",
    admissionRequirements: [
      "A levels: minimum and typical offer AAA, including A in Biology or Human Biology and A in Chemistry, Mathematics, Further Mathematics or Physics (if the second A is in Mathematics or Further Mathematics, the third subject must be non-mathematical)",
      "IB Diploma: minimum and typical offer 38 points, including 6 in Higher Level Biology and 6 in HL Chemistry, Mathematics or Physics",
      "No admissions test; the department does not generally hold interviews",
      "English language (Imperial higher level), if required: IELTS Academic 7.0 overall with at least 6.5 in every element (one sitting); TOEFL iBT 5.0 with at least 5.0 in every element (tests from 21 January 2026; earlier tests 100 overall with at least 22 in each); or PTE Academic 69 overall with at least 62 in every element",
      "Other UK and international qualifications: see the entry requirements section of the Imperial course page; contextual admissions considerations are available for eligible UK applicants",
    ],
  },
];
