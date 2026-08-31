"use client";

import Link from "next/link";
import type { Consultant } from "@/types/consultant";

type Props = {
  consultant: Consultant;
};

export default function UpgradePro({ consultant }: Props) {
  if (consultant.isPro) {
    return null;
  }

  return (
    <section className="mt-10">
      <div className="rounded-4xl bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 p-8 md:p-10 text-black">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              ⭐ MatchMyStudy Pro
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Upgrade your consultant profile
            </h2>

            <p className="mt-3 max-w-2xl text-black-100 text-lg leading-7">
              Get more visibility, promote your success stories,
              showcase your services and unlock premium profile
              features.
            </p>

          </div>

          <div className="flex-shrink-0">

            <Link
              href={`/consultants/upgrade/${consultant.slug}`}
              className="rounded-full bg-blue-500 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition"
                  >
              Unlock Premium Profile Features
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}