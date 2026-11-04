import Header from "../Header";
import Footer from "../Footer";
import ReviewForm from "./ReviewForm";
import { supabase } from "../../lib/supabase";

export const metadata = {
  title: "Отзывы о сантехнике в Алматы | Сервис бытовых услуг",
  description:
    "Отзывы клиентов о сантехнических работах в Алматы. Установка, ремонт, монтаж труб, устранение протечек и другие услуги.",
  alternates: {
    canonical: "https://home-services.kz/otzyvy",
  },
};

type Review = {
  id: number;
  name: string;
  text: string;
  rating: number;
  city: string;
  approved: boolean;
  created_at: string;
};

const oldReviews = [
  {
    name: "Александр",
    text: "Мастер приехал вовремя, быстро нашёл причину протечки и всё устранил. Работа выполнена аккуратно. Спасибо!",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Айгуль",
    text: "Обратились для замены сантехники в ванной. Всё установили аккуратно, проверили подключения и убрали после работы.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Ермек",
    text: "Нужно было срочно прочистить канализацию. Мастер приехал быстро, устранил засор и дал рекомендации.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Данияр",
    text: "Вызвали мастера для замены унитаза. Приехал в назначенное время, демонтировал старый и аккуратно установил новый. Всё проверил.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Гульмира",
    text: "Меняли смеситель и сифон на кухне. Мастер всё сделал аккуратно, соединения проверил, нигде не протекает. Работой довольна.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Руслан",
    text: "Обратились по поводу замены старых труб. Всё объяснили заранее, помогли с материалами и качественно выполнили монтаж.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Сергей",
    text: "Устанавливали бойлер. Мастер приехал со всем необходимым, аккуратно подключил воду и проверил работу оборудования.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Наталья",
    text: "Была протечка в ванной, долго не могли понять откуда вода. Мастер нашёл проблему и устранил её. Спасибо за аккуратную работу.",
    rating: 5,
    city: "Алматы",
  },
  {
    name: "Марат",
    text: "Заказывали установку раковины с тумбой. Всё получилось ровно и аккуратно, подключили воду и канализацию. Результатом довольны.",
    rating: 5,
    city: "Алматы",
  },
];

function Breadcrumbs() {
  return (
    <nav
      aria-label="Хлебные крошки"
      className="mb-5 flex items-center gap-2 text-sm text-white/70"
    >
      <a href="/" className="transition hover:text-[#FDC700]">
        Главная
      </a>

      <span aria-hidden="true">→</span>

      <span aria-current="page" className="text-white">
        Отзывы
      </span>
    </nav>
  );
}

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
      >
        <path
          fill="#0092B8"
          d="m12 1 3 2.2 3.7-.1 1.1 3.5 3.1 2.1-1.2 3.5
             1.2 3.5-3.1 2.1-1.1 3.5-3.7-.1L12 23l-3-2.2
             -3.7.1-1.1-3.5-3.1-2.1L2.3 12 1.1 8.5l3.1-2.1
             1.1-3.5 3.7.1Z"
        />

        <path
          className="reviews-check"
          pathLength="1"
          d="m7.5 12 3 3 6-6"
          fill="none"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>{text}</span>
    </li>
  );
}

function ReviewCard({
  review,
}: {
  review: {
    name: string;
    text: string;
    rating: number;
    city: string;
    created_at?: string;
  };
}) {
  const rating = Math.max(
    1,
    Math.min(5, Math.round(Number(review.rating) || 5))
  );

  const parsedDate = review.created_at
    ? new Date(review.created_at)
    : null;

  const validDate =
    parsedDate && !Number.isNaN(parsedDate.getTime())
      ? parsedDate
      : null;

  const dateLabel = validDate
    ? new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Almaty",
      }).format(validDate)
    : null;

  const initial =
    review.name.trim().charAt(0).toUpperCase() || "К";

  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#0092B8]/40 hover:shadow-lg">
      {/* АВТОР */}
      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0092B8]/10 text-xl font-bold text-[#0092B8]"
        >
          {initial}
        </div>

        <div className="min-w-0">
          <h3 className="break-words text-lg font-bold text-[#0092B8]">
            {review.name}
          </h3>

          <p className="mt-0.5 text-sm text-slate-500">
            {review.city || "Алматы"}
          </p>
        </div>
      </div>

      {/* ОЦЕНКА И ДАТА */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span
            className="text-lg tracking-wide text-[#FDC700]"
            aria-label={`Оценка ${rating} из 5`}
          >
            <span aria-hidden="true">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </span>
          </span>

          <span className="text-sm font-semibold text-slate-700">
            {rating.toFixed(1)}
          </span>
        </div>

        {validDate && dateLabel && (
          <time
            dateTime={validDate.toISOString()}
            className="text-xs text-slate-500"
          >
            {dateLabel}
          </time>
        )}
      </div>

      {/* ТЕКСТ */}
      <p className="mt-4 whitespace-pre-line break-words text-base leading-7 text-slate-600">
        {review.text}
      </p>

      <div
        aria-hidden="true"
        className="mt-6 h-1 w-12 rounded-full bg-[#FDC700]"
      />
    </article>
  );
}

