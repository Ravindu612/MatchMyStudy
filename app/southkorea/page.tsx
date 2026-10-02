import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("southkorea");

export default function SouthKoreaPage() {
  return (
    <CountryPage
      country="South Korea"
      countryKey="southKorea"
      description="South Korea is a global leader in technology, innovation, engineering, and research, offering internationally recognized universities and excellent opportunities for international students."
      imageSrc="/images/countries/south-korea.jpg"
      imageAlt="City view representing South Korea as a study destination"
    />
  );
}