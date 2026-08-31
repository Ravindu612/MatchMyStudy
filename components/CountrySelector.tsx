"use client";

import { countries } from "@/data/countries";

type CountrySelectorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  availableOnly?: boolean;
};

export default function CountrySelector({
  value,
  onChange,
  placeholder,
  availableOnly = false,
}: CountrySelectorProps) {

  const countryList = [...countries]
    .filter((country) =>
      availableOnly ? country.status === "available" : true
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
  <div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
      list={availableOnly ? "availableCountries" : "allCountries"}
    />

    <datalist id={availableOnly ? "availableCountries" : "allCountries"}>
      {countryList.map((country) => (
        <option
          key={country.slug}
          value={country.name}
        />
      ))}
    </datalist>
  </div>
);
}