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
    <div
      className={
        type === "plumbing"
          ? "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          : "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      {services.map((service) => (
        <a
          key={service.id}
          href={service.href}
          className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-lg"
        >
          <div className="mb-5 h-1 w-12 rounded-full bg-yellow-400" />

          <h3 className="text-xl font-black">{service.title}</h3>

          {service.description && (
            <p className="mt-3 leading-6 text-slate-600">
              {service.description}
            </p>
          )}

          <p className="mt-auto pt-6 font-bold text-yellow-600">
            Подробнее →
          </p>
        </a>
      ))}
    </div>
  );
}
