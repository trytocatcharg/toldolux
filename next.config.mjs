/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // descomenta cuando definas el hosting estático
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
