import T from "../T";
import Header from "../Header";
import Footer from "../Footer";
import ManagedServices from "../ManagedServices";

export const revalidate = 60;

export const metadata = {
  title: "Услуги сантехника в Алматы | Сервис бытовых услуг",
  description:
    "Услуги сантехника в Алматы: установка унитаза, смесителя, раковины, ванны, бойлера, замена труб и прочистка канализации.",
  alternates: {
   canonical: "https://www.home-services.kz/uslugi-santehnika",
  },
};

const questions = [
  [
    "Сколько стоит вызов сантехника?",
    "Стоимость зависит от вида и сложности работы. Базовые цены указаны на странице прайс-листа.",
  ],
  [
    "Как быстро приезжает мастер?",
    "Обычно мастер может приехать в течение 30–45 минут. Также можно договориться на удобное время.",
  ],
  [
    "Есть ли гарантия на выполненные работы?",
    "Да. На выполненные работы предоставляется гарантия в зависимости от вида услуги — до 3 лет.",
  ],
  [
    "Работаете ли вы по всему Алматы?",
    "Да. Выезжаем по Алматы и в удалённые районы. Время приезда зависит от вашего местоположения.",
  ],
  [
    "Можно ли заранее узнать стоимость?",
    "Да. Перед началом работы мастер оценивает задачу и согласовывает стоимость с клиентом.",
  ],
];

const districts = [
  "Алатауский район",
  "Алмалинский район",
  "Ауэзовский район",
  "Бостандыкский район",
  "Жетысуский район",
  "Медеуский район",
  "Наурызбайский район",
  "Турксибский район",
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
          className="services-check"
          pathLength="1"
          d="m7.5 12 3 3 6-6"
          fill="none"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span><T p="uslugi-santehnika" o={1}>{text}</T></span>
    </li>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="services-arrow inline-block"
    >
      →
    </span>
  );
}

