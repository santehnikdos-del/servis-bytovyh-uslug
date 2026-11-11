import T from "../T";
import Header from "../Header";
import Footer from "../Footer";
import ManagedWorks from "../ManagedWorks";

export const metadata = {
  title: "Наши работы сантехника в Алматы | Сервис бытовых услуг",
  description:
    "Примеры выполненных сантехнических работ в Алматы. Монтаж труб, водоснабжения, отопления и сантехнического оборудования.",
  alternates: {
    canonical: "https://home-services.kz/nashi-raboty",
  },
};

function Breadcrumbs() {
  return (
    <nav
      aria-label="Хлебные крошки"
      className="mb-5 flex items-center gap-2 text-sm text-white/70"
    >
      <a href="/" className="transition hover:text-[#FDC700]">
        <T p="nashi-raboty" o={1}>Главная</T>
      </a>
      <span aria-hidden="true">→</span>
      <span aria-current="page" className="text-white">
        <T p="nashi-raboty" o={2}>Наши работы</T>
      </span>
    </nav>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="works-arrow inline-block">
      →
    </span>
  );
}

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
      >
        <path
          fill="#0092B8"
          d="M12 1 15 3 19 3 20 7 23 10 21 14 21 18 17 20 14 23 10 21 6 21 4 17 1 14 3 10 3 6 7 4Z"
        />
        <path
          className="works-check-line"
          pathLength="1"
          d="m7 12 3 3 7-7"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span><T p="nashi-raboty" o={3}>{text}</T></span>
    </li>
  );
}

export default function NashiRabotyPage() {
  return (
    <main className="min-h-screen bg-white pb-20 text-slate-900 md:pb-0">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      <style>{`
        @keyframes worksButtonShine {
          from { transform: translateX(0) skewX(-25deg); }
          to { transform: translateX(1800%) skewX(-25deg); }
        }

        .works-button-shine {
          position: relative;
          overflow: hidden;
        }

        .works-button-shine::after {
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
          animation: worksButtonShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes worksArrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }

        .works-arrow {
          animation: worksArrowMove 1.2s ease-in-out infinite;
        }

        @keyframes worksCheckDraw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }

        .works-check-line {
          stroke-dasharray: 1;
          animation: worksCheckDraw 2s ease-in-out infinite;
        }

        @keyframes worksDiscountSwing {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        .works-discount {
          transform-origin: 0 0;
          animation: worksDiscountSwing 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .works-button-shine::after,
          .works-arrow,
          .works-check-line,
          .works-discount {
            animation: none;
          }
        }
      `}</style>

      {/* МОБИЛЬНЫЙ БАННЕР */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/hero-mark.png')] before:bg-center before:bg-no-repeat before:bg-[length:85%_auto] before:opacity-10">
        <div className="relative z-10">
          <Breadcrumbs />

          <h1 className="text-center text-3xl font-bold leading-tight">
            <T p="nashi-raboty" o={4}>НАШИ РАБОТЫ</T>
          </h1>

          <ul className="mx-auto mt-6 flex w-fit flex-col gap-3">
            <Check text="Реальные объекты" />
            <Check text="Фото до и после" />
            <Check text="Работы наших мастеров" />
          </ul>

          <p className="mt-7 text-center text-lg leading-7 text-white/85">
            <T p="nashi-raboty" o={5}>Показываем результаты работы наших мастеров в Алматы.
            Монтаж труб, установка сантехники, водоснабжение
            и отопление.</T>
          </p>

          <a
            href="#works-gallery"
            className="works-button-shine mx-auto mt-8 flex max-w-sm items-center justify-center rounded-full bg-[#0092B8]/40 px-6 py-4 text-lg font-normal"
          >
            <T p="nashi-raboty" o={6}>Смотреть работы ↓</T>
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
            <Breadcrumbs />

            <h1 className="whitespace-nowrap text-5xl font-bold uppercase leading-[1.05] lg:text-[64px]">
  <T p="nashi-raboty" o={7}>Наши</T> <span className="text-[#FDC700]"><T p="nashi-raboty" o={8}>работы</T></span>
</h1>

            <p className="mt-5 max-w-lg text-lg leading-7 text-white/85">
              <T p="nashi-raboty" o={9}>Реальные работы наших мастеров в Алматы.
              Монтаж труб, установка сантехники и готовые
              результаты на фото.</T>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
  href="tel:+77771696969"
  className="works-button-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal text-white transition hover:bg-[#007D9E]"
>
  <T p="nashi-raboty" o={10}>Вызвать мастера</T>
</a>

              <div className="relative shrink-0">
                <a
                  href="https://wa.me/77771696969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100"
                >
                  <T p="nashi-raboty" o={11}>Написать в WhatsApp</T>
                </a>

                {/* СКИДКА */}
                <div className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 h-0 w-0">
                  <div className="works-discount absolute left-0 top-0">
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
              <Check text="Реальные объекты" />
              <Check text="До и после" />
              <Check text="Наши мастера" />
            </ul>
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ РАБОТ */}
      <div id="works-gallery" className="scroll-mt-40">
        <ManagedWorks />
      </div>

      {/* КОНТАКТЫ */}
      <section className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            <T p="nashi-raboty" o={12}>Сервис бытовых услуг</T>
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-[54px]">
            <T p="nashi-raboty" o={13}>Нужен такой же результат?</T>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            <T p="nashi-raboty" o={14}>Выполним сантехнические работы в квартире, доме или
            офисе в Алматы. Уточним задачу, рассчитаем стоимость
            и согласуем удобное время выезда мастера.</T>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/77771696969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-lg font-normal text-[#292929] transition hover:bg-gray-100"
            >
              <Arrow />
              <T p="nashi-raboty" o={15}>Написать в WhatsApp</T>
            </a>

            <a
              href="/price"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FDC700] px-7 py-4 text-lg font-normal text-[#171717] transition hover:bg-[#eab800]"
            >
              <Arrow />
              <T p="nashi-raboty" o={16}>Посмотреть цены</T>
            </a>
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