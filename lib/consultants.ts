import { Consultant } from "@/types/consultant";

export function saveConsultant(consultant: Consultant) {
  console.log("saveConsultant called");

  const existing: Consultant[] = JSON.parse(
    localStorage.getItem("consultants") || "[]"
  );

  existing.push(consultant);

  localStorage.setItem(
    "consultants",
    JSON.stringify(existing)
  );

  console.log(localStorage.getItem("consultants"));
}