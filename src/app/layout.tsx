import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/Footer";
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
  title: {
    default: "SmartGrids AI — Distributed Sovereign Compute",
    template: "%s | SmartGrids AI",
  },
  description:
    "AI is the future. Data centres aren't. Solar-powered, distributed sovereign compute for the AI era.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="flex min-h-full flex-col bg-sg-darker text-foreground">
        <SiteNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
