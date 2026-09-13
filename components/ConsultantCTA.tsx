"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentUserProfile } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export default function ConsultantCTA() {
  const [role, setRole] = useState<
    "student" | "consultant" | "admin" | null
  >(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserRole() {
      const profile = await getCurrentUserProfile();

      setRole(profile?.role ?? null);
      setLoading(false);
    }

    loadUserRole();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUserRole();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /*
   * Only consultants and admins
   * can see this section.
   *
   * Students and logged-out users
   * should not see it.
   */
  if (
    loading ||
    (role !== "consultant" && role !== "admin")
  ) {
    return null;
  }

  return (
    <div className="w-72 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl p-6 text-white">

      <h3 className="text-lg font-bold text-white">
        Are you an education consultant?
      </h3>

      <div className="mt-4 space-y-3 text-sm text-blue-50">

        <div className="flex items-center gap-2">
          <span>✅</span>
          <span>Create your profile</span>
        </div>

        <div className="flex items-center gap-2">
          <span>✅</span>
          <span>Get verified by our team</span>
        </div>

      </div>

      <Link
        href="/consultants/apply"
        className="mt-5 block w-full rounded-xl bg-white py-3 text-center font-semibold text-blue-700 hover:bg-blue-50 transition"
      >
        Create a Profile →
      </Link>

    </div>
  );
}