/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    //domains: ["localhost"],
	//domains: [process.env.NEXT_PUBLIC_STRAPI_API_URL || "localhost"],
	//path: process.env.NEXT_PUBLIC_STRAPI_API_URL,
	remotePatterns: [
		{
		  protocol: 'https',
		  hostname: process.env.NEXT_PUBLIC_STRAPI_API_URL,
		  port: '',
		  pathname: '/',
		},
	  ],
  },
}

module.exports = nextConfig
