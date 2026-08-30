import Header from "../Header";
import Footer from "../Footer";
import ManagedWorks from "../ManagedWorks";

export const metadata = {
  title: "Наши работы сантехника в Алматы | Сервис бытовых услуг",

  description:
    "Примеры выполненных сантехнических работ в Алматы. Монтаж труб, водоснабжения, отопления и сантехнического оборудования.",

  alternates: {
    canonical: "https://home-services.kz/nashi-raboty",
  },
};

export default function NashiRabotyPage() {
  return (
    <main className="min-h-screen bg-sky-100">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      <section className="bg-sky-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <a href="/" className="transition hover:text-yellow-400">
              Главная
            </a>
            <span>→</span>
            <span className="text-white">Наши работы</span>
          </div>

          <p className="font-bold text-yellow-400">Наши работы</p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Примеры наших работ
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Показываем реальные сантехнические работы, выполненные нашими
            мастерами в Алматы.
          </p>
        </div>
      </section>

      <ManagedWorks />

      <section className="bg-sky-100 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="font-bold text-yellow-500">Готовы помочь</p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              Нужен такой же результат?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Выполним сантехнические работы в квартире, доме или офисе в Алматы.
              Рассчитаем стоимость и согласуем удобное время выезда мастера.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://wa.me/77771696969"
                className="rounded-full bg-green-500 px-7 py-4 font-black text-white transition hover:bg-green-600"
              >
                WhatsApp
              </a>

              <a
                href="/price"
                className="rounded-full bg-yellow-400 px-7 py-4 font-black text-black transition hover:bg-yellow-300"
              >
                Посмотреть цены →
              </a>
            </div>
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
