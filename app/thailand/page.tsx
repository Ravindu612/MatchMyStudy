import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("thailand");

export default function ThailandPage() {
  return (
    <CountryPage
      country="Thailand"
      countryKey="thailand"
      description="Thailand offers internationally recognized universities, affordable tuition fees, vibrant student life, and excellent opportunities in engineering, medicine, business, hospitality, and technology."
      imageSrc="/images/countries/thailand.jpg"
      imageAlt="City view representing Thailand as a study destination"
    />
  );
}