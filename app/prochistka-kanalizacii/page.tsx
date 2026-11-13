import type { Metadata } from "next";
import { imgSrc, loadSiteContent, withSeo } from "../../lib/site-texts";
import T from "../T";
import Header from "../Header";
import Footer from "../Footer";

const pageMetadata: Metadata = {
  title:
    "Прочистка канализации в Алматы — устранение засоров",
  description:
    "Прочистка канализации в Алматы. Устранение засоров труб, раковин, унитазов и стояков. Быстрый выезд мастера по Алматы.",
  alternates: {
    canonical: "https://www.home-services.kz/prochistka-kanalizacii",
  },
};

const services = [
  {
    title: "Прочистка труб",
    text: "Устраняем засоры и восстанавливаем нормальный слив воды.",
    href: "/prochistka-trub",
  },
  {
    title: "Прочистка раковины",
    text: "Быстро устраняем засор в раковине и проверяем слив.",
    href: "/prochistka-rakoviny",
  },
  {
    title: "Прочистка унитаза",
    text: "Устраняем сложные засоры и восстанавливаем работу унитаза.",
    href: "/prochistka-unitaza",
  },
  {
    title: "Прочистка стояка",
    text: "Прочищаем канализационные стояки в квартирах, домах и офисах.",
    href: "/prochistka-stoyaka",
  },
  {
    title: "Прочистка аппаратом",
    text: "Используем профессиональное оборудование для сложных засоров.",
    href: "/prochistka-apparatom",
  },
  {
    title: "Гидродинамическая прочистка",
    text: "Промываем трубы водой под высоким давлением и удаляем загрязнения.",
    href: "/gidrodinamicheskaya-prochistka",
  },
];

const prices = [
  ["Прочистка раковины", "от 15 000 ₸"],
  ["Прочистка унитаза", "от 15 000 ₸"],
  ["Прочистка труб", "от 15 000 ₸"],
  ["Прочистка стояка", "от 20 000 ₸"],
  ["Прочистка канализации аппаратом", "от 20 000 ₸"],
  ["Гидродинамическая прочистка", "от 30 000 ₸"],
];

const advantages = [
  ["15+ лет опыта", "Большой опыт устранения засоров."],
  ["Выезд 30–45 минут", "Быстро выезжаем по Алматы."],
  [
    "Профессиональное оборудование",
    "Используем оборудование для сложных засоров.",
  ],
  ["Свои мастера", "Работаем своей командой специалистов."],
  ["Цена заранее", "Согласовываем стоимость до начала работ."],
  ["Без выходных", "Принимаем заявки каждый день."],
];

const steps = [
  ["01", "Заявка", "Позвоните или напишите нам в WhatsApp."],
  [
    "02",
    "Уточняем проблему",
    "Уточняем место и характер засора.",
  ],
  [
    "03",
    "Выезд мастера",
    "Мастер приезжает с необходимым оборудованием.",
  ],
  [
    "04",
    "Прочистка",
    "Устраняем засор и проверяем работу канализации.",
  ],
];

const reviews = [
  [
    "Айдар",
    "Был сильный засор на кухне. Мастер приехал и быстро прочистил трубу.",
  ],
  [
    "Динара",
    "Прочистили канализацию аппаратом. Вода теперь уходит нормально.",
  ],
  [
    "Марат",
    "Мастер приехал вовремя, устранил засор и всё проверил.",
  ],
  [
    "Алия",
    "Быстро прочистили засор в раковине. Работой довольна.",
  ],
  [
    "Руслан",
    "Обратились из-за засора стояка. Проблему устранили в тот же день.",
  ],
  [
    "Сауле",
    "Хороший сервис. Мастер аккуратно выполнил прочистку канализации.",
  ],
];

