import Header from "../Header";
import Footer from "../Footer";
export default function ElektrikPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header
  phone="77073232632"
  displayPhone="+7 707 323 26 32"
/>
      
      {/* ================= МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН ================= */}
<section className="bg-[#303030] px-6 py-8 text-white md:hidden">

  <h1 className="text-center text-3xl font-bold text-yellow-400">
    Электрик в Алматы
  </h1>

  <p className="mt-4 text-center text-lg font-bold text-white">
    Вызов электрика на дом. Монтаж и ремонт электрики,
    замена розеток, выключателей и срочный выезд мастера.
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
        alt="Гарантия"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base">
        Гарантия<br />до 3 лет
      </p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="/banner-everyday.png"
        alt="Каждый день"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base">
        Работаем<br />каждый день
      </p>
    </div>

  </div>

  <p className="mt-5 px-5 text-center text-base leading-6">
    Опытные электрики. Работаем аккуратно и ответственно.
    Предоставляем гарантию на выполненные работы.
  </p>

</section>


{/* ================= ПЕРВЫЙ ЭКРАН — КОМПЬЮТЕР ================= */}
<section
  className="relative hidden min-h-[535px] overflow-hidden bg-no-repeat md:block md:bg-[length:100%_auto] md:bg-[position:center_0]"
  style={{
    backgroundImage: "url('/master.jpg')",
    backgroundPosition: "center 0px",
  }}
>
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10 mx-auto flex min-h-[535px] max-w-7xl items-start px-6 pb-8 pt-8">
    <div className="max-w-5xl">

      <p className="font-bold text-yellow-400">
        Выезд электрика по Алматы
      </p>

      <h1 className="mt-0 text-5xl font-black leading-tight text-white md:text-7xl">
        Электрик в Алматы
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
        Монтаж и ремонт электрики, замена розеток и выключателей,
        установка освещения, поиск неисправностей и срочный вызов электрика.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="tel:+77073232632"
          className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-yellow-300"
        >
          📞 Позвонить
        </a>

        <a
          href="https://wa.me/77073232632"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-600"
        >
          WhatsApp
        </a>
      </div>

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

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-blue-600">Услуги электрика</p>

          <h2 className="mt-2 text-4xl font-black">
            Выполняем любые электромонтажные работы
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Замена розеток",
              "Установка выключателей",
              "Монтаж освещения",
              "Замена электропроводки",
              "Установка электрощита",
              "Поиск и устранение неисправностей",
            ].map((service) => (
              <div
                key={service}
               className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{service}</h3>

                <p className="mt-3 text-slate-600">
                  Работаем аккуратно, согласовываем стоимость до начала и даём
                  гарантию.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-800 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-400">
      Почему выбирают нас
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Надёжный электромонтажный сервис в Алматы
    </h2>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ["15+ лет опыта", "Большой опыт электромонтажных работ."],
        ["Выезд 30–45 минут", "Быстро выезжаем по Алматы."],
        ["Гарантия до 3 лет", "Гарантия на выполненные работы."],
        ["Свои мастера", "Работаем своей командой."],
        ["Цена заранее", "Согласовываем стоимость до начала."],
        ["Без выходных", "Принимаем заявки каждый день."],
      ].map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/10 hover:shadow-xl"
        >
          <div className="mb-4 h-2 w-12 rounded-full bg-yellow-400"></div>

          <h3 className="text-xl font-black">
            {title}
          </h3>

          <p className="mt-3 text-slate-200">
            {text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= ОТЗЫВЫ ================= */}
<section id="reviews" className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      Отзывы клиентов
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Что говорят о нашей работе
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        ["Айдар", "Мастер быстро нашёл неисправность и всё исправил."],
        ["Динара", "Установили розетки и светильники аккуратно и быстро."],
        ["Марат", "Заменили автоматы в щитке, всё проверили после работы."],
        ["Алия", "Электрик приехал вовремя, сделал всё аккуратно."],
        ["Руслан", "Хороший сервис, мастер вежливый и профессиональный."],
        ["Сауле", "Быстро устранили проблему с проводкой."],
      ].map(([name, text]) => (
        <div
          key={name}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-xl"
        >
          <div className="text-xl text-yellow-400">
            ★★★★★
          </div>

          <p className="mt-4 leading-7 text-slate-600">
            “{text}”
          </p>

          <p className="mt-5 font-black">{name}</p>
          <p className="text-sm text-slate-500">Алматы</p>
        </div>
      ))}
    </div>

  </div>
</section>

      <section className="bg-sky-800 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Нужен Электрик?</h2>

            <p className="mt-2 text-slate-400">
              Позвоните или напишите нам в WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+77073232632"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700"
            >
              Позвонить
            </a>

            <a
              href="https://wa.me/77073232632"
              className="rounded-xl bg-green-500 px-6 py-4 font-bold hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* ================= FAQ ================= */}
<section id="faq" className="bg-white py-16 text-slate-950">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-center text-3xl font-black md:text-4xl">
      Часто задаваемые вопросы
    </h2>

    <div className="mt-10 space-y-4">
      {[
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
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group overflow-hidden rounded-2xl border border-transparent bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-7">
            <span className="text-xl font-black">
              {question}
            </span>

            <span className="ml-5 text-3xl font-light text-blue-600 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-7 pb-7">
            <p className="text-lg leading-7 text-slate-600">
              {answer}
            </p>
          </div>
        </details>
      ))}
    </div>

  </div>
</section>
    <Footer />
    </main>
  );
}