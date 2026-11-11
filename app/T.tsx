import { appendFileSync } from "fs";
import { loadSiteContent, normText } from "../lib/site-texts";

// Надпись, которую можно изменить в админке (вкладка «Тексты»).
// p — страница, o — порядковый номер надписи в файле (для списка в админке).
// Если надпись не меняли, показывается исходный текст.
export default async function T({
  p,
  o,
  children,
}: {
  p: string;
  o: number;
  children?: React.ReactNode;
}) {
  if (typeof children !== "string") return <>{children}</>;

  const key = normText(children);
  if (!key) return <>{children}</>;

  // Только для разработчика: собрать список надписей при сборке
  if (process.env.COLLECT_SITE_TEXTS) {
    appendFileSync(process.env.COLLECT_SITE_TEXTS, JSON.stringify({ p, o, k: key }) + "\n");
  }

  const { texts } = await loadSiteContent();
  const value = texts[p]?.[key];
  if (!value) return <>{children}</>;

  // Сохраняем пробелы по краям, чтобы текст не слипался с соседними словами
  const lead = /^\s/.test(children) ? " " : "";
  const trail = /\s$/.test(children) ? " " : "";
  return (
    <>
      {lead}
      {value}
      {trail}
    </>
  );
}
