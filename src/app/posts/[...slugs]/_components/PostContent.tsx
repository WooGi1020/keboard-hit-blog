import components from "@/app/posts/[...slugs]/_components/MarkdownComponent";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import remarkBreak from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import Image from "next/image";

async function PostContent({ content, imagePath }: { content: string; imagePath: string }) {
  return (
    <article className="prose dark:prose-dark w-full max-w-[800px]">
      <div className="relative w-full h-[400px] aspect-[16/9] mb-[60px]">
        <Image
          src={`/images/thumbnails/${imagePath}.jpg`}
          alt="포스트 썸네일 이미지"
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
              [
                remarkToc,
                {
                  heading: "toc",
                  maxDepth: 2,
                },
              ],
              remarkBreak,
            ],
            rehypePlugins: [
              [
                rehypeSlug,
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ["anchor"],
                  },
                },
              ],
              [
                rehypePrettyCode,
                {
                  theme: "one-dark-pro",
                  keepBackground: true,
                },
              ],
            ],
            format: "mdx",
          },
        }}
        components={components}
      />
    </article>
  );
}

export default PostContent;
