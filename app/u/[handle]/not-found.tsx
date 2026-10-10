import Link from "next/link";

export default function ProfileNotFound() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Profile not found</h1>
        <p className="mt-3 text-slate-600">
          That username doesn&apos;t match a public profile.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          Back to MatchMyStudy
        </Link>
      </div>
    </main>
  );
}
