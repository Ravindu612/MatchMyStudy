import type { Metadata } from "next";
import ConsultantProfileClient from "@/components/consultant/ConsultantProfileClient";
import { consultants } from "@/data/consultants";
import { getConsultantBySlug } from "@/lib/consultantService";

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

export default async function ConsultantProfilePage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 pb-24">
      <ConsultantProfileClient slug={slug} />
    </main>
  );
}