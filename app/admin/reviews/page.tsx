"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Review = {
  id: number;
  name: string;
  text: string;
  rating: number;
  city: string;
  created_at: string;
  approved: boolean;
};

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadReviews() {
    setLoading(true);

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Не удалось загрузить отзывы.");
      setLoading(false);
      return;
    }

    setReviews(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function approveReview(id: number) {
    const response = await fetch("/api/admin/reviews", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      alert("Не удалось одобрить отзыв.");
      return;
    }

    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, approved: true } : review
      )
    );
  }

  async function deleteReview(id: number) {
    const confirmed = window.confirm("Точно удалить этот отзыв?");
    if (!confirmed) return;

    const response = await fetch("/api/admin/reviews", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      alert("Не удалось удалить отзыв.");
      return;
    }

    setReviews((prev) =>
      prev.filter((review) => review.id !== id)
    );
  }

  const waitingReviews = reviews.filter((review) => !review.approved);
  const approvedReviews = reviews.filter((review) => review.approved);

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <a href="/admin" className="font-bold text-blue-600 hover:underline">
          ← Назад в админку
        </a>

        <h1 className="mt-4 text-4xl font-black text-slate-950">
          Отзывы клиентов
        </h1>

        <p className="mt-2 text-slate-600">
          Проверяй новые отзывы, одобряй или удаляй их.
        </p>

        {loading && (
          <div className="mt-8 rounded-2xl bg-white p-6 shadow">
            Загрузка отзывов...
          </div>
        )}

        {!loading && (
          <>
            <section className="mt-10">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-black text-slate-950">
                  На проверке
                </h2>
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-black text-black">
                  {waitingReviews.length}
                </span>
              </div>

              {waitingReviews.length === 0 ? (
                <div className="mt-5 rounded-2xl bg-white p-6 shadow">
                  Новых отзывов пока нет.
                </div>
              ) : (
                <div className="mt-5 space-y-5">
                  {waitingReviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      onApprove={approveReview}
                      onDelete={deleteReview}
                    />
                  ))}
                </div>
              )}
            </section>

            <section className="mt-12">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-black text-slate-950">
                  Опубликованные
                </h2>
                <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-black text-white">
                  {approvedReviews.length}
                </span>
              </div>

              {approvedReviews.length === 0 ? (
                <div className="mt-5 rounded-2xl bg-white p-6 shadow">
                  Опубликованных отзывов пока нет.
                </div>
              ) : (
                <div className="mt-5 space-y-5">
                  {approvedReviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      onApprove={approveReview}
                      onDelete={deleteReview}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function ReviewCard({
  review,
  onApprove,
  onDelete,
}: {
  review: Review;
  onApprove: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-black text-slate-950">
              {review.name}
            </h3>

            {review.approved ? (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                Опубликован
              </span>
            ) : (
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-700">
                На проверке
              </span>
            )}
          </div>

          <div className="mt-2 text-xl text-yellow-400">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>

          <p className="mt-4 text-slate-700">{review.text}</p>

          <p className="mt-4 text-sm text-slate-400">
            {review.city || "Алматы"} ·{" "}
            {new Date(review.created_at).toLocaleDateString("ru-RU")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          {!review.approved && (
            <button
              onClick={() => onApprove(review.id)}
              className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700"
            >
              ✓ Одобрить
            </button>
          )}

          <button
            onClick={() => onDelete(review.id)}
            className="rounded-xl bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
