/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["card.godsunchained.com"],
  },
};

module.exports = nextConfig;
