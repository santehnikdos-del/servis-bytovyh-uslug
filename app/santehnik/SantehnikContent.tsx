import Image, { getImageProps } from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

type SantehnikContentProps = {
  district?: string;
};

const heroChecks = [
  "Быстрый выезд",
  "Гарантия до 3 лет",
  "Работаем каждый день",
];

const problems = [
  { icon: "/leak.png", text: "Протекли трубы и есть риск затопить соседей" },
  { icon: "/drain.png", text: "Из слива появился неприятный запах" },
  {
    icon: "/heating.png",
    text: "Батареи или отопительная система работают плохо",
  },
  { icon: "/tap.png", text: "Кран постоянно капает" },
  {
    icon: "/repair.png",
    text: "Сантехника сломалась, а причину трудно определить",
  },
  {
    icon: "/tools.png",
    text: "Ремонт в квартире, но нарвались на недобросовестного специалиста и приходится переделывать его работу",
  },
];

const serviceCards = [
  {
    title: "Устранение протечек",
    text: "Устраняем течи труб, кранов, сифонов и соединений.",
    href: "/ustranenie-protechek",
  },
  {
    title: "Устранение засоров",
    text: "Прочищаем раковины, ванны, унитазы и канализационные трубы.",
    href: "/prochistka-kanalizacii",
  },
  {
    title: "Ремонт и установка сантехники",
    text: "Устанавливаем и ремонтируем смесители, унитазы, раковины и другое оборудование.",
    href: "/ustanovka-santehniki",
  },
  {
    title: "Монтаж и ремонт отопления",
    text: "Устанавливаем радиаторы, меняем трубы и устраняем неисправности отопления.",
    href: "/ustanovka-radiatorov-otopleniya",
  },
  {
    title: "Замена стояков",
    text: "Меняем стояки холодной и горячей воды, канализации.",
    href: "/zamena-stoyakov",
  },
  {
    title: "Монтаж водопровода и канализации",
    text: "Прокладываем и заменяем трубы в квартирах и частных домах.",
    href: "/razvodka-trub",
  },
];

const prices = [
  ["Вызов и диагностика", "от 5 000 ₸"],
  ["Установка смесителя", "от 12 000 ₸"],
  ["Установка унитаза", "от 15 000 ₸"],
  ["Установка раковины", "от 15 000 ₸"],
  ["Устранение протечки", "от 10 000 ₸"],
  ["Прочистка канализации в квартире", "от 15 000 ₸"],
  ["Прочистка канализации в доме или офисе", "от 20 000 ₸"],
];

const benefits = [
  ["10+ лет опыта", "Большой опыт сантехнических работ."],
  ["Выезд 30–45 минут", "Быстро выезжаем по Алматы."],
  ["Гарантия до 3 лет", "Гарантия на выполненные работы."],
  ["Свои мастера", "Работаем своей командой."],
  ["Цена заранее", "Согласовываем стоимость до начала."],
  ["Без выходных", "Принимаем заявки каждый день."],
];

const steps = [
  ["01", "Заявка", "Позвоните или напишите нам в WhatsApp."],
  ["02", "Уточняем проблему", "Согласовываем время и стоимость."],
  ["03", "Выезд мастера", "Мастер приезжает по Алматы."],
  ["04", "Работа и гарантия", "Выполняем работу и даём гарантию."],
];

const reviews = [
  ["Айдар", "Мастер приехал быстро и устранил протечку."],
  ["Динара", "Установили смеситель и раковину аккуратно."],
  ["Марат", "Приехали вовремя и качественно заменили трубы."],
  ["Алия", "Быстро и аккуратно установили унитаз."],
  ["Руслан", "Хороший сервис и вежливый мастер."],
  ["Сауле", "Прочистили канализацию в тот же день."],
];

const faqs = [
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
];

const districtLinks = [
  ["alatauskiy-rayon", "Алатауский район"],
  ["almalinskiy-rayon", "Алмалинский район"],
  ["auezovskiy-rayon", "Ауэзовский район"],
  ["bostandykskiy-rayon", "Бостандыкский район"],
  ["zhetysuskiy-rayon", "Жетысуский район"],
  ["medeuskiy-rayon", "Медеуский район"],
  ["nauryzbayskiy-rayon", "Наурызбайский район"],
  ["turksibskiy-rayon", "Турксибский район"],
];

