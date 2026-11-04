"use client";

import { useEffect, useState } from "react";

type Service = {
  id: string;
  title: string;
  href: string;
  description: string;
  enabled: boolean;
};

export default function ManagedServices({
  type,
}: {
  type: "plumbing" | "electric";
}) {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const endpoint =
      type === "plumbing"
        ? "/api/plumbing-services"
        : "/api/electric-services";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data.filter((service) => service.enabled));
        }
      })
      .catch(console.error);
  }, [type]);

  return (
    <>
      <style>{`
        @keyframes managedServiceArrow {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }

        .managed-service-arrow {
          display: inline-block;
          animation: managedServiceArrow 1.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .managed-service-arrow {
            animation: none;
          }
        }
      `}</style>

      <div
        className={
          type === "plumbing"
            ? "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            : "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {services.map((service) => (
          <a
            key={service.id}
            href={service.href}
            className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0092B8]/40 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0092B8]"
          >
            <h3 className="break-words text-lg font-bold leading-6 text-[#0092B8]">
              {service.title}
            </h3>

            {service.description && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            )}

            <span className="mt-auto flex items-center gap-3 pt-4 text-sm font-semibold text-[#0092B8]">
              <span
                aria-hidden="true"
                className="managed-service-arrow text-lg"
              >
                →
              </span>

              Подробнее
            </span>
          </a>
        ))}
      </div>
    </>
  );
}