import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GFXMEET V3 — Creative Design Studio led by Meet Patel",
  description: "We don't just make beautiful thumbnails. We engineer attention. Elite creative studio specializing in YouTube packaging, gaming graphics, and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white font-sans">{children}</body>
    </html>
  );
}
