export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col gap-6 w-full max-w-[950px] mx-auto">{children}</section>;
}
