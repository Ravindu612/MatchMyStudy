"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { consultants } from "@/data/consultants";
import type { Consultant } from "@/types/consultant";

import ConsultantHero from "./ConsultantHero";
import ConsultantAbout from "./ConsultantAbout";
import ConsultantServices from "./ConsultantServices";
import ConsultantSuccessStories from "./ConsultantSuccessStories";
import ConsultantPromotionalContent from "./ConsultantPromotionalContent";
import AddPromotionalContent from "./AddPromotionalContent";
import VerificationApplication from "./VerificationApplication";
import ConsultantDestinations from "./ConsultantDestinations";
import ConsultantPartners from "./ConsultantPartners";
import ConsultantOffice from "./ConsultantOffice";
import ConsultantReviews from "./ConsultantReviews";
import ClaimProfile from "./ClaimProfile";
import UpgradePro from "./UpgradePro";
import { isConsultantProActive } from "@/lib/proStatus";

import { getConsultantBySlug } from "@/lib/consultantService";
import { getCurrentUserProfile } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

type Props = {
  slug: string;
};

export default function ConsultantProfileClient({
  slug,
}: Props) {
  const [consultant, setConsultant] =
    useState<Consultant | null>(null);

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] =
  useState<{
    id: string;
    email: string | null;
    role: "student" | "consultant" | "admin";
  } | null>(null);

const [checkingPermissions, setCheckingPermissions] =
  useState(true);

  useEffect(() => {
  async function loadConsultant() {
    try {
      const dbConsultant =
        await getConsultantBySlug(slug);

      if (dbConsultant) {
        
        setConsultant({
            id: dbConsultant.id,
            slug: dbConsultant.slug,
            name: dbConsultant.name,

            createdByConsultant:
              dbConsultant.created_by_consultant ?? true,

            isPro:
              dbConsultant.is_pro ?? false,
              ownerId:
  dbConsultant.owner_id ?? null,
            
            proPlan:
  dbConsultant.pro_plan ?? undefined,

proStartedAt:
  dbConsultant.pro_started_at ?? undefined,

proExpiresAt:
  dbConsultant.pro_expires_at ?? undefined,

            claimed:
              dbConsultant.claimed ?? false,

            logo: dbConsultant.logo,
            banner: dbConsultant.banner,

            verified: dbConsultant.verified,

            rating: dbConsultant.rating,
            reviews: dbConsultant.reviews,

            city: dbConsultant.city,
            country: dbConsultant.country,
            homeCountry:
              dbConsultant.home_country,

            destinationCountries:
              dbConsultant.destination_countries ?? [],

            services:
              dbConsultant.services ?? [],

            partnerUniversities:
              dbConsultant.partner_universities ?? [],

            phone: dbConsultant.phone,
            email: dbConsultant.email,
            website: dbConsultant.website,
            address: dbConsultant.address,

            contactPerson:
              dbConsultant.contact_person,

            maps: dbConsultant.maps,
            facebook: dbConsultant.facebook,
            instagram: dbConsultant.instagram,
            linkedin: dbConsultant.linkedin,
            youtube: dbConsultant.youtube,

            established:
              dbConsultant.established,

            description:
              dbConsultant.description,

            gallery:
              dbConsultant.gallery ?? [],
          });

          setLoading(false);
          return;
        }

        /*
         * SECOND:
         * If the consultant does NOT exist in Supabase,
         * look for the original manually created profile.
         *
         * This allows an unclaimed manual profile to show
         * the "Claim This Business" section.
         */
        const manualConsultant =
          consultants.find(
            (c) => c.slug === slug
          );

        if (manualConsultant) {
          setConsultant(manualConsultant);
          setLoading(false);
          return;
        }

        /*
         * Nothing found.
         */
        setLoading(false);
      } catch (error) {
        console.error(
          "Load consultant error:",
          error
        );

        setLoading(false);
      }
    }

    loadConsultant();
  }, [slug]);

  useEffect(() => {
  async function loadUserProfile() {
    const profile =
      await getCurrentUserProfile();

    setUserProfile(profile);
    setCheckingPermissions(false);
  }

  loadUserProfile();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(
    () => {
      loadUserProfile();
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}, []);

const canClaimBusiness =
  !checkingPermissions &&
  !!userProfile &&
  (userProfile.role === "consultant" ||
    userProfile.role === "admin");

const consultantProActive =
  consultant
    ? isConsultantProActive({
        is_pro: consultant.isPro,
        pro_expires_at:
          consultant.proExpiresAt,
      })
    : false;

const canManagePromotionalContent =
  !checkingPermissions &&
  !!consultant &&
  !!userProfile &&
  (
    userProfile.role === "admin" ||
    (
      userProfile.id === consultant.ownerId &&
      consultantProActive
    )
  );

  const isDatabaseConsultant =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    consultant?.id ?? ""
  );

  /*
   * Loading state
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="flex justify-center">
          Loading consultant...
        </div>
      </main>
    );
  }

  /*
   * Consultant not found
   */
  if (!consultant) {
    notFound();
  }

  return (
    <>
      {/* Main consultant profile */}

      <ConsultantHero consultant={consultant} />

      {isDatabaseConsultant &&
  !checkingPermissions &&
  userProfile &&
  userProfile.id === consultant.ownerId && (
    <VerificationApplication
  consultantId={consultant.id}
  isPro={consultantProActive}
/>
  )}

      <ConsultantAbout consultant={consultant} />

      {isDatabaseConsultant &&
  canManagePromotionalContent && (
    <div className="mt-8 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        <AddPromotionalContent
          consultantId={consultant.id}
          onCreated={() => {
            window.location.reload();
          }}
        />

      </div>
    </div>
)}

{isDatabaseConsultant && (
  <ConsultantPromotionalContent
  consultantId={consultant.id}
  isPro={consultantProActive}
  canManage={
    userProfile?.role === "admin" ||
    userProfile?.id === consultant.ownerId
  }
/>
)}

      <ConsultantServices consultant={consultant} />

      {isDatabaseConsultant && (
  <ConsultantSuccessStories
  consultantId={consultant.id}
  isPro={consultantProActive}
  canManage={
    userProfile?.role === "admin" ||
    userProfile?.id === consultant.ownerId
  }
/>
)}

      <ConsultantDestinations
        consultant={consultant}
      />

      <ConsultantPartners
        consultant={consultant}
      />

      <ConsultantOffice consultant={consultant} />

      <ConsultantReviews consultant={consultant} />

      {/*
       * CLAIM SECTION
       *
       * Only show this for:
       *
       * 1. A manually created profile
       * 2. That has NOT been claimed yet
       *
       * Therefore:
       *
       * Manual + not claimed
       *      → Claim This Business
       *
       * Manual + claimed
       *      → No Claim This Business
       *
       * Application-created
       *      → No Claim This Business
       */}
      {!consultant.createdByConsultant &&
  !consultant.claimed &&
  canClaimBusiness && (
    <ClaimProfile
      consultant={consultant}
    />
  )}

      {/*
       * PRO UPGRADE
       *
       * UpgradePro itself checks consultant.isPro.
       *
       * Therefore:
       *
       * isPro = false
       *      → Show Upgrade Premium Features
       *
       * isPro = true
       *      → Hide Upgrade section
       */}
      {!checkingPermissions &&
  userProfile &&
  (userProfile.role === "admin" ||
    userProfile.id === consultant.ownerId) &&
  (consultant.createdByConsultant ||
    consultant.claimed) && (
    <UpgradePro
      consultant={consultant}
    />
  )}
    </>
  );
}