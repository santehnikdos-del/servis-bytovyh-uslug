"use client";

import { useEffect, useState } from "react";

type MenuService = {
  id: string;
  title: string;
  href: string;
  enabled: boolean;
};

type OtherService = {
  id: string;
  name: string;
  href: string;
  enabled: boolean;
};

type HeaderProps = {
  phone?: string;
  displayPhone?: string;
};

export default function Header({
  phone = "77771696969",
  displayPhone = "+7 777 169 69 69",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [plumbingOpen, setPlumbingOpen] = useState(false);
  const [electricOpen, setElectricOpen] = useState(false);
  const [drainOpen, setDrainOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  const [plumbing, setPlumbing] = useState<MenuService[]>([]);
  const [electric, setElectric] = useState<MenuService[]>([]);
  const [otherServices, setOtherServices] = useState<OtherService[]>([]);

  useEffect(() => {
    async function loadMenus() {
      try {
        const [plumbingRes, electricRes, otherRes] = await Promise.all([
          fetch("/api/plumbing-services"),
          fetch("/api/electric-services"),
          fetch("/api/other-services"),
        ]);

        const [plumbingData, electricData, otherData] = await Promise.all([
          plumbingRes.json(),
          electricRes.json(),
          otherRes.json(),
        ]);

        if (Array.isArray(plumbingData)) {
          setPlumbing(plumbingData.filter((item) => item.enabled));
        }

        if (Array.isArray(electricData)) {
          setElectric(electricData.filter((item) => item.enabled));
        }

        if (Array.isArray(otherData)) {
          setOtherServices(otherData.filter((item) => item.enabled));
        }
      } catch (error) {
        console.error("Ошибка загрузки меню:", error);
      }
    }

    loadMenus();
  }, []);

  return (
    <div className="sticky top-0 z-[9999] bg-white text-slate-950">
      {/* МОБИЛЬНАЯ ШАПКА */}
      <header className="relative bg-cyan-600 text-white md:hidden">
        <div className="grid grid-cols-3 items-center">
          <a
            href="/"
            className="flex h-14 items-center justify-center border-r border-white/20 font-black hover:bg-sky-700"
          >
            Главная
          </a>

          <button
            type="button"
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setMenuOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-2 border-r border-white/20 font-black hover:bg-sky-700"
          >
            Услуги <span className="text-xs">{servicesOpen ? "▲" : "▼"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setServicesOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-2 font-black hover:bg-sky-700"
          >
            Меню <span className="text-xs">{menuOpen ? "▲" : "▼"}</span>
          </button>
        </div>

        {servicesOpen && (
          <div className="absolute left-0 top-full z-[200] w-full bg-white text-slate-900 shadow-2xl">
            <MobileGroupButton
              title="Услуги сантехника"
              open={plumbingOpen}
              onClick={() => setPlumbingOpen(!plumbingOpen)}
            />
            {plumbingOpen && (
              <MobileList
                items={plumbing}
                allHref="/uslugi-santehnika"
                allTitle="Все услуги сантехника →"
              />
            )}

            <MobileGroupButton
              title="Услуги электрика"
              open={electricOpen}
              onClick={() => setElectricOpen(!electricOpen)}
            />
            {electricOpen && (
              <MobileList
                items={electric}
                allHref="/elektrik"
                allTitle="Все услуги электрика →"
              />
            )}

            <MobileGroupButton
              title="Прочистка канализации"
              open={drainOpen}
              onClick={() => setDrainOpen(!drainOpen)}
            />
            {drainOpen && (
              <div className="bg-sky-50">
                {[
                  "Устранение засоров",
                  "Прочистка труб",
                  "Прочистка аппаратом",
                  "Срочная прочистка",
                ].map((title) => (
                  <a
                    key={title}
                    href="/prochistka-kanalizacii"
                    className="block border-b border-slate-200 px-7 py-3"
                  >
                    {title}
                  </a>
                ))}
              </div>
            )}

            <MobileGroupButton
              title="Прочие услуги"
              open={otherOpen}
              onClick={() => setOtherOpen(!otherOpen)}
            />
            {otherOpen && (
              <div className="bg-sky-50">
                {otherServices.map((service) => (
                  <a
                    key={service.id}
                    href={service.href}
                    className="block border-b border-slate-200 px-7 py-3"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {menuOpen && (
          <div className="absolute right-0 top-full z-[200] w-[75%] max-w-sm bg-white text-slate-900 shadow-2xl">
            <a href="/o-nas" className="block border-b border-slate-200 px-5 py-4 font-bold">
              О нас
            </a>
            <a href="/nashi-raboty" className="block border-b border-slate-200 px-5 py-4 font-bold">
              Наши работы
            </a>
            <a href="/otzyvy" className="block border-b border-slate-200 px-5 py-4 font-bold">
              Отзывы
            </a>
            <a href="/price" className="block border-b border-slate-200 px-5 py-4 font-bold">
              Цены
            </a>
            <a href="/kontakty" className="block bg-sky-700 px-5 py-4 font-black text-white">
              Контакты →
            </a>
          </div>
        )}
      </header>

      {/* КОМПЬЮТЕР */}
      <div className="hidden md:block">
        <header className="bg-white text-slate-900">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Сервис бытовых услуг"
                className="h-23 w-auto object-contain"
              />
            </a>

            <nav className="flex items-center gap-7 font-semibold">
              <a href="/o-nas" className="hover:text-yellow-500">О нас</a>
              <a href="/nashi-raboty" className="hover:text-yellow-500">Наши работы</a>
              <a href="/otzyvy" className="hover:text-yellow-500">Отзывы</a>
              <a href="/price" className="hover:text-yellow-500">Цены</a>
            </nav>

            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className="text-sm text-slate-500">Ежедневно · Алматы</p>
                <a href={`tel:+${phone}`} className="text-2xl font-black">
                  {displayPhone}
                </a>
              </div>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-600 px-6 py-3 font-bold text-white hover:bg-cyan-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <nav className="bg-yellow-400 text-slate-950 shadow-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 font-bold">
            <DesktopMenu
              title="Услуги сантехника"
              href="/uslugi-santehnika"
              items={plumbing}
              allTitle="Все услуги →"
            />

            <DesktopMenu
              title="Услуги электрика"
              href="/elektrik"
              items={electric}
              allTitle="Все услуги электрика →"
            />

            <div className="group relative">
              <a href="/prochistka-kanalizacii" className="flex items-center gap-2 py-3 hover:opacity-70">
                Прочистка канализации <span className="text-xs">▼</span>
              </a>
              <div className="invisible absolute left-0 top-full z-[100] w-72 rounded-b-2xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
                {[
                  "Устранение засора",
                  "Прочистка труб",
                  "Прочистка канализации аппаратом",
                  "Срочная прочистка",
                ].map((title) => (
                  <a
                    key={title}
                    href="/prochistka-kanalizacii"
                    className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
                  >
                    {title}
                  </a>
                ))}
                <a
                  href="/prochistka-kanalizacii"
                  className="mt-2 block rounded-xl bg-slate-100 px-4 py-3 font-black hover:bg-yellow-400"
                >
                  Подробнее →
                </a>
              </div>
            </div>

            <div className="group relative py-1">
              <span className="flex cursor-pointer items-center gap-2 py-3 hover:opacity-70">
                Прочие услуги <span className="text-xs">▼</span>
              </span>

              <div className="invisible absolute right-0 top-full z-[9999] w-72 rounded-b-2xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl group-hover:visible group-hover:opacity-100">
                {otherServices.map((service) => (
                  <a
                    key={service.id}
                    href={service.href}
                    className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
                  >
                    {service.name}
                  </a>
                ))}

                {otherServices.length === 0 && (
                  <div className="px-4 py-3 text-sm text-slate-500">
                    Услуги пока не добавлены
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function MobileGroupButton({
  title,
  open,
  onClick,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-4 text-left font-black"
    >
      <span>{title}</span>
      <span>{open ? "▲" : "▼"}</span>
    </button>
  );
}

function MobileList({
  items,
  allHref,
  allTitle,
}: {
  items: MenuService[];
  allHref: string;
  allTitle: string;
}) {
  return (
    <div className="bg-sky-50">
      {items.map((service) => (
        <a
          key={service.id}
          href={service.href}
          className="block border-b border-slate-200 px-7 py-3"
        >
          {service.title}
        </a>
      ))}
      <a href={allHref} className="block bg-sky-100 px-7 py-3 font-black">
        {allTitle}
      </a>
    </div>
  );
}

function DesktopMenu({
  title,
  href,
  items,
  allTitle,
}: {
  title: string;
  href: string;
  items: MenuService[];
  allTitle: string;
}) {
  return (
    <div className="group relative">
      <a href={href} className="flex items-center gap-2 py-3 hover:opacity-70">
        {title} <span className="text-xs">▼</span>
      </a>

      <div className="invisible absolute left-0 top-full z-[100] w-72 rounded-b-2xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
        {items.map((service) => (
          <a
            key={service.id}
            href={service.href}
            className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
          >
            {service.title}
          </a>
        ))}

        <a
          href={href}
          className="mt-2 block rounded-xl bg-slate-100 px-4 py-3 font-black hover:bg-yellow-400"
        >
          {allTitle}
        </a>
      </div>
    </div>
  );
}
