"use client";

import { usePathname } from "next/navigation";

export default function FloatingContacts() {
  const pathname = usePathname();

  // Номер по умолчанию: Главная + Сантехник
  let phone = "77771696969";

  // Электрик
  if (pathname.startsWith("/elektrik")) {
    phone = "77073232632";
  }

  return (
    <>
      {/* МОБИЛЬНЫЙ — ПОЗВОНИТЬ */}
      <div className="fixed bottom-0 left-0 z-[9998] w-full md:hidden">
        <a
          href={`tel:+${phone}`}
          className="flex h-16 items-center justify-center bg-cyan-600 text-lg font-black text-white shadow-2xl"
        >
          📞 Позвонить
        </a>
      </div>

      {/* WHATSAPP — МОБИЛЬНЫЙ И КОМПЬЮТЕР */}
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-5 z-[9999] flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-green-500 text-white shadow-2xl"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-9 w-9 fill-white"
          aria-hidden="true"
        >
          <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.73 6.5L3 29l6.66-1.75A12.94 12.94 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3zm0 23.8c-2.02 0-4-.55-5.72-1.58l-.41-.24-3.95 1.04 1.05-3.85-.27-.42A10.77 10.77 0 0 1 5.23 16c0-5.96 4.85-10.8 10.81-10.8S26.8 10.04 26.8 16s-4.8 10.8-10.76 10.8zm5.92-8.08c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.49.14-.65.15-.14.32-.38.49-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38z" />
        </svg>
      </a>

      {/* КОМПЬЮТЕР — ПОЗВОНИТЬ */}
      <a
        href={`tel:+${phone}`}
        aria-label="Позвонить"
        className="fixed bottom-5 right-5 z-[9999] hidden h-16 w-16 animate-pulse items-center justify-center rounded-full bg-cyan-600 text-3xl text-white shadow-2xl md:flex"
      >
        ☎
      </a>
    </>
  );
}