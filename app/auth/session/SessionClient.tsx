"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { createGoogleOAuthBrowserClient } from "@/lib/googleAuth";
import { safeNextPath } from "@/lib/signupRole";

export default function SessionClient() {
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function finishSignIn() {
      const params = new URLSearchParams(window.location.search);
      const nextPath = safeNextPath(params.get("next"));

      const {
        data: { session: existing },
      } = await supabase.auth.getSession();

      if (cancelled) {
        return;
      }

      if (existing) {
        window.location.assign(nextPath);
        return;
      }

      const oauthClient = createGoogleOAuthBrowserClient();
      const { data, error: sessionError } =
        await oauthClient.auth.getSession();

      if (cancelled) {
        return;
      }

      if (sessionError || !data.session) {
        setError(
          "Google sign-in could not be completed. Please try again."
        );
        return;
      }

      const { error: setSessionError } =
        await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });

      if (cancelled) {
        return;
      }

      if (setSessionError) {
        setError(setSessionError.message);
        return;
      }

      await oauthClient.auth.signOut({ scope: "local" });

      window.location.assign(nextPath);
    }

    void finishSignIn();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-900">
            {error ? "Sign-in failed" : "Signing you in"}
          </h1>

          {error ? (
            <>
              <div
                className="mt-6 rounded-xl border px-4 py-3 text-base font-medium"
                style={{
                  backgroundColor: "#fee2e2",
                  borderColor: "#fca5a5",
                  color: "#991b1b",
                }}
              >
                {error}
              </div>

              <Link
                href="/login"
                className="mt-6 block text-center font-semibold text-blue-600 hover:text-blue-700"
              >
                Back to login
              </Link>
            </>
          ) : (
            <p className="mt-2 text-slate-600">
              Finishing Google sign-in. This only takes a moment.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
