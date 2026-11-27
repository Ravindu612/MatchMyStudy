import Link from "next/link";
import type { ReactNode } from "react";

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function safeHref(raw: string): string | null {
  if (
    raw.startsWith("/") &&
    !raw.startsWith("//") &&
    !raw.startsWith("/\\") &&
    !raw.toLowerCase().startsWith("/admin")
  ) {
    return raw;
  }

  try {
    const url = new URL(raw);

    if (url.protocol !== "https:") {
      return null;
    }

    if (url.hostname !== "www.matchmystudy.com" && url.hostname !== "matchmystudy.com") {
      return null;
    }

    const path = `${url.pathname}${url.search}`;

    if (!path.startsWith("/") || path.toLowerCase().startsWith("/admin")) {
      return null;
    }

    return path;
  } catch {
    return null;
  }
}

export default function MessageText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(MARKDOWN_LINK)) {
    const index = match.index ?? 0;

    if (index > last) {
      nodes.push(text.slice(last, index));
    }

    const label = match[1] ?? "";
    const href = safeHref(match[2] ?? "");

    if (href) {
      nodes.push(
        <Link key={`${index}-${href}`} href={href} className="font-semibold text-blue-700 underline">
          {label}
        </Link>
      );
    } else {
      nodes.push(label);
    }

    last = index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return <p className="whitespace-pre-wrap break-words">{nodes}</p>;
}
