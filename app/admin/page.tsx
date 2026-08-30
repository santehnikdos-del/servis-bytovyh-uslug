"use client";

import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  }

  const cards = [
    {
      href: "/admin/works",
      icon: "🖼️",
      title: "Наши работы",
      text: "Фото, изменить, скрыть или удалить",
    },
    {
      href: "/admin/plumbing",
      icon: "🔧",
      title: "Услуги сантехника",
      text: "Добавить, изменить, скрыть или удалить",
    },
    {
      href: "/admin/electric",
      icon: "⚡",
      title: "Услуги электрика",
      text: "Добавить, изменить, скрыть или удалить",
    },
    {
      href: "/admin/services",
      icon: "🛠️",
      title: "Прочие услуги",
      text: "Добавить, изменить, скрыть или удалить",
    },
    {
      href: "/admin/prices",
      icon: "💰",
      title: "Цены",
      text: "Изменение цен на услуги",
    },
    {
      href: "/admin/reviews",
      icon: "⭐",
      title: "Отзывы",
      text: "Проверка и публикация отзывов",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-black">Админ-панель</h1>
            <p className="mt-2 text-slate-400">
              Управление сайтом «Сервис бытовых услуг»
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            Выйти
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="rounded-2xl bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
            >
              <div className="text-3xl">{card.icon}</div>
              <h2 className="mt-4 text-xl font-bold">{card.title}</h2>
              <p className="mt-2 text-slate-400">{card.text}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
