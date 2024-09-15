import {
  AboutHistory,
  AboutMeta,
  AboutOnline,
  AboutOpinion,
  AboutProject,
} from "@/app/about/_components";

function AboutPage() {
  return (
    <div className="flex flex-col gap-11 w-full">
      <h2 className="text-center text-3xl font-bold text-animation mb-[-20px]">환영합니다! 😊</h2>
      <AboutMeta />
      <AboutOpinion />
      <AboutOnline />
      <AboutProject />
      <AboutHistory />
    </div>
  );
}

export default AboutPage;
