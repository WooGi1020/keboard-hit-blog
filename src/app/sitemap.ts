import { getAllPostUrl } from "@/lib/getPosts";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = getAllPostUrl();

  // 사이트맵 URL 및 각 게시물의 URL 생성
  const defaultSiteMaps = [
    {
      url: "https://keyboard-hit-blog/",
      lastModified: new Date(),
    },
    {
      url: "https://keyboard-hit-blog/posts/all",
      lastModified: new Date(),
    },
    {
      url: "https://keyboard-hit-blog/about",
      lastModified: new Date(),
    },
  ];

  const sitemapFromPosts = posts.map((post) => ({
    url: `https://keyboard-hit-blog/${post.path}`,
    lastModified: new Date(post.date),
  }));

  // XML 포맷으로 변환
  const sitemap = [...defaultSiteMaps, ...sitemapFromPosts]
    .map(
      (site) => `<url>
        <loc>${site.url}</loc>
        <lastmod>${site.lastModified}</lastmod>
      </url>`
    )
    .join("");

  // 응답 헤더에 XML 타입 지정
  res.setHeader("Content-Type", "application/xml");
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemap}
  </urlset>`);
  res.end();
}
