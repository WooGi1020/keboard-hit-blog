import dynamic from "next/dynamic";

const AnimationPlayer = dynamic(() => import("@/components/animation/lottieKeyboard"), {
  ssr: false,
});

export default function Home() {
  return (
    <section className="max-w-[1000px] mx-auto flex flex-col gap-10">
      <AnimationPlayer className="lottie-animation mx-auto relative bottom-8" />
    </section>
  );
}
