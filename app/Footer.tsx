type FooterProps = {
  phone?: string;
  displayPhone?: string;
};

export default function Footer({
  phone = "77771696969",
  displayPhone = "+7 777 169 69 69",
}: FooterProps) {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#292929] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-14">

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-y-10">

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

                <a
                  href="/prochistka-kanalizacii"
                  className="hover:text-yellow-400"
                >
                  Прочистка
                </a>

                <a
                  href="/uslugi-santehnika"
                  className="hover:text-yellow-400"
                >
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

                <a href="/kontakty" className="hover:text-yellow-400">
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
                href={`tel:+${phone}`}
                className="mt-1 block text-2xl font-black text-white"
              >
                {displayPhone}
              </a>
            </div>

          </div>

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
      
    </>
  );
}