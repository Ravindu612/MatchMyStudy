import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("hungary");

export default function HungaryPage() {
  return (
    <CountryPage
      country="Hungary"
      countryKey="hungary"
      description="Hungary is a leading Central European study destination known for internationally recognized universities, affordable tuition, medicine, engineering, business, computer science, and rich academic traditions."
      imageSrc="/images/countries/hungary.jpg"
      imageAlt="City view representing Hungary as a study destination"
    />
  );
}