import type { Metadata } from "next";
import { withSeo } from "../../lib/site-texts";
import SantehnikContent from "./SantehnikContent";

const pageMetadata: Metadata = {
  title: "Сантехник в Алматы — вызов на дом за 30–45 минут",
  description:
    "Вызов сантехника на дом в Алматы: ремонт и установка, устранение протечек, замена труб. Выезд 30–45 минут, гарантия до 3 лет.",
  alternates: {
    canonical: "https://www.home-services.kz/santehnik",
  },
};

export default function SantehnikPage() {
  return <SantehnikContent />;
}

// Заголовок и описание для поиска можно изменить в админке (вкладка «SEO»)
export async function generateMetadata(): Promise<Metadata> {
  return withSeo("/santehnik", pageMetadata);
}
