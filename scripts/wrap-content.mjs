// Одноразовый помощник: делает телефоны и картинки на страницах изменяемыми из админки.
// - номера телефонов → значения из вкладки «Контакты» (SC.contacts)
// - src картинок → imgSrc(SC, ...) (замена из вкладки «Картинки»)
// В начало компонента страницы добавляется: const SC = await loadSiteContent();
// Запуск: node scripts/wrap-content.mjs файл1 файл2 ...
import fs from "fs";
import path from "path";
import ts from "typescript";

const PHONES = [
  [/\+7 777 169 69 69/g, "SC.contacts.main.display"],
  [/\+7 707 323 26 32/g, "SC.contacts.electric.display"],
  [/\+7 708 200 05 13/g, "SC.contacts.battery.display"],
  [/77771696969/g, "SC.contacts.main.digits"],
  [/77073232632/g, "SC.contacts.electric.digits"],
  [/77082000513/g, "SC.contacts.battery.digits"],
];
const hasPhone = (s) => PHONES.some(([re]) => { re.lastIndex = 0; return re.test(s); });
const subPhones = (s, wrap) => PHONES.reduce((acc, [re, expr]) => acc.replace(re, wrap(expr)), s);

for (const file of process.argv.slice(2)) {
  const abs = path.resolve(file);
  const src = fs.readFileSync(abs, "utf8");
  if (/^\s*["']use client["']/.test(src)) {
    console.log("skip client:", file);
    continue;
  }
  if (src.includes("await loadSiteContent()")) {
    console.log("skip (already done):", file);
    continue;
  }
  const sf = ts.createSourceFile(abs, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = []; // { start, end, text }
  const scopes = new Map(); // top-level function node → true
  const problems = [];
  let usesImg = false;

  // Верхняя функция (компонент), в которой находится узел
  function topFunction(node) {
    let found = null;
    for (let p = node.parent; p; p = p.parent) {
      if (ts.isFunctionDeclaration(p) || ts.isArrowFunction(p) || ts.isFunctionExpression(p)) found = p;
    }
    return found;
  }
  function fnName(fn) {
    if (fn.name) return fn.name.getText(sf);
    if (fn.parent && ts.isVariableDeclaration(fn.parent)) return fn.parent.name.getText(sf);
    return "";
  }
  function needScope(node, what) {
    const fn = topFunction(node);
    if (!fn) {
      problems.push(`${what} вне компонента (строка ${sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1})`);
      return false;
    }
    const name = fnName(fn);
    const isDefault = ts.getCombinedModifierFlags(fn) & ts.ModifierFlags.Default;
    if (!/^[A-Z]/.test(name) && !isDefault) {
      problems.push(`${what} в функции ${name || "без имени"} (строка ${sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1})`);
      return false;
    }
    // параметры по умолчанию вычисляются до тела функции — там SC ещё нет
    for (let p = node.parent; p && p !== fn; p = p.parent) {
      if (ts.isParameter(p)) {
        problems.push(`${what} в параметрах ${name}`);
        return false;
      }
    }
    scopes.set(fn, true);
    return true;
  }

  function visit(node) {
    // Телефоны в строках
    if (ts.isStringLiteral(node) && hasPhone(node.text) && !ts.isImportDeclaration(node.parent)) {
      if (needScope(node, "телефон")) {
        const inner = subPhones(node.text.replace(/[`\\]/g, "\\$&").replace(/\$\{/g, "\\${"), (e) => "${" + e + "}");
        const tpl = "`" + inner + "`";
        const text = ts.isJsxAttribute(node.parent) ? `{${tpl}}` : tpl;
        edits.push({ start: node.getStart(sf), end: node.getEnd(), text });
      }
    } else if (
      (ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) &&
      hasPhone(node.getText(sf))
    ) {
      if (needScope(node, "телефон")) {
        const text = subPhones(node.getText(sf), (e) => "${" + e + "}");
        edits.push({ start: node.getStart(sf), end: node.getEnd(), text });
      }
    } else if (ts.isJsxText(node) && hasPhone(node.text)) {
      if (needScope(node, "телефон")) {
        edits.push({ start: node.pos, end: node.end, text: subPhones(node.text, (e) => "{" + e + "}") });
      }
    }

    // Картинки: атрибут src
    if (ts.isJsxAttribute(node) && node.name.getText(sf) === "src" && node.initializer) {
      const init = node.initializer;
      let expr = null;
      if (ts.isStringLiteral(init)) expr = init.getText(sf);
      else if (ts.isJsxExpression(init) && init.expression) expr = init.expression.getText(sf);
      if (expr && !expr.startsWith("imgSrc(") && needScope(node, "картинка")) {
        usesImg = true;
        edits.push({ start: init.getStart(sf), end: init.getEnd(), text: `{imgSrc(SC, ${expr})}` });
        return; // внутрь не заходим — строка уже заменена целиком
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  // const SC = await loadSiteContent(); в начало каждого затронутого компонента
  for (const fn of scopes.keys()) {
    const asyncKw = fn.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword);
    if (!asyncKw) {
      // "async" перед function / перед параметрами стрелки
      const at = ts.isArrowFunction(fn) ? fn.getStart(sf) : fn.getStart(sf) + (fn.getText(sf).match(/^(export\s+)?(default\s+)?/)?.[0].length || 0);
      edits.push({ start: at, end: at, text: "async " });
    }
    const body = fn.body;
    if (ts.isBlock(body)) {
      const at = body.getStart(sf) + 1;
      edits.push({ start: at, end: at, text: "\n  const SC = await loadSiteContent();\n" });
    } else {
      edits.push({ start: body.getStart(sf), end: body.getStart(sf), text: "{\n  const SC = await loadSiteContent();\n  return (" });
      edits.push({ start: body.getEnd(), end: body.getEnd(), text: ");\n}" });
    }
  }

  if (!edits.length) {
    console.log(`${file}: нечего менять`);
    continue;
  }

  edits.sort((a, b) => a.start - b.start || 0);
  let out = src;
  for (const e of [...edits].reverse()) out = out.slice(0, e.start) + e.text + out.slice(e.end);

  const rel = path.relative(path.dirname(abs), path.resolve("lib/site-texts")).replace(/\\/g, "/");
  const names = usesImg ? "imgSrc, loadSiteContent" : "loadSiteContent";
  const importLine = `import { ${names} } from "${rel.startsWith(".") ? rel : "./" + rel}";\n`;
  const directive = out.match(/^\s*["']use (client|server)["'];?\s*\n/);
  const at = directive ? directive[0].length : 0;
  out = out.slice(0, at) + importLine + out.slice(at);

  fs.writeFileSync(abs, out);
  console.log(`${file}: ${edits.length} правок${problems.length ? "\n   ВРУЧНУЮ: " + problems.join("\n   ВРУЧНУЮ: ") : ""}`);
}
