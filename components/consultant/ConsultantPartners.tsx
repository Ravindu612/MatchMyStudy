import Section from "./Section";
import { Consultant } from "@/types/consultant";

type Props = {
  consultant: Consultant;
};

export default function ConsultantPartners({ consultant }: Props) {
  return (
    <Section
  title="Universities"
  icon="🎓"
  gradient="linear-gradient(90deg,#EA580C,#F59E0B)"
>
      <div className="grid md:grid-cols-3 gap-4">
        {consultant.partnerUniversities.map((university) => (
          <div
            key={university}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center hover:shadow-md transition"
          >
            <div className="text-4xl mb-3">🏛</div>

            <h3 className="font-semibold text-lg">
              {university}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}