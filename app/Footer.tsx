import T from "./T";
import { loadSiteContent } from "../lib/site-texts";
type FooterProps = {
  phone?: string;
  displayPhone?: string;
};

export default async function Footer(props: FooterProps) {
  // Номер из админки (вкладка «Контакты»), если страница не передала свой
  const SC = await loadSiteContent();
  const phone = props.phone || SC.contacts.main.digits;
  const displayPhone = props.displayPhone || SC.contacts.main.display;

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#292929] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-6 md:py-14">

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-y-10">

            {/* О КОМПАНИИ */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-black text-yellow-400">
                <T p="footer" o={1}>Сервис бытовых услуг</T>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
                <T p="footer" o={2}>Выезд мастеров по Алматы. Сантехника, электрика,
                прочистка канализации и другие бытовые услуги.</T>
              </p>
            </div>

            {/* УСЛУГИ */}
            <div>
              <h3 className="mb-4 text-lg font-black text-yellow-400">
                <T p="footer" o={3}>Наши услуги</T>
              </h3>

              <div className="flex flex-col gap-3 text-sm font-semibold">
                <a href="/santehnik" className="hover:text-yellow-400">
                  <T p="footer" o={4}>Сантехника</T>
                </a>

                <a href="/elektrik" className="hover:text-yellow-400">
                  <T p="footer" o={5}>Электрика</T>
                </a>

                <a
                  href="/prochistka-kanalizacii"
                  className="hover:text-yellow-400"
                >
                  <T p="footer" o={6}>Прочистка</T>
                </a>

                <a
                  href="/uslugi-santehnika"
                  className="hover:text-yellow-400"
                >
                  <T p="footer" o={7}>Все услуги</T>
                </a>
              </div>
            </div>

            {/* ИНФОРМАЦИЯ */}
            <div>
              <h3 className="mb-4 text-lg font-black text-yellow-400">
                <T p="footer" o={8}>Информация</T>
              </h3>

              <div className="flex flex-col gap-3 text-sm font-semibold">
                <a href="/price" className="hover:text-yellow-400">
                  <T p="footer" o={9}>Цены</T>
                </a>

                <a href="/nashi-raboty" className="hover:text-yellow-400">
                  <T p="footer" o={10}>Наши работы</T>
                </a>

                <a href="/otzyvy" className="hover:text-yellow-400">
                  <T p="footer" o={11}>Отзывы</T>
                </a>

                <a href="/kontakty" className="hover:text-yellow-400">
                  <T p="footer" o={12}>Контакты</T>
                </a>
              </div>
            </div>

            {/* КОНТАКТЫ */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-3 text-lg font-black text-yellow-400">
                <T p="footer" o={13}>Связаться с нами</T>
              </h3>

              <p className="text-sm text-gray-400">
                <T p="footer" o={14}>Ежедневно</T>
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
                <T p="footer" o={15}>© 2013–2026 Сервис бытовых услуг. Алматы.</T>
              </p>

              <p>
                <T p="footer" o={16}>Сантехник • Электрик • Прочистка канализации</T>
              </p>
            </div>
          </div>

        </div>
      </footer>
      
    </>
  );
}