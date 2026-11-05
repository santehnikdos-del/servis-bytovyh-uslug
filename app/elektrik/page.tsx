import Header from "../Header";
import Footer from "../Footer";
import ManagedServices from "../ManagedServices";

export const metadata = {
  title: "Электрик Алматы – вызов электрика на дом | Сервис бытовых услуг",
  description:
    "Услуги электрика в Алматы. Установка и замена розеток, выключателей, светильников, ремонт электрики и срочный выезд мастера на дом.",
  alternates: {
    canonical: "https://home-services.kz/elektrik",
  },
};

const advantages = [
  ["15+ лет опыта", "Большой опыт электромонтажных работ."],
  ["Выезд 30–45 минут", "Быстро выезжаем по Алматы."],
  ["Гарантия до 3 лет", "Гарантия на выполненные работы."],
  ["Свои мастера", "Работаем своей командой."],
  ["Цена заранее", "Согласовываем стоимость до начала."],
  ["Без выходных", "Принимаем заявки каждый день."],
];

const reviews = [
  ["Айдар", "Мастер быстро нашёл неисправность и всё исправил."],
  ["Динара", "Установили розетки и светильники аккуратно и быстро."],
  ["Марат", "Заменили автоматы в щитке, всё проверили после работы."],
  ["Алия", "Электрик приехал вовремя, сделал всё аккуратно."],
  ["Руслан", "Хороший сервис, мастер вежливый и профессиональный."],
  ["Сауле", "Быстро устранили проблему с проводкой."],
];

const questions = [
  [
    "Сколько стоит вызов электрика?",
    "Стоимость зависит от вида и сложности работы.",
  ],
  [
    "Как быстро приедет электрик?",
    "При срочном вызове мастер может приехать по Алматы примерно за 30–45 минут.",
  ],
  [
    "Даёте ли вы гарантию?",
    "Да, на выполненные электромонтажные работы предоставляется гарантия.",
  ],
  [
    "Работаете ли вы в выходные?",
    "Да, принимаем заявки каждый день.",
  ],
];

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
          d="m12 1 3 2.2 3.7-.1 1.1 3.5 3.1 2.1-1.2 3.5
             1.2 3.5-3.1 2.1-1.1 3.5-3.7-.1L12 23l-3-2.2
             -3.7.1-1.1-3.5-3.1-2.1L2.3 12 1.1 8.5l3.1-2.1
             1.1-3.5 3.7.1Z"
        />

        <path
          className="electric-check"
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
  );
}

export default function ElektrikPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header
        phone="77073232632"
        displayPhone="+7 707 323 26 32"
      />

      <style>{`
        @keyframes electricShine {
          from {
            transform: translateX(0) skewX(-25deg);
          }
          to {
            transform: translateX(1800%) skewX(-25deg);
          }
        }

        .electric-call-shine {
          position: relative;
          overflow: hidden;
        }

        .electric-call-shine::after {
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
          animation: electricShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes electricDiscountSwing {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .electric-discount {
          transform-origin: 0 0;
          animation: electricDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes electricCheckDraw {
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

        .electric-check {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: electricCheckDraw 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .electric-call-shine::after,
          .electric-discount,
          .electric-check {
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
                Главная
              </a>

              <span aria-hidden="true">→</span>

              <span aria-current="page" className="text-white">
                Электрик
              </span>
            </nav>

            <h1 className="text-center text-3xl font-bold uppercase leading-[1.05] md:text-left md:text-5xl lg:text-[64px]">
              Электрик
              <span className="block text-[#FDC700]">
                в Алматы
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-center text-lg leading-7 text-white/85 md:text-left">
              Монтаж и ремонт электрики. Замена розеток
              и выключателей, установка освещения,
              поиск неисправностей.
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 md:mx-0 md:max-w-none md:flex-row md:flex-wrap md:items-center">
              <a
                href="tel:+77073232632"
                className="electric-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
              >
                Вызвать электрика
              </a>

              <div className="relative shrink-0">
                <a
                  href="https://wa.me/77073232632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100 md:w-auto"
                >
                  Написать в WhatsApp
                </a>

                {/* СКИДКА */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 hidden h-0 w-0 md:block"
                >
                  <div className="electric-discount absolute left-0 top-0">
                    <img
                      src="/discount-15.png"
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
              <Check text="Быстрый выезд" />
              <Check text="Гарантия до 3 лет" />
              <Check text="Каждый день" />
            </ul>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              Услуги электрика
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              Выполняем любые электромонтажные работы
            </h2>
          </div>

          <ManagedServices type="electric" />
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              Почему выбирают нас
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              Надёжный электромонтажный сервис в Алматы
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0092B8]/40 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0092B8]">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-bold text-[#0092B8]">
              Отзывы клиентов
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              Что говорят о нашей работе
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([name, text]) => (
              <article
                key={name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-[#0092B8]/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0092B8]/10 text-lg font-bold text-[#0092B8]"
                  >
                    {name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0092B8]">
                      {name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Алматы
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 text-lg tracking-wide text-[#FDC700]"
                  aria-label="Оценка 5 из 5"
                >
                  <span aria-hidden="true">★★★★★</span>
                </div>

                <p className="mt-3 leading-7 text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
            Часто задаваемые вопросы
          </h2>

          <div className="mt-8 space-y-3">
            {questions.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-[#0092B8]/40 hover:border-[#0092B8]/40 md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0092B8] [&::-webkit-details-marker]:hidden">
                  {question}

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDC700] text-2xl font-normal text-[#171717] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* РАЙОНЫ */}
<section id="districts" className="bg-white py-12 md:py-16">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-center text-3xl font-bold leading-tight text-[#0092B8] md:text-[44px]">
      Электрик во всех районах Алматы
    </h2>

    <p className="mt-4 text-center text-lg text-slate-600">
      Выберите свой район
    </p>

    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["almalinskiy-rayon", "Алмалинский район"],
        ["medeuskiy-rayon", "Медеуский район"],
        ["bostandykskiy-rayon", "Бостандыкский район"],
        ["auezovskiy-rayon", "Ауэзовский район"],
        ["turksibskiy-rayon", "Турксибский район"],
        ["nauryzbayskiy-rayon", "Наурызбайский район"],
        ["alatauskiy-rayon", "Алатауский район"],
        ["zhetysuskiy-rayon", "Жетысуский район"],
      ].map(([slug, name]) => (
        <a
          key={slug}
          href={`/elektrik/${slug}`}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 transition hover:border-[#FDC700] hover:bg-yellow-50"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FDC700] text-[#292929]"
          >
            ✓
          </span>

          <span className="text-base text-[#292929]">
            {name}
          </span>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* КОНТАКТЫ */}
      <section className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            Сервис бытовых услуг
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-[54px]">
            Нужен электрик?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Позвоните или напишите нам в WhatsApp.
            Уточним задачу, согласуем стоимость
            и удобное время выезда мастера.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+77073232632"
              className="electric-call-shine inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800] sm:w-auto"
            >
              Вызвать электрика
            </a>

            <a
              href="https://wa.me/77073232632"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-8 py-4 text-lg text-[#292929] transition hover:bg-gray-100 sm:w-auto"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer
        phone="77073232632"
        displayPhone="+7 707 323 26 32"
      />
    </main>
  );
}