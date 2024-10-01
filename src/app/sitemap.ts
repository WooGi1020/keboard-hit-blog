import { getAllPostUrl } from "@/lib/getPosts";
import type { MetadataRoute } from "next";

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

const postMetadata = getAllPostUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapFromPosts: MetadataRoute.Sitemap = postMetadata.map((post) => ({
    url: `https://keyboard-hit-blog/${post.path}`,
    lastModified: new Date(post.date),
    changeFrequency: "daily",
    priority: 0.7,
  }));
  return [...defaultSiteMaps, ...sitemapFromPosts];
}
