import ConsultantSearch from "@/components/ConsultantSearch";
import ConsultantCTA from "@/components/ConsultantCTA";
import { STATIC_META } from "@/lib/seo-meta";
import { consultants } from "@/data/consultants";
import { getConsultants, mapDbConsultant } from "@/lib/consultantService";
import { supabase } from "@/lib/supabase";
import type { Consultant } from "@/types/consultant";
import JsonLd from "@/components/JsonLd";
import { hubPageJsonLd } from "@/lib/hub-jsonld";

export const metadata = STATIC_META["/consultants"];

// Rebuilt at most once an hour, so new or edited Supabase
// profiles show up in the server HTML without a redeploy.
export const revalidate = 3600;

/*
 * The full public list, built on the server so the first HTML
 * already links to every real profile (crawlers don't wait for
 * the client-side Supabase fetch).
 *
 * Same rules as the profile page (getPublicConsultant) and the
 * sitemap: a Supabase profile wins over a static one with the same
 * slug, and a static profile with an approved claim isn't public
 * (its URL 404s), so it isn't listed.
 */
async function getListedConsultants(): Promise<Consultant[]> {
  try {
    const dbConsultants = ((await getConsultants()) ?? []).map(
      mapDbConsultant
    );

    let claimedIds = new Set<string>();
    const { data: approvedClaims, error: claimsError } = await supabase
      .from("consultant_claims")
      .select("consultant_id")
      .eq("status", "approved");

    if (claimsError) {
      console.error("Load approved consultant claims error:", claimsError);
    } else {
      claimedIds = new Set(
        (approvedClaims ?? []).map((claim) => claim.consultant_id)
      );
    }

    const dbSlugs = new Set(dbConsultants.map((c) => c.slug));
    const local = consultants.filter(
      (c) => !dbSlugs.has(c.slug) && !claimedIds.has(c.id)
    );

    return [...local, ...dbConsultants];
  } catch (error) {
    // Supabase unavailable: fall back to the static profiles.
    console.error("Load consultants error:", error);
    return consultants;
  }
}

export default async function ConsultantsPage() {
  const initialConsultants = await getListedConsultants();

  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd
        data={hubPageJsonLd({
          type: "CollectionPage",
          name: "Study Abroad Consultants",
          path: "/consultants",
          items: initialConsultants.map((c) => ({
            name: c.name,
            url: `/consultants/${c.slug}`,
          })),
        })}
      />

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

            {/* Left */}
            <div className="max-w-3xl">

              <h1 className="text-5xl font-bold text-white leading-tight">
                Find Trusted Study Abroad Consultants
              </h1>

              <p className="mt-6 text-xl text-blue-100">
                Search verified education consultants based on your home
                country and your desired study destination.
              </p>

            </div>

            {/* Right */}
            <ConsultantCTA />

          </div>

          <div className="mt-12">
            <ConsultantSearch initialConsultants={initialConsultants} />
          </div>

        </div>

      </section>

    </main>
  );
}