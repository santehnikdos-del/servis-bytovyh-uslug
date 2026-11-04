import Header from "../Header";
import Footer from "../Footer";

export const metadata = {
  title: "Плотник в Алматы — вызов мастера на дом | Сервис бытовых услуг",
  description:
    "Услуги плотника в Алматы: ремонт дверей, установка замков и ручек, сборка и ремонт мебели, монтаж полок и плинтусов. Вызов мастера на дом.",
  alternates: {
    canonical: "https://home-services.kz/plotnik",
  },
};

const services = [
  {
    title: "Ремонт дверей",
    text: "Регулировка дверей, устранение перекосов и замена петель.",
  },
  {
    title: "Установка замков и ручек",
    text: "Установка и замена дверных ручек, защёлок и замков.",
  },
  {
    title: "Сборка мебели",
    text: "Сборка шкафов, комодов, столов, кроватей и другой мебели.",
  },
  {
    title: "Ремонт мебели",
    text: "Замена фурнитуры, регулировка фасадов, ремонт петель и направляющих.",
  },
  {
    title: "Монтаж полок",
    text: "Установка полок, карнизов и навесных элементов с учётом основания.",
  },
  {
    title: "Установка плинтусов",
    text: "Подрезка, подгонка и монтаж напольных плинтусов.",
  },
];

const steps = [
  ["01", "Заявка", "Позвоните или отправьте описание задачи в WhatsApp."],
  ["02", "Уточнение", "Обсудим работу, материалы и удобное время."],
  ["03", "Согласование", "Мастер осмотрит объект и согласует стоимость."],
  ["04", "Выполнение", "Выполним работу и проверим результат вместе с вами."],
];

const questions = [
  [
    "Сколько стоят услуги плотника?",
    "Стоимость зависит от объёма работы, состояния изделия и необходимых материалов. Цену согласовываем до начала работ.",
  ],
  [
    "Можно ли отправить фотографии?",
    "Да. Отправьте фотографии и описание задачи в WhatsApp. Это поможет уточнить объём работы и подготовиться к выезду.",
  ],
  [
    "Кто покупает материалы и фурнитуру?",
    "Это обсуждаем заранее. Уточним размеры и подходящие материалы, а также договоримся о покупке.",
  ],
  [
    "Можно заказать несколько работ за один выезд?",
    "Да. Перечислите все задачи при обращении, чтобы мастер мог подготовить необходимые инструменты.",
  ],
];

function Arrow() {
  return (
    <span aria-hidden="true" className="carpenter-arrow inline-block">
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
  );
}

export default function PlotnikPage() {
  return (
    <main className="min-h-screen bg-white pb-20 text-slate-900 md:pb-0">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      <style>{`
        @keyframes carpenterShine {
          from { transform: translateX(0) skewX(-25deg); }
          to { transform: translateX(1800%) skewX(-25deg); }
        }

        .carpenter-call-shine {
          position: relative;
          overflow: hidden;
        }

        .carpenter-call-shine::after {
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
          animation: carpenterShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes carpenterArrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }

        .carpenter-arrow {
          animation: carpenterArrowMove 1.2s ease-in-out infinite;
        }

        @keyframes carpenterDiscountSwing {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        .carpenter-discount {
          transform-origin: 0 0;
          animation: carpenterDiscountSwing 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .carpenter-call-shine::after,
          .carpenter-arrow,
          .carpenter-discount {
            animation: none;
          }
        }
      `}</style>

      {/* БАННЕР */}
      <section className="relative overflow-hidden bg-[#333333] text-white md:h-[490px] md:bg-[#281E12]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/hero-mark.png')] bg-[length:85%_auto] bg-center bg-no-repeat opacity-10 md:hidden"
        />

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
              <a href="/" className="hover:text-[#FDC700]">
                Главная
              </a>
              <span aria-hidden="true">→</span>
              <span aria-current="page" className="text-white">
                Плотник
              </span>
            </nav>

            <h1 className="text-center text-3xl font-bold uppercase leading-[1.05] md:text-left md:text-5xl lg:text-[64px]">
              Плотник
              <span className="block text-[#FDC700]">
                в Алматы
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-center text-lg leading-7 text-white/85 md:text-left">
              Ремонт дверей и мебели, установка замков,
              сборка мебели, монтаж полок и плинтусов.
              Поможем с домашними задачами.
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 md:mx-0 md:max-w-none md:flex-row md:flex-wrap md:items-center">
              <a
                href="tel:+77771696969"
                className="carpenter-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
              >
                Вызвать мастера
              </a>

              <div className="relative shrink-0">
                <a
                  href="https://wa.me/77771696969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100 md:w-auto"
                >
                  Написать в WhatsApp
                </a>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 hidden h-0 w-0 md:block"
                >
                  <div className="carpenter-discount absolute left-0 top-0">
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
              <Check text="Цена заранее" />
              <Check text="Удобное время" />
              <Check text="Аккуратная работа" />
            </ul>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-bold text-[#0092B8]">
              Услуги плотника
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              Какая помощь вам нужна?
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-[#0092B8]/40 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#0092B8]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.text}
                </p>

                <a
                  href={`https://wa.me/77771696969?text=${encodeURIComponent(
                    `Здравствуйте! Интересует услуга: ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Обсудить услугу: ${service.title}`}
                  className="mt-auto inline-flex items-center gap-3 pt-4 text-sm font-semibold text-[#0092B8]"
                >
                  <Arrow />
                  Обсудить работу
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section id="prices" className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold text-[#0092B8]">
            Стоимость работ
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
            Сколько стоят услуги плотника?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Цена зависит от объёма работы, состояния мебели
            или дверей, материалов и фурнитуры. Отправьте
            фотографии и описание задачи — уточним детали.
            Итоговую стоимость согласуем до начала работ.
          </p>

          <a
            href="https://wa.me/77771696969"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800]"
          >
            <Arrow />
            Узнать стоимость
          </a>
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
            Как заказать работу
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDC700] text-lg font-bold">
                  {number}
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#0092B8]">
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

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
            Вопросы об услугах плотника
          </h2>

          <div className="mt-8 space-y-3">
            {questions.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-[#0092B8]/40 md:p-6"
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

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            Сервис бытовых услуг
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-[54px]">
            Нужен плотник?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Позвоните или напишите в WhatsApp.
            Расскажите о задаче — обсудим работу
            и удобное время приезда мастера.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+77771696969"
              className="carpenter-call-shine inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800] sm:w-auto"
            >
              Вызвать мастера
            </a>

            <a
              href="https://wa.me/77771696969"
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
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />
    </main>
  );
}