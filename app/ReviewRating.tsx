"use client";

import { useEffect, useState } from "react";

type Review = {
  rating?: number;
  approved?: boolean;
};

function getReviewWord(count: number) {
  const lastTwo = count % 100;
  const last = count % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return "отзывов";
  }

  if (last === 1) {
    return "отзыв";
  }

  if (last >= 2 && last <= 4) {
    return "отзыва";
  }

  return "отзывов";
}

export default function ReviewRating() {
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();

        const reviews: Review[] = Array.isArray(data)
          ? data
          : data.reviews || [];

        const approvedReviews = reviews.filter(
          (review) => review.approved !== false
        );

        if (approvedReviews.length === 0) {
          return;
        }

        const total = approvedReviews.reduce(
          (sum, review) => sum + Number(review.rating || 5),
          0
        );

        setCount(approvedReviews.length);
        setAverage(total / approvedReviews.length);
      } catch (error) {
        console.error("Ошибка загрузки рейтинга:", error);
      }
    }

    loadReviews();
  }, []);

  if (count === 0) {
    return null;
  }

  return (
    <div>
      <p className="text-lg text-slate-600">
        На сайте{" "}
        <span className="font-black text-slate-900">
          {count} {getReviewWord(count)}
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
  );
}