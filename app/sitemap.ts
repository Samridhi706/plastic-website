import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://plastic-website.vercel.app"; // 🔴 CHANGE THIS

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
    },

    // PRODUCT PAGES
    {
      url: `${baseUrl}/products/hdpe-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/pp-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/cp-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/plastic-waste-scrap`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/abs-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/ldpe-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/pp-black-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/milky-granules`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/natural-granules`,
      lastModified: new Date(),
    },
  ];
}
