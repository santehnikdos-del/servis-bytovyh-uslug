import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../lib/admin-auth";

type PriceRow = {
  id: number;
  key: string;
  value: string;
};

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

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("prices")
      .select("id,key,value")
      .order("id", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    const prices: Record<string, string> = {};

    for (const row of (data || []) as PriceRow[]) {
      prices[row.key] = row.value;
    }

    return NextResponse.json(prices);
  } catch (error) {
    console.error("GET prices error:", error);

    return NextResponse.json(
      { error: "Не удалось прочитать цены" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Нет доступа" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        { error: "Неверный формат данных" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const rows = Object.entries(body).map(([key, value]) => ({
      key,
      value: String(value ?? ""),
    }));

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Нет цен для сохранения" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("prices")
      .upsert(rows, {
        onConflict: "key",
      });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST prices error:", error);

    return NextResponse.json(
      { error: "Не удалось сохранить цену" },
      { status: 500 }
    );
  }
}