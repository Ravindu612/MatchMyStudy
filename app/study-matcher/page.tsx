import StudyDestinationMatcher from "@/components/StudyDestinationMatcher";
import { STATIC_META } from "@/lib/seo-meta";

export const metadata = STATIC_META["/study-matcher"];

export default function StudyMatcherPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6">
      <h1 className="sr-only">
        Where Should I Study Abroad? Find Your Study Destination
      </h1>

      <StudyDestinationMatcher />

    </main>
  );
}