"use client";

// Строка сверху страницы админки: заголовок, сообщение и кнопка «Сохранить»
export default function SaveBar({
  title,
  status,
  dirty,
  saving,
  onSave,
}: {
  title: string;
  status: { ok: boolean; text: string } | null;
  dirty: boolean;
  saving: boolean;
  onSave: () => void;
}) {
  return (
    <div className="sticky top-24 z-40 -mx-4 mb-6 flex flex-wrap items-center gap-3 border-b border-slate-200 bg-slate-100/95 px-4 py-3 backdrop-blur">
      <h1 className="mr-auto text-2xl font-black">{title}</h1>
      {status && <span className={status.ok ? "font-bold text-green-700" : "font-bold text-red-600"}>{status.text}</span>}
      {dirty && !status && <span className="text-slate-500">Есть несохранённые изменения</span>}
      <button
        type="button"
        onClick={onSave}
        disabled={saving || !dirty}
        className="rounded-xl bg-yellow-400 px-6 py-2.5 font-black text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
      >
        {saving ? "Сохраняю…" : "Сохранить"}
      </button>
    </div>
  );
}
