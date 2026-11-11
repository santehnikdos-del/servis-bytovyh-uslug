// Общие типы и проверки для содержимого сайта, которое меняется в админке:
// тексты, скидка, телефоны, заголовки для поиска (SEO) и картинки.
// Этот файл можно использовать и в браузере (в админке).

export const SITE_TEXTS_KEY = "__site_texts";
export const SITE_PROMO_KEY = "__site_promo";
export const SITE_CONTACTS_KEY = "__site_contacts";
export const SITE_SEO_KEY = "__site_seo";
export const SITE_IMAGES_KEY = "__site_images";

export const SITE_CONTENT_KEYS = [
  SITE_TEXTS_KEY,
  SITE_PROMO_KEY,
  SITE_CONTACTS_KEY,
  SITE_SEO_KEY,
  SITE_IMAGES_KEY,
];

/* ---------- Тексты ---------- */

// Изменённые надписи: { страница: { исходный текст: новый текст } }
export type SiteTexts = Record<string, Record<string, string>>;

// Одинаково сравниваем тексты: лишние пробелы и переносы не важны
export function normText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function cleanTexts(value: unknown): SiteTexts {
  const result: SiteTexts = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return result;
  for (const [page, map] of Object.entries(value as Record<string, unknown>)) {
    if (!map || typeof map !== "object" || Array.isArray(map)) continue;
    const clean: Record<string, string> = {};
    for (const [from, to] of Object.entries(map as Record<string, unknown>)) {
      const key = normText(from);
      if (key && typeof to === "string" && normText(to) && normText(to) !== key) {
        clean[key] = to.trim();
      }
    }
    if (Object.keys(clean).length) result[page] = clean;
  }
  return result;
}

/* ---------- Скидка ---------- */

export type Promo = {
  enabled: boolean;
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
};

export const DEFAULT_PROMO: Promo = {
  enabled: false,
  title: "Скидка 15% на все услуги",
  text: "Оставьте заявку и получите скидку на первый заказ.",
  buttonText: "Получить скидку",
  buttonHref: "https://wa.me/77771696969",
};

export function cleanPromo(value: unknown): Promo {
  const o = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const str = (v: unknown, d: string) => (typeof v === "string" ? v : d);
  return {
    enabled: o.enabled === true,
    title: str(o.title, DEFAULT_PROMO.title),
    text: str(o.text, DEFAULT_PROMO.text),
    buttonText: str(o.buttonText, DEFAULT_PROMO.buttonText),
    buttonHref: str(o.buttonHref, DEFAULT_PROMO.buttonHref),
  };
}

/* ---------- Телефоны ---------- */

// digits — для звонка и WhatsApp (только цифры), display — как показывать на сайте
export type Phone = { digits: string; display: string };

// main — основной номер (сантехник и почти весь сайт), electric — электрик,
// battery — аккумуляторы с доставкой
export type Contacts = { main: Phone; electric: Phone; battery: Phone };

export const DEFAULT_CONTACTS: Contacts = {
  main: { digits: "77771696969", display: "+7 777 169 69 69" },
  electric: { digits: "77073232632", display: "+7 707 323 26 32" },
  battery: { digits: "77082000513", display: "+7 708 200 05 13" },
};

function cleanPhone(value: unknown, fallback: Phone): Phone {
  const o = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const digits = typeof o.digits === "string" ? o.digits.replace(/\D/g, "") : "";
  const display = typeof o.display === "string" ? o.display.trim() : "";
  // Номер без цифр не сохраняем — иначе на сайте пропадут кнопки звонка
  if (digits.length < 10) return fallback;
  return { digits, display: display || `+${digits}` };
}

export function cleanContacts(value: unknown): Contacts {
  const o = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  return {
    main: cleanPhone(o.main, DEFAULT_CONTACTS.main),
    electric: cleanPhone(o.electric, DEFAULT_CONTACTS.electric),
    battery: cleanPhone(o.battery, DEFAULT_CONTACTS.battery),
  };
}

/* ---------- Заголовки для поиска (SEO) ---------- */

// { адрес страницы: { title, description } } — только изменённые
export type SeoMap = Record<string, { title?: string; description?: string }>;

export function cleanSeo(value: unknown): SeoMap {
  const result: SeoMap = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return result;
  for (const [path, v] of Object.entries(value as Record<string, unknown>)) {
    if (!path.startsWith("/") || !v || typeof v !== "object") continue;
    const o = v as Record<string, unknown>;
    const title = typeof o.title === "string" ? normText(o.title) : "";
    const description = typeof o.description === "string" ? normText(o.description) : "";
    if (title || description) {
      result[path] = {};
      if (title) result[path].title = title;
      if (description) result[path].description = description;
    }
  }
  return result;
}

/* ---------- Картинки ---------- */

// { исходная картинка (например /banner-master.jpg): новая ссылка }
export type ImageMap = Record<string, string>;

export function cleanImages(value: unknown): ImageMap {
  const result: ImageMap = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return result;
  for (const [from, to] of Object.entries(value as Record<string, unknown>)) {
    if (!from.startsWith("/") || typeof to !== "string") continue;
    const url = to.trim();
    if (url.startsWith("https://") || url.startsWith("/")) result[from] = url;
  }
  return result;
}

/* ---------- Всё вместе ---------- */

export type SiteContent = {
  texts: SiteTexts;
  promo: Promo;
  contacts: Contacts;
  seo: SeoMap;
  images: ImageMap;
};

export const EMPTY_SITE_CONTENT: SiteContent = {
  texts: {},
  promo: DEFAULT_PROMO,
  contacts: DEFAULT_CONTACTS,
  seo: {},
  images: {},
};

// Строки таблицы prices → содержимое сайта
export function rowsToSiteContent(rows: { key: string; value: string | null }[]): SiteContent {
  const parse = (k: string) => {
    const v = rows.find((r) => r.key === k)?.value;
    try {
      return typeof v === "string" ? JSON.parse(v) : null;
    } catch {
      return null;
    }
  };
  return {
    texts: cleanTexts(parse(SITE_TEXTS_KEY)),
    promo: cleanPromo(parse(SITE_PROMO_KEY)),
    contacts: cleanContacts(parse(SITE_CONTACTS_KEY)),
    seo: cleanSeo(parse(SITE_SEO_KEY)),
    images: cleanImages(parse(SITE_IMAGES_KEY)),
  };
}
