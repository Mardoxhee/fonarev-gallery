/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-gallery.fona-vps.cloud',
      },
    ],
  },
};



module.exports = nextConfig;

