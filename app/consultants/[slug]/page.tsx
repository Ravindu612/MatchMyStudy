import type { Metadata } from "next";
import ConsultantProfileClient from "@/components/consultant/ConsultantProfileClient";
import { consultants } from "@/data/consultants";
import { getConsultantBySlug } from "@/lib/consultantService";
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

  // First check database consultants
  const dbConsultant = await getConsultantBySlug(slug);

  // If not found in database, check static consultants
  const consultant =
    dbConsultant ??
    consultants.find((item) => item.slug === slug);

  if (!consultant) {
    return {
      title: "Consultant Not Found | MatchMyStudy",
      description:
        "The education consultant profile you are looking for could not be found on MatchMyStudy.",
    };
  }

  return {
    title: `${consultant.name} — Study Abroad Consultant | MatchMyStudy`,
    description:
      consultant.description ||
      `Learn about ${consultant.name}, a study abroad education consultant offering services for international students.`,
  };
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

  // First check database consultants
  const dbConsultant = await getConsultantBySlug(slug);

  // If not found in database, check static consultants
  const consultant =
    dbConsultant ??
    consultants.find((item) => item.slug === slug);

  if (!consultant) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 pb-24">
        <ConsultantProfileClient slug={slug} />
      </main>
    );
  }

  const consultantJsonLd = createConsultantJsonLd(
    consultant as Consultant
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
        <ConsultantProfileClient slug={slug} />
      </main>
    </>
  );
}