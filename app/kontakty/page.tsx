export const metadata = {
  title: "Контакты сантехника в Алматы | Сервис бытовых услуг",
  description:
    "Контакты сервиса бытовых услуг в Алматы. Позвоните или напишите в WhatsApp, чтобы вызвать мастера.",
};

export default function KontaktyPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* ШАПКА */}
      <header className="border-b border-yellow-400 bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

          <a href="/" className="text-xl font-black leading-5">
            Сервис
            <br />
            бытовых услуг
          </a>

          {/* КОМПЬЮТЕР */}
          <nav className="hidden items-center gap-7 text-base font-bold md:flex">

            <a href="/uslugi-santehnika" className="hover:text-yellow-400">
              Услуги
            </a>

            <a href="/price" className="hover:text-yellow-400">
              Цены
            </a>

            <a href="/nashi-raboty" className="hover:text-yellow-400">
              Наши работы
            </a>

            <a href="/otzyvy" className="hover:text-yellow-400">
              Отзывы
            </a>

            <a href="/o-nas" className="hover:text-yellow-400">
              О нас
            </a>

            <a href="/kontakty" className="text-yellow-400">
              Контакты
            </a>

          </nav>

          {/* WHATSAPP КОМПЬЮТЕР */}
          <a
            href="https://wa.me/77000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-2xl bg-green-500 px-6 py-4 font-black text-white hover:bg-green-600 md:block"
          >
            WhatsApp
          </a>

          {/* МОБИЛЬНОЕ МЕНЮ */}
          <div className="flex items-center gap-2 md:hidden">

            <a
              href="/"
              className="rounded-xl border border-white/20 px-3 py-2 text-sm font-bold"
            >
              Главная
            </a>

            <details className="relative">
              <summary className="cursor-pointer list-none rounded-xl border border-white/20 px-3 py-2 text-sm font-bold">
                Меню ▾
              </summary>

              <div className="absolute right-0 top-full z-50 mt-3 w-52 rounded-2xl bg-black p-2 shadow-2xl">

                <a href="/uslugi-santehnika" className="block rounded-xl px-4 py-3">
                  Услуги
                </a>

                <a href="/price" className="block rounded-xl px-4 py-3">
                  Цены
                </a>

                <a href="/nashi-raboty" className="block rounded-xl px-4 py-3">
                  Наши работы
                </a>

                <a href="/otzyvy" className="block rounded-xl px-4 py-3">
                  Отзывы
                </a>

                <a href="/o-nas" className="block rounded-xl px-4 py-3">
                  О нас
                </a>

                <a href="/kontakty" className="block rounded-xl px-4 py-3 text-yellow-400">
                  Контакты
                </a>

              </div>
            </details>

          </div>

        </div>
      </header>

      {/* ВЕРХ */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">

          <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <a href="/" className="hover:text-yellow-400">
              Главная
            </a>

            <span>→</span>

            <span className="text-white">
              Контакты
            </span>
          </div>

          <p className="font-bold text-yellow-400">
            Связаться с нами
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Контакты
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Позвоните или напишите в WhatsApp. Подскажем по стоимости
            и согласуем удобное время выезда мастера по Алматы.
          </p>

        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">

        <div className="grid gap-6 md:grid-cols-3">

          <a
            href="tel:+77000000000"
            className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-bold text-yellow-500">
              Телефон
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-950">
              Позвонить мастеру
            </h2>

            <p className="mt-3 text-slate-600">
              Принимаем заявки по телефону.
            </p>
          </a>

          <a
            href="https://wa.me/77000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-green-500 p-7 text-white shadow-sm transition hover:-translate-y-1 hover:bg-green-600"
          >
            <p className="text-sm font-bold">
              WhatsApp
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Написать в WhatsApp
            </h2>

            <p className="mt-3 text-green-50">
              Можно отправить фото и описание работы.
            </p>
          </a>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <p className="text-sm font-bold text-yellow-500">
              Зона выезда
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-950">
              Алматы и пригород
            </h2>

            <p className="mt-3 text-slate-600">
              Выезжаем в разные районы города.
            </p>
          </div>

        </div>
      </section>
         {/* ================= ФУТЕР ================= */}
      <footer className="border-t border-white/10 bg-black py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <h3 className="text-2xl font-black">
                Сервис бытовых услуг
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-slate-400">
                Сантехнические работы в Алматы. Ремонт, установка,
                обслуживание и прочистка канализации.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-yellow-400">
                Навигация
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-slate-300">
                <a href="#services">Услуги</a>
                <a href="#prices">Цены</a>
                <a href="#works">Наши работы</a>
                <a href="#reviews">Отзывы</a>
                <a href="#contacts">Контакты</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-black text-yellow-400">
                Связаться с нами
              </h3>

              <div className="mt-4 space-y-3 text-slate-300">
                <p>📍 Алматы</p>
                <a href="tel:+77000000000" className="block">
                  📞 +7 (700) 000-00-00
                </a>
                <a
                  href="https://wa.me/77000000000"
                  className="block text-green-400"
                >
                  WhatsApp
                </a>
                <p>Каждый день · Без выходных</p>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © 2013–2026 Сервис бытовых услуг. Все права защищены.
          </div>

        </div>
      </footer>
      {/* ЛИПКАЯ КНОПКА ПОЗВОНИТЬ */}
<a
  href="tel:+7XXXXXXXXXX"
  className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center bg-green-500 py-4 text-xl font-black text-white shadow-lg md:hidden"
>
  📞 ПОЗВОНИТЬ
</a>
{/* ПЛАВАЮЩИЙ WHATSAPP */}
<a
  href="https://wa.me/7XXXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Написать в WhatsApp"
  className="fixed bottom-20 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:scale-110 animate-pulse md:bottom-6"
>
  <svg
    viewBox="0 0 32 32"
    className="h-8 w-8 fill-white"
    aria-hidden="true"
  >
    <path d="M16 3C8.82 3 3 8.62 3 15.55c0 2.45.73 4.73 1.99 6.66L3.3 29l7.03-1.79A13.3 13.3 0 0 0 16 28.45c7.18 0 13-5.62 13-12.9S23.18 3 16 3zm0 23.27c-1.85 0-3.66-.49-5.24-1.42l-.38-.22-4.17 1.06 1.11-4.03-.25-.4a10.2 10.2 0 0 1-1.61-5.71C5.46 9.82 10.18 5.17 16 5.17s10.54 4.65 10.54 10.38S21.82 26.27 16 26.27zm5.78-7.8c-.32-.16-1.87-.91-2.16-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.56-.95-.83-1.59-1.86-1.77-2.17-.18-.31-.02-.48.14-.64.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.69-.98-2.31-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.11 1.07-1.11 2.61s1.14 3.03 1.3 3.24c.16.21 2.24 3.38 5.43 4.74.76.32 1.35.51 1.81.65.76.24 1.45.2 2 .12.61-.09 1.87-.75 2.13-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.61-.37z" />
  </svg>
</a>

    </main>
  );
}