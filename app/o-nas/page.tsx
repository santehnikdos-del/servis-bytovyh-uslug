import T from "../T";
import Header from "../Header";
import Footer from "../Footer";

export const metadata = {
  title: "О нас | Сервис бытовых услуг в Алматы",
  description:
    "Сервис бытовых услуг в Алматы. Своя команда мастеров, 15 лет опыта, более 1000 клиентов. Согласование стоимости заранее и гарантия на работы.",
  alternates: {
    canonical: "https://home-services.kz/o-nas",
  },
};

const advantages = [
  ["15 лет опыта", "Практический опыт ремонта и монтажа сантехники."],
  ["1000+ клиентов", "Помогаем владельцам квартир, частных домов и офисов."],
  ["Гарантия до 3 лет", "Срок и условия гарантии зависят от выполненных работ."],
  ["Свои мастера", "Свой штат квалифицированных работников."],
  ["Цена заранее", "Согласовываем стоимость до начала работ."],
  ["Без выходных", "Принимаем заявки каждый день."],
];

const directions = [
  [
    "Сантехник",
    "Установка и ремонт сантехники, устранение протечек.",
    "/santehnik",
  ],
  [
    "Электрик",
    "Помощь с неисправностями электрики и установкой оборудования.",
    "/elektrik",
  ],
  [
    "Прочистка канализации",
    "Устранение засоров в квартирах, домах и офисах.",
    "/prochistka-kanalizacii",
  ],
];

const steps = [
  ["01", "Заявка", "Вы звоните или пишете нам в WhatsApp."],
  ["02", "Обсуждение", "Уточняем задачу и согласуем время выезда."],
  [
    "03",
    "Оценка и работа",
    "Мастер осматривает оборудование, согласует цену и выполняет работу.",
  ],
  [
    "04",
    "Проверка",
    "Проверяем результат и объясняем условия гарантии.",
  ],
];

function Arrow() {
  return (
    <span aria-hidden="true" className="about-arrow inline-block">
      →
    </span>
  );
}

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
      >
        <path
          fill="#0092B8"
          d="M12 1 15 3 19 3 20 7 23 10 21 14 21 18 17 20 14 23 10 21 6 21 4 17 1 14 3 10 3 6 7 4Z"
        />
        <path
          className="about-check-line"
          pathLength="1"
          d="m7 12 3 3 7-7"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span><T p="o-nas" o={1}>{text}</T></span>
    </li>
  );
}

