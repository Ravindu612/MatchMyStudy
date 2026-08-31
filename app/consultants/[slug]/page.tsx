import ConsultantProfileClient from "@/components/consultant/ConsultantProfileClient";
import Link from "next/link";
// We will create these later
// import ConsultantPartners from "@/components/consultant/ConsultantPartners";
// import ConsultantOffice from "@/components/consultant/ConsultantOffice";
// import ConsultantReviews from "@/components/consultant/ConsultantReviews";
// import ClaimProfile from "@/components/consultant/ClaimProfile";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ConsultantProfilePage({ params }: Props) {
  const { slug } = await params;

  

  return (

  <main className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 pb-24">

  <div className="max-w-6xl mx-auto px-6 pt-8">

    <Link
      href="/consultants"
      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
    >
      ← Back to Consultant Listings
    </Link>

  </div>

  <ConsultantProfileClient slug={slug} />
</main>

);
}