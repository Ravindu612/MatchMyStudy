import EditProfileLink from "@/components/social/EditProfileLink";
import ProfileHeader from "@/components/social/ProfileHeader";
import { countryPageHref } from "@/lib/social/profileOptions";
import type { PublicProfile } from "@/types/social";
import Link from "next/link";

type Props = {
  profile: PublicProfile;
};

export default function PublicProfileView({ profile }: Props) {
  const targets = profile.target_countries ?? [];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <ProfileHeader
          displayName={profile.display_name}
          handle={profile.handle}
          accountType={profile.account_type}
          headline={profile.headline}
          avatarUrl={profile.avatar_url}
          coverUrl={profile.cover_url}
          isVerified={profile.is_verified}
          isUpgraded={profile.is_upgraded}
          consultantSlug={profile.consultant_slug}
          joinedAt={profile.created_at}
          actions={<EditProfileLink profileId={profile.id} />}
        />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">About</h2>
          {profile.bio ? (
            <p className="mt-3 whitespace-pre-wrap break-words leading-7 text-slate-700">
              {profile.bio}
            </p>
          ) : (
            <p className="mt-3 text-slate-500">No bio yet.</p>
          )}

          {profile.country ? (
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900">Home country</h3>
              <p className="mt-2 text-slate-700">
                <CountryName name={profile.country} />
              </p>
            </div>
          ) : null}

          {targets.length > 0 ? (
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900">Target countries</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {targets.map((country) => (
                  <li key={country}>
                    <CountryChip name={country} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}

function CountryName({ name }: { name: string }) {
  const href = countryPageHref(name);

  if (!href) {
    return <span>{name}</span>;
  }

  return (
    <Link href={href} className="font-medium text-blue-600 hover:underline">
      {name}
    </Link>
  );
}

function CountryChip({ name }: { name: string }) {
  const href = countryPageHref(name);
  const className =
    "inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700";

  if (!href) {
    return <span className={className}>{name}</span>;
  }

  return (
    <Link href={href} className={`${className} hover:bg-blue-200`}>
      {name}
    </Link>
  );
}
