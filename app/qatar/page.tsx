import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("qatar");

export default function QatarPage() {
  return (
    <CountryPage
      country="Qatar"
      countryKey="qatar"
      description="Qatar is a rapidly growing education hub in the Middle East, offering world-class universities, international branch campuses, cutting-edge research, and excellent opportunities in engineering, business, medicine, and technology."
      imageSrc="/images/countries/qatar.jpg"
      imageAlt="City view representing Qatar as a study destination"
    />
  );
}