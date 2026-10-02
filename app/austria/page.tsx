import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("austria");

export default function AustriaPage() {
  return (
    <CountryPage
      country="Austria"
      countryKey="austria"
      description="Austria offers world-class universities, affordable education, rich cultural heritage, and excellent opportunities in engineering, science, medicine, music, and business."
      imageSrc="/images/countries/austria.jpg"
      imageAlt="City view representing Austria as a study destination"
    />
  );
}