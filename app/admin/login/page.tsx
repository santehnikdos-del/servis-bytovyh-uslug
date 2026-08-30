"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!password) {
      setError("Введите пароль");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Неверный пароль");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Ошибка входа");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-5xl">🔐</div>

          <h1 className="mt-4 text-3xl font-black text-slate-950">
            Админ-панель
          </h1>

          <p className="mt-2 text-slate-500">
            Введите пароль для входа
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <label className="font-bold text-slate-900">
            Пароль
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            autoComplete="current-password"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none focus:border-yellow-400"
          />

          {error && (
            <p className="mt-3 font-bold text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-yellow-400 px-5 py-4 text-lg font-black text-black hover:bg-yellow-300 disabled:opacity-60"
          >
            {loading ? "Входим..." : "Войти"}
          </button>
        </form>

        <a
          href="/"
          className="mt-6 block text-center font-semibold text-slate-500 hover:text-slate-950"
        >
          ← Вернуться на сайт
        </a>
      </div>
    </main>
  );
}