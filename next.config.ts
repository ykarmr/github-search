import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@tailwindcss/postcss"],
  },

  output: "standalone",
};

export default nextConfig;
