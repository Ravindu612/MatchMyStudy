import Section from "./Section";
import { Consultant } from "@/types/consultant";

type Props = {
  consultant: Consultant;
};

export default function ConsultantOffice({ consultant }: Props) {
  return (
    <Section
  title="Office Information"
  icon=""
  gradient="linear-gradient(90deg,#0891B2,#3B82F6)"
>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="space-y-5">

          <div>
            <h3 className="font-semibold text-slate-900">
              Address
            </h3>

            <p className="text-slate-600 mt-2">
              {consultant.address}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              ☎ Phone
            </h3>

            <a
              href={`tel:${consultant.phone}`}
              className="text-blue-600 hover:underline"
            >
              {consultant.phone}
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              ✉ Email
            </h3>

            <a
              href={`mailto:${consultant.email}`}
              className="text-blue-600 hover:underline"
            >
              {consultant.email}
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              🌐 Website
            </h3>

            <a
              href={consultant.website}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Visit Official Website
            </a>
          </div>

        </div>

        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center h-64">
            
  <iframe
    title="Office Location"
    width="100%"
    height="350"
    loading="lazy"
    allowFullScreen
    className="rounded-2xl border"
    src={`https://www.google.com/maps?q=${encodeURIComponent(
      consultant.address ?? ""
    )}&output=embed`}
  />   

        </div>

      </div>

    </Section>
  );
}