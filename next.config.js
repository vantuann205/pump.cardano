/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    API_KEY: process.env.GEMINI_API_KEY,
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
};

module.exports = nextConfig;