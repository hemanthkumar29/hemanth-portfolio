import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hemanth.dev";

  // Main pages/sections
  const routes = [
    "",
    "#about",
    "#skills",
    "#projects",
    "#experience",
    "#certifications",
    "#contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
