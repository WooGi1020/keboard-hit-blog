import { Link2 } from "lucide-react";
import Link from "next/link";

function FooterNav() {
  return (
    <nav className="flex items-center gap-2">
      <Link
        href="https://linktr.ee/woogi1020"
        target="_blank"
        className="border border-gray-500 p-1 rounded-md hover:bg-input"
        aria-label="코딩기 프로필 링크"
      >
        <Link2 className="size-5" />
      </Link>
    </nav>
  );
}

export default FooterNav;
