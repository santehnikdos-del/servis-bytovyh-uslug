import Header from "../Header";
import Footer from "../Footer";
import { createClient } from "@supabase/supabase-js";

export const metadata = {
  title: "Цены на услуги сантехника в Алматы | Сервис бытовых услуг",

  description:
    "Цены на сантехнические работы в Алматы: монтаж труб, кухня, ванная, туалет, прочистка канализации и установка сантехники.",

  alternates: {
    canonical: "https://home-services.kz/price",
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

async function loadKeyValueTable(table: "prices" | "service_names") {
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
  const [prices, names] = await Promise.all([
    loadKeyValueTable("prices"),
    loadKeyValueTable("service_names"),
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      {/* ЗАГОЛОВОК */}
      <section className="bg-sky-800 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <p className="font-bold text-yellow-400">
            Сервис бытовых услуг
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Цены на услуги сантехника
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white">
            Базовая стоимость основных сантехнических работ.
            Работаем по Алматы. Итоговая цена согласовывается
            с мастером до начала работ.
          </p>
        </div>
      </section>

      {/* ПРАЙС */}
      <section className="bg-sky-100 py-14 text-slate-900 md:py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-6">
          {sections.map((section) => {
            return (
              <div key={section.title}>
                <div className="mb-6">
                  <p className="text-sm font-black uppercase tracking-wider text-yellow-500">
                    Прайс-лист
                  </p>

                  <h2 className="mt-2 text-3xl font-black md:text-4xl">
                    {section.title}
                  </h2>

                  <p className="mt-2 text-slate-500">
                    {section.subtitle}
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  {section.items.map(
                    ([key, fallbackName, fallbackPrice]) => {
                      const name =
                        names[key] || fallbackName;

                      const price =
                        prices[key] || fallbackPrice;

                      return (
                        <div
                          key={key}
                          className="flex flex-col gap-2 border-b border-slate-200 px-5 py-5 transition duration-200 last:border-0 hover:bg-yellow-50 md:flex-row md:items-center md:justify-between md:px-7"
                        >
                          <span className="font-semibold leading-6 md:pr-10">
                            {name}
                          </span>

                          <span className="shrink-0">
                            {formatPrice(price)}
                          </span>
                        </div>
                      );
                    }
                  )}

                </div>
              </div>
            );
          })}

          {/* ВНИМАНИЕ */}
          <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-6 text-red-600 md:p-8">
            <h2 className="text-xl font-black">
              Внимание
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Цены указаны за стандартную работу. Если выполнение
              работ усложняется из-за трудного доступа, состояния
              коммуникаций или других особенностей объекта,
              стоимость может измениться.
            </p>
          </div>

          {/* ТЕКСТ */}
          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">
              Профессиональные сантехнические работы
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Наши мастера выполняют установку, ремонт и замену
              сантехнического оборудования различной сложности.
              Перед началом работ мастер оценивает задачу и
              согласовывает стоимость.
            </p>
          </div>
        </div>
      </section>

      {/* НИЖНИЙ БЛОК */}
      <section className="bg-sky-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-7 shadow-lg md:p-10">
            <p className="font-bold text-yellow-400">
              Нужна точная стоимость?
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Свяжитесь с мастером
            </h2>

            <p className="mt-4 text-slate-300">
              Расскажите, какую работу необходимо выполнить.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="tel:+77771696969"
                className="rounded-full bg-yellow-400 px-7 py-4 font-black text-black"
              >
                📞 Позвонить
              </a>

              <a
                href="https://wa.me/77771696969"
                className="rounded-full bg-green-500 px-7 py-4 font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />
    </main>
  );
}