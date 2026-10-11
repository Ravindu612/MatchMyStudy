"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  clearOAuthHandoff,
  readOAuthHandoff,
} from "@/lib/signupRole";

const handledAttempts = new Set<string>();

export default function CallbackClient() {
  const searchParams = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const code = searchParams.get("code");
    const oauthError = searchParams.get("error");
    const attemptKey = code || `error:${oauthError ?? "missing"}`;

    if (handledAttempts.has(attemptKey)) {
      return;
    }

    handledAttempts.add(attemptKey);

    const { nextPath, role } = readOAuthHandoff();

    async function finishSignIn() {
      if (oauthError || !code) {
        window.location.replace(loginUrl(nextPath));
        return;
      }

      const { data, error: exchangeError } =
        await supabase.auth.exchangeCodeForSession(code);

      if (exchangeError || !data.session) {
        console.error(
          "Google code exchange failed:",
          exchangeError
        );
        clearOAuthHandoff();
        setError(
          "Google sign-in could not be completed. Please try again."
        );
        return;
      }

      if (role) {
        try {
          await fetch("/api/auth/google-role", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${data.session.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ role }),
          });
        } catch (roleError) {
          console.error(
            "Google signup role request failed:",
            roleError
          );
        }
      }

      clearOAuthHandoff();
      window.location.replace(nextPath);
    }

    void finishSignIn();
  }, [searchParams]);

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

function loginUrl(nextPath: string) {
  const login = new URL("/login", window.location.origin);
  login.searchParams.set("error", "google");

  if (nextPath !== "/consultants") {
    login.searchParams.set("redirect", nextPath);
  }

  return login.toString();
}
