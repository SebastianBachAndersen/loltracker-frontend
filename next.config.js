/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ddragon.leagueoflegends.com"]
  },
  env: {
    BASE_API_URL: "http://127.0.0.1:8000/api/"
  }
};

module.exports = nextConfig;
