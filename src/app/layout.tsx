import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krushna Raut | Full Stack & AI Software Engineer",
  description:
    "Product-minded engineer building high performance web applications, AI models, zero-knowledge systems, and delightful visual experiences.",
  icons: {
    icon: "/pfp.png",
    shortcut: "/pfp.png",
    apple: "/pfp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <body className="antialiased dark">
        <div className="bottom-vignette" />
        {children}
      </body>
    </html>
  );
}

