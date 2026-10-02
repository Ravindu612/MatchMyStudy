import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("turkiye");

export default function TurkiyePage() {
  return (
    <CountryPage
      country="Türkiye"
      countryKey="turkiye"
      description="Türkiye is a leading bridge between Europe and Asia, offering internationally recognized universities, affordable education, rich cultural experiences, and excellent opportunities in engineering, medicine, business, and technology."
      imageSrc="/images/countries/turkiye.jpg"
      imageAlt="City view representing Türkiye as a study destination"
    />
  );
}