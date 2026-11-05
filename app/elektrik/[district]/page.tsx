import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ElektrikContent from "../ElektrikContent";

const districts = [
  { slug: "almalinskiy-rayon", name: "Алмалинском" },
  { slug: "medeuskiy-rayon", name: "Медеуском" },
  { slug: "bostandykskiy-rayon", name: "Бостандыкском" },
  { slug: "auezovskiy-rayon", name: "Ауэзовском" },
  { slug: "turksibskiy-rayon", name: "Турксибском" },
  { slug: "nauryzbayskiy-rayon", name: "Наурызбайском" },
  { slug: "alatauskiy-rayon", name: "Алатауском" },
  { slug: "zhetysuskiy-rayon", name: "Жетысуском" },
];

type PageProps = {
  params: Promise<{ district: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return districts.map(({ slug }) => ({
    district: slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { district: slug } = await params;
  const district = districts.find((item) => item.slug === slug);

  if (!district) notFound();

  return {
    title: `Электрик в ${district.name} районе Алматы | Home Services`,
    description:
      `Вызов электрика в ${district.name} районе Алматы. ` +
      "Ремонт проводки, замена розеток и выключателей, " +
      "установка светильников и автоматов. Стоимость согласуем до начала работ.",
    alternates: {
      canonical: `https://home-services.kz/elektrik/${district.slug}`,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { district: slug } = await params;
  const district = districts.find((item) => item.slug === slug);

  if (!district) notFound();

  return <ElektrikContent district={district.name} />;
}