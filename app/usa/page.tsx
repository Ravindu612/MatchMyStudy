import CountryPage from "@/components/CountryPage";

export default function UsaPage() {
  return (
    <CountryPage
      country="United States"
      countryKey="usa"
      description="The United States is one of the world's most popular study destinations, offering globally recognized universities, cutting-edge research opportunities, diverse academic programmes, and strong career prospects."
      imageSrc="/images/countries/usa.jpg"
      imageAlt="City view representing the United States as a study destination"
    />
  );
}