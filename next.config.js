/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ],
  }
}

module.exports = nextConfig
