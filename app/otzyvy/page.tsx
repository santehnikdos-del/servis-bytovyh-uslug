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
    <main className="min-h-screen bg-sky-100">
      <Header
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />

      {/* ВЕРХ */}
      <section className="bg-sky-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <a href="/" className="hover:text-yellow-400">
              Главная
            </a>

            <span>→</span>
            <span className="text-white">Отзывы</span>
          </div>

          <p className="font-bold text-yellow-400">
            Отзывы клиентов
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Отзывы о нашей работе
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Здесь клиенты делятся впечатлениями о выполненных
            сантехнических работах в Алматы.
          </p>
        </div>
      </section>

      {/* ФОРМА */}
      <section className="mx-auto max-w-3xl px-5 py-14">
        <ReviewForm />
      </section>

      {/* ОТЗЫВЫ */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:pb-20">
        <div className="mb-10">
          <p className="font-bold text-yellow-500">
            Что говорят клиенты
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
            Отзывы о нашей работе
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* НОВЫЕ ОТЗЫВЫ ИЗ SUPABASE */}
          {reviews.map((review) => {
            const rating = Math.max(
              1,
              Math.min(5, Number(review.rating) || 5)
            );

            return (
              <article
                key={review.id}
                className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
              >
                <div
                  className="text-xl text-yellow-400"
                  aria-label={`Оценка ${rating} из 5`}
                >
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {review.text}
                </p>

                <p className="mt-5 font-black text-slate-950">
                  {review.name}
                </p>

                <p className="text-sm text-slate-500">
                  {review.city || "Алматы"}
                </p>
              </article>
            );
          })}

          {/* СТАРЫЕ ОТЗЫВЫ */}
          {oldReviews.map((review, index) => (
            <article
              key={`old-${index}`}
              className="rounded-3xl border border-sky-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
            >
              <div className="text-xl text-yellow-400">
                {"★".repeat(review.rating)}
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {review.text}
              </p>

              <p className="mt-5 font-black text-slate-950">
                {review.name}
              </p>

              <p className="text-sm text-slate-500">
                {review.city}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer
        phone="77771696969"
        displayPhone="+7 777 169 69 69"
      />
    </main>
  );
}