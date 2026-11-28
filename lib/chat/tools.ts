import { searchSite, type SiteSearchInput } from "@/lib/chat/search";
import { tool } from "ai";
import { z } from "zod";

const searchInput = z.object({
  kind: z
    .enum(["country", "university", "program", "consultant", "guide"])
    .describe(
      "country pages, university pages, program pages, consultant profiles, or blog guides"
    ),
  query: z.string().min(2).max(120),
  country: z.string().min(2).max(80).optional(),
  level: z.string().min(2).max(40).optional(),
});

export const chatTools = {
  searchSite: tool({
    description:
      "Search MatchMyStudy's published countries, universities, programs, consultants, and guides. Returns site urls and only the fees or deadlines stored on the site.",
    inputSchema: searchInput,
    execute: async (input: SiteSearchInput) => searchSite(input),
  }),
  showContactForm: tool({
    description:
      "Show an inline contact form when the student wants personal help or asks to be contacted. The form collects name, email, consent, and an optional country, study level, and message. Do not collect the email yourself.",
    inputSchema: z.object({
      intro: z
        .string()
        .min(1)
        .max(240)
        .describe("One sentence shown above the form."),
      countryOfInterest: z.string().max(80).optional(),
      studyLevel: z.string().max(40).optional(),
    }),
  }),
};