const seoIntro = [
  "Сантехнические неисправности бывают разными: от небольшого подкапывания крана до серьёзной протечки или засора канализации. В каждом случае важно сначала определить причину проблемы, подобрать подходящий способ ремонта и только после этого приступать к работе. Мастер осматривает сантехнику, объясняет, что необходимо сделать, и согласовывает стоимость работ.",
  "Вы можете обратиться к нам как для разового ремонта, так и для комплексных сантехнических работ. Выполняем замену старой сантехники, монтаж нового оборудования, ремонт водоснабжения и канализации, а также работы при ремонте квартиры, дома или коммерческого помещения.",
];

const seoSections: {
  title: string;
  href?: string;
  paragraphs: string[];
}[] = [
  {
    title: "Срочный вызов сантехника в Алматы",
    paragraphs: [
      "Протечка трубы, неисправный смеситель, засорившийся унитаз или внезапная поломка сантехнического оборудования могут потребовать быстрого вмешательства. Чем раньше будет найдена причина неисправности, тем меньше вероятность того, что небольшая проблема приведёт к более серьёзному ремонту.",
      "Если вам срочно нужен сантехник в Алматы, позвоните по указанному на сайте телефону или напишите нам в WhatsApp. Расскажите, что произошло, где появилась протечка или какое оборудование перестало работать. Это поможет заранее понять характер неисправности и подготовиться к выезду.",
      "Мастер приезжает по согласованному адресу, проводит осмотр и определяет причину неисправности. Перед началом ремонта согласовывается объём необходимых работ и их стоимость. После выполнения мастер проверяет работу сантехники и системы на исправность.",
    ],
  },
  {
    title: "Ремонт сантехники в квартире и частном доме",
    paragraphs: [
      "Ремонт сантехники может потребоваться как в старой квартире, где коммуникации эксплуатируются много лет, так и в новом доме. Причиной обращения может стать протечка соединения, неисправность крана, слабый напор воды, повреждение трубы, неправильная работа сливного механизма или необходимость заменить изношенное сантехническое оборудование.",
      "Выполняем ремонт и замену сантехнических узлов, устраняем протечки, меняем гибкие подводки, сифоны, краны, смесители и другие элементы системы. Если ремонт старого оборудования уже нецелесообразен, мастер может объяснить, какой вариант замены лучше подойдёт для конкретной ситуации.",
      "При выполнении сантехнических работ важно не только устранить видимую неисправность, но и проверить соединения после ремонта. Поэтому после завершения работ мастер проверяет установленное или отремонтированное оборудование.",
    ],
  },
  {
    title: "Монтаж и установка сантехники",
    paragraphs: [
      "Помимо ремонта, выполняем установку новой сантехники. Можно вызвать мастера для установки унитаза, раковины, смесителя, ванны, душевой кабины, бойлера и другого сантехнического оборудования. Такие работы могут понадобиться после покупки новой сантехники, во время ремонта помещения или при замене старого оборудования.",
      "При монтаже учитывается расположение водопроводных и канализационных коммуникаций, состояние существующих подключений и особенности устанавливаемого оборудования. После установки проверяются подключения, подача воды и слив.",
      "Если требуется несколько работ одновременно, можно заранее сообщить об этом при оформлении заявки. Например, мастер может установить раковину и смеситель, заменить сифон, подключить сантехническое оборудование и проверить соединения за один выезд.",
    ],
  },
  {
    title: "Замена и монтаж труб в Алматы",
    paragraphs: [
      "Старые или повреждённые трубы могут стать причиной протечек, снижения давления воды и других проблем. Выполняем замену отдельных участков труб, ремонт соединений и сантехнические работы с системами водоснабжения.",
      "При ремонте квартиры или частного дома также может потребоваться изменение расположения сантехнических точек или подготовка коммуникаций под новое оборудование. Объём таких работ зависит от существующей системы, планировки помещения и поставленной задачи.",
      "Перед монтажом мастер осматривает существующие коммуникации и определяет необходимый объём работ. Это позволяет заранее обсудить возможные варианты и подобрать решение для конкретного помещения.",
    ],
  },
  {
    title: "Прочистка канализации и устранение засоров",
    href: "/prochistka-kanalizacii",
    paragraphs: [
      "Если вода медленно уходит из раковины, ванны или душевой, появился неприятный запах либо канализация перестала нормально работать, причиной может быть засор. В зависимости от места и сложности засора подбирается подходящий способ прочистки.",
      "Выполняем прочистку канализации в квартирах, частных домах и коммерческих помещениях. Работа может включать устранение засоров в раковинах, унитазах, трубах и других участках канализационной системы.",
      "После устранения засора проверяется прохождение воды. Если проблема связана не только с засором, а с состоянием труб или неправильной работой системы, мастер сообщит об этом и предложит возможный вариант решения.",
    ],
  },
  {
    title: "Услуги сантехника на дом в Алматы",
    paragraphs: [
      "Вызов сантехника на дом удобен тем, что мастер приезжает непосредственно на объект со своим рабочим инструментом. Вам не требуется самостоятельно разбираться в причине неисправности или демонтировать сантехнику перед приездом специалиста.",
      "Работаем с сантехническими задачами в квартирах, частных домах, офисах и других помещениях. Можно обратиться как с небольшой неисправностью, так и с более объёмной задачей, связанной с ремонтом или установкой нескольких сантехнических приборов.",
      "При оформлении вызова желательно кратко описать проблему. Если известна модель оборудования или есть возможность рассказать, где именно появилась неисправность, эта информация поможет лучше подготовиться к выполнению работы.",
    ],
  },
  {
    title: "Сантехник для квартиры, дома и офиса",
    paragraphs: [
      "Сантехнические работы требуются не только в квартирах. Обслуживаем частные дома, офисы и другие помещения в Алматы. В зависимости от объекта задачи могут отличаться: где-то требуется заменить обычный смеситель, а где-то необходимо выполнить несколько сантехнических работ одновременно.",
      "При ремонте помещений можно заранее согласовать последовательность сантехнических работ: демонтаж старого оборудования, подготовку коммуникаций, установку новой сантехники и последующую проверку подключений.",
    ],
  },
  {
    title: "Цены на услуги сантехника в Алматы",
    paragraphs: [
      "Стоимость услуг сантехника зависит от вида и сложности работы. Простая замена смесителя и комплексный монтаж сантехнического оборудования требуют разного количества времени, материалов и подготовительных работ, поэтому окончательная стоимость определяется с учётом конкретной задачи.",
      "На цену могут влиять состояние существующей сантехники и коммуникаций, сложность доступа к месту ремонта, необходимость демонтажа старого оборудования, объём монтажных работ и используемые материалы.",
      "Предварительную стоимость можно уточнить при обращении. Перед началом выполнения работ мастер осматривает оборудование, определяет необходимый объём ремонта или монтажа и согласовывает стоимость. Это позволяет заранее понимать, какие работы будут выполняться.",
    ],
  },
  {
    title: "Выезд сантехника по районам Алматы",
    paragraphs: [
      "Выезжаем на сантехнические работы по Алматы. Обслуживаем Алатауский, Алмалинский, Ауэзовский, Бостандыкский, Жетысуский, Медеуский, Наурызбайский и Турксибский районы.",
      "Поэтому вызвать сантехника можно независимо от того, в какой части города находится квартира, дом или офис. При обращении сообщите район и адрес, после чего можно согласовать время приезда мастера.",
    ],
  },
  {
    title: "Почему важно обращаться к опытному сантехнику",
    paragraphs: [
      "Даже небольшая сантехническая работа требует аккуратного выполнения. Неправильно установленное соединение может впоследствии начать протекать, а ошибки при подключении оборудования способны привести к дополнительным расходам на ремонт.",
      "Опытный сантехник сначала оценивает состояние системы, определяет причину неисправности и только после этого выполняет необходимую работу. Такой подход особенно важен, когда проблема связана не с одним сантехническим прибором, а с трубами, водоснабжением или канализацией.",
      "На выполненные работы предоставляется гарантия. После завершения ремонта или установки мастер проверяет результат и при необходимости объясняет особенности дальнейшей эксплуатации оборудования.",
    ],
  },
  {
    title: "Как вызвать сантехника в Алматы",
    paragraphs: [
      "Чтобы вызвать сантехника, позвоните по телефону, указанному на сайте, или напишите нам в WhatsApp. Опишите проблему: что произошло, какое сантехническое оборудование требует ремонта или что необходимо установить.",
      "После этого согласуем удобное время выезда. Мастер осмотрит сантехнику на месте, определит необходимые работы и согласует стоимость перед их выполнением.",
      "Если вам нужен сантехник в Алматы для ремонта, установки сантехники, устранения протечки, замены труб или решения другой сантехнической задачи — свяжитесь с нами удобным способом.",
    ],
  },
];

