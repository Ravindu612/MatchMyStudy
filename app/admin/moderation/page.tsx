import ModerationScreen from "@/components/admin/ModerationScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moderation | MatchMyStudy",
  robots: { index: false, follow: false },
};

export default function ModerationPage() {
  return <ModerationScreen />;
}
