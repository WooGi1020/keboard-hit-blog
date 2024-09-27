import { parsePosts } from "@/lib/getPosts";
import type { Params } from "@blogType";
import dayjs from "dayjs";
import { Calendar, Clock } from "lucide-react";
import readingTimeFunc from "@/lib/readingTime";

async function PostMeta({ params }: { params: Params }) {
  const postInfo = await parsePosts(params);
  const formattedDate = postInfo && dayjs(postInfo.frontmatter.date);
  const readTime = readingTimeFunc(postInfo.content);

  return (
    <div className="max-w-[800px] w-full mx-auto p-4">
      <div className="w-full mb-6">
        <p className="text-md text-chart-1 mb-2 text-center">{postInfo.frontmatter.tag}</p>
        <h1 className="text-4xl font-bold text-chart-2 mb-4 text-center max-sm:text-3xl">
          {postInfo?.frontmatter.title}
        </h1>
        <p className="text-lg text-black dark:text-white text-center max-sm:text-[16px]">
          {postInfo?.frontmatter.description}
        </p>
      </div>
      <div className="flex max-w-[700px] mx-auto w-full justify-between items-center text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 dark:text-gray-400" />
          <span className="dark:text-gray-400">{formattedDate?.format("YYYY년 MM월 DD일")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-4 dark:text-gray-400" />
          <span className="dark:text-gray-400">Reading Time : {readTime}분</span>
        </div>
      </div>
    </div>
  );
}

export default PostMeta;
