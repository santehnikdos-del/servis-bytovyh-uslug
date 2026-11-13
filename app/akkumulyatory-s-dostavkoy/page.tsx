import type { Metadata } from "next";
import { imgSrc, loadSiteContent, withSeo } from "../../lib/site-texts";
import T from "../T";
import Header from "../Header";
import Footer from "../Footer";
import Script from "next/script";
import ConversionTracking from "./ConversionTracking";

const pageMetadata: Metadata = {
  title:
    "Автомобильные аккумуляторы с доставкой по Алматы | Сервис бытовых услуг",
  description:
    "Автомобильные аккумуляторы с доставкой по Алматы. Поможем подобрать аккумулятор и доставим по городу.",
  alternates: {
    canonical: "https://www.home-services.kz/akkumulyatory-s-dostavkoy",
  },
};

export default async function AkkumulyatoryPage() {
  const SC = await loadSiteContent();

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <ConversionTracking phone={SC.contacts.battery.digits} />
      <Script
  src={imgSrc(SC, "https://www.googletagmanager.com/gtag/js?id=AW-18420476013")}
  strategy="afterInteractive"
/>

<Script id="google-ads-akkumulyatory" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18420476013');
  `}
</Script>

      <div className="[&>div]:!static [&>header]:!static">
  <Header
    phone={`${SC.contacts.battery.digits}`}
    displayPhone={`${SC.contacts.battery.display}`}
  />
</div>

      {/* ================= МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН ================= */}
      <section className="bg-[#303030] px-6 py-8 text-white md:hidden">

        <h1 className="text-center text-3xl font-bold text-yellow-400">
          <T p="akkumulyatory" o={1}>Аккумуляторы с доставкой по Алматы</T>
        </h1>

        <p className="mt-4 text-center text-lg font-bold">
          <T p="akkumulyatory" o={2}>Подберём автомобильный аккумулятор, доставим по адресу
          и при необходимости поможем с заменой.</T>
        </p>

        <div className="mt-10 grid grid-cols-3 gap-2 text-center">

          <div className="flex flex-col items-center">
            <img
              src={imgSrc(SC, "/banner-fast.png")}
              alt="Быстрая доставка"
              className="h-12 w-12 object-contain"
            />
            <p className="mt-3 text-base">
              <T p="akkumulyatory" o={3}>Быстрая</T><br /><T p="akkumulyatory" o={4}>доставка</T>
            </p>
          </div>

          <div className="flex flex-col items-center border-x border-white/20">
            <img
              src={imgSrc(SC, "/banner-garantiya.png")}
              alt="Гарантия"
              className="h-12 w-12 object-contain"
            />
            <p className="mt-3 text-base">
              <T p="akkumulyatory" o={5}>Гарантия</T><br /><T p="akkumulyatory" o={6}>на товар</T>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={imgSrc(SC, "/banner-everyday.png")}
              alt="Каждый день"
              className="h-12 w-12 object-contain"
            />
            <p className="mt-3 text-base">
              <T p="akkumulyatory" o={7}>Работаем</T><br /><T p="akkumulyatory" o={8}>каждый день</T>
            </p>
          </div>

        </div>

        <p className="mt-5 px-5 text-center text-base leading-6">
          <T p="akkumulyatory" o={9}>Поможем выбрать аккумулятор под ваш автомобиль
          и организуем доставку по Алматы.</T>
        </p>

      </section>


      {/* ================= ПЕРВЫЙ ЭКРАН — КОМПЬЮТЕР ================= */}
      <section
       className="relative hidden min-h-[535px] overflow-hidden bg-[#282828] bg-no-repeat md:block md:bg-[length:100%_auto] md:bg-[position:center_0]"
        style={{
          backgroundImage: "url('/master.jpg')",
          backgroundPosition: "center 0px",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[535px] max-w-7xl items-start px-6 pb-8 pt-8">
          <div className="max-w-5xl">

            <p className="font-bold text-yellow-400">
              <T p="akkumulyatory" o={10}>Доставка по Алматы</T>
            </p>

            <p className="mt-2 max-w-4xl text-5xl font-black leading-[1.05] text-white md:text-6xl">
              <T p="akkumulyatory" o={11}>Автомобильные аккумуляторы с доставкой</T>
            </p>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              <T p="akkumulyatory" o={12}>Подберём аккумулятор для вашего автомобиля,
              доставим по Алматы и при необходимости поможем с заменой.</T>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
              href={`tel:+${SC.contacts.battery.digits}`}
                className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                <T p="akkumulyatory" o={13}>📞 Позвонить</T>
              </a>

              <a
                href={`https://wa.me/${SC.contacts.battery.digits}`}
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
                ["/banner-fast.png", "Быстрая", "доставка"],
                ["/banner-garantiya.png", "Гарантия", "на товар"],
                ["/banner-master.png", "Поможем", "подобрать"],
              ].map(([icon, line1, line2]) => (
                <div
                  key={line1}
                  className="flex flex-col items-center justify-center text-center md:border-r md:border-white/20 md:last:border-r-0"
                >
                  <div className="mb-4 flex h-14 items-center justify-center">
                    <img
                      src={imgSrc(SC, icon)}
                      alt=""
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  <p className="text-lg font-black text-white">
                    <T p="akkumulyatory" o={14}>{line1}</T>
                    <br />
                    <T p="akkumulyatory" o={15}>{line2}</T>
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= ПОДБОР АККУМУЛЯТОРА ================= */}
<section className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      <T p="akkumulyatory" o={16}>Подбор аккумулятора</T>
    </p>

    <h2 className="mt-2 text-4xl font-black">
      <T p="akkumulyatory" o={17}>Подберём аккумулятор для вашего автомобиля</T>
    </h2>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {[
        [
          "Легковые автомобили",
          "Подберём аккумулятор по марке, модели и объёму двигателя.",
        ],
        [
          "Внедорожники",
          "Поможем подобрать аккумулятор с подходящей ёмкостью и пусковым током.",
        ],
        [
          "Коммерческие авто",
          "Аккумуляторы для фургонов, микроавтобусов и рабочего транспорта.",
        ],
        [
          "Доставка и замена",
          "Доставим аккумулятор по Алматы и при необходимости поможем с заменой.",
        ],
      ].map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
        >
          <div className="mb-4 h-2 w-12 rounded-full bg-yellow-400" />

          <h3 className="text-xl font-black">
            <T p="akkumulyatory" o={18}>{title}</T>
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            <T p="akkumulyatory" o={19}>{text}</T>
          </p>

          
        </div>
      ))}

    </div>

  </div>
