/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [1000],
    domains: ["cdn-images-1.medium.com"],
  },
};

module.exports = nextConfig;
