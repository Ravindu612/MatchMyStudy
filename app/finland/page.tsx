import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("finland");

export default function FinlandPage() {
  return (
    <CountryPage
      country="Finland"
      countryKey="finland"
      description="Finland offers high-quality education, a safe environment, and good opportunities for students who want to study in Europe."
      imageSrc="/images/countries/finland.jpg"
      imageAlt="City or nature view representing Finland as a study destination"
    />
  );
}