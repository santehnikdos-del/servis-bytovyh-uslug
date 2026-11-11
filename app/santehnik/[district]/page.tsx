import { withSeo } from "../../../lib/site-texts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SantehnikContent from "../SantehnikContent";

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

async function baseMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { district: slug } = await params;
  const district = districts.find((item) => item.slug === slug);

  if (!district) notFound();

  return {
        title: `Сантехник в ${district.name} районе Алматы — вызов на дом`,
    description:
      `Вызов сантехника в ${district.name} районе Алматы. ` +
      "Ремонт и установка сантехники, устранение протечек, " +
      "замена труб и прочистка канализации. Стоимость согласуем до начала работ.",
    alternates: {
      canonical: `https://www.home-services.kz/santehnik/${district.slug}`,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { district: slug } = await params;
  const district = districts.find((item) => item.slug === slug);

  if (!district) notFound();

  return <SantehnikContent district={district.name} />;
}

// Заголовок и описание для поиска можно изменить в админке (вкладка «SEO»)
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { district } = await props.params;
  return withSeo(`/santehnik/${district}`, await baseMetadata(props));
}
