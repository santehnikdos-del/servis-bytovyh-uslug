"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "../../lib/site-texts-shared";

// Загрузка и сохранение одного раздела содержимого сайта (контакты, SEO, картинки…)
export function useSiteSection<K extends keyof SiteContent>(section: K, fallback: SiteContent[K]) {
  const [value, setValue] = useState<SiteContent[K]>(fallback);
  const [loading, setLoading] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/site-content", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => d[section] !== undefined && setValue(d[section]))
      .catch(() => setStatus({ ok: false, text: "Не удалось загрузить. Обновите страницу." }))
      .finally(() => setLoading(false));
  }, [section]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function change(next: SiteContent[K]) {
    setValue(next);
    setDirty(true);
    setStatus(null);
  }

  async function save() {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/site-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [section]: value }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Не удалось сохранить.");
      setDirty(false);
      setStatus({ ok: true, text: "Сохранено. На сайте появится в течение минуты." });
    } catch (e) {
      setStatus({ ok: false, text: e instanceof Error ? e.message : "Ошибка сохранения" });
    } finally {
      setSaving(false);
    }
  }

  return { value, change, loading, dirty, saving, status, save };
}

