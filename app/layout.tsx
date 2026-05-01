// ─────────────────────────────────────────────
// ROOT LAYOUT — Wraps every page automatically.
// Navbar is included here so it appears on all pages.
// To add a Footer, import and place it below {children}.
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "CodeSetupLab — Best Coding Setups & Budget Tech for Students",
  description:
    "Find the best budget laptops, accessories, and coding setups tailored for students and beginner developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <meta
          name="p:domain_verify"
          content="9b5721054e5260feb1a78cac5b4ed02c"
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        {/* ADD FOOTER HERE */}
      </body>
    </html>
  );
}
