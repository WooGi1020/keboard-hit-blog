import ABOUT_ME from "@/data/ABOUT_ME";

function AboutHistory() {
  return (
    <>
      <span className="text-chart-1 mb-[-30px]">My History</span>
      <div className="flex flex-col gap-3">
        {ABOUT_ME.history.map((history) => {
          return (
            <div className="flex flex-col">
              <span className="text-lg ">{history.do}</span>
              <span className="text-sm">{history.period}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AboutHistory;
