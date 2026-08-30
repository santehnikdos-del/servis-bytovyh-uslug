"use client";

import { useEffect, useState } from "react";

type Work = {
  id: string;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  enabled: boolean;
};

export default function ManagedWorks() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch("/api/works")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWorks(data.filter((work) => work.enabled));
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
      <div className="space-y-16">
        {works.map((work) => (
          <div key={work.id}>
            <p className="font-bold text-yellow-500">{work.category}</p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              {work.title}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl bg-white shadow">
                <img
                  src={work.beforeImage}
                  alt={`${work.title} — ${work.beforeLabel}`}
                  className="h-[300px] w-full bg-slate-100 object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xl font-black text-slate-950">
                    {work.beforeLabel}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white shadow">
                <img
                  src={work.afterImage}
                  alt={`${work.title} — ${work.afterLabel}`}
                  className="h-[300px] w-full bg-slate-100 object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xl font-black text-slate-950">
                    {work.afterLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
