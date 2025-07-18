import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
