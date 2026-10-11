import type { SocialAccountType } from "@/types/social";

export const ACCOUNT_TYPE_OPTIONS: {
  value: SocialAccountType;
  label: string;
  badgeClassName: string;
}[] = [
  {
    value: "student",
    label: "Student",
    badgeClassName: "bg-emerald-100 text-emerald-800",
  },
  {
    value: "current_student",
    label: "Current Student",
    badgeClassName: "bg-amber-100 text-amber-800",
  },
  {
    value: "consultant",
    label: "Consultant",
    badgeClassName: "bg-blue-100 text-blue-800",
  },
  {
    value: "education_provider",
    label: "Education Provider",
    badgeClassName: "bg-violet-100 text-violet-800",
  },
  {
    value: "other",
    label: "Other",
    badgeClassName: "bg-slate-100 text-slate-700",
  },
];

export function accountTypeLabel(value: string): string {
  return (
    ACCOUNT_TYPE_OPTIONS.find((option) => option.value === value)?.label ??
    "Member"
  );
}

export function accountTypeBadgeClass(value: string): string {
  return (
    ACCOUNT_TYPE_OPTIONS.find((option) => option.value === value)
      ?.badgeClassName ?? "bg-slate-100 text-slate-700"
  );
}
