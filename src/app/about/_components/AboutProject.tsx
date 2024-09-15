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
                className="relative flex gap-2 w-full h-[170px] border border-input rounded-xl p-4 pl-8 hover:bg-accent/80 overflow-hidden items-center"
                href={project.link}
                target="_blank"
              >
                <div>
                  <span className="text-lg font-semibold mb-2">{project.name}</span>
                  <p className="text-[12px]">{project.description}</p>
                  <span className="text-[12px]">{project.period}</span>
                  <div className="flex gap-2 mt-2 w-[500px] flex-wrap">
                    {project.tag.map((tag) => {
                      return (
                        <span className="text-[12px] bg-input rounded-md px-2 py-1">{tag}</span>
                      );
                    })}
                  </div>
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
