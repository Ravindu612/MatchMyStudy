import Section from "./Section";
import { Consultant } from "@/types/consultant";

type Props = {
  consultant: Consultant;
};

export default function ConsultantOffice({
  consultant,
}: Props) {
  return (
    <Section
      title="Office Information"
      icon=""
      gradient="linear-gradient(90deg,#0891B2,#3B82F6)"
    >
      <div className="grid gap-8 md:grid-cols-2">

        {/* =====================================================
            CONTACT INFORMATION
        ====================================================== */}

        <div className="space-y-5">

          {/* Address */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Address
            </h3>

            <p className="mt-2 break-words text-slate-600">
              {consultant.address || "Not available"}
            </p>
          </div>

          {/* Phone */}
          {consultant.phone && (
            <div>
              <h3 className="font-semibold text-slate-900">
                ☎ Phone
              </h3>

              <a
                href={`tel:${consultant.phone}`}
                className="break-words text-blue-600 hover:underline"
              >
                {consultant.phone}
              </a>
            </div>
          )}

          {/* Email */}
          {consultant.email && (
            <div>
              <h3 className="font-semibold text-slate-900">
                ✉ Email
              </h3>

              <a
                href={`mailto:${consultant.email}`}
                className="break-words text-blue-600 hover:underline"
              >
                {consultant.email}
              </a>
            </div>
          )}

          {/* Website */}
          {consultant.website && (
            <div>
              <h3 className="font-semibold text-slate-900">
                🌐 Website
              </h3>

              <a
                href={consultant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Official Website
              </a>
            </div>
          )}

        </div>


        {/* =====================================================
            GOOGLE MAP
        ====================================================== */}

        <div className="min-w-0">

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              shadow-sm
            "
          >

            <iframe
              title="Office Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="
                block
                h-[280px]
                w-full
                max-w-full
                border-0
                sm:h-[320px]
              "
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                consultant.address ?? ""
              )}&output=embed`}
            />

          </div>

        </div>

      </div>
    </Section>
  );
}