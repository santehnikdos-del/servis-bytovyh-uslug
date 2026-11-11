// Общие типы и проверки для текстов и скидки (можно использовать и в браузере).

export const SITE_TEXTS_KEY = "__site_texts";
export const SITE_PROMO_KEY = "__site_promo";

// Изменённые надписи: { страница: { исходный текст: новый текст } }
export type SiteTexts = Record<string, Record<string, string>>;

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
