import { Consultant } from "@/types/consultant";
import Section from "./Section";

export default function ConsultantServices({ consultant }: any) {

  return (

    <Section
  title="Services"
  icon="🛠"
  gradient="linear-gradient(90deg,#7C3AED,#A855F7)"
>

      <div className="grid md:grid-cols-2 gap-4">

        {consultant.services.map((service: string) => (

          <div
            key={service}
            className="flex items-center gap-3 rounded-xl border p-4"
          >
            ✅ {service}
          </div>

        ))}

      </div>

    </Section>

  );

}