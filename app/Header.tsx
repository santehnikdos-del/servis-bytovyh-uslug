"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import mobileLogo from "../public/hs-logo.png";
import desktopLogo from "../public/logo.png";

type HeaderProps = {
  phone?: string;
  displayPhone?: string;
};

type ServiceItem = {
  id: string;
  title: string;
  href: string;
  children?: ServiceItem[];
};

type OtherService = {
  id: string;
  name: string;
  href: string;
  enabled: boolean;
};

/* РАЙОНЫ */
const districts = [
  { slug: "almalinskiy-rayon", title: "Алмалинский район" },
  { slug: "medeuskiy-rayon", title: "Медеуский район" },
  { slug: "bostandykskiy-rayon", title: "Бостандыкский район" },
  { slug: "auezovskiy-rayon", title: "Ауэзовский район" },
  { slug: "turksibskiy-rayon", title: "Турксибский район" },
  { slug: "nauryzbayskiy-rayon", title: "Наурызбайский район" },
  { slug: "alatauskiy-rayon", title: "Алатауский район" },
  { slug: "zhetysuskiy-rayon", title: "Жетысуский район" },
];

function createDistrictMenu(service: string): ServiceItem[] {
  return districts.map((district) => ({
    id: `${service}-${district.slug}`,
    title: district.title,
    href:
      service === "elektrik"
        ? `/elektrik/${district.slug}`
        : `/santehnik/rayony/${district.slug}`,
  }));
}

/* УСТАНОВКА, ЗАМЕНА И РЕМОНТ */
const plumbingEquipment = [
  { slug: "smesitelya", name: "смесителя" },
  { slug: "unitaza", name: "унитаза" },
  { slug: "installyacii", name: "инсталляции" },
  { slug: "vanny", name: "ванны" },
  { slug: "dzhakuzi", name: "джакузи" },
  { slug: "dushevoy-kabiny", name: "душевой кабины" },
  { slug: "rakoviny", name: "раковины" },
  { slug: "moyki", name: "мойки" },
  { slug: "polotencesushitelya", name: "полотенцесушителя" },
  { slug: "bide", name: "биде" },
  { slug: "boylera", name: "водонагревателя / бойлера" },
  { slug: "radiatorov-otopleniya", name: "радиаторов отопления" },
  { slug: "sololifta", name: "сололифта" },
  { slug: "filtrov-dlya-vody", name: "фильтров для воды" },
];

function createEquipmentMenu(
  action: string,
  prefix: string
): ServiceItem[] {
  return plumbingEquipment.map((item) => ({
    id: `${prefix}-${item.slug}`,
    title: `${action} ${item.name}`,
    href: `/${prefix}-${item.slug}`,
  }));
}

