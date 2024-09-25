import PostCard from "@/app/posts/_components/PostCard";
import { getAllPosts } from "@/lib/getPosts";

async function Posts() {
  const posts = await getAllPosts();

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
