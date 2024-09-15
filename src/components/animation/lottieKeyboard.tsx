"use client";

import React from "react";
import animationData from "../../../public/lottie/animation.json";
import whiteAnimationData from "../../../public/lottie/whiteAnimation.json";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

function lottieKeyboard({ className }: { className?: string }) {
  const { theme } = useTheme();

  return (
    <div className={cn(className)}>
      <Lottie
        autoplay
        loop
        animationData={theme === "white" ? animationData : whiteAnimationData}
        style={{ height: "80px", width: "80px" }}
      />
    </div>
  );
}

export default lottieKeyboard;
