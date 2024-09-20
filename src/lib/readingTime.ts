import readingTime from "reading-time";

export default function readingTimeFunc(content: string) {
  const readTimeCalc = readingTime(content);
  const formattedTime = Math.round(readTimeCalc.minutes);
  return formattedTime;
}
