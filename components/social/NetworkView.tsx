"use client";

import FollowButton from "@/components/social/FollowButton";
import PersonCard from "@/components/social/PersonCard";
import { listSuggestions } from "@/lib/social/connections";
import type { SuggestionPerson } from "@/lib/social/suggestions";
import { supabase } from "@/lib/supabase";
import { loginPathFor } from "@/lib/signupRole";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NetworkView() {
  const pathname = usePathname();
  const [people, setPeople] = useState<SuggestionPerson[]>([]);
  const [viewerId, setViewerId] = useState<string | null>(null);
  const [viewerKnown, setViewerKnown] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (cancelled) {
        return;
      }

      setViewerId(user?.id ?? null);

      try {
        const result = await listSuggestions();

        if (cancelled) {
          return;
        }

        setPeople(result.people);
        setViewerId(result.viewer?.id ?? user?.id ?? null);
        setStatus("ready");
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      } finally {
        if (!cancelled) {
          setViewerKnown(true);
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">People you may know</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Students, consultants, and education providers on MatchMyStudy. Verified and Pro
          profiles are shown first.
        </p>
      </header>

      {!viewerId && viewerKnown ? (
        <p className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
          <a href={loginPathFor(pathname)} className="font-semibold text-blue-700 hover:underline">
            Log in
          </a>{" "}
          to follow people.
        </p>
      ) : null}

      {status === "loading" ? (
        <div className="space-y-3">
          <div className="h-24 animate-pulse rounded-2xl bg-white shadow-sm" />
          <div className="h-24 animate-pulse rounded-2xl bg-white shadow-sm" />
        </div>
      ) : null}

      {status === "error" ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-slate-700">Couldn&apos;t load suggestions.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Try again
          </button>
        </section>
      ) : null}

      {status === "ready" && people.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-900">No suggestions yet</p>
          <p className="mt-2 text-sm text-slate-600">
            As more students and consultants join, people to follow will show up here.
          </p>
        </section>
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
              initialFollowing={false}
            />
          }
        />
      ))}
    </div>
  );
}
