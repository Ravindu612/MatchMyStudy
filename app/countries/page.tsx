import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo-meta";
import CountriesPageClient from "./CountriesPageClient";
import JsonLd from "@/components/JsonLd";
import { hubPageJsonLd } from "@/lib/hub-jsonld";
import { countries } from "@/data/countries";

export const metadata: Metadata = pageMeta(
  "/countries",
  "Study Abroad Countries — Explore Study Destinations | MatchMyStudy",
  "Explore study abroad destinations around the world. Compare countries, universities, courses, tuition fees, scholarships, student jobs, living costs, visas, and future opportunities."
);

export default function CountriesPage() {
  return (
    <>
      <JsonLd
        data={hubPageJsonLd({
          type: "CollectionPage",
          name: "Study Abroad Countries",
          path: "/countries",
          items: countries
            .filter((c) => c.status === "available")
            .map((c) => ({ name: c.name, url: c.href })),
        })}
      />
      <CountriesPageClient />
    </>
  );
}