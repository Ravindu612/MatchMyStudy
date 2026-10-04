import type { universities } from "@/data/universities";

/*
 * ------------------------------------------------
 * Country quick-info cards
 * ------------------------------------------------
 *
 * Structured content for the "Tuition Fees", "Living Costs" and
 * "Student Jobs" cards on each country page (components/CountryPage.tsx).
 *
 * Rules for adding a country:
 * - Official / authoritative sources only (government immigration and
 *   study portals, national statistics offices, legislation).
 * - Every figure carries its own sourceUrl.
 * - Use local currency and state the year / date the figure applies to.
 * - If an official figure is not published, say so rather than guessing.
 * - Student Jobs = legal work rights for international (non-EU/EEA where
 *   relevant) students, taken from the immigration authority.
 *
 * All fields are optional: countries without an entry (or without a given
 * section) keep the generic placeholder text on their page.
 */

export type CountryKey = keyof typeof universities;

export type QuickInfoFigure = {
  label: string;
  value: string;
  sourceUrl: string;
};

export type QuickInfoSource = {
  name: string;
  url: string;
};

export type QuickInfoSection = {
  summary: string;
  figures?: QuickInfoFigure[];
  sources: QuickInfoSource[];
};

export type CountryQuickInfo = {
  tuitionFees?: QuickInfoSection;
  livingCosts?: QuickInfoSection;
  studentJobs?: QuickInfoSection;
  // Month the sources were last checked, e.g. "October 2026"
  lastChecked: string;
};