export default function ONasPage() {
  return (
    <main className="min-h-screen bg-white pb-20 text-slate-900 md:pb-0">
      <Header />

      <style>{`
        @keyframes aboutArrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }

        .about-arrow {
          animation: aboutArrowMove 1.2s ease-in-out infinite;
        }

        @keyframes aboutCheckDraw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }

        .about-check-line {
          stroke-dasharray: 1;
          animation: aboutCheckDraw 2s ease-in-out infinite;
        }

        @keyframes aboutCallShine {
          from { transform: translateX(0) skewX(-25deg); }
          to { transform: translateX(1800%) skewX(-25deg); }
        }

        .about-call-shine {
          position: relative;
          overflow: hidden;
        }

        .about-call-shine::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -25%;
          width: 8%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          animation: aboutCallShine 2.5s linear infinite;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-arrow,
          .about-check-line,
          .about-call-shine::after {
            animation: none;
          }
        }
      `}</style>

      {/* МОБИЛЬНЫЙ БАННЕР */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/hero-mark.png')] before:bg-[length:85%_auto] before:bg-center before:bg-no-repeat before:opacity-10">
        <div className="relative z-10">
          <nav
            aria-label="Хлебные крошки"
            className="mb-6 flex items-center gap-2 text-sm text-white/70"
          >
            <a href="/" className="hover:text-[#FDC700]">
              <T p="o-nas" o={2}>Главная</T>
            </a>
            <span aria-hidden="true">→</span>
            <span aria-current="page" className="text-white">
              <T p="o-nas" o={3}>О нас</T>
            </span>
          </nav>

          <h1 className="text-center text-3xl font-bold uppercase">
            <T p="o-nas" o={4}>О нас</T>
          </h1>

          <ul className="mx-auto mt-6 flex w-fit flex-col gap-3">
            <Check text="Свой штат специалистов" />
            <Check text="Более 1000 клиентов" />
            <Check text="Гарантия до 3 лет" />
          </ul>

          <p className="mt-7 text-center text-lg leading-7 text-white/85">
            <T p="o-nas" o={5}>Сервис бытовых услуг в Алматы. Помогаем с ремонтом,
            установкой и обслуживанием оборудования вашего дома.</T>
          </p>

          <a
            href="tel:+77771696969"
            className="about-call-shine mx-auto mt-8 flex max-w-sm items-center justify-center rounded-full bg-[#0092B8]/40 px-6 py-4 text-lg"
          >
            <T p="o-nas" o={6}>Связаться с нами</T>
          </a>
        </div>
      </section>

    {/* БАННЕР — КОМПЬЮТЕР */}
<section
  className="relative hidden h-[490px] overflow-hidden text-white md:block"
  style={{ backgroundColor: "#281E12" }}
>
  <div className="absolute inset-y-0 right-0 w-[53%]">
    <img
      src="/banner-master.jpg"
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

  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
    <div className="w-[47%]">
      <nav
        aria-label="Хлебные крошки"
        className="mb-5 flex items-center gap-2 text-sm text-white/70"
      >
        <a href="/" className="hover:text-[#FDC700]">
          <T p="o-nas" o={7}>Главная</T>
        </a>
        <span aria-hidden="true">→</span>
        <span aria-current="page" className="text-white">
          <T p="o-nas" o={8}>О нас</T>
        </span>
      </nav>

      <h1 className="whitespace-nowrap text-5xl font-bold uppercase leading-[1.05] lg:text-[64px]">
  <T p="o-nas" o={9}>О нашей</T> <span className="text-[#FDC700]"><T p="o-nas" o={10}>команде</T></span>
</h1>

      <p className="mt-5 max-w-lg text-lg leading-7 text-white/85">
        <T p="o-nas" o={11}>Сервис бытовых услуг в Алматы. Свои мастера,
        согласованная стоимость и аккуратная работа.</T>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="tel:+77771696969"
          className="about-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
        >
          <T p="o-nas" o={12}>Вызвать мастера</T>
        </a>

        <div className="relative shrink-0">
          <a
            href="https://wa.me/77771696969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100"
          >
            <T p="o-nas" o={13}>Написать в WhatsApp</T>
          </a>

          {/* СКИДКА */}
          <div className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 h-0 w-0">
            <div className="about-banner-discount absolute left-0 top-0">
              <img
                src="/discount-15.png"
                alt="Скидка 15% на все услуги"
                className="absolute left-0 top-[-47px] h-auto w-[180px] max-w-none drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]"
              />

              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                aria-hidden="true"
                className="absolute -left-[9px] -top-[10px] z-10"
              >
                <ellipse
                  cx="15"
                  cy="10"
                  rx="12"
                  ry="7"
                  fill="none"
                  stroke="#64748B"
                  strokeWidth="4"
                />
                <ellipse
                  cx="15"
                  cy="9"
                  rx="12"
                  ry="7"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-base">
        <Check text="Свои мастера" />
        <Check text="Цена заранее" />
        <Check text="Гарантия" />
      </ul>
    </div>
  </div>

  <style>{`
    @keyframes aboutBannerDiscountSwing {
      0%, 100% { transform: rotate(-4deg); }
      50% { transform: rotate(4deg); }
    }

    .about-banner-discount {
      transform-origin: 0 0;
      animation: aboutBannerDiscountSwing 3s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .about-banner-discount {
        animation: none;
      }
    }
  `}</style>
</section>

      {/* О КОМАНДЕ */}
      <section className="bg-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            <T p="o-nas" o={14}>Мастера, которым можно доверить заботу о доме</T>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            <T p="o-nas" o={15}>Мы — команда мастеров по бытовым услугам в Алматы.
            Наше основное направление — сантехнические работы:
            от замены смесителя до монтажа инженерных систем.
            Помогаем владельцам квартир, частных домов и
            коммерческих помещений.</T>
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            <T p="o-nas" o={16}>Перед началом работы объясняем, что необходимо сделать,
            согласовываем стоимость и порядок выполнения.
            Принимаем наличную и безналичную оплату,
            предоставляем документы.</T>
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="/nashi-raboty"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0092B8] px-6 py-4 font-bold text-white"
            >
              <Arrow />
              <T p="o-nas" o={17}>Посмотреть работы</T>
            </a>

            <a
              href="/otzyvy"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FDC700] px-6 py-4 font-bold text-[#171717]"
            >
              <Arrow />
              <T p="o-nas" o={18}>Читать отзывы</T>
            </a>
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            <T p="o-nas" o={19}>Почему выбирают нас</T>
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FDC700] hover:shadow-lg"
              >
                <h3 className="text-xl font-black text-[#0092B8]">
                  <T p="o-nas" o={20}>{title}</T>
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  <T p="o-nas" o={21}>{text}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* НАПРАВЛЕНИЯ */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            <T p="o-nas" o={22}>Чем можем помочь</T>
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {directions.map(([title, text, href]) => (
              <div
                key={title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FDC700] hover:shadow-lg"
              >
                <h3 className="text-xl font-black text-[#0092B8]">
                  <T p="o-nas" o={23}>{title}</T>
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  <T p="o-nas" o={24}>{text}</T>
                </p>

                <a
                  href={href}
                  className="mt-auto inline-flex items-center gap-3 pt-5 font-semibold text-[#0092B8] hover:underline"
                >
                  <Arrow />
                  <T p="o-nas" o={25}>Подробнее</T>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            <T p="o-nas" o={26}>Как мы работаем</T>
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FDC700] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDC700] text-xl font-black">
                  <T p="o-nas" o={27}>{number}</T>
                </div>

                <h3 className="mt-5 text-xl font-black text-[#0092B8]">
                  <T p="o-nas" o={28}>{title}</T>
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  <T p="o-nas" o={29}>{text}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            <T p="o-nas" o={30}>Весь Алматы и пригород</T>
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-[54px] md:leading-tight">
            <T p="o-nas" o={31}>Обсудим вашу задачу</T>
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/90">
            <T p="o-nas" o={32}>Позвоните или напишите в WhatsApp.
            Уточним детали, согласуем стоимость и удобное
            время приезда мастера.</T>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+77771696969"
              className="about-call-shine inline-flex items-center gap-3 rounded-full bg-[#FDC700] px-7 py-4 text-lg text-[#171717]"
            >
              <Arrow />
              <T p="o-nas" o={33}>Позвонить</T>
            </a>

            <a
              href="https://wa.me/77771696969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-lg text-[#292929]"
            >
              <Arrow />
              <T p="o-nas" o={34}>Написать в WhatsApp</T>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}