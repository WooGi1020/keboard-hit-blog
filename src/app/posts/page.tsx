import Posts from "@/app/posts/_components/Posts";
import dynamic from "next/dynamic";

const AnimationPlayer = dynamic(() => import("@/components/animation/lottieKeyboard"), {
  ssr: false,
});

async function postsPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation relative bottom-8" />
      </div>
      <Posts />
    </section>
  );
}

export default postsPage;
