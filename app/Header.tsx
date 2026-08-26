"use client";

import { useState } from "react";

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

  return (
    <div className="sticky top-0 z-[9999] bg-white text-slate-950">

      <header className="relative bg-sky-600 text-white md:hidden">
        {/* 3 ГЛАВНЫЕ КНОПКИ */}
        <div className="grid grid-cols-3 items-center">
          <a
            href="/"
            className="flex h-14 items-center justify-center border-r border-white/20 font-black transition hover:bg-sky-700"
          >
            Главная
          </a>

          <button
            type="button"
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setMenuOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-2 border-r border-white/20 font-black transition hover:bg-sky-700"
          >
            Услуги
            <span className="text-xs">{servicesOpen ? "▲" : "▼"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setServicesOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-2 font-black transition hover:bg-sky-700"
          >
            Меню
            <span className="text-xs">{menuOpen ? "▲" : "▼"}</span>
          </button>
        </div>

        {/* ВЫПАДАЮЩЕЕ МЕНЮ — УСЛУГИ */}
        {servicesOpen && (
          <div className="absolute left-0 top-full z-[200] w-full bg-white text-slate-900 shadow-2xl">
            <button
              type="button"
              onClick={() => setPlumbingOpen(!plumbingOpen)}
              className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-4 text-left font-black"
            >
              <span>Услуги сантехника</span>
              <span>{plumbingOpen ? "▲" : "▼"}</span>
            </button>

            {plumbingOpen && (
              <div className="bg-sky-50">
                <a href="/ustanovka-unitaza" className="block border-b border-slate-200 px-7 py-3">
                  Установка унитаза
                </a>
                <a href="/ustanovka-smesitelya" className="block border-b border-slate-200 px-7 py-3">
                  Установка смесителя
                </a>
                <a href="/ustanovka-rakoviny" className="block border-b border-slate-200 px-7 py-3">
                  Установка раковины
                </a>
                <a href="/ustanovka-vanny" className="block border-b border-slate-200 px-7 py-3">
                  Установка ванны
                </a>
                <a href="/ustanovka-dushevoy-kabiny" className="block border-b border-slate-200 px-7 py-3">
                  Установка душевой кабины
                </a>
                <a href="/ustanovka-boylera" className="block border-b border-slate-200 px-7 py-3">
                  Установка бойлера
                </a>
                <a href="/zamena-trub" className="block border-b border-slate-200 px-7 py-3">
                  Замена труб
                </a>
                <a href="/uslugi-santehnika" className="block bg-sky-100 px-7 py-3 font-black">
                  Все услуги сантехника →
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={() => setElectricOpen(!electricOpen)}
              className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-4 text-left font-black"
            >
              <span>Услуги электрика</span>
              <span>{electricOpen ? "▲" : "▼"}</span>
            </button>

            {electricOpen && (
              <div className="bg-sky-50">
                <a href="/elektrik" className="block border-b border-slate-200 px-7 py-3">
                  Вызов электрика
                </a>
                <a href="/ustanovka-rozetok" className="block border-b border-slate-200 px-7 py-3">
                  Установка розеток
                </a>
                <a href="/ustanovka-svetilnikov" className="block border-b border-slate-200 px-7 py-3">
                  Установка светильников
                </a>
                <a href="/zamena-avtomatov" className="block border-b border-slate-200 px-7 py-3">
                  Замена автоматов
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={() => setDrainOpen(!drainOpen)}
              className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-4 text-left font-black"
            >
              <span>Прочистка канализации</span>
              <span>{drainOpen ? "▲" : "▼"}</span>
            </button>

            {drainOpen && (
              <div className="bg-sky-50">
                <a href="/prochistka-kanalizacii" className="block border-b border-slate-200 px-7 py-3">
                  Устранение засоров
                </a>
                <a href="/prochistka-kanalizacii" className="block border-b border-slate-200 px-7 py-3">
                  Прочистка труб
                </a>
                <a href="/prochistka-kanalizacii" className="block border-b border-slate-200 px-7 py-3">
                  Прочистка аппаратом
                </a>
                <a href="/prochistka-kanalizacii" className="block border-b border-slate-200 px-7 py-3">
                  Срочная прочистка
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOtherOpen(!otherOpen)}
              className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-4 text-left font-black"
            >
              <span>Прочие услуги</span>
              <span>{otherOpen ? "▲" : "▼"}</span>
            </button>

            {otherOpen && (
              <div className="bg-sky-50">
                <a href="/teplovizor" className="block border-b border-slate-200 px-7 py-3">
                  Поиск утечки воды
                </a>
                <a href="/teplovizor" className="block border-b border-slate-200 px-7 py-3">
                  Диагностика тепловизором
                </a>
                <a href="/otoplenie" className="block border-b border-slate-200 px-7 py-3">
                  Отопление
                </a>
                <a href="/montazh-oborudovaniya" className="block border-b border-slate-200 px-7 py-3">
                  Монтаж оборудования
                </a>
                <a href="/akkumulyatory-s-dostavkoy" className="block border-b border-slate-200 px-7 py-3">
                  Аккумуляторы с доставкой
                </a>
              </div>
            )}
          </div>
        )}

        {/* ВЫПАДАЮЩЕЕ МЕНЮ — ОБЩЕЕ МЕНЮ */}
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
      {/* НОВАЯ ШАПКА — КОМПЬЮТЕР */}
<div className="hidden md:block">

  {/* БЕЛАЯ ВЕРХНЯЯ ПОЛОСА */}
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
  <a href="/o-nas" className="hover:text-yellow-500">
    О нас
  </a>

  <a href="/nashi-raboty" className="hover:text-yellow-500">
    Наши работы
  </a>

  <a href="/otzyvy" className="hover:text-yellow-500">
    Отзывы
  </a>

  <a href="/price" className="hover:text-yellow-500">
    Цены
  </a>
</nav>

      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className="text-sm text-slate-500">
            Ежедневно · Алматы
          </p>

          <a
            href={`tel:+${phone}`}
            className="text-2xl font-black"
          >
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

  {/* ЖЁЛТОЕ МЕНЮ */}
<nav className="bg-yellow-400 text-slate-950 shadow-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 font-bold">

    {/* УСЛУГИ САНТЕХНИКА — ВЫПАДАЮЩЕЕ МЕНЮ */}
<div className="group relative">

  <a
    href="/uslugi-santehnika"
    className="flex items-center gap-2 py-4 hover:opacity-70"
  >
    Услуги сантехника
    <span className="text-xs">▼</span>
  </a>

  <div
    className="
      invisible absolute left-0 top-full z-[100]
      w-72 rounded-b-2xl bg-white p-3
      text-slate-900 opacity-0 shadow-2xl
      transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
  >

    <a
      href="/ustanovka-unitaza"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Установка унитаза
    </a>

    <a
      href="/ustanovka-smesitelya"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Установка смесителя
    </a>

    <a
      href="/ustanovka-rakoviny"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Установка раковины
    </a>

    <a
      href="/ustanovka-vanny"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Установка ванны
    </a>

    <a
      href="/ustanovka-dushevoy-kabiny"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Установка душевой кабины
    </a>

    <a
      href="/ustanovka-boylera"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Установка бойлера
    </a>

    <a
      href="/zamena-trub"
      className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
    >
      Замена труб
    </a>

    <a
      href="/uslugi-santehnika"
      className="mt-2 block rounded-xl bg-slate-100 px-4 py-3 font-black hover:bg-yellow-400"
    >
      Все услуги →
    </a>

  </div>
</div>

    {/* УСЛУГИ ЭЛЕКТРИКА */}
<div className="group relative">
  <a
    href="/elektrik"
    className="flex items-center gap-2 py-3 hover:opacity-70"
  >
    Услуги электрика
    <span className="text-xs">▼</span>
  </a>

  <div className="invisible absolute left-0 top-full z-[100] w-72 rounded-b-2xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

    <a href="/elektrik" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Вызов электрика
    </a>

    <a href="/elektrik" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Розетки и выключатели
    </a>

    <a href="/elektrik" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Замена автоматов
    </a>

    <a href="/elektrik" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Установка светильников
    </a>

    <a href="/elektrik" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Электромонтажные работы
    </a>

    <a href="/elektrik" className="mt-2 block rounded-xl bg-slate-100 px-4 py-3 font-black hover:bg-yellow-400">
      Все услуги электрика →
    </a>

  </div>
</div>

    {/* ПРОЧИСТКА КАНАЛИЗАЦИИ */}
<div className="group relative">
  <a
    href="/prochistka-kanalizacii"
    className="flex items-center gap-2 py-3 hover:opacity-70"
  >
    Прочистка канализации
    <span className="text-xs">▼</span>
  </a>

  <div className="invisible absolute left-0 top-full z-[100] w-72 rounded-b-2xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

    <a href="/prochistka-kanalizacii" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Устранение засора
    </a>

    <a href="/prochistka-kanalizacii" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Прочистка труб
    </a>

    <a href="/prochistka-kanalizacii" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Прочистка канализации аппаратом
    </a>

    <a href="/prochistka-kanalizacii" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Срочная прочистка
    </a>

    <a href="/prochistka-kanalizacii" className="mt-2 block rounded-xl bg-slate-100 px-4 py-3 font-black hover:bg-yellow-400">
      Подробнее →
    </a>

  </div>
</div>

    {/* ПРОЧИЕ УСЛУГИ */}
<div className="group relative">
  <a
    href="#"
    className="flex items-center gap-2 py-3 hover:opacity-70"
  >
    Прочие услуги
    <span className="text-xs">▼</span>
  </a>

  <div className="invisible absolute right-0 top-full z-[100] w-72 rounded-b-2xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

    <a href="/teplovizor" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
      Поиск утечки воды
    </a>

    <a href="/teplovizor" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
  Диагностика тепловизором
</a>

    <a href="/otoplenie" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
  Отопление
</a>

    <a href="/montazh-oborudovaniya" className="block rounded-xl px-4 py-3 hover:bg-yellow-400">
  Монтаж оборудования
</a>
    <a
  href="/akkumulyatory-s-dostavkoy"
  className="block rounded-xl px-4 py-3 hover:bg-yellow-400"
>
  Аккумуляторы с доставкой
</a>
                        </div>
            </div>

          </div>
        </nav>

      </div>
      </div>

  );
}