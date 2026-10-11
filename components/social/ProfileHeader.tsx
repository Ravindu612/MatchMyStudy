import type { ReactNode } from "react";
import {
  accountTypeBadgeClass,
  accountTypeLabel,
} from "@/lib/social/accountType";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { consultantPath } from "@/lib/social/profileValidation";
import type { SocialAccountType } from "@/types/social";
import Link from "next/link";

type Props = {
  displayName: string;
  handle: string;
  accountType: SocialAccountType;
  headline?: string | null;
  avatarUrl?: string | null;
  coverUrl?: string | null;
  isVerified: boolean;
  isUpgraded: boolean;
  consultantSlug?: string | null;
  joinedAt?: string | null;
  actions?: ReactNode;
  meta?: ReactNode;
};

export default function ProfileHeader({
  displayName,
  handle,
  accountType,
  headline,
  avatarUrl,
  coverUrl,
  isVerified,
  isUpgraded,
  consultantSlug,
  joinedAt,
  actions,
  meta,
}: Props) {
  const cover = displayImageUrl(coverUrl);
  const avatar = displayImageUrl(avatarUrl);
  const listingPath = consultantPath(consultantSlug);
  const joined = formatJoined(joinedAt);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="h-36 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 sm:h-52">
        {cover ? (
          // Profile photos are arbitrary https or local blob URLs, which next/image cannot optimize.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={`Cover photo for ${displayName}`}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="px-5 pb-6 sm:px-8">
        <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
          {avatar ? (
            // Profile photos are arbitrary https or local blob URLs, which next/image cannot optimize.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatar}
              alt={`${displayName}'s profile photo`}
              className="h-24 w-24 rounded-full border-4 border-white bg-white object-cover shadow-md sm:h-28 sm:w-28"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-2xl font-bold text-white shadow-md sm:h-28 sm:w-28 sm:text-3xl"
            >
              {initials(displayName)}
            </div>
          )}

          {actions ? <div className="sm:mb-1">{actions}</div> : null}
        </div>

        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {displayName}
          </h1>
          <p className="mt-1 text-slate-500">@{handle}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${accountTypeBadgeClass(accountType)}`}
          >
            {accountTypeLabel(accountType)}
          </span>

          {isVerified ? (
            <span
              className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
              title="Verified consultant"
            >
              ✓ Verified
            </span>
          ) : null}

          {isUpgraded ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-sm font-bold text-white shadow-sm">
              Pro
            </span>
          ) : null}
        </div>

        {headline ? (
          <p className="mt-4 text-lg text-slate-700">{headline}</p>
        ) : null}

        {meta}

        {joined ? (
          <p className="mt-3 text-sm text-slate-500">Joined {joined}</p>
        ) : null}

        {listingPath ? (
          <Link
            href={listingPath}
            className="mt-5 inline-flex rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            View consultant page →
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function displayImageUrl(value: string | null | undefined): string | null {
  if (value?.startsWith("blob:")) {
    return value;
  }

  return safeImageUrl(value);
}

function initials(name: string): string {
  const letters = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return letters || "?";
}

function formatJoined(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(date);
}
