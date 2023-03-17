/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['nextjs-components'],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
