/** Resource guides linked from the navbar, footer, and sitemap. */
export const resourceGuides = [
  {
    href: "/student-housing",
    label: "Student Housing",
    blurb: "Halls, flats, and what to check before you pay",
  },
  {
    href: "/money-transfer",
    label: "Money Transfer",
    blurb: "Tuition, rent, exchange rates, and bank accounts",
  },
  {
    href: "/test-prep",
    label: "Test Prep",
    blurb: "GRE, GMAT, SAT, ACT, and English tests",
  },
] as const;

export type ResourceGuide = (typeof resourceGuides)[number];
