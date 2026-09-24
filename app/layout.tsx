import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingContacts from "./FloatingContacts";
import ReviewSchema from "./ReviewSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.home-services.kz"),

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  title: "Сервис бытовых услуг в Алматы | Сантехник, электрик",

  description:
    "Сантехник, электрик, прочистка канализации и другие бытовые услуги в Алматы. Быстрый выезд мастера, гарантия на выполненные работы.",

  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "https://www.home-services.kz",
    siteName: "Сервис бытовых услуг",
    title: "Сервис бытовых услуг в Алматы | Сантехник, электрик",
    description:
      "Сантехник, электрик, прочистка канализации и другие бытовые услуги в Алматы. Быстрый выезд мастера, гарантия на выполненные работы.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Сервис бытовых услуг в Алматы",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.home-services.kz/#organization",
      name: "Сервис бытовых услуг",
      url: "https://www.home-services.kz",
      telephone: "+77771696969",

      logo: "https://www.home-services.kz/icon.png",

      image: "https://www.home-services.kz/og-image.png",
    },

    {
      "@type": "WebSite",
      "@id": "https://www.home-services.kz/#website",
      url: "https://www.home-services.kz",
      name: "Сервис бытовых услуг",

      publisher: {
        "@id": "https://www.home-services.kz/#organization",
      },

      inLanguage: "ru",
    },

    {
      "@type": "Service",
      "@id": "https://www.home-services.kz/#service",
      name: "Бытовые услуги в Алматы",

      provider: {
        "@id": "https://www.home-services.kz/#organization",
      },

      areaServed: {
        "@type": "City",
        name: "Алматы",
      },

      serviceType: [
        "Услуги сантехника",
        "Услуги электрика",
        "Прочистка канализации",
        "Бытовые услуги",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z3P6DCDJFZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3P6DCDJFZ');
          `}
        </Script>

        {/* ОСНОВНАЯ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />

        {/* РЕАЛЬНЫЙ РЕЙТИНГ ИЗ SUPABASE */}
        <ReviewSchema />

        {children}

        <FloatingContacts />
      </body>
    </html>
  );
}