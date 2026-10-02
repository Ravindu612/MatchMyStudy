import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("unitedkingdom");

export default function UnitedKingdomPage() {
  return (
    <CountryPage
      country="United Kingdom"
      countryKey="unitedKingdom"
      description="The United Kingdom is one of the world's most popular study destinations."
      imageSrc="/images/countries/united-kingdom.jpg"
      imageAlt="United Kingdom study destination"
    />
  );
}