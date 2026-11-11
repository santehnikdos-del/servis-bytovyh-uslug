"use client";

import { useEffect, useState } from "react";

type Service = {
  id: string;
  title: string;
  href: string;
  description: string;
  enabled: boolean;
};

export default function ManagedServicesAdmin({
  title,
  endpoint,
}: {
  title: string;
  endpoint: string;
}) {
  const [services, setServices] = useState<Service[]>([]);
  const [name, setName] = useState("");
  const [href, setHref] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function load() {
    const response = await fetch(endpoint, { cache: "no-store" });
    const data = await response.json();

    if (Array.isArray(data)) {
      setServices(data);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function clearForm() {
    setName("");
    setHref("");
    setDescription("");
    setEditingId(null);
  }

  async function save() {
    setMessage("");

    if (!name.trim() || !href.trim()) {
      setMessage("Заполни название и ссылку");
      return;
    }

    const response = await fetch(endpoint, {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        editingId
          ? {
              id: editingId,
              title: name,
              href,
              description,
            }
          : {
              title: name,
              href,
              description,
            }
      ),
    });

    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error || "Ошибка");
      return;
    }

    clearForm();
    await load();
  }

  function edit(service: Service) {
    setEditingId(service.id);
    setName(service.title);
    setHref(service.href);
    setDescription(service.description);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function toggle(service: Service) {
    await fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: service.id,
        enabled: !service.enabled,
      }),
    });

    await load();
  }

  async function remove(id: string) {
    if (!confirm("Удалить эту услугу?")) return;

    await fetch(endpoint, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (editingId === id) clearForm();
    await load();
  }

  return (
    <main className="text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-black">{title}</h1>
        <p className="mt-2 text-slate-600">
          Добавление, изменение, показ, скрытие и удаление услуг.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">
            {editingId ? "Изменить услугу" : "Добавить услугу"}
          </h2>

          <div className="mt-5 grid gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Название услуги"
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            <input
              value={href}
              onChange={(e) => setHref(e.target.value)}
              placeholder="/stranica-uslugi"
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Короткое описание"
              rows={3}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            />

            {message && (
              <p className="font-bold text-red-600">{message}</p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={save}
                className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-slate-950 hover:bg-yellow-300"
              >
                {editingId ? "Сохранить изменения" : "Добавить"}
              </button>

              {editingId && (
                <button
                  onClick={clearForm}
                  className="rounded-xl bg-slate-200 px-6 py-3 font-bold text-slate-800 hover:bg-slate-300"
                >
                  Отмена
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-black">{service.title}</h3>

                    <span
                      className={
                        service.enabled
                          ? "rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700"
                          : "rounded-full bg-slate-200 px-3 py-1 text-sm font-bold text-slate-600"
                      }
                    >
                      {service.enabled ? "Показывается" : "Скрыта"}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[#0092B8]">
                    {service.href}
                  </p>

                  <p className="mt-2 max-w-3xl text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => edit(service)}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                  >
                    Изменить
                  </button>

                  <button
                    onClick={() => toggle(service)}
                    className="rounded-lg bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-400"
                  >
                    {service.enabled ? "Скрыть" : "Показать"}
                  </button>

                  <button
                    onClick={() => remove(service.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
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
