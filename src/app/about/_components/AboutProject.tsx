import React from "react";
import ABOUT_ME from "@/data/ABOUT_ME";
import Image from "next/image";

function AboutProject() {
  return (
    <>
      <span className="text-chart-1 mb-[-30px]">My Project</span>
      <div className="flex flex-col gap-4">
        {ABOUT_ME.project.map((project) => {
          return (
            <>
              <a
                className="relative flex gap-2 w-full h-[150px] border border-input rounded-xl p-5 pl-10 hover:bg-accent/80 overflow-hidden items-center"
                href={project.link}
                target="_blank"
              >
                <div>
                  <span className="text-lg font-semibold">{project.name}</span>
                  <p className="text-[14px]">{project.description}</p>
                  <span className="text-[13px]">{project.period}</span>
                </div>
                <div className="size-[250px] absolute right-[-70px] rounded-full border border-input">
                  <Image
                    src={project.src}
                    alt="프로젝트 미리보기 이미지"
                    className="rounded-full"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AboutProject;
