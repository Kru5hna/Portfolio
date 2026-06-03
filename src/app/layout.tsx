import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krushna Raut",
  description:
    "Portfolio of Krushna Raut, a Full Stack Developer specializing in modern web technologies, AI, and Web3.",
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
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
