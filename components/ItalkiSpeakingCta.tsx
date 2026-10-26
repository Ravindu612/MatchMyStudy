import Link from "next/link";
import {
  ITALKI_AFFILIATE_URL,
  ITALKI_CTA_LABEL,
  ITALKI_LINK_REL,
} from "@/lib/italki";

type ItalkiSpeakingCtaProps = {
  note: string;
  className?: string;
};

export function ItalkiSpeakingLink({
  className = "",
}: {
  className?: string;
}) {
  return (
    <a
      href={ITALKI_AFFILIATE_URL}
      target="_blank"
      rel={ITALKI_LINK_REL}
      className={className}
    >
      {ITALKI_CTA_LABEL}
    </a>
  );
}

/**
 * Editorial speaking-practice link: short context, one affiliate URL,
 * and a link to the site affiliate disclosure.
 */
export default function ItalkiSpeakingCta({
  note,
  className = "",
}: ItalkiSpeakingCtaProps) {
  return (
    <aside
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 ${className}`}
    >
      <h2 className="text-2xl font-bold text-slate-900">Speaking practice</h2>

      <p className="mt-3 leading-8 text-slate-600">{note}</p>

      <ItalkiSpeakingLink className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700" />

      <p className="mt-3 text-sm leading-6">
        <Link
          href="/affiliate-disclosure"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Affiliate disclosure
        </Link>
      </p>
    </aside>
  );
}