/* ОПТИМИЗИРОВАННЫЕ СИНИЕ ЗНАЧКИ */
function PlumbingIcon({ src }: { src: string }) {
  const { props } = getImageProps({
    src,
    alt: "",
    width: 60,
    height: 60,
  });

  return (
    <span
      aria-hidden="true"
      className="block h-15 w-15 bg-[#0092B8]"
      style={{
        WebkitMask: `url("${props.src}") center / contain no-repeat`,
        mask: `url("${props.src}") center / contain no-repeat`,
      }}
    />
  );
}

export default function SantehnikContent({
  district,
}: SantehnikContentProps) {
  return (
    <main className="min-h-screen bg-neutral-800 pb-20 text-white md:pb-0">
      <Header />

      {/* ПЕРВЫЙ ЭКРАН — ОДНА СЕКЦИЯ ДЛЯ ТЕЛЕФОНА И КОМПЬЮТЕРА */}
      <section className="relative overflow-hidden bg-[#333333] px-6 py-8 text-white md:h-[490px] md:bg-[#281E12] md:px-0 md:py-0">
        {/* ТЕЛЕФОН: ВОДЯНОЙ ЗНАК */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-10 md:hidden"
        >
          <Image
            src="/hero-mark.png"
            alt=""
            fill
            sizes="85vw"
            className="object-contain p-[7.5%]"
          />
        </div>

        {/* КОМПЬЮТЕР: ФОТО СПРАВА */}
        <div className="absolute inset-y-0 right-0 hidden w-[53%] md:block">
          <Image
            src="/banner-master.jpg"
            alt="Сантехник в Алматы"
            fill
            sizes="(min-width: 768px) 53vw, 1px"
            className="object-cover object-[60%_center]"
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

        <div className="relative z-10 md:mx-auto md:flex md:h-full md:max-w-7xl md:items-center md:px-6">
          <div className="md:relative md:w-[47%]">
            {/* ЕДИНСТВЕННЫЙ H1 */}
            <h1
              className={`text-center font-bold uppercase text-white md:relative md:-top-7 md:text-left ${
                district
                  ? "text-3xl leading-tight md:leading-[1.1] lg:text-[42px]"
                  : "text-3xl leading-tight md:text-5xl md:leading-[1.05] lg:text-[64px]"
              }`}
            >
              Сантехник{" "}
              <span className="md:block md:text-[#FDC700]">
                {district ? `в ${district} районе Алматы` : "Алматы"}
              </span>
            </h1>

            {/* ТОЛЬКО ТЕЛЕФОН */}
            <div className="md:hidden">
              <div className="mx-auto mt-6 flex w-fit max-w-full items-center justify-center gap-4">
                <ul className="flex flex-col gap-3 text-left">
                  {heroChecks.map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                  ))}
                </ul>
              </div>

              <p className="mt-7 text-center text-lg leading-7">
                Вызов сантехника на дом. Ремонт, установка, прочистка
                сантехники и устранение протечек.
              </p>

              <a
                href="tel:+77771696969"
                className="call-button-shine mx-auto mt-10 flex max-w-sm items-center justify-center rounded-full bg-[#0092B8]/40 px-6 py-4 text-lg font-normal text-white"
              >
                Вызвать мастера
              </a>
            </div>

            {/* ТОЛЬКО КОМПЬЮТЕР */}
            <div className="hidden md:block">
              <p className="mt-4 text-lg leading-7 text-white/85">
                <span className="block whitespace-nowrap">
                  Установка и ремонт сантехники в Алматы.
                </span>
                <span className="block whitespace-nowrap">
                  Устранение протечек и прочистка канализации.
                </span>
              </p>

              <div className="mt-8 flex gap-3">
                <a
                  href="tel:+77771696969"
                  className="call-button-shine inline-flex h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-[#0092B8]/80 px-6 text-xl font-normal text-white transition hover:bg-[#007D9E]"
                >
                  Вызвать мастера
                </a>

                <div className="relative shrink-0">
                  <a
                    href="https://wa.me/77771696969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-white px-6 text-xl font-normal text-[#292929] transition hover:bg-gray-100"
                  >
                    Написать в WhatsApp
                  </a>

                  {/* КОЛЬЦО И БИРКА */}
                  <div className="pointer-events-none absolute left-[calc(100%-6px)] top-1/2 z-20 h-0 w-0">
                    <div className="santehnik-discount-hanging absolute left-0 top-0">
                      <img
                        src="/discount-15.png"
                        alt="Скидка 15% на все услуги"
                        loading="lazy"
                        decoding="async"
                        className="absolute left-0 top-[-47px] h-auto w-[180px] max-w-none drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]"
                      />

                      <svg
                        width="30"
                        height="20"
                        viewBox="0 0 30 20"
                        aria-hidden="true"
                        className="absolute -left-[9px] -top-[10px] z-10"
                      >
                        <ellipse
                          cx="15"
                          cy="10"
                          rx="12"
                          ry="7"
                          fill="none"
                          stroke="#64748B"
                          strokeWidth="4"
                        />
                        <ellipse
                          cx="15"
                          cy="9"
                          rx="12"
                          ry="7"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-10 flex w-max items-center gap-5 text-base">
                {heroChecks.map((text) => (
                  <li
                    key={text}
                    className="flex shrink-0 items-center gap-2 whitespace-nowrap"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="santehnik-check-icon h-7 w-7 shrink-0"
                    >
                      <path
                        fill="#0092B8"
                        d="M12 1 15 3 19 3 20 7 23 10 21 14 21 18 17 20 14 23 10 21 6 21 4 17 1 14 3 10 3 6 7 4Z"
                      />
                      <path
                        className="santehnik-check-line"
                        pathLength="1"
                        d="m7 12 3 3 7-7"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОБЛЕМЫ С САНТЕХНИКОЙ */}
      <section className="bg-white px-5 py-12 text-[#171717] md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            Столкнулись с проблемой
            <br />
            в сантехнике?
          </h2>

          <div className="mt-8 space-y-3">
            {problems.map(({ icon, text }) => (
              <div
                key={text}
                className="grid grid-cols-[44px_1fr] items-center gap-7"
              >
                <PlumbingIcon src={icon} />

                <p className="text-[17px] leading-snug md:text-xl">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОМОЩЬ */}
      <section
        className="relative -mt-px bg-white px-5 pt-6 pb-12 text-[#171717]"
        style={{ border: 0 }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mt-3 text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            Поможем решить вашу задачу
          </h2>

          <p className="mt-6 text-center text-base leading-relaxed text-slate-700 md:text-lg">
            Свой штат квалифицированных работников. Высокий уровень
            сервиса. Более 10 лет опыта и более 1000 клиентов. Наши
            мастера выполняют сантехнические работы аккуратно, от
            замены смесителя до сложного ремонта.
          </p>

          <p className="mt-3 text-center text-sm leading-relaxed text-slate-600 md:text-base">
            Стоимость согласуем заранее. Принимаем наличную и
            безналичную оплату, предоставляем документы.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link
              href="/nashi-raboty"
              className="rounded-full bg-[#0092B8] px-6 py-4 text-center font-bold text-white"
            >
              <span
                aria-hidden="true"
                className="services-arrow mr-3 inline-block"
              >
                →
              </span>
              Посмотреть работы
            </Link>

            <Link
              href="/otzyvy"
              className="rounded-full bg-[#FDC700] px-6 py-4 text-center font-bold text-[#171717]"
            >
              <span
                aria-hidden="true"
                className="services-arrow mr-3 inline-block"
              >
                →
              </span>
              Читать отзывы
            </Link>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section
        id="services"
        className="relative z-10 -mt-px border-0 bg-white pt-8 pb-20 text-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
              Какая помощь вам нужна?
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <p className="inline-flex items-center gap-3 text-xl font-bold text-[#0092B8]">
                <Link
                  href="/uslugi-santehnika"
                  className="hover:underline"
                >
                  Услуги сантехника
                </Link>

                <span
                  aria-hidden="true"
                  className="services-arrow inline-block"
                >
                  →
                </span>
              </p>

              <Link
                href="/uslugi-santehnika"
                className="inline-flex items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg font-normal text-[#171717] transition hover:bg-[#eab800]"
              >
                Подробнее
              </Link>
            </div>
          </div>

          <div
            id="service-list"
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCards.map(({ title, text, href }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
              >
                <h3 className="text-xl font-black text-[#0092B8]">
                  {title}
                </h3>

                <p className="mt-3 text-slate-600">{text}</p>

                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-3 font-semibold text-[#0092B8] hover:underline"
                >
                  <span
                    aria-hidden="true"
                    className="services-arrow inline-block"
                  >
                    →
                  </span>
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНЫ */}
      <section
        id="prices"
        className="bg-slate-50 py-20 text-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold leading-tight text-[#0092B8] md:text-[54px]">
            Примерная стоимость работ
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <p className="inline-flex items-center gap-3 text-xl font-bold text-[#0092B8]">
              Цены на услуги
              <span
                aria-hidden="true"
                className="services-arrow inline-block"
              >
                →
              </span>
            </p>

            <Link
              href="/price"
              className="inline-flex items-center justify-center rounded-full bg-[#FDC700] px-8 py-4 text-lg font-normal text-[#171717] transition hover:bg-[#eab800]"
            >
              Подробнее
            </Link>
          </div>

          <p className="mt-4 text-slate-600">
            Базовые цены не менялись с 2020 года. Несмотря на рост цен,
            мы сохраняем стоимость основных услуг на прежнем уровне.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {prices.map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-slate-200 px-6 py-5 transition last:border-0 hover:bg-yellow-50"
              >
                <span className="font-semibold">{name}</span>
                <span className="font-black text-yellow-500">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-ТЕКСТ */}
      {district ? (
        <section className="bg-white py-20 text-slate-900">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-black text-[#0092B8]">
              Сантехник в {district} районе Алматы — вызов на дом
            </h2>

            <div className="mt-8 max-w-5xl space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Выезжаем к клиентам в {district} районе Алматы: в
                квартиры многоэтажных домов, частные дома, офисы и
                магазины. Мастер приезжает со своим рабочим
                инструментом, осматривает неисправность и согласовывает
                стоимость работ до их начала.
              </p>

              <p>
                В {district} районе можно вызвать сантехника для
                устранения протечек, замены смесителей и труб,
                установки унитазов, раковин, ванн и бойлеров, а также
                для прочистки канализации. Если нужно выполнить
                несколько работ, их можно сделать за один выезд.
              </p>

              <p>
                Чтобы вызвать сантехника, позвоните или напишите в
                WhatsApp, назовите адрес и кратко опишите проблему.
                Время выезда согласуем сразу. Работаем в {district}{" "}
                районе и во всех остальных районах Алматы каждый день.
              </p>

              <p>
                Полный перечень работ смотрите на странице{" "}
                <Link
                  href="/uslugi-santehnika"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  услуги сантехника
                </Link>
                , цены на странице{" "}
                <Link
                  href="/price"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  прайс-листа
                </Link>
                , а общую информацию о нашей работе в городе на
                странице{" "}
                <Link
                  href="/santehnik"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  сантехник в Алматы
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-20 text-slate-900">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-black text-[#0092B8]">
              Сантехник в Алматы — вызов сантехника на дом
            </h2>

            <div className="mt-8 max-w-5xl space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Нужен сантехник в Алматы? Наши мастера выполняют
                сантехнические работы в квартирах, частных домах,
                офисах и других помещениях. Можно вызвать сантехника
                для устранения протечки, ремонта сантехники,{" "}
                <Link
                  href="/ustanovka-smesitelya"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  замены и установки смесителя
                </Link>
                ,{" "}
                <Link
                  href="/ustanovka-unitaza"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  установки унитаза
                </Link>
                ,{" "}
                <Link
                  href="/ustanovka-rakoviny"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  установки раковины
                </Link>
                ,{" "}
                <Link
                  href="/ustanovka-vanny"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  установки ванны
                </Link>
                ,{" "}
                <Link
                  href="/ustanovka-dushevoy-kabiny"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  душевой кабины
                </Link>
                ,{" "}
                <Link
                  href="/ustanovka-boylera"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  бойлера
                </Link>
                ,{" "}
                <Link
                  href="/zamena-trub"
                  className="font-semibold text-sky-700 hover:underline"
                >
                  замены труб
                </Link>{" "}
                и решения других бытовых сантехнических задач.
              </p>

              {seoIntro.map((text) => (
                <p key={text}>{text}</p>
              ))}

              {seoSections.map(({ title, href, paragraphs }) => (
                <div key={title} className="space-y-6">
                  <h3 className="pt-4 text-2xl font-black text-sky-700">
                    {href ? (
                      <Link href={href} className="hover:underline">
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </h3>

                  {paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ПОЧЕМУ МЫ */}
      <section id="about" className="bg-sky-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-yellow-400">
            Почему выбирают нас
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Надёжный сантехнический сервис в Алматы
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, text]) => (
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

      {/* КАК РАБОТАЕМ */}
      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-yellow-500">Как мы работаем</p>

          <h2 className="mt-2 text-4xl font-black">
            Всё просто — от заявки до гарантии
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
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

      {/* НАШИ РАБОТЫ */}
      <section id="works" className="bg-sky-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-yellow-400">Наши работы</p>

          <h2 className="mt-2 text-4xl font-black">
            Примеры выполненных работ
          </h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            Реальные примеры сантехнических работ в Алматы.
          </p>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section
        id="reviews"
        className="bg-white py-20 text-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-yellow-500">Отзывы клиентов</p>

          <h2 className="mt-2 text-4xl font-black">
            Что говорят о нашей работе
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([name, text]) => (
              <div
                key={name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-xl"
              >
                <div className="text-xl text-yellow-400">★★★★★</div>

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

      {/* FAQ */}
      <section id="faq" className="bg-white py-16 text-slate-950">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Часто задаваемые вопросы
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map(([question, answer]) => (
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

      {/* РАЙОНЫ */}
      <section className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-yellow-500">Выезд по городу</p>

          <h2 className="mt-2 text-4xl font-black">
            Сантехник во всех районах Алматы
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Выезжаем на сантехнические работы по всему Алматы.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {districtLinks.map(([slug, name]) => (
              <Link
                key={slug}
                href={`/santehnik/${slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-xl"
              >
                📍 {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section
        id="contacts"
        className="bg-white py-20 text-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-yellow-500">Контакты</p>

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

      {/* СРОЧНЫЙ ВЫЗОВ */}
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
                  Позвоните или напишите в WhatsApp. Уточним проблему и
                  согласуем время выезда мастера.
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

      {/* АНИМАЦИИ */}
      <style>{`
        @keyframes callButtonShine {
          from {
            transform: translateX(0) skewX(-25deg);
          }
          to {
            transform: translateX(1800%) skewX(-25deg);
          }
        }

        .call-button-shine {
          position: relative;
          overflow: hidden;
        }

        .call-button-shine::after {
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
          animation: callButtonShine 2.5s linear infinite;
          pointer-events: none;
        }

        @keyframes santehnikDiscountSwing {
          0%,
          100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .santehnik-discount-hanging {
          transform-origin: 0 0;
          animation: santehnikDiscountSwing 3s ease-in-out infinite;
        }

        @keyframes santehnikCheckAppear {
          from {
            opacity: 0;
            transform: scale(0.75);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes santehnikCheckDraw {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .santehnik-check-icon {
          animation: santehnikCheckAppear 0.45s ease-out both;
        }

        .santehnik-check-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 0;
          animation: santehnikCheckDraw 2s ease-in-out infinite;
        }

        @keyframes servicesArrowMove {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        .services-arrow {
          animation: servicesArrowMove 1.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .call-button-shine::after,
          .santehnik-discount-hanging,
          .santehnik-check-icon,
          .santehnik-check-line,
          .services-arrow {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}