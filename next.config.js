require("dotenv").config(); // Load environment variables

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
  },
};

module.exports = nextConfig;
