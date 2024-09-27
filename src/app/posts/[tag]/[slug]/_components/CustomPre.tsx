"use client";

/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "@/components/ui/button";
import React from "react";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomPreProps = any & {
  children: React.ReactNode;
};

function CustomPre({ children, ...props }: CustomPreProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    let code = "";

    const extractCode = (node: React.ReactNode): string => {
      if (React.isValidElement(node)) {
        const child = node as React.ReactElement;

        // 자식이 문자열인 경우
        if (typeof child.props.children === "string") {
          return child.props.children; // 원본 그대로 반환
        }
        // 자식이 배열인 경우, 재귀적으로 처리
        if (Array.isArray(child.props.children)) {
          return child.props.children.map(extractCode).join(""); // 공백과 줄바꿈 유지
        }
      } else if (typeof node === "string") {
        // string인 경우도 추가
        return node;
      }
      return ""; // 기본적으로 빈 문자열 반환
    };

    code = extractCode(children);

    if (code) {
      try {
        navigator.clipboard.writeText(code);
        toast({ description: "코드 복사에 성공하였습니다." });
      } catch {
        toast({ description: "코드 복사에 실패하였습니다." });
      }
    }
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        aria-label="코드 블럭 내부코드 복사 버튼"
        onClick={handleCopy}
        className="absolute right-2 top-2 p-1 rounded-lg"
      >
        <Copy className="size-5" />
      </Button>
      <pre {...props}>{children}</pre>
    </div>
  );
}

export default CustomPre;
