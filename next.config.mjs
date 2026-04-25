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
        source: "/spiritual-and-symbolic",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/modern-interpretation",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/dream-archive",
        destination: "/dreams",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/sleep-tracker-kit",
        destination: "/guides",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;