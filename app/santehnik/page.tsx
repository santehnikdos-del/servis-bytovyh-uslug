      import Header from "../Header"; 
      import Footer from "../Footer";
export const metadata = {
  title: "Сантехник Алматы — вызов сантехника на дом | Услуги сантехника",

  description:
    "Сантехник в Алматы с выездом на дом. Вызов сантехника, ремонт и установка сантехники, устранение протечек, замена труб, унитазов и смесителей.",

  alternates: {
    canonical: "https://home-services.kz/santehnik",
  },
};

export default function SantehnikPage() {
  
  return (
    <main className="min-h-screen bg-neutral-800 pb-20 text-white md:pb-0">

      <Header />

      {/* ================= МОБИЛЬНЫЙ ПЕРВЫЙ ЭКРАН ================= */}
<section className="bg-[#303030] px-6 py-8 text-white md:hidden">

  <h1 className="text-center text-3xl font-bold text-yellow-400">
    Сантехник в Алматы
  </h1>

  <p className="mt-4 text-center text-lg font-bold text-white">
    Вызов сантехника на дом. Ремонт, установка сантехники,
    устранение протечек и срочный выезд мастера.
  </p>

  <div className="mt-10 grid grid-cols-3 gap-2 text-center">

    <div className="flex flex-col items-center">
      <img
        src="/banner-fast.png"
        alt="Быстрый выезд"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base text-white">
        Быстрый<br />выезд
      </p>
    </div>

    <div className="flex flex-col items-center border-x border-white/20">
      <img
        src="/banner-garantiya.png"
        alt="Гарантия до 3 лет"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base text-white">
        Гарантия<br />до 3 лет
      </p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="/banner-everyday.png"
        alt="Работаем каждый день"
        className="h-12 w-12 object-contain"
      />
      <p className="mt-3 text-base text-white">
        Работаем<br />каждый день
      </p>
    </div>

  </div>

  <p className="mt-5 px-5 text-center text-base leading-6 text-white">
    Опытные сантехники. Работаем аккуратно и ответственно.
    Предоставляем гарантию на выполненные работы.
  </p>

</section>


{/* ================= ПЕРВЫЙ ЭКРАН — КОМПЬЮТЕР ================= */}
<section
  className="relative hidden min-h-[535px] overflow-hidden bg-no-repeat md:block md:bg-[length:100%_auto] md:bg-[position:center_0]"
  style={{
    backgroundImage: "url('/master.jpg')",
    backgroundPosition: "center 0px",
  }}
>
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10 mx-auto flex min-h-[535px] max-w-7xl items-start px-6 pb-8 pt-8">
    <div className="max-w-5xl">

      <p className="font-bold text-yellow-400">
        Выезд сантехника по Алматы
      </p>

      <h1 className="mt-0 text-5xl font-black leading-tight text-white md:text-7xl">
        Сантехник в Алматы
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
        Установка и ремонт сантехники, устранение протечек,
        замена смесителей, унитазов и труб. Срочный выезд мастера по Алматы.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="tel:+77771696969"
          className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-yellow-300"
        >
          📞 Позвонить
        </a>

        <a
          href="https://wa.me/77771696969"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-green-600"
        >
          WhatsApp
        </a>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">
        {[
          ["/banner-everyday.png", "Работаем", "каждый день"],
          ["/banner-fast.png", "Быстрый", "выезд"],
          ["/banner-garantiya.png", "Гарантия", "до 3 лет"],
          ["/banner-master.png", "Опытные", "мастера"],
        ].map(([icon, line1, line2]) => (
          <div
            key={line1}
            className="flex flex-col items-center justify-center text-center md:border-r md:border-white/20 md:last:border-r-0"
          >
            <div className="mb-4 flex h-14 items-center justify-center">
              <img
                src={icon}
                alt=""
                className="h-12 w-12 object-contain"
              />
            </div>

            <p className="text-lg font-black text-white">
              {line1}
              <br />
              {line2}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* ================= УСЛУГИ ================= */}
      <section id="services" className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Услуги сантехника
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Выполняем любые сантехнические работы
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Устранение протечек",
              "Установка смесителя",
              "Установка унитаза",
              "Замена труб",
              "Монтаж водоснабжения",
              "Прочистка канализации",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
              >
                <h3 className="text-xl font-black">
                  {service}
                </h3>

                <p className="mt-3 text-slate-600">
                  Работаем аккуратно, согласовываем стоимость заранее
                  и предоставляем гарантию.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ЦЕНЫ ================= */}
      <section id="prices" className="bg-slate-50 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Цены на услуги
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Примерная стоимость работ
          </h2>
          <p className="mt-4 text-slate-600">
  Базовые цены не менялись с 2020 года. Несмотря на рост цен,
  мы сохраняем стоимость основных услуг на прежнем уровне.
</p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {[
              ["Вызов и диагностика", "от 5 000 ₸"],
              ["Установка смесителя", "от 12 000 ₸"],
              ["Установка унитаза", "от 15 000 ₸"],
              ["Установка раковины", "от 15 000 ₸"],
              ["Устранение протечки", "от 10 000 ₸"],
              ["Прочистка канализации кв", "от 15 000 ₸"],
              ["Прочистка в домов и офисов", "от 20 000 ₸"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-slate-200 px-6 py-5 transition hover:bg-yellow-50 hover:ring-0 hover:ring-inset hover:ring-yellow-400 last:border-0"
              >
                <span className="font-semibold">{name}</span>
                <span className="font-black text-yellow-500">{price}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ================= SEO — САНТЕХНИК АЛМАТЫ ================= */}
<section className="bg-white py-20 text-slate-900">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-4xl font-black">
      Сантехник в Алматы — вызов сантехника на дом
    </h2>

    <div className="mt-8 max-w-5xl space-y-6 text-lg leading-8 text-slate-700">

      <p>
  Нужен сантехник в Алматы? Наши мастера выполняют сантехнические
  работы в квартирах, частных домах, офисах и других помещениях.
  Можно вызвать сантехника для устранения протечки, ремонта
  сантехники,{" "}
  <a
    href="/ustanovka-smesitelya"
    className="font-semibold text-sky-700 hover:underline"
  >
    замены и установки смесителя
  </a>
  ,{" "}
  <a
    href="/ustanovka-unitaza"
    className="font-semibold text-sky-700 hover:underline"
  >
    установки унитаза
  </a>
  ,{" "}
  <a
    href="/ustanovka-rakoviny"
    className="font-semibold text-sky-700 hover:underline"
  >
    установки раковины
  </a>
  ,{" "}
<a
  href="/ustanovka-vanny"
  className="font-semibold text-sky-700 hover:underline"
>
  установки ванны
</a>
,{" "}
<a
  href="/ustanovka-dushevoy-kabiny"
  className="font-semibold text-sky-700 hover:underline"
>
  душевой кабины
</a>
,{" "}
<a
  href="/ustanovka-boylera"
  className="font-semibold text-sky-700 hover:underline"
>
  бойлера
</a>
,{" "}
  <a
    href="/zamena-trub"
    className="font-semibold text-sky-700 hover:underline"
  >
    замены труб
  </a>{" "}
  и решения других бытовых сантехнических задач.
</p>

      <p>
        Сантехнические неисправности бывают разными: от небольшого
        подкапывания крана до серьёзной протечки или засора канализации.
        В каждом случае важно сначала определить причину проблемы,
        подобрать подходящий способ ремонта и только после этого
        приступать к работе. Мастер осматривает сантехнику, объясняет,
        что необходимо сделать, и согласовывает стоимость работ.
      </p>

      <p>
        Вы можете обратиться к нам как для разового ремонта, так и для
        комплексных сантехнических работ. Выполняем замену старой
        сантехники, монтаж нового оборудования, ремонт водоснабжения
        и канализации, а также работы при ремонте квартиры, дома
        или коммерческого помещения.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Срочный вызов сантехника в Алматы
      </h3>

      <p>
        Протечка трубы, неисправный смеситель, засорившийся унитаз
        или внезапная поломка сантехнического оборудования могут
        потребовать быстрого вмешательства. Чем раньше будет найдена
        причина неисправности, тем меньше вероятность того, что небольшая
        проблема приведёт к более серьёзному ремонту.
      </p>

      <p>
        Если вам срочно нужен сантехник в Алматы, позвоните по указанному
        на сайте телефону или напишите нам в WhatsApp. Расскажите,
        что произошло, где появилась протечка или какое оборудование
        перестало работать. Это поможет заранее понять характер
        неисправности и подготовиться к выезду.
      </p>

      <p>
        Мастер приезжает по согласованному адресу, проводит осмотр
        и определяет причину неисправности. Перед началом ремонта
        согласовывается объём необходимых работ и их стоимость.
        После выполнения мастер проверяет работу сантехники и системы
        на исправность.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Ремонт сантехники в квартире и частном доме
      </h3>

      <p>
        Ремонт сантехники может потребоваться как в старой квартире,
        где коммуникации эксплуатируются много лет, так и в новом доме.
        Причиной обращения может стать протечка соединения, неисправность
        крана, слабый напор воды, повреждение трубы, неправильная работа
        сливного механизма или необходимость заменить изношенное
        сантехническое оборудование.
      </p>

      <p>
        Выполняем ремонт и замену сантехнических узлов, устраняем
        протечки, меняем гибкие подводки, сифоны, краны, смесители
        и другие элементы системы. Если ремонт старого оборудования
        уже нецелесообразен, мастер может объяснить, какой вариант
        замены лучше подойдёт для конкретной ситуации.
      </p>

      <p>
        При выполнении сантехнических работ важно не только устранить
        видимую неисправность, но и проверить соединения после ремонта.
        Поэтому после завершения работ мастер проверяет установленное
        или отремонтированное оборудование.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Монтаж и установка сантехники
      </h3>

      <p>
        Помимо ремонта, выполняем установку новой сантехники.
        Можно вызвать мастера для установки унитаза, раковины,
        смесителя, ванны, душевой кабины, бойлера и другого
        сантехнического оборудования. Такие работы могут понадобиться
        после покупки новой сантехники, во время ремонта помещения
        или при замене старого оборудования.
      </p>

      <p>
        При монтаже учитывается расположение водопроводных и
        канализационных коммуникаций, состояние существующих подключений
        и особенности устанавливаемого оборудования. После установки
        проверяются подключения, подача воды и слив.
      </p>

      <p>
        Если требуется несколько работ одновременно, можно заранее
        сообщить об этом при оформлении заявки. Например, мастер может
        установить раковину и смеситель, заменить сифон, подключить
        сантехническое оборудование и проверить соединения за один выезд.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Замена и монтаж труб в Алматы
      </h3>

      <p>
        Старые или повреждённые трубы могут стать причиной протечек,
        снижения давления воды и других проблем. Выполняем замену
        отдельных участков труб, ремонт соединений и сантехнические
        работы с системами водоснабжения.
      </p>

      <p>
        При ремонте квартиры или частного дома также может потребоваться
        изменение расположения сантехнических точек или подготовка
        коммуникаций под новое оборудование. Объём таких работ зависит
        от существующей системы, планировки помещения и поставленной
        задачи.
      </p>

      <p>
        Перед монтажом мастер осматривает существующие коммуникации
        и определяет необходимый объём работ. Это позволяет заранее
        обсудить возможные варианты и подобрать решение для конкретного
        помещения.
      </p>

     <h3 className="pt-4 text-2xl font-black text-sky-700">
  <a
    href="/prochistka-kanalizacii"
    className="hover:underline"
  >
    Прочистка канализации и устранение засоров
  </a>
</h3>

      <p>
        Если вода медленно уходит из раковины, ванны или душевой,
        появился неприятный запах либо канализация перестала нормально
        работать, причиной может быть засор. В зависимости от места
        и сложности засора подбирается подходящий способ прочистки.
      </p>

      <p>
        Выполняем прочистку канализации в квартирах, частных домах
        и коммерческих помещениях. Работа может включать устранение
        засоров в раковинах, унитазах, трубах и других участках
        канализационной системы.
      </p>

      <p>
        После устранения засора проверяется прохождение воды.
        Если проблема связана не только с засором, а с состоянием
        труб или неправильной работой системы, мастер сообщит об этом
        и предложит возможный вариант решения.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Услуги сантехника на дом в Алматы
      </h3>

      <p>
        Вызов сантехника на дом удобен тем, что мастер приезжает
        непосредственно на объект со своим рабочим инструментом.
        Вам не требуется самостоятельно разбираться в причине
        неисправности или демонтировать сантехнику перед приездом
        специалиста.
      </p>

      <p>
        Работаем с сантехническими задачами в квартирах, частных домах,
        офисах и других помещениях. Можно обратиться как с небольшой
        неисправностью, так и с более объёмной задачей, связанной
        с ремонтом или установкой нескольких сантехнических приборов.
      </p>

      <p>
        При оформлении вызова желательно кратко описать проблему.
        Если известна модель оборудования или есть возможность
        рассказать, где именно появилась неисправность, эта информация
        поможет лучше подготовиться к выполнению работы.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Сантехник для квартиры, дома и офиса
      </h3>

      <p>
        Сантехнические работы требуются не только в квартирах.
        Обслуживаем частные дома, офисы и другие помещения в Алматы.
        В зависимости от объекта задачи могут отличаться: где-то
        требуется заменить обычный смеситель, а где-то необходимо
        выполнить несколько сантехнических работ одновременно.
      </p>

      <p>
        При ремонте помещений можно заранее согласовать последовательность
        сантехнических работ: демонтаж старого оборудования, подготовку
        коммуникаций, установку новой сантехники и последующую проверку
        подключений.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Цены на услуги сантехника в Алматы
      </h3>

      <p>
        Стоимость услуг сантехника зависит от вида и сложности работы.
        Простая замена смесителя и комплексный монтаж сантехнического
        оборудования требуют разного количества времени, материалов
        и подготовительных работ, поэтому окончательная стоимость
        определяется с учётом конкретной задачи.
      </p>

      <p>
        На цену могут влиять состояние существующей сантехники
        и коммуникаций, сложность доступа к месту ремонта, необходимость
        демонтажа старого оборудования, объём монтажных работ
        и используемые материалы.
      </p>

      <p>
        Предварительную стоимость можно уточнить при обращении.
        Перед началом выполнения работ мастер осматривает оборудование,
        определяет необходимый объём ремонта или монтажа и согласовывает
        стоимость. Это позволяет заранее понимать, какие работы
        будут выполняться.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Выезд сантехника по районам Алматы
      </h3>

      <p>
        Выезжаем на сантехнические работы по Алматы. Обслуживаем
        Алатауский, Алмалинский, Ауэзовский, Бостандыкский,
        Жетысуский, Медеуский, Наурызбайский и Турксибский районы.
      </p>

      <p>
        Поэтому вызвать сантехника можно независимо от того,
        в какой части города находится квартира, дом или офис.
        При обращении сообщите район и адрес, после чего можно
        согласовать время приезда мастера.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Почему важно обращаться к опытному сантехнику
      </h3>

      <p>
        Даже небольшая сантехническая работа требует аккуратного
        выполнения. Неправильно установленное соединение может
        впоследствии начать протекать, а ошибки при подключении
        оборудования способны привести к дополнительным расходам
        на ремонт.
      </p>

      <p>
        Опытный сантехник сначала оценивает состояние системы,
        определяет причину неисправности и только после этого
        выполняет необходимую работу. Такой подход особенно важен,
        когда проблема связана не с одним сантехническим прибором,
        а с трубами, водоснабжением или канализацией.
      </p>

      <p>
        На выполненные работы предоставляется гарантия. После завершения
        ремонта или установки мастер проверяет результат и при
        необходимости объясняет особенности дальнейшей эксплуатации
        оборудования.
      </p>

      <h3 className="pt-4 text-2xl font-black text-sky-700">
        Как вызвать сантехника в Алматы
      </h3>

      <p>
        Чтобы вызвать сантехника, позвоните по телефону, указанному
        на сайте, или напишите нам в WhatsApp. Опишите проблему:
        что произошло, какое сантехническое оборудование требует
        ремонта или что необходимо установить.
      </p>

      <p>
        После этого согласуем удобное время выезда. Мастер осмотрит
        сантехнику на месте, определит необходимые работы и согласует
        стоимость перед их выполнением.
      </p>

      <p>
        Если вам нужен сантехник в Алматы для ремонта, установки
        сантехники, устранения протечки, замены труб или решения
        другой сантехнической задачи — свяжитесь с нами удобным
        способом.
      </p>

    </div>

  </div>
</section>

      {/* ================= ПОЧЕМУ МЫ ================= */}
      <section id="about" className="bg-sky-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-400">
            Почему выбирают нас
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Надёжный сантехнический сервис в Алматы
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["15+ лет опыта", "Большой опыт сантехнических работ."],
              ["Выезд 30–45 минут", "Быстро выезжаем по Алматы."],
              ["Гарантия до 3 лет", "Гарантия на выполненные работы."],
              ["Свои мастера", "Работаем своей командой."],
              ["Цена заранее", "Согласовываем стоимость до начала."],
              ["Без выходных", "Принимаем заявки каждый день."],
            ].map(([title, text]) => (
              <div
                key={title}
               className="rounded-3xl border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/10 hover:shadow-xl"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-yellow-400" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= КАК РАБОТАЕМ ================= */}
      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Как мы работаем
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Всё просто — от заявки до гарантии
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Заявка", "Позвоните или напишите нам в WhatsApp."],
              ["02", "Уточняем проблему", "Согласовываем время и стоимость."],
              ["03", "Выезд мастера", "Мастер приезжает по Алматы."],
              ["04", "Работа и гарантия", "Выполняем работу и даём гарантию."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black">
                  {number}
                </div>

                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= НАШИ РАБОТЫ ================= */}
      <section id="works" className="bg-sky-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-400">
            Наши работы
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Примеры выполненных работ
          </h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            Реальные примеры сантехнических работ в Алматы.
          </p>

        </div>
      </section>

      {/* ================= ОТЗЫВЫ ================= */}
      <section id="reviews" className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Отзывы клиентов
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Что говорят о нашей работе
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Айдар", "Мастер приехал быстро и устранил протечку."],
              ["Динара", "Установили смеситель и раковину аккуратно."],
              ["Марат", "Приехали вовремя и качественно заменили трубы."],
              ["Алия", "Быстро и аккуратно установили унитаз."],
              ["Руслан", "Хороший сервис и вежливый мастер."],
              ["Сауле", "Прочистили канализацию в тот же день."],
            ].map(([name, text]) => (
              <div
                key={name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-xl"
              >
                <div className="text-xl text-yellow-400">
                  ★★★★★
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  “{text}”
                </p>

                <p className="mt-5 font-black">{name}</p>
                <p className="text-sm text-slate-500">Алматы</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
<section id="faq" className="bg-white py-16 text-slate-950">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-center text-3xl font-black md:text-4xl">
      Часто задаваемые вопросы
    </h2>

    <div className="mt-10 space-y-4">

      {[
        [
          "Сколько стоит вызов сантехника в Алматы?",
          "Стоимость зависит от вида и сложности работы. Предварительную цену можно уточнить при обращении, а окончательная стоимость согласовывается после осмотра и до начала работ.",
        ],
        [
          "Можно ли вызвать сантехника на дом в Алматы?",
          "Да. Мастер выезжает в квартиры, частные дома, офисы и другие помещения по Алматы. При обращении сообщите адрес и кратко опишите проблему.",
        ],
        [
          "Какие сантехнические работы вы выполняете?",
          "Выполняем ремонт и установку сантехники, устраняем протечки, устанавливаем смесители, унитазы, раковины, ванны, душевые кабины и бойлеры, меняем трубы и выполняем другие сантехнические работы.",
        ],
        [
          "Можно ли вызвать сантехника срочно?",
          "Да. При протечке, засоре или другой срочной неисправности можно обратиться для вызова мастера. Время приезда согласовывается при оформлении заявки.",
        ],
        [
          "Как быстро может приехать сантехник?",
          "Время приезда зависит от района Алматы, загруженности мастеров и сложности заявки. При обращении мы уточним адрес и согласуем подходящее время выезда.",
        ],
        [
          "В каких районах Алматы работает сантехник?",
          "Выезжаем в Алатауский, Алмалинский, Ауэзовский, Бостандыкский, Жетысуский, Медеуский, Наурызбайский и Турксибский районы Алматы.",
        ],
        [
          "Можно ли вызвать сантехника для устранения протечки?",
          "Да. Мастер определит причину протечки и выполнит необходимый ремонт или замену неисправного сантехнического элемента.",
        ],
        [
          "Выполняете ли вы установку новой сантехники?",
          "Да. Устанавливаем унитазы, смесители, раковины, ванны, душевые кабины, бойлеры и другое сантехническое оборудование.",
        ],
        [
          "Выполняете ли вы прочистку канализации?",
          "Да. Выполняем устранение засоров и прочистку канализации в квартирах, частных домах, офисах и других помещениях.",
        ],
        [
          "Можно ли заменить старые трубы?",
          "Да. Выполняем замену труб и отдельных участков водопровода. Объём работ и стоимость определяются после оценки существующих коммуникаций.",
        ],
        [
          "Работаете ли вы с частными домами и офисами?",
          "Да. Сантехнические работы выполняются в квартирах, частных домах, офисах и других помещениях по Алматы.",
        ],
        [
          "Согласовывается ли цена до начала работы?",
          "Да. После осмотра мастер определяет необходимый объём работ и согласовывает стоимость до их выполнения.",
        ],
        [
          "Даёте ли вы гарантию на сантехнические работы?",
          "Да. На выполненные сантехнические работы предоставляется гарантия.",
        ],
        [
          "Работаете ли вы в выходные?",
          "Да. Заявки принимаются каждый день без выходных.",
        ],
      ].map(([question, answer]) => (
        <details
          key={question}
          className="group overflow-hidden rounded-2xl border border-transparent bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-7">
            <span className="text-xl font-black text-slate-950">
              {question}
            </span>

            <span className="ml-5 text-3xl font-light text-blue-600 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-7 pb-7">
            <p className="text-lg leading-7 text-slate-600">
              {answer}
            </p>
          </div>
        </details>
      ))}

    </div>

  </div>
</section>

      {/* ================= РАЙОНЫ ================= */}
      <section className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Выезд по городу
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Сантехник во всех районах Алматы
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Выезжаем на сантехнические работы по всему Алматы.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Алатауский район",
              "Алмалинский район",
              "Ауэзовский район",
              "Бостандыкский район",
              "Жетысуский район",
              "Медеуский район",
              "Наурызбайский район",
              "Турксибский район",
            ].map((district) => (
              <div
                key={district}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
              >
                📍 {district}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= КОНТАКТЫ ================= */}
      <section id="contacts" className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-yellow-500">
            Контакты
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Свяжитесь с нами
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">

            <div className="space-y-6">

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm text-slate-500">Телефон</p>
                <a
                  href="tel:+77771696969"
                  className="mt-2 block text-2xl font-black"
                >
                  +7 777 169 69 69
                </a>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm text-slate-500">WhatsApp</p>
                <a
                  href="https://wa.me/77771696969"
                  className="mt-2 block text-2xl font-black text-green-600"
                >
                  Написать в WhatsApp
                </a>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm text-slate-500">Режим работы</p>
                <p className="mt-2 text-xl font-bold">
                  Каждый день · Без выходных
                </p>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm text-slate-500">Обслуживаем</p>
                <p className="mt-2 text-xl font-bold">
                  Весь Алматы и пригород
                </p>
              </div>

            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Алматы&output=embed"
                className="h-[520px] w-full border-0"
                loading="lazy"
                title="Карта Алматы"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= СРОЧНЫЙ ВЫЗОВ ================= */}
      <section className="bg-sky-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl border border-yellow-400/20 bg-slate-900 p-10">

            <p className="font-bold text-yellow-400">
              Срочный вызов мастера
            </p>

            <div className="mt-3 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div>
                <h2 className="text-4xl font-black md:text-5xl">
                  Нужен сантехник прямо сейчас?
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Позвоните или напишите в WhatsApp. Уточним проблему
                  и согласуем время выезда мастера.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+77771696969"
                  className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black text-slate-950"
                >
                  📞 Позвонить
                </a>

                <a
                  href="https://wa.me/77771696969"
                  className="rounded-2xl bg-green-500 px-8 py-4 text-lg font-black text-white"
                >
                  WhatsApp
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

     <Footer />
    </main>
  );
}