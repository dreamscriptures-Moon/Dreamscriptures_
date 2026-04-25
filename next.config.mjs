/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/dream-dictionary",
        destination: "/dreams",
        permanent: true,
      },
      {
        source: "/dream/:slug",
        destination: "/dreams/:slug",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;