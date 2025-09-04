import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import Header from "@/components/Header";
import "./globals.css";
import { MSWMockProvider } from "@/components/Provider/MSWMockProvider";

const mockingEnabled = !!process.env.NEXT_PUBLIC_API_MOCKING;

if (process.env.NEXT_RUNTIME === "nodejs" && mockingEnabled) {
  const { server } = await import("../__tests__/mocks/server");
  server.listen();
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitHub リポジトリ検索",
  description:
    "GitHubのリポジトリを検索して詳細を確認できるWebアプリケーション",
  keywords: ["GitHub", "リポジトリ", "検索", "React", "Next.js"],
  authors: [{ name: "GitHub Search App" }],
  openGraph: {
    title: "GitHub リポジトリ検索",
    description:
      "GitHubのリポジトリを検索して詳細を確認できるWebアプリケーション",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub リポジトリ検索",
    description:
      "GitHubのリポジトリを検索して詳細を確認できるWebアプリケーション",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <MSWMockProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
        >
          <Header />
          <main className="min-h-[calc(100vh-64px)]">{children}</main>
        </body>
      </MSWMockProvider>
    </html>
  );
}
