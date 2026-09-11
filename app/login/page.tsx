"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Role = "student" | "consultant";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<
  "student" | "consultant" | ""
>("");

  const [redirectPath, setRedirectPath] =
    useState("/consultants");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /*
   * Read the page the user originally wanted to visit.
   *
   * Example:
   *
   * /login?redirect=/consultants
   *
   * After successful login:
   *
   * /consultants
   */
  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const redirect = params.get("redirect");

    if (redirect && redirect.startsWith("/")) {
      setRedirectPath(redirect);
    }
  }, []);

  function clearMessages() {
    setError("");
    setSuccess("");
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

    if (!role) {
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
      role: role,
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

          {error && (
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
)}

          {/* LOGIN */}

          {mode === "login" ? (

            <form
              onSubmit={handleLogin}
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
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Signing in..."
                  : "Sign In"}
              </button>

              {/* Register */}

              <p className="text-center text-xl text-slate-600">

                Don't have an account?{" "}

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
                disabled={loading}
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