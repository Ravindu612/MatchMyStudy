import LeadsScreen from "@/components/admin/LeadsScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact requests | MatchMyStudy",
  robots: { index: false, follow: false },
};

export default function LeadsPage() {
  return <LeadsScreen />;
}
