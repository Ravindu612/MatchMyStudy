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
};
