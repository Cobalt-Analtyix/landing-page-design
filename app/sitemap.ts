import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { getJobs } from "@/lib/careers";
import { getAllInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/careers`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const careerRoutes: MetadataRoute.Sitemap = (await getJobs()).map((job) => ({
    url: `${SITE_URL}/careers/${job.slug}`,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  const insightRoutes: MetadataRoute.Sitemap = getAllInsights().map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes, ...careerRoutes];
}
