"use client";

import { DEFAULT_CONTACTS, type Contacts, type Phone } from "../../../lib/site-texts-shared";
import SaveBar from "../SaveBar";
import { useSiteSection } from "../useSiteSection";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200";

const ROWS: { key: keyof Contacts; title: string; hint: string }[] = [
  { key: "main", title: "Основной номер", hint: "Сантехник, прочистка, плотник, главная и почти весь сайт" },
  { key: "electric", title: "Номер электрика", hint: "Страницы электрика и услуги электрика" },
  { key: "battery", title: "Номер «Аккумуляторы с доставкой»", hint: "Страница аккумуляторов" },
];

export default function AdminContactsPage() {
  const { value, change, loading, dirty, saving, status, save } = useSiteSection("contacts", DEFAULT_CONTACTS);

  if (loading) return <main className="mx-auto max-w-6xl px-4 py-8">Загрузка…</main>;

  const set = (key: keyof Contacts, patch: Partial<Phone>) => change({ ...value, [key]: { ...value[key], ...patch } });

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <SaveBar title="Контакты" status={status} dirty={dirty} saving={saving} onSave={save} />
      <p className="mb-6 text-slate-600">
        Номера для кнопок «Позвонить» и «WhatsApp», шапки, подвала и плавающих кнопок на всех страницах.
      </p>
      <div className="grid gap-4">
        {ROWS.map((row) => {
          const p = value[row.key];
          const digits = p.digits.replace(/\D/g, "");
          return (
            <section key={row.key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black">{row.title}</h2>
              <p className="mb-4 text-sm text-slate-500">{row.hint}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm font-bold text-slate-700">Номер для звонка и WhatsApp</span>
                  <input value={p.digits} onChange={(e) => set(row.key, { digits: e.target.value })} className={inputClass} />
                  <span className={digits.length < 11 ? "text-xs font-bold text-red-600" : "text-xs text-slate-500"}>
                    {digits.length < 11 ? "Нужно 11 цифр, например 77771696969" : "Только цифры, начиная с 7"}
                  </span>
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-bold text-slate-700">Как показывать на сайте</span>
                  <input value={p.display} onChange={(e) => set(row.key, { display: e.target.value })} className={inputClass} />
                  <span className="text-xs text-slate-500">Например: +7 777 169 69 69</span>
                </label>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Проверка:{" "}
                <a href={`tel:+${digits}`} className="font-bold text-[#0092B8] underline">позвонить</a> ·{" "}
                <a href={`https://wa.me/${digits}`} target="_blank" rel="noopener" className="font-bold text-[#0092B8] underline">
                  открыть WhatsApp
                </a>
              </p>
            </section>
          );
        })}
      </div>
    </main>
  );
}
