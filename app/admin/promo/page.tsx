"use client";

import { useEffect, useState } from "react";
import { DEFAULT_PROMO, type Promo } from "../../../lib/site-texts-shared";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200";

export default function AdminPromoPage() {
  const [promo, setPromo] = useState<Promo>(DEFAULT_PROMO);
  const [loading, setLoading] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/site-content", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => d.promo && setPromo(d.promo))
      .catch(() => setStatus({ ok: false, text: "Не удалось загрузить. Обновите страницу." }))
      .finally(() => setLoading(false));
  }, []);

  function change(patch: Partial<Promo>) {
    setPromo((p) => ({ ...p, ...patch }));
    setDirty(true);
    setStatus(null);
  }

  async function save() {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/site-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promo }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Не удалось сохранить.");
      setDirty(false);
      setStatus({ ok: true, text: "Сохранено. На сайте появится в течение минуты." });
    } catch (e) {
      setStatus({ ok: false, text: e instanceof Error ? e.message : "Ошибка сохранения" });
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <main className="mx-auto max-w-6xl px-4 py-8">Загрузка…</main>;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-black">Скидка</h1>
      <p className="mt-2 text-slate-600">Полоса со скидкой вверху всех страниц сайта.</p>

      <div className="mt-6 grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="flex items-center gap-3 text-lg font-bold">
          <input
            type="checkbox"
            checked={promo.enabled}
            onChange={(e) => change({ enabled: e.target.checked })}
            className="h-6 w-6 accent-yellow-500"
          />
          Показывать скидку на сайте
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-bold text-slate-700">Заголовок</span>
          <input value={promo.title} onChange={(e) => change({ title: e.target.value })} className={inputClass} />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-bold text-slate-700">Текст</span>
          <textarea
            rows={2}
            value={promo.text}
            onChange={(e) => change({ text: e.target.value })}
            className={inputClass}
          />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-1">
            <span className="text-sm font-bold text-slate-700">Текст кнопки</span>
            <input
              value={promo.buttonText}
              onChange={(e) => change({ buttonText: e.target.value })}
              className={inputClass}
            />
            <span className="text-xs text-slate-500">Пусто — без кнопки</span>
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-bold text-slate-700">Куда ведёт кнопка</span>
            <input
              value={promo.buttonHref}
              onChange={(e) => change({ buttonHref: e.target.value })}
              className={inputClass}
            />
            <span className="text-xs text-slate-500">WhatsApp: https://wa.me/77771696969 или страница сайта: /price</span>
          </label>
        </div>

        <div>
          <span className="text-sm font-bold text-slate-700">Как это будет выглядеть</span>
          <div className="mt-2 overflow-hidden rounded-xl">
            {promo.enabled ? (
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-[#0092B8] px-4 py-2.5 text-center text-white">
                {promo.title && <b className="font-black text-[#FDC700]">{promo.title}</b>}
                {promo.text && <span>{promo.text}</span>}
                {promo.buttonText && promo.buttonHref && (
                  <span className="rounded-full bg-[#FDC700] px-4 py-1 font-bold text-slate-950">{promo.buttonText}</span>
                )}
              </div>
            ) : (
              <div className="rounded-xl bg-slate-100 px-4 py-3 text-slate-500">Скидка выключена — полосы на сайте нет.</div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={save}
            disabled={saving || !dirty}
            className="rounded-xl bg-yellow-400 px-8 py-3 font-black text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
          >
            {saving ? "Сохраняю…" : "Сохранить"}
          </button>
          {status && (
            <span className={status.ok ? "font-bold text-green-700" : "font-bold text-red-600"}>{status.text}</span>
          )}
        </div>
      </div>
    </main>
  );
}
