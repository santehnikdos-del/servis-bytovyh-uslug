"use client";

import { useState } from "react";
import registry from "../../../lib/site-texts-registry.json";
import SaveBar from "../SaveBar";
import { useSiteSection } from "../useSiteSection";

const images = (registry as { images: string[] }).images;

// Уменьшаем картинку в браузере перед загрузкой (до 2000 px), чтобы сайт грузился быстро
async function shrink(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 2000 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  // PNG сохраняет прозрачный фон (значки), остальное — JPEG
  const type = file.type === "image/png" ? "image/png" : "image/jpeg";
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Не удалось обработать картинку"))), type, 0.85)
  );
}

function ImageRow({
  original,
  current,
  onChange,
}: {
  original: string;
  current?: string;
  onChange: (url: string | null) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function pick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const blob = await shrink(file);
      const form = new FormData();
      form.append("file", blob, blob.type === "image/png" ? "image.png" : "image.jpg");
      const res = await fetch("/api/site-content/upload", { method: "POST", body: form });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Не удалось загрузить картинку.");
      onChange(j.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Не удалось загрузить картинку.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={current ? "rounded-2xl border-2 border-yellow-300 bg-white p-4" : "rounded-2xl border border-slate-200 bg-white p-4"}>
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-center">
          <div className="grid h-28 w-40 place-items-center overflow-hidden rounded-lg bg-[repeating-conic-gradient(#e2e8f0_0_25%,#fff_0_50%)] bg-[length:16px_16px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={original} alt="" className="max-h-28 max-w-40 object-contain" />
          </div>
          <span className="text-xs text-slate-500">исходная</span>
        </div>
        {current && (
          <>
            <span className="text-2xl text-slate-400">→</span>
            <div className="text-center">
              <div className="grid h-28 w-40 place-items-center overflow-hidden rounded-lg bg-[repeating-conic-gradient(#e2e8f0_0_25%,#fff_0_50%)] bg-[length:16px_16px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={current} alt="" className="max-h-28 max-w-40 object-contain" />
              </div>
              <span className="text-xs font-bold text-yellow-700">новая</span>
            </div>
          </>
        )}
        <div className="ml-auto flex flex-col items-end gap-2">
          <code className="text-sm text-slate-500">{original}</code>
          <div className="flex gap-2">
            <label className="cursor-pointer rounded-lg bg-slate-900 px-4 py-2 font-bold text-white hover:bg-slate-700">
              {busy ? "Загружаю…" : current ? "Заменить ещё раз" : "Заменить"}
              <input type="file" accept="image/jpeg,image/png,image/webp" hidden disabled={busy} onChange={pick} />
            </label>
            {current && (
              <button type="button" onClick={() => onChange(null)} className="rounded-lg border border-slate-300 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50">
                Вернуть
              </button>
            )}
          </div>
        </div>
      </div>
      {error && <p className="mt-2 font-bold text-red-600">{error}</p>}
    </div>
  );
}

export default function AdminImagesPage() {
  const { value, change, loading, dirty, saving, status, save } = useSiteSection("images", {});

  if (loading) return <main className="mx-auto max-w-6xl px-4 py-8">Загрузка…</main>;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <SaveBar title="Картинки" status={status} dirty={dirty} saving={saving} onSave={save} />
      <p className="mb-2 text-slate-600">
        Картинки на страницах сайта. Нажмите «Заменить», выберите файл, затем «Сохранить». Картинка заменится на всех страницах, где она есть.
      </p>
      <p className="mb-6 text-sm text-slate-500">
        Совет: загружайте картинку похожего размера и формы, что и старая — иначе она может обрезаться. Для значков с прозрачным фоном
        используйте PNG.
      </p>
      <div className="grid gap-3">
        {images.map((src) => (
          <ImageRow
            key={src}
            original={src}
            current={value[src]}
            onChange={(url) => {
              const next = { ...value };
              if (url) next[src] = url;
              else delete next[src];
              change(next);
            }}
          />
        ))}
      </div>
    </main>
  );
}
