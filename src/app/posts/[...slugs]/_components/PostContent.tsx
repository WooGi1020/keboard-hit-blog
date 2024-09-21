import components from "@/app/posts/[...slugs]/_components/MarkdownComponent";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

async function PostContent({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-dark w-full max-w-[800px]">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
            format: "mdx",
          },
        }}
        components={components}
      />
    </div>
  );
}

export default PostContent;
