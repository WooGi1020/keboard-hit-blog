import { getAllPostUrl } from "@/lib/getPosts";
import type { MetadataRoute } from "next";

// 기본 사이트맵 설정
const defaultSiteMaps: MetadataRoute.Sitemap = [
  {
    url: "https://keyboard-hit-blog/posts/all",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: "https://keyboard-hit-blog/about",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  },
];

// 게시물 URL 동적 생성
const postMetadata = getAllPostUrl();

// 사이트맵 생성 함수
export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapFromPosts: MetadataRoute.Sitemap = postMetadata.map((post) => ({
    url: `https://keyboard-hit-blog/${post.path}`,
    lastModified: new Date(post.date),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...defaultSiteMaps, ...sitemapFromPosts];
}
