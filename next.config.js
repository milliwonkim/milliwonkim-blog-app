// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const debug = process.env.NODE_ENV !== 'production'
const repository = 'milliwonkim-blog'

module.exports = {
  ...withBundleAnalyzer({
    staticPageGenerationTimeout: 300,
    images: {
      domains: [
        'www.notion.so',
        'notion.so',
        'images.unsplash.com',
        'pbs.twimg.com',
        'abs.twimg.com',
        's3.us-west-2.amazonaws.com',
        'transitivebullsh.it'
      ],
      formats: ['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
  }),
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : '', // production 일때 prefix 경로
  trailingSlash: true // 빌드 시 폴더 구조 그대로 생성하도록
}
