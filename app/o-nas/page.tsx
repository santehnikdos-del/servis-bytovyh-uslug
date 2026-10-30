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
  ["1000+ клиентов", "Работаем в квартирах, частных домах и офисах."],
  ["Гарантия до 3 лет", "Срок и условия гарантии зависят от выполненных работ."],
  ["Свои мастера", "Свой штат квалифицированных работников."],
  ["Цена заранее", "Согласовываем стоимость до начала работ."],
  ["Без выходных", "Принимаем заявки каждый день."],
];

export default function ONasPage() {
  return (
    <main className="min-h-screen bg-neutral-800 pb-20 text-white md:pb-0">
      <Header />

      <style>{`
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
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: aboutCallShine 2.5s linear infinite;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-call-shine::after {
            animation: none;
          }
        }
      `}</style>

      {/* МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:hidden before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[url('/hero-mark.png')] before:bg-center before:bg-no-repeat before:bg-[length:85%_auto] before:opacity-10 [&>*]:relative [&>*]:z-10">
        <nav
  aria-label="Хлебные крошки"
  className="mb-6 flex items-center gap-2 text-sm text-white/70"
>
  <a href="/" className="hover:text-[#FDC700]">Главная</a>
  <span aria-hidden="true">→</span>
  <span aria-current="page" className="text-white">О нас</span>
</nav>
        <h1 className="text-center text-3xl font-bold leading-tight text-white">
          О НАС
        </h1>

        <div className="mx-auto mt-6 flex w-fit max-w-full items-center justify-center gap-4">
          <ul className="flex flex-col gap-3 text-left">
            {[
              "Свой штат специалистов",
              "Более 1000 клиентов",
              "Работаем с 2013 года",
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
          Сервис бытовых услуг в Алматы. Своя команда мастеров,
          15 лет опыта и более 1000 клиентов.
          Работаем аккуратно, стоимость согласовываем заранее.
        </p>

        <a
          href="tel:+77771696969"
          className="about-call-shine mx-auto mt-10 flex max-w-sm items-center justify-center rounded-full bg-[#0092B8]/40 px-6 py-4 text-lg font-normal text-white"
        >
          Связаться с нами
        </a>
      </section>

      {/* ПЕРВЫЙ ЭКРАН — КОМПЬЮТЕР */}
      <section
        className="relative hidden min-h-[535px] overflow-hidden bg-no-repeat md:block md:bg-[length:100%_auto]"
        style={{
          backgroundImage: "url('/master.jpg')",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[535px] max-w-7xl items-start px-6 pb-8 pt-8">
   
          <div className="max-w-5xl">
  <nav
    aria-label="Хлебные крошшки"
    className="mb-6 flex w-full items-center gap-2 text-sm text-white/70"
  >
    <a href="/" className="hover:text-[#FDC700]">
      Главная
    </a>
    <span aria-hidden="true">→</span>
    <span aria-current="page" className="text-white">
      О нас
    </span>
  </nav>

  <p className="font-bold text-yellow-400">
    Сервис бытовых услуг в Алматы
  </p>

            <h1 className="mt-0 text-5xl font-black leading-tight text-white md:text-7xl">
              О нас
            </h1>

            <p className="ml-25 mt-10 max-w-2xl text-xl leading-8 text-slate-100">
              Своя команда квалифицированных мастеров.
              Выполняем ремонт и монтаж сантехники в квартирах,
              домах и офисах. Работаем аккуратно и по договорённости.
            </p>

            <div className="ml-50 mt-13 flex flex-wrap gap-9">
              <a
                href="tel:+77771696969"
                className="rounded-full bg-[#FDC700] px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-[#e8b700]"
              >
                📞 Позвонить
              </a>

              <a
                href="https://wa.me/77771696969"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0092B8] px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#007a99]"
              >
                WhatsApp
              </a>
            </div>

            <div className="mx-auto mt-15 grid w-full max-w-[1200px] grid-cols-4 gap-4 px-2 text-white">
              {[
                ["/clients.png", "1000+", "довольных клиентов"],
                ["/time.png", "15 лет", "опыта работы"],
                ["/guarantee.png", "до 3 лет", "гарантия на работы"],
                ["/calendar.png", "7 дней", "работаем без выходных"],
              ].map(([icon, number, caption]) => (
                <div
                  key={icon}
                  className="group relative flex min-w-0 items-center justify-center gap-3 px-2 pb-5"
                >
                  <img
                    src={icon}
                    alt=""
                    className="h-14 w-14 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="origin-left transition-transform duration-300 group-hover:scale-110">
                    <div className="whitespace-nowrap text-3xl font-black text-[#FDC700]">
                      {number}
                    </div>
                    <div className="text-sm">{caption}</div>
                  </div>

                  <span className="absolute bottom-4 left-[15%] h-1 w-[70%] origin-center scale-x-50 rounded-full bg-[#FDC700] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* О КОМАНДЕ */}
      <section className="bg-white px-5 py-12 text-[#171717] md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-3 h-1 w-20 rounded-full bg-[#FDC700]" />

          <p className="text-center text-sm font-bold uppercase tracking-wider text-[#0092B8]">
            Сервис бытовых услуг
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold leading-tight md:text-4xl">
            Мастера, которым можно доверить
            <br />
            <span className="text-[#0092B8]">заботу о вашем доме</span>
          </h2>

          <p className="mt-6 text-center text-base leading-relaxed text-slate-700 md:text-lg">
            Мы — команда мастеров по бытовым услугам в Алматы.
            Наше основное направление — сантехнические работы:
            от замены смесителя до монтажа инженерных систем.
            Помогаем владельцам квартир, частных домов и коммерческих
            помещений.
          </p>

          <p className="mt-3 text-center text-sm leading-relaxed text-slate-600 md:text-base">
            Перед началом работы объясняем, что необходимо сделать,
            согласовываем стоимость и порядок выполнения.
            Принимаем наличную и безналичную оплату, предоставляем документы.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href="/nashi-raboty"
              className="rounded-full bg-[#0092B8] px-6 py-4 text-center font-bold text-white"
            >
              Посмотреть работы →
            </a>
            <a
              href="/otzyvy"
              className="rounded-full bg-[#FDC700] px-6 py-4 text-center font-bold text-[#171717]"
            >
              Читать отзывы →
            </a>
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="bg-[#333333] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[#FDC700]" />

          <p className="text-center font-bold text-[#0092B8]">
            Почему выбирают нас
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            Опыт, аккуратность и понятные условия
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FDC700] hover:bg-white/10 hover:shadow-xl"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-[#FDC700]" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* НАПРАВЛЕНИЯ */}
      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[#FDC700]" />

          <p className="text-center font-bold text-[#0092B8]">
            Наши направления
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            Чем можем помочь
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Сантехнические работы",
                "Установка и ремонт сантехники, устранение протечек.",
                "/santehnik",
              ],
              [
                "Водоснабжение",
                "Монтаж, разводка и замена труб водоснабжения.",
                "/zamena-trub",
              ],
              [
                "Прочистка канализации",
                "Устранение засоров в квартирах, домах и офисах.",
                "/prochistka-kanalizacii",
              ],
            ].map(([title, text, href]) => (
              <a
                key={title}
                href={href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FDC700] hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FDC700]">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕМ */}
      <section className="bg-white py-12 text-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[#FDC700]" />

          <p className="text-center font-bold text-[#0092B8]">
            Как мы работаем
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            От обращения до готового результата
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Заявка", "Вы звоните или пишете нам в WhatsApp."],
              ["02", "Обсуждение", "Уточняем задачу и согласуем время выезда."],
              ["03", "Оценка и работа", "Мастер проводит осмотр, согласует цену и выполняет работу."],
              ["04", "Проверка", "Проверяем результат и объясняем условия гарантии."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FDC700] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDC700] text-xl font-black">
                  {number}
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-[#333333] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[#FDC700]" />

          <p className="font-bold text-[#0092B8]">
            Весь Алматы и пригород
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Обсудим вашу задачу
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Позвоните или напишите в WhatsApp.
            Расскажите, какая помощь нужна, — уточним детали
            и согласуем время приезда мастера.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+77771696969"
              className="rounded-full bg-[#FDC700] px-7 py-4 text-lg font-bold text-slate-950"
            >
              📞 Позвонить
            </a>

            <a
              href="https://wa.me/77771696969"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0092B8] px-7 py-4 text-lg font-bold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}