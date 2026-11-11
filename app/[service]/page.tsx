import { loadSiteContent, withSeo } from "../../lib/site-texts";
import T from "../T";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";
import {
  getServicePage,
  servicePages,
} from "../../lib/service-pages";

type PageProps = {
  params: Promise<{ service: string }>;
};

const baseUrl = "https://www.home-services.kz";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({
    service: page.slug,
  }));
}

async function baseMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service } = await params;
  const page = getServicePage(service);

  if (!page) notFound();

  const title = `${page.name} в Алматы | Сервис бытовых услуг`;

  return {
    title,
    description: page.description,
    alternates: {
      canonical: `${baseUrl}/${page.slug}`,
    },
    openGraph: {
      title,
      description: page.description,
      url: `${baseUrl}/${page.slug}`,
      type: "website",
      locale: "ru_KZ",
      siteName: "Сервис бытовых услуг",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const SC = await loadSiteContent();

  const { service } = await params;
  const page = getServicePage(service);

  if (!page) notFound();

  const isElectric = page.group === "electric";
  const isDrain = page.group === "drain";

  const phone = isElectric ? `${SC.contacts.electric.digits}` : `${SC.contacts.main.digits}`;

  const displayPhone = isElectric
    ? `${SC.contacts.electric.display}`
    : `${SC.contacts.main.display}`;

  const parentHref = isElectric
    ? "/elektrik"
    : isDrain
      ? "/prochistka-kanalizacii"
      : "/uslugi-santehnika";

  const parentTitle = isElectric
    ? "Услуги электрика"
    : isDrain
      ? "Устранение засоров"
      : "Услуги сантехника";

  const whatsappText = encodeURIComponent(
    `Здравствуйте! Интересует: ${page.name.toLowerCase()} в Алматы.`
  );

  const relatedPages = servicePages
    .filter(
      (item) =>
        item.group === page.group &&
        item.slug !== page.slug
    )
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header
        phone={phone}
        displayPhone={displayPhone}
      />

      <main>
        {/* ХЛЕБНЫЕ КРОШКИ */}
        <nav
          aria-label="Хлебные крошки"
          className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-slate-500"
        >
          <Link href="/" className="hover:text-[#0092B8]">
            <T p="service" o={1}>Главная</T>
          </Link>

          <span aria-hidden="true">→</span>

          <Link
            href={parentHref}
            className="hover:text-[#0092B8]"
          >
            {parentTitle}
          </Link>

          <span aria-hidden="true">→</span>

          <span aria-current="page" className="text-[#0092B8]">
            {page.name}
          </span>
        </nav>

        {/* СТРАНИЦА-ВИЗИТКА */}
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-3 md:pb-16 md:pt-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,80,120,0.07)]">
            <div className="bg-[#0092B8] px-6 py-9 text-white md:px-10 md:py-12">
              <p className="text-sm font-medium uppercase tracking-wide text-[#FDC700]">
                <T p="service" o={2}>Выезд мастера по Алматы и пригороду</T>
              </p>

              <h1 className="mt-4 break-words text-3xl font-bold leading-tight md:text-5xl">
                {page.name} <T p="service" o={3}>в Алматы</T>
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
                {page.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FDC700] px-7 py-3 font-semibold text-slate-900 transition hover:brightness-105"
                >
                  <T p="service" o={4}>Позвонить</T>
                </a>

                <a
                  href={`https://wa.me/${phone}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-[#0092B8] transition hover:bg-slate-100"
                >
                  <T p="service" o={5}>Написать в WhatsApp</T>
                </a>
              </div>
            </div>

            <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.5fr_1fr] md:px-10 md:py-10">
              <div>
                <h2 className="text-2xl font-semibold text-[#0092B8]">
                  <T p="service" o={6}>Как заказать услугу</T>
                </h2>

                <ol className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                  <li>
                    <span className="font-semibold text-[#0092B8]">
                      <T p="service" o={7}>1. Расскажите о задаче.</T>
                    </span>{" "}
                    <T p="service" o={8}>Позвоните или отправьте описание и фотографии
                    в WhatsApp.</T>
                  </li>

                  <li>
                    <span className="font-semibold text-[#0092B8]">
                      <T p="service" o={9}>2. Согласуйте детали.</T>
                    </span>{" "}
                    <T p="service" o={10}>Обсудим объём работ, материалы, стоимость
                    и удобное время выезда.</T>
                  </li>

                  <li>
                    <span className="font-semibold text-[#0092B8]">
                      <T p="service" o={11}>3. Встретьте мастера.</T>
                    </span>{" "}
                    <T p="service" o={12}>Перед началом подтвердим перечень и стоимость
                    работ, после выполнения проверим результат.</T>
                  </li>
                </ol>
              </div>

              <aside className="rounded-2xl bg-[#F3F7FA] p-6">
                <h2 className="text-xl font-semibold text-[#0092B8]">
                  <T p="service" o={13}>Стоимость и выезд</T>
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  <T p="service" o={14}>Стоимость зависит от объёма задачи, состояния
                  оборудования и необходимых материалов.
                  Уточните детали у мастера перед заказом.</T>
                </p>

                <a
                  href={`tel:+${phone}`}
                  className="mt-5 inline-block text-xl font-bold text-[#0092B8]"
                >
                  {displayPhone}
                </a>

                <p className="mt-2 text-sm text-slate-500">
                  <T p="service" o={15}>Весь Алматы и пригород</T>
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ДРУГИЕ УСЛУГИ */}
        <section className="mx-auto max-w-6xl px-5 pb-12">
          <h2 className="text-2xl font-semibold text-[#0092B8]">
            <T p="service" o={16}>Другие услуги</T>
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 text-[#0092B8] shadow-sm transition hover:bg-[#FDC700]/10"
              >
                <span>{item.name}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer
        phone={phone}
        displayPhone={displayPhone}
      />
    </div>
  );
}

// Заголовок и описание для поиска можно изменить в админке (вкладка «SEO»)
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { service } = await props.params;
  return withSeo(`/${service}`, await baseMetadata(props));
}
