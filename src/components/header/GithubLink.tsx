"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Github } from "lucide-react";

function GithubLink() {
  const goMyGithub = () => {
    window.open("https://github.com/WooGi1020", "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="outline" size="icon" onClick={goMyGithub}>
      <Github className="size-5" />
    </Button>
  );
}

export default GithubLink;
