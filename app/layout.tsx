import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const dosis = Dosis ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming App",
  description: "Streaming Movies and Series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
