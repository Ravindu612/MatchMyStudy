"use client";

import {
  accountTypeBadgeClass,
  accountTypeLabel,
} from "@/lib/social/accountType";
import { displayInitials } from "@/lib/social/formatPostTime";
import type { DirectoryPerson } from "@/lib/social/connections";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function PersonCard({
  person,
  action,
}: {
  person: DirectoryPerson;
  action?: ReactNode;
}) {
  const avatar = safeImageUrl(person.avatarUrl);

  return (
    <article className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Link href={`/u/${encodeURIComponent(person.handle)}`} className="shrink-0">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white"
          >
            {displayInitials(person.displayName)}
          </span>
        )}
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/u/${encodeURIComponent(person.handle)}`}
            className="truncate font-semibold text-slate-900 hover:underline"
          >
            {person.displayName}
          </Link>
          {person.isVerified ? (
            <BadgeCheck className="h-4 w-4 text-blue-600" aria-label="Verified" />
          ) : null}
        </div>
        <p className="truncate text-sm text-slate-500">@{person.handle}</p>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${accountTypeBadgeClass(person.accountType)}`}
          >
            {accountTypeLabel(person.accountType)}
          </span>
          {person.isUpgraded ? (
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 text-xs font-bold text-white">
              Pro
            </span>
          ) : null}
        </div>
        {person.headline ? (
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{person.headline}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </article>
  );
}
