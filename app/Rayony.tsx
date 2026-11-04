type RayonyProps = {
  service?: string;
};

const districts = [
  "Алмалинский район",
  "Медеуский район",
  "Бостандыкский район",
  "Ауэзовский район",
  "Турксибский район",
  "Наурызбайский район",
  "Алатауский район",
  "Жетысуский район",
];

export default function Rayony({ service }: RayonyProps) {
  return (
    <section
      id="districts"
      className="scroll-mt-40 bg-[#0092B8] py-12 text-white md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ЗАГОЛОВОК */}
        <div className="text-center">
          <p className="font-bold uppercase tracking-wider text-[#FDC700]">
            География выезда
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight md:text-[44px]">
            {service
              ? `${service} во всех районах Алматы`
              : "Работаем по всему Алматы и пригороду"}
          </h2>
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8">
          {/* РАЙОНЫ */}
          <div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {districts.map((district) => (
                <li key={district}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${district}, Алматы`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-lg leading-7 transition hover:text-[#FDC700]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>

                    <span className="underline decoration-white/60 underline-offset-4">
                      {district}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl bg-white/10 px-5 py-4 text-lg leading-7">
              Быстрый выезд мастера в ваш район.
            </p>
          </div>

          {/* КАРТА */}
          <div className="min-w-0 overflow-hidden rounded-3xl bg-white/10">
            <iframe
              src="https://www.google.com/maps?q=Алматы&z=10&output=embed"
              title="Карта Алматы и пригорода — территория выезда мастеров"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[320px] w-full border-0 md:h-[460px] lg:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}