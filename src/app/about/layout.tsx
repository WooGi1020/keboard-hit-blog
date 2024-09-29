import { getMetaData } from "@/lib/getMetaData";
import type { Metadata } from "next";

export const metadata: Metadata = getMetaData({
  title: "About Me",
  description: "블로그 저자의 소개글입니다.",
  asPath: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <section className="max-w-[700px] mx-auto my-[100px]">{children}</section>;
}
