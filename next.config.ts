import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像最適化の設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["@tailwindcss/postcss"],
  },

  output: "standalone",
};

export default nextConfig;
