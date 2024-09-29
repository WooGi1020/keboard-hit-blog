import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import type { Params } from "@blogType";
import { cache } from "react";

const BASE_PATH = "src/posts";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

// 특정 태그에 해당하는 포스트 경로를 가져오는 함수
export const getPostsByTag = async (tag?: string) => {
  let paths: { slug: string }[];

  if (tag && tag !== "all") {
    const postPaths: string[] = sync(`${POST_PATH}/${tag}/*.mdx`);
    paths = postPaths.map((filePath) => ({
      slug: path.relative(POST_PATH, filePath).replace(/\\/g, "/").replace(".mdx", ""),
    }));
  } else {
    const postPaths: string[] = sync(`${POST_PATH}/*/*.mdx`);
    paths = postPaths.map((filePath) => ({
      slug: path.relative(POST_PATH, filePath).replace(/\\/g, "/").replace(".mdx", ""),
    }));
  }

  return paths;
};

// 태그와 슬러그를 사용하여 포스트를 가져오는 함수
export const getPosts = cache(async (params: Params) => {
  const filePaths = await getPostsByTag(params.tag); // 태그를 기준으로 포스트 파일 경로 가져오기
  const { tag, slug } = params; // tag와 slug를 destructuring으로 추출

  // 태그와 슬러그를 기준으로 포스트 찾기
  const postFind = filePaths.find((filePath) => {
    const isMatchingTag = filePath.slug.startsWith(tag);
    const isMatchingSlug = filePath.slug.split("/").pop() === slug;

    return isMatchingTag && isMatchingSlug;
  });

  return postFind || null; // 포스트를 찾으면 반환하고, 없으면 null 반환
});

// 태그와 슬러그를 사용하여 포스트의 내용을 파싱하는 함수
export const parsePosts = async (params: Params) => {
  const { tag, slug } = params; // tag와 slug를 destructuring으로 추출
  const post = await getPosts({ tag, slug }); // 태그와 슬러그를 사용하여 포스트 가져오기

  if (!post) {
    throw new Error("Post not found");
  }

  const postPath = path.join(POST_PATH, `${tag}/${slug}.mdx`); // [tag]/[slug] 형식으로 파일 경로 생성
  const mdFile = fs.readFileSync(postPath, "utf-8"); // 파일 읽기
  const { data: frontmatter, content } = matter(mdFile); // frontmatter와 content 파싱

  return {
    frontmatter,
    content,
  };
};

// 슬러그에 해당하는 포스트 메타데이터를 가져오는 함수
export const getPostMeta = ({ slug }: { slug: string }) => {
  const metaPath = `${POST_PATH}/${slug}.mdx`; // 슬러그에 해당하는 메타 파일 경로
  const mdFile = fs.readFileSync(metaPath, "utf-8"); // 파일 읽기
  const { data: frontmatter, content } = matter(mdFile); // frontmatter와 content 파싱

  return { frontmatter, content };
};

export const getAllPostUrl = () => {
  const paths: string[] = sync(`${POST_PATH}/*/*.mdx`);

  const posts = paths.map((onePath) => {
    const formattedPath = onePath.replace(".mdx", "").slice(4);
    const realPath = formattedPath.replace(/\\/g, "/");

    const { data: frontmatter } = matter(fs.readFileSync(onePath, "utf-8"));

    return {
      path: realPath,
      date: frontmatter.date,
    };
  });

  return posts;
};

export const getAllTag = () => {
  const tagPaths: string[] = sync(`${POST_PATH}/*`); // 모든 태그 폴더 경로 가져오기
  const allTagCount: number = sync(`${POST_PATH}/*/*.mdx`).length;

  const tagInfos = tagPaths.map((folderPath) => {
    // 폴더 이름
    const folderName = path.relative(POST_PATH, folderPath).replace(/\\/g, "/");

    // 해당 폴더 안의 .mdx 파일 개수
    const fileCount = sync(`${BASE_PATH}/${folderName}/*.mdx`).length;

    return {
      tag: folderName, // 폴더 이름
      count: fileCount, // 파일 개수
    };
  });

  return { tagInfos, allTagCount };
};
