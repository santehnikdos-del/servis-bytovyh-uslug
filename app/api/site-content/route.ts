import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../lib/admin-auth";
import {
  SITE_CONTACTS_KEY,
  SITE_CONTENT_KEYS,
  SITE_IMAGES_KEY,
  SITE_PROMO_KEY,
  SITE_SEO_KEY,
  SITE_TEXTS_KEY,
  cleanContacts,
  cleanImages,
  cleanPromo,
  cleanSeo,
  cleanTexts,
  rowsToSiteContent,
} from "../../../lib/site-texts-shared";
import { SITE_CONTENT_TAG } from "../../../lib/site-texts";

// Тексты, скидка, телефоны, SEO и картинки (вкладки админки).
// Хранятся в таблице prices служебными записями.

export const dynamic = "force-dynamic";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Не настроены переменные Supabase");
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Нет доступа" }, { status: 401 });
  }
  try {
    const { data, error } = await getSupabaseAdmin()
      .from("prices")
      .select("key,value")
      .in("key", SITE_CONTENT_KEYS);
    if (error) throw new Error(error.message);
    return NextResponse.json(rowsToSiteContent(data || []));
  } catch (error) {
    console.error("GET site-content error:", error);
    return NextResponse.json({ error: "Не удалось загрузить данные" }, { status: 500 });
  }
}

// Какие разделы можно сохранять и как их проверять
const SECTIONS: [string, string, (v: unknown) => unknown][] = [
  ["texts", SITE_TEXTS_KEY, cleanTexts],
  ["promo", SITE_PROMO_KEY, cleanPromo],
  ["contacts", SITE_CONTACTS_KEY, cleanContacts],
  ["seo", SITE_SEO_KEY, cleanSeo],
  ["images", SITE_IMAGES_KEY, cleanImages],
];

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Вы вышли из админки. Обновите страницу и войдите снова." },
      { status: 401 }
    );
  }
  try {
    const body = await request.json();
    const rows: { key: string; value: string }[] = [];

    for (const [field, key, clean] of SECTIONS) {
      if (body && typeof body === "object" && field in body) {
        const value = JSON.stringify(clean(body[field]));
        if (value.length > 1_000_000) {
          return NextResponse.json({ error: "Слишком много данных." }, { status: 413 });
        }
        rows.push({ key, value });
      }
    }
    if (!rows.length) {
      return NextResponse.json({ error: "Нечего сохранять" }, { status: 400 });
    }

    const { error } = await getSupabaseAdmin().from("prices").upsert(rows, { onConflict: "key" });
    if (error) throw new Error(error.message);

    // Сбросить запомненное содержимое и обновить все страницы сайта
    revalidateTag(SITE_CONTENT_TAG, { expire: 0 });
    revalidatePath("/", "layout");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST site-content error:", error);
    return NextResponse.json({ error: "Не удалось сохранить. Попробуйте ещё раз." }, { status: 500 });
  }
}
