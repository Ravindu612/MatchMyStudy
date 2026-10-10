"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  profileId: string;
};

export default function EditProfileLink({ profileId }: Props) {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    let active = true;

    supabase.auth.getUser().then(({ data }) => {
      if (active) {
        setIsOwner(data.user?.id === profileId);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsOwner(session?.user?.id === profileId);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [profileId]);

  if (!isOwner) {
    return null;
  }

  return (
    <Link
      href="/settings/profile"
      className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      Edit profile
    </Link>
  );
}