export default function UslugiSantehnikaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      <style>{`
        @keyframes servicesShine {
          from {
            transform: translateX(0) skewX(-25deg);
          }
          to {
            transform: translateX(1800%) skewX(-25deg);
          }
        }

        .services-call-shine {
          position: relative;
          overflow: hidden;
        }

        .services-call-shine::after {
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
          animation: servicesShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes servicesDiscountSwing {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .services-discount {
          transform-origin: 0 0;
          animation: servicesDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes servicesCheckDraw {
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

        .services-check {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: servicesCheckDraw 2s ease-in-out infinite;
        }

        @keyframes servicesArrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        .services-arrow {
          animation: servicesArrowMove 1.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .services-call-shine::after,
          .services-discount,
          .services-check,
          .services-arrow {
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
            alt="Сантехник сервиса бытовых услуг в Алматы"
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
              className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70"
            >
              <a
                href="/"
                className="transition hover:text-[#FDC700]"
              >
                <T p="uslugi-santehnika" o={2}>Главная</T>
              </a>

              <span aria-hidden="true">→</span>

              <a
                href="/santehnik"
                className="transition hover:text-[#FDC700]"
              >
                <T p="uslugi-santehnika" o={3}>Сантехник</T>
              </a>

              <span aria-hidden="true">→</span>

              <span aria-current="page" className="text-white">
                <T p="uslugi-santehnika" o={4}>Услуги</T>
              </span>
            </nav>

            <h1 className="text-center text-3xl font-bold uppercase leading-[1.1] md:text-left md:text-[40px] lg:text-[48px]">
  <T p="uslugi-santehnika" o={5}>Услуги</T>{" "}
  <span className="text-[#FDC700]">
    <T p="uslugi-santehnika" o={6}>сантехника</T>
  </span>
  <span className="block">
    <T p="uslugi-santehnika" o={7}>в Алматы</T>
  </span>
</h1>

            <p className="mt-5 max-w-lg text-center text-lg leading-7 text-white/85 md:text-left">
              <T p="uslugi-santehnika" o={8}>Установка, ремонт и замена сантехники.
              Монтаж труб, устранение протечек
              и прочистка канализации.</T>
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 md:mx-0 md:max-w-none md:flex-row md:flex-wrap md:items-center">
              <a
                href="tel:+77771696969"
                className="services-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
              >
                <T p="uslugi-santehnika" o={9}>Вызвать мастера</T>
              </a>

              <div className="relative shrink-0">
                <a
                  href="https://wa.me/77771696969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100 md:w-auto"
                >
                  <T p="uslugi-santehnika" o={10}>Написать в WhatsApp</T>
                </a>

                {/* СКИДКА */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 hidden h-0 w-0 md:block"
                >
                  <div className="services-discount absolute left-0 top-0">
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

      {/* СПИСОК УСЛУГ */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="uslugi-santehnika" o={11}>Все услуги</T>
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[54px]">
              <T p="uslugi-santehnika" o={12}>Выберите нужную работу</T>
            </h2>
          </div>

          <ManagedServices type="plumbing" />
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="about" className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="uslugi-santehnika" o={13}>Почему выбирают нас</T>
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              <T p="uslugi-santehnika" o={14}>Надёжный сантехнический сервис в Алматы</T>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["15+ лет", "Опыт работы"],
              ["30–45 минут", "Выезд мастера"],
              ["До 3 лет", "Гарантия"],
              ["Каждый день", "Без выходных"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white px-4 py-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FDC700] hover:shadow-lg"
              >
                <p className="text-xl font-black text-[#0092B8] md:text-2xl">
                  <T p="uslugi-santehnika" o={15}>{title}</T>
                </p>

                <p className="mt-2 text-sm text-slate-600 md:text-base">
                  <T p="uslugi-santehnika" o={16}>{text}</T>
                </p>

                <div
                  aria-hidden="true"
                  className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#FDC700] transition-all duration-300 group-hover:w-20"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold text-[#0092B8]">
            <T p="uslugi-santehnika" o={17}>Стоимость работ</T>
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[54px]">
            <T p="uslugi-santehnika" o={18}>Цены на услуги сантехника</T>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            <T p="uslugi-santehnika" o={19}>Итоговая цена зависит от объёма и сложности работы.
            Мастер согласует стоимость с вами до начала выполнения.
            Базовые цены можно посмотреть в прайс-листе.</T>
          </p>

          <a
            href="/price"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800]"
          >
            <Arrow />
            <T p="uslugi-santehnika" o={20}>Смотреть цены</T>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="uslugi-santehnika" o={21}>Частые вопросы</T>
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              <T p="uslugi-santehnika" o={22}>Вопросы об услугах сантехника</T>
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {questions.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-[#0092B8]/40 hover:border-[#0092B8]/40 md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0092B8] [&::-webkit-details-marker]:hidden">
                  <T p="uslugi-santehnika" o={23}>{question}</T>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDC700] text-2xl font-normal text-[#171717] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  <T p="uslugi-santehnika" o={24}>{answer}</T>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* РАЙОНЫ */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="uslugi-santehnika" o={25}>Выезд по городу</T>
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              <T p="uslugi-santehnika" o={26}>Сантехник во всех районах Алматы</T>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              <T p="uslugi-santehnika" o={27}>Выезжаем на сантехнические работы по всему Алматы.</T>
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {districts.map((district) => (
              <div
                key={district}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#FDC700] hover:shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6 shrink-0 text-[#0092B8]"
                  aria-hidden="true"
                >
                  <path
                    d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span className="font-medium text-slate-700">
                  {district}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            <T p="uslugi-santehnika" o={28}>Не нашли нужную услугу?</T>
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-[54px]">
            <T p="uslugi-santehnika" o={29}>Свяжитесь с мастером</T>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            <T p="uslugi-santehnika" o={30}>Расскажите, какая сантехническая работа вам требуется.
            Подскажем возможное решение и согласуем удобное
            время выезда.</T>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+77771696969"
              className="services-call-shine inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800] sm:w-auto"
            >
              <T p="uslugi-santehnika" o={31}>Вызвать мастера</T>
            </a>

            <a
              href="https://wa.me/77771696969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-8 py-4 text-lg text-[#292929] transition hover:bg-gray-100 sm:w-auto"
            >
              <T p="uslugi-santehnika" o={32}>Написать в WhatsApp</T>
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