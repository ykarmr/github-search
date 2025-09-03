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

  // 実験的機能の設定
  experimental: {
    optimizePackageImports: ["@tailwindcss/postcss"],
  },
};

export default nextConfig;
