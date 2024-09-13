import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>페이지를 찾을 수 없어요!</h2>
      <Link href="/">돌아가기</Link>
    </div>
  );
}

export default NotFound;
