import ConsultantProfileClient from "@/components/consultant/ConsultantProfileClient";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ConsultantProfilePage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-slate-50 pb-24">

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Link
          href="/consultants"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-2.5
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            ring-1
            ring-slate-200
            transition
            hover:bg-slate-100
            hover:text-blue-600
          "
        >
          <span className="text-lg">←</span>
          Back to Consultant Listings
        </Link>
      </div>

      <ConsultantProfileClient slug={slug} />

    </main>
  );
}