/* САНТЕХНИКА */
const plumbingMenu: ServiceItem[] = [
  {
    id: "plumbing-call",
    title: "Вызов сантехника на дом",
    href: "/santehnik",
    children: createDistrictMenu("santehnik"),
  },
  {
    id: "plumbing-install",
    title: "Установка сантехники",
    href: "/ustanovka-santehniki",
    children: createEquipmentMenu("Установка", "ustanovka"),
  },
  {
    id: "plumbing-replace",
    title: "Замена сантехники",
    href: "/zamena-santehniki",
    children: createEquipmentMenu("Замена", "zamena"),
  },
  {
    id: "plumbing-repair",
    title: "Ремонт сантехники",
    href: "/remont-santehniki",
    children: createEquipmentMenu("Ремонт", "remont"),
  },
  {
    id: "plumbing-work",
    title: "Сантехнические работы",
    href: "/uslugi-santehnika",
    children: [
      {
        id: "plumbing-prices",
        title: "Прайс на сантехнические работы",
        href: "/price",
      },
    ],
  },
  {
    id: "plumbing-pipes",
    title: "Разводка труб",
    href: "/razvodka-trub",
    children: [
      {
        id: "pipes-1",
        title: "Замена труб",
        href: "/zamena-trub",
      },
      {
        id: "pipes-2",
        title: "Замена канализационных труб в квартире",
        href: "/zamena-kanalizacionnyh-trub",
      },
      {
        id: "pipes-3",
        title: "Монтаж полипропиленовых труб",
        href: "/montazh-polipropilenovyh-trub",
      },
      {
        id: "pipes-4",
        title: "Замена чугунных труб",
        href: "/zamena-chugunnyh-trub",
      },
      {
        id: "pipes-5",
        title: "Замена металлических труб",
        href: "/zamena-metallicheskih-trub",
      },
      {
        id: "pipes-6",
        title: "Ремонт металлопластиковых труб",
        href: "/remont-metalloplastikovyh-trub",
      },
      {
        id: "pipes-7",
        title: "Замена стояков",
        href: "/zamena-stoyakov",
      },
    ],
  },
  {
    id: "plumbing-welding",
    title: "Сварочно-сантехнические работы",
    href: "/svarochno-santehnicheskie-raboty",
    children: [
      {
        id: "welding-1",
        title: "Пайка медных труб",
        href: "/payka-mednyh-trub",
      },
      {
        id: "welding-2",
        title: "Сварка полипропиленовых труб",
        href: "/svarka-polipropilenovyh-trub",
      },
      {
        id: "welding-3",
        title: "Сварка стояков",
        href: "/svarka-stoyakov",
      },
    ],
  },
  {
    id: "plumbing-leaks",
    title: "Устранение протечек",
    href: "/ustranenie-protechek",
    children: [
      {
        id: "leaks-1",
        title: "Устранение протечки трубы",
        href: "/ustranenie-protechki-truby",
      },
      {
        id: "leaks-2",
        title: "Течёт смеситель",
        href: "/remont-smesitelya",
      },
    ],
  },
  {
    id: "plumbing-heating",
    title: "Промывка системы отопления",
    href: "/promyvka-sistemy-otopleniya",
    children: [
      {
        id: "heating-1",
        title: "Промывка теплообменников",
        href: "/promyvka-teploobmennikov",
      },
      {
        id: "heating-2",
        title: "Промывка теплообменников газовых котлов",
        href: "/promyvka-teploobmennikov-gazovyh-kotlov",
      },
      {
        id: "heating-3",
        title: "Чистка радиаторов отопления",
        href: "/chistka-radiatorov-otopleniya",
      },
    ],
  },
  {
    id: "plumbing-thermal",
    title: "Услуги тепловизора",
    href: "/uslugi-teplovizora",
  },
  {
    id: "plumbing-defrost",
    title: "Разморозка труб",
    href: "/razmorozka-trub",
  },
  {
    id: "plumbing-online",
    title: "Онлайн-консультации",
    href: "https://wa.me/77771696969",
  },
];

/* ЭЛЕКТРИКА */
const electricMenu: ServiceItem[] = [
  {
    id: "electric-call",
    title: "Вызов электрика на дом",
    href: "/elektrik",
    children: [
      ...createDistrictMenu("elektrik"),
      {
        id: "electric-meter",
        title: "Установка электросчётчика",
        href: "/ustanovka-elektroschetchika",
      },
    ],
  },
  {
    id: "electric-wiring",
    title: "Разводка электрики",
    href: "/razvodka-elektriki",
    children: [
      {
        id: "wiring-apartment",
        title: "Разводка электрики в квартире",
        href: "/razvodka-elektriki-v-kvartire",
      },
      {
        id: "wiring-house",
        title: "Разводка электрики в доме",
        href: "/razvodka-elektriki-v-dome",
      },
    ],
  },
  {
    id: "electric-work",
    title: "Электромонтажные работы",
    href: "/elektromontazhnye-raboty",
    children: [
      {
        id: "electric-prices",
        title: "Прайс на электромонтажные работы",
        href: "/price",
      },
    ],
  },
  {
    id: "electric-lights",
    title: "Установка светильников",
    href: "/ustanovka-svetilnikov",
    children: [
      {
        id: "lights-led",
        title: "Установка светодиодных светильников",
        href: "/ustanovka-svetodiodnyh-svetilnikov",
      },
      {
        id: "lights-spot",
        title: "Установка точечных светильников",
        href: "/ustanovka-tochechnyh-svetilnikov",
      },
      {
        id: "lights-ceiling",
        title: "Установка потолочных светильников",
        href: "/ustanovka-potolochnyh-svetilnikov",
      },
      {
        id: "lights-armstrong",
        title: "Установка светильников Армстронг",
        href: "/ustanovka-svetilnikov-armstrong",
      },
      {
        id: "lights-outdoor",
        title: "Установка уличного светильника",
        href: "/ustanovka-ulichnogo-svetilnika",
      },
    ],
  },
  {
    id: "electric-chandelier",
    title: "Установка люстры",
    href: "/ustanovka-lyustry",
    children: [
      {
        id: "chandelier-repair",
        title: "Ремонт люстр",
        href: "/remont-lyustr",
      },
    ],
  },
  {
    id: "electric-sockets",
    title: "Установка розеток",
    href: "/ustanovka-rozetok",
    children: [
      {
        id: "sockets-external",
        title: "Установка наружных розеток",
        href: "/ustanovka-naruzhnyh-rozetok",
      },
      {
        id: "sockets-repair",
        title: "Ремонт розеток",
        href: "/remont-rozetok",
      },
    ],
  },
  {
    id: "electric-switches",
    title: "Установка выключателей",
    href: "/ustanovka-vyklyuchateley",
    children: [
      {
        id: "switch-single",
        title: "Установка одноклавишного выключателя",
        href: "/ustanovka-odnoklavishnogo-vyklyuchatelya",
      },
      {
        id: "switch-double",
        title: "Установка двухклавишного выключателя",
        href: "/ustanovka-dvuhklavishnogo-vyklyuchatelya",
      },
    ],
  },
  {
    id: "electric-sconce",
    title: "Установка бра",
    href: "/ustanovka-bra",
  },
  {
    id: "electric-led-strip",
    title: "Монтаж светодиодной ленты",
    href: "/montazh-svetodiodnoy-lenty",
  },
  {
    id: "electric-cables",
    title: "Проводка",
    href: "/elektroprovodka",
  },
  {
    id: "electric-panel",
    title: "Монтаж щитка",
    href: "/montazh-shchitka",
    children: [
      {
        id: "panel-breakers",
        title: "Замена автоматов в щитке",
        href: "/zamena-avtomatov-v-shchitke",
      },
    ],
  },
];

