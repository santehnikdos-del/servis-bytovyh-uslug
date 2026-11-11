// Одноразовый помощник: оборачивает надписи на страницах в <T>, чтобы их можно было
// менять в админке. Запуск: node scripts/wrap-texts.mjs
import fs from "fs";
import path from "path";
import ts from "typescript";

// файл → страница в админке; exprs:false — не трогать {переменные} (шаблоны для многих страниц)
const FILES = [
  ["app/page.tsx", "home"],
  ["app/o-nas/page.tsx", "o-nas"],
  ["app/kontakty/page.tsx", "kontakty"],
  ["app/otzyvy/page.tsx", "otzyvy"],
  ["app/nashi-raboty/page.tsx", "nashi-raboty"],
  ["app/price/page.tsx", "price", { exprs: false }],
  ["app/uslugi-santehnika/page.tsx", "uslugi-santehnika"],
  ["app/santehnik/SantehnikContent.tsx", "santehnik", { exprs: false }],
  ["app/elektrik/page.tsx", "elektrik"],
  ["app/elektrik/ElektrikContent.tsx", "elektrik-rayony", { exprs: false }],
  ["app/prochistka-kanalizacii/page.tsx", "prochistka-kanalizacii"],
  ["app/plotnik/page.tsx", "plotnik"],
  ["app/akkumulyatory-s-dostavkoy/page.tsx", "akkumulyatory"],
  ["app/ustanovka-unitaza/page.tsx", "ustanovka-unitaza"],
  ["app/ustanovka-smesitelya/page.tsx", "ustanovka-smesitelya"],
  ["app/ustanovka-rakoviny/page.tsx", "ustanovka-rakoviny"],
  ["app/[service]/page.tsx", "service", { exprs: false }],
  ["app/Footer.tsx", "footer"],
  ["app/Rayony.tsx", "rayony"],
  ["app/ManagedServices.tsx", "managed", { exprs: false }],
];

const CYR = /[А-Яа-яЁё]/;
const SKIP_TAGS = new Set(["style", "script", "T", "title"]);
const SKIP_IDS = new Set(["children", "district", "page", "item", "phone", "displayPhone"]);

function tagName(el) {
  const open = ts.isJsxElement(el) ? el.openingElement : null;
  return open ? open.tagName.getText() : "";
}

for (const [file, pageId, opts = {}] of FILES) {
  const abs = path.resolve(file);
  const src = fs.readFileSync(abs, "utf8");
  if (src.includes('from "./T"') || /from "(\.\.\/)+T"/.test(src)) {
    console.log("skip (already done):", file);
    continue;
  }
  const sf = ts.createSourceFile(abs, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = []; // {pos, text} вставки
  let order = 0;

  const insideSkipped = (node) => {
    for (let p = node.parent; p; p = p.parent) {
      if (ts.isJsxElement(p) && SKIP_TAGS.has(tagName(p))) return true;
    }
    return false;
  };

  function visit(node) {
    const parentIsJsx = node.parent && (ts.isJsxElement(node.parent) || ts.isJsxFragment(node.parent));
    if (parentIsJsx && !insideSkipped(node)) {
      if (ts.isJsxText(node) && CYR.test(node.text)) {
        const full = node.text;
        const startOff = full.search(/\S/);
        const endOff = full.length - (full.match(/\s*$/)[0].length);
        const start = node.pos + startOff;
        const end = node.pos + endOff;
        edits.push({ start, end, wrap: true });
      } else if (ts.isJsxExpression(node) && node.expression && opts.exprs !== false) {
        const e = node.expression;
        let ok = false;
        if (ts.isStringLiteral(e) && CYR.test(e.text)) ok = true;
        if (ts.isIdentifier(e) && !SKIP_IDS.has(e.text)) ok = true;
        if (ts.isPropertyAccessExpression(e)) {
          let root = e;
          while (ts.isPropertyAccessExpression(root)) root = root.expression;
          if (ts.isIdentifier(root) && !SKIP_IDS.has(root.text) && root.text !== "props") ok = true;
          // не оборачиваем ссылки, картинки, числа по названию поля
          if (/^(href|src|slug|id|url|image|img|icon|price|key|className|width|height)$/i.test(e.name.text)) ok = false;
        }
        if (ok) edits.push({ start: node.getStart(sf), end: node.getEnd(), wrap: true });
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  edits.sort((a, b) => a.start - b.start);
  for (const e of edits) e.o = ++order;
  let out = src;
  for (const e of [...edits].reverse()) {
    out = out.slice(0, e.start) + `<T p="${pageId}" o={${e.o}}>` + out.slice(e.start, e.end) + "</T>" + out.slice(e.end);
  }

  // импорт T
  const rel = path.relative(path.dirname(abs), path.resolve("app/T")).replace(/\\/g, "/");
  const importLine = `import T from "${rel.startsWith(".") ? rel : "./" + rel}";\n`;
  // после "use client"/"use server", если есть; иначе в самое начало файла
  const directive = out.match(/^\s*["']use (client|server)["'];?\s*\n/);
  const at = directive ? directive[0].length : 0;
  out = out.slice(0, at) + importLine + out.slice(at);

  fs.writeFileSync(abs, out);
  console.log(`${file}: ${edits.length} надписей`);
}
