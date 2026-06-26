/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dreamscriptures.com",
          },
        ],
        destination: "https://www.dreamscriptures.com/:path*",
        permanent: true,
      },

      // 🔁 Legacy URL redirects
      {
        source: "/dream-dictionary",
        destination: "/dreams",
        permanent: true,
        
      },
      {
        source: "/blog/stages-of-sleep-&-dreaming",
        destination: "/stages-of-sleep-and-dreaming",
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
      },{
  source: "/dreams/missing-a-flight-or-bus",
  destination: "/dreams/missing-a-flight",
  permanent: true,
},
{
  source: "/dreams/being-pulled-into-a-mirror",
  destination: "/dreams/mirrors",
  permanent: true,
},
{
  source: "/blog/what-are-dreams",
  destination: "/guides/what-are-dreams",
  permanent: true,
},
      {
  source: "/blog/dream-rituals",
  destination: "/guides",
  permanent: true,
},
{
  source: "/blog/category/types-of-dreams",
  destination: "/guides",
  permanent: true,
},
{
  source: "/prophetic-dreams",
  destination: "/guides/prophetic-dreams-meaning",
  permanent: true,
},
{
  source: "/recurring-dreams",
  destination: "/guides/recurring-dreams",
  permanent: true,
},
{
  source: "/blog/biblical-dreams",
  destination: "/guides/spirituality",
  permanent: true,
},


    ];
  },
};

export default nextConfig;
