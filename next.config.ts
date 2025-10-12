import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds for demo purposes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for demo purposes
    ignoreBuildErrors: true,
  },
  experimental: {
    // Remove problematic outputFileTracingRoot
  },
};

export default nextConfig;
