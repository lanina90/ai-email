/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig
