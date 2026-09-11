import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/salon";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/tarifs", priority: 0.8 },
    { path: "/salon", priority: 0.8 },
    { path: "/horaires", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
