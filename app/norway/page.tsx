import CountryPage from "@/components/CountryPage";
import { countryMeta } from "@/lib/seo-meta";

export const metadata = countryMeta("norway");

export default function NorwayPage() {
  return (
    <CountryPage
      country="Norway"
      countryKey="norway"
      description="Norway offers internationally recognized universities, outstanding research opportunities, beautiful natural surroundings, and excellent quality of life for students."
      imageSrc="/images/countries/norway.jpg"
      imageAlt="City view representing Norway as a study destination"
    />
  );
}