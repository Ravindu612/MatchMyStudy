import { Consultant } from "@/types/consultant";
import Section from "./Section";

export default function ConsultantDestinations({ consultant }: any) {

  return (

    <Section
  title="Study Destinations"
  icon="🌍"
  gradient="linear-gradient(90deg,#059669,#10B981)"
>

      <div className="flex flex-wrap gap-3">

        {consultant.destinationCountries.map((country: string) => (

          <span
            key={country}
            className="rounded-full bg-blue-100 px-5 py-3 text-blue-700 font-semibold"
          >
            🌍 {country}
          </span>

        ))}

      </div>

    </Section>

  );

}