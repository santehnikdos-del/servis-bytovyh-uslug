import T from "../T";
import Header from "../Header";
import Footer from "../Footer";

export const metadata = {
  title: "Установка раковины в Алматы | Сервис бытовых услуг",

  description:
    "Установка и замена раковины в Алматы. Монтаж умывальника, мойки, сифона и смесителя. Аккуратно, быстро и с гарантией.",

  alternates: {
    canonical: "https://www.home-services.kz/ustanovka-rakoviny",
  },
};

const services = [
  "Установка раковины в ванной",
  "Установка кухонной мойки",
  "Замена старой раковины",
  "Монтаж сифона",
  "Подключение смесителя",
  "Устранение протечки",
];

export default function UstanovkaRakovinyPage() {
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
            <T p="ustanovka-rakoviny" o={1}>← Услуги сантехника</T>
          </a>

          <p className="mt-2 font-bold text-cyan-400">
            <T p="ustanovka-rakoviny" o={2}>Выезд мастера по Алматы</T>
          </p>

          <h1 className="mt-2 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
            <T p="ustanovka-rakoviny" o={3}>Установка раковины в Алматы</T>
          </h1>

          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-300">
            <T p="ustanovka-rakoviny" o={4}>Установим или заменим раковину в ванной и кухонную мойку.
            Подключим сифон и смеситель, проверим соединения и устраним протечки.</T>
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
            <a
              href="tel:+77771696969"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700"
            >
              <T p="ustanovka-rakoviny" o={5}>Позвонить</T>
            </a>

            <a
              href="https://wa.me/77771696969"
              className="rounded-xl bg-green-500 px-6 py-4 font-bold hover:bg-green-600"
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
                <div className="text-sm"><T p="ustanovka-rakoviny" o={6}>довольных клиентов</T></div>
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
                  <T p="ustanovka-rakoviny" o={7}>30–45 мин</T>
                </div>
                <div className="text-sm"><T p="ustanovka-rakoviny" o={8}>срочный выезд</T></div>
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
                  <T p="ustanovka-rakoviny" o={9}>до 3 лет</T>
                </div>
                <div className="text-sm"><T p="ustanovka-rakoviny" o={10}>гарантия на работы</T></div>
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
                  <T p="ustanovka-rakoviny" o={11}>7 дней</T>
                </div>
                <div className="text-sm"><T p="ustanovka-rakoviny" o={12}>работаем без выходных</T></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="bg-white py-12 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-blue-600">
            <T p="ustanovka-rakoviny" o={13}>Услуги по установке раковины</T>
          </p>

          <h2 className="mt-2 text-4xl font-black">
            <T p="ustanovka-rakoviny" o={14}>Выполняем монтаж под ключ</T>
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                <h3 className="text-xl font-black"><T p="ustanovka-rakoviny" o={15}>{service}</T></h3>

                <p className="mt-3 text-slate-600">
                  <T p="ustanovka-rakoviny" o={16}>Работаем аккуратно, согласовываем стоимость заранее и
                  проверяем все соединения после установки.</T>
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
              <T p="ustanovka-rakoviny" o={17}>Почему выбирают нас</T>
            </p>

            <h2 className="mt-2 text-4xl font-black">
              <T p="ustanovka-rakoviny" o={18}>Аккуратный монтаж и гарантия</T>
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            <T p="ustanovka-rakoviny" o={19}>Мастер приезжает в удобное время, помогает проверить совместимость
            оборудования, выполняет монтаж и оставляет после себя порядок.</T>
          </p>
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="bg-sky-800 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">
              <T p="ustanovka-rakoviny" o={20}>Нужна установка раковины?</T>
            </h2>

            <p className="mt-2 text-slate-300">
              <T p="ustanovka-rakoviny" o={21}>Позвоните или напишите нам в WhatsApp.</T>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+77771696969"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700"
            >
              <T p="ustanovka-rakoviny" o={22}>Позвонить</T>
            </a>

            <a
              href="https://wa.me/77771696969"
              className="rounded-xl bg-green-500 px-6 py-4 font-bold hover:bg-green-600"
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