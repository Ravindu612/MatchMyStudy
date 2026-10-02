import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("newzealand");

export default function NewZealandPage() {
  return (
    <CountryPage
      country="New Zealand"
      countryKey="newZealand"
      description="New Zealand offers world-class universities, excellent quality of life, and globally recognized degrees in a safe and welcoming environment."
      imageSrc="/images/countries/newzealand.jpg"
      imageAlt="City view representing New Zealand as a study destination"
    />
  );
}