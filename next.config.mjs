/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  assetPrefix: "./", // This ensures assets are loaded correctly
  images: {
    unoptimized: true,
  },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, path: false };
  //   return config;
  // },
  // experimental: {
  //   // This will inline CSS in the JavaScript bundle
  //   // which might help with the missing CSS file issue
  //   cssModules: true,
  //   optimizeCss: true,
  // },
};

export default nextConfig;
