import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/login",
        "/consultants/apply",
        "/consultants/edit/",
        "/consultants/manage-pro/",
        "/consultants/upgrade/",
        "/consultants/success",
      ],
    },
    sitemap: "https://www.matchmystudy.com/sitemap.xml",
  };
}