// Собирает списки для вкладок админки «Тексты», «Картинки» и «SEO».
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

// Картинки сайта (только свои файлы из public/)
const images = [...new Set(rows.filter((r) => typeof r.img === "string" && r.img.startsWith("/")).map((r) => r.img))].sort();

// Заголовки для поиска: сначала основные страницы, потом остальные по алфавиту
const seoMap = new Map();
for (const r of rows) if (r.seo && !seoMap.has(r.seo)) seoMap.set(r.seo, { path: r.seo, title: r.title || "", description: r.description || "" });
const mainOrder = PAGES.map(([, , path]) => path);
const seo = [...seoMap.values()].sort((a, b) => {
  const ia = mainOrder.indexOf(a.path), ib = mainOrder.indexOf(b.path);
  if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  return a.path.localeCompare(b.path);
});

const unknown = [...new Set(rows.filter((r) => r.p).map((r) => r.p))].filter((p) => !PAGES.some(([id]) => id === p));
if (unknown.length) console.warn("Нет названия для страниц:", unknown.join(", "));

fs.writeFileSync("lib/site-texts-registry.json", JSON.stringify({ pages, images, seo }, null, 1) + "\n");
console.log(pages.map((p) => `${p.title}: ${p.texts.length}`).join("\n"));
console.log(`Картинок: ${images.length}, страниц для SEO: ${seo.length}`);
