import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("germany");

export default function GermanyPage() {
  return (
    <CountryPage
      country="Germany"
      countryKey="germany"
      description="Germany is attractive for international students because of its low-tuition public universities, strong economy, and high-quality education."
      imageSrc="/images/countries/germany.jpg"
      imageAlt="City view representing Germany as a study destination"
    />
  );
}