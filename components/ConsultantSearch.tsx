"use client";

import ConsultantCard from "./ConsultantCard";
import { consultants } from "@/data/consultants";
import { getConsultants } from "@/lib/consultantService";
import { useEffect, useState } from "react";
import { countries } from "@/data/countries";
import type { Consultant } from "@/types/consultant";
import { supabase } from "@/lib/supabase";

const countryNames = countries.map((c) =>
  c.name.toLowerCase()
);

const stopWords = [
  "study",
  "in",
  "from",
  "to",
  "for",
  "the",
  "a",
  "an",
  "of",
  "consultant",
  "consultants",
];

export default function ConsultantSearch() {
  const [keyword, setKeyword] = useState("");
  const [homeCountry, setHomeCountry] = useState("");
  const [destinationCountry, setDestinationCountry] =
    useState("");

  const [allConsultants, setAllConsultants] =
    useState<Consultant[]>(consultants);

  const [results, setResults] =
    useState<Consultant[]>(consultants);

  useEffect(() => {
    async function loadConsultants() {
      try {
        const dbConsultants = await getConsultants();

let approvedClaimedConsultantIds: string[] = [];

try {
  const { data: approvedClaims, error: claimsError } =
    await supabase
      .from("consultant_claims")
      .select("consultant_id")
      .eq("status", "approved");

  if (claimsError) {
    console.error(
      "Load approved consultant claims error:",
      claimsError
    );
  } else {
    approvedClaimedConsultantIds =
      (approvedClaims ?? []).map(
        (claim) => claim.consultant_id
      );
  }
} catch (error) {
  console.error(
    "Load approved consultant claims error:",
    error
  );
}

const formattedConsultants: Consultant[] =
          dbConsultants.map((c: any) => ({
            id: c.id,
            slug: c.slug,
            name: c.name,

            logo: c.logo,
            banner: c.banner,

            verified: c.verified,

            rating: c.rating,
            reviews: c.reviews,

            city: c.city,
            country: c.country,
            homeCountry: c.home_country,

            destinationCountries:
              c.destination_countries ?? [],

            services:
              c.services ?? [],

            partnerUniversities:
              c.partner_universities ?? [],

            phone: c.phone,
            email: c.email,
            website: c.website,
            address: c.address,

            contactPerson:
              c.contact_person,

            maps: c.maps,
            facebook: c.facebook,
            instagram: c.instagram,
            linkedin: c.linkedin,
            youtube: c.youtube,

            established: c.established,

            description:
              c.description,

            gallery:
              c.gallery ?? [],

            createdByConsultant:
              c.created_by_consultant ?? true,

            isPro:
              c.is_pro ?? false,

            claimed:
              c.claimed ?? false,

            ownerId:
  c.owner_id ?? null,
          }));

        /*
         * Supabase profiles take priority.
         *
         * If a consultant exists in Supabase with the
         * same slug as a local consultant, we keep only
         * the Supabase version.
         */

        const dbSlugs = new Set(
          formattedConsultants.map(
            (consultant) => consultant.slug
          )
        );

        const localConsultantsWithoutDuplicates =
  consultants.filter(
    (consultant) =>
      !dbSlugs.has(consultant.slug) &&
      !approvedClaimedConsultantIds.includes(
        consultant.id
      )
  );

        const mergedConsultants = [
          ...localConsultantsWithoutDuplicates,
          ...formattedConsultants,
        ];

        setAllConsultants(
          mergedConsultants
        );
      } catch (error) {
        console.error(
          "Load consultants error:",
          error
        );

        /*
         * If Supabase fails, keep showing the
         * original local consultant profiles.
         */
        setAllConsultants(consultants);
      }
    }

    loadConsultants();
  }, []);

  useEffect(() => {
    const text = keyword.toLowerCase();

    // Detect countries mentioned in the search
    const detectedCountries = countries.filter(
      (country) =>
        text.includes(
          country.name.toLowerCase()
        )
    );

    let detectedHome = "";
    let detectedDestination = "";

    if (detectedCountries.length >= 2) {
      detectedDestination =
        detectedCountries[0].name;

      detectedHome =
        detectedCountries[1].name;
    } else if (
      detectedCountries.length === 1
    ) {
      detectedDestination =
        detectedCountries[0].name;
    }

    const words = text
      .split(/\s+/)
      .filter(
        (word) =>
          word &&
          !stopWords.includes(word) &&
          !countryNames.includes(word)
      );

    const filtered =
      allConsultants.filter(
        (consultant) => {
          const searchableText = [
            consultant.name,
            consultant.description,
            consultant.city,
            consultant.country,
            consultant.homeCountry,
            ...consultant.destinationCountries,
            ...consultant.services,
          ]
            .join(" ")
            .toLowerCase();

          const matchesKeyword =
            words.length === 0 ||
            words.every((word) =>
              searchableText.includes(word)
            );

          const matchesHome =
            homeCountry !== ""
              ? consultant.homeCountry ===
                homeCountry
              : detectedHome === ""
              ? true
              : consultant.homeCountry ===
                detectedHome;

          const matchesDestination =
            destinationCountry !== ""
              ? consultant.destinationCountries.includes(
                  destinationCountry
                )
              : detectedDestination === ""
              ? true
              : consultant.destinationCountries.includes(
                  detectedDestination
                );

          return (
            matchesKeyword &&
            matchesHome &&
            matchesDestination
          );
        }
      );

    const sortedResults = [...filtered].sort(
  (a, b) => Number(b.isPro) - Number(a.isPro)
);

setResults(sortedResults);
  }, [
    keyword,
    homeCountry,
    destinationCountry,
    allConsultants,
  ]);

  return (
    <div className="bg-white rounded-[32px] shadow-2xl p-10 border border-slate-200">

      <div className="flex flex-col xl:flex-row gap-8">

        <div className="mb-8">

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Search by keywords
          </label>

          <input
            type="text"
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            placeholder="Ex: Study in USA from India"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Home Country
            </label>

            <select
              value={homeCountry}
              onChange={(e) =>
                setHomeCountry(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700"
            >

              <option value="">
                Select your country
              </option>

              {[...countries]
                .sort((a, b) =>
                  a.name.localeCompare(
                    b.name
                  )
                )
                .map((country) => (
                  <option
                    key={country.slug}
                    value={country.name}
                  >
                    {country.name}
                  </option>
                ))}

            </select>

          </div>

          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Destination Country
            </label>

            <select
              value={destinationCountry}
              onChange={(e) =>
                setDestinationCountry(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700"
            >

              <option value="">
                Select destination
              </option>

              {[...countries]
                .filter(
                  (country) =>
                    country.status ===
                    "available"
                )
                .sort((a, b) =>
                  a.name.localeCompare(
                    b.name
                  )
                )
                .map((country) => (
                  <option
                    key={country.slug}
                    value={country.name}
                  >
                    {country.name}
                  </option>
                ))}

            </select>

          </div>

          <div className="flex items-end">

            <button
              className="w-full rounded-xl bg-blue-600 text-white font-semibold py-3 opacity-70 cursor-default"
            >
              🔍 Find consultants
            </button>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <div className="text-center">

          <p className="text-3xl font-bold text-blue-600">
            {allConsultants.length}
          </p>

          <p className="text-slate-600">
            Consultants
          </p>

        </div>

        <div className="text-center">

          <p className="text-3xl font-bold text-blue-600">

            {
              new Set(
                allConsultants.flatMap(
                  (c) =>
                    c.destinationCountries
                )
              ).size
            }

          </p>

          <p className="text-slate-600">
            Destinations
          </p>

        </div>

        <div className="text-center">

          <p className="text-3xl font-bold text-blue-600">
            Verified
          </p>

          <p className="text-slate-600">
            Profiles
          </p>

        </div>

        <div className="text-center">

          <p className="text-3xl font-bold text-blue-600">
            Free
          </p>

          <p className="text-slate-600">
            Student Search
          </p>

        </div>

      </div>

      <div className="mt-10">

        <p className="mb-6 text-slate-600">
          Showing{" "}
          <strong>
            {results.length}
          </strong>{" "}
          consultant
          {results.length !== 1
            ? "s"
            : ""}
        </p>

        {results.length === 0 ? (

          <div className="text-center text-slate-500">
            No consultants found.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {results.map(
              (consultant) => (

                <ConsultantCard
                  key={consultant.id}
                  consultant={
                    consultant
                  }
                />

              )
            )}

          </div>

        )}

      </div>

    </div>
  );
}