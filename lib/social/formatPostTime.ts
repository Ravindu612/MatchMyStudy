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
