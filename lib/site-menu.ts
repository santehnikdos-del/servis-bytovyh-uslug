// Меню услуг в шапке сайта.
// Здесь — меню по умолчанию (как было на сайте). Если меню изменено в админке,
// сайт берёт сохранённое меню из базы (таблица prices, запись SITE_MENU_KEY).

export type ServiceItem = {
  id: string;
  title: string;
  href: string;
  children?: ServiceItem[];
};

// Раздел меню.
// type "menu"  — раздел с выпадающим списком
// type "link"  — просто ссылка без списка
// type "other" — «Прочие услуги»: список берётся из раздела админки «Прочие услуги»
export type MenuGroup = {
  id: string;
  type: "menu" | "link" | "other";
  title: string; // название на компьютере
  href?: string; // куда ведёт название на компьютере
  mobileTitle?: string; // название в мобильном меню (если пусто — как на компьютере)
  mobileHref?: string; // куда ведёт название в мобильном меню
  allTitle?: string; // подпись ссылки «Все услуги …» внизу списка
  allHref?: string; // куда ведёт «Все услуги …» в мобильном меню
  alignRight?: boolean; // список открывается вправо (для разделов у правого края)
  enabled?: boolean; // false — раздел скрыт
  items: ServiceItem[];
};

export const SITE_MENU_KEY = "__site_menu";

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
        : `/santehnik/${district.slug}`,
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
export const plumbingMenu: ServiceItem[] = [
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
export const electricMenu: ServiceItem[] = [
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
export const drainServices: ServiceItem[] = [
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

export const DEFAULT_MENU: MenuGroup[] = [
  {
    id: "plumbing",
    type: "menu",
    title: "Услуги сантехника",
    href: "/uslugi-santehnika",
    mobileTitle: "Сантехник",
    mobileHref: "/santehnik",
    allTitle: "Все услуги сантехника",
    allHref: "/uslugi-santehnika",
    items: plumbingMenu,
  },
  {
    id: "electric",
    type: "menu",
    title: "Услуги электрика",
    href: "/elektrik",
    mobileTitle: "Электрик",
    mobileHref: "/elektrik",
    allTitle: "Все услуги электрика",
    allHref: "/elektrik",
    items: electricMenu,
  },
  {
    id: "drain",
    type: "menu",
    title: "Устранение засоров",
    href: "/ustranenie-zasorov",
    mobileTitle: "Прочистка канализации",
    mobileHref: "/prochistka-kanalizacii",
    allTitle: "Подробнее",
    allHref: "/prochistka-kanalizacii",
    alignRight: true,
    items: drainServices,
  },
  {
    id: "carpenter",
    type: "link",
    title: "Услуги плотника",
    href: "/plotnik",
    items: [],
  },
  {
    id: "other",
    type: "other",
    title: "Прочие услуги",
    alignRight: true,
    items: [],
  },
];

// Проверка и очистка меню, пришедшего из базы или из админки
function cleanItems(value: unknown, depth: number): ServiceItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((x) => x && typeof x === "object")
    .map((x, i) => {
      const o = x as Record<string, unknown>;
      const item: ServiceItem = {
        id: typeof o.id === "string" && o.id ? o.id : `item-${depth}-${i}`,
        title: typeof o.title === "string" ? o.title : "",
        href: typeof o.href === "string" ? o.href : "",
      };
      if (depth < 1) {
        const children = cleanItems(o.children, depth + 1);
        if (children.length) item.children = children;
      }
      return item;
    })
    .filter((x) => x.title.trim());
}

export function cleanMenu(value: unknown): MenuGroup[] | null {
  if (!Array.isArray(value)) return null;
  const str = (v: unknown) => (typeof v === "string" ? v : undefined);
  const groups = value
    .filter((x) => x && typeof x === "object")
    .map((x, i) => {
      const o = x as Record<string, unknown>;
      const type = o.type === "link" || o.type === "other" ? o.type : "menu";
      return {
        id: str(o.id) || `group-${i}`,
        type,
        title: str(o.title) || "",
        href: str(o.href),
        mobileTitle: str(o.mobileTitle),
        mobileHref: str(o.mobileHref),
        allTitle: str(o.allTitle),
        allHref: str(o.allHref),
        alignRight: o.alignRight === true,
        enabled: o.enabled !== false,
        items: type === "menu" ? cleanItems(o.items, 0) : [],
      } as MenuGroup;
    })
    .filter((g) => g.title.trim());
  return groups;
}
