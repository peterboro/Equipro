import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const baseUrl = "https://equiprogroup.com";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/hvac-systems", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/hvac-systems-kenya", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/industrial-refrigeration", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ammonia-co2-refrigeration-installation-kenya", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/freon-refrigeration-systems-kenya", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/cold-room-installation-kenya", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/facility-maintenance", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services/electrical-services", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services/plc-automation", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services/remote-monitoring", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services/packaging", priority: 0.7, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/refrigeration-technologies", priority: 0.85, changeFrequency: "monthly" },
  { path: "/products/freon-gases", priority: 0.85, changeFrequency: "monthly" },
  { path: "/products/cold-room-equipment", priority: 0.85, changeFrequency: "monthly" },
  { path: "/products/stainless-steel-water-tanks", priority: 0.85, changeFrequency: "monthly" },
  { path: "/products/stainless-steel-water-tanks-kenya", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/compressors", priority: 0.75, changeFrequency: "monthly" },
  { path: "/products/condensers", priority: 0.75, changeFrequency: "monthly" },
  { path: "/products/evaporators", priority: 0.75, changeFrequency: "monthly" },
  { path: "/products/packaging-equipment", priority: 0.7, changeFrequency: "monthly" },
  { path: "/clients", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog-news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog-news/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