/* ПРОЧИСТКА КАНАЛИЗАЦИИ */
const drainServices: ServiceItem[] = [
  {
    id: "drain-1",
    title: "Прочистка канализации",
    href: "/prochistka-kanalizacii",
    children: [
      {
        id: "drain-apartment",
        title: "Прочистка канализации в квартире",
        href: "/prochistka-kanalizacii-v-kvartire",
      },
      {
        id: "drain-house",
        title: "Прочистка канализации в доме",
        href: "/prochistka-kanalizacii-v-dome",
      },
      {
        id: "drain-pressure",
        title: "Прочистка канализации давлением",
        href: "/prochistka-kanalizacii-davleniem",
      },
      {
        id: "drain-hydro",
        title: "Гидродинамическая прочистка",
        href: "/gidrodinamicheskaya-prochistka",
      },
      {
        id: "drain-complex",
        title: "Устранение засоров любой сложности",
        href: "/ustranenie-slozhnyh-zasorov",
      },
      {
        id: "drain-emergency",
        title: "Аварийное устранение засоров",
        href: "/avariynoe-ustranenie-zasorov",
      },
      {
        id: "drain-pipes",
        title: "Прочистка труб",
        href: "/prochistka-trub",
      },
      {
        id: "drain-outdoor",
        title: "Прочистка наружной канализации",
        href: "/prochistka-naruzhnoy-kanalizacii",
      },
      {
        id: "drain-storm",
        title: "Прочистка ливневой канализации",
        href: "/prochistka-livnevoy-kanalizacii",
      },
    ],
  },
  {
    id: "drain-2",
    title: "Прочистка канализации гидродинамическим способом",
    href: "/gidrodinamicheskaya-prochistka",
  },
  {
    id: "drain-3",
    title: "Механическая прочистка",
    href: "/mehanicheskaya-prochistka",
    children: [
      {
        id: "mechanical-sewer",
        title: "Механическая прочистка канализации",
        href: "/mehanicheskaya-prochistka-kanalizacii",
      },
    ],
  },
  {
    id: "drain-4",
    title: "Механическая прочистка труб",
    href: "/mehanicheskaya-prochistka-trub",
  },
  {
    id: "drain-5",
    title: "Прочистка канализации в жилых домах",
    href: "/prochistka-kanalizacii-v-zhilyh-domah",
    children: [
      {
        id: "drain-building",
        title: "Устранение засоров в многоквартирном доме",
        href: "/ustranenie-zasorov-v-mnogokvartirnom-dome",
      },
      {
        id: "drain-private",
        title: "Устранение засора частной канализации",
        href: "/ustranenie-zasora-chastnoy-kanalizacii",
      },
      {
        id: "drain-private-clean",
        title: "Чистка канализации в частном доме",
        href: "/chistka-kanalizacii-v-chastnom-dome",
      },
    ],
  },
  {
    id: "drain-6",
    title: "Засор в душевой кабине",
    href: "/zasor-v-dushevoy-kabine",
  },
  {
    id: "drain-7",
    title: "Засор унитаза",
    href: "/zasor-unitaza",
    children: [
      {
        id: "toilet-apartment",
        title: "Устранение сложного засора унитаза в квартире",
        href: "/ustranenie-zasora-unitaza-v-kvartire",
      },
      {
        id: "toilet-house",
        title: "Устранение засора унитаза в частном доме",
        href: "/ustranenie-zasora-unitaza-v-chastnom-dome",
      },
    ],
  },
  {
    id: "drain-8",
    title: "Засор в раковине",
    href: "/zasor-v-rakovine",
    children: [
      {
        id: "sink-kitchen",
        title: "Устранение засора раковины на кухне",
        href: "/ustranenie-zasora-rakoviny-na-kuhne",
      },
    ],
  },
  {
    id: "drain-9",
    title: "Засор в ванной",
    href: "/zasor-v-vannoy",
  },
  {
    id: "drain-10",
    title: "Засор в канализационной трубе",
    href: "/zasor-v-kanalizacionnoy-trube",
    children: [
      {
        id: "pipe-cast-iron",
        title: "Засор в чугунной канализационной трубе",
        href: "/zasor-v-chugunnoy-kanalizacionnoy-trube",
      },
      {
        id: "pipe-toilet",
        title: "Засор канализационной трубы в туалете",
        href: "/zasor-kanalizacionnoy-truby-v-tualete",
      },
      {
        id: "pipe-kitchen",
        title: "Засор канализационных труб на кухне",
        href: "/zasor-kanalizacionnyh-trub-na-kuhne",
      },
    ],
  },
  {
    id: "drain-11",
    title: "Видеодиагностика труб",
    href: "/videodiagnostika-trub",
  },
];

