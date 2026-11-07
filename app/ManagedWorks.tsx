"use client";

import { useEffect, useRef, useState } from "react";

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

type SelectedPhoto = {
  src: string;
  title: string;
  label: string;
};

export default function ManagedWorks() {
  const [works, setWorks] = useState<Work[]>([]);
  const [selectedPhoto, setSelectedPhoto] =
    useState<SelectedPhoto | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/works", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка загрузки работ");
        }

        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setWorks(data.filter((work: Work) => work.enabled));
        }
      })
      .catch((error) => {
        if (!controller.signal.aborted) {
          console.error(error);
        }
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedPhoto) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;

    if (!dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) {
        dialog.close();
      }

      document.body.style.overflow = previousOverflow;
    };
  }, [selectedPhoto]);

  function closePhoto() {
    setSelectedPhoto(null);
  }

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
                  <button
                    key={`${photo.src}-${index}`}
                    type="button"
                    onClick={() =>
                      setSelectedPhoto({
                        src: photo.src,
                        title: work.title,
                        label: photo.label,
                      })
                    }
                    aria-label={`${work.title} — ${photo.label}. Открыть фото`}
                    aria-haspopup="dialog"
                    className="group relative block h-[180px] min-w-0 cursor-zoom-in overflow-hidden rounded-xl bg-slate-100 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0092B8] md:h-[190px]"
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
                  </button>
                ))}
              </div>

              <div className="mb-1 ml-1 mt-4 h-1 w-12 rounded-full bg-[#FDC700]" />
            </article>
          );
        })}
      </div>

      {/* ПРОСМОТР ФОТО */}
      <dialog
        ref={dialogRef}
        aria-label={
          selectedPhoto
            ? `${selectedPhoto.title} — ${selectedPhoto.label}`
            : "Просмотр фотографии"
        }
        onCancel={(event) => {
          event.preventDefault();
          closePhoto();
        }}
        onClose={closePhoto}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();

            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            ) {
              closePhoto();
            }
          }
        }}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-none overflow-y-auto rounded-2xl border-0 bg-white p-0 shadow-2xl backdrop:bg-black/70 md:w-[50vw] md:max-w-[900px]"
      >
        {selectedPhoto && (
          <>
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
              <div className="min-w-0">
                <p className="break-words text-sm font-semibold text-[#0092B8]">
                  {selectedPhoto.title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {selectedPhoto.label}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePhoto}
                aria-label="Закрыть фото"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-[#FDC700] focus-visible:outline-2 focus-visible:outline-[#0092B8]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center bg-slate-50 p-2 md:p-3">
              <img
                src={selectedPhoto.src}
                alt={`${selectedPhoto.title} — ${selectedPhoto.label}`}
                className="block max-h-[65dvh] max-w-full rounded-lg object-contain"
              />
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}