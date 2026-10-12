import NetworkView from "@/components/social/NetworkView";
import SocialShell from "@/components/social/SocialShell";
import { pageMeta } from "@/lib/seo-meta";
import type { Metadata } from "next";

// Not indexed until content renders server-side; links still followed.
export const metadata: Metadata = {
  ...pageMeta(
  "/network",
  "People you may know | MatchMyStudy",
  "Find students, current students, consultants, and education providers to follow on MatchMyStudy."
),
  robots: { index: false, follow: true },
};

export default function NetworkPage() {
  return (
    <SocialShell>
      <NetworkView />
    </SocialShell>
  );
}
