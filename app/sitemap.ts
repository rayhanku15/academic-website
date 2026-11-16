import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rayhanbio.me";
  return ["", "/research", "/publications", "/teaching", "/cv", "/contact"].map((path) => ({
    url: base + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
