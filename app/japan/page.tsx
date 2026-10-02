import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("japan");

export default function JapanPage() {
  return (
    <CountryPage
      country="Japan"
      countryKey="japan"
      description="Japan is one of Asia's leading study destinations, offering world-class universities, cutting-edge technology, outstanding research, and a unique cultural experience for international students."
      imageSrc="/images/countries/japan.jpg"
      imageAlt="City view representing Japan as a study destination"
    />
  );
}