"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  className?: string;
  destination?: string;
};

export default function FindConsultantsButton({
  className = "",
  destination,
}: Props) {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setLoggedIn(!!session);
    }

    checkLogin();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setLoggedIn(!!session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function handleClick() {
  const consultantsPath = destination
    ? `/consultants?destination=${encodeURIComponent(
        destination
      )}`
    : "/consultants";

  if (loggedIn) {
    router.push(consultantsPath);
  } else {
    router.push(
      `/login?redirect=${encodeURIComponent(
        consultantsPath
      )}`
    );
  }
}

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      🤝 Find Study Abroad Consultants
    </button>
  );
}