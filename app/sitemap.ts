import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.home-services.kz";
  const districts = [
  "almalinskiy-rayon",
  "medeuskiy-rayon",
  "bostandykskiy-rayon",
  "auezovskiy-rayon",
  "turksibskiy-rayon",
  "nauryzbayskiy-rayon",
  "alatauskiy-rayon",
  "zhetysuskiy-rayon",
];

const districtPages: MetadataRoute.Sitemap = [
  "santehnik",
  "elektrik",
].flatMap((service) =>
  districts.map((district) => ({
    url: `${baseUrl}/${service}/${district}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))
);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/santehnik`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/uslugi-santehnika`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prochistka-kanalizacii`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ustanovka-unitaza`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-smesitelya`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-rakoviny`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/price`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nashi-raboty`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/otzyvy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kontakty`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
        {
      url: `${baseUrl}/elektrik`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/akkumulyatory-s-dostavkoy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
        {
      url: `${baseUrl}/ustanovka-vanny`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-dushevoy-kabiny`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-boylera`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zamena-trub`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...districtPages,
  ];
}