import Image from "next/image";
import Header from "./Header";
import Rayony from "./Rayony";
import HomeReviews from "./HomeReviews";

export const metadata = {
  title: "Сервис бытовых услуг в Алматы | Сантехник, электрик",
  description:
    "Сантехник, электрик, прочистка канализации и другие бытовые услуги в Алматы. Быстрый выезд мастера, гарантия на выполненные работы.",
  alternates: {
    canonical: "https://www.home-services.kz/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* ПЕРВЫЙ ЭКРАН — ОДНА СЕКЦИЯ ДЛЯ ТЕЛЕФОНА И КОМПЬЮТЕРА */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:h-[490px] md:bg-[#281E12] md:px-0 md:py-0">
        {/* ТЕЛЕФОН: ВОДЯНОЙ ЗНАК */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-10 md:hidden"
        >
          <Image
            src="/hero-mark.png"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="85vw"
            className="object-contain p-[7.5%]"
          />
        </div>

        {/* КОМПЬЮТЕР: ФОТО СПРАВА */}
        <div className="absolute inset-y-0 right-0 hidden w-[53%] md:block">
          <Image
            src="/banner-master.jpg"
            alt="Мастер сервиса бытовых услуг"
            fill
            sizes="(min-width: 768px) 53vw, 1px"
            className="object-cover object-[60%_center]"
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

        <div className="relative z-10 md:mx-auto md:flex md:h-full md:max-w-7xl md:items-center md:px-6">
          <div className="md:relative md:w-[47%]">
            {/* ЕДИНСТВЕННЫЙ H1 */}
            <h1 className="text-center text-3xl font-bold uppercase leading-tight text-white md:relative md:-top-7 md:text-left md:text-5xl md:leading-[1.05] lg:text-[64px]">
              Сервис{" "}
              <span className="md:block md:text-[#FDC700]">
                бытовых услуг
              </span>
            </h1>

            {/* ТОЛЬКО ТЕЛЕФОН */}
            <div className="md:hidden">
              <div className="mx-auto mt-6 flex w-fit max-w-full items-center justify-center">
                <ul className="flex flex-col gap-3 text-left">
                  {[
                    "Быстрый выезд",
                    "Гарантия до 3 лет",
                    "Работаем 24/7",
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
                Услуги сантехника и электрика в Алматы. Ремонт, установка,
                прочистка канализации и срочный вызов мастера.
              </p>

              <a
                href="tel:+77771696969"
                className="home-call-button-shine mx-auto mt-10 flex max-w-sm items-center justify-center rounded-full bg-[#0092B8]/40 px-6 py-4 text-lg font-normal text-white"
              >
                Вызвать мастера
              </a>
            </div>

            {/* ТОЛЬКО КОМПЬЮТЕР */}
            <div className="hidden md:block">
              <p className="mt-4 text-lg leading-7 text-white/85">
                <span className="block whitespace-nowrap">
                  Сантехник, электрик и другие бытовые услуги в Алматы.
                </span>
                <span className="block whitespace-nowrap">
                  Ремонт, установка и прочистка канализации.
                </span>
              </p>

              <div className="mt-8 flex gap-3">
                <a
                  href="tel:+77771696969"
                  className="home-call-button-shine inline-flex h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-[#0092B8]/80 px-6 text-xl font-normal text-white transition hover:bg-[#007D9E]"
                >
                  Вызвать мастера
                </a>

                <div className="relative shrink-0">
                  <a
                    href="https://wa.me/77771696969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-white px-6 text-xl font-normal text-[#292929] transition hover:bg-gray-100"
                  >
                    Написать в WhatsApp
                  </a>

                  {/* КОЛЬЦО И БИРКА */}
                  <div className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 h-0 w-0">
                    <div className="home-discount-hanging absolute left-0 top-0">
                      <img
                        src="/discount-15.png"
                        alt="Скидка 15% на все услуги"
                        loading="lazy"
                        decoding="async"
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

              <ul className="mt-10 flex w-max items-center gap-5 text-base">
                {[
                  "Быстрый выезд",
                  "Гарантия до 3 лет",
                  "Работаем каждый день",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex shrink-0 items-center gap-2 whitespace-nowrap"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="home-check-icon h-7 w-7 shrink-0"
                    >
                      <path
                        fill="#0092B8"
                        d="M12 1 15 3 19 3 20 7 23 10 21 14 21 18 17 20 14 23 10 21 6 21 4 17 1 14 3 10 3 6 7 4Z"
                      />
                      <path
                        className="home-check-line"
                        pathLength="1"
                        d="m7 12 3 3 7-7"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[#FDC700] md:hidden" />

            <h2 className="mt-0 text-3xl font-bold leading-tight text-[#0092B8] md:text-[54px] md:font-black">
              <span className="md:hidden">
                Какая помощь вам нужна?
              </span>
              <span className="hidden md:inline">
                Сервис бытовых услуг в Алматы
              </span>
            </h2>
          </div>

          {/* УСЛУГИ — МОБИЛЬНАЯ ВЕРСИЯ */}
          <div className="mt-6 space-y-4 md:hidden">
            {[
              {
                icon: "/gazovyi.png",
                title: "Сантехник",
                text: "Установка и ремонт сантехники, устранение протечек.",
                href: "/santehnik",
              },
              {
                icon: "/electrik.png",
                title: "Электрик",
                text: "Монтаж и ремонт электрики, замена розеток и выключателей.",
                href: "/elektrik",
              },
              {
                icon: "/prochistka.png",
                title: "Прочистка канализации",
                text: "Устранение засоров в квартирах, домах и офисах.",
                href: "/prochistka-kanalizacii",
              },
              {
                icon: "/plotnik.png",
                title: "Плотник",
                text: "Изготовление и ремонт деревянных конструкций.",
                href: "/plotnik",
              },
            ].map(({ icon, title, text, href }) => (
              <a
                key={title}
                href={href}
                className="grid grid-cols-[60px_minmax(0,1fr)] items-center gap-4"
              >
                <Image
                  src={icon}
                  alt=""
                  width={60}
                  height={60}
                  sizes="60px"
                  className="h-[60px] w-[60px] object-contain"
                />

                <div>
                  <h3 className="text-xl font-bold leading-tight text-[#0092B8] underline decoration-1 underline-offset-4">
                    {title}
                  </h3>

                  <p className="mt-1 text-base leading-5 text-slate-700">
                    {text}
                  </p>

                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-[#0092B8]">
                    Подробнее
                    <span className="text-xs" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* УСЛУГИ — КОМПЬЮТЕР */}
          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "/gazovyi.png",
                title: "Сантехник",
                text: "Все виды сантехнических работ любой сложности.",
                href: "/santehnik",
              },
              {
                icon: "/electrik.png",
                title: "Электрик",
                text: "Монтаж и ремонт электрики любой сложности.",
                href: "/elektrik",
              },
              {
                icon: "/prochistka.png",
                title: "Прочистка канализации",
                text: "Прочистка засоров любой сложности. Быстро и чисто.",
                href: "/prochistka-kanalizacii",
              },
              {
                icon: "/plotnik.png",
                title: "Плотник",
                text: "Изготовление и ремонт деревянных конструкций.",
                href: "/plotnik",
              },
            ].map(({ icon, title, text, href }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={icon}
                  alt={title}
                  width={80}
                  height={80}
                  sizes="80px"
                  className="mx-auto h-20 w-20 object-contain"
                />

                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-base leading-6 text-slate-600">
                  {text}
                </p>

                <a
                  href={href}
                  className="mt-3 inline-block text-sm font-medium text-[#0092B8] transition hover:underline"
                >
                  Подробнее →
                </a>
              </div>
            ))}
          </div>

          {/* КНОПКИ — МОБИЛЬНАЯ ВЕРСИЯ */}
          <div className="mt-8 grid gap-3 md:hidden">
            <a
              href="/nashi-raboty"
              className="rounded-full bg-[#0092B8] px-6 py-4 text-center font-bold text-white"
            >
              Наши работы →
            </a>

            <a
              href="/otzyvy"
              className="rounded-full bg-[#FDC700] px-6 py-4 text-center font-bold text-[#171717]"
            >
              Читать отзывы →
            </a>
          </div>

          <p className="mt-8 w-full text-center text-xl leading-8 text-slate-700">
            <strong>Квалифицированные мастера</strong> с большим опытом
            работы. Высокий уровень сервиса и профессиональный подход к
            каждому заказу. Работаем аккуратно и ответственно.
            Предоставляем необходимые документы и{" "}
            <strong>гарантию на выполненные работы</strong>. Высокий
            рейтинг и доверие клиентов.
          </p>

          {/* ПОКАЗАТЕЛИ */}
          <div className="mt-10 rounded-xl bg-[#F7F8F8] px-5 py-5 md:bg-[#0092B8] md:px-6 md:py-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                ["/clients.png", "1000+", "довольных клиентов"],
                ["/time.png", "30–45 мин", "срочный выезд"],
                ["/guarantee.png", "до 3 лет", "гарантия на работы"],
                ["/calendar.png", "7 дней", "работаем без выходных"],
              ].map(([icon, number, caption]) => (
                <div
                  key={icon}
                  className="md:flex md:items-center md:justify-center md:gap-4"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={56}
                    height={56}
                    sizes="56px"
                    className="hidden h-14 w-14 object-contain md:block"
                  />

                  <div>
                    <div className="text-4xl font-semibold leading-tight text-[#0092B8] md:text-3xl md:font-black md:text-white">
                      {number}
                    </div>

                    <p className="mt-1 text-sm leading-5 text-slate-700 md:mt-0 md:text-white">
                      {caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* НАШИ ПРЕИМУЩЕСТВА */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-[#0092B8] md:text-[54px]">
              Наши преимущества
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "/professional.png",
                title: "Опытные мастера",
                text: "Квалифицированные специалисты с большим опытом работы.",
              },
              {
                icon: "/fast-vyezd.png",
                title: "Быстрый выезд",
                text: "При срочном вызове мастер может приехать в течение 30–45 минут.",
              },
              {
                icon: "/garantiya.png",
                title: "Гарантия на работы",
                text: "Предоставляем гарантию на выполненные работы.",
              },
              {
                icon: "/almaty.png",
                title: "Работаем по всему Алматы",
                text: "Выезжаем во все районы города и ближайший пригород.",
              },
              {
                icon: "/chistota.png",
                title: "Чистота после работы",
                text: "Работаем аккуратно и оставляем после себя порядок.",
              },
              {
                icon: "/economiya-vremeni.png",
                title: "Экономия времени",
                text: "Быстро определяем неисправность и приступаем к работе.",
              },
              {
                icon: "/bez-vyhodnyh.png",
                title: "Работаем без выходных",
                text: "Принимаем заявки ежедневно, включая выходные и праздничные дни.",
              },
              {
                icon: "/ceny.png",
                title: "Доступные цены",
                text: "Стоимость работ согласовываем с клиентом до начала выполнения.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-slate-100 bg-white px-6 py-3 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400" />

                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  sizes="80px"
                  className="mx-auto h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-2 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <div className="mx-auto my-2 h-1 w-10 rounded-full bg-[#0092B8]" />

                <p className="leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeReviews />

      {/* ПРИЗЫВ К ДЕЙСТВИЮ */}
      <section id="contacts" className="bg-[#0092B8] py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            Сервис бытовых услуг
          </p>

          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Нужен мастер?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
            Позвоните или напишите нам в WhatsApp. Уточним задачу,
            согласуем стоимость и удобное время выезда мастера.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+77771696969"
              className="home-call-button-shine inline-flex h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-[#007D9E] px-6 text-xl font-normal text-white ring-1 ring-white/30 transition hover:bg-[#007D9E]"
            >
              Вызвать мастера
            </a>

            <div className="relative shrink-0">
              <a
                href="https://wa.me/77771696969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-white px-6 text-xl font-normal text-[#292929] transition hover:bg-gray-100"
              >
                Написать в WhatsApp
              </a>

              {/* КОЛЬЦО И БИРКА */}
              <div className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 hidden h-0 w-0 md:block">
                <div className="home-discount-hanging absolute left-0 top-0">
                  <img
                    src="/discount-15.png"
                    alt="Скидка 15% на все услуги"
                    loading="lazy"
                    decoding="async"
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

          <p className="mt-6 text-sm text-white/80">
            Работаем ежедневно по Алматы
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-black text-slate-950 md:text-4xl">
            Часто задаваемые вопросы
          </h2>

          <div className="mt-10 space-y-3">
            {[
              {
                question: "Как вызвать мастера?",
                answer:
                  "Позвоните нам или напишите в WhatsApp. Расскажите, какая услуга нужна, и мы согласуем удобное время выезда мастера.",
              },
              {
                question: "Сколько будет стоить работа?",
                answer:
                  "Стоимость зависит от вида и сложности работ. Мастер уточняет объём работы и согласовывает стоимость до начала выполнения.",
              },
              {
                question: "Как быстро может приехать мастер?",
                answer:
                  "При срочном вызове мастер может приехать по Алматы примерно в течение 30–45 минут. Также можно выбрать удобное время заранее.",
              },
              {
                question:
                  "Есть ли у мастера необходимые инструменты и материалы?",
                answer:
                  "Мастера приезжают с профессиональным инструментом. Необходимые материалы и комплектующие можно согласовать перед выездом или приобрести после диагностики.",
              },
            ].map(({ question, answer }) => (
              <details
                key={question}
                className="group cursor-pointer rounded-xl border border-transparent bg-slate-50 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-slate-900">
                  {question}
                  <span className="text-3xl font-light text-blue-600 transition group-open:rotate-45">
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

      <Rayony />

      {/* FOOTER */}
      <footer className="bg-[#292929] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-14">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-y-10">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-black text-yellow-400">
                Сервис бытовых услуг
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
                Выезд мастеров по Алматы. Сантехника, электрика,
                прочистка канализации и другие бытовые услуги.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-black text-yellow-400">
                Наши услуги
              </h3>

              <div className="flex flex-col gap-3 text-sm font-semibold">
                <a href="/santehnik" className="hover:text-yellow-400">
                  Сантехника
                </a>
                <a href="/elektrik" className="hover:text-yellow-400">
                  Электрика
                </a>
                <a
                  href="/prochistka-kanalizacii"
                  className="hover:text-yellow-400"
                >
                  Прочистка
                </a>
                <a
                  href="/uslugi-santehnika"
                  className="hover:text-yellow-400"
                >
                  Все услуги
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-black text-yellow-400">
                Информация
              </h3>

              <div className="flex flex-col gap-3 text-sm font-semibold">
                <a href="/price" className="hover:text-yellow-400">
                  Цены
                </a>
                <a
                  href="/nashi-raboty"
                  className="hover:text-yellow-400"
                >
                  Наши работы
                </a>
                <a href="/otzyvy" className="hover:text-yellow-400">
                  Отзывы
                </a>
                <a href="#contacts" className="hover:text-yellow-400">
                  Контакты
                </a>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-3 text-lg font-black text-yellow-400">
                Связаться с нами
              </h3>

              <p className="text-sm text-gray-400">Ежедневно</p>

              <a
                href="tel:+77771696969"
                className="mt-1 block text-2xl font-black text-white"
              >
                +7 777 169 69 69
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-600 pt-6">
            <div className="flex flex-col gap-2 text-xs text-gray-400 md:flex-row md:items-center md:justify-between md:text-sm">
              <p>© 2013–2026 Сервис бытовых услуг. Алматы.</p>
              <p>Сантехник • Электрик • Прочистка канализации</p>
            </div>
          </div>
        </div>
      </footer>

      {/* АНИМАЦИИ */}
      <style>{`
        @keyframes homeCallButtonShine {
          from {
            transform: translateX(0) skewX(-25deg);
          }
          to {
            transform: translateX(1800%) skewX(-25deg);
          }
        }

        .home-call-button-shine {
          position: relative;
          overflow: hidden;
        }

        .home-call-button-shine::after {
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
          animation: homeCallButtonShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes homeDiscountSwing {
          0%,
          100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .home-discount-hanging {
          transform-origin: 0 0;
          animation: homeDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes homeCheckAppear {
          from {
            opacity: 0;
            transform: scale(0.75);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes homeCheckDraw {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .home-check-icon {
          animation: homeCheckAppear 0.45s ease-out both;
        }

        .home-check-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: homeCheckDraw 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-call-button-shine::after,
          .home-discount-hanging,
          .home-check-icon,
          .home-check-line {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}