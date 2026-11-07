export type ServiceGroup = "plumbing" | "electric" | "drain";

export type ServicePage = {
  slug: string;
  name: string;
  group: ServiceGroup;
  description: string;
};

const equipment = [
  ["smesitelya", "смесителя"],
  ["unitaza", "унитаза"],
  ["installyacii", "инсталляции"],
  ["vanny", "ванны"],
  ["dzhakuzi", "джакузи"],
  ["dushevoy-kabiny", "душевой кабины"],
  ["rakoviny", "раковины"],
  ["moyki", "мойки"],
  ["polotencesushitelya", "полотенцесушителя"],
  ["bide", "биде"],
  ["boylera", "водонагревателя / бойлера"],
  ["radiatorov-otopleniya", "радиаторов отопления"],
  ["sololifta", "сололифта"],
  ["filtrov-dlya-vody", "фильтров для воды"],
] as const;

const actions = [
  ["ustanovka", "Установка"],
  ["zamena", "Замена"],
  ["remont", "Ремонт"],
] as const;

/* Эти страницы уже существуют — оставляем их отдельными. */
const existingPages = new Set([
  "ustanovka-smesitelya",
  "ustanovka-unitaza",
  "ustanovka-rakoviny",
]);

const equipmentPages: ServicePage[] = actions.flatMap(
  ([prefix, action]) =>
    equipment
      .filter(([slug]) => !existingPages.has(`${prefix}-${slug}`))
      .map(([slug, name]) => ({
        slug: `${prefix}-${slug}`,
        name: `${action} ${name}`,
        group: "plumbing" as const,
        description:
          `${action} ${name} в Алматы с выездом мастера. ` +
          "Уточним задачу, согласуем стоимость до начала работ " +
          "и проверим результат. Позвоните или напишите в WhatsApp.",
      }))
);

type ServiceRow = readonly [slug: string, name: string];

const plumbingRows: ServiceRow[] = [
  ["ustanovka-santehniki", "Установка сантехники"],
  ["zamena-santehniki", "Замена сантехники"],
  ["remont-santehniki", "Ремонт сантехники"],
  ["razvodka-trub", "Разводка труб"],
  ["zamena-trub", "Замена труб"],
  [
    "zamena-kanalizacionnyh-trub",
    "Замена канализационных труб в квартире",
  ],
  [
    "montazh-polipropilenovyh-trub",
    "Монтаж полипропиленовых труб",
  ],
  ["zamena-chugunnyh-trub", "Замена чугунных труб"],
  ["zamena-metallicheskih-trub", "Замена металлических труб"],
  [
    "remont-metalloplastikovyh-trub",
    "Ремонт металлопластиковых труб",
  ],
  ["zamena-stoyakov", "Замена стояков"],
  [
    "svarochno-santehnicheskie-raboty",
    "Сварочно-сантехнические работы",
  ],
  ["payka-mednyh-trub", "Пайка медных труб"],
  [
    "svarka-polipropilenovyh-trub",
    "Сварка полипропиленовых труб",
  ],
  ["svarka-stoyakov", "Сварка стояков"],
  ["ustranenie-protechek", "Устранение протечек"],
  ["ustranenie-protechki-truby", "Устранение протечки трубы"],
  [
    "promyvka-sistemy-otopleniya",
    "Промывка системы отопления",
  ],
  ["promyvka-teploobmennikov", "Промывка теплообменников"],
  [
    "promyvka-teploobmennikov-gazovyh-kotlov",
    "Промывка теплообменников газовых котлов",
  ],
  [
    "chistka-radiatorov-otopleniya",
    "Чистка радиаторов отопления",
  ],
  ["uslugi-teplovizora", "Услуги тепловизора"],
  ["razmorozka-trub", "Разморозка труб"],
];

const electricRows: ServiceRow[] = [
  ["ustanovka-elektroschetchika", "Установка электросчётчика"],
  ["razvodka-elektriki", "Разводка электрики"],
  ["razvodka-elektriki-v-kvartire", "Разводка электрики в квартире"],
  ["razvodka-elektriki-v-dome", "Разводка электрики в доме"],
  ["elektromontazhnye-raboty", "Электромонтажные работы"],
  ["ustanovka-svetilnikov", "Установка светильников"],
  [
    "ustanovka-svetodiodnyh-svetilnikov",
    "Установка светодиодных светильников",
  ],
  [
    "ustanovka-tochechnyh-svetilnikov",
    "Установка точечных светильников",
  ],
  [
    "ustanovka-potolochnyh-svetilnikov",
    "Установка потолочных светильников",
  ],
  [
    "ustanovka-svetilnikov-armstrong",
    "Установка светильников Армстронг",
  ],
  [
    "ustanovka-ulichnogo-svetilnika",
    "Установка уличного светильника",
  ],
  ["ustanovka-lyustry", "Установка люстры"],
  ["remont-lyustr", "Ремонт люстр"],
  ["ustanovka-rozetok", "Установка розеток"],
  ["ustanovka-naruzhnyh-rozetok", "Установка наружных розеток"],
  ["remont-rozetok", "Ремонт розеток"],
  ["ustanovka-vyklyuchateley", "Установка выключателей"],
  [
    "ustanovka-odnoklavishnogo-vyklyuchatelya",
    "Установка одноклавишного выключателя",
  ],
  [
    "ustanovka-dvuhklavishnogo-vyklyuchatelya",
    "Установка двухклавишного выключателя",
  ],
  ["ustanovka-bra", "Установка бра"],
  ["montazh-svetodiodnoy-lenty", "Монтаж светодиодной ленты"],
  ["elektroprovodka", "Электропроводка"],
  ["montazh-shchitka", "Монтаж щитка"],
  ["zamena-avtomatov-v-shchitke", "Замена автоматов в щитке"],
];

