import type { MetadataRoute } from "next";
import { servicePages } from "../lib/service-pages";

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

  /* ОСНОВНЫЕ СТРАНИЦЫ */
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/santehnik`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/uslugi-santehnika`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/elektrik`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prochistka-kanalizacii`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plotnik`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-unitaza`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-smesitelya`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-rakoviny`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-vanny`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-dushevoy-kabiny`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ustanovka-boylera`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zamena-trub`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/price`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nashi-raboty`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/otzyvy`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/o-nas`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kontakty`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/akkumulyatory-s-dostavkoy`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  /* НОВЫЕ СТРАНИЦЫ УСЛУГ */
  const newServicePages: MetadataRoute.Sitemap = servicePages.map(
    (page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  /* РАЙОНЫ САНТЕХНИКА */
  const plumbingDistrictPages: MetadataRoute.Sitemap =
    districts.map((district) => ({
      url: `${baseUrl}/santehnik/${district}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  /* РАЙОНЫ ЭЛЕКТРИКА */
  const electricDistrictPages: MetadataRoute.Sitemap =
    districts.map((district) => ({
      url: `${baseUrl}/elektrik/${district}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  /* ОБЪЕДИНЯЕМ И УБИРАЕМ ДУБЛИ */
  const allPages = [
    ...mainPages,
    ...newServicePages,
    ...plumbingDistrictPages,
    ...electricDistrictPages,
  ];

  return Array.from(
    new Map(allPages.map((page) => [page.url, page])).values()
  );
}