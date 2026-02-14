import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aditi | Software Developer",
  description:
    "Portfolio of Aditi - Computer Science student and Software Developer passionate about Java, SQL, and MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-surface-950 text-surface-50 min-h-screen relative`}
      >
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
