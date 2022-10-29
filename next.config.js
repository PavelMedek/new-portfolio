/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["scontent.fprg5-1.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
