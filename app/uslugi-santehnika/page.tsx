import Header from "../Header";
import Footer from "../Footer";

export const metadata = {
  title: "Услуги сантехника в Алматы | Сервис бытовых услуг",
  description:
    "Услуги сантехника в Алматы: установка унитаза, смесителя, раковины, ванны, бойлера, замена труб и прочистка канализации.",
};

const services = [
  {
    title: "Установка унитаза",
    href: "/ustanovka-unitaza",
    description:
      "Установка и замена унитазов. Демонтаж старого оборудования, подключение к воде и канализации.",
  },
  {
    title: "Установка смесителя",
    href: "/ustanovka-smesitelya",
    description:
      "Установка и замена смесителей на кухне и в ванной. Подключение и проверка соединений на протечки.",
  },
  {
    title: "Установка раковины",
    href: "/ustanovka-rakoviny",
    description:
      "Монтаж раковин, моек и тумб. Установка смесителя, сифона и подключение коммуникаций.",
  },
  {
    title: "Прочистка канализации",
    href: "/prochistka-kanalizacii",
    description:
      "Устранение засоров канализации в квартирах, частных домах и офисах. Механическая прочистка труб.",
  },
  {
    title: "Установка ванны",
    href: "/ustanovka-vanny",
    description:
      "Установка акриловых, стальных и чугунных ванн. Подключение сифона, смесителя и канализации.",
  },
  {
    title: "Установка душевой кабины",
    href: "/ustanovka-dushevoy-kabiny",
    description:
      "Сборка и установка душевых кабин. Подключение воды и канализации, проверка герметичности.",
  },
  {
    title: "Установка бойлера",
    href: "/ustanovka-boylera",
    description:
      "Монтаж и подключение бойлеров и водонагревателей. Проверка соединений и правильности работы.",
  },
  {
    title: "Замена труб",
    href: "/zamena-trub",
    description:
      "Замена и монтаж труб водоснабжения, канализации и отопления в квартирах, домах и офисах.",
  },
];

export default function UslugiSantehnikaPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Header
  phone="77771696969"
  displayPhone="+7 777 169 69 69"
/>

     {/* ================= МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН ================= */}
<section className="bg-[#303030] px-6 py-8 text-white md:hidden">
  <h1 className="text-center text-3xl font-bold text-yellow-400">
    Услуги сантехника в Алматы
  </h1>

  <p className="mt-4 text-center text-lg font-bold text-white">
    Установка, ремонт и замена сантехники. Монтаж труб,
    устранение протечек и прочистка канализации.
  </p>

  <div className="mt-10 grid grid-cols-3 gap-2 text-center">
    <div className="flex flex-col items-center">
      <img
        src="/banner-fast.png"
        alt="Быстрый выезд"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base">
        Быстрый<br />выезд
      </p>
    </div>

    <div className="flex flex-col items-center border-x border-white/20">
      <img
        src="/banner-garantiya.png"
        alt="Гарантия до 3 лет"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base">
        Гарантия<br />до 3 лет
      </p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="/banner-everyday.png"
        alt="Работаем каждый день"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base">
        Работаем<br />каждый день
      </p>
    </div>
  </div>
</section>

{/* ================= ПЕРВЫЙ ЭКРАН — КОМПЬЮТЕР ================= */}
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

      <p className="font-bold text-yellow-400">
        Сантехнические работы по Алматы
      </p>

      <h1 className="mt-0 text-5xl font-black leading-tight text-white md:text-7xl">
        Услуги сантехника в Алматы
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
        Установка, ремонт и замена сантехнического оборудования,
        монтаж труб, устранение протечек и прочистка канализации.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="tel:+77771696969"
          className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 shadow-xl"
        >
          📞 Позвонить
        </a>

        <a
          href="https://wa.me/77771696969"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-8 py-4 text-lg font-black text-white shadow-xl"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section> 

      {/* СПИСОК УСЛУГ */}
      <section className="bg-slate-100 py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Все услуги
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Выберите нужную работу
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-yellow-400" />

                <h3 className="text-xl font-black">
                  {service.title}
                </h3>

                <p className="mt-3 leading-6 text-slate-600">
                  {service.description}
                </p>

                <p className="mt-auto pt-6 font-bold text-yellow-600">
                  Подробнее →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ПОЧЕМУ ВЫБИРАЮТ НАС */}
<section id="about" className="bg-sky-800 py-20 text-white">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    <p className="font-bold text-yellow-400">
      Почему выбирают нас
    </p>

    <h2 className="mt-2 text-3xl font-black md:text-4xl">
      Надёжный сантехнический сервис в Алматы
    </h2>

    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

      {[
        ["15+ лет", "Опыт работы"],
        ["30–45 минут", "Выезд мастера"],
        ["До 3 лет", "Гарантия"],
        ["Каждый день", "Без выходных"],
      ].map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/10 hover:shadow-xl"
        >
          <div className="mb-4 h-1 w-10 rounded-full bg-yellow-400" />

          <p className="text-xl font-black">
            {title}
          </p>

          <p className="mt-1 text-sm text-slate-300">
            {text}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


{/* СТОИМОСТЬ УСЛУГ */}
<section className="bg-slate-100 py-16">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    <div className="rounded-3xl bg-white p-7 shadow-sm md:p-10">

      <p className="font-bold text-yellow-600">
        Стоимость работ
      </p>

      <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
        Цены на услуги сантехника
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        Базовая стоимость основных сантехнических работ.
        Итоговая цена зависит от объёма и сложности работы
        и согласовывается с мастером до начала выполнения.
      </p>

      <a
        href="/price"
       className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
      >
        Смотреть цены →
      </a>

    </div>
  </div>
</section>


{/* FAQ */}
<section className="bg-white py-16">
  <div className="mx-auto max-w-4xl px-4 md:px-6">

    <p className="font-bold text-yellow-600">
      Частые вопросы
    </p>

    <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
      Вопросы об услугах сантехника
    </h2>

    <div className="mt-8 space-y-3">

      {[
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
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group overflow-hidden rounded-2xl border border-transparent bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-slate-950">
            {question}

            <span className="ml-4 text-2xl text-yellow-500 transition group-open:rotate-45">
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

      {/* НИЖНИЙ БЛОК */}
      <section className="bg-sky-800 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="font-bold text-yellow-400">
              Не нашли нужную услугу?
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Свяжитесь с мастером
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
              Расскажите, какая сантехническая работа вам требуется.
              Подскажем возможное решение и согласуем удобное время выезда.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="tel:+77771696969"
                className="rounded-full bg-yellow-400 px-7 py-4 font-black text-black transition hover:bg-yellow-300"
              >
                📞 Позвонить
              </a>

              <a
                href="https://wa.me/77771696969"
                className="rounded-full bg-green-500 px-7 py-4 font-black text-white transition hover:bg-green-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ================= РАЙОНЫ ================= */}
      <section className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Выезд по городу
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Сантехник во всех районах Алматы
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Выезжаем на сантехнические работы по всему Алматы.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Алатауский район",
              "Алмалинский район",
              "Ауэзовский район",
              "Бостандыкский район",
              "Жетысуский район",
              "Медеуский район",
              "Наурызбайский район",
              "Турксибский район",
            ].map((district) => (
              <div
                key={district}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
              >
                📍 {district}
              </div>
            ))}
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