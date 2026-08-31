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
    <main className="min-h-screen bg-slate-50 pb-24">

      <ConsultantProfileClient slug={slug} />

    </main>
  );
}