import FeedView from "@/components/social/FeedView";
import SocialShell from "@/components/social/SocialShell";
import { pageMeta } from "@/lib/seo-meta";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta(
  "/feed",
  "Study Abroad Feed | MatchMyStudy",
  "Posts from students, current students, consultants, and education providers about studying abroad."
);

export default function FeedPage() {
  return (
    <SocialShell>
      <FeedView />
    </SocialShell>
  );
}