const drainRows: ServiceRow[] = [
      ["ustranenie-zasorov", "Устранение засоров"],
  [
    "prochistka-kanalizacii-v-kvartire",
    "Прочистка канализации в квартире",
  ],
  [
    "prochistka-kanalizacii-v-dome",
    "Прочистка канализации в доме",
  ],
  [
    "prochistka-kanalizacii-davleniem",
    "Прочистка канализации давлением",
  ],
  [
    "gidrodinamicheskaya-prochistka",
    "Гидродинамическая прочистка",
  ],
  [
    "ustranenie-slozhnyh-zasorov",
    "Устранение засоров любой сложности",
  ],
  [
    "avariynoe-ustranenie-zasorov",
    "Аварийное устранение засоров",
  ],
  ["prochistka-trub", "Прочистка труб"],
  [
    "prochistka-naruzhnoy-kanalizacii",
    "Прочистка наружной канализации",
  ],
  [
    "prochistka-livnevoy-kanalizacii",
    "Прочистка ливневой канализации",
  ],
  ["mehanicheskaya-prochistka", "Механическая прочистка"],
  [
    "mehanicheskaya-prochistka-kanalizacii",
    "Механическая прочистка канализации",
  ],
  ["mehanicheskaya-prochistka-trub", "Механическая прочистка труб"],
  [
    "prochistka-kanalizacii-v-zhilyh-domah",
    "Прочистка канализации в жилых домах",
  ],
  [
    "ustranenie-zasorov-v-mnogokvartirnom-dome",
    "Устранение засоров в многоквартирном доме",
  ],
  [
    "ustranenie-zasora-chastnoy-kanalizacii",
    "Устранение засора частной канализации",
  ],
  [
    "chistka-kanalizacii-v-chastnom-dome",
    "Чистка канализации в частном доме",
  ],
  ["zasor-v-dushevoy-kabine", "Устранение засора в душевой кабине"],
  ["zasor-unitaza", "Устранение засора унитаза"],
  [
    "ustranenie-zasora-unitaza-v-kvartire",
    "Устранение сложного засора унитаза в квартире",
  ],
  [
    "ustranenie-zasora-unitaza-v-chastnom-dome",
    "Устранение засора унитаза в частном доме",
  ],
  ["zasor-v-rakovine", "Устранение засора в раковине"],
  [
    "ustranenie-zasora-rakoviny-na-kuhne",
    "Устранение засора раковины на кухне",
  ],
  ["zasor-v-vannoy", "Устранение засора в ванной"],
  [
    "zasor-v-kanalizacionnoy-trube",
    "Устранение засора в канализационной трубе",
  ],
  [
    "zasor-v-chugunnoy-kanalizacionnoy-trube",
    "Устранение засора в чугунной канализационной трубе",
  ],
  [
    "zasor-kanalizacionnoy-truby-v-tualete",
    "Устранение засора канализационной трубы в туалете",
  ],
  [
    "zasor-kanalizacionnyh-trub-na-kuhne",
    "Устранение засора канализационных труб на кухне",
  ],
  ["videodiagnostika-trub", "Видеодиагностика труб"],
];

function createPages(
  rows: ServiceRow[],
  group: ServiceGroup
): ServicePage[] {
  const endings: Record<ServiceGroup, string> = {
    plumbing:
      "Выезд сантехника по Алматы и пригороду. " +
      "Обсудим задачу, материалы и стоимость до начала работ.",
    electric:
      "Выезд электрика по Алматы и пригороду. " +
      "Уточним задачу, согласуем объём работ и стоимость.",
    drain:
      "Выезд мастера по Алматы и пригороду. " +
      "Подберём способ диагностики и прочистки под вашу задачу.",
  };

  return rows.map(([slug, name]) => ({
    slug,
    name,
    group,
    description: `${name} в Алматы. ${endings[group]}`,
  }));
}

const pages = [
  ...equipmentPages,
  ...createPages(plumbingRows, "plumbing"),
  ...createPages(electricRows, "electric"),
  ...createPages(drainRows, "drain"),
];

/* Убираем повторяющиеся адреса. */
export const servicePages: ServicePage[] = Array.from(
  new Map(pages.map((page) => [page.slug, page])).values()
);

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}