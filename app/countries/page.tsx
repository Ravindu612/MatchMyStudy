import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-meta";
import CountriesPageClient from "./CountriesPageClient";

export const metadata: Metadata = pageMeta(
  "/countries",
  "Study Abroad Countries — Explore Study Destinations | MatchMyStudy",
  "Explore study abroad destinations around the world. Compare countries, universities, courses, tuition fees, scholarships, student jobs, living costs, visas, and future opportunities."
);

export default function CountriesPage() {
  return <CountriesPageClient />;
}