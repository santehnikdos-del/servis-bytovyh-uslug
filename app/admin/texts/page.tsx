"use client";

import { useEffect, useMemo, useState } from "react";
import registry from "../../../lib/site-texts-registry.json";

type Texts = Record<string, Record<string, string>>;
type RegistryPage = { id: string; title: string; path: string; texts: string[] };

const pages = (registry as { pages: RegistryPage[] }).pages;

export default function AdminTextsPage() {
  const [texts, setTexts] = useState<Texts>({});
  const [pageId, setPageId] = useState(pages[0]?.id || "");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/site-content", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setTexts(d.texts || {}))
      .catch(() => setStatus({ ok: false, text: "Не удалось загрузить тексты. Обновите страницу." }))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function setText(page: string, original: string, value: string) {
    setTexts((prev) => {
      const map = { ...(prev[page] || {}) };
      if (value.trim() === "" || value.trim() === original) delete map[original];
      else map[original] = value;
      return { ...prev, [page]: map };
    });
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
        body: JSON.stringify({ texts }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Не удалось сохранить.");
      setDirty(false);
      setStatus({ ok: true, text: "Сохранено. Изменения появятся на сайте в течение минуты." });
    } catch (e) {
      setStatus({ ok: false, text: e instanceof Error ? e.message : "Ошибка сохранения" });
    } finally {
      setSaving(false);
    }
  }

  const q = search.trim().toLowerCase();
  const visible = useMemo(() => {
    if (q) {
      return pages
        .map((p) => ({
          ...p,
          texts: p.texts.filter(
            (t) => t.toLowerCase().includes(q) || (texts[p.id]?.[t] || "").toLowerCase().includes(q)
          ),
        }))
        .filter((p) => p.texts.length);
    }
    return pages.filter((p) => p.id === pageId);
  }, [q, pageId, texts]);

  const changedCount = (id: string) => Object.keys(texts[id] || {}).length;

  if (loading) return <main className="mx-auto max-w-6xl px-4 py-8">Загрузка…</main>;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <div className="sticky top-24 z-40 -mx-4 mb-6 flex flex-wrap items-center gap-3 border-b border-slate-200 bg-slate-100/95 px-4 py-3 backdrop-blur">
        <h1 className="mr-auto text-2xl font-black">Тексты на страницах</h1>
        {status && (
          <span className={status.ok ? "font-bold text-green-700" : "font-bold text-red-600"}>{status.text}</span>
        )}
        {dirty && !status && <span className="text-slate-500">Есть несохранённые изменения</span>}
        <button
          type="button"
          onClick={save}
          disabled={saving || !dirty}
          className="rounded-xl bg-yellow-400 px-6 py-2.5 font-black text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
        >
          {saving ? "Сохраняю…" : "Сохранить"}
        </button>
      </div>

      <p className="mb-4 text-slate-600">
        Выберите страницу и поменяйте нужные надписи. Пустое поле — вернётся исходный текст.
      </p>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск надписи по всем страницам, например: гарантия"
        className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
      />

      <div className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)]">
        {!q && (
          <aside className="flex flex-col gap-1 self-start md:sticky md:top-44">
            {pages.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPageId(p.id)}
                className={
                  p.id === pageId
                    ? "flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2 text-left font-bold text-white"
                    : "flex items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-white"
                }
              >
                <span>{p.title}</span>
                {changedCount(p.id) > 0 && (
                  <span className="ml-2 rounded-full bg-yellow-400 px-2 text-xs font-bold text-slate-900">
                    {changedCount(p.id)}
                  </span>
                )}
              </button>
            ))}
          </aside>
        )}

        <div className={q ? "md:col-span-2 grid gap-8" : "grid gap-8"}>
          {visible.length === 0 && <p className="text-slate-500">Ничего не найдено.</p>}
          {visible.map((p) => (
            <section key={p.id} className="grid gap-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-xl font-black">{p.title}</h2>
                <a href={p.path} target="_blank" rel="noopener" className="text-sm text-[#0092B8] underline">
                  Открыть страницу
                </a>
              </div>
              {p.texts.map((original, i) => {
                const value = texts[p.id]?.[original] ?? original;
                const changed = value !== original;
                return (
                  <div
                    key={original}
                    className={
                      changed
                        ? "rounded-xl border-2 border-yellow-300 bg-white p-3"
                        : "rounded-xl border border-slate-200 bg-white p-3"
                    }
                  >
                    <div className="mb-1 flex items-center gap-2 text-xs text-slate-400">
                      <span>№ {i + 1}</span>
                      {changed && <span className="font-bold text-yellow-700">изменено</span>}
                    </div>
                    <textarea
                      value={value}
                      rows={Math.min(8, Math.max(1, Math.ceil(original.length / 90)))}
                      onChange={(e) => setText(p.id, original, e.target.value)}
                      className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                    />
                    {changed && (
                      <div className="mt-1 flex flex-wrap items-start gap-2 text-sm text-slate-500">
                        <span>Было: «{original}»</span>
                        <button
                          type="button"
                          onClick={() => setText(p.id, original, "")}
                          className="font-bold text-[#0092B8] underline"
                        >
                          Вернуть
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
