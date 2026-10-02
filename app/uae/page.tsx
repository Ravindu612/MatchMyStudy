import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("uae");

export default function UAEPage() {
  return (
    <CountryPage
      country="United Arab Emirates"
      countryKey="uae"
      description="The United Arab Emirates is a leading education hub in the Middle East, offering internationally recognized universities, modern campuses, and excellent opportunities in engineering, business, medicine, and technology."
      imageSrc="/images/countries/uae.jpg"
      imageAlt="City view representing the United Arab Emirates as a study destination"
    />
  );
}