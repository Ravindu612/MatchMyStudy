import FeedView from "@/components/social/FeedView";
import SocialShell from "@/components/social/SocialShell";
import { pageMeta } from "@/lib/seo-meta";
import type { Metadata } from "next";

// Not indexed until content renders server-side; links still followed.
export const metadata: Metadata = {
  ...pageMeta(
  "/feed",
  "Study Abroad Feed | MatchMyStudy",
  "Posts from students, current students, consultants, and education providers about studying abroad."
),
  robots: { index: false, follow: true },
};

export default function FeedPage() {
  return (
    <SocialShell>
      <FeedView />
    </SocialShell>
  );
}
