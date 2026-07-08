import { countries } from "@/data/countries";
import { countryTraits } from "@/data/countryTraits";

export function matchCountries(
  answers: Record<string, string>
) {
  return countries
    .filter((country) => country.status === "available")
    .map((country) => {
      const traits = countryTraits[country.slug];

      if (!traits) return null;

      let score = 0;

      if (
        answers.tuition &&
        answers.tuition !== "Doesn't matter" &&
        answers.tuition.toLowerCase() === traits.tuition
      )
        score += 15;

      if (
        answers.language &&
        answers.language.toLowerCase() === traits.language
      )
        score += 15;

      if (
        answers.climate &&
        answers.climate.toLowerCase() === traits.climate
      )
        score += 10;

      if (
        answers.jobs &&
        answers.jobs !== "Not Important" &&
        answers.jobs.toLowerCase() === traits.jobs
      )
        score += 15;

      if (
        answers.cost &&
        answers.cost.toLowerCase() === traits.cost
      )
        score += 10;

      if (
        answers.pr &&
        answers.pr !== "Not Important" &&
        answers.pr.toLowerCase() === traits.pr
      )
        score += 15;

      if (
        answers.field &&
        traits.fields.includes(answers.field)
      )
        score += 20;

      return {
        ...country,
        score,
      };
    })
    .filter(Boolean)
    .sort((a: any, b: any) => b.score - a.score);
}