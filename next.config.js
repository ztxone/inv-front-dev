/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    //domains: ["localhost"],
	domains: ["inv.ptzsite.ru"],
	//path: process.env.NEXT_PUBLIC_STRAPI_API_URL,

  },
}

module.exports = nextConfig
