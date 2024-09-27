"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { StepBack, CopySlashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import useMediaQuery from "@/hooks/useMediaQuery";

interface TOCItem {
  id: string;
  text: string | null;
  level: number;
}

// TOC 컴포넌트
function CustomToc() {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const router = useRouter();
  const isWebScreen = useMediaQuery("(max-width: 1600px)");

  const handleClickBack = () => {
    router.push("/posts/all");
  };

  const handleClickCopy = async () => {
    const link = window.location.href;

    if (link) {
      try {
        navigator.clipboard.writeText(link);
        toast({ description: "게시글 링크를 복사했습니다." });
      } catch {
        toast({ description: "게시글 링크 복사에 실패했습니다." });
      }
    }
  };

  useEffect(() => {
    // MDX 문서에서 h2, h3 태그를 찾아서 TOC 생성
    const headers = Array.from(document.querySelectorAll("h1, h2")).map((header) => ({
      id: header.id,
      text: header.textContent,
      level: header.tagName === "H1" ? 1 : 2,
    }));

    const filteredUl = headers.slice(2);

    setTocItems(filteredUl);
  }, []);

  if (isWebScreen) {
    return (
      <div className="my-[80px] border-2 border-input pl-8 pb-4">
        <p className="text-lg text-chart-1">게시글 키워드</p>
        <ul>
          {tocItems.map((item) => (
            <li key={item.id} style={{ marginLeft: (item.level - 1) * 20 }}>
              <Link href={`#${item.id}`} className="hover:text-gray-600 dark:hover:text-gray-300">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <aside className="absolute top-0 right-[-350px] h-full">
      <div className="flex flex-col pt-3 pb-1 px-5 border border-input rounded-md sticky top-[250px] ul-toc max-w-[330px]">
        <div className="w-full border-b-2 border-input">
          <p className="text-center text-lg text-chart-1">게시글 키워드</p>
        </div>
        <ul className="truncate">
          {tocItems.map((item) => (
            <li key={item.id} style={{ marginLeft: (item.level - 1) * 20 }}>
              <Link href={`#${item.id}`} className="hover:text-gray-600 dark:hover:text-gray-300">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-10 border-t-2 border-input p-5">
          <div className="flex flex-col gap-2 items-center">
            <Button variant="outline" size="icon" onClick={handleClickBack}>
              <StepBack />
            </Button>
            <span className="text-sm">뒤로 가기</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="outline" size="icon" onClick={handleClickCopy}>
              <CopySlashIcon className="size-5" />
            </Button>
            <span className="text-sm">링크 복사</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CustomToc;
