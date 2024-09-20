"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function ThemeChangeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="테마 색상 변경버튼"
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "white" : "dark");
      }}
    >
      {theme === "dark" ? (
        <Moon className="size-5 fill-yellow-300 stroke-yellow-300" />
      ) : (
        <Sun className="size-5 fill-yellow-300 stroke-gray-400" />
      )}
    </Button>
  );
}

export default ThemeChangeButton;
