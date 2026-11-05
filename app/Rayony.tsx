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
      className="scroll-mt-40 bg-white py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ЗАГОЛОВОК */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            География выезда
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0092B8] md:text-[44px]">
            {service
              ? `${service} во всех районах Алматы`
              : "Работаем по всему Алматы и пригороду"}
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#FDC700]" />
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
          {/* РАЙОНЫ */}
          <div className="flex flex-col justify-center">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {districts.map((district) => (
                <li key={district}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${district}, Алматы`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-4 transition hover:border-[#FDC700] hover:bg-[#FDC700]/10"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FDC700]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-[#292929]"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="text-[15px] leading-6 text-[#292929] transition group-hover:text-[#0092B8]">
                      {district}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-5 border-l-4 border-[#FDC700] pl-4 text-base leading-7 text-gray-600">
              Быстрый выезд мастера в ваш район.
              Обслуживаем весь Алматы и пригород.
            </p>
          </div>

          {/* КАРТА */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
            <iframe
              src="https://www.google.com/maps?q=Алматы&z=10&output=embed"
              title="Карта Алматы и пригорода — территория выезда мастеров"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[300px] w-full border-0 md:h-[380px] lg:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}