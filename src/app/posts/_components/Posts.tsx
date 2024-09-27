import PostCard from "@/app/posts/_components/PostCard";
import { getPostsByTag } from "@/lib/getPosts";
import { notFound } from "next/navigation";

async function Posts({ tag }: { tag?: string }) {
  let posts: { slug: string }[];
  if (!tag) {
    posts = await getPostsByTag();
  } else {
    posts = await getPostsByTag(tag!);
  }

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-[950px] w-full mx-auto">
      <div className="flex flex-wrap gap-10 justify-between w-full max-lg:justify-center">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
