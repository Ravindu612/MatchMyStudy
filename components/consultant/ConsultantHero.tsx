"use client";

import { useEffect, useState } from "react";
import { Consultant } from "@/types/consultant";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AddSuccessStory from "./AddSuccessStory";
import { isConsultantProActive } from "@/lib/proStatus";
import {
  getConsultantAverageRating,
} from "@/lib/reviewService";

type Props = {
  consultant: Consultant;
};

export default function ConsultantHero({ consultant }: Props) {
  const [userProfile, setUserProfile] = useState<{
    id: string;
    email: string | null;
    role: "student" | "consultant" | "admin";
  } | null>(null);

  const [liveRating, setLiveRating] =
  useState(0);

const [liveReviewCount, setLiveReviewCount] =
  useState(0);

    useEffect(() => {
    async function loadRating() {
      try {
        const summary =
          await getConsultantAverageRating(
            consultant.id
          );

        setLiveRating(
          summary.averageRating
        );

        setLiveReviewCount(
          summary.reviewCount
        );
      } catch (error) {
        console.error(
          "Load consultant rating error:",
          error
        );
      }
    }

    loadRating();
  }, [consultant.id]);

    useEffect(() => {
    let mounted = true;

    async function loadUserProfile(
      userId: string
    ) {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, role")
        .eq("id", userId)
        .maybeSingle();

      if (error) {
        console.error(
          "Load user profile error:",
          error
        );

        if (mounted) {
          setUserProfile(null);
        }

        return;
      }

      if (mounted) {
        setUserProfile(data);
      }
    }

    async function checkCurrentUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!mounted) {
        return;
      }

      if (!user) {
        setUserProfile(null);
        return;
      }

      await loadUserProfile(user.id);
    }

    checkCurrentUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!mounted) {
          return;
        }

        if (!session?.user) {
          setUserProfile(null);
          return;
        }

        await loadUserProfile(
          session.user.id
        );
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const isOwner =
  !!userProfile &&
  !!consultant.ownerId &&
  userProfile.id === consultant.ownerId;

  const isAdmin =
    userProfile?.role === "admin";

  const canManageProfile =
    isOwner || isAdmin;

  const consultantProActive =
  isConsultantProActive({
    is_pro: consultant.isPro,
    pro_expires_at:
      consultant.proExpiresAt,
  });

  const canManageSuccessStories =
  consultantProActive &&
  (isOwner || isAdmin);

  return (
    <div className="w-full px-4 sm:px-6 pt-8">

      <div
  className="relative w-full min-h-[600px] rounded-3xl overflow-hidden shadow-xl bg-center bg-no-repeat"
  style={{
  backgroundImage: `url("${
    consultant.banner ||
    "/defaults/consultant-banner.jpg"
  }")`,
  backgroundSize: "100% 100%",
}}
>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Consultant information */}
        <div className="relative z-10 flex min-h-[600px] items-center justify-center p-6">

          <div className="w-full max-w-5xl rounded-3xl bg-white/80 backdrop-blur-xl border border-white/70 shadow-2xl p-8 md:p-10">

            <div className="flex flex-col items-center text-center">

              {/* Logo */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white/90 shadow-xl overflow-hidden border-4 border-white">

                <img
                  src={
                    consultant.logo ||
                    "/defaults/consultant-logo.png"
                  }
                  alt={consultant.name}
                  className="w-full h-full object-contain"
                />

              </div>

              {/* Name */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
             <div className="rounded-full bg-blue-500 hover:bg-blue-300 px-6 py-3 text-white font-semibold transition shadow-lg">
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-950 drop-shadow-sm">
                {consultant.name}
              </h1>

              {/* Rating / verification */}
              <div className="mt-4 flex flex-wrap justify-center gap-4">

                <span className="text-xl font-semibold text-yellow-500">
  ⭐{" "}
  {liveReviewCount > 0
    ? liveRating.toFixed(1)
    : "0.0"}
</span>

                {consultant.verified && (
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    ✔ Verified Consultant
                  </span>
                )}

              </div>

              {/* Location */}
              <p className="mt-4 text-lg font-medium text-white-800 drop-shadow-sm">
                {consultant.city}, {consultant.country}
              </p>
              </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">

                {consultant.website && (
                  <a
                    href={consultant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-500 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition"
                  >
                    🌐 Visit Website
                  </a>
                )}

                {consultant.phone && (
                  <a
                    href={`tel:${consultant.phone}`}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition"
                  >
                    📞 Call
                  </a>
                )}

                {consultant.email && (
                  <a
                    href={`mailto:${consultant.email}`}
                    className="rounded-full bg-blue-500 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition"
                  >
                    ✉ Email
                  </a>
                )}

                {canManageProfile && (
  <Link
    href={`/consultants/edit/${consultant.slug}`}
    className="rounded-full bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
  >
    ✏️ Edit Profile
  </Link>
)}

                {isOwner && (
  consultantProActive ? (
    <Link
      href={`/consultants/manage-pro/${consultant.slug}`}
      className="rounded-full bg-blue-500 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
    >
      ⚙️ Manage Subscription
    </Link>
  ) : (
    <Link
      href={`/consultants/upgrade/${consultant.slug}`}
      className="rounded-full bg-blue-500 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
    >
      🚀 Upgrade Profile
    </Link>
  )
)}

              </div>

            </div>

          </div>

        </div>

      </div>
      {canManageSuccessStories && (
  <div className="mt-10 w-full">
    <AddSuccessStory
      consultantId={consultant.id}
      onCreated={() => {
        window.location.reload();
      }}
    />
  </div>
)}

    </div>
  );
}