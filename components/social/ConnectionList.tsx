"use client";

import FollowButton from "@/components/social/FollowButton";
import PersonCard from "@/components/social/PersonCard";
import { listConnections, type DirectoryPerson } from "@/lib/social/connections";
import { supabase } from "@/lib/supabase";
import type { PublicProfile } from "@/types/social";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  profile: PublicProfile;
  mode: "followers" | "following";
};

export default function ConnectionList({ profile, mode }: Props) {
  const [people, setPeople] = useState<DirectoryPerson[]>([]);
  const [followingIds, setFollowingIds] = useState<Set<string>>(new Set());
  const [viewerId, setViewerId] = useState<string | null>(null);
  const [viewerKnown, setViewerKnown] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const title = mode === "followers" ? "Followers" : "Following";
  const encoded = encodeURIComponent(profile.handle);

  useEffect(() => {
    let cancelled = false;

    async function load(nextViewer: string | null) {
      try {
        const [listed, mine] = await Promise.all([
          listConnections(profile.id, mode),
          nextViewer
            ? supabase
                .from("follows")
                .select("following_id")
                .eq("follower_id", nextViewer)
                .limit(500)
            : Promise.resolve({ data: [], error: null }),
        ]);

        if (cancelled) {
          return;
        }

        setPeople(listed);
        setViewerId(nextViewer);
        setFollowingIds(
          new Set(
            (Array.isArray(mine.data) ? mine.data : []).flatMap((row) =>
              row && typeof row.following_id === "string" ? [row.following_id] : []
            )
          )
        );
        setViewerKnown(true);
        setStatus("ready");
      } catch {
        if (!cancelled) {
          setStatus("error");
          setViewerKnown(true);
        }
      }
    }

    supabase.auth.getUser().then(({ data }) => {
      void load(data.user?.id ?? null);
    });

    return () => {
      cancelled = true;
    };
  }, [profile.id, mode]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <Link
          href={`/u/${encoded}`}
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          Back to @{profile.handle}
        </Link>
        <header>
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="mt-1 text-slate-600">
            {profile.display_name} · @{profile.handle}
          </p>
        </header>

        {status === "loading" ? (
          <div className="h-24 animate-pulse rounded-2xl bg-white shadow-sm" />
        ) : null}
        {status === "error" ? (
          <p className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700" role="alert">
            Couldn&apos;t load this list.
          </p>
        ) : null}
        {status === "ready" && people.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
            {mode === "followers"
              ? "No followers yet."
              : `${profile.display_name} isn't following anyone yet.`}
          </p>
        ) : null}
        {people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            action={
              <FollowButton
                profileId={person.id}
                viewerId={viewerId}
                viewerKnown={viewerKnown}
                initialFollowing={followingIds.has(person.id)}
              />
            }
          />
        ))}
      </div>
    </main>
  );
}
