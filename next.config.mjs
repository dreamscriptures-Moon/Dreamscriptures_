import { guides } from "./app/data/guides.js";
import { clusters } from "./data/clusters.js";

const staticGuideSlugs = [
  "basics",
  "history-culture",
  "interpretation",
  "psychology",
  "research",
  "science",
  "spirituality",
  "types-of-dreams",
  "wellness",
];

const clusterGuideSlugs = Object.entries(clusters).map(([key, cluster]) =>
  (cluster.guide || `/guides/${key}`).split("/").filter(Boolean).at(-1)
);

const exactGuideRedirects = [...new Set([
  ...guides.map((guide) => guide.slug),
  ...clusterGuideSlugs,
  ...staticGuideSlugs,
])]
  .filter(Boolean)
  .map((slug) => ({
    source: `/blog/${slug}`,
    destination: `/guides/${slug}`,
    permanent: true,
  }));

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
        source: "/dreams/lucid-dreaming",
        destination: "/guides/lucid-dreaming",
        permanent: true,
      },
      {
        source: "/blog/stages-of-sleep-&-dreaming",
        destination: "/guides/stages-of-sleep-and-dreaming",
        permanent: true,
        
      },
      {
        source: "/dream/:slug",
        destination: "/dreams/:slug",
        permanent: true,
      },
      {
        source: "/category/:category/:slug",
        destination: "/dreams/:slug",
        permanent: true,
      },
      {
        source: "/categories/:category/:slug",
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
        source: "/guides/biblical-dreams",
        destination: "/guides/spirituality",
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
  source: "/dreams/seeing-a-snake",
  destination: "/dreams/snake",
  permanent: true,
},
{
  source: "/dreams/seeing-a-snake-in-your-bed",
  destination: "/dreams/sleeping-with-a-snake",
  permanent: true,
},
{
  source: "/dreams/seeing-water-in-a-dream",
  destination: "/dreams/water",
  permanent: true,
},
{
  source: "/dreams/seeing-a-different-reflection",
  destination: "/dreams/different-reflection-in-the-mirror",
  permanent: true,
},
{
  source: "/dreams/watching-a-mirror-break",
  destination: "/dreams/broken-mirror",
  permanent: true,
},
{
  source: "/dreams/walking-on-air",
  destination: "/dreams/flying",
  permanent: true,
},
{
  source: "/dreams/walking-in-the-sky",
  destination: "/dreams/flying",
  permanent: true,
},
{
  source: "/dreams/under-water-but-calm",
  destination: "/dreams/being-underwater-but-calm",
  permanent: true,
},
{
  source: "/dreams/throne",
  destination: "/dreams/seeing-god",
  permanent: true,
},
{
  source: "/dreams/failing-a-test",
  destination: "/dreams/failing-an-exam",
  permanent: true,
},
{
  source: "/dreams/endless-ocean",
  destination: "/dreams/ocean",
  permanent: true,
},
{
  source: "/dreams/dream-meaning-hair-falling-out",
  destination: "/dreams/hair-falling-out",
  permanent: true,
},
{
  source: "/dreams/discovering-new-rooms-in-house",
  destination: "/dreams/discovering-new-rooms-in-a-house",
  permanent: true,
},
{
  source: "/dreams/de-javu",
  destination: "/dreams/deja-vu",
  permanent: true,
},
{
  source: "/dreams/scroll-dream-spiritual-meaning",
  destination: "/dreams/reading-an-ancient-scroll",
  permanent: true,
},
{
  source: "/dreams/underwater-but-calm",
  destination: "/dreams/being-underwater-but-calm",
  permanent: true,
},
{
  source: "/dreams/marrying-your-ex",
  destination: "/dreams/marrying-an-ex",
  permanent: true,
},
{
  source: "/dreams/unable-to-speak",
  destination: "/dreams/being-unable-to-speak",
  permanent: true,
},
{
  source: "/dreams/someone-confessing-love",
  destination: "/dreams/someone-confessing-their-love-to-you",
  permanent: true,
},
{
  source: "/dreams/confessing-your-love",
  destination: "/dreams/confessing-your-love-to-someone",
  permanent: true,
},
{
  source: "/dreams/losing-important-items",
  destination: "/dreams/losing-something-important",
  permanent: true,
},
{
  source: "/blog/category/types-of-dreams",
  destination: "/guides/types-of-dreams",
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

      ...exactGuideRedirects,


    ];
  },
};

export default nextConfig;
