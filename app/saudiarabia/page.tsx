import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("saudiarabia");

export default function SaudiArabiaPage() {
  return (
    <CountryPage
      country="Saudi Arabia"
      countryKey="saudiArabia"
      description="Saudi Arabia is one of the Middle East's leading education destinations, offering internationally recognized universities, advanced research facilities, and excellent opportunities in engineering, medicine, business, and science."
      imageSrc="/images/countries/saudi-arabia.jpg"
      imageAlt="City view representing Saudi Arabia as a study destination"
    />
  );
}