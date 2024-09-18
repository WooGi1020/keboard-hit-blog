import ABOUT_ME from "@/data/ABOUT_ME";

function AboutOpinion() {
  const descriptionArr = ABOUT_ME.description.split("\n");

  return (
    <>
      <span className="text-chart-1 mb-[-30px]">My Opinion</span>
      <div className="flex flex-col gap-2">
        {descriptionArr.map((desc) => (
          <p key={desc} className="text-lg font-medium">
            {desc}
          </p>
        ))}
      </div>
    </>
  );
}

export default AboutOpinion;
