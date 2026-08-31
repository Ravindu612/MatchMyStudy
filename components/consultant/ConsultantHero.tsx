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

  // --------------------------------------------------
  // Load rating
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Load current user
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Permissions
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Values
  // --------------------------------------------------

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

  return (
    <div className="w-full">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden">

        {/* Background banner */}

        <div
          className="
            relative
            min-h-[720px]
            sm:min-h-[760px]
            lg:min-h-[790px]
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url("${banner}")`,
          }}
        >

          {/* Dark gradient overlay */}

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/10 to-slate-950/70" />

          {/* Additional subtle blue overlay */}

          <div className="absolute inset-0 bg-blue-950/10" />

          {/* Back link */}

          <div className="relative z-20 mx-auto max-w-7xl px-5 pt-7 sm:px-8">

            <Link
              href="/consultants"
              className="
                inline-flex
                items-center
                gap-2
                text-base
                sm:text-lg
                font-semibold
                text-white
                drop-shadow-md
                transition
                hover:text-blue-200
              "
            >
              <span className="text-2xl">←</span>
              Back to Consultant Listings
            </Link>

          </div>

          {/* =================================================
              MAIN PROFILE CARD
          ================================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-20
              flex
              max-w-6xl
              justify-center
              px-4
              sm:mt-24
              sm:px-8
            "
          >

            <div
              className="
                relative
                w-full
                overflow-visible
                rounded-[2rem]
                border
                border-white/20
                bg-gradient-to-br
                from-blue-950/95
                via-blue-900/95
                to-indigo-900/95
                px-5
                pb-10
                pt-28
                shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                sm:px-10
                sm:pt-32
                lg:px-16
              "
            >

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-blue-500/20
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  bottom-0
                  h-64
                  w-64
                  rounded-full
                  bg-indigo-500/25
                  blur-3xl
                "
              />

              {/* Decorative dots */}

              <div className="pointer-events-none absolute left-6 top-10 hidden opacity-30 sm:block">
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 16 }).map(
                    (_, index) => (
                      <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-blue-300"
                      />
                    )
                  )}
                </div>
              </div>

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
                  shadow-[0_20px_45px_rgba(0,0,0,0.3)]
                  sm:h-44
                  sm:w-44
                "
              >
                <img
                  src={logo}
                  alt={`${consultant.name} logo`}
                  className="h-full w-full object-contain p-3"
                />

                {/* Verified badge on logo */}

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
                      bg-blue-600
                      text-lg
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
                  PROFILE INFORMATION
              ================================================== */}

              <div className="relative z-10 text-center">

                {/* Name */}

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

                {/* Rating + verification */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-3
                    sm:gap-5
                  "
                >

                  {/* Rating */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-lg
                      font-semibold
                      text-yellow-400
                      sm:text-xl
                    "
                  >
                    <span className="text-2xl">
                      ★
                    </span>

                    <span>
                      {rating}
                    </span>

                    <span className="text-sm font-medium text-white/80 sm:text-base">
                      ({liveReviewCount}{" "}
                      {liveReviewCount === 1
                        ? "review"
                        : "reviews"})
                    </span>
                  </div>

                  {/* Verification */}

                  {consultant.verified && (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-emerald-500/20
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-emerald-300
                        ring-1
                        ring-emerald-400/30
                        sm:text-base
                      "
                    >
                      <span>✓</span>
                      Verified Consultant
                    </span>
                  )}

                </div>

                {/* Location */}

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
                    sm:text-xl
                  "
                >
                  <span className="text-xl">
                    📍
                  </span>

                  <span>
                    {consultant.city},{" "}
                    {consultant.country}
                  </span>
                </div>

                {/* =================================================
                    ACTION BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                    sm:gap-4
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
                        min-w-[170px]
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-blue-300/30
                        bg-blue-500
                        px-6
                        py-3.5
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition
                        hover:-translate-y-0.5
                        hover:bg-blue-400
                        hover:shadow-blue-500/30
                        sm:text-lg
                      "
                    >
                      <span>🌐</span>
                      Visit Website
                    </a>
                  )}

                  {/* Phone */}

                  {consultant.phone && (
                    <a
                      href={`tel:${consultant.phone}`}
                      className="
                        inline-flex
                        min-w-[140px]
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-purple-300/30
                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600
                        px-6
                        py-3.5
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition
                        hover:-translate-y-0.5
                        hover:from-indigo-400
                        hover:to-purple-500
                        sm:text-lg
                      "
                    >
                      <span>📞</span>
                      Call
                    </a>
                  )}

                  {/* Email */}

                  {consultant.email && (
                    <a
                      href={`mailto:${consultant.email}`}
                      className="
                        inline-flex
                        min-w-[140px]
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-blue-300/30
                        bg-blue-500
                        px-6
                        py-3.5
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition
                        hover:-translate-y-0.5
                        hover:bg-blue-400
                        hover:shadow-blue-500/30
                        sm:text-lg
                      "
                    >
                      <span>✉</span>
                      Email
                    </a>
                  )}

                </div>

                {/* =================================================
                    OWNER / ADMIN BUTTONS
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
                          transition
                          hover:bg-white/20
                        "
                      >
                        ✏️ Edit Profile
                      </Link>
                    )}

                    {isOwner && (
                      consultantProActive ? (
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
                            transition
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
                            transition
                            hover:-translate-y-0.5
                            hover:from-amber-300
                            hover:to-orange-400
                          "
                        >
                          🚀 Upgrade Profile
                        </Link>
                      )
                    )}

                  </div>
                )}

              </div>

            </div>

          </div>

          {/* =================================================
              STATISTICS STRIP
          ================================================== */}

          <div
            className="
              absolute
              bottom-[-58px]
              left-1/2
              z-30
              w-[calc(100%-2rem)]
              max-w-6xl
              -translate-x-1/2
            "
          >

            <div
              className="
                grid
                grid-cols-2
                overflow-hidden
                rounded-3xl
                border
                border-white/70
                bg-white
                shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                sm:grid-cols-3
                lg:grid-cols-5
              "
            >

              {/* Experience */}

              <StatItem
                icon="🎓"
                value="15+"
                label="Years of Experience"
              />

              {/* Students */}

              <StatItem
                icon="👥"
                value="8,500+"
                label="Students Guided"
              />

              {/* Institutions */}

              <StatItem
                icon="🏛️"
                value="500+"
                label="Partner Institutions"
              />

              {/* Countries */}

              <StatItem
                icon="🌎"
                value="15+"
                label="Countries Covered"
              />

              {/* Success */}

              <StatItem
                icon="🏆"
                value="98%"
                label="Success Rate"
                highlight
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SUCCESS STORY MANAGEMENT
      ====================================================== */}

      {canManageSuccessStories && (
        <div className="mx-auto mt-24 w-full max-w-6xl px-4 sm:px-6">
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


// ============================================================
// STAT ITEM
// ============================================================

function StatItem({
  icon,
  value,
  label,
  highlight = false,
}: {
  icon: string;
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        px-5
        py-5
        sm:px-6
        sm:py-6
        lg:border-r
        lg:border-slate-200
        last:border-r-0
      "
    >

      {/* Icon */}

      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          text-xl
          ${
            highlight
              ? "bg-amber-50"
              : "bg-blue-50"
          }
        `}
      >
        {icon}
      </div>

      {/* Text */}

      <div className="min-w-0">

        <div
          className={`
            text-xl
            font-bold
            ${
              highlight
                ? "text-amber-500"
                : "text-slate-900"
            }
            sm:text-2xl
          `}
        >
          {value}
        </div>

        <div className="text-xs font-medium text-slate-500 sm:text-sm">
          {label}
        </div>

      </div>

    </div>
  );
}