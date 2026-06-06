import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/endeservis-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
