/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    //domains: ["localhost"],
	domains: ["inv.ptzsite.ru", "localhost"],
  },
}

module.exports = nextConfig
