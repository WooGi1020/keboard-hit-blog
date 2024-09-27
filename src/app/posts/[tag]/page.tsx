import { TagNav } from "@/app/posts/[tag]/(tagNav)/TagNav";
import Posts from "@/app/posts/_components/Posts";
import { getAllTag } from "@/lib/getPosts";

import dynamic from "next/dynamic";

const AnimationPlayer = dynamic(() => import("@/components/animation/lottieKeyboard"), {
  ssr: false,
});

async function postsPage({ params }: { params: { tag: string } }) {
  const { tagInfos, allTagCount } = getAllTag();
  const { tag } = params;

  return (
    <>
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation relative bottom-8" />
      </div>
      <TagNav tagInfos={tagInfos} allTagCount={allTagCount} />
      <Posts tag={tag.toString()} />
    </>
  );
}

export default postsPage;
