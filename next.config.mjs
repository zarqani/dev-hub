/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  assetPrefix: "/", // This ensures assets are loaded correctly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
