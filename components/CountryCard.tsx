import Image from "next/image";
import Link from "next/link";
import type { Country } from "@/data/countries";
import {
  countryCardImageAlt,
  countryCardImageSrc,
} from "@/lib/countryImage";

/** Homepage grid: 1 / 2 / 3 / 4 columns inside the max-w-7xl section. */
export const homepageCountryCardSizes =
  "(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 72px) / 2), (max-width: 1279px) calc((100vw - 96px) / 3), 290px";

/** /countries grid: 1 / 2 / 3 columns inside the same container. */
export const countryDirectoryCardSizes =
  "(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc((100vw - 72px) / 2), 395px";

type CountryCardProps = {
  country: Country;
  sizes: string;
  /**
   * Preload only when this image is the LCP. Country grids sit below
   * the page heading, so callers should leave this off.
   */
  preload?: boolean;
  headingLevel?: "h2" | "h3";
  exploreLabel?: string;
  showStatus?: boolean;
};

export default function CountryCard({
  country,
  sizes,
  preload = false,
  headingLevel = "h3",
  exploreLabel = "Explore →",
  showStatus = false,
}: CountryCardProps) {
  const imageSrc = countryCardImageSrc(country.slug);
  const available = country.status === "available";
  const Heading = headingLevel;

  const card = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={countryCardImageAlt(country.name)}
            fill
            sizes={sizes}
            quality={75}
            preload={preload || undefined}
            loading={preload ? undefined : "lazy"}
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end bg-gradient-to-br from-slate-200 via-slate-100 to-blue-100 p-5"
            aria-hidden="true"
          >
            <span className="text-3xl font-bold text-slate-400">
              {country.name.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <Heading className="text-2xl font-bold text-slate-900">
            {country.name}
          </Heading>

          {showStatus ? (
            <span
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                available
                  ? "bg-green-100 text-green-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {available ? "Available" : "Coming Soon"}
            </span>
          ) : null}
        </div>

        <p className="leading-relaxed text-slate-600">{country.description}</p>

        {available ? (
          <div className="mt-auto pt-5 font-semibold text-blue-600">
            {exploreLabel}
          </div>
        ) : null}
      </div>
    </>
  );

  if (available) {
    return (
      <Link
        href={country.href}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {card}
      </Link>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {card}
    </div>
  );
}
