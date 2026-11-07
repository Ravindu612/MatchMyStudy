import type { SocialAccountType } from "@/types/social";

export function formatPostTime(iso: string, now = Date.now()): string {
  const then = Date.parse(iso);

  if (Number.isNaN(then)) {
    return "";
  }

  const seconds = Math.round((now - then) / 1000);

  if (seconds < 45) {
    return "Just now";
  }

  const minutes = Math.round(seconds / 60);

  if (minutes < 60) {
    return `${Math.max(1, minutes)}m`;
  }

  const hours = Math.round(minutes / 60);

  if (hours < 24) {
    return `${Math.max(1, hours)}h`;
  }

  const days = Math.round(hours / 24);

  if (days < 7) {
    return `${Math.max(1, days)}d`;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(then));
}

export function formatJoined(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function displayInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    return parts[0]!.slice(0, 2).toUpperCase();
  }

  return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
}

const ACCOUNT_LABELS: Record<SocialAccountType, string> = {
  student: "Student",
  current_student: "Current Student",
  consultant: "Consultant",
  education_provider: "Education Provider",
  other: "Other",
};

const ACCOUNT_BADGE: Record<SocialAccountType, { box: string; text: string }> = {
  student: { box: "bg-emerald-100", text: "text-emerald-800" },
  current_student: { box: "bg-amber-100", text: "text-amber-800" },
  consultant: { box: "bg-blue-100", text: "text-blue-800" },
  education_provider: { box: "bg-violet-100", text: "text-violet-800" },
  other: { box: "bg-slate-100", text: "text-slate-700" },
};

const ACCOUNT_AVATAR: Record<SocialAccountType, string> = {
  student: "bg-sky-600",
  current_student: "bg-emerald-600",
  consultant: "bg-blue-700",
  education_provider: "bg-violet-600",
  other: "bg-slate-500",
};

export function isAccountType(value: string): value is SocialAccountType {
  return value in ACCOUNT_LABELS;
}

export function accountTypeLabel(value: string): string {
  return isAccountType(value) ? ACCOUNT_LABELS[value] : "Member";
}

export function accountTypeBadgeClass(value: string): { box: string; text: string } {
  return isAccountType(value) ? ACCOUNT_BADGE[value] : ACCOUNT_BADGE.other;
}

export function accountTypeAvatarClass(value: string): string {
  return isAccountType(value) ? ACCOUNT_AVATAR[value] : ACCOUNT_AVATAR.other;
}

export function safeHttpsUrl(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}
