"use client";

import { usePathname } from "next/navigation";
import type { Promo } from "../lib/site-texts-shared";

// Полоса со скидкой вверху всех страниц. Включается и меняется в админке (вкладка «Скидка»).
export default function PromoBar({ promo }: { promo: Promo }) {
  const pathname = usePathname();
  if (!promo.enabled || pathname.startsWith("/admin")) return null;
  if (!promo.title && !promo.text) return null;

  return (
    <div className="bg-[#0092B8] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-center text-sm md:text-base">
        {promo.title && <b className="font-black text-[#FDC700]">{promo.title}</b>}
        {promo.text && <span>{promo.text}</span>}
        {promo.buttonText && promo.buttonHref && (
          <a
            href={promo.buttonHref}
            target={promo.buttonHref.startsWith("http") ? "_blank" : undefined}
            rel={promo.buttonHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="whitespace-nowrap rounded-full bg-[#FDC700] px-4 py-1 font-bold text-slate-950 hover:bg-yellow-300"
          >
            {promo.buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
