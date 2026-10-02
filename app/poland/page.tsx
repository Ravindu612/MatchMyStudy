import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("poland");

export default function PolandPage() {
  return (
    <CountryPage
      country="Poland"
      countryKey="poland"
      description="Poland offers high-quality European education, affordable tuition fees, internationally recognized universities, and excellent opportunities in engineering, medicine, business, and technology."
      imageSrc="/images/countries/poland.jpg"
      imageAlt="City view representing Poland as a study destination"
    />
  );
}