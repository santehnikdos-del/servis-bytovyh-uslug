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
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
      <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => {
          const photos = [
            {
              src: work.beforeImage,
              label: work.beforeLabel || "До",
            },
            {
              src: work.afterImage,
              label: work.afterLabel || "После",
            },
            {
              src: work.thirdImage,
              label: work.thirdLabel || "Результат",
            },
          ].filter(
            (photo): photo is { src: string; label: string } =>
              Boolean(photo.src)
          );

          const photoColumns =
            photos.length === 3
              ? "grid-cols-3"
              : photos.length === 2
                ? "grid-cols-2"
                : "grid-cols-1";

          return (
            <article
              key={work.id}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:border-[#FDC700] hover:shadow-lg"
            >
              <div className="px-1 pb-3">
                <p className="text-sm font-medium text-[#0092B8]">
                  {work.category}
                </p>

                <h2 className="mt-1 min-h-[56px] break-words text-lg font-bold leading-7 text-[#0092B8]">
                  {work.title}
                </h2>
              </div>

              <div className={`mt-auto grid gap-2 ${photoColumns}`}>
                {photos.map((photo, index) => (
                  <a
                    key={`${photo.src}-${index}`}
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${work.title} — ${photo.label}. Открыть фото`}
                    className="group relative block h-[180px] min-w-0 overflow-hidden rounded-xl bg-slate-100 md:h-[190px]"
                  >
                    <img
                      src={photo.src}
                      alt={`${work.title} — ${photo.label}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <span className="absolute bottom-2 left-1 right-1 rounded-md bg-black/60 px-1 py-1 text-center text-[11px] font-medium leading-tight text-white">
                      {photo.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="ml-1 mt-4 mb-1 h-1 w-12 rounded-full bg-[#FDC700]" />
            </article>
          );
        })}
      </div>
    </section>
  );
}