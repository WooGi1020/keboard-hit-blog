import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import type { Params } from "@blogType";
import { cache } from "react";

const BASE_PATH = "src/posts";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = async () => {
  const postPaths: string[] = sync(`${POST_PATH}/*/*.mdx`);
  const paths = postPaths.map((filePath) => ({
    slug: path.relative(POST_PATH, filePath).replace(/\\/g, "/").replace(".mdx", ""),
  }));

  return paths;
};

export const getPosts = cache(async (params: Params) => {
  const filePaths = await getAllPosts();
  const { slugs } = params;
  const slug = `${slugs.join("/")}`;

  const postFind = filePaths.find((filePath) => filePath.slug === slug);

  return postFind;
});

export const parsePosts = async (params: Params) => {
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
};

export const getPostMeta = ({ slug }: { slug: string }) => {
  const metaPath = `${POST_PATH}/${slug}.mdx`;
  const mdFile = fs.readFileSync(metaPath, "utf-8");
  const { data: frontmatter, content } = matter(mdFile);

  return { frontmatter, content };
};
