import MessagesScreen from "@/components/social/MessagesScreen";
import SocialShell from "@/components/social/SocialShell";
import { pageMeta } from "@/lib/seo-meta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMeta(
    "/messages",
    "Messages | MatchMyStudy",
    "Direct messages with students, consultants, and education providers on MatchMyStudy."
  ),
  robots: { index: false, follow: false },
};

export default function MessagesPage() {
  return (
    <SocialShell>
      <MessagesScreen />
    </SocialShell>
  );
}
