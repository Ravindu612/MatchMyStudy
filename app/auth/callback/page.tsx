import { Suspense } from "react";
import type { Metadata } from "next";
import CallbackClient from "./CallbackClient";

export const metadata: Metadata = {
  title: "Signing in | MatchMyStudy",
  robots: {
    index: false,
    follow: false,
  },
};

function CallbackFallback() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-900">
            Signing you in
          </h1>
          <p className="mt-2 text-slate-600">
            Finishing Google sign-in. This only takes a moment.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<CallbackFallback />}>
      <CallbackClient />
    </Suspense>
  );
}
