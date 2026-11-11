// Собирает список надписей для вкладки «Тексты» в админке.
// 1) COLLECT_SITE_TEXTS=/tmp/texts.jsonl npm run build   (сборка записывает все надписи <T>)
// 2) node scripts/build-text-registry.mjs /tmp/texts.jsonl
import fs from "fs";

const PAGES = [
  ["home", "Главная", "/"],
  ["santehnik", "Сантехник (и страницы районов)", "/santehnik"],
  ["uslugi-santehnika", "Услуги сантехника", "/uslugi-santehnika"],
  ["elektrik", "Электрик", "/elektrik"],
  ["elektrik-rayony", "Электрик в районах", "/elektrik/almalinskiy-rayon"],
  ["prochistka-kanalizacii", "Прочистка канализации", "/prochistka-kanalizacii"],
  ["plotnik", "Плотник", "/plotnik"],
  ["service", "Страницы услуг (общий шаблон)", "/zamena-smesitelya"],
  ["ustanovka-smesitelya", "Установка смесителя", "/ustanovka-smesitelya"],
  ["ustanovka-unitaza", "Установка унитаза", "/ustanovka-unitaza"],
  ["ustanovka-rakoviny", "Установка раковины", "/ustanovka-rakoviny"],
  ["akkumulyatory", "Аккумуляторы с доставкой", "/akkumulyatory-s-dostavkoy"],
  ["price", "Цены", "/price"],
  ["o-nas", "О нас", "/o-nas"],
  ["nashi-raboty", "Наши работы", "/nashi-raboty"],
  ["otzyvy", "Отзывы", "/otzyvy"],
  ["kontakty", "Контакты", "/kontakty"],
  ["rayony", "Блок «Районы»", "/"],
  ["footer", "Подвал сайта (на всех страницах)", "/"],
];

const rows = fs
  .readFileSync(process.argv[2], "utf8")
  .split("\n")
  .filter(Boolean)
  .map((l) => JSON.parse(l));

const useful = (k) => (/[А-Яа-яЁё]/.test(k) ? k.length >= 2 : k.length >= 3);

const pages = [];
for (const [id, title, path] of PAGES) {
  const list = rows.filter((r) => r.p === id).sort((a, b) => a.o - b.o);
  const texts = [];
  for (const r of list) if (useful(r.k) && !texts.includes(r.k)) texts.push(r.k);
  if (texts.length) pages.push({ id, title, path, texts });
}

const unknown = [...new Set(rows.map((r) => r.p))].filter((p) => !PAGES.some(([id]) => id === p));
if (unknown.length) console.warn("Нет названия для страниц:", unknown.join(", "));

fs.writeFileSync("lib/site-texts-registry.json", JSON.stringify({ pages }, null, 1) + "\n");
console.log(pages.map((p) => `${p.title}: ${p.texts.length}`).join("\n"));
