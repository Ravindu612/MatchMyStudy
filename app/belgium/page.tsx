import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("belgium");

export default function BelgiumPage() {
  return (
    <CountryPage
      country="Belgium"
      countryKey="belgium"
      description="Belgium offers internationally recognized universities, multilingual education, outstanding research opportunities, and a central location in Europe."
      imageSrc="/images/countries/belgium.jpg"
      imageAlt="City view representing Belgium as a study destination"
    />
  );
}