import type { Metadata } from "next";
import SessionClient from "./SessionClient";

export const metadata: Metadata = {
  title: "Signing in | MatchMyStudy",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthSessionPage() {
  return <SessionClient />;
}
