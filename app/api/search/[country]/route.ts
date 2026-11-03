import { countryKeys, getCountrySearchProgramsByKey } from "@/lib/countrySearch";
import type { CountryKey } from "@/data/universities";

// Built once at deploy time and served from the CDN.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return countryKeys.map((country) => ({ country }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ country: string }> }
) {
  const { country } = await params;
  if (!countryKeys.includes(country as CountryKey)) {
    return new Response("Not found", { status: 404 });
  }
  return Response.json({ programs: getCountrySearchProgramsByKey(country as CountryKey) });
}
