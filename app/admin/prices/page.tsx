"use client";

import { useEffect, useState } from "react";

type Names = Record<string, string>;
type Prices = Record<string, string>;

const fields = [
  ["zamenaVodoprovodnyhStoyakov", "Замена водопроводных стояков"],
  ["zamenaKanalizacionnogoStoyaka", "Замена канализационного стояка"],
  ["troynik100", "Тройник Ø100 мм"],
  ["troynik70", "Тройник Ø70 мм"],
  ["zamenaGrebenki", "Замена водопроводной разводки"],
  ["zamenaLezhaka", "Замена канализационной разводки"],
  ["zamenaOtopitelnogoStoyaka", "Замена отопительного стояка"],
  ["zamenaRadiatora", "Замена радиатора отопления"],
  ["montazhOtopleniya", "Монтаж трубопроводов системы отопления"],
  ["montazhSantehniki", "Монтаж сантехники"],
  ["montazhVodoprovoda", "Монтаж водопроводных труб"],

  ["ustanovkaMoyki", "Установка мойки, смесителя и сифона"],
  ["ustanovkaFiltra", "Установка фильтра питьевой воды"],
  ["ustanovkaMashinyBezVyhodov", "Установка машины без готовых выходов"],
  ["podklyuchenieMashiny", "Подключение машины"],
  ["zamenaShlangov", "Замена гибких шлангов"],
  ["zamenaKartridzha", "Замена картриджа"],
  ["zamenaSifonaMoyki", "Замена сифона мойки"],
  ["perenosVyhodovLodzhiya", "Перенос выходов воды на лоджию"],
  ["zamenaDezhurnyhKranovMoyka", "Замена дежурных кранов под мойкой"],
  ["zamenaAvariynyhKranov", "Замена аварийных кранов"],
  ["ustanovkaSchetchikov", "Установка приборов учета воды"],
  ["perenosBatarei", "Перенос батареи отопления"],
  ["probivkaZasora", "Пробивка засора канализации"],
  ["prochistkaRothenberger", "Прочистка канализации Rothenberger"],
  ["ustranenieProtechek", "Устранение протечек"],
  ["prochistka150", "Прочистка труб от 150 мм"],

  ["ustanovkaChugunnoyVanny", "Установка чугунной ванны"],
  ["ustanovkaMetallicheskoyVanny", "Установка металлической ванны"],
  ["ustanovkaAkrilovoyVanny", "Установка акриловой ванны"],
  ["rakovinaPiedestal", "Установка раковины на пьедестале"],
  ["rakovinaTumba", "Установка раковины на тумбе"],
  ["zamenaZmeevika", "Замена змеевика"],
  ["zamenaPolotencesushitelya", "Замена полотенцесушителя"],
  ["zamenaUnitaza", "Замена унитаза"],
  ["zamenaSmesitelyaISifona", "Замена смесителя и сифона"],
  ["stiralnayaBezVyhodov", "Установка стиральной машины без выходов"],
  ["stiralnayaGotovyeVyhody", "Подключение стиральной машины"],
  ["zamenaSmesitelyaRakoviny", "Замена смесителя раковины"],
  ["zamenaSmesitelyaVanny", "Замена смесителя ванны"],
  ["zamenaShlangovRakoviny", "Замена гибких шлангов смесителя раковины"],
  ["zamenaKartridzhaVannaya", "Замена картриджа смесителя"],
  ["zamenaSifonaRakoviny", "Замена сифона раковины"],
  ["sifonVannyChugun", "Замена сифона ванны — чугун"],
  ["sifonVannyPlastik", "Замена сифона ванны — пластик"],
  ["pervichnayaUstanovkaSchetchikov", "Первичная установка счетчиков воды"],
  ["probivkaZasoraVannaya", "Пробивка засора канализации"],
  ["ustanovkaBoylera", "Установка бойлера"],
  ["zamenaAvariynyhKranovVannaya", "Замена аварийных кранов"],
  ["zamenaDezhurnyhKranovRakovina", "Замена дежурных кранов под раковиной"],
  ["remkomplektBachka", "Замена ремкомплекта бачка унитаза"],
  ["boyler200", "Установка бойлера 200 л"],
] as const;

export default function AdminPricesPage() {
  const [names, setNames] = useState<Names>({});
  const [prices, setPrices] = useState<Prices>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [namesResponse, pricesResponse] = await Promise.all([
          fetch("/api/service-names", {
            cache: "no-store",
          }),
          fetch("/api/prices", {
            cache: "no-store",
          }),
        ]);

        if (!namesResponse.ok || !pricesResponse.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        const namesData = await namesResponse.json();
        const pricesData = await pricesResponse.json();

        setNames(namesData);
        setPrices(pricesData);
      } catch (error) {
        console.error(error);
        setMessage("Ошибка загрузки названий или цен");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  function changeName(key: string, value: string) {
    setNames((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function changePrice(key: string, value: string) {
    setPrices((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function saveAll() {
    setSaving(true);
    setMessage("");

    try {
      const [priceResponse, namesResponse] = await Promise.all([
        fetch("/api/prices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(prices),
        }),

        fetch("/api/service-names", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(names),
        }),
      ]);

      if (!priceResponse.ok || !namesResponse.ok) {
        throw new Error("Ошибка сохранения");
      }

      setMessage("Названия и цены сохранены");
    } catch (error) {
      console.error(error);
      setMessage("Ошибка сохранения");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 p-6 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-xl">Загрузка цен...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <a
            href="/admin"
            className="text-yellow-400 transition hover:text-yellow-300"
          >
            ← Назад в админку
          </a>

          <h1 className="mt-4 text-3xl font-black md:text-4xl">
            Управление ценами
          </h1>

          <p className="mt-2 text-slate-400">
            Здесь можно изменить название услуги и цену.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="hidden grid-cols-[1fr_220px] gap-4 border-b border-slate-800 bg-slate-800/60 px-5 py-4 font-bold md:grid">
            <div>Название услуги</div>
            <div>Цена</div>
          </div>

          <div className="divide-y divide-slate-800">
            {fields.map(([key, fallbackName]) => (
              <div
                key={key}
                className="grid gap-3 px-4 py-4 md:grid-cols-[1fr_220px] md:gap-4 md:px-5"
              >
                <div>
                  <label className="mb-1 block text-xs text-slate-500 md:hidden">
                    Название услуги
                  </label>

                  <input
                    type="text"
                    value={names[key] ?? fallbackName}
                    onChange={(e) => changeName(key, e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-500 md:hidden">
                    Цена
                  </label>

                  <input
                    type="text"
                    value={prices[key] ?? ""}
                    onChange={(e) => changePrice(key, e.target.value)}
                    placeholder="Цена"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bottom-4 mt-8 rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl backdrop-blur">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              {message && (
                <p
                  className={
                    message.includes("сохранены")
                      ? "font-bold text-green-400"
                      : "font-bold text-red-400"
                  }
                >
                  {message}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={saveAll}
              disabled={saving}
              className="w-full rounded-xl bg-yellow-400 px-8 py-3 font-black text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {saving ? "Сохраняю..." : "Сохранить изменения"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}