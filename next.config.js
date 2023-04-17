/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    //domains: ["localhost"],
	//domains: [process.env.NEXT_PUBLIC_STRAPI_API_URL],
	domains: ["https://inv.ptzsite.ru"],
  },
}

module.exports = nextConfig
