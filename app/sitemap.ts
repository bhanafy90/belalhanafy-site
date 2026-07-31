import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/research/", priority: 0.9 },
  { path: "/publications/", priority: 0.9 },
  { path: "/tools/", priority: 0.9 },
  { path: "/tools/prelive/", priority: 0.8 },
  { path: "/cover-art/", priority: 0.7 },
  { path: "/about/", priority: 0.7 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
