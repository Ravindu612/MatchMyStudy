import Link from "next/link";

export default function ConsultantSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full rounded-3xl bg-white shadow-xl border border-slate-200 p-10 text-center">

        <div className="text-6xl mb-6">🎉</div>

        <h1 className="text-3xl font-bold text-slate-900">
          Your consultancy profile is live!
        </h1>

        <p className="mt-4 text-slate-600">
          Congratulations! Your consultancy profile has been published successfully.
        </p>

        <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-6 text-left">

          <h2 className="font-semibold text-blue-900 mb-3">
            What's next?
          </h2>

          <ul className="space-y-2 text-slate-700">
            <li>✅ Students can now discover your consultancy.</li>
            <li>⭐ Apply for verification to build trust.</li>
            <li>🖼️ Add your logo, banner and social links.</li>
            <li>📈 Start receiving student enquiries.</li>
          </ul>

        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4">

          <Link
            href="/consultants"
            className="flex-1 rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            Browse Consultants
          </Link>

          <Link
            href="/consultants/apply"
            className="flex-1 rounded-xl border border-slate-300 py-4 font-semibold hover:bg-slate-100 transition"
          >
            Create Another Profile
          </Link>

        </div>

      </div>
    </main>
  );
}