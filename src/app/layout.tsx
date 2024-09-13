import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/themes/theme-provider";

const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  preload: true,
  display: "swap",
  variable: "--font-pretendard",
});

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
      <body className={pretendardFont.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="mt-[80px] max-w-[1232px] px-[16px] mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
