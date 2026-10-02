import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("malaysia");

export default function MalaysiaPage() {
  return (
    <CountryPage
      country="Malaysia"
      countryKey="malaysia"
      description="Malaysia is a leading study destination in Southeast Asia, offering affordable tuition, internationally recognized universities, English-taught programmes, and strong industry connections."
      imageSrc="/images/countries/malaysia.jpg"
      imageAlt="City view representing Malaysia as a study destination"
    />
  );
}