import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Marchetti | Full-Stack Web Developer",
  description:
    "Portfolio de Felipe Cunha Marchetti, desenvolvedor full-stack web com experiencia em e-commerce, PHP, Laravel, JavaScript, SQL e analise de dados.",
  openGraph: {
    title: "Felipe Marchetti | Full-Stack Web Developer",
    description:
      "Portfolio full-stack com experiencia em e-commerce, PHP, Laravel, JavaScript, SQL e analise de dados.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Marchetti | Full-Stack Web Developer",
    description:
      "Desenvolvedor full-stack com foco em e-commerce, PHP, Laravel, JavaScript e SQL.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
