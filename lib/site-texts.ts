import { appendFileSync } from "fs";
import { cache } from "react";
import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import {
  EMPTY_SITE_CONTENT,
  SITE_CONTENT_KEYS,
  rowsToSiteContent,
  type SiteContent,
} from "./site-texts-shared";

// Содержимое сайта, изменённое в админке (тексты, скидка, телефоны, SEO, картинки).
// Хранится в таблице prices служебными записями (новая таблица не нужна).

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

// Читаем один раз на страницу. Если база недоступна — сайт показывает исходное содержимое.
export const loadSiteContent = cache(async (): Promise<SiteContent> => {
  try {
    const supabase = getSupabase();
    if (!supabase) return EMPTY_SITE_CONTENT;

    const { data, error } = await supabase
      .from("prices")
      .select("key,value")
      .in("key", SITE_CONTENT_KEYS);

    if (error) throw new Error(error.message);
    return rowsToSiteContent(data || []);
  } catch (error) {
    console.error("Ошибка загрузки содержимого сайта:", error);
    return EMPTY_SITE_CONTENT;
  }
});

// Только для разработчика: при сборке с COLLECT_SITE_TEXTS записываем, что есть на страницах
export function collect(entry: Record<string, unknown>) {
  if (process.env.COLLECT_SITE_TEXTS) {
    appendFileSync(process.env.COLLECT_SITE_TEXTS, JSON.stringify(entry) + "\n");
  }
}

// Картинка: если в админке загружена замена — показываем её
export function imgSrc<T>(sc: SiteContent, src: T): T | string {
  if (typeof src !== "string") return src;
  collect({ img: src });
  return sc.images[src] || src;
}

// Заголовок и описание страницы для поиска: из админки, если изменены
export async function withSeo(path: string, base: Metadata): Promise<Metadata> {
  const baseTitle =
    typeof base.title === "string"
      ? base.title
      : base.title && typeof base.title === "object" && "absolute" in base.title
        ? String(base.title.absolute)
        : "";
  const baseDescription = typeof base.description === "string" ? base.description : "";
  collect({ seo: path, title: baseTitle, description: baseDescription });

  const { seo } = await loadSiteContent();
  const over = seo[path];
  if (!over) return base;

  const title = over.title || baseTitle;
  const description = over.description || baseDescription;
  return {
    ...base,
    title: over.title ? { absolute: title } : base.title,
    description,
    openGraph: base.openGraph
      ? { ...base.openGraph, title: over.title ? title : base.openGraph.title, description }
      : base.openGraph,
    twitter: base.twitter
      ? { ...base.twitter, title: over.title ? title : base.twitter.title, description }
      : base.twitter,
  };
}
