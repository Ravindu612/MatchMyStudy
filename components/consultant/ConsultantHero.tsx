"use client";

import { useEffect, useState } from "react";
import { Consultant } from "@/types/consultant";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AddSuccessStory from "./AddSuccessStory";
import { isConsultantProActive } from "@/lib/proStatus";
import { getConsultantAverageRating } from "@/lib/reviewService";

type Props = {
  consultant: Consultant;
};

export default function ConsultantHero({ consultant }: Props) {
  const [userProfile, setUserProfile] = useState<{
    id: string;
    email: string | null;
    role: "student" | "consultant" | "admin";
  } | null>(null);

  const [liveRating, setLiveRating] = useState(0);
  const [liveReviewCount, setLiveReviewCount] = useState(0);

  // ============================================================
  // LOAD RATING
  // ============================================================

  useEffect(() => {
    async function loadRating() {
      try {
        const summary = await getConsultantAverageRating(
          consultant.id
        );

        setLiveRating(summary.averageRating);
        setLiveReviewCount(summary.reviewCount);
      } catch (error) {
        console.error(
          "Load consultant rating error:",
          error
        );
      }
    }

    loadRating();
  }, [consultant.id]);

  // ============================================================
  // LOAD CURRENT USER
  // ============================================================

  useEffect(() => {
    let mounted = true;

    async function loadUserProfile(userId: string) {
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

        await loadUserProfile(session.user.id);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // ============================================================
  // PERMISSIONS
  // ============================================================

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
      pro_expires_at: consultant.proExpiresAt,
    });

  const canManageSuccessStories =
    consultantProActive &&
    (isOwner || isAdmin);

  // ============================================================
  // VALUES
  // ============================================================

  const rating =
    liveReviewCount > 0
      ? liveRating.toFixed(1)
      : "0.0";

  const banner =
    consultant.banner ||
    "/defaults/consultant-banner.jpg";

  const logo =
    consultant.logo ||
    "/defaults/consultant-logo.png";

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="w-full">

      {/* ======================================================
          HERO BANNER
      ======================================================= */}

      <section className="relative w-full overflow-hidden">

        {/* --------------------------------------------------
            Banner
        -------------------------------------------------- */}

        <div
          className="
            relative
            min-h-[650px]
            sm:min-h-[680px]
            lg:min-h-[700px]
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url("${banner}")`,
          }}
        >

          {/* Dark overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-slate-950/50
              via-slate-950/15
              to-slate-950/75
            "
          />

          {/* ==================================================
              BACK BUTTON
          =================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-30
              mx-auto
              max-w-7xl
              px-4
              pt-5
              sm:px-6
              sm:pt-6
              lg:px-8
            "
          >

            <Link
              href="/consultants"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/25
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-black/40
                hover:text-blue-100
                sm:px-5
                sm:py-3
                sm:text-base
              "
            >
              <span className="text-xl leading-none">
                ←
              </span>

              <span>
                Back to List
              </span>
            </Link>

          </div>

          {/* ==================================================
              MAIN PROFILE AREA
          =================================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[650px]
              max-w-6xl
              items-center
              justify-center
              px-4
              pt-24
              pb-12
              sm:min-h-[680px]
              sm:px-8
              sm:pt-28
              sm:pb-14
              lg:min-h-[700px]
            "
          >

            {/* ==================================================
                PROFILE CARD
            =================================================== */}

            <div
              className="
                relative
                w-full
                max-w-5xl
                overflow-visible
                rounded-[2rem]
                border
                border-white/20
                bg-slate-950/60
                px-5
                pb-10
                pt-28
                shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                backdrop-blur-xl
                sm:px-10
                sm:pt-32
                lg:px-16
              "
            >

              {/* ------------------------------------------------
                  Decorative glow - left
              ------------------------------------------------- */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-blue-500/20
                  blur-3xl
                "
              />

              {/* ------------------------------------------------
                  Decorative glow - right
              ------------------------------------------------- */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-24
                  h-72
                  w-72
                  rounded-full
                  bg-indigo-500/20
                  blur-3xl
                "
              />

              {/* =================================================
                  LOGO
              ================================================== */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  z-20
                  flex
                  h-36
                  w-36
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[2rem]
                  border-4
                  border-white
                  bg-white
                  shadow-[0_20px_45px_rgba(0,0,0,0.35)]
                  sm:h-44
                  sm:w-44
                "
              >

                <img
                  src={logo}
                  alt={`${consultant.name} logo`}
                  className="
                    h-full
                    w-full
                    object-contain
                    p-3
                  "
                />

                {/* Verified badge */}

                {consultant.verified && (
                  <div
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500
                      text-lg
                      font-bold
                      text-white
                      shadow-lg
                    "
                    title="Verified Consultant"
                  >
                    ✓
                  </div>
                )}

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10 text-center">

                {/* ------------------------------------------------
                    Consultant name
                ------------------------------------------------- */}

                <h1
                  className="
                    text-4xl
                    font-bold
                    tracking-tight
                    text-white
                    drop-shadow-sm
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {consultant.name}
                </h1>

                {/* =================================================
                    RATING + VERIFICATION
                ================================================== */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-3
                  "
                >

                  {/* Rating */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/10
                      px-4
                      py-2
                      text-lg
                      font-semibold
                      text-yellow-400
                      backdrop-blur-sm
                    "
                  >

                    <span className="text-2xl">
                      ★
                    </span>

                    <span>
                      {rating}
                    </span>

                    <span
                      className="
                        text-sm
                        font-medium
                        text-white/75
                      "
                    >
                      ({liveReviewCount}{" "}
                      {liveReviewCount === 1
                        ? "review"
                        : "reviews"})
                    </span>

                  </div>

                  {/* Verified */}

                  {consultant.verified && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-emerald-500/15
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-emerald-300
                        ring-1
                        ring-emerald-400/30
                      "
                    >
                      <span>
                        ✓
                      </span>

                      Verified Consultant
                    </span>
                  )}

                </div>

                {/* =================================================
                    LOCATION
                ================================================== */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-lg
                    font-medium
                    text-white/90
                  "
                >

                  <span>
                    📍
                  </span>

                  <span>
                    {consultant.city},{" "}
                    {consultant.country}
                  </span>

                </div>

                {/* =================================================
                    CONTACT BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                  "
                >

                  {/* Website */}

                  {consultant.website && (
                    <a
                      href={consultant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-blue-600
                        px-6
                        py-3.5
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-blue-500
                        hover:shadow-blue-500/30
                      "
                    >
                      🌐 Visit Website
                    </a>
                  )}

                  {/* Phone */}

                  {consultant.phone && (
                    <a
                      href={`tel:${consultant.phone}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-indigo-600
                        px-6
                        py-3.5
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-indigo-500
                        hover:shadow-indigo-500/30
                      "
                    >
                      📞 Call
                    </a>
                  )}

                  {/* Email */}

                  {consultant.email && (
                    <a
                      href={`mailto:${consultant.email}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-blue-600
                        px-6
                        py-3.5
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-blue-500
                        hover:shadow-blue-500/30
                      "
                    >
                      ✉ Email
                    </a>
                  )}

                </div>

                {/* =================================================
                    OWNER / ADMIN ACTIONS
                ================================================== */}

                {(canManageProfile || isOwner) && (
                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      justify-center
                      gap-3
                    "
                  >

                    {/* Edit Profile */}

                    {canManageProfile && (
                      <Link
                        href={`/consultants/edit/${consultant.slug}`}
                        className="
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          px-5
                          py-2.5
                          text-sm
                          font-semibold
                          text-white
                          backdrop-blur-sm
                          transition-all
                          duration-200
                          hover:bg-white/20
                        "
                      >
                        ✏️ Edit Profile
                      </Link>
                    )}

                    {/* Manage / Upgrade */}

                    {isOwner &&
                      (consultantProActive ? (
                        <Link
                          href={`/consultants/manage-pro/${consultant.slug}`}
                          className="
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-200
                            hover:bg-white/20
                          "
                        >
                          ⚙️ Manage Subscription
                        </Link>
                      ) : (
                        <Link
                          href={`/consultants/upgrade/${consultant.slug}`}
                          className="
                            rounded-full
                            bg-gradient-to-r
                            from-amber-400
                            to-orange-500
                            px-5
                            py-2.5
                            text-sm
                            font-bold
                            text-white
                            shadow-lg
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:from-amber-300
                            hover:to-orange-400
                          "
                        >
                          🚀 Upgrade Profile
                        </Link>
                      ))}

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          SUCCESS STORY MANAGEMENT
      ======================================================= */}

      {canManageSuccessStories && (
        <div
          className="
            mx-auto
            mt-12
            w-full
            max-w-6xl
            px-4
            sm:px-6
          "
        >
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