</section>

{/* ================= ПОЧЕМУ ВЫБИРАЮТ НАС ================= */}
<section className="bg-[#086b9b] py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-400">
      <T p="akkumulyatory" o={20}>Наши преимущества</T>
    </p>

    <h2 className="mt-2 text-4xl font-black">
      <T p="akkumulyatory" o={21}>Почему покупают аккумуляторы у нас</T>
    </h2>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {[
        ["Быстрая доставка", "Доставляем аккумуляторы по Алматы."],
        ["Поможем выбрать", "Подберём аккумулятор под ваш автомобиль."],
        ["Гарантия на товар", "На аккумуляторы предоставляется гарантия."],
        ["Цена заранее", "Стоимость аккумулятора согласовываем до доставки."],
        ["Доставка каждый день", "Принимаем заказы ежедневно."],
        ["Помощь с заменой", "При необходимости поможем заменить аккумулятор."],
      ].map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/10 hover:shadow-xl"
        >
          <div className="mb-4 h-2 w-12 rounded-full bg-yellow-400" />

          <h3 className="text-xl font-black">
            <T p="akkumulyatory" o={22}>{title}</T>
          </h3>

          <p className="mt-3 text-slate-200">
            <T p="akkumulyatory" o={23}>{text}</T>
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= КАК МЫ РАБОТАЕМ ================= */}
<section className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      <T p="akkumulyatory" o={24}>Как мы работаем</T>
    </p>

    <h2 className="mt-2 text-4xl font-black">
      <T p="akkumulyatory" o={25}>От заказа до установки аккумулятора</T>
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
          "Подбор",
          "Подбираем аккумулятор под марку и модель автомобиля.",
        ],
        [
          "03",
          "Доставка",
          "Доставляем аккумулятор по вашему адресу в Алматы.",
        ],
        [
          "04",
          "Замена",
          "При необходимости помогаем установить новый аккумулятор.",
        ],
      ].map(([number, title, text]) => (
        <div
          key={number}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black">
            <T p="akkumulyatory" o={26}>{number}</T>
          </div>

          <h3 className="mt-5 text-xl font-black">
            <T p="akkumulyatory" o={27}>{title}</T>
          </h3>

          <p className="mt-3 text-slate-600">
            <T p="akkumulyatory" o={28}>{text}</T>
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= ОТЗЫВЫ ================= */}
<section id="reviews" className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <p className="font-bold text-yellow-500">
      <T p="akkumulyatory" o={29}>Отзывы клиентов</T>
    </p>

    <h2 className="mt-2 text-4xl font-black">
      <T p="akkumulyatory" o={30}>Что говорят наши клиенты</T>
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        [
          "Айдар",
          "Помогли подобрать аккумулятор для машины и доставили по адресу.",
        ],
        [
          "Динара",
          "Заказала аккумулятор с доставкой. Всё привезли быстро.",
        ],
        [
          "Марат",
          "Подобрали подходящий аккумулятор и помогли с заменой.",
        ],
        [
          "Алия",
          "Удобно, что не пришлось самой искать аккумулятор по магазинам.",
        ],
        [
          "Руслан",
          "Быстро подобрали аккумулятор по марке автомобиля.",
        ],
        [
          "Сауле",
          "Хороший сервис. Аккумулятор доставили по Алматы без проблем.",
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
            “<T p="akkumulyatory" o={31}>{text}</T>”
          </p>

          <p className="mt-5 font-black">
            <T p="akkumulyatory" o={32}>{name}</T>
          </p>

          <p className="text-sm text-slate-500">
            <T p="akkumulyatory" o={33}>Алматы</T>
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= FAQ ================= */}
<section id="faq" className="bg-white py-16 text-slate-950">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-center text-3xl font-black md:text-4xl">
      <T p="akkumulyatory" o={34}>Часто задаваемые вопросы</T>
    </h2>

    <div className="mt-10 space-y-4">
      {[
        [
          "Как подобрать аккумулятор для автомобиля?",
          "Сообщите марку, модель, год выпуска и объём двигателя автомобиля. Мы поможем подобрать подходящий аккумулятор.",
        ],
        [
          "Есть ли доставка по Алматы?",
          "Да, доставляем автомобильные аккумуляторы по Алматы.",
        ],
        [
          "Можно ли заменить аккумулятор на месте?",
          "Да, при необходимости поможем снять старый и установить новый аккумулятор.",
        ],
        [
          "Есть ли гарантия на аккумулятор?",
          "Да, гарантия предоставляется в соответствии с условиями на выбранный аккумулятор.",
        ],
        [
          "Можно ли заказать аккумулятор через WhatsApp?",
          "Да, напишите нам в WhatsApp данные автомобиля, и мы поможем с подбором.",
        ],
        [
          "Работаете ли вы в выходные?",
          "Да, принимаем заказы каждый день.",
        ],
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group overflow-hidden rounded-2xl border border-transparent bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-7">
            <span className="text-xl font-black text-slate-950">
              <T p="akkumulyatory" o={35}>{question}</T>
            </span>

            <span className="ml-5 text-3xl font-light text-blue-600 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-7 pb-7">
            <p className="text-lg leading-7 text-slate-600">
              <T p="akkumulyatory" o={36}>{answer}</T>
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
      <T p="akkumulyatory" o={37}>Доставка по городу</T>
    </p>

    <h2 className="mt-2 text-4xl font-black">
      <T p="akkumulyatory" o={38}>Доставка аккумуляторов по всем районам Алматы</T>
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
      <T p="akkumulyatory" o={39}>Доставляем автомобильные аккумуляторы по Алматы.</T>
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

{/* ================= СРОЧНЫЙ ЗАКАЗ ================= */}
<section className="bg-sky-800 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="rounded-3xl border border-yellow-400/20 bg-slate-900 p-10">

      <p className="font-bold text-yellow-400">
        <T p="akkumulyatory" o={40}>Доставка по Алматы</T>
      </p>

      <div className="mt-3 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        <div>
          <h2 className="text-4xl font-black md:text-5xl">
            <T p="akkumulyatory" o={41}>Нужен аккумулятор?</T>
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            <T p="akkumulyatory" o={42}>Позвоните или напишите в WhatsApp. Поможем подобрать
            аккумулятор для вашего автомобиля и организуем доставку.</T>
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:+${SC.contacts.battery.digits}`}
            className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 transition hover:bg-yellow-300"
          >
            <T p="akkumulyatory" o={43}>📞 Позвонить</T>
          </a>

          <a
            href={`https://wa.me/${SC.contacts.battery.digits}`}
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

// Заголовок и описание для поиска можно изменить в админке (вкладка «SEO»)
export async function generateMetadata(): Promise<Metadata> {
  return withSeo("/akkumulyatory-s-dostavkoy", pageMetadata);
}
