import { displayInitials } from "@/lib/social/formatPostTime";

const COLORS = [
  "bg-blue-600",
  "bg-pink-500",
  "bg-violet-600",
  "bg-emerald-600",
  "bg-amber-500",
  "bg-indigo-600",
];

export function avatarColorClass(seed: string): string {
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash + seed.charCodeAt(index) * (index + 1)) % COLORS.length;
  }

  return COLORS[hash] ?? "bg-blue-600";
}

export default function PersonAvatar({
  name,
  imageUrl,
  className = "h-10 w-10 text-xs",
}: {
  name: string;
  imageUrl?: string | null;
  className?: string;
}) {
  if (imageUrl) {
    return (
      // Profile photos are arbitrary https URLs, which next/image cannot optimize.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={imageUrl} alt="" className={`${className} rounded-full object-cover`} />
    );
  }

  return (
    <span
      className={`${className} ${avatarColorClass(name)} inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white`}
      aria-hidden="true"
    >
      {displayInitials(name)}
    </span>
  );
}
