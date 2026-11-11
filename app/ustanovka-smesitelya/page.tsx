import type { Metadata } from "next";
import { imgSrc, loadSiteContent, withSeo } from "../../lib/site-texts";
import T from "../T";
import Header from "../Header";
import Footer from "../Footer";

const pageMetadata: Metadata = {
  title: "Установка смесителя в Алматы | Сервис бытовых услуг",

  description:
    "Установка и замена смесителя в Алматы. Подключение смесителя на кухне, в ванной и душе. Аккуратно, быстро и с гарантией.",

  alternates: {
    canonical: "https://www.home-services.kz/ustanovka-smesitelya",
  },
};

const services = [
  "Установка смесителя на кухне",
  "Установка смесителя в ванной",
  "Замена старого смесителя",
  "Подключение душевого смесителя",
  "Замена гибких шлангов",
  "Устранение протечки смесителя",
];

export default async function UstanovkaSmesitelyaPage() {
  const SC = await loadSiteContent();

  return (
    <main className="min-h-[calc(100vh-300px)] bg-slate-950 text-white">
      <Header
        phone={`${SC.contacts.main.digits}`}
        displayPhone={`${SC.contacts.main.display}`}
      />

      {/* ПЕРВЫЙ ЭКРАН */}
      <section className="bg-sky-800 px-6 py-3 text-white md:py-3">
        <div className="mx-auto max-w-7xl">
          <a href="/santehnik" className="text-cyan-400">
            <T p="ustanovka-smesitelya" o={1}>← Услуги сантехника</T>
          </a>

          <p className="mt-2 font-bold text-cyan-400">
            <T p="ustanovka-smesitelya" o={2}>Выезд мастера по Алматы</T>
          </p>

          <h1 className="mt-2 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
            <T p="ustanovka-smesitelya" o={3}>Установка смесителя в Алматы</T>
          </h1>

          <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-300">
            <T p="ustanovka-smesitelya" o={4}>Установим или заменим смеситель на кухне, в ванной или душе.
            Проверим соединения, устраним протечки и дадим гарантию на работу.</T>
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
            <a
              href={`tel:+${SC.contacts.main.digits}`}
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700"
            >
              <T p="ustanovka-smesitelya" o={5}>Позвонить</T>
            </a>

            <a
              href={`https://wa.me/${SC.contacts.main.digits}`}
              className="rounded-xl bg-green-500 px-6 py-4 font-bold hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>

          {/* НИЖНЯЯ ПОЛОСА */}
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 rounded-2xl bg-sky-700 px-4 py-6 text-white md:grid-cols-4 md:px-6">
            
            {/* КЛИЕНТЫ */}
            <div className="flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src={imgSrc(SC, "/clients.png")}
                alt="Довольные клиенты"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-xl font-black md:text-3xl">1000+</div>
                <div className="text-sm"><T p="ustanovka-smesitelya" o={6}>довольных клиентов</T></div>
              </div>
            </div>

            {/* ВЫЕЗД */}
            <div className="flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src={imgSrc(SC, "/time.png")}
                alt="Срочный выезд"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-[20px] font-black leading-tight md:text-3xl">
                  <T p="ustanovka-smesitelya" o={7}>30–45 мин</T>
                </div>
                <div className="text-sm"><T p="ustanovka-smesitelya" o={8}>срочный выезд</T></div>
              </div>
            </div>

            {/* ГАРАНТИЯ */}
            <div className="flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src={imgSrc(SC, "/guarantee.png")}
                alt="Гарантия"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-[20px] font-black leading-tight md:text-3xl">
                  <T p="ustanovka-smesitelya" o={9}>до 3 лет</T>
                </div>
                <div className="text-sm"><T p="ustanovka-smesitelya" o={10}>гарантия на работы</T></div>
              </div>
            </div>

            {/* КАЛЕНДАРЬ */}
            <div className="flex items-center justify-center gap-4 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">
              <img
                src={imgSrc(SC, "/calendar.png")}
                alt="Работаем без выходных"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-[20px] font-black leading-tight md:text-3xl">
                  <T p="ustanovka-smesitelya" o={11}>7 дней</T>
                </div>
                <div className="text-sm"><T p="ustanovka-smesitelya" o={12}>работаем без выходных</T></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЧТО ВХОДИТ В УСЛУГУ */}
      <section className="bg-white py-12 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-blue-600"><T p="ustanovka-smesitelya" o={13}>Наши работы</T></p>

          <h2 className="mt-2 text-4xl font-black">
            <T p="ustanovka-smesitelya" o={14}>Что входит в услугу</T>
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
              >
                <h3 className="text-xl font-black"><T p="ustanovka-smesitelya" o={15}>{service}</T></h3>

                <p className="mt-3 text-slate-600">
                  <T p="ustanovka-smesitelya" o={16}>Выполняем аккуратно, согласовываем стоимость заранее и
                  проверяем работу после установки.</T>
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
              <T p="ustanovka-smesitelya" o={17}>Почему выбирают нас</T>
            </p>

            <h2 className="mt-2 text-4xl font-black">
              <T p="ustanovka-smesitelya" o={18}>Быстро, аккуратно и с гарантией</T>
            </h2>
          </div>

          <div className="text-lg leading-8 text-slate-600">
            <T p="ustanovka-smesitelya" o={19}>Мастер приезжает в удобное время, помогает проверить подходящий
            смеситель, аккуратно выполняет монтаж и оставляет после себя
            порядок.</T>
          </div>
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="bg-sky-800 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">
              <T p="ustanovka-smesitelya" o={20}>Нужна установка смесителя?</T>
            </h2>

            <p className="mt-2 text-slate-300">
              <T p="ustanovka-smesitelya" o={21}>Позвоните или напишите нам в WhatsApp.</T>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:+${SC.contacts.main.digits}`}
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold hover:bg-blue-700"
            >
              <T p="ustanovka-smesitelya" o={22}>Позвонить</T>
            </a>

            <a
              href={`https://wa.me/${SC.contacts.main.digits}`}
              className="rounded-xl bg-green-500 px-6 py-4 font-bold hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer
        phone={`${SC.contacts.main.digits}`}
        displayPhone={`${SC.contacts.main.display}`}
      />
    </main>
  );
}

// Заголовок и описание для поиска можно изменить в админке (вкладка «SEO»)
export async function generateMetadata(): Promise<Metadata> {
  return withSeo("/ustanovka-smesitelya", pageMetadata);
}
