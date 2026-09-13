import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/salon";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/tarifs", priority: 0.8 },
    { path: "/salon", priority: 0.8 },
    { path: "/horaires", priority: 0.7 },
    { path: "/reservation", priority: 0.9 },
    { path: "/mentions-legales", priority: 0.1 },
    { path: "/politique-de-confidentialite", priority: 0.1 },
    { path: "/cgv", priority: 0.1 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
