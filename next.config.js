/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/doors/:path*',
        destination: '/door/:path*',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
