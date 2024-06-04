/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.rareblocks.xyz', pathname: '**' },
      {
        protocol: 'https',
        pathname: '**',
        hostname: 'kairaaexchange.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
