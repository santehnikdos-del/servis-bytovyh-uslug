import type { Metadata } from "next";
import { imgSrc, loadSiteContent, withSeo } from "../../lib/site-texts";
import T from "../T";
import Header from "../Header";
import Footer from "../Footer";
import { createClient } from "@supabase/supabase-js";

const pageMetadata: Metadata = {
  title: "Цены на услуги сантехника в Алматы | Сервис бытовых услуг",
  description:
    "Цены на сантехнические работы в Алматы: монтаж труб, кухня, ванная, туалет, прочистка канализации и установка сантехники.",
  alternates: {
    canonical: "https://www.home-services.kz/price",
  },
};

const sections = [
  {
    title: "Монтаж труб",
    subtitle: "Водоснабжение, канализация и отопление",
    items: [
      [
        "zamenaVodoprovodnyhStoyakov",
        "Замена водопроводных стояков",
        "35 000 – 40 000",
      ],
      [
        "zamenaKanalizacionnogoStoyaka",
        "Замена канализационного стояка, в зависимости от этажности",
        "40 000 – 50 000",
      ],
      [
        "troynik100",
        "Замена вертикального канализационного тройника Ø100 мм в плите перекрытия",
        "100 000 – 130 000",
      ],
      [
        "troynik70",
        "Замена вертикального канализационного тройника Ø70 мм в плите перекрытия",
        "75 000 – 95 000",
      ],
      [
        "zamenaGrebенki",
        "Замена водопроводной разводки (гребенка), в зависимости от планировки квартиры",
        "55 000 – 85 000",
      ],
      [
        "zamenaLezhaka",
        "Замена канализационной разводки (лежак)",
        "30 000 – 55 000",
      ],
      [
        "zamenaOtopitelnogoStoyaka",
        "Замена отопительного стояка",
        "20 000 – 30 000",
      ],
      [
        "zamenaRadiatora",
        "Замена радиатора отопления (батареи), в зависимости от количества",
        "20 000 – 45 000",
      ],
      [
        "montazhOtopleniya",
        "Монтаж трубопроводов системы отопления",
        "10 000",
      ],
      ["montazhSantehniki", "Монтаж сантехники", "10 000"],
      [
        "montazhVodoprovoda",
        "Монтаж водопроводных труб",
        "10 000 – 15 000 / выход",
      ],
    ],
  },
  {
    title: "Кухня",
    subtitle: "Установка, подключение и ремонт",
    items: [
      [
        "ustanovkaMoyki",
        "Установка мойки на столешницу, смесителя и сифона",
        "15 000 – 20 000",
      ],
      [
        "ustanovkaFiltra",
        "Установка фильтра питьевой воды (Аквафор)",
        "15 000 – 20 000",
      ],
      [
        "ustanovkaMashinyBezVyhodov",
        "Установка и подключение стиральной или посудомоечной машины без готовых выходов воды и канализации",
        "18 000 – 23 000",
      ],
      [
        "podklyuchenieMashiny",
        "Подключение стиральной или посудомоечной машины при готовых выходах",
        "10 000 – 13 000",
      ],
      [
        "zamenaShlangov",
        "Замена гибких шлангов смесителя",
        "10 000 – 13 000",
      ],
      ["zamenaKartridzha", "Замена картриджа смесителя", "10 000"],
      ["zamenaSifonaMoyki", "Замена сифона мойки", "13 000"],
      [
        "perenosVyhodovLodzhiya",
        "Перенос выходов холодной/горячей воды и канализации на лоджию под мойку",
        "40 000 – 60 000",
      ],
      [
        "zamenaDezhurnyhKranovMoyka",
        "Замена дежурных кранов холодной и горячей воды под мойкой",
        "15 000 – 18 000",
      ],
      ["zamenaAvariynyhKranov", "Замена аварийных кранов", "28 000"],
      [
        "ustanovkaSchetchikov",
        "Установка приборов учета холодной и горячей воды",
        "13 000 – 15 000",
      ],
      [
        "perenosBatarei",
        "Перенос батареи отопления из комнаты на балкон",
        "50 000 – 80 000",
      ],
      [
        "probivkaZasora",
        "Пробивка засора канализации",
        "13 000 – 15 000",
      ],
      [
        "prochistkaRothenberger",
        "Прочистка канализации машинкой Rothenberger, трубы Ø50–100 мм",
        "1 500 – 2 000 / м",
      ],
      [
        "ustranenieProtechek",
        "Устранение любых видов протечек",
        "от 13 000",
      ],
      [
        "prochistka150",
        "Прочистка труб диаметром от 150 мм",
        "от 2 500 / м",
      ],
    ],
  },
  {
    title: "Ванная / туалет",
    subtitle: "Установка и ремонт сантехники",
    items: [
      [
        "ustanovkaChugunnoyVanny",
        "Установка чугунной ванны, смесителя и сифона",
        "60 000 – 80 000",
      ],
      [
        "ustanovkaMetallicheskoyVanny",
        "Установка металлической ванны, смесителя и сифона",
        "50 000 – 70 000",
      ],
      [
        "ustanovkaAkrilovoyVanny",
        "Установка акриловой ванны, смесителя и сифона",
        "50 000 – 85 000",
      ],
      [
        "rakovinaPiedestal",
        "Установка раковины на пьедестале",
        "18 000 – 28 000",
      ],
      [
        "rakovinaTumba",
        "Установка раковины на тумбе с зеркалом",
        "25 000 – 33 000",
      ],
      [
        "zamenaZmeevika",
        "Замена змеевика в ванной (полотенцесушителя)",
        "18 000 – 23 000",
      ],
      [
        "zamenaPolotencesushitelya",
        "Замена полотенцесушителя (лесенка)",
        "23 000 – 28 000",
      ],
      ["zamenaUnitaza", "Замена унитаза", "13 000 – 23 000"],
      [
        "zamenaSmesitelyaISifona",
        "Замена смесителя и сифона на раковине",
        "18 000 – 20 000",
      ],
      [
        "stiralnayaBezVyhodov",
        "Установка и подключение стиральной машины без готовых выходов",
        "18 000 – 23 000",
      ],
      [
        "stiralnayaGotovyeVyhody",
        "Подключение стиральной машины при готовых выходах",
        "13 000",
      ],
      [
        "zamenaSmesitelyaRakoviny",
        "Замена смесителя раковины",
        "10 000 – 13 000",
      ],
      [
        "zamenaSmesitelyaVanny",
        "Замена смесителя ванны",
        "10 000 – 13 000",
      ],
      [
        "zamenaShlangovRakoviny",
        "Замена гибких шлангов смесителя раковины",
        "10 000 – 13 000",
      ],
      [
        "zamenaKartridzhaVannaya",
        "Замена картриджа смесителя",
        "10 000",
      ],
      ["zamenaSifonaRakoviny", "Замена сифона раковины", "13 000"],
      [
        "sifonVannyChugun",
        "Замена сифона ванны (выход канализации чугунный)",
        "18 000 – 28 000",
      ],
      [
        "sifonVannyPlastik",
        "Замена сифона ванны (выход канализации пластиковый)",
        "13 000",
      ],
      [
        "pervichnayaUstanovkaSchetchikov",
        "Первичная установка приборов учета холодной и горячей воды",
        "от 23 000",
      ],
      [
        "probivkaZasoraVannaya",
        "Пробивка засора канализации",
        "13 000 – 15 000",
      ],
      [
        "ustanovkaBoylera",
        "Установка и подключение бойлера",
        "18 000 – 33 000",
      ],
      [
        "zamenaAvariynyhKranovVannaya",
        "Замена аварийных кранов",
        "28 000",
      ],
      [
        "zamenaDezhurnyhKranovRakovina",
        "Замена дежурных кранов холодной и горячей воды под раковиной",
        "15 000 – 23 000",
      ],
      [
        "remkomplektBachka",
        "Замена ремкомплекта бачка унитаза",
        "13 000 – 18 000",
      ],
      [
        "boyler200",
        "Установка и подключение бойлера 200 л",
        "60 000 – 95 000",
      ],
    ],
  },
];

