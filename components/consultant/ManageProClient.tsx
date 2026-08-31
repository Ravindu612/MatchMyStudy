"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  consultantId: string;
  ownerId: string | null;
  children: React.ReactNode;
};

export default function ManageProClient({
  consultantId,
  ownerId,
  children,
}: Props) {
  const router = useRouter();

  const [checking, setChecking] =
    useState(true);

  useEffect(() => {
    async function checkOwner() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace(
          `/login?redirect=${window.location.pathname}`
        );
        return;
      }

      if (
        !ownerId ||
        user.id !== ownerId
      ) {
        router.replace(
          `/consultants/${window.location.pathname.split("/").pop()}`
        );
        return;
      }

      setChecking(false);
    }

    checkOwner();
  }, [ownerId, router]);

  if (checking) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="flex justify-center">
          <p className="text-slate-500">
            Checking access...
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}