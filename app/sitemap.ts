import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { writingPosts } from "@/content/writing";

const routes = [
  { path: "/", priority: 1 },
  { path: "/research/", priority: 0.9 },
  { path: "/writing/", priority: 0.8 },
  { path: "/publications/", priority: 0.9 },
  { path: "/tools/", priority: 0.9 },
  { path: "/tools/prelive/", priority: 0.8 },
  { path: "/about/", priority: 0.7 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticEntries = routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
  const postEntries = writingPosts.map((post) => ({
    url: `${site.url}/writing/${post.id}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...postEntries];
}
