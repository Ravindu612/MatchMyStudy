"use client";

import {
  blockProfile,
  followProfile,
  getConnectionSummary,
  unblockProfile,
  unfollowProfile,
  type ConnectionSummary,
} from "@/lib/social/connections";
import { messageForSocialError } from "@/lib/social/socialErrors";
import { loginPathFor } from "@/lib/signupRole";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type SocialState = {
  status: "loading" | "ready" | "error";
  viewerId: string | null;
  summary: ConnectionSummary;
  error: string | null;
  busy: boolean;
  follow: () => Promise<void>;
  unfollow: () => Promise<void>;
  block: () => Promise<void>;
  unblock: () => Promise<void>;
};

const ProfileSocialContext = createContext<SocialState | null>(null);

function useProfileSocial(): SocialState {
  const value = useContext(ProfileSocialContext);

  if (!value) {
    throw new Error("Profile follow actions are only available on a profile page.");
  }

  return value;
}

const EMPTY: ConnectionSummary = {
  followers: 0,
  following: 0,
  followingThem: false,
  blockedByMe: false,
};

export default function ProfileSocial({
  profileId,
  children,
}: {
  profileId: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<SocialState["status"]>("loading");
  const [viewerId, setViewerId] = useState<string | null>(null);
  const [summary, setSummary] = useState<ConnectionSummary>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load(nextViewer: string | null) {
      try {
        const next = await getConnectionSummary(profileId);

        if (cancelled) {
          return;
        }

        setViewerId(nextViewer);
        setSummary(next);
        setStatus("ready");
        setError(null);
      } catch (loadError) {
        if (cancelled) {
          return;
        }

        setViewerId(nextViewer);
        setStatus("error");
        setError(messageForSocialError(loadError, "Couldn't load follow details."));
      }
    }

    supabase.auth.getUser().then(({ data }) => {
      void load(data.user?.id ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      void load(session?.user?.id ?? null);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [profileId]);

  async function run(
    action: () => Promise<void>,
    apply: (current: ConnectionSummary) => ConnectionSummary,
    fallback: string
  ) {
    setBusy(true);
    setError(null);
    const previous = summary;
    setSummary((current) => apply(current));

    try {
      await action();
      const next = await getConnectionSummary(profileId);
      setSummary(next);
      setStatus("ready");
    } catch (actionError) {
      setSummary(previous);
      setError(messageForSocialError(actionError, fallback));
    } finally {
      setBusy(false);
    }
  }

  const value: SocialState = {
    status,
    viewerId,
    summary,
    error,
    busy,
    follow: () =>
      run(
        () => followProfile(profileId),
        (current) => ({
          ...current,
          followingThem: true,
          followers: current.followers + (current.followingThem ? 0 : 1),
        }),
        "You can't follow this account."
      ),
    unfollow: () =>
      run(
        () => unfollowProfile(profileId),
        (current) => ({
          ...current,
          followingThem: false,
          followers: Math.max(0, current.followers - (current.followingThem ? 1 : 0)),
        }),
        "Couldn't unfollow this account."
      ),
    block: () =>
      run(
        () => blockProfile(profileId),
        (current) => ({
          ...current,
          blockedByMe: true,
          followingThem: false,
          followers: Math.max(0, current.followers - (current.followingThem ? 1 : 0)),
        }),
        "Couldn't block this account."
      ),
    unblock: () =>
      run(
        () => unblockProfile(profileId),
        (current) => ({
          ...current,
          blockedByMe: false,
        }),
        "Couldn't unblock this account."
      ),
  };

  return (
    <ProfileSocialContext.Provider value={value}>{children}</ProfileSocialContext.Provider>
  );
}

export function ProfileFollowButtons({
  profileId,
  displayName,
}: {
  profileId: string;
  displayName: string;
}) {
  const pathname = usePathname();
  const social = useProfileSocial();
  const [confirmingBlock, setConfirmingBlock] = useState(false);
  const isOwner = social.viewerId === profileId;

  if (social.status === "loading") {
    return <div className="h-10 w-28 animate-pulse rounded-xl bg-slate-100" />;
  }

  if (isOwner) {
    return null;
  }

  if (!social.viewerId) {
    return (
      <a
        href={loginPathFor(pathname)}
        className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Log in to follow
      </a>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-wrap items-center gap-2">
        {social.summary.blockedByMe ? (
          <button
            type="button"
            disabled={social.busy}
            onClick={() => void social.unblock()}
            className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
          >
            {social.busy ? "Working..." : "Unblock"}
          </button>
        ) : (
          <button
            type="button"
            disabled={social.busy}
            onClick={() =>
              void (social.summary.followingThem ? social.unfollow() : social.follow())
            }
            className={
              social.summary.followingThem
                ? "inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
                : "inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            }
          >
            {social.busy ? "Working..." : social.summary.followingThem ? "Following" : "Follow"}
          </button>
        )}
        {social.summary.blockedByMe ? null : confirmingBlock ? (
          <span className="flex max-w-sm flex-wrap items-center gap-2 text-sm text-slate-600">
            <span>
              Block {displayName}? You won&apos;t see each other&apos;s posts, comments, or messages.
            </span>
            <button
              type="button"
              disabled={social.busy}
              onClick={() => {
                void social.block().finally(() => setConfirmingBlock(false));
              }}
              className="font-semibold text-red-600 disabled:opacity-50"
            >
              Block
            </button>
            <button
              type="button"
              onClick={() => setConfirmingBlock(false)}
              className="font-semibold text-slate-500"
            >
              Cancel
            </button>
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmingBlock(true)}
            className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800"
          >
            Block
          </button>
        )}
      </div>
      {social.status === "ready" && social.error ? (
        <p className="text-sm text-red-600" role="alert">
          {social.error}
        </p>
      ) : null}
    </div>
  );
}

export function ProfileFollowStats({ handle }: { handle: string }) {
  const social = useProfileSocial();
  const encoded = encodeURIComponent(handle);
  if (social.status === "loading") {
    return <div className="mt-4 h-5 w-48 animate-pulse rounded bg-slate-100" />;
  }

  return (
    <div className="mt-4">
      <p className="text-sm text-slate-600">
        <Link
          href={`/u/${encoded}/followers`}
          className="font-semibold text-slate-900 hover:underline"
        >
          {social.summary.followers.toLocaleString("en-US")}{" "}
          {social.summary.followers === 1 ? "follower" : "followers"}
        </Link>
        <span aria-hidden="true"> · </span>
        <Link
          href={`/u/${encoded}/following`}
          className="font-semibold text-slate-900 hover:underline"
        >
          {social.summary.following.toLocaleString("en-US")} following
        </Link>
      </p>
      {social.status === "error" && social.error ? (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {social.error}
        </p>
      ) : null}
    </div>
  );
}