type KeyValueRow = {
  key: string;
  value: string;
};

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Не настроены переменные Supabase");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function loadKeyValueTable(
  table: "prices" | "service_names"
) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from(table)
    .select("key,value");

  if (error) {
    throw new Error(error.message);
  }

  const result: Record<string, string> = {};

  for (const row of (data || []) as KeyValueRow[]) {
    result[row.key] = row.value;
  }

  return result;
}

function formatPrice(value: string) {
  if (/^\d+$/.test(value)) {
    return `${Number(value).toLocaleString("ru-RU")} ₸`;
  }

  return value.includes("₸") ? value : `${value} ₸`;
}

export default async function CenyPage() {
  const SC = await loadSiteContent();

  const [prices, names] = await Promise.all([
    loadKeyValueTable("prices"),
    loadKeyValueTable("service_names"),
  ]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header
        phone={`${SC.contacts.main.digits}`}
        displayPhone={`${SC.contacts.main.display}`}
      />

      <style>{`
        @keyframes priceShine {
          from {
            transform: translateX(0) skewX(-25deg);
          }
          to {
            transform: translateX(1800%) skewX(-25deg);
          }
        }

        .price-call-shine {
          position: relative;
          overflow: hidden;
        }

        .price-call-shine::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -25%;
          width: 8%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: priceShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes priceDiscountSwing {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .price-discount {
          transform-origin: 0 0;
          animation: priceDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes priceCheckDraw {
          0%, 15% {
            stroke-dashoffset: 1;
          }
          45%, 85% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 1;
          }
        }

        .price-check {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: priceCheckDraw 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .price-call-shine::after,
          .price-discount,
          .price-check {
            animation: none;
          }
        }
      `}</style>

      {/* БАННЕР */}
      <section className="relative overflow-hidden bg-[#333333] text-white md:h-[490px] md:bg-[#281E12]">
        {/* ФОН — МОБИЛЬНЫЙ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/hero-mark.png')] bg-[length:85%_auto] bg-center bg-no-repeat opacity-10 md:hidden"
        />

        {/* ФОТО — КОМПЬЮТЕР */}
        <div className="absolute inset-y-0 right-0 hidden w-[53%] md:block">
          <img
            src={imgSrc(SC, "/banner-master.jpg")}
            alt="Мастер сервиса бытовых услуг в Алматы"
            className="h-full w-full object-cover object-[60%_center]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-px w-[240px]"
            style={{
              background:
                "linear-gradient(to right, #281E12 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 py-8 md:py-0">
          <div className="w-full md:w-[47%]">
            <nav
              aria-label="Хлебные крошки"
              className="mb-5 flex items-center gap-2 text-sm text-white/70"
            >
              <a
                href="/"
                className="transition hover:text-[#FDC700]"
              >
                <T p="price" o={1}>Главная</T>
              </a>

              <span aria-hidden="true">→</span>

              <span aria-current="page" className="text-white">
                <T p="price" o={2}>Цены</T>
              </span>
            </nav>

            <h1 className="text-center text-3xl font-bold uppercase leading-[1.05] md:text-left md:text-5xl lg:text-[64px]">
              <T p="price" o={3}>Цены на</T>{" "}
              <span className="text-[#FDC700]">
                <T p="price" o={4}>услуги</T>
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-center text-lg leading-7 text-white/85 md:text-left">
              <T p="price" o={5}>Стоимость сантехнических работ в Алматы.
              Согласовываем цену до начала работы —
              вы заранее знаете, за что платите.</T>
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 md:mx-0 md:max-w-none md:flex-row md:flex-wrap md:items-center">
              <a
                href={`tel:+${SC.contacts.main.digits}`}
                className="price-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
              >
                <T p="price" o={6}>Вызвать мастера</T>
              </a>

              <div className="relative shrink-0">
                <a
                  href={`https://wa.me/${SC.contacts.main.digits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100 md:w-auto"
                >
                  <T p="price" o={7}>Написать в WhatsApp</T>
                </a>

                {/* СКИДКА */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 hidden h-0 w-0 md:block"
                >
                  <div className="price-discount absolute left-0 top-0">
                    <img
                      src={imgSrc(SC, "/discount-15.png")}
                      alt=""
                      className="absolute left-0 top-[-47px] w-[180px] max-w-none drop-shadow-lg"
                    />

                    <svg
                      viewBox="0 0 30 20"
                      className="absolute -left-[9px] -top-[10px] z-10 h-5 w-[30px]"
                    >
                      <ellipse
                        cx="15"
                        cy="10"
                        rx="12"
                        ry="7"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="4"
                      />
                      <ellipse
                        cx="15"
                        cy="9"
                        rx="12"
                        ry="7"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mx-auto mt-8 flex w-fit flex-col gap-3 text-base md:mx-0 md:w-auto md:flex-row md:flex-wrap md:gap-x-5">
              {["Цена заранее", "Свои мастера", "Гарантия"].map(
                (text) => (
                  <li
                    key={text}
                    className="flex items-center gap-3"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fill="#0092B8"
                        d="m12 1 3 2.2 3.7-.1 1.1 3.5 3.1 2.1-1.2 3.5
                           1.2 3.5-3.1 2.1-1.1 3.5-3.7-.1L12 23l-3-2.2
                           -3.7.1-1.1-3.5-3.1-2.1L2.3 12 1.1 8.5l3.1-2.1
                           1.1-3.5 3.7.1Z"
                      />

                      <path
                        className="price-check"
                        pathLength="1"
                        d="m7.5 12 3 3 6-6"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{text}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ПРАЙС */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-5 md:px-6">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-[#0092B8]">
                  <T p="price" o={8}>Прайс-лист</T>
                </p>

                <h2 className="mt-2 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
                  {section.title}
                </h2>

                <p className="mt-3 text-slate-600">
                  {section.subtitle}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-4 h-1 w-16 rounded-full bg-[#FDC700]"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {section.items.map(
                  ([key, fallbackName, fallbackPrice]) => {
                    const name = names[key] || fallbackName;
                    const price = prices[key] || fallbackPrice;

                    return (
                      <div
                        key={key}
                        className="flex flex-col gap-2 border-b border-slate-100 px-5 py-4 transition last:border-0 hover:bg-[#0092B8]/5 md:flex-row md:items-center md:justify-between md:gap-6 md:px-7 md:py-5"
                      >
                        <span className="font-medium leading-7 text-slate-700">
                          {name}
                        </span>

                        <span className="shrink-0 text-lg font-bold text-[#0092B8]">
                          {formatPrice(price)}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ))}

          {/* УСЛОВИЯ */}
          <div className="rounded-3xl border border-[#FDC700]/50 bg-[#FDC700]/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#0092B8]">
              <T p="price" o={9}>Что влияет на стоимость</T>
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              <T p="price" o={10}>Цены указаны за стандартную работу. Если выполнение
              работ усложняется из-за трудного доступа, состояния
              коммуникаций или других особенностей объекта,
              стоимость может измениться. Итоговую цену мастер
              согласует с вами до начала работ.</T>
            </p>
          </div>

          {/* ТЕКСТ */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#0092B8] md:text-3xl">
              <T p="price" o={11}>Профессиональные сантехнические работы</T>
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              <T p="price" o={12}>Наши мастера выполняют установку, ремонт и замену
              сантехнического оборудования различной сложности.
              Перед началом работ мастер оценивает задачу и
              согласовывает стоимость.</T>
            </p>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            <T p="price" o={13}>Нужна точная стоимость?</T>
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-[54px]">
            <T p="price" o={14}>Свяжитесь с мастером</T>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            <T p="price" o={15}>Расскажите, какую работу необходимо выполнить.
            Можно отправить фотографии в WhatsApp —
            уточним задачу и согласуем стоимость.</T>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:+${SC.contacts.main.digits}`}
              className="price-call-shine inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800] sm:w-auto"
            >
              <T p="price" o={16}>Вызвать мастера</T>
            </a>

            <a
              href={`https://wa.me/${SC.contacts.main.digits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-8 py-4 text-lg text-[#292929] transition hover:bg-gray-100 sm:w-auto"
            >
              <T p="price" o={17}>Написать в WhatsApp</T>
            </a>
          </div>
        </div>
      </section>

      <Footer
        phone={`${SC.contacts.main.digits}`}
        displayPhone={`${SC.contacts.main.display}`}
      />
    </main>
  );
}

// Заголовок и описание для поиска можно изменить в админке (вкладка «SEO»)
export async function generateMetadata(): Promise<Metadata> {
  return withSeo("/price", pageMetadata);
}