export const countryQuickInfo: Partial<Record<CountryKey, CountryQuickInfo>> = {
  canada: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Each institution sets its own fees, so costs differ by province, school and program. Statistics Canada publishes national averages for full-time international students at public degree-granting institutions (2026/2027 figures are preliminary).",
      figures: [
        {
          label: "International undergraduate, average (2026/27)",
          value: "CA$42,062 per year",
          sourceUrl:
            "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710004501",
        },
        {
          label: "International graduate, average (2026/27)",
          value: "CA$24,693 per year",
          sourceUrl:
            "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710004501",
        },
      ],
      sources: [
        {
          name: "Statistics Canada, table 37-10-0045-01",
          url: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710004501",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a study permit, IRCC asks you to prove you can pay your living expenses without working, on top of first-year tuition and travel. This is the visa minimum rather than a full budget, and Quebec sets its own amount.",
      figures: [
        {
          label:
            "Visa proof of funds, single applicant outside Quebec (applications from 1 Sep 2026)",
          value: "CA$23,448 per year",
          sourceUrl:
            "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
        },
      ],
      sources: [
        {
          name: "IRCC: Proof of financial support",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
        },
      ],
    },
    studentJobs: {
      summary:
        "Full-time students whose study permit allows off-campus work can take a job once their program has started, without a separate work permit. Graduates of eligible programs can apply for a Post-Graduation Work Permit (PGWP).",
      figures: [
        {
          label: "While classes are in session",
          value: "Up to 24 hours per week off campus",
          sourceUrl:
            "https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=503",
        },
        {
          label: "Scheduled breaks (7+ days, e.g. summer)",
          value: "Unlimited hours",
          sourceUrl:
            "https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=503",
        },
        {
          label: "After graduation (PGWP)",
          value: "8 months to 3 years, depending on program",
          sourceUrl:
            "https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=509",
        },
      ],
      sources: [
        {
          name: "IRCC: Working off campus",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html",
        },
        {
          name: "IRCC: About the PGWP",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html",
        },
      ],
    },
  },

  australia: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "There is no single official national tuition figure. Each provider sets its own international fees, which depend on the institution, level of study and location. Study Australia's course search lists fees by course, and some courses add costs such as materials.",
      figures: [
        {
          label: "Official national average",
          value: "Not published – fees set by each provider",
          sourceUrl:
            "https://www.studyaustralia.gov.au/en/life-in-australia/living-and-education-costs",
        },
      ],
      sources: [
        {
          name: "Study Australia: Living and education costs",
          url: "https://www.studyaustralia.gov.au/en/life-in-australia/living-and-education-costs",
        },
      ],
    },
    livingCosts: {
      summary:
        "Student visa applicants must show money for living costs as well as course fees and travel. Study Australia warns that real living costs can be much higher than this visa minimum, depending on the city.",
      figures: [
        {
          label:
            "Visa living-cost requirement, main applicant, 12 months (in force since 10 May 2024)",
          value: "AU$29,710 per year",
          sourceUrl:
            "https://www.legislation.gov.au/F2019L01366/latest/text",
        },
      ],
      sources: [
        {
          name: "Federal Register of Legislation: LIN 19/198 (financial capacity, subclass 500)",
          url: "https://www.legislation.gov.au/F2019L01366/latest/text",
        },
        {
          name: "Study Australia: Living and education costs",
          url: "https://www.studyaustralia.gov.au/en/life-in-australia/living-and-education-costs",
        },
      ],
    },
    studentJobs: {
      summary:
        "The Student visa (subclass 500) includes work rights. Graduates with a degree from a CRICOS-registered course can apply for the Temporary Graduate visa (subclass 485), which has no limit on work hours.",
      figures: [
        {
          label: "While your course is in session",
          value: "Up to 48 hours per fortnight",
          sourceUrl:
            "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500",
        },
        {
          label: "Scheduled course breaks",
          value: "Unlimited hours",
          sourceUrl:
            "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500",
        },
        {
          label: "Research master's and PhD students",
          value: "No hour limit once the course has started",
          sourceUrl:
            "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500",
        },
        {
          label: "After graduation (subclass 485, Post-Higher Education Work)",
          value: "Usually 2–3 years, depending on qualification",
          sourceUrl:
            "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/temporary-graduate-visa-subclass-485",
        },
      ],
      sources: [
        {
          name: "Study Australia: Student visa (subclass 500)",
          url: "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/student-visa-subclass-500",
        },
        {
          name: "Study Australia: Temporary Graduate visa (subclass 485)",
          url: "https://www.studyaustralia.gov.au/en/plan-your-move/your-guide-to-visas/temporary-graduate-visa-subclass-485",
        },
      ],
    },
  },

  ireland: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Fees for non-EU students vary by institution and subject. Education in Ireland publishes typical ranges; the latest published ranges are for 2025/26, so check the current fee with your college.",
      figures: [
        {
          label: "Undergraduate, non-EU (2025/26)",
          value:
            "€10,300 – €29,000 per year for most fields; medicine & health €50,135 – €62,500",
          sourceUrl:
            "https://www.educationinireland.com/en/plan-your-study-abroad/undergraduate-tuition-fees",
        },
        {
          label: "Postgraduate, non-EU (2025/26)",
          value: "€11,000 – €40,000 per year, depending on field",
          sourceUrl:
            "https://www.educationinireland.com/en/plan-your-study-abroad/postgraduate-tuition-fees",
        },
      ],
      sources: [
        {
          name: "Education in Ireland: Undergraduate tuition fees",
          url: "https://www.educationinireland.com/en/plan-your-study-abroad/undergraduate-tuition-fees",
        },
        {
          name: "Education in Ireland: Postgraduate tuition fees",
          url: "https://www.educationinireland.com/en/plan-your-study-abroad/postgraduate-tuition-fees",
        },
      ],
    },
    livingCosts: {
      summary:
        "Non-EEA students must show they can support themselves, in addition to tuition. Ireland's Immigration Service describes the required amount as its estimated living cost for one academic year.",
      figures: [
        {
          label: "Proof of funds, course of one year (from 30 June 2025)",
          value: "€10,000 per year",
          sourceUrl:
            "https://www.irishimmigration.ie/reminder-on-student-finance-requirements-from-30-june-2025/",
        },
        {
          label: "Courses with a 6–8 month stay",
          value: "€833 per month",
          sourceUrl:
            "https://www.irishimmigration.ie/reminder-on-student-finance-requirements-from-30-june-2025/",
        },
      ],
      sources: [
        {
          name: "Irish Immigration Service: Student finance requirements",
          url: "https://www.irishimmigration.ie/reminder-on-student-finance-requirements-from-30-june-2025/",
        },
      ],
    },
    studentJobs: {
      summary:
        "Non-EEA students on Stamp 2 in a full-time course on the ILEP list can do casual work without an employment permit. Graduates can stay to look for work under the Third Level Graduate Programme (Stamp 1G).",
      figures: [
        {
          label: "During term",
          value: "Up to 20 hours per week",
          sourceUrl:
            "https://www.irishimmigration.ie/coming-to-study-in-ireland/frequently-asked-questions-for-students/",
        },
        {
          label: "Holidays (June–September, 15 Dec–15 Jan)",
          value: "Up to 40 hours per week",
          sourceUrl:
            "https://www.irishimmigration.ie/coming-to-study-in-ireland/frequently-asked-questions-for-students/",
        },
        {
          label: "After graduation (Stamp 1G)",
          value: "12 months for Level 8; up to 24 months for Level 9+",
          sourceUrl:
            "https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/third-level-graduate-programme/",
        },
      ],
      sources: [
        {
          name: "Irish Immigration Service: FAQs for students",
          url: "https://www.irishimmigration.ie/coming-to-study-in-ireland/frequently-asked-questions-for-students/",
        },
        {
          name: "Irish Immigration Service: Third Level Graduate Programme",
          url: "https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/third-level-graduate-programme/",
        },
      ],
    },
  },

  finland: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Students from outside the EU/EEA and Switzerland usually pay for English-taught bachelor's and master's programmes. Programmes taught in Finnish or Swedish and doctoral studies are free. Non-EU/EEA applicants also pay a €100 application fee.",
      figures: [
        {
          label: "Typical tuition, non-EU/EEA (per Study in Finland, Sep 2026)",
          value: "€9,000 – €20,000 per year",
          sourceUrl:
            "https://www.studyinfinland.fi/funding-your-studies/fees-and-cost-living",
        },
      ],
      sources: [
        {
          name: "Study in Finland: Fees and cost of living",
          url: "https://www.studyinfinland.fi/funding-your-studies/fees-and-cost-living",
        },
      ],
    },
    livingCosts: {
      summary:
        "The Finnish Immigration Service (Migri) requires proof of money for living costs, separate from any unpaid tuition. Study in Finland suggests budgeting more than this minimum, about €900–€1,200 a month depending on the city.",
      figures: [
        {
          label: "Residence permit minimum (2026)",
          value: "€800 per month",
          sourceUrl: "https://migri.fi/en/income-requirement-for-students",
        },
        {
          label: "In your account when applying (studies of 1 year or more)",
          value: "€9,600",
          sourceUrl: "https://migri.fi/en/income-requirement-for-students",
        },
      ],
      sources: [
        {
          name: "Migri: Income requirement for students",
          url: "https://migri.fi/en/income-requirement-for-students",
        },
        {
          name: "Study in Finland: Fees and cost of living",
          url: "https://www.studyinfinland.fi/funding-your-studies/fees-and-cost-living",
        },
      ],
    },
    studentJobs: {
      summary:
        "A residence permit for studies lets you work in any field. Hours are averaged over the year, so you can work more in some weeks, such as full-time during holidays. Internships and thesis work that are part of your degree are not limited.",
      figures: [
        {
          label: "Work limit",
          value: "30 hours per week on average (1,560 hours per year)",
          sourceUrl: "https://migri.fi/en/working-and-internships-during-studies",
        },
        {
          label: "After graduation",
          value: "Residence permit to look for work or start a business, up to 2 years",
          sourceUrl: "https://migri.fi/en/residence-permit-to-look-for-work",
        },
      ],
      sources: [
        {
          name: "Migri: Working and internships during studies",
          url: "https://migri.fi/en/working-and-internships-during-studies",
        },
        {
          name: "Migri: Residence permit to look for work",
          url: "https://migri.fi/en/residence-permit-to-look-for-work",
        },
      ],
    },
  },

  germany: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Most public universities charge no tuition for bachelor's and most master's programmes, but every student pays a semester contribution. Baden-Württemberg charges non-EU students tuition, Bavarian universities may set their own fees for non-EU/EEA students, and private universities charge more.",
      figures: [
        {
          label: "Semester contribution (all students)",
          value: "About €70 – €430 per semester",
          sourceUrl:
            "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        },
        {
          label: "Baden-Württemberg, non-EU students",
          value: "€1,500 per semester (not for doctoral students)",
          sourceUrl:
            "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        },
      ],
      sources: [
        {
          name: "DAAD: Costs of education and living",
          url: "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        },
      ],
    },
    livingCosts: {
      summary:
        "Non-EU/EEA students must prove funds for the visa, often with a blocked account (Sperrkonto). DAAD estimates that students need about €900–€1,200 a month, mostly depending on rent in their city.",
      figures: [
        {
          label: "Visa proof of funds (since 1 Jan 2025, still applies in 2026)",
          value: "€992 per month (€11,904 per year)",
          sourceUrl:
            "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        },
      ],
      sources: [
        {
          name: "DAAD: Costs of education and living",
          url: "https://www.daad.de/en/studying-in-germany/living-in-germany/finances/",
        },
        {
          name: "Federal Foreign Office: Blocked account",
          url: "https://www.auswaertiges-amt.de/en/sperrkonto-388600",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students from outside the EU/EEA can work without approval from the Federal Employment Agency, within a yearly limit. Student assistant jobs at the university do not count towards it. After graduating in Germany you can get a residence permit to look for a job.",
      figures: [
        {
          label: "Yearly work limit",
          value: "140 full days or 280 half days (alternatively up to 20 hours per week in term)",
          sourceUrl:
            "https://www.make-it-in-germany.com/en/study-vocational-training/studies-in-germany/work",
        },
        {
          label: "After graduation (job-seeking permit)",
          value: "Up to 18 months",
          sourceUrl: "https://www.gesetze-im-internet.de/aufenthg_2004/__20.html",
        },
      ],
      sources: [
        {
          name: "Make it in Germany: Study and work",
          url: "https://www.make-it-in-germany.com/en/study-vocational-training/studies-in-germany/work",
        },
        {
          name: "Residence Act § 16b (work limit)",
          url: "https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html",
        },
        {
          name: "Residence Act § 20 (job search after studies)",
          url: "https://www.gesetze-im-internet.de/aufenthg_2004/__20.html",
        },
      ],
    },
  },

  unitedKingdom: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Universities set their own fees for international students, and the UK government does not publish a national figure. For the Student visa you need enough money to pay your course fees for one academic year (up to 9 months), and the amount is shown on your Confirmation of Acceptance for Studies (CAS).",
      figures: [
        {
          label: "Official national figure",
          value: "Not published – set by each university (shown on your CAS)",
          sourceUrl: "https://www.gov.uk/student-visa/money",
        },
      ],
      sources: [
        {
          name: "GOV.UK: Student visa – money you need",
          url: "https://www.gov.uk/student-visa/money",
        },
      ],
    },
    livingCosts: {
      summary:
        "Unless you have already been in the UK with a valid visa for 12 months, you must show money to support yourself on top of any unpaid course fees. The amount depends on whether you study in London (the City of London and the 32 boroughs) or elsewhere. These are visa minimums, not a full budget.",
      figures: [
        {
          label: "Visa proof of funds, courses in London (2026)",
          value: "£1,529 per month, for up to 9 months (£13,761)",
          sourceUrl: "https://www.gov.uk/student-visa/money",
        },
        {
          label: "Visa proof of funds, courses outside London (2026)",
          value: "£1,171 per month, for up to 9 months (£10,539)",
          sourceUrl: "https://www.gov.uk/student-visa/money",
        },
      ],
      sources: [
        {
          name: "GOV.UK: Student visa – money you need",
          url: "https://www.gov.uk/student-visa/money",
        },
        {
          name: "Immigration Rules: Appendix Student (ST 12)",
          url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student",
        },
      ],
    },
    studentJobs: {
      summary:
        "How much you can work depends on your course level and whether it is term-time. The limits apply to full-time students at a higher education provider with a track record of compliance; part-time students cannot work. After graduating you can apply for the Graduate visa, which is being shortened from 2027.",
      figures: [
        {
          label: "Degree level or above, during term",
          value: "Up to 20 hours per week",
          sourceUrl:
            "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student",
        },
        {
          label: "Below degree level, during term",
          value: "Up to 10 hours per week",
          sourceUrl:
            "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student",
        },
        {
          label: "Outside term-time",
          value: "Full-time work allowed",
          sourceUrl:
            "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student",
        },
        {
          label: "After graduation (Graduate visa)",
          value:
            "2 years if you apply by 31 Dec 2026; 18 months from 1 Jan 2027; 3 years for PhD",
          sourceUrl: "https://www.gov.uk/graduate-visa",
        },
      ],
      sources: [
        {
          name: "Immigration Rules: Appendix Student (ST 26)",
          url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student",
        },
        {
          name: "GOV.UK: Graduate visa",
          url: "https://www.gov.uk/graduate-visa",
        },
      ],
    },
  },

  usa: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Each college sets its own tuition, and no official US-wide average is published for international students. The National Center for Education Statistics (NCES) publishes averages for all first-time, full-time undergraduates. Its public-university average is the in-state rate, so it is not shown here.",
      figures: [
        {
          label: "Average tuition & fees, private nonprofit 4-year (2022–23, all undergraduates)",
          value: "US$40,700 per year",
          sourceUrl: "https://nces.ed.gov/fastfacts/display.asp?id=76",
        },
        {
          label: "Average for international students",
          value: "Not officially published – check each school",
          sourceUrl: "https://nces.ed.gov/fastfacts/display.asp?id=76",
        },
      ],
      sources: [
        {
          name: "NCES Fast Facts: Tuition costs of colleges and universities",
          url: "https://nces.ed.gov/fastfacts/display.asp?id=76",
        },
      ],
    },
    livingCosts: {
      summary:
        "The US has no fixed national proof-of-funds amount. You or a sponsor must show enough money for tuition and living expenses during your studies. Your school's international office checks this evidence before it issues your Form I-20, and you may be asked for it again at the visa interview and at the border.",
      figures: [
        {
          label: "National visa proof-of-funds figure",
          value: "Not officially published – set per school when issuing Form I-20",
          sourceUrl:
            "https://studyinthestates.dhs.gov/students/prepare/financial-ability",
        },
      ],
      sources: [
        {
          name: "Study in the States (DHS): Financial ability",
          url: "https://studyinthestates.dhs.gov/students/prepare/financial-ability",
        },
      ],
    },
    studentJobs: {
      summary:
        "F-1 students can work on campus with approval from their school. Off-campus work needs separate authorisation, such as Curricular Practical Training (CPT), Optional Practical Training (OPT), or USCIS approval for severe economic hardship. DHS published a final rule in July 2026 that changes how long F students are admitted for, so check Study in the States for the latest.",
      figures: [
        {
          label: "On campus, while school is in session",
          value: "Up to 20 hours per week",
          sourceUrl: "https://www.ice.gov/sevis/employment",
        },
        {
          label: "On campus, breaks and annual vacation",
          value: "Full-time",
          sourceUrl: "https://www.ice.gov/sevis/employment",
        },
        {
          label: "After graduation (post-completion OPT)",
          value: "12 months per degree level; STEM graduates can extend by 24 months",
          sourceUrl:
            "https://studyinthestates.dhs.gov/students/work/applying-for-practical-training",
        },
      ],
      sources: [
        {
          name: "ICE/SEVP: F-1 employment",
          url: "https://www.ice.gov/sevis/employment",
        },
        {
          name: "Study in the States: Applying for practical training",
          url: "https://studyinthestates.dhs.gov/students/work/applying-for-practical-training",
        },
        {
          name: "Study in the States: Fixed time period of admission final rule",
          url: "https://studyinthestates.dhs.gov/final-rule-establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-quick",
        },
      ],
    },
  },

  newZealand: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Fees for international students depend on the provider, subject and length of study. Medicine and veterinary science cost more. Study with New Zealand (the government's education agency) publishes typical annual ranges. International PhD students pay the same fees as domestic PhD students.",
      figures: [
        {
          label: "Bachelor's degree (updated March 2025)",
          value: "About NZ$35,000 – NZ$55,000 per year",
          sourceUrl:
            "https://www.studywithnewzealand.govt.nz/en/plan-your-studies/cost-of-living",
        },
        {
          label: "Postgraduate degree",
          value: "About NZ$20,000 – NZ$45,000 per year",
          sourceUrl:
            "https://www.studywithnewzealand.govt.nz/en/plan-your-studies/cost-of-living",
        },
        {
          label: "PhD (domestic rate, updated March 2025)",
          value: "About NZ$6,500 – NZ$7,500 per year",
          sourceUrl:
            "https://www.studywithnewzealand.govt.nz/en/plan-your-studies/cost-of-living",
        },
      ],
      sources: [
        {
          name: "Study with New Zealand: Tuition fees and cost of living",
          url: "https://www.studywithnewzealand.govt.nz/en/plan-your-studies/cost-of-living",
        },
      ],
    },
    livingCosts: {
      summary:
        "Immigration New Zealand requires tertiary students to show money for living costs, separate from tuition. Study with New Zealand notes that universities estimate actual living costs at about NZ$18,000–NZ$27,000 a year, depending on the city.",
      figures: [
        {
          label: "Visa proof of funds, tertiary study of 1 year or more (2026)",
          value: "NZ$20,000 per year",
          sourceUrl:
            "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/student-fund-requirements/",
        },
        {
          label: "Study shorter than 1 year",
          value: "NZ$1,667 per month",
          sourceUrl:
            "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/student-fund-requirements/",
        },
      ],
      sources: [
        {
          name: "Immigration New Zealand: Student fund requirements",
          url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/student-fund-requirements/",
        },
        {
          name: "Study with New Zealand: Tuition fees and cost of living",
          url: "https://www.studywithnewzealand.govt.nz/en/plan-your-studies/cost-of-living",
        },
      ],
    },
    studentJobs: {
      summary:
        "Your exact work rights are printed in your visa conditions (eVisa). Most full-time tertiary students can work part-time during study and full-time in scheduled breaks if their course lasts at least one academic year (120 credits over two semesters). Graduates may qualify for a Post Study Work Visa.",
      figures: [
        {
          label: "During study (visas granted from 3 Nov 2025)",
          value: "Up to 25 hours per week",
          sourceUrl:
            "https://www.immigration.govt.nz/study/once-you-have-a-student-visa/working-on-a-student-visa/",
        },
        {
          label: "Scheduled holidays (eligible courses)",
          value: "Full-time",
          sourceUrl:
            "https://www.immigration.govt.nz/study/once-you-have-a-student-visa/working-on-a-student-visa/",
        },
        {
          label: "After graduation (Post Study Work Visa)",
          value:
            "3 years after a master's or doctorate; after a bachelor's, the same length as your study",
          sourceUrl:
            "https://www.immigration.govt.nz/work/requirements-for-work-visas/how-long-you-can-work-on-work-visas/how-long-you-can-stay-on-a-post-study-work-visa/",
        },
      ],
      sources: [
        {
          name: "Immigration New Zealand: Working on a student visa",
          url: "https://www.immigration.govt.nz/study/once-you-have-a-student-visa/working-on-a-student-visa/",
        },
        {
          name: "Immigration New Zealand: Post Study Work Visa length",
          url: "https://www.immigration.govt.nz/work/requirements-for-work-visas/how-long-you-can-work-on-work-visas/how-long-you-can-stay-on-a-post-study-work-visa/",
        },
        {
          name: "INZ Operational Manual WD3.5",
          url: "https://www.immigration.govt.nz/opsmanual/71752.htm",
        },
      ],
    },
  },
  netherlands: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Students from the EU/EEA, Switzerland or Suriname usually pay the statutory fee set by the Dutch government. Other students pay an institutional fee that each university sets per programme, so check the programme page. Some institutions also charge an application fee of about €75–€100.",
      figures: [
        {
          label: "Statutory fee, EU/EEA/Swiss/Surinamese students (2026-27)",
          value: "€2,694 per year",
          sourceUrl:
            "https://www.studyinnl.org/finances/tuition-fees",
        },
        {
          label: "Institutional fee, non-EU bachelor's (typical range)",
          value: "About €9,000 – €20,000 per year",
          sourceUrl:
            "https://www.studyinnl.org/finances/tuition-fees",
        },
        {
          label: "Institutional fee, non-EU master's (typical range)",
          value: "About €12,000 – €30,000 per year",
          sourceUrl:
            "https://www.studyinnl.org/finances/tuition-fees",
        },
      ],
      sources: [
        {
          name: "Study in NL (Nuffic): Tuition fees",
          url: "https://www.studyinnl.org/finances/tuition-fees",
        },
      ],
    },
    livingCosts: {
      summary:
        "To get a student residence permit, you must show the IND that you have enough money for living costs. The amount is the IND study norm, which is updated every January.",
      figures: [
        {
          label: "Visa proof of funds, university/HBO (2026)",
          value: "€1,130.77 per month",
          sourceUrl:
            "https://ind.nl/en/required-amounts-income-requirements",
        },
        {
          label: "Visa proof of funds for 12 months (2026)",
          value: "€13,569.24",
          sourceUrl:
            "https://ind.nl/en/required-amounts-income-requirements",
        },
      ],
      sources: [
        {
          name: "IND: Required amounts and income requirements",
          url: "https://ind.nl/en/required-amounts-income-requirements",
        },
        {
          name: "IND: Income requirements for study",
          url: "https://ind.nl/en/income-requirements-study",
        },
      ],
    },
    studentJobs: {
      summary:
        "Non-EU/EEA students may work alongside their studies, but the employer must get a work permit (TWV) for them. For each year you must choose either part-time work during the year or full-time seasonal work in the summer, not both. After graduating, you can apply for the orientation-year permit to look for work, with free access to the labour market.",
      figures: [
        {
          label: "During the year (with employer's TWV)",
          value: "Up to 16 hours per week",
          sourceUrl:
            "https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education",
        },
        {
          label: "Seasonal alternative (with employer's TWV)",
          value: "Full-time in June, July and August",
          sourceUrl:
            "https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education",
        },
        {
          label: "Post-study: orientation year",
          value: "1 year; apply within 3 years of graduating; no work permit needed",
          sourceUrl:
            "https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year",
        },
      ],
      sources: [
        {
          name: "IND: Student residence permit for university or higher professional education",
          url: "https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education",
        },
        {
          name: "Netherlands Labour Authority: Foreign students",
          url: "https://www.nllabourauthority.nl/topics/foreign-nationals-employment-act/foreign-students",
        },
        {
          name: "IND: Residence permit for orientation year",
          url: "https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year",
        },
      ],
    },
  },
  sweden: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Students from outside the EU/EEA and Switzerland pay tuition. Each university sets its own fees, and the amount depends on the subject. Study in Sweden (the Swedish Institute) publishes these typical ranges. There is also an application fee for non-EU applicants.",
      figures: [
        {
          label: "Typical tuition, all subjects",
          value: "About SEK 80,000 – 320,000 per academic year (average about SEK 160,000)",
          sourceUrl:
            "https://studyinsweden.se/plan-your-studies/fees-costs/",
        },
        {
          label: "Social sciences and humanities",
          value: "About SEK 80,000 – 135,000 per year",
          sourceUrl:
            "https://studyinsweden.se/plan-your-studies/fees-costs/",
        },
        {
          label: "Technology and natural sciences",
          value: "About SEK 140,000 – 185,000 per year",
          sourceUrl:
            "https://studyinsweden.se/plan-your-studies/fees-costs/",
        },
        {
          label: "Architecture and design",
          value: "About SEK 210,000 – 320,000 per year",
          sourceUrl:
            "https://studyinsweden.se/plan-your-studies/fees-costs/",
        },
        {
          label: "Application fee",
          value: "SEK 900",
          sourceUrl:
            "https://studyinsweden.se/plan-your-studies/fees-costs/",
        },
      ],
      sources: [
        {
          name: "Study in Sweden: Fees and costs",
          url: "https://studyinsweden.se/plan-your-studies/fees-costs/",
        },
      ],
    },
    livingCosts: {
      summary:
        "The Swedish Migration Agency requires you to show money for your living costs during your studies. The amount is lower if free food or free housing is part of your arrangement.",
      figures: [
        {
          label: "Visa proof of funds (applications in 2026)",
          value: "At least SEK 10,656 per month",
          sourceUrl:
            "https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html",
        },
        {
          label: "Visa proof of funds (applications in 2025)",
          value: "SEK 10,584 per month",
          sourceUrl:
            "https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html",
        },
      ],
      sources: [
        {
          name: "Migrationsverket: Residence permit for higher education studies",
          url: "https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html",
        },
      ],
    },
    studentJobs: {
      summary:
        "Under new rules for permits granted from 11 June 2026, students may work up to 15 hours a week during the semesters and without a limit in June, July and August. Some work at your own university (such as teaching, research or student representation) does not count towards the limit. After completing your studies, you can apply for a permit to stay and look for work.",
      figures: [
        {
          label: "During semesters (permits granted from 11 June 2026)",
          value: "Up to 15 hours per week",
          sourceUrl:
            "https://www.migrationsverket.se/nyheter/news-archive/2026-05-25-new-rules-for-residence-permits-for-studies-in-higher-education.html",
        },
        {
          label: "Summer",
          value: "No limit in June, July and August",
          sourceUrl:
            "https://www.migrationsverket.se/nyheter/news-archive/2026-05-25-new-rules-for-residence-permits-for-studies-in-higher-education.html",
        },
        {
          label: "Post-study: permit to look for work",
          value: "Up to 1 year after a bachelor's or master's degree",
          sourceUrl:
            "https://www.migrationsverket.se/en/you-want-to-extend/study/look-for-work-after-completing-your-studies-in-sweden.html",
        },
      ],
      sources: [
        {
          name: "Migrationsverket: New rules for residence permits for higher education studies (2026)",
          url: "https://www.migrationsverket.se/nyheter/news-archive/2026-05-25-new-rules-for-residence-permits-for-studies-in-higher-education.html",
        },
        {
          name: "Migrationsverket: Look for work after completing your studies",
          url: "https://www.migrationsverket.se/en/you-want-to-extend/study/look-for-work-after-completing-your-studies-in-sweden.html",
        },
      ],
    },
  },
  norway: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Since autumn 2023, degree students from outside the EU/EEA and Switzerland normally pay tuition at Norwegian public institutions. Each institution sets its own fees, so there is no national figure. Exchange students and PhD candidates are generally exempt. All students also pay a small semester fee to the student welfare organisation.",
      figures: [
        {
          label: "Tuition, non-EU/EEA/Swiss degree students",
          value: "Not centrally published – set by each institution",
          sourceUrl:
            "https://studyinnorway.no/tuition-fees-students",
        },
        {
          label: "Semester fee (all students)",
          value: "Typically about NOK 1,000 per semester",
          sourceUrl:
            "https://studyinnorway.no/cost-and-requirements",
        },
      ],
      sources: [
        {
          name: "Study in Norway: Tuition fees",
          url: "https://studyinnorway.no/tuition-fees-students",
        },
        {
          name: "Study in Norway: Cost and requirements",
          url: "https://studyinnorway.no/cost-and-requirements",
        },
      ],
    },
    livingCosts: {
      summary:
        "To get a study permit, you must show UDI that you have enough money to live on for one academic year. The amount is set for each academic year.",
      figures: [
        {
          label: "Visa proof of funds (2026-27)",
          value: "NOK 170,368 per year (NOK 15,488 per month)",
          sourceUrl:
            "https://www.udi.no/en/want-to-apply/studies/studietillatelse/",
        },
      ],
      sources: [
        {
          name: "UDI: Study permit",
          url: "https://www.udi.no/en/want-to-apply/studies/studietillatelse/",
        },
        {
          name: "Study in Norway: Cost and requirements",
          url: "https://studyinnorway.no/cost-and-requirements",
        },
      ],
    },
    studentJobs: {
      summary:
        "A first study permit automatically lets you work part-time during studies and full-time in the holidays. You cannot be self-employed on a study permit. After graduating, you can apply for a job-seeker permit, but you must show enough money to live on while you search.",
      figures: [
        {
          label: "During studies",
          value: "Up to 20 hours per week",
          sourceUrl:
            "https://www.udi.no/en/want-to-apply/studies/studietillatelse/",
        },
        {
          label: "Holidays",
          value: "Full-time",
          sourceUrl:
            "https://www.udi.no/en/want-to-apply/studies/studietillatelse/",
        },
        {
          label: "Post-study: job-seeker permit",
          value: "Up to 1 year; requires funds of NOK 28,448 per month",
          sourceUrl:
            "https://www.udi.no/en/want-to-apply/work-immigration/job-seekers/",
        },
      ],
      sources: [
        {
          name: "UDI: Study permit",
          url: "https://www.udi.no/en/want-to-apply/studies/studietillatelse/",
        },
        {
          name: "UDI: Job seekers",
          url: "https://www.udi.no/en/want-to-apply/work-immigration/job-seekers/",
        },
      ],
    },
  },
  denmark: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Higher education is free for students from the EU/EEA and Switzerland. Other full-degree students pay tuition, which each institution sets. Study in Denmark (the Ministry of Higher Education and Science) publishes the typical range.",
      figures: [
        {
          label: "Non-EU/EEA/Swiss full-degree students (typical range)",
          value: "About €6,000 – €16,000 per year (DKK 45,000 – 120,000)",
          sourceUrl:
            "https://studyindenmark.dk/study-options/tuition-fees-and-scholarships",
        },
      ],
      sources: [
        {
          name: "Study in Denmark: Tuition fees and scholarships",
          url: "https://studyindenmark.dk/study-options/tuition-fees-and-scholarships",
        },
      ],
    },
    livingCosts: {
      summary:
        "SIRI (the Danish Agency for International Recruitment and Integration) requires you to show money for your living costs. You need the monthly amount for each month of study, up to 12 months.",
      figures: [
        {
          label: "Visa proof of funds (2026)",
          value: "DKK 7,426 per month",
          sourceUrl:
            "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education",
        },
        {
          label: "Visa proof of funds, maximum (12 months)",
          value: "DKK 89,112",
          sourceUrl:
            "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education",
        },
      ],
      sources: [
        {
          name: "SIRI / New to Denmark: Higher education",
          url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students in state-approved higher education programmes may work part-time during the academic year and full-time in the summer. Students in programmes that are not state-approved, who applied on or after 2 May 2025, have no right to work. A job-seeking period after graduation is usually included in the study permit.",
      figures: [
        {
          label: "September – May",
          value: "Up to 90 hours per month",
          sourceUrl:
            "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education",
        },
        {
          label: "June, July and August",
          value: "Full-time",
          sourceUrl:
            "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education",
        },
        {
          label: "Post-study: job-seeking (bachelor's/master's, applied on or after 1 Oct 2026)",
          value: "6 months or 1 year",
          sourceUrl:
            "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Study---job-seeking/Study---3-years-job-seeking",
        },
        {
          label: "Post-study: job-seeking (applied before 1 Oct 2026)",
          value: "6 months or 3 years",
          sourceUrl:
            "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Study---job-seeking/Study---3-years-job-seeking",
        },
      ],
      sources: [
        {
          name: "SIRI / New to Denmark: Higher education",
          url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education",
        },
        {
          name: "SIRI / New to Denmark: Study and job-seeking",
          url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Study---job-seeking/Study---3-years-job-seeking",
        },
      ],
    },
  },
  france: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Public institutions charge fees set by the state. Most students from outside the EU/EEA and Switzerland pay higher “differentiated” fees for bachelor's (licence) and master's degrees. Universities may exempt some of these students. Doctoral fees are the same for everyone. Most students also pay the CVEC student life contribution. Private institutions set their own fees.",
      figures: [
        {
          label: "Licence (bachelor's), non-EU differentiated fee (2026-27)",
          value: "€2,902 per year",
          sourceUrl:
            "https://www.service-public.gouv.fr/particuliers/actualites/A17481",
        },
        {
          label: "Master's, non-EU differentiated fee (2026-27)",
          value: "€3,950 per year",
          sourceUrl:
            "https://www.service-public.gouv.fr/particuliers/actualites/A17481",
        },
        {
          label: "Doctorate, all students (2026-27)",
          value: "€398 per year",
          sourceUrl:
            "https://www.service-public.gouv.fr/particuliers/actualites/A17481",
        },
        {
          label: "CVEC student life contribution (2026-27)",
          value: "€105 per year",
          sourceUrl:
            "https://www.service-public.gouv.fr/particuliers/actualites/A17481",
        },
      ],
      sources: [
        {
          name: "Service-Public.fr: Tuition fees for 2026-27",
          url: "https://www.service-public.gouv.fr/particuliers/actualites/A17481",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a long-stay student visa, you must show proof of resources for your stay. The amount went up for visa applications made from 1 August 2026.",
      figures: [
        {
          label: "Visa proof of funds (applications from 1 Aug 2026)",
          value: "€877.50 per month",
          sourceUrl:
            "https://uk.diplomatie.gouv.fr/en/france-visas-french-student-visa-important-announcement",
        },
        {
          label: "Previous amount (before 1 Aug 2026)",
          value: "€615 per month",
          sourceUrl:
            "https://uk.diplomatie.gouv.fr/en/france-visas-french-student-visa-important-announcement",
        },
      ],
      sources: [
        {
          name: "French Embassy (France-Visas): Student visa announcement",
          url: "https://uk.diplomatie.gouv.fr/en/france-visas-french-student-visa-important-announcement",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students with a valid student residence permit or validated VLS-TS visa may work without a separate work authorisation, up to 60% of the legal yearly working time. The employer must notify the prefecture before you start. Algerian nationals have different rules. After a master's-level degree, you can get a one-year permit to look for a job or create a company.",
      figures: [
        {
          label: "Work during studies",
          value: "Up to 964 hours per year",
          sourceUrl:
            "https://www.service-public.gouv.fr/particuliers/vosdroits/F2713",
        },
        {
          label: "Post-study: job-search / business-creation permit",
          value: "1 year, not renewable (master's-level degree or licence professionnelle)",
          sourceUrl:
            "https://www.service-public.gouv.fr/particuliers/vosdroits/F17319",
        },
      ],
      sources: [
        {
          name: "Service-Public.fr: Working as a foreign student",
          url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2713",
        },
        {
          name: "Service-Public.fr: Residence permit to look for a job or create a business",
          url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17319",
        },
      ],
    },
  },
  switzerland: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Each Swiss university sets its own fees, so there is no single national tuition fee. Many universities charge foreign students more than Swiss students. swissuniversities publishes an overview of fees at the cantonal universities and federal institutes of technology. The figures below are for foreign students, per semester, and do not include extra compulsory fees.",
      figures: [
        {
          label: "Range for foreign students at public universities (2026-27)",
          value: "About CHF 435 – 4,000 per semester",
          sourceUrl:
            "https://www.swissuniversities.ch/en/themen/lehre-studium/information-on-studies/tuition-fees/tuition-fees-at-universities",
        },
        {
          label: "ETH Zurich and EPFL (2026-27)",
          value: "CHF 2,190 per semester",
          sourceUrl:
            "https://www.swissuniversities.ch/en/themen/lehre-studium/information-on-studies/tuition-fees/tuition-fees-at-universities",
        },
        {
          label: "Examples (2026-27)",
          value: "Geneva CHF 435; Basel CHF 850; Bern CHF 2,550; USI CHF 4,000 per semester",
          sourceUrl:
            "https://www.swissuniversities.ch/en/themen/lehre-studium/information-on-studies/tuition-fees/tuition-fees-at-universities",
        },
      ],
      sources: [
        {
          name: "swissuniversities: Tuition fees at universities",
          url: "https://www.swissuniversities.ch/en/themen/lehre-studium/information-on-studies/tuition-fees/tuition-fees-at-universities",
        },
      ],
    },
    livingCosts: {
      summary:
        "Federal law says students must have the financial means they need for their stay. The exact amount is set by the cantonal migration office, so there is no national figure. Check with your university and the canton where you will study.",
      figures: [
        {
          label: "Visa proof of funds",
          value: "Not centrally published – set by each canton",
          sourceUrl:
            "https://www.fedlex.admin.ch/eli/cc/2007/758/en",
        },
      ],
      sources: [
        {
          name: "Fedlex: Foreign Nationals and Integration Act (AIG), Art. 27",
          url: "https://www.fedlex.admin.ch/eli/cc/2007/758/en",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students from outside the EU/EFTA may start working only 6 months after their course begins. The weekly limit applies outside holidays. The university must confirm that the job will not slow down your studies, and the employer must apply for the permit. After graduating, you have 6 months to look for a job that matches your qualifications.",
      figures: [
        {
          label: "During studies (from 6 months after the start)",
          value: "Up to 15 hours per week outside holidays",
          sourceUrl:
            "https://www.sem.admin.ch/sem/en/home/themen/arbeit/faq.html",
        },
        {
          label: "Post-study job search",
          value: "6 months after finishing your studies",
          sourceUrl:
            "https://www.sem.admin.ch/sem/en/home/themen/arbeit/faq.html",
        },
      ],
      sources: [
        {
          name: "SEM: FAQ – Working in Switzerland",
          url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/faq.html",
        },
      ],
    },
  },
  austria: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "At public universities, students from outside the EU/EEA with a Student residence permit usually pay a fixed fee per semester. EU/EEA students pay nothing within the minimum study time plus two semesters. All students pay the student union (ÖH) fee. Universities of applied sciences and private universities set their own fees. Exemptions exist for some scholarship holders, exchange students and certain countries.",
      figures: [
        {
          label: "Public universities, third-country students",
          value: "€726.72 per semester",
          sourceUrl:
            "https://studyinaustria.at/en/tuition",
        },
        {
          label: "Student union (ÖH) fee",
          value: "€26.20 per semester",
          sourceUrl:
            "https://studyinaustria.at/en/tuition",
        },
        {
          label: "EU/EEA students beyond minimum duration + 2 semesters",
          value: "€363.36 per semester",
          sourceUrl:
            "https://studyinaustria.at/en/tuition",
        },
      ],
      sources: [
        {
          name: "OeAD Study in Austria: Tuition fees",
          url: "https://studyinaustria.at/en/tuition",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a Student residence permit, you must show regular income at the level set by the Austrian social security rates (ASVG), which are updated every year. The amount depends on your age.",
      figures: [
        {
          label: "Visa proof of funds, under 24 (2026)",
          value: "€777.58 per month",
          sourceUrl:
            "https://www.migration.gv.at/en/types-of-immigration/temporary-residence/",
        },
        {
          label: "Visa proof of funds, 24 and over (2026)",
          value: "€1,308.39 per month",
          sourceUrl:
            "https://www.migration.gv.at/en/types-of-immigration/temporary-residence/",
        },
      ],
      sources: [
        {
          name: "migration.gv.at: Temporary residence (Students)",
          url: "https://www.migration.gv.at/en/types-of-immigration/temporary-residence/",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students from outside the EU/EEA need an employment permit, even for marginal jobs. The employer applies to the Public Employment Service (AMS). For jobs up to 20 hours a week, there is no labour-market test. After graduating, you can renew your Student permit once for 12 months to look for a job or start a business.",
      figures: [
        {
          label: "During studies (employer gets AMS permit)",
          value: "Up to 20 hours per week without a labour-market test",
          sourceUrl:
            "https://www.migration.gv.at/en/types-of-immigration/temporary-residence/",
        },
        {
          label: "Post-study: job-search extension",
          value: "12 months, once",
          sourceUrl:
            "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/",
        },
      ],
      sources: [
        {
          name: "migration.gv.at: Temporary residence (Students)",
          url: "https://www.migration.gv.at/en/types-of-immigration/temporary-residence/",
        },
        {
          name: "migration.gv.at: Graduates",
          url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/",
        },
      ],
    },
  },
  belgium: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Higher education is run by the language communities, so fees differ by region. Flanders (Dutch-speaking): each institution sets fees for non-EEA students within published guidelines. Wallonia-Brussels Federation (French-speaking): fees are capped by the Federation, and most non-EU students pay an extra contribution unless they are exempt (for example, nationals of least developed countries, or some other countries at universities). Your exact fee is confirmed in your enrolment letter.",
      figures: [
        {
          label: "Flanders, EU/EEA students (2026-27, 60 credits)",
          value: "€1,181.40 per year",
          sourceUrl:
            "https://www.studyinflanders.be/practical-information/tuition-fees",
        },
        {
          label: "Flanders, non-EU/EEA students (2026-27, 60 credits)",
          value: "About €5,300 – €12,000 per year (arts schools €8,800 – €25,000)",
          sourceUrl:
            "https://www.studyinflanders.be/practical-information/tuition-fees",
        },
        {
          label: "Wallonia-Brussels, non-EU students (standard)",
          value: "€5,369 per year (€1,194 fee + €4,175 extra contribution)",
          sourceUrl:
            "https://www.studyinbelgium.be/en/studying-french-speaking-belgium-registration-fees",
        },
        {
          label: "Wallonia-Brussels, non-EU students exempt from extra contribution",
          value: "€835 per year",
          sourceUrl:
            "https://www.studyinbelgium.be/en/studying-french-speaking-belgium-registration-fees",
        },
      ],
      sources: [
        {
          name: "Study in Flanders: Tuition fees",
          url: "https://www.studyinflanders.be/practical-information/tuition-fees",
        },
        {
          name: "Wallonie-Bruxelles Campus (Study in Belgium): Registration fees",
          url: "https://www.studyinbelgium.be/en/studying-french-speaking-belgium-registration-fees",
        },
      ],
    },
    livingCosts: {
      summary:
        "The federal Immigration Office sets the same proof of funds for the whole country. Accepted proof includes a scholarship, money transferred to your institution or an approved provider, or a formal sponsor undertaking (annex 32). Check the details with the Belgian embassy where you apply.",
      figures: [
        {
          label: "Visa proof of funds (2026-27 academic year)",
          value: "€1,062 net per month",
          sourceUrl:
            "https://lebanon.diplomatie.belgium.be/sites/default/files/2026-04/Checklist%20-%20Long%20stay%20Academic%20Visa%2008.04.2026_1.pdf",
        },
      ],
      sources: [
        {
          name: "Belgian Embassy: Long-stay study visa checklist (2026-27)",
          url: "https://lebanon.diplomatie.belgium.be/sites/default/files/2026-04/Checklist%20-%20Long%20stay%20Academic%20Visa%2008.04.2026_1.pdf",
        },
        {
          name: "Immigration Office (DOFI): Sufficient means of subsistence",
          url: "https://dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/etudes/favoris/moyens-de-subsistance-suffisants",
        },
      ],
    },
    studentJobs: {
      summary:
        "The rules are the same in Flanders and in Wallonia-Brussels. Students with a valid residence card (“labour market – limited”) can work without a separate work permit, up to 20 hours a week during term and with no weekly limit in school holidays. Work must fit with your studies. After graduating, you can ask for a “search year” permit of up to 12 months to look for work or start a business.",
      figures: [
        {
          label: "During term (Flanders and Wallonia-Brussels)",
          value: "Up to 20 hours per week",
          sourceUrl:
            "https://www.vlaanderen.be/werken/een-buitenlander-in-vlaanderen-tewerkstellen/voor-wie",
        },
        {
          label: "School holidays",
          value: "No weekly limit",
          sourceUrl:
            "https://www.studyinbelgium.be/en/working-while-studying-french-speaking-belgium",
        },
        {
          label: "Post-study: search year",
          value: "Up to 12 months",
          sourceUrl:
            "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-belgium_en",
        },
      ],
      sources: [
        {
          name: "Vlaanderen.be: Foreign workers exempt from work authorisation",
          url: "https://www.vlaanderen.be/werken/een-buitenlander-in-vlaanderen-tewerkstellen/voor-wie",
        },
        {
          name: "Wallonie-Bruxelles Campus: Working while studying",
          url: "https://www.studyinbelgium.be/en/working-while-studying-french-speaking-belgium",
        },
        {
          name: "European Commission EU Immigration Portal: Student in Belgium",
          url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-belgium_en",
        },
      ],
    },
  },
  italy: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Each Italian public university sets its own fees, so there is no national tuition figure. Fees usually depend on family income (ISEE), and students whose income and assets are abroad can often use an equivalent ISEE or pay a flat rate set by the university. By law, state universities charge no fees for students with an ISEE under €13,000, and capped fees up to €30,000.",
      figures: [
        {
          label: "Tuition at public universities",
          value: "Not centrally published – set by each university",
          sourceUrl:
            "http://www.dsu.miur.gov.it/",
        },
        {
          label: "No Tax Area (state universities)",
          value: "No tuition with an ISEE under €13,000; reduced fees up to €30,000",
          sourceUrl:
            "http://www.dsu.miur.gov.it/",
        },
      ],
      sources: [
        {
          name: "Ministry of University and Research: Right to study / No Tax Area (in Italian)",
          url: "http://www.dsu.miur.gov.it/",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a university study visa, you must show the Italian embassy or consulate that you have enough money for the year. The money must come from lawful, traceable sources. A confirmed scholarship can count, but a pending application does not. The amount is set each academic year in the Ministry of University and Research circular.",
      figures: [
        {
          label: "Visa proof of funds (2026-27)",
          value: "€10,179.85 per year (about €848 per month)",
          sourceUrl:
            "https://ambbaku.esteri.it/wp-content/uploads/2026/05/Checklist-visto-studio-nazionale.rev_.pdf",
        },
      ],
      sources: [
        {
          name: "Italian Embassy in Baku: Study visa checklist 2026-27 (in Italian)",
          url: "https://ambbaku.esteri.it/wp-content/uploads/2026/05/Checklist-visto-studio-nazionale.rev_.pdf",
        },
        {
          name: "Ministry of University and Research: Circular on international students 2026-27 (English version)",
          url: "https://portale.units.it/sites/default/files/2026-05/Circolare%202026-2027%20studenti_internazionali_EN_0.pdf",
        },
      ],
    },
    studentJobs: {
      summary:
        "A study residence permit lets you work as an employee up to 20 hours a week and 1,040 hours a year. If you work only during part of the year, such as the summer break, you can go above 20 hours a week as long as you stay within 1,040 hours a year. Self-employment is not hour-limited. After a degree in Italy, you can apply for a 9–12 month permit to look for work or start a business.",
      figures: [
        {
          label: "Employment during studies",
          value: "Up to 20 hours per week and 1,040 hours per year",
          sourceUrl:
            "https://www.integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3085/-possibile-lavorare-con-un-permesso-per-motivi-di-studio-E-svolgere-un-tirocinio",
        },
        {
          label: "Post-study: job-search / business permit",
          value: "9 to 12 months",
          sourceUrl:
            "https://integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3301/Conversione-del-permesso-di-soggiorno-da-studio-a-lavoro-Cosa-e-cambiato-con-il-decreto-Cutro",
        },
      ],
      sources: [
        {
          name: "Integrazione Migranti (Ministry of Labour): Working on a study permit (in Italian)",
          url: "https://www.integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3085/-possibile-lavorare-con-un-permesso-per-motivi-di-studio-E-svolgere-un-tirocinio",
        },
        {
          name: "Integrazione Migranti (Ministry of Labour): Converting a study permit (in Italian)",
          url: "https://integrazionemigranti.gov.it/it-it/Ricerca-news/Dettaglio-news/id/3301/Conversione-del-permesso-di-soggiorno-da-studio-a-lavoro-Cosa-e-cambiato-con-il-decreto-Cutro",
        },
      ],
    },
  },
  spain: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Fees at public universities are set every year by each autonomous community, and some regions charge non-EU students who are not resident in Spain more. So there is no single national figure for international students. The Ministry of Universities publishes average public prices for a first enrolment. Private universities set their own fees.",
      figures: [
        {
          label: "Tuition for non-EU students",
          value: "Not centrally published – set by each region and university",
          sourceUrl:
            "https://www.ciencia.gob.es/Ministerio/Estadisticas/SIIU/Precios.html",
        },
        {
          label: "Average public price, bachelor's (2024-25, first enrolment)",
          value: "About €11.95 – €19.29 per credit, depending on region",
          sourceUrl:
            "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/ciencia-innovacion-universidades/paginas/2025/310125-bajada-precio-titulos-univesidad-publica.aspx",
        },
        {
          label: "Average public price, non-professional master's (2024-25)",
          value: "About €30.04 per credit",
          sourceUrl:
            "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/ciencia-innovacion-universidades/paginas/2025/310125-bajada-precio-titulos-univesidad-publica.aspx",
        },
      ],
      sources: [
        {
          name: "Ministry of Science, Innovation and Universities: Public university prices statistics (in Spanish)",
          url: "https://www.ciencia.gob.es/Ministerio/Estadisticas/SIIU/Precios.html",
        },
        {
          name: "La Moncloa: 2024-25 university price statistics (in Spanish)",
          url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/ciencia-innovacion-universidades/paginas/2025/310125-bajada-precio-titulos-univesidad-publica.aspx",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a student stay authorisation, you must show money for each month of your stay equal to 100% of IPREM, a public income index. You need less if your accommodation is already paid for the whole stay. Money for tuition does not count towards this amount.",
      figures: [
        {
          label: "Visa proof of funds (2026)",
          value: "€600 per month (100% of IPREM)",
          sourceUrl:
            "https://www.exteriores.gob.es/Embajadas/nuevadelhi/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=India&scd=214&scs=Visados+Nacionales+-+Visado+de+estudios",
        },
      ],
      sources: [
        {
          name: "Spanish Embassy in New Delhi: Study visa (in Spanish)",
          url: "https://www.exteriores.gob.es/Embajadas/nuevadelhi/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=India&scd=214&scs=Visados+Nacionales+-+Visado+de+estudios",
        },
        {
          name: "BOE: Immigration Regulation RD 1155/2024, Art. 35 (in Spanish)",
          url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099",
        },
      ],
    },
    studentJobs: {
      summary:
        "Since 20 May 2025, a student stay for higher education automatically lets you work as an employee or self-employed, with no extra permit, as long as the work fits with your studies. Work is capped at 30 hours a week. After a degree of at least bachelor's level, you can apply for a 24-month permit to look for a job or start a business. You cannot work on that permit; once you find a job, you apply for a work permit.",
      figures: [
        {
          label: "During higher-education studies",
          value: "Up to 30 hours per week",
          sourceUrl:
            "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099",
        },
        {
          label: "Post-study: job-search / business permit",
          value: "24 months, not renewable (no work allowed on this permit)",
          sourceUrl:
            "https://www.inclusion.gob.es/web/migraciones/w/20.-autorizacion-de-residencia-para-busqueda-de-empleo-o-inicio-de-proyecto-empresarial",
        },
      ],
      sources: [
        {
          name: "BOE: Immigration Regulation RD 1155/2024, Art. 57 (in Spanish)",
          url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099",
        },
        {
          name: "Ministry of Inclusion: Sheet 20 – Job-search residence permit (in Spanish)",
          url: "https://www.inclusion.gob.es/web/migraciones/w/20.-autorizacion-de-residencia-para-busqueda-de-empleo-o-inicio-de-proyecto-empresarial",
        },
      ],
    },
  },
  portugal: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Public institutions set their own fees for international (non-EU) students under the International Student Statute, so there is no national figure. For Portuguese and EU students, the state caps the yearly fee for bachelor's and integrated master's degrees.",
      figures: [
        {
          label: "Tuition for international students",
          value: "Not centrally published – set by each institution",
          sourceUrl:
            "https://www.dges.gov.pt/pt/pagina/propinas",
        },
        {
          label: "National fee cap, Portuguese/EU students (2025-26)",
          value: "€697 per year",
          sourceUrl:
            "https://www.dges.gov.pt/pt/pagina/propinas",
        },
      ],
      sources: [
        {
          name: "DGES: Tuition fees (in Portuguese)",
          url: "https://www.dges.gov.pt/pt/pagina/propinas",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a study residence visa, you must show stable means of subsistence equal to the national minimum wage (RMMG) for 12 months. The amount can be halved if your accommodation is covered, or reduced by up to 90% if food is covered too. Students admitted to institutions approved under Art. 91(5) of the Immigration Act do not need to show these funds.",
      figures: [
        {
          label: "Visa proof of funds (2026)",
          value: "€920 per month (national minimum wage)",
          sourceUrl:
            "https://www.dgert.gov.pt/retribuicao-minima-mensal-garantida-para-2026",
        },
        {
          label: "Visa proof of funds for 12 months (2026)",
          value: "€11,040",
          sourceUrl:
            "https://files.dre.pt/1s/2007/12/23800/0886608868.pdf",
        },
      ],
      sources: [
        {
          name: "Portaria 1563/2007, Diário da República (in Portuguese)",
          url: "https://files.dre.pt/1s/2007/12/23800/0886608868.pdf",
        },
        {
          name: "DGERT: Minimum monthly wage for 2026 (in Portuguese)",
          url: "https://www.dgert.gov.pt/retribuicao-minima-mensal-garantida-para-2026",
        },
      ],
    },
    studentJobs: {
      summary:
        "Holders of a residence permit for higher-education study may work as an employee or self-employed alongside their studies. The law sets no specific weekly hour limit, but study must stay the main purpose of your stay. After a master's or PhD, you can stay up to one year to look for work or start a business that matches your qualifications.",
      figures: [
        {
          label: "During studies",
          value: "Work allowed alongside studies (no fixed weekly limit published)",
          sourceUrl:
            "https://aima.gov.pt/pt/estudar/autorizacao-de-residencia-emitida-a-estudantes-do-ensino-superior-art-o-91",
        },
        {
          label: "Post-study: job search (master's or PhD graduates)",
          value: "Up to 1 year",
          sourceUrl:
            "https://aima.gov.pt/pt/trabalhar/tendo-beneficiado-de-ar-para-estudantes-do-2-o-ou-3-o-ciclos-do-ensino-superior-ou-de-ar-para-investigacao-e-concluido-os-estudo",
        },
      ],
      sources: [
        {
          name: "AIMA: Residence permit for higher-education students, Art. 91 (in Portuguese)",
          url: "https://aima.gov.pt/pt/estudar/autorizacao-de-residencia-emitida-a-estudantes-do-ensino-superior-art-o-91",
        },
        {
          name: "AIMA: Job search after master's/PhD, Art. 122(1)(p) (in Portuguese)",
          url: "https://aima.gov.pt/pt/trabalhar/tendo-beneficiado-de-ar-para-estudantes-do-2-o-ou-3-o-ciclos-do-ensino-superior-ou-de-ar-para-investigacao-e-concluido-os-estudo",
        },
      ],
    },
  },
  greece: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Bachelor's programmes taught in Greek at public universities are free for all students, including non-EU students. Undergraduate programmes taught in a foreign language, aimed at international students, charge fees. Many master's programmes also charge fees, set in each programme's rules. There is no national fee figure for these.",
      figures: [
        {
          label: "Greek-taught bachelor's at public universities",
          value: "Free for all students",
          sourceUrl:
            "https://eurydice.eacea.ec.europa.eu/countries/greece/national-student-fee",
        },
        {
          label: "Foreign-language bachelor's and most master's",
          value: "Not centrally published – set by each programme",
          sourceUrl:
            "https://eurydice.eacea.ec.europa.eu/countries/greece/national-student-fee",
        },
      ],
      sources: [
        {
          name: "Eurydice (European Commission): Greece – national student fees",
          url: "https://eurydice.eacea.ec.europa.eu/countries/greece/national-student-fee",
        },
      ],
    },
    livingCosts: {
      summary:
        "A joint ministerial decision under the Migration Code sets the minimum funds for a study visa and residence permit. The authorities assess each case, either monthly or yearly. You can prove funds with a bank account, transfer, grant, scholarship or part-time pay.",
      figures: [
        {
          label: "Visa/permit proof of funds (Joint Ministerial Decision 225679/2024)",
          value: "At least €650 per month",
          sourceUrl:
            "https://migration.gov.gr/wp-content/uploads/2024/10/3_%CE%9A%CE%A5%CE%91-%CE%95%CF%80%CE%B1%CF%81%CE%BA%CF%8E%CE%BD-%CF%80%CF%8C%CF%81%CF%89%CE%BD.pdf",
        },
      ],
      sources: [
        {
          name: "Ministry of Migration and Asylum: Joint Ministerial Decision on sufficient resources (in Greek)",
          url: "https://migration.gov.gr/wp-content/uploads/2024/10/3_%CE%9A%CE%A5%CE%91-%CE%95%CF%80%CE%B1%CF%81%CE%BA%CF%8E%CE%BD-%CF%80%CF%8C%CF%81%CF%89%CE%BD.pdf",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students on a study residence permit may work part-time only, outside their study hours. A 2026 amendment caps this at 20 hours a week. After finishing a higher-education degree, you can stay for one year to look for work or start a business that matches your studies. After 3 months, you must show you have a real chance of being hired or starting a business.",
      figures: [
        {
          label: "During studies (Law 5275/2026 amending Art. 118 of the Migration Code)",
          value: "Part-time, up to 20 hours per week",
          sourceUrl:
            "https://past.auth.gr/adeia-diamonis-gia-spoudes-diarkeia-ischyos-loipes-katigories-n-5275-2026/",
        },
        {
          label: "Post-study: job-search / business permit",
          value: "1 year",
          sourceUrl:
            "https://migration.gov.gr/wp-content/uploads/2023/04/%CE%9A%CF%8E%CE%B4%CE%B9%CE%BA%CE%B1%CF%82-%CE%9C%CE%B5%CF%84%CE%B1%CE%BD%CE%AC%CF%83%CF%84%CE%B5%CF%85%CF%83%CE%B7%CF%82.pdf",
        },
      ],
      sources: [
        {
          name: "Aristotle University of Thessaloniki: Notice on Law 5275/2026 (in Greek)",
          url: "https://past.auth.gr/adeia-diamonis-gia-spoudes-diarkeia-ischyos-loipes-katigories-n-5275-2026/",
        },
        {
          name: "Ministry of Migration and Asylum: Migration Code, Law 5038/2023, Art. 119 (in Greek)",
          url: "https://migration.gov.gr/wp-content/uploads/2023/04/%CE%9A%CF%8E%CE%B4%CE%B9%CE%BA%CE%B1%CF%82-%CE%9C%CE%B5%CF%84%CE%B1%CE%BD%CE%AC%CF%83%CF%84%CE%B5%CF%85%CF%83%CE%B7%CF%82.pdf",
        },
      ],
    },
  },
  poland: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Full-time study in Polish at public universities is free for EU/EEA citizens and holders of the Polish Card. Other foreign students pay fees that each university sets, and the fees cannot be lower than the cost of teaching. NAWA (the Polish National Agency for Academic Exchange) gives the typical range.",
      figures: [
        {
          label: "Typical tuition for non-EU students",
          value: "About €2,000 – €6,000 per year",
          sourceUrl:
            "https://study.gov.pl/tuition-fees",
        },
        {
          label: "MBA programmes",
          value: "About €8,000 – €12,000 per year",
          sourceUrl:
            "https://study.gov.pl/tuition-fees",
        },
      ],
      sources: [
        {
          name: "Study in Poland (NAWA): Tuition fees",
          url: "https://study.gov.pl/tuition-fees",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a study residence permit, the money you have each month after paying for housing must be more than Poland's social-assistance income threshold. You also need money for your housing, the return journey and your tuition.",
      figures: [
        {
          label: "Permit proof of funds, single person (threshold from 1 Jan 2025)",
          value: "More than PLN 1,010 per month, after housing costs",
          sourceUrl:
            "https://dziennikustaw.gov.pl/D2024000104401.pdf",
        },
        {
          label: "Each dependent family member",
          value: "More than PLN 823 per month",
          sourceUrl:
            "https://dziennikustaw.gov.pl/D2024000104401.pdf",
        },
      ],
      sources: [
        {
          name: "Act on Foreigners, Art. 144 (consolidated text 2025, in Polish)",
          url: "https://api.sejm.gov.pl/eli/acts/DU/2025/1079/text.pdf",
        },
        {
          name: "Council of Ministers Regulation on income thresholds, Dz.U. 2024 poz. 1044 (in Polish)",
          url: "https://dziennikustaw.gov.pl/D2024000104401.pdf",
        },
      ],
    },
    studentJobs: {
      summary:
        "Holders of a temporary residence permit for studies can work without a work permit. This also applies while your permit application is pending, if you applied while on a study visa. After graduating from a Polish university, you can get a one-time 9-month permit to look for work or start a business.",
      figures: [
        {
          label: "During studies (study residence permit)",
          value: "Work allowed without a work permit; no weekly hour limit stated",
          sourceUrl:
            "https://www.gov.pl/web/udsc/student",
        },
        {
          label: "Post-study: job-search permit",
          value: "9 months, once",
          sourceUrl:
            "https://www.gov.pl/web/udsc-en/permit-for-temporary-residence--graduate",
        },
      ],
      sources: [
        {
          name: "Office for Foreigners (UdSC): Student FAQ (in Polish)",
          url: "https://www.gov.pl/web/udsc/student",
        },
        {
          name: "Office for Foreigners (UdSC): Temporary residence permit – graduate",
          url: "https://www.gov.pl/web/udsc-en/permit-for-temporary-residence--graduate",
        },
      ],
    },
  },
  "czech-republic": {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Degree programmes taught in Czech at public and state universities are free for students of any nationality. You may still pay an admission fee, and extra fees if you study longer than the standard time. Programmes in English or other languages charge fees that each university sets. Private universities set their own fees.",
      figures: [
        {
          label: "Czech-taught programmes (public universities)",
          value: "Free for all nationalities",
          sourceUrl:
            "https://www.studyin.cz/plan-your-studies/scholarships-and-finances/",
        },
        {
          label: "English or other foreign-language programmes",
          value: "Usually €0 – €6,000 per year",
          sourceUrl:
            "https://www.studyin.cz/plan-your-studies/scholarships-and-finances/",
        },
        {
          label: "Medicine, arts and some specialised fields",
          value: "Usually €8,000 – €25,000 per year",
          sourceUrl:
            "https://www.studyin.cz/plan-your-studies/scholarships-and-finances/",
        },
      ],
      sources: [
        {
          name: "Study in Czechia (DZS): Scholarships and finances",
          url: "https://www.studyin.cz/plan-your-studies/scholarships-and-finances/",
        },
      ],
    },
    livingCosts: {
      summary:
        "The proof of funds is based on the subsistence minimum (CZK 3,130 a month since 2023). You need 15 times this amount for the first month plus twice the amount for each further month. Students can instead use a commitment from a public body or legal entity, or proof that the school covers all costs.",
      figures: [
        {
          label: "Visa/permit proof of funds, one semester (6 months)",
          value: "CZK 78,250",
          sourceUrl:
            "https://ipc.gov.cz/en/forms-and-documents/documents/proof-of-funds-for-the-residence-finances/",
        },
        {
          label: "Visa/permit proof of funds, one year",
          value: "CZK 115,810",
          sourceUrl:
            "https://ipc.gov.cz/en/forms-and-documents/documents/proof-of-funds-for-the-residence-finances/",
        },
      ],
      sources: [
        {
          name: "Ministry of the Interior (ipc.gov.cz): Proof of funds for the stay",
          url: "https://ipc.gov.cz/en/forms-and-documents/documents/proof-of-funds-for-the-residence-finances/",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students in a full-time, university-accredited programme have free access to the labour market. This means you need no separate work permit, only your residence permit. After graduating, you can apply for a permit of up to 9 months to look for work or start a business, and you can work without limits on it.",
      figures: [
        {
          label: "During full-time accredited studies",
          value: "No work permit needed (free labour-market access)",
          sourceUrl:
            "https://ipc.gov.cz/en/life-in-the-czech-republic/free-access-to-the-labour-market/",
        },
        {
          label: "Post-study: job-search / business permit",
          value: "Up to 9 months, not renewable",
          sourceUrl:
            "https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/long-term-residence-permit-for-the-purpose-of-seeking-employment-or-starting-a-business/",
        },
      ],
      sources: [
        {
          name: "Ministry of the Interior (ipc.gov.cz): Free access to the labour market",
          url: "https://ipc.gov.cz/en/life-in-the-czech-republic/free-access-to-the-labour-market/",
        },
        {
          name: "Ministry of the Interior (ipc.gov.cz): Permit for seeking employment or starting a business",
          url: "https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/long-term-residence-permit-for-the-purpose-of-seeking-employment-or-starting-a-business/",
        },
      ],
    },
  },
  hungary: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Each Hungarian university sets its own fees, which depend on the programme and study language. Study in Hungary (Tempus Public Foundation) points students to each university for exact fees.",
      figures: [
        {
          label: "Tuition for international students",
          value: "Not centrally published – set by each university",
          sourceUrl:
            "https://studyinhungary.hu/study-in-hungary/menu/studying-in-hungary/tuition-fees-and-funding-options.html",
        },
      ],
      sources: [
        {
          name: "Study in Hungary (Tempus Public Foundation): Tuition fees and funding",
          url: "https://studyinhungary.hu/study-in-hungary/menu/studying-in-hungary/tuition-fees-and-funding-options.html",
        },
      ],
    },
    livingCosts: {
      summary:
        "To get a study residence permit, you must prove you can cover your living costs, accommodation, return journey and healthcare from lawful income or savings. The immigration authority (OIF) does not publish a fixed minimum amount. You can prove this with a bank statement, a sponsor's declaration, proof of regular income or a scholarship certificate.",
      figures: [
        {
          label: "Permit proof of funds",
          value: "Not centrally published – no fixed amount set",
          sourceUrl:
            "https://oif.gov.hu/factsheets/residence-of-the-student-pupil",
        },
      ],
      sources: [
        {
          name: "National Directorate-General for Aliens Policing (OIF): Residence of students",
          url: "https://oif.gov.hu/factsheets/residence-of-the-student-pupil",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students on a study residence permit may work up to 30 hours a week during the study period. Outside the study period, they may work full-time for up to 90 days a year. After graduating, you can apply for a permit to look for a job or start a business that matches your studies.",
      figures: [
        {
          label: "During the study period",
          value: "Up to 30 hours per week",
          sourceUrl:
            "https://oif.gov.hu/factsheets/residence-of-the-student-pupil",
        },
        {
          label: "Outside the study period",
          value: "Full-time for up to 90 days per year",
          sourceUrl:
            "https://oif.gov.hu/factsheets/residence-of-the-student-pupil",
        },
        {
          label: "Post-study: job-search / business permit",
          value: "Up to 9 months, not renewable",
          sourceUrl:
            "https://www.oif.gov.hu/factsheets/residence-permit-for-the-purpose-of-seeking-a-job-or-starting-a-business",
        },
      ],
      sources: [
        {
          name: "OIF: Residence of students",
          url: "https://oif.gov.hu/factsheets/residence-of-the-student-pupil",
        },
        {
          name: "OIF: Residence permit for seeking a job or starting a business",
          url: "https://www.oif.gov.hu/factsheets/residence-permit-for-the-purpose-of-seeking-a-job-or-starting-a-business",
        },
      ],
    },
  },
  romania: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "The government sets minimum monthly fees for self-funded students from outside the EU/EEA and Switzerland. Each university senate sets the final fee. Fees are paid in advance for 9 months of the academic year. EU/EEA and Swiss students pay the same as Romanian students.",
      figures: [
        {
          label: "Minimum fee, technical, sciences, sport (bachelor's/master's)",
          value: "€270 per month",
          sourceUrl:
            "https://legislatie.just.ro/Public/DetaliiDocumentAfis/110933",
        },
        {
          label: "Minimum fee, social sciences, psychology, economics",
          value: "€220 per month",
          sourceUrl:
            "https://legislatie.just.ro/Public/DetaliiDocumentAfis/110933",
        },
        {
          label: "Minimum fee, medicine",
          value: "€320 per month",
          sourceUrl:
            "https://legislatie.just.ro/Public/DetaliiDocumentAfis/110933",
        },
        {
          label: "Minimum fee, architecture / music and arts",
          value: "€350 / €420 per month",
          sourceUrl:
            "https://legislatie.just.ro/Public/DetaliiDocumentAfis/110933",
        },
      ],
      sources: [
        {
          name: "Government Ordinance 22/2009 on minimum tuition fees (in Romanian)",
          url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/110933",
        },
        {
          name: "Embassy of Romania in the USA: Study in Romania",
          url: "https://washington.mae.ro/en/romania/300",
        },
      ],
    },
    livingCosts: {
      summary:
        "For a long-stay study visa, you must show money equal to at least the national gross minimum wage for each month of the visa. State scholarship holders are exempt. The minimum wage is updated by government decision.",
      figures: [
        {
          label: "Visa proof of funds (minimum wage from 1 July 2026)",
          value: "At least RON 4,325 per month",
          sourceUrl:
            "https://legislatie.just.ro/Public/DetaliiDocumentAfis/308231",
        },
      ],
      sources: [
        {
          name: "General Inspectorate for Immigration: Long-stay visa for studies (in Romanian)",
          url: "https://igi.mai.gov.ro/cum-pot-sa-obtin-o-viza-de-lunga-sedere-pentru-studii/",
        },
        {
          name: "Government Decision 146/2026 on the minimum wage (in Romanian)",
          url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/308231",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students with a residence permit for studies can work without a work permit, but only on a part-time contract of up to 6 hours a day. Working more hours needs a work permit. After graduating, your study residence right can be extended for 9 months to look for a job or start a business.",
      figures: [
        {
          label: "During studies (no work permit)",
          value: "Part-time, up to 6 hours per day",
          sourceUrl:
            "https://igi.mai.gov.ro/en/studies/",
        },
        {
          label: "Post-study extension",
          value: "9 months",
          sourceUrl:
            "https://igi.mai.gov.ro/en/studies/",
        },
      ],
      sources: [
        {
          name: "General Inspectorate for Immigration: Studies",
          url: "https://igi.mai.gov.ro/en/studies/",
        },
      ],
    },
  },
  turkiye: {
    lastChecked: "October 2026",
    tuitionFees: {
      summary:
        "Each state university's board sets the fee for students admitted through the international student quota. For 2026-27, a Presidential Decision says this fee must be at least twice the official service cost for the programme. Universities may charge less for some successful students or students from certain regions.",
      figures: [
        {
          label: "State universities, international-quota students (2026-27)",
          value: "Set by each university – at least 2 × the programme's official service cost",
          sourceUrl:
            "https://www.resmigazete.gov.tr/eskiler/2026/08/20260815-7.pdf",
        },
      ],
      sources: [
        {
          name: "Official Gazette, 15 Aug 2026: Presidential Decision on 2026-27 fees, Art. 3 (in Turkish)",
          url: "https://www.resmigazete.gov.tr/eskiler/2026/08/20260815-7.pdf",
        },
      ],
    },
    livingCosts: {
      summary:
        "The Law on Foreigners and International Protection lists the conditions for a student residence permit (documents, address and no entry ban), but no fixed amount of money. No national proof-of-funds figure is published, though a consulate may ask about your means when you apply for a visa.",
      figures: [
        {
          label: "Visa/permit proof of funds",
          value: "Not centrally published – no fixed amount set",
          sourceUrl:
            "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6458.pdf",
        },
      ],
      sources: [
        {
          name: "Law 6458 on Foreigners and International Protection, Arts. 38–39 (in Turkish)",
          url: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6458.pdf",
        },
      ],
    },
    studentJobs: {
      summary:
        "Students in full-time higher education can work only with a work permit. Associate and bachelor's students can apply only after finishing their first year, and may work part-time. These limits do not apply to master's and PhD students. Graduates can apply within 6 months for a one-time residence permit of up to 1 year. Work permit applications made within a year of graduating are assessed under special rules.",
      figures: [
        {
          label: "Bachelor's / associate students",
          value: "Part-time with a work permit, after the first year",
          sourceUrl:
            "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6735.pdf",
        },
        {
          label: "Master's / PhD students",
          value: "Work permit needed; no first-year or part-time limit",
          sourceUrl:
            "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6735.pdf",
        },
        {
          label: "Post-study: short-term residence permit",
          value: "Up to 1 year, once (apply within 6 months of graduating)",
          sourceUrl:
            "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6458.pdf",
        },
      ],
      sources: [
        {
          name: "International Labour Force Law 6735, Art. 19 (in Turkish)",
          url: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6735.pdf",
        },
        {
          name: "Law 6458 on Foreigners and International Protection, Art. 31 (in Turkish)",
          url: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6458.pdf",
        },
      ],
    },
  },
};
