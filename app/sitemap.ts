import type { MetadataRoute } from "next";
import { nav } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kundanojha.dev";
  return nav.map((item) => ({
    url: `${base}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
