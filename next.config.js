/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  reactStrictMode: false,
  //reactStrictMode: true,
  images: {
    loader: "default",
    //domains: ["localhost"],
    domains: ["inv.ptzsite.ru", "localhost"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async redirects() {
    return [
      {
        source: "/?action=contacts",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/?action=visual",
        destination: "/services/visual_ru",
        permanent: true,
      },
      {
        source: "/?action=animation",
        destination: "/services/motion_video_ru",
        permanent: true,
      },
      {
        source: "/?action=portfolio",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
});

/*const nextConfig = {

}

module.exports = nextConfig
*/
