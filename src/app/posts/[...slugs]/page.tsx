import { getAllPosts, parsePosts } from "@/lib/getPosts";
import React from "react";
import dynamic from "next/dynamic";

const AnimationPlayer = dynamic(() => import("@/components/animation/lottieMonitor"), {
  ssr: false,
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const slugs = posts.map((post) => {
    return post.slug;
  });
  return slugs;
}

async function postPage({ params }: { params: any }) {
  const postFile = await parsePosts(params);

  return (
    <section className="flex flex-col gap-6">
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation mx-auto relative bottom-5" />
      </div>
      <div className="w-full">
        <h2>{postFile?.frontmatter.title}</h2>
        <p>{postFile?.frontmatter.description}</p>
      </div>
    </section>
  );
}

export default postPage;
