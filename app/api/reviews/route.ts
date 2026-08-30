import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("reviews")
      .select("id, created_at, name, text, rating, city, approved")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data ?? []);
  } catch {
    return NextResponse.json(
      { error: "Ошибка загрузки отзывов" },
      { status: 500 }
    );
  }
}