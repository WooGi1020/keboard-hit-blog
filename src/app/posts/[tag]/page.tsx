import { TagNav } from "@/app/posts/[tag]/(tagNav)/TagNav";
import Posts from "@/app/posts/_components/Posts";
import { getMetaData } from "@/lib/getMetaData";
import { getAllTag } from "@/lib/getPosts";

import dynamic from "next/dynamic";

const AnimationPlayer = dynamic(() => import("@/components/animation/lottieKeyboard"), {
  ssr: false,
});

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const title = `포스트 목록: ${params.tag}`;
  const description = `포스트 중 ${params.tag}의 목록입니다.`;
  const asPath = `/posts/${params.tag}`;
  const ogImage = `/images/opgraph/op-image.png`;

  return getMetaData({ title, description, asPath, ogImage });
}

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