const navigation = [
  { title: "Главная", href: "/" },
  { title: "О нас", href: "/o-nas" },
  { title: "Наши работы", href: "/nashi-raboty" },
  { title: "Отзывы", href: "/otzyvy" },
  { title: "Цены", href: "/price" },
  { title: "Контакты", href: "/kontakty" },
];

const serviceCardClass = `
  flex min-h-11 items-center gap-2
  rounded-xl bg-white px-3 py-2
  text-[#0092B8]
  shadow-[0_2px_8px_rgba(0,80,120,0.05)]
  transition duration-200
  hover:bg-[#FDC700]/10
  hover:shadow-[0_3px_10px_rgba(0,80,120,0.09)]
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-[#0092B8]
`;

/* ИКОНКИ */
function ServiceIcon({ title }: { title: string }) {
  const text = title.toLowerCase();
  let drawing;

  if (/район/.test(text)) {
    drawing = (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    );
  } else if (/вызов/.test(text)) {
    drawing = (
      <path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" />
    );
  } else if (/консультац/.test(text)) {
    drawing = (
      <>
        <path d="M21 11a8 8 0 0 1-8 8H8l-5 3v-7a8 8 0 1 1 18-4Z" />
        <path d="M8 10h8M8 14h5" />
      </>
    );
  } else if (/тепловизор|видеодиагност/.test(text)) {
    drawing = (
      <>
        <rect x="3" y="4" width="14" height="12" rx="2" />
        <path d="m17 8 4-2v8l-4-2M8 16v5h4v-5" />
        <circle cx="10" cy="10" r="3" />
      </>
    );
  } else if (/размороз/.test(text)) {
    drawing = (
      <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M3 10l4-1-1-4M21 14l-4 1 1 4M3 14l4 1-1 4M21 10l-4-1 1-4" />
    );
  } else if (/прайс|цен/.test(text)) {
    drawing = (
      <path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h2M14 15h1" />
    );
  } else if (/розет/.test(text)) {
    drawing = (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="6" />
        <path d="M9 11v2M15 11v2M11 17h2" />
      </>
    );
  } else if (/выключател/.test(text)) {
    drawing = (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="m8 7 8 2v8l-8-2ZM11 6h2" />
      </>
    );
  } else if (/щитк|автомат/.test(text)) {
    drawing = (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M7 8h10M7 16h10M9 8v8M15 8v8M12 5h.01" />
      </>
    );
  } else if (/счётчик|счетчик/.test(text)) {
    drawing = (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 6h8v5H8zM8 17h8M10 14h4" />
      </>
    );
  } else if (/светодиодной лент/.test(text)) {
    drawing = (
      <path d="M3 8h18v8H3zM6 11v2M10 11v2M14 11v2M18 11v2" />
    );
  } else if (/люстр|светильник|бра$/.test(text)) {
    drawing = (
      <path d="M12 2v4M8 6h8l4 8H4ZM12 14v4M8 18h8M5 21l1-2M19 21l-1-2" />
    );
  } else if (/электр|провод/.test(text)) {
    drawing = <path d="m13 2-9 12h7l-1 8 10-13h-8z" />;
  } else if (/унитаз|биде/.test(text)) {
    drawing = (
      <>
        <path d="M5 3h5v8H5zM10 9h9v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1" />
        <path d="M11 18v3h6M7 6h1M10 12h9" />
      </>
    );
  } else if (/смесител|кран|протеч/.test(text)) {
    drawing = (
      <>
        <path d="M4 12h13a3 3 0 0 1 3 3v1h-5v-2H4zM9 12V7M6 7h6M9 7V4" />
        <path d="M18 19v2" />
      </>
    );
  } else if (/раковин|мойк/.test(text)) {
    drawing = (
      <path d="M3 12h18a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7ZM12 12V6a2 2 0 0 1 4 0M12 19v3" />
    );
  } else if (/душ/.test(text)) {
    drawing = (
      <path d="M5 21V7a4 4 0 0 1 8 0M10 10h8a4 4 0 0 0-8 0ZM11 14v1M15 14v1M19 14v1M12 18v1M17 18v1" />
    );
  } else if (/ванн|джакузи/.test(text)) {
    drawing = (
      <path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM5 12V6a3 3 0 0 1 6 0M7 20v2M17 20v2" />
    );
  } else if (/бойлер|нагревател|котл/.test(text)) {
    drawing = (
      <>
        <rect x="6" y="3" width="12" height="16" rx="3" />
        <path d="M10 19v3M14 19v3M9 7h6" />
        <circle cx="12" cy="13" r="2" />
      </>
    );
  } else if (/отоплен|полотенцесуш|теплообмен/.test(text)) {
    drawing = (
      <>
        <rect x="4" y="6" width="16" height="13" rx="2" />
        <path d="M8 6v13M12 6v13M16 6v13M2 10h2M20 15h2M7 19v2M17 19v2" />
      </>
    );
  } else if (/фильтр/.test(text)) {
    drawing = <path d="M4 4h16l-6 8v7l-4 2v-9Z" />;
  } else if (
    /труб|прочист|засор|канализа|сололифт|стояк/.test(text)
  ) {
    drawing = (
      <path d="M4 3h6v7h7v11h-6v-5H4zM2 3h10M15 21h4" />
    );
  } else if (/плотник|двер|мебел/.test(text)) {
    drawing = (
      <path d="M5 21V3h14v18M3 21h18M9 3v18M15 12h1" />
    );
  } else {
    drawing = (
      <path d="M14 6a5 5 0 0 0-6 6l-5 5a2.1 2.1 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3 3-3Z" />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      {drawing}
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="service-menu-arrow h-4 w-4 shrink-0"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

function ServiceLink({
  title,
  href,
  onClick,
}: {
  title: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a href={href} onClick={onClick} className={serviceCardClass}>
      <ServiceIcon title={title} />

      <span className="min-w-0 flex-1 break-words text-[14px] font-normal leading-5">
        {title}
      </span>

      <Arrow />
    </a>
  );
}

/* ВЛОЖЕННЫЕ СПИСКИ */
function NestedServiceItem({
  service,
  desktop,
  onNavigate,
}: {
  service: ServiceItem;
  desktop: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    maxHeight: 500,
  });

  const rowRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    if (!desktop) return;

    cancelClose();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  }

  function updatePosition() {
    const row = rowRef.current;
    if (!row) return;

    const bounds = row.getBoundingClientRect();
    const width = Math.min(310, window.innerWidth - 24);
    const maxHeight = Math.max(100, window.innerHeight - 32);

    const estimatedHeight = Math.min(
      (service.children?.length || 0) * 58 + 52,
      maxHeight
    );

    const spaceRight = window.innerWidth - bounds.right;

    const left =
      spaceRight >= width + 8
        ? bounds.right
        : Math.max(8, bounds.left - width);

    const top = Math.max(
      16,
      Math.min(
        bounds.top,
        window.innerHeight - estimatedHeight - 16
      )
    );

    setPosition({ left, top, maxHeight });
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || !desktop) return;

    function handleResize() {
      setOpen(false);
    }

    function handleScroll(event: Event) {
      const target = event.target;

      if (
        target instanceof Node &&
        panelRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open, desktop]);

  return (
    <div
      ref={rowRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();

        if (desktop) {
          updatePosition();
          setOpen(true);
        }
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          setOpen(false);
        }
      }}
    >
      <div className="flex min-h-11 items-center gap-2 rounded-xl bg-white pl-3 pr-1 text-[#0092B8] shadow-[0_2px_8px_rgba(0,80,120,0.05)]">
        <ServiceIcon title={service.title} />

        <a
          href={service.href}
          onClick={onNavigate}
          className="min-w-0 flex-1 py-2 text-[14px] font-normal leading-5"
        >
          {service.title}
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Свернуть" : "Раскрыть"}: ${service.title}`}
          onClick={() => {
            cancelClose();

            if (desktop) updatePosition();

            setOpen(!open);
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hover:bg-[#0092B8]/10"
        >
          <span
            className={`inline-flex transition-transform ${
              open && !desktop ? "rotate-90" : ""
            }`}
          >
            <Arrow />
          </span>
        </button>
      </div>

      {open && (
        <div
          ref={panelRef}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className={
            desktop
              ? "fixed z-[120] w-[310px] max-w-[calc(100vw-24px)] px-2"
              : "pl-2 pt-1.5"
          }
          style={
            desktop
              ? {
                  left: position.left,
                  top: position.top,
                }
              : undefined
          }
        >
          <div
            className={`space-y-1.5 rounded-2xl bg-[#F3F6FA] p-2 ${
              desktop
                ? "overflow-y-auto overscroll-contain shadow-xl"
                : ""
            }`}
            style={
              desktop
                ? { maxHeight: position.maxHeight }
                : undefined
            }
          >
            <p className="px-3 py-1 text-xs font-medium text-slate-500">
              {service.id === "plumbing-call"
                ? "Районы Алматы"
                : service.title}
            </p>

            {service.children?.map((item) => (
              <ServiceLink
                key={item.id}
                title={item.title}
                href={item.href}
                onClick={onNavigate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceList({
  items,
  allHref,
  allTitle,
  onNavigate,
  desktop = false,
}: {
  items: ServiceItem[];
  allHref?: string;
  allTitle?: string;
  onNavigate?: () => void;
  desktop?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      {items.map((service) =>
        service.children?.length ? (
          <NestedServiceItem
            key={service.id}
            service={service}
            desktop={desktop}
            onNavigate={onNavigate}
          />
        ) : (
          <ServiceLink
            key={service.id}
            title={service.title}
            href={service.href}
            onClick={onNavigate}
          />
        )
      )}

      {items.length === 0 && (
        <p className="px-3 py-4 text-sm text-slate-500">
          Услуги пока не добавлены
        </p>
      )}

      {allHref && (
        <ServiceLink
          title={(allTitle || "Все услуги").replace(/\s*→$/, "")}
          href={allHref}
          onClick={onNavigate}
        />
      )}
    </div>
  );
}

function MobileGroup({
  title,
  href,
  open,
  onToggle,
  onNavigate,
  items,
  allHref,
  allTitle,
}: {
  title: string;
  href?: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  items: ServiceItem[];
  allHref?: string;
  allTitle?: string;
}) {
  return (
    <div>
      <div className="flex min-h-11 items-center gap-2 rounded-xl bg-white px-3 py-1 text-[#0092B8] shadow-[0_2px_8px_rgba(0,80,120,0.05)]">
        <ServiceIcon title={title} />

        {href ? (
          <a
            href={href}
            onClick={onNavigate}
            className="min-w-0 flex-1 break-words text-[14px] font-normal"
          >
            {title}
          </a>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="min-w-0 flex-1 text-left text-[14px] font-normal"
          >
            {title}
          </button>
        )}

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-label={`${open ? "Свернуть" : "Раскрыть"}: ${title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-[#0092B8]/10"
        >
          <span
            className={`inline-flex transition-transform ${
              open ? "rotate-90" : ""
            }`}
          >
            <Arrow />
          </span>
        </button>
      </div>

      {open && (
        <div className="pb-1 pl-2 pt-1.5">
          <ServiceList
            items={items}
            allHref={allHref}
            allTitle={allTitle}
            onNavigate={onNavigate}
          />
        </div>
      )}
    </div>
  );
}

function DesktopMenu({
  title,
  href,
  items,
  allTitle,
  alignRight = false,
}: {
  title: string;
  href?: string;
  items: ServiceItem[];
  allTitle?: string;
  alignRight?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 220);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="flex items-center">
        {href ? (
          <a
            href={href}
            className="whitespace-nowrap py-3 hover:text-[#007D9E]"
          >
            {title}
          </a>
        ) : (
          <button
            type="button"
            aria-expanded={open}
            onClick={() => {
              cancelClose();
              setOpen(!open);
            }}
            className="whitespace-nowrap py-3 hover:text-[#007D9E]"
          >
            {title}
          </button>
        )}

        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Свернуть" : "Раскрыть"}: ${title}`}
          onClick={() => {
            cancelClose();
            setOpen(!open);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              cancelClose();
              setOpen(true);
            }
          }}
          className="ml-1 flex h-9 w-7 items-center justify-center"
        >
          <span
            className={`text-[10px] transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      {open && (
        <div
          className={`
            absolute top-full z-[100]
            w-[350px] max-w-[calc(100vw-2rem)]
            rounded-b-2xl bg-[#F3F6FA] p-2
            shadow-[0_16px_35px_rgba(0,50,90,0.18)]
            ${alignRight ? "right-0" : "left-0"}
          `}
        >
          <div className="max-h-[calc(100dvh-180px)] overflow-y-auto overscroll-contain p-1">
            <ServiceList
              items={items}
              allHref={href}
              allTitle={allTitle}
              desktop
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ШАПКА */
export default function Header({
  phone = "77771696969",
  displayPhone = "+7 777 169 69 69",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const [otherServices, setOtherServices] = useState<OtherService[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadOtherServices() {
      try {
        const response = await fetch("/api/other-services", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Ошибка загрузки прочих услуг");
        }

        const data = await response.json();

        if (!controller.signal.aborted && Array.isArray(data)) {
          setOtherServices(
            data.filter((item: OtherService) => item.enabled)
          );
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Ошибка загрузки меню:", error);
        }
      }
    }

    loadOtherServices();

    return () => controller.abort();
  }, []);

  const otherItems: ServiceItem[] = otherServices.map((service) => ({
    id: service.id,
    title: service.name,
    href: service.href,
  }));

  function closeMobileMenus() {
    setMenuOpen(false);
    setServicesOpen(false);
    setActiveGroup(null);
  }

  function toggleGroup(group: string) {
    setActiveGroup((current) => (current === group ? null : group));
  }

  return (
    <div
      className="sticky top-0 z-[9999] bg-white text-slate-950"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMobileMenus();
      }}
    >
      <style>{`
        @keyframes serviceMenuArrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        .service-menu-arrow {
          animation: serviceMenuArrowMove 1.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-menu-arrow {
            animation: none;
          }
        }
      `}</style>

      {/* МОБИЛЬНАЯ ШАПКА */}
      <header className="relative border-b-4 border-[#FDC700] bg-white md:hidden">
        <div className="grid grid-cols-3 items-center">
          <button
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="mobile-services"
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setMenuOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-1 border-r border-slate-200 text-base font-medium uppercase text-slate-600 hover:bg-yellow-50"
          >
            Услуги
            <span className="text-[10px]">
              {servicesOpen ? "▲" : "▼"}
            </span>
          </button>

          <a
            href="/"
            aria-label="На главную"
            className="flex h-14 items-center justify-center"
          >
            <Image
              src={mobileLogo}
              alt="HS — Сервис бытовых услуг"
              sizes="115px"
              className="h-10 w-auto"
            />
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setServicesOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-1 text-base font-medium uppercase text-slate-600 hover:bg-yellow-50"
          >
            Меню
            <span className="text-[10px]">
              {menuOpen ? "▲" : "▼"}
            </span>
          </button>
        </div>

        {servicesOpen && (
          <div
            id="mobile-services"
            className="absolute left-0 top-full z-[200] w-[calc(100%-1rem)] max-w-sm rounded-b-2xl bg-[#F3F6FA] p-2 shadow-2xl"
          >
            <div className="max-h-[calc(100dvh-140px)] space-y-1.5 overflow-y-auto overscroll-contain p-1">
              <MobileGroup
                title="Сантехник"
                href="/santehnik"
                open={activeGroup === "plumbing"}
                onToggle={() => toggleGroup("plumbing")}
                onNavigate={closeMobileMenus}
                items={plumbingMenu}
                allHref="/uslugi-santehnika"
                allTitle="Все услуги сантехника"
              />

              <MobileGroup
                title="Электрик"
                href="/elektrik"
                open={activeGroup === "electric"}
                onToggle={() => toggleGroup("electric")}
                onNavigate={closeMobileMenus}
                items={electricMenu}
                allHref="/elektrik"
                allTitle="Все услуги электрика"
              />

              <MobileGroup
                title="Прочистка канализации"
                href="/prochistka-kanalizacii"
                open={activeGroup === "drain"}
                onToggle={() => toggleGroup("drain")}
                onNavigate={closeMobileMenus}
                items={drainServices}
                allHref="/prochistka-kanalizacii"
                allTitle="Подробнее"
              />

              <ServiceLink
                title="Услуги плотника"
                href="/plotnik"
                onClick={closeMobileMenus}
              />

              <MobileGroup
                title="Прочие услуги"
                open={activeGroup === "other"}
                onToggle={() => toggleGroup("other")}
                onNavigate={closeMobileMenus}
                items={otherItems}
              />
            </div>
          </div>
        )}

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute right-0 top-full z-[200] w-[calc(100%-1rem)] max-w-sm rounded-b-2xl bg-[#F3F6FA] p-2 shadow-2xl"
          >
            <div className="max-h-[calc(100dvh-140px)] space-y-1.5 overflow-y-auto overscroll-contain p-1">
              {navigation.map((item) => (
                <ServiceLink
                  key={item.href}
                  title={item.title}
                  href={item.href}
                  onClick={closeMobileMenus}
                />
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* КОМПЬЮТЕР */}
      <div className="hidden md:block">
        <header className="bg-white text-slate-900">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
            <a href="/" className="flex shrink-0 items-center">
              <Image
                src={desktopLogo}
                alt="Сервис бытовых услуг"
                sizes={`${Math.ceil(80 * desktopLogo.width / desktopLogo.height)}px`}
                className="h-20 w-auto object-contain"
              />
            </a>

            <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-normal">
              <a href="/o-nas" className="hover:text-[#0092B8]">
                О нас
              </a>

              <a
                href="/nashi-raboty"
                className="hover:text-[#0092B8]"
              >
                Наши работы
              </a>

              <a href="/otzyvy" className="hover:text-[#0092B8]">
                Отзывы
              </a>

              <a href="/price" className="hover:text-[#0092B8]">
                Цены
              </a>
            </nav>

            <div className="flex shrink-0 items-center gap-5">
              <div className="text-right">
                <p className="text-sm text-slate-500">
                  Ежедневно · Алматы
                </p>

                <a
                  href={`tel:+${phone}`}
                  className="whitespace-nowrap text-xl font-black lg:text-2xl"
                >
                  {displayPhone}
                </a>
              </div>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-[#0092B8] px-6 py-3 font-bold text-white transition hover:bg-[#007D9E] lg:block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* ЖЁЛТОЕ МЕНЮ */}
        <nav className="bg-[#FDC700] text-slate-950 shadow-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 px-6 font-semibold">
            <a
              href="/"
              className="whitespace-nowrap py-3 hover:text-[#007D9E]"
            >
              Главная
            </a>

            <DesktopMenu
              title="Услуги сантехника"
              href="/uslugi-santehnika"
              items={plumbingMenu}
              allTitle="Все услуги сантехника"
            />

            <DesktopMenu
              title="Услуги электрика"
              href="/elektrik"
              items={electricMenu}
              allTitle="Все услуги электрика"
            />

          <DesktopMenu
             title="Устранение засоров"
             href="/ustranenie-zasorov"
              items={drainServices}
              allTitle="Подробнее"
              alignRight
            />

            <a
              href="/plotnik"
              className="whitespace-nowrap py-3 hover:text-[#007D9E]"
            >
              Услуги плотника
            </a>

            <DesktopMenu
              title="Прочие услуги"
              items={otherItems}
              alignRight
            />
          </div>
        </nav>
      </div>
    </div>
  );
}