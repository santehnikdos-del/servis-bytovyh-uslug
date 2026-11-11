"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_MENU,
  type MenuGroup,
  type ServiceItem,
} from "../../lib/site-menu";

/* ---------- маленькие помощники ---------- */

function newId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function moveIn<T>(list: T[], index: number, dir: number): T[] {
  const j = index + dir;
  if (j < 0 || j >= list.length) return list;
  const next = [...list];
  [next[index], next[j]] = [next[j], next[index]];
  return next;
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200";

function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  hint?: string;
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
      {hint && <span className="text-xs text-slate-500">{hint}</span>}
    </label>
  );
}

function Tools({
  onUp,
  onDown,
  onRemove,
  removeLabel = "Удалить",
}: {
  onUp?: () => void;
  onDown?: () => void;
  onRemove: () => void;
  removeLabel?: string;
}) {
  const btn =
    "rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30";
  return (
    <div className="flex shrink-0 gap-1.5">
      <button type="button" className={btn} onClick={onUp} disabled={!onUp} aria-label="Выше">
        ↑
      </button>
      <button type="button" className={btn} onClick={onDown} disabled={!onDown} aria-label="Ниже">
        ↓
      </button>
      <button
        type="button"
        className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50"
        onClick={() => {
          if (confirm("Точно удалить?")) onRemove();
        }}
      >
        {removeLabel}
      </button>
    </div>
  );
}

/* ---------- один пункт меню (с подпунктами) ---------- */

function ItemEditor({
  item,
  onChange,
  onUp,
  onDown,
  onRemove,
  isChild,
}: {
  item: ServiceItem;
  onChange: (item: ServiceItem) => void;
  onUp?: () => void;
  onDown?: () => void;
  onRemove: () => void;
  isChild?: boolean;
}) {
  const children = item.children || [];
  const setChildren = (list: ServiceItem[]) =>
    onChange({ ...item, children: list.length ? list : undefined });

  return (
    <div className={isChild ? "rounded-lg bg-slate-50 p-3" : "rounded-xl border border-slate-200 bg-white p-3"}>
      <div className="flex flex-col gap-2 md:flex-row md:items-end">
        <div className="grid flex-1 gap-2 md:grid-cols-2">
          <Field
            label={isChild ? "Подпункт" : "Пункт меню"}
            value={item.title}
            onChange={(v) => onChange({ ...item, title: v })}
          />
          <Field
            label="Адрес страницы"
            value={item.href}
            placeholder="/zamena-trub"
            onChange={(v) => onChange({ ...item, href: v })}
          />
        </div>
        <Tools onUp={onUp} onDown={onDown} onRemove={onRemove} />
      </div>

      {!isChild && (
        <details className="mt-2" open={false}>
          <summary className="cursor-pointer select-none text-sm font-bold text-[#0092B8]">
            Подпункты ({children.length})
          </summary>
          <div className="mt-2 grid gap-2 border-l-4 border-yellow-300 pl-3">
            {children.map((child, ci) => (
              <ItemEditor
                key={child.id}
                item={child}
                isChild
                onChange={(c) => setChildren(children.map((x, k) => (k === ci ? c : x)))}
                onUp={ci > 0 ? () => setChildren(moveIn(children, ci, -1)) : undefined}
                onDown={ci < children.length - 1 ? () => setChildren(moveIn(children, ci, 1)) : undefined}
                onRemove={() => setChildren(children.filter((_, k) => k !== ci))}
              />
            ))}
            <button
              type="button"
              onClick={() => setChildren([...children, { id: newId("sub"), title: "", href: "" }])}
              className="justify-self-start rounded-lg border border-dashed border-slate-400 px-3 py-2 text-sm font-bold text-slate-700 hover:bg-white"
            >
              + Добавить подпункт
            </button>
          </div>
        </details>
      )}
    </div>
  );
}

/* ---------- страница ---------- */

