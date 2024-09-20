import { getAllPosts, parsePosts } from "@/lib/getPosts";
import dynamic from "next/dynamic";
import type { Params } from "@blogType";
import PostMeta from "@/app/posts/[...slugs]/_components/PostMeta";
import Image from "next/image";
import PostContent from "@/app/posts/[...slugs]/_components/PostContent";

const AnimationPlayer = dynamic(() => import("@/components/animation/LottieMonitor"), {
  ssr: false,
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const slugs = posts.map((post) => post.slug);
  return slugs;
}

async function postPage({ params }: { params: Params }) {
  const imagePath = params.slugs.join().replace(",", "/");
  const postData = await parsePosts({ slugs: params.slugs });

  return (
    <section className="flex flex-col gap-6 w-full max-w-[800px] mx-auto">
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation mx-auto relative bottom-5" />
      </div>
      <PostMeta params={params} />
      <div className="border dark:border-gray-500 border-gray-400 mt-[-20px]" />
      <div className="relative w-full h-[400px] mb-[20px]">
        <Image
          src={`/images/thumbnails/${imagePath}.jpg`}
          alt="포스트 썸네일 이미지"
          fill
          className="object-cover"
        />
      </div>
      <PostContent content={postData.content} />
    </section>
  );
}

export default postPage;
