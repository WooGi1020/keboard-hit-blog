import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "키보드 두들기며 먹고살기",
  description: "코딩기가 두들기는 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
