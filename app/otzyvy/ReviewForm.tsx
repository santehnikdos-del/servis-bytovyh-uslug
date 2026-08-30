"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ReviewForm() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submitReview(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !text.trim()) {
      setMessage("Заполните имя и отзыв.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("reviews").insert({
      name: name.trim(),
      text: text.trim(),
      rating,
      city: "Алматы",
      approved: false,
    });

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Не удалось отправить отзыв.");
      return;
    }

    setName("");
    setText("");
    setRating(5);

    setMessage(
      "Спасибо! Отзыв отправлен на проверку."
    );
  }

  function closeModal() {
    setOpen(false);
    setMessage("");
  }

  return (
    <>
      {/* КНОПКА */}

      <div className="flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-black shadow-lg transition hover:bg-yellow-300"
        >
          Оставить отзыв
        </button>
      </div>

      {/* ВСПЛЫВАЮЩЕЕ ОКНО */}

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">

            {/* ЗАКРЫТЬ */}

            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-4 text-3xl font-bold text-slate-500 hover:text-black"
            >
              ×
            </button>

            <p className="font-bold text-yellow-500">
              Ваше мнение важно для нас
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Оставить отзыв
            </h2>

            <p className="mt-3 text-slate-600">
              Расскажите, как прошла работа мастера.
            </p>

            {message === "Спасибо! Отзыв отправлен на проверку." ? (
              <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center">
                <p className="text-xl font-black text-green-700">
                  Спасибо!
                </p>

                <p className="mt-2 text-slate-700">
                  Ваш отзыв отправлен на проверку.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 rounded-full bg-yellow-400 px-7 py-3 font-black text-black hover:bg-yellow-300"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={submitReview} className="mt-7">

                {/* ИМЯ */}

                <label className="block font-bold text-slate-900">
                  Ваше имя
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например: Александр"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-yellow-400"
                />

                {/* ОЦЕНКА */}

                <label className="mt-6 block font-bold text-slate-900">
                  Ваша оценка
                </label>

                <div className="mt-3 flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="text-3xl text-yellow-400"
                    >
                      {star <= rating ? "★" : "☆"}
                    </button>
                  ))}
                </div>

                {/* ОТЗЫВ */}

                <label className="mt-6 block font-bold text-slate-900">
                  Ваш отзыв
                </label>

                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={5}
                  placeholder="Напишите несколько слов о работе мастера..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-yellow-400"
                />

                {/* ОШИБКА */}

                {message && (
                  <p className="mt-4 font-semibold text-red-600">
                    {message}
                  </p>
                )}

                {/* ОТПРАВИТЬ */}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full rounded-full bg-yellow-400 px-8 py-4 font-black text-black hover:bg-yellow-300 disabled:opacity-60"
                >
                  {loading
                    ? "Отправляем..."
                    : "Отправить отзыв"}
                </button>

              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}