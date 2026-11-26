import Link from "next/link";
import {
  isAffiliatePartner,
  partnerLinkRel,
  type Partner,
} from "@/data/partners";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function PartnerCard({ partner }: { partner: Partner }) {
  const affiliate = isAffiliatePartner(partner);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
        {partner.category}
      </span>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">{partner.name}</h3>

      <p className="mt-3 flex-1 leading-7 text-slate-600">{partner.summary}</p>

      <a
        href={partner.url}
        target="_blank"
        rel={partnerLinkRel(partner)}
        className={`mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700 ${focus}`}
      >
        Visit {partner.name}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        Opens {partner.name}&apos;s website in a new tab.
      </p>

      {affiliate ? (
        <p className="mt-2 text-sm leading-6">
          <Link
            href="/affiliate-disclosure"
            className={`font-semibold text-blue-600 hover:text-blue-700 ${focus}`}
          >
            Affiliate disclosure
          </Link>
        </p>
      ) : null}
    </article>
  );
}

export function PartnerGrid({
  partners,
}: {
  partners: readonly Partner[];
}) {
  const columns =
    partners.length >= 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : partners.length === 2
        ? "md:grid-cols-2"
        : "max-w-xl";

  return (
    <div className={`grid gap-8 ${columns}`}>
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </div>
  );
}
