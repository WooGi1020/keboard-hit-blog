/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/posts/all/sitemap.xml",
        destination: "/posts/all/sitemap",
      },
    ];
  },
};

export default nextConfig;
