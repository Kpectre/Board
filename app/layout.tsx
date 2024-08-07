"use client";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans_jp.className} w-screen min-h-screen bg-customGray`}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
