"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import ThemeChangeButton from "@/components/themes/ThemeChangeButton";
import GithubLink from "@/components/header/GithubLink";

function HeaderNav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex justify-between items-center h-full w-full max-w-[1232px] px-[16px] mx-auto">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <h1 className="text-lg">키보드 두들기며 먹고살기</h1>
        </Link>
        <Link
          href="/posts"
          className={`${pathname === "/posts" && `bg-accent text-accent-foreground rounded-md`}`}
        >
          <Button variant="ghost">Posts</Button>
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" && `bg-accent text-accent-foreground rounded-md`}`}
        >
          <Button variant="ghost">About</Button>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ThemeChangeButton />
        <GithubLink />
      </div>
    </nav>
  );
}

export default HeaderNav;
