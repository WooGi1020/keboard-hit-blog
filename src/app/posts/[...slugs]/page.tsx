import { getAllPosts, parsePosts } from "@/lib/getPosts";
import dynamic from "next/dynamic";
import type { Params } from "@blogType";
import PostMeta from "@/app/posts/[...slugs]/_components/PostMeta";
import PostContent from "@/app/posts/[...slugs]/_components/PostContent";
import { notFound } from "next/navigation";

const AnimationPlayer = dynamic(() => import("../../../components/animation/LottieMonitor"), {
  ssr: false,
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const slugs = posts.map((post) => post.slug);
  return slugs;
}

async function postPage({ params }: { params: Params }) {
  if (!params) return notFound();

  const imagePath = params.slugs.join().replace(",", "/");
  const postData = await parsePosts({ slugs: params.slugs });

  return (
    <>
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation mx-auto relative bottom-5" />
      </div>
      <PostMeta params={params} />
      <div className="border dark:border-gray-500 border-gray-400 mt-[-20px]" />
      <PostContent content={postData.content} imagePath={imagePath} />
    </>
  );
}

export default postPage;
