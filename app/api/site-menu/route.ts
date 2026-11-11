import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../lib/admin-auth";
import { SITE_MENU_KEY, cleanMenu } from "../../../lib/site-menu";

// Меню услуг хранится в таблице prices одной записью с ключом SITE_MENU_KEY
// (новую таблицу в Supabase создавать не нужно).

export const dynamic = "force-dynamic";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Не настроены переменные Supabase");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/* ПОЛУЧИТЬ: сохранённое меню или null (тогда сайт показывает меню по умолчанию) */
export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("prices")
      .select("value")
      .eq("key", SITE_MENU_KEY)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!data?.value) return NextResponse.json(null);

    const menu = cleanMenu(JSON.parse(data.value));
    return NextResponse.json(menu && menu.length ? menu : null);
  } catch (error) {
    console.error("GET site-menu error:", error);
    return NextResponse.json(null);
  }
}

/* СОХРАНИТЬ */
export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Вы вышли из админки. Обновите страницу и войдите снова." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const menu = cleanMenu(body);

    if (!menu || menu.length === 0) {
      return NextResponse.json(
        { error: "Меню пустое — добавьте хотя бы один раздел." },
        { status: 400 }
      );
    }

    const value = JSON.stringify(menu);

    if (value.length > 500_000) {
      return NextResponse.json(
        { error: "Меню слишком большое." },
        { status: 413 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("prices")
      .upsert([{ key: SITE_MENU_KEY, value }], { onConflict: "key" });

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST site-menu error:", error);
    return NextResponse.json(
      { error: "Не удалось сохранить меню. Попробуйте ещё раз." },
      { status: 500 }
    );
  }
}

/* ВЕРНУТЬ МЕНЮ ПО УМОЛЧАНИЮ */
export async function DELETE() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Нет доступа" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("prices")
      .delete()
      .eq("key", SITE_MENU_KEY);

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE site-menu error:", error);
    return NextResponse.json(
      { error: "Не удалось вернуть меню по умолчанию." },
      { status: 500 }
    );
  }
}
