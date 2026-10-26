import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog covers may be a local file or an Unsplash image URL.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
