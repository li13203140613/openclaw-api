import type { MetadataRoute } from "next";
import { models } from "@/data/models";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  models.forEach((model) => {
    routes.push({
      url: `${siteUrl}/models/${model.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  return routes;
}
