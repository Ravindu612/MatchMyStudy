import NotificationsScreen from "@/components/social/NotificationsScreen";
import SocialShell from "@/components/social/SocialShell";
import { pageMeta } from "@/lib/seo-meta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMeta(
    "/notifications",
    "Notifications | MatchMyStudy",
    "Likes, comments, follows, messages, and report updates on MatchMyStudy."
  ),
  robots: { index: false, follow: false },
};

export default function NotificationsPage() {
  return (
    <SocialShell>
      <NotificationsScreen />
    </SocialShell>
  );
}
