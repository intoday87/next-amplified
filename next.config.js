/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
      {
        source: '/posts/:path*',
        destination: '/',
      },
    ],
}

module.exports = nextConfig
