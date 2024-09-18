import { getAllPosts, parsePosts } from "@/lib/getPosts";
import React from "react";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { Calendar, Clock } from "lucide-react";
import type { Params } from "@blogType";

const AnimationPlayer = dynamic(() => import("@/components/animation/LottieMonitor"), {
  ssr: false,
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const slugs = posts.map((post) => post.slug);
  return slugs;
}

async function postPage({ params }: { params: Params }) {
  const postInfo = await parsePosts(params);
  const formattedDate = postInfo && dayjs(postInfo.frontmatter.date);

  return (
    <section className="flex flex-col gap-6">
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation mx-auto relative bottom-5" />
      </div>
      <div className="w-full">
        <h2>{postInfo?.frontmatter.title}</h2>
        <p>{postInfo?.frontmatter.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Calendar className="size-5" />
          <span>{formattedDate?.format("YYYY년 MM월 DD일")}</span>
        </div>
        <div className="flex gap-2">
          <Clock className="size-5" />
        </div>
      </div>
    </section>
  );
}

export default postPage;
