import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("denmark");

export default function DenmarkPage() {
  return (
    <CountryPage
      country="Denmark"
      countryKey="denmark"
      description="Denmark is known for high-quality education, innovative teaching methods, sustainability, and strong career opportunities for international students."
      imageSrc="/images/countries/denmark.jpg"
      imageAlt="City view representing Denmark as a study destination"
    />
  );
}