/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.rareblocks.xyz", pathname: "**" },
      {
        protocol: "https",
        pathname: "**",
        hostname: "kairaaexchange.s3.amazonaws.com",
      },
      { protocol: "https", pathname: "**", hostname: "api.qrserver.com" },
      { protocol: "https", pathname: "**", hostname: "images.ctfassets.net" },
      
    ],
  },
};

export default nextConfig;
