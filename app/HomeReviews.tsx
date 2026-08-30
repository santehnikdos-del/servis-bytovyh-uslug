"use client";

import { useEffect, useState } from "react";

type Review = {
  id: number;
  created_at: string;
  name: string;
  text: string;
  rating: number;
  city?: string;
  approved?: boolean;
};

function getReviewWord(count: number) {
  const lastTwo = count % 100;
  const last = count % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return "отзывов";
  if (last === 1) return "отзыв";
  if (last >= 2 && last <= 4) return "отзыва";

  return "отзывов";
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function HomeReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) return;

        const data = await response.json();

        const items: Review[] = Array.isArray(data)
          ? data
          : data.reviews || [];

        setReviews(items);
      } catch (error) {
        console.error("Ошибка загрузки отзывов:", error);
      }
    }

    loadReviews();
  }, []);

  if (reviews.length === 0) {
    return null;
  }

  const total = reviews.reduce(
    (sum, review) => sum + Number(review.rating || 5),
    0
  );

  const average = total / reviews.length;

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-black text-slate-950 md:text-4xl">
          Отзывы клиентов
        </h2>

        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg text-slate-600">
              На сайте{" "}
              <span className="font-black text-slate-900">
                {reviews.length} {getReviewWord(reviews.length)}
              </span>
            </p>

            <p className="mt-2 text-lg text-slate-600">
              Средняя оценка{" "}
              <span className="text-2xl font-black text-slate-900">
                {average.toFixed(1)}
              </span>
              <span className="ml-3 text-yellow-400">
                ★★★★★
              </span>
            </p>
          </div>

          <a
            href="/otzyvy"
            className="font-bold text-blue-600 hover:text-blue-700"
          >
            Все отзывы →
          </a>
        </div>

        <div className="mt-8 space-y-5">
          {reviews.slice(0, 4).map((review) => (
            <div
              key={review.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-black">
                    {review.name}
                  </h3>

                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                    <span className="text-slate-300">
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </span>

                  <span className="font-bold text-slate-700">
                    {review.rating.toFixed(1)}
                  </span>
                </div>

                <span className="text-slate-400">
                  {formatDate(review.created_at)}
                </span>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}