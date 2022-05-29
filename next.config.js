/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["nftstorage.link"],
  },
  rules: {
    "@next/next/no-img-element": "off",
  },
};

module.exports = nextConfig;
