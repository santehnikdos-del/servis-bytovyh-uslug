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
  thirdImage?: string;
  thirdLabel?: string;
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
    <section className="mx-auto max-w-7xl px-5 py-10 md:py-14">
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => {
          const photos = [
            { src: work.beforeImage, label: work.beforeLabel },
            { src: work.afterImage, label: work.afterLabel },
            { src: work.thirdImage, label: work.thirdLabel || "Результат" },
          ].filter(
            (photo): photo is { src: string; label: string } =>
              Boolean(photo.src)
          );

          return (
            <article
              key={work.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="p-4">
                <p className="text-sm font-medium text-[#0092B8]">
                  {work.category}
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  {work.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-1 p-1 pt-0">
                {photos.map((photo, index) => (
                  <a
                    key={`${photo.src}-${index}`}
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${work.title} — ${photo.label}. Открыть фото`}
                    className={`group relative block overflow-hidden rounded-lg bg-slate-100 ${
                      photos.length === 1 ||
                      (photos.length === 3 && index === 0)
                        ? "col-span-2 aspect-[2/1]"
                        : "aspect-square"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={`${work.title} — ${photo.label}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white">
                      {photo.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mx-4 mb-4 mt-3 h-1 w-12 rounded-full bg-[#FDC700]" />
            </article>
          );
        })}
      </div>
    </section>
  );
}