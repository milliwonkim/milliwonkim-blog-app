/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/milliwonkim-blog-app/' : './',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
