"use client";

import { useEffect, useRef, useState } from "react";

type Work = {
  id: string;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  enabled: boolean;
};

export default function AdminWorksPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [beforeLabel, setBeforeLabel] = useState("До");
  const [afterLabel, setAfterLabel] = useState("После");
  const [message, setMessage] = useState("");
  const beforeRef = useRef<HTMLInputElement>(null);
  const afterRef = useRef<HTMLInputElement>(null);

  async function load() {
    const response = await fetch("/api/works", { cache: "no-store" });
    const data = await response.json();

    if (Array.isArray(data)) {
      setWorks(data);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function clearForm() {
    setEditingId(null);
    setCategory("");
    setTitle("");
    setBeforeLabel("До");
    setAfterLabel("После");
    setMessage("");

    if (beforeRef.current) beforeRef.current.value = "";
    if (afterRef.current) afterRef.current.value = "";
  }

  function edit(work: Work) {
    setEditingId(work.id);
    setCategory(work.category);
    setTitle(work.title);
    setBeforeLabel(work.beforeLabel);
    setAfterLabel(work.afterLabel);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function save() {
    setMessage("");

    if (!title.trim()) {
      setMessage("Напиши название работы");
      return;
    }

    const form = new FormData();
    form.append("category", category);
    form.append("title", title);
    form.append("beforeLabel", beforeLabel);
    form.append("afterLabel", afterLabel);

    if (editingId) form.append("id", editingId);

    const before = beforeRef.current?.files?.[0];
    const after = afterRef.current?.files?.[0];

    if (before) form.append("beforeImage", before);
    if (after) form.append("afterImage", after);

    if (!editingId && (!before || !after)) {
      setMessage("Для новой работы выбери две фотографии");
      return;
    }

    const response = await fetch("/api/works", {
      method: editingId ? "PUT" : "POST",
      body: form,
    });

    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error || "Ошибка");
      return;
    }

    clearForm();
    await load();
  }

  async function toggle(work: Work) {
    const form = new FormData();
    form.append("id", work.id);
    form.append("enabled", String(!work.enabled));

    await fetch("/api/works", {
      method: "PUT",
      body: form,
    });

    await load();
  }

  async function remove(id: string) {
    if (!confirm("Удалить эту работу?")) return;

    await fetch("/api/works", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (editingId === id) clearForm();
    await load();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <a href="/admin" className="font-bold text-yellow-400">
          ← Админ-панель
        </a>

        <h1 className="mt-6 text-3xl font-black">Наши работы</h1>
        <p className="mt-2 text-slate-400">
          Добавление фотографий, изменение, скрытие и удаление работ.
        </p>

        <div className="mt-8 rounded-3xl bg-slate-900 p-6">
          <h2 className="text-xl font-black">
            {editingId ? "Изменить работу" : "Добавить работу"}
          </h2>

          <div className="mt-5 grid gap-4">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Категория: Монтаж водоснабжения"
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-yellow-400"
            />

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название работы"
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-yellow-400"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-bold">
                  Левая фотография
                </label>
                <input
                  ref={beforeRef}
                  type="file"
                  accept="image/*"
                  className="block w-full rounded-xl bg-slate-950 p-3"
                />
                <input
                  value={beforeLabel}
                  onChange={(e) => setBeforeLabel(e.target.value)}
                  placeholder="До"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  Правая фотография
                </label>
                <input
                  ref={afterRef}
                  type="file"
                  accept="image/*"
                  className="block w-full rounded-xl bg-slate-950 p-3"
                />
                <input
                  value={afterLabel}
                  onChange={(e) => setAfterLabel(e.target.value)}
                  placeholder="После"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
                />
              </div>
            </div>

            {editingId && (
              <p className="text-sm text-slate-400">
                При изменении фотографии можно не выбирать — останется старая.
              </p>
            )}

            {message && (
              <p className="font-bold text-red-400">{message}</p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={save}
                className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-slate-950 hover:bg-yellow-300"
              >
                {editingId ? "Сохранить изменения" : "Добавить работу"}
              </button>

              {editingId && (
                <button
                  onClick={clearForm}
                  className="rounded-xl bg-slate-700 px-6 py-3 font-bold"
                >
                  Отмена
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {works.map((work) => (
            <div
              key={work.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-black">{work.title}</h3>
                    <span
                      className={
                        work.enabled
                          ? "rounded-full bg-green-500/15 px-3 py-1 text-sm font-bold text-green-400"
                          : "rounded-full bg-slate-700 px-3 py-1 text-sm font-bold text-slate-300"
                      }
                    >
                      {work.enabled ? "Показывается" : "Скрыта"}
                    </span>
                  </div>

                  <p className="mt-1 text-yellow-400">{work.category}</p>

                  <div className="mt-4 grid max-w-2xl grid-cols-2 gap-3">
                    <img
                      src={work.beforeImage}
                      alt=""
                      className="h-36 w-full rounded-xl bg-slate-800 object-contain"
                    />
                    <img
                      src={work.afterImage}
                      alt=""
                      className="h-36 w-full rounded-xl bg-slate-800 object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap content-start gap-2">
                  <button
                    onClick={() => edit(work)}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-bold"
                  >
                    Изменить
                  </button>

                  <button
                    onClick={() => toggle(work)}
                    className="rounded-lg bg-amber-500 px-4 py-2 font-bold text-black"
                  >
                    {work.enabled ? "Скрыть" : "Показать"}
                  </button>

                  <button
                    onClick={() => remove(work.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 font-bold"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
