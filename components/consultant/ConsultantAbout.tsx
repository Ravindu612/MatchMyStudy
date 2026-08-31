import { Consultant } from "@/types/consultant";
import Section from "./Section";

export default function ConsultantAbout({ consultant }: any) {

  return (

    <Section
  title="About"
  icon="📘"
  gradient="linear-gradient(90deg,#2563EB,#4F46E5)"
>

      <p className="text-slate-700 leading-8">

        {consultant.description}

      </p>

    </Section>

  );

}