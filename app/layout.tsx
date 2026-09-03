import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Leonardo Cespedes Tenorio — Fullstack Engineer",
  description:
    "Portfolio of Leonardo Cespedes Tenorio, fullstack software engineer. Perch, DevWebCamp, and PrepWise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
