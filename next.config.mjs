/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from Twitter's CDN domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'abs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'video.twimg.com',
      },
    ],
  },

  // Strict mode helps catch hydration issues early
  reactStrictMode: true,
};

export default nextConfig;
