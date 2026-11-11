"use client";

import { useMemo, useState } from "react";
import registry from "../../../lib/site-texts-registry.json";
import SaveBar from "../SaveBar";
import { useSiteSection } from "../useSiteSection";

type SeoItem = { path: string; title: string; description: string };
const items = (registry as { seo: SeoItem[] }).seo;

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200";

function Counter({ value, max }: { value: string; max: number }) {
  return (
    <span className={value.length > max ? "text-xs font-bold text-orange-600" : "text-xs text-slate-400"}>
      {value.length} / {max} символов{value.length > max ? " — в поиске обрежется" : ""}
    </span>
  );
}

export default function AdminSeoPage() {
  const { value: seo, change, loading, dirty, saving, status, save } = useSiteSection("seo", {});
  const [search, setSearch] = useState("");
  const [onlyChanged, setOnlyChanged] = useState(false);

  const q = search.trim().toLowerCase();
  const list = useMemo(
    () =>
      items.filter((it) => {
        if (onlyChanged && !seo[it.path]) return false;
        if (!q) return true;
        return [it.path, it.title, it.description, seo[it.path]?.title || "", seo[it.path]?.description || ""]
          .join(" ")
          .toLowerCase()
          .includes(q);
      }),
    [q, onlyChanged, seo]
  );

  function set(item: SeoItem, field: "title" | "description", text: string) {
    const current = { ...(seo[item.path] || {}) };
    if (!text.trim() || text.trim() === item[field]) delete current[field];
    else current[field] = text;
    const next = { ...seo };
    if (current.title || current.description) next[item.path] = current;
    else delete next[item.path];
    change(next);
  }

  if (loading) return <main className="mx-auto max-w-6xl px-4 py-8">Загрузка…</main>;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <SaveBar title="Заголовки для поиска (SEO)" status={status} dirty={dirty} saving={saving} onSave={save} />
      <p className="mb-2 text-slate-600">
        Title — заголовок страницы в Google и Яндексе, Description — описание под ним. Пустое поле — вернётся исходный текст.
      </p>
      <p className="mb-4 text-sm text-slate-500">
        Совет: Title до 60 символов, Description до 160. Новые заголовки поисковики увидят не сразу, а при следующем обходе сайта.
      </p>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск страницы, например: смеситель или /santehnik"
          className="min-w-64 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
        />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={onlyChanged} onChange={(e) => setOnlyChanged(e.target.checked)} className="h-5 w-5 accent-yellow-500" />
          Только изменённые ({Object.keys(seo).length})
        </label>
      </div>

      <div className="grid gap-4">
        {list.length === 0 && <p className="text-slate-500">Ничего не найдено.</p>}
        {list.map((it) => {
          const title = seo[it.path]?.title ?? it.title;
          const description = seo[it.path]?.description ?? it.description;
          const changed = !!seo[it.path];
          return (
            <section
              key={it.path}
              className={changed ? "rounded-2xl border-2 border-yellow-300 bg-white p-5" : "rounded-2xl border border-slate-200 bg-white p-5"}
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <a href={it.path} target="_blank" rel="noopener" className="font-bold text-[#0092B8] underline">
                  {it.path}
                </a>
                {changed && <span className="text-xs font-bold text-yellow-700">изменено</span>}
                {changed && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = { ...seo };
                      delete next[it.path];
                      change(next);
                    }}
                    className="text-sm font-bold text-slate-500 underline"
                  >
                    Вернуть исходные
                  </button>
                )}
              </div>
              <label className="grid gap-1">
                <span className="text-sm font-bold text-slate-700">Title</span>
                <input value={title} onChange={(e) => set(it, "title", e.target.value)} className={inputClass} />
                <Counter value={title} max={60} />
              </label>
              <label className="mt-3 grid gap-1">
                <span className="text-sm font-bold text-slate-700">Description</span>
                <textarea rows={2} value={description} onChange={(e) => set(it, "description", e.target.value)} className={inputClass} />
                <Counter value={description} max={160} />
              </label>
            </section>
          );
        })}
      </div>
    </main>
  );
}
