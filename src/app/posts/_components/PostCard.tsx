import { getPostMeta } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, Clock } from "lucide-react";

interface Post {
  post: { slug: string };
}

async function PostCard({ post }: Post) {
  const data = getPostMeta(post);
  console.log(data);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="card hover:hover-card border-2 border-input w-[450px] h-[450px] rounded-xl"
    >
      <div className="w-full h-[250px] relative">
        <Image
          src={`/images/thumnails/${post.slug}/test.jpg`}
          alt="포스트 썸네일 이미지"
          fill
          priority
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 h-[200px]">
        <span className="text-chart-1">{data.frontmatter.tag}</span>
        <h2 className="text-lg font-semibold">{data.frontmatter.title}</h2>
        <p className="text-sm">{data.frontmatter.description}</p>
        <div className="mt-auto flex justify-between">
          <div className="flex gap-2 items-center">
            <Calendar className="size-5 relative top-[-1px]" />
            <span>{new Date(data.frontmatter.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
