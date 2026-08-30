"use client";

import { FormEvent, useEffect, useState } from "react";

type Service = {
  id: string;
  name: string;
  href: string;
  enabled: boolean;
};

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  const [name, setName] = useState("");
  const [href, setHref] = useState("");

  const [editingId, setEditingId] = useState<string | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  async function loadServices() {
    setLoading(true);

    const response = await fetch("/api/other-services", {
      cache: "no-store",
    });

    const data = await response.json();

    setServices(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => {
    loadServices();
  }, []);

  async function submitService(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !href.trim()) {
      alert("Заполните название и адрес страницы.");
      return;
    }

    if (editingId) {
      await fetch("/api/other-services", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingId,
          name,
          href,
        }),
      });
    } else {
      await fetch("/api/other-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          href,
        }),
      });
    }

    setName("");
    setHref("");
    setEditingId(null);

    await loadServices();
  }

  function startEdit(service: Service) {
    setEditingId(service.id);
    setName(service.name);
    setHref(service.href);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setName("");
    setHref("");
  }

  async function toggleService(service: Service) {
    await fetch("/api/other-services", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: service.id,
        enabled: !service.enabled,
      }),
    });

    await loadServices();
  }

  async function deleteService(service: Service) {
    const confirmed = window.confirm(
      `Удалить услугу «${service.name}»?`
    );

    if (!confirmed) return;

    await fetch("/api/other-services", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: service.id,
      }),
    });

    await loadServices();
  }

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="mx-auto max-w-5xl">

        <a
          href="/admin"
          className="font-bold text-blue-600 hover:underline"
        >
          ← Назад в админку
        </a>

        <h1 className="mt-5 text-4xl font-black text-slate-950">
          Прочие услуги
        </h1>

        <p className="mt-2 text-slate-600">
          Управление услугами в меню сайта
          «Прочие услуги».
        </p>

        {/* ДОБАВЛЕНИЕ */}

        <form
          onSubmit={submitService}
          className="mt-8 rounded-3xl bg-white p-6 shadow"
        >
          <h2 className="text-2xl font-black text-slate-950">
            {editingId
              ? "Изменить услугу"
              : "+ Добавить услугу"}
          </h2>

          <label className="mt-6 block font-bold text-slate-900">
            Название
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Например: Сборка мебели"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-yellow-400"
          />

          <label className="mt-5 block font-bold text-slate-900">
            Адрес страницы
          </label>

          <input
            value={href}
            onChange={(e) => setHref(e.target.value)}
            placeholder="/sborka-mebeli"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-yellow-400"
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-black hover:bg-yellow-300"
            >
              {editingId
                ? "Сохранить изменения"
                : "Добавить услугу"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="rounded-xl bg-slate-200 px-6 py-3 font-bold text-slate-800"
              >
                Отмена
              </button>
            )}
          </div>
        </form>

        {/* СПИСОК */}

        <section className="mt-10">
          <h2 className="text-2xl font-black text-slate-950">
            Добавленные услуги
          </h2>

          {loading && (
            <div className="mt-5 rounded-2xl bg-white p-6 shadow">
              Загрузка...
            </div>
          )}

          {!loading && services.length === 0 && (
            <div className="mt-5 rounded-2xl bg-white p-6 shadow">
              Услуг пока нет.
            </div>
          )}

          <div className="mt-5 space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-black text-slate-950">
                        {service.name}
                      </h3>

                      {service.enabled ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                          Показывается
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-bold text-slate-600">
                          Скрыта
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-slate-500">
                      {service.href}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => startEdit(service)}
                      className="rounded-xl bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-700"
                    >
                      Изменить
                    </button>

                    <button
                      onClick={() =>
                        toggleService(service)
                      }
                      className="rounded-xl bg-slate-700 px-4 py-3 font-bold text-white hover:bg-slate-800"
                    >
                      {service.enabled
                        ? "Скрыть"
                        : "Показать"}
                    </button>

                    <button
                      onClick={() =>
                        deleteService(service)
                      }
                      className="rounded-xl bg-red-600 px-4 py-3 font-bold text-white hover:bg-red-700"
                    >
                      Удалить
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}