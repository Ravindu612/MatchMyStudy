"use client";

import { Suspense, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithGoogle } from "@/lib/googleAuth";
import {
  clearOAuthHandoff,
  parseSignupRole,
  rememberOAuthHandoff,
  resolveOAuthNextPath,
  safeNextPath,
} from "@/lib/signupRole";

function GoogleMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47a5.53 5.53 0 0 1-2.4 3.63v3.01h3.88c2.27-2.09 3.54-5.17 3.54-8.67Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3.01c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.27A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.55.38-2.27V6.62H1.26a12 12 0 0 0 0 10.76l4.01-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.14 15.24 0 12 0 7.31 0 3.25 2.69 1.26 6.62l4.01 3.11C6.22 6.88 8.87 4.77 12 4.77Z"
      />
    </svg>
  );
}

function OrDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-3 text-slate-500">
          or
        </span>
      </div>
    </div>
  );
}

function LoginFallback() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-900">
            Login
          </h1>
          <p className="mt-2 text-slate-600">
            Sign in to your MatchMyStudy account.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<
  "student" | "consultant" | ""
>("");

  const redirectParam = searchParams.get("redirect");
  const redirectPath = safeNextPath(
    redirectParam && redirectParam.startsWith("/")
      ? redirectParam
      : null
  );
  const googleError =
    searchParams.get("error") === "google"
      ? "Google sign-in was cancelled or could not be completed. Please try again."
      : "";

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [hideGoogleError, setHideGoogleError] = useState(false);
  const [success, setSuccess] = useState("");
  const busy = loading || googleLoading;
  const visibleError =
    error || (hideGoogleError ? "" : googleError);

  function clearMessages() {
    setError("");
    setSuccess("");
    setHideGoogleError(true);
  }

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    clearMessages();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      console.error("Login error:", error);

      setError(error.message);
      setLoading(false);

      return;
    }

    router.push(redirectPath);
  }

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    clearMessages();

    const signupRole = parseSignupRole(role);

    if (!signupRole) {
      setError("Please select your role.");
      setLoading(false);
      return;
    }

    /*
     * Check passwords
     */
    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );

      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );

      setLoading(false);
      return;
    }

    /*
     * Create Supabase authentication user
     */
    const {
  data,
  error,
} = await supabase.auth.signUp({
  email,
  password,

  options: {
    data: {
      role: signupRole,
    },

    emailRedirectTo: `${window.location.origin}/login`,
  },
});

    if (error) {
      console.error(
        "Registration error:",
        error
      );

      setError(error.message);
      setLoading(false);

      return;
    }

    /*
     * Supabase should return the newly created user.
     */
    const user = data.user;

    if (!user) {
      setError(
        "Registration failed. Please try again."
      );

      setLoading(false);

      return;
    }

    /*
     * Create the application profile.
     */

    /*
     * If email confirmation is enabled in Supabase,
     * there may not be an active session yet.
     */
    if (!data.session) {
      setSuccess(
        "Account created successfully. Please check your email and confirm your account before logging in."
      );

      setMode("login");
      setPassword("");
      setConfirmPassword("");

      setLoading(false);

      return;
    }

    /*
     * If email confirmation is disabled,
     * the user can immediately continue.
     */
    router.push(redirectPath);
  }

  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    clearMessages();

    const nextPath = resolveOAuthNextPath(
      searchParams.get("redirect"),
      document.referrer,
      window.location.origin
    );
    const signupRole =
      mode === "register" ? parseSignupRole(role) : null;

    if (mode === "register" && !signupRole) {
      setError("Please select your role.");
      setGoogleLoading(false);
      return;
    }

    rememberOAuthHandoff(nextPath, signupRole);

    const { error: oauthError } = await signInWithGoogle(
      `${window.location.origin}/auth/callback`
    );

    if (oauthError) {
      clearOAuthHandoff();
      console.error("Google sign-in error:", oauthError);
      setError(oauthError.message);
      setGoogleLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20">

      <div className="mx-auto max-w-md px-6">

        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">

          {/* Heading */}

          <h1 className="text-3xl font-bold text-slate-900">
            {mode === "login"
              ? "Login"
              : "Create your account"}
          </h1>

          <p className="mt-2 text-slate-600">
            {mode === "login"
              ? "Sign in to your MatchMyStudy account."
              : "Create your MatchMyStudy account to continue."}
          </p>

          {/* Login requirement message */}

          {mode === "login" && (
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-base text-blue-800">
              Please login to continue.
            </div>
          )}

          {/* Success message */}

          {success && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {success}
            </div>
          )}

          {/* Error */}

          {visibleError && (
  <div
    className="mt-6 rounded-xl border px-4 py-3 text-base font-medium"
    style={{
      backgroundColor: "#fee2e2",
      borderColor: "#fca5a5",
      color: "#991b1b",
    }}
  >
    {visibleError}
  </div>
)}

          {/* LOGIN */}

          {mode === "login" ? (

            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={busy}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <GoogleMark />
                {googleLoading
                  ? "Redirecting to Google..."
                  : "Sign in with Google"}
              </button>

              <OrDivider />

              {/* Email */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  placeholder="you@example.com"
                />

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your password"
                />

              </div>

              {/* Login button */}

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Signing in..."
                  : "Sign In"}
              </button>

              {/* Register */}

              <p className="text-center text-xl text-slate-600">

                Don&apos;t have an account?{" "}

                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    clearMessages();
                  }}
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Register here
                </button>

              </p>

            </form>

          ) : (

            /* REGISTER */

            <form
              onSubmit={handleRegister}
              className="mt-8 space-y-5"
            >

              {/* Email */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  placeholder="you@example.com"
                />

              </div>

              {/* Role */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">
                  Your role
                </label>

                <select
  value={role}
  onChange={(e) =>
    setRole(
      e.target.value as
        | "student"
        | "consultant"
        | ""
    )
  }
  className="w-full rounded-xl border border-slate-300 px-4 py-3"
>
  <option value="">
    Select your role
  </option>

  <option value="student">
    Student
  </option>

  <option value="consultant">
    Education Consultant
  </option>
</select>

                <p className="mt-2 text-sm text-slate-500">
                  Google sign-up uses the role selected above.
                </p>

              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={busy}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <GoogleMark />
                {googleLoading
                  ? "Redirecting to Google..."
                  : "Sign up with Google"}
              </button>

              <OrDivider />

              {/* Password */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  placeholder="Create a password"
                />

              </div>

              {/* Confirm password */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">
                  Confirm password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  placeholder="Confirm your password"
                />

              </div>

              {/* Register button */}

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Creating account..."
                  : "Register"}
              </button>

              {/* Login */}

              <p className="text-center text-xl text-slate-600">

                Already have an account?{" "}

                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    clearMessages();
                  }}
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Login here
                </button>

              </p>

            </form>

          )}

        </div>

      </div>

    </main>
  );
}