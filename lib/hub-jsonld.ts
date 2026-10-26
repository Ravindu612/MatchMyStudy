import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo-meta";

type HubItem = { name: string; url: string };

/*
 * Structured data for hub and info pages: a WebPage (or
 * CollectionPage / AboutPage / ContactPage) that belongs to the site,
 * optionally with the list of things the page links to.
 */
export function hubPageJsonLd({
  type = "WebPage",
  name,
  path,
  description,
  items,
}: {
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  name: string;
  path: string;
  description?: string;
  items?: HubItem[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url: absoluteUrl(path),
    ...(description ? { description } : {}),
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    ...(items && items.length > 0
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: item.url.startsWith("http") ? item.url : absoluteUrl(item.url),
              name: item.name,
            })),
          },
        }
      : {}),
  };
}
