import ConsultantProfileClient from "@/components/consultant/ConsultantProfileClient";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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