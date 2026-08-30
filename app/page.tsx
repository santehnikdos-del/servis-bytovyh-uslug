import Header from "./Header";

import HomeReviews from "./HomeReviews";
export const metadata = {
  title: "Сервис бытовых услуг в Алматы | Сантехник, электрик",
  description:
    "Сантехник, электрик, прочистка канализации и другие бытовые услуги в Алматы. Быстрый выезд мастера, гарантия на выполненные работы.",

  alternates: {
    canonical: "https://home-services.kz/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

{/* ================= МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН ================= */}
<section className="bg-[#303030] px-6 py-8 text-white md:hidden">

  <h1 className="text-3xl font-bold text-yellow-400 text-center">
  Сервис бытовых услуг
</h1>

  <p className="mt-4 text-lg font-bold text-white text-center">
  Услуги сантехника и электрика. Мелкосрочные вызовы и другие бытовые услуги в Алматы.
</p>


  <div className="mt-10 grid grid-cols-3 gap-2 text-center">

  {/* БЫСТРЫЙ ВЫЕЗД */}
  <div className="flex flex-col items-center">
    <img
      src="/banner-fast.png"
      alt="Быстрый выезд"
      className="h-12 w-12 object-contain"
    />
    <p className="mt-3 text-base text-white">
      Быстрый<br />выезд
    </p>
  </div>

  {/* ГАРАНТИЯ */}
  <div className="flex flex-col items-center border-x border-white/20">
    <img
      src="/banner-garantiya.png"
      alt="Гарантия до 3 лет"
      className="h-12 w-12 object-contain"
    />
    <p className="mt-3 text-base text-white">
      Гарантия<br />до 3 лет
    </p>
    
  </div>

  {/* РАБОТАЕМ КАЖДЫЙ ДЕНЬ */}
  <div className="flex flex-col items-center">
    <img
     src="/banner-everyday.png"
      alt="Работаем каждый день"
      className="h-12 w-12 object-contain"
    />
    <p className="mt-3 text-base text-white">
      Работаем<br />каждый день
    </p>
    
  </div>
  

</div>
<p className="mt-5 px-5 text-center text-base leading-6 text-white">
  В штате — квалифицированные мастера. Высокий уровень сервиса.
  Предоставляем документы. Высокий рейтинг и доверие клиентов.
</p>

</section>


      {/* ================= ПЕРВЫЙ ЭКРАН ================= */}
<section
  className="hidden md:block relative min-h-[535px] overflow-hidden bg-[length:170%_auto] bg-[position:220%_0] bg-no-repeat md:bg-[length:100%_auto] md:bg-[position:center_0]"
  style={{
    backgroundImage: "url('/master.jpg')",
    backgroundPosition: "center 0px",
  }}
>
  {/* ЗАТЕМНЕНИЕ */}
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10 mx-auto flex min-h-[535px] max-w-7xl items-start px-6 pb-8 pt-8">
    <div className="max-w-5xl">

      <p className="font-bold text-yellow-400">
        Выезд мастера по Алматы
      </p>

      <h1 className="mt-0 text-5xl font-black leading-tight text-white md:text-7xl">
        Сервис бытовых услуг
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
        Сантехник, электрик и другие бытовые услуги в Алматы.
        Ремонт, установка, прочистка канализации и срочный выезд мастера.
      </p>

      {/* КНОПКИ */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="tel:+77771696969"
          className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-yellow-300"
        >
          📞 Позвонить
        </a>

        <a
          href="https://wa.me/77771696969"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-600"
        >
          WhatsApp
        </a>
      </div>

      {/* ПРЕИМУЩЕСТВА */}
      <div className="mt-5 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">
        {[
  ["/banner-everyday.png", "Работаем", "каждый день"],
  ["/banner-fast.png", "Быстрый", "выезд"],
  ["/banner-garantiya.png", "Гарантия", "до 3 лет"],
  ["/banner-master.png", "Опытные", "мастера"],
].map(([icon, line1, line2]) => (
          <div
            key={line1}
            className="flex flex-col items-center justify-center text-center md:border-r md:border-white/20 md:last:border-r-0"
          >
            <div className="mb-4 flex h-14 items-center justify-center">
  <img
    src={icon}
    alt=""
    className="h-12 w-12 object-contain"
  />
</div>
            <p className="text-lg font-black text-white">
              {line1}
              <br />
              {line2}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      <section id="services" className="bg-white py-16">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <p className="font-bold uppercase text-blue-700">
        Наши услуги
      </p>

      <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-5xl">
        Сервис бытовых услуг в Алматы
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded bg-blue-700" />
    </div>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* САНТЕХНИК */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="/gazovyi.png"
          alt="Сантехник"
          className="mx-auto h-20 w-20 object-contain"
        />

       <h3 className="mt-3 text-2xl font-black text-slate-950">
          Сантехник
        </h3>

        <p className="mt-2 text-base leading-6 text-slate-600">
          Все виды сантехнических работ любой сложности.
        </p>

        <a
          href="/santehnik"
          className="mt-6 inline-block rounded-xl border border-blue-700 px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ЭЛЕКТРИК */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="/electrik.png"
          alt="Электрик"
          className="mx-auto h-20 w-20 object-contain"
        />

        <h3 className="mt-3 text-2xl font-black text-slate-950">
          Электрик
        </h3>

       <p className="mt-2 text-base leading-6 text-slate-600">
          Монтаж и ремонт электрики любой сложности.
        </p>

        <a
          href="/elektrik"
          className="mt-6 inline-block rounded-xl border border-blue-700 px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ПРОЧИСТКА */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="/prochistka.png"
          alt="Прочистка канализации"
          className="mx-auto h-20 w-20 object-contain"
        />

       <h3 className="mt-3 text-2xl font-black text-slate-950">
          Прочистка канализации
        </h3>

        <p className="mt-2 text-base leading-6 text-slate-600">
          Прочистка засоров любой сложности. Быстро и чисто.
        </p>

        <a
          href="/prochistka-kanalizacii"
          className="mt-6 inline-block rounded-xl border border-blue-700 px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ПЛОТНИК */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src="/plotnik.png"
          alt="Плотник"
          className="mx-auto h-20 w-20 object-contain"
        />

        <h3 className="mt-3 text-2xl font-black text-slate-950">
          Плотник
        </h3>

        <p className="mt-2 text-base leading-6 text-slate-600">
          Изготовление и ремонт деревянных конструкций.
        </p>

        <a
          href="#"
          className="mt-6 inline-block rounded-xl border border-blue-700 px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
        >
          Подробнее →
        </a>
      </div>
   

    </div>
   <p className="mt-8 w-full text-center text-xl leading-8 text-slate-700">
  <strong>Квалифицированные мастера</strong> с большим опытом работы.
  Высокий уровень сервиса и профессиональный подход к каждому заказу.
  Работаем аккуратно и ответственно. Предоставляем необходимые документы
  и <strong>гарантию на выполненные работы</strong>.
  Высокий рейтинг и доверие клиентов.
</p>

   {/* НИЖНЯЯ ПОЛОСА */}
<div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 rounded-2xl bg-blue-800 px-4 py-6 text-white md:grid-cols-4 md:px-6">

  {/* КЛИЕНТЫ */}
  <div className="flex items-center justify-center gap-4">
    <img
      src="/clients.png"
      alt="Довольные клиенты"
      className="h-14 w-14 object-contain"
    />
    <div>
      <div className="text-xl font-black md:text-3xl">1000+</div>
      <div className="text-sm">довольных клиентов</div>
    </div>
  </div>

  {/* ВЫЕЗД */}
  <div className="flex items-center justify-center gap-4">
    <img
      src="/time.png"
      alt="Срочный выезд"
      className="h-14 w-14 object-contain"
    />
    <div>
      <div className="text-[20px] font-black leading-tight md:text-3xl">
  30–45 мин
</div>
      <div className="text-sm">срочный выезд</div>
    </div>
  </div>

  {/* ГАРАНТИЯ */}
  <div className="flex items-center justify-center gap-4">
    <img
      src="/guarantee.png"
      alt="Гарантия"
      className="h-14 w-14 object-contain"
    />
    <div>
      <div className="text-[20px] font-black leading-tight md:text-3xl">
  до 3 лет
</div>
      <div className="text-sm">гарантия на работы</div>
    </div>
  </div>

  {/* КАЛЕНДАРЬ */}
  <div className="flex items-center justify-center gap-4">
    <img
      src="/calendar.png"
      alt="Работаем без выходных"
      className="h-14 w-14 object-contain"
    />
    <div>
      <div className="text-[20px] font-black leading-tight md:text-3xl">
  7 дней
</div>
      <div className="text-sm">работаем без выходных</div>
    </div>
  </div>

</div>
</div>
</section>/

      <section id="about" className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold text-blue-600">О нас</p>
            <h2 className="mt-2 text-4xl font-black">
              Работаем по Алматы каждый день
            </h2>
          </div>

          <p className="mt-6 text-lg leading-9 text-slate-600">
  Выполняем сантехнические, электрические и другие бытовые работы в Алматы.
  Работаем с квартирами, домами и коммерческими помещениями.
  Заранее согласовываем стоимость, приезжаем в удобное время
  и оставляем после себя порядок.
</p>
        </div>
      </section>
      <section className="bg-sky-700 py-16 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <p className="font-bold uppercase text-yellow-300">
        География выезда
      </p>

      <h2 className="mt-2 text-3xl font-black md:text-4xl">
        Работаем по всему Алматы и пригороду
      </h2>
    </div>

    <div className="mt-10 grid gap-8 md:grid-cols-[320px_1fr] md:items-center">

      {/* РАЙОНЫ */}
      <div className="space-y-3 text-lg font-medium">
        <p>✓ Алмалинский район</p>
        <p>✓ Медеуский район</p>
        <p>✓ Бостандыкский район</p>
        <p>✓ Ауэзовский район</p>
        <p>✓ Турксибский район</p>
        <p>✓ Наурызбайский район</p>
        <p>✓ Алатауский район</p>
        <p>✓ Жетысуский район</p>

        <div className="mt-6 rounded-xl bg-white/10 p-4">
          Быстрый выезд мастера в ваш район.
        </div>
      </div>

      {/* КАРТА */}
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=Шакарима+25,+Алматы,+Казахстан&output=embed"
          width="100%"
          height="520"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>

  </div>
</section>
{/* ПОЧЕМУ ВЫБИРАЮТ НАС */}
<section className="bg-slate-50 py-16">
  <div className="mx-auto max-w-7xl px-6">

    {/* ЗАГОЛОВОК */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-bold uppercase tracking-widest text-blue-600">
        Наши преимущества
      </p>

      <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
        Почему выбирают наш Сервис бытовых услуг
      </h2>

      <div className="mx-auto mt-5 flex w-24 justify-center gap-2">
        <span className="h-1 w-12 rounded-full bg-yellow-400"></span>
        <span className="h-1 w-8 rounded-full bg-blue-600"></span>
      </div>
    </div>

    {/* КАРТОЧКИ */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* 1 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/professional.png"
          alt="Опытные мастера"
          className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Опытные мастера
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Квалифицированные специалисты с большим опытом работы.
        </p>
      </div>

      {/* 2 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/fast-vyezd.png"
          alt="Быстрый выезд"
          className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Быстрый выезд
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          При срочном вызове мастер может приехать в течение 30–45 минут.
        </p>
      </div>

      {/* 3 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/garantiya.png"
          alt="Гарантия на работы"
          className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Гарантия на работы
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Предоставляем гарантию на выполненные работы.
        </p>
      </div>

      {/* 4 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/almaty.png"
          alt="Работаем по всему Алматы"
          className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Работаем по всему Алматы
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Выезжаем во все районы города и ближайший пригород.
        </p>
      </div>

      {/* 5 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/chistota.png"
          alt="Чистота после работы"
         className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Чистота после работы
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Работаем аккуратно и оставляем после себя порядок.
        </p>
      </div>

      {/* 6 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/economiya-vremeni.png"
          alt="Экономия времени"
         className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Экономия времени
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Быстро определяем неисправность и приступаем к работе.
        </p>
      </div>

      {/* 7 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/bez-vyhodnyh.png"
          alt="Работаем без выходных"
          className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Работаем без выходных
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Принимаем заявки ежедневно, включая выходные и праздничные дни.
        </p>
      </div>

      {/* 8 */}
      <div className="group relative rounded-3xl bg-white px-6 py-8 text-center shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-yellow-400"></div>

        <img
          src="/ceny.png"
          alt="Доступные цены"
          className="mx-auto h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="mt-5 text-xl font-black text-slate-950">
          Доступные цены
        </h3>

        <div className="mx-auto my-4 h-1 w-10 rounded-full bg-blue-600"></div>

        <p className="leading-7 text-slate-600">
          Стоимость работ согласовываем с клиентом до начала выполнения.
        </p>
      </div>

    </div>
  </div>
</section>
      <HomeReviews />

     {/* ПРИЗЫВ К ДЕЙСТВИЮ */}
<section
  id="contacts"
  className="py-16"
  style={{ backgroundColor: "#1263ae" }}
>
  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="font-bold uppercase tracking-wider text-yellow-400">
      Сервис бытовых услуг
    </p>

    <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
      Нужен мастер?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
      Позвоните или напишите нам в WhatsApp. Уточним задачу,
      согласуем стоимость и удобное время выезда мастера.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

      <a
        href="tel:+77771696969"
        className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 shadow-lg transition hover:scale-105 hover:bg-yellow-300"
      >
        ☎ Позвонить
      </a>

      <a
        href="https://wa.me/77771696969"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-green-500 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:bg-green-400"
      >
        WhatsApp
      </a>

    </div>

    <p className="mt-6 text-sm text-slate-500">
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

      <details className="group rounded-xl bg-slate-50 px-6 py-5 border border-transparent cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-slate-900">
          Как вызвать мастера?
          <span className="text-3xl font-light text-blue-600 group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          Позвоните нам или напишите в WhatsApp. Расскажите, какая услуга нужна,
          и мы согласуем удобное время выезда мастера.
        </p>
      </details>

      <details className="group rounded-xl bg-slate-50 px-6 py-5 border border-transparent cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-slate-900">
          Сколько будет стоить работа?
          <span className="text-3xl font-light text-blue-600 group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          Стоимость зависит от вида и сложности работ. Мастер уточняет объём
          работы и согласовывает стоимость до начала выполнения.
        </p>
      </details>

      <details className="group rounded-xl bg-slate-50 px-6 py-5 border border-transparent cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-slate-900">
          Как быстро может приехать мастер?
          <span className="text-3xl font-light text-blue-600 group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          При срочном вызове мастер может приехать по Алматы примерно
          в течение 30–45 минут. Также можно выбрать удобное время заранее.
        </p>
      </details>

      <details className="group rounded-xl bg-slate-50 px-6 py-5 border border-transparent cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-slate-900">
          Есть ли у мастера необходимые инструменты и материалы?
          <span className="text-3xl font-light text-blue-600 group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 leading-7 text-slate-600">
          Мастера приезжают с профессиональным инструментом. Необходимые
          материалы и комплектующие можно согласовать перед выездом или
          приобрести после диагностики.
        </p>
      </details>

    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="bg-[#292929] text-white">
  <div className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-14">

    {/* ВЕРХ ФУТЕРА */}
    <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:gap-y-10 md:grid-cols-4">

      {/* О КОМПАНИИ */}
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-2xl font-black text-yellow-400">
          Сервис бытовых услуг
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
          Выезд мастеров по Алматы. Сантехника, электрика,
          прочистка канализации и другие бытовые услуги.
        </p>
      </div>

      {/* УСЛУГИ */}
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

          <a href="/prochistka-kanalizacii" className="hover:text-yellow-400">
            Прочистка
          </a>

          <a href="/uslugi-santehnika" className="hover:text-yellow-400">
            Все услуги
          </a>
        </div>
      </div>

      {/* ИНФОРМАЦИЯ */}
      <div>
        <h3 className="mb-4 text-lg font-black text-yellow-400">
          Информация
        </h3>

        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a href="/price" className="hover:text-yellow-400">
            Цены
          </a>

          <a href="/nashi-raboty" className="hover:text-yellow-400">
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

      {/* КОНТАКТЫ */}
      <div className="col-span-2 md:col-span-1">
        <h3 className="mb-3 text-lg font-black text-yellow-400">
          Связаться с нами
        </h3>

        <p className="text-sm text-gray-400">
          Ежедневно
        </p>

        <a
          href="tel:+77771696969"
          className="mt-1 block text-2xl font-black text-white"
        >
          +7 777 169 69 69
        </a>

        
      </div>
    </div>

    {/* НИЖНЯЯ ЧАСТЬ */}
    <div className="mt-10 border-t border-gray-600 pt-6">
      <div className="flex flex-col gap-2 text-xs text-gray-400 md:flex-row md:items-center md:justify-between md:text-sm">
        <p>
          © 2013–2026 Сервис бытовых услуг. Алматы.
        </p>

        <p>
          Сантехник • Электрик • Прочистка канализации
        </p>
      </div>
    </div>

  </div>
</footer>
           

    </main>
  );
}
