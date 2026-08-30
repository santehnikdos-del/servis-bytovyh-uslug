import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../lib/admin-auth";

type ServiceRow = {
  id: number;
  name: string | null;
  href: string | null;
  description: string | null;
  enabled: boolean | null;
  sort_order: number | null;
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

function normalizeHref(href: string) {
  const value = href.trim();

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/")
  ) {
    return value;
  }

  return `/${value}`;
}

function toService(row: ServiceRow) {
  return {
    id: String(row.id),
    title: row.name || "",
    href: row.href || "",
    description: row.description || "",
    enabled: row.enabled ?? true,
  };
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("electric_services")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("id", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      ((data || []) as ServiceRow[]).map(toService)
    );
  } catch (error) {
    console.error("GET electric services error:", error);

    return NextResponse.json(
      { error: "Не удалось загрузить услуги" },
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

    if (!body.title?.trim() || !body.href?.trim()) {
      return NextResponse.json(
        { error: "Заполните название и ссылку" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: lastRows, error: orderError } = await supabase
      .from("electric_services")
      .select("sort_order")
      .order("sort_order", { ascending: false })
      .limit(1);

    if (orderError) {
      throw new Error(orderError.message);
    }

    const nextSortOrder =
      lastRows && lastRows.length > 0
        ? (lastRows[0].sort_order || 0) + 1
        : 1;

    const { data, error } = await supabase
      .from("electric_services")
      .insert({
        name: body.title.trim(),
        href: normalizeHref(body.href),
        description: body.description?.trim() || "",
        enabled: true,
        sort_order: nextSortOrder,
      })
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(toService(data as ServiceRow));
  } catch (error) {
    console.error("POST electric services error:", error);

    return NextResponse.json(
      { error: "Не удалось добавить услугу" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Нет доступа" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (!body.id) {
      return NextResponse.json(
        { error: "Не указан ID услуги" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: current, error: findError } = await supabase
      .from("electric_services")
      .select("*")
      .eq("id", body.id)
      .single();

    if (findError || !current) {
      return NextResponse.json(
        { error: "Услуга не найдена" },
        { status: 404 }
      );
    }

    const currentService = current as ServiceRow;

    const updateData = {
      name:
        body.title !== undefined
          ? body.title.trim()
          : currentService.name,
      href:
        body.href !== undefined
          ? normalizeHref(body.href)
          : currentService.href,
      description:
        body.description !== undefined
          ? body.description.trim()
          : currentService.description,
      enabled:
        typeof body.enabled === "boolean"
          ? body.enabled
          : currentService.enabled,
    };

    const { error } = await supabase
      .from("electric_services")
      .update(updateData)
      .eq("id", body.id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT electric services error:", error);

    return NextResponse.json(
      { error: "Не удалось изменить услугу" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Нет доступа" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (!body.id) {
      return NextResponse.json(
        { error: "Не указан ID услуги" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("electric_services")
      .delete()
      .eq("id", body.id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE electric services error:", error);

    return NextResponse.json(
      { error: "Не удалось удалить услугу" },
      { status: 500 }
    );
  }
}