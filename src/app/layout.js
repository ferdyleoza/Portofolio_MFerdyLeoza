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

export const metadata = {
  title: "Muhammad Ferdy Leoza | Frontend Developer & UI/UX Enthusiast",
  description: "Mahasiswa D4 Teknik Informatika di Universitas Logistik dan Bisnis Internasional yang berfokus pada pengembangan antarmuka pengguna (UI/UX) dan Frontend Development.",
  authors: [{ name: "Muhammad Ferdy Leoza" }],
  keywords: ["Muhammad Ferdy Leoza", "Frontend Developer", "UI/UX Designer", "Portfolio", "Next.js", "Tailwind CSS"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-teal-500/30 selection:text-teal-200">
        {children}
      </body>
    </html>
  );
}
