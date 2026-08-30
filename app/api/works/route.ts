import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdmin } from "../../../lib/admin-auth";

type WorkRow = {
  id: number;
  category: string | null;
  title: string | null;
  before_image: string | null;
  after_image: string | null;
  before_label: string | null;
  after_label: string | null;
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

function toWork(row: WorkRow) {
  return {
    id: String(row.id),
    category: row.category || "",
    title: row.title || "",
    beforeImage: row.before_image || "",
    afterImage: row.after_image || "",
    beforeLabel: row.before_label || "До",
    afterLabel: row.after_label || "После",
    enabled: row.enabled ?? true,
  };
}

async function uploadImage(file: File | null) {
  if (!file || file.size === 0) return "";

  const supabase = getSupabaseAdmin();

  const originalExtension =
    file.name.split(".").pop()?.toLowerCase() || "jpg";

  const safeExtension = originalExtension.replace(/[^a-z0-9]/g, "") || "jpg";
  const fileName = `${crypto.randomUUID()}.${safeExtension}`;

  const bytes = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from("works")
    .upload(fileName, bytes, {
      contentType: file.type || "image/jpeg",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from("works").getPublicUrl(fileName);

  return data.publicUrl;
}

function getStorageFileName(url: string) {
  if (!url) return null;

  const marker = "/storage/v1/object/public/works/";

  const index = url.indexOf(marker);

  if (index === -1) return null;

  return decodeURIComponent(url.slice(index + marker.length));
}

async function deleteStorageImage(url: string) {
  const fileName = getStorageFileName(url);

  if (!fileName) return;

  const supabase = getSupabaseAdmin();

  await supabase.storage.from("works").remove([fileName]);
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("works")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("id", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      ((data || []) as WorkRow[]).map(toWork)
    );
  } catch (error) {
    console.error("GET works error:", error);

    return NextResponse.json(
      { error: "Не удалось загрузить работы" },
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
    const form = await request.formData();

    const title = form.get("title")?.toString().trim();

    const beforeFile = form.get("beforeImage") as File | null;
    const afterFile = form.get("afterImage") as File | null;

    if (
      !title ||
      !beforeFile ||
      beforeFile.size === 0 ||
      !afterFile ||
      afterFile.size === 0
    ) {
      return NextResponse.json(
        { error: "Нужно название и две фотографии" },
        { status: 400 }
      );
    }

    const beforeImage = await uploadImage(beforeFile);

    let afterImage = "";

    try {
      afterImage = await uploadImage(afterFile);
    } catch (error) {
      await deleteStorageImage(beforeImage);
      throw error;
    }

    const supabase = getSupabaseAdmin();

    const { data: lastRows, error: orderError } = await supabase
      .from("works")
      .select("sort_order")
      .order("sort_order", { ascending: false })
      .limit(1);

    if (orderError) {
      await deleteStorageImage(beforeImage);
      await deleteStorageImage(afterImage);
      throw new Error(orderError.message);
    }

    const nextSortOrder =
      lastRows && lastRows.length > 0
        ? (lastRows[0].sort_order || 0) + 1
        : 1;

    const { data, error } = await supabase
      .from("works")
      .insert({
        category:
          form.get("category")?.toString().trim() || "Наши работы",
        title,
        before_image: beforeImage,
        after_image: afterImage,
        before_label:
          form.get("beforeLabel")?.toString().trim() || "До",
        after_label:
          form.get("afterLabel")?.toString().trim() || "После",
        enabled: true,
        sort_order: nextSortOrder,
      })
      .select()
      .single();

    if (error) {
      await deleteStorageImage(beforeImage);
      await deleteStorageImage(afterImage);
      throw new Error(error.message);
    }

    return NextResponse.json(toWork(data as WorkRow));
  } catch (error) {
    console.error("POST works error:", error);

    return NextResponse.json(
      { error: "Не удалось добавить работу" },
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
    const form = await request.formData();

    const id = form.get("id")?.toString();

    if (!id) {
      return NextResponse.json(
        { error: "Не указан ID работы" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: current, error: findError } = await supabase
      .from("works")
      .select("*")
      .eq("id", id)
      .single();

    if (findError || !current) {
      return NextResponse.json(
        { error: "Работа не найдена" },
        { status: 404 }
      );
    }

    const currentWork = current as WorkRow;

    const beforeFile = form.get("beforeImage") as File | null;
    const afterFile = form.get("afterImage") as File | null;

    let newBeforeImage = "";
    let newAfterImage = "";

    if (beforeFile && beforeFile.size > 0) {
      newBeforeImage = await uploadImage(beforeFile);
    }

    if (afterFile && afterFile.size > 0) {
      newAfterImage = await uploadImage(afterFile);
    }

    const updateData = {
      category:
        form.get("category")?.toString().trim() ||
        currentWork.category ||
        "",
      title:
        form.get("title")?.toString().trim() ||
        currentWork.title ||
        "",
      before_label:
        form.get("beforeLabel")?.toString().trim() ||
        currentWork.before_label ||
        "До",
      after_label:
        form.get("afterLabel")?.toString().trim() ||
        currentWork.after_label ||
        "После",
      before_image:
        newBeforeImage || currentWork.before_image || "",
      after_image:
        newAfterImage || currentWork.after_image || "",
      enabled:
        form.get("enabled") !== null
          ? form.get("enabled") === "true"
          : currentWork.enabled ?? true,
    };

    const { error } = await supabase
      .from("works")
      .update(updateData)
      .eq("id", id);

    if (error) {
      if (newBeforeImage) {
        await deleteStorageImage(newBeforeImage);
      }

      if (newAfterImage) {
        await deleteStorageImage(newAfterImage);
      }

      throw new Error(error.message);
    }

    if (newBeforeImage && currentWork.before_image) {
      await deleteStorageImage(currentWork.before_image);
    }

    if (newAfterImage && currentWork.after_image) {
      await deleteStorageImage(currentWork.after_image);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT works error:", error);

    return NextResponse.json(
      { error: "Не удалось изменить работу" },
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
        { error: "Не указан ID работы" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    const { data: current, error: findError } = await supabase
      .from("works")
      .select("*")
      .eq("id", body.id)
      .single();

    if (findError || !current) {
      return NextResponse.json(
        { error: "Работа не найдена" },
        { status: 404 }
      );
    }

    const currentWork = current as WorkRow;

    const { error } = await supabase
      .from("works")
      .delete()
      .eq("id", body.id);

    if (error) {
      throw new Error(error.message);
    }

    if (currentWork.before_image) {
      await deleteStorageImage(currentWork.before_image);
    }

    if (currentWork.after_image) {
      await deleteStorageImage(currentWork.after_image);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE works error:", error);

    return NextResponse.json(
      { error: "Не удалось удалить работу" },
      { status: 500 }
    );
  }
}