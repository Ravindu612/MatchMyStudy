import type { Metadata } from "next";
import CountriesPageClient from "./CountriesPageClient";

export const metadata: Metadata = {
  title: "Study Abroad Countries — Explore Study Destinations | MatchMyStudy",
  description:
    "Explore study abroad destinations around the world. Compare countries, universities, courses, tuition fees, scholarships, student jobs, living costs, visas, and future opportunities.",
};

export default function CountriesPage() {
  return <CountriesPageClient />;
}