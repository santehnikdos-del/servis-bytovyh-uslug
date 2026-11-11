"use client";

import { usePathname, useRouter } from "next/navigation";

const TABS = [
  { href: "/admin", title: "Меню услуг" },
  { href: "/admin/texts", title: "Тексты" },
  { href: "/admin/promo", title: "Скидка" },
  { href: "/admin/contacts", title: "Контакты" },
  { href: "/admin/seo", title: "SEO" },
  { href: "/admin/images", title: "Картинки" },
  { href: "/admin/plumbing", title: "Услуги сантехника" },
  { href: "/admin/electric", title: "Услуги электрика" },
  { href: "/admin/services", title: "Прочие услуги" },
  { href: "/admin/prices", title: "Цены" },
  { href: "/admin/reviews", title: "Отзывы" },
  { href: "/admin/works", title: "Наши работы" },
];

// Общая рамка админки: тёмная полоса сверху и вкладки (как на vashsantehnik.kz)
export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return <>{children}</>;

  async function logout() {
    await fetch("/api/admin/login/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-50 bg-slate-900 text-white shadow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
          <b className="text-lg">Админка сайта</b>
          <a href="/" target="_blank" rel="noopener" className="text-slate-300 underline hover:text-white">
            Открыть сайт
          </a>
          <button
            type="button"
            onClick={logout}
            className="ml-auto text-slate-300 underline hover:text-white"
          >
            Выйти
          </button>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
          {TABS.map((tab) => {
            const active =
              tab.href === "/admin" ? pathname === "/admin" : pathname.startsWith(tab.href);
            return (
              <a
                key={tab.href}
                href={tab.href}
                className={
                  active
                    ? "whitespace-nowrap rounded-t-lg bg-slate-100 px-4 py-2.5 font-bold text-slate-900"
                    : "whitespace-nowrap rounded-t-lg px-4 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              >
                {tab.title}
              </a>
            );
          })}
        </nav>
      </header>
      <div className="admin-body">{children}</div>
    </div>
  );
}
