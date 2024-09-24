import { getPostMeta } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, Clock } from "lucide-react";
import dayjs from "dayjs";
import readingTimeFunc from "@/lib/readingTime";

interface Post {
  post: { slug: string };
}

async function PostCard({ post }: Post) {
  const data = getPostMeta(post);
  const formattedDate = dayjs(data.frontmatter.date);
  const readTime = readingTimeFunc(data.content);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="card hover:hover-card border-2 border-input w-[450px] h-[450px] rounded-xl post"
    >
      <div className="w-full h-[250px] relative">
        <Image
          src={`/images/thumbnails/${post.slug}.jpg`}
          alt="포스트 썸네일 이미지"
          fill
          priority
          sizes="100%"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 h-[200px]">
        <span className="text-chart-1">{data.frontmatter.tag}</span>
        <h2 className="text-lg font-semibold">{data.frontmatter.title}</h2>
        <p className="text-sm">{data.frontmatter.description}</p>
        <div className="mt-auto flex justify-between">
          <div className="flex gap-2">
            <Calendar className="size-5 items-center" />
            <span>{formattedDate?.format("YYYY년 MM월 DD일")}</span>
          </div>
          <div className="flex gap-2">
            <Clock className="size-5 items-center" />
            <span>{readTime}분</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