export default function AdminMenuPage() {
  const [menu, setMenu] = useState<MenuGroup[]>([]);
  const [isDefault, setIsDefault] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/site-menu", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setMenu(data);
          setIsDefault(false);
        } else {
          setMenu(structuredClone(DEFAULT_MENU));
        }
      })
      .catch(() => setMenu(structuredClone(DEFAULT_MENU)))
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

  function change(next: MenuGroup[]) {
    setMenu(next);
    setDirty(true);
    setStatus(null);
  }

  const setGroup = (gi: number, g: MenuGroup) => change(menu.map((x, k) => (k === gi ? g : x)));

  async function save() {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/site-menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menu),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Не удалось сохранить.");
      setDirty(false);
      setIsDefault(false);
      setStatus({ ok: true, text: "Сохранено. Меню на сайте уже обновилось." });
    } catch (e) {
      setStatus({ ok: false, text: e instanceof Error ? e.message : "Ошибка сохранения" });
    } finally {
      setSaving(false);
    }
  }

  async function resetToDefault() {
    if (!confirm("Вернуть меню, которое было на сайте изначально? Ваши изменения меню пропадут.")) return;
    setSaving(true);
    try {
      const res = await fetch("/api/site-menu", { method: "DELETE" });
      if (!res.ok) throw new Error();
      setMenu(structuredClone(DEFAULT_MENU));
      setIsDefault(true);
      setDirty(false);
      setStatus({ ok: true, text: "Меню вернулось к исходному." });
    } catch {
      setStatus({ ok: false, text: "Не удалось вернуть меню." });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <main className="mx-auto max-w-6xl px-4 py-8">Загрузка меню…</main>;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <div className="sticky top-24 z-40 -mx-4 mb-6 flex flex-wrap items-center gap-3 border-b border-slate-200 bg-slate-100/95 px-4 py-3 backdrop-blur">
        <h1 className="mr-auto text-2xl font-black">Меню услуг</h1>
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

      <p className="mb-2 text-slate-600">
        Жёлтая полоса меню на компьютере и кнопка «Услуги» на телефоне. Нажмите на раздел, чтобы открыть его пункты.
        У пункта могут быть подпункты — они раскрываются в меню сбоку.
      </p>
      <p className="mb-6 text-sm text-slate-500">
        {isDefault
          ? "Сейчас на сайте меню по умолчанию — как было изначально."
          : "Сейчас на сайте ваше сохранённое меню."}{" "}
        Адрес страницы должен быть существующей страницей сайта, например /zamena-trub.
      </p>

      <div className="grid gap-4">
        {menu.map((g, gi) => (
          <details key={g.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none flex-wrap items-center gap-3 px-5 py-4">
              <span className="text-lg font-black">{g.title || "Без названия"}</span>
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-sm text-slate-600">
                {g.type === "menu"
                  ? `${g.items.length} пунктов`
                  : g.type === "link"
                    ? "ссылка"
                    : "из раздела «Прочие услуги»"}
              </span>
              {g.enabled === false && (
                <span className="rounded-full bg-red-100 px-3 py-0.5 text-sm font-bold text-red-700">скрыт</span>
              )}
            </summary>

            <div className="grid gap-4 border-t border-slate-200 px-5 py-4">
              <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 font-bold">
                  <input
                    type="checkbox"
                    checked={g.enabled !== false}
                    onChange={(e) => setGroup(gi, { ...g, enabled: e.target.checked })}
                    className="h-5 w-5 accent-yellow-500"
                  />
                  Показывать на сайте
                </label>
                <label className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-700">Тип:</span>
                  <select
                    value={g.type}
                    onChange={(e) => setGroup(gi, { ...g, type: e.target.value as MenuGroup["type"] })}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                  >
                    <option value="menu">Раздел со списком</option>
                    <option value="link">Просто ссылка</option>
                    <option value="other">Прочие услуги (список из вкладки «Прочие услуги»)</option>
                  </select>
                </label>
                <div className="ml-auto">
                  <Tools
                    onUp={gi > 0 ? () => change(moveIn(menu, gi, -1)) : undefined}
                    onDown={gi < menu.length - 1 ? () => change(moveIn(menu, gi, 1)) : undefined}
                    onRemove={() => change(menu.filter((_, k) => k !== gi))}
                    removeLabel="Удалить раздел"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <Field label="Название (компьютер)" value={g.title} onChange={(v) => setGroup(gi, { ...g, title: v })} />
                {g.type !== "other" && (
                  <Field
                    label="Куда ведёт название (компьютер)"
                    value={g.href}
                    placeholder="/uslugi-santehnika"
                    onChange={(v) => setGroup(gi, { ...g, href: v })}
                  />
                )}
                <Field
                  label="Название в мобильном меню"
                  hint="Пусто — как на компьютере"
                  value={g.mobileTitle}
                  onChange={(v) => setGroup(gi, { ...g, mobileTitle: v })}
                />
                {g.type !== "other" && (
                  <Field
                    label="Куда ведёт название в мобильном меню"
                    hint="Пусто — как на компьютере"
                    value={g.mobileHref}
                    onChange={(v) => setGroup(gi, { ...g, mobileHref: v })}
                  />
                )}
                {g.type === "menu" && (
                  <>
                    <Field
                      label="Подпись ссылки внизу списка"
                      hint="Например: Все услуги сантехника. Пусто — «Все услуги»"
                      value={g.allTitle}
                      onChange={(v) => setGroup(gi, { ...g, allTitle: v })}
                    />
                    <Field
                      label="Куда ведёт эта ссылка в мобильном меню"
                      hint="Пусто — ссылки внизу списка на телефоне не будет"
                      value={g.allHref}
                      onChange={(v) => setGroup(gi, { ...g, allHref: v })}
                    />
                  </>
                )}
              </div>

              {g.type !== "link" && (
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!g.alignRight}
                    onChange={(e) => setGroup(gi, { ...g, alignRight: e.target.checked })}
                    className="h-4 w-4 accent-yellow-500"
                  />
                  Открывать список влево (для разделов у правого края экрана)
                </label>
              )}

              {g.type === "other" && (
                <p className="rounded-lg bg-yellow-50 p-3 text-sm text-slate-700">
                  Пункты этого раздела меняются во вкладке{" "}
                  <a href="/admin/services" className="font-bold underline">
                    «Прочие услуги»
                  </a>
                  .
                </p>
              )}

              {g.type === "menu" && (
                <div className="grid gap-2">
                  <span className="text-sm font-bold text-slate-700">Пункты списка</span>
                  {g.items.map((item, ii) => (
                    <ItemEditor
                      key={item.id}
                      item={item}
                      onChange={(it) => setGroup(gi, { ...g, items: g.items.map((x, k) => (k === ii ? it : x)) })}
                      onUp={ii > 0 ? () => setGroup(gi, { ...g, items: moveIn(g.items, ii, -1) }) : undefined}
                      onDown={
                        ii < g.items.length - 1 ? () => setGroup(gi, { ...g, items: moveIn(g.items, ii, 1) }) : undefined
                      }
                      onRemove={() => setGroup(gi, { ...g, items: g.items.filter((_, k) => k !== ii) })}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => setGroup(gi, { ...g, items: [...g.items, { id: newId("item"), title: "", href: "" }] })}
                    className="justify-self-start rounded-lg border border-dashed border-slate-400 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50"
                  >
                    + Добавить пункт
                  </button>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            change([...menu, { id: newId("group"), type: "menu", title: "Новый раздел", href: "", items: [] }])
          }
          className="rounded-xl border-2 border-dashed border-slate-400 px-5 py-3 font-bold text-slate-700 hover:bg-white"
        >
          + Добавить раздел
        </button>
        {!isDefault && (
          <button
            type="button"
            onClick={resetToDefault}
            disabled={saving}
            className="ml-auto rounded-xl px-5 py-3 font-bold text-slate-500 underline hover:text-red-600"
          >
            Вернуть меню как было изначально
          </button>
        )}
      </div>
    </main>
  );
}
