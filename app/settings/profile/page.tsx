import type { Metadata } from "next";
import ProfileSettingsForm from "@/components/social/ProfileSettingsForm";

export const metadata: Metadata = {
  title: "Profile settings | MatchMyStudy",
  robots: { index: false, follow: false },
};

export default function ProfileSettingsPage() {
  return <ProfileSettingsForm />;
}
