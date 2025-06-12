import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

import "./globals.scss";

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata: Metadata = {
  title: "Купить вибростол для производства тротуарной плитки, гипса",
  description: "Вибсротолы КАРЕЛИЯ для производства плитки и брусчатки. Экономный станок для производства блоков и плитки своими руками. Осмотр и проверка до оплаты!",
  authors: [{ name: 'Just-Site.ru' }],
  keywords: "",
  robots: "noyaca",
  icons: {
    icon: [
      { url: '/favicon.png' }
    ]
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    images: {
      url: ""
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>{children}</body>
      <Script src="js/configs.js"/>
    </html>
  );
}
