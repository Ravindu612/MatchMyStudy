import type { Program } from "../../programs";

// University of California, San Diego (La Jolla, California): 11 undergraduate and 4 graduate programs for fall 2027 entry (the MSBA starts in summer 2027).
// Sources: UC San Diego Admissions (first-year requirements, international students, application timeline, majors, costs and aid), UC Admissions (application dates and fees), the UC San Diego 2026-27 General Catalog,
// TritonLink's 2026-27 undergraduate, graduate and Rady School registration fees, Financial Aid and Scholarships' 2026-27 cost of attendance (undergraduate, graduate and Rady), UCOP's 2026-27 tuition and fee levels,
// the selective-major pages, the Departments of Computer Science and Engineering and Electrical and Computer Engineering, the Halıcıoğlu Data Science Institute, the Rady School MSBA pages and the Division of Graduate Education and Postdoctoral Affairs (viewed October 23, 2026). Costs are in US dollars.

export const ucSanDiegoPrograms: Program[] = [
  {
    name: "Computer Science",
    slug: "ucsd-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Computer Science",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's BS in Computer Science, offered by the Department of Computer Science and Engineering, builds a base in mathematics, programming methods and computer organisation before moving to upper-division core courses in data structures, algorithms and software engineering. Students then choose electives tagged as Systems, Theory/Abstraction and Applications of Computing, with at least twelve units in each area, so the degree has real breadth. The major needs 124 units on top of general education. CSE encourages tutoring, faculty research (including with the San Diego Supercomputer Center and Qualcomm Institute) and for-credit industry internships.",
    officialProgramUrl:
      "https://cse.ucsd.edu/undergraduate/degree-programs",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Science",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Jacobs School of Engineering, Department of Computer Science and Engineering (CSE). All four CSE majors (computer science, computer engineering, artificial intelligence and computer science with a bioinformatics specialization) are selective. Computer Science is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Computer Engineering",
    slug: "ucsd-computer-engineering",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Computer Engineering",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's BS in Computer Engineering is run jointly by the Departments of Computer Science and Engineering and Electrical and Computer Engineering, with the same curriculum in both. Lower-division work covers mathematics, physics, electrical engineering, programming and computer organisation, and upper-division core courses deal with the design of algorithms, hardware and software, along with electronic systems. Students take core CSE and ECE courses, a CSE or ECE project course and ten technical electives. The program needs 132 units on top of general education.",
    officialProgramUrl:
      "https://cse.ucsd.edu/undergraduate/degree-programs",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Computer Engineering",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Jacobs School of Engineering, Department of Computer Science and Engineering (CSE). All four CSE majors (computer science, computer engineering, artificial intelligence and computer science with a bioinformatics specialization) are selective (Computer Engineering can also be entered through the Department of Electrical and Computer Engineering). Computer Engineering is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Artificial Intelligence",
    slug: "ucsd-artificial-intelligence",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Artificial Intelligence",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's BS in Artificial Intelligence, from the Department of Computer Science and Engineering, aims to give students lasting foundations so they can build the next advances in AI systems, chances to apply AI across many fields on campus, and an understanding of AI's societal, ethical and professional context. Alongside the CSE lower-division core, students take dedicated AI courses, then upper-division core courses in data structures, algorithms, artificial intelligence, machine learning and ethics. AI electives can come from CSE, data science, cognitive science, mathematics, ECE and philosophy. The major needs 124 units on top of general education.",
    officialProgramUrl:
      "https://cse.ucsd.edu/undergraduate/degree-programs",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Artificial Intelligence",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Jacobs School of Engineering, Department of Computer Science and Engineering (CSE). All four CSE majors (computer science, computer engineering, artificial intelligence and computer science with a bioinformatics specialization) are selective. Artificial Intelligence is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Data Science",
    slug: "ucsd-data-science",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Data Science",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "The Data Science major at the Halıcıoğlu Data Science Institute (HDSI) trains students to be equally strong in predictive modelling, data analysis and computational techniques, and to gain expertise in one subject domain such as business analytics, machine learning and AI, science or the social sciences. The 112-unit major includes calculus, linear algebra and a sequence of data science courses, then upper-division core courses in statistics, systems, visualisation and machine learning. All majors complete a two-quarter senior project applying data science to a real domain problem, and the program also covers the societal and ethical impact of data science.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/DSC-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Data Science",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Halıcıoğlu Data Science Institute (HDSI). Data Science, including the joint Business Data Science major, is selective. Data Science is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Major restrictions: Data Science majors cannot double major or minor in any Computer Science and Engineering major, and CSE majors cannot double major or minor in data science",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Electrical Engineering",
    slug: "ucsd-electrical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's BS in Electrical Engineering is the Department of Electrical and Computer Engineering's ABET-accredited degree. Students take lower-division courses in electrical engineering, mathematics, chemistry and physics, then follow a flexible upper-division structure built around one depth area: communication systems, computer system design, electronic circuits and systems, electronic devices and materials, machine learning and controls, photonics, power engineering, or signal and image processing. The 136-unit major combines breadth and depth courses, technical and professional electives and a senior design project, often brought in from industry, with strong laboratory and computing components throughout.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/ECE-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Jacobs School of Engineering, Department of Electrical and Computer Engineering (ECE). All ECE majors are selective. Electrical Engineering is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Mechanical Engineering",
    slug: "ucsd-mechanical-engineering",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's ABET-accredited BS in Mechanical Engineering, from the Department of Mechanical and Aerospace Engineering, follows a four-year curriculum in mechanics, vibrations, thermodynamics, fluid flow, heat transfer, materials, control theory and mechanical design, with an emphasis on CAD, computing, laboratory and design courses. Students can add one of five specialisations: controls and robotics, fluid mechanics and thermal systems, materials science and engineering, mechanics of materials, or renewable energy and environmental flows. UC San Diego says graduates work in the mechanical, aerospace, electro-mechanical and biomedical industries.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/MAE-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Mechanical Engineering",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Jacobs School of Engineering, Department of Mechanical and Aerospace Engineering (MAE). All MAE majors are selective. Mechanical Engineering is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Bioengineering",
    slug: "ucsd-bioengineering",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Engineering",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "Bioengineering at UC San Diego's Shu Chien-Gene Lay Department of Bioengineering applies tools from mechanical, materials, electrical and chemical engineering to biomedical and biological problems, on a foundation of engineering science, physiology and the biological sciences. The ABET-accredited BS prepares students for graduate research in areas such as biomechanics, physiology and biomedical imaging; for engineering work on medical devices, manufacturing, quality control and prosthetic design; or for medical and health professional school. Related majors are offered in biotechnology, biosystems and bioinformatics. The department does not offer minors and restricts double majors.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/BENG-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Bioengineering",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Jacobs School of Engineering, Shu Chien-Gene Lay Department of Bioengineering. All bioengineering majors are selective. Bioengineering is a selective (capacity-limited) major, so first-year applicants must choose it on the UC application and are selected for it through UC San Diego's holistic review and the number of places available. UC San Diego strongly recommends listing a non-selective alternate major on the UC application; if you are not admitted to your first-choice selective major you may be admitted to the alternate if space allows. Switching in later is hard: continuing students can apply once a year after finishing the screening courses with at least a C-, and places are awarded on a points system that also gives weight to California residency, first-generation status and Pell Grant eligibility",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Cognitive Science",
    slug: "ucsd-cognitive-science",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Social Sciences",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's Department of Cognitive Science was the first of its kind in the world. The major asks how people, animals and computers think, act and learn, drawing on neuroscience, psychology, linguistics, philosophy and computer science, and covers the brain, behaviour and computation. The BS needs more rigorous lower-division work and an extra upper-division computing course than the BA, and can be taken with a specialisation in machine learning and neural computation, design and interaction, neuroscience, clinical aspects of cognition, or language and culture. The department works with the Salk Institute, the San Diego Supercomputer Center and the Kavli Institute for Brain and Mind.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/COGS-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Cognitive Science (a BA is also offered)",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: School of Social Sciences, Department of Cognitive Science. This major is not on UC San Diego's selective-major list, so admitted first-year students who choose it on the UC application can start in the major. A minimum 2.0 GPA is needed to be admitted to and graduate from the major",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Business Economics",
    slug: "ucsd-business-economics",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Business",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "Business Economics is a joint degree from the Rady School of Management and the Department of Economics that teaches students to work inside firms and understand how firms operate in markets. Core economics courses cover microeconomics, macroeconomics and econometrics, while core Rady courses cover accounting, finance, management, marketing, operations and strategy, including customer analytics, experiments in firms, negotiations and business finance. Students finish with economics and Rady electives. The department recommends the MATH 20 calculus series for students who may later want PhD study or an MBA.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/ECON-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Business Economics",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Rady School of Management with the Department of Economics (School of Social Sciences). This major is not on UC San Diego's selective-major list, so admitted first-year students who choose it on the UC application can start in the major.",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Mathematics-Computer Science",
    slug: "ucsd-mathematics-computer-science",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Mathematics",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "The Mathematics-Computer Science major from UC San Diego's Department of Mathematics produces mathematically oriented computer scientists who specialise in the mathematical foundations of computer science or in computer applications of mathematics. Students take linear algebra and calculus (or honours calculus) and introductory CSE programming and data structures courses, then fourteen upper-division courses including mathematical reasoning, modern algebra, theory of computability, data structures and probability. Unlike the CSE majors, it is not a selective major.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/MATH-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Mathematics-Computer Science",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: Department of Mathematics. This major is not on UC San Diego's selective-major list, so admitted first-year students who choose it on the UC application can start in the major.",
      "Major restrictions: Mathematics-Computer Science majors cannot double major in a CSE major or minor in computer science",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Molecular and Cell Biology",
    slug: "ucsd-molecular-cell-biology",
    level: "Bachelor",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Biology",
    duration: "4 years full-time (180 quarter units including general education)",
    language: "English",
    tuitionNote:
      "2026-27 tuition and fees for new undergraduates who entered in fall 2026 (three quarters: fall, winter and spring): UC San Diego Financial Aid and Scholarships lists US$21,519 in tuition and fees for California residents (UC systemwide tuition and fees of US$15,588, campus fees of US$2,511, a US$3,195 health insurance fee that can be waived with equivalent cover, and a one-time US$225 enrollment services fee). Non-California residents, including international students, also pay US$39,270 in Nonresident Supplemental Tuition, for about US$60,789 a year (the registrar bills US$4,734 tuition, a US$462 student services fee and US$13,090 nonresident supplemental tuition each quarter, plus campus fees). The 2026-27 estimated nonresident cost of attendance is US$86,553 living on campus, adding housing of US$13,761, food of US$6,981, books and supplies of US$1,236, personal expenses of US$2,838 and transportation of US$948, or US$87,693 living off campus. New international students also pay a one-time US$200 visa administration fee. Under UC's Tuition Stability Plan, an entering class's tuition, student services fee and nonresident supplemental tuition stay flat for up to six years. International students cannot receive US federal or California state financial aid and must show they can cover all estimated costs to get a visa. Rates for the class entering in fall 2027 have not been published yet",
    description:
      "UC San Diego's Molecular and Cell Biology major, in the School of Biological Sciences, teaches the basic molecular principles that let organisms live, grow and adapt, applying biochemistry, molecular biology, genetics and cell biology to questions from how plants move toward light to the molecular basis of cancer. Students also meet interdisciplinary approaches such as bioinformatics. Lower-division requirements cover biology, general and organic chemistry, mathematics and physics; upper-division core courses include biochemistry, genetics, cell biology and molecular biology. UC San Diego says the major suits careers in medicine, research, biotechnology, science writing and policy, public health and science education.",
    officialProgramUrl:
      "https://catalog.ucsd.edu/curric/BIOL-ug.html",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Bachelor of Science (BS) in Molecular and Cell Biology",
    intake: "Fall quarter only (late September). UC San Diego admits first-year students for the fall quarter",
    applicationDeadline: "Fall 2027 entry (one University of California application for all UC campuses; international applicants pay a non-refundable US$95 per campus, and UC fee waivers are only for US citizens, permanent residents and AB540-eligible students): the application opens for editing on 1 August 2026 and must be submitted between 1 October and 30 November 2026. UC San Diego has no Early Decision or Early Action. First-year decisions are posted on the applicant portal by 31 March 2027; some applicants are invited to opt in to the waitlist by 15 April 2027, and admitted students must accept by 1 May 2027. Final official transcripts are due by 1 July 2027 and AP/IB results by 15 July 2027",
    admissionRequirements: [
      "School and admission route: School of Biological Sciences. This major is not on UC San Diego's selective-major list, so admitted first-year students who choose it on the UC application can start in the major. Biological sciences majors stopped being selective in spring 2025",
      "Testing: test-blind. UC San Diego does not consider SAT or ACT scores in admission or scholarship decisions; if you send them, they may only be used as an alternative way to meet minimum requirements or for course placement after you enrol",
      "English proficiency (needed if your native language is not English and your secondary education was not taught in English): TOEFL iBT 4.5 on the scale used from January 2026 (83 for tests taken before January 2026), IELTS Academic 7 or Duolingo English Test 115. AP English Language or English Literature scores of 3-5, or IB English A scores of 5-7 at higher level or 6-7 at standard level, are also accepted",
      "Academic requirements: a secondary school completion certificate that admits you to university in your own country and is equivalent to a US high school diploma, plus UC's 15 'A-G' college-preparatory courses (2 years of history/social science, 4 of English, 3 of mathematics with 4 recommended, 2 of laboratory science with 3 recommended, 2 of a language other than English with 3 recommended, 1 of visual and performing arts and 1 elective). Non-California residents, including international applicants, need at least a 3.4 GPA in A-G courses taken in grades 10 and 11 with no grade below C, and competitive applicants are well above the minimums. You answer 4 of 8 Personal Insight Questions (up to 350 words each) and rank up to four of UC San Diego's eight undergraduate colleges, which set your general-education requirements",
    ],
  },

  {
    name: "Master of Science in Computer Science and Engineering",
    slug: "ucsd-ms-computer-science",
    level: "Master",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Computer Science",
    duration: "1-2 years full-time (40 units; 48 units for the interdisciplinary option); part-time study is also possible",
    language: "English",
    tuitionNote:
      "2026-27 graduate tuition and fees (state-supported program, three quarters: fall, winter and spring): US$38,087 for non-California residents, including international students, against US$22,985 for California residents. This covers UC tuition of US$13,722, the student services fee of US$1,344, campus fees, mandatory health insurance of US$6,660 (waivable with equivalent cover), a one-time US$115 enrollment services fee and US$15,102 in Nonresident Supplemental Tuition (US$5,034 a quarter). New international students also pay a one-time US$200 visa administration fee. UC San Diego's 2026-27 graduate cost of attendance adds food and housing of US$31,056 to US$31,548, books of US$729, personal costs of US$2,574 and transportation of US$3,990, for an estimated nonresident total of US$76,329 to US$76,821 a year. The program is not on UC's 2026-27 list of UC San Diego degrees that charge Professional Degree Supplemental Tuition. Rates for 2027-28 have not been published yet",
    description:
      "UC San Diego's CSE master's degree is offered in computer science or in computer engineering, each through a thesis plan or a comprehensive-exam plan (standard or interdisciplinary option). Students take three breadth courses across theory, systems and applications, three depth courses in one area (artificial intelligence, bioinformatics, computer engineering, computer systems and security, database systems, graphics and vision, human-computer interaction, programming languages and software engineering, robotics, or theoretical computer science) and electives or research. The interdisciplinary option adds twelve units in a second department such as cognitive science, ECE or the Rady School.",
    officialProgramUrl:
      "https://cse.ucsd.edu/graduate/degree-programs/ms-program",
    campus: "La Jolla (San Diego)",
    programType: "Full-time or part-time",
    degree: "Master of Science (MS) in Computer Science and Engineering, or Computer Science and Engineering (Computer Engineering)",
    intake: "Fall quarter only (late September)",
    applicationDeadline: "Fall 2027 entry (UC San Diego Application for Graduate Admission; international applicants pay a non-refundable US$155 fee): the application is open from 2 September 2026 until 16 December 2026 at 11:59 p.m. Pacific. CSE admits MS students for the fall quarter only, and you can apply to either the MS or the PhD, not both",
    admissionRequirements: [
      "A bachelor's degree (or equivalent from a recognised university abroad) with at least a B (3.0) average. A degree in computer science, computer engineering, electrical engineering or mathematics is preferred; applicants from other fields must have completed at least the minimum required CSE courses or equivalents. CSE receives more than 6,000 graduate applications a year and meeting the minimums does not guarantee admission",
      "GRE not required for fall 2027 MS applications (valid scores may still be sent, institution code 4836). All materials go through the online application, following CSE's application checklist",
      "UC San Diego graduate English proficiency (international applicants): TOEFL iBT 4.5 on the new scale (85 on the previous scale), IELTS Academic 7, Duolingo English Test 120 or PTE Academic 65; TOEFL MyBest scores are not accepted. You are exempt if you have or will have a bachelor's, master's or doctoral degree with B (3.0) grades or better from an accredited US university that teaches only in English, or from a university abroad that the IAU World Higher Education Database lists as teaching solely in English",
    ],
  },

  {
    name: "Master of Science in Data Science",
    slug: "ucsd-ms-data-science",
    level: "Master",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Data Science",
    duration: "1-2 years full-time (48 units, twelve 4-unit courses)",
    language: "English",
    tuitionNote:
      "2026-27 graduate tuition and fees (state-supported program, three quarters: fall, winter and spring): US$38,087 for non-California residents, including international students, against US$22,985 for California residents. This covers UC tuition of US$13,722, the student services fee of US$1,344, campus fees, mandatory health insurance of US$6,660 (waivable with equivalent cover), a one-time US$115 enrollment services fee and US$15,102 in Nonresident Supplemental Tuition (US$5,034 a quarter). New international students also pay a one-time US$200 visa administration fee. UC San Diego's 2026-27 graduate cost of attendance adds food and housing of US$31,056 to US$31,548, books of US$729, personal costs of US$2,574 and transportation of US$3,990, for an estimated nonresident total of US$76,329 to US$76,821 a year. The program is not on UC's 2026-27 list of UC San Diego degrees that charge Professional Degree Supplemental Tuition. Rates for 2027-28 have not been published yet",
    description:
      "The residential MS in Data Science at the Halıcıoğlu Data Science Institute teaches the skills needed for data-driven work and lays foundations for future data science researchers. Students take twelve courses: foundational courses in programming, data organisation, numerical linear algebra, probability and statistics, and optimisation (which can be waived with equivalent prior study); at least six core courses, three of them required (including machine learning and statistical models); and electives. Students finish with a thesis or a course-based comprehensive exam across machine learning/computing, math/statistics and systems/algorithms. HDSI says its in-person graduate degrees are STEM-designated.",
    officialProgramUrl:
      "https://datascience.ucsd.edu/graduate/ms-program/",
    campus: "La Jolla (San Diego)",
    programType: "Full-time (in person)",
    degree: "Master of Science (MS) in Data Science",
    intake: "Fall quarter only (fall 2027 quarter begins 20 September 2027)",
    applicationDeadline: "Fall 2027 entry (UC San Diego Application for Graduate Admission, choosing 'Master of Science, Data Science' for the in-person program; international applicants pay US$155): the tentative application deadline is 2 December 2026. HDSI reviews applications after the deadline and applicants hear about their status by April 2027",
    admissionRequirements: [
      "A bachelor's degree meeting UC San Diego's graduate admission requirements (at least a 3.0 GPA). The committee looks for prior study of linear algebra, programming and probability/statistics, sustained academic success and a clear interest in data science, and welcomes applicants from many majors",
      "Application materials: statement of purpose, CV or resume, three letters of recommendation and unofficial transcripts (official transcripts only after an offer). GRE not required for fall 2027",
      "UC San Diego graduate English proficiency (international applicants): TOEFL iBT 4.5 on the new scale (85 on the previous scale), IELTS Academic 7, Duolingo English Test 120 or PTE Academic 65; TOEFL MyBest scores are not accepted. You are exempt if you have or will have a bachelor's, master's or doctoral degree with B (3.0) grades or better from an accredited US university that teaches only in English, or from a university abroad that the IAU World Higher Education Database lists as teaching solely in English",
    ],
  },

  {
    name: "Master of Science in Electrical and Computer Engineering",
    slug: "ucsd-ms-electrical-computer-engineering",
    level: "Master",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Engineering",
    duration: "Up to 2 years full-time (48 units, at least 36 in graduate courses)",
    language: "English",
    tuitionNote:
      "2026-27 graduate tuition and fees (state-supported program, three quarters: fall, winter and spring): US$38,087 for non-California residents, including international students, against US$22,985 for California residents. This covers UC tuition of US$13,722, the student services fee of US$1,344, campus fees, mandatory health insurance of US$6,660 (waivable with equivalent cover), a one-time US$115 enrollment services fee and US$15,102 in Nonresident Supplemental Tuition (US$5,034 a quarter). New international students also pay a one-time US$200 visa administration fee. UC San Diego's 2026-27 graduate cost of attendance adds food and housing of US$31,056 to US$31,548, books of US$729, personal costs of US$2,574 and transportation of US$3,990, for an estimated nonresident total of US$76,329 to US$76,821 a year. The program is not on UC's 2026-27 list of UC San Diego degrees that charge Professional Degree Supplemental Tuition. Rates for 2027-28 have not been published yet",
    description:
      "UC San Diego's Department of Electrical and Computer Engineering offers MS programs across thirteen disciplines, giving intensive technical preparation for advanced engineering practice or later doctoral study. Students choose a thesis plan (twelve units of research and a thesis) or a comprehensive-exam plan, and pick their graduate courses from the core list for their area, such as computer engineering, electronic circuits and systems, intelligent systems, robotics and control, or machine learning and data science. Course requirements must be completed within two years of full-time study, and a faculty adviser helps plan each student's curriculum.",
    officialProgramUrl:
      "https://www.ece.ucsd.edu/graduate/graduate-admissions",
    campus: "La Jolla (San Diego)",
    programType: "Full-time",
    degree: "Master of Science (MS) in Electrical Engineering or Computer Engineering",
    intake: "Fall quarter only (ECE admits once a year)",
    applicationDeadline: "Fall 2027 entry (UC San Diego Application for Graduate Admission; international applicants pay a non-refundable US$155 fee): applications open 2 September 2026 and the MS deadline is 6 January 2027 at 11:59 p.m. California time. Decisions are released on a rolling basis from the end of January, with most made by early April 2027",
    admissionRequirements: [
      "A BS and/or MS in engineering, the physical sciences or mathematics from an accredited university, with a cumulative GPA of at least 3.0 (on a 4.0 scale or equivalent)",
      "Application materials: statement of purpose, three letters of recommendation, unofficial transcripts from all universities attended and a resume or CV (recommended). GRE not required for fall 2027. Computer engineering, electronic circuits and systems, intelligent systems robotics and control, and machine learning and data science are impacted areas you cannot switch into later, so apply to them directly",
      "English proficiency (international applicants): TOEFL iBT 4.5 (85 on the previous scale), IELTS 7, Duolingo English Test 120 or PTE Academic 65, or a degree with B (3.0) grades or better from a university that teaches solely in English according to the IAU World Higher Education Database",
    ],
  },

  {
    name: "Master of Science in Business Analytics (MSBA)",
    slug: "ucsd-ms-business-analytics",
    level: "Master",
    universitySlug: "university-of-california-san-diego",
    universityName: "University of California, San Diego",
    country: "United States",
    field: "Business",
    duration: "11 months full-time (50 units, starting in summer)",
    language: "English",
    tuitionNote:
      "Self-supporting program with the same tuition for California residents and international students. The summer 2026 cohort pays US$1,571 per unit, or US$78,550 for the 50-unit program, billed quarterly. UC San Diego Financial Aid's 2026-27 estimate for the 11-month MSBA puts total tuition and fees at US$81,442 (summer and academic-year per-unit charges plus student services, campus and Rady activity fees), and adds food and housing of US$38,240, personal costs of US$3,120, transportation of US$4,836 and student health insurance of US$7,698 (waivable with equivalent cover), for an estimated total of US$135,336. New international students also pay a one-time US$200 visa administration fee. All admitted domestic and international students are considered for limited merit scholarships with no separate application, and graduates of any UC campus receive a US$10,000 Rady UC Scholarship. Rates for the summer 2027 cohort have not been published yet",
    description:
      "The Rady School of Management's MSBA describes itself as unapologetically technical, with a curriculum rooted in mathematics, code and rigorous engineering and a focus on building AI and agentic systems that create business value. Coursework is grounded in real business settings and covers collecting, cleaning, visualising and analysing data; statistical, machine learning and optimisation tools; and using analysis to drive business decisions. Research from Rady's labs in healthcare, marketing and consumer behaviour, finance and supply chain feeds into the curriculum. Rady says graduates of its STEM-designated programs qualify for STEM OPT work authorisation after graduating.",
    officialProgramUrl:
      "https://rady.ucsd.edu/programs/ms-business-analytics/",
    campus: "La Jolla (San Diego)",
    programType: "Full-time (in person)",
    degree: "Master of Science (MS) in Business Analytics",
    intake: "Summer (one cohort a year; the program runs from summer through the following spring)",
    applicationDeadline: "Summer 2027 entry (US$150 non-refundable application fee): Round 1 closed 1 October 2026; Round 2 closes 15 November 2026; Round 3 closes 15 January 2027; Round 4 closes 15 March 2027 and is the final deadline for international applicants and fellowship consideration; Round 5 closes 15 May 2027 for domestic applicants. Rady reviews applications on a rolling basis and seats are limited, so applying early improves your chances",
    admissionRequirements: [
      "An undergraduate degree conferred by the first day of the program. STEM degrees are strongly favoured, but business, economics and social science graduates are accepted if they show quantitative ability. A solid base in college-level calculus, probability and statistics and proficiency in Python, R and SQL are expected; work experience is not required, though two years in software, analytics or business intelligence roles is preferred",
      "Application materials: online application, transcripts, resume or CV, details of your quantitative and programming background, two recommendations and a 500-word statement of purpose. An interview (online and asynchronous) is required and is by invitation only. GMAT and GRE are optional",
      "English proficiency (international applicants): TOEFL iBT 4.5 on the new scale (85 on the old scale; Rady says competitive scores are above 100), IELTS Academic 7, Duolingo English Test 120 or PTE Academic 65, unless you hold a degree with B (3.0) grades or better from a university that teaches solely in English according to the IAU World Higher Education Database. Admitted applicants with degrees from outside the US must submit a WES or TEC course-by-course evaluation",
    ],
  },
];
