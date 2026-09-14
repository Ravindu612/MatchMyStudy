import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";
import { consultants } from "@/data/consultants";
import { universities } from "@/data/universities";
import { programs } from "@/data/programs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.matchmystudy.com";

  /*
   * ------------------------------------------------
   * Main static pages
   * ------------------------------------------------
   */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/consultants`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/countries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/universities`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/study-matcher`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/program-matcher`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/university-matcher`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  /*
   * ------------------------------------------------
   * Country pages
   * ------------------------------------------------
   */

  const countryPages = [
    "australia",
    "austria",
    "belgium",
    "canada",
    "china",
    "czech-republic",
    "denmark",
    "finland",
    "france",
    "germany",
    "greece",
    "hongkong",
    "hungary",
    "india",
    "ireland",
    "italy",
    "japan",
    "malaysia",
    "netherlands",
    "newzealand",
    "norway",
    "poland",
    "portugal",
    "qatar",
    "romania",
    "saudiarabia",
    "singapore",
    "south-africa",
    "southkorea",
    "spain",
    "sweden",
    "switzerland",
    "taiwan",
    "thailand",
    "turkiye",
    "uae",
    "unitedkingdom",
    "usa",
  ];

  const countryUrls: MetadataRoute.Sitemap =
    countryPages.map((country) => ({
      url: `${baseUrl}/${country}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  /*
   * ------------------------------------------------
   * University pages
   * ------------------------------------------------
   */

  const allUniversities = Object.values(universities).flat();

  const universityUrls: MetadataRoute.Sitemap =
    allUniversities.map((university) => ({
      url: `${baseUrl}/universities/${university.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  /*
   * ------------------------------------------------
   * Program pages
   * ------------------------------------------------
   */

  const programUrls: MetadataRoute.Sitemap =
    programs.map((program) => ({
      url: `${baseUrl}/programs/${program.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  /*
   * ------------------------------------------------
   * Blog articles
   * ------------------------------------------------
   */

  const blogPosts = [
    "best-countries-2026",
    "canada-vs-australia",
    "cheapest-countries",
  ];

  const blogUrls: MetadataRoute.Sitemap =
    blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  /*
   * ------------------------------------------------
   * Consultant profiles
   * ------------------------------------------------
   *
   * Supabase profiles are the current source of truth.
   *
   * Static developer-created profiles are also included
   * unless they have an approved claim whose database
   * profile has subsequently been deleted.
   */

  let dbConsultants: any[] = [];
  let approvedClaimedConsultantIds: string[] = [];

  try {
    const { data: consultantsData, error: consultantsError } =
      await supabase
        .from("consultants")
        .select("id, slug, updated_at, created_at");

    if (consultantsError) {
      console.error(
        "Sitemap consultant query error:",
        consultantsError
      );
    } else {
      dbConsultants = consultantsData ?? [];
    }

    const { data: claimsData, error: claimsError } =
      await supabase
        .from("consultant_claims")
        .select("consultant_id")
        .eq("status", "approved");

    if (claimsError) {
      console.error(
        "Sitemap consultant claims query error:",
        claimsError
      );
    } else {
      approvedClaimedConsultantIds =
        (claimsData ?? []).map(
          (claim) => claim.consultant_id
        );
    }
  } catch (error) {
    console.error(
      "Sitemap consultant data error:",
      error
    );
  }

  const dbSlugs = new Set(
    dbConsultants.map(
      (consultant) => consultant.slug
    )
  );

  const staticConsultantsWithoutDuplicates =
    consultants.filter(
      (consultant) =>
        !dbSlugs.has(consultant.slug) &&
        !approvedClaimedConsultantIds.includes(
          consultant.id
        )
    );

  const consultantUrls: MetadataRoute.Sitemap = [
    ...dbConsultants.map((consultant) => ({
      url: `${baseUrl}/consultants/${consultant.slug}`,
      ...(consultant.updated_at || consultant.created_at
        ? {
            lastModified: new Date(
              consultant.updated_at ||
                consultant.created_at
            ),
          }
        : {}),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    ...staticConsultantsWithoutDuplicates.map(
      (consultant) => ({
        url: `${baseUrl}/consultants/${consultant.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    ),
  ];

  /*
   * ------------------------------------------------
   * Final sitemap
   * ------------------------------------------------
   */

  return [
    ...staticPages,
    ...countryUrls,
    ...universityUrls,
    ...programUrls,
    ...blogUrls,
    ...consultantUrls,
  ];
}