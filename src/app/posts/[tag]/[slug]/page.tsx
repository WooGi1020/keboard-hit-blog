import { getPostsByTag, parsePosts } from "@/lib/getPosts";
import dynamic from "next/dynamic";
import type { Params } from "@blogType";
import PostMeta from "@/app/posts/[tag]/[slug]/_components/PostMeta";
import PostContent from "@/app/posts/[tag]/[slug]/_components/PostContent";
import { notFound } from "next/navigation";
import Giscus from "@/components/giscus/Giscus";
import { getMetaData } from "@/lib/getMetaData";

const AnimationPlayer = dynamic(() => import("@/components/animation/lottieMonitor"), {
  ssr: false,
});

export async function generateMetadata({ params }: { params: Params }) {
  const { frontmatter } = await parsePosts({ tag: params.tag, slug: params.slug });
  const title = `${frontmatter.title}`;
  const description = `${frontmatter.description}`;
  const asPath = `/posts/${params.tag}${params.slug}`;
  const ogImage = `/images/thumbnails/${params.tag}/${params.slug}.jpg`;

  return getMetaData({ title, description, asPath, ogImage });
}

export async function generateStaticParams() {
  const posts = await getPostsByTag();
  const slugs = posts.map((post) => post.slug);
  return slugs.map((slug) => ({
    slug,
  }));
}

async function postPage({ params }: { params: Params }) {
  if (!params) return notFound();

  const imagePath = `${params.tag}/${params.slug}`;
  const postData = await parsePosts({ tag: params.tag, slug: params.slug });

  return (
    <section className="flex flex-col gap-6 w-full max-w-[900px] mx-auto">
      <div className="min-h-[80px] mx-auto">
        <AnimationPlayer className="lottie-animation mx-auto relative bottom-5" />
      </div>
      <PostMeta params={params} />
      <div className="border dark:border-gray-500 border-gray-400 mt-[-20px]" />
      <PostContent content={postData.content} imagePath={imagePath} />
      <Giscus />
    </section>
  );
}

export default postPage;
