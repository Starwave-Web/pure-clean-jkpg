import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/sv", "/en/quote", "/sv/quote", "/en/thank-you", "/sv/thank-you", "/en/booking", "/sv/booking"],
    },
    sitemap: ["https://purecleanjkpg.se/sitemap.xml"],
  };
}