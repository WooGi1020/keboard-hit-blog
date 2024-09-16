import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const BASE_PATH = "src/posts";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = async () => {
  const postPaths: string[] = sync(`${POST_PATH}/*/*.mdx`);
  const paths = postPaths.map((filePath) => {
    return {
      slug: path.relative(POST_PATH, filePath).replace(/\\/g, "/").replace(".mdx", ""),
    };
  });

  return paths;
};

export const getPosts = async (params: any) => {
  const filePaths = await getAllPosts();
  const { slugs } = params;
  const slug = `${slugs.join("/")}`;

  const postFind = filePaths.find((filePath) => {
    return filePath.slug === slug;
  });

  return postFind;
};

export const parsePosts = async (params: any) => {
  try {
    const post = await getPosts(params);

    if (!post) {
      throw new Error("Post not found");
    }

    const postPath = path.join(POST_PATH, `${post.slug}.mdx`);
    const mdFile = fs.readFileSync(postPath, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    return {
      frontmatter,
      content,
    };
  } catch (e) {
    console.error("Error parsing post:", e);
  }
};

export const getPostMeta = ({ slug }: { slug: string }) => {
  const path = `${POST_PATH}/${slug}.mdx`;
  const mdFile = fs.readFileSync(path, "utf-8");
  const { data: frontmatter } = matter(mdFile);

  return { frontmatter };
};
