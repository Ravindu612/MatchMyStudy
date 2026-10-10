import { countries } from "@/data/countries";

export function homeCountryNames(current?: string | null): string[] {
  const names = new Set(countries.map((country) => country.name));

  if (current && current.trim()) {
    names.add(current.trim());
  }

  return [...names].sort((left, right) => left.localeCompare(right));
}

export function targetCountryNames(current: readonly string[] = []): string[] {
  const names = new Set(
    countries
      .filter((country) => country.status === "available")
      .map((country) => country.name)
  );

  for (const name of current) {
    if (name.trim()) {
      names.add(name.trim());
    }
  }

  return [...names].sort((left, right) => left.localeCompare(right));
}

export function countryPageHref(name: string): string | null {
  const match = countries.find(
    (country) => country.name === name && country.status === "available"
  );

  return match?.href ?? null;
}
