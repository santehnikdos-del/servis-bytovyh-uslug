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
      className="mb-6 flex items-center gap-2 text-sm text-white/70"
    >
      <a href="/" className="transition hover:text-[#FDC700]">
        Главная
      </a>
      <span aria-hidden="true">→</span>
      <span aria-current="page" className="text-white">
        Наши работы
      </span>
    </nav>
  );
}

export default function NashiRabotyPage() {
  return (
    <main className="min-h-screen bg-sky-100">
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
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: worksButtonShine 2.5s linear infinite;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .works-button-shine::after {
            animation: none;
          }
        }
      `}</style>

      {/* МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:hidden before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[url('/hero-mark.png')] before:bg-center before:bg-no-repeat before:bg-[length:85%_auto] before:opacity-10 [&>*]:relative [&>*]:z-10">
        <Breadcrumbs />

        <h1 className="text-center text-3xl font-bold leading-tight">
          НАШИ РАБОТЫ
        </h1>

        <div className="mx-auto mt-6 flex w-fit max-w-full items-center justify-center">
          <ul className="flex flex-col gap-3 text-left">
            {[
              "Реальные объекты",
              "Фото до и после",
              "Работы наших мастеров",
            ].map((text) => (
              <li key={text} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            ))}
          </ul>
        </div>

        <p className="mt-7 text-center text-lg leading-7">
          Показываем результаты работы наших мастеров в Алматы.
          Монтаж труб, установка сантехники, водоснабжение
          и отопление.
        </p>

        <a
          href="#works-gallery"
          className="works-button-shine mx-auto mt-10 flex max-w-sm items-center justify-center rounded-full bg-[#0092B8]/40 px-6 py-4 text-lg font-normal text-white"
        >
          Смотреть работы ↓
        </a>
      </section>

      {/* ПЕРВЫЙ ЭКРАН — КОМПЬЮТЕР */}
      <section
        className="relative hidden min-h-[535px] overflow-hidden bg-no-repeat text-white md:block md:bg-[length:100%_auto]"
        style={{
          backgroundImage: "url('/master.jpg')",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto min-h-[535px] max-w-7xl px-6 pb-8 pt-8">
          <div className="max-w-5xl">
            <Breadcrumbs />

            <p className="font-bold text-[#FDC700]">
              Сервис бытовых услуг в Алматы
            </p>

            <h1 className="mt-0 text-5xl font-black leading-tight lg:text-7xl">
              Наши работы
            </h1>

            <p className="mt-10 max-w-2xl text-xl leading-8 text-slate-100 lg:ml-25">
              Реальные сантехнические работы, выполненные нашими
              мастерами в Алматы. Посмотрите примеры монтажа труб,
              установки оборудования и готовые результаты.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 lg:ml-50">
              <a
                href="#works-gallery"
                className="rounded-full bg-[#FDC700] px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-[#e8b700]"
              >
                Смотреть работы ↓
              </a>

              <a
                href="https://wa.me/77771696969"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0092B8] px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#007a99]"
              >
                Обсудить задачу
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ РАБОТ */}
      <div id="works-gallery" className="scroll-mt-32">
        <ManagedWorks />
      </div>

      <section className="bg-sky-100 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="font-bold text-yellow-500">Готовы помочь</p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              Нужен такой же результат?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Выполним сантехнические работы в квартире, доме или офисе
              в Алматы. Рассчитаем стоимость и согласуем удобное время
              выезда мастера.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://wa.me/77771696969"
                className="rounded-full bg-green-500 px-7 py-4 font-black text-white transition hover:bg-green-600"
              >
                WhatsApp
              </a>

              <a
                href="/price"
                className="rounded-full bg-yellow-400 px-7 py-4 font-black text-black transition hover:bg-yellow-300"
              >
                Посмотреть цены →
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