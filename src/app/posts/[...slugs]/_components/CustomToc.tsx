"use client";

/* eslint-disable react/jsx-props-no-spreading */
import { useLayoutEffect, useRef, useState } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

function CustomToc({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
  const tocRef = useRef<HTMLUListElement | null>(null);
  const [isAdjacentToToc, setIsAdjacentToToc] = useState(false);

  useLayoutEffect(() => {
    // tocRef에 할당된 ul이 존재하는지 확인
    if (tocRef.current) {
      const nextSibling = tocRef.current.nextElementSibling; // 다음 형제 요소 찾기
      console.dir(tocRef.current);
      if (nextSibling && nextSibling.id === "toc") {
        setIsAdjacentToToc(true); // 형제 노드의 id가 'toc'인 경우
      }
    }
  }, []);

  if (isAdjacentToToc) {
    return (
      <aside>
        <ul id="hihi" ref={tocRef} {...props}>
          {children}
        </ul>
      </aside>
    );
  }

  return (
    <ul ref={tocRef} {...props}>
      {children}
    </ul>
  );
}

export default CustomToc;
