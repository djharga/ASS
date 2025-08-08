import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "حاسبة مؤشر كتلة الجسم | BMI Calculator",
  description: "احسب مؤشر كتلة جسمك بسهولة وتعرف على حالتك الصحية. حاسبة مؤشر كتلة الجسم الدقيقة والسهلة الاستخدام.",
  keywords: "مؤشر كتلة الجسم, BMI, حاسبة الوزن, صحة, لياقة",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
