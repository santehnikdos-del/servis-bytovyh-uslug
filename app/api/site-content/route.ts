import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../lib/admin-auth";
import {
  SITE_PROMO_KEY,
  SITE_TEXTS_KEY,
  cleanPromo,
  cleanTexts,
} from "../../../lib/site-texts-shared";
import { SITE_CONTENT_TAG } from "../../../lib/site-texts";

// Тексты страниц и полоса скидки (вкладки «Тексты» и «Скидка» в админке).
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

function parse(value: unknown) {
  try {
    return typeof value === "string" ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Нет доступа" }, { status: 401 });
  }
  try {
    const { data, error } = await getSupabaseAdmin()
      .from("prices")
      .select("key,value")
      .in("key", [SITE_TEXTS_KEY, SITE_PROMO_KEY]);
    if (error) throw new Error(error.message);
    const row = (k: string) => (data || []).find((r) => r.key === k)?.value;
    return NextResponse.json({
      texts: cleanTexts(parse(row(SITE_TEXTS_KEY))),
      promo: cleanPromo(parse(row(SITE_PROMO_KEY))),
    });
  } catch (error) {
    console.error("GET site-content error:", error);
    return NextResponse.json({ error: "Не удалось загрузить данные" }, { status: 500 });
  }
}

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

    if (body && "texts" in body) {
      const value = JSON.stringify(cleanTexts(body.texts));
      if (value.length > 1_000_000) {
        return NextResponse.json({ error: "Слишком много текста." }, { status: 413 });
      }
      rows.push({ key: SITE_TEXTS_KEY, value });
    }
    if (body && "promo" in body) {
      rows.push({ key: SITE_PROMO_KEY, value: JSON.stringify(cleanPromo(body.promo)) });
    }
    if (!rows.length) {
      return NextResponse.json({ error: "Нечего сохранять" }, { status: 400 });
    }

    const { error } = await getSupabaseAdmin().from("prices").upsert(rows, { onConflict: "key" });
    if (error) throw new Error(error.message);

    // Сбросить запомненные тексты и обновить все страницы сайта
    revalidateTag(SITE_CONTENT_TAG, { expire: 0 });
    revalidatePath("/", "layout");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST site-content error:", error);
    return NextResponse.json({ error: "Не удалось сохранить. Попробуйте ещё раз." }, { status: 500 });
  }
}
