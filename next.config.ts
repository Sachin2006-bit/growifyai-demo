import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds for demo purposes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for demo purposes
    ignoreBuildErrors: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
