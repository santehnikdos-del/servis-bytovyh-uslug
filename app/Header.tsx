"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import mobileLogo from "../public/hs-logo.png";
import desktopLogo from "../public/logo.png";
import {
  DEFAULT_MENU,
  type MenuGroup,
  type ServiceItem,
} from "../lib/site-menu";

type HeaderProps = {
  phone?: string;
  displayPhone?: string;
};

type OtherService = {
  id: string;
  name: string;
  href: string;
  enabled: boolean;
};


const navigation = [
  { title: "Главная", href: "/" },
  { title: "О нас", href: "/o-nas" },
  { title: "Наши работы", href: "/nashi-raboty" },
  { title: "Отзывы", href: "/otzyvy" },
  { title: "Цены", href: "/price" },
  { title: "Контакты", href: "/kontakty" },
];

const serviceCardClass = `
  flex min-h-11 items-center gap-2
  rounded-xl bg-white px-3 py-2
  text-[#0092B8]
  shadow-[0_2px_8px_rgba(0,80,120,0.05)]
  transition duration-200
  hover:bg-[#FDC700]/10
  hover:shadow-[0_3px_10px_rgba(0,80,120,0.09)]
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-[#0092B8]
`;

/* ИКОНКИ */
function ServiceIcon({ title }: { title: string }) {
  const text = title.toLowerCase();
  let drawing;

  if (/район/.test(text)) {
    drawing = (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    );
  } else if (/вызов/.test(text)) {
    drawing = (
      <path d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" />
    );
  } else if (/консультац/.test(text)) {
    drawing = (
      <>
        <path d="M21 11a8 8 0 0 1-8 8H8l-5 3v-7a8 8 0 1 1 18-4Z" />
        <path d="M8 10h8M8 14h5" />
      </>
    );
  } else if (/тепловизор|видеодиагност/.test(text)) {
    drawing = (
      <>
        <rect x="3" y="4" width="14" height="12" rx="2" />
        <path d="m17 8 4-2v8l-4-2M8 16v5h4v-5" />
        <circle cx="10" cy="10" r="3" />
      </>
    );
  } else if (/размороз/.test(text)) {
    drawing = (
      <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M3 10l4-1-1-4M21 14l-4 1 1 4M3 14l4 1-1 4M21 10l-4-1 1-4" />
    );
  } else if (/прайс|цен/.test(text)) {
    drawing = (
      <path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h2M14 15h1" />
    );
  } else if (/розет/.test(text)) {
    drawing = (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="6" />
        <path d="M9 11v2M15 11v2M11 17h2" />
      </>
    );
  } else if (/выключател/.test(text)) {
    drawing = (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="m8 7 8 2v8l-8-2ZM11 6h2" />
      </>
    );
  } else if (/щитк|автомат/.test(text)) {
    drawing = (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M7 8h10M7 16h10M9 8v8M15 8v8M12 5h.01" />
      </>
    );
  } else if (/счётчик|счетчик/.test(text)) {
    drawing = (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 6h8v5H8zM8 17h8M10 14h4" />
      </>
    );
  } else if (/светодиодной лент/.test(text)) {
    drawing = (
      <path d="M3 8h18v8H3zM6 11v2M10 11v2M14 11v2M18 11v2" />
    );
  } else if (/люстр|светильник|бра$/.test(text)) {
    drawing = (
      <path d="M12 2v4M8 6h8l4 8H4ZM12 14v4M8 18h8M5 21l1-2M19 21l-1-2" />
    );
  } else if (/электр|провод/.test(text)) {
    drawing = <path d="m13 2-9 12h7l-1 8 10-13h-8z" />;
  } else if (/унитаз|биде/.test(text)) {
    drawing = (
      <>
        <path d="M5 3h5v8H5zM10 9h9v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1" />
        <path d="M11 18v3h6M7 6h1M10 12h9" />
      </>
    );
  } else if (/смесител|кран|протеч/.test(text)) {
    drawing = (
      <>
        <path d="M4 12h13a3 3 0 0 1 3 3v1h-5v-2H4zM9 12V7M6 7h6M9 7V4" />
        <path d="M18 19v2" />
      </>
    );
  } else if (/раковин|мойк/.test(text)) {
    drawing = (
      <path d="M3 12h18a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7ZM12 12V6a2 2 0 0 1 4 0M12 19v3" />
    );
  } else if (/душ/.test(text)) {
    drawing = (
      <path d="M5 21V7a4 4 0 0 1 8 0M10 10h8a4 4 0 0 0-8 0ZM11 14v1M15 14v1M19 14v1M12 18v1M17 18v1" />
    );
  } else if (/ванн|джакузи/.test(text)) {
    drawing = (
      <path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM5 12V6a3 3 0 0 1 6 0M7 20v2M17 20v2" />
    );
  } else if (/бойлер|нагревател|котл/.test(text)) {
    drawing = (
      <>
        <rect x="6" y="3" width="12" height="16" rx="3" />
        <path d="M10 19v3M14 19v3M9 7h6" />
        <circle cx="12" cy="13" r="2" />
      </>
    );
  } else if (/отоплен|полотенцесуш|теплообмен/.test(text)) {
    drawing = (
      <>
        <rect x="4" y="6" width="16" height="13" rx="2" />
        <path d="M8 6v13M12 6v13M16 6v13M2 10h2M20 15h2M7 19v2M17 19v2" />
      </>
    );
  } else if (/фильтр/.test(text)) {
    drawing = <path d="M4 4h16l-6 8v7l-4 2v-9Z" />;
  } else if (
    /труб|прочист|засор|канализа|сололифт|стояк/.test(text)
  ) {
    drawing = (
      <path d="M4 3h6v7h7v11h-6v-5H4zM2 3h10M15 21h4" />
    );
  } else if (/плотник|двер|мебел/.test(text)) {
    drawing = (
      <path d="M5 21V3h14v18M3 21h18M9 3v18M15 12h1" />
    );
  } else {
    drawing = (
      <path d="M14 6a5 5 0 0 0-6 6l-5 5a2.1 2.1 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3 3-3Z" />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      {drawing}
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="service-menu-arrow h-4 w-4 shrink-0"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

function ServiceLink({
  title,
  href,
  onClick,
}: {
  title: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a href={href} onClick={onClick} className={serviceCardClass}>
      <ServiceIcon title={title} />

      <span className="min-w-0 flex-1 break-words text-[14px] font-normal leading-5">
        {title}
      </span>

      <Arrow />
    </a>
  );
}

/* ВЛОЖЕННЫЕ СПИСКИ */
function NestedServiceItem({
  service,
  desktop,
  onNavigate,
}: {
  service: ServiceItem;
  desktop: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
    maxHeight: 500,
  });

  const rowRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    if (!desktop) return;

    cancelClose();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  }

  function updatePosition() {
    const row = rowRef.current;
    if (!row) return;

    const bounds = row.getBoundingClientRect();
    const width = Math.min(310, window.innerWidth - 24);
    const maxHeight = Math.max(100, window.innerHeight - 32);

    const estimatedHeight = Math.min(
      (service.children?.length || 0) * 58 + 52,
      maxHeight
    );

    const spaceRight = window.innerWidth - bounds.right;

    const left =
      spaceRight >= width + 8
        ? bounds.right
        : Math.max(8, bounds.left - width);

    const top = Math.max(
      16,
      Math.min(
        bounds.top,
        window.innerHeight - estimatedHeight - 16
      )
    );

    setPosition({ left, top, maxHeight });
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || !desktop) return;

    function handleResize() {
      setOpen(false);
    }

    function handleScroll(event: Event) {
      const target = event.target;

      if (
        target instanceof Node &&
        panelRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open, desktop]);

  return (
    <div
      ref={rowRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();

        if (desktop) {
          updatePosition();
          setOpen(true);
        }
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          setOpen(false);
        }
      }}
    >
      <div className="flex min-h-11 items-center gap-2 rounded-xl bg-white pl-3 pr-1 text-[#0092B8] shadow-[0_2px_8px_rgba(0,80,120,0.05)]">
        <ServiceIcon title={service.title} />

        <a
          href={service.href}
          onClick={onNavigate}
          className="min-w-0 flex-1 py-2 text-[14px] font-normal leading-5"
        >
          {service.title}
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Свернуть" : "Раскрыть"}: ${service.title}`}
          onClick={() => {
            cancelClose();

            if (desktop) updatePosition();

            setOpen(!open);
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hover:bg-[#0092B8]/10"
        >
          <span
            className={`inline-flex transition-transform ${
              open && !desktop ? "rotate-90" : ""
            }`}
          >
            <Arrow />
          </span>
        </button>
      </div>

      {open && (
        <div
          ref={panelRef}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className={
            desktop
              ? "fixed z-[120] w-[310px] max-w-[calc(100vw-24px)] px-2"
              : "pl-2 pt-1.5"
          }
          style={
            desktop
              ? {
                  left: position.left,
                  top: position.top,
                }
              : undefined
          }
        >
          <div
            className={`space-y-1.5 rounded-2xl bg-[#F3F6FA] p-2 ${
              desktop
                ? "overflow-y-auto overscroll-contain shadow-xl"
                : ""
            }`}
            style={
              desktop
                ? { maxHeight: position.maxHeight }
                : undefined
            }
          >
            <p className="px-3 py-1 text-xs font-medium text-slate-500">
              {service.id === "plumbing-call"
                ? "Районы Алматы"
                : service.title}
            </p>

            {service.children?.map((item) => (
              <ServiceLink
                key={item.id}
                title={item.title}
                href={item.href}
                onClick={onNavigate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceList({
  items,
  allHref,
  allTitle,
  onNavigate,
  desktop = false,
}: {
  items: ServiceItem[];
  allHref?: string;
  allTitle?: string;
  onNavigate?: () => void;
  desktop?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      {items.map((service) =>
        service.children?.length ? (
          <NestedServiceItem
            key={service.id}
            service={service}
            desktop={desktop}
            onNavigate={onNavigate}
          />
        ) : (
          <ServiceLink
            key={service.id}
            title={service.title}
            href={service.href}
            onClick={onNavigate}
          />
        )
      )}

      {items.length === 0 && (
        <p className="px-3 py-4 text-sm text-slate-500">
          Услуги пока не добавлены
        </p>
      )}

      {allHref && (
        <ServiceLink
          title={(allTitle || "Все услуги").replace(/\s*→$/, "")}
          href={allHref}
          onClick={onNavigate}
        />
      )}
    </div>
  );
}

function MobileGroup({
  title,
  href,
  open,
  onToggle,
  onNavigate,
  items,
  allHref,
  allTitle,
}: {
  title: string;
  href?: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  items: ServiceItem[];
  allHref?: string;
  allTitle?: string;
}) {
  return (
    <div>
      <div className="flex min-h-11 items-center gap-2 rounded-xl bg-white px-3 py-1 text-[#0092B8] shadow-[0_2px_8px_rgba(0,80,120,0.05)]">
        <ServiceIcon title={title} />

        {href ? (
          <a
            href={href}
            onClick={onNavigate}
            className="min-w-0 flex-1 break-words text-[14px] font-normal"
          >
            {title}
          </a>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="min-w-0 flex-1 text-left text-[14px] font-normal"
          >
            {title}
          </button>
        )}

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-label={`${open ? "Свернуть" : "Раскрыть"}: ${title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-[#0092B8]/10"
        >
          <span
            className={`inline-flex transition-transform ${
              open ? "rotate-90" : ""
            }`}
          >
            <Arrow />
          </span>
        </button>
      </div>

      {open && (
        <div className="pb-1 pl-2 pt-1.5">
          <ServiceList
            items={items}
            allHref={allHref}
            allTitle={allTitle}
            onNavigate={onNavigate}
          />
        </div>
      )}
    </div>
  );
}

function DesktopMenu({
  title,
  href,
  items,
  allTitle,
  alignRight = false,
}: {
  title: string;
  href?: string;
  items: ServiceItem[];
  allTitle?: string;
  alignRight?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 220);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="flex items-center">
        {href ? (
          <a
            href={href}
            className="whitespace-nowrap py-3 hover:text-[#007D9E]"
          >
            {title}
          </a>
        ) : (
          <button
            type="button"
            aria-expanded={open}
            onClick={() => {
              cancelClose();
              setOpen(!open);
            }}
            className="whitespace-nowrap py-3 hover:text-[#007D9E]"
          >
            {title}
          </button>
        )}

        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Свернуть" : "Раскрыть"}: ${title}`}
          onClick={() => {
            cancelClose();
            setOpen(!open);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              cancelClose();
              setOpen(true);
            }
          }}
          className="ml-1 flex h-9 w-7 items-center justify-center"
        >
          <span
            className={`text-[10px] transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      {open && (
        <div
          className={`
            absolute top-full z-[100]
            w-[350px] max-w-[calc(100vw-2rem)]
            rounded-b-2xl bg-[#F3F6FA] p-2
            shadow-[0_16px_35px_rgba(0,50,90,0.18)]
            ${alignRight ? "right-0" : "left-0"}
          `}
        >
          <div className="max-h-[calc(100dvh-180px)] overflow-y-auto overscroll-contain p-1">
            <ServiceList
              items={items}
              allHref={href}
              allTitle={allTitle}
              desktop
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ШАПКА */
export default function Header({
  phone = "77771696969",
  displayPhone = "+7 777 169 69 69",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const [otherServices, setOtherServices] = useState<OtherService[]>([]);
  const [menu, setMenu] = useState<MenuGroup[]>(DEFAULT_MENU);

  // Меню услуг, изменённое в админке. Пока не загрузилось — показываем меню по умолчанию.
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/site-menu", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!controller.signal.aborted && Array.isArray(data) && data.length) {
          setMenu(data);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const visibleMenu = menu.filter((group) => group.enabled !== false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadOtherServices() {
      try {
        const response = await fetch("/api/other-services", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Ошибка загрузки прочих услуг");
        }

        const data = await response.json();

        if (!controller.signal.aborted && Array.isArray(data)) {
          setOtherServices(
            data.filter((item: OtherService) => item.enabled)
          );
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Ошибка загрузки меню:", error);
        }
      }
    }

    loadOtherServices();

    return () => controller.abort();
  }, []);

  const otherItems: ServiceItem[] = otherServices.map((service) => ({
    id: service.id,
    title: service.name,
    href: service.href,
  }));

  function closeMobileMenus() {
    setMenuOpen(false);
    setServicesOpen(false);
    setActiveGroup(null);
  }

  function toggleGroup(group: string) {
    setActiveGroup((current) => (current === group ? null : group));
  }

  return (
    <div
      className="sticky top-0 z-[9999] bg-white text-slate-950"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMobileMenus();
      }}
    >
      <style>{`
        @keyframes serviceMenuArrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        .service-menu-arrow {
          animation: serviceMenuArrowMove 1.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-menu-arrow {
            animation: none;
          }
        }
      `}</style>

      {/* МОБИЛЬНАЯ ШАПКА */}
      <header className="relative border-b-4 border-[#FDC700] bg-white md:hidden">
        <div className="grid grid-cols-3 items-center">
          <button
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="mobile-services"
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setMenuOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-1 border-r border-slate-200 text-base font-medium uppercase text-slate-600 hover:bg-yellow-50"
          >
            Услуги
            <span className="text-[10px]">
              {servicesOpen ? "▲" : "▼"}
            </span>
          </button>

          <a
            href="/"
            aria-label="На главную"
            className="flex h-14 items-center justify-center"
          >
            <Image
              src={mobileLogo}
              alt="HS — Сервис бытовых услуг"
              sizes="115px"
              className="h-10 w-auto"
            />
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setServicesOpen(false);
            }}
            className="flex h-14 items-center justify-center gap-1 text-base font-medium uppercase text-slate-600 hover:bg-yellow-50"
          >
            Меню
            <span className="text-[10px]">
              {menuOpen ? "▲" : "▼"}
            </span>
          </button>
        </div>

        {servicesOpen && (
          <div
            id="mobile-services"
            className="absolute left-0 top-full z-[200] w-[calc(100%-1rem)] max-w-sm rounded-b-2xl bg-[#F3F6FA] p-2 shadow-2xl"
          >
            <div className="max-h-[calc(100dvh-140px)] space-y-1.5 overflow-y-auto overscroll-contain p-1">
              {visibleMenu.map((group) => {
                if (group.type === "link") {
                  return (
                    <ServiceLink
                      key={group.id}
                      title={group.mobileTitle || group.title}
                      href={group.mobileHref || group.href || "/"}
                      onClick={closeMobileMenus}
                    />
                  );
                }

                return (
                  <MobileGroup
                    key={group.id}
                    title={group.mobileTitle || group.title}
                    href={group.mobileHref || group.href || undefined}
                    open={activeGroup === group.id}
                    onToggle={() => toggleGroup(group.id)}
                    onNavigate={closeMobileMenus}
                    items={group.type === "other" ? otherItems : group.items}
                    allHref={group.type === "other" ? undefined : group.allHref || undefined}
                    allTitle={group.type === "other" ? undefined : group.allTitle || undefined}
                  />
                );
              })}
            </div>
          </div>
        )}

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute right-0 top-full z-[200] w-[calc(100%-1rem)] max-w-sm rounded-b-2xl bg-[#F3F6FA] p-2 shadow-2xl"
          >
            <div className="max-h-[calc(100dvh-140px)] space-y-1.5 overflow-y-auto overscroll-contain p-1">
              {navigation.map((item) => (
                <ServiceLink
                  key={item.href}
                  title={item.title}
                  href={item.href}
                  onClick={closeMobileMenus}
                />
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* КОМПЬЮТЕР */}
      <div className="hidden md:block">
        <header className="bg-white text-slate-900">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
            <a href="/" className="flex shrink-0 items-center">
              <Image
                src={desktopLogo}
                alt="Сервис бытовых услуг"
                sizes={`${Math.ceil(80 * desktopLogo.width / desktopLogo.height)}px`}
                className="h-20 w-auto object-contain"
              />
            </a>

            <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-normal">
              <a href="/o-nas" className="hover:text-[#0092B8]">
                О нас
              </a>

              <a
                href="/nashi-raboty"
                className="hover:text-[#0092B8]"
              >
                Наши работы
              </a>

              <a href="/otzyvy" className="hover:text-[#0092B8]">
                Отзывы
              </a>

              <a href="/price" className="hover:text-[#0092B8]">
                Цены
              </a>
            </nav>

            <div className="flex shrink-0 items-center gap-5">
              <div className="text-right">
                <p className="text-sm text-slate-500">
                  Ежедневно · Алматы
                </p>

                <a
                  href={`tel:+${phone}`}
                  className="whitespace-nowrap text-xl font-black lg:text-2xl"
                >
                  {displayPhone}
                </a>
              </div>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-[#0092B8] px-6 py-3 font-bold text-white transition hover:bg-[#007D9E] lg:block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* ЖЁЛТОЕ МЕНЮ */}
        <nav className="bg-[#FDC700] text-slate-950 shadow-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 px-6 font-semibold">
            <a
              href="/"
              className="whitespace-nowrap py-3 hover:text-[#007D9E]"
            >
              Главная
            </a>

            {visibleMenu.map((group) => {
              if (group.type === "link") {
                return (
                  <a
                    key={group.id}
                    href={group.href || "/"}
                    className="whitespace-nowrap py-3 hover:text-[#007D9E]"
                  >
                    {group.title}
                  </a>
                );
              }

              return (
                <DesktopMenu
                  key={group.id}
                  title={group.title}
                  href={group.type === "other" ? undefined : group.href || undefined}
                  items={group.type === "other" ? otherItems : group.items}
                  allTitle={group.type === "other" ? undefined : group.allTitle || undefined}
                  alignRight={group.alignRight}
                />
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}