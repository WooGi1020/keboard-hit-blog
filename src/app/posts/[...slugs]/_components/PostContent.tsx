import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

async function PostContent({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-dark">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
            format: "mdx",
          },
        }}
      />
    </div>
  );
}

export default PostContent;
