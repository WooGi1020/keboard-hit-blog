import dynamic from "next/dynamic";

function Header() {
  const HeaderNav = dynamic(() => import("./HeaderNav"), {
    ssr: false,
  });

  return (
    <>
      <header className="fixed inset-0 h-[60px] border-b-2 flex items-center w-full z-50 bg-background dark:bg-back">
        <HeaderNav />
      </header>
    </>
  );
}

export default Header;
