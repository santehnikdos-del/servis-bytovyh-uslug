import Header from "../Header";
import Footer from "../Footer";

export const metadata = {
  title: "Установка унитаза в Алматы | Сервис бытовых услуг",
  description:
    "Профессиональная установка и замена унитаза в Алматы. Монтаж подвесных и напольных унитазов, подключение инсталляции, гарантия на работы.",
};

const services = [
  "Установка напольного унитаза",
  "Замена старого унитаза",
  "Монтаж подвесного унитаза",
  "Установка инсталляции",
  "Подключение бачка",
  "Устранение протечки унитаза",
];

export default function UstanovkaUnitazaPage() {
  return (
    <main className="min-h-[calc(100vh-300px)] bg-slate-950 text-white">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      {/* ПЕРВЫЙ ЭКРАН */}
      <section className="bg-sky-800 px-6 py-3 text-white md:py-3">
        <div className="mx-auto max-w-7xl">
          <a href="/santehnik" className="text-cyan-400">
            ← Услуги сантехника
          </a>

          <p className="mt-2 font-bold text-cyan-400">
            Выезд мастера по Алматы
          </p>

          <h1 className="mt-2 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
            Установка унитаза в Алматы
          </h1>

          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-300">
            Устанавливаем и заменяем напольные и подвесные унитазы.
            Подключаем инсталляции, бачки, устраняем протечки и даём гарантию
            на выполненные работы.
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
            <a
              href="tel:+77771696969"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold transition hover:bg-blue-700"
            >
              Позвонить
            </a>

            <a
              href="https://wa.me/77771696969"
              className="rounded-xl bg-green-500 px-6 py-4 font-bold transition hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>

          {/* НИЖНЯЯ ПОЛОСА */}
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 rounded-2xl bg-sky-700 px-4 py-6 text-white md:grid-cols-4 md:px-6">

            <div className="group flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src="/clients.png"
                alt="Довольные клиенты"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-xl font-black md:text-3xl">1000+</div>
                <div className="text-sm">довольных клиентов</div>
              </div>
            </div>

            <div className="group flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src="/time.png"
                alt="Срочный выезд"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-[20px] font-black leading-tight md:text-3xl">
                  30–45 мин
                </div>
                <div className="text-sm">срочный выезд</div>
              </div>
            </div>

            <div className="group flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src="/guarantee.png"
                alt="Гарантия"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-[20px] font-black leading-tight md:text-3xl">
                  до 3 лет
                </div>
                <div className="text-sm">гарантия на работы</div>
              </div>
            </div>

            <div className="group flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src="/calendar.png"
                alt="Работаем без выходных"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
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
      </section>

      {/* УСЛУГИ */}
      <section className="bg-white py-12 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-blue-600">
            Услуги по установке унитаза
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Выполняем все работы под ключ
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{service}</h3>

                <p className="mt-3 text-slate-600">
                  Работаем аккуратно, согласовываем стоимость заранее и
                  проверяем исправность после установки.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ ВЫБИРАЮТ НАС */}
      <section className="bg-slate-100 py-12 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold text-blue-600">
              Почему выбирают нас
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Надёжный монтаж и гарантия
            </h2>
          </div>

          <div className="text-lg leading-8 text-slate-600">
            Мастер приезжает в удобное время, аккуратно демонтирует старый
            унитаз, устанавливает новый, подключает воду и канализацию и
            проверяет все соединения.
          </div>
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="bg-sky-800 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">
              Нужна установка унитаза?
            </h2>

            <p className="mt-2 text-slate-300">
              Позвоните или напишите нам в WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+77771696969"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold transition hover:bg-blue-700"
            >
              Позвонить
            </a>

            <a
              href="https://wa.me/77771696969"
              className="rounded-xl bg-green-500 px-6 py-4 font-bold transition hover:bg-green-600"
            >
              WhatsApp
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