const questions = [
  [
    "Сколько стоит прочистка канализации?",
    "Стоимость зависит от сложности засора, длины труб и способа прочистки.",
  ],
  [
    "Как быстро приедет мастер?",
    "По Алматы стараемся приезжать максимально быстро.",
  ],
  [
    "Каким оборудованием вы прочищаете канализацию?",
    "Используем профессиональное оборудование в зависимости от типа и сложности засора.",
  ],
  [
    "Можно ли устранить сложный засор?",
    "Да, подбираем подходящий способ прочистки после оценки причины и места засора.",
  ],
  [
    "Делаете гидродинамическую прочистку?",
    "Да, выполняем гидродинамическую промывку канализационных труб.",
  ],
  [
    "Работаете ли в выходные?",
    "Да, принимаем заявки каждый день.",
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

function Arrow() {
  return (
    <span aria-hidden="true" className="drain-arrow inline-block">
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
          className="drain-check"
          pathLength="1"
          d="m7.5 12 3 3 6-6"
          fill="none"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span><T p="prochistka-kanalizacii" o={1}>{text}</T></span>
    </li>
  );
}

export default async function ProchistkaKanalizaciiPage() {
  const SC = await loadSiteContent();

  return (
    <main className="min-h-screen bg-white pb-20 text-slate-900 md:pb-0">
      <Header
        phone={`${SC.contacts.main.digits}`}
        displayPhone={`${SC.contacts.main.display}`}
      />

      <style>{`
        @keyframes drainShine {
          from { transform: translateX(0) skewX(-25deg); }
          to { transform: translateX(1800%) skewX(-25deg); }
        }

        .drain-call-shine {
          position: relative;
          overflow: hidden;
        }

        .drain-call-shine::after {
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
          animation: drainShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes drainDiscountSwing {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        .drain-discount {
          transform-origin: 0 0;
          animation: drainDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes drainCheckDraw {
          0%, 15% { stroke-dashoffset: 1; }
          45%, 85% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 1; }
        }

        .drain-check {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: drainCheckDraw 2s ease-in-out infinite;
        }

        @keyframes drainArrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }

        .drain-arrow {
          animation: drainArrowMove 1.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .drain-call-shine::after,
          .drain-discount,
          .drain-check,
          .drain-arrow {
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
              className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70"
            >
              <a href="/" className="hover:text-[#FDC700]">
                <T p="prochistka-kanalizacii" o={2}>Главная</T>
              </a>
              <span aria-hidden="true">→</span>
              <span aria-current="page" className="text-white">
                <T p="prochistka-kanalizacii" o={3}>Прочистка канализации</T>
              </span>
            </nav>

            <h1 className="text-center text-3xl font-bold uppercase leading-[1.1] md:text-left md:text-[40px] lg:text-[48px]">
              <T p="prochistka-kanalizacii" o={4}>Прочистка канализации</T>
              <span className="block text-[#FDC700]">
                <T p="prochistka-kanalizacii" o={5}>в Алматы</T>
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-center text-lg leading-7 text-white/85 md:text-left">
              <T p="prochistka-kanalizacii" o={6}>Устранение засоров труб, раковин, унитазов
              и стояков. Подбираем способ прочистки
              и согласовываем стоимость заранее.</T>
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 md:mx-0 md:max-w-none md:flex-row md:flex-wrap md:items-center">
              <a
                href={`tel:+${SC.contacts.main.digits}`}
                className="drain-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
              >
                <T p="prochistka-kanalizacii" o={7}>Вызвать мастера</T>
              </a>

              <div className="relative shrink-0">
                <a
                  href={`https://wa.me/${SC.contacts.main.digits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100 md:w-auto"
                >
                  <T p="prochistka-kanalizacii" o={8}>Написать в WhatsApp</T>
                </a>

                {/* СКИДКА */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 hidden h-0 w-0 md:block"
                >
                  <div className="drain-discount absolute left-0 top-0">
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
              <Check text="Быстрый выезд" />
              <Check text="Свои мастера" />
              <Check text="Каждый день" />
            </ul>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={9}>Услуги прочистки канализации</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              <T p="prochistka-kanalizacii" o={10}>Устраняем засоры любой сложности</T>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0092B8]/40 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-lg font-bold leading-6 text-[#0092B8]">
                  <T p="prochistka-kanalizacii" o={11}>{service.title}</T>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <T p="prochistka-kanalizacii" o={12}>{service.text}</T>
                </p>
                <span className="mt-auto flex items-center gap-3 pt-4 text-sm font-semibold text-[#0092B8]">
                  <Arrow />
                  <T p="prochistka-kanalizacii" o={13}>Подробнее</T>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНЫ */}
      <section id="prices" className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={14}>Цены на прочистку канализации</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              <T p="prochistka-kanalizacii" o={15}>Примерная стоимость работ</T>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              <T p="prochistka-kanalizacii" o={16}>Точная стоимость зависит от сложности засора
              и способа прочистки. Цена согласовывается
              до начала работ.</T>
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {prices.map(([name, price]) => (
              <div
                key={name}
                className="flex flex-col gap-2 border-b border-slate-100 px-5 py-4 transition last:border-0 hover:bg-[#0092B8]/5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-7 md:py-5"
              >
                <span className="font-medium leading-7 text-slate-700">
                  <T p="prochistka-kanalizacii" o={17}>{name}</T>
                </span>
                <span className="shrink-0 font-bold text-[#0092B8]">
                  <T p="prochistka-kanalizacii" o={18}>{price}</T>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="about" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={19}>Почему выбирают нас</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              <T p="prochistka-kanalizacii" o={20}>Профессиональная прочистка канализации в Алматы</T>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-[#0092B8]/40 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0092B8]">
                  <T p="prochistka-kanalizacii" o={21}>{title}</T>
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  <T p="prochistka-kanalizacii" o={22}>{text}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕМ */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={23}>Как мы работаем</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              <T p="prochistka-kanalizacii" o={24}>От заявки до устранения засора</T>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDC700] text-lg font-bold text-[#171717]">
                  <T p="prochistka-kanalizacii" o={25}>{number}</T>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0092B8]">
                  <T p="prochistka-kanalizacii" o={26}>{title}</T>
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  <T p="prochistka-kanalizacii" o={27}>{text}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* НАШИ РАБОТЫ */}
      <section id="works" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold text-[#0092B8]">
            <T p="prochistka-kanalizacii" o={28}>Наши работы</T>
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
            <T p="prochistka-kanalizacii" o={29}>Примеры выполненных работ</T>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            <T p="prochistka-kanalizacii" o={30}>Примеры работ по устранению засоров
            и прочистке канализации в Алматы.</T>
          </p>
          <a
            href="/nashi-raboty"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800]"
          >
            <Arrow />
            <T p="prochistka-kanalizacii" o={31}>Посмотреть работы</T>
          </a>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={32}>Отзывы клиентов</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[48px]">
              <T p="prochistka-kanalizacii" o={33}>Что говорят о нашей работе</T>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([name, text]) => (
              <article
                key={name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#0092B8]/40 hover:shadow-lg"
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
                      <T p="prochistka-kanalizacii" o={34}>{name}</T>
                    </h3>
                    <p className="text-sm text-slate-500">
                      <T p="prochistka-kanalizacii" o={35}>Алматы</T>
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
                  <T p="prochistka-kanalizacii" o={36}>{text}</T>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
            <T p="prochistka-kanalizacii" o={37}>Часто задаваемые вопросы</T>
          </h2>

          <div className="mt-8 space-y-3">
            {questions.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition open:border-[#0092B8]/40 hover:border-[#0092B8]/40 md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0092B8] [&::-webkit-details-marker]:hidden">
                  <T p="prochistka-kanalizacii" o={38}>{question}</T>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDC700] text-2xl font-normal text-[#171717] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  <T p="prochistka-kanalizacii" o={39}>{answer}</T>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* РАЙОНЫ */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={40}>Выезд по городу</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              <T p="prochistka-kanalizacii" o={41}>Прочистка канализации во всех районах Алматы</T>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              <T p="prochistka-kanalizacii" o={42}>Выезжаем на устранение засоров
              и прочистку канализации по всему Алматы.</T>
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {districts.map((district) => (
              <div
                key={district}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-[#0092B8] transition hover:border-[#0092B8]/40 hover:shadow-sm"
              >
                {district}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-bold text-[#0092B8]">
              <T p="prochistka-kanalizacii" o={43}>Контакты</T>
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[44px]">
              <T p="prochistka-kanalizacii" o={44}>Вызвать мастера по прочистке канализации</T>
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  <T p="prochistka-kanalizacii" o={45}>Телефон</T>
                </p>
                <a
                  href={`tel:+${SC.contacts.main.digits}`}
                  className="mt-3 block text-xl font-bold text-[#0092B8]"
                >
                  {SC.contacts.main.display}
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${SC.contacts.main.digits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-3 font-bold text-[#0092B8]"
                >
                  <Arrow />
                  <T p="prochistka-kanalizacii" o={46}>Написать</T>
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  <T p="prochistka-kanalizacii" o={47}>Режим работы</T>
                </p>
                <p className="mt-3 text-lg font-bold text-[#0092B8]">
                  <T p="prochistka-kanalizacii" o={48}>Каждый день · Без выходных</T>
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  <T p="prochistka-kanalizacii" o={49}>Обслуживаем</T>
                </p>
                <p className="mt-3 text-lg font-bold text-[#0092B8]">
                  <T p="prochistka-kanalizacii" o={50}>Весь Алматы и пригород</T>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                src={imgSrc(SC, "https://www.google.com/maps?q=Алматы&output=embed")}
                className="h-[320px] w-full border-0"
                loading="lazy"
                title="Карта Алматы"
              />
            </div>
          </div>
        </div>
      </section>

      {/* СРОЧНЫЙ ВЫЗОВ */}
      <section className="bg-[#0092B8] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            <T p="prochistka-kanalizacii" o={51}>Срочный вызов мастера</T>
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-[54px]">
            <T p="prochistka-kanalizacii" o={52}>Засорилась канализация?</T>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            <T p="prochistka-kanalizacii" o={53}>Позвоните или напишите в WhatsApp.
            Уточним проблему и согласуем время
            выезда мастера по Алматы.</T>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:+${SC.contacts.main.digits}`}
              className="drain-call-shine inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg text-[#171717] transition hover:bg-[#eab800] sm:w-auto"
            >
              <T p="prochistka-kanalizacii" o={54}>Вызвать мастера</T>
            </a>

            <a
              href={`https://wa.me/${SC.contacts.main.digits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-8 py-4 text-lg text-[#292929] transition hover:bg-gray-100 sm:w-auto"
            >
              <T p="prochistka-kanalizacii" o={55}>Написать в WhatsApp</T>
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
  return withSeo("/prochistka-kanalizacii", pageMetadata);
}
