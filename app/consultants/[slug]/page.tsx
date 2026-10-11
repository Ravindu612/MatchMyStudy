import type { Metadata } from "next";
import ConsultantProfileClient from "@/components/consultant/ConsultantProfileClient";
import { notFound } from "next/navigation";
import { getPublicConsultant } from "@/lib/consultantService";
import {
  DEFAULT_OPEN_GRAPH,
  DEFAULT_TWITTER,
  truncateDescription,
} from "@/lib/seo-meta";
import type { Consultant } from "@/types/consultant";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const consultant = await getPublicConsultant(slug);

  if (!consultant) {
    return {
      title: "Consultant Profile | MatchMyStudy",
      robots: { index: false },
    };
  }

  const path = `/consultants/${consultant.slug}`;
  const title = `${consultant.name} — Study Abroad Consultant | MatchMyStudy`;
  const description = truncateDescription(
    consultant.description ||
      `Learn about ${consultant.name}, a study abroad education consultant offering services for international students.`
  );

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      title,
      description,
      url: path,
      ...(consultant.logo && {
        images: [{ url: consultant.logo }, ...DEFAULT_OPEN_GRAPH.images],
      }),
    },
    twitter: { ...DEFAULT_TWITTER, title, description },
  };
}

/*
 * True when a consultants row with this slug exists at all,
 * including ones hidden from the public by database rules
 * (e.g. an unapproved profile only its owner can see).
 * Returns null when we can't tell (no service key).
 */
async function consultantRowExists(slug: string): Promise<boolean | null> {
  try {
    const { getSupabaseAdmin } = await import("@/lib/supabaseAdmin");
    const supabaseAdmin = getSupabaseAdmin();

    if (!supabaseAdmin) return null;

    const { data, error } = await supabaseAdmin
      .from("consultants")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (error) return null;
    return !!data;
  } catch {
    return null;
  }
}

function createConsultantJsonLd(consultant: Consultant) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: consultant.name,
    description: consultant.description,
    url: `https://www.matchmystudy.com/consultants/${consultant.slug}`,
  };

  if (consultant.logo) {
    jsonLd.logo = consultant.logo;
    jsonLd.image = consultant.logo;
  }

  if (consultant.phone) {
    jsonLd.telephone = consultant.phone;
  }

  if (consultant.email) {
    jsonLd.email = consultant.email;
  }

  if (consultant.website) {
    jsonLd.sameAs = [consultant.website];
  }

  if (consultant.address || consultant.city || consultant.country) {
    jsonLd.address = {
      "@type": "PostalAddress",
      ...(consultant.address && {
        streetAddress: consultant.address,
      }),
      ...(consultant.city && {
        addressLocality: consultant.city,
      }),
      ...(consultant.country && {
        addressCountry: consultant.country,
      }),
    };
  }

  if (consultant.rating > 0 && consultant.reviews > 0) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: consultant.rating,
      reviewCount: consultant.reviews,
    };
  }

  const socialProfiles = [
    consultant.facebook,
    consultant.instagram,
    consultant.linkedin,
    consultant.youtube,
  ].filter(Boolean);

  if (socialProfiles.length > 0) {
    jsonLd.sameAs = [
      ...(Array.isArray(jsonLd.sameAs) ? jsonLd.sameAs : []),
      ...socialProfiles,
    ];
  }

  return jsonLd;
}

export default async function ConsultantProfilePage({
  params,
}: Props) {
  const { slug } = await params;

  const consultant = await getPublicConsultant(slug);

  if (!consultant) {
    // Profiles the public can't see (e.g. unapproved, visible
    // only to their owner) still render client-side, where the
    // owner's login is available. Only slugs that don't exist
    // anywhere get a real 404.
    const exists = await consultantRowExists(slug);

    if (exists === false) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 pb-24">
        <ConsultantProfileClient slug={slug} />
      </main>
    );
  }

  const consultantJsonLd = createConsultantJsonLd(
    consultant
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(consultantJsonLd),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 pb-24">
        <ConsultantProfileClient
          slug={slug}
          initialConsultant={consultant}
        />
      </main>
    </>
  );
}