"use client";

import { followProfile, unfollowProfile } from "@/lib/social/connections";
import { messageForSocialError } from "@/lib/social/socialErrors";
import { loginPathFor } from "@/lib/signupRole";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  profileId: string;
  viewerId: string | null;
  initialFollowing: boolean;
  viewerKnown: boolean;
};

export default function FollowButton({
  profileId,
  viewerId,
  initialFollowing,
  viewerKnown,
}: Props) {
  const pathname = usePathname();
  const [following, setFollowing] = useState(initialFollowing);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!viewerKnown) {
    return <span className="inline-block h-9 w-24 animate-pulse rounded-lg bg-slate-100" />;
  }

  if (!viewerId) {
    return (
      <a
        href={loginPathFor(pathname)}
        className="inline-flex rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Follow
      </a>
    );
  }

  if (viewerId === profileId) {
    return null;
  }

  async function toggle() {
    setBusy(true);
    setError(null);
    const next = !following;
    setFollowing(next);

    try {
      if (next) {
        await followProfile(profileId);
      } else {
        await unfollowProfile(profileId);
      }
    } catch (toggleError) {
      setFollowing(!next);
      setError(messageForSocialError(toggleError, "You can't follow this account."));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        disabled={busy}
        onClick={() => void toggle()}
        className={
          following
            ? "inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
            : "inline-flex rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        }
      >
        {busy ? "..." : following ? "Following" : "Follow"}
      </button>
      {error ? (
        <p className="max-w-40 text-right text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
