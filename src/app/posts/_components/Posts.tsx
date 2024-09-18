import PostCard from "@/app/posts/_components/PostCard";
import { getAllPosts } from "@/lib/getPosts";

async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-wrap gap-5 justify-between w-full max-lg:justify-center">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
