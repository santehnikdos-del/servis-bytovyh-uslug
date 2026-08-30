import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../../lib/admin-auth";

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
        { error: "Не указан ID отзыва" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("reviews")
      .update({ approved: true })
      .eq("id", body.id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Approve review error:", error);

    return NextResponse.json(
      { error: "Не удалось одобрить отзыв" },
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
        { error: "Не указан ID отзыва" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", body.id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete review error:", error);

    return NextResponse.json(
      { error: "Не удалось удалить отзыв" },
      { status: 500 }
    );
  }
}