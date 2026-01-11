import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/landing-assets",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
