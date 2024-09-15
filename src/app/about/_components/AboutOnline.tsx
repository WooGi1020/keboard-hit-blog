import ABOUT_ME from "@/data/ABOUT_ME";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

function AboutOnline() {
  return (
    <>
      <span className="text-chart-1 mb-[-30px]">My Page</span>
      <div>
        {ABOUT_ME.online.map((page) => {
          return (
            <a href={page.link} target="_blank">
              <Button variant="outline" size="icon" className="size-[60px]">
                <Github className="size-[40px]" />
              </Button>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default AboutOnline;
