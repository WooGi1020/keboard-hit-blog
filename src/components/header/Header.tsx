import dynamic from "next/dynamic";

const HeaderNav = dynamic(() => import("./HeaderNav"), {
  ssr: false,
});

function Header() {
  return (
    <header className="fixed inset-0 h-[60px] border-b-2 flex items-center w-full">
      <HeaderNav />
    </header>
  );
}

export default Header;
