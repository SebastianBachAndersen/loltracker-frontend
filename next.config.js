/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ddragon.leagueoflegends.com", "raw.communitydragon.org"]
  }
};

module.exports = nextConfig;