export default async function OtzyvyPage() {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Ошибка загрузки отзывов:", error);
  }

  const reviews = (data ?? []) as Review[];

  return (
    <main className="min-h-screen bg-white">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      <style>{`
        @keyframes reviewsShine {
          from {
            transform: translateX(0) skewX(-25deg);
          }
          to {
            transform: translateX(1800%) skewX(-25deg);
          }
        }

        .reviews-call-shine {
          position: relative;
          overflow: hidden;
        }

        .reviews-call-shine::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -25%;
          width: 8%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: reviewsShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes reviewsDiscountSwing {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .reviews-discount {
          transform-origin: 0 0;
          animation: reviewsDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes reviewsCheckDraw {
          0%, 15% {
            stroke-dashoffset: 1;
          }
          45%, 85% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 1;
          }
        }

        .reviews-check {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: reviewsCheckDraw 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-call-shine::after,
          .reviews-discount,
          .reviews-check {
            animation: none;
          }
        }
      `}</style>

      {/* БАННЕР — МОБИЛЬНЫЙ */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/hero-mark.png')] bg-[length:85%_auto] bg-center bg-no-repeat opacity-10"
        />

        <div className="relative z-10">
          <Breadcrumbs />

          <h1 className="text-center text-3xl font-bold uppercase leading-tight">
            Отзывы{" "}
            <span className="text-[#FDC700]">
              клиентов
            </span>
          </h1>

          <div className="mx-auto mt-6 w-fit">
            <ul className="flex flex-col gap-3">
              <Check text="Свои мастера" />
              <Check text="Цена заранее" />
              <Check text="Гарантия" />
            </ul>
          </div>

          <p className="mt-7 text-center text-lg leading-7 text-white/85">
            Здесь клиенты делятся впечатлениями о работе наших
            мастеров в Алматы. Спасибо за ваше доверие!
          </p>

          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
            <a
              href="tel:+77771696969"
              className="reviews-call-shine inline-flex min-h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-6 py-3 text-lg font-normal transition hover:bg-[#007D9E]"
            >
              Вызвать мастера
            </a>

            <a
              href="https://wa.me/77771696969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-normal text-[#292929] transition hover:bg-gray-100"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* БАННЕР — КОМПЬЮТЕР */}
      <section
        className="relative hidden h-[490px] overflow-hidden text-white md:block"
        style={{ backgroundColor: "#281E12" }}
      >
        <div className="absolute inset-y-0 right-0 w-[53%]">
          <img
            src="/banner-master.jpg"
            alt="Мастер сервиса бытовых услуг в Алматы"
            className="h-full w-full object-cover object-[60%_center]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-px w-[240px]"
            style={{
              background:
                "linear-gradient(to right, #281E12 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="w-[47%]">
            <Breadcrumbs />

            <h1 className="text-5xl font-bold uppercase leading-[1.05] lg:whitespace-nowrap lg:text-[64px]">
              Отзывы{" "}
              <span className="text-[#FDC700]">
                клиентов
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-7 text-white/85">
              Здесь клиенты делятся впечатлениями о работе наших
              мастеров в Алматы. Спасибо за ваше доверие!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+77771696969"
                className="reviews-call-shine inline-flex h-14 items-center justify-center rounded-full bg-[#0092B8]/80 px-7 text-xl font-normal transition hover:bg-[#007D9E]"
              >
                Вызвать мастера
              </a>

              <div className="relative shrink-0">
                <a
                  href="https://wa.me/77771696969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-xl font-normal text-[#292929] transition hover:bg-gray-100"
                >
                  Написать в WhatsApp
                </a>

                {/* СКИДКА */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 h-0 w-0"
                >
                  <div className="reviews-discount absolute left-0 top-0">
                    <img
                      src="/discount-15.png"
                      alt=""
                      className="absolute left-0 top-[-47px] w-[180px] max-w-none drop-shadow-lg"
                    />

                    <svg
                      viewBox="0 0 30 20"
                      className="absolute -left-[9px] -top-[10px] z-10 h-5 w-[30px]"
                    >
                      <ellipse
                        cx="15"
                        cy="10"
                        rx="12"
                        ry="7"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="4"
                      />
                      <ellipse
                        cx="15"
                        cy="9"
                        rx="12"
                        ry="7"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-base">
              <Check text="Свои мастера" />
              <Check text="Цена заранее" />
              <Check text="Гарантия" />
            </ul>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section className="mx-auto max-w-3xl px-5 py-10 md:py-12">
        <ReviewForm />
      </section>

      {/* ОТЗЫВЫ */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mb-10 text-center">
            <p className="font-bold text-[#0092B8]">
              Что говорят клиенты
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0092B8] md:text-[54px]">
              Отзывы о нашей работе
            </h2>
          </div>

          <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* ОТЗЫВЫ ИЗ SUPABASE */}
            {reviews.map((review) => (
              <ReviewCard
                key={`review-${review.id}`}
                review={review}
              />
            ))}

            {/* СТАРЫЕ ОТЗЫВЫ */}
            {oldReviews.map((review, index) => (
              <ReviewCard
                key={`old-${index}`}
                review={review}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />
    </main>
  );
}