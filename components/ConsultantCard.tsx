"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Consultant } from "@/types/consultant";
import { getConsultantAverageRating } from "@/lib/reviewService";

type Props = {
  consultant: Consultant;
};

export default function ConsultantCard({
  consultant,
}: Props) {
  const [liveRating, setLiveRating] =
    useState(0);

  const [liveReviewCount, setLiveReviewCount] =
    useState(0);

  useEffect(() => {
    async function loadRating() {
      try {
        const summary =
          await getConsultantAverageRating(
            consultant.id
          );

        setLiveRating(
          summary.averageRating
        );

        setLiveReviewCount(
          summary.reviewCount
        );
      } catch (error) {
        console.error(
          "Load consultant card rating error:",
          error
        );
      }
    }

    loadRating();
  }, [consultant.id]);

  return (
    <div
      className={`relative rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        consultant.isPro
          ? "border-blue-300 bg-gradient-to-br from-blue-50 via-white to-purple-50"
          : "border-slate-200 bg-white"
      }`}
    >
      {consultant.isPro && (
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 text-sm font-bold text-white shadow-sm">
          ⭐ Featured
        </div>
      )}

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {consultant.name}
          </h3>

          <p className="text-slate-500 mt-1">
            {consultant.city}, {consultant.country}
          </p>

          {consultant.homeCountry !==
            consultant.country && (
            <p className="text-sm text-slate-500 mt-1">
              Serving students from{" "}
              {consultant.homeCountry}
            </p>
          )}
        </div>

        {consultant.verified && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Verified
          </span>
        )}
      </div>

      <div className="mt-6">
        <p className="font-semibold mb-2">
          Study Destinations
        </p>

        <div className="flex flex-wrap gap-2">
          {consultant.destinationCountries.map(
            (country) => (
              <span
                key={country}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {country}
              </span>
            )
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-yellow-600 font-semibold">
          ⭐{" "}
          {liveReviewCount > 0
            ? liveRating.toFixed(1)
            : "0.0"}
        </p>

        <Link
          href={`/consultants/${consultant.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}