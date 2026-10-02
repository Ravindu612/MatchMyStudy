import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("taiwan");

export default function TaiwanPage() {
  return (
    <CountryPage
      country="Taiwan"
      countryKey="taiwan"
      description="Taiwan is one of Asia's leading education destinations, offering world-class universities, affordable tuition, advanced technology research, and excellent opportunities in engineering, computer science, business, and medicine."
      imageSrc="/images/countries/taiwan.jpg"
      imageAlt="City view representing Taiwan as a study destination"
    />
  );
}