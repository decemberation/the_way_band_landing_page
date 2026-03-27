import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Way Band",
  description:
    "Young Vietnamese musicians based in San Jose, CA. Book The Way Band for concerts, private events, celebrations, and community nights.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "The Way Band",
    description:
      "Young Vietnamese musicians based in San Jose, CA. Book The Way Band for concerts, private events, celebrations, and community nights.",
    images: [{ url: "/logo.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
