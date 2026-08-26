import Header from "../Header";
import Footer from "../Footer";
export const metadata = {
  title: "Наши работы сантехника в Алматы | Сервис бытовых услуг",
  description:
    "Примеры выполненных сантехнических работ в Алматы. Монтаж труб, водоснабжения, отопления и сантехнического оборудования.",
};

export default function NashiRabotyPage() {
  return (
   <main className="min-h-screen bg-sky-100">
   
     <Header
  phone="77771696969"
  displayPhone="+7 777 169 69 69"
/> 

      {/* ВЕРХ */}
      <section className="bg-sky-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          {/* ХЛЕБНЫЕ КРОШКИ */}
<div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
  <a
    href="/"
    className="transition hover:text-yellow-400"
  >
    Главная
  </a>

  <span>→</span>

  <span className="text-white">
    Наши работы
  </span>
</div>
          <p className="font-bold text-yellow-400">
            Наши работы
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Примеры наших работ
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Показываем реальные сантехнические работы, выполненные нашими
            мастерами в Алматы.
          </p>
        </div>
      </section>

      {/* ДО / ПОСЛЕ */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">

        <p className="font-bold text-yellow-500">
          Монтаж водоснабжения
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
          Работа до и после
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <img
              src="/works/montazh-do.jpeg"
              alt="Сантехнические коммуникации до монтажа в Алматы"
              className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
            />

            <div className="p-5">
              <p className="text-xl font-black text-slate-950">
                До
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <img
              src="/works/montazh-posle.jpeg"
              alt="Монтаж сантехнических труб после выполнения работ в Алматы"
              className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
            />

            <div className="p-5">
              <p className="text-xl font-black text-slate-950">
                После
              </p>
            </div>
          </div>

        </div>
        {/* ВТОРАЯ РАБОТА */}
<section className="mx-auto max-w-7xl px-5 pb-14 md:pb-20">

  <p className="font-bold text-yellow-500">
    Установка сантехники
  </p>

  <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
    Монтаж сантехники в санузле
  </h2>

  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

    <div className="overflow-hidden rounded-3xl bg-white shadow">
      <img
        src="/works/sanuzel-do.jpeg"
        alt="Монтаж сантехники в санузле до установки"
        className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
      />

      <div className="p-5">
        <p className="text-xl font-black text-slate-950">
          До
        </p>
      </div>
    </div>

    <div className="overflow-hidden rounded-3xl bg-white shadow">
      <img
        src="/works/sanuzel-posle.jpeg"
        alt="Установка унитаза и раковины в санузле"
        className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
      />

      <div className="p-5">
        <p className="text-xl font-black text-slate-950">
          После
        </p>
      </div>
    </div>

  </div>
</section>
{/* ТРЕТЬЯ РАБОТА */}
<section className="mx-auto max-w-7xl px-5 pb-14 md:pb-20">

  <p className="font-bold text-yellow-500">
    Монтаж сантехники
  </p>

  <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
    Монтаж сантехники в ванной комнате
  </h2>

  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

    <div className="overflow-hidden rounded-3xl bg-white shadow">
      <img
        src="/works/vannaya-do.jpeg"
        alt="Ванная комната до монтажа сантехники"
        className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="p-5">
        <p className="text-xl font-black text-slate-950">До</p>
      </div>
    </div>

    <div className="overflow-hidden rounded-3xl bg-white shadow">
      <img
        src="/works/vannaya-posle.jpeg"
        alt="Ванная комната после монтажа сантехники"
        className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="p-5">
        <p className="text-xl font-black text-slate-950">После</p>
      </div>
    </div>

  </div>
</section>
{/* Монтаж отопления */}
<div className="mt-14">
  <p className="text-amber-500 font-bold">
    Отопление и котельное оборудование
  </p>

  <h2 className="mt-2 text-3xl font-black text-slate-950">
    Монтаж системы отопления
  </h2>

  <div className="mt-6 grid grid-cols-2 gap-3">

    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <img
        src="/works/otoplenie-rabota.jpeg"
        alt="Монтаж системы отопления в Алматы"
        className="h-[300px] w-full object-contain bg-slate-100 transition-transform duration-300 hover:scale-105"
      />
      <div className="p-3">
        <p className="font-bold text-slate-950">Работа на объекте</p>
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <img
        src="/works/otoplenie-kotelnaya.jpeg"
        alt="Монтаж котельной и системы отопления в Алматы"
        className="h-[300px] w-full object-contain bg-slate-100 transition-transform duration-300 hover:scale-105"
      />
      <div className="p-3">
        <p className="font-bold text-slate-950">Готовая котельная</p>
      </div>
    </div>

  </div>
</div>
      </section>
      {/* НУЖЕН ТАКОЙ ЖЕ РЕЗУЛЬТАТ */}
<section className="bg-sky-100 py-16">
  <div className="mx-auto max-w-7xl px-5 md:px-6">

    <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

      <p className="font-bold text-yellow-500">
        Готовы помочь
      </p>

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