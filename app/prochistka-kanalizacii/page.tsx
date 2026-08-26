import Header from "../Header";
import Footer from "../Footer";

export const metadata = {
  title:
    "Прочистка канализации Алматы – устранение засоров | Сервис бытовых услуг",
  description:
    "Прочистка канализации в Алматы. Устранение засоров труб, раковин, унитазов и стояков. Быстрый выезд мастера по Алматы.",
};

export default function ProchistkaKanalizaciiPage() {
  return (
    <main className="min-h-screen bg-neutral-800 pb-20 text-white md:pb-0">

      <Header />

      {/* ================= МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН ================= */}
      <section className="bg-[#303030] px-6 py-8 text-white md:hidden">

        <h1 className="text-center text-3xl font-bold text-yellow-400">
          Прочистка канализации в Алматы
        </h1>

        <p className="mt-4 text-center text-lg font-bold text-white">
          Устранение засоров труб, раковин, унитазов и канализации.
          Быстрый выезд мастера по Алматы.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-2 text-center">

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
          Профессионально устраняем засоры канализации.
          Работаем аккуратно и предоставляем гарантию.
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
              Выезд мастера по Алматы
            </p>

            <h1 className="mt-0 text-5xl font-black leading-tight text-white md:text-7xl">
              Прочистка канализации в Алматы
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Устранение засоров канализации, прочистка труб,
              раковин, унитазов и стояков. Быстрый выезд мастера по Алматы.
            </p>

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
      {/* ================= УСЛУГИ ================= */}
<section id="services" className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      Услуги прочистки канализации
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Устраняем засоры любой сложности
    </h2>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {/* ПРОЧИСТКА ТРУБ */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl">
        <h3 className="text-xl font-black">
          Прочистка труб
        </h3>

        <p className="mt-3 text-slate-600">
          Устраняем засоры и восстанавливаем нормальный слив воды.
        </p>

        <a
          href="/prochistka-trub"
          className="mt-6 inline-block rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ПРОЧИСТКА РАКОВИНЫ */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl">
        <h3 className="text-xl font-black">
          Прочистка раковины
        </h3>

        <p className="mt-3 text-slate-600">
          Быстро устраняем засор в раковине и проверяем слив.
        </p>

        <a
          href="/prochistka-rakoviny"
          className="mt-6 inline-block rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ПРОЧИСТКА УНИТАЗА */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl">
        <h3 className="text-xl font-black">
          Прочистка унитаза
        </h3>

        <p className="mt-3 text-slate-600">
          Устраняем сложные засоры и восстанавливаем работу унитаза.
        </p>

        <a
          href="/prochistka-unitaza"
          className="mt-6 inline-block rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ПРОЧИСТКА СТОЯКА */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl">
        <h3 className="text-xl font-black">
          Прочистка стояка
        </h3>

        <p className="mt-3 text-slate-600">
          Прочищаем канализационные стояки в квартирах, домах и офисах.
        </p>

        <a
          href="/prochistka-stoyaka"
          className="mt-6 inline-block rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ПРОЧИСТКА АППАРАТОМ */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl">
        <h3 className="text-xl font-black">
          Прочистка канализации аппаратом
        </h3>

        <p className="mt-3 text-slate-600">
          Используем профессиональное оборудование для сложных засоров.
        </p>

        <a
          href="/prochistka-apparatom"
          className="mt-6 inline-block rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

      {/* ГИДРОДИНАМИЧЕСКАЯ ПРОЧИСТКА */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl">
        <h3 className="text-xl font-black">
          Гидродинамическая прочистка
        </h3>

        <p className="mt-3 text-slate-600">
          Промываем трубы водой под высоким давлением и удаляем загрязнения.
        </p>

        <a
          href="/gidrodinamicheskaya-prochistka"
          className="mt-6 inline-block rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Подробнее →
        </a>
      </div>

    </div>

  </div>
</section>
{/* ================= ЦЕНЫ ================= */}
<section id="prices" className="bg-slate-50 py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      Цены на прочистку канализации
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Примерная стоимость работ
    </h2>

    <p className="mt-4 text-slate-600">
      Точная стоимость зависит от сложности засора и способа прочистки.
      Цена согласовывается до начала работ.
    </p>

    <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {[
        ["Прочистка раковины", "от 15 000 ₸"],
        ["Прочистка унитаза", "от 15 000 ₸"],
        ["Прочистка труб", "от 15 000 ₸"],
        ["Прочистка стояка", "от 20 000 ₸"],
        ["Прочистка канализации аппаратом", "от 20 000 ₸"],
        ["Гидродинамическая прочистка", "от 30 000 ₸"],
      ].map(([name, price]) => (
        <div
          key={name}
          className="flex items-center justify-between border-b border-slate-200 px-6 py-5 transition hover:bg-yellow-50 last:border-0"
        >
          <span className="font-semibold">
            {name}
          </span>

          <span className="ml-4 whitespace-nowrap font-black text-yellow-500">
            {price}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= ПОЧЕМУ МЫ ================= */}
<section id="about" className="bg-sky-800 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-400">
      Почему выбирают нас
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Профессиональная прочистка канализации в Алматы
    </h2>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        ["15+ лет опыта", "Большой опыт устранения засоров."],
        ["Выезд 30–45 минут", "Быстро выезжаем по Алматы."],
        ["Проф. оборудование", "Используем оборудование для сложных засоров."],
        ["Свои мастера", "Работаем своей командой специалистов."],
        ["Цена заранее", "Согласовываем стоимость до начала работ."],
        ["Без выходных", "Принимаем заявки каждый день."],
      ].map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/10 hover:shadow-xl"
        >
          <div className="mb-4 h-2 w-12 rounded-full bg-yellow-400" />

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
{/* ================= КАК РАБОТАЕМ ================= */}
<section className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      Как мы работаем
    </p>

    <h2 className="mt-2 text-4xl font-black">
      От заявки до устранения засора
    </h2>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        [
          "01",
          "Заявка",
          "Позвоните или напишите нам в WhatsApp.",
        ],
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
      ].map(([number, title, text]) => (
        <div
          key={number}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black">
            {number}
          </div>

          <h3 className="mt-5 text-xl font-black">
            {title}
          </h3>

          <p className="mt-3 text-slate-600">
            {text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= НАШИ РАБОТЫ ================= */}
<section id="works" className="bg-sky-800 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-400">
      Наши работы
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Примеры выполненных работ
    </h2>

    <p className="mt-4 max-w-3xl text-slate-200">
      Примеры работ по устранению засоров и прочистке канализации в Алматы.
    </p>

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
{/* ================= FAQ ================= */}
<section id="faq" className="bg-white py-16 text-slate-950">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-center text-3xl font-black md:text-4xl">
      Часто задаваемые вопросы
    </h2>

    <div className="mt-10 space-y-4">
      {[
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
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group overflow-hidden rounded-2xl border border-transparent bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-7">
            <span className="text-xl font-black text-slate-950">
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
{/* ================= РАЙОНЫ ================= */}
<section className="bg-slate-100 py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      Выезд по городу
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Прочистка канализации во всех районах Алматы
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
      Выезжаем на устранение засоров и прочистку канализации по всему Алматы.
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
{/* ================= КОНТАКТЫ ================= */}
<section id="contacts" className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      Контакты
    </p>

    <h2 className="mt-2 text-4xl font-black">
      Вызвать мастера по прочистке канализации
    </h2>

    <div className="mt-12 grid gap-10 lg:grid-cols-2">

      <div className="space-y-6">

        <div className="rounded-3xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">
            Телефон
          </p>

          <a
            href="tel:+77771696969"
            className="mt-2 block text-2xl font-black"
          >
            +7 777 169 69 69
          </a>
        </div>

        <div className="rounded-3xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">
            WhatsApp
          </p>

          <a
            href="https://wa.me/77771696969"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-2xl font-black text-green-600"
          >
            Написать в WhatsApp
          </a>
        </div>

        <div className="rounded-3xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">
            Режим работы
          </p>

          <p className="mt-2 text-xl font-bold">
            Каждый день · Без выходных
          </p>
        </div>

        <div className="rounded-3xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">
            Обслуживаем
          </p>

          <p className="mt-2 text-xl font-bold">
            Весь Алматы и пригород
          </p>
        </div>

      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=Алматы&output=embed"
          className="h-[520px] w-full border-0"
          loading="lazy"
          title="Карта Алматы"
        />
      </div>

    </div>

  </div>
</section>
{/* ================= СРОЧНЫЙ ВЫЗОВ ================= */}
<section className="bg-sky-800 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="rounded-3xl border border-yellow-400/20 bg-slate-900 p-10">

      <p className="font-bold text-yellow-400">
        Срочный вызов мастера
      </p>

      <div className="mt-3 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        <div>
          <h2 className="text-4xl font-black md:text-5xl">
            Засорилась канализация?
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Позвоните или напишите в WhatsApp. Уточним проблему
            и согласуем время выезда мастера по Алматы.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+77771696969"
            className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 transition hover:bg-yellow-300"
          >
            📞 Позвонить
          </a>

          <a
            href="https://wa.me/77771696969"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-green-500 px-8 py-4 text-lg font-black text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>

      </div>

    </div>

  </div>
</section>
      <Footer />

    </main>
  );
}