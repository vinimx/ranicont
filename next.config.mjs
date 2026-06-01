/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-icons"],

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 428, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [48, 64, 84, 96, 112, 128, 156, 256],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
