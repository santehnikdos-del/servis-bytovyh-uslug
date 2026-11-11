import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../../lib/admin-auth";

// Загрузка новой картинки для вкладки «Картинки».
// Файл кладётся в то же хранилище Supabase, что и фото «Наших работ» (папка site/).

export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json(
      { error: "Вы вышли из админки. Обновите страницу и войдите снова." },
      { status: 401 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Не настроены переменные Supabase" }, { status: 500 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "Файл не выбран." }, { status: 400 });
    }
    const ext = TYPES[file.type];
    if (!ext) {
      return NextResponse.json({ error: "Можно загружать только JPG, PNG или WEBP." }, { status: 400 });
    }
    if (file.size > 4_000_000) {
      return NextResponse.json({ error: "Картинка слишком большая, максимум 4 МБ." }, { status: 413 });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const fileName = `site/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from("works")
      .upload(fileName, Buffer.from(await file.arrayBuffer()), {
        contentType: file.type,
        upsert: false,
      });
    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from("works").getPublicUrl(fileName);
    return NextResponse.json({ url: data.publicUrl });
  } catch (error) {
    console.error("upload site image error:", error);
    return NextResponse.json({ error: "Не удалось загрузить картинку." }, { status: 500 });
  }
}
