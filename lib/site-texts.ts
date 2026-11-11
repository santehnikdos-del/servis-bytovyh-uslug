import { cache } from "react";
import { createClient } from "@supabase/supabase-js";

// Тексты страниц и полоса скидки, изменённые в админке.
// Хранятся в таблице prices двумя служебными записями (новая таблица не нужна).

import {
  DEFAULT_PROMO,
  SITE_PROMO_KEY,
  SITE_TEXTS_KEY,
  cleanPromo,
  cleanTexts,
  type Promo,
  type SiteTexts,
} from "./site-texts-shared";

export * from "./site-texts-shared";

export const SITE_CONTENT_TAG = "site-content";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    // Ответ базы запоминается до следующего сохранения в админке:
    // при сохранении метка SITE_CONTENT_TAG сбрасывается (app/api/site-content).
    global: {
      fetch: (input: RequestInfo | URL, init?: RequestInit) =>
        fetch(input, { ...init, cache: "force-cache", next: { tags: [SITE_CONTENT_TAG] } }),
    },
  });
}

// Читаем один раз на страницу. Если база недоступна — сайт показывает исходные тексты.
export const loadSiteContent = cache(async (): Promise<{ texts: SiteTexts; promo: Promo }> => {
  try {
    const supabase = getSupabase();
    if (!supabase) return { texts: {}, promo: DEFAULT_PROMO };

    const { data, error } = await supabase
      .from("prices")
      .select("key,value")
      .in("key", [SITE_TEXTS_KEY, SITE_PROMO_KEY]);

    if (error) throw new Error(error.message);

    const row = (k: string) => (data || []).find((r) => r.key === k)?.value;
    const parse = (v: unknown) => {
      try {
        return typeof v === "string" ? JSON.parse(v) : null;
      } catch {
        return null;
      }
    };

    return {
      texts: cleanTexts(parse(row(SITE_TEXTS_KEY))),
      promo: cleanPromo(parse(row(SITE_PROMO_KEY))),
    };
  } catch (error) {
    console.error("Ошибка загрузки текстов сайта:", error);
    return { texts: {}, promo: DEFAULT_PROMO };
  }
});
