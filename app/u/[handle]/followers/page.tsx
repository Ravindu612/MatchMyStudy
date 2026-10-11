import ConnectionList from "@/components/social/ConnectionList";
import { getPublicProfileByHandle } from "@/lib/social/getPublicProfile";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ handle: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;

  return {
    title: `Followers of @${handle} | MatchMyStudy`,
    robots: { index: false, follow: false },
  };
}

export default async function FollowersPage({ params }: Props) {
  const { handle } = await params;
  const result = await getPublicProfileByHandle(handle);

  if (result.status === "not_found") {
    notFound();
  }

  if (result.status === "error") {
    return <Unavailable />;
  }

  if (result.profile.handle !== handle) {
    redirect(`/u/${encodeURIComponent(result.profile.handle)}/followers`);
  }

  return <ConnectionList profile={result.profile} mode="followers" />;
}

function Unavailable() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">List unavailable</h1>
        <p className="mt-3 text-slate-600">We couldn&apos;t load followers. Please try again later.</p>
      </div>
    </main>
  );
}
