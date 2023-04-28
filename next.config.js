/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

basePath = '/content'
// module.exports = nextConfig


module.exports = {
  async redirects() {
    return [
      {
        source: '/components/:slug',
        destination: '/home/:slug',
        permanent: true,
      },
    ]
  },
}