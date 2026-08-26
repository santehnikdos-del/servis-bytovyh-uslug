import Header from "../Header";
import Footer from "../Footer";
export const metadata = {
  title: "Отзывы о сантехнике в Алматы | Сервис бытовых услуг",
  description:
    "Отзывы клиентов о сантехнических работах в Алматы. Установка, ремонт, монтаж труб, устранение протечек и другие услуги.",
};

export default function OtzyvyPage() {
  return (
    <main className="min-h-screen bg-sky-100">
       <Header
  phone="77771696969"
  displayPhone="+7 777 169 69 69"
/>

      {/* ВЕРХ СТРАНИЦЫ */}
      <section className="bg-sky-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">

          {/* ХЛЕБНЫЕ КРОШКИ */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <a href="/" className="hover:text-yellow-400">
              Главная
            </a>

            <span>→</span>

            <span className="text-white">
              Отзывы
            </span>
          </div>

          <p className="font-bold text-yellow-400">
            Отзывы клиентов
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Отзывы о нашей работе
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Здесь мы собрали отзывы клиентов о выполненных сантехнических
            работах в Алматы.
          </p>

        </div>
      </section>
      {/* ОТЗЫВЫ */}
<section className="mx-auto max-w-7xl px-5 py-14 md:py-20">

  <div className="mb-10">
    <p className="font-bold text-yellow-500">
      Что говорят клиенты
    </p>

    <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
      Отзывы о нашей работе
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

   <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
      <div className="text-xl text-yellow-400">★★★★★</div>
      <p className="mt-4 leading-7 text-slate-600">
        Мастер приехал вовремя, быстро нашёл причину протечки и всё устранил.
        Работа выполнена аккуратно. Спасибо!
      </p>
      <p className="mt-5 font-black text-slate-950">Александр</p>
      <p className="text-sm text-slate-500">Алматы</p>
    </div>

    <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
      <div className="text-xl text-yellow-400">★★★★★</div>
      <p className="mt-4 leading-7 text-slate-600">
        Обратились для замены сантехники в ванной. Всё установили аккуратно,
        проверили подключения и убрали после работы.
      </p>
      <p className="mt-5 font-black text-slate-950">Айгуль</p>
      <p className="text-sm text-slate-500">Алматы</p>
    </div>

   <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
      <div className="text-xl text-yellow-400">★★★★★</div>
      <p className="mt-4 leading-7 text-slate-600">
        Нужно было срочно прочистить канализацию. Мастер приехал быстро,
        устранил засор и дал рекомендации.
      </p>
      <p className="mt-5 font-black text-slate-950">Ермек</p>
      <p className="text-sm text-slate-500">Алматы</p>
    </div>
{/* ОТЗЫВ 4 */}
<div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
  <div className="text-xl text-yellow-400">★★★★★</div>
  <p className="mt-4 leading-7 text-slate-600">
    Вызвали мастера для замены унитаза. Приехал в назначенное время,
    демонтировал старый и аккуратно установил новый. Всё проверил.
  </p>
  <p className="mt-5 font-black text-slate-950">Данияр</p>
  <p className="text-sm text-slate-500">Алматы</p>
</div>

{/* ОТЗЫВ 5 */}
<div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
  <div className="text-xl text-yellow-400">★★★★★</div>
  <p className="mt-4 leading-7 text-slate-600">
    Меняли смеситель и сифон на кухне. Мастер всё сделал аккуратно,
    соединения проверил, нигде не протекает. Работой довольна.
  </p>
  <p className="mt-5 font-black text-slate-950">Гульмира</p>
  <p className="text-sm text-slate-500">Алматы</p>
</div>

{/* ОТЗЫВ 6 */}
<div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
  <div className="text-xl text-yellow-400">★★★★★</div>
  <p className="mt-4 leading-7 text-slate-600">
    Обратились по поводу замены старых труб. Всё объяснили заранее,
    помогли с материалами и качественно выполнили монтаж.
  </p>
  <p className="mt-5 font-black text-slate-950">Руслан</p>
  <p className="text-sm text-slate-500">Алматы</p>
</div>

{/* ОТЗЫВ 7 */}
<div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
  <div className="text-xl text-yellow-400">★★★★★</div>
  <p className="mt-4 leading-7 text-slate-600">
    Устанавливали бойлер. Мастер приехал со всем необходимым,
    аккуратно подключил воду и проверил работу оборудования.
  </p>
  <p className="mt-5 font-black text-slate-950">Сергей</p>
  <p className="text-sm text-slate-500">Алматы</p>
</div>

{/* ОТЗЫВ 8 */}
<div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
  <div className="text-xl text-yellow-400">★★★★★</div>
  <p className="mt-4 leading-7 text-slate-600">
    Была протечка в ванной, долго не могли понять откуда вода.
    Мастер нашёл проблему и устранил её. Спасибо за аккуратную работу.
  </p>
  <p className="mt-5 font-black text-slate-950">Наталья</p>
  <p className="text-sm text-slate-500">Алматы</p>
</div>

{/* ОТЗЫВ 9 */}
<div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
  <div className="text-xl text-yellow-400">★★★★★</div>
  <p className="mt-4 leading-7 text-slate-600">
    Заказывали установку раковины с тумбой. Всё получилось ровно
    и аккуратно, подключили воду и канализацию. Результатом довольны.
  </p>
  <p className="mt-5 font-black text-slate-950">Марат</p>
  <p className="text-sm text-slate-500">Алматы</p>
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