import type { MetadataRoute } from "next";

const locales = ["sv", "en"];
const paths = ["", "/booking", "/quote", "/thank-you"];
const baseUrl = "https://www.purecleanjkpg.se";

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => {
    const url = `${baseUrl}/sv${path}`; // main canonical version
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`])
    );

    return {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.9,
      alternates: {
        languages
      }
    };
  });
}