import PublicProfileView from "@/components/social/PublicProfileView";
import { getPublicProfileByHandle } from "@/lib/social/getPublicProfile";
import {
  DEFAULT_OPEN_GRAPH,
  DEFAULT_TWITTER,
  truncateDescription,
} from "@/lib/seo-meta";
import { accountTypeLabel } from "@/lib/social/accountType";
import { safeImageUrl } from "@/lib/social/avatarPath";
import type { PublicProfile } from "@/types/social";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{
    handle: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const result = await getPublicProfileByHandle(handle);

  if (result.status !== "ok") {
    return {
      title: "Profile not found | MatchMyStudy",
      robots: { index: false, follow: false },
    };
  }

  const profile = result.profile;
  const path = `/u/${profile.handle}`;
  const title = `${profile.display_name} (@${profile.handle}) | MatchMyStudy`;
  const description = profileDescription(profile);
  const image = safeImageUrl(profile.cover_url) ?? safeImageUrl(profile.avatar_url);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      title,
      description,
      url: path,
      ...(image
        ? { images: [{ url: image, alt: profile.display_name }] }
        : {}),
    },
    twitter: {
      ...DEFAULT_TWITTER,
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function PublicProfilePage({ params }: Props) {
  const { handle } = await params;
  const result = await getPublicProfileByHandle(handle);

  if (result.status === "not_found") {
    notFound();
  }

  if (result.status === "error") {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            Profile unavailable
          </h1>
          <p className="mt-3 text-slate-600">
            We couldn&apos;t load this profile. Please try again later.
          </p>
        </div>
      </main>
    );
  }

  if (result.profile.handle !== handle) {
    redirect(`/u/${encodeURIComponent(result.profile.handle)}`);
  }

  return <PublicProfileView profile={result.profile} />;
}

function profileDescription(profile: PublicProfile): string {
  if (profile.bio) {
    return truncateDescription(profile.bio);
  }

  const role = accountTypeLabel(profile.account_type);
  const place = profile.country ? ` from ${profile.country}` : "";

  return truncateDescription(
    `${profile.display_name} — ${role}${place} on MatchMyStudy.`
  );
}
