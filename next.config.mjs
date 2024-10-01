/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/posts/all/sitemap.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
