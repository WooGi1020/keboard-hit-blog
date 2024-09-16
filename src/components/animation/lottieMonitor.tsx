"use client";

import React from "react";
import whiteMonitor from "../../../public/lottie/white-monitor.json";
import darkMonitor from "../../../public/lottie/dark-monitor.json";
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
        animationData={theme === "white" ? whiteMonitor : darkMonitor}
        style={{ height: "80px", width: "80px" }}
      />
    </div>
  );
}

export default lottieKeyboard;
