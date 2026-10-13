import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartGrids AI",
  description: "AI is the future. Data centres aren't.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 overflow-hidden">{children}</body>
    </html>
  );
}
