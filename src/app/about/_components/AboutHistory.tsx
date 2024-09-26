import ABOUT_ME from "@/constant/ABOUT_ME";

function AboutHistory() {
  return (
    <>
      <span className="text-chart-1 mb-[-30px]">My History</span>
      <div className="flex flex-col gap-3">
        {ABOUT_ME.history.map((history) => (
          <div key={history.do} className="flex flex-col border gap-2 border-input p-8 rounded-xl">
            <span className="text-lg ">{history.do}</span>
            <span className="text-md">{history.period}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutHistory;
